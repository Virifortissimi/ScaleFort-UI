import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface EnrolmentPayload {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  occupation?: string;
  experience: string;
  track: string;
  plan: 'full' | 'instalment' | 'secure_slot';
  referral?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  enquiryType: 'Tech School' | 'IT Services' | 'Corporate Training' | 'General';
  budgetRange?: string;
  preferredStartDate?: string;
  companySector?: string;
}

export interface LeadMagnetPayload {
  name: string;
  email: string;
  whatsapp: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface LoginPayload {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface ResendConfirmationPayload {
  usernameOrEmail: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  userId: string;
  token: string;
  password: string;
  confirmPassword: string;
}

export interface UpdateProfilePayload {
  username: string;
  firstName: string;
  lastName: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RequestEmailChangePayload {
  newEmail: string;
  currentPassword: string;
}

export interface TwoFactorSetupPayload {
  currentPassword: string;
}

export interface TwoFactorCodePayload {
  code: string;
}

export interface TwoFactorLoginPayload {
  twoFactorToken: string;
  code: string;
}

export interface TwoFactorChallengePayload {
  twoFactorToken: string;
}

export interface RequestPayoutPayload {
  amount: number;
  payoutMethod: string;
  bankCode?: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  notes?: string;
}

export interface AuthData {
  token?: string;
  requiresTwoFactor?: boolean;
  twoFactorToken?: string;
  email?: string;
  retryAfterSeconds?: number;
  user?: {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
  };
}

export interface UserProfile {
  id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  referralId?: string;
  twoFactorEnabled?: boolean;
}

export interface AffiliateStats {
  clicks: number;
  conversions: number;
  earningsNgn: number;
  referralId?: string;
}

export interface PayoutRequestItem {
  id: string;
  fullName: string;
  email: string;
  referralId: string;
  amount: number;
  payoutMethod: string;
  bankCode?: string | null;
  bankName: string;
  accountName: string;
  accountNumber?: string | null;
  accountNumberMasked: string;
  status: string;
  notes?: string | null;
  requestedAt: string;
  updatedAt?: string | null;
  adminNote?: string | null;
  history?: PayoutStatusHistoryItem[] | null;
}

export interface PayoutStatusHistoryItem {
  status: string;
  adminNote?: string | null;
  updatedBy?: string | null;
  updatedAt: string;
}

export interface PayoutRequestPage {
  data: PayoutRequestItem[];
  pageCount: number;
  pageIndex: number;
  pageSize: number;
}

export interface ApiResponse<T = void> {
  success: boolean;
  message?: string;
  data?: T;
  retryAfterSeconds?: number;
}

type ApiEnvelope = {
  Success?: boolean;
  success?: boolean;
  Message?: string;
  message?: string;
  Data?: unknown;
  data?: unknown;
  Token?: string;
  token?: string;
  RequiresTwoFactor?: boolean;
  requiresTwoFactor?: boolean;
  TwoFactorToken?: string;
  twoFactorToken?: string;
  Email?: string;
  email?: string;
  RetryAfterSeconds?: number;
  retryAfterSeconds?: number;
  ExpiresIn?: number;
  expiresIn?: number;
  Expiration?: string;
  expiration?: string;
};

export interface EnrolmentSubmissionData {
  applicationId: string;
}

export interface PaystackInitPayload {
  customerEmail: string;
  amount: number;
  currency?: string;
  orderReference: string;
}

export interface PaystackInitResponse {
  applicationId: string;
  authorizationUrl: string;
  accessCode: string;
  reference: string;
}

export interface PricingDetails {
  id: string;
  referralId: string;
  mainOnceAmount: number;
  mainTwiceAmount: number;
  mainThriceAmount: number;
  onceAmount: number;
  twiceAmount: number;
  thriceAmount: number;
}

export interface PaymentStatusData {
  applicationId: string;
  amount: number;
  isPaid: boolean;
  dateOfPayment?: string | null;
  paymentReferenceCode?: string | null;
  paymentPlatformCode?: string | null;
  isVerified: boolean;
  transactionStatus?: string | null;
  paidAt?: string | null;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiBaseUrl;
  private readonly withCredentials = { withCredentials: true };

  submitEnrolment(payload: EnrolmentPayload): Observable<ApiResponse<EnrolmentSubmissionData>> {
    return this.http.post<ApiResponse<EnrolmentSubmissionData>>(`${this.base}/api/forms/enrolment`, payload);
  }

  submitContactForm(payload: ContactPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/api/forms/contact`, payload);
  }

  submitQuoteRequest(payload: ContactPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/api/forms/quote`, payload);
  }

  submitCorporateEnquiry(payload: ContactPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/api/forms/corporate`, payload);
  }

  submitLeadMagnet(payload: LeadMagnetPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/api/forms/lead-magnet`, payload);
  }

  submitNewsletter(payload: NewsletterPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.base}/api/forms/newsletter`, payload);
  }

  login(payload: LoginPayload): Observable<ApiResponse<AuthData>> {
    return this.http
      .post<ApiEnvelope>(
        `${this.base}/api/authentication/login`,
        {
        username: payload.usernameOrEmail,
        password: payload.password,
      },
      this.withCredentials
      )
      .pipe(
        map((response) => {
          const token = response.Token || response.token;
          const success = response.Success ?? response.success ?? Boolean(token);
          const message = response.Message ?? response.message;
          const twoFactorToken = response.TwoFactorToken || response.twoFactorToken;
          const requiresTwoFactor = response.RequiresTwoFactor ?? response.requiresTwoFactor ?? Boolean(twoFactorToken);
          const retryAfterSeconds = response.RetryAfterSeconds ?? response.retryAfterSeconds;

          return {
            success: Boolean(success),
            message,
            data: token || twoFactorToken ? {
              token: token || undefined,
              twoFactorToken: twoFactorToken || undefined,
              requiresTwoFactor: Boolean(requiresTwoFactor),
              email: response.Email || response.email,
              retryAfterSeconds: typeof retryAfterSeconds === 'number' ? retryAfterSeconds : undefined,
            } : undefined,
          };
        })
      );
  }

  register(payload: RegisterPayload): Observable<ApiResponse<AuthData>> {
    const [firstName, ...rest] = payload.name.trim().split(/\s+/);
    const lastName = rest.join(' ') || firstName;
    const username = (payload.email.split('@')[0] || firstName).replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 20) || 'user';

    return this.http
      .post<string | ApiEnvelope>(
        `${this.base}/api/authentication/register`,
        {
        username,
        email: payload.email,
        firstName,
        lastName,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      }
      )
      .pipe(
        map((response) => {
          if (typeof response === 'string') {
            return { success: true, message: response } as ApiResponse<AuthData>;
          }

          const token = response.Token || response.token;
          const success = response.Success ?? response.success ?? Boolean(token);
          const message = response.Message ?? response.message;

          return {
            success: Boolean(success),
            message,
            data: token ? { token } : undefined,
          } as ApiResponse<AuthData>;
        })
      );
  }

  confirmEmail(userId: string, token: string): Observable<ApiResponse> {
    return this.http
      .get<ApiEnvelope>(
        `${this.base}/api/authentication/confirm-email?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`
      )
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  confirmEmailChange(userId: string, newEmail: string, token: string): Observable<ApiResponse> {
    return this.http
      .get<ApiEnvelope>(
        `${this.base}/api/authentication/confirm-email-change?userId=${encodeURIComponent(userId)}&newEmail=${encodeURIComponent(newEmail)}&token=${encodeURIComponent(token)}`
      )
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  resendConfirmation(payload: ResendConfirmationPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/resend-confirmation`, {
        usernameOrEmail: payload.usernameOrEmail,
      })
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  forgotPassword(payload: ForgotPasswordPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/forgot-password`, payload)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  resetPassword(payload: ResetPasswordPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/reset-password`, payload)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  getCurrentUser(): Observable<ApiResponse<UserProfile>> {
    return this.http
      .get<{
        id?: string;
        userName?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        referralId?: string;
      }>(`${this.base}/api/authentication/get-user`)
      .pipe(
        map((response) => ({
          success: true,
          data: {
            id: response.id ?? '',
            userName: response.userName ?? '',
            email: response.email ?? '',
            firstName: response.firstName ?? '',
            lastName: response.lastName ?? '',
            referralId: response.referralId,
            twoFactorEnabled: (response as { twoFactorEnabled?: boolean }).twoFactorEnabled ?? false,
          },
        }))
      );
  }

