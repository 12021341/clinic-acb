import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialDatePickerComponent } from './shared/material-date-picker.component';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import { ApiRole, Appointment, Dashboard, Patient, PatientAppointment, PatientPrescription, Prescription, User, Vaccine } from './core/models';

type View = 'Dashboard'|'Appointments'|'Patients'|'Prescriptions'|'Vaccinations'|'Users'|'Consultation'|'Medical Certificate';
type Modal = 'appointment'|'patient'|'prescription'|'vaccine'|'user'|'consultation'|'end-consultation'|'detail'|null;
type ConsultationNote = {
  assessmentDiagnosis: string;
  treatmentPlan: string;
  diagnosticOrders: string;
  referralsFollowUp: string;
};

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule, MatButtonModule, MatTooltipModule, MaterialDatePickerComponent], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent implements OnInit {
  protected readonly auth = inject(AuthService);
  private readonly api = inject(ApiService);
  protected readonly view = signal<View>('Dashboard');
  protected readonly modal = signal<Modal>(null);
  protected readonly loading = signal(false);
  protected readonly error = signal('');
  protected readonly notice = signal('');
  protected readonly showMobileNav = signal(false);
  protected readonly search = signal('');
  protected readonly dashboard = signal<Dashboard|null>(null);
  protected readonly appointments = signal<Appointment[]>([]);
  protected readonly patients = signal<Patient[]>([]);
  protected readonly prescriptions = signal<Prescription[]>([]);
  protected readonly vaccines = signal<Vaccine[]>([]);
  protected readonly users = signal<User[]>([]);
  protected readonly patientProfile = signal<Patient|null>(null);
  protected readonly patientAppointments = signal<PatientAppointment[]>([]);
  protected readonly patientPrescriptions = signal<PatientPrescription[]>([]);
  protected readonly consultationAppointment = signal<Appointment|null>(null);
  protected readonly consultationPatient = signal<Patient|null>(null);
  protected readonly consultationAppointments = signal<Appointment[]>([]);
  protected readonly consultationPrescriptions = signal<Prescription[]>([]);
  protected readonly consultationVaccines = signal<Vaccine[]>([]);
  protected readonly editingClinicalOverview = signal(false);
  protected readonly selected = signal<Appointment|Patient|Prescription|Vaccine|User|null>(null);
  protected readonly detailKind = signal<'appointment'|'patient'|'prescription'|'vaccine'|null>(null);
  protected loginForm = { email: '', password: '' };
  protected registerForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', dateOfBirth: '', sex: '', mobileNumber: '', homeAddress: '' };
  protected registerMode = false;
  protected appointmentForm: any = {};
  protected patientForm: any = {};
  protected prescriptionForm: any = {};
  protected prescriptionPatientSearch = '';
  protected additionalMedications: any[] = [];
  protected vaccineForm: any = {};
  protected vaccinePatientSearch = '';
  protected readonly vaccineSuggestions = [
    'Bacillus Calmette–Guérin Vaccine (BCG)',
    'Hepatitis B Vaccine (HepB)',
    'Diphtheria Vaccine',
    'Tetanus Vaccine',
    'Pertussis (Whooping Cough) Vaccine',
    'Haemophilus influenzae type b Vaccine (Hib)',
    'Oral Polio Vaccine (OPV)',
    'Inactivated Polio Vaccine (IPV)',
    'Pneumococcal Conjugate Vaccine (PCV)',
    'Rotavirus Vaccine',
    'Measles Vaccine',
    'Mumps Vaccine',
    'Rubella Vaccine',
    'Japanese Encephalitis Vaccine (JE)',
    'Influenza (Flu) Vaccine',
    'Varicella (Chickenpox) Vaccine',
    'Hepatitis A Vaccine (HepA)',
    'Typhoid Vaccine',
    'Meningococcal Vaccine (ACWY and B strains)',
    'Human Papillomavirus Vaccine (HPV)',
  ];
  protected userForm: any = {};
  protected medicalCertificateForm = {
    patientId: '',
    date: new Date().toISOString().slice(0, 10),
    details: '',
  };
  protected certificatePatientSearch = '';
  protected readonly certificateSuggestionsOpen = signal(false);
  protected clinicalOverviewForm = { allergies: '', conditions: '' };
  protected consultationNoteForm: ConsultationNote = { assessmentDiagnosis: '', treatmentPlan: '', diagnosticOrders: '', referralsFollowUp: '' };

  protected readonly visiblePatients = computed(() => this.filter(this.patients(), p => `${p.firstName} ${p.lastName} ${p.patientId} ${p.conditions ?? ''}`));
  protected readonly visibleAppointments = computed(() => this.filter(this.appointments(), a => `${a.patient.firstName} ${a.patient.lastName} ${a.purpose} ${a.status}`));
  protected readonly visiblePrescriptions = computed(() => this.filter(this.prescriptions(), p => `${p.patient.firstName} ${p.patient.lastName} ${p.medication} ${p.status}`));
  protected readonly visibleVaccines = computed(() => this.filter(this.vaccines(), v => `${v.patient.firstName} ${v.patient.lastName} ${v.vaccineName} ${v.status}`));
  protected readonly visibleUsers = computed(() => this.filter(this.users(), u => `${u.firstName} ${u.lastName} ${u.email} ${u.role}`));
  protected readonly certificatePatientSuggestions = computed(() => {
    const query = this.certificatePatientSearch.trim().toLowerCase();
    return this.patients().filter(patient => !query || `${this.fullName(patient)} ${patient.patientId}`.toLowerCase().includes(query)).slice(0, 8);
  });

  ngOnInit(): void { if (this.auth.authenticated()) this.bootstrap(); }
  protected submitAuth(): void {
    this.error.set(''); this.notice.set('');
    if (this.registerMode && this.registerForm.password !== this.registerForm.confirmPassword) {
      this.error.set('Passwords do not match.');
      return;
    }
    this.loading.set(true);
    if (this.registerMode) {
      const { confirmPassword, ...account } = this.registerForm;
      this.auth.registerPatient(account).subscribe({
        next: () => {
          this.auth.clear();
          this.loginForm.email = account.email;
          this.registerForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', dateOfBirth: '', sex: '', mobileNumber: '', homeAddress: '' };
          this.registerMode = false;
          this.notice.set('Account created successfully. You can now sign in.');
        },
        error: e => this.fail(e),
        complete: () => this.loading.set(false)
      });
      return;
    }
    this.auth.login(this.loginForm.email, this.loginForm.password).subscribe({ next: () => this.bootstrap(), error: e => this.fail(e), complete: () => this.loading.set(false) });
  }
  protected bootstrap(): void {
    this.loading.set(true);
    this.auth.loadProfile().subscribe({ next: () => { if (this.auth.role() === 'PATIENT') { this.loadPatientPortal(); return; } this.loading.set(false); this.openView('Dashboard'); }, error: e => this.fail(e) });
  }
  private loadPatientPortal(): void {
    forkJoin({ profile: this.api.myPatientProfile(), appointments: this.api.myAppointments(), prescriptions: this.api.myPrescriptions() }).subscribe({
      next: data => { this.patientProfile.set(data.profile); this.patientAppointments.set(data.appointments); this.patientPrescriptions.set(data.prescriptions); },
      error: e => this.fail(e),
      complete: () => this.loading.set(false)
    });
  }
  protected logout(): void { this.auth.logout().subscribe({ next: () => { this.resetData(); this.view.set('Dashboard'); }, error: () => { this.auth.clear(); this.resetData(); } }); }
  protected openView(view: View): void { this.view.set(view); this.showMobileNav.set(false); this.load(view); }
  protected load(view: View): void {
    if (this.auth.role() === 'PATIENT') return;
    if (view === 'Consultation') return;
    if (view === 'Medical Certificate') { this.error.set(''); this.ensurePatients(); return; }
    this.error.set(''); this.loading.set(true);
    const request: Observable<any> = view === 'Dashboard' ? this.api.dashboard() : view === 'Appointments' ? this.api.appointments() : view === 'Patients' ? this.api.patients() : view === 'Prescriptions' ? this.api.prescriptions() : view === 'Vaccinations' ? this.api.vaccines() : this.api.users();
    request.subscribe({ next: data => { if (view === 'Dashboard') { const d = data as Dashboard; this.dashboard.set(d); this.appointments.set(d.schedule); } else if (view === 'Appointments') this.appointments.set(data as Appointment[]); else if (view === 'Patients') this.patients.set(data as Patient[]); else if (view === 'Prescriptions') this.prescriptions.set(data as Prescription[]); else if (view === 'Vaccinations') this.vaccines.set(data as Vaccine[]); else this.users.set(data as User[]); }, error: e => this.fail(e), complete: () => this.loading.set(false) });
  }
  protected startConsultation(appointment: Appointment): void {
    if (this.auth.role() !== 'DOCTOR') return;
    this.error.set(''); this.loading.set(true); this.consultationAppointment.set(appointment); this.view.set('Consultation');
    forkJoin({
      patient: this.api.patient(appointment.patientId),
      appointments: this.api.appointments({ patientId: appointment.patientId }),
      prescriptions: this.api.prescriptions({ patientId: appointment.patientId }),
      vaccines: this.api.vaccines(appointment.patientId),
    }).subscribe({
      next: data => { this.consultationPatient.set(data.patient); this.consultationAppointments.set(data.appointments); this.consultationPrescriptions.set(data.prescriptions); this.consultationVaccines.set(data.vaccines); },
      error: e => { this.view.set('Dashboard'); this.fail(e); },
      complete: () => this.loading.set(false),
    });
  }
  protected addConsultationPrescription(): void {
    const patient = this.consultationPatient();
    if (!patient) return;
    this.error.set(''); this.selected.set(null); this.additionalMedications = [];
    this.prescriptionPatientSearch = this.fullName(patient);
    this.prescriptionForm = { patientId:patient.id, medication:'', dosage:'', instructions:'', quantity:1, refills:0, notes:'' };
    this.modal.set('prescription');
  }
  protected addConsultationVaccine(): void {
    const patient = this.consultationPatient();
    if (!patient) return;
    this.error.set(''); this.selected.set(null);
    this.vaccinePatientSearch = this.fullName(patient);
    this.vaccineForm = {
      patientId: patient.id,
      vaccineName: '',
      dose: '',
      dateAdministered: new Date().toISOString().slice(0,10),
      manufacturer: '',
      lotNumber: '',
      administeredBy: this.fullName(this.auth.currentUser()),
      status: 'COMPLETED'
    };
    this.modal.set('vaccine');
  }
  protected openConsultationNote(): void {
    const appointment = this.consultationAppointment();
    if (!appointment) return;
    this.error.set('');
    this.consultationNoteForm = this.readConsultationNote(appointment.notes);
    this.modal.set('consultation');
  }
  protected saveConsultationNote(): void {
    const appointment = this.consultationAppointment();
    if (!appointment) return;
    this.error.set('');
    this.loading.set(true);
    const notes = this.serializeConsultationNote(this.consultationNoteForm);
    this.api.updateAppointment(appointment.id, { notes }).subscribe({
      next: updated => {
        this.consultationAppointment.set(updated);
        this.consultationAppointments.set(this.consultationAppointments().map(item => item.id === updated.id ? updated : item));
        this.modal.set(null);
        this.notice.set('Consultation note saved successfully.');
      },
      error: e => this.fail(e),
      complete: () => this.loading.set(false),
    });
  }
  protected endConsultation(): void {
    if (!this.consultationAppointment()) return;
    this.error.set('');
    this.modal.set('end-consultation');
  }
  protected confirmEndConsultation(): void {
    const appointment = this.consultationAppointment();
    if (!appointment) return;
    this.error.set('');
    this.loading.set(true);
    this.api.updateAppointment(appointment.id, { status: 'COMPLETED' }).subscribe({
      next: updated => {
        this.consultationAppointment.set(updated);
        this.consultationAppointments.set(this.consultationAppointments().map(item => item.id === updated.id ? updated : item));
        this.appointments.set(this.appointments().map(item => item.id === updated.id ? updated : item));
        this.modal.set(null);
        this.notice.set('Consultation ended successfully.');
        this.openView('Dashboard');
      },
      error: e => this.fail(e),
      complete: () => this.loading.set(false),
    });
  }
  protected syncAppointmentPatient(patientId: string): void {
    this.appointmentForm.patientId = patientId;
    const patient = this.patients().find(p => p.id === patientId);
    if (!patient) return;
    Object.assign(this.appointmentForm, this.patientVitalsForm(patient));
  }
  protected editClinicalOverview(): void {
    const patient = this.consultationPatient();
    if (!patient) return;
    this.clinicalOverviewForm = { allergies:patient.allergies ?? '', conditions:patient.conditions ?? '' };
    this.editingClinicalOverview.set(true);
  }
  protected saveClinicalOverview(): void {
    const patient = this.consultationPatient();
    if (!patient) return;
    this.error.set(''); this.loading.set(true);
    this.api.updatePatient(patient.id, { allergies:this.clinicalOverviewForm.allergies.trim(), conditions:this.clinicalOverviewForm.conditions.trim() }).subscribe({
      next: updated => { this.consultationPatient.set(updated); this.editingClinicalOverview.set(false); this.notice.set('Clinical information updated successfully.'); },
      error: e => this.fail(e),
      complete: () => this.loading.set(false),
    });
  }
  protected navItems(): { label: View; icon: string }[] { const role = this.auth.role(); if (role === 'PATIENT') return []; const items: {label: View; icon: string}[] = [{label:'Dashboard',icon:'⌂'},{label:'Appointments',icon:'▣'},{label:'Patients',icon:'♧'}]; if (role !== 'FRONT_DESK') items.push({label:'Prescriptions',icon:'Rx'}); items.push({label:'Vaccinations',icon:'✚'}); if (role === 'DOCTOR') items.push({label:'Medical Certificate',icon:'MC'}); if (role === 'ADMIN') items.push({label:'Users',icon:'♙'}); return items; }
  protected canCreate(view: View): boolean { const role = this.auth.role(); if (view === 'Appointments') return role === 'ADMIN' || role === 'FRONT_DESK' || role === 'DOCTOR'; if (view === 'Patients') return role === 'ADMIN' || role === 'FRONT_DESK'; if (view === 'Prescriptions' || view === 'Vaccinations') return role === 'ADMIN' || role === 'DOCTOR' || role === 'NURSE'; return view === 'Users' && role === 'ADMIN'; }
  protected openCreate(kind: Exclude<Modal,'detail'|null>): void {
    this.error.set(''); this.selected.set(null); this.modal.set(kind); const today = new Date().toISOString().slice(0,10);
    if (kind === 'appointment') { this.appointmentForm = { patientId:'', assignedDoctorId:'', date:today, time:'09:00', visitType:'Returning', purpose:'', status:'PENDING', bloodPressure:'', heartRate:'', respiratoryRate:'', bodyTemperatureC:'', oxygenSaturation:'', weightKg:'', heightCm:'' }; this.loadReferences(); }
    if (kind === 'patient') this.patientForm = { firstName:'', lastName:'', dateOfBirth:'', sex:'', mobileNumber:'', emailAddress:'', allergies:'', conditions:'' };
    if (kind === 'prescription') { this.prescriptionPatientSearch = ''; this.additionalMedications = []; this.prescriptionForm = { patientId:'', medication:'', dosage:'', instructions:'', quantity:1, refills:0, notes:'' }; this.ensurePatients(); }
    if (kind === 'vaccine') { this.vaccinePatientSearch = ''; this.vaccineForm = { patientId:'', vaccineName:'', dose:'', dateAdministered:today, manufacturer:'', lotNumber:'', administeredBy:this.fullName(this.auth.currentUser()), status:'COMPLETED' }; this.ensurePatients(); }
    if (kind === 'user') this.userForm = { firstName:'', lastName:'', email:'', password:'', confirmPassword:'', role:'DOCTOR' };
  }
  protected edit(item: any, kind: Exclude<Modal,'detail'|null>): void { this.error.set(''); this.selected.set(item); this.modal.set(kind); if (kind === 'appointment') this.appointmentForm = { patientId:item.patientId, assignedDoctorId:item.doctorId, date:item.date.slice(0,10), time:item.time, visitType:item.visitType, purpose:item.purpose, durationMin:item.durationMin, status:item.status, notes:item.notes ?? '', ...this.patientVitalsForm(item.patient) }; if (kind === 'patient') this.patientForm = {...item, dateOfBirth:item.dateOfBirth.slice(0,10)}; if (kind === 'prescription') { this.additionalMedications = []; this.prescriptionPatientSearch = this.fullName(item.patient); this.prescriptionForm = { patientId:item.patientId, medication:item.medication, dosage:item.dosage, instructions:item.instructions, quantity:item.quantity, refills:item.refills, notes:item.notes ?? '', status:item.status }; } if (kind === 'user') this.userForm = { firstName:item.firstName, lastName:item.lastName, email:item.email, role:item.role, isActive:item.isActive }; this.loadReferences(); }
  protected save(kind: Exclude<Modal,'detail'|null>): void {
    this.error.set(''); const item: any = this.selected(); let call: any;
    if (kind === 'user' && !item && this.userForm.password !== this.userForm.confirmPassword) { this.error.set('Passwords do not match.'); return; }
    if (kind === 'prescription' && !this.prescriptionForm.patientId) { this.error.set('Select a patient from the suggestions.'); return; }
    if (kind === 'vaccine' && !this.vaccineForm.patientId) { this.error.set('Select a patient from the suggestions.'); return; }
    this.loading.set(true);
    if (kind === 'appointment') {
      const body = this.clean(this.appointmentForm);
      const patientId = this.appointmentForm.patientId;
      const vitals = this.clean(this.patientVitalsPayload(this.appointmentForm));
      ['heartRate','respiratoryRate','oxygenSaturation','bodyTemperatureC','weightKg','heightCm'].forEach(k => { if (vitals[k] !== undefined) vitals[k] = Number(vitals[k]); });
      ['bloodPressure','heartRate','respiratoryRate','bodyTemperatureC','oxygenSaturation','weightKg','heightCm'].forEach(k => delete body[k]);
      if (!item) delete body.status;
      const appointmentCall = item ? this.api.updateAppointment(item.id, body) : this.api.createAppointment(body);
      call = Object.keys(vitals).length
        ? appointmentCall.pipe(switchMap(result => this.api.updatePatient(patientId, vitals).pipe(map(() => result))))
        : appointmentCall;
    }
    if (kind === 'patient') { const body = this.clean({...this.patientForm}); ['age','fatherAge','motherAge'].forEach(k => { if (body[k] !== undefined) body[k] = Number(body[k]); }); if (!item && !body.patientId) body.patientId = `PT-${crypto.randomUUID().replace(/-/g,'').slice(0,8).toUpperCase()}`; call = item ? this.api.updatePatient(item.id, body) : this.api.createPatient(body); }
    if (kind === 'prescription') { const body = this.clean({...this.prescriptionForm, quantity:Number(this.prescriptionForm.quantity), refills:Number(this.prescriptionForm.refills)}); if (item) call = this.api.updatePrescription(item.id, body); else { const medication = (value:any) => this.clean({ medication:value.medication, dosage:value.dosage, instructions:value.instructions, quantity:Number(value.quantity), refills:Number(value.refills), notes:value.notes }); call = this.api.createPrescriptionBatch({ patientId:this.prescriptionForm.patientId, medications:[medication(this.prescriptionForm), ...this.additionalMedications.map(m => medication(m))] }); } }
    if (kind === 'vaccine') call = this.api.createVaccine(this.clean(this.vaccineForm));
    if (kind === 'user') {
      const body = item
        ? { firstName:this.userForm.firstName, lastName:this.userForm.lastName, email:this.userForm.email, role:this.userForm.role, isActive:this.userForm.isActive }
        : { firstName:this.userForm.firstName, lastName:this.userForm.lastName, email:this.userForm.email, role:this.userForm.role, password:this.userForm.password };
      call = item ? this.api.updateUser(item.id, body) : this.api.createUser(body);
    }
    call.subscribe({ next: () => { this.modal.set(null); this.notice.set(kind === 'user' ? (item ? 'User updated successfully.' : 'User account created successfully.') : kind === 'prescription' && !item && this.additionalMedications.length ? `${this.additionalMedications.length + 1} prescriptions saved successfully.` : 'Saved successfully.'); if (this.view()==='Consultation' && this.consultationPatient()) { if (kind==='prescription') this.api.prescriptions({ patientId:this.consultationPatient()!.id }).subscribe(v => this.consultationPrescriptions.set(v)); else if (kind==='vaccine') this.api.vaccines(this.consultationPatient()!.id).subscribe(v => this.consultationVaccines.set(v)); else this.load(this.view()); } else this.load(this.view()); }, error: (e: unknown) => this.fail(e), complete: () => this.loading.set(false) });
  }
  protected viewDetail(kind: 'appointment'|'patient'|'prescription'|'vaccine', id: string): void { const call: Observable<any> = kind === 'appointment' ? this.api.appointment(id) : kind === 'patient' ? this.api.patient(id) : kind === 'prescription' ? this.api.prescription(id) : this.api.vaccine(id); call.subscribe({ next: item => { this.detailKind.set(kind); this.selected.set(item); this.modal.set('detail'); }, error: e => this.fail(e) }); }
  protected remove(item: any, kind: 'appointment'|'patient'|'user'): void { const message = kind === 'appointment' ? 'Cancel this appointment?' : kind === 'user' ? 'Deactivate this user?' : 'Permanently delete this patient and related records?'; if (!confirm(message)) return; const call: Observable<any> = kind === 'appointment' ? this.api.cancelAppointment(item.id) : kind === 'patient' ? this.api.deletePatient(item.id) : this.api.deactivateUser(item.id); call.subscribe({ next: () => { this.notice.set(kind === 'appointment' ? 'Appointment cancelled.' : kind === 'user' ? 'User deactivated.' : 'Patient deleted.'); this.load(this.view()); }, error: e => this.fail(e) }); }
  protected status(item: Appointment, status: Appointment['status']): void { this.api.updateAppointment(item.id, { status }).subscribe({ next: () => this.load('Appointments'), error: e => this.fail(e) }); }
  protected print(): void { window.print(); }
  protected fullName(person: any): string { return person ? `${person.firstName} ${person.lastName}` : ''; }
  protected initials(person: any): string { return person ? `${person.firstName?.[0] ?? ''}${person.lastName?.[0] ?? ''}`.toUpperCase() : '?'; }
  protected roleLabel(role: ApiRole|null): string { return ({ADMIN:'Administrator',DOCTOR:'Doctor',NURSE:'Nurse',FRONT_DESK:'Secretary',PATIENT:'Patient'} as any)[role ?? ''] ?? ''; }
  protected detailTitle(): string { return ({appointment:'Appointment details',prescription:'Prescription details',vaccine:'Vaccination details'} as Record<string,string>)[this.detailKind() ?? ''] ?? 'Record details'; }
  protected detailIcon(): string { return ({appointment:'▣',prescription:'Rx',vaccine:'✚'} as Record<string,string>)[this.detailKind() ?? ''] ?? '•'; }
  protected fieldLabel(value: string): string { return value.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()); }
  protected resolvePrescriptionPatient(value: string): void { this.prescriptionPatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(p => this.fullName(p).toLowerCase() === normalized); this.prescriptionForm.patientId = patient?.id ?? ''; }
  protected resolveVaccinePatient(value: string): void { this.vaccinePatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(p => this.fullName(p).toLowerCase() === normalized); this.vaccineForm.patientId = patient?.id ?? ''; }
  protected selectedVaccinePatient(): Patient | undefined { return this.patients().find(patient => patient.id === this.vaccineForm.patientId); }
  protected certificatePatient(): Patient | undefined { return this.patients().find(patient => patient.id === this.medicalCertificateForm.patientId); }
  protected resolveCertificatePatient(value: string): void { this.certificatePatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(item => this.fullName(item).toLowerCase() === normalized || item.patientId.toLowerCase() === normalized); this.medicalCertificateForm.patientId = patient?.id ?? ''; this.certificateSuggestionsOpen.set(true); }
  protected selectCertificatePatient(patient: Patient): void { this.certificatePatientSearch = this.fullName(patient); this.medicalCertificateForm.patientId = patient.id; this.certificateSuggestionsOpen.set(false); }
  protected certificateDisplayName(): string { return this.certificatePatient() ? this.fullName(this.certificatePatient()) : this.certificatePatientSearch.trim(); }
  protected canSaveMedicalCertificate(): boolean {
    return Boolean(this.certificateDisplayName() && this.medicalCertificateForm.date && this.medicalCertificateForm.details.trim() && !this.loading());
  }
  protected saveMedicalCertificate(): void {
    const patientName = this.certificateDisplayName();
    const details = this.medicalCertificateForm.details.trim();
    if (!patientName || !this.medicalCertificateForm.date || !details) {
      this.error.set('Enter a patient name, date, and certificate details before saving.');
      return;
    }
    this.error.set('');
    this.notice.set('');
    this.loading.set(true);
    this.api.createMedicalCertificate({
      ...(this.medicalCertificateForm.patientId && { patientId: this.medicalCertificateForm.patientId }),
      patientName,
      certificateDate: this.medicalCertificateForm.date,
      details,
    }).subscribe({
      next: () => this.notice.set('Medical certificate saved successfully.'),
      error: e => this.fail(e),
      complete: () => this.loading.set(false),
    });
  }
  protected printMedicalCertificate(): void { if (!this.certificatePatientSearch.trim() || !this.medicalCertificateForm.details.trim()) { this.error.set('Enter a patient name and the certificate details before printing.'); return; } document.body.classList.add('printing-medical-certificate'); window.addEventListener('afterprint', () => document.body.classList.remove('printing-medical-certificate'), { once:true }); window.print(); }
  protected selectedPrescriptionPatient(): Patient | undefined { return this.patients().find(p => p.id === this.prescriptionForm.patientId); }
  protected addMedication(): void { this.additionalMedications.push({ medication:'', dosage:'', instructions:'', quantity:1, refills:0, notes:'' }); }
  protected removeMedication(index: number): void { this.additionalMedications.splice(index, 1); }
  protected age(patient: Patient): number { return patient.age ?? Math.max(0, new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()); }
  protected ageWithMonths(patient: Patient): string {
    const birthDate = new Date(patient.dateOfBirth);
    if (Number.isNaN(birthDate.getTime())) return 'Not recorded';
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) months--;
    if (months < 0) { years--; months += 12; }
    if (years < 0) return 'Not recorded';
    return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}`;
  }
  protected bmi(patient: Patient): string {
    const weight = Number(patient.weightKg);
    const heightCm = Number(patient.heightCm);
    if (!weight || !heightCm) return 'Not recorded';
    const heightM = heightCm / 100;
    if (!heightM) return 'Not recorded';
    return (weight / (heightM * heightM)).toFixed(1);
  }
  protected vitalDisplay(value: string | number | null | undefined, unit = ''): string {
    if (value === null || value === undefined || value === '') return 'Not recorded';
    return `${value}${unit}`;
  }
  protected consultationNote(appointment: Appointment | null): ConsultationNote | null {
    if (!appointment?.notes) return null;
    const note = this.readConsultationNote(appointment.notes);
    return Object.values(note).some(value => value.trim()) ? note : null;
  }
  protected doctors(): User[] { return this.users().filter(u => u.role === 'DOCTOR' && u.isActive); }
  protected objectEntries(item: any): [string, unknown][] { return Object.entries(item ?? {}).filter(([key,value]) => !['id','patientId','doctorId','userId','patient','doctor','issuedAt','createdAt','updatedAt'].includes(key) && value != null && value !== ''); }
  private ensurePatients(): void { if (!this.patients().length) this.api.patients().subscribe(v => this.patients.set(v)); }
  protected get ensureReferences(): boolean { return true; }
  private loadReferences(): void { this.ensurePatients(); if (this.auth.role() === 'ADMIN' && this.users().length) return; this.api.activeDoctors().subscribe({ next: doctors => this.users.set(doctors), error: e => this.fail(e) }); }
  private patientVitalsForm(patient: Partial<Patient> | null | undefined): Record<string, string | number> {
    return {
      bloodPressure: patient?.bloodPressure ?? '',
      heartRate: patient?.heartRate ?? '',
      respiratoryRate: patient?.respiratoryRate ?? '',
      bodyTemperatureC: patient?.bodyTemperatureC ?? '',
      oxygenSaturation: patient?.oxygenSaturation ?? '',
      weightKg: patient?.weightKg ?? '',
      heightCm: patient?.heightCm ?? '',
    };
  }
  private readConsultationNote(value: string | undefined): ConsultationNote {
    const fallback: ConsultationNote = { assessmentDiagnosis: '', treatmentPlan: '', diagnosticOrders: '', referralsFollowUp: '' };
    if (!value?.startsWith('CONSULTATION_NOTE::')) return fallback;
    try {
      return { ...fallback, ...(JSON.parse(value.slice('CONSULTATION_NOTE::'.length)) as Partial<ConsultationNote>) };
    } catch {
      return fallback;
    }
  }
  private serializeConsultationNote(value: ConsultationNote): string {
    return `CONSULTATION_NOTE::${JSON.stringify({
      assessmentDiagnosis: value.assessmentDiagnosis.trim(),
      treatmentPlan: value.treatmentPlan.trim(),
      diagnosticOrders: value.diagnosticOrders.trim(),
      referralsFollowUp: value.referralsFollowUp.trim(),
    })}`;
  }
  private patientVitalsPayload(source: Record<string, unknown>): Record<string, unknown> {
    return {
      bloodPressure: source['bloodPressure'],
      heartRate: source['heartRate'],
      respiratoryRate: source['respiratoryRate'],
      bodyTemperatureC: source['bodyTemperatureC'],
      oxygenSaturation: source['oxygenSaturation'],
      weightKg: source['weightKg'],
      heightCm: source['heightCm'],
    };
  }
  private filter<T>(items: T[], text: (item:T)=>string): T[] { const q = this.search().trim().toLowerCase(); return q ? items.filter(i => text(i).toLowerCase().includes(q)) : items; }
  private clean(value: any): any { return Object.fromEntries(Object.entries(value).filter(([,v]) => v !== '' && v !== null && v !== undefined)); }
  private fail(error: any): void { this.loading.set(false); this.error.set(error?.error?.message instanceof Array ? error.error.message.join(', ') : error?.error?.message ?? error?.message ?? 'Unable to contact the ACB Clinic API. Is the backend running on port 3000?'); }
  private resetData(): void { this.dashboard.set(null); this.appointments.set([]); this.patients.set([]); this.prescriptions.set([]); this.vaccines.set([]); this.users.set([]); this.patientProfile.set(null); this.patientAppointments.set([]); this.patientPrescriptions.set([]); this.consultationAppointment.set(null); this.consultationPatient.set(null); this.consultationAppointments.set([]); this.consultationPrescriptions.set([]); this.consultationVaccines.set([]); this.editingClinicalOverview.set(false); }
}
