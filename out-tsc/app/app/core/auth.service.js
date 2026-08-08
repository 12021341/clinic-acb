import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
export const SKIP_AUTH = new HttpContextToken(() => false);
const API = 'http://localhost:3000/api/v1';
export class AuthService {
    constructor() {
        this.http = inject(HttpClient);
        this.accessToken = signal(sessionStorage.getItem('careflow.accessToken'), ...(ngDevMode ? [{ debugName: "accessToken" }] : []));
        this.refreshToken = signal(sessionStorage.getItem('careflow.refreshToken'), ...(ngDevMode ? [{ debugName: "refreshToken" }] : []));
        this.currentUser = signal(null, ...(ngDevMode ? [{ debugName: "currentUser" }] : []));
        this.authenticated = computed(() => !!this.accessToken(), ...(ngDevMode ? [{ debugName: "authenticated" }] : []));
    }
    login(email, password) {
        return this.http.post(`${API}/auth/login`, { email, password }, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
    }
    register(body) {
        return this.http.post(`${API}/auth/register`, body, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
    }
    registerPatient(body) {
        return this.http.post(`${API}/auth/register/patient`, body, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
    }
    refresh() {
        return this.http.post(`${API}/auth/refresh`, { userId: this.userId(), refreshToken: this.refreshToken() }, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
    }
    loadProfile() { return this.http.get(`${API}/users/me`).pipe(tap(user => this.currentUser.set(user))); }
    logout() { return this.http.post(`${API}/auth/logout`, {}).pipe(tap(() => this.clear())); }
    clear() { sessionStorage.removeItem('careflow.accessToken'); sessionStorage.removeItem('careflow.refreshToken'); this.accessToken.set(null); this.refreshToken.set(null); this.currentUser.set(null); }
    role() { return this.currentUser()?.role ?? this.payload()?.role ?? null; }
    store(tokens) { sessionStorage.setItem('careflow.accessToken', tokens.accessToken); sessionStorage.setItem('careflow.refreshToken', tokens.refreshToken); this.accessToken.set(tokens.accessToken); this.refreshToken.set(tokens.refreshToken); }
    userId() { return this.payload()?.sub ?? ''; }
    payload() { try {
        const token = this.accessToken();
        return token ? JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))) : null;
    }
    catch {
        return null;
    } }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=auth.service.js.map