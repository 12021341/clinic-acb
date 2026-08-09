import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { authInterceptor } from './core/auth.interceptor';
export const appConfig = {
    providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
        { provide: MAT_DATE_LOCALE, useValue: 'en-PH' },
    ]
};
//# sourceMappingURL=app.config.js.map