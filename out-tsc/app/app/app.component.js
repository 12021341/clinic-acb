import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item[0];
function AppComponent_Conditional_0_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AppComponent_Conditional_0_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.notice());
} }
function AppComponent_Conditional_0_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label");
    i0.ɵɵtext(2, "First name");
    i0.ɵɵelementStart(3, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_16_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.firstName, $event) || (ctx_r1.registerForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, "Last name");
    i0.ɵɵelementStart(6, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_16_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.lastName, $event) || (ctx_r1.registerForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.firstName);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.lastName);
} }
function AppComponent_Conditional_0_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Email address");
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.email, $event) || (ctx_r1.registerForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 12)(4, "label");
    i0.ɵɵtext(5, "Date of birth");
    i0.ɵɵelementStart(6, "input", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.dateOfBirth, $event) || (ctx_r1.registerForm.dateOfBirth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label");
    i0.ɵɵtext(8, "Sex");
    i0.ɵɵelementStart(9, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.sex, $event) || (ctx_r1.registerForm.sex = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.mobileNumber, $event) || (ctx_r1.registerForm.mobileNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label");
    i0.ɵɵtext(22, "Home address");
    i0.ɵɵelementStart(23, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.homeAddress, $event) || (ctx_r1.registerForm.homeAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label");
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementStart(26, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.password, $event) || (ctx_r1.registerForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Use at least 8 characters.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label");
    i0.ɵɵtext(30, "Confirm password");
    i0.ɵɵelementStart(31, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_17_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.registerForm.confirmPassword, $event) || (ctx_r1.registerForm.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerForm.dateOfBirth);
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
function AppComponent_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Email address");
    i0.ɵɵelementStart(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_18_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.loginForm.email, $event) || (ctx_r1.loginForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "label");
    i0.ɵɵtext(4, "Password");
    i0.ɵɵelementStart(5, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_0_Conditional_18_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.loginForm.password, $event) || (ctx_r1.loginForm.password = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵelementStart(0, "main", 0)(1, "section", 5)(2, "div", 6)(3, "span", 7);
    i0.ɵɵtext(4, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "ACB Clinic");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 8);
    i0.ɵɵtext(8, "SECURE CLINIC WORKSPACE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h1");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_0_Conditional_13_Template, 2, 1, "div", 9);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_0_Conditional_14_Template, 2, 1, "div", 10);
    i0.ɵɵelementStart(15, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_0_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAuth()); });
    i0.ɵɵconditionalCreate(16, AppComponent_Conditional_0_Conditional_16_Template, 7, 2, "div", 12);
    i0.ɵɵconditionalCreate(17, AppComponent_Conditional_0_Conditional_17_Template, 32, 7)(18, AppComponent_Conditional_0_Conditional_18_Template, 6, 2);
    i0.ɵɵelementStart(19, "button", 13);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "button", 14);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.registerMode = !ctx_r1.registerMode; ctx_r1.error.set(""); return i0.ɵɵresetView(ctx_r1.notice.set("")); });
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24, "Clinical data is available only to authorized clinic staff.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.registerMode ? "Create patient account" : "Welcome back");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.registerMode ? "Register for future patient portal access." : "Sign in with your clinic credentials.");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.notice() ? 14 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.registerMode ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.registerMode ? 17 : 18);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Please wait\u2026" : ctx_r1.registerMode ? "Register" : "Sign in");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.registerMode ? "Already registered? Sign in" : "Need a patient account? Register");
} }
function AppComponent_Conditional_1_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_For_13_Template_button_click_0_listener() { const item_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView(item_r8.label)); });
    i0.ɵɵelementStart(1, "span", 45);
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
    i0.ɵɵtextInterpolate(item_r8.label);
} }
function AppComponent_Conditional_1_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_46_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.error(), " ");
} }
function AppComponent_Conditional_1_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_47_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.notice.set("")); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.notice(), " ");
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 48)(1, "p");
    i0.ɵɵtext(2, "Loading your records\u2026");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_48_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 49)(1, "div", 52)(2, "div")(3, "h2");
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
function AppComponent_Conditional_1_Conditional_48_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div")(8, "span", 55);
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
function AppComponent_Conditional_1_Conditional_48_ForEmpty_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No appointments found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "span", 55);
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
function AppComponent_Conditional_1_Conditional_48_ForEmpty_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No prescriptions found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 8);
    i0.ɵɵtext(3, "PATIENT PORTAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Your clinic profile, appointments, and prescriptions.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(8, AppComponent_Conditional_1_Conditional_48_Conditional_8_Template, 3, 0, "section", 48);
    i0.ɵɵconditionalCreate(9, AppComponent_Conditional_1_Conditional_48_Conditional_9_Template, 39, 10, "section", 49);
    i0.ɵɵelementStart(10, "div", 50)(11, "section", 51)(12, "div", 52)(13, "div")(14, "h2");
    i0.ɵɵtext(15, "My appointments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 53);
    i0.ɵɵrepeaterCreate(19, AppComponent_Conditional_1_Conditional_48_For_20_Template, 13, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_48_ForEmpty_21_Template, 2, 0, "div", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "section", 51)(23, "div", 52)(24, "div")(25, "h2");
    i0.ɵɵtext(26, "My prescriptions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "p");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 53);
    i0.ɵɵrepeaterCreate(30, AppComponent_Conditional_1_Conditional_48_For_31_Template, 12, 5, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_48_ForEmpty_32_Template, 2, 0, "div", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Welcome, ", ((tmp_2_0 = ctx_r1.patientProfile()) == null ? null : tmp_2_0.firstName) || ((tmp_2_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_2_0.firstName));
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
function AppComponent_Conditional_1_Conditional_49_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCreate("appointment")); });
    i0.ɵɵtext(1, "\uFF0B New appointment");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 58)(1, "span", 70);
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
function AppComponent_Conditional_1_Conditional_49_For_59_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_For_59_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const a_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.startConsultation(a_r17)); });
    i0.ɵɵtext(1, "Start consultation");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_For_59_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_For_59_Conditional_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const a_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail("appointment", a_r17.id)); });
    i0.ɵɵtext(1, "\u00B7\u00B7\u00B7");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_For_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 71)(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 72);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 73)(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span", 55);
    i0.ɵɵelement(12, "i");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_49_For_59_Conditional_14_Template, 2, 0, "button", 74)(15, AppComponent_Conditional_1_Conditional_49_For_59_Conditional_15_Template, 2, 0, "button", 75);
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
function AppComponent_Conditional_1_Conditional_49_ForEmpty_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No appointments today.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_For_70_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 78)(2, "span", 79);
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
    i0.ɵɵelementStart(11, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_For_70_Template_button_click_11_listener() { const p_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail("patient", p_r20.id)); });
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
function AppComponent_Conditional_1_Conditional_49_ForEmpty_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No recent patients.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 8);
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
    i0.ɵɵtemplate(10, AppComponent_Conditional_1_Conditional_49_button_10_Template, 2, 0, "button", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 57)(12, "article", 58)(13, "span", 59);
    i0.ɵɵtext(14, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div")(16, "small");
    i0.ɵɵtext(17, "Today's appointments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "article", 58)(21, "span", 60);
    i0.ɵɵtext(22, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div")(24, "small");
    i0.ɵɵtext(25, "Patients checked in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_1_Conditional_49_Conditional_28_Template, 10, 1, "article", 58);
    i0.ɵɵelementStart(29, "article", 58)(30, "span", 61);
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
    i0.ɵɵelementStart(39, "article", 58)(40, "span", 62);
    i0.ɵɵtext(41, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div")(43, "small");
    i0.ɵɵtext(44, "Prescriptions issued");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(47, "div", 63)(48, "section", 64)(49, "div", 52)(50, "div")(51, "h2");
    i0.ɵɵtext(52, "Today's schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "p");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "button", 65);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_49_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView("Appointments")); });
    i0.ɵɵtext(56, "View all \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 66);
    i0.ɵɵrepeaterCreate(58, AppComponent_Conditional_1_Conditional_49_For_59_Template, 16, 12, "article", 67, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_ForEmpty_60_Template, 2, 0, "div", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "aside", 51)(62, "div", 52)(63, "div")(64, "h2");
    i0.ɵɵtext(65, "Recently updated patients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "p");
    i0.ɵɵtext(67, "Live patient records");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(68, "div", 68);
    i0.ɵɵrepeaterCreate(69, AppComponent_Conditional_1_Conditional_49_For_70_Template, 13, 5, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_49_ForEmpty_71_Template, 2, 0, "div", 54);
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
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 15, i0.ɵɵpipeBind2(4, 12, (tmp_2_0 = ctx_r1.dashboard()) == null ? null : tmp_2_0.date, "EEEE, MMMM d")));
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
function AppComponent_Conditional_1_Conditional_50_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fullName(ctx), " ");
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Patient consultation ");
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const appointment_r22 = ctx;
    i0.ɵɵtextInterpolate2(" ", appointment_r22.visitType, " \u00B7 ", appointment_r22.purpose, " ");
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 86);
    i0.ɵɵtext(1, "Loading the patient record and clinical history\u2026");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 101);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editClinicalOverview()); });
    i0.ɵɵtext(1, "\u270E Update clinical information");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 102);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveClinicalOverview()); });
    i0.ɵɵelementStart(1, "label")(2, "span");
    i0.ɵɵtext(3, "Known allergies");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "textarea", 103);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template_textarea_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.clinicalOverviewForm.allergies, $event) || (ctx_r1.clinicalOverviewForm.allergies = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Enter \u201CNone known\u201D when the patient confirms no allergies.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label")(8, "span");
    i0.ɵɵtext(9, "Medical conditions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "textarea", 104);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template_textarea_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.clinicalOverviewForm.conditions, $event) || (ctx_r1.clinicalOverviewForm.conditions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12, "Include relevant chronic and active conditions.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 105)(14, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editingClinicalOverview.set(false)); });
    i0.ɵɵtext(15, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 107);
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
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : "Save clinical information");
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "article", 108)(2, "span");
    i0.ɵɵtext(3, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "KNOWN ALLERGIES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "article", 109)(10, "span");
    i0.ɵɵtext(11, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div")(13, "small");
    i0.ɵɵtext(14, "MEDICAL CONDITIONS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const patient_r26 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(patient_r26.allergies || "No allergies recorded");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(patient_r26.conditions || "No conditions recorded");
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_For_56_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(9, "span", 55);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r27 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, a_r27.scheduledAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r27.purpose);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r27.visitType, " \u00B7 Dr. ", ctx_r1.fullName(a_r27.doctor));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r27.status);
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 54);
    i0.ɵɵtext(1, "No previous appointments.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_For_71_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(9, "span", 55);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rx_r29 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, rx_r29.issuedAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", rx_r29.medication, " \u00B7 ", rx_r29.dosage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rx_r29.instructions);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(rx_r29.status);
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_72_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 99)(1, "span");
    i0.ɵɵtext(2, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "No prescriptions yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Add medication orders without leaving the consultation.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 110);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_72_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵtext(8, "Add first prescription");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_For_84_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(9, "span", 55);
    i0.ɵɵelement(10, "i");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r30 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, v_r30.dateAdministered, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(v_r30.vaccineName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", v_r30.dose, " \u00B7 ", v_r30.administeredBy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r30.status);
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 54);
    i0.ɵɵtext(1, "No vaccinations recorded.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_50_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 87)(1, "div", 88)(2, "span", 89);
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
    i0.ɵɵelementStart(32, "section", 90)(33, "header")(34, "div")(35, "span", 91);
    i0.ɵɵtext(36, "CLINICAL SAFETY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "h2");
    i0.ɵɵtext(38, "Clinical overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p");
    i0.ɵɵtext(40, "Keep important health information visible during the consultation.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(41, AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_41_Template, 2, 0, "button", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(42, AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_42_Template, 18, 4, "form", 93)(43, AppComponent_Conditional_1_Conditional_50_Conditional_26_Conditional_43_Template, 17, 2, "div", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 95)(45, "section", 96)(46, "header")(47, "div")(48, "span", 91);
    i0.ɵɵtext(49, "CARE TIMELINE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "h2");
    i0.ɵɵtext(51, "Visit history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "p");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "div");
    i0.ɵɵrepeaterCreate(55, AppComponent_Conditional_1_Conditional_50_Conditional_26_For_56_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_57_Template, 2, 0, "p", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "section", 97)(59, "header")(60, "div")(61, "span", 91);
    i0.ɵɵtext(62, "MEDICATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "h2");
    i0.ɵɵtext(64, "Prescription history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "p");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "button", 98);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Conditional_26_Template_button_click_67_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵtext(68, "\uFF0B Add prescription");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "div");
    i0.ɵɵrepeaterCreate(70, AppComponent_Conditional_1_Conditional_50_Conditional_26_For_71_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_72_Template, 9, 0, "div", 99);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "section", 100)(74, "header")(75, "div")(76, "span", 91);
    i0.ɵɵtext(77, "IMMUNIZATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "h2");
    i0.ɵɵtext(79, "Vaccination history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "p");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(82, "div");
    i0.ɵɵrepeaterCreate(83, AppComponent_Conditional_1_Conditional_50_Conditional_26_For_84_Template, 12, 8, "article", null, _forTrack1, false, AppComponent_Conditional_1_Conditional_50_Conditional_26_ForEmpty_85_Template, 2, 0, "p", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const patient_r26 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(patient_r26));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(patient_r26));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(patient_r26.sex || "Sex not recorded");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.ageWithMonths(patient_r26));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r26.mobileNumber || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r26.bloodType || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(patient_r26.homeAddress || "Not recorded");
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(!ctx_r1.editingClinicalOverview() ? 41 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editingClinicalOverview() ? 42 : 43);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r1.consultationAppointments().length, " appointment records");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.consultationAppointments());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r1.consultationPrescriptions().length, " medication records");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.consultationPrescriptions());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r1.consultationVaccines().length, " vaccination records");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.consultationVaccines());
} }
function AppComponent_Conditional_1_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "header", 80)(2, "div", 81)(3, "button", 82);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openView("Dashboard")); });
    i0.ɵɵtext(4, "\u2190 Back to dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 83);
    i0.ɵɵelement(6, "i");
    i0.ɵɵtext(7, "Active consultation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 84)(9, "div")(10, "span", 8);
    i0.ɵɵtext(11, "DOCTOR CONSULTATION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "h1");
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_1_Conditional_50_Conditional_13_Template, 1, 1)(14, AppComponent_Conditional_1_Conditional_50_Conditional_14_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵconditionalCreate(16, AppComponent_Conditional_1_Conditional_50_Conditional_16_Template, 1, 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 85);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_50_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addConsultationPrescription()); });
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "strong");
    i0.ɵɵtext(22, "Add prescription");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24, "Prescribe medication");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵconditionalCreate(25, AppComponent_Conditional_1_Conditional_50_Conditional_25_Template, 2, 0, "section", 86);
    i0.ɵɵconditionalCreate(26, AppComponent_Conditional_1_Conditional_50_Conditional_26_Template, 86, 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(13);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.consultationPatient()) ? 13 : 14, tmp_2_0);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_3_0 = ctx_r1.consultationAppointment()) ? 16 : -1, tmp_3_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.consultationPatient());
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.loading() ? 25 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_6_0 = ctx_r1.consultationPatient()) ? 26 : -1, tmp_6_0);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, "CLINIC WORKSPACE");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCreate(ctx_r1.view() === "Appointments" ? "appointment" : ctx_r1.view() === "Patients" ? "patient" : ctx_r1.view() === "Prescriptions" ? "prescription" : ctx_r1.view() === "Vaccinations" ? "vaccine" : "user")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\uFF0B Add ", ctx_r1.view() === "Vaccinations" ? "vaccination" : ctx_r1.view().slice(0, -1).toLowerCase());
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "Loading\u2026");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 119);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const a_r33 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(a_r33, "appointment")); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 115)(1, "div", 78)(2, "span", 72);
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
    i0.ɵɵelementStart(12, "select", 116);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Template_select_ngModelChange_12_listener($event) { const a_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.status(a_r33, $event)); });
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
    i0.ɵɵelementStart(23, "div", 117)(24, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Template_button_click_24_listener() { const a_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("appointment", a_r33.id)); });
    i0.ɵɵtext(25, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Template_button_click_26_listener() { const a_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.edit(a_r33, "appointment"); return i0.ɵɵresetView(ctx_r1.ensureReferences); });
    i0.ɵɵtext(27, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Conditional_28_Template, 2, 0, "button", 118);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r33 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(a_r33.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(a_r33.patient));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(9, 7, a_r33.scheduledAt, "medium"), " \u00B7 ", a_r33.purpose);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(a_r33.doctor));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModel", a_r33.status);
    i0.ɵɵadvance(16);
    i0.ɵɵconditional(ctx_r1.canCreate("Appointments") && a_r33.status !== "CANCELLED" ? 28 : -1);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_10_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No appointments found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 114)(1, "span");
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
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_Conditional_51_Conditional_10_For_10_Template, 29, 10, "article", 115, _forTrack1, false, AppComponent_Conditional_1_Conditional_51_Conditional_10_ForEmpty_11_Template, 2, 0, "div", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.visibleAppointments());
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 119);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Conditional_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const p_r36 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(p_r36, "patient")); });
    i0.ɵɵtext(1, "Delete");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 121)(1, "div", 78)(2, "span", 79);
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
    i0.ɵɵelementStart(11, "small", 122);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 117)(16, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Template_button_click_16_listener() { const p_r36 = i0.ɵɵrestoreView(_r35).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("patient", p_r36.id)); });
    i0.ɵɵtext(17, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Template_button_click_18_listener() { const p_r36 = i0.ɵɵrestoreView(_r35).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(p_r36, "patient")); });
    i0.ɵɵtext(19, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(20, AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Conditional_20_Template, 2, 0, "button", 118);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r36 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(p_r36));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r36));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", p_r36.patientId, " \u00B7 ", ctx_r1.age(p_r36), " years \u00B7 ", p_r36.sex || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r36.conditions || "No conditions");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Allergies: ", p_r36.allergies || "None recorded");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r36.mobileNumber || p_r36.emailAddress || "\u2014");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.auth.role() === "ADMIN" ? 20 : -1);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_11_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No patients found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120)(1, "span");
    i0.ɵɵtext(2, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Clinical summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_Conditional_51_Conditional_11_For_10_Template, 21, 9, "article", 121, _forTrack1, false, AppComponent_Conditional_1_Conditional_51_Conditional_11_ForEmpty_11_Template, 2, 0, "div", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.visiblePatients());
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const rx_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate2(" \u00B7 ", rx_r39.refills, " refill", rx_r39.refills === 1 ? "" : "s");
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 124)(1, "div", 78)(2, "span", 125);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Prescription record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 126)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Conditional_14_Template, 1, 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span", 127);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "time");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 55);
    i0.ɵɵelement(23, "i");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 117)(26, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Template_button_click_26_listener() { const rx_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("prescription", rx_r39.id)); });
    i0.ɵɵtext(27, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Template_button_click_28_listener() { const rx_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(rx_r39, "prescription")); });
    i0.ɵɵtext(29, "Edit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const rx_r39 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(rx_r39.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(rx_r39.patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(rx_r39.medication);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", rx_r39.dosage, " \u00B7 Qty ", rx_r39.quantity);
    i0.ɵɵadvance();
    i0.ɵɵconditional(rx_r39.refills ? 14 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rx_r39.instructions);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(rx_r39.doctor));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 10, rx_r39.issuedAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rx_r39.status);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_12_ForEmpty_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No prescriptions found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 123)(1, "span");
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
    i0.ɵɵrepeaterCreate(15, AppComponent_Conditional_1_Conditional_51_Conditional_12_For_16_Template, 30, 13, "article", 124, _forTrack1, false, AppComponent_Conditional_1_Conditional_51_Conditional_12_ForEmpty_17_Template, 2, 0, "div", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r1.visiblePrescriptions());
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_13_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 129)(1, "div", 78)(2, "span", 130);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Patient vaccination record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 131)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 132);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "time");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 55);
    i0.ɵɵelement(20, "i");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 117)(23, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_13_For_16_Template_button_click_23_listener() { const v_r41 = i0.ɵɵrestoreView(_r40).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail("vaccine", v_r41.id)); });
    i0.ɵɵtext(24, "View");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const v_r41 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(v_r41.patient));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(v_r41.patient));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(v_r41.vaccineName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r41.dose);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 7, v_r41.dateAdministered, "mediumDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r41.administeredBy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r41.status);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_13_ForEmpty_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No vaccinations found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128)(1, "span");
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
    i0.ɵɵrepeaterCreate(15, AppComponent_Conditional_1_Conditional_51_Conditional_13_For_16_Template, 25, 10, "article", 129, _forTrack1, false, AppComponent_Conditional_1_Conditional_51_Conditional_13_ForEmpty_17_Template, 2, 0, "div", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r1.visibleVaccines());
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 119);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r44); const u_r43 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.remove(u_r43, "user")); });
    i0.ɵɵtext(1, "Deactivate");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 134)(1, "div", 78)(2, "span", 33);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "span", 40);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 135);
    i0.ɵɵelement(12, "i");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 117)(15, "button", 46);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Template_button_click_15_listener() { const u_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.edit(u_r43, "user")); });
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Conditional_17_Template, 2, 0, "button", 118);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r43 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(u_r43));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(u_r43));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r43.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.roleLabel(u_r43.role));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("inactive", !u_r43.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r43.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(u_r43.isActive ? 17 : -1);
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_14_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1, "No users found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_1_Conditional_51_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 133)(1, "span");
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
    i0.ɵɵrepeaterCreate(9, AppComponent_Conditional_1_Conditional_51_Conditional_14_For_10_Template, 18, 8, "article", 134, _forTrack1, false, AppComponent_Conditional_1_Conditional_51_Conditional_14_ForEmpty_11_Template, 2, 0, "div", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.visibleUsers());
} }
function AppComponent_Conditional_1_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 111)(1, "div");
    i0.ɵɵconditionalCreate(2, AppComponent_Conditional_1_Conditional_51_Conditional_2_Template, 2, 0, "p", 8);
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Live records synchronized with the backend API.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, AppComponent_Conditional_1_Conditional_51_Conditional_7_Template, 2, 1, "button", 112);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "section", 113);
    i0.ɵɵconditionalCreate(9, AppComponent_Conditional_1_Conditional_51_Conditional_9_Template, 2, 0, "div", 54);
    i0.ɵɵconditionalCreate(10, AppComponent_Conditional_1_Conditional_51_Conditional_10_Template, 12, 1);
    i0.ɵɵconditionalCreate(11, AppComponent_Conditional_1_Conditional_51_Conditional_11_Template, 12, 1);
    i0.ɵɵconditionalCreate(12, AppComponent_Conditional_1_Conditional_51_Conditional_12_Template, 18, 1);
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_1_Conditional_51_Conditional_13_Template, 18, 1);
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_1_Conditional_51_Conditional_14_Template, 12, 1);
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
    i0.ɵɵelementStart(0, "div", 1)(1, "aside", 26)(2, "div", 6)(3, "span", 7);
    i0.ɵɵtext(4, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "ACB Clinic");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 27);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showMobileNav.set(false)); });
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nav")(10, "p", 28);
    i0.ɵɵtext(11, "WORKSPACE");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(12, AppComponent_Conditional_1_For_13_Template, 4, 4, "button", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 30)(15, "span", 31);
    i0.ɵɵtext(16, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div")(18, "strong");
    i0.ɵɵtext(19, "API connected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "small");
    i0.ɵɵtext(21, "localhost:3000/api/v1");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 32)(23, "span", 33);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div")(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "small");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "button", 34);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(31, "\u21AA");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "main")(33, "header", 35)(34, "button", 36);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showMobileNav.set(true)); });
    i0.ɵɵtext(35, "\u2630");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 37)(37, "span");
    i0.ɵɵtext(38, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 38);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_1_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 39)(41, "span", 40);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 41);
    i0.ɵɵlistener("click", function AppComponent_Conditional_1_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(44, "Log out");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "section", 42);
    i0.ɵɵconditionalCreate(46, AppComponent_Conditional_1_Conditional_46_Template, 4, 1, "div", 9);
    i0.ɵɵconditionalCreate(47, AppComponent_Conditional_1_Conditional_47_Template, 4, 1, "div", 10);
    i0.ɵɵconditionalCreate(48, AppComponent_Conditional_1_Conditional_48_Template, 33, 7)(49, AppComponent_Conditional_1_Conditional_49_Template, 72, 19)(50, AppComponent_Conditional_1_Conditional_50_Template, 27, 5, "div", 43)(51, AppComponent_Conditional_1_Conditional_51_Template, 15, 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("mobile-open", ctx_r1.showMobileNav());
    i0.ɵɵadvance(11);
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
    i0.ɵɵconditional(ctx_r1.error() ? 46 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.notice() ? 47 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.role() === "PATIENT" ? 48 : ctx_r1.view() === "Dashboard" ? 49 : ctx_r1.view() === "Consultation" ? 50 : 51);
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
    i0.ɵɵelementStart(0, "option", 146);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r46 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", p_r46.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r46));
} }
function AppComponent_Conditional_2_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "No patients available.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_2_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 146);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r47 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", d_r47.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Dr. ", ctx_r1.fullName(d_r47));
} }
function AppComponent_Conditional_2_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 148);
    i0.ɵɵtext(1, "No active doctors found.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_2_Conditional_110_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 155)(1, "label");
    i0.ɵɵtext(2, "Status");
    i0.ɵɵelementStart(3, "select", 159);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Conditional_110_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.status, $event) || (ctx_r1.appointmentForm.status = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵelementStart(16, "textarea", 160);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Conditional_110_Template_textarea_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.notes, $event) || (ctx_r1.appointmentForm.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.status);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.notes);
} }
function AppComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "section", 136)(2, "header", 137)(3, "div", 138);
    i0.ɵɵtext(4, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 139);
    i0.ɵɵtext(7, "APPOINTMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 140);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(11, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_2_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("appointment")); });
    i0.ɵɵconditionalCreate(13, AppComponent_Conditional_2_Conditional_13_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(14, "section", 142)(15, "div", 143)(16, "span");
    i0.ɵɵtext(17, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div")(19, "h3");
    i0.ɵɵtext(20, "Patient & doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵtext(22, "Select who the visit is for and the assigned physician");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 144)(24, "label")(25, "span");
    i0.ɵɵtext(26, "Patient ");
    i0.ɵɵelementStart(27, "em");
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "select", 145);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.patientId, $event) || (ctx_r1.appointmentForm.patientId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(30, "option", 20);
    i0.ɵɵtext(31, "Select a patient");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(32, AppComponent_Conditional_2_For_33_Template, 2, 2, "option", 146, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(34, AppComponent_Conditional_2_Conditional_34_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "label")(36, "span");
    i0.ɵɵtext(37, "Doctor ");
    i0.ɵɵelementStart(38, "em");
    i0.ɵɵtext(39, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "select", 147);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.assignedDoctorId, $event) || (ctx_r1.appointmentForm.assignedDoctorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(41, "option", 20);
    i0.ɵɵtext(42, "Select a doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, AppComponent_Conditional_2_For_44_Template, 2, 2, "option", 146, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(45, AppComponent_Conditional_2_Conditional_45_Template, 2, 0, "small", 148);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "section", 142)(47, "div", 143)(48, "span");
    i0.ɵɵtext(49, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div")(51, "h3");
    i0.ɵɵtext(52, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "p");
    i0.ɵɵtext(54, "Choose the date, time, and type of visit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(55, "div", 149)(56, "label")(57, "span");
    i0.ɵɵtext(58, "Date ");
    i0.ɵɵelementStart(59, "em");
    i0.ɵɵtext(60, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "input", 150);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.date, $event) || (ctx_r1.appointmentForm.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "label")(63, "span");
    i0.ɵɵtext(64, "Time ");
    i0.ɵɵelementStart(65, "em");
    i0.ɵɵtext(66, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "input", 151);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.time, $event) || (ctx_r1.appointmentForm.time = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "label")(69, "span");
    i0.ɵɵtext(70, "Visit type ");
    i0.ɵɵelementStart(71, "em");
    i0.ɵɵtext(72, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "select", 152);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_select_ngModelChange_73_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.visitType, $event) || (ctx_r1.appointmentForm.visitType = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵelementStart(94, "section", 142)(95, "div", 143)(96, "span");
    i0.ɵɵtext(97, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "div")(99, "h3");
    i0.ɵɵtext(100, "Visit details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "p");
    i0.ɵɵtext(102, "Add context for the receiving care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(103, "div", 153)(104, "label")(105, "span");
    i0.ɵɵtext(106, "Purpose ");
    i0.ɵɵelementStart(107, "em");
    i0.ɵɵtext(108, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(109, "textarea", 154);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_2_Template_textarea_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.appointmentForm.purpose, $event) || (ctx_r1.appointmentForm.purpose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(110, AppComponent_Conditional_2_Conditional_110_Template, 17, 2, "div", 155);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(111, "footer", 156)(112, "div")(113, "span", 157);
    i0.ɵɵtext(114, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "small");
    i0.ɵɵtext(116, "The doctor\u2019s schedule will be checked for conflicts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(117, "div")(118, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_2_Template_button_click_118_listener() { i0.ɵɵrestoreView(_r45); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(119, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "button", 158);
    i0.ɵɵtext(121);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selected() ? "Edit appointment" : "Book appointment");
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
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.time);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.visitType);
    i0.ɵɵadvance(36);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.appointmentForm.purpose);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selected() ? 110 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading() || !ctx_r1.doctors().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Book appointment");
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
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "section", 161)(2, "header", 162)(3, "div", 163);
    i0.ɵɵtext(4, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 139);
    i0.ɵɵtext(7, "PATIENT RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 164);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, AppComponent_Conditional_3_Conditional_10_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_3_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(12, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_3_Template_form_ngSubmit_13_listener() { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("patient")); });
    i0.ɵɵconditionalCreate(14, AppComponent_Conditional_3_Conditional_14_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(15, "section", 165)(16, "div", 143)(17, "span");
    i0.ɵɵtext(18, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "h3");
    i0.ɵɵtext(21, "Personal information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23, "Identity and demographic details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 166)(25, "label")(26, "span");
    i0.ɵɵtext(27, "First name ");
    i0.ɵɵelementStart(28, "em");
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "input", 167);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.firstName, $event) || (ctx_r1.patientForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "label")(32, "span");
    i0.ɵɵtext(33, "Last name ");
    i0.ɵɵelementStart(34, "em");
    i0.ɵɵtext(35, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "input", 168);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.lastName, $event) || (ctx_r1.patientForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Date of birth ");
    i0.ɵɵelementStart(40, "em");
    i0.ɵɵtext(41, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "input", 169);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.dateOfBirth, $event) || (ctx_r1.patientForm.dateOfBirth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "label");
    i0.ɵɵtext(44, "Sex");
    i0.ɵɵelementStart(45, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.sex, $event) || (ctx_r1.patientForm.sex = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵelementStart(56, "select", 170);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.bloodType, $event) || (ctx_r1.patientForm.bloodType = $event); return i0.ɵɵresetView($event); });
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
    i0.ɵɵelementStart(75, "section", 165)(76, "div", 143)(77, "span");
    i0.ɵɵtext(78, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "div")(80, "h3");
    i0.ɵɵtext(81, "Contact & coverage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "p");
    i0.ɵɵtext(83, "Ways to reach the patient");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(84, "div", 171)(85, "label");
    i0.ɵɵtext(86, "Mobile number");
    i0.ɵɵelementStart(87, "input", 172);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_87_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.mobileNumber, $event) || (ctx_r1.patientForm.mobileNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "label");
    i0.ɵɵtext(89, "Email address");
    i0.ɵɵelementStart(90, "input", 173);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_90_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emailAddress, $event) || (ctx_r1.patientForm.emailAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "label");
    i0.ɵɵtext(92, "PhilHealth ID");
    i0.ɵɵelementStart(93, "input", 174);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_93_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.philHealthInsuranceId, $event) || (ctx_r1.patientForm.philHealthInsuranceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(94, "label", 175);
    i0.ɵɵtext(95, "Home address");
    i0.ɵɵelementStart(96, "input", 176);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_96_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.homeAddress, $event) || (ctx_r1.patientForm.homeAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(97, "section", 165)(98, "div", 143)(99, "span");
    i0.ɵɵtext(100, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "div")(102, "h3");
    i0.ɵɵtext(103, "Emergency contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "p");
    i0.ɵɵtext(105, "Contact in case of urgent care");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(106, "div", 177)(107, "label");
    i0.ɵɵtext(108, "Contact name");
    i0.ɵɵelementStart(109, "input", 178);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactName, $event) || (ctx_r1.patientForm.emergencyContactName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(110, "label");
    i0.ɵɵtext(111, "Relationship");
    i0.ɵɵelementStart(112, "select", 179);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_select_ngModelChange_112_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactRelationship, $event) || (ctx_r1.patientForm.emergencyContactRelationship = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(113, "option", 20);
    i0.ɵɵtext(114, "Select relationship");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "optgroup", 180)(116, "option");
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
    i0.ɵɵelementStart(134, "optgroup", 181)(135, "option");
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
    i0.ɵɵelementStart(151, "optgroup", 182)(152, "option");
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
    i0.ɵɵelementStart(166, "input", 183);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_input_ngModelChange_166_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.emergencyContactNumber, $event) || (ctx_r1.patientForm.emergencyContactNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(167, "section", 184)(168, "div", 143)(169, "span");
    i0.ɵɵtext(170, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(171, "div")(172, "h3");
    i0.ɵɵtext(173, "Clinical overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(174, "p");
    i0.ɵɵtext(175, "Important information visible to the care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(176, "div", 185)(177, "label");
    i0.ɵɵtext(178, "Known allergies");
    i0.ɵɵelementStart(179, "textarea", 186);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_textarea_ngModelChange_179_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.allergies, $event) || (ctx_r1.patientForm.allergies = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(180, "label");
    i0.ɵɵtext(181, "Medical conditions");
    i0.ɵɵelementStart(182, "textarea", 187);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_3_Template_textarea_ngModelChange_182_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.patientForm.conditions, $event) || (ctx_r1.patientForm.conditions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(183, "footer", 188)(184, "div")(185, "span", 157);
    i0.ɵɵtext(186, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(187, "small");
    i0.ɵɵtext(188, "Stored securely in the patient record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(189, "div")(190, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_3_Template_button_click_190_listener() { i0.ɵɵrestoreView(_r49); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(191, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(192, "button", 158);
    i0.ɵɵtext(193);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selected() ? "Edit patient" : "Register new patient");
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
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Register patient");
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
    i0.ɵɵelement(0, "option", 146);
} if (rf & 2) {
    const p_r51 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r1.fullName(p_r51));
} }
function AppComponent_Conditional_4_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 199);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patient_r52 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("\u2713 ", ctx_r1.fullName(patient_r52), " selected \u00B7 Allergies: ", patient_r52.allergies || "none recorded");
} }
function AppComponent_Conditional_4_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 148);
    i0.ɵɵtext(1, "Choose a matching patient from the suggestions.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_4_Conditional_68_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 210)(1, "header")(2, "div")(3, "span", 212);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "strong");
    i0.ɵɵtext(7, "Additional medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 213);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Conditional_68_For_2_Template_button_click_10_listener() { const $index_r55 = i0.ɵɵrestoreView(_r54).$index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removeMedication($index_r55)); });
    i0.ɵɵtext(11, "Remove");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 200)(13, "label")(14, "span");
    i0.ɵɵtext(15, "Medication ");
    i0.ɵɵelementStart(16, "em");
    i0.ɵɵtext(17, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 214);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_18_listener($event) { const medication_r56 = i0.ɵɵrestoreView(_r54).$implicit; i0.ɵɵtwoWayBindingSet(medication_r56.medication, $event) || (medication_r56.medication = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Dosage ");
    i0.ɵɵelementStart(22, "em");
    i0.ɵɵtext(23, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "input", 215);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_24_listener($event) { const medication_r56 = i0.ɵɵrestoreView(_r54).$implicit; i0.ɵɵtwoWayBindingSet(medication_r56.dosage, $event) || (medication_r56.dosage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "label")(26, "span");
    i0.ɵɵtext(27, "Quantity ");
    i0.ɵɵelementStart(28, "em");
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "input", 216);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_30_listener($event) { const medication_r56 = i0.ɵɵrestoreView(_r54).$implicit; i0.ɵɵtwoWayBindingSet(medication_r56.quantity, $event) || (medication_r56.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "label");
    i0.ɵɵtext(32, "Refills");
    i0.ɵɵelementStart(33, "input", 217);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_input_ngModelChange_33_listener($event) { const medication_r56 = i0.ɵɵrestoreView(_r54).$implicit; i0.ɵɵtwoWayBindingSet(medication_r56.refills, $event) || (medication_r56.refills = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "label", 218)(35, "span");
    i0.ɵɵtext(36, "Patient instructions ");
    i0.ɵɵelementStart(37, "em");
    i0.ɵɵtext(38, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "textarea", 219);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_68_For_2_Template_textarea_ngModelChange_39_listener($event) { const medication_r56 = i0.ɵɵrestoreView(_r54).$implicit; i0.ɵɵtwoWayBindingSet(medication_r56.instructions, $event) || (medication_r56.instructions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const medication_r56 = ctx.$implicit;
    const $index_r55 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate($index_r55 + 2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Medication ", $index_r55 + 2, " of ", ctx_r1.additionalMedications.length + 1);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("name", "extraMedication" + $index_r55);
    i0.ɵɵtwoWayProperty("ngModel", medication_r56.medication);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraDosage" + $index_r55);
    i0.ɵɵtwoWayProperty("ngModel", medication_r56.dosage);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraQuantity" + $index_r55);
    i0.ɵɵtwoWayProperty("ngModel", medication_r56.quantity);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "extraRefills" + $index_r55);
    i0.ɵɵtwoWayProperty("ngModel", medication_r56.refills);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "extraInstructions" + $index_r55);
    i0.ɵɵtwoWayProperty("ngModel", medication_r56.instructions);
} }
function AppComponent_Conditional_4_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 205);
    i0.ɵɵrepeaterCreate(1, AppComponent_Conditional_4_Conditional_68_For_2_Template, 40, 13, "article", 210, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementStart(3, "button", 211);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Conditional_68_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addMedication()); });
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
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementStart(2, "select", 220);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Conditional_88_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.status, $event) || (ctx_r1.prescriptionForm.status = $event); return i0.ɵɵresetView($event); });
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
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 189)(2, "header", 190)(3, "div", 191);
    i0.ɵɵtext(4, "Rx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 192);
    i0.ɵɵtext(7, "MEDICATION ORDER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 193);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Document medication details and safe-use instructions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_4_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("prescription")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_4_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 194)(17, "div", 195)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Patient");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Confirm identity and review allergy status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 196)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Patient ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 197);
    i0.ɵɵlistener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolvePrescriptionPatient($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "datalist", 198);
    i0.ɵɵrepeaterCreate(33, AppComponent_Conditional_4_For_34_Template, 1, 1, "option", 146, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(35, AppComponent_Conditional_4_Conditional_35_Template, 2, 2, "small", 199)(36, AppComponent_Conditional_4_Conditional_36_Template, 2, 0, "small", 148);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "section", 194)(38, "div", 195)(39, "span");
    i0.ɵɵtext(40, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div")(42, "h3");
    i0.ɵɵtext(43, "Medication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45, "Drug, dose, and dispensing quantity");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 200)(47, "label")(48, "span");
    i0.ɵɵtext(49, "Medication ");
    i0.ɵɵelementStart(50, "em");
    i0.ɵɵtext(51, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "input", 201);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.medication, $event) || (ctx_r1.prescriptionForm.medication = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Dosage ");
    i0.ɵɵelementStart(56, "em");
    i0.ɵɵtext(57, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "input", 202);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_58_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.dosage, $event) || (ctx_r1.prescriptionForm.dosage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "label")(60, "span");
    i0.ɵɵtext(61, "Quantity ");
    i0.ɵɵelementStart(62, "em");
    i0.ɵɵtext(63, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "input", 203);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.quantity, $event) || (ctx_r1.prescriptionForm.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "label");
    i0.ɵɵtext(66, "Refills");
    i0.ɵɵelementStart(67, "input", 204);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.refills, $event) || (ctx_r1.prescriptionForm.refills = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(68, AppComponent_Conditional_4_Conditional_68_Template, 11, 0, "div", 205);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "section", 194)(70, "div", 195)(71, "span");
    i0.ɵɵtext(72, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "div")(74, "h3");
    i0.ɵɵtext(75, "Directions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "p");
    i0.ɵɵtext(77, "Clear instructions for the patient and care team");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(78, "div", 206)(79, "label")(80, "span");
    i0.ɵɵtext(81, "Patient instructions ");
    i0.ɵɵelementStart(82, "em");
    i0.ɵɵtext(83, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "textarea", 207);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_textarea_ngModelChange_84_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.instructions, $event) || (ctx_r1.prescriptionForm.instructions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "label");
    i0.ɵɵtext(86, "Clinical notes");
    i0.ɵɵelementStart(87, "textarea", 208);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_4_Template_textarea_ngModelChange_87_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prescriptionForm.notes, $event) || (ctx_r1.prescriptionForm.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(88, AppComponent_Conditional_4_Conditional_88_Template, 9, 1, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "footer", 209)(90, "div")(91, "span", 157);
    i0.ɵɵtext(92, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "small");
    i0.ɵɵtext(94, "Review allergies and dosage before saving");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(95, "div")(96, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_4_Template_button_click_96_listener() { i0.ɵɵrestoreView(_r50); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(97, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "button", 158);
    i0.ɵɵtext(99);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selected() ? "Edit prescription" : "New prescription");
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
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Save prescription");
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
function AppComponent_Conditional_5_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 146);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r59 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", p_r59.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fullName(p_r59));
} }
function AppComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 221)(2, "header", 190)(3, "div", 222);
    i0.ɵɵtext(4, "\u271A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 192);
    i0.ɵɵtext(7, "IMMUNIZATION RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 223);
    i0.ɵɵtext(9, "Add vaccination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Record administration and vaccine traceability details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_5_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("vaccine")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_5_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 194)(17, "div", 195)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Patient & vaccine");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Select the recipient and administered vaccine");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 206)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Patient ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "select", 224);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.patientId, $event) || (ctx_r1.vaccineForm.patientId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 20);
    i0.ɵɵtext(33, "Select a patient");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(34, AppComponent_Conditional_5_For_35_Template, 2, 2, "option", 146, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label")(37, "span");
    i0.ɵɵtext(38, "Vaccine ");
    i0.ɵɵelementStart(39, "em");
    i0.ɵɵtext(40, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "input", 225);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.vaccineName, $event) || (ctx_r1.vaccineForm.vaccineName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "label")(43, "span");
    i0.ɵɵtext(44, "Dose ");
    i0.ɵɵelementStart(45, "em");
    i0.ɵɵtext(46, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "input", 226);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.dose, $event) || (ctx_r1.vaccineForm.dose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "label")(49, "span");
    i0.ɵɵtext(50, "Status ");
    i0.ɵɵelementStart(51, "em");
    i0.ɵɵtext(52, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "select", 227);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_select_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.status, $event) || (ctx_r1.vaccineForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(54, "option");
    i0.ɵɵtext(55, "COMPLETED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option");
    i0.ɵɵtext(57, "SCHEDULED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option");
    i0.ɵɵtext(59, "DEFERRED");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(60, "section", 194)(61, "div", 195)(62, "span");
    i0.ɵɵtext(63, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div")(65, "h3");
    i0.ɵɵtext(66, "Administration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "p");
    i0.ɵɵtext(68, "When and by whom the vaccine was given");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "div", 206)(70, "label")(71, "span");
    i0.ɵɵtext(72, "Date administered ");
    i0.ɵɵelementStart(73, "em");
    i0.ɵɵtext(74, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "input", 228);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_75_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.dateAdministered, $event) || (ctx_r1.vaccineForm.dateAdministered = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(76, "label")(77, "span");
    i0.ɵɵtext(78, "Administered by ");
    i0.ɵɵelementStart(79, "em");
    i0.ɵɵtext(80, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "input", 229);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_81_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.administeredBy, $event) || (ctx_r1.vaccineForm.administeredBy = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(82, "section", 194)(83, "div", 195)(84, "span");
    i0.ɵɵtext(85, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "div")(87, "h3");
    i0.ɵɵtext(88, "Traceability");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "p");
    i0.ɵɵtext(90, "Manufacturer and batch information");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(91, "div", 206)(92, "label");
    i0.ɵɵtext(93, "Manufacturer");
    i0.ɵɵelementStart(94, "input", 230);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_94_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.manufacturer, $event) || (ctx_r1.vaccineForm.manufacturer = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(95, "label");
    i0.ɵɵtext(96, "Lot number");
    i0.ɵɵelementStart(97, "input", 231);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_5_Template_input_ngModelChange_97_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vaccineForm.lotNumber, $event) || (ctx_r1.vaccineForm.lotNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(98, "footer", 209)(99, "div")(100, "span", 157);
    i0.ɵɵtext(101, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "small");
    i0.ɵɵtext(103, "This record becomes part of the patient\u2019s immunization history");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(104, "div")(105, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_5_Template_button_click_105_listener() { i0.ɵɵrestoreView(_r58); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(106, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "button", 158);
    i0.ɵɵtext(108);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r1.error() ? 15 : -1);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.patientId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.patients());
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.vaccineName);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.dose);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.status);
    i0.ɵɵadvance(22);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.dateAdministered);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.administeredBy);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.manufacturer);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vaccineForm.lotNumber);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : "Save vaccination");
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
function AppComponent_Conditional_6_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Account status");
    i0.ɵɵelementStart(2, "select", 245);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Conditional_70_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.isActive, $event) || (ctx_r1.userForm.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(3, "option", 246);
    i0.ɵɵtext(4, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 246);
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
function AppComponent_Conditional_6_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 194)(1, "div", 195)(2, "span");
    i0.ɵɵtext(3, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h3");
    i0.ɵɵtext(6, "Temporary access");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Set the initial sign-in credentials");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 206)(10, "label")(11, "span");
    i0.ɵɵtext(12, "Temporary password ");
    i0.ɵɵelementStart(13, "em");
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "input", 247);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Conditional_71_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.password, $event) || (ctx_r1.userForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Use at least 8 characters.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Confirm password ");
    i0.ɵɵelementStart(21, "em");
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 248);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Conditional_71_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.confirmPassword, $event) || (ctx_r1.userForm.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p", 249);
    i0.ɵɵtext(25, "Share the temporary password through a secure channel.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.password);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userForm.confirmPassword);
} }
function AppComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 232)(2, "header", 190)(3, "div", 233);
    i0.ɵɵtext(4, "\u2659");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 192);
    i0.ɵɵtext(7, "ACCESS MANAGEMENT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 234);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_6_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "form", 11);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_6_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save("user")); });
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_6_Conditional_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "section", 194)(17, "div", 195)(18, "span");
    i0.ɵɵtext(19, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "h3");
    i0.ɵɵtext(22, "Account identity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "Name and sign-in email address");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 206)(26, "label")(27, "span");
    i0.ɵɵtext(28, "First name ");
    i0.ɵɵelementStart(29, "em");
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 235);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.firstName, $event) || (ctx_r1.userForm.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "label")(33, "span");
    i0.ɵɵtext(34, "Last name ");
    i0.ɵɵelementStart(35, "em");
    i0.ɵɵtext(36, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "input", 236);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.lastName, $event) || (ctx_r1.userForm.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "label", 237)(39, "span");
    i0.ɵɵtext(40, "Email address ");
    i0.ɵɵelementStart(41, "em");
    i0.ɵɵtext(42, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "input", 238);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.email, $event) || (ctx_r1.userForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "section", 194)(45, "div", 195)(46, "span");
    i0.ɵɵtext(47, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div")(49, "h3");
    i0.ɵɵtext(50, "Access level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, "Role and account availability");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 206)(54, "label")(55, "span");
    i0.ɵɵtext(56, "Role ");
    i0.ɵɵelementStart(57, "em");
    i0.ɵɵtext(58, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "select", 239);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_6_Template_select_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userForm.role, $event) || (ctx_r1.userForm.role = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(60, "option", 240);
    i0.ɵɵtext(61, "Administrator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 241);
    i0.ɵɵtext(63, "Doctor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 242);
    i0.ɵɵtext(65, "Nurse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option", 243);
    i0.ɵɵtext(67, "Secretary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "option", 244);
    i0.ɵɵtext(69, "Patient");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(70, AppComponent_Conditional_6_Conditional_70_Template, 7, 3, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(71, AppComponent_Conditional_6_Conditional_71_Template, 26, 2, "section", 194);
    i0.ɵɵelementStart(72, "footer", 209)(73, "div")(74, "span", 157);
    i0.ɵɵtext(75, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "small");
    i0.ɵɵtext(77, "Role permissions are enforced by the backend");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div")(79, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_6_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.modal.set(null); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(80, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "button", 158);
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.selected() ? "Edit user" : "Register new user");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selected() ? "Update account information and permissions" : "Create a secure clinic workspace account");
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
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Saving\u2026" : ctx_r1.selected() ? "Save changes" : "Create user");
} }
function AppComponent_Conditional_7_Conditional_0_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.selected().emergencyContactRelationship, " \u00B7 ");
} }
function AppComponent_Conditional_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 250)(1, "section", 251)(2, "header", 252)(3, "div", 253);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 139);
    i0.ɵɵtext(7, "PATIENT PROFILE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 254);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Clinical and contact information");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 255)(15, "section", 256)(16, "div", 257)(17, "span");
    i0.ɵɵtext(18, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "h3");
    i0.ɵɵtext(21, "Personal information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23, "Demographics and care identifiers");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "dl", 258)(25, "div")(26, "dt");
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
    i0.ɵɵelementStart(51, "section", 256)(52, "div", 257)(53, "span");
    i0.ɵɵtext(54, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div")(56, "h3");
    i0.ɵɵtext(57, "Contact details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "p");
    i0.ɵɵtext(59, "Patient and emergency contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "div", 259)(61, "dl", 258)(62, "div")(63, "dt");
    i0.ɵɵtext(64, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "dd");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div")(68, "dt");
    i0.ɵɵtext(69, "Email address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "dd");
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div", 260)(73, "dt");
    i0.ɵɵtext(74, "Home address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "dd");
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(77, "aside", 261)(78, "span");
    i0.ɵɵtext(79, "Emergency contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "strong");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "p");
    i0.ɵɵconditionalCreate(83, AppComponent_Conditional_7_Conditional_0_Conditional_83_Template, 2, 1, "span");
    i0.ɵɵtext(84);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(85, "section", 262)(86, "div", 257)(87, "span");
    i0.ɵɵtext(88, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "div")(90, "h3");
    i0.ɵɵtext(91, "Clinical overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "p");
    i0.ɵɵtext(93, "Information requiring care-team attention");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(94, "div", 263)(95, "article", 264)(96, "span");
    i0.ɵɵtext(97, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "div")(99, "small");
    i0.ɵɵtext(100, "KNOWN ALLERGIES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "strong");
    i0.ɵɵtext(102);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(103, "article", 265)(104, "span");
    i0.ɵɵtext(105, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "div")(107, "small");
    i0.ɵɵtext(108, "MEDICAL CONDITIONS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "strong");
    i0.ɵɵtext(110);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(111, "footer", 266)(112, "small");
    i0.ɵɵtext(113, "Last available patient record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(114, "div")(115, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_0_Template_button_click_115_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(116, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "button", 267);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_0_Template_button_click_117_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(ctx_r1.selected(), "patient")); });
    i0.ɵɵtext(118, "Edit patient");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.initials(ctx_r1.selected()));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.fullName(ctx_r1.selected()));
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 15, ctx_r1.selected().dateOfBirth, "longDate"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.age(ctx_r1.selected()), " years");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().sex || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().bloodType || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().philHealthInsuranceId || "Not recorded");
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(ctx_r1.selected().mobileNumber || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().emailAddress || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().homeAddress || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected().emergencyContactName || "Not recorded");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selected().emergencyContactRelationship ? 83 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selected().emergencyContactNumber || "No contact number");
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r1.selected().allergies || "None recorded");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.selected().conditions || "None recorded");
} }
function AppComponent_Conditional_7_Conditional_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 272)(1, "div")(2, "span", 125);
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
function AppComponent_Conditional_7_Conditional_1_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r65 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("record-wide", entry_r65[0] === "instructions" || entry_r65[0] === "notes" || entry_r65[0] === "purpose");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fieldLabel(entry_r65[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r65[1]);
} }
function AppComponent_Conditional_7_Conditional_1_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 275)(1, "span");
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
function AppComponent_Conditional_7_Conditional_1_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 267);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_1_Conditional_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r66); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.print()); });
    i0.ɵɵtext(1, "Print prescription");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_7_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 268)(2, "header", 190)(3, "div", 269);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "span", 192);
    i0.ɵɵtext(7, "CLINIC RECORD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2", 270);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Review the complete saved record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 141);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_1_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 271);
    i0.ɵɵconditionalCreate(15, AppComponent_Conditional_7_Conditional_1_Conditional_15_Template, 20, 7, "section", 272);
    i0.ɵɵelementStart(16, "dl", 273);
    i0.ɵɵrepeaterCreate(17, AppComponent_Conditional_7_Conditional_1_For_18_Template, 5, 4, "div", 274, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, AppComponent_Conditional_7_Conditional_1_Conditional_19_Template, 8, 1, "aside", 275);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "footer", 276)(21, "small");
    i0.ɵɵtext(22, "Read-only clinic record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div")(24, "button", 106);
    i0.ɵɵlistener("click", function AppComponent_Conditional_7_Conditional_1_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modal.set(null)); });
    i0.ɵɵtext(25, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(26, AppComponent_Conditional_7_Conditional_1_Conditional_26_Template, 2, 0, "button", 277);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.detailIcon());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.detailTitle());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.detailKind() === "prescription" ? 15 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.objectEntries(ctx_r1.selected()));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selected() && ctx_r1.selected().allergies ? 19 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(((tmp_7_0 = ctx_r1.selected()) == null ? null : tmp_7_0.medication) ? 26 : -1);
} }
function AppComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AppComponent_Conditional_7_Conditional_0_Template, 119, 18, "div", 250)(1, AppComponent_Conditional_7_Conditional_1_Template, 27, 5, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.detailKind() === "patient" ? 0 : 1);
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
        this.userForm = {};
        this.clinicalOverviewForm = { allergies: '', conditions: '' };
        this.visiblePatients = computed(() => this.filter(this.patients(), p => `${p.firstName} ${p.lastName} ${p.patientId} ${p.conditions ?? ''}`), ...(ngDevMode ? [{ debugName: "visiblePatients" }] : []));
        this.visibleAppointments = computed(() => this.filter(this.appointments(), a => `${a.patient.firstName} ${a.patient.lastName} ${a.purpose} ${a.status}`), ...(ngDevMode ? [{ debugName: "visibleAppointments" }] : []));
        this.visiblePrescriptions = computed(() => this.filter(this.prescriptions(), p => `${p.patient.firstName} ${p.patient.lastName} ${p.medication} ${p.status}`), ...(ngDevMode ? [{ debugName: "visiblePrescriptions" }] : []));
        this.visibleVaccines = computed(() => this.filter(this.vaccines(), v => `${v.patient.firstName} ${v.patient.lastName} ${v.vaccineName} ${v.status}`), ...(ngDevMode ? [{ debugName: "visibleVaccines" }] : []));
        this.visibleUsers = computed(() => this.filter(this.users(), u => `${u.firstName} ${u.lastName} ${u.email} ${u.role}`), ...(ngDevMode ? [{ debugName: "visibleUsers" }] : []));
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
        items.push({ label: 'Prescriptions', icon: 'Rx' }); items.push({ label: 'Vaccinations', icon: '✚' }); if (role === 'ADMIN')
        items.push({ label: 'Users', icon: '♙' }); return items; }
    canCreate(view) { const role = this.auth.role(); if (view === 'Appointments' || view === 'Patients')
        return role === 'ADMIN' || role === 'FRONT_DESK'; if (view === 'Prescriptions' || view === 'Vaccinations')
        return role === 'ADMIN' || role === 'DOCTOR' || role === 'NURSE'; return view === 'Users' && role === 'ADMIN'; }
    openCreate(kind) {
        this.error.set('');
        this.selected.set(null);
        this.modal.set(kind);
        const today = new Date().toISOString().slice(0, 10);
        if (kind === 'appointment') {
            this.appointmentForm = { patientId: '', assignedDoctorId: '', date: today, time: '09:00', visitType: 'Returning', purpose: '', status: 'PENDING' };
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
            this.vaccineForm = { patientId: '', vaccineName: '', dose: '', dateAdministered: today, manufacturer: '', lotNumber: '', administeredBy: this.fullName(this.auth.currentUser()), status: 'COMPLETED' };
            this.ensurePatients();
        }
        if (kind === 'user')
            this.userForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', role: 'DOCTOR' };
    }
    edit(item, kind) { this.error.set(''); this.selected.set(item); this.modal.set(kind); if (kind === 'appointment')
        this.appointmentForm = { patientId: item.patientId, assignedDoctorId: item.doctorId, date: item.date.slice(0, 10), time: item.time, visitType: item.visitType, purpose: item.purpose, durationMin: item.durationMin, status: item.status, notes: item.notes ?? '' }; if (kind === 'patient')
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
        this.loading.set(true);
        if (kind === 'appointment') {
            const body = this.clean(this.appointmentForm);
            if (!item)
                delete body.status;
            call = item ? this.api.updateAppointment(item.id, body) : this.api.createAppointment(body);
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
        call.subscribe({ next: () => { this.modal.set(null); this.notice.set(kind === 'user' ? (item ? 'User updated successfully.' : 'User account created successfully.') : kind === 'prescription' && !item && this.additionalMedications.length ? `${this.additionalMedications.length + 1} prescriptions saved successfully.` : 'Saved successfully.'); if (this.view() === 'Consultation' && kind === 'prescription' && this.consultationPatient())
                this.api.prescriptions({ patientId: this.consultationPatient().id }).subscribe(v => this.consultationPrescriptions.set(v));
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
    doctors() { return this.users().filter(u => u.role === 'DOCTOR' && u.isActive); }
    objectEntries(item) { return Object.entries(item ?? {}).filter(([key, value]) => !['id', 'patientId', 'doctorId', 'userId', 'patient', 'doctor', 'issuedAt', 'createdAt', 'updatedAt'].includes(key) && value != null && value !== ''); }
    ensurePatients() { if (!this.patients().length)
        this.api.patients().subscribe(v => this.patients.set(v)); }
    get ensureReferences() { return true; }
    loadReferences() { this.ensurePatients(); if (this.auth.role() === 'ADMIN' && this.users().length)
        return; this.api.activeDoctors().subscribe({ next: doctors => this.users.set(doctors), error: e => this.fail(e) }); }
    filter(items, text) { const q = this.search().trim().toLowerCase(); return q ? items.filter(i => text(i).toLowerCase().includes(q)) : items; }
    clean(value) { return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== '' && v !== null && v !== undefined)); }
    fail(error) { this.loading.set(false); this.error.set(error?.error?.message instanceof Array ? error.error.message.join(', ') : error?.error?.message ?? error?.message ?? 'Unable to contact the ACB Clinic API. Is the backend running on port 3000?'); }
    resetData() { this.dashboard.set(null); this.appointments.set([]); this.patients.set([]); this.prescriptions.set([]); this.vaccines.set([]); this.users.set([]); this.patientProfile.set(null); this.patientAppointments.set([]); this.patientPrescriptions.set([]); this.consultationAppointment.set(null); this.consultationPatient.set(null); this.consultationAppointments.set([]); this.consultationPrescriptions.set([]); this.consultationVaccines.set([]); this.editingClinicalOverview.set(false); }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 7, consts: [[1, "auth-page"], [1, "app-shell"], [1, "modal-backdrop", "appointment-modal-backdrop"], [1, "modal-backdrop", "patient-modal-backdrop"], [1, "modal-backdrop", "workflow-modal-backdrop"], [1, "auth-card"], [1, "brand"], [1, "brand-mark"], [1, "eyebrow"], [1, "alert", "error"], [1, "alert", "success"], [3, "ngSubmit"], [1, "form-grid"], ["type", "submit", 1, "primary", "wide", 3, "disabled"], [1, "text-button", "auth-toggle", 3, "click"], ["name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", "required", "", "autocomplete", "email", 3, "ngModelChange", "ngModel"], ["name", "dateOfBirth", "type", "date", "required", "", 3, "ngModelChange", "ngModel"], ["name", "sex", 3, "ngModelChange", "ngModel"], ["value", ""], ["name", "mobileNumber", "type", "tel", "autocomplete", "tel", 3, "ngModelChange", "ngModel"], ["name", "homeAddress", "autocomplete", "street-address", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", "minlength", "8", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["name", "confirmPassword", "type", "password", "required", "", "minlength", "8", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", "minlength", "8", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], [1, "sidebar"], [1, "close-nav", 3, "click"], [1, "nav-label"], [1, "nav-item", 3, "active"], [1, "sidebar-help"], [1, "help-icon"], [1, "user-card"], [1, "avatar", "doctor"], ["title", "Log out", 1, "more", 3, "click"], [1, "topbar"], [1, "menu-button", 3, "click"], [1, "search"], ["placeholder", "Search this workspace...", 3, "ngModelChange", "ngModel"], [1, "header-actions"], [1, "role-badge"], [1, "secondary", 3, "click"], [1, "content"], [1, "consultation-page"], [1, "nav-item", 3, "click"], [1, "nav-icon"], [3, "click"], [1, "page-heading"], [1, "panel", "placeholder-panel"], [1, "panel", "patient-profile-panel"], [1, "patient-portal-grid"], [1, "panel"], [1, "panel-header"], [1, "portal-list"], [1, "empty"], [1, "status"], ["class", "primary", 3, "click", 4, "ngIf"], [1, "stats-grid"], [1, "stat"], [1, "stat-icon", "teal"], [1, "stat-icon", "blue"], [1, "stat-icon", "orange"], [1, "stat-icon", "violet"], [1, "dashboard-grid"], [1, "panel", "schedule-panel"], [1, "text-button", 3, "click"], [1, "appointment-list"], [1, "appointment", 3, "has-consultation-action"], [1, "patient-table", "compact"], [1, "primary", 3, "click"], [1, "stat-icon", "mint"], [1, "appointment"], [1, "avatar", "mint"], [1, "patient-info"], ["type", "button", 1, "start-consultation"], [1, "more"], ["type", "button", 1, "start-consultation", 3, "click"], [1, "more", 3, "click"], [1, "identity"], [1, "avatar", "blue"], [1, "consultation-header"], [1, "consultation-topline"], ["type", "button", 1, "consultation-back", 3, "click"], [1, "consultation-status"], [1, "consultation-heading"], ["type", "button", 1, "consultation-prescribe", "primary", 3, "click", "disabled"], [1, "panel", "consultation-loading"], [1, "consultation-profile", "panel"], [1, "consultation-identity"], [1, "avatar", "blue", "large"], [1, "clinical-overview"], [1, "history-kicker"], ["type", "button", 1, "clinical-edit-button"], [1, "clinical-overview-form"], [1, "consultation-alerts"], [1, "consultation-history-grid"], [1, "panel", "consultation-history", "appointments-history"], [1, "panel", "consultation-history", "prescription-history"], ["type", "button", 1, "history-add", 3, "click"], [1, "consultation-empty"], [1, "panel", "consultation-history"], ["type", "button", 1, "clinical-edit-button", 3, "click"], [1, "clinical-overview-form", 3, "ngSubmit"], ["name", "consultationAllergies", "placeholder", "Add medication, food, or environmental allergies", 3, "ngModelChange", "ngModel"], ["name", "consultationConditions", "placeholder", "Add diagnosed or ongoing medical conditions", 3, "ngModelChange", "ngModel"], [1, "clinical-form-actions"], ["type", "button", 1, "secondary", 3, "click"], ["type", "submit", 1, "primary", 3, "disabled"], [1, "consultation-alert", "allergy"], [1, "consultation-alert", "condition"], ["type", "button", 3, "click"], [1, "page-heading", "subpage"], [1, "primary"], [1, "panel", "data-panel"], [1, "data-head", "appointments-row"], [1, "data-row", "appointments-row"], [3, "ngModelChange", "ngModel"], [1, "row-actions"], [1, "danger"], [1, "danger", 3, "click"], [1, "data-head", "patients-row"], [1, "data-row", "patients-row"], [1, "block"], [1, "data-head", "rx-row"], [1, "data-row", "rx-row"], [1, "avatar", "violet"], [1, "rx-medication"], [1, "rx-directions"], [1, "data-head", "vaccine-row"], [1, "data-row", "vaccine-row"], [1, "avatar", "coral"], [1, "vaccine-name"], [1, "vaccine-dose"], [1, "data-head", "users-row"], [1, "data-row", "users-row"], [1, "user-status"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "appointment-modal-title", 1, "user-modal", "form-modal", "appointment-modal"], [1, "appointment-modal-header"], [1, "appointment-modal-icon"], [1, "patient-modal-eyebrow"], ["id", "appointment-modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "appointment-form-section"], [1, "patient-section-heading"], [1, "appointment-fields", "two-columns"], ["name", "patientId", "required", "", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "doctorId", "required", "", 3, "ngModelChange", "ngModel"], [1, "field-warning"], [1, "appointment-fields", "three-columns"], ["type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "time", "required", "", 3, "ngModelChange", "ngModel"], ["name", "visitType", "required", "", 3, "ngModelChange", "ngModel"], [1, "appointment-fields"], ["name", "purpose", "placeholder", "Briefly describe the reason for this appointment", "required", "", 3, "ngModelChange", "ngModel"], [1, "two-columns"], [1, "appointment-modal-actions"], [1, "secure-dot"], [1, "primary", 3, "disabled"], ["name", "status", 3, "ngModelChange", "ngModel"], ["name", "notes", "placeholder", "Optional note for clinic staff", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "patient-modal-title", 1, "user-modal", "form-modal", "patient-modal"], [1, "patient-modal-header"], [1, "patient-modal-icon"], ["id", "patient-modal-title"], [1, "patient-form-section"], [1, "patient-fields", "identity-fields"], ["name", "firstName", "autocomplete", "given-name", "placeholder", "First name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "lastName", "autocomplete", "family-name", "placeholder", "Last name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dob", "required", "", 3, "ngModelChange", "ngModel"], ["name", "bloodType", 3, "ngModelChange", "ngModel"], [1, "patient-fields", "contact-fields"], ["name", "mobile", "type", "tel", "autocomplete", "tel", "placeholder", "+63 9XX XXX XXXX", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "patientEmail", "autocomplete", "email", "placeholder", "patient@example.com", 3, "ngModelChange", "ngModel"], ["name", "philhealth", "placeholder", "12-345678901-2", 3, "ngModelChange", "ngModel"], [1, "span-full"], ["name", "address", "autocomplete", "street-address", "placeholder", "House number, street, city, province", 3, "ngModelChange", "ngModel"], [1, "patient-fields", "emergency-fields"], ["name", "emergencyName", "placeholder", "Full name", 3, "ngModelChange", "ngModel"], ["name", "emergencyRelationship", 3, "ngModelChange", "ngModel"], ["label", "Immediate family"], ["label", "Partner & relatives"], ["label", "Care & support"], ["name", "emergencyNumber", "type", "tel", "placeholder", "+63 9XX XXX XXXX", 3, "ngModelChange", "ngModel"], [1, "patient-form-section", "clinical-section"], [1, "patient-fields", "clinical-fields"], ["name", "allergies", "placeholder", "List medication, food, or environmental allergies", 3, "ngModelChange", "ngModel"], ["name", "conditions", "placeholder", "List diagnosed or ongoing conditions", 3, "ngModelChange", "ngModel"], [1, "patient-modal-actions"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "prescription-modal-title", 1, "user-modal", "workflow-modal", "prescription-workflow"], [1, "workflow-modal-header"], [1, "workflow-modal-icon", "rx-icon"], [1, "workflow-eyebrow"], ["id", "prescription-modal-title"], [1, "workflow-section"], [1, "workflow-section-title"], [1, "workflow-fields"], ["name", "rxPatientSearch", "type", "text", "list", "prescription-patient-suggestions", "placeholder", "Type a patient name", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], ["id", "prescription-patient-suggestions"], [1, "patient-match"], [1, "workflow-fields", "workflow-grid", "four"], ["name", "medication", "placeholder", "Generic or brand name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "dosage", "placeholder", "e.g. 500 mg tablet", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "name", "quantity", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "refills", 3, "ngModelChange", "ngModel"], [1, "additional-medications"], [1, "workflow-fields", "workflow-grid", "two"], ["name", "instructions", "placeholder", "Dose, route, frequency, and duration", "required", "", 3, "ngModelChange", "ngModel"], ["name", "rxNotes", "placeholder", "Optional internal note", 3, "ngModelChange", "ngModel"], [1, "workflow-modal-actions"], [1, "medication-entry"], ["type", "button", 1, "add-medication-button", 3, "click"], [1, "medication-number"], ["type", "button", "aria-label", "Remove medication", 3, "click"], ["placeholder", "Generic or brand name", "required", "", 3, "ngModelChange", "name", "ngModel"], ["placeholder", "e.g. 500 mg tablet", "required", "", 3, "ngModelChange", "name", "ngModel"], ["type", "number", "min", "1", "required", "", 3, "ngModelChange", "name", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "name", "ngModel"], [1, "medication-instructions"], ["placeholder", "Dose, route, frequency, and duration", "required", "", 3, "ngModelChange", "name", "ngModel"], ["name", "rxStatus", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "vaccine-modal-title", 1, "user-modal", "workflow-modal", "vaccine-workflow"], [1, "workflow-modal-icon", "vaccine-icon"], ["id", "vaccine-modal-title"], ["name", "vaxPatient", "required", "", 3, "ngModelChange", "ngModel"], ["name", "vaccineName", "placeholder", "e.g. Influenza", "required", "", 3, "ngModelChange", "ngModel"], ["name", "dose", "placeholder", "e.g. 0.5 mL", "required", "", 3, "ngModelChange", "ngModel"], ["name", "vaxStatus", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "vaxDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "administeredBy", "placeholder", "Clinician name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "manufacturer", "placeholder", "Vaccine manufacturer", 3, "ngModelChange", "ngModel"], ["name", "lotNumber", "placeholder", "Batch or lot number", 3, "ngModelChange", "ngModel"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "user-modal-title", 1, "user-modal", "workflow-modal", "user-workflow"], [1, "workflow-modal-icon", "user-icon"], ["id", "user-modal-title"], ["name", "userFirst", "required", "", "autocomplete", "given-name", "placeholder", "First name", 3, "ngModelChange", "ngModel"], ["name", "userLast", "required", "", "autocomplete", "family-name", "placeholder", "Last name", 3, "ngModelChange", "ngModel"], [1, "workflow-span-full"], ["type", "email", "name", "userEmail", "required", "", "autocomplete", "email", "placeholder", "name@clinic.com", 3, "ngModelChange", "ngModel"], ["name", "userRole", "required", "", 3, "ngModelChange", "ngModel"], ["value", "ADMIN"], ["value", "DOCTOR"], ["value", "NURSE"], ["value", "FRONT_DESK"], ["value", "PATIENT"], ["name", "active", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "password", "minlength", "8", "name", "tempPassword", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["type", "password", "minlength", "8", "name", "confirmUserPassword", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "form-note", "workflow-span-full"], [1, "modal-backdrop"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "patient-view-title", 1, "user-modal", "patient-view-modal"], [1, "patient-view-header"], [1, "patient-view-avatar"], ["id", "patient-view-title"], [1, "patient-view-body"], [1, "patient-view-section"], [1, "patient-view-section-title"], [1, "patient-view-grid"], [1, "patient-contact-columns"], [1, "view-span-full"], [1, "emergency-card"], [1, "patient-view-section", "clinical-view-section"], [1, "patient-clinical-cards"], [1, "allergy-card"], [1, "condition-card"], [1, "patient-view-actions"], ["type", "button", 1, "primary", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "record-detail-title", 1, "user-modal", "record-detail-modal"], [1, "workflow-modal-icon", "detail-icon"], ["id", "record-detail-title"], [1, "record-detail-body"], [1, "prescription-view-summary"], [1, "record-detail-grid"], [3, "record-wide"], [1, "record-safety-alert"], [1, "record-detail-actions"], ["type", "button", 1, "primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, AppComponent_Conditional_0_Template, 25, 9, "main", 0)(1, AppComponent_Conditional_1_Template, 52, 10, "div", 1);
            i0.ɵɵconditionalCreate(2, AppComponent_Conditional_2_Template, 122, 13, "div", 2);
            i0.ɵɵconditionalCreate(3, AppComponent_Conditional_3_Template, 194, 19, "div", 3);
            i0.ɵɵconditionalCreate(4, AppComponent_Conditional_4_Template, 100, 14, "div", 4);
            i0.ɵɵconditionalCreate(5, AppComponent_Conditional_5_Template, 109, 11, "div", 4);
            i0.ɵɵconditionalCreate(6, AppComponent_Conditional_6_Template, 83, 11, "div", 4);
            i0.ɵɵconditionalCreate(7, AppComponent_Conditional_7_Template, 2, 1);
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
            i0.ɵɵconditional(ctx.modal() === "user" ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.modal() === "detail" ? 7 : -1);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MinValidator, i2.NgModel, i2.NgForm, i1.UpperCasePipe, i1.DatePipe], styles: ["[_nghost-%COMP%] { display: block; min-height: 100vh; }\n.app-shell[_ngcontent-%COMP%] { min-height: 100vh; display: grid; grid-template-columns: 236px 1fr; }\n.sidebar[_ngcontent-%COMP%] { background: #fff; border-right: 1px solid #e3ece9; padding: 28px 16px 18px; display: flex; flex-direction: column; position: fixed; inset: 0 auto 0 0; width: 236px; z-index: 20; }\n.brand[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; font: 800 20px 'Manrope'; color: #123d38; padding: 0 10px; }\n.brand-mark[_ngcontent-%COMP%] { background: #0d8578; color: white; width: 31px; height: 31px; border-radius: 9px; display: inline-grid; place-items: center; font-size: 22px; box-shadow: 0 5px 12px #0d85782c; }\n.nav-label[_ngcontent-%COMP%] { color: #9aa9a6; font-size: 10px; letter-spacing: .14em; font-weight: 700; margin: 40px 13px 10px; }\n.nav-label.management-label[_ngcontent-%COMP%] { margin-top: 28px; }\n.nav-item[_ngcontent-%COMP%] { border: 0; background: transparent; color: #5b6d69; width: 100%; display: flex; align-items: center; gap: 12px; padding: 11px 13px; border-radius: 9px; margin: 3px 0; font-weight: 600; text-align: left; }\n.nav-item[_ngcontent-%COMP%]:hover { background: #f2f8f6; color: #116b61; }\n.nav-item.active[_ngcontent-%COMP%] { background: #e9f6f2; color: #0b796c; }\n.nav-icon[_ngcontent-%COMP%] { width: 20px; text-align: center; font-weight: 700; }\n.sidebar-help[_ngcontent-%COMP%] { margin-top: auto; background: #f4f9f7; border: 1px solid #e7efed; padding: 13px; border-radius: 10px; display: flex; gap: 10px; align-items: center; }\n.help-icon[_ngcontent-%COMP%] { border: 1px solid #bdd5d0; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: #0d8578; }\n.sidebar-help[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.sidebar-help[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 12px; }\nsmall[_ngcontent-%COMP%] { color: #83928f; }\n.sidebar-help[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 10px; }\n.user-card[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; border-top: 1px solid #e7eeec; padding: 17px 5px 0; margin-top: 16px; }\n.user-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { flex: 1; }\nmain[_ngcontent-%COMP%] { grid-column: 2; min-width: 0; }\n.topbar[_ngcontent-%COMP%] { height: 76px; background: rgba(255,255,255,.94); border-bottom: 1px solid #e3ece9; display: flex; align-items: center; padding: 0 34px; position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); }\n.search[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; color: #81908d; width: min(400px, 45vw); }\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; border: 0; outline: 0; color: #304b47; background: transparent; }\n.header-actions[_ngcontent-%COMP%] { margin-left: auto; display: flex; align-items: center; gap: 18px; }\n.role-switcher[_ngcontent-%COMP%] { font-size: 11px; color: #7b8a87; display: flex; align-items: center; gap: 8px; }\n.role-switcher[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { border: 1px solid #d6e3df; background: #fff; color: #36514d; border-radius: 8px; padding: 7px 28px 7px 10px; font-size: 12px; font-weight: 700; }\n.icon-button[_ngcontent-%COMP%] { width: 36px; height: 36px; border: 1px solid #e0e9e7; background: white; border-radius: 9px; position: relative; color: #526763; }\n.notification-dot[_ngcontent-%COMP%] { position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #ef7666; right: 7px; top: 7px; border: 1px solid white; }\n.content[_ngcontent-%COMP%] { width: 100%; padding: 32px clamp(24px,3vw,44px) 50px; margin: 0; }\n.page-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 27px; }\n.eyebrow[_ngcontent-%COMP%] { color: #0b897a !important; font-size: 10px !important; font-weight: 800; letter-spacing: .12em; margin: 0 0 7px !important; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] { font-family: 'Manrope'; margin: 0; }\nh1[_ngcontent-%COMP%] { font-size: 28px; letter-spacing: -.035em; color: #173a35; }\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 5px 0 0; color: #80908c; font-size: 13px; }\nbutton.primary[_ngcontent-%COMP%] { background: #0d8074; color: white; border: 0; border-radius: 8px; padding: 11px 16px; font-weight: 700; font-size: 12px; box-shadow: 0 4px 10px #0d807422; }\nbutton.primary[_ngcontent-%COMP%]:hover { background: #096e64; }\nbutton.secondary[_ngcontent-%COMP%] { background: white; color: #31524d; border: 1px solid #d8e5e2; border-radius: 8px; padding: 10px 14px; font-weight: 700; font-size: 11px; }\n.stats-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 17px; }\n.stats-grid.with-total[_ngcontent-%COMP%] { grid-template-columns: repeat(5, minmax(0,1fr)); }\n.panel[_ngcontent-%COMP%], .stat[_ngcontent-%COMP%] { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; box-shadow: 0 2px 4px #294d4610; }\n.stat[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 13px; padding: 18px; }\n.stat-icon[_ngcontent-%COMP%] { width: 37px; height: 37px; border-radius: 9px; display: grid; place-items: center; flex: 0 0 auto; font-weight: 800; font-size: 13px; }\n.stat-icon.teal[_ngcontent-%COMP%] { background: #e7f6f2; color: #0d8879; }.stat-icon.blue[_ngcontent-%COMP%] { background: #e9f1fb; color: #4879ae; }.stat-icon.mint[_ngcontent-%COMP%] { background: #e7f5ee; color: #218161; }.stat-icon.orange[_ngcontent-%COMP%] { background: #fff1e8; color: #dc7b45; }.stat-icon.violet[_ngcontent-%COMP%] { background: #f1ecfa; color: #8065b5; }\n.stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 11px; margin-bottom: 4px; }\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font: 800 25px 'Manrope'; color: #27443f; line-height: 1.15; }\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font: 600 11px 'DM Sans'; }\n.stat[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] { font-style: normal; font-size: 9px; color: #9aa6a4; margin-top: 4px; }.stat[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #1b9b74; }\n.dashboard-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(330px, .8fr); gap: 17px; }\n.panel-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 19px 20px; border-bottom: 1px solid #e8efed; }\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 15px; color: #26443f; }.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 10px; color: #8c9997; margin: 4px 0 0; }\n.text-button[_ngcontent-%COMP%] { border: 0; background: transparent; color: #0a8174; font-weight: 700; font-size: 10px; }\n.appointment[_ngcontent-%COMP%] { min-height: 72px; display: grid; grid-template-columns: 62px 38px minmax(150px,1fr) auto 20px; align-items: center; gap: 12px; padding: 0 20px; border-bottom: 1px solid #edf2f1; }\n.appointment[_ngcontent-%COMP%]:last-child { border-bottom: 0; }.appointment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] { font-size: 10px; color: #6e7d7a; font-weight: 600; }\n.avatar[_ngcontent-%COMP%] { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 10px; font-weight: 800; flex: 0 0 auto; }\n.avatar.mint[_ngcontent-%COMP%] { background: #dff2ec; color: #267565; }.avatar.blue[_ngcontent-%COMP%] { background: #e3edf8; color: #4a7199; }.avatar.coral[_ngcontent-%COMP%] { background: #fbe8e3; color: #b46758; }.avatar.violet[_ngcontent-%COMP%] { background: #eee7f7; color: #795fa2; }.avatar.doctor[_ngcontent-%COMP%] { background: #d7f0e9; color: #137768; }\n.patient-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; }.patient-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 11px; color: #304944; }.patient-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 9px; color: #8d9a97; }\n.status[_ngcontent-%COMP%] { font-size: 9px; border-radius: 20px; padding: 5px 8px; background: #edf7f2; color: #3b8069; display: flex; align-items: center; gap: 5px; white-space: nowrap; }\n.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }.status.waiting[_ngcontent-%COMP%] { background: #fff5e6; color: #b67b29; }.status.in-consultation[_ngcontent-%COMP%] { background: #e9f1fb; color: #4d78a5; }\n.more[_ngcontent-%COMP%] { border: 0; background: transparent; color: #91a09d; }.empty[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #889895; }\n.next-patient[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] { border-bottom: 0; padding-bottom: 10px; }.patient-profile[_ngcontent-%COMP%] { display: flex; gap: 12px; align-items: center; padding: 8px 20px 16px; }.avatar.large[_ngcontent-%COMP%] { width: 44px; height: 44px; font-size: 12px; }.patient-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 13px; }.patient-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #899693; font-size: 9px; margin: 4px 0 0; }\n.vitals[_ngcontent-%COMP%] { margin: 0 20px; background: #f7faf9; border-radius: 9px; display: grid; grid-template-columns: repeat(3,1fr); padding: 12px 8px; }.vitals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; border-right: 1px solid #e4ecea; }.vitals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child { border: 0; }.vitals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .vitals[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; color: #8d9a97; }.vitals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font: 700 14px 'Manrope'; margin: 3px; }\n.clinical-alert[_ngcontent-%COMP%] { margin: 13px 20px; padding: 10px; border: 1px solid #f2d7d0; background: #fff7f5; border-radius: 8px; display: flex; gap: 9px; align-items: center; }.clinical-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { background: #f5d3cb; color: #b75f50; width: 23px; height: 23px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }.clinical-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 9px; color: #8d4e43; }.clinical-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 8px; color: #af7f76; margin: 2px 0 0; }\n.button-row[_ngcontent-%COMP%] { display: flex; gap: 8px; padding: 3px 20px 20px; }.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { flex: 1; }\n.recent-panel[_ngcontent-%COMP%] { margin-top: 17px; }.patient-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(200px,1.2fr) 1fr 120px auto; gap: 20px; align-items: center; padding: 12px 20px; border-bottom: 1px solid #edf2f1; font-size: 10px; color: #566b67; }.patient-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child { border: 0; }.identity[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; }.identity[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] { display: flex; flex-direction: column; }.identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #314b46; }.identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; }.last-visit[_ngcontent-%COMP%] { color: #8b9996; }.last-visit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #4b625e; }.patient-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border: 0; background: transparent; color: #0b8174; font-weight: 700; font-size: 9px; }\n.subpage[_ngcontent-%COMP%] { margin-top: -14px; margin-bottom: 20px; }.placeholder-panel[_ngcontent-%COMP%] { min-height: 450px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }.placeholder-icon[_ngcontent-%COMP%] { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 18px; background: #e5f5f0; color: #0d8074; font: 800 20px 'Manrope'; margin-bottom: 18px; }.placeholder-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 20px; }.placeholder-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #7e8e8a; max-width: 490px; line-height: 1.6; font-size: 13px; }.placeholder-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { margin-top: 10px; }\n.user-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 17px; }.user-summary[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; padding: 17px 19px; display: flex; justify-content: space-between; align-items: center; }.user-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 11px; }.user-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #26443f; font: 800 21px 'Manrope'; }\n.users-toolbar[_ngcontent-%COMP%] { min-height: 70px; padding: 14px 20px; display: flex; justify-content: space-between; gap: 14px; align-items: center; border-bottom: 1px solid #e8efed; }.user-search[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; background: #f7faf9; border: 1px solid #e0e9e7; border-radius: 8px; padding: 9px 12px; width: min(390px,55%); color: #80908c; }.user-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border: 0; outline: 0; background: transparent; width: 100%; font-size: 11px; }.users-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: #7b8a87; font-size: 10px; display: flex; align-items: center; gap: 8px; }.users-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border: 1px solid #d8e5e2; background: #fff; border-radius: 8px; padding: 9px 10px; color: #36514d; font-size: 11px; }\n.users-table-head[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(250px,1.5fr) minmax(120px,.7fr) minmax(100px,.6fr) 130px; gap: 18px; align-items: center; padding: 13px 20px; }.users-table-head[_ngcontent-%COMP%] { color: #93a09e; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; background: #fbfcfc; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { min-height: 66px; border-top: 1px solid #edf2f1; }.users-table[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 11px; }.users-table[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 9px; margin-top: 3px; }.role-badge[_ngcontent-%COMP%] { display: inline-block; background: #eef6f4; color: #34675f; padding: 5px 8px; border-radius: 6px; font-size: 9px; }.user-status[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 6px; color: #27805f; font-size: 9px; }.user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }.user-status.inactive[_ngcontent-%COMP%] { color: #9a7771; }.user-actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }.user-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border: 1px solid #d8e5e2; background: #fff; color: #31524d; padding: 7px 9px; border-radius: 7px; font-size: 9px; font-weight: 700; }.user-actions[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%] { color: #b35d52; border-color: #efd8d4; }\n.user-modal[_ngcontent-%COMP%] { display:block; width: min(520px,100%); background: #fff; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; inset:auto; padding:0; }.user-modal-header[_ngcontent-%COMP%] { padding: 24px 26px 18px; border-bottom: 1px solid #e8efed; }.user-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: #26443f; font-size: 19px; }.user-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 30px 0 0;color:#80908c;font-size:10px}.user-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { padding: 22px 26px 25px; }.user-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 7px; color: #516763; font-size: 10px; font-weight: 700; margin-bottom: 16px; }.user-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#80908c;font-size:9px;font-weight:400}.user-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .user-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { padding: 11px; font-weight: 400; }.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }.form-note[_ngcontent-%COMP%] { background: #f4f9f7; border-radius: 8px; color: #71837f; font-size: 10px; line-height: 1.5; padding: 11px 12px; margin: 0 0 20px; }.user-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] { padding: 0; }\n.modal-backdrop[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: 50; background: #153d3899; display: grid; place-items: center; padding: 20px; backdrop-filter: blur(3px); }.prescription-modal[_ngcontent-%COMP%] { width: min(720px, 100%); max-height: 94vh; overflow: auto; background: #f4f7f6; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; }.modal-close[_ngcontent-%COMP%] { position: absolute; right: 16px; top: 12px; border: 0; background: transparent; font-size: 25px; color: #667b77; z-index: 2; }.rx-paper[_ngcontent-%COMP%] { background: white; margin: 42px 36px 18px; padding: 34px 42px; min-height: 680px; box-shadow: 0 2px 10px #23453f15; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; border-bottom: 2px solid #0d8074; padding-bottom: 20px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] { padding: 0; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child { text-align: right; display: flex; flex-direction: column; font-size: 12px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 9px; }.rx-patient[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #dfe8e6; }.rx-patient[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }.rx-patient[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 8px; letter-spacing: .1em; }.rx-patient[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 12px; }.rx-symbol[_ngcontent-%COMP%] { font: 700 48px Georgia; margin: 25px 0 10px; }.medicine[_ngcontent-%COMP%] { margin-left: 45px; }.medicine[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 17px; }.medicine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 13px; line-height: 1.6; }.medicine[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 10px; }.warning[_ngcontent-%COMP%] { color: #963f35; background: #fff1ee; border: 1px solid #f0c8c0; border-radius: 7px; padding: 12px; font-size: 10px; line-height: 1.5; margin-top: 35px; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 90px; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child { display: flex; flex-direction: column; border-top: 1px solid #80908c; padding-top: 4px; min-width: 170px; }.signature[_ngcontent-%COMP%] { font: italic 22px Georgia; margin-top: -31px; margin-bottom: 8px; }.clinic-address[_ngcontent-%COMP%] { text-align: right; color: #71827e; font-size: 9px; line-height: 1.6; }.modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 9px; padding: 0 36px 22px; }\n.menu-button[_ngcontent-%COMP%], .close-nav[_ngcontent-%COMP%] { display: none; }\n@media (max-width: 1100px) { .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2,1fr); }.dashboard-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }.right-column[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr; }.recent-panel[_ngcontent-%COMP%] { margin-top: 17px; }.user-summary[_ngcontent-%COMP%] { grid-template-columns: repeat(2,1fr); } }\n@media (max-width: 760px) { .app-shell[_ngcontent-%COMP%] { display: block; }.sidebar[_ngcontent-%COMP%] { transform: translateX(-100%); transition: transform .2s ease; box-shadow: 8px 0 30px #173d3730; }.sidebar.mobile-open[_ngcontent-%COMP%] { transform: translateX(0); }.close-nav[_ngcontent-%COMP%] { display: block; position: absolute; top: 20px; right: 14px; border: 0; background: transparent; font-size: 24px; }.menu-button[_ngcontent-%COMP%] { display: block; border: 0; background: transparent; margin-right: 12px; font-size: 20px; color: #35534e; }.topbar[_ngcontent-%COMP%] { padding: 0 16px; }.role-switcher[_ngcontent-%COMP%] { font-size: 0; }.content[_ngcontent-%COMP%] { padding: 24px 16px 40px; }.page-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }.stats-grid[_ngcontent-%COMP%], .user-summary[_ngcontent-%COMP%] { grid-template-columns: 1fr; }.appointment[_ngcontent-%COMP%] { grid-template-columns: 52px 34px 1fr 20px; padding: 0 12px; }.appointment[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] { display: none; }.recent-panel[_ngcontent-%COMP%] { display: none; }.users-toolbar[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }.user-search[_ngcontent-%COMP%] { width: auto; }.users-table-head[_ngcontent-%COMP%] { display: none; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { grid-template-columns: 1fr auto; gap: 10px; }.users-table[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { padding-left: 44px; }.user-actions[_ngcontent-%COMP%] { justify-content: flex-end; }.form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 0; }.rx-paper[_ngcontent-%COMP%] { margin: 35px 10px 12px; padding: 25px 20px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { flex-direction: column; gap: 16px; }.rx-paper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child { text-align: left; }.rx-patient[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }.rx-paper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 40px; }.clinic-address[_ngcontent-%COMP%] { text-align: left; } }\n\n.auth-page[_ngcontent-%COMP%] { min-height:100vh; display:grid; place-items:center; padding:24px; background:radial-gradient(circle at top,#e5f5f0,#f5f8f7 50%); }\n.auth-card[_ngcontent-%COMP%] { width:min(440px,100%); background:#fff; border:1px solid #dfe9e6; border-radius:18px; padding:38px; box-shadow:0 20px 55px #173d3718; }\n.auth-card[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] { padding:0; margin-bottom:38px; }.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin-bottom:7px; }.auth-card[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:not(.eyebrow) { color:#7e8e8a; font-size:13px; margin:0 0 23px; }\n.auth-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:7px; color:#516763; font-size:10px; font-weight:700; margin-bottom:16px; }\n.auth-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .data-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { border:1px solid #d8e5e2; border-radius:8px; padding:11px; background:#fff; color:#36514d; font:400 11px 'DM Sans'; }\n.form-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { min-height:70px; resize:vertical; }.wide[_ngcontent-%COMP%] { width:100%; }.auth-toggle[_ngcontent-%COMP%] { width:100%; margin:18px 0; }.auth-card[_ngcontent-%COMP%] > small[_ngcontent-%COMP%] { display:block; text-align:center; font-size:9px; }\n.alert[_ngcontent-%COMP%] { padding:11px 14px; border-radius:8px; margin:0 0 18px; font-size:11px; display:flex; justify-content:space-between; gap:12px; }.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border:0;background:transparent;color:inherit}.alert.error[_ngcontent-%COMP%]{background:#fff0ed;color:#a94f43;border:1px solid #f2d2cc}.alert.success[_ngcontent-%COMP%]{background:#eaf7f1;color:#24745e;border:1px solid #cfe9df}\n.patient-profile-panel[_ngcontent-%COMP%]{margin-bottom:20px}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:0;padding:0 20px 20px}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:12px;border-bottom:1px solid #edf2f1}.patient-profile-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#80908c;font-size:9px;text-transform:uppercase}.patient-profile-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:4px 0 0;color:#304944;font-size:11px}.patient-portal-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;padding:14px 20px;border-top:1px solid #edf2f1}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.portal-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{text-align:right;align-items:flex-end}.portal-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px;color:#304944}.portal-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;color:#80908c}\n.data-panel[_ngcontent-%COMP%] { overflow:hidden; }.data-head[_ngcontent-%COMP%], .data-row[_ngcontent-%COMP%] { display:grid; gap:18px; align-items:center; padding:13px 20px; }.data-head[_ngcontent-%COMP%] { background:#fbfcfc; color:#93a09e; font-size:9px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }.data-row[_ngcontent-%COMP%] { min-height:70px; border-top:1px solid #edf2f1; color:#566b67; font-size:10px; }.appointments-row[_ngcontent-%COMP%], .users-row[_ngcontent-%COMP%] { grid-template-columns:minmax(240px,1.4fr) minmax(140px,.8fr) 130px 190px }.patients-row[_ngcontent-%COMP%] { grid-template-columns:minmax(280px,1.35fr) minmax(240px,1fr) minmax(170px,.55fr) 168px }.rx-row[_ngcontent-%COMP%] { grid-template-columns:minmax(190px,1fr) minmax(170px,.9fr) minmax(220px,1.2fr) minmax(150px,.75fr) 115px 90px 118px }.vaccine-row[_ngcontent-%COMP%] { grid-template-columns:minmax(200px,1.1fr) minmax(150px,.8fr) 90px 125px minmax(150px,.75fr) 105px 68px }.data-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:7px;font-size:9px}.block[_ngcontent-%COMP%]{display:block;margin-top:5px}.row-actions[_ngcontent-%COMP%]{display:flex;gap:7px;justify-content:flex-end;align-items:center}.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:48px;border:1px solid #d8e5e2;background:#fff;color:#31524d;padding:8px 9px;border-radius:7px;font-size:9px;font-weight:700;text-align:center}.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{border-color:#91bbb4;background:#f2f8f6;color:#0a7569}.row-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{color:#b35d52;border-color:#efd8d4}.compact[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr auto}.compact[_ngcontent-%COMP%]{padding-bottom:5px}.data-head.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(2), .data-row.patients-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(3){min-width:0;overflow-wrap:anywhere}.data-row.patients-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%]{width:168px}.data-head.vaccine-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.vaccine-row[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#526965;font-size:10px}.vaccine-name[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.vaccine-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#314b46;font-size:11px}.vaccine-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.vaccine-dose[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:max-content;padding:5px 8px;border-radius:7px;background:#f1f5f4;color:#47635e;font-size:9px;font-weight:700}.data-head.rx-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{text-align:right}.data-row.rx-row[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#526965;font-size:10px}.rx-medication[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.rx-medication[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#314b46;font-size:11px}.rx-medication[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.rx-directions[_ngcontent-%COMP%]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.45}\n.form-modal[_ngcontent-%COMP%] { max-height:94vh; overflow:auto; }.wide-modal[_ngcontent-%COMP%]{width:min(760px,100%)}.form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:22px 26px 25px}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.form-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]{padding:0}.detail-modal[_ngcontent-%COMP%]{width:min(620px,100%);max-height:90vh;overflow:auto}.detail-modal[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{padding:15px 26px}.detail-modal[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;grid-template-columns:150px 1fr;padding:9px 0;border-bottom:1px solid #edf2f1}.detail-modal[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{text-transform:capitalize;color:#80908c;font-size:10px}.detail-modal[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;color:#304944;font-size:11px;overflow-wrap:anywhere}.detail-modal[_ngcontent-%COMP%]   .clinical-alert[_ngcontent-%COMP%]{margin:0 26px 20px}\n.patient-modal-backdrop[_ngcontent-%COMP%]{padding:24px}.patient-modal[_ngcontent-%COMP%]{width:min(880px,100%);max-height:min(92vh,900px);overflow:auto;border:1px solid #dce8e5;border-radius:20px}.patient-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:flex-start;gap:14px;padding:22px 28px;background:#fff;border-bottom:1px solid #e5eeec;text-align:left}.patient-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;flex:0 0 44px;height:44px;border-radius:13px;background:linear-gradient(145deg,#dff4ee,#edf8f5);color:#087c6e;font-size:20px}.patient-modal-eyebrow[_ngcontent-%COMP%]{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.patient-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#213f3a;font-size:20px}.patient-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#82918e;font-size:10px}.patient-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.patient-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 28px 0}.patient-form-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:180px 1fr;gap:28px;padding:25px 28px;border-bottom:1px solid #edf2f1}.patient-section-heading[_ngcontent-%COMP%]{display:flex;gap:11px;align-items:flex-start}.patient-section-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#eef7f4;color:#0d8074;font-size:9px;font-weight:800}.patient-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#94a09e;font-size:9px;line-height:1.45}.patient-fields[_ngcontent-%COMP%]{display:grid;gap:15px}.identity-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.contact-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.emergency-fields[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.clinical-fields[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px;color:#516763;font-size:9px;font-weight:700}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal;font-weight:800}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:11px 12px;outline:none;background:#fff;color:#304944;font:400 10px 'DM Sans';transition:border-color .15s,box-shadow .15s}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#a5b1ae}.patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:132px;resize:vertical;font-size:12px;line-height:1.6}.patient-fields[_ngcontent-%COMP%]   .span-full[_ngcontent-%COMP%]{grid-column:1/-1}.clinical-section[_ngcontent-%COMP%]{background:#fbfdfc}.patient-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:17px 28px;background:#fff;border-top:1px solid #e1ebe8;box-shadow:0 -8px 20px #23453f0a}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.patient-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#82918e;font-size:9px}.secure-dot[_ngcontent-%COMP%]{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#e6f5ef;color:#16805f;font-size:9px;font-weight:800}.patient-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.patient-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.patient-modal.user-modal[_ngcontent-%COMP%]{width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;border-radius:18px}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;justify-content:stretch;width:100%;min-height:88px;margin:0;padding:18px 32px;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.patient-modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%]{grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]{gap:18px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:10px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:13px 14px;font-size:12px}.patient-modal[_ngcontent-%COMP%]   .patient-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:150px;font-size:13px}.patient-modal[_ngcontent-%COMP%]   .patient-modal-actions[_ngcontent-%COMP%]{padding:18px 32px}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px;line-height:1}.patient-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{line-height:1}\n.patient-view-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.patient-view-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-view-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.patient-view-avatar[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e3f3ee;color:#0c7c6f;font:800 14px 'Manrope'}.patient-view-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.patient-view-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#84938f;font-size:10px}.patient-view-body[_ngcontent-%COMP%]{flex:1;background:#fbfcfc}.patient-view-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.patient-view-section-title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:11px}.patient-view-section-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.patient-view-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-view-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.patient-view-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.patient-view-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:13px 14px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.patient-view-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-size:8px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.patient-view-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:5px 0 0;color:#304944;font-size:11px;font-weight:600;overflow-wrap:anywhere}.patient-view-grid[_ngcontent-%COMP%]   .view-span-full[_ngcontent-%COMP%]{grid-column:1/-1}.patient-contact-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:14px}.patient-contact-columns[_ngcontent-%COMP%]   .patient-view-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.emergency-card[_ngcontent-%COMP%]{padding:15px 16px;border:1px solid #f0ded4;border-radius:10px;background:#fff9f5}.emergency-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;color:#a76e57;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.emergency-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:8px;color:#634c43;font-size:12px}.emergency-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#987d72;font-size:9px;line-height:1.45}.clinical-view-section[_ngcontent-%COMP%]{background:#f8fbfa}.patient-clinical-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;min-height:86px;padding:16px;border-radius:11px}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;font-weight:800}.patient-clinical-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px}.patient-clinical-cards[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px;font-weight:800;letter-spacing:.07em}.patient-clinical-cards[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px;line-height:1.5}.allergy-card[_ngcontent-%COMP%]{border:1px solid #efd7d0;background:#fff7f5;color:#9d5d51}.allergy-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#f4d9d2}.condition-card[_ngcontent-%COMP%]{border:1px solid #d7e6e2;background:#f3f9f7;color:#3f7369}.condition-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#dceee9}.patient-view-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:72px;margin-top:auto;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.patient-view-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:9px}.patient-view-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{font-size:9px}.patient-view-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.appointment-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.appointment-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1100px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.appointment-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.appointment-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.appointment-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.appointment-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e5f3f0;color:#0b7e70;font-size:17px;font-weight:800}.appointment-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.appointment-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 32px 0}.appointment-form-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.appointment-fields[_ngcontent-%COMP%]{display:grid;gap:18px}.appointment-fields.two-columns[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.appointment-fields.three-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.appointment-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.appointment-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.appointment-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .appointment-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.appointment-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:92px;resize:vertical;line-height:1.55}.appointment-fields[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;font-weight:400}.appointment-fields[_ngcontent-%COMP%]   .field-warning[_ngcontent-%COMP%]{color:#a06759}.appointment-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.appointment-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.appointment-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px}\n.workflow-modal-backdrop[_ngcontent-%COMP%]{padding:18px}.workflow-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(1060px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.workflow-modal-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){justify-self:start;text-align:left}.workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px}.workflow-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#84938f;font-size:10px}.workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:24px;right:28px}.workflow-modal-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;font:800 14px 'Manrope'}.rx-icon[_ngcontent-%COMP%]{background:#eee9f8;color:#7058a1}.vaccine-icon[_ngcontent-%COMP%]{background:#e5f3ee;color:#15755e;font-size:18px}.user-icon[_ngcontent-%COMP%]{background:#e8eff8;color:#4c719d;font-size:18px}.workflow-eyebrow[_ngcontent-%COMP%]{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.workflow-modal[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{padding:0}.workflow-modal[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin:18px 32px 0}.workflow-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.workflow-section-title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:11px}.workflow-section-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.workflow-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 4px;color:#31504a;font-size:12px}.workflow-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.workflow-fields[_ngcontent-%COMP%]{display:grid;gap:18px}.workflow-grid.two[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.workflow-grid.four[_ngcontent-%COMP%]{grid-template-columns:1.4fr 1.1fr .6fr .6fr}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.workflow-fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.workflow-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .workflow-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.workflow-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .workflow-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.workflow-fields[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:104px;resize:vertical;line-height:1.55}.workflow-fields[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;font-weight:400}.workflow-span-full[_ngcontent-%COMP%]{grid-column:1/-1}.workflow-modal[_ngcontent-%COMP%]   .form-note[_ngcontent-%COMP%]{margin:0}.workflow-modal-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.workflow-modal-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px}.workflow-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px}\n.record-detail-modal.user-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(900px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.detail-icon[_ngcontent-%COMP%]{background:#edf3f7;color:#516f83;font-size:15px}.record-detail-body[_ngcontent-%COMP%]{padding:28px 32px;background:#fbfcfc}.record-detail-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.record-detail-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:span 2}.record-detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#899894;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.record-detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:6px 0 0;color:#304944;font-size:11px;font-weight:600;line-height:1.5;overflow-wrap:anywhere}.record-safety-alert[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;margin-top:16px;padding:15px 16px;border:1px solid #efd7d0;border-radius:11px;background:#fff7f5;color:#9d5d51}.record-safety-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;background:#f4d9d2;font-weight:800}.record-safety-alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.record-safety-alert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px;font-weight:800;letter-spacing:.07em}.record-safety-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.record-detail-actions[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.record-detail-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;gap:9px}.record-detail-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{font-size:9px}.record-detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}\n.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr) 40px;align-items:center;justify-content:stretch;column-gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){min-width:0;justify-self:start;text-align:left}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1px 0 0;color:#213f3a;font-size:21px;line-height:1.2}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%], .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{position:static;display:grid;place-items:center;justify-self:end;width:36px;height:36px;margin:0;padding:0;border:1px solid transparent;border-radius:9px;color:#667b77;font-size:22px;line-height:1;transition:background .15s,border-color .15s,color .15s}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .patient-view-modal[_ngcontent-%COMP%]   .patient-view-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .appointment-modal[_ngcontent-%COMP%]   .appointment-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .workflow-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover, .record-detail-modal[_ngcontent-%COMP%]   .workflow-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover{border-color:#dce8e5;background:#f2f7f5;color:#214a43}.patient-modal-eyebrow[_ngcontent-%COMP%], .workflow-eyebrow[_ngcontent-%COMP%]{line-height:1.2}.patient-modal-icon[_ngcontent-%COMP%], .patient-view-avatar[_ngcontent-%COMP%], .appointment-modal-icon[_ngcontent-%COMP%], .workflow-modal-icon[_ngcontent-%COMP%]{box-sizing:border-box;width:44px;height:44px;margin:0;justify-self:start}\n.workflow-fields[_ngcontent-%COMP%]   .patient-match[_ngcontent-%COMP%]{color:#24745e}.workflow-fields[_ngcontent-%COMP%]   .field-warning[_ngcontent-%COMP%]{color:#a06759}.additional-medications[_ngcontent-%COMP%]{grid-column:1/-1;display:grid;gap:12px;margin-top:18px}.medication-entry[_ngcontent-%COMP%]{padding:18px;border:1px solid #dfe9e6;border-radius:12px;background:#fbfdfc}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:17px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#31504a;font-size:11px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px}.medication-entry[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #efd8d4;border-radius:7px;padding:6px 9px;background:#fff;color:#aa6257;font-size:8px;font-weight:700}.medication-number[_ngcontent-%COMP%]{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#eee9f8;color:#7058a1;font-size:9px;font-weight:800}.medication-instructions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:15px;color:#516763;font-size:10px;font-weight:700}.medication-instructions[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:3px}.medication-instructions[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#bd5c50;font-size:11px;font-style:normal}.medication-instructions[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;min-height:80px;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';resize:vertical}.add-medication-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;padding:15px 16px;border:1px dashed #9fc9c1;border-radius:11px;background:#f6fbf9;color:#286a5f;text-align:left}.add-medication-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:#dff1ec;font-size:16px}.add-medication-button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.add-medication-button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:10px}.add-medication-button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px}.add-medication-button[_ngcontent-%COMP%]:hover{border-color:#5fa99c;background:#eef8f5}\n.prescription-view-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:12px;margin-bottom:16px}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:5px;padding:14px 15px;border:1px solid #dedfed;border-radius:10px;background:#fdfcff}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{flex-direction:row;align-items:center;justify-content:flex-start;gap:11px}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:5px}.prescription-view-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#81769e;font-size:8px;font-weight:800;letter-spacing:.07em}.prescription-view-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#3e3850;font-size:11px;overflow-wrap:anywhere}\n@media(max-width:700px){.prescription-view-summary[_ngcontent-%COMP%]{grid-template-columns:1fr}.prescription-view-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{grid-column:1/-1}}\nbutton[_ngcontent-%COMP%]:disabled{opacity:.55;cursor:not-allowed}code[_ngcontent-%COMP%]{background:#edf4f2;padding:2px 4px;border-radius:4px}\n.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:60px 34px minmax(150px,1fr) 105px 122px}.start-consultation[_ngcontent-%COMP%]{border:1px solid #0d8074;border-radius:8px;padding:8px 10px;background:#0d8074;color:#fff;font-size:9px;font-weight:800;white-space:nowrap;box-shadow:0 3px 8px #0d807420}.start-consultation[_ngcontent-%COMP%]:hover{background:#096e64}\n.consultation-page[_ngcontent-%COMP%]{max-width:1400px;margin:-14px auto 0}.consultation-header[_ngcontent-%COMP%]{margin-bottom:20px}.consultation-back[_ngcontent-%COMP%]{border:0;background:transparent;color:#46706a;padding:0;margin-bottom:17px;font-size:10px;font-weight:700}.consultation-back[_ngcontent-%COMP%]:hover{color:#0d8074}.consultation-heading[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:4px}.consultation-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#7d8f8b;font-size:12px}.consultation-status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;border:1px solid #cfe7df;border-radius:999px;padding:8px 11px;background:#eef9f5;color:#21725f;font-size:9px;font-weight:800;white-space:nowrap}.consultation-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#29a578;box-shadow:0 0 0 4px #d8f1e8}.consultation-loading[_ngcontent-%COMP%]{padding:36px;text-align:center;color:#71847f;font-size:12px}.consultation-profile[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(520px,1.7fr);align-items:center;gap:28px;padding:22px 24px}.consultation-identity[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.consultation-identity[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:0}.consultation-identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.11em}.consultation-identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:3px 0;color:#294b45;font-size:18px}.consultation-identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#7d8d89;font-size:10px}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;margin:0;border:1px solid #e6eeec;border-radius:10px;overflow:hidden}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{min-width:0;padding:12px 14px;background:#fbfdfc;border-bottom:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){border-right:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2){border-bottom:0}.consultation-profile[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#879692;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.consultation-profile[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:5px 0 0;color:#344f4a;font-size:10px;overflow-wrap:anywhere}.consultation-alerts[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0}.consultation-alert[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:15px 17px;border-radius:11px}.consultation-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;flex:0 0 28px;height:28px;border-radius:8px;font-weight:800}.consultation-alert[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-alert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:8px;font-weight:800;letter-spacing:.08em}.consultation-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:10px;overflow-wrap:anywhere}.consultation-alert.allergy[_ngcontent-%COMP%]{border:1px solid #f0d4ce;background:#fff7f5;color:#925044}.consultation-alert.allergy[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#f4d8d1}.consultation-alert.condition[_ngcontent-%COMP%]{border:1px solid #d7e4f0;background:#f5f9fd;color:#476d91}.consultation-alert.condition[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#dceaf6}.consultation-history-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.consultation-history.appointments-history[_ngcontent-%COMP%]{grid-column:1/-1}.consultation-history[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{padding:17px 20px;border-bottom:1px solid #e8efed}.consultation-history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:13px}.consultation-history[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#879692;font-size:9px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:100px minmax(0,1fr) auto;align-items:center;gap:13px;min-height:61px;padding:11px 20px;border-top:1px solid #edf2f1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child{border-top:0}.consultation-history[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:#657b76;font-size:9px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-history[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#344f4a;font-size:10px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:9px;white-space:normal}.consultation-history[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:8px}.consultation-history[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{min-height:90px;display:grid;place-items:center;margin:0}\n.consultation-header[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding:20px 22px 22px;border:1px solid #d9e9e5;border-radius:14px;background:linear-gradient(120deg,#fff 0%,#f4fbf8 68%,#e7f5f0 100%);box-shadow:0 7px 24px #234d4410}.consultation-header[_ngcontent-%COMP%]:after{content:'';position:absolute;right:-65px;bottom:-95px;width:220px;height:220px;border:38px solid #0d807408;border-radius:50%;pointer-events:none}.consultation-topline[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.consultation-back[_ngcontent-%COMP%]{margin:0}.consultation-heading[_ngcontent-%COMP%]{position:relative;z-index:1;align-items:center}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px}.consultation-prescribe[_ngcontent-%COMP%]{display:flex;align-items:center;gap:11px;min-width:174px;padding:10px 14px!important;text-align:left}.consultation-prescribe[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:31px;height:31px;border-radius:8px;background:#ffffff26;font:800 12px 'Manrope'}.consultation-prescribe[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.consultation-prescribe[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:10px}.consultation-prescribe[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#d9f2ec;font-size:8px;font-weight:500}.consultation-profile[_ngcontent-%COMP%]{border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}.consultation-profile[_ngcontent-%COMP%]   .avatar.large[_ngcontent-%COMP%]{width:50px;height:50px;font-size:13px}.consultation-history[_ngcontent-%COMP%]{overflow:hidden}.consultation-history[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fcfdfd}.history-kicker[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#0d8074;font-size:7px;font-weight:800;letter-spacing:.12em}.history-add[_ngcontent-%COMP%]{border:1px solid #bcd9d3;border-radius:8px;padding:8px 10px;background:#fff;color:#176f64;font-size:8px;font-weight:800;white-space:nowrap}.history-add[_ngcontent-%COMP%]:hover{border-color:#0d8074;background:#f1f9f6}.prescription-history[_ngcontent-%COMP%]{border-color:#d7e7e3}.consultation-empty[_ngcontent-%COMP%]{min-height:175px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:25px;text-align:center}.consultation-empty[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:39px;height:39px;margin-bottom:10px;border-radius:11px;background:#eee9f8;color:#72599e;font:800 11px 'Manrope'}.consultation-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.consultation-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 13px;color:#879692;font-size:9px}.consultation-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:8px;padding:9px 12px;background:#e8f5f1;color:#176f64;font-size:8px;font-weight:800}\n.consultation-page[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{font-size:11px!important}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}.consultation-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}.consultation-back[_ngcontent-%COMP%]{font-size:12px}.consultation-status[_ngcontent-%COMP%]{font-size:11px}.consultation-prescribe[_ngcontent-%COMP%]{min-width:205px;padding:12px 15px!important}.consultation-prescribe[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:36px;height:36px;font-size:14px}.consultation-prescribe[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px}.consultation-prescribe[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px}.consultation-profile[_ngcontent-%COMP%]{padding:26px}.consultation-profile[_ngcontent-%COMP%]   .avatar.large[_ngcontent-%COMP%]{width:58px;height:58px;font-size:15px}.consultation-identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .history-kicker[_ngcontent-%COMP%]{font-size:9px}.consultation-identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:21px}.consultation-identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}.consultation-profile[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:10px}.consultation-profile[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{font-size:13px;line-height:1.45}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:14px 16px}.clinical-overview[_ngcontent-%COMP%]{margin:16px 0;border:1px solid #dce8e5;border-radius:13px;background:#fff;box-shadow:0 4px 16px #294d460a;overflow:hidden}.clinical-overview[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 20px;border-bottom:1px solid #e8efed;background:#fbfdfc}.clinical-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#294a44;font-size:16px}.clinical-overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#7d8f8b;font-size:11px}.clinical-edit-button[_ngcontent-%COMP%]{border:1px solid #b9d6d0;border-radius:8px;padding:10px 12px;background:#fff;color:#176f64;font-size:11px;font-weight:800;white-space:nowrap}.clinical-edit-button[_ngcontent-%COMP%]:hover{border-color:#0d8074;background:#f2f9f7}.clinical-overview[_ngcontent-%COMP%]   .consultation-alerts[_ngcontent-%COMP%]{margin:0;padding:16px}.consultation-alert[_ngcontent-%COMP%]{min-height:78px;padding:17px 19px}.consultation-alert[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex-basis:34px;height:34px;font-size:15px}.consultation-alert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px}.consultation-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;line-height:1.5}.clinical-overview-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px}.clinical-overview-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:12px;font-weight:800}.clinical-overview-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;min-height:120px;padding:13px 14px;border:1px solid #d5e3df;border-radius:9px;background:#fff;color:#304944;font:400 13px/1.5 'DM Sans';resize:vertical;outline:none}.clinical-overview-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#66a99f;box-shadow:0 0 0 3px #0d807412}.clinical-overview-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:10px;font-weight:400}.clinical-form-actions[_ngcontent-%COMP%]{grid-column:1/-1;display:flex;justify-content:flex-end;gap:9px;padding-top:2px}.consultation-history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px}.consultation-history[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}.history-add[_ngcontent-%COMP%]{font-size:10px;padding:9px 11px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{min-height:72px}.consultation-history[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:11px}.consultation-history[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;line-height:1.45}.consultation-history[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:10px}.consultation-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.consultation-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}.consultation-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:10px}\n@media(max-width:900px){.data-head[_ngcontent-%COMP%]{display:none}.data-row[_ngcontent-%COMP%], .appointments-row[_ngcontent-%COMP%], .patients-row[_ngcontent-%COMP%], .rx-row[_ngcontent-%COMP%], .vaccine-row[_ngcontent-%COMP%], .users-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.row-actions[_ngcontent-%COMP%]{justify-content:flex-start}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}\n@media(max-width:1000px){.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:52px 34px minmax(130px,1fr) 120px}.appointment.has-consultation-action[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:none}.consultation-profile[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-history-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-history.appointments-history[_ngcontent-%COMP%]{grid-column:auto}}\n@media(max-width:640px){.appointment.has-consultation-action[_ngcontent-%COMP%]{grid-template-columns:45px 30px minmax(0,1fr)}.appointment.has-consultation-action[_ngcontent-%COMP%]   .start-consultation[_ngcontent-%COMP%]{grid-column:3;width:max-content}.consultation-page[_ngcontent-%COMP%]{margin-top:0}.consultation-header[_ngcontent-%COMP%]{padding:17px}.consultation-topline[_ngcontent-%COMP%]{align-items:flex-start}.consultation-heading[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.consultation-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:25px}.consultation-prescribe[_ngcontent-%COMP%]{width:100%}.consultation-profile[_ngcontent-%COMP%]{padding:18px}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], .consultation-alerts[_ngcontent-%COMP%], .clinical-overview-form[_ngcontent-%COMP%]{grid-template-columns:1fr}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd), .consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2){border-right:0;border-bottom:1px solid #e9efee}.consultation-profile[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-bottom:0}.clinical-overview[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.clinical-edit-button[_ngcontent-%COMP%]{width:100%}.clinical-form-actions[_ngcontent-%COMP%]{grid-column:auto}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{grid-column:1/-1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{grid-column:1}.consultation-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > .status[_ngcontent-%COMP%]{grid-column:2;grid-row:2}}\n@media(max-width:760px){.patient-portal-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%], .patient-view-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.identity-fields[_ngcontent-%COMP%], .contact-fields[_ngcontent-%COMP%], .emergency-fields[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .patient-view-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}.patient-contact-columns[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-view-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:560px){.auth-card[_ngcontent-%COMP%]{padding:28px 22px}.form-grid[_ngcontent-%COMP%], .form-grid.three[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-profile-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{grid-template-columns:1fr}.header-actions[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%]{display:none}.patient-modal-backdrop[_ngcontent-%COMP%]{padding:0}.patient-modal.user-modal[_ngcontent-%COMP%], .patient-view-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.patient-modal[_ngcontent-%COMP%]   .patient-modal-header[_ngcontent-%COMP%], .patient-view-header[_ngcontent-%COMP%]{padding:16px 20px}.patient-modal[_ngcontent-%COMP%]   .patient-form-section[_ngcontent-%COMP%], .patient-view-section[_ngcontent-%COMP%]{padding:21px 20px}.identity-fields[_ngcontent-%COMP%], .contact-fields[_ngcontent-%COMP%], .emergency-fields[_ngcontent-%COMP%], .clinical-fields[_ngcontent-%COMP%], .patient-view-grid[_ngcontent-%COMP%], .patient-contact-columns[_ngcontent-%COMP%]   .patient-view-grid[_ngcontent-%COMP%], .patient-clinical-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.patient-modal[_ngcontent-%COMP%]   .patient-modal-actions[_ngcontent-%COMP%], .patient-view-actions[_ngcontent-%COMP%]{padding:14px 20px}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .patient-view-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:none}.patient-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .patient-view-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.patient-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .patient-view-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}}\n@media(max-width:760px){.appointment-form-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.appointment-fields.three-columns[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.appointment-form-section[_ngcontent-%COMP%]   .patient-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}}@media(max-width:560px){.appointment-modal-backdrop[_ngcontent-%COMP%]{padding:0}.appointment-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.appointment-modal-header[_ngcontent-%COMP%]{padding:16px 20px}.appointment-form-section[_ngcontent-%COMP%]{padding:21px 20px}.appointment-fields.two-columns[_ngcontent-%COMP%], .appointment-fields[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%], .appointment-fields.three-columns[_ngcontent-%COMP%]{grid-template-columns:1fr}.appointment-modal-actions[_ngcontent-%COMP%]{padding:14px 20px}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{display:none}.appointment-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:flex;width:100%}.appointment-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}}\n@media(max-width:760px){.workflow-section[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:16px}.workflow-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}.workflow-grid.four[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.record-detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:560px){.workflow-modal-backdrop[_ngcontent-%COMP%]{padding:0}.workflow-modal.user-modal[_ngcontent-%COMP%], .record-detail-modal.user-modal[_ngcontent-%COMP%]{width:100vw;height:100vh;max-height:none;border-radius:0}.workflow-modal-header[_ngcontent-%COMP%]{padding:16px 20px}.workflow-section[_ngcontent-%COMP%]{padding:21px 20px}.workflow-grid.two[_ngcontent-%COMP%], .workflow-grid.four[_ngcontent-%COMP%], .record-detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.record-detail-grid[_ngcontent-%COMP%]   .record-wide[_ngcontent-%COMP%]{grid-column:auto}.workflow-modal-actions[_ngcontent-%COMP%], .record-detail-actions[_ngcontent-%COMP%]{padding:14px 20px}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .record-detail-actions[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:none}.workflow-modal-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .record-detail-actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;width:100%}.workflow-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .record-detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;min-width:0}.record-detail-body[_ngcontent-%COMP%]{padding:20px}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], template: "@if (!auth.authenticated()) {\n  <main class=\"auth-page\">\n    <section class=\"auth-card\">\n      <div class=\"brand\"><span class=\"brand-mark\">+</span><span>ACB Clinic</span></div>\n      <p class=\"eyebrow\">SECURE CLINIC WORKSPACE</p>\n      <h1>{{ registerMode ? 'Create patient account' : 'Welcome back' }}</h1>\n      <p>{{ registerMode ? 'Register for future patient portal access.' : 'Sign in with your clinic credentials.' }}</p>\n      @if (error()) { <div class=\"alert error\">{{ error() }}</div> }\n      @if (notice()) { <div class=\"alert success\">{{ notice() }}</div> }\n      <form (ngSubmit)=\"submitAuth()\">\n        @if (registerMode) { <div class=\"form-grid\"><label>First name<input name=\"firstName\" [(ngModel)]=\"registerForm.firstName\" required></label><label>Last name<input name=\"lastName\" [(ngModel)]=\"registerForm.lastName\" required></label></div> }\n        @if(registerMode){<label>Email address<input name=\"email\" type=\"email\" [(ngModel)]=\"registerForm.email\" required autocomplete=\"email\"></label><div class=\"form-grid\"><label>Date of birth<input name=\"dateOfBirth\" type=\"date\" [(ngModel)]=\"registerForm.dateOfBirth\" required></label><label>Sex<select name=\"sex\" [(ngModel)]=\"registerForm.sex\"><option value=\"\">Prefer not to say</option><option>Female</option><option>Male</option><option>Other</option></select></label></div><label>Mobile number<input name=\"mobileNumber\" type=\"tel\" [(ngModel)]=\"registerForm.mobileNumber\" autocomplete=\"tel\"></label><label>Home address<input name=\"homeAddress\" [(ngModel)]=\"registerForm.homeAddress\" autocomplete=\"street-address\"></label><label>Password<input name=\"password\" type=\"password\" [(ngModel)]=\"registerForm.password\" required minlength=\"8\" autocomplete=\"new-password\"><small>Use at least 8 characters.</small></label><label>Confirm password<input name=\"confirmPassword\" type=\"password\" [(ngModel)]=\"registerForm.confirmPassword\" required minlength=\"8\" autocomplete=\"new-password\"></label>}@else{<label>Email address<input name=\"email\" type=\"email\" [(ngModel)]=\"loginForm.email\" required autocomplete=\"email\"></label><label>Password<input name=\"password\" type=\"password\" [(ngModel)]=\"loginForm.password\" required minlength=\"8\" autocomplete=\"current-password\"></label>}\n        <button class=\"primary wide\" type=\"submit\" [disabled]=\"loading()\">{{ loading() ? 'Please wait\u2026' : registerMode ? 'Register' : 'Sign in' }}</button>\n      </form>\n      <button class=\"text-button auth-toggle\" (click)=\"registerMode = !registerMode; error.set(''); notice.set('')\">{{ registerMode ? 'Already registered? Sign in' : 'Need a patient account? Register' }}</button>\n      <small>Clinical data is available only to authorized clinic staff.</small>\n    </section>\n  </main>\n} @else {\n  <div class=\"app-shell\">\n    <aside class=\"sidebar\" [class.mobile-open]=\"showMobileNav()\">\n      <div class=\"brand\"><span class=\"brand-mark\">+</span><span>ACB Clinic</span></div><button class=\"close-nav\" (click)=\"showMobileNav.set(false)\">\u00D7</button>\n      <nav><p class=\"nav-label\">WORKSPACE</p>@for(item of navItems(); track item.label){<button class=\"nav-item\" [class.active]=\"view()===item.label\" (click)=\"openView(item.label)\"><span class=\"nav-icon\">{{item.icon}}</span>{{item.label}}</button>}</nav>\n      <div class=\"sidebar-help\"><span class=\"help-icon\">\u2713</span><div><strong>API connected</strong><small>localhost:3000/api/v1</small></div></div>\n      <div class=\"user-card\"><span class=\"avatar doctor\">{{initials(auth.currentUser())}}</span><div><strong>{{fullName(auth.currentUser())}}</strong><small>{{roleLabel(auth.role())}}</small></div><button class=\"more\" (click)=\"logout()\" title=\"Log out\">\u21AA</button></div>\n    </aside>\n    <main>\n      <header class=\"topbar\"><button class=\"menu-button\" (click)=\"showMobileNav.set(true)\">\u2630</button><div class=\"search\"><span>\u2315</span><input [ngModel]=\"search()\" (ngModelChange)=\"search.set($event)\" placeholder=\"Search this workspace...\"></div><div class=\"header-actions\"><span class=\"role-badge\">{{roleLabel(auth.role())}}</span><button class=\"secondary\" (click)=\"logout()\">Log out</button></div></header>\n      <section class=\"content\">\n        @if(error()){<div class=\"alert error\">{{error()}} <button (click)=\"error.set('')\">\u00D7</button></div>} @if(notice()){<div class=\"alert success\">{{notice()}} <button (click)=\"notice.set('')\">\u00D7</button></div>}\n        @if(auth.role()==='PATIENT') {\n          <div class=\"page-heading\"><div><p class=\"eyebrow\">PATIENT PORTAL</p><h1>Welcome, {{patientProfile()?.firstName || auth.currentUser()?.firstName}}</h1><p>Your clinic profile, appointments, and prescriptions.</p></div></div>\n          @if(loading()){<section class=\"panel placeholder-panel\"><p>Loading your records\u2026</p></section>}\n          @if(patientProfile(); as profile){<section class=\"panel patient-profile-panel\"><div class=\"panel-header\"><div><h2>My profile</h2><p>{{profile.patientId}}</p></div></div><dl><div><dt>Date of birth</dt><dd>{{profile.dateOfBirth|date:'mediumDate'}}</dd></div><div><dt>Sex</dt><dd>{{profile.sex||'\u2014'}}</dd></div><div><dt>Blood type</dt><dd>{{profile.bloodType||'\u2014'}}</dd></div><div><dt>Mobile</dt><dd>{{profile.mobileNumber||'\u2014'}}</dd></div><div><dt>Allergies</dt><dd>{{profile.allergies||'None recorded'}}</dd></div><div><dt>Conditions</dt><dd>{{profile.conditions||'None recorded'}}</dd></div></dl></section>}\n          <div class=\"patient-portal-grid\"><section class=\"panel\"><div class=\"panel-header\"><div><h2>My appointments</h2><p>{{patientAppointments().length}} records</p></div></div><div class=\"portal-list\">@for(a of patientAppointments();track a.id){<article><div><strong>{{a.scheduledAt|date:'medium'}}</strong><small>{{a.purpose}} \u00B7 {{a.visitType}}</small></div><div><span class=\"status\"><i></i>{{a.status}}</span><small>Dr. {{fullName(a.doctor)}}</small></div></article>}@empty{<div class=\"empty\">No appointments found.</div>}</div></section><section class=\"panel\"><div class=\"panel-header\"><div><h2>My prescriptions</h2><p>{{patientPrescriptions().length}} records</p></div></div><div class=\"portal-list\">@for(rx of patientPrescriptions();track rx.id){<article><div><strong>{{rx.medication}} \u00B7 {{rx.dosage}}</strong><small>{{rx.instructions}}</small></div><div><span class=\"status\"><i></i>{{rx.status}}</span><small>Dr. {{fullName(rx.doctor)}}</small></div></article>}@empty{<div class=\"empty\">No prescriptions found.</div>}</div></section></div>\n        }\n        @else if(view()==='Dashboard') {\n          <div class=\"page-heading\"><div><p class=\"eyebrow\">{{dashboard()?.date | date:'EEEE, MMMM d' | uppercase}}</p><h1>Good day, {{auth.currentUser()?.firstName}}</h1><p>Live clinic activity from the ACB Clinic API.</p></div><button class=\"primary\" *ngIf=\"canCreate('Appointments')\" (click)=\"openCreate('appointment')\">\uFF0B New appointment</button></div>\n          <div class=\"stats-grid\" [class.with-total]=\"auth.role()==='FRONT_DESK'||auth.role()==='DOCTOR'\"><article class=\"stat\"><span class=\"stat-icon teal\">\u25A3</span><div><small>Today's appointments</small><strong>{{dashboard()?.stats?.appointments ?? '\u2014'}}</strong></div></article><article class=\"stat\"><span class=\"stat-icon blue\">\u2667</span><div><small>Patients checked in</small><strong>{{dashboard()?.stats?.checkedIn ?? '\u2014'}}</strong></div></article>@if(auth.role()==='FRONT_DESK'||auth.role()==='DOCTOR'){<article class=\"stat\"><span class=\"stat-icon mint\">\u2667</span><div><small>Total patients</small><strong>{{dashboard()?.stats?.totalPatients ?? '\u2014'}}</strong><em>Registered clinic records</em></div></article>}<article class=\"stat\"><span class=\"stat-icon orange\">\u25F7</span><div><small>Average wait time</small><strong>\u2014</strong><em>Not tracked by backend</em></div></article><article class=\"stat\"><span class=\"stat-icon violet\">Rx</span><div><small>Prescriptions issued</small><strong>{{dashboard()?.stats?.prescriptions ?? '\u2014'}}</strong></div></article></div>\n          <div class=\"dashboard-grid\"><section class=\"panel schedule-panel\"><div class=\"panel-header\"><div><h2>Today's schedule</h2><p>{{dashboard()?.schedule?.length ?? 0}} appointments</p></div><button class=\"text-button\" (click)=\"openView('Appointments')\">View all \u2192</button></div><div class=\"appointment-list\">@for(a of dashboard()?.schedule ?? []; track a.id){<article class=\"appointment\" [class.has-consultation-action]=\"auth.role()==='DOCTOR'\"><time>{{a.scheduledAt|date:'shortTime'}}</time><span class=\"avatar mint\">{{initials(a.patient)}}</span><div class=\"patient-info\"><strong>{{fullName(a.patient)}}</strong><span>{{a.purpose}} \u00B7 {{a.visitType}}</span></div><span class=\"status\"><i></i>{{a.status}}</span>@if(auth.role()==='DOCTOR'){<button class=\"start-consultation\" type=\"button\" (click)=\"startConsultation(a)\">Start consultation</button>}@else{<button class=\"more\" (click)=\"viewDetail('appointment',a.id)\">\u00B7\u00B7\u00B7</button>}</article>}@empty{<div class=\"empty\">No appointments today.</div>}</div></section><aside class=\"panel\"><div class=\"panel-header\"><div><h2>Recently updated patients</h2><p>Live patient records</p></div></div><div class=\"patient-table compact\">@for(p of dashboard()?.recentPatients ?? [];track p.id){<article><div class=\"identity\"><span class=\"avatar blue\">{{initials(p)}}</span><div><strong>{{fullName(p)}}</strong><small>{{p.patientId}} \u00B7 {{age(p)}} years</small></div></div><span>{{p.conditions || 'No condition recorded'}}</span><button (click)=\"viewDetail('patient',p.id)\">Open</button></article>}@empty{<div class=\"empty\">No recent patients.</div>}</div></aside></div>\n        } @else if(view()==='Consultation') {\n          <div class=\"consultation-page\">\n            <header class=\"consultation-header\"><div class=\"consultation-topline\"><button class=\"consultation-back\" type=\"button\" (click)=\"openView('Dashboard')\">\u2190 Back to dashboard</button><span class=\"consultation-status\"><i></i>Active consultation</span></div><div class=\"consultation-heading\"><div><span class=\"eyebrow\">DOCTOR CONSULTATION</span><h1>@if(consultationPatient(); as patient){ {{fullName(patient)}} }@else{ Patient consultation }</h1><p>@if(consultationAppointment(); as appointment){ {{appointment.visitType}} \u00B7 {{appointment.purpose}} }</p></div><button class=\"consultation-prescribe primary\" type=\"button\" [disabled]=\"!consultationPatient()\" (click)=\"addConsultationPrescription()\"><span>Rx</span><div><strong>Add prescription</strong><small>Prescribe medication</small></div></button></div></header>\n            @if(loading()){<section class=\"panel consultation-loading\">Loading the patient record and clinical history\u2026</section>}\n            @if(consultationPatient(); as patient){\n              <section class=\"consultation-profile panel\"><div class=\"consultation-identity\"><span class=\"avatar blue large\">{{initials(patient)}}</span><div><small>PATIENT</small><h2>{{fullName(patient)}}</h2><p>{{patient.sex||'Sex not recorded'}}</p></div></div><dl><div><dt>Age</dt><dd>{{ageWithMonths(patient)}}</dd></div><div><dt>Mobile number</dt><dd>{{patient.mobileNumber||'Not recorded'}}</dd></div><div><dt>Blood type</dt><dd>{{patient.bloodType||'Not recorded'}}</dd></div><div><dt>Home address</dt><dd>{{patient.homeAddress||'Not recorded'}}</dd></div></dl></section>\n              <section class=\"clinical-overview\"><header><div><span class=\"history-kicker\">CLINICAL SAFETY</span><h2>Clinical overview</h2><p>Keep important health information visible during the consultation.</p></div>@if(!editingClinicalOverview()){<button type=\"button\" class=\"clinical-edit-button\" (click)=\"editClinicalOverview()\">\u270E Update clinical information</button>}</header>@if(editingClinicalOverview()){<form class=\"clinical-overview-form\" (ngSubmit)=\"saveClinicalOverview()\"><label><span>Known allergies</span><textarea name=\"consultationAllergies\" [(ngModel)]=\"clinicalOverviewForm.allergies\" placeholder=\"Add medication, food, or environmental allergies\"></textarea><small>Enter \u201CNone known\u201D when the patient confirms no allergies.</small></label><label><span>Medical conditions</span><textarea name=\"consultationConditions\" [(ngModel)]=\"clinicalOverviewForm.conditions\" placeholder=\"Add diagnosed or ongoing medical conditions\"></textarea><small>Include relevant chronic and active conditions.</small></label><div class=\"clinical-form-actions\"><button class=\"secondary\" type=\"button\" (click)=\"editingClinicalOverview.set(false)\">Cancel</button><button class=\"primary\" type=\"submit\" [disabled]=\"loading()\">{{loading()?'Saving\u2026':'Save clinical information'}}</button></div></form>}@else{<div class=\"consultation-alerts\"><article class=\"consultation-alert allergy\"><span>!</span><div><small>KNOWN ALLERGIES</small><strong>{{patient.allergies||'No allergies recorded'}}</strong></div></article><article class=\"consultation-alert condition\"><span>+</span><div><small>MEDICAL CONDITIONS</small><strong>{{patient.conditions||'No conditions recorded'}}</strong></div></article></div>}</section>\n              <div class=\"consultation-history-grid\"><section class=\"panel consultation-history appointments-history\"><header><div><span class=\"history-kicker\">CARE TIMELINE</span><h2>Visit history</h2><p>{{consultationAppointments().length}} appointment records</p></div></header><div>@for(a of consultationAppointments();track a.id){<article><time>{{a.scheduledAt|date:'mediumDate'}}</time><div><strong>{{a.purpose}}</strong><small>{{a.visitType}} \u00B7 Dr. {{fullName(a.doctor)}}</small></div><span class=\"status\"><i></i>{{a.status}}</span></article>}@empty{<p class=\"empty\">No previous appointments.</p>}</div></section><section class=\"panel consultation-history prescription-history\"><header><div><span class=\"history-kicker\">MEDICATION</span><h2>Prescription history</h2><p>{{consultationPrescriptions().length}} medication records</p></div><button type=\"button\" class=\"history-add\" (click)=\"addConsultationPrescription()\">\uFF0B Add prescription</button></header><div>@for(rx of consultationPrescriptions();track rx.id){<article><time>{{rx.issuedAt|date:'mediumDate'}}</time><div><strong>{{rx.medication}} \u00B7 {{rx.dosage}}</strong><small>{{rx.instructions}}</small></div><span class=\"status\"><i></i>{{rx.status}}</span></article>}@empty{<div class=\"consultation-empty\"><span>Rx</span><strong>No prescriptions yet</strong><p>Add medication orders without leaving the consultation.</p><button type=\"button\" (click)=\"addConsultationPrescription()\">Add first prescription</button></div>}</div></section><section class=\"panel consultation-history\"><header><div><span class=\"history-kicker\">IMMUNIZATION</span><h2>Vaccination history</h2><p>{{consultationVaccines().length}} vaccination records</p></div></header><div>@for(v of consultationVaccines();track v.id){<article><time>{{v.dateAdministered|date:'mediumDate'}}</time><div><strong>{{v.vaccineName}}</strong><small>{{v.dose}} \u00B7 {{v.administeredBy}}</small></div><span class=\"status\"><i></i>{{v.status}}</span></article>}@empty{<p class=\"empty\">No vaccinations recorded.</p>}</div></section></div>\n            }\n          </div>\n        } @else {\n          <div class=\"page-heading subpage\"><div>@if(view()==='Users'){<p class=\"eyebrow\">CLINIC WORKSPACE</p>}<h1>{{view()}}</h1><p>Live records synchronized with the backend API.</p></div>@if(canCreate(view())){<button class=\"primary\" (click)=\"openCreate(view()==='Appointments'?'appointment':view()==='Patients'?'patient':view()==='Prescriptions'?'prescription':view()==='Vaccinations'?'vaccine':'user')\">\uFF0B Add {{view()==='Vaccinations'?'vaccination':view().slice(0,-1).toLowerCase()}}</button>}</div>\n          <section class=\"panel data-panel\">@if(loading()){<div class=\"empty\">Loading\u2026</div>}\n            @if(view()==='Appointments'){<div class=\"data-head appointments-row\"><span>Appointment</span><span>Doctor</span><span>Status</span><span>Actions</span></div>@for(a of visibleAppointments();track a.id){<article class=\"data-row appointments-row\"><div class=\"identity\"><span class=\"avatar mint\">{{initials(a.patient)}}</span><div><strong>{{fullName(a.patient)}}</strong><small>{{a.scheduledAt|date:'medium'}} \u00B7 {{a.purpose}}</small></div></div><span>Dr. {{fullName(a.doctor)}}</span><select [ngModel]=\"a.status\" (ngModelChange)=\"status(a,$event)\"><option>PENDING</option><option>CONFIRMED</option><option>COMPLETED</option><option>NO_SHOW</option><option>CANCELLED</option></select><div class=\"row-actions\"><button (click)=\"viewDetail('appointment',a.id)\">View</button><button (click)=\"edit(a,'appointment'); ensureReferences\">Edit</button>@if(canCreate('Appointments')&&a.status!=='CANCELLED'){<button class=\"danger\" (click)=\"remove(a,'appointment')\">Cancel</button>}</div></article>}@empty{<div class=\"empty\">No appointments found.</div>}}\n            @if(view()==='Patients'){<div class=\"data-head patients-row\"><span>Patient</span><span>Clinical summary</span><span>Contact</span><span>Actions</span></div>@for(p of visiblePatients();track p.id){<article class=\"data-row patients-row\"><div class=\"identity\"><span class=\"avatar blue\">{{initials(p)}}</span><div><strong>{{fullName(p)}}</strong><small>{{p.patientId}} \u00B7 {{age(p)}} years \u00B7 {{p.sex||'\u2014'}}</small></div></div><span>{{p.conditions||'No conditions'}}<small class=\"block\">Allergies: {{p.allergies||'None recorded'}}</small></span><span>{{p.mobileNumber||p.emailAddress||'\u2014'}}</span><div class=\"row-actions\"><button (click)=\"viewDetail('patient',p.id)\">View</button><button (click)=\"edit(p,'patient')\">Edit</button>@if(auth.role()==='ADMIN'){<button class=\"danger\" (click)=\"remove(p,'patient')\">Delete</button>}</div></article>}@empty{<div class=\"empty\">No patients found.</div>}}\n            @if(view()==='Prescriptions'){<div class=\"data-head rx-row\"><span>Patient</span><span>Medication</span><span>Directions</span><span>Prescribed by</span><span>Issued</span><span>Status</span><span>Actions</span></div>@for(rx of visiblePrescriptions();track rx.id){<article class=\"data-row rx-row\"><div class=\"identity\"><span class=\"avatar violet\">{{initials(rx.patient)}}</span><div><strong>{{fullName(rx.patient)}}</strong><small>Prescription record</small></div></div><div class=\"rx-medication\"><strong>{{rx.medication}}</strong><small>{{rx.dosage}} \u00B7 Qty {{rx.quantity}}@if(rx.refills){ \u00B7 {{rx.refills}} refill{{rx.refills===1?'':'s'}}}</small></div><span class=\"rx-directions\">{{rx.instructions}}</span><span>Dr. {{fullName(rx.doctor)}}</span><time>{{rx.issuedAt|date:'mediumDate'}}</time><span class=\"status\"><i></i>{{rx.status}}</span><div class=\"row-actions\"><button (click)=\"viewDetail('prescription',rx.id)\">View</button><button (click)=\"edit(rx,'prescription')\">Edit</button></div></article>}@empty{<div class=\"empty\">No prescriptions found.</div>}}\n            @if(view()==='Vaccinations'){<div class=\"data-head vaccine-row\"><span>Patient name</span><span>Vaccination</span><span>Dose</span><span>Date</span><span>Administered by</span><span>Status</span><span>Actions</span></div>@for(v of visibleVaccines();track v.id){<article class=\"data-row vaccine-row\"><div class=\"identity\"><span class=\"avatar coral\">{{initials(v.patient)}}</span><div><strong>{{fullName(v.patient)}}</strong><small>Patient vaccination record</small></div></div><div class=\"vaccine-name\"><strong>{{v.vaccineName}}</strong></div><span class=\"vaccine-dose\">{{v.dose}}</span><time>{{v.dateAdministered|date:'mediumDate'}}</time><span>{{v.administeredBy}}</span><span class=\"status\"><i></i>{{v.status}}</span><div class=\"row-actions\"><button (click)=\"viewDetail('vaccine',v.id)\">View</button></div></article>}@empty{<div class=\"empty\">No vaccinations found.</div>}}\n            @if(view()==='Users'){<div class=\"data-head users-row\"><span>User</span><span>Role</span><span>Status</span><span>Actions</span></div>@for(u of visibleUsers();track u.id){<article class=\"data-row users-row\"><div class=\"identity\"><span class=\"avatar doctor\">{{initials(u)}}</span><div><strong>{{fullName(u)}}</strong><small>{{u.email}}</small></div></div><span class=\"role-badge\">{{roleLabel(u.role)}}</span><span class=\"user-status\" [class.inactive]=\"!u.isActive\"><i></i>{{u.isActive?'Active':'Inactive'}}</span><div class=\"row-actions\"><button (click)=\"edit(u,'user')\">Edit</button>@if(u.isActive){<button class=\"danger\" (click)=\"remove(u,'user')\">Deactivate</button>}</div></article>}@empty{<div class=\"empty\">No users found.</div>}}\n          </section>\n        }\n      </section>\n    </main>\n  </div>\n}\n\n@if(modal()==='appointment'){<div class=\"modal-backdrop appointment-modal-backdrop\"><section class=\"user-modal form-modal appointment-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"appointment-modal-title\"><header class=\"appointment-modal-header\"><div class=\"appointment-modal-icon\">\u25A3</div><div><span class=\"patient-modal-eyebrow\">APPOINTMENT</span><h2 id=\"appointment-modal-title\">{{selected()?'Edit appointment':'Book appointment'}}</h2></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null); error.set('')\" aria-label=\"Close\">\u00D7</button></header><form (ngSubmit)=\"save('appointment')\">@if(error()){<div class=\"alert error\">{{error()}}</div>}<section class=\"appointment-form-section\"><div class=\"patient-section-heading\"><span>01</span><div><h3>Patient & doctor</h3><p>Select who the visit is for and the assigned physician</p></div></div><div class=\"appointment-fields two-columns\"><label><span>Patient <em>*</em></span><select name=\"patientId\" [(ngModel)]=\"appointmentForm.patientId\" required><option value=\"\">Select a patient</option>@for(p of patients();track p.id){<option [value]=\"p.id\">{{fullName(p)}}</option>}</select>@if(!patients().length){<small>No patients available.</small>}</label><label><span>Doctor <em>*</em></span><select name=\"doctorId\" [(ngModel)]=\"appointmentForm.assignedDoctorId\" required><option value=\"\">Select a doctor</option>@for(d of doctors();track d.id){<option [value]=\"d.id\">Dr. {{fullName(d)}}</option>}</select>@if(!doctors().length){<small class=\"field-warning\">No active doctors found.</small>}</label></div></section><section class=\"appointment-form-section\"><div class=\"patient-section-heading\"><span>02</span><div><h3>Schedule</h3><p>Choose the date, time, and type of visit</p></div></div><div class=\"appointment-fields three-columns\"><label><span>Date <em>*</em></span><input type=\"date\" name=\"date\" [(ngModel)]=\"appointmentForm.date\" required></label><label><span>Time <em>*</em></span><input type=\"time\" name=\"time\" [(ngModel)]=\"appointmentForm.time\" required></label><label><span>Visit type <em>*</em></span><select name=\"visitType\" [(ngModel)]=\"appointmentForm.visitType\" required><option value=\"\">Select visit type</option><option>New patient</option><option>Returning</option><option>Follow-up</option><option>Consultation</option><option>Routine check-up</option><option>Vaccination</option><option>Laboratory review</option><option>Urgent visit</option><option>Teleconsultation</option></select></label></div></section><section class=\"appointment-form-section\"><div class=\"patient-section-heading\"><span>03</span><div><h3>Visit details</h3><p>Add context for the receiving care team</p></div></div><div class=\"appointment-fields\"><label><span>Purpose <em>*</em></span><textarea name=\"purpose\" [(ngModel)]=\"appointmentForm.purpose\" placeholder=\"Briefly describe the reason for this appointment\" required></textarea></label>@if(selected()){<div class=\"two-columns\"><label>Status<select name=\"status\" [(ngModel)]=\"appointmentForm.status\"><option>PENDING</option><option>CONFIRMED</option><option>COMPLETED</option><option>NO_SHOW</option><option>CANCELLED</option></select></label><label>Internal notes<textarea name=\"notes\" [(ngModel)]=\"appointmentForm.notes\" placeholder=\"Optional note for clinic staff\"></textarea></label></div>}</div></section><footer class=\"appointment-modal-actions\"><div><span class=\"secure-dot\">\u2713</span><small>The doctor\u2019s schedule will be checked for conflicts</small></div><div><button type=\"button\" class=\"secondary\" (click)=\"modal.set(null); error.set('')\">Cancel</button><button class=\"primary\" [disabled]=\"loading()||!doctors().length\">{{loading()?'Saving\u2026':selected()?'Save changes':'Book appointment'}}</button></div></footer></form></section></div>}\n@if(modal()==='patient'){<div class=\"modal-backdrop patient-modal-backdrop\"><section class=\"user-modal form-modal patient-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"patient-modal-title\"><header class=\"patient-modal-header\"><div class=\"patient-modal-icon\">\u2667</div><div><span class=\"patient-modal-eyebrow\">PATIENT RECORD</span><h2 id=\"patient-modal-title\">{{selected()?'Edit patient':'Register new patient'}}</h2>@if(selected()){<p>Update demographic and clinical information.</p>}</div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null); error.set('')\" aria-label=\"Close\">\u00D7</button></header><form (ngSubmit)=\"save('patient')\">@if(error()){<div class=\"alert error\">{{error()}}</div>}<section class=\"patient-form-section\"><div class=\"patient-section-heading\"><span>01</span><div><h3>Personal information</h3><p>Identity and demographic details</p></div></div><div class=\"patient-fields identity-fields\"><label><span>First name <em>*</em></span><input name=\"firstName\" [(ngModel)]=\"patientForm.firstName\" autocomplete=\"given-name\" placeholder=\"First name\" required></label><label><span>Last name <em>*</em></span><input name=\"lastName\" [(ngModel)]=\"patientForm.lastName\" autocomplete=\"family-name\" placeholder=\"Last name\" required></label><label><span>Date of birth <em>*</em></span><input type=\"date\" name=\"dob\" [(ngModel)]=\"patientForm.dateOfBirth\" required></label><label>Sex<select name=\"sex\" [(ngModel)]=\"patientForm.sex\"><option value=\"\">Select</option><option>Female</option><option>Male</option><option>Other</option></select></label><label>Blood type<select name=\"bloodType\" [(ngModel)]=\"patientForm.bloodType\"><option value=\"\">Unknown</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select></label></div></section><section class=\"patient-form-section\"><div class=\"patient-section-heading\"><span>02</span><div><h3>Contact & coverage</h3><p>Ways to reach the patient</p></div></div><div class=\"patient-fields contact-fields\"><label>Mobile number<input name=\"mobile\" type=\"tel\" [(ngModel)]=\"patientForm.mobileNumber\" autocomplete=\"tel\" placeholder=\"+63 9XX XXX XXXX\"></label><label>Email address<input type=\"email\" name=\"patientEmail\" [(ngModel)]=\"patientForm.emailAddress\" autocomplete=\"email\" placeholder=\"patient@example.com\"></label><label>PhilHealth ID<input name=\"philhealth\" [(ngModel)]=\"patientForm.philHealthInsuranceId\" placeholder=\"12-345678901-2\"></label><label class=\"span-full\">Home address<input name=\"address\" [(ngModel)]=\"patientForm.homeAddress\" autocomplete=\"street-address\" placeholder=\"House number, street, city, province\"></label></div></section><section class=\"patient-form-section\"><div class=\"patient-section-heading\"><span>03</span><div><h3>Emergency contact</h3><p>Contact in case of urgent care</p></div></div><div class=\"patient-fields emergency-fields\"><label>Contact name<input name=\"emergencyName\" [(ngModel)]=\"patientForm.emergencyContactName\" placeholder=\"Full name\"></label><label>Relationship<select name=\"emergencyRelationship\" [(ngModel)]=\"patientForm.emergencyContactRelationship\"><option value=\"\">Select relationship</option><optgroup label=\"Immediate family\"><option>Mother</option><option>Father</option><option>Parent</option><option>Son</option><option>Daughter</option><option>Child</option><option>Brother</option><option>Sister</option><option>Sibling</option></optgroup><optgroup label=\"Partner & relatives\"><option>Spouse</option><option>Partner</option><option>Grandparent</option><option>Grandchild</option><option>Aunt</option><option>Uncle</option><option>Cousin</option><option>Relative</option></optgroup><optgroup label=\"Care & support\"><option>Legal guardian</option><option>Caregiver</option><option>Friend</option><option>Neighbor</option><option>Employer</option><option>Other</option></optgroup></select></label><label>Contact number<input name=\"emergencyNumber\" type=\"tel\" [(ngModel)]=\"patientForm.emergencyContactNumber\" placeholder=\"+63 9XX XXX XXXX\"></label></div></section><section class=\"patient-form-section clinical-section\"><div class=\"patient-section-heading\"><span>04</span><div><h3>Clinical overview</h3><p>Important information visible to the care team</p></div></div><div class=\"patient-fields clinical-fields\"><label>Known allergies<textarea name=\"allergies\" [(ngModel)]=\"patientForm.allergies\" placeholder=\"List medication, food, or environmental allergies\"></textarea></label><label>Medical conditions<textarea name=\"conditions\" [(ngModel)]=\"patientForm.conditions\" placeholder=\"List diagnosed or ongoing conditions\"></textarea></label></div></section><footer class=\"patient-modal-actions\"><div><span class=\"secure-dot\">\u2713</span><small>Stored securely in the patient record</small></div><div><button type=\"button\" class=\"secondary\" (click)=\"modal.set(null); error.set('')\">Cancel</button><button class=\"primary\" [disabled]=\"loading()\">{{loading()?'Saving\u2026':selected()?'Save changes':'Register patient'}}</button></div></footer></form></section></div>}\n@if(modal()==='prescription'){<div class=\"modal-backdrop workflow-modal-backdrop\"><section class=\"user-modal workflow-modal prescription-workflow\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"prescription-modal-title\"><header class=\"workflow-modal-header\"><div class=\"workflow-modal-icon rx-icon\">Rx</div><div><span class=\"workflow-eyebrow\">MEDICATION ORDER</span><h2 id=\"prescription-modal-title\">{{selected()?'Edit prescription':'New prescription'}}</h2><p>Document medication details and safe-use instructions</p></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null); error.set('')\" aria-label=\"Close\">\u00D7</button></header><form (ngSubmit)=\"save('prescription')\">@if(error()){<div class=\"alert error\">{{error()}}</div>}<section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>01</span><div><h3>Patient</h3><p>Confirm identity and review allergy status</p></div></div><div class=\"workflow-fields\"><label><span>Patient <em>*</em></span><input name=\"rxPatientSearch\" type=\"text\" list=\"prescription-patient-suggestions\" [ngModel]=\"prescriptionPatientSearch\" (ngModelChange)=\"resolvePrescriptionPatient($event)\" placeholder=\"Type a patient name\" autocomplete=\"off\" required><datalist id=\"prescription-patient-suggestions\">@for(p of patients();track p.id){<option [value]=\"fullName(p)\"></option>}</datalist>@if(selectedPrescriptionPatient();as patient){<small class=\"patient-match\">\u2713 {{fullName(patient)}} selected \u00B7 Allergies: {{patient.allergies||'none recorded'}}</small>}@else if(prescriptionPatientSearch){<small class=\"field-warning\">Choose a matching patient from the suggestions.</small>}</label></div></section><section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>02</span><div><h3>Medication</h3><p>Drug, dose, and dispensing quantity</p></div></div><div class=\"workflow-fields workflow-grid four\"><label><span>Medication <em>*</em></span><input name=\"medication\" [(ngModel)]=\"prescriptionForm.medication\" placeholder=\"Generic or brand name\" required></label><label><span>Dosage <em>*</em></span><input name=\"dosage\" [(ngModel)]=\"prescriptionForm.dosage\" placeholder=\"e.g. 500 mg tablet\" required></label><label><span>Quantity <em>*</em></span><input type=\"number\" min=\"1\" name=\"quantity\" [(ngModel)]=\"prescriptionForm.quantity\" required></label><label>Refills<input type=\"number\" min=\"0\" name=\"refills\" [(ngModel)]=\"prescriptionForm.refills\"></label></div>@if(!selected()){<div class=\"additional-medications\">@for(medication of additionalMedications;track $index){<article class=\"medication-entry\"><header><div><span class=\"medication-number\">{{$index+2}}</span><div><strong>Additional medication</strong><small>Medication {{$index+2}} of {{additionalMedications.length+1}}</small></div></div><button type=\"button\" (click)=\"removeMedication($index)\" aria-label=\"Remove medication\">Remove</button></header><div class=\"workflow-fields workflow-grid four\"><label><span>Medication <em>*</em></span><input [name]=\"'extraMedication'+$index\" [(ngModel)]=\"medication.medication\" placeholder=\"Generic or brand name\" required></label><label><span>Dosage <em>*</em></span><input [name]=\"'extraDosage'+$index\" [(ngModel)]=\"medication.dosage\" placeholder=\"e.g. 500 mg tablet\" required></label><label><span>Quantity <em>*</em></span><input type=\"number\" min=\"1\" [name]=\"'extraQuantity'+$index\" [(ngModel)]=\"medication.quantity\" required></label><label>Refills<input type=\"number\" min=\"0\" [name]=\"'extraRefills'+$index\" [(ngModel)]=\"medication.refills\"></label></div><label class=\"medication-instructions\"><span>Patient instructions <em>*</em></span><textarea [name]=\"'extraInstructions'+$index\" [(ngModel)]=\"medication.instructions\" placeholder=\"Dose, route, frequency, and duration\" required></textarea></label></article>}<button class=\"add-medication-button\" type=\"button\" (click)=\"addMedication()\"><span>\uFF0B</span><div><strong>Add another medication</strong><small>Include an additional medication in this prescription</small></div></button></div>}</section><section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>03</span><div><h3>Directions</h3><p>Clear instructions for the patient and care team</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>Patient instructions <em>*</em></span><textarea name=\"instructions\" [(ngModel)]=\"prescriptionForm.instructions\" placeholder=\"Dose, route, frequency, and duration\" required></textarea></label><label>Clinical notes<textarea name=\"rxNotes\" [(ngModel)]=\"prescriptionForm.notes\" placeholder=\"Optional internal note\"></textarea></label>@if(selected()){<label>Status<select name=\"rxStatus\" [(ngModel)]=\"prescriptionForm.status\"><option>DRAFT</option><option>ISSUED</option><option>CANCELLED</option></select></label>}</div></section><footer class=\"workflow-modal-actions\"><div><span class=\"secure-dot\">!</span><small>Review allergies and dosage before saving</small></div><div><button type=\"button\" class=\"secondary\" (click)=\"modal.set(null); error.set('')\">Cancel</button><button class=\"primary\" [disabled]=\"loading()\">{{loading()?'Saving\u2026':selected()?'Save changes':'Save prescription'}}</button></div></footer></form></section></div>}\n@if(modal()==='vaccine'){<div class=\"modal-backdrop workflow-modal-backdrop\"><section class=\"user-modal workflow-modal vaccine-workflow\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"vaccine-modal-title\"><header class=\"workflow-modal-header\"><div class=\"workflow-modal-icon vaccine-icon\">\u271A</div><div><span class=\"workflow-eyebrow\">IMMUNIZATION RECORD</span><h2 id=\"vaccine-modal-title\">Add vaccination</h2><p>Record administration and vaccine traceability details</p></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null); error.set('')\" aria-label=\"Close\">\u00D7</button></header><form (ngSubmit)=\"save('vaccine')\">@if(error()){<div class=\"alert error\">{{error()}}</div>}<section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>01</span><div><h3>Patient & vaccine</h3><p>Select the recipient and administered vaccine</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>Patient <em>*</em></span><select name=\"vaxPatient\" [(ngModel)]=\"vaccineForm.patientId\" required><option value=\"\">Select a patient</option>@for(p of patients();track p.id){<option [value]=\"p.id\">{{fullName(p)}}</option>}</select></label><label><span>Vaccine <em>*</em></span><input name=\"vaccineName\" [(ngModel)]=\"vaccineForm.vaccineName\" placeholder=\"e.g. Influenza\" required></label><label><span>Dose <em>*</em></span><input name=\"dose\" [(ngModel)]=\"vaccineForm.dose\" placeholder=\"e.g. 0.5 mL\" required></label><label><span>Status <em>*</em></span><select name=\"vaxStatus\" [(ngModel)]=\"vaccineForm.status\" required><option>COMPLETED</option><option>SCHEDULED</option><option>DEFERRED</option></select></label></div></section><section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>02</span><div><h3>Administration</h3><p>When and by whom the vaccine was given</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>Date administered <em>*</em></span><input type=\"date\" name=\"vaxDate\" [(ngModel)]=\"vaccineForm.dateAdministered\" required></label><label><span>Administered by <em>*</em></span><input name=\"administeredBy\" [(ngModel)]=\"vaccineForm.administeredBy\" placeholder=\"Clinician name\" required></label></div></section><section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>03</span><div><h3>Traceability</h3><p>Manufacturer and batch information</p></div></div><div class=\"workflow-fields workflow-grid two\"><label>Manufacturer<input name=\"manufacturer\" [(ngModel)]=\"vaccineForm.manufacturer\" placeholder=\"Vaccine manufacturer\"></label><label>Lot number<input name=\"lotNumber\" [(ngModel)]=\"vaccineForm.lotNumber\" placeholder=\"Batch or lot number\"></label></div></section><footer class=\"workflow-modal-actions\"><div><span class=\"secure-dot\">\u2713</span><small>This record becomes part of the patient\u2019s immunization history</small></div><div><button type=\"button\" class=\"secondary\" (click)=\"modal.set(null); error.set('')\">Cancel</button><button class=\"primary\" [disabled]=\"loading()\">{{loading()?'Saving\u2026':'Save vaccination'}}</button></div></footer></form></section></div>}\n@if(modal()==='user'){<div class=\"modal-backdrop workflow-modal-backdrop\"><section class=\"user-modal workflow-modal user-workflow\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"user-modal-title\"><header class=\"workflow-modal-header\"><div class=\"workflow-modal-icon user-icon\">\u2659</div><div><span class=\"workflow-eyebrow\">ACCESS MANAGEMENT</span><h2 id=\"user-modal-title\">{{selected()?'Edit user':'Register new user'}}</h2><p>{{selected()?'Update account information and permissions':'Create a secure clinic workspace account'}}</p></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null); error.set('')\" aria-label=\"Close\">\u00D7</button></header><form (ngSubmit)=\"save('user')\">@if(error()){<div class=\"alert error\">{{error()}}</div>}<section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>01</span><div><h3>Account identity</h3><p>Name and sign-in email address</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>First name <em>*</em></span><input name=\"userFirst\" [(ngModel)]=\"userForm.firstName\" required autocomplete=\"given-name\" placeholder=\"First name\"></label><label><span>Last name <em>*</em></span><input name=\"userLast\" [(ngModel)]=\"userForm.lastName\" required autocomplete=\"family-name\" placeholder=\"Last name\"></label><label class=\"workflow-span-full\"><span>Email address <em>*</em></span><input type=\"email\" name=\"userEmail\" [(ngModel)]=\"userForm.email\" required autocomplete=\"email\" placeholder=\"name@clinic.com\"></label></div></section><section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>02</span><div><h3>Access level</h3><p>Role and account availability</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>Role <em>*</em></span><select name=\"userRole\" [(ngModel)]=\"userForm.role\" required><option value=\"ADMIN\">Administrator</option><option value=\"DOCTOR\">Doctor</option><option value=\"NURSE\">Nurse</option><option value=\"FRONT_DESK\">Secretary</option><option value=\"PATIENT\">Patient</option></select></label>@if(selected()){<label>Account status<select name=\"active\" [(ngModel)]=\"userForm.isActive\"><option [ngValue]=\"true\">Active</option><option [ngValue]=\"false\">Inactive</option></select></label>}</div></section>@if(!selected()){<section class=\"workflow-section\"><div class=\"workflow-section-title\"><span>03</span><div><h3>Temporary access</h3><p>Set the initial sign-in credentials</p></div></div><div class=\"workflow-fields workflow-grid two\"><label><span>Temporary password <em>*</em></span><input type=\"password\" minlength=\"8\" name=\"tempPassword\" [(ngModel)]=\"userForm.password\" required autocomplete=\"new-password\"><small>Use at least 8 characters.</small></label><label><span>Confirm password <em>*</em></span><input type=\"password\" minlength=\"8\" name=\"confirmUserPassword\" [(ngModel)]=\"userForm.confirmPassword\" required autocomplete=\"new-password\"></label><p class=\"form-note workflow-span-full\">Share the temporary password through a secure channel.</p></div></section>}<footer class=\"workflow-modal-actions\"><div><span class=\"secure-dot\">\u2713</span><small>Role permissions are enforced by the backend</small></div><div><button type=\"button\" class=\"secondary\" (click)=\"modal.set(null); error.set('')\">Cancel</button><button class=\"primary\" [disabled]=\"loading()\">{{loading()?'Saving\u2026':selected()?'Save changes':'Create user'}}</button></div></footer></form></section></div>}\n@if(modal()==='detail'){@if(detailKind()==='patient'){<div class=\"modal-backdrop\"><section class=\"user-modal patient-view-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"patient-view-title\"><header class=\"patient-view-header\"><div class=\"patient-view-avatar\">{{initials(selected())}}</div><div><span class=\"patient-modal-eyebrow\">PATIENT PROFILE</span><h2 id=\"patient-view-title\">{{fullName(selected())}}</h2><p>Clinical and contact information</p></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null)\" aria-label=\"Close\">\u00D7</button></header><div class=\"patient-view-body\"><section class=\"patient-view-section\"><div class=\"patient-view-section-title\"><span>01</span><div><h3>Personal information</h3><p>Demographics and care identifiers</p></div></div><dl class=\"patient-view-grid\"><div><dt>Date of birth</dt><dd>{{$any(selected()).dateOfBirth|date:'longDate'}}</dd></div><div><dt>Age</dt><dd>{{age($any(selected()))}} years</dd></div><div><dt>Sex</dt><dd>{{$any(selected()).sex||'Not recorded'}}</dd></div><div><dt>Blood type</dt><dd>{{$any(selected()).bloodType||'Not recorded'}}</dd></div><div><dt>PhilHealth ID</dt><dd>{{$any(selected()).philHealthInsuranceId||'Not recorded'}}</dd></div></dl></section><section class=\"patient-view-section\"><div class=\"patient-view-section-title\"><span>02</span><div><h3>Contact details</h3><p>Patient and emergency contact</p></div></div><div class=\"patient-contact-columns\"><dl class=\"patient-view-grid\"><div><dt>Mobile number</dt><dd>{{$any(selected()).mobileNumber||'Not recorded'}}</dd></div><div><dt>Email address</dt><dd>{{$any(selected()).emailAddress||'Not recorded'}}</dd></div><div class=\"view-span-full\"><dt>Home address</dt><dd>{{$any(selected()).homeAddress||'Not recorded'}}</dd></div></dl><aside class=\"emergency-card\"><span>Emergency contact</span><strong>{{$any(selected()).emergencyContactName||'Not recorded'}}</strong><p>@if($any(selected()).emergencyContactRelationship){<span>{{$any(selected()).emergencyContactRelationship}} \u00B7 </span>}{{$any(selected()).emergencyContactNumber||'No contact number'}}</p></aside></div></section><section class=\"patient-view-section clinical-view-section\"><div class=\"patient-view-section-title\"><span>03</span><div><h3>Clinical overview</h3><p>Information requiring care-team attention</p></div></div><div class=\"patient-clinical-cards\"><article class=\"allergy-card\"><span>!</span><div><small>KNOWN ALLERGIES</small><strong>{{$any(selected()).allergies||'None recorded'}}</strong></div></article><article class=\"condition-card\"><span>+</span><div><small>MEDICAL CONDITIONS</small><strong>{{$any(selected()).conditions||'None recorded'}}</strong></div></article></div></section></div><footer class=\"patient-view-actions\"><small>Last available patient record</small><div><button class=\"secondary\" type=\"button\" (click)=\"modal.set(null)\">Close</button><button class=\"primary\" type=\"button\" (click)=\"edit($any(selected()),'patient')\">Edit patient</button></div></footer></section></div>}@else{<div class=\"modal-backdrop workflow-modal-backdrop\"><section class=\"user-modal record-detail-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"record-detail-title\"><header class=\"workflow-modal-header\"><div class=\"workflow-modal-icon detail-icon\">{{detailIcon()}}</div><div><span class=\"workflow-eyebrow\">CLINIC RECORD</span><h2 id=\"record-detail-title\">{{detailTitle()}}</h2><p>Review the complete saved record</p></div><button class=\"modal-close\" type=\"button\" (click)=\"modal.set(null)\" aria-label=\"Close\">\u00D7</button></header><div class=\"record-detail-body\">@if(detailKind()==='prescription'){<section class=\"prescription-view-summary\"><div><span class=\"avatar violet\">{{initials($any(selected()).patient)}}</span><div><small>PATIENT</small><strong>{{fullName($any(selected()).patient)}}</strong></div></div><div><small>PRESCRIBED BY</small><strong>Dr. {{fullName($any(selected()).doctor)}}</strong></div><div><small>ISSUED DATE</small><strong>{{$any(selected()).issuedAt|date:'longDate'}}</strong></div></section>}<dl class=\"record-detail-grid\">@for(entry of objectEntries(selected());track entry[0]){<div [class.record-wide]=\"entry[0]==='instructions'||entry[0]==='notes'||entry[0]==='purpose'\"><dt>{{fieldLabel(entry[0])}}</dt><dd>{{entry[1]}}</dd></div>}</dl>@if(selected() && $any(selected()).allergies){<aside class=\"record-safety-alert\"><span>!</span><div><small>RECORDED ALLERGIES</small><strong>{{$any(selected()).allergies}}</strong></div></aside>}</div><footer class=\"record-detail-actions\"><small>Read-only clinic record</small><div><button class=\"secondary\" type=\"button\" (click)=\"modal.set(null)\">Close</button>@if($any(selected())?.medication){<button class=\"primary\" type=\"button\" (click)=\"print()\">Print prescription</button>}</div></footer></section></div>}}\n", styles: [":host { display: block; min-height: 100vh; }\n.app-shell { min-height: 100vh; display: grid; grid-template-columns: 236px 1fr; }\n.sidebar { background: #fff; border-right: 1px solid #e3ece9; padding: 28px 16px 18px; display: flex; flex-direction: column; position: fixed; inset: 0 auto 0 0; width: 236px; z-index: 20; }\n.brand { display: flex; align-items: center; gap: 10px; font: 800 20px 'Manrope'; color: #123d38; padding: 0 10px; }\n.brand-mark { background: #0d8578; color: white; width: 31px; height: 31px; border-radius: 9px; display: inline-grid; place-items: center; font-size: 22px; box-shadow: 0 5px 12px #0d85782c; }\n.nav-label { color: #9aa9a6; font-size: 10px; letter-spacing: .14em; font-weight: 700; margin: 40px 13px 10px; }\n.nav-label.management-label { margin-top: 28px; }\n.nav-item { border: 0; background: transparent; color: #5b6d69; width: 100%; display: flex; align-items: center; gap: 12px; padding: 11px 13px; border-radius: 9px; margin: 3px 0; font-weight: 600; text-align: left; }\n.nav-item:hover { background: #f2f8f6; color: #116b61; }\n.nav-item.active { background: #e9f6f2; color: #0b796c; }\n.nav-icon { width: 20px; text-align: center; font-weight: 700; }\n.sidebar-help { margin-top: auto; background: #f4f9f7; border: 1px solid #e7efed; padding: 13px; border-radius: 10px; display: flex; gap: 10px; align-items: center; }\n.help-icon { border: 1px solid #bdd5d0; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: #0d8578; }\n.sidebar-help div, .user-card div { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.sidebar-help strong, .user-card strong { font-size: 12px; }\nsmall { color: #83928f; }\n.sidebar-help small, .user-card small { font-size: 10px; }\n.user-card { display: flex; gap: 10px; align-items: center; border-top: 1px solid #e7eeec; padding: 17px 5px 0; margin-top: 16px; }\n.user-card div { flex: 1; }\nmain { grid-column: 2; min-width: 0; }\n.topbar { height: 76px; background: rgba(255,255,255,.94); border-bottom: 1px solid #e3ece9; display: flex; align-items: center; padding: 0 34px; position: sticky; top: 0; z-index: 10; backdrop-filter: blur(8px); }\n.search { display: flex; align-items: center; gap: 8px; color: #81908d; width: min(400px, 45vw); }\n.search input { width: 100%; border: 0; outline: 0; color: #304b47; background: transparent; }\n.header-actions { margin-left: auto; display: flex; align-items: center; gap: 18px; }\n.role-switcher { font-size: 11px; color: #7b8a87; display: flex; align-items: center; gap: 8px; }\n.role-switcher select { border: 1px solid #d6e3df; background: #fff; color: #36514d; border-radius: 8px; padding: 7px 28px 7px 10px; font-size: 12px; font-weight: 700; }\n.icon-button { width: 36px; height: 36px; border: 1px solid #e0e9e7; background: white; border-radius: 9px; position: relative; color: #526763; }\n.notification-dot { position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #ef7666; right: 7px; top: 7px; border: 1px solid white; }\n.content { width: 100%; padding: 32px clamp(24px,3vw,44px) 50px; margin: 0; }\n.page-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 27px; }\n.eyebrow { color: #0b897a !important; font-size: 10px !important; font-weight: 800; letter-spacing: .12em; margin: 0 0 7px !important; }\nh1, h2, h3 { font-family: 'Manrope'; margin: 0; }\nh1 { font-size: 28px; letter-spacing: -.035em; color: #173a35; }\n.page-heading p { margin: 5px 0 0; color: #80908c; font-size: 13px; }\nbutton.primary { background: #0d8074; color: white; border: 0; border-radius: 8px; padding: 11px 16px; font-weight: 700; font-size: 12px; box-shadow: 0 4px 10px #0d807422; }\nbutton.primary:hover { background: #096e64; }\nbutton.secondary { background: white; color: #31524d; border: 1px solid #d8e5e2; border-radius: 8px; padding: 10px 14px; font-weight: 700; font-size: 11px; }\n.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 17px; }\n.stats-grid.with-total { grid-template-columns: repeat(5, minmax(0,1fr)); }\n.panel, .stat { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; box-shadow: 0 2px 4px #294d4610; }\n.stat { display: flex; align-items: flex-start; gap: 13px; padding: 18px; }\n.stat-icon { width: 37px; height: 37px; border-radius: 9px; display: grid; place-items: center; flex: 0 0 auto; font-weight: 800; font-size: 13px; }\n.stat-icon.teal { background: #e7f6f2; color: #0d8879; }.stat-icon.blue { background: #e9f1fb; color: #4879ae; }.stat-icon.mint { background: #e7f5ee; color: #218161; }.stat-icon.orange { background: #fff1e8; color: #dc7b45; }.stat-icon.violet { background: #f1ecfa; color: #8065b5; }\n.stat div { display: flex; flex-direction: column; }\n.stat small { font-size: 11px; margin-bottom: 4px; }\n.stat strong { font: 800 25px 'Manrope'; color: #27443f; line-height: 1.15; }\n.stat strong i { font: 600 11px 'DM Sans'; }\n.stat em { font-style: normal; font-size: 9px; color: #9aa6a4; margin-top: 4px; }.stat em b { color: #1b9b74; }\n.dashboard-grid { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(330px, .8fr); gap: 17px; }\n.panel-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 19px 20px; border-bottom: 1px solid #e8efed; }\n.panel-header h2 { font-size: 15px; color: #26443f; }.panel-header p { font-size: 10px; color: #8c9997; margin: 4px 0 0; }\n.text-button { border: 0; background: transparent; color: #0a8174; font-weight: 700; font-size: 10px; }\n.appointment { min-height: 72px; display: grid; grid-template-columns: 62px 38px minmax(150px,1fr) auto 20px; align-items: center; gap: 12px; padding: 0 20px; border-bottom: 1px solid #edf2f1; }\n.appointment:last-child { border-bottom: 0; }.appointment time { font-size: 10px; color: #6e7d7a; font-weight: 600; }\n.avatar { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 10px; font-weight: 800; flex: 0 0 auto; }\n.avatar.mint { background: #dff2ec; color: #267565; }.avatar.blue { background: #e3edf8; color: #4a7199; }.avatar.coral { background: #fbe8e3; color: #b46758; }.avatar.violet { background: #eee7f7; color: #795fa2; }.avatar.doctor { background: #d7f0e9; color: #137768; }\n.patient-info { display: flex; flex-direction: column; gap: 3px; }.patient-info strong { font-size: 11px; color: #304944; }.patient-info span { font-size: 9px; color: #8d9a97; }\n.status { font-size: 9px; border-radius: 20px; padding: 5px 8px; background: #edf7f2; color: #3b8069; display: flex; align-items: center; gap: 5px; white-space: nowrap; }\n.status i { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }.status.waiting { background: #fff5e6; color: #b67b29; }.status.in-consultation { background: #e9f1fb; color: #4d78a5; }\n.more { border: 0; background: transparent; color: #91a09d; }.empty { padding: 40px; text-align: center; color: #889895; }\n.next-patient .panel-header { border-bottom: 0; padding-bottom: 10px; }.patient-profile { display: flex; gap: 12px; align-items: center; padding: 8px 20px 16px; }.avatar.large { width: 44px; height: 44px; font-size: 12px; }.patient-profile h3 { font-size: 13px; }.patient-profile p { color: #899693; font-size: 9px; margin: 4px 0 0; }\n.vitals { margin: 0 20px; background: #f7faf9; border-radius: 9px; display: grid; grid-template-columns: repeat(3,1fr); padding: 12px 8px; }.vitals div { display: flex; flex-direction: column; align-items: center; border-right: 1px solid #e4ecea; }.vitals div:last-child { border: 0; }.vitals span,.vitals small { font-size: 8px; color: #8d9a97; }.vitals strong { font: 700 14px 'Manrope'; margin: 3px; }\n.clinical-alert { margin: 13px 20px; padding: 10px; border: 1px solid #f2d7d0; background: #fff7f5; border-radius: 8px; display: flex; gap: 9px; align-items: center; }.clinical-alert>span { background: #f5d3cb; color: #b75f50; width: 23px; height: 23px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }.clinical-alert strong { font-size: 9px; color: #8d4e43; }.clinical-alert p { font-size: 8px; color: #af7f76; margin: 2px 0 0; }\n.button-row { display: flex; gap: 8px; padding: 3px 20px 20px; }.button-row button { flex: 1; }\n.recent-panel { margin-top: 17px; }.patient-table article { display: grid; grid-template-columns: minmax(200px,1.2fr) 1fr 120px auto; gap: 20px; align-items: center; padding: 12px 20px; border-bottom: 1px solid #edf2f1; font-size: 10px; color: #566b67; }.patient-table article:last-child { border: 0; }.identity { display: flex; gap: 10px; align-items: center; }.identity>div { display: flex; flex-direction: column; }.identity strong { color: #314b46; }.identity small { font-size: 8px; }.last-visit { color: #8b9996; }.last-visit b { color: #4b625e; }.patient-table button { border: 0; background: transparent; color: #0b8174; font-weight: 700; font-size: 9px; }\n.subpage { margin-top: -14px; margin-bottom: 20px; }.placeholder-panel { min-height: 450px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }.placeholder-icon { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 18px; background: #e5f5f0; color: #0d8074; font: 800 20px 'Manrope'; margin-bottom: 18px; }.placeholder-panel h2 { font-size: 20px; }.placeholder-panel p { color: #7e8e8a; max-width: 490px; line-height: 1.6; font-size: 13px; }.placeholder-panel button { margin-top: 10px; }\n.user-summary { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 17px; }.user-summary article { background: #fff; border: 1px solid #e0e9e7; border-radius: 12px; padding: 17px 19px; display: flex; justify-content: space-between; align-items: center; }.user-summary small { font-size: 11px; }.user-summary strong { color: #26443f; font: 800 21px 'Manrope'; }\n.users-toolbar { min-height: 70px; padding: 14px 20px; display: flex; justify-content: space-between; gap: 14px; align-items: center; border-bottom: 1px solid #e8efed; }.user-search { display: flex; align-items: center; gap: 8px; background: #f7faf9; border: 1px solid #e0e9e7; border-radius: 8px; padding: 9px 12px; width: min(390px,55%); color: #80908c; }.user-search input { border: 0; outline: 0; background: transparent; width: 100%; font-size: 11px; }.users-toolbar label { color: #7b8a87; font-size: 10px; display: flex; align-items: center; gap: 8px; }.users-toolbar select,.user-modal select,.user-modal input { border: 1px solid #d8e5e2; background: #fff; border-radius: 8px; padding: 9px 10px; color: #36514d; font-size: 11px; }\n.users-table-head,.users-table article { display: grid; grid-template-columns: minmax(250px,1.5fr) minmax(120px,.7fr) minmax(100px,.6fr) 130px; gap: 18px; align-items: center; padding: 13px 20px; }.users-table-head { color: #93a09e; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; background: #fbfcfc; }.users-table article { min-height: 66px; border-top: 1px solid #edf2f1; }.users-table .identity strong { font-size: 11px; }.users-table .identity small { font-size: 9px; margin-top: 3px; }.role-badge { display: inline-block; background: #eef6f4; color: #34675f; padding: 5px 8px; border-radius: 6px; font-size: 9px; }.user-status { display: inline-flex; align-items: center; gap: 6px; color: #27805f; font-size: 9px; }.user-status i { width: 6px; height: 6px; background: currentColor; border-radius: 50%; }.user-status.inactive { color: #9a7771; }.user-actions { display: flex; gap: 6px; }.user-actions button { border: 1px solid #d8e5e2; background: #fff; color: #31524d; padding: 7px 9px; border-radius: 7px; font-size: 9px; font-weight: 700; }.user-actions button.danger { color: #b35d52; border-color: #efd8d4; }\n.user-modal { display:block; width: min(520px,100%); background: #fff; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; inset:auto; padding:0; }.user-modal-header { padding: 24px 26px 18px; border-bottom: 1px solid #e8efed; }.user-modal-header h2 { color: #26443f; font-size: 19px; }.user-modal-header p{margin:6px 30px 0 0;color:#80908c;font-size:10px}.user-modal form { padding: 22px 26px 25px; }.user-modal form>label,.user-modal .form-grid label { display: flex; flex-direction: column; gap: 7px; color: #516763; font-size: 10px; font-weight: 700; margin-bottom: 16px; }.user-modal label small{color:#80908c;font-size:9px;font-weight:400}.user-modal input,.user-modal select { padding: 11px; font-weight: 400; }.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }.form-note { background: #f4f9f7; border-radius: 8px; color: #71837f; font-size: 10px; line-height: 1.5; padding: 11px 12px; margin: 0 0 20px; }.user-modal .modal-actions { padding: 0; }\n.modal-backdrop { position: fixed; inset: 0; z-index: 50; background: #153d3899; display: grid; place-items: center; padding: 20px; backdrop-filter: blur(3px); }.prescription-modal { width: min(720px, 100%); max-height: 94vh; overflow: auto; background: #f4f7f6; border-radius: 14px; box-shadow: 0 24px 70px #0a272266; position: relative; }.modal-close { position: absolute; right: 16px; top: 12px; border: 0; background: transparent; font-size: 25px; color: #667b77; z-index: 2; }.rx-paper { background: white; margin: 42px 36px 18px; padding: 34px 42px; min-height: 680px; box-shadow: 0 2px 10px #23453f15; }.rx-paper header { display: flex; justify-content: space-between; border-bottom: 2px solid #0d8074; padding-bottom: 20px; }.rx-paper header .brand { padding: 0; }.rx-paper header>div:last-child { text-align: right; display: flex; flex-direction: column; font-size: 12px; }.rx-paper header small { font-size: 9px; }.rx-patient { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #dfe8e6; }.rx-patient span { display: flex; flex-direction: column; gap: 5px; }.rx-patient small { font-size: 8px; letter-spacing: .1em; }.rx-patient strong { font-size: 12px; }.rx-symbol { font: 700 48px Georgia; margin: 25px 0 10px; }.medicine { margin-left: 45px; }.medicine h3 { font-size: 17px; }.medicine p { font-size: 13px; line-height: 1.6; }.medicine small { font-size: 10px; }.warning { color: #963f35; background: #fff1ee; border: 1px solid #f0c8c0; border-radius: 7px; padding: 12px; font-size: 10px; line-height: 1.5; margin-top: 35px; }.rx-paper footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 90px; }.rx-paper footer>div:first-child { display: flex; flex-direction: column; border-top: 1px solid #80908c; padding-top: 4px; min-width: 170px; }.signature { font: italic 22px Georgia; margin-top: -31px; margin-bottom: 8px; }.clinic-address { text-align: right; color: #71827e; font-size: 9px; line-height: 1.6; }.modal-actions { display: flex; justify-content: flex-end; gap: 9px; padding: 0 36px 22px; }\n.menu-button,.close-nav { display: none; }\n@media (max-width: 1100px) { .stats-grid { grid-template-columns: repeat(2,1fr); }.dashboard-grid { grid-template-columns: 1fr; }.right-column { display: grid; grid-template-columns: 1fr; }.recent-panel { margin-top: 17px; }.user-summary { grid-template-columns: repeat(2,1fr); } }\n@media (max-width: 760px) { .app-shell { display: block; }.sidebar { transform: translateX(-100%); transition: transform .2s ease; box-shadow: 8px 0 30px #173d3730; }.sidebar.mobile-open { transform: translateX(0); }.close-nav { display: block; position: absolute; top: 20px; right: 14px; border: 0; background: transparent; font-size: 24px; }.menu-button { display: block; border: 0; background: transparent; margin-right: 12px; font-size: 20px; color: #35534e; }.topbar { padding: 0 16px; }.role-switcher { font-size: 0; }.content { padding: 24px 16px 40px; }.page-heading { align-items: flex-start; flex-direction: column; }.stats-grid,.user-summary { grid-template-columns: 1fr; }.appointment { grid-template-columns: 52px 34px 1fr 20px; padding: 0 12px; }.appointment .status { display: none; }.recent-panel { display: none; }.users-toolbar { align-items: stretch; flex-direction: column; }.user-search { width: auto; }.users-table-head { display: none; }.users-table article { grid-template-columns: 1fr auto; gap: 10px; }.users-table article>span { padding-left: 44px; }.user-actions { justify-content: flex-end; }.form-grid { grid-template-columns: 1fr; gap: 0; }.rx-paper { margin: 35px 10px 12px; padding: 25px 20px; }.rx-paper header { flex-direction: column; gap: 16px; }.rx-paper header>div:last-child { text-align: left; }.rx-patient { grid-template-columns: 1fr 1fr; }.rx-paper footer { flex-direction: column; align-items: flex-start; gap: 40px; }.clinic-address { text-align: left; } }\n\n.auth-page { min-height:100vh; display:grid; place-items:center; padding:24px; background:radial-gradient(circle at top,#e5f5f0,#f5f8f7 50%); }\n.auth-card { width:min(440px,100%); background:#fff; border:1px solid #dfe9e6; border-radius:18px; padding:38px; box-shadow:0 20px 55px #173d3718; }\n.auth-card .brand { padding:0; margin-bottom:38px; }.auth-card h1 { margin-bottom:7px; }.auth-card>p:not(.eyebrow) { color:#7e8e8a; font-size:13px; margin:0 0 23px; }\n.auth-card form>label,.auth-card .form-grid label,.form-modal form>label,.form-modal .form-grid label { display:flex; flex-direction:column; gap:7px; color:#516763; font-size:10px; font-weight:700; margin-bottom:16px; }\n.auth-card input,.auth-card select,.form-modal input,.form-modal select,.form-modal textarea,.data-row select { border:1px solid #d8e5e2; border-radius:8px; padding:11px; background:#fff; color:#36514d; font:400 11px 'DM Sans'; }\n.form-modal textarea { min-height:70px; resize:vertical; }.wide { width:100%; }.auth-toggle { width:100%; margin:18px 0; }.auth-card>small { display:block; text-align:center; font-size:9px; }\n.alert { padding:11px 14px; border-radius:8px; margin:0 0 18px; font-size:11px; display:flex; justify-content:space-between; gap:12px; }.alert button { border:0;background:transparent;color:inherit}.alert.error{background:#fff0ed;color:#a94f43;border:1px solid #f2d2cc}.alert.success{background:#eaf7f1;color:#24745e;border:1px solid #cfe9df}\n.patient-profile-panel{margin-bottom:20px}.patient-profile-panel dl{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:0;padding:0 20px 20px}.patient-profile-panel dl div{padding:12px;border-bottom:1px solid #edf2f1}.patient-profile-panel dt{color:#80908c;font-size:9px;text-transform:uppercase}.patient-profile-panel dd{margin:4px 0 0;color:#304944;font-size:11px}.patient-portal-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.portal-list article{display:flex;justify-content:space-between;gap:16px;padding:14px 20px;border-top:1px solid #edf2f1}.portal-list article>div{display:flex;flex-direction:column;gap:5px}.portal-list article>div:last-child{text-align:right;align-items:flex-end}.portal-list strong{font-size:11px;color:#304944}.portal-list small{font-size:9px;color:#80908c}\n.data-panel { overflow:hidden; }.data-head,.data-row { display:grid; gap:18px; align-items:center; padding:13px 20px; }.data-head { background:#fbfcfc; color:#93a09e; font-size:9px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }.data-row { min-height:70px; border-top:1px solid #edf2f1; color:#566b67; font-size:10px; }.appointments-row,.users-row { grid-template-columns:minmax(240px,1.4fr) minmax(140px,.8fr) 130px 190px }.patients-row { grid-template-columns:minmax(280px,1.35fr) minmax(240px,1fr) minmax(170px,.55fr) 168px }.rx-row { grid-template-columns:minmax(190px,1fr) minmax(170px,.9fr) minmax(220px,1.2fr) minmax(150px,.75fr) 115px 90px 118px }.vaccine-row { grid-template-columns:minmax(200px,1.1fr) minmax(150px,.8fr) 90px 125px minmax(150px,.75fr) 105px 68px }.data-row select{padding:7px;font-size:9px}.block{display:block;margin-top:5px}.row-actions{display:flex;gap:7px;justify-content:flex-end;align-items:center}.row-actions button{min-width:48px;border:1px solid #d8e5e2;background:#fff;color:#31524d;padding:8px 9px;border-radius:7px;font-size:9px;font-weight:700;text-align:center}.row-actions button:hover{border-color:#91bbb4;background:#f2f8f6;color:#0a7569}.row-actions .danger{color:#b35d52;border-color:#efd8d4}.compact article{grid-template-columns:1fr 1fr auto}.compact{padding-bottom:5px}.data-head.patients-row>span:last-child{text-align:right}.data-row.patients-row>span:nth-child(2),.data-row.patients-row>span:nth-child(3){min-width:0;overflow-wrap:anywhere}.data-row.patients-row .row-actions{width:168px}.data-head.vaccine-row>span:last-child{text-align:right}.data-row.vaccine-row time{color:#526965;font-size:10px}.vaccine-name{display:flex;min-width:0;flex-direction:column;gap:4px}.vaccine-name strong{color:#314b46;font-size:11px}.vaccine-name small{font-size:9px}.vaccine-dose{display:inline-flex;align-items:center;width:max-content;padding:5px 8px;border-radius:7px;background:#f1f5f4;color:#47635e;font-size:9px;font-weight:700}.data-head.rx-row>span:last-child{text-align:right}.data-row.rx-row time{color:#526965;font-size:10px}.rx-medication{display:flex;min-width:0;flex-direction:column;gap:4px}.rx-medication strong{color:#314b46;font-size:11px}.rx-medication small{font-size:9px}.rx-directions{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.45}\n.form-modal { max-height:94vh; overflow:auto; }.wide-modal{width:min(760px,100%)}.form-modal form{padding:22px 26px 25px}.form-grid.three{grid-template-columns:repeat(3,1fr)}.form-modal .modal-actions{padding:0}.detail-modal{width:min(620px,100%);max-height:90vh;overflow:auto}.detail-modal dl{padding:15px 26px}.detail-modal dl div{display:grid;grid-template-columns:150px 1fr;padding:9px 0;border-bottom:1px solid #edf2f1}.detail-modal dt{text-transform:capitalize;color:#80908c;font-size:10px}.detail-modal dd{margin:0;color:#304944;font-size:11px;overflow-wrap:anywhere}.detail-modal .clinical-alert{margin:0 26px 20px}\n.patient-modal-backdrop{padding:24px}.patient-modal{width:min(880px,100%);max-height:min(92vh,900px);overflow:auto;border:1px solid #dce8e5;border-radius:20px}.patient-modal-header{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:flex-start;gap:14px;padding:22px 28px;background:#fff;border-bottom:1px solid #e5eeec;text-align:left}.patient-modal-icon{display:grid;place-items:center;flex:0 0 44px;height:44px;border-radius:13px;background:linear-gradient(145deg,#dff4ee,#edf8f5);color:#087c6e;font-size:20px}.patient-modal-eyebrow{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.patient-modal-header h2{margin:0;color:#213f3a;font-size:20px}.patient-modal-header p{margin:4px 0 0;color:#82918e;font-size:10px}.patient-modal>form{padding:0}.patient-modal .alert{margin:18px 28px 0}.patient-form-section{display:grid;grid-template-columns:180px 1fr;gap:28px;padding:25px 28px;border-bottom:1px solid #edf2f1}.patient-section-heading{display:flex;gap:11px;align-items:flex-start}.patient-section-heading>span{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#eef7f4;color:#0d8074;font-size:9px;font-weight:800}.patient-section-heading h3{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-section-heading p{margin:0;color:#94a09e;font-size:9px;line-height:1.45}.patient-fields{display:grid;gap:15px}.identity-fields{grid-template-columns:repeat(3,1fr)}.contact-fields{grid-template-columns:repeat(3,1fr)}.emergency-fields{grid-template-columns:repeat(3,1fr)}.clinical-fields{grid-template-columns:1fr 1fr}.patient-fields label{display:flex;flex-direction:column;gap:7px;color:#516763;font-size:9px;font-weight:700}.patient-fields label em{color:#bd5c50;font-size:11px;font-style:normal;font-weight:800}.patient-fields input,.patient-fields select,.patient-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:11px 12px;outline:none;background:#fff;color:#304944;font:400 10px 'DM Sans';transition:border-color .15s,box-shadow .15s}.patient-fields input:focus,.patient-fields select:focus,.patient-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.patient-fields input::placeholder,.patient-fields textarea::placeholder{color:#a5b1ae}.patient-fields textarea{min-height:132px;resize:vertical;font-size:12px;line-height:1.6}.patient-fields .span-full{grid-column:1/-1}.clinical-section{background:#fbfdfc}.patient-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:17px 28px;background:#fff;border-top:1px solid #e1ebe8;box-shadow:0 -8px 20px #23453f0a}.patient-modal-actions>div{display:flex;align-items:center;gap:9px}.patient-modal-actions small{color:#82918e;font-size:9px}.secure-dot{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#e6f5ef;color:#16805f;font-size:9px;font-weight:800}.patient-modal-actions button{min-width:110px}\n.patient-modal-backdrop{padding:18px}.patient-modal.user-modal{width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;border-radius:18px}.patient-modal .patient-modal-header{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;justify-content:stretch;width:100%;min-height:88px;margin:0;padding:18px 32px;text-align:left}.patient-modal .patient-modal-header>div:nth-child(2){justify-self:start;text-align:left}.patient-modal .modal-close{top:24px;right:28px}.patient-modal .patient-form-section{grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px}.patient-modal .patient-fields{gap:18px}.patient-modal .patient-fields label{font-size:10px}.patient-modal .patient-fields input,.patient-modal .patient-fields select,.patient-modal .patient-fields textarea{padding:13px 14px;font-size:12px}.patient-modal .patient-fields textarea{min-height:150px;font-size:13px}.patient-modal .patient-modal-actions{padding:18px 32px}.patient-fields label>span{display:inline-flex;align-items:baseline;gap:3px;line-height:1}.patient-fields label>span em{line-height:1}\n.patient-view-modal.user-modal{display:flex;flex-direction:column;width:min(1400px,calc(100vw - 36px));height:calc(100vh - 36px);max-height:none;margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.patient-view-header{position:sticky;top:0;z-index:3;box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-view-header>div:nth-child(2){justify-self:start;text-align:left}.patient-view-header .modal-close{top:24px;right:28px}.patient-view-avatar{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e3f3ee;color:#0c7c6f;font:800 14px 'Manrope'}.patient-view-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.patient-view-header p{margin:4px 0 0;color:#84938f;font-size:10px}.patient-view-body{flex:1;background:#fbfcfc}.patient-view-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.patient-view-section-title{display:flex;align-items:flex-start;gap:11px}.patient-view-section-title>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.patient-view-section-title h3{margin:1px 0 4px;color:#31504a;font-size:12px}.patient-view-section-title p{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.patient-view-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.patient-view-grid>div{min-width:0;padding:13px 14px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.patient-view-grid dt{color:#899894;font-size:8px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.patient-view-grid dd{margin:5px 0 0;color:#304944;font-size:11px;font-weight:600;overflow-wrap:anywhere}.patient-view-grid .view-span-full{grid-column:1/-1}.patient-contact-columns{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:14px}.patient-contact-columns .patient-view-grid{grid-template-columns:1fr 1fr}.emergency-card{padding:15px 16px;border:1px solid #f0ded4;border-radius:10px;background:#fff9f5}.emergency-card>span{display:block;color:#a76e57;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.emergency-card strong{display:block;margin-top:8px;color:#634c43;font-size:12px}.emergency-card p{margin:5px 0 0;color:#987d72;font-size:9px;line-height:1.45}.clinical-view-section{background:#f8fbfa}.patient-clinical-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}.patient-clinical-cards article{display:flex;align-items:flex-start;gap:12px;min-height:86px;padding:16px;border-radius:11px}.patient-clinical-cards article>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;font-weight:800}.patient-clinical-cards article div{display:flex;flex-direction:column;gap:7px}.patient-clinical-cards small{font-size:8px;font-weight:800;letter-spacing:.07em}.patient-clinical-cards strong{font-size:11px;line-height:1.5}.allergy-card{border:1px solid #efd7d0;background:#fff7f5;color:#9d5d51}.allergy-card>span{background:#f4d9d2}.condition-card{border:1px solid #d7e6e2;background:#f3f9f7;color:#3f7369}.condition-card>span{background:#dceee9}.patient-view-actions{position:sticky;bottom:0;z-index:3;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:72px;margin-top:auto;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.patient-view-actions>div{display:flex;align-items:center;justify-content:flex-end;gap:9px}.patient-view-actions>small{font-size:9px}.patient-view-actions button{min-width:110px}\n.appointment-modal-backdrop{padding:18px}.appointment-modal.user-modal{display:flex;flex-direction:column;width:min(1100px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px}.appointment-modal-header{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.appointment-modal-header>div:nth-child(2){justify-self:start;text-align:left}.appointment-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.appointment-modal-header .modal-close{top:24px;right:28px}.appointment-modal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e5f3f0;color:#0b7e70;font-size:17px;font-weight:800}.appointment-modal>form{padding:0}.appointment-modal .alert{margin:18px 32px 0}.appointment-form-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.appointment-fields{display:grid;gap:18px}.appointment-fields.two-columns,.appointment-fields .two-columns{grid-template-columns:1fr 1fr}.appointment-fields.three-columns{grid-template-columns:repeat(3,1fr)}.appointment-fields label{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.appointment-fields label>span{display:inline-flex;align-items:baseline;gap:3px}.appointment-fields label em{color:#bd5c50;font-size:11px;font-style:normal}.appointment-fields input,.appointment-fields select,.appointment-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.appointment-fields input:focus,.appointment-fields select:focus,.appointment-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.appointment-fields textarea{min-height:92px;resize:vertical;line-height:1.55}.appointment-fields small{font-size:9px;font-weight:400}.appointment-fields .field-warning{color:#a06759}.appointment-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.appointment-modal-actions>div{display:flex;align-items:center;gap:9px}.appointment-modal-actions small{font-size:9px}.appointment-modal-actions button{min-width:120px}\n.workflow-modal-backdrop{padding:18px}.workflow-modal.user-modal{display:flex;flex-direction:column;width:min(1060px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.workflow-modal-header{position:sticky;top:0;z-index:3;display:grid;grid-template-columns:44px minmax(0,1fr);align-items:center;gap:14px;min-height:88px;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.workflow-modal-header>div:nth-child(2){justify-self:start;text-align:left}.workflow-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px}.workflow-modal-header p{margin:4px 0 0;color:#84938f;font-size:10px}.workflow-modal-header .modal-close{top:24px;right:28px}.workflow-modal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;font:800 14px 'Manrope'}.rx-icon{background:#eee9f8;color:#7058a1}.vaccine-icon{background:#e5f3ee;color:#15755e;font-size:18px}.user-icon{background:#e8eff8;color:#4c719d;font-size:18px}.workflow-eyebrow{display:block;margin-bottom:3px;color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.15em}.workflow-modal>form{padding:0}.workflow-modal .alert{margin:18px 32px 0}.workflow-section{display:grid;grid-template-columns:210px minmax(0,1fr);gap:34px;padding:28px 32px;border-bottom:1px solid #e8efed}.workflow-section-title{display:flex;align-items:flex-start;gap:11px}.workflow-section-title>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:8px;background:#eaf5f2;color:#0d8074;font-size:9px;font-weight:800}.workflow-section-title h3{margin:1px 0 4px;color:#31504a;font-size:12px}.workflow-section-title p{margin:0;color:#91a09c;font-size:9px;line-height:1.45}.workflow-fields{display:grid;gap:18px}.workflow-grid.two{grid-template-columns:1fr 1fr}.workflow-grid.four{grid-template-columns:1.4fr 1.1fr .6fr .6fr}.workflow-fields label{display:flex;flex-direction:column;gap:8px;color:#516763;font-size:10px;font-weight:700}.workflow-fields label>span{display:inline-flex;align-items:baseline;gap:3px}.workflow-fields label em{color:#bd5c50;font-size:11px;font-style:normal}.workflow-fields input,.workflow-fields select,.workflow-fields textarea{width:100%;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';transition:border-color .15s,box-shadow .15s}.workflow-fields input:focus,.workflow-fields select:focus,.workflow-fields textarea:focus{border-color:#58a99d;box-shadow:0 0 0 3px #0d807412}.workflow-fields textarea{min-height:104px;resize:vertical;line-height:1.55}.workflow-fields small{font-size:9px;font-weight:400}.workflow-span-full{grid-column:1/-1}.workflow-modal .form-note{margin:0}.workflow-modal-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.workflow-modal-actions>div{display:flex;align-items:center;gap:9px}.workflow-modal-actions small{font-size:9px}.workflow-modal-actions button{min-width:120px}\n.record-detail-modal.user-modal{display:flex;flex-direction:column;width:min(900px,calc(100vw - 36px));max-height:calc(100vh - 36px);margin:0;padding:0;overflow:auto;border:1px solid #dce8e5;border-radius:18px;background:#fff}.detail-icon{background:#edf3f7;color:#516f83;font-size:15px}.record-detail-body{padding:28px 32px;background:#fbfcfc}.record-detail-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0}.record-detail-grid>div{min-width:0;padding:14px 15px;border:1px solid #e1eae8;border-radius:10px;background:#fff}.record-detail-grid .record-wide{grid-column:span 2}.record-detail-grid dt{color:#899894;font-size:8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.record-detail-grid dd{margin:6px 0 0;color:#304944;font-size:11px;font-weight:600;line-height:1.5;overflow-wrap:anywhere}.record-safety-alert{display:flex;align-items:flex-start;gap:12px;margin-top:16px;padding:15px 16px;border:1px solid #efd7d0;border-radius:11px;background:#fff7f5;color:#9d5d51}.record-safety-alert>span{display:grid;place-items:center;width:28px;height:28px;flex:0 0 auto;border-radius:50%;background:#f4d9d2;font-weight:800}.record-safety-alert div{display:flex;flex-direction:column;gap:5px}.record-safety-alert small{font-size:8px;font-weight:800;letter-spacing:.07em}.record-safety-alert strong{font-size:11px}.record-detail-actions{position:sticky;bottom:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 32px;background:#fff;border-top:1px solid #e1eae8;box-shadow:0 -8px 20px #23453f0a}.record-detail-actions>div{display:flex;gap:9px}.record-detail-actions>small{font-size:9px}.record-detail-actions button{min-width:110px}\n.patient-modal .patient-modal-header,.patient-view-modal .patient-view-header,.appointment-modal .appointment-modal-header,.workflow-modal .workflow-modal-header,.record-detail-modal .workflow-modal-header{box-sizing:border-box;display:grid;grid-template-columns:44px minmax(0,1fr) 40px;align-items:center;justify-content:stretch;column-gap:14px;width:100%;min-height:88px;margin:0;padding:18px 32px;background:#fff;border-bottom:1px solid #e4ecea;text-align:left}.patient-modal .patient-modal-header>div:nth-child(2),.patient-view-modal .patient-view-header>div:nth-child(2),.appointment-modal .appointment-modal-header>div:nth-child(2),.workflow-modal .workflow-modal-header>div:nth-child(2),.record-detail-modal .workflow-modal-header>div:nth-child(2){min-width:0;justify-self:start;text-align:left}.patient-modal .patient-modal-header h2,.patient-view-modal .patient-view-header h2,.appointment-modal .appointment-modal-header h2,.workflow-modal .workflow-modal-header h2,.record-detail-modal .workflow-modal-header h2{margin:1px 0 0;color:#213f3a;font-size:21px;line-height:1.2}.patient-modal .patient-modal-header .modal-close,.patient-view-modal .patient-view-header .modal-close,.appointment-modal .appointment-modal-header .modal-close,.workflow-modal .workflow-modal-header .modal-close,.record-detail-modal .workflow-modal-header .modal-close{position:static;display:grid;place-items:center;justify-self:end;width:36px;height:36px;margin:0;padding:0;border:1px solid transparent;border-radius:9px;color:#667b77;font-size:22px;line-height:1;transition:background .15s,border-color .15s,color .15s}.patient-modal .patient-modal-header .modal-close:hover,.patient-view-modal .patient-view-header .modal-close:hover,.appointment-modal .appointment-modal-header .modal-close:hover,.workflow-modal .workflow-modal-header .modal-close:hover,.record-detail-modal .workflow-modal-header .modal-close:hover{border-color:#dce8e5;background:#f2f7f5;color:#214a43}.patient-modal-eyebrow,.workflow-eyebrow{line-height:1.2}.patient-modal-icon,.patient-view-avatar,.appointment-modal-icon,.workflow-modal-icon{box-sizing:border-box;width:44px;height:44px;margin:0;justify-self:start}\n.workflow-fields .patient-match{color:#24745e}.workflow-fields .field-warning{color:#a06759}.additional-medications{grid-column:1/-1;display:grid;gap:12px;margin-top:18px}.medication-entry{padding:18px;border:1px solid #dfe9e6;border-radius:12px;background:#fbfdfc}.medication-entry>header{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:17px}.medication-entry>header>div{display:flex;align-items:center;gap:10px}.medication-entry>header div div{display:flex;flex-direction:column;gap:2px}.medication-entry>header strong{color:#31504a;font-size:11px}.medication-entry>header small{font-size:8px}.medication-entry>header button{border:1px solid #efd8d4;border-radius:7px;padding:6px 9px;background:#fff;color:#aa6257;font-size:8px;font-weight:700}.medication-number{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#eee9f8;color:#7058a1;font-size:9px;font-weight:800}.medication-instructions{display:flex;flex-direction:column;gap:8px;margin-top:15px;color:#516763;font-size:10px;font-weight:700}.medication-instructions>span{display:inline-flex;align-items:baseline;gap:3px}.medication-instructions em{color:#bd5c50;font-size:11px;font-style:normal}.medication-instructions textarea{width:100%;min-height:80px;border:1px solid #d8e5e2;border-radius:9px;padding:13px 14px;outline:none;background:#fff;color:#304944;font:400 12px 'DM Sans';resize:vertical}.add-medication-button{display:flex;align-items:center;gap:12px;width:100%;padding:15px 16px;border:1px dashed #9fc9c1;border-radius:11px;background:#f6fbf9;color:#286a5f;text-align:left}.add-medication-button>span{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:#dff1ec;font-size:16px}.add-medication-button>div{display:flex;flex-direction:column;gap:3px}.add-medication-button strong{font-size:10px}.add-medication-button small{font-size:8px}.add-medication-button:hover{border-color:#5fa99c;background:#eef8f5}\n.prescription-view-summary{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:12px;margin-bottom:16px}.prescription-view-summary>div{display:flex;min-width:0;flex-direction:column;justify-content:center;gap:5px;padding:14px 15px;border:1px solid #dedfed;border-radius:10px;background:#fdfcff}.prescription-view-summary>div:first-child{flex-direction:row;align-items:center;justify-content:flex-start;gap:11px}.prescription-view-summary>div:first-child>div{display:flex;min-width:0;flex-direction:column;gap:5px}.prescription-view-summary small{color:#81769e;font-size:8px;font-weight:800;letter-spacing:.07em}.prescription-view-summary strong{color:#3e3850;font-size:11px;overflow-wrap:anywhere}\n@media(max-width:700px){.prescription-view-summary{grid-template-columns:1fr}.prescription-view-summary>div:first-child{grid-column:1/-1}}\nbutton:disabled{opacity:.55;cursor:not-allowed}code{background:#edf4f2;padding:2px 4px;border-radius:4px}\n.appointment.has-consultation-action{grid-template-columns:60px 34px minmax(150px,1fr) 105px 122px}.start-consultation{border:1px solid #0d8074;border-radius:8px;padding:8px 10px;background:#0d8074;color:#fff;font-size:9px;font-weight:800;white-space:nowrap;box-shadow:0 3px 8px #0d807420}.start-consultation:hover{background:#096e64}\n.consultation-page{max-width:1400px;margin:-14px auto 0}.consultation-header{margin-bottom:20px}.consultation-back{border:0;background:transparent;color:#46706a;padding:0;margin-bottom:17px;font-size:10px;font-weight:700}.consultation-back:hover{color:#0d8074}.consultation-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.consultation-heading h1{margin-top:4px}.consultation-heading p{margin:6px 0 0;color:#7d8f8b;font-size:12px}.consultation-status{display:inline-flex;align-items:center;gap:7px;border:1px solid #cfe7df;border-radius:999px;padding:8px 11px;background:#eef9f5;color:#21725f;font-size:9px;font-weight:800;white-space:nowrap}.consultation-status i{width:7px;height:7px;border-radius:50%;background:#29a578;box-shadow:0 0 0 4px #d8f1e8}.consultation-loading{padding:36px;text-align:center;color:#71847f;font-size:12px}.consultation-profile{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(520px,1.7fr);align-items:center;gap:28px;padding:22px 24px}.consultation-identity{display:flex;align-items:center;gap:14px}.consultation-identity>div{min-width:0}.consultation-identity small{color:#0d8074;font-size:8px;font-weight:800;letter-spacing:.11em}.consultation-identity h2{margin:3px 0;color:#294b45;font-size:18px}.consultation-identity p{margin:0;color:#7d8d89;font-size:10px}.consultation-profile dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;margin:0;border:1px solid #e6eeec;border-radius:10px;overflow:hidden}.consultation-profile dl div{min-width:0;padding:12px 14px;background:#fbfdfc;border-bottom:1px solid #e9efee}.consultation-profile dl div:nth-child(odd){border-right:1px solid #e9efee}.consultation-profile dl div:nth-last-child(-n+2){border-bottom:0}.consultation-profile dt{color:#879692;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.consultation-profile dd{margin:5px 0 0;color:#344f4a;font-size:10px;overflow-wrap:anywhere}.consultation-alerts{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0}.consultation-alert{display:flex;align-items:center;gap:12px;padding:15px 17px;border-radius:11px}.consultation-alert>span{display:grid;place-items:center;flex:0 0 28px;height:28px;border-radius:8px;font-weight:800}.consultation-alert>div{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-alert small{font-size:8px;font-weight:800;letter-spacing:.08em}.consultation-alert strong{font-size:10px;overflow-wrap:anywhere}.consultation-alert.allergy{border:1px solid #f0d4ce;background:#fff7f5;color:#925044}.consultation-alert.allergy>span{background:#f4d8d1}.consultation-alert.condition{border:1px solid #d7e4f0;background:#f5f9fd;color:#476d91}.consultation-alert.condition>span{background:#dceaf6}.consultation-history-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.consultation-history.appointments-history{grid-column:1/-1}.consultation-history>header{padding:17px 20px;border-bottom:1px solid #e8efed}.consultation-history h2{color:#294a44;font-size:13px}.consultation-history header p{margin:4px 0 0;color:#879692;font-size:9px}.consultation-history article{display:grid;grid-template-columns:100px minmax(0,1fr) auto;align-items:center;gap:13px;min-height:61px;padding:11px 20px;border-top:1px solid #edf2f1}.consultation-history article:first-child{border-top:0}.consultation-history time{color:#657b76;font-size:9px}.consultation-history article>div{display:flex;min-width:0;flex-direction:column;gap:4px}.consultation-history strong{color:#344f4a;font-size:10px}.consultation-history article small{font-size:9px;white-space:normal}.consultation-history .status{font-size:8px}.consultation-history .empty{min-height:90px;display:grid;place-items:center;margin:0}\n.consultation-header{position:relative;overflow:hidden;padding:20px 22px 22px;border:1px solid #d9e9e5;border-radius:14px;background:linear-gradient(120deg,#fff 0%,#f4fbf8 68%,#e7f5f0 100%);box-shadow:0 7px 24px #234d4410}.consultation-header:after{content:'';position:absolute;right:-65px;bottom:-95px;width:220px;height:220px;border:38px solid #0d807408;border-radius:50%;pointer-events:none}.consultation-topline{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.consultation-back{margin:0}.consultation-heading{position:relative;z-index:1;align-items:center}.consultation-heading h1{font-size:26px}.consultation-prescribe{display:flex;align-items:center;gap:11px;min-width:174px;padding:10px 14px!important;text-align:left}.consultation-prescribe>span{display:grid;place-items:center;width:31px;height:31px;border-radius:8px;background:#ffffff26;font:800 12px 'Manrope'}.consultation-prescribe>div{display:flex;flex-direction:column;gap:2px}.consultation-prescribe strong{font-size:10px}.consultation-prescribe small{color:#d9f2ec;font-size:8px;font-weight:500}.consultation-profile{border-color:#dce9e6;box-shadow:0 7px 22px #294d460d}.consultation-profile .avatar.large{width:50px;height:50px;font-size:13px}.consultation-history{overflow:hidden}.consultation-history>header{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fcfdfd}.history-kicker{display:block;margin-bottom:5px;color:#0d8074;font-size:7px;font-weight:800;letter-spacing:.12em}.history-add{border:1px solid #bcd9d3;border-radius:8px;padding:8px 10px;background:#fff;color:#176f64;font-size:8px;font-weight:800;white-space:nowrap}.history-add:hover{border-color:#0d8074;background:#f1f9f6}.prescription-history{border-color:#d7e7e3}.consultation-empty{min-height:175px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:25px;text-align:center}.consultation-empty>span{display:grid;place-items:center;width:39px;height:39px;margin-bottom:10px;border-radius:11px;background:#eee9f8;color:#72599e;font:800 11px 'Manrope'}.consultation-empty strong{font-size:11px}.consultation-empty p{margin:5px 0 13px;color:#879692;font-size:9px}.consultation-empty button{border:0;border-radius:8px;padding:9px 12px;background:#e8f5f1;color:#176f64;font-size:8px;font-weight:800}\n.consultation-page .eyebrow{font-size:11px!important}.consultation-heading h1{font-size:30px}.consultation-heading p{font-size:14px;line-height:1.5}.consultation-back{font-size:12px}.consultation-status{font-size:11px}.consultation-prescribe{min-width:205px;padding:12px 15px!important}.consultation-prescribe>span{width:36px;height:36px;font-size:14px}.consultation-prescribe strong{font-size:12px}.consultation-prescribe small{font-size:10px}.consultation-profile{padding:26px}.consultation-profile .avatar.large{width:58px;height:58px;font-size:15px}.consultation-identity small,.history-kicker{font-size:9px}.consultation-identity h2{font-size:21px}.consultation-identity p{font-size:12px;line-height:1.5}.consultation-profile dt{font-size:10px}.consultation-profile dd{font-size:13px;line-height:1.45}.consultation-profile dl div{padding:14px 16px}.clinical-overview{margin:16px 0;border:1px solid #dce8e5;border-radius:13px;background:#fff;box-shadow:0 4px 16px #294d460a;overflow:hidden}.clinical-overview>header{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 20px;border-bottom:1px solid #e8efed;background:#fbfdfc}.clinical-overview h2{color:#294a44;font-size:16px}.clinical-overview header p{margin:5px 0 0;color:#7d8f8b;font-size:11px}.clinical-edit-button{border:1px solid #b9d6d0;border-radius:8px;padding:10px 12px;background:#fff;color:#176f64;font-size:11px;font-weight:800;white-space:nowrap}.clinical-edit-button:hover{border-color:#0d8074;background:#f2f9f7}.clinical-overview .consultation-alerts{margin:0;padding:16px}.consultation-alert{min-height:78px;padding:17px 19px}.consultation-alert>span{flex-basis:34px;height:34px;font-size:15px}.consultation-alert small{font-size:10px}.consultation-alert strong{font-size:13px;line-height:1.5}.clinical-overview-form{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px}.clinical-overview-form label{display:flex;flex-direction:column;gap:8px;color:#405b56;font-size:12px;font-weight:800}.clinical-overview-form textarea{width:100%;min-height:120px;padding:13px 14px;border:1px solid #d5e3df;border-radius:9px;background:#fff;color:#304944;font:400 13px/1.5 'DM Sans';resize:vertical;outline:none}.clinical-overview-form textarea:focus{border-color:#66a99f;box-shadow:0 0 0 3px #0d807412}.clinical-overview-form label small{font-size:10px;font-weight:400}.clinical-form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:9px;padding-top:2px}.consultation-history h2{font-size:16px}.consultation-history header p{font-size:11px}.history-add{font-size:10px;padding:9px 11px}.consultation-history article{min-height:72px}.consultation-history time{font-size:11px}.consultation-history strong{font-size:13px}.consultation-history article small{font-size:11px;line-height:1.45}.consultation-history .status{font-size:10px}.consultation-empty strong{font-size:13px}.consultation-empty p{font-size:11px}.consultation-empty button{font-size:10px}\n@media(max-width:900px){.data-head{display:none}.data-row,.appointments-row,.patients-row,.rx-row,.vaccine-row,.users-row{grid-template-columns:1fr}.row-actions{justify-content:flex-start}.form-grid.three{grid-template-columns:1fr 1fr}}\n@media(max-width:1000px){.appointment.has-consultation-action{grid-template-columns:52px 34px minmax(130px,1fr) 120px}.appointment.has-consultation-action .status{display:none}.consultation-profile{grid-template-columns:1fr}.consultation-history-grid{grid-template-columns:1fr}.consultation-history.appointments-history{grid-column:auto}}\n@media(max-width:640px){.appointment.has-consultation-action{grid-template-columns:45px 30px minmax(0,1fr)}.appointment.has-consultation-action .start-consultation{grid-column:3;width:max-content}.consultation-page{margin-top:0}.consultation-header{padding:17px}.consultation-topline{align-items:flex-start}.consultation-heading{align-items:flex-start;flex-direction:column}.consultation-heading h1{font-size:25px}.consultation-prescribe{width:100%}.consultation-profile{padding:18px}.consultation-profile dl,.consultation-alerts,.clinical-overview-form{grid-template-columns:1fr}.consultation-profile dl div,.consultation-profile dl div:nth-child(odd),.consultation-profile dl div:nth-last-child(-n+2){border-right:0;border-bottom:1px solid #e9efee}.consultation-profile dl div:last-child{border-bottom:0}.clinical-overview>header{align-items:flex-start;flex-direction:column}.clinical-edit-button{width:100%}.clinical-form-actions{grid-column:auto}.consultation-history article{grid-template-columns:1fr auto}.consultation-history article time{grid-column:1/-1}.consultation-history article>div{grid-column:1}.consultation-history article>.status{grid-column:2;grid-row:2}}\n@media(max-width:760px){.patient-portal-grid{grid-template-columns:1fr}.patient-profile-panel dl{grid-template-columns:1fr 1fr}.patient-modal .patient-form-section,.patient-view-section{grid-template-columns:1fr;gap:16px}.identity-fields,.contact-fields,.emergency-fields{grid-template-columns:1fr 1fr}.patient-section-heading p,.patient-view-section-title p{display:none}.patient-contact-columns{grid-template-columns:1fr}.patient-view-grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.auth-card{padding:28px 22px}.form-grid,.form-grid.three{grid-template-columns:1fr}.patient-profile-panel dl{grid-template-columns:1fr}.header-actions .role-badge{display:none}.patient-modal-backdrop{padding:0}.patient-modal.user-modal,.patient-view-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.patient-modal .patient-modal-header,.patient-view-header{padding:16px 20px}.patient-modal .patient-form-section,.patient-view-section{padding:21px 20px}.identity-fields,.contact-fields,.emergency-fields,.clinical-fields,.patient-view-grid,.patient-contact-columns .patient-view-grid,.patient-clinical-cards{grid-template-columns:1fr}.patient-modal .patient-modal-actions,.patient-view-actions{padding:14px 20px}.patient-modal-actions>div:first-child,.patient-view-actions>small{display:none}.patient-modal-actions>div:last-child,.patient-view-actions>div{width:100%}.patient-modal-actions button,.patient-view-actions button{flex:1;min-width:0}}\n@media(max-width:760px){.appointment-form-section{grid-template-columns:1fr;gap:16px}.appointment-fields.three-columns{grid-template-columns:1fr 1fr}.appointment-form-section .patient-section-heading p{display:none}}@media(max-width:560px){.appointment-modal-backdrop{padding:0}.appointment-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.appointment-modal-header{padding:16px 20px}.appointment-form-section{padding:21px 20px}.appointment-fields.two-columns,.appointment-fields .two-columns,.appointment-fields.three-columns{grid-template-columns:1fr}.appointment-modal-actions{padding:14px 20px}.appointment-modal-actions>div:first-child{display:none}.appointment-modal-actions>div:last-child{display:flex;width:100%}.appointment-modal-actions button{flex:1;min-width:0}}\n@media(max-width:760px){.workflow-section{grid-template-columns:1fr;gap:16px}.workflow-section-title p{display:none}.workflow-grid.four{grid-template-columns:1fr 1fr}.record-detail-grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.workflow-modal-backdrop{padding:0}.workflow-modal.user-modal,.record-detail-modal.user-modal{width:100vw;height:100vh;max-height:none;border-radius:0}.workflow-modal-header{padding:16px 20px}.workflow-section{padding:21px 20px}.workflow-grid.two,.workflow-grid.four,.record-detail-grid{grid-template-columns:1fr}.record-detail-grid .record-wide{grid-column:auto}.workflow-modal-actions,.record-detail-actions{padding:14px 20px}.workflow-modal-actions>div:first-child,.record-detail-actions>small{display:none}.workflow-modal-actions>div:last-child,.record-detail-actions>div{display:flex;width:100%}.workflow-modal-actions button,.record-detail-actions button{flex:1;min-width:0}.record-detail-body{padding:20px}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=app.component.js.map