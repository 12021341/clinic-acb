import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, AbstractControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-material-date-picker',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field appearance="outline" class="material-date-field" subscriptSizing="dynamic">
      <input
        matInput
        [matDatepicker]="picker"
        [value]="dateValue"
        [placeholder]="placeholder"
        [required]="required"
        [disabled]="disabled"
        (dateChange)="selectDate($event.value)"
        (blur)="onTouched()"
      >
      <mat-datepicker-toggle matIconSuffix [for]="picker" [disabled]="disabled"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styles: [`
    :host { display: block; width: 100%; }
    .material-date-field { width: 100%; }
    :host ::ng-deep .mat-mdc-form-field-infix { min-height: 43px; padding-block: 9px !important; }
    :host ::ng-deep .mat-mdc-text-field-wrapper { border-radius: 9px; background: #fff; }
    :host ::ng-deep .mat-mdc-form-field-subscript-wrapper { display: none; }
  `],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
  ],
})
export class MaterialDatePickerComponent implements ControlValueAccessor, Validator {
  @Input() placeholder = 'Choose a date';
  @Input() required = false;
  dateValue: Date | null = null;
  disabled = false;
  private value = '';
  private onChange: (value: string) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  writeValue(value: string | null): void {
    this.value = value ?? '';
    this.dateValue = this.parseIsoDate(this.value);
  }
  registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; }
  validate(_: AbstractControl): ValidationErrors | null { return this.required && !this.value ? { required: true } : null; }
  selectDate(date: Date | null): void {
    this.dateValue = date;
    this.value = date ? this.toIsoDate(date) : '';
    this.onChange(this.value);
    this.onTouched();
  }
  private parseIsoDate(value: string): Date | null {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
  }
  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
