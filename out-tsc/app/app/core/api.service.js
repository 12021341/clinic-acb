import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import * as i0 from "@angular/core";
const API = 'http://localhost:3000/api/v1';
export class ApiService {
    constructor() {
        this.http = inject(HttpClient);
    }
    dashboard() { return this.http.get(`${API}/dashboard`); }
    appointments(filters = {}) { return this.http.get(`${API}/appointments`, { params: this.params(filters) }); }
    appointment(id) { return this.http.get(`${API}/appointments/${id}`); }
    createAppointment(body) { return this.http.post(`${API}/appointments`, body); }
    updateAppointment(id, body) { return this.http.patch(`${API}/appointments/${id}`, body); }
    cancelAppointment(id) { return this.http.delete(`${API}/appointments/${id}`); }
    patients() { return this.http.get(`${API}/patients`); }
    patient(id) { return this.http.get(`${API}/patients/${id}`); }
    createPatient(body) { return this.http.post(`${API}/patients`, body); }
    updatePatient(id, body) { return this.http.patch(`${API}/patients/${id}`, body); }
    deletePatient(id) { return this.http.delete(`${API}/patients/${id}`); }
    myPatientProfile() { return this.http.get(`${API}/patients/me`); }
    myAppointments() { return this.http.get(`${API}/patients/me/appointments`); }
    myPrescriptions() { return this.http.get(`${API}/patients/me/prescriptions`); }
    prescriptions(filters = {}) { return this.http.get(`${API}/prescriptions`, { params: this.params(filters) }); }
    prescription(id) { return this.http.get(`${API}/prescriptions/${id}`); }
    createPrescription(body) { return this.http.post(`${API}/prescriptions`, body); }
    createPrescriptionBatch(body) { return this.http.post(`${API}/prescriptions/batch`, body); }
    updatePrescription(id, body) { return this.http.patch(`${API}/prescriptions/${id}`, body); }
    users() { return this.http.get(`${API}/users`); }
    activeDoctors() { return this.http.get(`${API}/users/doctors`); }
    createUser(body) { return this.http.post(`${API}/users`, body); }
    updateUser(id, body) { return this.http.patch(`${API}/users/${id}`, body); }
    deactivateUser(id) { return this.http.delete(`${API}/users/${id}`); }
    vaccines(patientId) { return this.http.get(`${API}/vaccines`, { params: patientId ? { patientId } : {} }); }
    vaccine(id) { return this.http.get(`${API}/vaccines/${id}`); }
    createVaccine(body) { return this.http.post(`${API}/vaccines`, body); }
    params(filters) { let params = new HttpParams(); Object.entries(filters).forEach(([key, value]) => { if (value)
        params = params.set(key, value); }); return params; }
    static { this.ɵfac = function ApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=api.service.js.map