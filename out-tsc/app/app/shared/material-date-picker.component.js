import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
export class MaterialDatePickerComponent {
    constructor() {
        this.placeholder = 'Choose a date';
        this.required = false;
        this.dateValue = null;
        this.disabled = false;
        this.value = '';
        this.onChange = () => undefined;
        this.onTouched = () => undefined;
    }
    writeValue(value) {
        this.value = value ?? '';
        this.dateValue = this.parseIsoDate(this.value);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(disabled) { this.disabled = disabled; }
    validate(_) { return this.required && !this.value ? { required: true } : null; }
    selectDate(date) {
        this.dateValue = date;
        this.value = date ? this.toIsoDate(date) : '';
        this.onChange(this.value);
        this.onTouched();
    }
    parseIsoDate(value) {
        const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
        return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
    }
    toIsoDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    static { this.ɵfac = function MaterialDatePickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MaterialDatePickerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MaterialDatePickerComponent, selectors: [["app-material-date-picker"]], inputs: { placeholder: "placeholder", required: "required" }, features: [i0.ɵɵProvidersFeature([
                { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
                { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
            ])], decls: 5, vars: 7, consts: [["picker", ""], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "material-date-field"], ["matInput", "", 3, "dateChange", "blur", "matDatepicker", "value", "placeholder", "required", "disabled"], ["matIconSuffix", "", 3, "for", "disabled"]], template: function MaterialDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 1)(1, "input", 2);
            i0.ɵɵlistener("dateChange", function MaterialDatePickerComponent_Template_input_dateChange_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.selectDate($event.value)); })("blur", function MaterialDatePickerComponent_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouched()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "mat-datepicker-toggle", 3)(3, "mat-datepicker", null, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const picker_r2 = i0.ɵɵreference(4);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matDatepicker", picker_r2)("value", ctx.dateValue)("placeholder", ctx.placeholder)("required", ctx.required)("disabled", ctx.disabled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("for", picker_r2)("disabled", ctx.disabled);
        } }, dependencies: [MatDatepickerModule, i1.MatDatepicker, i1.MatDatepickerInput, i1.MatDatepickerToggle, MatFormFieldModule, i2.MatFormField, i2.MatSuffix, MatInputModule, i3.MatInput], styles: ["[_nghost-%COMP%] { display: block; width: 100%; }\n    .material-date-field[_ngcontent-%COMP%] { width: 100%; }\n    [_nghost-%COMP%]     .mat-mdc-form-field-infix { min-height: 43px; padding-block: 9px !important; }\n    [_nghost-%COMP%]     .mat-mdc-text-field-wrapper { border-radius: 9px; background: #fff; }\n    [_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper { display: none; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-material-date-picker', standalone: true, imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule], template: `
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
  `, providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaterialDatePickerComponent), multi: true },
                ], styles: ["\n    :host { display: block; width: 100%; }\n    .material-date-field { width: 100%; }\n    :host ::ng-deep .mat-mdc-form-field-infix { min-height: 43px; padding-block: 9px !important; }\n    :host ::ng-deep .mat-mdc-text-field-wrapper { border-radius: 9px; background: #fff; }\n    :host ::ng-deep .mat-mdc-form-field-subscript-wrapper { display: none; }\n  "] }]
    }], null, { placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MaterialDatePickerComponent, { className: "MaterialDatePickerComponent", filePath: "src/app/shared/material-date-picker.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=material-date-picker.component.js.map