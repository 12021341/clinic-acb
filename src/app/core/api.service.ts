import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Appointment, Dashboard, Patient, PatientAppointment, PatientPrescription, Prescription, User, Vaccine } from './models';

const API = 'http://localhost:3000/api/v1';
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  dashboard() { return this.http.get<Dashboard>(`${API}/dashboard`); }
  appointments(filters: { doctorId?: string; patientId?: string } = {}) { return this.http.get<Appointment[]>(`${API}/appointments`, { params: this.params(filters) }); }
  appointment(id: string) { return this.http.get<Appointment>(`${API}/appointments/${id}`); }
  createAppointment(body: object) { return this.http.post<Appointment>(`${API}/appointments`, body); }
  updateAppointment(id: string, body: object) { return this.http.patch<Appointment>(`${API}/appointments/${id}`, body); }
  cancelAppointment(id: string) { return this.http.delete<Appointment>(`${API}/appointments/${id}`); }
  patients() { return this.http.get<Patient[]>(`${API}/patients`); }
  patient(id: string) { return this.http.get<Patient>(`${API}/patients/${id}`); }
  createPatient(body: object) { return this.http.post<Patient>(`${API}/patients`, body); }
  updatePatient(id: string, body: object) { return this.http.patch<Patient>(`${API}/patients/${id}`, body); }
  deletePatient(id: string) { return this.http.delete<Patient>(`${API}/patients/${id}`); }
  myPatientProfile() { return this.http.get<Patient>(`${API}/patients/me`); }
  myAppointments() { return this.http.get<PatientAppointment[]>(`${API}/patients/me/appointments`); }
  myPrescriptions() { return this.http.get<PatientPrescription[]>(`${API}/patients/me/prescriptions`); }
  prescriptions(filters: { patientId?: string; doctorId?: string } = {}) { return this.http.get<Prescription[]>(`${API}/prescriptions`, { params: this.params(filters) }); }
  prescription(id: string) { return this.http.get<Prescription>(`${API}/prescriptions/${id}`); }
  createPrescription(body: object) { return this.http.post<Prescription>(`${API}/prescriptions`, body); }
  createPrescriptionBatch(body: object) { return this.http.post<Prescription[]>(`${API}/prescriptions/batch`, body); }
  updatePrescription(id: string, body: object) { return this.http.patch<Prescription>(`${API}/prescriptions/${id}`, body); }
  users() { return this.http.get<User[]>(`${API}/users`); }
  activeDoctors() { return this.http.get<User[]>(`${API}/users/doctors`); }
  createUser(body: object) { return this.http.post<User>(`${API}/users`, body); }
  updateUser(id: string, body: object) { return this.http.patch<User>(`${API}/users/${id}`, body); }
  deactivateUser(id: string) { return this.http.delete<User>(`${API}/users/${id}`); }
  vaccines(patientId?: string) { return this.http.get<Vaccine[]>(`${API}/vaccines`, { params: patientId ? { patientId } : {} }); }
  vaccine(id: string) { return this.http.get<Vaccine>(`${API}/vaccines/${id}`); }
  createVaccine(body: object) { return this.http.post<Vaccine>(`${API}/vaccines`, body); }
  private params(filters: Record<string, string | undefined>): HttpParams { let params = new HttpParams(); Object.entries(filters).forEach(([key, value]) => { if (value) params = params.set(key, value); }); return params; }
}
