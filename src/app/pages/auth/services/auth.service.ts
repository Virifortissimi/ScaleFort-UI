import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { IUserDetails } from '../../../shared/models/authentication.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private readonly router = inject(Router);
    private readonly messageService = inject(MessageService);
    private readonly _authenticationService = inject(AuthenticationService);
    private readonly activatedRoute = inject(ActivatedRoute);

    private userDataSubject = new BehaviorSubject<IUserDetails | null>(this.getUser());
    public readonly userData$: Observable<IUserDetails | null> = this.userDataSubject.asObservable();

    constructor() {
    // We can also listen to the 'storage' event to handle changes from other tabs/windows
    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'userData') {
        // If the data changes in localStorage, update the BehaviorSubject
        const data = event.newValue ? JSON.parse(event.newValue) : null;
        this.userDataSubject.next(data);
      }
    });
  }

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
        } 
        else return '/';
    }

    private getUser(): IUserDetails | null {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;     
    }

    public updateUser(user: IUserDetails | null): void {
        if (user) localStorage.setItem('userData', JSON.stringify(user));
        else localStorage.removeItem('userData');
        this.userDataSubject.next(user);
    }

    login(token: string) {
        this.setToken(token);
        this.getAccountDetails();
    }

    getAccountDetails() {
        this._authenticationService.getUser().subscribe({
            next: (res) => {
                const userData: IUserDetails = {
                    username: res.userName,
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName
                };

                this.updateUser(userData);
                if(this.isLoggedIn()) {
                    this.messageService.add({
                      severity: 'success',
                      summary: 'Successful',
                      detail: 'Logged in successfully',
                      life: 5000,
                    });
                    this.router.navigateByUrl(this.getReturnUrl());
                }
            }
        });
    }

    logout(routePath?: string) {
        localStorage.removeItem('token');
        this.updateUser(null);
        this.router.navigate(routePath ? [routePath] : ['/']);
    }
}