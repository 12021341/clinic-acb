import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Role = 'Doctor' | 'Secretary' | 'Admin' | 'Patient';
type View = 'Dashboard' | 'Appointments' | 'Patients' | 'Prescriptions' | 'Team';

interface Appointment {
  time: string;
  patient: string;
  reason: string;
  type: string;
  status: 'Confirmed' | 'Waiting' | 'In consultation';
  initials: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly role = signal<Role>('Doctor');
  protected readonly view = signal<View>('Dashboard');
  protected readonly search = signal('');
  protected readonly showPrescription = signal(false);
  protected readonly showMobileNav = signal(false);

  protected readonly roles: Role[] = ['Doctor', 'Secretary', 'Admin', 'Patient'];
  protected readonly appointments: Appointment[] = [
    { time: '9:00 AM', patient: 'Maria Santos', reason: 'Follow-up consultation', type: 'Returning', status: 'Confirmed', initials: 'MS', color: 'mint' },
    { time: '10:30 AM', patient: 'James Wilson', reason: 'Annual physical exam', type: 'New patient', status: 'Waiting', initials: 'JW', color: 'blue' },
    { time: '1:00 PM', patient: 'Amelia Reyes', reason: 'Hypertension review', type: 'Returning', status: 'In consultation', initials: 'AR', color: 'coral' },
    { time: '2:30 PM', patient: 'Noah Garcia', reason: 'Lab result review', type: 'Returning', status: 'Confirmed', initials: 'NG', color: 'violet' }
  ];

  protected readonly recentPatients = [
    { name: 'Maria Santos', id: 'PT-1042', age: 42, condition: 'Type 2 Diabetes', last: 'Today', initials: 'MS', color: 'mint' },
    { name: 'Amelia Reyes', id: 'PT-0928', age: 58, condition: 'Hypertension', last: 'Jun 18', initials: 'AR', color: 'coral' },
    { name: 'Noah Garcia', id: 'PT-0814', age: 35, condition: 'Hyperlipidemia', last: 'Jun 15', initials: 'NG', color: 'violet' }
  ];

  protected readonly visibleAppointments = computed(() => {
    const query = this.search().toLowerCase().trim();
    return query ? this.appointments.filter((item) => `${item.patient} ${item.reason}`.toLowerCase().includes(query)) : this.appointments;
  });

  protected navItems(): { label: View; icon: string }[] {
    const shared: { label: View; icon: string }[] = [
      { label: 'Dashboard', icon: '⌂' },
      { label: 'Appointments', icon: '▣' }
    ];
    if (this.role() === 'Patient') return [...shared, { label: 'Prescriptions', icon: 'Rx' }];
    if (this.role() === 'Secretary') return [...shared, { label: 'Patients', icon: '♧' }];
    return [...shared, { label: 'Patients', icon: '♧' }, { label: 'Prescriptions', icon: 'Rx' }, ...(this.role() === 'Admin' ? [{ label: 'Team' as View, icon: '♙' }] : [])];
  }

  protected selectRole(role: Role): void {
    this.role.set(role);
    this.view.set('Dashboard');
  }

  protected openView(view: View): void {
    this.view.set(view);
    this.showMobileNav.set(false);
  }

  protected printPrescription(): void {
    window.print();
  }
}
