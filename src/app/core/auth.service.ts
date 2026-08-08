import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiRole, PatientRegistration, Tokens, User } from './models';

export const SKIP_AUTH = new HttpContextToken(() => false);
const API = 'http://localhost:3000/api/v1';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  readonly accessToken = signal(sessionStorage.getItem('careflow.accessToken'));
  readonly refreshToken = signal(sessionStorage.getItem('careflow.refreshToken'));
  readonly currentUser = signal<User | null>(null);
  readonly authenticated = computed(() => !!this.accessToken());

  login(email: string, password: string): Observable<Tokens> {
    return this.http.post<Tokens>(`${API}/auth/login`, { email, password }, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
  }
  register(body: { email: string; password: string; firstName: string; lastName: string }): Observable<Tokens> {
    return this.http.post<Tokens>(`${API}/auth/register`, body, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
  }
  registerPatient(body: PatientRegistration): Observable<Tokens> {
    return this.http.post<Tokens>(`${API}/auth/register/patient`, body, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
  }
  refresh(): Observable<Tokens> {
    return this.http.post<Tokens>(`${API}/auth/refresh`, { userId: this.userId(), refreshToken: this.refreshToken() }, { context: new HttpContext().set(SKIP_AUTH, true) }).pipe(tap(tokens => this.store(tokens)));
  }
  loadProfile(): Observable<User> { return this.http.get<User>(`${API}/users/me`).pipe(tap(user => this.currentUser.set(user))); }
  logout(): Observable<void> { return this.http.post<void>(`${API}/auth/logout`, {}).pipe(tap(() => this.clear())); }
  clear(): void { sessionStorage.removeItem('careflow.accessToken'); sessionStorage.removeItem('careflow.refreshToken'); this.accessToken.set(null); this.refreshToken.set(null); this.currentUser.set(null); }
  role(): ApiRole | null { return this.currentUser()?.role ?? this.payload()?.role ?? null; }
  private store(tokens: Tokens): void { sessionStorage.setItem('careflow.accessToken', tokens.accessToken); sessionStorage.setItem('careflow.refreshToken', tokens.refreshToken); this.accessToken.set(tokens.accessToken); this.refreshToken.set(tokens.refreshToken); }
  private userId(): string { return this.payload()?.sub ?? ''; }
  private payload(): { sub?: string; role?: ApiRole } | null { try { const token = this.accessToken(); return token ? JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))) : null; } catch { return null; } }
}
