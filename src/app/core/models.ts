export type ApiRole = 'ADMIN' | 'DOCTOR' | 'NURSE' | 'FRONT_DESK' | 'PATIENT';
export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';

export interface User { id: string; email: string; firstName: string; lastName: string; role: ApiRole; isActive: boolean; createdAt?: string; }
export interface Patient { id: string; patientId: string; firstName: string; lastName: string; dateOfBirth: string; age?: number; lastCheckupDate?: string | null; sex?: string; mobileNumber?: string; emailAddress?: string; homeAddress?: string; bloodType?: string; philHealthInsuranceId?: string; bloodPressure?: string; heartRate?: number; respiratoryRate?: number; bodyTemperatureC?: number; oxygenSaturation?: number; weightKg?: number; heightCm?: number; allergies?: string; conditions?: string; notes?: string; [key: string]: unknown; }
export interface Appointment { id: string; patientId: string; doctorId: string; scheduledAt: string; date: string; time: string; visitType: string; purpose: string; durationMin: number; status: AppointmentStatus; notes?: string; patient: Patient; doctor: Pick<User, 'id'|'firstName'|'lastName'>; }
export interface Prescription { id: string; patientId: string; doctorId: string; medication: string; dosage: string; instructions: string; quantity: number; refills: number; status: string; notes?: string; issuedAt: string; patient: Pick<Patient, 'id'|'patientId'|'firstName'|'lastName'|'allergies'>; doctor: Pick<User, 'id'|'firstName'|'lastName'>; }
export interface Vaccine { id: string; patientId: string; vaccineName: string; dose: string; dateAdministered: string; manufacturer?: string; lotNumber?: string; administeredBy: string; status: string; patient: Pick<Patient, 'id'|'patientId'|'firstName'|'lastName'>; }
export interface MedicalCertificate { id: string; patientId?: string; patientName: string; doctorId: string; certificateDate: string; details: string; createdAt: string; updatedAt: string; patient?: Pick<Patient, 'id'|'patientId'|'firstName'|'lastName'>; doctor: Pick<User, 'id'|'firstName'|'lastName'>; }
export interface Dashboard { date: string; stats: { appointments: number; checkedIn: number; prescriptions: number; totalPatients: number }; schedule: Appointment[]; recentPatients: Patient[]; }
export interface Tokens { accessToken: string; refreshToken: string; }
export interface PatientAppointment extends Omit<Appointment, 'patient'> {}
export interface PatientPrescription extends Omit<Prescription, 'patient'> {}
export interface PatientRegistration {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex?: string;
  mobileNumber?: string;
  homeAddress?: string;
}