  updateProfile(payload: UpdateProfilePayload): Observable<ApiResponse<UserProfile>> {
    return this.http
      .put<ApiEnvelope>(`${this.base}/api/authentication/update-profile`, payload)
      .pipe(
        map((response) => {
          const data = (response.Data ?? response.data ?? {}) as Partial<UserProfile>;
          return {
            success: Boolean(response.Success ?? response.success ?? true),
            message: response.Message ?? response.message,
            data: {
              id: data.id ?? '',
              userName: data.userName ?? '',
              email: data.email ?? '',
              firstName: data.firstName ?? '',
              lastName: data.lastName ?? '',
              referralId: data.referralId,
              twoFactorEnabled: data.twoFactorEnabled ?? false,
            },
          };
        })
      );
  }

  changePassword(payload: ChangePasswordPayload): Observable<ApiResponse<AuthData>> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/change-password`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
          data: response.Token || response.token ? {
            token: response.Token || response.token,
          } : undefined,
          retryAfterSeconds: response.RetryAfterSeconds ?? response.retryAfterSeconds,
        }))
      );
  }

  requestEmailChange(payload: RequestEmailChangePayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/change-email/request`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  beginEmailTwoFactorSetup(payload: TwoFactorSetupPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/email/setup`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  resendEmailTwoFactorSetupCode(): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/email/resend-setup-code`, {}, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  enableEmailTwoFactor(payload: TwoFactorCodePayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/email/enable`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  disableEmailTwoFactor(payload: TwoFactorSetupPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/email/disable`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  verifyTwoFactorLogin(payload: TwoFactorLoginPayload): Observable<ApiResponse<AuthData>> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/login/verify`, payload, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? false),
          message: response.Message ?? response.message,
          data: {
            token: response.Token || response.token,
          },
          retryAfterSeconds: response.RetryAfterSeconds ?? response.retryAfterSeconds,
        }))
      );
  }

  refreshAuthToken(accessToken?: string | null): Observable<ApiResponse<AuthData>> {
    return this.http
      .post<{
        AccessToken?: string;
        accessToken?: string;
        RefreshToken?: string;
        refreshToken?: string;
        ExpiresIn?: number;
        expiresIn?: number;
        Error?: string;
        error?: string;
      }>(`${this.base}/api/authentication/refresh-token`, {
        accessToken: accessToken ?? null,
      }, this.withCredentials)
      .pipe(
        map((response) => {
          const token = response.AccessToken || response.accessToken;

          return {
            success: Boolean(token),
            message: response.Error ?? response.error,
            data: token ? {
              token,
            } : undefined,
          };
        })
      );
  }

  logoutOtherDevices(): Observable<ApiResponse<AuthData>> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/logout-other-devices`, {}, this.withCredentials)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
          data: response.Token || response.token ? {
            token: response.Token || response.token,
          } : undefined,
        }))
      );
  }

  logout(): Observable<ApiResponse> {
    return this.http
      .post(`${this.base}/api/authentication/logout`, {}, this.withCredentials)
      .pipe(
        map(() => ({
          success: true,
        }))
      );
  }

  resendTwoFactorLoginCode(payload: TwoFactorChallengePayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/authentication/two-factor/login/resend`, payload)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  getAffiliateStats(referralCode?: string): Observable<ApiResponse<AffiliateStats>> {
    return this.http
      .get<{ referralId: string; totalEarning: number; totalReferral: number }>(`${this.base}/api/referral/earn`)
      .pipe(
        map((response) => ({
          success: true,
          data: {
            clicks: response.totalReferral ?? 0,
            conversions: response.totalReferral ?? 0,
            earningsNgn: response.totalEarning ?? 0,
            referralId: response.referralId,
          },
        }))
      );
  }

  requestPayout(payload: RequestPayoutPayload): Observable<ApiResponse> {
    return this.http
      .post<ApiEnvelope>(`${this.base}/api/referral/request-payout`, payload)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
        }))
      );
  }

  getMyPayoutRequests(pageIndex = 1): Observable<ApiResponse<PayoutRequestPage>> {
    return this.http
      .get<ApiEnvelope>(`${this.base}/api/referral/payout-requests/my?pageIndex=${pageIndex}`)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
          data: (response.Data ?? response.data) as PayoutRequestPage | undefined,
        }))
      );
  }

  getAdminPayoutRequests(status?: string, pageIndex = 1): Observable<ApiResponse<PayoutRequestPage>> {
    const params = new URLSearchParams();
    params.set('pageIndex', pageIndex.toString());
    if (status) {
      params.set('status', status);
    }
    return this.http
      .get<ApiEnvelope>(`${this.base}/api/referral/payout-requests?${params.toString()}`)
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
          data: (response.Data ?? response.data) as PayoutRequestPage | undefined,
        }))
      );
  }

  updatePayoutRequestStatus(payoutRequestId: string, status: string, adminNote?: string): Observable<ApiResponse<PayoutRequestItem>> {
    return this.http
      .put<ApiEnvelope>(`${this.base}/api/referral/payout-requests/${encodeURIComponent(payoutRequestId)}/status`, {
        status,
        adminNote: adminNote ?? null,
      })
      .pipe(
        map((response) => ({
          success: Boolean(response.Success ?? response.success ?? true),
          message: response.Message ?? response.message,
          data: (response.Data ?? response.data) as PayoutRequestItem | undefined,
        }))
      );
  }

  validateReferralId(referralId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.base}/api/referral/${encodeURIComponent(referralId)}/exists`);
  }

  getPricing(referralId?: string): Observable<PricingDetails> {
    const query = referralId ? `?referralId=${encodeURIComponent(referralId)}` : '';
    return this.http.get<PricingDetails>(`${this.base}/api/pricing${query}`);
  }

  initializePaystackPayment(applicationId: string, payload: PaystackInitPayload): Observable<PaystackInitResponse> {
    return this.http.post<PaystackInitResponse>(`${this.base}/api/payment/initialize-paystack?applicationId=${encodeURIComponent(applicationId)}`, {
      customerEmail: payload.customerEmail,
      amount: payload.amount,
      currency: payload.currency ?? 'NGN',
      orderReference: payload.orderReference,
    });
  }

  verifyPaystackPayment(reference: string): Observable<ApiResponse> {
    return this.http
      .get(`${this.base}/api/payment/verify-paystack-payment?reference=${encodeURIComponent(reference)}`, { responseType: 'text' })
      .pipe(
        map((message) => ({
          success: true,
          message,
        }))
      );
  }

  getPaymentStatus(applicationId: string): Observable<ApiResponse<PaymentStatusData>> {
    return this.http.get<ApiResponse<PaymentStatusData>>(`${this.base}/api/forms/payment-status/${encodeURIComponent(applicationId)}`);
  }
}
