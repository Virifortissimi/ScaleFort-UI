import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private readonly router = inject(Router);
    private readonly messageService = inject(MessageService);
    private readonly _authenticationService = inject(AuthenticationService);
    private readonly activatedRoute = inject(ActivatedRoute);

    isLoggedIn() {
        return this.getToken() !== null;
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null { 
        return localStorage.getItem('token');
    }

    getReturnUrl(): string {
        const returnUrl = this.activatedRoute.snapshot.queryParams['return_url'];

        if (returnUrl && typeof returnUrl === 'string' && returnUrl.startsWith('/')) {
            return returnUrl;
        } else {
            return '/';
        }
    }

    login(token: string) {
        this.setToken(token);
        this.getAccountDetails();
    }

    getAccountDetails() {
        if(this.isLoggedIn()) {
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Logged in successfully',
                life: 5000,
            });
            
            this.router.navigateByUrl(this.getReturnUrl());
        }
        // this._authenticationService.getUser().subscribe({
        //     next: (res) => {
        //         const userData: any = {
        //             username: 'res.username',
        //             email: 'res.emailaddress'
        //         };

        //         localStorage.setItem('data', JSON.stringify(userData));
        //         if(this.isLoggedIn()) {
        //             this.messageService.add({
        //               severity: 'success',
        //               summary: 'Successful',
        //               detail: 'Logged in successfully',
        //               life: 5000,
        //             });
        //             console.log(this.getReturnUrl());
                    
        //             this.router.navigateByUrl(this.getReturnUrl());
        //         }
        //     }
        // });
    }

    // logout() {
    //     localStorage.removeItem('token');
    //     this.router.navigate(['/login']);
    // }
}