import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialDatePickerComponent } from './shared/material-date-picker.component';
import { forkJoin, map, switchMap } from 'rxjs';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item[0];
function AppComponent_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_0_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.notice());
} }
function AppComponent_Conditional_0_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label");
    i0.ɵɵtext(2, "First name");
    i0.ɵɵelementStart(3, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.firstName, $event) || (ctx_r1.registerForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, "Last name");
    i0.ɵɵelementStart(6, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_13_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.lastName, $event) || (ctx_r1.registerForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.firstName);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.lastName);
} }
function AppComponent_Conditional_0_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Email address");
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.email, $event) || (ctx_r1.registerForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 12)(4, "label");
    i0.ɵɵtext(5, "Date of birth");
    i0.ɵɵelementStart(6, "app-material-date-picker", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_app_material_date_picker_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.dateOfBirth, $event) || (ctx_r1.registerForm.dateOfBirth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label");
    i0.ɵɵtext(8, "Sex");
    i0.ɵɵelementStart(9, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.sex, $event) || (ctx_r1.registerForm.sex = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 20);
    i0.ɵɵtext(11, "Prefer not to say");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option");
    i0.ɵɵtext(13, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option");
    i0.ɵɵtext(15, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option");
    i0.ɵɵtext(17, "Other");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, "Mobile number");
    i0.ɵɵelementStart(20, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.mobileNumber, $event) || (ctx_r1.registerForm.mobileNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label");
    i0.ɵɵtext(22, "Home address");
    i0.ɵɵelementStart(23, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.homeAddress, $event) || (ctx_r1.registerForm.homeAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label");
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementStart(26, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.password, $event) || (ctx_r1.registerForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Use at least 8 characters.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label");
    i0.ɵɵtext(30, "Confirm password");
    i0.ɵɵelementStart(31, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_14_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.confirmPassword, $event) || (ctx_r1.registerForm.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.dateOfBirth);
    i0.ɵɵproperty("required", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.sex);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.mobileNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.homeAddress);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.password);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.confirmPassword);
} }
function AppComponent_Conditional_0_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Email address");
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_15_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.loginForm.email, $event) || (ctx_r1.loginForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "label");
    i0.ɵɵtext(4, "Password");
    i0.ɵɵelementStart(5, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_15_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.loginForm.password, $event) || (ctx_r1.loginForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.loginForm.email);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.loginForm.password);
} }
function AppComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 0)(1, "section", 5)(2, "div", 6);
    i0.ɵɵelement(3, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 8);
    i0.ɵɵtext(5, "SECURE CLINIC WORKSPACE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, AppComponent_Conditional_0_Conditional_10_Template, 2, 1, "div", 9);
    i0.ɵɵconditionalCreate(11, AppComponent_Conditional_0_Conditional_11_Template, 2, 1, "div", 10);
    i0.ɵɵelementStart(12, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_0_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAuth()); });
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_0_Conditional_13_Template, 7, 2, "div", 12);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_0_Conditional_14_Template, 32, 8)(15, AppComponent_Conditional_0_Conditional_15_Template, 6, 2);
    i0.ɵɵelementStart(16, "button", 13);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 14);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.registerMode = !ctx_r1.registerMode; ctx_r1.error.set(""); return i0.ɵɵresetView(ctx_r1.notice.set("")); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "small");
    i0.ɵɵtext(21, "Clinical data is available only to authorized clinic staff.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.registerMode ? "Create patient account" : "Welcome back");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.registerMode ? "Register for future patient portal access." : "Sign in with your clinic credentials.", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.notice() ? 11 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.registerMode ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.registerMode ? 14 : 15);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Please wait\u2026" : ctx_r1.registerMode ? "Register" : "Sign in", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.registerMode ? "Already registered? Sign in" : "Need a patient account? Register", " ");
} }
function AppComponent_Conditional_1_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_For_10_Template_button_click_0_listener() { const item_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView(item_r8.label)); });
    i0.ɵɵelementStart(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.view() === item_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r8.label, " ");
} }
function AppComponent_Conditional_1_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_43_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error(), " ");
} }
function AppComponent_Conditional_1_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_44_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.notice.set("")); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.notice(), " ");
} }
function AppComponent_Conditional_1_Conditional_45_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 51)(1, "p");
    i0.ɵɵtext(2, "Loading your records\u2026");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_45_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 52)(1, "div", 55)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "My profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "dl")(8, "div")(9, "dt");
    i0.ɵɵtext(10, "Date of birth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "dd");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "dt");
    i0.ɵɵtext(16, "Sex");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "dd");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "dt");
    i0.ɵɵtext(21, "Blood type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "dd");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "dt");
    i0.ɵɵtext(26, "Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "dd");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "dt");
    i0.ɵɵtext(31, "Allergies");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "dd");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div")(35, "dt");
    i0.ɵɵtext(36, "Conditions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "dd");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const profile_r11 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(profile_r11.patientId);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 7, profile_r11.dateOfBirth, "mediumDate"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(profile_r11.sex || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(profile_r11.bloodType || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(profile_r11.mobileNumber || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(profile_r11.allergies || "None recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(profile_r11.conditions || "None recorded");
} }
function AppComponent_Conditional_1_Conditional_45_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div")(8, "span", 58);
    i0.ɵɵelement(9, "i");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 5, a_r12.scheduledAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", a_r12.purpose, " \u00B7 ", a_r12.visitType);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r12.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(a_r12.doctor));
} }
function AppComponent_Conditional_1_Conditional_45_ForEmpty_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No appointments found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_45_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "span", 58);
    i0.ɵɵelement(8, "i");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const rx_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", rx_r13.medication, " \u00B7 ", rx_r13.dosage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rx_r13.instructions);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rx_r13.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(rx_r13.doctor));
} }
function AppComponent_Conditional_1_Conditional_45_ForEmpty_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No prescriptions found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div")(2, "p", 8);
    i0.ɵɵtext(3, "PATIENT PORTAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Your clinic profile, appointments, and prescriptions.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(8, AppComponent_Conditional_1_Conditional_45_Conditional_8_Template, 3, 0, "section", 51);
    i0.ɵɵconditionalCreate(9, AppComponent_Conditional_1_Conditional_45_Conditional_9_Template, 39, 10, "section", 52);
    i0.ɵɵelementStart(10, "div", 53)(11, "section", 54)(12, "div", 55)(13, "div")(14, "h2");
    i0.ɵɵtext(15, "My appointments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 56);
    i0.ɵɵrepeaterCreate(19, AppComponent_Conditional_1_Conditional_45_For_20_Template, 13, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_45_ForEmpty_21_Template, 2, 0, "div", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "section", 54)(23, "div", 55)(24, "div")(25, "h2");
    i0.ɵɵtext(26, "My prescriptions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "p");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 56);
    i0.ɵɵrepeaterCreate(30, AppComponent_Conditional_1_Conditional_45_For_31_Template, 12, 5, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_45_ForEmpty_32_Template, 2, 0, "div", 57);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Welcome, ", ((tmp_2_0 = ctx_r1.patientProfile()) == null ? null : tmp_2_0.firstName) || ((tmp_2_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_2_0.firstName), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.loading() ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_4_0 = ctx_r1.patientProfile()) ? 9 : -1, tmp_4_0);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.patientAppointments().length, " records");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.patientAppointments());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r1.patientPrescriptions().length, " records");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.patientPrescriptions());
} }
function AppComponent_Conditional_1_Conditional_46_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCreate("appointment")); });
    i0.ɵɵtext(1, " \uFF0B New appointment ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_46_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 61)(1, "span", 73);
    i0.ɵɵtext(2, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "small");
    i0.ɵɵtext(5, "Total patients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "em");
    i0.ɵɵtext(9, "Registered clinic records");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r1.dashboard()) == null ? null : tmp_3_0.stats == null ? null : tmp_3_0.stats.totalPatients) ?? "\u2014");
} }
function AppComponent_Conditional_1_Conditional_46_For_59_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 79);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_For_59_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const a_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.startConsultation(a_r17)); });
    i0.ɵɵtext(1, " Start consultation ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_46_For_59_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 80);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_For_59_Conditional_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const a_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail("appointment", a_r17.id)); });
    i0.ɵɵtext(1, " \u00B7\u00B7\u00B7 ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_46_For_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 74)(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 75);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 76)(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span", 58);
    i0.ɵɵelement(12, "i");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_46_For_59_Conditional_14_Template, 2, 0, "button", 77)(15, AppComponent_Conditional_1_Conditional_46_For_59_Conditional_15_Template, 2, 0, "button", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r17 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("has-consultation-action", ctx_r1.auth.role() === "DOCTOR");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 9, a_r17.scheduledAt, "shortTime"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(a_r17.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(a_r17.patient));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r17.purpose, " \u00B7 ", a_r17.visitType);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r17.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.role() === "DOCTOR" ? 14 : 15);
} }
function AppComponent_Conditional_1_Conditional_46_ForEmpty_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No appointments today.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_46_For_70_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 81)(2, "span", 82);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_For_70_Template_button_click_11_listener() { const p_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail("patient", p_r20.id)); });
    i0.ɵɵtext(12, "Open");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(p_r20));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r20));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", p_r20.patientId, " \u00B7 ", ctx_r1.age(p_r20), " years");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r20.conditions || "No condition recorded");
} }
function AppComponent_Conditional_1_Conditional_46_ForEmpty_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No recent patients.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "div")(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵpipe(5, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Live clinic activity from the ACB Clinic API.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, AppComponent_Conditional_1_Conditional_46_button_10_Template, 2, 0, "button", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 60)(12, "article", 61)(13, "span", 62);
    i0.ɵɵtext(14, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div")(16, "small");
    i0.ɵɵtext(17, "Today's appointments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "article", 61)(21, "span", 63);
    i0.ɵɵtext(22, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div")(24, "small");
    i0.ɵɵtext(25, "Patients checked in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_1_Conditional_46_Conditional_28_Template, 10, 1, "article", 61);
    i0.ɵɵelementStart(29, "article", 61)(30, "span", 64);
    i0.ɵɵtext(31, "\u25F7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div")(33, "small");
    i0.ɵɵtext(34, "Average wait time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36, "\u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "em");
    i0.ɵɵtext(38, "Not tracked by backend");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "article", 61)(40, "span", 65);
    i0.ɵɵtext(41, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div")(43, "small");
    i0.ɵɵtext(44, "Prescriptions issued");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(47, "div", 66)(48, "section", 67)(49, "div", 55)(50, "div")(51, "h2");
    i0.ɵɵtext(52, "Today's schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "p");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "button", 68);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView("Appointments")); });
    i0.ɵɵtext(56, " View all \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 69);
    i0.ɵɵrepeaterCreate(58, AppComponent_Conditional_1_Conditional_46_For_59_Template, 16, 12, "article", 70, _forTrack1, false, AppComponent_Conditional_1_Conditional_46_ForEmpty_60_Template, 2, 0, "div", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "aside", 54)(62, "div", 55)(63, "div")(64, "h2");
    i0.ɵɵtext(65, "Recently updated patients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "p");
    i0.ɵɵtext(67, "Live patient records");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(68, "div", 71);
    i0.ɵɵrepeaterCreate(69, AppComponent_Conditional_1_Conditional_46_For_70_Template, 13, 5, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_46_ForEmpty_71_Template, 2, 0, "div", 57);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 15, i0.ɵɵpipeBind2(4, 12, (tmp_2_0 = ctx_r1.dashboard()) == null ? null : tmp_2_0.date, "EEEE, MMMM d")), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Good day, ", (tmp_3_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_3_0.firstName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.canCreate("Appointments"));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("with-total", ctx_r1.auth.role() === "FRONT_DESK" || ctx_r1.auth.role() === "DOCTOR");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(((tmp_6_0 = ctx_r1.dashboard()) == null ? null : tmp_6_0.stats == null ? null : tmp_6_0.stats.appointments) ?? "\u2014");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(((tmp_7_0 = ctx_r1.dashboard()) == null ? null : tmp_7_0.stats == null ? null : tmp_7_0.stats.checkedIn) ?? "\u2014");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.role() === "FRONT_DESK" || ctx_r1.auth.role() === "DOCTOR" ? 28 : -1);
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r1.dashboard()) == null ? null : tmp_9_0.stats == null ? null : tmp_9_0.stats.prescriptions) ?? "\u2014");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ((tmp_10_0 = ctx_r1.dashboard()) == null ? null : tmp_10_0.schedule == null ? null : tmp_10_0.schedule.length) ?? 0, " appointments");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(((tmp_11_0 = ctx_r1.dashboard()) == null ? null : tmp_11_0.schedule) ?? i0.ɵɵpureFunction0(17, _c0));
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(((tmp_12_0 = ctx_r1.dashboard()) == null ? null : tmp_12_0.recentPatients) ?? i0.ɵɵpureFunction0(18, _c0));
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const appointment_r22 = ctx;
    i0.ɵɵtextInterpolate2(" ", appointment_r22.visitType, " \u00B7 ", appointment_r22.purpose, " ");
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Review the patient record, prescribe medication, and update care details. ");
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 93);
    i0.ɵɵtext(1, " Loading the patient record and clinical history\u2026 ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_93_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl", 102)(1, "div")(2, "dt");
    i0.ɵɵtext(3, "Assessment and diagnosis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "dd");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "dt");
    i0.ɵɵtext(8, "Treatment plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "dd");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "dt");
    i0.ɵɵtext(13, "Diagnostic orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "dd");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "dt");
    i0.ɵɵtext(18, "Referrals and follow-up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "dd");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const note_r24 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(note_r24.assessmentDiagnosis || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(note_r24.treatmentPlan || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(note_r24.diagnosticOrders || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(note_r24.referralsFollowUp || "Not recorded");
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_94_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "span");
    i0.ɵɵtext(2, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "No consultation note yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Document the assessment, treatment plan, orders, and follow-up for this visit. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 112);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_94_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openConsultationNote()); });
    i0.ɵɵtext(8, " Add consultation note ");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_104_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 113);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_104_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editClinicalOverview()); });
    i0.ɵɵtext(1, " \u270E Update clinical information ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 114);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveClinicalOverview()); });
    i0.ɵɵelementStart(1, "label")(2, "span");
    i0.ɵɵtext(3, "Known allergies");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "textarea", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template_textarea_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.clinicalOverviewForm.allergies, $event) || (ctx_r1.clinicalOverviewForm.allergies = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Enter \u201CNone known\u201D when the patient confirms no allergies.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label")(8, "span");
    i0.ɵɵtext(9, "Medical conditions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "textarea", 116);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template_textarea_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.clinicalOverviewForm.conditions, $event) || (ctx_r1.clinicalOverviewForm.conditions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12, "Include relevant chronic and active conditions.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 117)(14, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editingClinicalOverview.set(false)); });
    i0.ɵɵtext(15, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 119);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.clinicalOverviewForm.allergies);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.clinicalOverviewForm.conditions);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : "Save clinical information", " ");
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 107)(1, "div", 120)(2, "small");
    i0.ɵɵtext(3, "KNOWN ALLERGIES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "div", 121);
    i0.ɵɵelementStart(7, "div", 120)(8, "small");
    i0.ɵɵtext(9, "MEDICAL CONDITIONS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const patient_r28 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r28.allergies || "No allergies recorded");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(patient_r28.conditions || "No conditions recorded");
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_For_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 58);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r29 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, a_r29.scheduledAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r29.purpose);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r29.visitType, " \u00B7 Dr. ", ctx_r1.fullName(a_r29.doctor));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r29.status);
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_120_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 57);
    i0.ɵɵtext(1, "No previous appointments.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_For_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 58);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rx_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, rx_r31.issuedAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", rx_r31.medication, " \u00B7 ", rx_r31.dosage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rx_r31.instructions);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(rx_r31.status);
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_135_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "span");
    i0.ɵɵtext(2, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "No prescriptions yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Add medication orders without leaving the consultation. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 112);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_135_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵtext(8, " Add first prescription ");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_For_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 58);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r33 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, v_r33.dateAdministered, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(v_r33.vaccineName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", v_r33.dose, " \u00B7 ", v_r33.administeredBy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r33.status);
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_150_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "span");
    i0.ɵɵtext(2, "\u271A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "No vaccinations yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Add immunization records without leaving the consultation. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 112);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_150_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addConsultationVaccine()); });
    i0.ɵɵtext(8, " Add first vaccination ");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_47_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 94)(1, "div", 95)(2, "span", 96);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "PATIENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "dl")(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Age");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Blood type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Home address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(32, "section", 97)(33, "header")(34, "div")(35, "span", 98);
    i0.ɵɵtext(36, "LATEST SCREENING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "h2");
    i0.ɵɵtext(38, "Patient vitals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p");
    i0.ɵɵtext(40, " Most recently recorded measurements from the patient record ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "dl", 99)(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Blood pressure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "Heart rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "dt");
    i0.ɵɵtext(54, "Respiratory rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div")(58, "dt");
    i0.ɵɵtext(59, "Temperature");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "dd");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div")(63, "dt");
    i0.ɵɵtext(64, "Oxygen saturation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "dd");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div")(68, "dt");
    i0.ɵɵtext(69, "Weight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "dd");
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div")(73, "dt");
    i0.ɵɵtext(74, "Height");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "dd");
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div")(78, "dt");
    i0.ɵɵtext(79, "BMI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "dd");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(82, "section", 100)(83, "header")(84, "div")(85, "span", 98);
    i0.ɵɵtext(86, "CLINICAL DOCUMENTATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "h2");
    i0.ɵɵtext(88, "Assessment and plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "p");
    i0.ɵɵtext(90, " Capture the current working diagnosis, orders, and follow-up plan. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "button", 101);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Template_button_click_91_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openConsultationNote()); });
    i0.ɵɵtext(92, " \u270E Edit note ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(93, AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_93_Template, 21, 4, "dl", 102)(94, AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_94_Template, 9, 0, "div", 103);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "section", 104)(96, "header")(97, "div")(98, "span", 98);
    i0.ɵɵtext(99, "CLINICAL SAFETY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "h2");
    i0.ɵɵtext(101, "Clinical summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "p");
    i0.ɵɵtext(103, " Keep the patient\u2019s active health risks and chronic conditions visible during the consultation. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(104, AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_104_Template, 2, 0, "button", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(105, AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_105_Template, 18, 4, "form", 106)(106, AppComponent_Conditional_1_Conditional_47_Conditional_51_Conditional_106_Template, 12, 2, "article", 107);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "section", 108)(108, "section", 109)(109, "header")(110, "div")(111, "span", 98);
    i0.ɵɵtext(112, "CARE HISTORY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "h2");
    i0.ɵɵtext(114, "Previous consultation information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "p");
    i0.ɵɵtext(116);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(117, "div");
    i0.ɵɵrepeaterCreate(118, AppComponent_Conditional_1_Conditional_47_Conditional_51_For_119_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_120_Template, 2, 0, "p", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(121, "section", 110)(122, "header")(123, "div")(124, "span", 98);
    i0.ɵɵtext(125, "MEDICATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(126, "h2");
    i0.ɵɵtext(127, "Prescription history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(128, "p");
    i0.ɵɵtext(129);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(130, "button", 101);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Template_button_click_130_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵtext(131, " \uFF0B Add prescription ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(132, "div");
    i0.ɵɵrepeaterCreate(133, AppComponent_Conditional_1_Conditional_47_Conditional_51_For_134_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_135_Template, 9, 0, "div", 103);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(136, "section", 111)(137, "header")(138, "div")(139, "span", 98);
    i0.ɵɵtext(140, "IMMUNIZATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(141, "h2");
    i0.ɵɵtext(142, "Vaccination history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(143, "p");
    i0.ɵɵtext(144);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(145, "button", 101);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Conditional_51_Template_button_click_145_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addConsultationVaccine()); });
    i0.ɵɵtext(146, " \uFF0B Add vaccination ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(147, "div");
    i0.ɵɵrepeaterCreate(148, AppComponent_Conditional_1_Conditional_47_Conditional_51_For_149_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_47_Conditional_51_ForEmpty_150_Template, 9, 0, "div", 103);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_19_0;
    const patient_r28 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(patient_r28));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(patient_r28));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(patient_r28.sex || "Sex not recorded");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.ageWithMonths(patient_r28));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r28.mobileNumber || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r28.bloodType || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r28.homeAddress || "Not recorded");
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.bloodPressure));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.heartRate, " bpm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.vitalDisplay(patient_r28.respiratoryRate, " breaths/min"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.bodyTemperatureC, " \u00B0C"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.oxygenSaturation, " %"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.weightKg, " kg"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r28.heightCm, " cm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.bmi(patient_r28));
    i0.ɵɵadvance(12);
    i0.ɵɵconditional((tmp_19_0 = ctx_r1.consultationNote(ctx_r1.consultationAppointment())) ? 93 : 94, tmp_19_0);
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(!ctx_r1.editingClinicalOverview() ? 104 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editingClinicalOverview() ? 105 : 106);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.consultationAppointments().length, " appointment records ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.consultationAppointments());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.consultationPrescriptions().length, " medication records ");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.consultationPrescriptions());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.consultationVaccines().length, " vaccination records ");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.consultationVaccines());
} }
function AppComponent_Conditional_1_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "header", 83)(2, "div", 84)(3, "button", 85);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView("Dashboard")); });
    i0.ɵɵtext(4, " \u2190 Back to dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 86);
    i0.ɵɵelement(6, "i");
    i0.ɵɵtext(7, "Active consultation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 87)(9, "div")(10, "span", 8);
    i0.ɵɵtext(11, "DOCTOR CONSULTATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "h1");
    i0.ɵɵtext(13, "Consultation workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_1_Conditional_47_Conditional_15_Template, 1, 2)(16, AppComponent_Conditional_1_Conditional_47_Conditional_16_Template, 1, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 88)(18, "button", 89);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openConsultationNote()); });
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "strong");
    i0.ɵɵtext(23, "Consultation note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25, "Assessment, plan, and follow-up");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "button", 90);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addConsultationVaccine()); });
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "\u271A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div")(30, "strong");
    i0.ɵɵtext(31, "Add vaccination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "small");
    i0.ɵɵtext(33, "Record immunization details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "button", 91);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div")(38, "strong");
    i0.ɵɵtext(39, "Add prescription");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "small");
    i0.ɵɵtext(41, "Create a medication order");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "button", 92);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endConsultation()); });
    i0.ɵɵelementStart(43, "span");
    i0.ɵɵtext(44, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div")(46, "strong");
    i0.ɵɵtext(47, "End consultation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "small");
    i0.ɵɵtext(49, "Mark this visit as completed");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵconditionalCreate(50, AppComponent_Conditional_1_Conditional_47_Conditional_50_Template, 2, 0, "section", 93);
    i0.ɵɵconditionalCreate(51, AppComponent_Conditional_1_Conditional_47_Conditional_51_Template, 151, 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.consultationAppointment()) ? 15 : 16, tmp_2_0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r1.consultationAppointment());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !ctx_r1.consultationPatient());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !ctx_r1.consultationPatient());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r1.loading() || !ctx_r1.consultationAppointment());
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.loading() ? 50 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_8_0 = ctx_r1.consultationPatient()) ? 51 : -1, tmp_8_0);
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_28_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 143);
    i0.ɵɵlistener("mousedown", function AppComponent_Conditional_1_Conditional_48_Conditional_28_For_2_Template_button_mousedown_0_listener($event) { const patient_r36 = i0.ɵɵrestoreView(_r35).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.selectCertificatePatient(patient_r36); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const patient_r36 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(patient_r36));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(patient_r36.patientId);
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_28_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No registered patient matches. The typed name can still be used.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128);
    i0.ɵɵrepeaterCreate(1, AppComponent_Conditional_1_Conditional_48_Conditional_28_For_2_Template, 5, 2, "button", 142, _forTrack1, false, AppComponent_Conditional_1_Conditional_48_Conditional_28_ForEmpty_3_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.certificatePatientSuggestions());
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 129);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2713 Linked to ", ctx.patientId);
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Free-text patient name");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 135);
    i0.ɵɵtext(1, "Complete the patient name, date, and certificate details to enable saving.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " This is to certify that ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " has been seen and evaluated at Pedia Care Children Clinic. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.certificateDisplayName());
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " This is to certify that ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "____________________________");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " has been seen and evaluated at Pedia Care Children Clinic. ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 122)(2, "div")(3, "p", 8);
    i0.ɵɵtext(4, "DOCTOR WORKSPACE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1");
    i0.ɵɵtext(6, "Medical Certificate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, " Create and print a medical certificate for a registered patient. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 123);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_48_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.printMedicalCertificate()); });
    i0.ɵɵtext(10, " Print certificate ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 124)(12, "section", 125)(13, "header")(14, "span", 98);
    i0.ɵɵtext(15, "CERTIFICATE DETAILS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "h2");
    i0.ɵɵtext(17, "Create medical certificate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵtext(19, " Select the patient and enter the certification statement. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "form")(21, "label")(22, "span");
    i0.ɵɵtext(23, "Patient name ");
    i0.ɵɵelementStart(24, "em");
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 126)(27, "input", 127);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_1_Conditional_48_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.resolveCertificatePatient($event)); })("focus", function AppComponent_Conditional_1_Conditional_48_Template_input_focus_27_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.certificateSuggestionsOpen.set(true)); })("blur", function AppComponent_Conditional_1_Conditional_48_Template_input_blur_27_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.certificateSuggestionsOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_1_Conditional_48_Conditional_28_Template, 4, 1, "div", 128);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(29, AppComponent_Conditional_1_Conditional_48_Conditional_29_Template, 2, 1, "small", 129)(30, AppComponent_Conditional_1_Conditional_48_Conditional_30_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "label")(32, "span");
    i0.ɵɵtext(33, "Date ");
    i0.ɵɵelementStart(34, "em");
    i0.ɵɵtext(35, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "app-material-date-picker", 130);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_48_Template_app_material_date_picker_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.medicalCertificateForm.date, $event) || (ctx_r1.medicalCertificateForm.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Medical certificate details ");
    i0.ɵɵelementStart(40, "em");
    i0.ɵɵtext(41, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "textarea", 131);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_48_Template_textarea_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.medicalCertificateForm.details, $event) || (ctx_r1.medicalCertificateForm.details = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44, "Write only the clinical information appropriate for release to the patient.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 132)(46, "button", 133);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_48_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveMedicalCertificate()); });
    i0.ɵɵelementStart(47, "span", 134);
    i0.ɵɵtext(48, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "span")(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "small");
    i0.ɵɵtext(53, "Store this certificate in the patient record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(54, AppComponent_Conditional_1_Conditional_48_Conditional_54_Template, 2, 0, "small", 135);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(55, "article", 136)(56, "header", 137);
    i0.ɵɵelement(57, "img", 28);
    i0.ɵɵelementStart(58, "div")(59, "strong");
    i0.ɵɵtext(60, "Urdaneta City, Pangasinan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "span");
    i0.ɵɵtext(62, "Tel no. 123-123-123");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(63, "h2");
    i0.ɵɵtext(64, "MEDICAL CERTIFICATE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "time");
    i0.ɵɵtext(66);
    i0.ɵɵpipe(67, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 138)(69, "p");
    i0.ɵɵtext(70, "TO WHOM IT MAY CONCERN:");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(71, AppComponent_Conditional_1_Conditional_48_Conditional_71_Template, 5, 1, "p")(72, AppComponent_Conditional_1_Conditional_48_Conditional_72_Template, 5, 0, "p");
    i0.ɵɵelementStart(73, "p", 139);
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "p");
    i0.ɵɵtext(76, " This certificate is issued upon the request of the patient or guardian for whatever lawful purpose it may serve. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "footer", 140);
    i0.ɵɵelement(78, "div", 141);
    i0.ɵɵelementStart(79, "strong");
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "span");
    i0.ɵɵtext(82, "Attending Physician");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(27);
    i0.ɵɵproperty("ngModel", ctx_r1.certificatePatientSearch);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.certificateSuggestionsOpen() ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_4_0 = ctx_r1.certificatePatient()) ? 29 : ctx_r1.certificatePatientSearch ? 30 : -1, tmp_4_0);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.medicalCertificateForm.date);
    i0.ɵɵproperty("required", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.medicalCertificateForm.details);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.canSaveMedicalCertificate());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving certificate\u2026" : "Save medical certificate");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r1.canSaveMedicalCertificate() && !ctx_r1.loading() ? 54 : -1);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(67, 13, ctx_r1.medicalCertificateForm.date, "longDate"));
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.certificateDisplayName() ? 71 : 72);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.medicalCertificateForm.details || "Medical certificate details will appear here.", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(ctx_r1.auth.currentUser()));
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, "CLINIC WORKSPACE");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCreate(ctx_r1.view() === "Appointments" ? "appointment" : ctx_r1.view() === "Patients" ? "patient" : ctx_r1.view() === "Prescriptions" ? "prescription" : ctx_r1.view() === "Vaccinations" ? "vaccine" : "user")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \uFF0B Add ", ctx_r1.view() === "Vaccinations" ? "vaccination" : ctx_r1.view().slice(0, -1).toLowerCase(), " ");
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "Loading\u2026");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 79);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r40); const a_r39 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.startConsultation(a_r39)); });
    i0.ɵɵtext(1, " Start consultation ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 152);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const a_r39 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(a_r39, "appointment")); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 148)(1, "div", 81)(2, "span", 75);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 149);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Template_select_ngModelChange_12_listener($event) { const a_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.status(a_r39, $event)); });
    i0.ɵɵelementStart(13, "option");
    i0.ɵɵtext(14, "PENDING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option");
    i0.ɵɵtext(16, "CONFIRMED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option");
    i0.ɵɵtext(18, "COMPLETED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option");
    i0.ɵɵtext(20, "NO_SHOW");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option");
    i0.ɵɵtext(22, "CANCELLED");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 150)(24, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Template_button_click_24_listener() { const a_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("appointment", a_r39.id)); });
    i0.ɵɵtext(25, " View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Template_button_click_26_listener() { const a_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.edit(a_r39, "appointment"); return i0.ɵɵresetView(ctx_r1.ensureReferences); });
    i0.ɵɵtext(27, " Edit ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_28_Template, 2, 0, "button", 77);
    i0.ɵɵconditionalCreate(29, AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Conditional_29_Template, 2, 0, "button", 151);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r39 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(a_r39.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(a_r39.patient));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(9, 8, a_r39.scheduledAt, "medium"), " \u00B7 ", a_r39.purpose);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(a_r39.doctor));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModel", a_r39.status);
    i0.ɵɵadvance(16);
    i0.ɵɵconditional(ctx_r1.auth.role() === "DOCTOR" && (a_r39.status === "PENDING" || a_r39.status === "CONFIRMED") ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.canCreate("Appointments") && a_r39.status !== "CANCELLED" ? 29 : -1);
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_10_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No appointments found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 147)(1, "span");
    i0.ɵɵtext(2, "Appointment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_Conditional_49_Conditional_10_For_10_Template, 30, 11, "article", 148, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_Conditional_10_ForEmpty_11_Template, 2, 0, "div", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.visibleAppointments());
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 152);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r44); const p_r43 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(p_r43, "patient")); });
    i0.ɵɵtext(1, " Delete ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 154)(1, "div", 81)(2, "span", 82);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "span", 155);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "small", 156);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "time", 157);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 150)(21, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Template_button_click_21_listener() { const p_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("patient", p_r43.id)); });
    i0.ɵɵtext(22, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Template_button_click_23_listener() { const p_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(p_r43, "patient")); });
    i0.ɵɵtext(24, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(25, AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Conditional_25_Template, 2, 0, "button", 151);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r43 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(p_r43));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r43));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", p_r43.patientId, " \u00B7 ", p_r43.sex || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.ageWithMonths(p_r43));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r43.conditions || "No conditions");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Allergies: ", p_r43.allergies || "None recorded");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r43.mobileNumber || p_r43.emailAddress || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", p_r43.lastCheckupDate ? i0.ɵɵpipeBind2(19, 10, p_r43.lastCheckupDate, "mediumDate") : "No completed checkup", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.auth.role() === "ADMIN" ? 25 : -1);
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_11_ForEmpty_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No patients found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 153)(1, "span");
    i0.ɵɵtext(2, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Age");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Clinical summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Last checkup");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(13, AppComponent_Conditional_1_Conditional_49_Conditional_11_For_14_Template, 26, 13, "article", 154, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_Conditional_11_ForEmpty_15_Template, 2, 0, "div", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r1.visiblePatients());
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const rx_r46 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate2(" \u00B7 ", rx_r46.refills, " refill", rx_r46.refills === 1 ? "" : "s", " ");
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 159)(1, "div", 81)(2, "span", 160);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Prescription record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 161)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Conditional_14_Template, 1, 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span", 162);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "time");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 58);
    i0.ɵɵelement(23, "i");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 150)(26, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Template_button_click_26_listener() { const rx_r46 = i0.ɵɵrestoreView(_r45).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("prescription", rx_r46.id)); });
    i0.ɵɵtext(27, " View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Template_button_click_28_listener() { const rx_r46 = i0.ɵɵrestoreView(_r45).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(rx_r46, "prescription")); });
    i0.ɵɵtext(29, "Edit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const rx_r46 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(rx_r46.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(rx_r46.patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(rx_r46.medication);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", rx_r46.dosage, " \u00B7 Qty ", rx_r46.quantity, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(rx_r46.refills ? 14 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rx_r46.instructions);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(rx_r46.doctor));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 10, rx_r46.issuedAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rx_r46.status);
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_12_ForEmpty_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No prescriptions found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158)(1, "span");
    i0.ɵɵtext(2, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Directions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Prescribed by");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Issued");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(15, AppComponent_Conditional_1_Conditional_49_Conditional_12_For_16_Template, 30, 13, "article", 159, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_Conditional_12_ForEmpty_17_Template, 2, 0, "div", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r1.visiblePrescriptions());
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_13_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 164)(1, "div", 81)(2, "span", 165);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Patient vaccination record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 166)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 167);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "time");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 58);
    i0.ɵɵelement(20, "i");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 150)(23, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_13_For_16_Template_button_click_23_listener() { const v_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("vaccine", v_r48.id)); });
    i0.ɵɵtext(24, "View");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const v_r48 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(v_r48.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(v_r48.patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(v_r48.vaccineName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r48.dose);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 7, v_r48.dateAdministered, "mediumDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r48.administeredBy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r48.status);
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_13_ForEmpty_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No vaccinations found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 163)(1, "span");
    i0.ɵɵtext(2, "Patient name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Vaccination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Dose");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Administered by");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(15, AppComponent_Conditional_1_Conditional_49_Conditional_13_For_16_Template, 25, 10, "article", 164, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_Conditional_13_ForEmpty_17_Template, 2, 0, "div", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r1.visibleVaccines());
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 152);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const u_r50 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(u_r50, "user")); });
    i0.ɵɵtext(1, " Deactivate ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 169)(1, "div", 81)(2, "span", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "span", 42);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 170);
    i0.ɵɵelement(12, "i");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 150)(15, "button", 49);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Template_button_click_15_listener() { const u_r50 = i0.ɵɵrestoreView(_r49).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(u_r50, "user")); });
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Conditional_17_Template, 2, 0, "button", 151);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r50 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(u_r50));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(u_r50));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r50.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.roleLabel(u_r50.role));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("inactive", !u_r50.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r50.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(u_r50.isActive ? 17 : -1);
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_14_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "No users found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 168)(1, "span");
    i0.ɵɵtext(2, "User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_Conditional_49_Conditional_14_For_10_Template, 18, 8, "article", 169, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_Conditional_14_ForEmpty_11_Template, 2, 0, "div", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.visibleUsers());
} }
function AppComponent_Conditional_1_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 144)(1, "div");
    i0.ɵɵconditionalCreate(2, AppComponent_Conditional_1_Conditional_49_Conditional_2_Template, 2, 0, "p", 8);
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Live records synchronized with the backend API.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, AppComponent_Conditional_1_Conditional_49_Conditional_7_Template, 2, 1, "button", 145);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "section", 146);
    i0.ɵɵconditionalCreate(9, AppComponent_Conditional_1_Conditional_49_Conditional_9_Template, 2, 0, "div", 57);
    i0.ɵɵconditionalCreate(10, AppComponent_Conditional_1_Conditional_49_Conditional_10_Template, 12, 1);
    i0.ɵɵconditionalCreate(11, AppComponent_Conditional_1_Conditional_49_Conditional_11_Template, 16, 1);
    i0.ɵɵconditionalCreate(12, AppComponent_Conditional_1_Conditional_49_Conditional_12_Template, 18, 1);
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_1_Conditional_49_Conditional_13_Template, 18, 1);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_49_Conditional_14_Template, 12, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.view() === "Users" ? 2 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.view());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.canCreate(ctx_r1.view()) ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.loading() ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "Appointments" ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "Patients" ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "Prescriptions" ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "Vaccinations" ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "Users" ? 14 : -1);
} }
function AppComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "aside", 26)(2, "div", 27);
    i0.ɵɵelement(3, "img", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 29);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showMobileNav.set(false)); });
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nav")(7, "p", 30);
    i0.ɵɵtext(8, "WORKSPACE");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_For_10_Template, 4, 4, "button", 31, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 32)(12, "span", 33);
    i0.ɵɵtext(13, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div")(15, "strong");
    i0.ɵɵtext(16, "API connected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18, "localhost:3000/api/v1");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 34)(20, "span", 35);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div")(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "small");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 36);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(28, " \u21AA ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "main")(30, "header", 37)(31, "button", 38);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showMobileNav.set(true)); });
    i0.ɵɵtext(32, " \u2630 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 39)(34, "span");
    i0.ɵɵtext(35, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 40);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_1_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 41)(38, "span", 42);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 43);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(41, "Log out");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "section", 44);
    i0.ɵɵconditionalCreate(43, AppComponent_Conditional_1_Conditional_43_Template, 4, 1, "div", 9);
    i0.ɵɵconditionalCreate(44, AppComponent_Conditional_1_Conditional_44_Template, 4, 1, "div", 10);
    i0.ɵɵconditionalCreate(45, AppComponent_Conditional_1_Conditional_45_Template, 33, 7)(46, AppComponent_Conditional_1_Conditional_46_Template, 72, 19)(47, AppComponent_Conditional_1_Conditional_47_Template, 52, 7, "div", 45)(48, AppComponent_Conditional_1_Conditional_48_Template, 83, 16, "div", 46)(49, AppComponent_Conditional_1_Conditional_49_Template, 15, 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("mobile-open", ctx_r1.showMobileNav());
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.navItems());
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.initials(ctx_r1.auth.currentUser()));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(ctx_r1.auth.currentUser()));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.roleLabel(ctx_r1.auth.role()));
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r1.search());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.roleLabel(ctx_r1.auth.role()));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.error() ? 43 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.notice() ? 44 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.role() === "PATIENT" ? 45 : ctx_r1.view() === "Dashboard" ? 46 : ctx_r1.view() === "Consultation" ? 47 : ctx_r1.view() === "Medical Certificate" && ctx_r1.auth.role() === "DOCTOR" ? 48 : 49);
} }
function AppComponent_Conditional_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_2_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 181);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r53 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", p_r53.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r53));
} }
function AppComponent_Conditional_2_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "No patients available.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_2_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 181);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r54 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", d_r54.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(d_r54));
} }
function AppComponent_Conditional_2_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 183);
    i0.ɵɵtext(1, "No active doctors found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_2_Conditional_148_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 198)(1, "label");
    i0.ɵɵtext(2, "Status");
    i0.ɵɵelementStart(3, "select", 202);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Conditional_148_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.status, $event) || (ctx_r1.appointmentForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option");
    i0.ɵɵtext(5, "PENDING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option");
    i0.ɵɵtext(7, "CONFIRMED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option");
    i0.ɵɵtext(9, "COMPLETED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option");
    i0.ɵɵtext(11, "NO_SHOW");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option");
    i0.ɵɵtext(13, "CANCELLED");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "label");
    i0.ɵɵtext(15, "Internal notes");
    i0.ɵɵelementStart(16, "textarea", 203);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Conditional_148_Template_textarea_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.notes, $event) || (ctx_r1.appointmentForm.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.status);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.notes);
} }
function AppComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "section", 171)(2, "header", 172)(3, "div", 173);
    i0.ɵɵtext(4, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 174);
    i0.ɵɵtext(7, "APPOINTMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 175);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(11, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_2_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("appointment")); });
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_2_Conditional_13_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(14, "section", 177)(15, "div", 178)(16, "span");
    i0.ɵɵtext(17, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div")(19, "h3");
    i0.ɵɵtext(20, "Patient & doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵtext(22, "Select who the visit is for and the assigned physician");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 179)(24, "label")(25, "span");
    i0.ɵɵtext(26, "Patient ");
    i0.ɵɵelementStart(27, "em");
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "select", 180);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.patientId, $event) || (ctx_r1.appointmentForm.patientId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.syncAppointmentPatient($event)); });
    i0.ɵɵelementStart(30, "option", 20);
    i0.ɵɵtext(31, "Select a patient");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(32, AppComponent_Conditional_2_For_33_Template, 2, 2, "option", 181, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(34, AppComponent_Conditional_2_Conditional_34_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "label")(36, "span");
    i0.ɵɵtext(37, "Doctor ");
    i0.ɵɵelementStart(38, "em");
    i0.ɵɵtext(39, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "select", 182);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.assignedDoctorId, $event) || (ctx_r1.appointmentForm.assignedDoctorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(41, "option", 20);
    i0.ɵɵtext(42, "Select a doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, AppComponent_Conditional_2_For_44_Template, 2, 2, "option", 181, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(45, AppComponent_Conditional_2_Conditional_45_Template, 2, 0, "small", 183);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "section", 177)(47, "div", 178)(48, "span");
    i0.ɵɵtext(49, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div")(51, "h3");
    i0.ɵɵtext(52, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "p");
    i0.ɵɵtext(54, "Choose the date, time, and type of visit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(55, "div", 184)(56, "label")(57, "span");
    i0.ɵɵtext(58, "Date ");
    i0.ɵɵelementStart(59, "em");
    i0.ɵɵtext(60, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "app-material-date-picker", 185);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_app_material_date_picker_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.date, $event) || (ctx_r1.appointmentForm.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "label")(63, "span");
    i0.ɵɵtext(64, "Time ");
    i0.ɵɵelementStart(65, "em");
    i0.ɵɵtext(66, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "input", 186);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.time, $event) || (ctx_r1.appointmentForm.time = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "label")(69, "span");
    i0.ɵɵtext(70, "Visit type ");
    i0.ɵɵelementStart(71, "em");
    i0.ɵɵtext(72, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "select", 187);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_73_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.visitType, $event) || (ctx_r1.appointmentForm.visitType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(74, "option", 20);
    i0.ɵɵtext(75, "Select visit type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "option");
    i0.ɵɵtext(77, "New patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "option");
    i0.ɵɵtext(79, "Returning");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "option");
    i0.ɵɵtext(81, "Follow-up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "option");
    i0.ɵɵtext(83, "Consultation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "option");
    i0.ɵɵtext(85, "Routine check-up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "option");
    i0.ɵɵtext(87, "Vaccination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "option");
    i0.ɵɵtext(89, "Laboratory review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "option");
    i0.ɵɵtext(91, "Urgent visit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "option");
    i0.ɵɵtext(93, "Teleconsultation");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(94, "section", 177)(95, "div", 178)(96, "span");
    i0.ɵɵtext(97, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "div")(99, "h3");
    i0.ɵɵtext(100, "Patient vitals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "p");
    i0.ɵɵtext(102, " Capture the latest screening values before the doctor sees the patient ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(103, "div", 188)(104, "label")(105, "span");
    i0.ɵɵtext(106, "Blood pressure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "input", 189);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_107_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.bloodPressure, $event) || (ctx_r1.appointmentForm.bloodPressure = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(108, "label")(109, "span");
    i0.ɵɵtext(110, "Heart rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(111, "input", 190);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_111_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.heartRate, $event) || (ctx_r1.appointmentForm.heartRate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(112, "label")(113, "span");
    i0.ɵɵtext(114, "Respiratory rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "input", 191);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_115_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.respiratoryRate, $event) || (ctx_r1.appointmentForm.respiratoryRate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(116, "label")(117, "span");
    i0.ɵɵtext(118, "Temperature");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "input", 192);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_119_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.bodyTemperatureC, $event) || (ctx_r1.appointmentForm.bodyTemperatureC = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(120, "label")(121, "span");
    i0.ɵɵtext(122, "Oxygen saturation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "input", 193);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_123_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.oxygenSaturation, $event) || (ctx_r1.appointmentForm.oxygenSaturation = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(124, "label")(125, "span");
    i0.ɵɵtext(126, "Weight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "input", 194);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_127_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.weightKg, $event) || (ctx_r1.appointmentForm.weightKg = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(128, "label")(129, "span");
    i0.ɵɵtext(130, "Height");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(131, "input", 195);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_131_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.heightCm, $event) || (ctx_r1.appointmentForm.heightCm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(132, "section", 177)(133, "div", 178)(134, "span");
    i0.ɵɵtext(135, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(136, "div")(137, "h3");
    i0.ɵɵtext(138, "Visit details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "p");
    i0.ɵɵtext(140, "Add context for the receiving care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(141, "div", 196)(142, "label")(143, "span");
    i0.ɵɵtext(144, "Purpose ");
    i0.ɵɵelementStart(145, "em");
    i0.ɵɵtext(146, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(147, "textarea", 197);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_textarea_ngModelChange_147_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.purpose, $event) || (ctx_r1.appointmentForm.purpose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(148, AppComponent_Conditional_2_Conditional_148_Template, 17, 2, "div", 198);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(149, "footer", 199)(150, "div")(151, "span", 200);
    i0.ɵɵtext(152, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(153, "small");
    i0.ɵɵtext(154, "The doctor\u2019s schedule will be checked for conflicts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(155, "div")(156, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_2_Template_button_click_156_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(157, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(158, "button", 201);
    i0.ɵɵtext(159);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected() ? "Edit appointment" : "Book appointment", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.error() ? 13 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.patientId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.patients());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.patients().length ? 34 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.assignedDoctorId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.doctors());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.doctors().length ? 45 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.date);
    i0.ɵɵproperty("required", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.time);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.visitType);
    i0.ɵɵadvance(34);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.bloodPressure);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.heartRate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.respiratoryRate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.bodyTemperatureC);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.oxygenSaturation);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.weightKg);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.heightCm);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.purpose);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selected() ? 148 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading() || !ctx_r1.doctors().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Book appointment", " ");
} }
function AppComponent_Conditional_3_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Update demographic and clinical information.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_3_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "section", 204)(2, "header", 205)(3, "div", 206);
    i0.ɵɵtext(4, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 174);
    i0.ɵɵtext(7, "PATIENT RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 207);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, AppComponent_Conditional_3_Conditional_10_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_3_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(12, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_3_Template_form_ngSubmit_13_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("patient")); });
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_3_Conditional_14_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(15, "section", 208)(16, "div", 178)(17, "span");
    i0.ɵɵtext(18, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "h3");
    i0.ɵɵtext(21, "Personal information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23, "Identity and demographic details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 209)(25, "label")(26, "span");
    i0.ɵɵtext(27, "First name ");
    i0.ɵɵelementStart(28, "em");
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "input", 210);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.firstName, $event) || (ctx_r1.patientForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "label")(32, "span");
    i0.ɵɵtext(33, "Last name ");
    i0.ɵɵelementStart(34, "em");
    i0.ɵɵtext(35, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "input", 211);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.lastName, $event) || (ctx_r1.patientForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Date of birth ");
    i0.ɵɵelementStart(40, "em");
    i0.ɵɵtext(41, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "app-material-date-picker", 212);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_app_material_date_picker_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.dateOfBirth, $event) || (ctx_r1.patientForm.dateOfBirth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "label");
    i0.ɵɵtext(44, "Sex");
    i0.ɵɵelementStart(45, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.sex, $event) || (ctx_r1.patientForm.sex = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(46, "option", 20);
    i0.ɵɵtext(47, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option");
    i0.ɵɵtext(49, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option");
    i0.ɵɵtext(51, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option");
    i0.ɵɵtext(53, "Other");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "label");
    i0.ɵɵtext(55, "Blood type");
    i0.ɵɵelementStart(56, "select", 213);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.bloodType, $event) || (ctx_r1.patientForm.bloodType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(57, "option", 20);
    i0.ɵɵtext(58, "Unknown");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "option");
    i0.ɵɵtext(60, "A+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "option");
    i0.ɵɵtext(62, "A-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "option");
    i0.ɵɵtext(64, "B+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "option");
    i0.ɵɵtext(66, "B-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "option");
    i0.ɵɵtext(68, "AB+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "option");
    i0.ɵɵtext(70, "AB-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "option");
    i0.ɵɵtext(72, "O+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "option");
    i0.ɵɵtext(74, "O-");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(75, "section", 208)(76, "div", 178)(77, "span");
    i0.ɵɵtext(78, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "div")(80, "h3");
    i0.ɵɵtext(81, "Contact & coverage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "p");
    i0.ɵɵtext(83, "Ways to reach the patient");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(84, "div", 214)(85, "label");
    i0.ɵɵtext(86, "Mobile number");
    i0.ɵɵelementStart(87, "input", 215);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_87_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.mobileNumber, $event) || (ctx_r1.patientForm.mobileNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "label");
    i0.ɵɵtext(89, "Email address");
    i0.ɵɵelementStart(90, "input", 216);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_90_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emailAddress, $event) || (ctx_r1.patientForm.emailAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "label");
    i0.ɵɵtext(92, "PhilHealth ID");
    i0.ɵɵelementStart(93, "input", 217);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_93_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.philHealthInsuranceId, $event) || (ctx_r1.patientForm.philHealthInsuranceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(94, "label", 218);
    i0.ɵɵtext(95, "Home address");
    i0.ɵɵelementStart(96, "input", 219);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_96_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.homeAddress, $event) || (ctx_r1.patientForm.homeAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(97, "section", 208)(98, "div", 178)(99, "span");
    i0.ɵɵtext(100, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "div")(102, "h3");
    i0.ɵɵtext(103, "Emergency contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "p");
    i0.ɵɵtext(105, "Contact in case of urgent care");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(106, "div", 220)(107, "label");
    i0.ɵɵtext(108, "Contact name");
    i0.ɵɵelementStart(109, "input", 221);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactName, $event) || (ctx_r1.patientForm.emergencyContactName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(110, "label");
    i0.ɵɵtext(111, "Relationship");
    i0.ɵɵelementStart(112, "select", 222);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_112_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactRelationship, $event) || (ctx_r1.patientForm.emergencyContactRelationship = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(113, "option", 20);
    i0.ɵɵtext(114, "Select relationship");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "optgroup", 223)(116, "option");
    i0.ɵɵtext(117, "Mother");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "option");
    i0.ɵɵtext(119, "Father");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "option");
    i0.ɵɵtext(121, "Parent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(122, "option");
    i0.ɵɵtext(123, "Son");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "option");
    i0.ɵɵtext(125, "Daughter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(126, "option");
    i0.ɵɵtext(127, "Child");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(128, "option");
    i0.ɵɵtext(129, "Brother");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(130, "option");
    i0.ɵɵtext(131, "Sister");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "option");
    i0.ɵɵtext(133, "Sibling");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(134, "optgroup", 224)(135, "option");
    i0.ɵɵtext(136, "Spouse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "option");
    i0.ɵɵtext(138, "Partner");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "option");
    i0.ɵɵtext(140, "Grandparent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(141, "option");
    i0.ɵɵtext(142, "Grandchild");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(143, "option");
    i0.ɵɵtext(144, "Aunt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(145, "option");
    i0.ɵɵtext(146, "Uncle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(147, "option");
    i0.ɵɵtext(148, "Cousin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(149, "option");
    i0.ɵɵtext(150, "Relative");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(151, "optgroup", 225)(152, "option");
    i0.ɵɵtext(153, "Legal guardian");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(154, "option");
    i0.ɵɵtext(155, "Caregiver");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(156, "option");
    i0.ɵɵtext(157, "Friend");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(158, "option");
    i0.ɵɵtext(159, "Neighbor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(160, "option");
    i0.ɵɵtext(161, "Employer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(162, "option");
    i0.ɵɵtext(163, "Other");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(164, "label");
    i0.ɵɵtext(165, "Contact number");
    i0.ɵɵelementStart(166, "input", 226);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_166_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactNumber, $event) || (ctx_r1.patientForm.emergencyContactNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(167, "section", 227)(168, "div", 178)(169, "span");
    i0.ɵɵtext(170, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(171, "div")(172, "h3");
    i0.ɵɵtext(173, "Clinical overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(174, "p");
    i0.ɵɵtext(175, "Important information visible to the care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(176, "div", 228)(177, "label");
    i0.ɵɵtext(178, "Known allergies");
    i0.ɵɵelementStart(179, "textarea", 229);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_textarea_ngModelChange_179_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.allergies, $event) || (ctx_r1.patientForm.allergies = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(180, "label");
    i0.ɵɵtext(181, "Medical conditions");
    i0.ɵɵelementStart(182, "textarea", 230);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_textarea_ngModelChange_182_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.conditions, $event) || (ctx_r1.patientForm.conditions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(183, "footer", 231)(184, "div")(185, "span", 200);
    i0.ɵɵtext(186, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(187, "small");
    i0.ɵɵtext(188, "Stored securely in the patient record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(189, "div")(190, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_3_Template_button_click_190_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(191, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(192, "button", 201);
    i0.ɵɵtext(193);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected() ? "Edit patient" : "Register new patient", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selected() ? 10 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.error() ? 14 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.firstName);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.lastName);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.dateOfBirth);
    i0.ɵɵproperty("required", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.sex);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.bloodType);
    i0.ɵɵadvance(31);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.mobileNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.emailAddress);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.philHealthInsuranceId);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.homeAddress);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.emergencyContactName);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.emergencyContactRelationship);
    i0.ɵɵadvance(54);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.emergencyContactNumber);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.allergies);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.patientForm.conditions);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Register patient", " ");
} }
function AppComponent_Conditional_4_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_4_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 181);
} if (rf & 2) {
    const p_r58 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r1.fullName(p_r58));
} }
function AppComponent_Conditional_4_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 129);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patient_r59 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("\u2713 ", ctx_r1.fullName(patient_r59), " selected \u00B7 Allergies: ", patient_r59.allergies || "none recorded");
} }
function AppComponent_Conditional_4_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 183);
    i0.ɵɵtext(1, "Choose a matching patient from the suggestions.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_4_Conditional_68_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 252)(1, "header")(2, "div")(3, "span", 254);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "strong");
    i0.ɵɵtext(7, "Additional medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 255);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Conditional_68_For_2_Template_button_click_10_listener() { const $index_r62 = i0.ɵɵrestoreView(_r61).$index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removeMedication($index_r62)); });
    i0.ɵɵtext(11, " Remove ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 242)(13, "label")(14, "span");
    i0.ɵɵtext(15, "Medication ");
    i0.ɵɵelementStart(16, "em");
    i0.ɵɵtext(17, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 256);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_18_listener($event) { const medication_r63 = i0.ɵɵrestoreView(_r61).$implicit; i0.ɵɵtwoWayBindingSet(medication_r63.medication, $event) || (medication_r63.medication = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Dosage ");
    i0.ɵɵelementStart(22, "em");
    i0.ɵɵtext(23, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "input", 257);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_24_listener($event) { const medication_r63 = i0.ɵɵrestoreView(_r61).$implicit; i0.ɵɵtwoWayBindingSet(medication_r63.dosage, $event) || (medication_r63.dosage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "label")(26, "span");
    i0.ɵɵtext(27, "Quantity ");
    i0.ɵɵelementStart(28, "em");
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "input", 258);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_30_listener($event) { const medication_r63 = i0.ɵɵrestoreView(_r61).$implicit; i0.ɵɵtwoWayBindingSet(medication_r63.quantity, $event) || (medication_r63.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "label");
    i0.ɵɵtext(32, "Refills");
    i0.ɵɵelementStart(33, "input", 259);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_33_listener($event) { const medication_r63 = i0.ɵɵrestoreView(_r61).$implicit; i0.ɵɵtwoWayBindingSet(medication_r63.refills, $event) || (medication_r63.refills = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "label", 260)(35, "span");
    i0.ɵɵtext(36, "Patient instructions ");
    i0.ɵɵelementStart(37, "em");
    i0.ɵɵtext(38, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "textarea", 261);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_textarea_ngModelChange_39_listener($event) { const medication_r63 = i0.ɵɵrestoreView(_r61).$implicit; i0.ɵɵtwoWayBindingSet(medication_r63.instructions, $event) || (medication_r63.instructions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const medication_r63 = ctx.$implicit;
    const $index_r62 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate($index_r62 + 2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Medication ", $index_r62 + 2, " of ", ctx_r1.additionalMedications.length + 1);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("name", "extraMedication" + $index_r62);
    i0.ɵɵtwoWayProperty("ngModel", medication_r63.medication);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraDosage" + $index_r62);
    i0.ɵɵtwoWayProperty("ngModel", medication_r63.dosage);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraQuantity" + $index_r62);
    i0.ɵɵtwoWayProperty("ngModel", medication_r63.quantity);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "extraRefills" + $index_r62);
    i0.ɵɵtwoWayProperty("ngModel", medication_r63.refills);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraInstructions" + $index_r62);
    i0.ɵɵtwoWayProperty("ngModel", medication_r63.instructions);
} }
function AppComponent_Conditional_4_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 247);
    i0.ɵɵrepeaterCreate(1, AppComponent_Conditional_4_Conditional_68_For_2_Template, 40, 13, "article", 252, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementStart(3, "button", 253);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Conditional_68_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addMedication()); });
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "\uFF0B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8, "Add another medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Include an additional medication in this prescription");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.additionalMedications);
} }
function AppComponent_Conditional_4_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementStart(2, "select", 262);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_88_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.status, $event) || (ctx_r1.prescriptionForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(3, "option");
    i0.ɵɵtext(4, "DRAFT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option");
    i0.ɵɵtext(6, "ISSUED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option");
    i0.ɵɵtext(8, "CANCELLED");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.status);
} }
function AppComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 232)(2, "header", 233)(3, "div", 234);
    i0.ɵɵtext(4, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "MEDICATION ORDER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 236);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Document medication details and safe-use instructions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_4_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("prescription")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_4_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 237)(17, "div", 238)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Confirm identity and review allergy status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 239)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Patient ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 240);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolvePrescriptionPatient($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "datalist", 241);
    i0.ɵɵrepeaterCreate(33, AppComponent_Conditional_4_For_34_Template, 1, 1, "option", 181, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(35, AppComponent_Conditional_4_Conditional_35_Template, 2, 2, "small", 129)(36, AppComponent_Conditional_4_Conditional_36_Template, 2, 0, "small", 183);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "section", 237)(38, "div", 238)(39, "span");
    i0.ɵɵtext(40, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div")(42, "h3");
    i0.ɵɵtext(43, "Medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45, "Drug, dose, and dispensing quantity");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 242)(47, "label")(48, "span");
    i0.ɵɵtext(49, "Medication ");
    i0.ɵɵelementStart(50, "em");
    i0.ɵɵtext(51, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "input", 243);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.medication, $event) || (ctx_r1.prescriptionForm.medication = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Dosage ");
    i0.ɵɵelementStart(56, "em");
    i0.ɵɵtext(57, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "input", 244);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_58_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.dosage, $event) || (ctx_r1.prescriptionForm.dosage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "label")(60, "span");
    i0.ɵɵtext(61, "Quantity ");
    i0.ɵɵelementStart(62, "em");
    i0.ɵɵtext(63, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "input", 245);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.quantity, $event) || (ctx_r1.prescriptionForm.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "label");
    i0.ɵɵtext(66, "Refills");
    i0.ɵɵelementStart(67, "input", 246);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.refills, $event) || (ctx_r1.prescriptionForm.refills = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(68, AppComponent_Conditional_4_Conditional_68_Template, 11, 0, "div", 247);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "section", 237)(70, "div", 238)(71, "span");
    i0.ɵɵtext(72, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "div")(74, "h3");
    i0.ɵɵtext(75, "Directions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "p");
    i0.ɵɵtext(77, "Clear instructions for the patient and care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(78, "div", 248)(79, "label")(80, "span");
    i0.ɵɵtext(81, "Patient instructions ");
    i0.ɵɵelementStart(82, "em");
    i0.ɵɵtext(83, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "textarea", 249);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_textarea_ngModelChange_84_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.instructions, $event) || (ctx_r1.prescriptionForm.instructions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "label");
    i0.ɵɵtext(86, "Clinical notes");
    i0.ɵɵelementStart(87, "textarea", 250);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_textarea_ngModelChange_87_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.notes, $event) || (ctx_r1.prescriptionForm.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(88, AppComponent_Conditional_4_Conditional_88_Template, 9, 1, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "footer", 251)(90, "div")(91, "span", 200);
    i0.ɵɵtext(92, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "small");
    i0.ɵɵtext(94, "Review allergies and dosage before saving");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(95, "div")(96, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Template_button_click_96_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(97, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "button", 201);
    i0.ɵɵtext(99);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected() ? "Edit prescription" : "New prescription", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.error() ? 15 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngModel", ctx_r1.prescriptionPatientSearch);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.patients());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_5_0 = ctx_r1.selectedPrescriptionPatient()) ? 35 : ctx_r1.prescriptionPatientSearch ? 36 : -1, tmp_5_0);
    i0.ɵɵadvance(17);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.medication);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.dosage);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.quantity);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.refills);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.selected() ? 68 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.instructions);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prescriptionForm.notes);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selected() ? 88 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Save prescription", " ");
} }
function AppComponent_Conditional_5_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_5_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 181);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r66 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r1.fullName(p_r66));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r66.patientId);
} }
function AppComponent_Conditional_5_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 129);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patient_r67 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("\u2713 ", ctx_r1.fullName(patient_r67), " selected \u00B7 ", patient_r67.patientId);
} }
function AppComponent_Conditional_5_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 183);
    i0.ɵɵtext(1, "Choose a matching patient from the suggestions.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_5_For_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 181);
} if (rf & 2) {
    const vaccine_r68 = ctx.$implicit;
    i0.ɵɵproperty("value", vaccine_r68);
} }
function AppComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 263)(2, "header", 233)(3, "div", 264);
    i0.ɵɵtext(4, "\u271A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "IMMUNIZATION RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 265);
    i0.ɵɵtext(9, "Add vaccination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Record administration and vaccine traceability details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_5_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("vaccine")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_5_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 237)(17, "div", 238)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Find and confirm the vaccination recipient");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 266)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Patient name ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 267);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolveVaccinePatient($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "datalist", 268);
    i0.ɵɵrepeaterCreate(33, AppComponent_Conditional_5_For_34_Template, 2, 2, "option", 181, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(35, AppComponent_Conditional_5_Conditional_35_Template, 2, 2, "small", 129)(36, AppComponent_Conditional_5_Conditional_36_Template, 2, 0, "small", 183);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "section", 237)(38, "div", 238)(39, "span");
    i0.ɵɵtext(40, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div")(42, "h3");
    i0.ɵɵtext(43, "Vaccine details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45, "Vaccine, dose, and immunization status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 269)(47, "label")(48, "span");
    i0.ɵɵtext(49, "Vaccine ");
    i0.ɵɵelementStart(50, "em");
    i0.ɵɵtext(51, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "input", 270);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.vaccineName, $event) || (ctx_r1.vaccineForm.vaccineName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "datalist", 271);
    i0.ɵɵrepeaterCreate(54, AppComponent_Conditional_5_For_55_Template, 1, 1, "option", 181, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "small");
    i0.ɵɵtext(57, "You may enter another vaccine not listed.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "label")(59, "span");
    i0.ɵɵtext(60, "Dose ");
    i0.ɵɵelementStart(61, "em");
    i0.ɵɵtext(62, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "input", 272);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_63_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.dose, $event) || (ctx_r1.vaccineForm.dose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "label")(65, "span");
    i0.ɵɵtext(66, "Status ");
    i0.ɵɵelementStart(67, "em");
    i0.ɵɵtext(68, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "select", 273);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_select_ngModelChange_69_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.status, $event) || (ctx_r1.vaccineForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(70, "option");
    i0.ɵɵtext(71, "COMPLETED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "option");
    i0.ɵɵtext(73, "SCHEDULED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "option");
    i0.ɵɵtext(75, "DEFERRED");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(76, "section", 237)(77, "div", 238)(78, "span");
    i0.ɵɵtext(79, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div")(81, "h3");
    i0.ɵɵtext(82, "Administration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "p");
    i0.ɵɵtext(84, "When and by whom the vaccine was given");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(85, "div", 248)(86, "label")(87, "span");
    i0.ɵɵtext(88, "Date administered ");
    i0.ɵɵelementStart(89, "em");
    i0.ɵɵtext(90, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "app-material-date-picker", 274);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_app_material_date_picker_ngModelChange_91_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.dateAdministered, $event) || (ctx_r1.vaccineForm.dateAdministered = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(92, "label")(93, "span");
    i0.ɵɵtext(94, "Administered by ");
    i0.ɵɵelementStart(95, "em");
    i0.ɵɵtext(96, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(97, "input", 275);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_97_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.administeredBy, $event) || (ctx_r1.vaccineForm.administeredBy = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(98, "section", 237)(99, "div", 238)(100, "span");
    i0.ɵɵtext(101, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "div")(103, "h3");
    i0.ɵɵtext(104, "Traceability");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "p");
    i0.ɵɵtext(106, "Manufacturer and batch information");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(107, "div", 248)(108, "label");
    i0.ɵɵtext(109, "Manufacturer");
    i0.ɵɵelementStart(110, "input", 276);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_110_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.manufacturer, $event) || (ctx_r1.vaccineForm.manufacturer = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(111, "label");
    i0.ɵɵtext(112, "Lot number");
    i0.ɵɵelementStart(113, "input", 277);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_113_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.lotNumber, $event) || (ctx_r1.vaccineForm.lotNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(114, "footer", 251)(115, "div")(116, "span", 200);
    i0.ɵɵtext(117, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "small");
    i0.ɵɵtext(119, "This record becomes part of the patient\u2019s immunization history");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(120, "div")(121, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_5_Template_button_click_121_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(122, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "button", 201);
    i0.ɵɵtext(124);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r1.error() ? 15 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngModel", ctx_r1.vaccinePatientSearch);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.patients());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_4_0 = ctx_r1.selectedVaccinePatient()) ? 35 : ctx_r1.vaccinePatientSearch ? 36 : -1, tmp_4_0);
    i0.ɵɵadvance(17);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.vaccineName);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.vaccineSuggestions);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.dose);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.status);
    i0.ɵɵadvance(22);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.dateAdministered);
    i0.ɵɵproperty("required", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.administeredBy);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.manufacturer);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.lotNumber);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : "Save vaccination", " ");
} }
function AppComponent_Conditional_6_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 278)(2, "header", 233)(3, "div", 279);
    i0.ɵɵtext(4, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "CONSULTATION NOTE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 280);
    i0.ɵɵtext(9, "Assessment and plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, " Document the current assessment, treatment plan, orders, and follow-up guidance. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_6_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_6_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveConsultationNote()); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_6_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 237)(17, "div", 238)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Assessment and diagnosis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, " Summarize the clinical impression and working diagnosis for this visit ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 239)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Assessment and diagnosis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "textarea", 281);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_textarea_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.consultationNoteForm.assessmentDiagnosis, $event) || (ctx_r1.consultationNoteForm.assessmentDiagnosis = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(30, "section", 237)(31, "div", 238)(32, "span");
    i0.ɵɵtext(33, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div")(35, "h3");
    i0.ɵɵtext(36, "Treatment plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "p");
    i0.ɵɵtext(38, " Describe medications, care instructions, and immediate management ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 239)(40, "label")(41, "span");
    i0.ɵɵtext(42, "Treatment plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "textarea", 282);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_textarea_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.consultationNoteForm.treatmentPlan, $event) || (ctx_r1.consultationNoteForm.treatmentPlan = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "section", 237)(45, "div", 238)(46, "span");
    i0.ɵɵtext(47, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div")(49, "h3");
    i0.ɵɵtext(50, "Diagnostic orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, " List requested labs, imaging, or additional diagnostic workups ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 239)(54, "label")(55, "span");
    i0.ɵɵtext(56, "Diagnostic orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "textarea", 283);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_textarea_ngModelChange_57_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.consultationNoteForm.diagnosticOrders, $event) || (ctx_r1.consultationNoteForm.diagnosticOrders = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(58, "section", 237)(59, "div", 238)(60, "span");
    i0.ɵɵtext(61, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div")(63, "h3");
    i0.ɵɵtext(64, "Referrals and follow-up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "p");
    i0.ɵɵtext(66, " Capture referrals, specialist coordination, and return instructions ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 239)(68, "label")(69, "span");
    i0.ɵɵtext(70, "Referrals and follow-up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "textarea", 284);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_textarea_ngModelChange_71_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.consultationNoteForm.referralsFollowUp, $event) || (ctx_r1.consultationNoteForm.referralsFollowUp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(72, "footer", 251)(73, "div")(74, "span", 200);
    i0.ɵɵtext(75, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "small");
    i0.ɵɵtext(77, "Saved to the current appointment record for this consultation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div")(79, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_6_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(80, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "button", 201);
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r1.error() ? 15 : -1);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.consultationNoteForm.assessmentDiagnosis);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.consultationNoteForm.treatmentPlan);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.consultationNoteForm.diagnosticOrders);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.consultationNoteForm.referralsFollowUp);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : "Save consultation note", " ");
} }
function AppComponent_Conditional_7_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 285)(2, "div", 286);
    i0.ɵɵtext(3, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 235);
    i0.ɵɵtext(5, "COMPLETE CONSULTATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 287);
    i0.ɵɵtext(7, "Is this consultation finished?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 288);
    i0.ɵɵtext(9, " Confirming will mark the appointment for ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " as completed. This status change will be saved immediately. ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_7_Conditional_13_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(14, "footer")(15, "button", 289);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r70); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(16, " Continue consultation ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 290);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r70); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmEndConsultation()); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(ctx_r1.consultationPatient()));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.error() ? 13 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Finishing\u2026" : "Yes, finish consultation", " ");
} }
function AppComponent_Conditional_8_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_8_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Account status");
    i0.ɵɵelementStart(2, "select", 304);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Conditional_70_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.isActive, $event) || (ctx_r1.userForm.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(3, "option", 305);
    i0.ɵɵtext(4, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 305);
    i0.ɵɵtext(6, "Inactive");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.isActive);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
} }
function AppComponent_Conditional_8_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 237)(1, "div", 238)(2, "span");
    i0.ɵɵtext(3, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h3");
    i0.ɵɵtext(6, "Temporary access");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Set the initial sign-in credentials");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 248)(10, "label")(11, "span");
    i0.ɵɵtext(12, "Temporary password ");
    i0.ɵɵelementStart(13, "em");
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "input", 306);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Conditional_71_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.password, $event) || (ctx_r1.userForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Use at least 8 characters.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Confirm password ");
    i0.ɵɵelementStart(21, "em");
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 307);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Conditional_71_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.confirmPassword, $event) || (ctx_r1.userForm.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p", 308);
    i0.ɵɵtext(25, " Share the temporary password through a secure channel. ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.password);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.confirmPassword);
} }
function AppComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 291)(2, "header", 233)(3, "div", 292);
    i0.ɵɵtext(4, "\u2659");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "ACCESS MANAGEMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 293);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_8_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_8_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("user")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_8_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 237)(17, "div", 238)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Account identity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Name and sign-in email address");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 248)(26, "label")(27, "span");
    i0.ɵɵtext(28, "First name ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 294);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.firstName, $event) || (ctx_r1.userForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "label")(33, "span");
    i0.ɵɵtext(34, "Last name ");
    i0.ɵɵelementStart(35, "em");
    i0.ɵɵtext(36, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "input", 295);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.lastName, $event) || (ctx_r1.userForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "label", 296)(39, "span");
    i0.ɵɵtext(40, "Email address ");
    i0.ɵɵelementStart(41, "em");
    i0.ɵɵtext(42, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "input", 297);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.email, $event) || (ctx_r1.userForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "section", 237)(45, "div", 238)(46, "span");
    i0.ɵɵtext(47, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div")(49, "h3");
    i0.ɵɵtext(50, "Access level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, "Role and account availability");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 248)(54, "label")(55, "span");
    i0.ɵɵtext(56, "Role ");
    i0.ɵɵelementStart(57, "em");
    i0.ɵɵtext(58, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "select", 298);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_8_Template_select_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.role, $event) || (ctx_r1.userForm.role = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(60, "option", 299);
    i0.ɵɵtext(61, "Administrator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 300);
    i0.ɵɵtext(63, "Doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 301);
    i0.ɵɵtext(65, "Nurse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option", 302);
    i0.ɵɵtext(67, "Secretary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "option", 303);
    i0.ɵɵtext(69, "Patient");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(70, AppComponent_Conditional_8_Conditional_70_Template, 7, 3, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(71, AppComponent_Conditional_8_Conditional_71_Template, 26, 2, "section", 237);
    i0.ɵɵelementStart(72, "footer", 251)(73, "div")(74, "span", 200);
    i0.ɵɵtext(75, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "small");
    i0.ɵɵtext(77, "Role permissions are enforced by the backend");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div")(79, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_8_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r71); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(80, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "button", 201);
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected() ? "Edit user" : "Register new user", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected() ? "Update account information and permissions" : "Create a secure clinic workspace account", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.error() ? 15 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.firstName);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.lastName);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.email);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.role);
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r1.selected() ? 70 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.selected() ? 71 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Create user", " ");
} }
function AppComponent_Conditional_9_Conditional_0_Conditional_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.selected().emergencyContactRelationship, " \u00B7 ");
} }
function AppComponent_Conditional_9_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 309)(1, "section", 310)(2, "header", 311)(3, "div", 312);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 174);
    i0.ɵɵtext(7, "PATIENT PROFILE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 313);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Clinical and contact information");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r74); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 314)(15, "section", 315)(16, "div", 316)(17, "span");
    i0.ɵɵtext(18, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "h3");
    i0.ɵɵtext(21, "Personal information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23, "Demographics and care identifiers");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "dl", 317)(25, "div")(26, "dt");
    i0.ɵɵtext(27, "Date of birth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div")(32, "dt");
    i0.ɵɵtext(33, "Age");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "dd");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div")(37, "dt");
    i0.ɵɵtext(38, "Sex");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "dd");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div")(42, "dt");
    i0.ɵɵtext(43, "Blood type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "dd");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div")(47, "dt");
    i0.ɵɵtext(48, "PhilHealth ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "dd");
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(51, "section", 315)(52, "div", 316)(53, "span");
    i0.ɵɵtext(54, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div")(56, "h3");
    i0.ɵɵtext(57, "Vital signs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "p");
    i0.ɵɵtext(59, "Latest measurements saved on the patient record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "dl", 317)(61, "div")(62, "dt");
    i0.ɵɵtext(63, "Blood pressure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "dd");
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div")(67, "dt");
    i0.ɵɵtext(68, "Heart rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "dd");
    i0.ɵɵtext(70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div")(72, "dt");
    i0.ɵɵtext(73, "Respiratory rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "dd");
    i0.ɵɵtext(75);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(76, "div")(77, "dt");
    i0.ɵɵtext(78, "Temperature");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "dd");
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "div")(82, "dt");
    i0.ɵɵtext(83, "Oxygen saturation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "dd");
    i0.ɵɵtext(85);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(86, "div")(87, "dt");
    i0.ɵɵtext(88, "Weight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "dd");
    i0.ɵɵtext(90);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "div")(92, "dt");
    i0.ɵɵtext(93, "Height");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "dd");
    i0.ɵɵtext(95);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(96, "div")(97, "dt");
    i0.ɵɵtext(98, "BMI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "dd");
    i0.ɵɵtext(100);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(101, "section", 315)(102, "div", 316)(103, "span");
    i0.ɵɵtext(104, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "div")(106, "h3");
    i0.ɵɵtext(107, "Contact details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(108, "p");
    i0.ɵɵtext(109, "Patient and emergency contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(110, "div", 318)(111, "dl", 317)(112, "div")(113, "dt");
    i0.ɵɵtext(114, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "dd");
    i0.ɵɵtext(116);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(117, "div")(118, "dt");
    i0.ɵɵtext(119, "Email address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "dd");
    i0.ɵɵtext(121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(122, "div", 319)(123, "dt");
    i0.ɵɵtext(124, "Home address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "dd");
    i0.ɵɵtext(126);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(127, "aside", 320)(128, "span");
    i0.ɵɵtext(129, "Emergency contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(130, "strong");
    i0.ɵɵtext(131);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "p");
    i0.ɵɵconditionalCreate(133, AppComponent_Conditional_9_Conditional_0_Conditional_133_Template, 2, 1, "span");
    i0.ɵɵtext(134);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(135, "section", 321)(136, "div", 316)(137, "span");
    i0.ɵɵtext(138, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "div")(140, "h3");
    i0.ɵɵtext(141, "Clinical overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(142, "p");
    i0.ɵɵtext(143, "Information requiring care-team attention");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(144, "div", 322)(145, "article", 323)(146, "span");
    i0.ɵɵtext(147, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(148, "div")(149, "small");
    i0.ɵɵtext(150, "KNOWN ALLERGIES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(151, "strong");
    i0.ɵɵtext(152);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(153, "article", 324)(154, "span");
    i0.ɵɵtext(155, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(156, "div")(157, "small");
    i0.ɵɵtext(158, "MEDICAL CONDITIONS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(159, "strong");
    i0.ɵɵtext(160);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(161, "footer", 325)(162, "small");
    i0.ɵɵtext(163, "Last available patient record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(164, "div")(165, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_0_Template_button_click_165_listener() { i0.ɵɵrestoreView(_r74); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(166, " Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(167, "button", 123);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_0_Template_button_click_167_listener() { i0.ɵɵrestoreView(_r74); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(ctx_r1.selected(), "patient")); });
    i0.ɵɵtext(168, " Edit patient ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.initials(ctx_r1.selected()));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(ctx_r1.selected()));
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 23, ctx_r1.selected().dateOfBirth, "longDate"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.age(ctx_r1.selected()), " years");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().sex || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().bloodType || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected().philHealthInsuranceId || "Not recorded", " ");
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(ctx_r1.selected().bloodPressure));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(ctx_r1.selected().heartRate, " bpm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.vitalDisplay(ctx_r1.selected().respiratoryRate, " breaths/min"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.vitalDisplay(ctx_r1.selected().bodyTemperatureC, " \u00B0C"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.vitalDisplay(ctx_r1.selected().oxygenSaturation, " %"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(ctx_r1.selected().weightKg, " kg"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(ctx_r1.selected().heightCm, " cm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.bmi(ctx_r1.selected()));
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(ctx_r1.selected().mobileNumber || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().emailAddress || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().homeAddress || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().emergencyContactName || "Not recorded");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selected().emergencyContactRelationship ? 133 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selected().emergencyContactNumber || "No contact number", " ");
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r1.selected().allergies || "None recorded");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.selected().conditions || "None recorded");
} }
function AppComponent_Conditional_9_Conditional_1_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.age(ctx_r1.selected().patient), " years \u00B7 ", ctx_r1.selected().patient.sex || "Sex not recorded", " ");
} }
function AppComponent_Conditional_9_Conditional_1_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Patient information unavailable ");
} }
function AppComponent_Conditional_9_Conditional_1_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 333)(1, "header")(2, "div")(3, "span", 98);
    i0.ɵɵtext(4, "PATIENT DETAILS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Patient information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Core demographic and contact details for this visit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "dl", 334)(10, "div")(11, "dt");
    i0.ɵɵtext(12, "Age");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "dd");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div")(16, "dt");
    i0.ɵɵtext(17, "Blood type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "dd");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "dt");
    i0.ɵɵtext(22, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "dd");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 335)(26, "dt");
    i0.ɵɵtext(27, "Home address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "dt");
    i0.ɵɵtext(32, "Known allergies");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "dd");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div")(36, "dt");
    i0.ɵɵtext(37, "Medical conditions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "dd");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "section", 333)(41, "header")(42, "div")(43, "span", 98);
    i0.ɵɵtext(44, "LATEST SCREENING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "h3");
    i0.ɵɵtext(46, "Patient vitals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "p");
    i0.ɵɵtext(48, " Most recently recorded measurements saved with the patient record ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "dl", 337)(50, "div")(51, "dt");
    i0.ɵɵtext(52, "Blood pressure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "dd");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div")(56, "dt");
    i0.ɵɵtext(57, "Heart rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "dd");
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "div")(61, "dt");
    i0.ɵɵtext(62, "Respiratory rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "dd");
    i0.ɵɵtext(64);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div")(66, "dt");
    i0.ɵɵtext(67, "Temperature");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "dd");
    i0.ɵɵtext(69);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div")(71, "dt");
    i0.ɵɵtext(72, "Oxygen saturation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "dd");
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "div")(76, "dt");
    i0.ɵɵtext(77, "Weight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "dd");
    i0.ɵɵtext(79);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(80, "div")(81, "dt");
    i0.ɵɵtext(82, "Height");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "dd");
    i0.ɵɵtext(84);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "div")(86, "dt");
    i0.ɵɵtext(87, "BMI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "dd");
    i0.ɵɵtext(89);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const patient_r76 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate1("", ctx_r1.age(patient_r76), " years");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r76.bloodType || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r76.mobileNumber || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r76.homeAddress || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r76.allergies || "None recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r76.conditions || "None recorded");
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.bloodPressure));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.heartRate, " bpm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.vitalDisplay(patient_r76.respiratoryRate, " breaths/min"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.bodyTemperatureC, " \u00B0C"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.oxygenSaturation, " %"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.weightKg, " kg"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.vitalDisplay(patient_r76.heightCm, " cm"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.bmi(patient_r76));
} }
function AppComponent_Conditional_9_Conditional_1_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 335)(1, "dt");
    i0.ɵɵtext(2, "Internal notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selected().notes);
} }
function AppComponent_Conditional_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 326)(2, "header", 233)(3, "div", 327);
    i0.ɵɵtext(4, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "APPOINTMENT OVERVIEW");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 328);
    i0.ɵɵtext(9, "Appointment details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, " Patient profile, visit details, and the latest recorded vitals ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_1_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r75); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 329)(15, "section", 330)(16, "div", 331)(17, "span", 332);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "small");
    i0.ɵɵtext(21, "PATIENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵconditionalCreate(25, AppComponent_Conditional_9_Conditional_1_Conditional_25_Template, 1, 2)(26, AppComponent_Conditional_9_Conditional_1_Conditional_26_Template, 1, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div")(28, "small");
    i0.ɵɵtext(29, "DOCTOR");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "small");
    i0.ɵɵtext(34, "SCHEDULE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵpipe(37, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div")(39, "small");
    i0.ɵɵtext(40, "STATUS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(43, AppComponent_Conditional_9_Conditional_1_Conditional_43_Template, 90, 14);
    i0.ɵɵelementStart(44, "section", 333)(45, "header")(46, "div")(47, "span", 98);
    i0.ɵɵtext(48, "VISIT DETAILS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "h3");
    i0.ɵɵtext(50, "Appointment information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, "Schedule and purpose captured for this consultation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "dl", 334)(54, "div")(55, "dt");
    i0.ɵɵtext(56, "Visit type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "dd");
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div")(60, "dt");
    i0.ɵɵtext(61, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "dd");
    i0.ɵɵtext(63);
    i0.ɵɵpipe(64, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div")(66, "dt");
    i0.ɵɵtext(67, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "dd");
    i0.ɵɵtext(69);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div")(71, "dt");
    i0.ɵɵtext(72, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "dd");
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "div", 335)(76, "dt");
    i0.ɵɵtext(77, "Purpose");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "dd");
    i0.ɵɵtext(79);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(80, AppComponent_Conditional_9_Conditional_1_Conditional_80_Template, 5, 1, "div", 335);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(81, "footer", 336)(82, "small");
    i0.ɵɵtext(83, "Read-only appointment record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "div")(85, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_1_Template_button_click_85_listener() { i0.ɵɵrestoreView(_r75); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(86, " Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "button", 123);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_1_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r75); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(ctx_r1.selected(), "appointment")); });
    i0.ɵɵtext(88, " Edit appointment ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r1.selected().patient ? ctx_r1.initials(ctx_r1.selected().patient) : "PT");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().patient ? ctx_r1.fullName(ctx_r1.selected().patient) : "Patient record unavailable");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selected().patient ? 25 : 26);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(ctx_r1.selected().doctor));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(37, 13, ctx_r1.selected().scheduledAt, "medium"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.selected().status);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_8_0 = ctx_r1.selected().patient) ? 43 : -1, tmp_8_0);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r1.selected().visitType);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(64, 16, ctx_r1.selected().date, "longDate"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.selected().time);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().status);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().purpose || "Not recorded");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selected().notes ? 80 : -1);
} }
function AppComponent_Conditional_9_Conditional_2_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 341)(1, "div")(2, "span", 160);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "PATIENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div")(10, "small");
    i0.ɵɵtext(11, "PRESCRIBED BY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "small");
    i0.ɵɵtext(16, "ISSUED DATE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(ctx_r1.selected().patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(ctx_r1.selected().patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(ctx_r1.selected().doctor));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 4, ctx_r1.selected().issuedAt, "longDate"));
} }
function AppComponent_Conditional_9_Conditional_2_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r78 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("record-wide", entry_r78[0] === "instructions" || entry_r78[0] === "notes" || entry_r78[0] === "purpose");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fieldLabel(entry_r78[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r78[1]);
} }
function AppComponent_Conditional_9_Conditional_2_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 344)(1, "span");
    i0.ɵɵtext(2, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "small");
    i0.ɵɵtext(5, "RECORDED ALLERGIES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.selected().allergies);
} }
function AppComponent_Conditional_9_Conditional_2_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 123);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_2_Conditional_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.print()); });
    i0.ɵɵtext(1, " Print prescription ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 338)(2, "header", 233)(3, "div", 327);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 235);
    i0.ɵɵtext(7, "CLINIC RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 339);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Review the complete saved record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 176);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(13, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 340);
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_9_Conditional_2_Conditional_15_Template, 20, 7, "section", 341);
    i0.ɵɵelementStart(16, "dl", 342);
    i0.ɵɵrepeaterCreate(17, AppComponent_Conditional_9_Conditional_2_For_18_Template, 5, 4, "div", 343, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, AppComponent_Conditional_9_Conditional_2_Conditional_19_Template, 8, 1, "aside", 344);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "footer", 336)(21, "small");
    i0.ɵɵtext(22, "Read-only clinic record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div")(24, "button", 118);
    i0.ɵɵlistener("click", function AppComponent_Conditional_9_Conditional_2_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(25, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(26, AppComponent_Conditional_9_Conditional_2_Conditional_26_Template, 2, 0, "button", 345);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("prescription-detail-modal", ctx_r1.detailKind() === "prescription");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.detailIcon());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.detailTitle());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.detailKind() === "prescription" ? 15 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.objectEntries(ctx_r1.selected()));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selected() && ctx_r1.selected().allergies ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("prescription-detail-footer", ctx_r1.detailKind() === "prescription");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(((tmp_9_0 = ctx_r1.selected()) == null ? null : tmp_9_0.medication) ? 26 : -1);
} }
function AppComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AppComponent_Conditional_9_Conditional_0_Template, 169, 26, "div", 309)(1, AppComponent_Conditional_9_Conditional_1_Template, 89, 19, "div", 4)(2, AppComponent_Conditional_9_Conditional_2_Template, 27, 9, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.detailKind() === "patient" ? 0 : ctx_r1.detailKind() === "appointment" ? 1 : 2);
} }
export class AppComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.api = inject(ApiService);
        this.view = signal('Dashboard', ...(ngDevMode ? [{ debugName: "view" }] : []));
        this.modal = signal(null, ...(ngDevMode ? [{ debugName: "modal" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.notice = signal('', ...(ngDevMode ? [{ debugName: "notice" }] : []));
        this.showMobileNav = signal(false, ...(ngDevMode ? [{ debugName: "showMobileNav" }] : []));
        this.search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : []));
        this.dashboard = signal(null, ...(ngDevMode ? [{ debugName: "dashboard" }] : []));
        this.appointments = signal([], ...(ngDevMode ? [{ debugName: "appointments" }] : []));
        this.patients = signal([], ...(ngDevMode ? [{ debugName: "patients" }] : []));
        this.prescriptions = signal([], ...(ngDevMode ? [{ debugName: "prescriptions" }] : []));
        this.vaccines = signal([], ...(ngDevMode ? [{ debugName: "vaccines" }] : []));
        this.users = signal([], ...(ngDevMode ? [{ debugName: "users" }] : []));
        this.patientProfile = signal(null, ...(ngDevMode ? [{ debugName: "patientProfile" }] : []));
        this.patientAppointments = signal([], ...(ngDevMode ? [{ debugName: "patientAppointments" }] : []));
        this.patientPrescriptions = signal([], ...(ngDevMode ? [{ debugName: "patientPrescriptions" }] : []));
        this.consultationAppointment = signal(null, ...(ngDevMode ? [{ debugName: "consultationAppointment" }] : []));
        this.consultationPatient = signal(null, ...(ngDevMode ? [{ debugName: "consultationPatient" }] : []));
        this.consultationAppointments = signal([], ...(ngDevMode ? [{ debugName: "consultationAppointments" }] : []));
        this.consultationPrescriptions = signal([], ...(ngDevMode ? [{ debugName: "consultationPrescriptions" }] : []));
        this.consultationVaccines = signal([], ...(ngDevMode ? [{ debugName: "consultationVaccines" }] : []));
        this.editingClinicalOverview = signal(false, ...(ngDevMode ? [{ debugName: "editingClinicalOverview" }] : []));
        this.selected = signal(null, ...(ngDevMode ? [{ debugName: "selected" }] : []));
        this.detailKind = signal(null, ...(ngDevMode ? [{ debugName: "detailKind" }] : []));
        this.loginForm = { email: '', password: '' };
        this.registerForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', dateOfBirth: '', sex: '', mobileNumber: '', homeAddress: '' };
        this.registerMode = false;
        this.appointmentForm = {};
        this.patientForm = {};
        this.prescriptionForm = {};
        this.prescriptionPatientSearch = '';
        this.additionalMedications = [];
        this.vaccineForm = {};
        this.vaccinePatientSearch = '';
        this.vaccineSuggestions = [
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
        this.userForm = {};
        this.medicalCertificateForm = {
            patientId: '',
            date: new Date().toISOString().slice(0, 10),
            details: '',
        };
        this.certificatePatientSearch = '';
        this.certificateSuggestionsOpen = signal(false, ...(ngDevMode ? [{ debugName: "certificateSuggestionsOpen" }] : []));
        this.clinicalOverviewForm = { allergies: '', conditions: '' };
        this.consultationNoteForm = { assessmentDiagnosis: '', treatmentPlan: '', diagnosticOrders: '', referralsFollowUp: '' };
        this.visiblePatients = computed(() => this.filter(this.patients(), p => `${p.firstName} ${p.lastName} ${p.patientId} ${p.conditions ?? ''}`), ...(ngDevMode ? [{ debugName: "visiblePatients" }] : []));
        this.visibleAppointments = computed(() => this.filter(this.appointments(), a => `${a.patient.firstName} ${a.patient.lastName} ${a.purpose} ${a.status}`), ...(ngDevMode ? [{ debugName: "visibleAppointments" }] : []));
        this.visiblePrescriptions = computed(() => this.filter(this.prescriptions(), p => `${p.patient.firstName} ${p.patient.lastName} ${p.medication} ${p.status}`), ...(ngDevMode ? [{ debugName: "visiblePrescriptions" }] : []));
        this.visibleVaccines = computed(() => this.filter(this.vaccines(), v => `${v.patient.firstName} ${v.patient.lastName} ${v.vaccineName} ${v.status}`), ...(ngDevMode ? [{ debugName: "visibleVaccines" }] : []));
        this.visibleUsers = computed(() => this.filter(this.users(), u => `${u.firstName} ${u.lastName} ${u.email} ${u.role}`), ...(ngDevMode ? [{ debugName: "visibleUsers" }] : []));
        this.certificatePatientSuggestions = computed(() => {
            const query = this.certificatePatientSearch.trim().toLowerCase();
            return this.patients().filter(patient => !query || `${this.fullName(patient)} ${patient.patientId}`.toLowerCase().includes(query)).slice(0, 8);
        }, ...(ngDevMode ? [{ debugName: "certificatePatientSuggestions" }] : []));
    }
    ngOnInit() { if (this.auth.authenticated())
        this.bootstrap(); }
    submitAuth() {
        this.error.set('');
        this.notice.set('');
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
    bootstrap() {
        this.loading.set(true);
        this.auth.loadProfile().subscribe({ next: () => { if (this.auth.role() === 'PATIENT') {
                this.loadPatientPortal();
                return;
            } this.loading.set(false); this.openView('Dashboard'); }, error: e => this.fail(e) });
    }
    loadPatientPortal() {
        forkJoin({ profile: this.api.myPatientProfile(), appointments: this.api.myAppointments(), prescriptions: this.api.myPrescriptions() }).subscribe({
            next: data => { this.patientProfile.set(data.profile); this.patientAppointments.set(data.appointments); this.patientPrescriptions.set(data.prescriptions); },
            error: e => this.fail(e),
            complete: () => this.loading.set(false)
        });
    }
    logout() { this.auth.logout().subscribe({ next: () => { this.resetData(); this.view.set('Dashboard'); }, error: () => { this.auth.clear(); this.resetData(); } }); }
    openView(view) { this.view.set(view); this.showMobileNav.set(false); this.load(view); }
    load(view) {
        if (this.auth.role() === 'PATIENT')
            return;
        if (view === 'Consultation')
            return;
        if (view === 'Medical Certificate') {
            this.error.set('');
            this.ensurePatients();
            return;
        }
        this.error.set('');
        this.loading.set(true);
        const request = view === 'Dashboard' ? this.api.dashboard() : view === 'Appointments' ? this.api.appointments() : view === 'Patients' ? this.api.patients() : view === 'Prescriptions' ? this.api.prescriptions() : view === 'Vaccinations' ? this.api.vaccines() : this.api.users();
        request.subscribe({ next: data => { if (view === 'Dashboard') {
                const d = data;
                this.dashboard.set(d);
                this.appointments.set(d.schedule);
            }
            else if (view === 'Appointments')
                this.appointments.set(data);
            else if (view === 'Patients')
                this.patients.set(data);
            else if (view === 'Prescriptions')
                this.prescriptions.set(data);
            else if (view === 'Vaccinations')
                this.vaccines.set(data);
            else
                this.users.set(data); }, error: e => this.fail(e), complete: () => this.loading.set(false) });
    }
    startConsultation(appointment) {
        if (this.auth.role() !== 'DOCTOR')
            return;
        this.error.set('');
        this.loading.set(true);
        this.consultationAppointment.set(appointment);
        this.view.set('Consultation');
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
    addConsultationPrescription() {
        const patient = this.consultationPatient();
        if (!patient)
            return;
        this.error.set('');
        this.selected.set(null);
        this.additionalMedications = [];
        this.prescriptionPatientSearch = this.fullName(patient);
        this.prescriptionForm = { patientId: patient.id, medication: '', dosage: '', instructions: '', quantity: 1, refills: 0, notes: '' };
        this.modal.set('prescription');
    }
    addConsultationVaccine() {
        const patient = this.consultationPatient();
        if (!patient)
            return;
        this.error.set('');
        this.selected.set(null);
        this.vaccinePatientSearch = this.fullName(patient);
        this.vaccineForm = {
            patientId: patient.id,
            vaccineName: '',
            dose: '',
            dateAdministered: new Date().toISOString().slice(0, 10),
            manufacturer: '',
            lotNumber: '',
            administeredBy: this.fullName(this.auth.currentUser()),
            status: 'COMPLETED'
        };
        this.modal.set('vaccine');
    }
    openConsultationNote() {
        const appointment = this.consultationAppointment();
        if (!appointment)
            return;
        this.error.set('');
        this.consultationNoteForm = this.readConsultationNote(appointment.notes);
        this.modal.set('consultation');
    }
    saveConsultationNote() {
        const appointment = this.consultationAppointment();
        if (!appointment)
            return;
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
    endConsultation() {
        if (!this.consultationAppointment())
            return;
        this.error.set('');
        this.modal.set('end-consultation');
    }
    confirmEndConsultation() {
        const appointment = this.consultationAppointment();
        if (!appointment)
            return;
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
    syncAppointmentPatient(patientId) {
        this.appointmentForm.patientId = patientId;
        const patient = this.patients().find(p => p.id === patientId);
        if (!patient)
            return;
        Object.assign(this.appointmentForm, this.patientVitalsForm(patient));
    }
    editClinicalOverview() {
        const patient = this.consultationPatient();
        if (!patient)
            return;
        this.clinicalOverviewForm = { allergies: patient.allergies ?? '', conditions: patient.conditions ?? '' };
        this.editingClinicalOverview.set(true);
    }
    saveClinicalOverview() {
        const patient = this.consultationPatient();
        if (!patient)
            return;
        this.error.set('');
        this.loading.set(true);
        this.api.updatePatient(patient.id, { allergies: this.clinicalOverviewForm.allergies.trim(), conditions: this.clinicalOverviewForm.conditions.trim() }).subscribe({
            next: updated => { this.consultationPatient.set(updated); this.editingClinicalOverview.set(false); this.notice.set('Clinical information updated successfully.'); },
            error: e => this.fail(e),
            complete: () => this.loading.set(false),
        });
    }
    navItems() { const role = this.auth.role(); if (role === 'PATIENT')
        return []; const items = [{ label: 'Dashboard', icon: '⌂' }, { label: 'Appointments', icon: '▣' }, { label: 'Patients', icon: '♧' }]; if (role !== 'FRONT_DESK')
        items.push({ label: 'Prescriptions', icon: 'Rx' }); items.push({ label: 'Vaccinations', icon: '✚' }); if (role === 'DOCTOR')
        items.push({ label: 'Medical Certificate', icon: 'MC' }); if (role === 'ADMIN')
        items.push({ label: 'Users', icon: '♙' }); return items; }
    canCreate(view) { const role = this.auth.role(); if (view === 'Appointments')
        return role === 'ADMIN' || role === 'FRONT_DESK' || role === 'DOCTOR'; if (view === 'Patients')
        return role === 'ADMIN' || role === 'FRONT_DESK'; if (view === 'Prescriptions' || view === 'Vaccinations')
        return role === 'ADMIN' || role === 'DOCTOR' || role === 'NURSE'; return view === 'Users' && role === 'ADMIN'; }
    openCreate(kind) {
        this.error.set('');
        this.selected.set(null);
        this.modal.set(kind);
        const today = new Date().toISOString().slice(0, 10);
        if (kind === 'appointment') {
            this.appointmentForm = { patientId: '', assignedDoctorId: '', date: today, time: '09:00', visitType: 'Returning', purpose: '', status: 'PENDING', bloodPressure: '', heartRate: '', respiratoryRate: '', bodyTemperatureC: '', oxygenSaturation: '', weightKg: '', heightCm: '' };
            this.loadReferences();
        }
        if (kind === 'patient')
            this.patientForm = { firstName: '', lastName: '', dateOfBirth: '', sex: '', mobileNumber: '', emailAddress: '', allergies: '', conditions: '' };
        if (kind === 'prescription') {
            this.prescriptionPatientSearch = '';
            this.additionalMedications = [];
            this.prescriptionForm = { patientId: '', medication: '', dosage: '', instructions: '', quantity: 1, refills: 0, notes: '' };
            this.ensurePatients();
        }
        if (kind === 'vaccine') {
            this.vaccinePatientSearch = '';
            this.vaccineForm = { patientId: '', vaccineName: '', dose: '', dateAdministered: today, manufacturer: '', lotNumber: '', administeredBy: this.fullName(this.auth.currentUser()), status: 'COMPLETED' };
            this.ensurePatients();
        }
        if (kind === 'user')
            this.userForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', role: 'DOCTOR' };
    }
    edit(item, kind) { this.error.set(''); this.selected.set(item); this.modal.set(kind); if (kind === 'appointment')
        this.appointmentForm = { patientId: item.patientId, assignedDoctorId: item.doctorId, date: item.date.slice(0, 10), time: item.time, visitType: item.visitType, purpose: item.purpose, durationMin: item.durationMin, status: item.status, notes: item.notes ?? '', ...this.patientVitalsForm(item.patient) }; if (kind === 'patient')
        this.patientForm = { ...item, dateOfBirth: item.dateOfBirth.slice(0, 10) }; if (kind === 'prescription') {
        this.additionalMedications = [];
        this.prescriptionPatientSearch = this.fullName(item.patient);
        this.prescriptionForm = { patientId: item.patientId, medication: item.medication, dosage: item.dosage, instructions: item.instructions, quantity: item.quantity, refills: item.refills, notes: item.notes ?? '', status: item.status };
    } if (kind === 'user')
        this.userForm = { firstName: item.firstName, lastName: item.lastName, email: item.email, role: item.role, isActive: item.isActive }; this.loadReferences(); }
    save(kind) {
        this.error.set('');
        const item = this.selected();
        let call;
        if (kind === 'user' && !item && this.userForm.password !== this.userForm.confirmPassword) {
            this.error.set('Passwords do not match.');
            return;
        }
        if (kind === 'prescription' && !this.prescriptionForm.patientId) {
            this.error.set('Select a patient from the suggestions.');
            return;
        }
        if (kind === 'vaccine' && !this.vaccineForm.patientId) {
            this.error.set('Select a patient from the suggestions.');
            return;
        }
        this.loading.set(true);
        if (kind === 'appointment') {
            const body = this.clean(this.appointmentForm);
            const patientId = this.appointmentForm.patientId;
            const vitals = this.clean(this.patientVitalsPayload(this.appointmentForm));
            ['heartRate', 'respiratoryRate', 'oxygenSaturation', 'bodyTemperatureC', 'weightKg', 'heightCm'].forEach(k => { if (vitals[k] !== undefined)
                vitals[k] = Number(vitals[k]); });
            ['bloodPressure', 'heartRate', 'respiratoryRate', 'bodyTemperatureC', 'oxygenSaturation', 'weightKg', 'heightCm'].forEach(k => delete body[k]);
            if (!item)
                delete body.status;
            const appointmentCall = item ? this.api.updateAppointment(item.id, body) : this.api.createAppointment(body);
            call = Object.keys(vitals).length
                ? appointmentCall.pipe(switchMap(result => this.api.updatePatient(patientId, vitals).pipe(map(() => result))))
                : appointmentCall;
        }
        if (kind === 'patient') {
            const body = this.clean({ ...this.patientForm });
            ['age', 'fatherAge', 'motherAge'].forEach(k => { if (body[k] !== undefined)
                body[k] = Number(body[k]); });
            if (!item && !body.patientId)
                body.patientId = `PT-${crypto.randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()}`;
            call = item ? this.api.updatePatient(item.id, body) : this.api.createPatient(body);
        }
        if (kind === 'prescription') {
            const body = this.clean({ ...this.prescriptionForm, quantity: Number(this.prescriptionForm.quantity), refills: Number(this.prescriptionForm.refills) });
            if (item)
                call = this.api.updatePrescription(item.id, body);
            else {
                const medication = (value) => this.clean({ medication: value.medication, dosage: value.dosage, instructions: value.instructions, quantity: Number(value.quantity), refills: Number(value.refills), notes: value.notes });
                call = this.api.createPrescriptionBatch({ patientId: this.prescriptionForm.patientId, medications: [medication(this.prescriptionForm), ...this.additionalMedications.map(m => medication(m))] });
            }
        }
        if (kind === 'vaccine')
            call = this.api.createVaccine(this.clean(this.vaccineForm));
        if (kind === 'user') {
            const body = item
                ? { firstName: this.userForm.firstName, lastName: this.userForm.lastName, email: this.userForm.email, role: this.userForm.role, isActive: this.userForm.isActive }
                : { firstName: this.userForm.firstName, lastName: this.userForm.lastName, email: this.userForm.email, role: this.userForm.role, password: this.userForm.password };
            call = item ? this.api.updateUser(item.id, body) : this.api.createUser(body);
        }
        call.subscribe({ next: () => { this.modal.set(null); this.notice.set(kind === 'user' ? (item ? 'User updated successfully.' : 'User account created successfully.') : kind === 'prescription' && !item && this.additionalMedications.length ? `${this.additionalMedications.length + 1} prescriptions saved successfully.` : 'Saved successfully.'); if (this.view() === 'Consultation' && this.consultationPatient()) {
                if (kind === 'prescription')
                    this.api.prescriptions({ patientId: this.consultationPatient().id }).subscribe(v => this.consultationPrescriptions.set(v));
                else if (kind === 'vaccine')
                    this.api.vaccines(this.consultationPatient().id).subscribe(v => this.consultationVaccines.set(v));
                else
                    this.load(this.view());
            }
            else
                this.load(this.view()); }, error: (e) => this.fail(e), complete: () => this.loading.set(false) });
    }
    viewDetail(kind, id) { const call = kind === 'appointment' ? this.api.appointment(id) : kind === 'patient' ? this.api.patient(id) : kind === 'prescription' ? this.api.prescription(id) : this.api.vaccine(id); call.subscribe({ next: item => { this.detailKind.set(kind); this.selected.set(item); this.modal.set('detail'); }, error: e => this.fail(e) }); }
    remove(item, kind) { const message = kind === 'appointment' ? 'Cancel this appointment?' : kind === 'user' ? 'Deactivate this user?' : 'Permanently delete this patient and related records?'; if (!confirm(message))
        return; const call = kind === 'appointment' ? this.api.cancelAppointment(item.id) : kind === 'patient' ? this.api.deletePatient(item.id) : this.api.deactivateUser(item.id); call.subscribe({ next: () => { this.notice.set(kind === 'appointment' ? 'Appointment cancelled.' : kind === 'user' ? 'User deactivated.' : 'Patient deleted.'); this.load(this.view()); }, error: e => this.fail(e) }); }
    status(item, status) { this.api.updateAppointment(item.id, { status }).subscribe({ next: () => this.load('Appointments'), error: e => this.fail(e) }); }
    print() { window.print(); }
    fullName(person) { return person ? `${person.firstName} ${person.lastName}` : ''; }
    initials(person) { return person ? `${person.firstName?.[0] ?? ''}${person.lastName?.[0] ?? ''}`.toUpperCase() : '?'; }
    roleLabel(role) { return { ADMIN: 'Administrator', DOCTOR: 'Doctor', NURSE: 'Nurse', FRONT_DESK: 'Secretary', PATIENT: 'Patient' }[role ?? ''] ?? ''; }
    detailTitle() { return { appointment: 'Appointment details', prescription: 'Prescription details', vaccine: 'Vaccination details' }[this.detailKind() ?? ''] ?? 'Record details'; }
    detailIcon() { return { appointment: '▣', prescription: 'Rx', vaccine: '✚' }[this.detailKind() ?? ''] ?? '•'; }
    fieldLabel(value) { return value.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()); }
    resolvePrescriptionPatient(value) { this.prescriptionPatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(p => this.fullName(p).toLowerCase() === normalized); this.prescriptionForm.patientId = patient?.id ?? ''; }
    resolveVaccinePatient(value) { this.vaccinePatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(p => this.fullName(p).toLowerCase() === normalized); this.vaccineForm.patientId = patient?.id ?? ''; }
    selectedVaccinePatient() { return this.patients().find(patient => patient.id === this.vaccineForm.patientId); }
    certificatePatient() { return this.patients().find(patient => patient.id === this.medicalCertificateForm.patientId); }
    resolveCertificatePatient(value) { this.certificatePatientSearch = value; const normalized = value.trim().toLowerCase(); const patient = this.patients().find(item => this.fullName(item).toLowerCase() === normalized || item.patientId.toLowerCase() === normalized); this.medicalCertificateForm.patientId = patient?.id ?? ''; this.certificateSuggestionsOpen.set(true); }
    selectCertificatePatient(patient) { this.certificatePatientSearch = this.fullName(patient); this.medicalCertificateForm.patientId = patient.id; this.certificateSuggestionsOpen.set(false); }
    certificateDisplayName() { return this.certificatePatient() ? this.fullName(this.certificatePatient()) : this.certificatePatientSearch.trim(); }
    canSaveMedicalCertificate() {
        return Boolean(this.certificateDisplayName() && this.medicalCertificateForm.date && this.medicalCertificateForm.details.trim() && !this.loading());
    }
    saveMedicalCertificate() {
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
    printMedicalCertificate() { if (!this.certificatePatientSearch.trim() || !this.medicalCertificateForm.details.trim()) {
        this.error.set('Enter a patient name and the certificate details before printing.');
        return;
    } document.body.classList.add('printing-medical-certificate'); window.addEventListener('afterprint', () => document.body.classList.remove('printing-medical-certificate'), { once: true }); window.print(); }
    selectedPrescriptionPatient() { return this.patients().find(p => p.id === this.prescriptionForm.patientId); }
    addMedication() { this.additionalMedications.push({ medication: '', dosage: '', instructions: '', quantity: 1, refills: 0, notes: '' }); }
    removeMedication(index) { this.additionalMedications.splice(index, 1); }
    age(patient) { return patient.age ?? Math.max(0, new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()); }
    ageWithMonths(patient) {
        const birthDate = new Date(patient.dateOfBirth);
        if (Number.isNaN(birthDate.getTime()))
            return 'Not recorded';
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        if (today.getDate() < birthDate.getDate())
            months--;
        if (months < 0) {
            years--;
            months += 12;
        }
        if (years < 0)
            return 'Not recorded';
        return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}`;
    }
    bmi(patient) {
        const weight = Number(patient.weightKg);
        const heightCm = Number(patient.heightCm);
        if (!weight || !heightCm)
            return 'Not recorded';
        const heightM = heightCm / 100;
        if (!heightM)
            return 'Not recorded';
        return (weight / (heightM * heightM)).toFixed(1);
    }
    vitalDisplay(value, unit = '') {
        if (value === null || value === undefined || value === '')
            return 'Not recorded';
        return `${value}${unit}`;
    }
    consultationNote(appointment) {
        if (!appointment?.notes)
            return null;
        const note = this.readConsultationNote(appointment.notes);
        return Object.values(note).some(value => value.trim()) ? note : null;
    }
    doctors() { return this.users().filter(u => u.role === 'DOCTOR' && u.isActive); }
    objectEntries(item) { return Object.entries(item ?? {}).filter(([key, value]) => !['id', 'patientId', 'doctorId', 'userId', 'patient', 'doctor', 'issuedAt', 'createdAt', 'updatedAt'].includes(key) && value != null && value !== ''); }
    ensurePatients() { if (!this.patients().length)
        this.api.patients().subscribe(v => this.patients.set(v)); }
    get ensureReferences() { return true; }
    loadReferences() { this.ensurePatients(); if (this.auth.role() === 'ADMIN' && this.users().length)
        return; this.api.activeDoctors().subscribe({ next: doctors => this.users.set(doctors), error: e => this.fail(e) }); }
    patientVitalsForm(patient) {
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
    readConsultationNote(value) {
        const fallback = { assessmentDiagnosis: '', treatmentPlan: '', diagnosticOrders: '', referralsFollowUp: '' };
        if (!value?.startsWith('CONSULTATION_NOTE::'))
            return fallback;
        try {
            return { ...fallback, ...JSON.parse(value.slice('CONSULTATION_NOTE::'.length)) };
        }
        catch {
            return fallback;
        }
    }
    serializeConsultationNote(value) {
        return `CONSULTATION_NOTE::${JSON.stringify({
            assessmentDiagnosis: value.assessmentDiagnosis.trim(),
            treatmentPlan: value.treatmentPlan.trim(),
            diagnosticOrders: value.diagnosticOrders.trim(),
            referralsFollowUp: value.referralsFollowUp.trim(),
        })}`;
    }
    patientVitalsPayload(source) {
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
    filter(items, text) { const q = this.search().trim().toLowerCase(); return q ? items.filter(i => text(i).toLowerCase().includes(q)) : items; }
    clean(value) { return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== '' && v !== null && v !== undefined)); }
    fail(error) { this.loading.set(false); this.error.set(error?.error?.message instanceof Array ? error.error.message.join(', ') : error?.error?.message ?? error?.message ?? 'Unable to contact the ACB Clinic API. Is the backend running on port 3000?'); }
    resetData() { this.dashboard.set(null); this.appointments.set([]); this.patients.set([]); this.prescriptions.set([]); this.vaccines.set([]); this.users.set([]); this.patientProfile.set(null); this.patientAppointments.set([]); this.patientPrescriptions.set([]); this.consultationAppointment.set(null); this.consultationPatient.set(null); this.consultationAppointments.set([]); this.consultationPrescriptions.set([]); this.consultationVaccines.set([]); this.editingClinicalOverview.set(false); }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 9, consts: [[1, "auth-page", "antialiased"], [1, "app-shell", "antialiased"], [1, "modal-backdrop", "appointment-modal-backdrop"], [1, "modal-backdrop", "patient-modal-backdrop"], [1, "modal-backdrop", "workflow-modal-backdrop"], [1, "auth-card"], [1, "brand", "brand-logo-login"], ["src", "/images/LoginLogo-transparent.png", "alt", "Pedia Care Children Clinic"], [1, "eyebrow"], [1, "alert", "error"], [1, "alert", "success"], [3, "ngSubmit"], [1, "form-grid"], ["mat-flat-button", "", "type", "submit", 1, "primary", "wide", 3, "disabled"], [1, "text-button", "auth-toggle", 3, "click"], ["name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", "required", "", "autocomplete", "email", 3, "ngModelChange", "ngModel"], ["name", "dateOfBirth", "placeholder", "Choose date of birth", 3, "ngModelChange", "ngModel", "required"], ["name", "sex", 3, "ngModelChange", "ngModel"], ["value", ""], ["name", "mobileNumber", "type", "tel", "autocomplete", "tel", 3, "ngModelChange", "ngModel"], ["name", "homeAddress", "autocomplete", "street-address", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", "minlength", "8", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["name", "confirmPassword", "type", "password", "required", "", "minlength", "8", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", "minlength", "8", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], [1, "sidebar"], [1, "brand", "brand-logo-sidebar"], ["src", "/images/AppLogo-transparent.png", "alt", "Pedia Care Children Clinic"], [1, "close-nav", 3, "click"], [1, "nav-label"], [1, "nav-item", 3, "active"], [1, "sidebar-help"], [1, "help-icon"], [1, "user-card"], [1, "avatar", "doctor"], ["mat-icon-button", "", "matTooltip", "Log out", "aria-label", "Log out", 1, "more", 3, "click"], [1, "topbar"], [1, "menu-button", 3, "click"], [1, "search"], ["placeholder", "Search this workspace...", 3, "ngModelChange", "ngModel"], [1, "header-actions"], [1, "role-badge"], [1, "secondary", 3, "click"], [1, "content"], [1, "consultation-page"], [1, "certificate-page"], [1, "nav-item", 3, "click"], [1, "nav-icon"], [3, "click"], [1, "page-heading"], [1, "panel", "placeholder-panel"], [1, "panel", "patient-profile-panel"], [1, "patient-portal-grid"], [1, "panel"], [1, "panel-header"], [1, "portal-list"], [1, "empty"], [1, "status"], ["class", "primary", 3, "click", 4, "ngIf"], [1, "stats-grid"], [1, "stat"], [1, "stat-icon", "teal"], [1, "stat-icon", "blue"], [1, "stat-icon", "orange"], [1, "stat-icon", "violet"], [1, "dashboard-grid"], [1, "panel", "schedule-panel"], [1, "text-button", 3, "click"], [1, "appointment-list"], [1, "appointment", 3, "has-consultation-action"], [1, "patient-table", "compact"], [1, "primary", 3, "click"], [1, "stat-icon", "mint"], [1, "appointment"], [1, "avatar", "mint"], [1, "patient-info"], ["type", "button", 1, "start-consultation"], [1, "more"], ["type", "button", 1, "start-consultation", 3, "click"], [1, "more", 3, "click"], [1, "identity"], [1, "avatar", "blue"], [1, "consultation-header"], [1, "consultation-topline"], ["type", "button", 1, "consultation-back", 3, "click"], [1, "consultation-status"], [1, "consultation-heading"], [1, "consultation-actions"], ["type", "button", 1, "consultation-action", "consultation-action-note", 3, "click", "disabled"], ["type", "button", 1, "consultation-action", "consultation-action-vaccine", 3, "click", "disabled"], ["type", "button", 1, "consultation-action", "consultation-action-prescription", 3, "click", "disabled"], ["type", "button", 1, "consultation-action", "consultation-action-end", 3, "click", "disabled"], [1, "panel", "consultation-loading"], [1, "consultation-profile", "panel"], [1, "consultation-identity"], [1, "avatar", "blue", "large"], [1, "panel", "consultation-vitals"], [1, "history-kicker"], [1, "consultation-vitals-grid"], [1, "panel", "consultation-documentation"], ["type", "button", 1, "history-add", 3, "click"], [1, "consultation-documentation-grid"], [1, "consultation-empty"], [1, "clinical-overview"], ["type", "button", 1, "clinical-edit-button"], [1, "clinical-overview-form"], [1, "consultation-clinical-summary", "panel"], [1, "consultation-history-stack"], [1, "panel", "consultation-history", "appointments-history"], [1, "panel", "consultation-history", "prescription-history"], [1, "panel", "consultation-history"], ["type", "button", 3, "click"], ["type", "button", 1, "clinical-edit-button", 3, "click"], [1, "clinical-overview-form", 3, "ngSubmit"], ["name", "consultationAllergies", "placeholder", "Add medication, food, or environmental allergies", 3, "ngModelChange", "ngModel"], ["name", "consultationConditions", "placeholder", "Add diagnosed or ongoing medical conditions", 3, "ngModelChange", "ngModel"], [1, "clinical-form-actions"], ["type", "button", 1, "secondary", 3, "click"], ["type", "submit", 1, "primary", 3, "disabled"], [1, "consultation-clinical-item"], [1, "consultation-clinical-divider"], [1, "page-heading", "subpage", "certificate-page-heading"], ["type", "button", 1, "primary", 3, "click"], [1, "certificate-workspace"], [1, "panel", "certificate-editor"], [1, "certificate-patient-autocomplete"], ["name", "certificatePatient", "type", "text", "placeholder", "Type a patient name", "autocomplete", "off", "required", "", 3, "ngModelChange", "focus", "blur", "ngModel"], ["role", "listbox", 1, "certificate-patient-suggestions"], [1, "patient-match"], ["name", "certificateDate", "placeholder", "Choose certificate date", 3, "ngModelChange", "ngModel", "required"], ["name", "certificateDetails", "placeholder", "Enter the medical findings, recommendation, rest period, or purpose of this certificate.", "required", "", 3, "ngModelChange", "ngModel"], [1, "certificate-save-action"], ["type", "button", 1, "primary", "certificate-save-button", 3, "click", "disabled"], [1, "certificate-save-icon"], [1, "certificate-save-hint"], ["id", "medical-certificate-print", 1, "certificate-sheet"], [1, "certificate-sheet-header"], [1, "certificate-body"], [1, "certificate-details"], [1, "certificate-doctor"], [1, "signature-line"], ["type", "button", "role", "option"], ["type", "button", "role", "option", 3, "mousedown"], [1, "page-heading", "subpage"], [1, "primary"], [1, "panel", "data-panel"], [1, "data-head", "appointments-row"], [1, "data-row", "appointments-row"], [3, "ngModelChange", "ngModel"], [1, "row-actions"], [1, "danger"], [1, "danger", 3, "click"], [1, "data-head", "patients-row"], [1, "data-row", "patients-row"], [1, "patient-age"], [1, "block"], [1, "patient-last-checkup"], [1, "data-head", "rx-row"], [1, "data-row", "rx-row"], [1, "avatar", "violet"], [1, "rx-medication"], [1, "rx-directions"], [1, "data-head", "vaccine-row"], [1, "data-row", "vaccine-row"], [1, "avatar", "coral"], [1, "vaccine-name"], [1, "vaccine-dose"], [1, "data-head", "users-row"], [1, "data-row", "users-row"], [1, "user-status"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "appointment-modal-title", 1, "user-modal", "form-modal", "appointment-modal"], [1, "appointment-modal-header"], [1, "appointment-modal-icon"], [1, "patient-modal-eyebrow"], ["id", "appointment-modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "appointment-form-section"], [1, "patient-section-heading"], [1, "appointment-fields", "two-columns"], ["name", "patientId", "required", "", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "doctorId", "required", "", 3, "ngModelChange", "ngModel"], [1, "field-warning"], [1, "appointment-fields", "three-columns"], ["name", "date", "placeholder", "Choose appointment date", 3, "ngModelChange", "ngModel", "required"], ["type", "time", "name", "time", "required", "", 3, "ngModelChange", "ngModel"], ["name", "visitType", "required", "", 3, "ngModelChange", "ngModel"], [1, "appointment-fields", "vitals-grid"], ["name", "bloodPressure", "placeholder", "e.g. 120/80 mmHg", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "heartRate", "placeholder", "bpm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "respiratoryRate", "placeholder", "breaths/min", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "30", "max", "45", "step", "0.1", "name", "bodyTemperatureC", "placeholder", "\u00B0C", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "100", "name", "oxygenSaturation", "placeholder", "%", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.1", "name", "weightKg", "placeholder", "kg", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.1", "name", "heightCm", "placeholder", "cm", 3, "ngModelChange", "ngModel"], [1, "appointment-fields"], ["name", "purpose", "placeholder", "Briefly describe the reason for this appointment", "required", "", 3, "ngModelChange", "ngModel"], [1, "two-columns"], [1, "appointment-modal-actions"], [1, "secure-dot"], [1, "primary", 3, "disabled"], ["name", "status", 3, "ngModelChange", "ngModel"], ["name", "notes", "placeholder", "Optional note for clinic staff", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "patient-modal-title", 1, "user-modal", "form-modal", "patient-modal"], [1, "patient-modal-header"], [1, "patient-modal-icon"], ["id", "patient-modal-title"], [1, "patient-form-section"], [1, "patient-fields", "identity-fields"], ["name", "firstName", "autocomplete", "given-name", "placeholder", "First name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "lastName", "autocomplete", "family-name", "placeholder", "Last name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "dob", "placeholder", "Choose date of birth", 3, "ngModelChange", "ngModel", "required"], ["name", "bloodType", 3, "ngModelChange", "ngModel"], [1, "patient-fields", "contact-fields"], ["name", "mobile", "type", "tel", "autocomplete", "tel", "placeholder", "+63 9XX XXX XXXX", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "patientEmail", "autocomplete", "email", "placeholder", "patient@example.com", 3, "ngModelChange", "ngModel"], ["name", "philhealth", "placeholder", "12-345678901-2", 3, "ngModelChange", "ngModel"], [1, "span-full"], ["name", "address", "autocomplete", "street-address", "placeholder", "House number, street, city, province", 3, "ngModelChange", "ngModel"], [1, "patient-fields", "emergency-fields"], ["name", "emergencyName", "placeholder", "Full name", 3, "ngModelChange", "ngModel"], ["name", "emergencyRelationship", 3, "ngModelChange", "ngModel"], ["label", "Immediate family"], ["label", "Partner & relatives"], ["label", "Care & support"], ["name", "emergencyNumber", "type", "tel", "placeholder", "+63 9XX XXX XXXX", 3, "ngModelChange", "ngModel"], [1, "patient-form-section", "clinical-section"], [1, "patient-fields", "clinical-fields"], ["name", "allergies", "placeholder", "List medication, food, or environmental allergies", 3, "ngModelChange", "ngModel"], ["name", "conditions", "placeholder", "List diagnosed or ongoing conditions", 3, "ngModelChange", "ngModel"], [1, "patient-modal-actions"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "prescription-modal-title", 1, "user-modal", "workflow-modal", "prescription-workflow"], [1, "workflow-modal-header"], [1, "workflow-modal-icon", "rx-icon"], [1, "workflow-eyebrow"], ["id", "prescription-modal-title"], [1, "workflow-section"], [1, "workflow-section-title"], [1, "workflow-fields"], ["name", "rxPatientSearch", "type", "text", "list", "prescription-patient-suggestions", "placeholder", "Type a patient name", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], ["id", "prescription-patient-suggestions"], [1, "workflow-fields", "workflow-grid", "four"], ["name", "medication", "placeholder", "Generic or brand name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "dosage", "placeholder", "e.g. 500 mg tablet", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "name", "quantity", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "refills", 3, "ngModelChange", "ngModel"], [1, "additional-medications"], [1, "workflow-fields", "workflow-grid", "two"], ["name", "instructions", "placeholder", "Dose, route, frequency, and duration", "required", "", 3, "ngModelChange", "ngModel"], ["name", "rxNotes", "placeholder", "Optional internal note", 3, "ngModelChange", "ngModel"], [1, "workflow-modal-actions"], [1, "medication-entry"], ["type", "button", 1, "add-medication-button", 3, "click"], [1, "medication-number"], ["type", "button", "aria-label", "Remove medication", 3, "click"], ["placeholder", "Generic or brand name", "required", "", 3, "ngModelChange", "name", "ngModel"], ["placeholder", "e.g. 500 mg tablet", "required", "", 3, "ngModelChange", "name", "ngModel"], ["type", "number", "min", "1", "required", "", 3, "ngModelChange", "name", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "name", "ngModel"], [1, "medication-instructions"], ["placeholder", "Dose, route, frequency, and duration", "required", "", 3, "ngModelChange", "name", "ngModel"], ["name", "rxStatus", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "vaccine-modal-title", 1, "user-modal", "workflow-modal", "vaccine-workflow"], [1, "workflow-modal-icon", "vaccine-icon"], ["id", "vaccine-modal-title"], [1, "workflow-fields", "vaccine-patient-row"], ["name", "vaxPatientSearch", "type", "text", "list", "vaccine-patient-suggestions", "placeholder", "Type a patient name", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], ["id", "vaccine-patient-suggestions"], [1, "workflow-fields", "vaccine-details-grid"], ["name", "vaccineName", "type", "text", "list", "vaccine-name-suggestions", "placeholder", "Type or select a vaccine", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], ["id", "vaccine-name-suggestions"], ["name", "dose", "placeholder", "e.g. 0.5 mL", "required", "", 3, "ngModelChange", "ngModel"], ["name", "vaxStatus", "required", "", 3, "ngModelChange", "ngModel"], ["name", "vaxDate", "placeholder", "Choose administration date", 3, "ngModelChange", "ngModel", "required"], ["name", "administeredBy", "placeholder", "Clinician name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "manufacturer", "placeholder", "Vaccine manufacturer", 3, "ngModelChange", "ngModel"], ["name", "lotNumber", "placeholder", "Batch or lot number", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "consultation-note-title", 1, "user-modal", "workflow-modal", "consultation-workflow"], [1, "workflow-modal-icon", "consultation-icon"], ["id", "consultation-note-title"], ["name", "consultationAssessmentDiagnosis", "placeholder", "Primary complaints, relevant findings, impression, and diagnosis", 3, "ngModelChange", "ngModel"], ["name", "consultationTreatmentPlan", "placeholder", "Medication changes, procedures, counseling, and care instructions", 3, "ngModelChange", "ngModel"], ["name", "consultationDiagnosticOrders", "placeholder", "Laboratory requests, imaging, screening, or monitoring orders", 3, "ngModelChange", "ngModel"], ["name", "consultationReferralsFollowUp", "placeholder", "Referral destination, follow-up schedule, and return precautions", 3, "ngModelChange", "ngModel"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "end-consultation-title", "aria-describedby", "end-consultation-description", 1, "user-modal", "end-consultation-modal"], [1, "end-consultation-icon"], ["id", "end-consultation-title"], ["id", "end-consultation-description"], ["type", "button", 1, "secondary", 3, "click", "disabled"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "user-modal-title", 1, "user-modal", "workflow-modal", "user-workflow"], [1, "workflow-modal-icon", "user-icon"], ["id", "user-modal-title"], ["name", "userFirst", "required", "", "autocomplete", "given-name", "placeholder", "First name", 3, "ngModelChange", "ngModel"], ["name", "userLast", "required", "", "autocomplete", "family-name", "placeholder", "Last name", 3, "ngModelChange", "ngModel"], [1, "workflow-span-full"], ["type", "email", "name", "userEmail", "required", "", "autocomplete", "email", "placeholder", "name@clinic.com", 3, "ngModelChange", "ngModel"], ["name", "userRole", "required", "", 3, "ngModelChange", "ngModel"], ["value", "ADMIN"], ["value", "DOCTOR"], ["value", "NURSE"], ["value", "FRONT_DESK"], ["value", "PATIENT"], ["name", "active", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "password", "minlength", "8", "name", "tempPassword", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["type", "password", "minlength", "8", "name", "confirmUserPassword", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "form-note", "workflow-span-full"], [1, "modal-backdrop"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "patient-view-title", 1, "user-modal", "patient-view-modal"], [1, "patient-view-header"], [1, "patient-view-avatar"], ["id", "patient-view-title"], [1, "patient-view-body"], [1, "patient-view-section"], [1, "patient-view-section-title"], [1, "patient-view-grid"], [1, "patient-contact-columns"], [1, "view-span-full"], [1, "emergency-card"], [1, "patient-view-section", "clinical-view-section"], [1, "patient-clinical-cards"], [1, "allergy-card"], [1, "condition-card"], [1, "patient-view-actions"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "appointment-detail-title", 1, "user-modal", "record-detail-modal", "appointment-detail-modal"], [1, "workflow-modal-icon", "detail-icon"], ["id", "appointment-detail-title"], [1, "record-detail-body", "appointment-detail-body"], [1, "appointment-detail-summary"], [1, "appointment-summary-patient"], [1, "avatar", "mint", "large"], [1, "appointment-detail-section"], [1, "record-detail-grid", "appointment-detail-grid"], [1, "record-wide"], [1, "record-detail-actions"], [1, "record-detail-grid", "appointment-vitals-grid"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "record-detail-title", 1, "user-modal", "record-detail-modal"], ["id", "record-detail-title"], [1, "record-detail-body"], [1, "prescription-view-summary"], [1, "record-detail-grid"], [3, "record-wide"], [1, "record-safety-alert"], ["type", "button", 1, "primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, AppComponent_Conditional_0_Template, 22, 9, "main", 0)(1, AppComponent_Conditional_1_Template, 50, 10, "div", 1);
            i0.ɵɵconditionalCreate(2, AppComponent_Conditional_2_Template, 160, 21, "div", 2);
            i0.ɵɵconditionalCreate(3, AppComponent_Conditional_3_Template, 194, 20, "div", 3);
            i0.ɵɵconditionalCreate(4, AppComponent_Conditional_4_Template, 100, 14, "div", 4);
            i0.ɵɵconditionalCreate(5, AppComponent_Conditional_5_Template, 125, 13, "div", 4);
            i0.ɵɵconditionalCreate(6, AppComponent_Conditional_6_Template, 83, 7, "div", 4);
            i0.ɵɵconditionalCreate(7, AppComponent_Conditional_7_Template, 19, 5, "div", 4);
            i0.ɵɵconditionalCreate(8, AppComponent_Conditional_8_Template, 83, 11, "div", 4);
            i0.ɵɵconditionalCreate(9, AppComponent_Conditional_9_Template, 3, 1);
        } if (rf & 2) {
            i0.ɵɵconditional(!ctx.auth.authenticated() ? 0 : 1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.modal() === "appointment" ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "patient" ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "prescription" ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "vaccine" ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "consultation" ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "end-consultation" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "user" ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "detail" ? 9 : -1);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgForm, MatButtonModule, i3.MatButton, i3.MatIconButton, MatTooltipModule, i4.MatTooltip, MaterialDatePickerComponent, i1.UpperCasePipe, i1.DatePipe], styles: ["[_nghost-%COMP%] { display: block; min-height: 100vh; font-family: 'Petrov Sans', Arial, sans-serif; }\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] { font-family: 'Petrov Sans', Arial, sans-serif !important; }\n.app-shell[_ngcontent-%COMP%] { min-height: 100vh; display: grid; grid-template-columns: 236px 1fr; }\n.sidebar[_ngcontent-%COMP%] { background: #fff; border-right: 1px solid #e3ece9; padding: 28px 16px 18px; display: flex; flex-direction: column; position: fixed; inset: 0 auto 0 0; width: 236px; z-index: 20; }\n.brand[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; font: 800 20px 'Manrope'; color: #123d38; padding: 0 10px; }\n.brand-mark[_ngcontent-%COMP%] { background: #0d8578; color: white; width: 31px; height: 31px; border-radius: 9px; display: inline-grid; place-items: center; font-size: 22px; box-shadow: 0 5px 12px #0d85782c; }\n.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; height: auto; object-fit: contain; }\n.brand-logo-sidebar[_ngcontent-%COMP%] { width: 198px; padding: 0; }\n.brand-logo-login[_ngcontent-%COMP%] { width: 230px; margin-inline: auto; }\n.nav-label[_ngcontent-%COMP%] { color: #9aa9a6; font-size: 10px; letter-spacing: .14em; font-weight: 700; margin: 40px 13px 10px; }\n.nav-label.management-label[_ngcontent-%COMP%] { margin-top: 28px; }\n.nav-item[_ngcontent-%COMP%] { border: 0; background: transparent; color: #5b6d69; width: 100%; display: flex; align-items: center; gap: 12px; padding: 11px 13px; border-radius: 9px; margin: 3px 0; font-weight: 600; text-align: left; }\n.nav-item[_ngcontent-%COMP%]:hover { background: #f2f8f6; color: #116b61; }\n.nav-item.active[_ngcontent-%COMP%] { background: #e9f6f2; color: #0b796c; }\n.nav-icon[_ngcontent-%COMP%] { width: 20px; text-align: center; font-weight: 700; }\n.sidebar-help[_ngcontent-%COMP%] { margin-top: auto; background: #f4f9f7; border: 1px solid #e7efed; padding: 13px; border-radius: 10px; display: flex; gap: 10px; align-items: center; }\n.help-icon[_ngcontent-%COMP%] { border: 1px solid #bdd5d0; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: #0d8578; }\n.sidebar-help[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.sidebar-help[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 12px; }\nsmall[_ngcontent-%COMP%] { color: #83928f; }\n.sidebar-help[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 10px; }\n.user-card[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; border-top: 1px solid #e7eeec; padding: 17px 5px 0; margin-top: 16px; }\n.user-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { flex: 1; }\nmain[_ngcontent-%COMP%] { grid-column: 2; min-width: 0; }\n.topbar[_ngcontent-%COMP%] { height: 76px; background: rgba(255,255,255,.94); border-bottom: 1px solid #e3ece9; display: flex; align-items: center; padding: 0 34px; position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); }\n.search[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; color: #81908d; width: min(400px, 45vw); }\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; border: 0; outline: 0; color: #304b47; background: transparent; }\n.header-actions[_ngcontent-%COMP%] { margin-left: auto; display: flex; align-items: center; gap: 18px; }\n.role-switcher[_ngcontent-%COMP%] { font-size: 11px; color: #7b8a87; display: flex; align-items: center; gap: 8px; }\n.role-switcher[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { border: 1px solid #d6e3df; background: #fff; color: #36514d; border-radius: 8px; padding: 7px 28px 7px 10px; font-size: 12px; font-weight: 700; }\n.icon-button[_ngcontent-%COMP%] { width: 36px; height: 36px; border: 1px solid #e0e9e7; background: white; border-radius: 9px; position: relative; color: #526763; }\n.notification-dot[_ngcontent-%COMP%] { position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #ef7666; right: 7px; top: 7px; border: 1px solid white; }\n.content[_ngcontent-%COMP%] { width: 100%; padding: 32px clamp(24px,3vw,44px) 50px; margin: 0; }\n.page-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 27px; }\n.eyebrow[_ngcontent-%COMP%] { color: #0b897a !important; font-size: 10px !important; font-weight: 800; letter-spacing: .12em; margin: 0 0 7px !important; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] { font-family: 'Manrope'; margin: 0; }\nh1[_ngcontent-%COMP%] { font-size: 28px; letter-spacing: -.035em; color: #173a35; }\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 5px 0 0; color: #80908c; font-size: 13px; }\nbutton.primary[_ngcontent-%COMP%] { background: #0d8074; color: white; border: 0; border-radius: 8px; padding: 11px 16px; font-weight: 700; font-size: 12px; box-shadow: 0 4px 10px #0d807422; }\nbutton.primary[_ngcontent-%COMP%]:hover { background: #096e64; }\nbutton.secondary[_ngcontent-%COMP%] { background: white; color: #31524d; border: 1px solid #d8e5e2; border-radius: 8px; padding: 10px 14px; font-weight: 700; font-size: 11px; }\n.stats-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 17px; }\n.stats-grid.with-total[_ngcontent-%COMP%] { grid-template-columns: repeat(5, minmax(0,1fr)); }\n.panel[_ngcontent-%COMP%], .stat[_ngcontent-%COMP%] { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; box-shadow: 0 2px 4px #294d4610; }\n.stat[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 13px; padding: 18px; }\n.stat-icon[_ngcontent-%COMP%] { width: 37px; height: 37px; border-radius: 9px; display: grid; place-items: center; flex: 0 0 auto; font-weight: 800; font-size: 13px; }\n.stat-icon.teal[_ngcontent-%COMP%] { background: #e7f6f2; color: #0d8879; }.stat-icon.blue[_ngcontent-%COMP%] { background: #e9f1fb; color: #4879ae; }.stat-icon.mint[_ngcontent-%COMP%] { background: #e7f5ee; color: #218161; }.stat-icon.orange[_ngcontent-%COMP%] { background: #fff1e8; color: #dc7b45; }.stat-icon.violet[_ngcontent-%COMP%] { background: #f1ecfa; color: #8065b5; }\n.stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 11px; margin-bottom: 4px; }\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font: 800 25px 'Manrope'; color: #27443f; line-height: 1.15; }\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font: 600 11px 'DM Sans'; }\n.stat[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] { font-style: normal; font-size: 9px; color: #9aa6a4; margin-top: 4px; }.stat[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #1b9b74; }\n.dashboard-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(330px, .8fr); gap: 17px; }\n.panel-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 19px 20px; border-bottom: 1px solid #e8efed; }\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 15px; color: #26443f; }.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 10px; color: #8c9997; margin: 4px 0 0; }\n.text-button[_ngcontent-%COMP%] { border: 0; background: transparent; color: #0a8174; font-weight: 700; font-size: 10px; }\n.appointment[_ngcontent-%COMP%] { min-height: 72px; display: grid; grid-template-columns: 62px 38px minmax(150px,1fr) auto 20px; align-items: center; gap: 12px; padding: 0 20px; border-bottom: 1px solid #edf2f1; }\n.appointment[_ngcontent-%COMP%]:last-child { border-bottom: 0; }.appointment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] { font-size: 10px; color: #6e7d7a; font-weight: 600; }\n.avatar[_ngcontent-%COMP%] { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 10px; font-weight: 800; flex: 0 0 auto; }\n.avatar.mint[_ngcontent-%COMP%] { background: #dff2ec; color: #267565; }.avatar.blue[_ngcontent-%COMP%] { background: #e3edf8; color: #4a7199; }.avatar.coral[_ngcontent-%COMP%] { background: #fbe8e3; color: #b46758; }.avatar.violet[_ngcontent-%COMP%] { background: #eee7f7; color: #795fa2; }.avatar.doctor[_ngcontent-%COMP%] { background: #d7f0e9; color: #137768; }\n.patient-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; }.patient-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 11px; color: #304944; }.patient-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 9px; color: #8d9a97; }\n.status[_ngcontent-%COMP%] { font-size: 9px; border-radius: 20px; padding: 5px 8px; background: #edf7f2; color: #3b8069; display: flex; align-items: center; gap: 5px; white-space: nowrap; }\n.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }.status.waiting[_ngcontent-%COMP%] { background: #fff5e6; color: #b67b29; }.status.in-consultation[_ngcontent-%COMP%] { background: #e9f1fb; color: #4d78a5; }\n.more[_ngcontent-%COMP%] { border: 0; background: transparent; color: #91a09d; }.empty[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #889895; }\n.next-patient[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] { border-bottom: 0; padding-bottom: 10px; }.patient-profile[_ngcontent-%COMP%] { display: flex; gap: 12px; align-items: center; padding: 8px 20px 16px; }.avatar.large[_ngcontent-%COMP%] { width: 44px; height: 44px; font-size: 12px; }.patient-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 13px; }.patient-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #899693; font-size: 9px; margin: 4px 0 0; }\n.vitals[_ngcontent-%COMP%] { margin: 0 20px; background: #f7faf9; border-radius: 9px; display: grid; grid-template-columns: repeat(3,1fr); padding: 12px 8px; }.vitals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; border-right: 1px solid #e4ecea; }.vitals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child { border: 0; }.vitals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .vitals[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; color: #8d9a97; }.vitals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font: 700 14px 'Manrope'; margin: 3px; }\n.clinical-alert[_ngcontent-%COMP%] { margin: 13px 20px; padding: 10px; border: 1px solid #f2d7d0; background: #fff7f5; border-radius: 8px; display: flex; gap: 9px; align-items: center; }.clinical-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { background: #f5d3cb; color: #b75f50; width: 23px; height: 23px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }.clinical-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 9px; color: #8d4e43; }.clinical-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 8px; color: #af7f76; margin: 2px 0 0; }\n.button-row[_ngcontent-%COMP%] { display: flex; gap: 8px; padding: 3px 20px 20px; }.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { flex: 1; }\n.recent-panel[_ngcontent-%COMP%] { margin-top: 17px; }.patient-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(200px,1.2fr) 1fr 120px auto; gap: 20px; align-items: center; padding: 12px 20px; border-bottom: 1px solid #edf2f1; font-size: 10px; color: #566b67; }.patient-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child { border: 0; }.identity[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; }.identity[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] { display: flex; flex-direction: column; }.identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #314b46; }.identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; }.last-visit[_ngcontent-%COMP%] { color: #8b9996; }.last-visit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #4b625e; }.patient-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border: 0; background: transparent; color: #0b8174; font-weight: 700; font-size: 9px; }\n.subpage[_ngcontent-%COMP%] { margin-top: -14px; margin-bottom: 20px; }.placeholder-panel[_ngcontent-%COMP%] { min-height: 450px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }.placeholder-icon[_ngcontent-%COMP%] { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 18px; background: #e5f5f0; color: #0d8074; font: 800 20px 'Manrope'; margin-bottom: 18px; }.placeholder-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 20px; }.placeholder-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #7e8e8a; max-width: 490px; line-height: 1.6; font-size: 13px; }.placeholder-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { margin-top: 10px; }\n.user-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 17px; }.user-summary[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; padding: 17px 19px; display: flex; justify-content: space-between; align-items: center; }.user-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 11px; }.user-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #26443f; font: 800 21px 'Manrope'; }\n.users-toolbar[_ngcontent-%COMP%] { min-height: 70px; padding: 14px 20px; display: flex; justify-content: space-between; gap: 14px; align-items: center; border-bottom: 1px solid #e8efed; }.user-search[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; background: #f7faf9; border: 1px solid #e0e9e7; border-radius: 8px; padding: 9px 12px; width: min(390px,55%); color: #80908c; }.user-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border: 0; outline: 0; background: transparent; width: 100%; font-size: 11px; }.users-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: #7b8a87; font-size: 10px; display: flex; align-items: center; gap: 8px; }.users-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border: 1px solid #d8e5e2; background: #fff; border-radius: 8px; padding: 9px 10px; color: #36514d; font-size: 11px; }\n.users-table-head[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(250px,1.5fr) minmax(120px,.7fr) minmax(100px,.6fr) 130px; gap: 18px; align-items: center; padding: 13px 20px; }.users-table-head[_ngcontent-%COMP%] { color: #93a09e; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; background: #fbfcfc; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { min-height: 66px; border-top: 1px solid #edf2f1; }.users-table[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 11px; }.users-table[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 9px; margin-top: 3px; }.role-badge[_ngcontent-%COMP%] { display: inline-block; background: #eef6f4; color: #34675f; padding: 5px 8px; border-radius: 6px; font-size: 9px; }.user-status[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 6px; color: #27805f; font-size: 9px; }.user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }.user-status.inactive[_ngcontent-%COMP%] { color: #9a7771; }.user-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }.user-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border: 1px solid #d8e5e2; background: #fff; color: #31524d; padding: 7px 9px; border-radius: 7px; font-size: 9px; font-weight: 700; }.user-actions[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%] { color: #b35d52; border-color: #efd8d4; }\n.user-modal[_ngcontent-%COMP%] { display:block; width: min(520px,100%); background: #fff; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; inset:auto; padding:0; }.user-modal-header[_ngcontent-%COMP%] { padding: 24px 26px 18px; border-bottom: 1px solid #e8efed; }.user-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: #26443f; font-size: 19px; }.user-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 30px 0 0;color:#80908c;font-size:10px}.user-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { padding: 22px 26px 25px; }.user-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 7px; color: #516763; font-size: 10px; font-weight: 700; margin-bottom: 16px; }.user-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#80908c;font-size:9px;font-weight:400}.user-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { padding: 11px; font-weight: 400; }.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }.form-note[_ngcontent-%COMP%] { background: #f4f9f7; border-radius: 8px; color: #71837f; font-size: 10px; line-height: 1.5; padding: 11px 12px; margin: 0 0 20px; }.user-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] { padding: 0; }\n.modal-backdrop[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: 50; background: #153d3899; display: grid; place-items: center; padding: 20px; backdrop-filter: blur(3px); }.prescription-modal[_ngcontent-%COMP%] { width: min(720px, 100%); max-height: 94vh; overflow: auto; background: #f4f7f6; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; }.modal-close[_ngcontent-%COMP%] { position: absolute; right: 16px; top: 12px; border: 0; background: transparent; font-size: 25px; color: #667b77; z-index: 2; }.rx-paper[_ngcontent-%COMP%] { background: white; margin: 42px 36px 18px; padding: 34px 42px; min-height: 680px; box-shadow: 0 2px 10px #23453f15; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; border-bottom: 2px solid #0d8074; padding-bottom: 20px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] { padding: 0; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child { text-align: right; display: flex; flex-direction: column; font-size: 12px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 9px; }.rx-patient[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #dfe8e6; }.rx-patient[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }.rx-patient[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; letter-spacing: .1em; }.rx-patient[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 12px; }.rx-symbol[_ngcontent-%COMP%] { font: 700 48px Georgia; margin: 25px 0 10px; }.medicine[_ngcontent-%COMP%] { margin-left: 45px; }.medicine[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 17px; }.medicine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 13px; line-height: 1.6; }.medicine[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 10px; }.warning[_ngcontent-%COMP%] { color: #963f35; background: #fff1ee; border: 1px solid #f0c8c0; border-radius: 7px; padding: 12px; font-size: 10px; line-height: 1.5; margin-top: 35px; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 90px; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child { display: flex; flex-direction: column; border-top: 1px solid #80908c; padding-top: 4px; min-width: 170px; }.signature[_ngcontent-%COMP%] { font: italic 22px Georgia; margin-top: -31px; margin-bottom: 8px; }.clinic-address[_ngcontent-%COMP%] { text-align: right; color: #71827e; font-size: 9px; line-height: 1.6; }.modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 9px; padding: 0 36px 22px; }\n.menu-button[_ngcontent-%COMP%], .close-nav[_ngcontent-%COMP%] { display: none; }\n@media (max-width: 1100px) { .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2,1fr); }.dashboard-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }.right-column[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr; }.recent-panel[_ngcontent-%COMP%] { margin-top: 17px; }.user-summary[_ngcontent-%COMP%] { grid-template-columns: repeat(2,1fr); } }\n@media (max-width: 760px) { .app-shell[_ngcontent-%COMP%] { display: block; }.sidebar[_ngcontent-%COMP%] { transform: translateX(-100%); transition: transform .2s ease; box-shadow: 8px 0 30px #173d3730; }.sidebar.mobile-open[_ngcontent-%COMP%] { transform: translateX(0); }.close-nav[_ngcontent-%COMP%] { display: block; position: absolute; top: 20px; right: 14px; border: 0; background: transparent; font-size: 24px; }.menu-button[_ngcontent-%COMP%] { display: block; border: 0; background: transparent; margin-right: 12px; font-size: 20px; color: #35534e; }.topbar[_ngcontent-%COMP%] { padding: 0 16px; }.role-switcher[_ngcontent-%COMP%] { font-size: 0; }.content[_ngcontent-%COMP%] { padding: 24px 16px 40px; }.page-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }.stats-grid[_ngcontent-%COMP%], .user-summary[_ngcontent-%COMP%] { grid-template-columns: 1fr; }.appointment[_ngcontent-%COMP%] { grid-template-columns: 52px 34px 1fr 20px; padding: 0 12px; }.appointment[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] { display: none; }.recent-panel[_ngcontent-%COMP%] { display: none; }.users-toolbar[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }.user-search[_ngcontent-%COMP%] { width: auto; }.users-table-head[_ngcontent-%COMP%] { display: none; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { grid-template-columns: 1fr auto; gap: 10px; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { padding-left: 44px; }.user-actions[_ngcontent-%COMP%] { justify-content: flex-end; }.form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 0; }.rx-paper[_ngcontent-%COMP%] { margin: 35px 10px 12px; padding: 25px 20px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { flex-direction: column; gap: 16px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child { text-align: left; }.rx-patient[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 40px; }.clinic-address[_ngcontent-%COMP%] { text-align: left; } }\n\n.auth-page[_ngcontent-%COMP%] { min-height:100vh; display:grid; place-items:center; padding:24px; background:radial-gradient(circle at top,#e5f5f0,#f5f8f7 50%); }\n.auth-card[_ngcontent-%COMP%] { width:min(440px,100%); background:#fff; border:1px solid #dfe9e6; border-radius:18px; padding:38px; box-shadow:0 20px 55px #173d3718; }\n.auth-card[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] { padding:0; margin-bottom:38px; }.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin-bottom:7px; }.auth-card[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:not(.eyebrow) { color:#7e8e8a; font-size:13px; margin:0 0 23px; }\n.auth-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:7px; color:#516763; font-size:10px; font-weight:700; margin-bottom:16px; }\n.auth-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .data-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { border:1px solid #d8e5e2; border-radius:8px; padding:11px; background:#fff; color:#36514d; font:400 11px 'DM Sans'; }\n.form-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { min-height:70px; resize:vertical; }.wide[_ngcontent-%COMP%] { width:100%; }.auth-toggle[_ngcontent-%COMP%] { width:100%; margin:18px 0; }.auth-card[_ngcontent-%COMP%] > small[_ngcontent-%COMP%] { display:block; text-align:center; font-size:9px; }\n.alert[_ngcontent-%COMP%] { padding:11px 14px; border-radius:8px; margin:0 0 18px; font-size:11px; display:flex; justify-content:space-between; gap:12px; }.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border:0;background:transparent;color:inherit}.alert.error[_ngcontent-%COMP%]{background:#fff0ed;color:#a94f43;border:1px solid #f2d2cc}.alert.success[_ngcontent-%COMP%]{background:#eaf7f1;color:#24745e;border:1px solid #cfe9df}\n.patient-profile-panel[_ngcontent-%COMP%]{margin-bottom:20px}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:0;padding:0 20px 20px}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:12px;border-bottom:1px solid #edf2f1}.patient-profile-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#80908c;font-size:9px;text-transform:uppercase}.patient-profile-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:4px 0 0;color:#304944;font-size:11px}.patient-portal-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;padding:14px 20px;border-top:1px solid #edf2f1}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{text-align:right;align-items:flex-end}.portal-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px;color:#304944}.portal-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;color:#80908c}\n.data-panel[_ngcontent-%COMP%] { overflow:hidden; }.data-head[_ngcontent-%COMP%], .data-row[_ngcontent-%COMP%] { display:grid; gap:18px; align-items:center; padding:13px 20px; }.data-head[_ngcontent-%COMP%] { background:#fbfcfc; color:#93a09e; font-size:9px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }.data-row[_ngcontent-%COMP%] { min-height:70px; border-top:1px solid #edf2f1; color:#566b67; font-size:10px; }.appointments-row[_ngcontent-%COMP%]{grid-template-columns:minmax(300px,1.55fr) minmax(180px,.75fr) minmax(160px,.45fr) minmax(330px,.95fr)}.users-row[_ngcontent-%COMP%] { grid-template-columns:minmax(240px,1.4fr) minmax(140px,.8fr) 130px 190px }.patients-row[_ngcontent-%COMP%] { grid-template-columns:minmax(220px,1.25fr) minmax(120px,.55fr) minmax(210px,1fr) minmax(150px,.65fr) minmax(140px,.6fr) 168px }.rx-row[_ngcontent-%COMP%] { grid-template-columns:minmax(190px,1fr) minmax(170px,.9fr) minmax(220px,1.2fr) minmax(150px,.75fr) 115px 90px 118px }.vaccine-row[_ngcontent-%COMP%] { grid-template-columns:minmax(200px,1.1fr) minmax(150px,.8fr) 90px 125px minmax(150px,.75fr) 105px 68px }.data-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:7px;font-size:9px}.appointments-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;min-width:0}.block[_ngcontent-%COMP%]{display:block;margin-top:5px}.row-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:7px;justify-content:flex-end;align-items:center}.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:48px;border:1px solid #d8e5e2;background:#fff;color:#31524d;padding:8px 9px;border-radius:7px;font-size:9px;font-weight:700;text-align:center}.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{border-color:#91bbb4;background:#f2f8f6;color:#0a7569}.row-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{color:#b35d52;border-color:#efd8d4}.appointments-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]{justify-content:flex-start;align-content:center}.appointments-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]   .start-consultation[_ngcontent-%COMP%]{min-width:124px;padding:8px 12px;box-shadow:none}.compact[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr auto}.compact[_ngcontent-%COMP%]{padding-bottom:5px}.data-head.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(2), .data-row.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(3), .data-row.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(4){min-width:0;overflow-wrap:anywhere}.data-row.patients-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]{width:168px}.patient-age[_ngcontent-%COMP%]{color:#395650;font-weight:700}.patient-last-checkup[_ngcontent-%COMP%]{color:#526965;font-size:10px}.data-head.vaccine-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.vaccine-row[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#526965;font-size:10px}.vaccine-name[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.vaccine-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#314b46;font-size:11px}.vaccine-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.vaccine-dose[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:max-content;padding:5px 8px;border-radius:7px;background:#f1f5f4;color:#47635e;font-size:9px;font-weight:700}.data-head.rx-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.rx-row[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#526965;font-size:10px}.rx-medication[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.rx-medication[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#314b46;font-size:11px}.rx-medication[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.rx-directions[_ngcontent-%COMP%]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.45}\n.form-modal[_ngcontent-%COMP%] { max-height:94vh; overflow:auto; }.wide-modal[_ngcontent-%COMP%]{width:min(760px,100%)}.form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:22px 26px 25px}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.form-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]{padding:0}.detail-modal[_ngcontent-%COMP%]{width:min(620px,100%);max-height:90vh;overflow:auto}.detail-modal[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{padding:15px 26px}.detail-modal[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;grid-template-columns:150px 1fr;padding:9px 0;border-bottom:1px solid #edf2f1}.detail-modal[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{text-transform:capitalize;color:#80908c;font-size:10px}.detail-modal[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;color:#304944;font-size:11px;overflow-wrap:anywhere}.detail-modal[_ngcontent-%COMP%]   .clinical-alert[_ngcontent-%COMP%]{margin:0 26px 20px}\n.patient-modal-backdrop[_ngcontent-%COMP%]{padding:24px}.patient-modal[_ngcontent-%COMP%]{width:min(880px,100%);max-height:min(92vh,900px);overflow:auto;border:1px solid #dce8e5;border-radius:20px}.patient-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:flex-start;gap:14px;padding:22px 28px;background:#fff;border-bottom:1px solid #e5eeec;text-align:left}.patient-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;flex:0 0 44px;height:44px;border-radius:13px;background:linear-gradient(145deg,#dff4ee,#edf8f5);color:#087c6e;font-size:20px}.patient-modal-eyebrow[_ngcontent-%COMP%]{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.patient-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#213f3a;font-size:20px}.patient-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#82918e;font-size:10px}.patient-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.patient-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 28px 0}.patient-form-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:180px 1fr;gap:28px;padding:25px 28px;border-bottom:1px solid #edf2f1}.patient-section-heading[_ngcontent-%COMP%]{display:flex;gap:11px;align-items:flex-start}.patient-section-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#eef7f4;color:#0d8074;font-size:9px;font-weight:800}.patient-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#94a09e;font-size:9px;line-height:1.45}.patient-fields[_ngcontent-%COMP%]{display:grid;gap:15px}.identity-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.contact-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.emergency-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.clinical-fields[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px;color:#516763;font-size:9px;font-weight:700}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal;font-weight:800}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:11px 12px;outline:none;background:#fff;color:#304944;font:400 10px 'DM Sans';transition:border-color .15s,box-shadow .15s}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#a5b1ae}.patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:132px;resize:vertical;font-size:12px;line-height:1.6}.patient-fields[_ngcontent-%COMP%]   .span-full[_ngcontent-%COMP%]{grid-column:1/-1}.clinical-section[_ngcontent-%COMP%]{background:#fbfdfc}.patient-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:17px 28px;background:#fff;border-top:1px solid #e1ebe8;box-shadow:0 -8px 20px #23453f0a}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.patient-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#82918e;font-size:9px}.secure-dot[_ngcontent-%COMP%]{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#e6f5ef;color:#16805f;font-size:9px;font-weight:800}.patient-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.patient-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.patient-modal.user-modal[_ngcontent-%COMP%]{width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;border-radius:18px}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;justify-content:stretch;width:100%;min-height:88px;margin:0;padding:18px 32px;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.patient-modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%]{grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]{gap:18px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:13px 14px;font-size:12px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:150px;font-size:13px}.patient-modal[_ngcontent-%COMP%]   .patient-modal-actions[_ngcontent-%COMP%]{padding:18px 32px}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px;line-height:1}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{line-height:1}\n.patient-view-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.patient-view-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-view-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.patient-view-avatar[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e3f3ee;color:#0c7c6f;font:800 14px 'Manrope'}.patient-view-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.patient-view-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#84938f;font-size:10px}.patient-view-body[_ngcontent-%COMP%]{flex:1;background:#fbfcfc}.patient-view-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.patient-view-section-title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:11px}.patient-view-section-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.patient-view-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-view-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.patient-view-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.patient-view-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:13px 14px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.patient-view-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-size:8px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.patient-view-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:5px 0 0;color:#304944;font-size:11px;font-weight:600;overflow-wrap:anywhere}.patient-view-grid[_ngcontent-%COMP%]   .view-span-full[_ngcontent-%COMP%]{grid-column:1/-1}.patient-contact-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:14px}.patient-contact-columns[_ngcontent-%COMP%]   .patient-view-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.emergency-card[_ngcontent-%COMP%]{padding:15px 16px;border:1px solid #f0ded4;border-radius:10px;background:#fff9f5}.emergency-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;color:#a76e57;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.emergency-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:8px;color:#634c43;font-size:12px}.emergency-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#987d72;font-size:9px;line-height:1.45}.clinical-view-section[_ngcontent-%COMP%]{background:#f8fbfa}.patient-clinical-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;min-height:86px;padding:16px;border-radius:11px}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;font-weight:800}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px}.patient-clinical-cards[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px;font-weight:800;letter-spacing:.07em}.patient-clinical-cards[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px;line-height:1.5}.allergy-card[_ngcontent-%COMP%]{border:1px solid #efd7d0;background:#fff7f5;color:#9d5d51}.allergy-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#f4d9d2}.condition-card[_ngcontent-%COMP%]{border:1px solid #d7e6e2;background:#f3f9f7;color:#3f7369}.condition-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#dceee9}.patient-view-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:72px;margin-top:auto;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.patient-view-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:9px}.patient-view-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{font-size:9px}.patient-view-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.appointment-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.appointment-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1100px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.appointment-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.appointment-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.appointment-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.appointment-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e5f3f0;color:#0b7e70;font-size:17px;font-weight:800}.appointment-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.appointment-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 32px 0}.appointment-form-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.appointment-fields[_ngcontent-%COMP%]{display:grid;gap:18px}.appointment-fields.two-columns[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.appointment-fields.three-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.appointment-fields.vitals-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.appointment-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.appointment-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .appointment-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:92px;resize:vertical;line-height:1.55}.appointment-fields[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;font-weight:400}.appointment-fields[_ngcontent-%COMP%]   .field-warning[_ngcontent-%COMP%]{color:#a06759}.appointment-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.appointment-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.appointment-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px}\n.workflow-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.workflow-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1060px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.workflow-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.workflow-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#84938f;font-size:10px}.workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.workflow-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;font:800 14px 'Manrope'}.rx-icon[_ngcontent-%COMP%]{background:#eee9f8;color:#7058a1}.vaccine-icon[_ngcontent-%COMP%]{background:#e5f3ee;color:#15755e;font-size:18px}.user-icon[_ngcontent-%COMP%]{background:#e8eff8;color:#4c719d;font-size:18px}.workflow-eyebrow[_ngcontent-%COMP%]{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.workflow-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.workflow-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 32px 0}.workflow-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.workflow-section-title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:11px}.workflow-section-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.workflow-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.workflow-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.workflow-fields[_ngcontent-%COMP%]{display:grid;gap:18px}.workflow-grid.two[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.workflow-grid.four[_ngcontent-%COMP%]{grid-template-columns:1.4fr 1.1fr .6fr .6fr}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.workflow-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .workflow-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.workflow-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .workflow-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:104px;resize:vertical;line-height:1.55}.workflow-fields[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;font-weight:400}.workflow-span-full[_ngcontent-%COMP%]{grid-column:1/-1}.workflow-modal[_ngcontent-%COMP%]   .form-note[_ngcontent-%COMP%]{margin:0}.workflow-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.workflow-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.workflow-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px}\n.record-detail-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(900px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.detail-icon[_ngcontent-%COMP%]{background:#edf3f7;color:#516f83;font-size:15px}.record-detail-body[_ngcontent-%COMP%]{padding:28px 32px;background:#fbfcfc}.record-detail-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.record-detail-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:span 2}.record-detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.record-detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:6px 0 0;color:#304944;font-size:11px;font-weight:600;line-height:1.5;overflow-wrap:anywhere}.record-safety-alert[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;margin-top:16px;padding:15px 16px;border:1px solid #efd7d0;border-radius:11px;background:#fff7f5;color:#9d5d51}.record-safety-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;background:#f4d9d2;font-weight:800}.record-safety-alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.record-safety-alert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px;font-weight:800;letter-spacing:.07em}.record-safety-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.record-detail-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.record-detail-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;gap:9px}.record-detail-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{font-size:9px}.record-detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.appointment-detail-modal.user-modal[_ngcontent-%COMP%]{width:min(1120px,calc(100vw - 36px))}.appointment-detail-body[_ngcontent-%COMP%]{display:grid;gap:18px}.appointment-detail-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.45fr) repeat(3,minmax(150px,.6fr));gap:12px}.appointment-detail-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:16px 18px;border:1px solid #dfe9e6;border-radius:12px;background:#fff;box-shadow:0 6px 18px #23453f08}.appointment-detail-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:#7e918d;font-size:8px;font-weight:800;letter-spacing:.08em}.appointment-detail-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:7px;color:#294740;font-size:13px;line-height:1.4}.appointment-detail-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:7px 0 0;color:#728581;font-size:11px;line-height:1.5}.appointment-summary-patient[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.appointment-summary-patient[_ngcontent-%COMP%]   .avatar.large[_ngcontent-%COMP%]{width:52px;height:52px;flex:0 0 auto;font-size:14px}.appointment-detail-section[_ngcontent-%COMP%]{border:1px solid #dfe9e6;border-radius:14px;background:#fff;box-shadow:0 6px 18px #23453f08;overflow:hidden}.appointment-detail-section[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{padding:18px 20px;border-bottom:1px solid #e8efed;background:#fcfdfd}.appointment-detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#294a44;font-size:16px}.appointment-detail-section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#7d8f8b;font-size:11px;line-height:1.5}.appointment-detail-grid[_ngcontent-%COMP%], .appointment-vitals-grid[_ngcontent-%COMP%]{padding:18px}.appointment-detail-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.appointment-vitals-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.appointment-detail-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .appointment-vitals-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:86px}\n.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr) 40px;align-items:center;justify-content:stretch;column-gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){min-width:0;justify-self:start;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px;line-height:1.2}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{position:static;display:grid;place-items:center;justify-self:end;width:36px;height:36px;margin:0;padding:0;border:1px solid transparent;border-radius:9px;color:#667b77;font-size:22px;line-height:1;transition:background .15s,border-color .15s,color .15s}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover{border-color:#dce8e5;background:#f2f7f5;color:#214a43}.patient-modal-eyebrow[_ngcontent-%COMP%], .workflow-eyebrow[_ngcontent-%COMP%]{line-height:1.2}.patient-modal-icon[_ngcontent-%COMP%], .patient-view-avatar[_ngcontent-%COMP%], .appointment-modal-icon[_ngcontent-%COMP%], .workflow-modal-icon[_ngcontent-%COMP%]{box-sizing:border-box;width:44px;height:44px;margin:0;justify-self:start}\n.workflow-fields[_ngcontent-%COMP%]   .patient-match[_ngcontent-%COMP%]{color:#24745e}.workflow-fields[_ngcontent-%COMP%]   .field-warning[_ngcontent-%COMP%]{color:#a06759}.additional-medications[_ngcontent-%COMP%]{grid-column:1/-1;display:grid;gap:12px;margin-top:18px}.medication-entry[_ngcontent-%COMP%]{padding:18px;border:1px solid #dfe9e6;border-radius:12px;background:#fbfdfc}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:17px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#31504a;font-size:11px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #efd8d4;border-radius:7px;padding:6px 9px;background:#fff;color:#aa6257;font-size:8px;font-weight:700}.medication-number[_ngcontent-%COMP%]{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#eee9f8;color:#7058a1;font-size:9px;font-weight:800}.medication-instructions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:15px;color:#516763;font-size:10px;font-weight:700}.medication-instructions[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.medication-instructions[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.medication-instructions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;min-height:80px;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';resize:vertical}.add-medication-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;padding:15px 16px;border:1px dashed #9fc9c1;border-radius:11px;background:#f6fbf9;color:#286a5f;text-align:left}.add-medication-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:#dff1ec;font-size:16px}.add-medication-button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.add-medication-button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:10px}.add-medication-button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px}.add-medication-button[_ngcontent-%COMP%]:hover{border-color:#5fa99c;background:#eef8f5}\n.vaccine-patient-row[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr); }\n.vaccine-details-grid[_ngcontent-%COMP%] { grid-template-columns: minmax(260px, 1.7fr) minmax(150px, .75fr) minmax(150px, .75fr); }\n.certificate-page[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto}.certificate-page-heading[_ngcontent-%COMP%]{align-items:center}.certificate-workspace[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(560px,1.3fr);gap:20px;align-items:start}.certificate-editor[_ngcontent-%COMP%]{overflow:hidden}.certificate-editor[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{padding:22px 24px;border-bottom:1px solid #e4ecea;background:#fbfdfc}.certificate-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:17px}.certificate-editor[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#7d8f8b;font-size:11px}.certificate-editor[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:grid;gap:19px;padding:24px}.certificate-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:11px;font-weight:800}.certificate-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;gap:4px}.certificate-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-style:normal}.certificate-editor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .certificate-editor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .certificate-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d5e3df;border-radius:9px;padding:12px 13px;outline:none;background:#fff;color:#304944;font-size:12px}.certificate-editor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .certificate-editor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .certificate-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.certificate-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:280px;resize:vertical;line-height:1.65}.certificate-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;font-weight:400;line-height:1.45}.certificate-sheet[_ngcontent-%COMP%]{box-sizing:border-box;min-height:850px;padding:48px 58px;border:1px solid #dce6e3;background:#fff;box-shadow:0 12px 34px #1e453e14;color:#273f3b}.certificate-sheet-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:28px;padding-bottom:22px;border-bottom:2px solid #248679}.certificate-sheet-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:210px;height:auto}.certificate-sheet-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;text-align:right}.certificate-sheet-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.certificate-sheet-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#657b76;font-size:10px}.certificate-sheet[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:58px 0 26px;text-align:center;font-family:Georgia,serif!important;font-size:24px;letter-spacing:.12em;text-decoration:underline}.certificate-sheet[_ngcontent-%COMP%] > time[_ngcontent-%COMP%]{display:block;margin-bottom:36px;text-align:right;font-size:11px}.certificate-body[_ngcontent-%COMP%]{min-height:410px;font-family:Georgia,serif!important;font-size:14px;line-height:2;text-align:justify}.certificate-body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-family:Georgia,serif!important}.certificate-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 22px}.certificate-details[_ngcontent-%COMP%]{min-height:125px;white-space:pre-wrap}.certificate-doctor[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:245px;margin:45px 0 0 auto;text-align:center}.certificate-doctor[_ngcontent-%COMP%]   .signature-line[_ngcontent-%COMP%]{width:100%;border-top:1px solid #526965}.certificate-doctor[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-top:8px;font-size:13px}.certificate-doctor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:4px;color:#6d807c;font-size:10px}\n.certificate-patient-autocomplete[_ngcontent-%COMP%]{position:relative}.certificate-patient-suggestions[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);right:0;left:0;z-index:20;max-height:250px;overflow:auto;border:1px solid #d5e3df;border-radius:10px;background:#fff;box-shadow:0 14px 32px #193d3624}.certificate-patient-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;border:0;border-bottom:1px solid #edf2f1;padding:11px 13px;background:#fff;color:#304944;text-align:left}.certificate-patient-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-bottom:0}.certificate-patient-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#eef8f5}.certificate-patient-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;font-weight:700}.certificate-patient-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#81918d;font-size:9px}.certificate-patient-suggestions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:14px;color:#7d8f8b;font-size:10px;font-weight:400}.certificate-editor[_ngcontent-%COMP%]   .patient-match[_ngcontent-%COMP%]{color:#24745e}.certificate-save-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:9px;margin-top:4px}.certificate-editor[_ngcontent-%COMP%]   .certificate-save-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;min-height:62px;padding:12px 18px;border-radius:11px;text-align:left;transition:transform .15s,box-shadow .15s,background .15s}.certificate-editor[_ngcontent-%COMP%]   .certificate-save-button[_ngcontent-%COMP%]:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 8px 20px #0d80742b}.certificate-save-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:34px;height:34px;flex:0 0 auto;border-radius:9px;background:#ffffff24;font-size:15px}.certificate-save-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{display:flex;flex-direction:column;gap:3px}.certificate-save-button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px}.certificate-save-button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#d9f1ec;font-size:9px;font-weight:500}.certificate-editor[_ngcontent-%COMP%]   .certificate-save-button[_ngcontent-%COMP%]:disabled{border:1px solid #dce6e3;background:#edf2f0;color:#899793;box-shadow:none;opacity:1}.certificate-editor[_ngcontent-%COMP%]   .certificate-save-button[_ngcontent-%COMP%]:disabled   .certificate-save-icon[_ngcontent-%COMP%]{background:#dfe8e5;color:#899793}.certificate-editor[_ngcontent-%COMP%]   .certificate-save-button[_ngcontent-%COMP%]:disabled   small[_ngcontent-%COMP%]{color:#9ca9a6}.certificate-save-hint[_ngcontent-%COMP%]{padding-left:2px;color:#879692;font-size:9px;line-height:1.45}\n@media(max-width:1000px){.certificate-workspace[_ngcontent-%COMP%]{grid-template-columns:1fr}.certificate-sheet[_ngcontent-%COMP%]{min-height:760px}}\n@media(max-width:620px){.certificate-sheet[_ngcontent-%COMP%]{min-height:680px;padding:30px 24px}.certificate-sheet-header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.certificate-sheet-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px}.certificate-sheet-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:left}.certificate-sheet[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-top:40px;font-size:20px}.certificate-body[_ngcontent-%COMP%]{font-size:12px}.certificate-doctor[_ngcontent-%COMP%]{width:210px}}\n@media print{body.printing-medical-certificate[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:hidden!important}body.printing-medical-certificate[_ngcontent-%COMP%]   #medical-certificate-print[_ngcontent-%COMP%], body.printing-medical-certificate[_ngcontent-%COMP%]   #medical-certificate-print[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:visible!important}body.printing-medical-certificate[_ngcontent-%COMP%]   #medical-certificate-print[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;min-height:100vh;padding:36px 48px;border:0;box-shadow:none}body.printing-medical-certificate[_ngcontent-%COMP%]   .certificate-sheet-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}body.printing-medical-certificate[_ngcontent-%COMP%]   .certificate-sheet[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-top:48px}body.printing-medical-certificate[_ngcontent-%COMP%]   .certificate-body[_ngcontent-%COMP%]{min-height:390px}}\n.prescription-view-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:12px;margin-bottom:16px}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:5px;padding:14px 15px;border:1px solid #dedfed;border-radius:10px;background:#fdfcff}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{flex-direction:row;align-items:center;justify-content:flex-start;gap:11px}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:5px}.prescription-view-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#81769e;font-size:8px;font-weight:800;letter-spacing:.07em}.prescription-view-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#3e3850;font-size:11px;overflow-wrap:anywhere}\n.record-detail-modal.prescription-detail-modal[_ngcontent-%COMP%]{width:min(1280px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;overflow:hidden}.prescription-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]{flex:0 0 auto;padding-inline:40px}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:34px 40px;background:linear-gradient(145deg,#fbfcfc 0%,#f6faf8 100%)}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%]{grid-template-columns:1.4fr 1fr 1fr;gap:16px;margin-bottom:22px}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:88px;padding:18px 20px;border-color:#dce7e4;border-radius:14px;background:#fff;box-shadow:0 7px 20px #294d4609}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{gap:15px}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:46px;height:46px;font-size:12px}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;line-height:1.45}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:92px;padding:18px 20px;border-color:#dce7e4;border-radius:13px;box-shadow:0 6px 18px #294d4608}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:span 2}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:9px}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin-top:9px;font-size:14px;line-height:1.6}.prescription-detail-modal[_ngcontent-%COMP%]   .record-safety-alert[_ngcontent-%COMP%]{margin-top:20px;padding:18px 20px}.prescription-detail-footer[_ngcontent-%COMP%]{box-sizing:border-box;flex:0 0 auto;width:100%;min-height:82px;padding:18px 40px;background:#fff;box-shadow:0 -10px 28px #23453f0d}.prescription-detail-footer[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{font-size:10px}.prescription-detail-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:auto}.prescription-detail-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:150px;padding:12px 18px}\n@media(max-width:700px){.prescription-view-summary[_ngcontent-%COMP%]{grid-template-columns:1fr}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{grid-column:1/-1}}\n@media(max-width:900px){.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media(max-width:560px){.record-detail-modal.prescription-detail-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none}.prescription-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%], .prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-body[_ngcontent-%COMP%]{padding-inline:20px}.prescription-detail-modal[_ngcontent-%COMP%]   .prescription-view-summary[_ngcontent-%COMP%], .prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.prescription-detail-modal[_ngcontent-%COMP%]   .record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:auto}.prescription-detail-footer[_ngcontent-%COMP%]{min-height:72px;padding:14px 20px}.prescription-detail-footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.prescription-detail-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}}\nbutton[_ngcontent-%COMP%]:disabled{opacity:.55;cursor:not-allowed}code[_ngcontent-%COMP%]{background:#edf4f2;padding:2px 4px;border-radius:4px}\n.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:60px 34px minmax(150px,1fr) 105px 122px}.start-consultation[_ngcontent-%COMP%]{border:1px solid #0d8074;border-radius:8px;padding:8px 10px;background:#0d8074;color:#fff;font-size:9px;font-weight:800;white-space:nowrap;box-shadow:0 3px 8px #0d807420}.start-consultation[_ngcontent-%COMP%]:hover{background:#096e64}\n.consultation-page[_ngcontent-%COMP%]{max-width:1400px;margin:-14px auto 0}.consultation-header[_ngcontent-%COMP%]{margin-bottom:20px}.consultation-back[_ngcontent-%COMP%]{border:0;background:transparent;color:#46706a;padding:0;margin-bottom:17px;font-size:10px;font-weight:700}.consultation-back[_ngcontent-%COMP%]:hover{color:#0d8074}.consultation-heading[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:4px}.consultation-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#7d8f8b;font-size:12px}.consultation-status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;border:1px solid #cfe7df;border-radius:999px;padding:8px 11px;background:#eef9f5;color:#21725f;font-size:9px;font-weight:800;white-space:nowrap}.consultation-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#29a578;box-shadow:0 0 0 4px #d8f1e8}.consultation-loading[_ngcontent-%COMP%]{padding:36px;text-align:center;color:#71847f;font-size:12px}.consultation-profile[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(520px,1.7fr);align-items:center;gap:28px;padding:22px 24px}.consultation-identity[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.consultation-identity[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0}.consultation-identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.11em}.consultation-identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:3px 0;color:#294b45;font-size:18px}.consultation-identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#7d8d89;font-size:10px}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;margin:0;border:1px solid #e6eeec;border-radius:10px;overflow:hidden}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{min-width:0;padding:12px 14px;background:#fbfdfc;border-bottom:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){border-right:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2){border-bottom:0}.consultation-profile[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#879692;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.consultation-profile[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:5px 0 0;color:#344f4a;font-size:10px;overflow-wrap:anywhere}.consultation-history-stack[_ngcontent-%COMP%]{display:grid;gap:14px;margin-top:16px}.consultation-history[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{padding:17px 20px;border-bottom:1px solid #e8efed}.consultation-history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:13px}.consultation-history[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#879692;font-size:9px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:100px minmax(0,1fr) auto;align-items:center;gap:13px;min-height:61px;padding:11px 20px;border-top:1px solid #edf2f1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child{border-top:0}.consultation-history[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#657b76;font-size:9px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-history[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#344f4a;font-size:10px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;white-space:normal}.consultation-history[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:8px}.consultation-history[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{min-height:90px;display:grid;place-items:center;margin:0}\n.consultation-header[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding:20px 22px 22px;border:1px solid #d9e9e5;border-radius:14px;background:linear-gradient(120deg,#fff 0%,#f4fbf8 68%,#e7f5f0 100%);box-shadow:0 7px 24px #234d4410}.consultation-header[_ngcontent-%COMP%]:after{content:'';position:absolute;right:-65px;bottom:-95px;width:220px;height:220px;border:38px solid #0d807408;border-radius:50%;pointer-events:none}.consultation-topline[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.consultation-back[_ngcontent-%COMP%]{margin:0}.consultation-heading[_ngcontent-%COMP%]{position:relative;z-index:1;align-items:flex-end}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px}.consultation-actions[_ngcontent-%COMP%]{display:flex;align-items:stretch;gap:12px}.consultation-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:208px;padding:14px 16px;border:1px solid transparent;border-radius:14px;text-align:left;box-shadow:0 10px 24px #1d4b430f;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease}.consultation-action[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 14px 26px #1d4b4314}.consultation-action[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;font:800 14px 'Manrope'}.consultation-action[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.consultation-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px}.consultation-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px;font-weight:500}.consultation-action[_ngcontent-%COMP%]:disabled{transform:none;box-shadow:none}.consultation-action-vaccine[_ngcontent-%COMP%]{border-color:#c9e1db;background:#f7fcfa;color:#1f6a5e}.consultation-action-vaccine[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#e3f3ee;color:#0d8074}.consultation-action-prescription[_ngcontent-%COMP%]{border-color:#d8deef;background:linear-gradient(135deg,#325e86 0%,#244d73 100%);color:#fff}.consultation-action-prescription[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#ffffff24;color:#fff}.consultation-action-prescription[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#dbe9f4}.consultation-action-end[_ngcontent-%COMP%]{border-color:#c7ded5;background:linear-gradient(135deg,#1f8a74 0%,#146a59 100%);color:#fff}.consultation-action-end[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#ffffff24;color:#fff}.consultation-action-end[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#d8f1ea}.consultation-profile[_ngcontent-%COMP%]{border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}.consultation-profile[_ngcontent-%COMP%]   .avatar.large[_ngcontent-%COMP%]{width:50px;height:50px;font-size:13px}.consultation-history[_ngcontent-%COMP%]{overflow:hidden}.consultation-history[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fcfdfd}.history-kicker[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#0d8074;font-size:7px;font-weight:800;letter-spacing:.12em}.history-add[_ngcontent-%COMP%]{border:1px solid #bcd9d3;border-radius:10px;padding:9px 12px;background:#fff;color:#176f64;font-size:8px;font-weight:800;white-space:nowrap}.history-add[_ngcontent-%COMP%]:hover{border-color:#0d8074;background:#f1f9f6}.prescription-history[_ngcontent-%COMP%]{border-color:#d7e7e3}.consultation-empty[_ngcontent-%COMP%]{min-height:175px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:25px;text-align:center}.consultation-empty[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:39px;height:39px;margin-bottom:10px;border-radius:11px;background:#eee9f8;color:#72599e;font:800 11px 'Manrope'}.consultation-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.consultation-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 13px;color:#879692;font-size:9px}.consultation-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:8px;padding:9px 12px;background:#e8f5f1;color:#176f64;font-size:8px;font-weight:800}\n.consultation-page[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{font-size:11px!important}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}.consultation-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}.consultation-back[_ngcontent-%COMP%]{font-size:12px}.consultation-status[_ngcontent-%COMP%]{font-size:11px}.consultation-action[_ngcontent-%COMP%]{min-width:224px;padding:15px 17px}.consultation-action[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:42px;height:42px;font-size:15px}.consultation-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px}.consultation-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px}.consultation-profile[_ngcontent-%COMP%], .consultation-vitals[_ngcontent-%COMP%]{padding:26px}.consultation-profile[_ngcontent-%COMP%]   .avatar.large[_ngcontent-%COMP%]{width:58px;height:58px;font-size:15px}.consultation-identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .history-kicker[_ngcontent-%COMP%]{font-size:9px}.consultation-identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:21px}.consultation-identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}.consultation-profile[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .consultation-vitals[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:10px}.consultation-profile[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .consultation-vitals[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{font-size:13px;line-height:1.45}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:14px 16px}.consultation-vitals[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:0 0 18px;border-bottom:1px solid #e8efed}.consultation-vitals[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:16px}.consultation-vitals[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#7d8f8b;font-size:11px}.consultation-vitals-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0 0}.consultation-vitals-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fbfdfc}.consultation-vitals-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.consultation-vitals-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:6px 0 0;color:#304944;font-weight:600;overflow-wrap:anywhere}.clinical-overview[_ngcontent-%COMP%]{margin:16px 0;border:1px solid #dce8e5;border-radius:13px;background:#fff;box-shadow:0 4px 16px #294d460a;overflow:hidden}.clinical-overview[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 20px;border-bottom:1px solid #e8efed;background:#fbfdfc}.clinical-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:16px}.clinical-overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#7d8f8b;font-size:11px}.clinical-edit-button[_ngcontent-%COMP%]{border:1px solid #b9d6d0;border-radius:8px;padding:10px 12px;background:#fff;color:#176f64;font-size:11px;font-weight:800;white-space:nowrap}.clinical-edit-button[_ngcontent-%COMP%]:hover{border-color:#0d8074;background:#f2f9f7}.consultation-clinical-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr);align-items:stretch;margin:16px;border:1px solid #dce8e5;border-radius:12px;background:linear-gradient(135deg,#fff 0%,#f8fcfb 100%);box-shadow:0 6px 18px #294d4608;overflow:hidden}.consultation-clinical-item[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:8px;padding:20px 22px}.consultation-clinical-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#6f827d;font-size:10px;font-weight:800;letter-spacing:.08em}.consultation-clinical-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2f4b46;font-size:14px;line-height:1.6;overflow-wrap:anywhere}.consultation-clinical-divider[_ngcontent-%COMP%]{background:linear-gradient(180deg,#eff5f3 0%,#dbe8e4 50%,#eff5f3 100%)}.clinical-overview-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px}.clinical-overview-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:12px;font-weight:800}.clinical-overview-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;min-height:120px;padding:13px 14px;border:1px solid #d5e3df;border-radius:9px;background:#fff;color:#304944;font:400 13px/1.5 'DM Sans';resize:vertical;outline:none}.clinical-overview-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#66a99f;box-shadow:0 0 0 3px #0d807412}.clinical-overview-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px;font-weight:400}.clinical-form-actions[_ngcontent-%COMP%]{grid-column:1/-1;display:flex;justify-content:flex-end;gap:9px;padding-top:2px}.consultation-history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px}.consultation-history[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}.history-add[_ngcontent-%COMP%]{font-size:10px;padding:9px 11px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{min-height:72px}.consultation-history[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:11px}.consultation-history[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;line-height:1.45}.consultation-history[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:10px}.consultation-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.consultation-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}.consultation-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:10px}\n@media(max-width:900px){.data-head[_ngcontent-%COMP%]{display:none}.data-row[_ngcontent-%COMP%], .appointments-row[_ngcontent-%COMP%], .patients-row[_ngcontent-%COMP%], .rx-row[_ngcontent-%COMP%], .vaccine-row[_ngcontent-%COMP%], .users-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.appointments-row[_ngcontent-%COMP%]{gap:12px}.appointments-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:220px}.appointments-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]{gap:8px}.appointments-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto}.row-actions[_ngcontent-%COMP%]{justify-content:flex-start}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}\n@media(max-width:1000px){.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:52px 34px minmax(130px,1fr) 120px}.appointment.has-consultation-action[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:none}.consultation-profile[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-clinical-summary[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-clinical-divider[_ngcontent-%COMP%]{height:1px}.consultation-history.appointments-history[_ngcontent-%COMP%]{grid-column:auto}}\n@media(max-width:640px){.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:45px 30px minmax(0,1fr)}.appointment.has-consultation-action[_ngcontent-%COMP%]   .start-consultation[_ngcontent-%COMP%]{grid-column:3;width:max-content}.consultation-page[_ngcontent-%COMP%]{margin-top:0}.consultation-header[_ngcontent-%COMP%]{padding:17px}.consultation-topline[_ngcontent-%COMP%]{align-items:flex-start}.consultation-heading[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:25px}.consultation-actions[_ngcontent-%COMP%]{width:100%;flex-direction:column}.consultation-action[_ngcontent-%COMP%]{width:100%;min-width:0}.consultation-profile[_ngcontent-%COMP%]{padding:18px}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], .clinical-overview-form[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd), .consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2){border-right:0;border-bottom:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-bottom:0}.clinical-overview[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.clinical-edit-button[_ngcontent-%COMP%]{width:100%}.clinical-form-actions[_ngcontent-%COMP%]{grid-column:auto}.consultation-clinical-summary[_ngcontent-%COMP%]{margin:14px}.consultation-clinical-item[_ngcontent-%COMP%]{padding:18px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{grid-column:1/-1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{grid-column:1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > .status[_ngcontent-%COMP%]{grid-column:2;grid-row:2}}\n@media(max-width:760px){.patient-portal-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%], .patient-view-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.identity-fields[_ngcontent-%COMP%], .contact-fields[_ngcontent-%COMP%], .emergency-fields[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .patient-view-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}.patient-contact-columns[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-view-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:560px){.auth-card[_ngcontent-%COMP%]{padding:28px 22px}.form-grid[_ngcontent-%COMP%], .form-grid.three[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{grid-template-columns:1fr}.header-actions[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%]{display:none}.patient-modal-backdrop[_ngcontent-%COMP%]{padding:0}.patient-modal.user-modal[_ngcontent-%COMP%], .patient-view-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%], .patient-view-header[_ngcontent-%COMP%]{padding:16px 20px}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%], .patient-view-section[_ngcontent-%COMP%]{padding:21px 20px}.identity-fields[_ngcontent-%COMP%], .contact-fields[_ngcontent-%COMP%], .emergency-fields[_ngcontent-%COMP%], .clinical-fields[_ngcontent-%COMP%], .patient-view-grid[_ngcontent-%COMP%], .patient-contact-columns[_ngcontent-%COMP%]   .patient-view-grid[_ngcontent-%COMP%], .patient-clinical-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-modal[_ngcontent-%COMP%]   .patient-modal-actions[_ngcontent-%COMP%], .patient-view-actions[_ngcontent-%COMP%]{padding:14px 20px}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .patient-view-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:none}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .patient-view-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.patient-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .patient-view-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}}\n@media(max-width:760px){.appointment-form-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.appointment-fields.three-columns[_ngcontent-%COMP%], .appointment-fields.vitals-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.appointment-form-section[_ngcontent-%COMP%]   .patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}}@media(max-width:560px){.appointment-modal-backdrop[_ngcontent-%COMP%]{padding:0}.appointment-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.appointment-modal-header[_ngcontent-%COMP%]{padding:16px 20px}.appointment-form-section[_ngcontent-%COMP%]{padding:21px 20px}.appointment-fields.two-columns[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%], .appointment-fields.three-columns[_ngcontent-%COMP%], .appointment-fields.vitals-grid[_ngcontent-%COMP%], .consultation-vitals-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.appointment-modal-actions[_ngcontent-%COMP%]{padding:14px 20px}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{display:none}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:flex;width:100%}.appointment-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}}\n@media(max-width:760px){.workflow-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.workflow-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}.workflow-grid.four[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.vaccine-details-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.vaccine-details-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{grid-column:1/-1}.record-detail-grid[_ngcontent-%COMP%], .appointment-detail-summary[_ngcontent-%COMP%], .appointment-detail-grid[_ngcontent-%COMP%], .appointment-vitals-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:560px){.workflow-modal-backdrop[_ngcontent-%COMP%]{padding:0}.workflow-modal.user-modal[_ngcontent-%COMP%], .record-detail-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.workflow-modal-header[_ngcontent-%COMP%]{padding:16px 20px}.workflow-section[_ngcontent-%COMP%]{padding:21px 20px}.workflow-grid.two[_ngcontent-%COMP%], .workflow-grid.four[_ngcontent-%COMP%], .vaccine-details-grid[_ngcontent-%COMP%], .record-detail-grid[_ngcontent-%COMP%], .appointment-detail-summary[_ngcontent-%COMP%], .appointment-detail-grid[_ngcontent-%COMP%], .appointment-vitals-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.vaccine-details-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{grid-column:auto}.record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:auto}.workflow-modal-actions[_ngcontent-%COMP%], .record-detail-actions[_ngcontent-%COMP%]{padding:14px 20px}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .record-detail-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:none}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .record-detail-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;width:100%}.workflow-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .record-detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}.record-detail-body[_ngcontent-%COMP%], .appointment-detail-grid[_ngcontent-%COMP%], .appointment-vitals-grid[_ngcontent-%COMP%]{padding:20px}.appointment-summary-patient[_ngcontent-%COMP%]{align-items:flex-start}.appointment-detail-section[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{padding:16px 20px}}\n\n.consultation-icon[_ngcontent-%COMP%]{background:#eef4fb;color:#476e93;font-size:18px}\n.end-consultation-modal[_ngcontent-%COMP%]{width:min(500px,calc(100vw - 36px));padding:34px;text-align:center;border:1px solid #d8e7e3;border-radius:18px}.end-consultation-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:58px;height:58px;margin:0 auto 18px;border-radius:18px;background:#e2f4ed;color:#13755f;font-size:24px;font-weight:800}.end-consultation-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px 0 10px;color:#24463f;font-size:22px}.end-consultation-modal[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:410px;margin:0 auto;color:#71847f;font-size:12px;line-height:1.65}.end-consultation-modal[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#34544d}.end-consultation-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:20px 0 0;text-align:left}.end-consultation-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin:26px -34px -34px;padding:18px 24px;border-top:1px solid #e4ecea;background:#fbfdfc;border-radius:0 0 18px 18px}.end-consultation-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:180px}.end-consultation-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%]{background:#177861}@media(max-width:560px){.end-consultation-modal[_ngcontent-%COMP%]{padding:28px 22px}.end-consultation-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{flex-direction:column-reverse;margin:24px -22px -28px;padding:16px 22px}.end-consultation-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;min-width:0}}\n.consultation-action-note[_ngcontent-%COMP%]{border-color:#d6e1f1;background:#f7faff;color:#375f87}\n.consultation-action-note[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#eaf1fb;color:#476e93}\n.consultation-documentation[_ngcontent-%COMP%]{padding:26px;border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}\n.consultation-documentation[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:0 0 18px;border-bottom:1px solid #e8efed;background:#fff}\n.consultation-documentation[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;flex:1}\n.consultation-documentation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#294a44;font-size:16px;line-height:1.2}\n.consultation-documentation[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#7d8f8b;font-size:11px;line-height:1.55}\n.consultation-documentation[_ngcontent-%COMP%]   .history-add[_ngcontent-%COMP%]{align-self:flex-start;display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:10px 14px;font-size:10px}\n.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%]{min-height:148px;margin:0;padding:30px 24px}\n.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:48px;height:48px;margin-bottom:12px;border-radius:14px;background:#f0e9fb;color:#6d56a0;font-size:13px}\n.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:15px}\n.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:560px;margin:6px auto 14px;font-size:12px;line-height:1.6}\n.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:11px 16px;border-radius:10px;font-size:11px}\n.consultation-documentation-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 0}\n.consultation-documentation-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:16px 17px;border:1px solid #e1eae8;border-radius:11px;background:#fbfdfc}\n.consultation-documentation-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n.consultation-documentation-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:7px 0 0;color:#304944;font-size:13px;font-weight:600;line-height:1.55;overflow-wrap:anywhere}\n\n@media(max-width:1000px){.consultation-documentation-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}\n@media(max-width:640px){.consultation-documentation[_ngcontent-%COMP%]{padding:18px}.consultation-documentation[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{flex-direction:column}.consultation-documentation[_ngcontent-%COMP%]   .history-add[_ngcontent-%COMP%]{width:100%}.consultation-documentation[_ngcontent-%COMP%]   .consultation-empty[_ngcontent-%COMP%]{min-height:140px;padding:24px 18px}.consultation-documentation-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule, MatButtonModule, MatTooltipModule, MaterialDatePickerComponent], template: "@if (!auth.authenticated()) {\n  <main class=\"auth-page antialiased\">\n    <section class=\"auth-card\">\n      <div class=\"brand brand-logo-login\">\n        <img\n          src=\"/images/LoginLogo-transparent.png\"\n          alt=\"Pedia Care Children Clinic\"\n        />\n      </div>\n      <p class=\"eyebrow\">SECURE CLINIC WORKSPACE</p>\n      <h1>{{ registerMode ? \"Create patient account\" : \"Welcome back\" }}</h1>\n      <p>\n        {{\n          registerMode\n            ? \"Register for future patient portal access.\"\n            : \"Sign in with your clinic credentials.\"\n        }}\n      </p>\n      @if (error()) {\n        <div class=\"alert error\">{{ error() }}</div>\n      }\n      @if (notice()) {\n        <div class=\"alert success\">{{ notice() }}</div>\n      }\n      <form (ngSubmit)=\"submitAuth()\">\n        @if (registerMode) {\n          <div class=\"form-grid\">\n            <label\n              >First name<input\n                name=\"firstName\"\n                [(ngModel)]=\"registerForm.firstName\"\n                required /></label\n            ><label\n              >Last name<input\n                name=\"lastName\"\n                [(ngModel)]=\"registerForm.lastName\"\n                required\n            /></label>\n          </div>\n        }\n        @if (registerMode) {\n          <label\n            >Email address<input\n              name=\"email\"\n              type=\"email\"\n              [(ngModel)]=\"registerForm.email\"\n              required\n              autocomplete=\"email\"\n          /></label>\n          <div class=\"form-grid\">\n            <label\n              >Date of birth<app-material-date-picker\n                name=\"dateOfBirth\"\n                [(ngModel)]=\"registerForm.dateOfBirth\"\n                placeholder=\"Choose date of birth\"\n                [required]=\"true\" /></label\n            ><label\n              >Sex<select name=\"sex\" [(ngModel)]=\"registerForm.sex\">\n                <option value=\"\">Prefer not to say</option>\n                <option>Female</option>\n                <option>Male</option>\n                <option>Other</option>\n              </select></label\n            >\n          </div>\n          <label\n            >Mobile number<input\n              name=\"mobileNumber\"\n              type=\"tel\"\n              [(ngModel)]=\"registerForm.mobileNumber\"\n              autocomplete=\"tel\" /></label\n          ><label\n            >Home address<input\n              name=\"homeAddress\"\n              [(ngModel)]=\"registerForm.homeAddress\"\n              autocomplete=\"street-address\" /></label\n          ><label\n            >Password<input\n              name=\"password\"\n              type=\"password\"\n              [(ngModel)]=\"registerForm.password\"\n              required\n              minlength=\"8\"\n              autocomplete=\"new-password\"\n            /><small>Use at least 8 characters.</small></label\n          ><label\n            >Confirm password<input\n              name=\"confirmPassword\"\n              type=\"password\"\n              [(ngModel)]=\"registerForm.confirmPassword\"\n              required\n              minlength=\"8\"\n              autocomplete=\"new-password\"\n          /></label>\n        } @else {\n          <label\n            >Email address<input\n              name=\"email\"\n              type=\"email\"\n              [(ngModel)]=\"loginForm.email\"\n              required\n              autocomplete=\"email\" /></label\n          ><label\n            >Password<input\n              name=\"password\"\n              type=\"password\"\n              [(ngModel)]=\"loginForm.password\"\n              required\n              minlength=\"8\"\n              autocomplete=\"current-password\"\n          /></label>\n        }\n        <button\n          mat-flat-button\n          class=\"primary wide\"\n          type=\"submit\"\n          [disabled]=\"loading()\"\n        >\n          {{\n            loading() ? \"Please wait\u2026\" : registerMode ? \"Register\" : \"Sign in\"\n          }}\n        </button>\n      </form>\n      <button\n        class=\"text-button auth-toggle\"\n        (click)=\"registerMode = !registerMode; error.set(''); notice.set('')\"\n      >\n        {{\n          registerMode\n            ? \"Already registered? Sign in\"\n            : \"Need a patient account? Register\"\n        }}\n      </button>\n      <small>Clinical data is available only to authorized clinic staff.</small>\n    </section>\n  </main>\n} @else {\n  <div class=\"app-shell antialiased\">\n    <aside class=\"sidebar\" [class.mobile-open]=\"showMobileNav()\">\n      <div class=\"brand brand-logo-sidebar\">\n        <img\n          src=\"/images/AppLogo-transparent.png\"\n          alt=\"Pedia Care Children Clinic\"\n        />\n      </div>\n      <button class=\"close-nav\" (click)=\"showMobileNav.set(false)\">\u00D7</button>\n      <nav>\n        <p class=\"nav-label\">WORKSPACE</p>\n        @for (item of navItems(); track item.label) {\n          <button\n            class=\"nav-item\"\n            [class.active]=\"view() === item.label\"\n            (click)=\"openView(item.label)\"\n          >\n            <span class=\"nav-icon\">{{ item.icon }}</span\n            >{{ item.label }}\n          </button>\n        }\n      </nav>\n      <div class=\"sidebar-help\">\n        <span class=\"help-icon\">\u2713</span>\n        <div>\n          <strong>API connected</strong><small>localhost:3000/api/v1</small>\n        </div>\n      </div>\n      <div class=\"user-card\">\n        <span class=\"avatar doctor\">{{ initials(auth.currentUser()) }}</span>\n        <div>\n          <strong>{{ fullName(auth.currentUser()) }}</strong\n          ><small>{{ roleLabel(auth.role()) }}</small>\n        </div>\n        <button\n          mat-icon-button\n          class=\"more\"\n          (click)=\"logout()\"\n          matTooltip=\"Log out\"\n          aria-label=\"Log out\"\n        >\n          \u21AA\n        </button>\n      </div>\n    </aside>\n    <main>\n      <header class=\"topbar\">\n        <button class=\"menu-button\" (click)=\"showMobileNav.set(true)\">\n          \u2630\n        </button>\n        <div class=\"search\">\n          <span>\u2315</span\n          ><input\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"search.set($event)\"\n            placeholder=\"Search this workspace...\"\n          />\n        </div>\n        <div class=\"header-actions\">\n          <span class=\"role-badge\">{{ roleLabel(auth.role()) }}</span\n          ><button class=\"secondary\" (click)=\"logout()\">Log out</button>\n        </div>\n      </header>\n      <section class=\"content\">\n        @if (error()) {\n          <div class=\"alert error\">\n            {{ error() }} <button (click)=\"error.set('')\">\u00D7</button>\n          </div>\n        }\n        @if (notice()) {\n          <div class=\"alert success\">\n            {{ notice() }} <button (click)=\"notice.set('')\">\u00D7</button>\n          </div>\n        }\n        @if (auth.role() === \"PATIENT\") {\n          <div class=\"page-heading\">\n            <div>\n              <p class=\"eyebrow\">PATIENT PORTAL</p>\n              <h1>\n                Welcome,\n                {{\n                  patientProfile()?.firstName || auth.currentUser()?.firstName\n                }}\n              </h1>\n              <p>Your clinic profile, appointments, and prescriptions.</p>\n            </div>\n          </div>\n          @if (loading()) {\n            <section class=\"panel placeholder-panel\">\n              <p>Loading your records\u2026</p>\n            </section>\n          }\n          @if (patientProfile(); as profile) {\n            <section class=\"panel patient-profile-panel\">\n              <div class=\"panel-header\">\n                <div>\n                  <h2>My profile</h2>\n                  <p>{{ profile.patientId }}</p>\n                </div>\n              </div>\n              <dl>\n                <div>\n                  <dt>Date of birth</dt>\n                  <dd>{{ profile.dateOfBirth | date: \"mediumDate\" }}</dd>\n                </div>\n                <div>\n                  <dt>Sex</dt>\n                  <dd>{{ profile.sex || \"\u2014\" }}</dd>\n                </div>\n                <div>\n                  <dt>Blood type</dt>\n                  <dd>{{ profile.bloodType || \"\u2014\" }}</dd>\n                </div>\n                <div>\n                  <dt>Mobile</dt>\n                  <dd>{{ profile.mobileNumber || \"\u2014\" }}</dd>\n                </div>\n                <div>\n                  <dt>Allergies</dt>\n                  <dd>{{ profile.allergies || \"None recorded\" }}</dd>\n                </div>\n                <div>\n                  <dt>Conditions</dt>\n                  <dd>{{ profile.conditions || \"None recorded\" }}</dd>\n                </div>\n              </dl>\n            </section>\n          }\n          <div class=\"patient-portal-grid\">\n            <section class=\"panel\">\n              <div class=\"panel-header\">\n                <div>\n                  <h2>My appointments</h2>\n                  <p>{{ patientAppointments().length }} records</p>\n                </div>\n              </div>\n              <div class=\"portal-list\">\n                @for (a of patientAppointments(); track a.id) {\n                  <article>\n                    <div>\n                      <strong>{{ a.scheduledAt | date: \"medium\" }}</strong\n                      ><small>{{ a.purpose }} \u00B7 {{ a.visitType }}</small>\n                    </div>\n                    <div>\n                      <span class=\"status\"><i></i>{{ a.status }}</span\n                      ><small>Dr. {{ fullName(a.doctor) }}</small>\n                    </div>\n                  </article>\n                } @empty {\n                  <div class=\"empty\">No appointments found.</div>\n                }\n              </div>\n            </section>\n            <section class=\"panel\">\n              <div class=\"panel-header\">\n                <div>\n                  <h2>My prescriptions</h2>\n                  <p>{{ patientPrescriptions().length }} records</p>\n                </div>\n              </div>\n              <div class=\"portal-list\">\n                @for (rx of patientPrescriptions(); track rx.id) {\n                  <article>\n                    <div>\n                      <strong>{{ rx.medication }} \u00B7 {{ rx.dosage }}</strong\n                      ><small>{{ rx.instructions }}</small>\n                    </div>\n                    <div>\n                      <span class=\"status\"><i></i>{{ rx.status }}</span\n                      ><small>Dr. {{ fullName(rx.doctor) }}</small>\n                    </div>\n                  </article>\n                } @empty {\n                  <div class=\"empty\">No prescriptions found.</div>\n                }\n              </div>\n            </section>\n          </div>\n        } @else if (view() === \"Dashboard\") {\n          <div class=\"page-heading\">\n            <div>\n              <p class=\"eyebrow\">\n                {{ dashboard()?.date | date: \"EEEE, MMMM d\" | uppercase }}\n              </p>\n              <h1>Good day, {{ auth.currentUser()?.firstName }}</h1>\n              <p>Live clinic activity from the ACB Clinic API.</p>\n            </div>\n            <button\n              class=\"primary\"\n              *ngIf=\"canCreate('Appointments')\"\n              (click)=\"openCreate('appointment')\"\n            >\n              \uFF0B New appointment\n            </button>\n          </div>\n          <div\n            class=\"stats-grid\"\n            [class.with-total]=\"\n              auth.role() === 'FRONT_DESK' || auth.role() === 'DOCTOR'\n            \"\n          >\n            <article class=\"stat\">\n              <span class=\"stat-icon teal\">\u25A3</span>\n              <div>\n                <small>Today's appointments</small\n                ><strong>{{ dashboard()?.stats?.appointments ?? \"\u2014\" }}</strong>\n              </div>\n            </article>\n            <article class=\"stat\">\n              <span class=\"stat-icon blue\">\u2667</span>\n              <div>\n                <small>Patients checked in</small\n                ><strong>{{ dashboard()?.stats?.checkedIn ?? \"\u2014\" }}</strong>\n              </div>\n            </article>\n            @if (auth.role() === \"FRONT_DESK\" || auth.role() === \"DOCTOR\") {\n              <article class=\"stat\">\n                <span class=\"stat-icon mint\">\u2667</span>\n                <div>\n                  <small>Total patients</small\n                  ><strong>{{\n                    dashboard()?.stats?.totalPatients ?? \"\u2014\"\n                  }}</strong\n                  ><em>Registered clinic records</em>\n                </div>\n              </article>\n            }\n            <article class=\"stat\">\n              <span class=\"stat-icon orange\">\u25F7</span>\n              <div>\n                <small>Average wait time</small><strong>\u2014</strong\n                ><em>Not tracked by backend</em>\n              </div>\n            </article>\n            <article class=\"stat\">\n              <span class=\"stat-icon violet\">Rx</span>\n              <div>\n                <small>Prescriptions issued</small\n                ><strong>{{ dashboard()?.stats?.prescriptions ?? \"\u2014\" }}</strong>\n              </div>\n            </article>\n          </div>\n          <div class=\"dashboard-grid\">\n            <section class=\"panel schedule-panel\">\n              <div class=\"panel-header\">\n                <div>\n                  <h2>Today's schedule</h2>\n                  <p>{{ dashboard()?.schedule?.length ?? 0 }} appointments</p>\n                </div>\n                <button class=\"text-button\" (click)=\"openView('Appointments')\">\n                  View all \u2192\n                </button>\n              </div>\n              <div class=\"appointment-list\">\n                @for (a of dashboard()?.schedule ?? []; track a.id) {\n                  <article\n                    class=\"appointment\"\n                    [class.has-consultation-action]=\"auth.role() === 'DOCTOR'\"\n                  >\n                    <time>{{ a.scheduledAt | date: \"shortTime\" }}</time\n                    ><span class=\"avatar mint\">{{ initials(a.patient) }}</span>\n                    <div class=\"patient-info\">\n                      <strong>{{ fullName(a.patient) }}</strong\n                      ><span>{{ a.purpose }} \u00B7 {{ a.visitType }}</span>\n                    </div>\n                    <span class=\"status\"><i></i>{{ a.status }}</span>\n                    @if (auth.role() === \"DOCTOR\") {\n                      <button\n                        class=\"start-consultation\"\n                        type=\"button\"\n                        (click)=\"startConsultation(a)\"\n                      >\n                        Start consultation\n                      </button>\n                    } @else {\n                      <button\n                        class=\"more\"\n                        (click)=\"viewDetail('appointment', a.id)\"\n                      >\n                        \u00B7\u00B7\u00B7\n                      </button>\n                    }\n                  </article>\n                } @empty {\n                  <div class=\"empty\">No appointments today.</div>\n                }\n              </div>\n            </section>\n            <aside class=\"panel\">\n              <div class=\"panel-header\">\n                <div>\n                  <h2>Recently updated patients</h2>\n                  <p>Live patient records</p>\n                </div>\n              </div>\n              <div class=\"patient-table compact\">\n                @for (p of dashboard()?.recentPatients ?? []; track p.id) {\n                  <article>\n                    <div class=\"identity\">\n                      <span class=\"avatar blue\">{{ initials(p) }}</span>\n                      <div>\n                        <strong>{{ fullName(p) }}</strong\n                        ><small>{{ p.patientId }} \u00B7 {{ age(p) }} years</small>\n                      </div>\n                    </div>\n                    <span>{{ p.conditions || \"No condition recorded\" }}</span\n                    ><button (click)=\"viewDetail('patient', p.id)\">Open</button>\n                  </article>\n                } @empty {\n                  <div class=\"empty\">No recent patients.</div>\n                }\n              </div>\n            </aside>\n          </div>\n        } @else if (view() === \"Consultation\") {\n          <div class=\"consultation-page\">\n            <header class=\"consultation-header\">\n              <div class=\"consultation-topline\">\n                <button\n                  class=\"consultation-back\"\n                  type=\"button\"\n                  (click)=\"openView('Dashboard')\"\n                >\n                  \u2190 Back to dashboard</button\n                ><span class=\"consultation-status\"\n                  ><i></i>Active consultation</span\n                >\n              </div>\n              <div class=\"consultation-heading\">\n                <div>\n                  <span class=\"eyebrow\">DOCTOR CONSULTATION</span>\n                  <h1>Consultation workspace</h1>\n                  <p>\n                    @if (consultationAppointment(); as appointment) {\n                      {{ appointment.visitType }} \u00B7 {{ appointment.purpose }}\n                    } @else {\n                      Review the patient record, prescribe medication, and\n                      update care details.\n                    }\n                  </p>\n                </div>\n                <div class=\"consultation-actions\">\n                  <button\n                    class=\"consultation-action consultation-action-note\"\n                    type=\"button\"\n                    [disabled]=\"!consultationAppointment()\"\n                    (click)=\"openConsultationNote()\"\n                  >\n                    <span>\u270E</span>\n                    <div>\n                      <strong>Consultation note</strong\n                      ><small>Assessment, plan, and follow-up</small>\n                    </div></button\n                  ><button\n                    class=\"consultation-action consultation-action-vaccine\"\n                    type=\"button\"\n                    [disabled]=\"!consultationPatient()\"\n                    (click)=\"addConsultationVaccine()\"\n                  >\n                    <span>\u271A</span>\n                    <div>\n                      <strong>Add vaccination</strong\n                      ><small>Record immunization details</small>\n                    </div></button\n                  ><button\n                    class=\"consultation-action consultation-action-prescription\"\n                    type=\"button\"\n                    [disabled]=\"!consultationPatient()\"\n                    (click)=\"addConsultationPrescription()\"\n                  >\n                    <span>Rx</span>\n                    <div>\n                      <strong>Add prescription</strong\n                      ><small>Create a medication order</small>\n                    </div></button\n                  ><button\n                    class=\"consultation-action consultation-action-end\"\n                    type=\"button\"\n                    [disabled]=\"loading() || !consultationAppointment()\"\n                    (click)=\"endConsultation()\"\n                  >\n                    <span>\u2713</span>\n                    <div>\n                      <strong>End consultation</strong\n                      ><small>Mark this visit as completed</small>\n                    </div>\n                  </button>\n                </div>\n              </div>\n            </header>\n            @if (loading()) {\n              <section class=\"panel consultation-loading\">\n                Loading the patient record and clinical history\u2026\n              </section>\n            }\n            @if (consultationPatient(); as patient) {\n              <section class=\"consultation-profile panel\">\n                <div class=\"consultation-identity\">\n                  <span class=\"avatar blue large\">{{ initials(patient) }}</span>\n                  <div>\n                    <small>PATIENT</small>\n                    <h2>{{ fullName(patient) }}</h2>\n                    <p>{{ patient.sex || \"Sex not recorded\" }}</p>\n                  </div>\n                </div>\n                <dl>\n                  <div>\n                    <dt>Age</dt>\n                    <dd>{{ ageWithMonths(patient) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Mobile number</dt>\n                    <dd>{{ patient.mobileNumber || \"Not recorded\" }}</dd>\n                  </div>\n                  <div>\n                    <dt>Blood type</dt>\n                    <dd>{{ patient.bloodType || \"Not recorded\" }}</dd>\n                  </div>\n                  <div>\n                    <dt>Home address</dt>\n                    <dd>{{ patient.homeAddress || \"Not recorded\" }}</dd>\n                  </div>\n                </dl>\n              </section>\n              <section class=\"panel consultation-vitals\">\n                <header>\n                  <div>\n                    <span class=\"history-kicker\">LATEST SCREENING</span>\n                    <h2>Patient vitals</h2>\n                    <p>\n                      Most recently recorded measurements from the patient\n                      record\n                    </p>\n                  </div>\n                </header>\n                <dl class=\"consultation-vitals-grid\">\n                  <div>\n                    <dt>Blood pressure</dt>\n                    <dd>{{ vitalDisplay(patient.bloodPressure) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Heart rate</dt>\n                    <dd>{{ vitalDisplay(patient.heartRate, \" bpm\") }}</dd>\n                  </div>\n                  <div>\n                    <dt>Respiratory rate</dt>\n                    <dd>\n                      {{\n                        vitalDisplay(patient.respiratoryRate, \" breaths/min\")\n                      }}\n                    </dd>\n                  </div>\n                  <div>\n                    <dt>Temperature</dt>\n                    <dd>{{ vitalDisplay(patient.bodyTemperatureC, \" \u00B0C\") }}</dd>\n                  </div>\n                  <div>\n                    <dt>Oxygen saturation</dt>\n                    <dd>{{ vitalDisplay(patient.oxygenSaturation, \" %\") }}</dd>\n                  </div>\n                  <div>\n                    <dt>Weight</dt>\n                    <dd>{{ vitalDisplay(patient.weightKg, \" kg\") }}</dd>\n                  </div>\n                  <div>\n                    <dt>Height</dt>\n                    <dd>{{ vitalDisplay(patient.heightCm, \" cm\") }}</dd>\n                  </div>\n                  <div>\n                    <dt>BMI</dt>\n                    <dd>{{ bmi(patient) }}</dd>\n                  </div>\n                </dl>\n              </section>\n              <section class=\"panel consultation-documentation\">\n                <header>\n                  <div>\n                    <span class=\"history-kicker\">CLINICAL DOCUMENTATION</span>\n                    <h2>Assessment and plan</h2>\n                    <p>\n                      Capture the current working diagnosis, orders, and\n                      follow-up plan.\n                    </p>\n                  </div>\n                  <button\n                    type=\"button\"\n                    class=\"history-add\"\n                    (click)=\"openConsultationNote()\"\n                  >\n                    \u270E Edit note\n                  </button>\n                </header>\n                @if (consultationNote(consultationAppointment()); as note) {\n                  <dl class=\"consultation-documentation-grid\">\n                    <div>\n                      <dt>Assessment and diagnosis</dt>\n                      <dd>{{ note.assessmentDiagnosis || \"Not recorded\" }}</dd>\n                    </div>\n                    <div>\n                      <dt>Treatment plan</dt>\n                      <dd>{{ note.treatmentPlan || \"Not recorded\" }}</dd>\n                    </div>\n                    <div>\n                      <dt>Diagnostic orders</dt>\n                      <dd>{{ note.diagnosticOrders || \"Not recorded\" }}</dd>\n                    </div>\n                    <div>\n                      <dt>Referrals and follow-up</dt>\n                      <dd>{{ note.referralsFollowUp || \"Not recorded\" }}</dd>\n                    </div>\n                  </dl>\n                } @else {\n                  <div class=\"consultation-empty\">\n                    <span>\u270E</span><strong>No consultation note yet</strong>\n                    <p>\n                      Document the assessment, treatment plan, orders, and\n                      follow-up for this visit.\n                    </p>\n                    <button type=\"button\" (click)=\"openConsultationNote()\">\n                      Add consultation note\n                    </button>\n                  </div>\n                }\n              </section>\n              <section class=\"clinical-overview\">\n                <header>\n                  <div>\n                    <span class=\"history-kicker\">CLINICAL SAFETY</span>\n                    <h2>Clinical summary</h2>\n                    <p>\n                      Keep the patient\u2019s active health risks and chronic\n                      conditions visible during the consultation.\n                    </p>\n                  </div>\n                  @if (!editingClinicalOverview()) {\n                    <button\n                      type=\"button\"\n                      class=\"clinical-edit-button\"\n                      (click)=\"editClinicalOverview()\"\n                    >\n                      \u270E Update clinical information\n                    </button>\n                  }\n                </header>\n                @if (editingClinicalOverview()) {\n                  <form\n                    class=\"clinical-overview-form\"\n                    (ngSubmit)=\"saveClinicalOverview()\"\n                  >\n                    <label\n                      ><span>Known allergies</span\n                      ><textarea\n                        name=\"consultationAllergies\"\n                        [(ngModel)]=\"clinicalOverviewForm.allergies\"\n                        placeholder=\"Add medication, food, or environmental allergies\"\n                      ></textarea\n                      ><small\n                        >Enter \u201CNone known\u201D when the patient confirms no\n                        allergies.</small\n                      ></label\n                    ><label\n                      ><span>Medical conditions</span\n                      ><textarea\n                        name=\"consultationConditions\"\n                        [(ngModel)]=\"clinicalOverviewForm.conditions\"\n                        placeholder=\"Add diagnosed or ongoing medical conditions\"\n                      ></textarea\n                      ><small\n                        >Include relevant chronic and active conditions.</small\n                      ></label\n                    >\n                    <div class=\"clinical-form-actions\">\n                      <button\n                        class=\"secondary\"\n                        type=\"button\"\n                        (click)=\"editingClinicalOverview.set(false)\"\n                      >\n                        Cancel</button\n                      ><button\n                        class=\"primary\"\n                        type=\"submit\"\n                        [disabled]=\"loading()\"\n                      >\n                        {{\n                          loading() ? \"Saving\u2026\" : \"Save clinical information\"\n                        }}\n                      </button>\n                    </div>\n                  </form>\n                } @else {\n                  <article class=\"consultation-clinical-summary panel\">\n                    <div class=\"consultation-clinical-item\">\n                      <small>KNOWN ALLERGIES</small\n                      ><strong>{{\n                        patient.allergies || \"No allergies recorded\"\n                      }}</strong>\n                    </div>\n                    <div class=\"consultation-clinical-divider\"></div>\n                    <div class=\"consultation-clinical-item\">\n                      <small>MEDICAL CONDITIONS</small\n                      ><strong>{{\n                        patient.conditions || \"No conditions recorded\"\n                      }}</strong>\n                    </div>\n                  </article>\n                }\n              </section>\n              <section class=\"consultation-history-stack\">\n                <section\n                  class=\"panel consultation-history appointments-history\"\n                >\n                  <header>\n                    <div>\n                      <span class=\"history-kicker\">CARE HISTORY</span>\n                      <h2>Previous consultation information</h2>\n                      <p>\n                        {{ consultationAppointments().length }} appointment\n                        records\n                      </p>\n                    </div>\n                  </header>\n                  <div>\n                    @for (a of consultationAppointments(); track a.id) {\n                      <article>\n                        <time>{{ a.scheduledAt | date: \"mediumDate\" }}</time>\n                        <div>\n                          <strong>{{ a.purpose }}</strong\n                          ><small\n                            >{{ a.visitType }} \u00B7 Dr.\n                            {{ fullName(a.doctor) }}</small\n                          >\n                        </div>\n                        <span class=\"status\"><i></i>{{ a.status }}</span>\n                      </article>\n                    } @empty {\n                      <p class=\"empty\">No previous appointments.</p>\n                    }\n                  </div>\n                </section>\n                <section\n                  class=\"panel consultation-history prescription-history\"\n                >\n                  <header>\n                    <div>\n                      <span class=\"history-kicker\">MEDICATION</span>\n                      <h2>Prescription history</h2>\n                      <p>\n                        {{ consultationPrescriptions().length }} medication\n                        records\n                      </p>\n                    </div>\n                    <button\n                      type=\"button\"\n                      class=\"history-add\"\n                      (click)=\"addConsultationPrescription()\"\n                    >\n                      \uFF0B Add prescription\n                    </button>\n                  </header>\n                  <div>\n                    @for (rx of consultationPrescriptions(); track rx.id) {\n                      <article>\n                        <time>{{ rx.issuedAt | date: \"mediumDate\" }}</time>\n                        <div>\n                          <strong>{{ rx.medication }} \u00B7 {{ rx.dosage }}</strong\n                          ><small>{{ rx.instructions }}</small>\n                        </div>\n                        <span class=\"status\"><i></i>{{ rx.status }}</span>\n                      </article>\n                    } @empty {\n                      <div class=\"consultation-empty\">\n                        <span>Rx</span><strong>No prescriptions yet</strong>\n                        <p>\n                          Add medication orders without leaving the\n                          consultation.\n                        </p>\n                        <button\n                          type=\"button\"\n                          (click)=\"addConsultationPrescription()\"\n                        >\n                          Add first prescription\n                        </button>\n                      </div>\n                    }\n                  </div>\n                </section>\n                <section class=\"panel consultation-history\">\n                  <header>\n                    <div>\n                      <span class=\"history-kicker\">IMMUNIZATION</span>\n                      <h2>Vaccination history</h2>\n                      <p>\n                        {{ consultationVaccines().length }} vaccination records\n                      </p>\n                    </div>\n                    <button\n                      type=\"button\"\n                      class=\"history-add\"\n                      (click)=\"addConsultationVaccine()\"\n                    >\n                      \uFF0B Add vaccination\n                    </button>\n                  </header>\n                  <div>\n                    @for (v of consultationVaccines(); track v.id) {\n                      <article>\n                        <time>{{\n                          v.dateAdministered | date: \"mediumDate\"\n                        }}</time>\n                        <div>\n                          <strong>{{ v.vaccineName }}</strong\n                          ><small>{{ v.dose }} \u00B7 {{ v.administeredBy }}</small>\n                        </div>\n                        <span class=\"status\"><i></i>{{ v.status }}</span>\n                      </article>\n                    } @empty {\n                      <div class=\"consultation-empty\">\n                        <span>\u271A</span><strong>No vaccinations yet</strong>\n                        <p>\n                          Add immunization records without leaving the\n                          consultation.\n                        </p>\n                        <button\n                          type=\"button\"\n                          (click)=\"addConsultationVaccine()\"\n                        >\n                          Add first vaccination\n                        </button>\n                      </div>\n                    }\n                  </div>\n                </section>\n              </section>\n            }\n          </div>\n        } @else if (\n          view() === \"Medical Certificate\" && auth.role() === \"DOCTOR\"\n        ) {\n          <div class=\"certificate-page\">\n            <div class=\"page-heading subpage certificate-page-heading\">\n              <div>\n                <p class=\"eyebrow\">DOCTOR WORKSPACE</p>\n                <h1>Medical Certificate</h1>\n                <p>\n                  Create and print a medical certificate for a registered\n                  patient.\n                </p>\n              </div>\n              <button class=\"primary\" type=\"button\" (click)=\"printMedicalCertificate()\">\n                Print certificate\n              </button>\n            </div>\n            <div class=\"certificate-workspace\">\n              <section class=\"panel certificate-editor\">\n                <header>\n                  <span class=\"history-kicker\">CERTIFICATE DETAILS</span>\n                  <h2>Create medical certificate</h2>\n                  <p>\n                    Select the patient and enter the certification statement.\n                  </p>\n                </header>\n                <form>\n                  <label\n                    ><span>Patient name <em>*</em></span>\n                    <div class=\"certificate-patient-autocomplete\">\n                      <input\n                        name=\"certificatePatient\"\n                        type=\"text\"\n                        [ngModel]=\"certificatePatientSearch\"\n                        (ngModelChange)=\"resolveCertificatePatient($event)\"\n                        (focus)=\"certificateSuggestionsOpen.set(true)\"\n                        (blur)=\"certificateSuggestionsOpen.set(false)\"\n                        placeholder=\"Type a patient name\"\n                        autocomplete=\"off\"\n                        required\n                      />\n                      @if (certificateSuggestionsOpen()) {\n                        <div class=\"certificate-patient-suggestions\" role=\"listbox\">\n                          @for (patient of certificatePatientSuggestions(); track patient.id) {\n                            <button type=\"button\" role=\"option\" (mousedown)=\"selectCertificatePatient(patient); $event.preventDefault()\">\n                              <span>{{ fullName(patient) }}</span><small>{{ patient.patientId }}</small>\n                            </button>\n                          } @empty {\n                            <p>No registered patient matches. The typed name can still be used.</p>\n                          }\n                        </div>\n                      }\n                    </div>\n                    @if (certificatePatient(); as patient) {\n                      <small class=\"patient-match\">\u2713 Linked to {{ patient.patientId }}</small>\n                    } @else if (certificatePatientSearch) {\n                      <small>Free-text patient name</small>\n                    }</label\n                  >\n                  <label\n                    ><span>Date <em>*</em></span\n                    ><app-material-date-picker\n                      name=\"certificateDate\"\n                      [(ngModel)]=\"medicalCertificateForm.date\"\n                      placeholder=\"Choose certificate date\"\n                      [required]=\"true\"\n                  /></label>\n                  <label\n                    ><span>Medical certificate details <em>*</em></span\n                    ><textarea\n                      name=\"certificateDetails\"\n                      [(ngModel)]=\"medicalCertificateForm.details\"\n                      placeholder=\"Enter the medical findings, recommendation, rest period, or purpose of this certificate.\"\n                      required\n                    ></textarea\n                    ><small\n                      >Write only the clinical information appropriate for\n                      release to the patient.</small\n                    ></label\n                  >\n                  <div class=\"certificate-save-action\">\n                    <button\n                      class=\"primary certificate-save-button\"\n                      type=\"button\"\n                      (click)=\"saveMedicalCertificate()\"\n                      [disabled]=\"!canSaveMedicalCertificate()\"\n                    >\n                      <span class=\"certificate-save-icon\">\u2713</span>\n                      <span>\n                        <strong>{{ loading() ? \"Saving certificate\u2026\" : \"Save medical certificate\" }}</strong>\n                        <small>Store this certificate in the patient record</small>\n                      </span>\n                    </button>\n                    @if (!canSaveMedicalCertificate() && !loading()) {\n                      <small class=\"certificate-save-hint\">Complete the patient name, date, and certificate details to enable saving.</small>\n                    }\n                  </div>\n                </form>\n              </section>\n              <article class=\"certificate-sheet\" id=\"medical-certificate-print\">\n                <header class=\"certificate-sheet-header\">\n                  <img\n                    src=\"/images/AppLogo-transparent.png\"\n                    alt=\"Pedia Care Children Clinic\"\n                  />\n                  <div>\n                    <strong>Urdaneta City, Pangasinan</strong\n                    ><span>Tel no. 123-123-123</span>\n                  </div>\n                </header>\n                <h2>MEDICAL CERTIFICATE</h2>\n                <time>{{\n                  medicalCertificateForm.date | date: \"longDate\"\n                }}</time>\n                <div class=\"certificate-body\">\n                  <p>TO WHOM IT MAY CONCERN:</p>\n                  @if (certificateDisplayName()) {\n                    <p>\n                      This is to certify that\n                      <strong>{{ certificateDisplayName() }}</strong> has been seen and\n                      evaluated at Pedia Care Children Clinic.\n                    </p>\n                  } @else {\n                    <p>\n                      This is to certify that\n                      <strong>____________________________</strong> has been\n                      seen and evaluated at Pedia Care Children Clinic.\n                    </p>\n                  }\n                  <p class=\"certificate-details\">\n                    {{\n                      medicalCertificateForm.details ||\n                        \"Medical certificate details will appear here.\"\n                    }}\n                  </p>\n                  <p>\n                    This certificate is issued upon the request of the patient\n                    or guardian for whatever lawful purpose it may serve.\n                  </p>\n                </div>\n                <footer class=\"certificate-doctor\">\n                  <div class=\"signature-line\"></div>\n                  <strong>Dr. {{ fullName(auth.currentUser()) }}</strong\n                  ><span>Attending Physician</span>\n                </footer>\n              </article>\n            </div>\n          </div>\n        } @else {\n          <div class=\"page-heading subpage\">\n            <div>\n              @if (view() === \"Users\") {\n                <p class=\"eyebrow\">CLINIC WORKSPACE</p>\n              }\n              <h1>{{ view() }}</h1>\n              <p>Live records synchronized with the backend API.</p>\n            </div>\n            @if (canCreate(view())) {\n              <button\n                class=\"primary\"\n                (click)=\"\n                  openCreate(\n                    view() === 'Appointments'\n                      ? 'appointment'\n                      : view() === 'Patients'\n                        ? 'patient'\n                        : view() === 'Prescriptions'\n                          ? 'prescription'\n                          : view() === 'Vaccinations'\n                            ? 'vaccine'\n                            : 'user'\n                  )\n                \"\n              >\n                \uFF0B Add\n                {{\n                  view() === \"Vaccinations\"\n                    ? \"vaccination\"\n                    : view().slice(0, -1).toLowerCase()\n                }}\n              </button>\n            }\n          </div>\n          <section class=\"panel data-panel\">\n            @if (loading()) {\n              <div class=\"empty\">Loading\u2026</div>\n            }\n            @if (view() === \"Appointments\") {\n              <div class=\"data-head appointments-row\">\n                <span>Appointment</span><span>Doctor</span><span>Status</span\n                ><span>Actions</span>\n              </div>\n              @for (a of visibleAppointments(); track a.id) {\n                <article class=\"data-row appointments-row\">\n                  <div class=\"identity\">\n                    <span class=\"avatar mint\">{{ initials(a.patient) }}</span>\n                    <div>\n                      <strong>{{ fullName(a.patient) }}</strong\n                      ><small\n                        >{{ a.scheduledAt | date: \"medium\" }} \u00B7\n                        {{ a.purpose }}</small\n                      >\n                    </div>\n                  </div>\n                  <span>Dr. {{ fullName(a.doctor) }}</span\n                  ><select\n                    [ngModel]=\"a.status\"\n                    (ngModelChange)=\"status(a, $event)\"\n                  >\n                    <option>PENDING</option>\n                    <option>CONFIRMED</option>\n                    <option>COMPLETED</option>\n                    <option>NO_SHOW</option>\n                    <option>CANCELLED</option>\n                  </select>\n                  <div class=\"row-actions\">\n                    <button (click)=\"viewDetail('appointment', a.id)\">\n                      View</button\n                    ><button\n                      (click)=\"edit(a, 'appointment'); (ensureReferences)\"\n                    >\n                      Edit\n                    </button>\n                    @if (\n                      auth.role() === \"DOCTOR\" &&\n                      (a.status === \"PENDING\" || a.status === \"CONFIRMED\")\n                    ) {\n                      <button\n                        class=\"start-consultation\"\n                        type=\"button\"\n                        (click)=\"startConsultation(a)\"\n                      >\n                        Start consultation\n                      </button>\n                    }\n                    @if (\n                      canCreate(\"Appointments\") && a.status !== \"CANCELLED\"\n                    ) {\n                      <button class=\"danger\" (click)=\"remove(a, 'appointment')\">\n                        Cancel\n                      </button>\n                    }\n                  </div>\n                </article>\n              } @empty {\n                <div class=\"empty\">No appointments found.</div>\n              }\n            }\n            @if (view() === \"Patients\") {\n              <div class=\"data-head patients-row\">\n                <span>Patient</span><span>Age</span\n                ><span>Clinical summary</span><span>Contact</span\n                ><span>Last checkup</span><span>Actions</span>\n              </div>\n              @for (p of visiblePatients(); track p.id) {\n                <article class=\"data-row patients-row\">\n                  <div class=\"identity\">\n                    <span class=\"avatar blue\">{{ initials(p) }}</span>\n                    <div>\n                      <strong>{{ fullName(p) }}</strong\n                      ><small\n                        >{{ p.patientId }} \u00B7 {{ p.sex || \"\u2014\" }}</small\n                      >\n                    </div>\n                  </div>\n                  <span class=\"patient-age\">{{ ageWithMonths(p) }}</span>\n                  <span\n                    >{{ p.conditions || \"No conditions\"\n                    }}<small class=\"block\"\n                      >Allergies: {{ p.allergies || \"None recorded\" }}</small\n                    ></span\n                  ><span>{{ p.mobileNumber || p.emailAddress || \"\u2014\" }}</span\n                  ><time class=\"patient-last-checkup\">\n                    {{ p.lastCheckupDate ? (p.lastCheckupDate | date: \"mediumDate\") : \"No completed checkup\" }}\n                  </time>\n                  <div class=\"row-actions\">\n                    <button (click)=\"viewDetail('patient', p.id)\">View</button\n                    ><button (click)=\"edit(p, 'patient')\">Edit</button>\n                    @if (auth.role() === \"ADMIN\") {\n                      <button class=\"danger\" (click)=\"remove(p, 'patient')\">\n                        Delete\n                      </button>\n                    }\n                  </div>\n                </article>\n              } @empty {\n                <div class=\"empty\">No patients found.</div>\n              }\n            }\n            @if (view() === \"Prescriptions\") {\n              <div class=\"data-head rx-row\">\n                <span>Patient</span><span>Medication</span\n                ><span>Directions</span><span>Prescribed by</span\n                ><span>Issued</span><span>Status</span><span>Actions</span>\n              </div>\n              @for (rx of visiblePrescriptions(); track rx.id) {\n                <article class=\"data-row rx-row\">\n                  <div class=\"identity\">\n                    <span class=\"avatar violet\">{{\n                      initials(rx.patient)\n                    }}</span>\n                    <div>\n                      <strong>{{ fullName(rx.patient) }}</strong\n                      ><small>Prescription record</small>\n                    </div>\n                  </div>\n                  <div class=\"rx-medication\">\n                    <strong>{{ rx.medication }}</strong\n                    ><small\n                      >{{ rx.dosage }} \u00B7 Qty {{ rx.quantity }}\n                      @if (rx.refills) {\n                        \u00B7 {{ rx.refills }} refill{{\n                          rx.refills === 1 ? \"\" : \"s\"\n                        }}\n                      }\n                    </small>\n                  </div>\n                  <span class=\"rx-directions\">{{ rx.instructions }}</span\n                  ><span>Dr. {{ fullName(rx.doctor) }}</span\n                  ><time>{{ rx.issuedAt | date: \"mediumDate\" }}</time\n                  ><span class=\"status\"><i></i>{{ rx.status }}</span>\n                  <div class=\"row-actions\">\n                    <button (click)=\"viewDetail('prescription', rx.id)\">\n                      View</button\n                    ><button (click)=\"edit(rx, 'prescription')\">Edit</button>\n                  </div>\n                </article>\n              } @empty {\n                <div class=\"empty\">No prescriptions found.</div>\n              }\n            }\n            @if (view() === \"Vaccinations\") {\n              <div class=\"data-head vaccine-row\">\n                <span>Patient name</span><span>Vaccination</span\n                ><span>Dose</span><span>Date</span><span>Administered by</span\n                ><span>Status</span><span>Actions</span>\n              </div>\n              @for (v of visibleVaccines(); track v.id) {\n                <article class=\"data-row vaccine-row\">\n                  <div class=\"identity\">\n                    <span class=\"avatar coral\">{{ initials(v.patient) }}</span>\n                    <div>\n                      <strong>{{ fullName(v.patient) }}</strong\n                      ><small>Patient vaccination record</small>\n                    </div>\n                  </div>\n                  <div class=\"vaccine-name\">\n                    <strong>{{ v.vaccineName }}</strong>\n                  </div>\n                  <span class=\"vaccine-dose\">{{ v.dose }}</span\n                  ><time>{{ v.dateAdministered | date: \"mediumDate\" }}</time\n                  ><span>{{ v.administeredBy }}</span\n                  ><span class=\"status\"><i></i>{{ v.status }}</span>\n                  <div class=\"row-actions\">\n                    <button (click)=\"viewDetail('vaccine', v.id)\">View</button>\n                  </div>\n                </article>\n              } @empty {\n                <div class=\"empty\">No vaccinations found.</div>\n              }\n            }\n            @if (view() === \"Users\") {\n              <div class=\"data-head users-row\">\n                <span>User</span><span>Role</span><span>Status</span\n                ><span>Actions</span>\n              </div>\n              @for (u of visibleUsers(); track u.id) {\n                <article class=\"data-row users-row\">\n                  <div class=\"identity\">\n                    <span class=\"avatar doctor\">{{ initials(u) }}</span>\n                    <div>\n                      <strong>{{ fullName(u) }}</strong\n                      ><small>{{ u.email }}</small>\n                    </div>\n                  </div>\n                  <span class=\"role-badge\">{{ roleLabel(u.role) }}</span\n                  ><span class=\"user-status\" [class.inactive]=\"!u.isActive\"\n                    ><i></i>{{ u.isActive ? \"Active\" : \"Inactive\" }}</span\n                  >\n                  <div class=\"row-actions\">\n                    <button (click)=\"edit(u, 'user')\">Edit</button>\n                    @if (u.isActive) {\n                      <button class=\"danger\" (click)=\"remove(u, 'user')\">\n                        Deactivate\n                      </button>\n                    }\n                  </div>\n                </article>\n              } @empty {\n                <div class=\"empty\">No users found.</div>\n              }\n            }\n          </section>\n        }\n      </section>\n    </main>\n  </div>\n}\n\n@if (modal() === \"appointment\") {\n  <div class=\"modal-backdrop appointment-modal-backdrop\">\n    <section\n      class=\"user-modal form-modal appointment-modal\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"appointment-modal-title\"\n    >\n      <header class=\"appointment-modal-header\">\n        <div class=\"appointment-modal-icon\">\u25A3</div>\n        <div>\n          <span class=\"patient-modal-eyebrow\">APPOINTMENT</span>\n          <h2 id=\"appointment-modal-title\">\n            {{ selected() ? \"Edit appointment\" : \"Book appointment\" }}\n          </h2>\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"save('appointment')\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"appointment-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>01</span>\n            <div>\n              <h3>Patient & doctor</h3>\n              <p>Select who the visit is for and the assigned physician</p>\n            </div>\n          </div>\n          <div class=\"appointment-fields two-columns\">\n            <label\n              ><span>Patient <em>*</em></span\n              ><select\n                name=\"patientId\"\n                [(ngModel)]=\"appointmentForm.patientId\"\n                (ngModelChange)=\"syncAppointmentPatient($event)\"\n                required\n              >\n                <option value=\"\">Select a patient</option>\n                @for (p of patients(); track p.id) {\n                  <option [value]=\"p.id\">{{ fullName(p) }}</option>\n                }\n              </select>\n              @if (!patients().length) {\n                <small>No patients available.</small>\n              }</label\n            ><label\n              ><span>Doctor <em>*</em></span\n              ><select\n                name=\"doctorId\"\n                [(ngModel)]=\"appointmentForm.assignedDoctorId\"\n                required\n              >\n                <option value=\"\">Select a doctor</option>\n                @for (d of doctors(); track d.id) {\n                  <option [value]=\"d.id\">Dr. {{ fullName(d) }}</option>\n                }\n              </select>\n              @if (!doctors().length) {\n                <small class=\"field-warning\">No active doctors found.</small>\n              }\n            </label>\n          </div>\n        </section>\n        <section class=\"appointment-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>02</span>\n            <div>\n              <h3>Schedule</h3>\n              <p>Choose the date, time, and type of visit</p>\n            </div>\n          </div>\n          <div class=\"appointment-fields three-columns\">\n            <label\n              ><span>Date <em>*</em></span\n              ><app-material-date-picker\n                name=\"date\"\n                [(ngModel)]=\"appointmentForm.date\"\n                placeholder=\"Choose appointment date\"\n                [required]=\"true\" /></label\n            ><label\n              ><span>Time <em>*</em></span\n              ><input\n                type=\"time\"\n                name=\"time\"\n                [(ngModel)]=\"appointmentForm.time\"\n                required /></label\n            ><label\n              ><span>Visit type <em>*</em></span\n              ><select\n                name=\"visitType\"\n                [(ngModel)]=\"appointmentForm.visitType\"\n                required\n              >\n                <option value=\"\">Select visit type</option>\n                <option>New patient</option>\n                <option>Returning</option>\n                <option>Follow-up</option>\n                <option>Consultation</option>\n                <option>Routine check-up</option>\n                <option>Vaccination</option>\n                <option>Laboratory review</option>\n                <option>Urgent visit</option>\n                <option>Teleconsultation</option>\n              </select></label\n            >\n          </div>\n        </section>\n        <section class=\"appointment-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>03</span>\n            <div>\n              <h3>Patient vitals</h3>\n              <p>\n                Capture the latest screening values before the doctor sees the\n                patient\n              </p>\n            </div>\n          </div>\n          <div class=\"appointment-fields vitals-grid\">\n            <label\n              ><span>Blood pressure</span\n              ><input\n                name=\"bloodPressure\"\n                [(ngModel)]=\"appointmentForm.bloodPressure\"\n                placeholder=\"e.g. 120/80 mmHg\" /></label\n            ><label\n              ><span>Heart rate</span\n              ><input\n                type=\"number\"\n                min=\"0\"\n                name=\"heartRate\"\n                [(ngModel)]=\"appointmentForm.heartRate\"\n                placeholder=\"bpm\" /></label\n            ><label\n              ><span>Respiratory rate</span\n              ><input\n                type=\"number\"\n                min=\"0\"\n                name=\"respiratoryRate\"\n                [(ngModel)]=\"appointmentForm.respiratoryRate\"\n                placeholder=\"breaths/min\" /></label\n            ><label\n              ><span>Temperature</span\n              ><input\n                type=\"number\"\n                min=\"30\"\n                max=\"45\"\n                step=\"0.1\"\n                name=\"bodyTemperatureC\"\n                [(ngModel)]=\"appointmentForm.bodyTemperatureC\"\n                placeholder=\"\u00B0C\" /></label\n            ><label\n              ><span>Oxygen saturation</span\n              ><input\n                type=\"number\"\n                min=\"0\"\n                max=\"100\"\n                name=\"oxygenSaturation\"\n                [(ngModel)]=\"appointmentForm.oxygenSaturation\"\n                placeholder=\"%\" /></label\n            ><label\n              ><span>Weight</span\n              ><input\n                type=\"number\"\n                min=\"0\"\n                step=\"0.1\"\n                name=\"weightKg\"\n                [(ngModel)]=\"appointmentForm.weightKg\"\n                placeholder=\"kg\" /></label\n            ><label\n              ><span>Height</span\n              ><input\n                type=\"number\"\n                min=\"0\"\n                step=\"0.1\"\n                name=\"heightCm\"\n                [(ngModel)]=\"appointmentForm.heightCm\"\n                placeholder=\"cm\"\n            /></label>\n          </div>\n        </section>\n        <section class=\"appointment-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>04</span>\n            <div>\n              <h3>Visit details</h3>\n              <p>Add context for the receiving care team</p>\n            </div>\n          </div>\n          <div class=\"appointment-fields\">\n            <label\n              ><span>Purpose <em>*</em></span\n              ><textarea\n                name=\"purpose\"\n                [(ngModel)]=\"appointmentForm.purpose\"\n                placeholder=\"Briefly describe the reason for this appointment\"\n                required\n              ></textarea>\n            </label>\n            @if (selected()) {\n              <div class=\"two-columns\">\n                <label\n                  >Status<select\n                    name=\"status\"\n                    [(ngModel)]=\"appointmentForm.status\"\n                  >\n                    <option>PENDING</option>\n                    <option>CONFIRMED</option>\n                    <option>COMPLETED</option>\n                    <option>NO_SHOW</option>\n                    <option>CANCELLED</option>\n                  </select></label\n                ><label\n                  >Internal notes<textarea\n                    name=\"notes\"\n                    [(ngModel)]=\"appointmentForm.notes\"\n                    placeholder=\"Optional note for clinic staff\"\n                  ></textarea>\n                </label>\n              </div>\n            }\n          </div>\n        </section>\n        <footer class=\"appointment-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">\u2713</span\n            ><small>The doctor\u2019s schedule will be checked for conflicts</small>\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button\n              class=\"primary\"\n              [disabled]=\"loading() || !doctors().length\"\n            >\n              {{\n                loading()\n                  ? \"Saving\u2026\"\n                  : selected()\n                    ? \"Save changes\"\n                    : \"Book appointment\"\n              }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"patient\") {\n  <div class=\"modal-backdrop patient-modal-backdrop\">\n    <section\n      class=\"user-modal form-modal patient-modal\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"patient-modal-title\"\n    >\n      <header class=\"patient-modal-header\">\n        <div class=\"patient-modal-icon\">\u2667</div>\n        <div>\n          <span class=\"patient-modal-eyebrow\">PATIENT RECORD</span>\n          <h2 id=\"patient-modal-title\">\n            {{ selected() ? \"Edit patient\" : \"Register new patient\" }}\n          </h2>\n          @if (selected()) {\n            <p>Update demographic and clinical information.</p>\n          }\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"save('patient')\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"patient-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>01</span>\n            <div>\n              <h3>Personal information</h3>\n              <p>Identity and demographic details</p>\n            </div>\n          </div>\n          <div class=\"patient-fields identity-fields\">\n            <label\n              ><span>First name <em>*</em></span\n              ><input\n                name=\"firstName\"\n                [(ngModel)]=\"patientForm.firstName\"\n                autocomplete=\"given-name\"\n                placeholder=\"First name\"\n                required /></label\n            ><label\n              ><span>Last name <em>*</em></span\n              ><input\n                name=\"lastName\"\n                [(ngModel)]=\"patientForm.lastName\"\n                autocomplete=\"family-name\"\n                placeholder=\"Last name\"\n                required /></label\n            ><label\n              ><span>Date of birth <em>*</em></span\n              ><app-material-date-picker\n                name=\"dob\"\n                [(ngModel)]=\"patientForm.dateOfBirth\"\n                placeholder=\"Choose date of birth\"\n                [required]=\"true\" /></label\n            ><label\n              >Sex<select name=\"sex\" [(ngModel)]=\"patientForm.sex\">\n                <option value=\"\">Select</option>\n                <option>Female</option>\n                <option>Male</option>\n                <option>Other</option>\n              </select></label\n            ><label\n              >Blood type<select\n                name=\"bloodType\"\n                [(ngModel)]=\"patientForm.bloodType\"\n              >\n                <option value=\"\">Unknown</option>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B+</option>\n                <option>B-</option>\n                <option>AB+</option>\n                <option>AB-</option>\n                <option>O+</option>\n                <option>O-</option>\n              </select></label\n            >\n          </div>\n        </section>\n        <section class=\"patient-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>02</span>\n            <div>\n              <h3>Contact & coverage</h3>\n              <p>Ways to reach the patient</p>\n            </div>\n          </div>\n          <div class=\"patient-fields contact-fields\">\n            <label\n              >Mobile number<input\n                name=\"mobile\"\n                type=\"tel\"\n                [(ngModel)]=\"patientForm.mobileNumber\"\n                autocomplete=\"tel\"\n                placeholder=\"+63 9XX XXX XXXX\" /></label\n            ><label\n              >Email address<input\n                type=\"email\"\n                name=\"patientEmail\"\n                [(ngModel)]=\"patientForm.emailAddress\"\n                autocomplete=\"email\"\n                placeholder=\"patient@example.com\" /></label\n            ><label\n              >PhilHealth ID<input\n                name=\"philhealth\"\n                [(ngModel)]=\"patientForm.philHealthInsuranceId\"\n                placeholder=\"12-345678901-2\" /></label\n            ><label class=\"span-full\"\n              >Home address<input\n                name=\"address\"\n                [(ngModel)]=\"patientForm.homeAddress\"\n                autocomplete=\"street-address\"\n                placeholder=\"House number, street, city, province\"\n            /></label>\n          </div>\n        </section>\n        <section class=\"patient-form-section\">\n          <div class=\"patient-section-heading\">\n            <span>03</span>\n            <div>\n              <h3>Emergency contact</h3>\n              <p>Contact in case of urgent care</p>\n            </div>\n          </div>\n          <div class=\"patient-fields emergency-fields\">\n            <label\n              >Contact name<input\n                name=\"emergencyName\"\n                [(ngModel)]=\"patientForm.emergencyContactName\"\n                placeholder=\"Full name\" /></label\n            ><label\n              >Relationship<select\n                name=\"emergencyRelationship\"\n                [(ngModel)]=\"patientForm.emergencyContactRelationship\"\n              >\n                <option value=\"\">Select relationship</option>\n                <optgroup label=\"Immediate family\">\n                  <option>Mother</option>\n                  <option>Father</option>\n                  <option>Parent</option>\n                  <option>Son</option>\n                  <option>Daughter</option>\n                  <option>Child</option>\n                  <option>Brother</option>\n                  <option>Sister</option>\n                  <option>Sibling</option>\n                </optgroup>\n                <optgroup label=\"Partner & relatives\">\n                  <option>Spouse</option>\n                  <option>Partner</option>\n                  <option>Grandparent</option>\n                  <option>Grandchild</option>\n                  <option>Aunt</option>\n                  <option>Uncle</option>\n                  <option>Cousin</option>\n                  <option>Relative</option>\n                </optgroup>\n                <optgroup label=\"Care & support\">\n                  <option>Legal guardian</option>\n                  <option>Caregiver</option>\n                  <option>Friend</option>\n                  <option>Neighbor</option>\n                  <option>Employer</option>\n                  <option>Other</option>\n                </optgroup>\n              </select></label\n            ><label\n              >Contact number<input\n                name=\"emergencyNumber\"\n                type=\"tel\"\n                [(ngModel)]=\"patientForm.emergencyContactNumber\"\n                placeholder=\"+63 9XX XXX XXXX\"\n            /></label>\n          </div>\n        </section>\n        <section class=\"patient-form-section clinical-section\">\n          <div class=\"patient-section-heading\">\n            <span>04</span>\n            <div>\n              <h3>Clinical overview</h3>\n              <p>Important information visible to the care team</p>\n            </div>\n          </div>\n          <div class=\"patient-fields clinical-fields\">\n            <label\n              >Known allergies<textarea\n                name=\"allergies\"\n                [(ngModel)]=\"patientForm.allergies\"\n                placeholder=\"List medication, food, or environmental allergies\"\n              ></textarea></label\n            ><label\n              >Medical conditions<textarea\n                name=\"conditions\"\n                [(ngModel)]=\"patientForm.conditions\"\n                placeholder=\"List diagnosed or ongoing conditions\"\n              ></textarea>\n            </label>\n          </div>\n        </section>\n        <footer class=\"patient-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">\u2713</span\n            ><small>Stored securely in the patient record</small>\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button class=\"primary\" [disabled]=\"loading()\">\n              {{\n                loading()\n                  ? \"Saving\u2026\"\n                  : selected()\n                    ? \"Save changes\"\n                    : \"Register patient\"\n              }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"prescription\") {\n  <div class=\"modal-backdrop workflow-modal-backdrop\">\n    <section\n      class=\"user-modal workflow-modal prescription-workflow\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"prescription-modal-title\"\n    >\n      <header class=\"workflow-modal-header\">\n        <div class=\"workflow-modal-icon rx-icon\">Rx</div>\n        <div>\n          <span class=\"workflow-eyebrow\">MEDICATION ORDER</span>\n          <h2 id=\"prescription-modal-title\">\n            {{ selected() ? \"Edit prescription\" : \"New prescription\" }}\n          </h2>\n          <p>Document medication details and safe-use instructions</p>\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"save('prescription')\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>01</span>\n            <div>\n              <h3>Patient</h3>\n              <p>Confirm identity and review allergy status</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields\">\n            <label\n              ><span>Patient <em>*</em></span\n              ><input\n                name=\"rxPatientSearch\"\n                type=\"text\"\n                list=\"prescription-patient-suggestions\"\n                [ngModel]=\"prescriptionPatientSearch\"\n                (ngModelChange)=\"resolvePrescriptionPatient($event)\"\n                placeholder=\"Type a patient name\"\n                autocomplete=\"off\"\n                required\n              /><datalist id=\"prescription-patient-suggestions\">\n                @for (p of patients(); track p.id) {\n                  <option [value]=\"fullName(p)\"></option>\n                }\n              </datalist>\n              @if (selectedPrescriptionPatient(); as patient) {\n                <small class=\"patient-match\"\n                  >\u2713 {{ fullName(patient) }} selected \u00B7 Allergies:\n                  {{ patient.allergies || \"none recorded\" }}</small\n                >\n              } @else if (prescriptionPatientSearch) {\n                <small class=\"field-warning\"\n                  >Choose a matching patient from the suggestions.</small\n                >\n              }\n            </label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>02</span>\n            <div>\n              <h3>Medication</h3>\n              <p>Drug, dose, and dispensing quantity</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid four\">\n            <label\n              ><span>Medication <em>*</em></span\n              ><input\n                name=\"medication\"\n                [(ngModel)]=\"prescriptionForm.medication\"\n                placeholder=\"Generic or brand name\"\n                required /></label\n            ><label\n              ><span>Dosage <em>*</em></span\n              ><input\n                name=\"dosage\"\n                [(ngModel)]=\"prescriptionForm.dosage\"\n                placeholder=\"e.g. 500 mg tablet\"\n                required /></label\n            ><label\n              ><span>Quantity <em>*</em></span\n              ><input\n                type=\"number\"\n                min=\"1\"\n                name=\"quantity\"\n                [(ngModel)]=\"prescriptionForm.quantity\"\n                required /></label\n            ><label\n              >Refills<input\n                type=\"number\"\n                min=\"0\"\n                name=\"refills\"\n                [(ngModel)]=\"prescriptionForm.refills\"\n            /></label>\n          </div>\n          @if (!selected()) {\n            <div class=\"additional-medications\">\n              @for (medication of additionalMedications; track $index) {\n                <article class=\"medication-entry\">\n                  <header>\n                    <div>\n                      <span class=\"medication-number\">{{ $index + 2 }}</span>\n                      <div>\n                        <strong>Additional medication</strong\n                        ><small\n                          >Medication {{ $index + 2 }} of\n                          {{ additionalMedications.length + 1 }}</small\n                        >\n                      </div>\n                    </div>\n                    <button\n                      type=\"button\"\n                      (click)=\"removeMedication($index)\"\n                      aria-label=\"Remove medication\"\n                    >\n                      Remove\n                    </button>\n                  </header>\n                  <div class=\"workflow-fields workflow-grid four\">\n                    <label\n                      ><span>Medication <em>*</em></span\n                      ><input\n                        [name]=\"'extraMedication' + $index\"\n                        [(ngModel)]=\"medication.medication\"\n                        placeholder=\"Generic or brand name\"\n                        required /></label\n                    ><label\n                      ><span>Dosage <em>*</em></span\n                      ><input\n                        [name]=\"'extraDosage' + $index\"\n                        [(ngModel)]=\"medication.dosage\"\n                        placeholder=\"e.g. 500 mg tablet\"\n                        required /></label\n                    ><label\n                      ><span>Quantity <em>*</em></span\n                      ><input\n                        type=\"number\"\n                        min=\"1\"\n                        [name]=\"'extraQuantity' + $index\"\n                        [(ngModel)]=\"medication.quantity\"\n                        required /></label\n                    ><label\n                      >Refills<input\n                        type=\"number\"\n                        min=\"0\"\n                        [name]=\"'extraRefills' + $index\"\n                        [(ngModel)]=\"medication.refills\"\n                    /></label>\n                  </div>\n                  <label class=\"medication-instructions\"\n                    ><span>Patient instructions <em>*</em></span\n                    ><textarea\n                      [name]=\"'extraInstructions' + $index\"\n                      [(ngModel)]=\"medication.instructions\"\n                      placeholder=\"Dose, route, frequency, and duration\"\n                      required\n                    ></textarea>\n                  </label>\n                </article>\n              }\n              <button\n                class=\"add-medication-button\"\n                type=\"button\"\n                (click)=\"addMedication()\"\n              >\n                <span>\uFF0B</span>\n                <div>\n                  <strong>Add another medication</strong\n                  ><small\n                    >Include an additional medication in this\n                    prescription</small\n                  >\n                </div>\n              </button>\n            </div>\n          }\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>03</span>\n            <div>\n              <h3>Directions</h3>\n              <p>Clear instructions for the patient and care team</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid two\">\n            <label\n              ><span>Patient instructions <em>*</em></span\n              ><textarea\n                name=\"instructions\"\n                [(ngModel)]=\"prescriptionForm.instructions\"\n                placeholder=\"Dose, route, frequency, and duration\"\n                required\n              ></textarea></label\n            ><label\n              >Clinical notes<textarea\n                name=\"rxNotes\"\n                [(ngModel)]=\"prescriptionForm.notes\"\n                placeholder=\"Optional internal note\"\n              ></textarea>\n            </label>\n            @if (selected()) {\n              <label\n                >Status<select\n                  name=\"rxStatus\"\n                  [(ngModel)]=\"prescriptionForm.status\"\n                >\n                  <option>DRAFT</option>\n                  <option>ISSUED</option>\n                  <option>CANCELLED</option>\n                </select></label\n              >\n            }\n          </div>\n        </section>\n        <footer class=\"workflow-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">!</span\n            ><small>Review allergies and dosage before saving</small>\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button class=\"primary\" [disabled]=\"loading()\">\n              {{\n                loading()\n                  ? \"Saving\u2026\"\n                  : selected()\n                    ? \"Save changes\"\n                    : \"Save prescription\"\n              }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"vaccine\") {\n  <div class=\"modal-backdrop workflow-modal-backdrop\">\n    <section\n      class=\"user-modal workflow-modal vaccine-workflow\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"vaccine-modal-title\"\n    >\n      <header class=\"workflow-modal-header\">\n        <div class=\"workflow-modal-icon vaccine-icon\">\u271A</div>\n        <div>\n          <span class=\"workflow-eyebrow\">IMMUNIZATION RECORD</span>\n          <h2 id=\"vaccine-modal-title\">Add vaccination</h2>\n          <p>Record administration and vaccine traceability details</p>\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"save('vaccine')\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>01</span>\n            <div>\n              <h3>Patient</h3>\n              <p>Find and confirm the vaccination recipient</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields vaccine-patient-row\">\n            <label\n              ><span>Patient name <em>*</em></span\n              ><input\n                name=\"vaxPatientSearch\"\n                type=\"text\"\n                list=\"vaccine-patient-suggestions\"\n                [ngModel]=\"vaccinePatientSearch\"\n                (ngModelChange)=\"resolveVaccinePatient($event)\"\n                placeholder=\"Type a patient name\"\n                autocomplete=\"off\"\n                required\n              /><datalist id=\"vaccine-patient-suggestions\">\n                @for (p of patients(); track p.id) {\n                  <option [value]=\"fullName(p)\">{{ p.patientId }}</option>\n                }\n              </datalist>\n              @if (selectedVaccinePatient(); as patient) {\n                <small class=\"patient-match\"\n                  >\u2713 {{ fullName(patient) }} selected \u00B7\n                  {{ patient.patientId }}</small\n                >\n              } @else if (vaccinePatientSearch) {\n                <small class=\"field-warning\"\n                  >Choose a matching patient from the suggestions.</small\n                >\n              }\n            </label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>02</span>\n            <div>\n              <h3>Vaccine details</h3>\n              <p>Vaccine, dose, and immunization status</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields vaccine-details-grid\">\n            <label\n              ><span>Vaccine <em>*</em></span\n              ><input\n                name=\"vaccineName\"\n                type=\"text\"\n                list=\"vaccine-name-suggestions\"\n                [(ngModel)]=\"vaccineForm.vaccineName\"\n                placeholder=\"Type or select a vaccine\"\n                autocomplete=\"off\"\n                required\n              /><datalist id=\"vaccine-name-suggestions\">\n                @for (vaccine of vaccineSuggestions; track vaccine) {\n                  <option [value]=\"vaccine\"></option>\n                }</datalist\n              ><small>You may enter another vaccine not listed.</small></label\n            ><label\n              ><span>Dose <em>*</em></span\n              ><input\n                name=\"dose\"\n                [(ngModel)]=\"vaccineForm.dose\"\n                placeholder=\"e.g. 0.5 mL\"\n                required /></label\n            ><label\n              ><span>Status <em>*</em></span\n              ><select\n                name=\"vaxStatus\"\n                [(ngModel)]=\"vaccineForm.status\"\n                required\n              >\n                <option>COMPLETED</option>\n                <option>SCHEDULED</option>\n                <option>DEFERRED</option>\n              </select></label\n            >\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>03</span>\n            <div>\n              <h3>Administration</h3>\n              <p>When and by whom the vaccine was given</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid two\">\n            <label\n              ><span>Date administered <em>*</em></span\n              ><app-material-date-picker\n                name=\"vaxDate\"\n                [(ngModel)]=\"vaccineForm.dateAdministered\"\n                placeholder=\"Choose administration date\"\n                [required]=\"true\" /></label\n            ><label\n              ><span>Administered by <em>*</em></span\n              ><input\n                name=\"administeredBy\"\n                [(ngModel)]=\"vaccineForm.administeredBy\"\n                placeholder=\"Clinician name\"\n                required\n            /></label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>04</span>\n            <div>\n              <h3>Traceability</h3>\n              <p>Manufacturer and batch information</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid two\">\n            <label\n              >Manufacturer<input\n                name=\"manufacturer\"\n                [(ngModel)]=\"vaccineForm.manufacturer\"\n                placeholder=\"Vaccine manufacturer\" /></label\n            ><label\n              >Lot number<input\n                name=\"lotNumber\"\n                [(ngModel)]=\"vaccineForm.lotNumber\"\n                placeholder=\"Batch or lot number\"\n            /></label>\n          </div>\n        </section>\n        <footer class=\"workflow-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">\u2713</span\n            ><small\n              >This record becomes part of the patient\u2019s immunization\n              history</small\n            >\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button class=\"primary\" [disabled]=\"loading()\">\n              {{ loading() ? \"Saving\u2026\" : \"Save vaccination\" }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"consultation\") {\n  <div class=\"modal-backdrop workflow-modal-backdrop\">\n    <section\n      class=\"user-modal workflow-modal consultation-workflow\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"consultation-note-title\"\n    >\n      <header class=\"workflow-modal-header\">\n        <div class=\"workflow-modal-icon consultation-icon\">\u270E</div>\n        <div>\n          <span class=\"workflow-eyebrow\">CONSULTATION NOTE</span>\n          <h2 id=\"consultation-note-title\">Assessment and plan</h2>\n          <p>\n            Document the current assessment, treatment plan, orders, and\n            follow-up guidance.\n          </p>\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"saveConsultationNote()\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>01</span>\n            <div>\n              <h3>Assessment and diagnosis</h3>\n              <p>\n                Summarize the clinical impression and working diagnosis for this\n                visit\n              </p>\n            </div>\n          </div>\n          <div class=\"workflow-fields\">\n            <label\n              ><span>Assessment and diagnosis</span\n              ><textarea\n                name=\"consultationAssessmentDiagnosis\"\n                [(ngModel)]=\"consultationNoteForm.assessmentDiagnosis\"\n                placeholder=\"Primary complaints, relevant findings, impression, and diagnosis\"\n              ></textarea>\n            </label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>02</span>\n            <div>\n              <h3>Treatment plan</h3>\n              <p>\n                Describe medications, care instructions, and immediate\n                management\n              </p>\n            </div>\n          </div>\n          <div class=\"workflow-fields\">\n            <label\n              ><span>Treatment plan</span\n              ><textarea\n                name=\"consultationTreatmentPlan\"\n                [(ngModel)]=\"consultationNoteForm.treatmentPlan\"\n                placeholder=\"Medication changes, procedures, counseling, and care instructions\"\n              ></textarea>\n            </label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>03</span>\n            <div>\n              <h3>Diagnostic orders</h3>\n              <p>\n                List requested labs, imaging, or additional diagnostic workups\n              </p>\n            </div>\n          </div>\n          <div class=\"workflow-fields\">\n            <label\n              ><span>Diagnostic orders</span\n              ><textarea\n                name=\"consultationDiagnosticOrders\"\n                [(ngModel)]=\"consultationNoteForm.diagnosticOrders\"\n                placeholder=\"Laboratory requests, imaging, screening, or monitoring orders\"\n              ></textarea>\n            </label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>04</span>\n            <div>\n              <h3>Referrals and follow-up</h3>\n              <p>\n                Capture referrals, specialist coordination, and return\n                instructions\n              </p>\n            </div>\n          </div>\n          <div class=\"workflow-fields\">\n            <label\n              ><span>Referrals and follow-up</span\n              ><textarea\n                name=\"consultationReferralsFollowUp\"\n                [(ngModel)]=\"consultationNoteForm.referralsFollowUp\"\n                placeholder=\"Referral destination, follow-up schedule, and return precautions\"\n              ></textarea>\n            </label>\n          </div>\n        </section>\n        <footer class=\"workflow-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">\u2713</span\n            ><small\n              >Saved to the current appointment record for this\n              consultation</small\n            >\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button class=\"primary\" [disabled]=\"loading()\">\n              {{ loading() ? \"Saving\u2026\" : \"Save consultation note\" }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"end-consultation\") {\n  <div class=\"modal-backdrop workflow-modal-backdrop\">\n    <section\n      class=\"user-modal end-consultation-modal\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"end-consultation-title\"\n      aria-describedby=\"end-consultation-description\"\n    >\n      <div class=\"end-consultation-icon\">\u2713</div>\n      <span class=\"workflow-eyebrow\">COMPLETE CONSULTATION</span>\n      <h2 id=\"end-consultation-title\">Is this consultation finished?</h2>\n      <p id=\"end-consultation-description\">\n        Confirming will mark the appointment for\n        <strong>{{ fullName(consultationPatient()) }}</strong> as completed.\n        This status change will be saved immediately.\n      </p>\n      @if (error()) {\n        <div class=\"alert error\">{{ error() }}</div>\n      }\n      <footer>\n        <button\n          class=\"secondary\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          [disabled]=\"loading()\"\n        >\n          Continue consultation\n        </button>\n        <button\n          class=\"primary\"\n          type=\"button\"\n          (click)=\"confirmEndConsultation()\"\n          [disabled]=\"loading()\"\n        >\n          {{ loading() ? \"Finishing\u2026\" : \"Yes, finish consultation\" }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n@if (modal() === \"user\") {\n  <div class=\"modal-backdrop workflow-modal-backdrop\">\n    <section\n      class=\"user-modal workflow-modal user-workflow\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"user-modal-title\"\n    >\n      <header class=\"workflow-modal-header\">\n        <div class=\"workflow-modal-icon user-icon\">\u2659</div>\n        <div>\n          <span class=\"workflow-eyebrow\">ACCESS MANAGEMENT</span>\n          <h2 id=\"user-modal-title\">\n            {{ selected() ? \"Edit user\" : \"Register new user\" }}\n          </h2>\n          <p>\n            {{\n              selected()\n                ? \"Update account information and permissions\"\n                : \"Create a secure clinic workspace account\"\n            }}\n          </p>\n        </div>\n        <button\n          class=\"modal-close\"\n          type=\"button\"\n          (click)=\"modal.set(null); error.set('')\"\n          aria-label=\"Close\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <form (ngSubmit)=\"save('user')\">\n        @if (error()) {\n          <div class=\"alert error\">{{ error() }}</div>\n        }\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>01</span>\n            <div>\n              <h3>Account identity</h3>\n              <p>Name and sign-in email address</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid two\">\n            <label\n              ><span>First name <em>*</em></span\n              ><input\n                name=\"userFirst\"\n                [(ngModel)]=\"userForm.firstName\"\n                required\n                autocomplete=\"given-name\"\n                placeholder=\"First name\" /></label\n            ><label\n              ><span>Last name <em>*</em></span\n              ><input\n                name=\"userLast\"\n                [(ngModel)]=\"userForm.lastName\"\n                required\n                autocomplete=\"family-name\"\n                placeholder=\"Last name\" /></label\n            ><label class=\"workflow-span-full\"\n              ><span>Email address <em>*</em></span\n              ><input\n                type=\"email\"\n                name=\"userEmail\"\n                [(ngModel)]=\"userForm.email\"\n                required\n                autocomplete=\"email\"\n                placeholder=\"name@clinic.com\"\n            /></label>\n          </div>\n        </section>\n        <section class=\"workflow-section\">\n          <div class=\"workflow-section-title\">\n            <span>02</span>\n            <div>\n              <h3>Access level</h3>\n              <p>Role and account availability</p>\n            </div>\n          </div>\n          <div class=\"workflow-fields workflow-grid two\">\n            <label\n              ><span>Role <em>*</em></span\n              ><select name=\"userRole\" [(ngModel)]=\"userForm.role\" required>\n                <option value=\"ADMIN\">Administrator</option>\n                <option value=\"DOCTOR\">Doctor</option>\n                <option value=\"NURSE\">Nurse</option>\n                <option value=\"FRONT_DESK\">Secretary</option>\n                <option value=\"PATIENT\">Patient</option>\n              </select></label\n            >\n            @if (selected()) {\n              <label\n                >Account status<select\n                  name=\"active\"\n                  [(ngModel)]=\"userForm.isActive\"\n                >\n                  <option [ngValue]=\"true\">Active</option>\n                  <option [ngValue]=\"false\">Inactive</option>\n                </select></label\n              >\n            }\n          </div>\n        </section>\n        @if (!selected()) {\n          <section class=\"workflow-section\">\n            <div class=\"workflow-section-title\">\n              <span>03</span>\n              <div>\n                <h3>Temporary access</h3>\n                <p>Set the initial sign-in credentials</p>\n              </div>\n            </div>\n            <div class=\"workflow-fields workflow-grid two\">\n              <label\n                ><span>Temporary password <em>*</em></span\n                ><input\n                  type=\"password\"\n                  minlength=\"8\"\n                  name=\"tempPassword\"\n                  [(ngModel)]=\"userForm.password\"\n                  required\n                  autocomplete=\"new-password\"\n                /><small>Use at least 8 characters.</small></label\n              ><label\n                ><span>Confirm password <em>*</em></span\n                ><input\n                  type=\"password\"\n                  minlength=\"8\"\n                  name=\"confirmUserPassword\"\n                  [(ngModel)]=\"userForm.confirmPassword\"\n                  required\n                  autocomplete=\"new-password\"\n              /></label>\n              <p class=\"form-note workflow-span-full\">\n                Share the temporary password through a secure channel.\n              </p>\n            </div>\n          </section>\n        }\n        <footer class=\"workflow-modal-actions\">\n          <div>\n            <span class=\"secure-dot\">\u2713</span\n            ><small>Role permissions are enforced by the backend</small>\n          </div>\n          <div>\n            <button\n              type=\"button\"\n              class=\"secondary\"\n              (click)=\"modal.set(null); error.set('')\"\n            >\n              Cancel</button\n            ><button class=\"primary\" [disabled]=\"loading()\">\n              {{\n                loading()\n                  ? \"Saving\u2026\"\n                  : selected()\n                    ? \"Save changes\"\n                    : \"Create user\"\n              }}\n            </button>\n          </div>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n@if (modal() === \"detail\") {\n  @if (detailKind() === \"patient\") {\n    <div class=\"modal-backdrop\">\n      <section\n        class=\"user-modal patient-view-modal\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"patient-view-title\"\n      >\n        <header class=\"patient-view-header\">\n          <div class=\"patient-view-avatar\">{{ initials(selected()) }}</div>\n          <div>\n            <span class=\"patient-modal-eyebrow\">PATIENT PROFILE</span>\n            <h2 id=\"patient-view-title\">{{ fullName(selected()) }}</h2>\n            <p>Clinical and contact information</p>\n          </div>\n          <button\n            class=\"modal-close\"\n            type=\"button\"\n            (click)=\"modal.set(null)\"\n            aria-label=\"Close\"\n          >\n            \u00D7\n          </button>\n        </header>\n        <div class=\"patient-view-body\">\n          <section class=\"patient-view-section\">\n            <div class=\"patient-view-section-title\">\n              <span>01</span>\n              <div>\n                <h3>Personal information</h3>\n                <p>Demographics and care identifiers</p>\n              </div>\n            </div>\n            <dl class=\"patient-view-grid\">\n              <div>\n                <dt>Date of birth</dt>\n                <dd>{{ $any(selected()).dateOfBirth | date: \"longDate\" }}</dd>\n              </div>\n              <div>\n                <dt>Age</dt>\n                <dd>{{ age($any(selected())) }} years</dd>\n              </div>\n              <div>\n                <dt>Sex</dt>\n                <dd>{{ $any(selected()).sex || \"Not recorded\" }}</dd>\n              </div>\n              <div>\n                <dt>Blood type</dt>\n                <dd>{{ $any(selected()).bloodType || \"Not recorded\" }}</dd>\n              </div>\n              <div>\n                <dt>PhilHealth ID</dt>\n                <dd>\n                  {{ $any(selected()).philHealthInsuranceId || \"Not recorded\" }}\n                </dd>\n              </div>\n            </dl>\n          </section>\n          <section class=\"patient-view-section\">\n            <div class=\"patient-view-section-title\">\n              <span>02</span>\n              <div>\n                <h3>Vital signs</h3>\n                <p>Latest measurements saved on the patient record</p>\n              </div>\n            </div>\n            <dl class=\"patient-view-grid\">\n              <div>\n                <dt>Blood pressure</dt>\n                <dd>{{ vitalDisplay($any(selected()).bloodPressure) }}</dd>\n              </div>\n              <div>\n                <dt>Heart rate</dt>\n                <dd>{{ vitalDisplay($any(selected()).heartRate, \" bpm\") }}</dd>\n              </div>\n              <div>\n                <dt>Respiratory rate</dt>\n                <dd>\n                  {{\n                    vitalDisplay(\n                      $any(selected()).respiratoryRate,\n                      \" breaths/min\"\n                    )\n                  }}\n                </dd>\n              </div>\n              <div>\n                <dt>Temperature</dt>\n                <dd>\n                  {{ vitalDisplay($any(selected()).bodyTemperatureC, \" \u00B0C\") }}\n                </dd>\n              </div>\n              <div>\n                <dt>Oxygen saturation</dt>\n                <dd>\n                  {{ vitalDisplay($any(selected()).oxygenSaturation, \" %\") }}\n                </dd>\n              </div>\n              <div>\n                <dt>Weight</dt>\n                <dd>{{ vitalDisplay($any(selected()).weightKg, \" kg\") }}</dd>\n              </div>\n              <div>\n                <dt>Height</dt>\n                <dd>{{ vitalDisplay($any(selected()).heightCm, \" cm\") }}</dd>\n              </div>\n              <div>\n                <dt>BMI</dt>\n                <dd>{{ bmi($any(selected())) }}</dd>\n              </div>\n            </dl>\n          </section>\n          <section class=\"patient-view-section\">\n            <div class=\"patient-view-section-title\">\n              <span>03</span>\n              <div>\n                <h3>Contact details</h3>\n                <p>Patient and emergency contact</p>\n              </div>\n            </div>\n            <div class=\"patient-contact-columns\">\n              <dl class=\"patient-view-grid\">\n                <div>\n                  <dt>Mobile number</dt>\n                  <dd>{{ $any(selected()).mobileNumber || \"Not recorded\" }}</dd>\n                </div>\n                <div>\n                  <dt>Email address</dt>\n                  <dd>{{ $any(selected()).emailAddress || \"Not recorded\" }}</dd>\n                </div>\n                <div class=\"view-span-full\">\n                  <dt>Home address</dt>\n                  <dd>{{ $any(selected()).homeAddress || \"Not recorded\" }}</dd>\n                </div>\n              </dl>\n              <aside class=\"emergency-card\">\n                <span>Emergency contact</span\n                ><strong>{{\n                  $any(selected()).emergencyContactName || \"Not recorded\"\n                }}</strong>\n                <p>\n                  @if ($any(selected()).emergencyContactRelationship) {\n                    <span\n                      >{{ $any(selected()).emergencyContactRelationship }} \u00B7\n                    </span>\n                  }\n                  {{\n                    $any(selected()).emergencyContactNumber ||\n                      \"No contact number\"\n                  }}\n                </p>\n              </aside>\n            </div>\n          </section>\n          <section class=\"patient-view-section clinical-view-section\">\n            <div class=\"patient-view-section-title\">\n              <span>04</span>\n              <div>\n                <h3>Clinical overview</h3>\n                <p>Information requiring care-team attention</p>\n              </div>\n            </div>\n            <div class=\"patient-clinical-cards\">\n              <article class=\"allergy-card\">\n                <span>!</span>\n                <div>\n                  <small>KNOWN ALLERGIES</small\n                  ><strong>{{\n                    $any(selected()).allergies || \"None recorded\"\n                  }}</strong>\n                </div>\n              </article>\n              <article class=\"condition-card\">\n                <span>+</span>\n                <div>\n                  <small>MEDICAL CONDITIONS</small\n                  ><strong>{{\n                    $any(selected()).conditions || \"None recorded\"\n                  }}</strong>\n                </div>\n              </article>\n            </div>\n          </section>\n        </div>\n        <footer class=\"patient-view-actions\">\n          <small>Last available patient record</small>\n          <div>\n            <button class=\"secondary\" type=\"button\" (click)=\"modal.set(null)\">\n              Close</button\n            ><button\n              class=\"primary\"\n              type=\"button\"\n              (click)=\"edit($any(selected()), 'patient')\"\n            >\n              Edit patient\n            </button>\n          </div>\n        </footer>\n      </section>\n    </div>\n  } @else if (detailKind() === \"appointment\") {\n    <div class=\"modal-backdrop workflow-modal-backdrop\">\n      <section\n        class=\"user-modal record-detail-modal appointment-detail-modal\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"appointment-detail-title\"\n      >\n        <header class=\"workflow-modal-header\">\n          <div class=\"workflow-modal-icon detail-icon\">\u25A3</div>\n          <div>\n            <span class=\"workflow-eyebrow\">APPOINTMENT OVERVIEW</span>\n            <h2 id=\"appointment-detail-title\">Appointment details</h2>\n            <p>\n              Patient profile, visit details, and the latest recorded vitals\n            </p>\n          </div>\n          <button\n            class=\"modal-close\"\n            type=\"button\"\n            (click)=\"modal.set(null)\"\n            aria-label=\"Close\"\n          >\n            \u00D7\n          </button>\n        </header>\n        <div class=\"record-detail-body appointment-detail-body\">\n          <section class=\"appointment-detail-summary\">\n            <div class=\"appointment-summary-patient\">\n              <span class=\"avatar mint large\">{{\n                $any(selected()).patient\n                  ? initials($any(selected()).patient)\n                  : \"PT\"\n              }}</span>\n              <div>\n                <small>PATIENT</small\n                ><strong>{{\n                  $any(selected()).patient\n                    ? fullName($any(selected()).patient)\n                    : \"Patient record unavailable\"\n                }}</strong>\n                <p>\n                  @if ($any(selected()).patient) {\n                    {{ age($any(selected()).patient) }} years \u00B7\n                    {{ $any(selected()).patient.sex || \"Sex not recorded\" }}\n                  } @else {\n                    Patient information unavailable\n                  }\n                </p>\n              </div>\n            </div>\n            <div>\n              <small>DOCTOR</small\n              ><strong>Dr. {{ fullName($any(selected()).doctor) }}</strong>\n            </div>\n            <div>\n              <small>SCHEDULE</small\n              ><strong>{{\n                $any(selected()).scheduledAt | date: \"medium\"\n              }}</strong>\n            </div>\n            <div>\n              <small>STATUS</small\n              ><strong>{{ $any(selected()).status }}</strong>\n            </div>\n          </section>\n          @if ($any(selected()).patient; as patient) {\n            <section class=\"appointment-detail-section\">\n              <header>\n                <div>\n                  <span class=\"history-kicker\">PATIENT DETAILS</span>\n                  <h3>Patient information</h3>\n                  <p>Core demographic and contact details for this visit</p>\n                </div>\n              </header>\n              <dl class=\"record-detail-grid appointment-detail-grid\">\n                <div>\n                  <dt>Age</dt>\n                  <dd>{{ age(patient) }} years</dd>\n                </div>\n                <div>\n                  <dt>Blood type</dt>\n                  <dd>{{ patient.bloodType || \"Not recorded\" }}</dd>\n                </div>\n                <div>\n                  <dt>Mobile number</dt>\n                  <dd>{{ patient.mobileNumber || \"Not recorded\" }}</dd>\n                </div>\n                <div class=\"record-wide\">\n                  <dt>Home address</dt>\n                  <dd>{{ patient.homeAddress || \"Not recorded\" }}</dd>\n                </div>\n                <div>\n                  <dt>Known allergies</dt>\n                  <dd>{{ patient.allergies || \"None recorded\" }}</dd>\n                </div>\n                <div>\n                  <dt>Medical conditions</dt>\n                  <dd>{{ patient.conditions || \"None recorded\" }}</dd>\n                </div>\n              </dl>\n            </section>\n            <section class=\"appointment-detail-section\">\n              <header>\n                <div>\n                  <span class=\"history-kicker\">LATEST SCREENING</span>\n                  <h3>Patient vitals</h3>\n                  <p>\n                    Most recently recorded measurements saved with the patient\n                    record\n                  </p>\n                </div>\n              </header>\n              <dl class=\"record-detail-grid appointment-vitals-grid\">\n                <div>\n                  <dt>Blood pressure</dt>\n                  <dd>{{ vitalDisplay(patient.bloodPressure) }}</dd>\n                </div>\n                <div>\n                  <dt>Heart rate</dt>\n                  <dd>{{ vitalDisplay(patient.heartRate, \" bpm\") }}</dd>\n                </div>\n                <div>\n                  <dt>Respiratory rate</dt>\n                  <dd>\n                    {{ vitalDisplay(patient.respiratoryRate, \" breaths/min\") }}\n                  </dd>\n                </div>\n                <div>\n                  <dt>Temperature</dt>\n                  <dd>{{ vitalDisplay(patient.bodyTemperatureC, \" \u00B0C\") }}</dd>\n                </div>\n                <div>\n                  <dt>Oxygen saturation</dt>\n                  <dd>{{ vitalDisplay(patient.oxygenSaturation, \" %\") }}</dd>\n                </div>\n                <div>\n                  <dt>Weight</dt>\n                  <dd>{{ vitalDisplay(patient.weightKg, \" kg\") }}</dd>\n                </div>\n                <div>\n                  <dt>Height</dt>\n                  <dd>{{ vitalDisplay(patient.heightCm, \" cm\") }}</dd>\n                </div>\n                <div>\n                  <dt>BMI</dt>\n                  <dd>{{ bmi(patient) }}</dd>\n                </div>\n              </dl>\n            </section>\n          }\n          <section class=\"appointment-detail-section\">\n            <header>\n              <div>\n                <span class=\"history-kicker\">VISIT DETAILS</span>\n                <h3>Appointment information</h3>\n                <p>Schedule and purpose captured for this consultation</p>\n              </div>\n            </header>\n            <dl class=\"record-detail-grid appointment-detail-grid\">\n              <div>\n                <dt>Visit type</dt>\n                <dd>{{ $any(selected()).visitType }}</dd>\n              </div>\n              <div>\n                <dt>Date</dt>\n                <dd>{{ $any(selected()).date | date: \"longDate\" }}</dd>\n              </div>\n              <div>\n                <dt>Time</dt>\n                <dd>{{ $any(selected()).time }}</dd>\n              </div>\n              <div>\n                <dt>Status</dt>\n                <dd>{{ $any(selected()).status }}</dd>\n              </div>\n              <div class=\"record-wide\">\n                <dt>Purpose</dt>\n                <dd>{{ $any(selected()).purpose || \"Not recorded\" }}</dd>\n              </div>\n              @if ($any(selected()).notes) {\n                <div class=\"record-wide\">\n                  <dt>Internal notes</dt>\n                  <dd>{{ $any(selected()).notes }}</dd>\n                </div>\n              }\n            </dl>\n          </section>\n        </div>\n        <footer class=\"record-detail-actions\">\n          <small>Read-only appointment record</small>\n          <div>\n            <button class=\"secondary\" type=\"button\" (click)=\"modal.set(null)\">\n              Close</button\n            ><button\n              class=\"primary\"\n              type=\"button\"\n              (click)=\"edit($any(selected()), 'appointment')\"\n            >\n              Edit appointment\n            </button>\n          </div>\n        </footer>\n      </section>\n    </div>\n  } @else {\n    <div class=\"modal-backdrop workflow-modal-backdrop\">\n      <section\n        class=\"user-modal record-detail-modal\"\n        [class.prescription-detail-modal]=\"detailKind() === 'prescription'\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"record-detail-title\"\n      >\n        <header class=\"workflow-modal-header\">\n          <div class=\"workflow-modal-icon detail-icon\">{{ detailIcon() }}</div>\n          <div>\n            <span class=\"workflow-eyebrow\">CLINIC RECORD</span>\n            <h2 id=\"record-detail-title\">{{ detailTitle() }}</h2>\n            <p>Review the complete saved record</p>\n          </div>\n          <button\n            class=\"modal-close\"\n            type=\"button\"\n            (click)=\"modal.set(null)\"\n            aria-label=\"Close\"\n          >\n            \u00D7\n          </button>\n        </header>\n        <div class=\"record-detail-body\">\n          @if (detailKind() === \"prescription\") {\n            <section class=\"prescription-view-summary\">\n              <div>\n                <span class=\"avatar violet\">{{\n                  initials($any(selected()).patient)\n                }}</span>\n                <div>\n                  <small>PATIENT</small\n                  ><strong>{{ fullName($any(selected()).patient) }}</strong>\n                </div>\n              </div>\n              <div>\n                <small>PRESCRIBED BY</small\n                ><strong>Dr. {{ fullName($any(selected()).doctor) }}</strong>\n              </div>\n              <div>\n                <small>ISSUED DATE</small\n                ><strong>{{\n                  $any(selected()).issuedAt | date: \"longDate\"\n                }}</strong>\n              </div>\n            </section>\n          }\n          <dl class=\"record-detail-grid\">\n            @for (entry of objectEntries(selected()); track entry[0]) {\n              <div\n                [class.record-wide]=\"\n                  entry[0] === 'instructions' ||\n                  entry[0] === 'notes' ||\n                  entry[0] === 'purpose'\n                \"\n              >\n                <dt>{{ fieldLabel(entry[0]) }}</dt>\n                <dd>{{ entry[1] }}</dd>\n              </div>\n            }\n          </dl>\n          @if (selected() && $any(selected()).allergies) {\n            <aside class=\"record-safety-alert\">\n              <span>!</span>\n              <div>\n                <small>RECORDED ALLERGIES</small\n                ><strong>{{ $any(selected()).allergies }}</strong>\n              </div>\n            </aside>\n          }\n        </div>\n        <footer\n          class=\"record-detail-actions\"\n          [class.prescription-detail-footer]=\"detailKind() === 'prescription'\"\n        >\n          <small>Read-only clinic record</small>\n          <div>\n            <button class=\"secondary\" type=\"button\" (click)=\"modal.set(null)\">\n              Close\n            </button>\n            @if ($any(selected())?.medication) {\n              <button class=\"primary\" type=\"button\" (click)=\"print()\">\n                Print prescription\n              </button>\n            }\n          </div>\n        </footer>\n      </section>\n    </div>\n  }\n}\n", styles: [":host { display: block; min-height: 100vh; font-family: 'Petrov Sans', Arial, sans-serif; }\n:host * { font-family: 'Petrov Sans', Arial, sans-serif !important; }\n.app-shell { min-height: 100vh; display: grid; grid-template-columns: 236px 1fr; }\n.sidebar { background: #fff; border-right: 1px solid #e3ece9; padding: 28px 16px 18px; display: flex; flex-direction: column; position: fixed; inset: 0 auto 0 0; width: 236px; z-index: 20; }\n.brand { display: flex; align-items: center; gap: 10px; font: 800 20px 'Manrope'; color: #123d38; padding: 0 10px; }\n.brand-mark { background: #0d8578; color: white; width: 31px; height: 31px; border-radius: 9px; display: inline-grid; place-items: center; font-size: 22px; box-shadow: 0 5px 12px #0d85782c; }\n.brand img { display: block; width: 100%; height: auto; object-fit: contain; }\n.brand-logo-sidebar { width: 198px; padding: 0; }\n.brand-logo-login { width: 230px; margin-inline: auto; }\n.nav-label { color: #9aa9a6; font-size: 10px; letter-spacing: .14em; font-weight: 700; margin: 40px 13px 10px; }\n.nav-label.management-label { margin-top: 28px; }\n.nav-item { border: 0; background: transparent; color: #5b6d69; width: 100%; display: flex; align-items: center; gap: 12px; padding: 11px 13px; border-radius: 9px; margin: 3px 0; font-weight: 600; text-align: left; }\n.nav-item:hover { background: #f2f8f6; color: #116b61; }\n.nav-item.active { background: #e9f6f2; color: #0b796c; }\n.nav-icon { width: 20px; text-align: center; font-weight: 700; }\n.sidebar-help { margin-top: auto; background: #f4f9f7; border: 1px solid #e7efed; padding: 13px; border-radius: 10px; display: flex; gap: 10px; align-items: center; }\n.help-icon { border: 1px solid #bdd5d0; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: #0d8578; }\n.sidebar-help div, .user-card div { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.sidebar-help strong, .user-card strong { font-size: 12px; }\nsmall { color: #83928f; }\n.sidebar-help small, .user-card small { font-size: 10px; }\n.user-card { display: flex; gap: 10px; align-items: center; border-top: 1px solid #e7eeec; padding: 17px 5px 0; margin-top: 16px; }\n.user-card div { flex: 1; }\nmain { grid-column: 2; min-width: 0; }\n.topbar { height: 76px; background: rgba(255,255,255,.94); border-bottom: 1px solid #e3ece9; display: flex; align-items: center; padding: 0 34px; position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); }\n.search { display: flex; align-items: center; gap: 8px; color: #81908d; width: min(400px, 45vw); }\n.search input { width: 100%; border: 0; outline: 0; color: #304b47; background: transparent; }\n.header-actions { margin-left: auto; display: flex; align-items: center; gap: 18px; }\n.role-switcher { font-size: 11px; color: #7b8a87; display: flex; align-items: center; gap: 8px; }\n.role-switcher select { border: 1px solid #d6e3df; background: #fff; color: #36514d; border-radius: 8px; padding: 7px 28px 7px 10px; font-size: 12px; font-weight: 700; }\n.icon-button { width: 36px; height: 36px; border: 1px solid #e0e9e7; background: white; border-radius: 9px; position: relative; color: #526763; }\n.notification-dot { position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #ef7666; right: 7px; top: 7px; border: 1px solid white; }\n.content { width: 100%; padding: 32px clamp(24px,3vw,44px) 50px; margin: 0; }\n.page-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 27px; }\n.eyebrow { color: #0b897a !important; font-size: 10px !important; font-weight: 800; letter-spacing: .12em; margin: 0 0 7px !important; }\nh1, h2, h3 { font-family: 'Manrope'; margin: 0; }\nh1 { font-size: 28px; letter-spacing: -.035em; color: #173a35; }\n.page-heading p { margin: 5px 0 0; color: #80908c; font-size: 13px; }\nbutton.primary { background: #0d8074; color: white; border: 0; border-radius: 8px; padding: 11px 16px; font-weight: 700; font-size: 12px; box-shadow: 0 4px 10px #0d807422; }\nbutton.primary:hover { background: #096e64; }\nbutton.secondary { background: white; color: #31524d; border: 1px solid #d8e5e2; border-radius: 8px; padding: 10px 14px; font-weight: 700; font-size: 11px; }\n.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 17px; }\n.stats-grid.with-total { grid-template-columns: repeat(5, minmax(0,1fr)); }\n.panel, .stat { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; box-shadow: 0 2px 4px #294d4610; }\n.stat { display: flex; align-items: flex-start; gap: 13px; padding: 18px; }\n.stat-icon { width: 37px; height: 37px; border-radius: 9px; display: grid; place-items: center; flex: 0 0 auto; font-weight: 800; font-size: 13px; }\n.stat-icon.teal { background: #e7f6f2; color: #0d8879; }.stat-icon.blue { background: #e9f1fb; color: #4879ae; }.stat-icon.mint { background: #e7f5ee; color: #218161; }.stat-icon.orange { background: #fff1e8; color: #dc7b45; }.stat-icon.violet { background: #f1ecfa; color: #8065b5; }\n.stat div { display: flex; flex-direction: column; }\n.stat small { font-size: 11px; margin-bottom: 4px; }\n.stat strong { font: 800 25px 'Manrope'; color: #27443f; line-height: 1.15; }\n.stat strong i { font: 600 11px 'DM Sans'; }\n.stat em { font-style: normal; font-size: 9px; color: #9aa6a4; margin-top: 4px; }.stat em b { color: #1b9b74; }\n.dashboard-grid { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(330px, .8fr); gap: 17px; }\n.panel-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 19px 20px; border-bottom: 1px solid #e8efed; }\n.panel-header h2 { font-size: 15px; color: #26443f; }.panel-header p { font-size: 10px; color: #8c9997; margin: 4px 0 0; }\n.text-button { border: 0; background: transparent; color: #0a8174; font-weight: 700; font-size: 10px; }\n.appointment { min-height: 72px; display: grid; grid-template-columns: 62px 38px minmax(150px,1fr) auto 20px; align-items: center; gap: 12px; padding: 0 20px; border-bottom: 1px solid #edf2f1; }\n.appointment:last-child { border-bottom: 0; }.appointment time { font-size: 10px; color: #6e7d7a; font-weight: 600; }\n.avatar { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 10px; font-weight: 800; flex: 0 0 auto; }\n.avatar.mint { background: #dff2ec; color: #267565; }.avatar.blue { background: #e3edf8; color: #4a7199; }.avatar.coral { background: #fbe8e3; color: #b46758; }.avatar.violet { background: #eee7f7; color: #795fa2; }.avatar.doctor { background: #d7f0e9; color: #137768; }\n.patient-info { display: flex; flex-direction: column; gap: 3px; }.patient-info strong { font-size: 11px; color: #304944; }.patient-info span { font-size: 9px; color: #8d9a97; }\n.status { font-size: 9px; border-radius: 20px; padding: 5px 8px; background: #edf7f2; color: #3b8069; display: flex; align-items: center; gap: 5px; white-space: nowrap; }\n.status i { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }.status.waiting { background: #fff5e6; color: #b67b29; }.status.in-consultation { background: #e9f1fb; color: #4d78a5; }\n.more { border: 0; background: transparent; color: #91a09d; }.empty { padding: 40px; text-align: center; color: #889895; }\n.next-patient .panel-header { border-bottom: 0; padding-bottom: 10px; }.patient-profile { display: flex; gap: 12px; align-items: center; padding: 8px 20px 16px; }.avatar.large { width: 44px; height: 44px; font-size: 12px; }.patient-profile h3 { font-size: 13px; }.patient-profile p { color: #899693; font-size: 9px; margin: 4px 0 0; }\n.vitals { margin: 0 20px; background: #f7faf9; border-radius: 9px; display: grid; grid-template-columns: repeat(3,1fr); padding: 12px 8px; }.vitals div { display: flex; flex-direction: column; align-items: center; border-right: 1px solid #e4ecea; }.vitals div:last-child { border: 0; }.vitals span,.vitals small { font-size: 8px; color: #8d9a97; }.vitals strong { font: 700 14px 'Manrope'; margin: 3px; }\n.clinical-alert { margin: 13px 20px; padding: 10px; border: 1px solid #f2d7d0; background: #fff7f5; border-radius: 8px; display: flex; gap: 9px; align-items: center; }.clinical-alert>span { background: #f5d3cb; color: #b75f50; width: 23px; height: 23px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }.clinical-alert strong { font-size: 9px; color: #8d4e43; }.clinical-alert p { font-size: 8px; color: #af7f76; margin: 2px 0 0; }\n.button-row { display: flex; gap: 8px; padding: 3px 20px 20px; }.button-row button { flex: 1; }\n.recent-panel { margin-top: 17px; }.patient-table article { display: grid; grid-template-columns: minmax(200px,1.2fr) 1fr 120px auto; gap: 20px; align-items: center; padding: 12px 20px; border-bottom: 1px solid #edf2f1; font-size: 10px; color: #566b67; }.patient-table article:last-child { border: 0; }.identity { display: flex; gap: 10px; align-items: center; }.identity>div { display: flex; flex-direction: column; }.identity strong { color: #314b46; }.identity small { font-size: 8px; }.last-visit { color: #8b9996; }.last-visit b { color: #4b625e; }.patient-table button { border: 0; background: transparent; color: #0b8174; font-weight: 700; font-size: 9px; }\n.subpage { margin-top: -14px; margin-bottom: 20px; }.placeholder-panel { min-height: 450px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }.placeholder-icon { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 18px; background: #e5f5f0; color: #0d8074; font: 800 20px 'Manrope'; margin-bottom: 18px; }.placeholder-panel h2 { font-size: 20px; }.placeholder-panel p { color: #7e8e8a; max-width: 490px; line-height: 1.6; font-size: 13px; }.placeholder-panel button { margin-top: 10px; }\n.user-summary { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 17px; }.user-summary article { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; padding: 17px 19px; display: flex; justify-content: space-between; align-items: center; }.user-summary small { font-size: 11px; }.user-summary strong { color: #26443f; font: 800 21px 'Manrope'; }\n.users-toolbar { min-height: 70px; padding: 14px 20px; display: flex; justify-content: space-between; gap: 14px; align-items: center; border-bottom: 1px solid #e8efed; }.user-search { display: flex; align-items: center; gap: 8px; background: #f7faf9; border: 1px solid #e0e9e7; border-radius: 8px; padding: 9px 12px; width: min(390px,55%); color: #80908c; }.user-search input { border: 0; outline: 0; background: transparent; width: 100%; font-size: 11px; }.users-toolbar label { color: #7b8a87; font-size: 10px; display: flex; align-items: center; gap: 8px; }.users-toolbar select,.user-modal select,.user-modal input { border: 1px solid #d8e5e2; background: #fff; border-radius: 8px; padding: 9px 10px; color: #36514d; font-size: 11px; }\n.users-table-head,.users-table article { display: grid; grid-template-columns: minmax(250px,1.5fr) minmax(120px,.7fr) minmax(100px,.6fr) 130px; gap: 18px; align-items: center; padding: 13px 20px; }.users-table-head { color: #93a09e; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; background: #fbfcfc; }.users-table article { min-height: 66px; border-top: 1px solid #edf2f1; }.users-table .identity strong { font-size: 11px; }.users-table .identity small { font-size: 9px; margin-top: 3px; }.role-badge { display: inline-block; background: #eef6f4; color: #34675f; padding: 5px 8px; border-radius: 6px; font-size: 9px; }.user-status { display: inline-flex; align-items: center; gap: 6px; color: #27805f; font-size: 9px; }.user-status i { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }.user-status.inactive { color: #9a7771; }.user-actions { display: flex; gap: 6px; }.user-actions button { border: 1px solid #d8e5e2; background: #fff; color: #31524d; padding: 7px 9px; border-radius: 7px; font-size: 9px; font-weight: 700; }.user-actions button.danger { color: #b35d52; border-color: #efd8d4; }\n.user-modal { display:block; width: min(520px,100%); background: #fff; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; inset:auto; padding:0; }.user-modal-header { padding: 24px 26px 18px; border-bottom: 1px solid #e8efed; }.user-modal-header h2 { color: #26443f; font-size: 19px; }.user-modal-header p{margin:6px 30px 0 0;color:#80908c;font-size:10px}.user-modal form { padding: 22px 26px 25px; }.user-modal form>label,.user-modal .form-grid label { display: flex; flex-direction: column; gap: 7px; color: #516763; font-size: 10px; font-weight: 700; margin-bottom: 16px; }.user-modal label small{color:#80908c;font-size:9px;font-weight:400}.user-modal input,.user-modal select { padding: 11px; font-weight: 400; }.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }.form-note { background: #f4f9f7; border-radius: 8px; color: #71837f; font-size: 10px; line-height: 1.5; padding: 11px 12px; margin: 0 0 20px; }.user-modal .modal-actions { padding: 0; }\n.modal-backdrop { position: fixed; inset: 0; z-index: 50; background: #153d3899; display: grid; place-items: center; padding: 20px; backdrop-filter: blur(3px); }.prescription-modal { width: min(720px, 100%); max-height: 94vh; overflow: auto; background: #f4f7f6; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; }.modal-close { position: absolute; right: 16px; top: 12px; border: 0; background: transparent; font-size: 25px; color: #667b77; z-index: 2; }.rx-paper { background: white; margin: 42px 36px 18px; padding: 34px 42px; min-height: 680px; box-shadow: 0 2px 10px #23453f15; }.rx-paper header { display: flex; justify-content: space-between; border-bottom: 2px solid #0d8074; padding-bottom: 20px; }.rx-paper header .brand { padding: 0; }.rx-paper header>div:last-child { text-align: right; display: flex; flex-direction: column; font-size: 12px; }.rx-paper header small { font-size: 9px; }.rx-patient { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #dfe8e6; }.rx-patient span { display: flex; flex-direction: column; gap: 5px; }.rx-patient small { font-size: 8px; letter-spacing: .1em; }.rx-patient strong { font-size: 12px; }.rx-symbol { font: 700 48px Georgia; margin: 25px 0 10px; }.medicine { margin-left: 45px; }.medicine h3 { font-size: 17px; }.medicine p { font-size: 13px; line-height: 1.6; }.medicine small { font-size: 10px; }.warning { color: #963f35; background: #fff1ee; border: 1px solid #f0c8c0; border-radius: 7px; padding: 12px; font-size: 10px; line-height: 1.5; margin-top: 35px; }.rx-paper footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 90px; }.rx-paper footer>div:first-child { display: flex; flex-direction: column; border-top: 1px solid #80908c; padding-top: 4px; min-width: 170px; }.signature { font: italic 22px Georgia; margin-top: -31px; margin-bottom: 8px; }.clinic-address { text-align: right; color: #71827e; font-size: 9px; line-height: 1.6; }.modal-actions { display: flex; justify-content: flex-end; gap: 9px; padding: 0 36px 22px; }\n.menu-button,.close-nav { display: none; }\n@media (max-width: 1100px) { .stats-grid { grid-template-columns: repeat(2,1fr); }.dashboard-grid { grid-template-columns: 1fr; }.right-column { display: grid; grid-template-columns: 1fr; }.recent-panel { margin-top: 17px; }.user-summary { grid-template-columns: repeat(2,1fr); } }\n@media (max-width: 760px) { .app-shell { display: block; }.sidebar { transform: translateX(-100%); transition: transform .2s ease; box-shadow: 8px 0 30px #173d3730; }.sidebar.mobile-open { transform: translateX(0); }.close-nav { display: block; position: absolute; top: 20px; right: 14px; border: 0; background: transparent; font-size: 24px; }.menu-button { display: block; border: 0; background: transparent; margin-right: 12px; font-size: 20px; color: #35534e; }.topbar { padding: 0 16px; }.role-switcher { font-size: 0; }.content { padding: 24px 16px 40px; }.page-heading { align-items: flex-start; flex-direction: column; }.stats-grid,.user-summary { grid-template-columns: 1fr; }.appointment { grid-template-columns: 52px 34px 1fr 20px; padding: 0 12px; }.appointment .status { display: none; }.recent-panel { display: none; }.users-toolbar { align-items: stretch; flex-direction: column; }.user-search { width: auto; }.users-table-head { display: none; }.users-table article { grid-template-columns: 1fr auto; gap: 10px; }.users-table article>span { padding-left: 44px; }.user-actions { justify-content: flex-end; }.form-grid { grid-template-columns: 1fr; gap: 0; }.rx-paper { margin: 35px 10px 12px; padding: 25px 20px; }.rx-paper header { flex-direction: column; gap: 16px; }.rx-paper header>div:last-child { text-align: left; }.rx-patient { grid-template-columns: 1fr 1fr; }.rx-paper footer { flex-direction: column; align-items: flex-start; gap: 40px; }.clinic-address { text-align: left; } }\n\n.auth-page { min-height:100vh; display:grid; place-items:center; padding:24px; background:radial-gradient(circle at top,#e5f5f0,#f5f8f7 50%); }\n.auth-card { width:min(440px,100%); background:#fff; border:1px solid #dfe9e6; border-radius:18px; padding:38px; box-shadow:0 20px 55px #173d3718; }\n.auth-card .brand { padding:0; margin-bottom:38px; }.auth-card h1 { margin-bottom:7px; }.auth-card>p:not(.eyebrow) { color:#7e8e8a; font-size:13px; margin:0 0 23px; }\n.auth-card form>label,.auth-card .form-grid label,.form-modal form>label,.form-modal .form-grid label { display:flex; flex-direction:column; gap:7px; color:#516763; font-size:10px; font-weight:700; margin-bottom:16px; }\n.auth-card input,.auth-card select,.form-modal input,.form-modal select,.form-modal textarea,.data-row select { border:1px solid #d8e5e2; border-radius:8px; padding:11px; background:#fff; color:#36514d; font:400 11px 'DM Sans'; }\n.form-modal textarea { min-height:70px; resize:vertical; }.wide { width:100%; }.auth-toggle { width:100%; margin:18px 0; }.auth-card>small { display:block; text-align:center; font-size:9px; }\n.alert { padding:11px 14px; border-radius:8px; margin:0 0 18px; font-size:11px; display:flex; justify-content:space-between; gap:12px; }.alert button { border:0;background:transparent;color:inherit}.alert.error{background:#fff0ed;color:#a94f43;border:1px solid #f2d2cc}.alert.success{background:#eaf7f1;color:#24745e;border:1px solid #cfe9df}\n.patient-profile-panel{margin-bottom:20px}.patient-profile-panel dl{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:0;padding:0 20px 20px}.patient-profile-panel dl div{padding:12px;border-bottom:1px solid #edf2f1}.patient-profile-panel dt{color:#80908c;font-size:9px;text-transform:uppercase}.patient-profile-panel dd{margin:4px 0 0;color:#304944;font-size:11px}.patient-portal-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.portal-list article{display:flex;justify-content:space-between;gap:16px;padding:14px 20px;border-top:1px solid #edf2f1}.portal-list article>div{display:flex;flex-direction:column;gap:5px}.portal-list article>div:last-child{text-align:right;align-items:flex-end}.portal-list strong{font-size:11px;color:#304944}.portal-list small{font-size:9px;color:#80908c}\n.data-panel { overflow:hidden; }.data-head,.data-row { display:grid; gap:18px; align-items:center; padding:13px 20px; }.data-head { background:#fbfcfc; color:#93a09e; font-size:9px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }.data-row { min-height:70px; border-top:1px solid #edf2f1; color:#566b67; font-size:10px; }.appointments-row{grid-template-columns:minmax(300px,1.55fr) minmax(180px,.75fr) minmax(160px,.45fr) minmax(330px,.95fr)}.users-row { grid-template-columns:minmax(240px,1.4fr) minmax(140px,.8fr) 130px 190px }.patients-row { grid-template-columns:minmax(220px,1.25fr) minmax(120px,.55fr) minmax(210px,1fr) minmax(150px,.65fr) minmax(140px,.6fr) 168px }.rx-row { grid-template-columns:minmax(190px,1fr) minmax(170px,.9fr) minmax(220px,1.2fr) minmax(150px,.75fr) 115px 90px 118px }.vaccine-row { grid-template-columns:minmax(200px,1.1fr) minmax(150px,.8fr) 90px 125px minmax(150px,.75fr) 105px 68px }.data-row select{padding:7px;font-size:9px}.appointments-row select{width:100%;min-width:0}.block{display:block;margin-top:5px}.row-actions{display:flex;flex-wrap:wrap;gap:7px;justify-content:flex-end;align-items:center}.row-actions button{min-width:48px;border:1px solid #d8e5e2;background:#fff;color:#31524d;padding:8px 9px;border-radius:7px;font-size:9px;font-weight:700;text-align:center}.row-actions button:hover{border-color:#91bbb4;background:#f2f8f6;color:#0a7569}.row-actions .danger{color:#b35d52;border-color:#efd8d4}.appointments-row .row-actions{justify-content:flex-start;align-content:center}.appointments-row .row-actions .start-consultation{min-width:124px;padding:8px 12px;box-shadow:none}.compact article{grid-template-columns:1fr 1fr auto}.compact{padding-bottom:5px}.data-head.patients-row>span:last-child{text-align:right}.data-row.patients-row>span:nth-child(2),.data-row.patients-row>span:nth-child(3),.data-row.patients-row>span:nth-child(4){min-width:0;overflow-wrap:anywhere}.data-row.patients-row .row-actions{width:168px}.patient-age{color:#395650;font-weight:700}.patient-last-checkup{color:#526965;font-size:10px}.data-head.vaccine-row>span:last-child{text-align:right}.data-row.vaccine-row time{color:#526965;font-size:10px}.vaccine-name{display:flex;min-width:0;flex-direction:column;gap:4px}.vaccine-name strong{color:#314b46;font-size:11px}.vaccine-name small{font-size:9px}.vaccine-dose{display:inline-flex;align-items:center;width:max-content;padding:5px 8px;border-radius:7px;background:#f1f5f4;color:#47635e;font-size:9px;font-weight:700}.data-head.rx-row>span:last-child{text-align:right}.data-row.rx-row time{color:#526965;font-size:10px}.rx-medication{display:flex;min-width:0;flex-direction:column;gap:4px}.rx-medication strong{color:#314b46;font-size:11px}.rx-medication small{font-size:9px}.rx-directions{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.45}\n.form-modal { max-height:94vh; overflow:auto; }.wide-modal{width:min(760px,100%)}.form-modal form{padding:22px 26px 25px}.form-grid.three{grid-template-columns:repeat(3,1fr)}.form-modal .modal-actions{padding:0}.detail-modal{width:min(620px,100%);max-height:90vh;overflow:auto}.detail-modal dl{padding:15px 26px}.detail-modal dl div{display:grid;grid-template-columns:150px 1fr;padding:9px 0;border-bottom:1px solid #edf2f1}.detail-modal dt{text-transform:capitalize;color:#80908c;font-size:10px}.detail-modal dd{margin:0;color:#304944;font-size:11px;overflow-wrap:anywhere}.detail-modal .clinical-alert{margin:0 26px 20px}\n.patient-modal-backdrop{padding:24px}.patient-modal{width:min(880px,100%);max-height:min(92vh,900px);overflow:auto;border:1px solid #dce8e5;border-radius:20px}.patient-modal-header{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:flex-start;gap:14px;padding:22px 28px;background:#fff;border-bottom:1px solid #e5eeec;text-align:left}.patient-modal-icon{display:grid;place-items:center;flex:0 0 44px;height:44px;border-radius:13px;background:linear-gradient(145deg,#dff4ee,#edf8f5);color:#087c6e;font-size:20px}.patient-modal-eyebrow{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.patient-modal-header h2{margin:0;color:#213f3a;font-size:20px}.patient-modal-header p{margin:4px 0 0;color:#82918e;font-size:10px}.patient-modal>form{padding:0}.patient-modal .alert{margin:18px 28px 0}.patient-form-section{display:grid;grid-template-columns:180px 1fr;gap:28px;padding:25px 28px;border-bottom:1px solid #edf2f1}.patient-section-heading{display:flex;gap:11px;align-items:flex-start}.patient-section-heading>span{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#eef7f4;color:#0d8074;font-size:9px;font-weight:800}.patient-section-heading h3{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-section-heading p{margin:0;color:#94a09e;font-size:9px;line-height:1.45}.patient-fields{display:grid;gap:15px}.identity-fields{grid-template-columns:repeat(3,1fr)}.contact-fields{grid-template-columns:repeat(3,1fr)}.emergency-fields{grid-template-columns:repeat(3,1fr)}.clinical-fields{grid-template-columns:1fr 1fr}.patient-fields label{display:flex;flex-direction:column;gap:7px;color:#516763;font-size:9px;font-weight:700}.patient-fields label em{color:#bd5c50;font-size:11px;font-style:normal;font-weight:800}.patient-fields input,.patient-fields select,.patient-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:11px 12px;outline:none;background:#fff;color:#304944;font:400 10px 'DM Sans';transition:border-color .15s,box-shadow .15s}.patient-fields input:focus,.patient-fields select:focus,.patient-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.patient-fields input::placeholder,.patient-fields textarea::placeholder{color:#a5b1ae}.patient-fields textarea{min-height:132px;resize:vertical;font-size:12px;line-height:1.6}.patient-fields .span-full{grid-column:1/-1}.clinical-section{background:#fbfdfc}.patient-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:17px 28px;background:#fff;border-top:1px solid #e1ebe8;box-shadow:0 -8px 20px #23453f0a}.patient-modal-actions>div{display:flex;align-items:center;gap:9px}.patient-modal-actions small{color:#82918e;font-size:9px}.secure-dot{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#e6f5ef;color:#16805f;font-size:9px;font-weight:800}.patient-modal-actions button{min-width:110px}\n.patient-modal-backdrop{padding:18px}.patient-modal.user-modal{width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;border-radius:18px}.patient-modal .patient-modal-header{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;justify-content:stretch;width:100%;min-height:88px;margin:0;padding:18px 32px;text-align:left}.patient-modal .patient-modal-header>div:nth-child(2){justify-self:start;text-align:left}.patient-modal .modal-close{top:24px;right:28px}.patient-modal .patient-form-section{grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px}.patient-modal .patient-fields{gap:18px}.patient-modal .patient-fields label{font-size:10px}.patient-modal .patient-fields input,.patient-modal .patient-fields select,.patient-modal .patient-fields textarea{padding:13px 14px;font-size:12px}.patient-modal .patient-fields textarea{min-height:150px;font-size:13px}.patient-modal .patient-modal-actions{padding:18px 32px}.patient-fields label>span{display:inline-flex;align-items:baseline;gap:3px;line-height:1}.patient-fields label>span em{line-height:1}\n.patient-view-modal.user-modal{display:flex;flex-direction:column;width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.patient-view-header{position:sticky;top:0;z-index:3;box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-view-header>div:nth-child(2){justify-self:start;text-align:left}.patient-view-header .modal-close{top:24px;right:28px}.patient-view-avatar{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e3f3ee;color:#0c7c6f;font:800 14px 'Manrope'}.patient-view-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.patient-view-header p{margin:4px 0 0;color:#84938f;font-size:10px}.patient-view-body{flex:1;background:#fbfcfc}.patient-view-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.patient-view-section-title{display:flex;align-items:flex-start;gap:11px}.patient-view-section-title>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.patient-view-section-title h3{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-view-section-title p{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.patient-view-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.patient-view-grid>div{min-width:0;padding:13px 14px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.patient-view-grid dt{color:#899894;font-size:8px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.patient-view-grid dd{margin:5px 0 0;color:#304944;font-size:11px;font-weight:600;overflow-wrap:anywhere}.patient-view-grid .view-span-full{grid-column:1/-1}.patient-contact-columns{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:14px}.patient-contact-columns .patient-view-grid{grid-template-columns:1fr 1fr}.emergency-card{padding:15px 16px;border:1px solid #f0ded4;border-radius:10px;background:#fff9f5}.emergency-card>span{display:block;color:#a76e57;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.emergency-card strong{display:block;margin-top:8px;color:#634c43;font-size:12px}.emergency-card p{margin:5px 0 0;color:#987d72;font-size:9px;line-height:1.45}.clinical-view-section{background:#f8fbfa}.patient-clinical-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}.patient-clinical-cards article{display:flex;align-items:flex-start;gap:12px;min-height:86px;padding:16px;border-radius:11px}.patient-clinical-cards article>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;font-weight:800}.patient-clinical-cards article div{display:flex;flex-direction:column;gap:7px}.patient-clinical-cards small{font-size:8px;font-weight:800;letter-spacing:.07em}.patient-clinical-cards strong{font-size:11px;line-height:1.5}.allergy-card{border:1px solid #efd7d0;background:#fff7f5;color:#9d5d51}.allergy-card>span{background:#f4d9d2}.condition-card{border:1px solid #d7e6e2;background:#f3f9f7;color:#3f7369}.condition-card>span{background:#dceee9}.patient-view-actions{position:sticky;bottom:0;z-index:3;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:72px;margin-top:auto;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.patient-view-actions>div{display:flex;align-items:center;justify-content:flex-end;gap:9px}.patient-view-actions>small{font-size:9px}.patient-view-actions button{min-width:110px}\n.appointment-modal-backdrop{padding:18px}.appointment-modal.user-modal{display:flex;flex-direction:column;width:min(1100px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.appointment-modal-header{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.appointment-modal-header>div:nth-child(2){justify-self:start;text-align:left}.appointment-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.appointment-modal-header .modal-close{top:24px;right:28px}.appointment-modal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e5f3f0;color:#0b7e70;font-size:17px;font-weight:800}.appointment-modal>form{padding:0}.appointment-modal .alert{margin:18px 32px 0}.appointment-form-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.appointment-fields{display:grid;gap:18px}.appointment-fields.two-columns,.appointment-fields .two-columns{grid-template-columns:1fr 1fr}.appointment-fields.three-columns{grid-template-columns:repeat(3,1fr)}.appointment-fields.vitals-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.appointment-fields label{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.appointment-fields label>span{display:inline-flex;align-items:baseline;gap:3px}.appointment-fields label em{color:#bd5c50;font-size:11px;font-style:normal}.appointment-fields input,.appointment-fields select,.appointment-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.appointment-fields input:focus,.appointment-fields select:focus,.appointment-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.appointment-fields textarea{min-height:92px;resize:vertical;line-height:1.55}.appointment-fields small{font-size:9px;font-weight:400}.appointment-fields .field-warning{color:#a06759}.appointment-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.appointment-modal-actions>div{display:flex;align-items:center;gap:9px}.appointment-modal-actions small{font-size:9px}.appointment-modal-actions button{min-width:120px}\n.workflow-modal-backdrop{padding:18px}.workflow-modal.user-modal{display:flex;flex-direction:column;width:min(1060px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.workflow-modal-header{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.workflow-modal-header>div:nth-child(2){justify-self:start;text-align:left}.workflow-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.workflow-modal-header p{margin:4px 0 0;color:#84938f;font-size:10px}.workflow-modal-header .modal-close{top:24px;right:28px}.workflow-modal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;font:800 14px 'Manrope'}.rx-icon{background:#eee9f8;color:#7058a1}.vaccine-icon{background:#e5f3ee;color:#15755e;font-size:18px}.user-icon{background:#e8eff8;color:#4c719d;font-size:18px}.workflow-eyebrow{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.workflow-modal>form{padding:0}.workflow-modal .alert{margin:18px 32px 0}.workflow-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.workflow-section-title{display:flex;align-items:flex-start;gap:11px}.workflow-section-title>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.workflow-section-title h3{margin:1px 0 4px;color:#31504a;font-size:12px}.workflow-section-title p{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.workflow-fields{display:grid;gap:18px}.workflow-grid.two{grid-template-columns:1fr 1fr}.workflow-grid.four{grid-template-columns:1.4fr 1.1fr .6fr .6fr}.workflow-fields label{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.workflow-fields label>span{display:inline-flex;align-items:baseline;gap:3px}.workflow-fields label em{color:#bd5c50;font-size:11px;font-style:normal}.workflow-fields input,.workflow-fields select,.workflow-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.workflow-fields input:focus,.workflow-fields select:focus,.workflow-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.workflow-fields textarea{min-height:104px;resize:vertical;line-height:1.55}.workflow-fields small{font-size:9px;font-weight:400}.workflow-span-full{grid-column:1/-1}.workflow-modal .form-note{margin:0}.workflow-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.workflow-modal-actions>div{display:flex;align-items:center;gap:9px}.workflow-modal-actions small{font-size:9px}.workflow-modal-actions button{min-width:120px}\n.record-detail-modal.user-modal{display:flex;flex-direction:column;width:min(900px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.detail-icon{background:#edf3f7;color:#516f83;font-size:15px}.record-detail-body{padding:28px 32px;background:#fbfcfc}.record-detail-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.record-detail-grid>div{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.record-detail-grid .record-wide{grid-column:span 2}.record-detail-grid dt{color:#899894;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.record-detail-grid dd{margin:6px 0 0;color:#304944;font-size:11px;font-weight:600;line-height:1.5;overflow-wrap:anywhere}.record-safety-alert{display:flex;align-items:flex-start;gap:12px;margin-top:16px;padding:15px 16px;border:1px solid #efd7d0;border-radius:11px;background:#fff7f5;color:#9d5d51}.record-safety-alert>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;background:#f4d9d2;font-weight:800}.record-safety-alert div{display:flex;flex-direction:column;gap:5px}.record-safety-alert small{font-size:8px;font-weight:800;letter-spacing:.07em}.record-safety-alert strong{font-size:11px}.record-detail-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.record-detail-actions>div{display:flex;gap:9px}.record-detail-actions>small{font-size:9px}.record-detail-actions button{min-width:110px}\n.appointment-detail-modal.user-modal{width:min(1120px,calc(100vw - 36px))}.appointment-detail-body{display:grid;gap:18px}.appointment-detail-summary{display:grid;grid-template-columns:minmax(0,1.45fr) repeat(3,minmax(150px,.6fr));gap:12px}.appointment-detail-summary>div{min-width:0;padding:16px 18px;border:1px solid #dfe9e6;border-radius:12px;background:#fff;box-shadow:0 6px 18px #23453f08}.appointment-detail-summary small{display:block;color:#7e918d;font-size:8px;font-weight:800;letter-spacing:.08em}.appointment-detail-summary strong{display:block;margin-top:7px;color:#294740;font-size:13px;line-height:1.4}.appointment-detail-summary p{margin:7px 0 0;color:#728581;font-size:11px;line-height:1.5}.appointment-summary-patient{display:flex;align-items:center;gap:14px}.appointment-summary-patient .avatar.large{width:52px;height:52px;flex:0 0 auto;font-size:14px}.appointment-detail-section{border:1px solid #dfe9e6;border-radius:14px;background:#fff;box-shadow:0 6px 18px #23453f08;overflow:hidden}.appointment-detail-section>header{padding:18px 20px;border-bottom:1px solid #e8efed;background:#fcfdfd}.appointment-detail-section h3{margin:0;color:#294a44;font-size:16px}.appointment-detail-section header p{margin:5px 0 0;color:#7d8f8b;font-size:11px;line-height:1.5}.appointment-detail-grid,.appointment-vitals-grid{padding:18px}.appointment-detail-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.appointment-vitals-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.appointment-detail-grid>div,.appointment-vitals-grid>div{min-height:86px}\n.patient-modal .patient-modal-header,.patient-view-modal .patient-view-header,.appointment-modal .appointment-modal-header,.workflow-modal .workflow-modal-header,.record-detail-modal .workflow-modal-header{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr) 40px;align-items:center;justify-content:stretch;column-gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-modal .patient-modal-header>div:nth-child(2),.patient-view-modal .patient-view-header>div:nth-child(2),.appointment-modal .appointment-modal-header>div:nth-child(2),.workflow-modal .workflow-modal-header>div:nth-child(2),.record-detail-modal .workflow-modal-header>div:nth-child(2){min-width:0;justify-self:start;text-align:left}.patient-modal .patient-modal-header h2,.patient-view-modal .patient-view-header h2,.appointment-modal .appointment-modal-header h2,.workflow-modal .workflow-modal-header h2,.record-detail-modal .workflow-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px;line-height:1.2}.patient-modal .patient-modal-header .modal-close,.patient-view-modal .patient-view-header .modal-close,.appointment-modal .appointment-modal-header .modal-close,.workflow-modal .workflow-modal-header .modal-close,.record-detail-modal .workflow-modal-header .modal-close{position:static;display:grid;place-items:center;justify-self:end;width:36px;height:36px;margin:0;padding:0;border:1px solid transparent;border-radius:9px;color:#667b77;font-size:22px;line-height:1;transition:background .15s,border-color .15s,color .15s}.patient-modal .patient-modal-header .modal-close:hover,.patient-view-modal .patient-view-header .modal-close:hover,.appointment-modal .appointment-modal-header .modal-close:hover,.workflow-modal .workflow-modal-header .modal-close:hover,.record-detail-modal .workflow-modal-header .modal-close:hover{border-color:#dce8e5;background:#f2f7f5;color:#214a43}.patient-modal-eyebrow,.workflow-eyebrow{line-height:1.2}.patient-modal-icon,.patient-view-avatar,.appointment-modal-icon,.workflow-modal-icon{box-sizing:border-box;width:44px;height:44px;margin:0;justify-self:start}\n.workflow-fields .patient-match{color:#24745e}.workflow-fields .field-warning{color:#a06759}.additional-medications{grid-column:1/-1;display:grid;gap:12px;margin-top:18px}.medication-entry{padding:18px;border:1px solid #dfe9e6;border-radius:12px;background:#fbfdfc}.medication-entry>header{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:17px}.medication-entry>header>div{display:flex;align-items:center;gap:10px}.medication-entry>header div div{display:flex;flex-direction:column;gap:2px}.medication-entry>header strong{color:#31504a;font-size:11px}.medication-entry>header small{font-size:8px}.medication-entry>header button{border:1px solid #efd8d4;border-radius:7px;padding:6px 9px;background:#fff;color:#aa6257;font-size:8px;font-weight:700}.medication-number{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#eee9f8;color:#7058a1;font-size:9px;font-weight:800}.medication-instructions{display:flex;flex-direction:column;gap:8px;margin-top:15px;color:#516763;font-size:10px;font-weight:700}.medication-instructions>span{display:inline-flex;align-items:baseline;gap:3px}.medication-instructions em{color:#bd5c50;font-size:11px;font-style:normal}.medication-instructions textarea{width:100%;min-height:80px;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';resize:vertical}.add-medication-button{display:flex;align-items:center;gap:12px;width:100%;padding:15px 16px;border:1px dashed #9fc9c1;border-radius:11px;background:#f6fbf9;color:#286a5f;text-align:left}.add-medication-button>span{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:#dff1ec;font-size:16px}.add-medication-button>div{display:flex;flex-direction:column;gap:3px}.add-medication-button strong{font-size:10px}.add-medication-button small{font-size:8px}.add-medication-button:hover{border-color:#5fa99c;background:#eef8f5}\n.vaccine-patient-row { grid-template-columns: minmax(0, 1fr); }\n.vaccine-details-grid { grid-template-columns: minmax(260px, 1.7fr) minmax(150px, .75fr) minmax(150px, .75fr); }\n.certificate-page{max-width:1400px;margin:0 auto}.certificate-page-heading{align-items:center}.certificate-workspace{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(560px,1.3fr);gap:20px;align-items:start}.certificate-editor{overflow:hidden}.certificate-editor>header{padding:22px 24px;border-bottom:1px solid #e4ecea;background:#fbfdfc}.certificate-editor h2{color:#294a44;font-size:17px}.certificate-editor header p{margin:6px 0 0;color:#7d8f8b;font-size:11px}.certificate-editor form{display:grid;gap:19px;padding:24px}.certificate-editor label{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:11px;font-weight:800}.certificate-editor label span{display:inline-flex;gap:4px}.certificate-editor label em{color:#bd5c50;font-style:normal}.certificate-editor input,.certificate-editor select,.certificate-editor textarea{width:100%;border:1px solid #d5e3df;border-radius:9px;padding:12px 13px;outline:none;background:#fff;color:#304944;font-size:12px}.certificate-editor input:focus,.certificate-editor select:focus,.certificate-editor textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.certificate-editor textarea{min-height:280px;resize:vertical;line-height:1.65}.certificate-editor label small{font-size:9px;font-weight:400;line-height:1.45}.certificate-sheet{box-sizing:border-box;min-height:850px;padding:48px 58px;border:1px solid #dce6e3;background:#fff;box-shadow:0 12px 34px #1e453e14;color:#273f3b}.certificate-sheet-header{display:flex;align-items:center;justify-content:space-between;gap:28px;padding-bottom:22px;border-bottom:2px solid #248679}.certificate-sheet-header img{width:210px;height:auto}.certificate-sheet-header>div{display:flex;flex-direction:column;gap:5px;text-align:right}.certificate-sheet-header strong{font-size:11px}.certificate-sheet-header span{color:#657b76;font-size:10px}.certificate-sheet>h2{margin:58px 0 26px;text-align:center;font-family:Georgia,serif!important;font-size:24px;letter-spacing:.12em;text-decoration:underline}.certificate-sheet>time{display:block;margin-bottom:36px;text-align:right;font-size:11px}.certificate-body{min-height:410px;font-family:Georgia,serif!important;font-size:14px;line-height:2;text-align:justify}.certificate-body *{font-family:Georgia,serif!important}.certificate-body p{margin:0 0 22px}.certificate-details{min-height:125px;white-space:pre-wrap}.certificate-doctor{display:flex;flex-direction:column;align-items:center;width:245px;margin:45px 0 0 auto;text-align:center}.certificate-doctor .signature-line{width:100%;border-top:1px solid #526965}.certificate-doctor strong{margin-top:8px;font-size:13px}.certificate-doctor span{margin-top:4px;color:#6d807c;font-size:10px}\n.certificate-patient-autocomplete{position:relative}.certificate-patient-suggestions{position:absolute;top:calc(100% + 6px);right:0;left:0;z-index:20;max-height:250px;overflow:auto;border:1px solid #d5e3df;border-radius:10px;background:#fff;box-shadow:0 14px 32px #193d3624}.certificate-patient-suggestions button{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;border:0;border-bottom:1px solid #edf2f1;padding:11px 13px;background:#fff;color:#304944;text-align:left}.certificate-patient-suggestions button:last-child{border-bottom:0}.certificate-patient-suggestions button:hover{background:#eef8f5}.certificate-patient-suggestions button span{font-size:11px;font-weight:700}.certificate-patient-suggestions button small{color:#81918d;font-size:9px}.certificate-patient-suggestions p{margin:0;padding:14px;color:#7d8f8b;font-size:10px;font-weight:400}.certificate-editor .patient-match{color:#24745e}.certificate-save-action{display:flex;flex-direction:column;gap:9px;margin-top:4px}.certificate-editor .certificate-save-button{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;min-height:62px;padding:12px 18px;border-radius:11px;text-align:left;transition:transform .15s,box-shadow .15s,background .15s}.certificate-editor .certificate-save-button:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 8px 20px #0d80742b}.certificate-save-icon{display:grid;place-items:center;width:34px;height:34px;flex:0 0 auto;border-radius:9px;background:#ffffff24;font-size:15px}.certificate-save-button>span:last-child{display:flex;flex-direction:column;gap:3px}.certificate-save-button strong{font-size:12px}.certificate-save-button small{color:#d9f1ec;font-size:9px;font-weight:500}.certificate-editor .certificate-save-button:disabled{border:1px solid #dce6e3;background:#edf2f0;color:#899793;box-shadow:none;opacity:1}.certificate-editor .certificate-save-button:disabled .certificate-save-icon{background:#dfe8e5;color:#899793}.certificate-editor .certificate-save-button:disabled small{color:#9ca9a6}.certificate-save-hint{padding-left:2px;color:#879692;font-size:9px;line-height:1.45}\n@media(max-width:1000px){.certificate-workspace{grid-template-columns:1fr}.certificate-sheet{min-height:760px}}\n@media(max-width:620px){.certificate-sheet{min-height:680px;padding:30px 24px}.certificate-sheet-header{align-items:flex-start;flex-direction:column}.certificate-sheet-header img{width:180px}.certificate-sheet-header>div{text-align:left}.certificate-sheet>h2{margin-top:40px;font-size:20px}.certificate-body{font-size:12px}.certificate-doctor{width:210px}}\n@media print{body.printing-medical-certificate *{visibility:hidden!important}body.printing-medical-certificate #medical-certificate-print,body.printing-medical-certificate #medical-certificate-print *{visibility:visible!important}body.printing-medical-certificate #medical-certificate-print{position:absolute;inset:0;width:100%;min-height:100vh;padding:36px 48px;border:0;box-shadow:none}body.printing-medical-certificate .certificate-sheet-header img{width:200px}body.printing-medical-certificate .certificate-sheet>h2{margin-top:48px}body.printing-medical-certificate .certificate-body{min-height:390px}}\n.prescription-view-summary{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:12px;margin-bottom:16px}.prescription-view-summary>div{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:5px;padding:14px 15px;border:1px solid #dedfed;border-radius:10px;background:#fdfcff}.prescription-view-summary>div:first-child{flex-direction:row;align-items:center;justify-content:flex-start;gap:11px}.prescription-view-summary>div:first-child>div{display:flex;min-width:0;flex-direction:column;gap:5px}.prescription-view-summary small{color:#81769e;font-size:8px;font-weight:800;letter-spacing:.07em}.prescription-view-summary strong{color:#3e3850;font-size:11px;overflow-wrap:anywhere}\n.record-detail-modal.prescription-detail-modal{width:min(1280px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;overflow:hidden}.prescription-detail-modal .workflow-modal-header{flex:0 0 auto;padding-inline:40px}.prescription-detail-modal .record-detail-body{flex:1;overflow-y:auto;padding:34px 40px;background:linear-gradient(145deg,#fbfcfc 0%,#f6faf8 100%)}.prescription-detail-modal .prescription-view-summary{grid-template-columns:1.4fr 1fr 1fr;gap:16px;margin-bottom:22px}.prescription-detail-modal .prescription-view-summary>div{min-height:88px;padding:18px 20px;border-color:#dce7e4;border-radius:14px;background:#fff;box-shadow:0 7px 20px #294d4609}.prescription-detail-modal .prescription-view-summary>div:first-child{gap:15px}.prescription-detail-modal .prescription-view-summary .avatar{width:46px;height:46px;font-size:12px}.prescription-detail-modal .prescription-view-summary small{font-size:9px}.prescription-detail-modal .prescription-view-summary strong{font-size:14px;line-height:1.45}.prescription-detail-modal .record-detail-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.prescription-detail-modal .record-detail-grid>div{min-height:92px;padding:18px 20px;border-color:#dce7e4;border-radius:13px;box-shadow:0 6px 18px #294d4608}.prescription-detail-modal .record-detail-grid .record-wide{grid-column:span 2}.prescription-detail-modal .record-detail-grid dt{font-size:9px}.prescription-detail-modal .record-detail-grid dd{margin-top:9px;font-size:14px;line-height:1.6}.prescription-detail-modal .record-safety-alert{margin-top:20px;padding:18px 20px}.prescription-detail-footer{box-sizing:border-box;flex:0 0 auto;width:100%;min-height:82px;padding:18px 40px;background:#fff;box-shadow:0 -10px 28px #23453f0d}.prescription-detail-footer>small{font-size:10px}.prescription-detail-footer>div{margin-left:auto}.prescription-detail-footer button{min-width:150px;padding:12px 18px}\n@media(max-width:700px){.prescription-view-summary{grid-template-columns:1fr}.prescription-view-summary>div:first-child{grid-column:1/-1}}\n@media(max-width:900px){.prescription-detail-modal .record-detail-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media(max-width:560px){.record-detail-modal.prescription-detail-modal{width:100vw;height:100vh;max-height:none}.prescription-detail-modal .workflow-modal-header,.prescription-detail-modal .record-detail-body{padding-inline:20px}.prescription-detail-modal .prescription-view-summary,.prescription-detail-modal .record-detail-grid{grid-template-columns:1fr}.prescription-detail-modal .record-detail-grid .record-wide{grid-column:auto}.prescription-detail-footer{min-height:72px;padding:14px 20px}.prescription-detail-footer>div{width:100%}.prescription-detail-footer button{flex:1;min-width:0}}\nbutton:disabled{opacity:.55;cursor:not-allowed}code{background:#edf4f2;padding:2px 4px;border-radius:4px}\n.appointment.has-consultation-action{grid-template-columns:60px 34px minmax(150px,1fr) 105px 122px}.start-consultation{border:1px solid #0d8074;border-radius:8px;padding:8px 10px;background:#0d8074;color:#fff;font-size:9px;font-weight:800;white-space:nowrap;box-shadow:0 3px 8px #0d807420}.start-consultation:hover{background:#096e64}\n.consultation-page{max-width:1400px;margin:-14px auto 0}.consultation-header{margin-bottom:20px}.consultation-back{border:0;background:transparent;color:#46706a;padding:0;margin-bottom:17px;font-size:10px;font-weight:700}.consultation-back:hover{color:#0d8074}.consultation-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.consultation-heading h1{margin-top:4px}.consultation-heading p{margin:6px 0 0;color:#7d8f8b;font-size:12px}.consultation-status{display:inline-flex;align-items:center;gap:7px;border:1px solid #cfe7df;border-radius:999px;padding:8px 11px;background:#eef9f5;color:#21725f;font-size:9px;font-weight:800;white-space:nowrap}.consultation-status i{width:7px;height:7px;border-radius:50%;background:#29a578;box-shadow:0 0 0 4px #d8f1e8}.consultation-loading{padding:36px;text-align:center;color:#71847f;font-size:12px}.consultation-profile{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(520px,1.7fr);align-items:center;gap:28px;padding:22px 24px}.consultation-identity{display:flex;align-items:center;gap:14px}.consultation-identity>div{min-width:0}.consultation-identity small{color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.11em}.consultation-identity h2{margin:3px 0;color:#294b45;font-size:18px}.consultation-identity p{margin:0;color:#7d8d89;font-size:10px}.consultation-profile dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;margin:0;border:1px solid #e6eeec;border-radius:10px;overflow:hidden}.consultation-profile dl div{min-width:0;padding:12px 14px;background:#fbfdfc;border-bottom:1px solid #e9efee}.consultation-profile dl div:nth-child(odd){border-right:1px solid #e9efee}.consultation-profile dl div:nth-last-child(-n+2){border-bottom:0}.consultation-profile dt{color:#879692;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.consultation-profile dd{margin:5px 0 0;color:#344f4a;font-size:10px;overflow-wrap:anywhere}.consultation-history-stack{display:grid;gap:14px;margin-top:16px}.consultation-history>header{padding:17px 20px;border-bottom:1px solid #e8efed}.consultation-history h2{color:#294a44;font-size:13px}.consultation-history header p{margin:4px 0 0;color:#879692;font-size:9px}.consultation-history article{display:grid;grid-template-columns:100px minmax(0,1fr) auto;align-items:center;gap:13px;min-height:61px;padding:11px 20px;border-top:1px solid #edf2f1}.consultation-history article:first-child{border-top:0}.consultation-history time{color:#657b76;font-size:9px}.consultation-history article>div{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-history strong{color:#344f4a;font-size:10px}.consultation-history article small{font-size:9px;white-space:normal}.consultation-history .status{font-size:8px}.consultation-history .empty{min-height:90px;display:grid;place-items:center;margin:0}\n.consultation-header{position:relative;overflow:hidden;padding:20px 22px 22px;border:1px solid #d9e9e5;border-radius:14px;background:linear-gradient(120deg,#fff 0%,#f4fbf8 68%,#e7f5f0 100%);box-shadow:0 7px 24px #234d4410}.consultation-header:after{content:'';position:absolute;right:-65px;bottom:-95px;width:220px;height:220px;border:38px solid #0d807408;border-radius:50%;pointer-events:none}.consultation-topline{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.consultation-back{margin:0}.consultation-heading{position:relative;z-index:1;align-items:flex-end}.consultation-heading h1{font-size:26px}.consultation-actions{display:flex;align-items:stretch;gap:12px}.consultation-action{display:flex;align-items:center;gap:12px;min-width:208px;padding:14px 16px;border:1px solid transparent;border-radius:14px;text-align:left;box-shadow:0 10px 24px #1d4b430f;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease}.consultation-action:hover{transform:translateY(-1px);box-shadow:0 14px 26px #1d4b4314}.consultation-action>span{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;font:800 14px 'Manrope'}.consultation-action>div{display:flex;flex-direction:column;gap:3px}.consultation-action strong{font-size:12px}.consultation-action small{font-size:10px;font-weight:500}.consultation-action:disabled{transform:none;box-shadow:none}.consultation-action-vaccine{border-color:#c9e1db;background:#f7fcfa;color:#1f6a5e}.consultation-action-vaccine>span{background:#e3f3ee;color:#0d8074}.consultation-action-prescription{border-color:#d8deef;background:linear-gradient(135deg,#325e86 0%,#244d73 100%);color:#fff}.consultation-action-prescription>span{background:#ffffff24;color:#fff}.consultation-action-prescription small{color:#dbe9f4}.consultation-action-end{border-color:#c7ded5;background:linear-gradient(135deg,#1f8a74 0%,#146a59 100%);color:#fff}.consultation-action-end>span{background:#ffffff24;color:#fff}.consultation-action-end small{color:#d8f1ea}.consultation-profile{border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}.consultation-profile .avatar.large{width:50px;height:50px;font-size:13px}.consultation-history{overflow:hidden}.consultation-history>header{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fcfdfd}.history-kicker{display:block;margin-bottom:5px;color:#0d8074;font-size:7px;font-weight:800;letter-spacing:.12em}.history-add{border:1px solid #bcd9d3;border-radius:10px;padding:9px 12px;background:#fff;color:#176f64;font-size:8px;font-weight:800;white-space:nowrap}.history-add:hover{border-color:#0d8074;background:#f1f9f6}.prescription-history{border-color:#d7e7e3}.consultation-empty{min-height:175px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:25px;text-align:center}.consultation-empty>span{display:grid;place-items:center;width:39px;height:39px;margin-bottom:10px;border-radius:11px;background:#eee9f8;color:#72599e;font:800 11px 'Manrope'}.consultation-empty strong{font-size:11px}.consultation-empty p{margin:5px 0 13px;color:#879692;font-size:9px}.consultation-empty button{border:0;border-radius:8px;padding:9px 12px;background:#e8f5f1;color:#176f64;font-size:8px;font-weight:800}\n.consultation-page .eyebrow{font-size:11px!important}.consultation-heading h1{font-size:30px}.consultation-heading p{font-size:14px;line-height:1.5}.consultation-back{font-size:12px}.consultation-status{font-size:11px}.consultation-action{min-width:224px;padding:15px 17px}.consultation-action>span{width:42px;height:42px;font-size:15px}.consultation-action strong{font-size:12px}.consultation-action small{font-size:10px}.consultation-profile,.consultation-vitals{padding:26px}.consultation-profile .avatar.large{width:58px;height:58px;font-size:15px}.consultation-identity small,.history-kicker{font-size:9px}.consultation-identity h2{font-size:21px}.consultation-identity p{font-size:12px;line-height:1.5}.consultation-profile dt,.consultation-vitals dt{font-size:10px}.consultation-profile dd,.consultation-vitals dd{font-size:13px;line-height:1.45}.consultation-profile dl div{padding:14px 16px}.consultation-vitals header{padding:0 0 18px;border-bottom:1px solid #e8efed}.consultation-vitals h2{color:#294a44;font-size:16px}.consultation-vitals header p{margin:5px 0 0;color:#7d8f8b;font-size:11px}.consultation-vitals-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0 0}.consultation-vitals-grid>div{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fbfdfc}.consultation-vitals-grid dt{color:#899894;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.consultation-vitals-grid dd{margin:6px 0 0;color:#304944;font-weight:600;overflow-wrap:anywhere}.clinical-overview{margin:16px 0;border:1px solid #dce8e5;border-radius:13px;background:#fff;box-shadow:0 4px 16px #294d460a;overflow:hidden}.clinical-overview>header{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 20px;border-bottom:1px solid #e8efed;background:#fbfdfc}.clinical-overview h2{color:#294a44;font-size:16px}.clinical-overview header p{margin:5px 0 0;color:#7d8f8b;font-size:11px}.clinical-edit-button{border:1px solid #b9d6d0;border-radius:8px;padding:10px 12px;background:#fff;color:#176f64;font-size:11px;font-weight:800;white-space:nowrap}.clinical-edit-button:hover{border-color:#0d8074;background:#f2f9f7}.consultation-clinical-summary{display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr);align-items:stretch;margin:16px;border:1px solid #dce8e5;border-radius:12px;background:linear-gradient(135deg,#fff 0%,#f8fcfb 100%);box-shadow:0 6px 18px #294d4608;overflow:hidden}.consultation-clinical-item{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:8px;padding:20px 22px}.consultation-clinical-item small{color:#6f827d;font-size:10px;font-weight:800;letter-spacing:.08em}.consultation-clinical-item strong{color:#2f4b46;font-size:14px;line-height:1.6;overflow-wrap:anywhere}.consultation-clinical-divider{background:linear-gradient(180deg,#eff5f3 0%,#dbe8e4 50%,#eff5f3 100%)}.clinical-overview-form{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px}.clinical-overview-form label{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:12px;font-weight:800}.clinical-overview-form textarea{width:100%;min-height:120px;padding:13px 14px;border:1px solid #d5e3df;border-radius:9px;background:#fff;color:#304944;font:400 13px/1.5 'DM Sans';resize:vertical;outline:none}.clinical-overview-form textarea:focus{border-color:#66a99f;box-shadow:0 0 0 3px #0d807412}.clinical-overview-form label small{font-size:10px;font-weight:400}.clinical-form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:9px;padding-top:2px}.consultation-history h2{font-size:16px}.consultation-history header p{font-size:11px}.history-add{font-size:10px;padding:9px 11px}.consultation-history article{min-height:72px}.consultation-history time{font-size:11px}.consultation-history strong{font-size:13px}.consultation-history article small{font-size:11px;line-height:1.45}.consultation-history .status{font-size:10px}.consultation-empty strong{font-size:13px}.consultation-empty p{font-size:11px}.consultation-empty button{font-size:10px}\n@media(max-width:900px){.data-head{display:none}.data-row,.appointments-row,.patients-row,.rx-row,.vaccine-row,.users-row{grid-template-columns:1fr}.appointments-row{gap:12px}.appointments-row select{max-width:220px}.appointments-row .row-actions{gap:8px}.appointments-row .row-actions button{flex:0 0 auto}.row-actions{justify-content:flex-start}.form-grid.three{grid-template-columns:1fr 1fr}}\n@media(max-width:1000px){.appointment.has-consultation-action{grid-template-columns:52px 34px minmax(130px,1fr) 120px}.appointment.has-consultation-action .status{display:none}.consultation-profile{grid-template-columns:1fr}.consultation-clinical-summary{grid-template-columns:1fr}.consultation-clinical-divider{height:1px}.consultation-history.appointments-history{grid-column:auto}}\n@media(max-width:640px){.appointment.has-consultation-action{grid-template-columns:45px 30px minmax(0,1fr)}.appointment.has-consultation-action .start-consultation{grid-column:3;width:max-content}.consultation-page{margin-top:0}.consultation-header{padding:17px}.consultation-topline{align-items:flex-start}.consultation-heading{align-items:flex-start;flex-direction:column}.consultation-heading h1{font-size:25px}.consultation-actions{width:100%;flex-direction:column}.consultation-action{width:100%;min-width:0}.consultation-profile{padding:18px}.consultation-profile dl,.clinical-overview-form{grid-template-columns:1fr}.consultation-profile dl div,.consultation-profile dl div:nth-child(odd),.consultation-profile dl div:nth-last-child(-n+2){border-right:0;border-bottom:1px solid #e9efee}.consultation-profile dl div:last-child{border-bottom:0}.clinical-overview>header{align-items:flex-start;flex-direction:column}.clinical-edit-button{width:100%}.clinical-form-actions{grid-column:auto}.consultation-clinical-summary{margin:14px}.consultation-clinical-item{padding:18px}.consultation-history article{grid-template-columns:1fr auto}.consultation-history article time{grid-column:1/-1}.consultation-history article>div{grid-column:1}.consultation-history article>.status{grid-column:2;grid-row:2}}\n@media(max-width:760px){.patient-portal-grid{grid-template-columns:1fr}.patient-profile-panel dl{grid-template-columns:1fr 1fr}.patient-modal .patient-form-section,.patient-view-section{grid-template-columns:1fr;gap:16px}.identity-fields,.contact-fields,.emergency-fields{grid-template-columns:1fr 1fr}.patient-section-heading p,.patient-view-section-title p{display:none}.patient-contact-columns{grid-template-columns:1fr}.patient-view-grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.auth-card{padding:28px 22px}.form-grid,.form-grid.three{grid-template-columns:1fr}.patient-profile-panel dl{grid-template-columns:1fr}.header-actions .role-badge{display:none}.patient-modal-backdrop{padding:0}.patient-modal.user-modal,.patient-view-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.patient-modal .patient-modal-header,.patient-view-header{padding:16px 20px}.patient-modal .patient-form-section,.patient-view-section{padding:21px 20px}.identity-fields,.contact-fields,.emergency-fields,.clinical-fields,.patient-view-grid,.patient-contact-columns .patient-view-grid,.patient-clinical-cards{grid-template-columns:1fr}.patient-modal .patient-modal-actions,.patient-view-actions{padding:14px 20px}.patient-modal-actions>div:first-child,.patient-view-actions>small{display:none}.patient-modal-actions>div:last-child,.patient-view-actions>div{width:100%}.patient-modal-actions button,.patient-view-actions button{flex:1;min-width:0}}\n@media(max-width:760px){.appointment-form-section{grid-template-columns:1fr;gap:16px}.appointment-fields.three-columns,.appointment-fields.vitals-grid{grid-template-columns:1fr 1fr}.appointment-form-section .patient-section-heading p{display:none}}@media(max-width:560px){.appointment-modal-backdrop{padding:0}.appointment-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.appointment-modal-header{padding:16px 20px}.appointment-form-section{padding:21px 20px}.appointment-fields.two-columns,.appointment-fields .two-columns,.appointment-fields.three-columns,.appointment-fields.vitals-grid,.consultation-vitals-grid{grid-template-columns:1fr}.appointment-modal-actions{padding:14px 20px}.appointment-modal-actions>div:first-child{display:none}.appointment-modal-actions>div:last-child{display:flex;width:100%}.appointment-modal-actions button{flex:1;min-width:0}}\n@media(max-width:760px){.workflow-section{grid-template-columns:1fr;gap:16px}.workflow-section-title p{display:none}.workflow-grid.four{grid-template-columns:1fr 1fr}.vaccine-details-grid{grid-template-columns:1fr 1fr}.vaccine-details-grid label:first-child{grid-column:1/-1}.record-detail-grid,.appointment-detail-summary,.appointment-detail-grid,.appointment-vitals-grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.workflow-modal-backdrop{padding:0}.workflow-modal.user-modal,.record-detail-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.workflow-modal-header{padding:16px 20px}.workflow-section{padding:21px 20px}.workflow-grid.two,.workflow-grid.four,.vaccine-details-grid,.record-detail-grid,.appointment-detail-summary,.appointment-detail-grid,.appointment-vitals-grid{grid-template-columns:1fr}.vaccine-details-grid label:first-child{grid-column:auto}.record-detail-grid .record-wide{grid-column:auto}.workflow-modal-actions,.record-detail-actions{padding:14px 20px}.workflow-modal-actions>div:first-child,.record-detail-actions>small{display:none}.workflow-modal-actions>div:last-child,.record-detail-actions>div{display:flex;width:100%}.workflow-modal-actions button,.record-detail-actions button{flex:1;min-width:0}.record-detail-body,.appointment-detail-grid,.appointment-vitals-grid{padding:20px}.appointment-summary-patient{align-items:flex-start}.appointment-detail-section>header{padding:16px 20px}}\n\n.consultation-icon{background:#eef4fb;color:#476e93;font-size:18px}\n.end-consultation-modal{width:min(500px,calc(100vw - 36px));padding:34px;text-align:center;border:1px solid #d8e7e3;border-radius:18px}.end-consultation-icon{display:grid;place-items:center;width:58px;height:58px;margin:0 auto 18px;border-radius:18px;background:#e2f4ed;color:#13755f;font-size:24px;font-weight:800}.end-consultation-modal h2{margin:5px 0 10px;color:#24463f;font-size:22px}.end-consultation-modal>p{max-width:410px;margin:0 auto;color:#71847f;font-size:12px;line-height:1.65}.end-consultation-modal>p strong{color:#34544d}.end-consultation-modal .alert{margin:20px 0 0;text-align:left}.end-consultation-modal footer{display:flex;justify-content:center;gap:10px;margin:26px -34px -34px;padding:18px 24px;border-top:1px solid #e4ecea;background:#fbfdfc;border-radius:0 0 18px 18px}.end-consultation-modal footer button{min-width:180px}.end-consultation-modal footer .primary{background:#177861}@media(max-width:560px){.end-consultation-modal{padding:28px 22px}.end-consultation-modal footer{flex-direction:column-reverse;margin:24px -22px -28px;padding:16px 22px}.end-consultation-modal footer button{width:100%;min-width:0}}\n.consultation-action-note{border-color:#d6e1f1;background:#f7faff;color:#375f87}\n.consultation-action-note>span{background:#eaf1fb;color:#476e93}\n.consultation-documentation{padding:26px;border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}\n.consultation-documentation>header{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:0 0 18px;border-bottom:1px solid #e8efed;background:#fff}\n.consultation-documentation>header>div{min-width:0;flex:1}\n.consultation-documentation h2{margin:0;color:#294a44;font-size:16px;line-height:1.2}\n.consultation-documentation header p{margin:5px 0 0;color:#7d8f8b;font-size:11px;line-height:1.55}\n.consultation-documentation .history-add{align-self:flex-start;display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:10px 14px;font-size:10px}\n.consultation-documentation .consultation-empty{min-height:148px;margin:0;padding:30px 24px}\n.consultation-documentation .consultation-empty>span{width:48px;height:48px;margin-bottom:12px;border-radius:14px;background:#f0e9fb;color:#6d56a0;font-size:13px}\n.consultation-documentation .consultation-empty strong{font-size:15px}\n.consultation-documentation .consultation-empty p{max-width:560px;margin:6px auto 14px;font-size:12px;line-height:1.6}\n.consultation-documentation .consultation-empty button{padding:11px 16px;border-radius:10px;font-size:11px}\n.consultation-documentation-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 0}\n.consultation-documentation-grid>div{min-width:0;padding:16px 17px;border:1px solid #e1eae8;border-radius:11px;background:#fbfdfc}\n.consultation-documentation-grid dt{color:#899894;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n.consultation-documentation-grid dd{margin:7px 0 0;color:#304944;font-size:13px;font-weight:600;line-height:1.55;overflow-wrap:anywhere}\n\n@media(max-width:1000px){.consultation-documentation-grid{grid-template-columns:1fr}}\n@media(max-width:640px){.consultation-documentation{padding:18px}.consultation-documentation>header{flex-direction:column}.consultation-documentation .history-add{width:100%}.consultation-documentation .consultation-empty{min-height:140px;padding:24px 18px}.consultation-documentation-grid{grid-template-columns:1fr}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=app.component.js.map