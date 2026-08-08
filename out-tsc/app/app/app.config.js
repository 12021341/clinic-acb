import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './core/auth.interceptor';
export const appConfig = {
    providers: [provideRouter([]), provideHttpClient(withInterceptors([authInterceptor]))]
};
//# sourceMappingURL=app.config.js.map