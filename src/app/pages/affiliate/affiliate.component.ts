import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { finalize, Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ApiService, AffiliateStats, PayoutRequestItem, UserProfile } from '../../core/services/api.service';
import { ReferralService } from '../../core/services/referral.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section affiliate-dashboard-shell">
      <div class="container-base max-w-6xl">
        <div class="dashboard-hero">
          <div class="dashboard-hero__copy">
            <p class="dashboard-kicker">Affiliate workspace</p>
            <h1 class="text-h1 font-bold text-text-primary">Affiliate Dashboard</h1>
            <p class="dashboard-hero__lead">Track performance, share your referral link quickly, and manage payouts and account security from one polished workspace.</p>

            <div class="dashboard-chip-row">
              <span class="dashboard-chip dashboard-chip--accent">Referral code: {{ referralCode() || 'Pending' }}</span>
              <span class="dashboard-chip" [class.dashboard-chip--success]="profile()?.twoFactorEnabled">
                {{ profile()?.twoFactorEnabled ? '2FA enabled' : '2FA available' }}
              </span>
              <span class="dashboard-chip">{{ loading() ? 'Syncing data...' : 'Dashboard ready' }}</span>
            </div>
          </div>

          <div class="dashboard-hero__link-card">
            <p class="dashboard-kicker text-white/70">Your referral link</p>
            <p class="dashboard-hero__link break-all">{{ referralLink() || 'Referral link will appear once your code is available.' }}</p>

            <div class="flex flex-wrap gap-3 mt-5">
              <button type="button" class="btn-primary !px-4 !py-2 text-sm" (click)="copyReferralLink()" [disabled]="!referralCode()">
                Copy link
              </button>
              <a routerLink="/affiliate-policy" class="btn-secondary !px-4 !py-2 text-sm no-underline">Referral Policy</a>
            </div>
          </div>
        </div>

        @if (error()) {
          <p class="dashboard-alert mt-6 text-sm" role="alert">Unable to load affiliate stats right now.</p>
        }

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <article class="card-base dashboard-stat-card">
            <p class="dashboard-stat-card__label">Clicks</p>
            <p class="dashboard-stat-card__value">{{ loading() ? '...' : stats().clicks }}</p>
            <p class="dashboard-stat-card__meta">People who have visited through your link.</p>
          </article>
          <article class="card-base dashboard-stat-card">
            <p class="dashboard-stat-card__label">Conversions</p>
            <p class="dashboard-stat-card__value">{{ loading() ? '...' : stats().conversions }}</p>
            <p class="dashboard-stat-card__meta">Successful enrollments credited to you.</p>
          </article>
          <article class="card-base dashboard-stat-card dashboard-stat-card--earnings">
            <p class="dashboard-stat-card__label">Earnings</p>
            <p class="dashboard-stat-card__value">{{ loading() ? '...' : formattedEarnings() }}</p>
            <p class="dashboard-stat-card__meta">Current balance available for payout requests.</p>
          </article>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <article class="card-base dashboard-card dashboard-card--feature">
            <h2 class="text-h3 font-semibold text-text-primary mb-3">Growth checklist</h2>
            <ul class="space-y-3 text-sm text-text-body">
              <li class="dashboard-list-item">Share your referral link in WhatsApp and LinkedIn bio.</li>
              <li class="dashboard-list-item">Post one success story each week from your learning journey.</li>
              <li class="dashboard-list-item">Follow up with leads after they start their application.</li>
              <li class="dashboard-list-item">Use the salary guide as a value-first lead magnet.</li>
            </ul>
          </article>

          <article class="card-base dashboard-card dashboard-card--feature">
            <h2 class="text-h3 font-semibold text-text-primary mb-3">At a glance</h2>
            <div class="space-y-4 text-sm">
              <div class="dashboard-mini-panel">
                <p class="dashboard-mini-panel__label">Captured referral code</p>
                <p class="dashboard-mini-panel__value">{{ referralCode() || 'None yet' }}</p>
              </div>
              <div class="dashboard-mini-panel">
                <p class="dashboard-mini-panel__label">Security status</p>
                <p class="dashboard-mini-panel__value">{{ profile()?.twoFactorEnabled ? 'Protected with 2FA' : 'Enable 2FA for stronger protection' }}</p>
              </div>
              <div class="dashboard-mini-panel">
                <p class="dashboard-mini-panel__label">Best next move</p>
                <p class="dashboard-mini-panel__value">Share your link today and follow up with warm leads this week.</p>
              </div>
            </div>
          </article>
        </div>

        <section class="mt-8">
          <div class="dashboard-section-head">
            <div>
              <p class="dashboard-kicker">Explore</p>
              <h2 class="text-h3 font-semibold text-text-primary">Quick Access</h2>
            </div>
            <p class="text-sm text-text-muted">Jump straight to the pages affiliates use most.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            @for (link of quickLinks; track link.href) {
              <a [routerLink]="link.href" class="dashboard-quick-link no-underline">
                <span>{{ link.label }}</span>
                <span aria-hidden="true">↗</span>
              </a>
            }
          </div>
        </section>

        <section class="mt-10">
          <div class="dashboard-section-head">
            <div>
              <p class="dashboard-kicker">Account</p>
              <h2 class="text-h3 font-semibold text-text-primary">Account Settings</h2>
            </div>
            <p class="text-sm text-text-muted">Switch between focused settings panels instead of scrolling through one long account page.</p>
          </div>
          <div class="dashboard-settings-shell">
            <div class="dashboard-settings-summary">
              <article class="dashboard-settings-summary__card">
                <p class="dashboard-mini-panel__label">Profile</p>
                <p class="dashboard-settings-summary__value">{{ profile()?.firstName || 'Your' }} {{ profile()?.lastName || 'account' }}</p>
                <p class="dashboard-settings-summary__meta">{{ profile()?.email || 'Update your details and email settings here.' }}</p>
              </article>
              <article class="dashboard-settings-summary__card">
                <p class="dashboard-mini-panel__label">Security</p>
                <p class="dashboard-settings-summary__value">{{ profile()?.twoFactorEnabled ? '2FA enabled' : '2FA available' }}</p>
                <p class="dashboard-settings-summary__meta">Password updates, sign-in protection, and device controls.</p>
              </article>
              <article class="dashboard-settings-summary__card">
                <p class="dashboard-mini-panel__label">Payouts</p>
                <p class="dashboard-settings-summary__value">{{ payoutHistory().length ? payoutHistory()[0].status : 'No requests yet' }}</p>
                <p class="dashboard-settings-summary__meta">Available balance: {{ formattedEarnings() }}</p>
              </article>
            </div>

            <div class="dashboard-settings-tabs" role="tablist" aria-label="Account settings sections">
              @for (tab of settingsTabs; track tab.id) {
                <button
                  type="button"
                  class="dashboard-settings-tab"
                  [class.dashboard-settings-tab--active]="activeSettingsTab() === tab.id"
                  [attr.aria-selected]="activeSettingsTab() === tab.id"
                  (click)="switchSettingsTab(tab.id)"
                >
                  <span class="dashboard-settings-tab__label">{{ tab.label }}</span>
                  <span class="dashboard-settings-tab__copy">{{ tab.copy }}</span>
                </button>
              }
            </div>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            @if (activeSettingsTab() === 'profile') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Profile details</p>
                <p class="text-sm text-text-muted">Update the account information tied to your affiliate profile.</p>
              </div>

              @if (!editingProfile()) {
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p class="text-text-muted mb-1">First name</p>
                      <p class="font-medium text-text-primary">{{ profile()?.firstName || '...' }}</p>
                    </div>
                    <div>
                      <p class="text-text-muted mb-1">Last name</p>
                      <p class="font-medium text-text-primary">{{ profile()?.lastName || '...' }}</p>
                    </div>
                  </div>

                  <div class="text-sm">
                    <p class="text-text-muted mb-1">Username</p>
                    <p class="font-medium text-text-primary">{{ profile()?.userName || '...' }}</p>
                  </div>

                  <div class="text-sm">
                    <p class="text-text-muted mb-1">Email address</p>
                    <p class="font-medium text-text-primary break-all">{{ profile()?.email || '...' }}</p>
                  </div>

                  <button type="button" class="btn-secondary" (click)="openProfileEditor()" [disabled]="profileLoading()">
                    Edit details
                  </button>
                </div>
              } @else {
                <form [formGroup]="profileForm" (ngSubmit)="saveProfile()" class="space-y-4" novalidate>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label for="affiliate-first-name" class="mb-2 block text-sm font-medium text-text-body">First name</label>
                      <input id="affiliate-first-name" type="text" formControlName="firstName" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isProfileInvalid('firstName')) {
                        <p class="form-error" role="alert">First name is required.</p>
                      }
                    </div>

                    <div>
                      <label for="affiliate-last-name" class="mb-2 block text-sm font-medium text-text-body">Last name</label>
                      <input id="affiliate-last-name" type="text" formControlName="lastName" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isProfileInvalid('lastName')) {
                        <p class="form-error" role="alert">Last name is required.</p>
                      }
                    </div>
                  </div>

                  <div>
                    <label for="affiliate-username" class="mb-2 block text-sm font-medium text-text-body">Username</label>
                    <input id="affiliate-username" type="text" formControlName="username" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isProfileInvalid('username')) {
                      <p class="form-error" role="alert">Use 3 to 20 letters, numbers, or underscores.</p>
                    }
                  </div>

                  <div>
                    <label for="affiliate-email" class="mb-2 block text-sm font-medium text-text-body">Email address</label>
                    <input id="affiliate-email" type="email" [value]="profile()?.email || ''" readonly class="w-full rounded-[10px] border border-border-base bg-bg-subtle px-4 py-3 text-text-muted" />
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary" [disabled]="profileForm.invalid || profileSaving() || profileLoading()">
                      {{ profileSaving() ? 'Saving details...' : 'Save details' }}
                    </button>
                    <button type="button" class="btn-secondary" (click)="cancelProfileEditor()" [disabled]="profileSaving()">
                      Cancel
                    </button>
                  </div>
                </form>
              }
            </article>
            }

            @if (activeSettingsTab() === 'security') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Change password</p>
                <p class="text-sm text-text-muted">Use your current password to set a new secure one.</p>
              </div>

              @if (!editingPassword()) {
                <div class="space-y-4">
                  <p class="text-sm text-text-muted">Keep your account secure by updating your password whenever needed.</p>
                  <button type="button" class="btn-secondary" (click)="openPasswordEditor()">
                    Edit password
                  </button>
                </div>
              } @else {
                <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="space-y-4" novalidate>
                  <div>
                    <label for="current-password" class="mb-2 block text-sm font-medium text-text-body">Current password</label>
                    <input id="current-password" type="password" formControlName="currentPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isPasswordInvalid('currentPassword')) {
                      <p class="form-error" role="alert">Enter your current password.</p>
                    }
                  </div>

                  <div>
                    <label for="new-password" class="mb-2 block text-sm font-medium text-text-body">New password</label>
                    <input id="new-password" type="password" formControlName="newPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isPasswordInvalid('newPassword')) {
                      <p class="form-error" role="alert">Use 8+ characters with uppercase, lowercase, a number, and a special character.</p>
                    }
                  </div>

                  <div>
                    <label for="confirm-new-password" class="mb-2 block text-sm font-medium text-text-body">Confirm new password</label>
                    <input id="confirm-new-password" type="password" formControlName="confirmPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isPasswordInvalid('confirmPassword') || passwordsMismatch()) {
                      <p class="form-error" role="alert">Passwords must match.</p>
                    }
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary" [disabled]="passwordForm.invalid || passwordSaving()">
                      {{ passwordSaving() ? 'Updating password...' : 'Change password' }}
                    </button>
                    <button type="button" class="btn-secondary" (click)="cancelPasswordEditor()" [disabled]="passwordSaving()">
                      Cancel
                    </button>
                  </div>
                </form>
              }
            </article>
            }

            @if (activeSettingsTab() === 'profile') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Email address</p>
                <p class="text-sm text-text-muted">We’ll send a confirmation link to your new address before switching it on your account.</p>
              </div>

              @if (!editingEmail()) {
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="text-text-muted mb-1">Current email</p>
                    <p class="font-medium text-text-primary break-all">{{ profile()?.email || '...' }}</p>
                  </div>

                  <button type="button" class="btn-secondary" (click)="openEmailEditor()" [disabled]="profileLoading()">
                    Change email
                  </button>
                </div>
              } @else {
                <form [formGroup]="emailForm" (ngSubmit)="requestEmailChange()" class="space-y-4" novalidate>
                  <div>
                    <label for="affiliate-new-email" class="mb-2 block text-sm font-medium text-text-body">New email address</label>
                    <input id="affiliate-new-email" type="email" formControlName="newEmail" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isEmailInvalid('newEmail')) {
                      <p class="form-error" role="alert">Enter a valid email address.</p>
                    }
                  </div>

                  <div>
                    <label for="affiliate-email-password" class="mb-2 block text-sm font-medium text-text-body">Current password</label>
                    <input id="affiliate-email-password" type="password" formControlName="currentPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (isEmailInvalid('currentPassword')) {
                      <p class="form-error" role="alert">Enter your current password to continue.</p>
                    }
                  </div>

                  <p class="text-sm text-text-muted">Your current email stays active until you confirm the link sent to the new one.</p>

                  <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary" [disabled]="emailForm.invalid || emailSaving()">
                      {{ emailSaving() ? 'Sending confirmation...' : 'Send confirmation link' }}
                    </button>
                    <button type="button" class="btn-secondary" (click)="cancelEmailEditor()" [disabled]="emailSaving()">
                      Cancel
                    </button>
                  </div>
                </form>
              }
            </article>
            }

            @if (activeSettingsTab() === 'security') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Two-factor authentication</p>
                <p class="text-sm text-text-muted">Add an email verification step when signing in to your account.</p>
              </div>

              @if (!twoFactorMode()) {
                <div class="space-y-4">
                  <p class="text-sm">
                    <span class="text-text-muted">Status:</span>
                    <span class="ml-2 font-semibold" [class.text-accent-school]="profile()?.twoFactorEnabled" [class.text-text-primary]="!profile()?.twoFactorEnabled">
                      {{ profile()?.twoFactorEnabled ? 'Enabled' : 'Disabled' }}
                    </span>
                  </p>

                  <button
                    type="button"
                    class="btn-secondary"
                    (click)="profile()?.twoFactorEnabled ? openDisableTwoFactor() : openEnableTwoFactor()"
                  >
                    {{ profile()?.twoFactorEnabled ? 'Disable 2FA' : 'Activate 2FA' }}
                  </button>
                </div>
              } @else if (twoFactorMode() === 'enable') {
                <div class="space-y-4">
                  @if (!twoFactorCodeSent()) {
                    <div>
                      <label for="two-factor-current-password" class="mb-2 block text-sm font-medium text-text-body">Current password</label>
                      <input id="two-factor-current-password" type="password" [formControl]="twoFactorEnableForm.controls.currentPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (twoFactorEnableForm.controls.currentPassword.invalid && twoFactorEnableForm.controls.currentPassword.touched) {
                        <p class="form-error" role="alert">Enter your current password to continue.</p>
                      }
                    </div>

                    <div class="flex flex-wrap gap-3">
                      <button type="button" class="btn-primary" (click)="sendTwoFactorSetupCode()" [disabled]="twoFactorBusy() || twoFactorCooldownSeconds() > 0">
                        {{ twoFactorBusy() ? 'Sending code...' : 'Send verification code' }}
                      </button>
                      <button type="button" class="btn-secondary" (click)="cancelTwoFactorEditor()" [disabled]="twoFactorBusy()">
                        Cancel
                      </button>
                    </div>
                    @if (twoFactorCooldownSeconds() > 0) {
                      <p class="text-sm text-text-muted">You can request another code in {{ formatCountdown(twoFactorCooldownSeconds()) }}.</p>
                    }
                  } @else {
                    <p class="text-sm text-text-muted">A verification code has been sent to your email. Enter it below to finish enabling 2FA.</p>

                    <div>
                      <label for="two-factor-code" class="mb-2 block text-sm font-medium text-text-body">Verification code</label>
                      <input id="two-factor-code" type="text" [formControl]="twoFactorEnableForm.controls.code" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (twoFactorEnableForm.controls.code.invalid && twoFactorEnableForm.controls.code.touched) {
                        <p class="form-error" role="alert">Enter the verification code from your email.</p>
                      }
                    </div>

                    <div class="flex flex-wrap gap-3">
                      <button type="button" class="btn-primary" (click)="confirmEnableTwoFactor()" [disabled]="twoFactorBusy()">
                        {{ twoFactorBusy() ? 'Enabling 2FA...' : 'Enable 2FA' }}
                      </button>
                      <button type="button" class="btn-secondary" (click)="resendTwoFactorSetupCode()" [disabled]="resendingTwoFactorCode() || twoFactorCooldownSeconds() > 0">
                        {{ resendingTwoFactorCode() ? 'Resending...' : twoFactorCooldownSeconds() > 0 ? 'Resend locked' : 'Resend code' }}
                      </button>
                      <button type="button" class="btn-secondary" (click)="cancelTwoFactorEditor()" [disabled]="twoFactorBusy()">
                        Cancel
                      </button>
                    </div>
                    @if (twoFactorCooldownSeconds() > 0) {
                      <p class="text-sm text-text-muted">You can request another code in {{ formatCountdown(twoFactorCooldownSeconds()) }}.</p>
                    }
                  }
                </div>
              } @else {
                <div class="space-y-4">
                  <p class="text-sm text-text-muted">Enter your current password to turn off email two-factor authentication.</p>

                  <div>
                    <label for="disable-two-factor-password" class="mb-2 block text-sm font-medium text-text-body">Current password</label>
                    <input id="disable-two-factor-password" type="password" [formControl]="twoFactorDisableForm.controls.currentPassword" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                    @if (twoFactorDisableForm.controls.currentPassword.invalid && twoFactorDisableForm.controls.currentPassword.touched) {
                      <p class="form-error" role="alert">Enter your current password to continue.</p>
                    }
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <button type="button" class="btn-primary" (click)="confirmDisableTwoFactor()" [disabled]="twoFactorBusy()">
                      {{ twoFactorBusy() ? 'Disabling 2FA...' : 'Disable 2FA' }}
                    </button>
                    <button type="button" class="btn-secondary" (click)="cancelTwoFactorEditor()" [disabled]="twoFactorBusy()">
                      Cancel
                    </button>
                  </div>
                </div>
              }
            </article>
            }

            @if (activeSettingsTab() === 'payouts') {
            <article class="card-base dashboard-card dashboard-card--payout">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Request payout</p>
                <p class="text-sm text-text-muted">Withdraw your available affiliate earnings.</p>
              </div>

              <div class="space-y-4">
                <p class="text-sm text-text-muted">Available balance: <span class="font-semibold text-text-primary">{{ formattedEarnings() }}</span></p>

                @if (!editingPayout()) {
                  <button type="button" class="btn-secondary" (click)="openPayoutEditor()" [disabled]="payoutSubmitting() || stats().earningsNgn <= 0">
                    Request payout
                  </button>
                } @else {
                  <form [formGroup]="payoutForm" (ngSubmit)="requestPayout()" class="space-y-4" novalidate>
                    <div>
                      <label for="payout-method" class="mb-2 block text-sm font-medium text-text-body">Payout method</label>
                      <select id="payout-method" formControlName="payoutMethod" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body">
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Paystack Transfer">Paystack Transfer</option>
                      </select>
                    </div>

                    @if (payoutMethod() === 'Paystack Transfer') {
                      <div>
                        <label for="payout-bank-code" class="mb-2 block text-sm font-medium text-text-body">Bank code</label>
                        <input id="payout-bank-code" type="text" formControlName="bankCode" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                        @if (payoutForm.controls.bankCode.invalid && payoutForm.controls.bankCode.touched) {
                          <p class="form-error" role="alert">Bank code is required for Paystack transfers.</p>
                        }
                      </div>
                    }

                    <div>
                      <label for="payout-amount" class="mb-2 block text-sm font-medium text-text-body">Amount (NGN)</label>
                      <input id="payout-amount" type="number" min="1" formControlName="amount" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isPayoutInvalid('amount')) {
                        <p class="form-error" role="alert">Enter a valid amount.</p>
                      }
                    </div>

                    <div>
                      <label for="payout-bank" class="mb-2 block text-sm font-medium text-text-body">Bank name</label>
                      <input id="payout-bank" type="text" formControlName="bankName" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isPayoutInvalid('bankName')) {
                        <p class="form-error" role="alert">Bank name is required.</p>
                      }
                    </div>

                    <div>
                      <label for="payout-account-name" class="mb-2 block text-sm font-medium text-text-body">Account name</label>
                      <input id="payout-account-name" type="text" formControlName="accountName" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isPayoutInvalid('accountName')) {
                        <p class="form-error" role="alert">Account name is required.</p>
                      }
                    </div>

                    <div>
                      <label for="payout-account-number" class="mb-2 block text-sm font-medium text-text-body">Account number</label>
                      <input id="payout-account-number" type="text" formControlName="accountNumber" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body" />
                      @if (isPayoutInvalid('accountNumber')) {
                        <p class="form-error" role="alert">Enter a valid account number.</p>
                      }
                    </div>

                    <div>
                      <label for="payout-notes" class="mb-2 block text-sm font-medium text-text-body">Notes (optional)</label>
                      <textarea id="payout-notes" rows="3" formControlName="notes" class="w-full rounded-[10px] border border-border-base bg-bg-white px-4 py-3 text-text-body"></textarea>
                    </div>

                    <div class="flex flex-wrap gap-3">
                      <button type="submit" class="btn-primary" [disabled]="payoutForm.invalid || payoutSubmitting()">
                        {{ payoutSubmitting() ? 'Sending request...' : 'Submit payout request' }}
                      </button>
                      <button type="button" class="btn-secondary" (click)="cancelPayoutEditor()" [disabled]="payoutSubmitting()">
                        Cancel
                      </button>
                    </div>
                  </form>
                }
              </div>
            </article>
            }

            @if (activeSettingsTab() === 'payouts') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Payout history</p>
                <p class="text-sm text-text-muted">Review your recent payout requests and their status.</p>
              </div>

              @if (payoutHistoryLoading()) {
                <p class="text-sm text-text-muted">Loading payout history...</p>
              } @else if (payoutHistoryError()) {
                <p class="text-sm text-error">Unable to load payout history right now.</p>
              } @else if (!payoutHistory().length) {
                <p class="text-sm text-text-muted">No payout requests yet.</p>
              } @else {
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left">
                    <thead>
                      <tr class="text-text-muted border-b border-border-base">
                        <th class="py-2 pr-4">Requested</th>
                        <th class="py-2 pr-4">Amount</th>
                        <th class="py-2 pr-4">Method</th>
                        <th class="py-2 pr-4">Account</th>
                        <th class="py-2 pr-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (request of payoutHistory(); track request.id) {
                        <tr class="border-b border-border-base">
                          <td class="py-2 pr-4">{{ request.requestedAt | date: 'MMM d, y, h:mm a' }}</td>
                          <td class="py-2 pr-4">NGN {{ request.amount | number }}</td>
                          <td class="py-2 pr-4">{{ request.payoutMethod }}</td>
                          <td class="py-2 pr-4">{{ request.bankName }} • {{ request.accountNumberMasked }}</td>
                          <td class="py-2 pr-4 capitalize">{{ request.status }}</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>

                <div class="flex flex-wrap gap-3 mt-4">
                  <button type="button" class="btn-secondary" (click)="changePayoutHistoryPage(payoutHistoryPage() - 1)" [disabled]="payoutHistoryPage() <= 1">
                    Previous
                  </button>
                  <button type="button" class="btn-secondary" (click)="changePayoutHistoryPage(payoutHistoryPage() + 1)" [disabled]="payoutHistoryPage() >= payoutHistoryPageCount()">
                    Next
                  </button>
                  <span class="text-sm text-text-muted self-center">Page {{ payoutHistoryPage() }} of {{ payoutHistoryPageCount() }}</span>
                </div>
              }
            </article>
            }

            @if (activeSettingsTab() === 'sessions') {
            <article class="card-base dashboard-card">
              <div class="mb-5 dashboard-card__head">
                <p class="text-sm font-semibold text-text-primary">Active sessions</p>
                <p class="text-sm text-text-muted">Sign out every other browser or device while keeping this one active.</p>
              </div>

              <div class="space-y-4">
                <p class="text-sm text-text-muted">Use this when you have signed in somewhere you no longer trust or just want a quick security reset across your other devices.</p>
                <button type="button" class="btn-secondary" (click)="logoutOtherDevices()" [disabled]="sessionActionBusy()">
                  {{ sessionActionBusy() ? 'Signing out other devices...' : 'Log out other devices' }}
                </button>
              </div>
            </article>
            }
          </div>
          </div>
        </section>
      </div>
    </section>
  `,
  styles: [`
    .affiliate-dashboard-shell {
      background:
        radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 26%),
        radial-gradient(circle at top right, rgba(251, 191, 36, 0.1), transparent 22%),
        linear-gradient(180deg, rgba(248, 250, 252, 1) 0%, rgba(255, 255, 255, 1) 45%, rgba(244, 247, 245, 1) 100%);
    }

    :host-context(.dark) .affiliate-dashboard-shell {
      background:
        radial-gradient(circle at top left, rgba(34, 197, 94, 0.14), transparent 26%),
        radial-gradient(circle at top right, rgba(251, 191, 36, 0.08), transparent 22%),
        linear-gradient(180deg, rgba(12, 16, 14, 1) 0%, rgba(15, 20, 18, 1) 48%, rgba(10, 13, 12, 1) 100%);
    }

    .dashboard-hero {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.9fr);
      gap: 1.5rem;
      align-items: stretch;
      padding: 1.75rem;
      border-radius: 30px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
    }

    :host-context(.dark) .dashboard-hero {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
      box-shadow: none;
    }

    .dashboard-hero__copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    .dashboard-kicker {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: #16a34a;
    }

    .dashboard-hero__lead {
      max-width: 58ch;
      font-size: 1rem;
      line-height: 1.7;
      color: var(--text-muted);
    }

    .dashboard-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .dashboard-chip {
      display: inline-flex;
      align-items: center;
      padding: 0.65rem 0.95rem;
      border-radius: 999px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.78);
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    :host-context(.dark) .dashboard-chip {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.05);
    }

    .dashboard-chip--accent {
      color: #0f172a;
      background: rgba(34, 197, 94, 0.16);
      border-color: rgba(34, 197, 94, 0.2);
    }

    .dashboard-chip--success {
      color: #166534;
      background: rgba(34, 197, 94, 0.14);
      border-color: rgba(34, 197, 94, 0.2);
    }

    :host-context(.dark) .dashboard-chip--accent,
    :host-context(.dark) .dashboard-chip--success {
      color: #dcfce7;
    }

    .dashboard-hero__link-card {
      padding: 1.35rem;
      border-radius: 24px;
      background: linear-gradient(160deg, rgba(15, 23, 42, 0.98), rgba(21, 128, 61, 0.88));
      color: white;
    }

    .dashboard-hero__link {
      margin-top: 1rem;
      font-size: 0.95rem;
      line-height: 1.75;
      color: rgba(255, 255, 255, 0.9);
    }

    .dashboard-alert {
      border-radius: 18px;
      border: 1px solid rgba(239, 68, 68, 0.18);
      background: rgba(254, 242, 242, 0.96);
      padding: 0.95rem 1rem;
    }

    :host-context(.dark) .dashboard-alert {
      border-color: rgba(248, 113, 113, 0.15);
      background: rgba(127, 29, 29, 0.18);
      color: #fecaca;
    }

    .dashboard-stat-card,
    .dashboard-card {
      border: 1px solid rgba(15, 23, 42, 0.07);
      background: rgba(255, 255, 255, 0.88);
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
    }

    :host-context(.dark) .dashboard-stat-card,
    :host-context(.dark) .dashboard-card {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
      box-shadow: none;
    }

    .dashboard-stat-card {
      min-height: 180px;
      border-radius: 24px;
      padding: 1.25rem;
    }

    .dashboard-stat-card--earnings {
      background: linear-gradient(160deg, rgba(34, 197, 94, 0.12), rgba(255, 255, 255, 0.96));
    }

    :host-context(.dark) .dashboard-stat-card--earnings {
      background: linear-gradient(160deg, rgba(34, 197, 94, 0.16), rgba(255, 255, 255, 0.04));
    }

    .dashboard-stat-card__label,
    .dashboard-mini-panel__label {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--text-muted);
    }

    .dashboard-stat-card__value {
      margin-top: 0.9rem;
      font-size: clamp(1.8rem, 2.4vw, 2.35rem);
      font-weight: 800;
      color: var(--text-primary);
    }

    .dashboard-stat-card__meta,
    .dashboard-mini-panel__value {
      margin-top: 0.85rem;
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--text-muted);
    }

    .dashboard-card {
      border-radius: 24px;
    }

    .dashboard-card--feature {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(245, 250, 247, 0.94));
    }

    .dashboard-card--payout {
      background: linear-gradient(180deg, rgba(240, 253, 244, 0.9), rgba(255, 255, 255, 0.95));
    }

    :host-context(.dark) .dashboard-card--feature,
    :host-context(.dark) .dashboard-card--payout {
      background: rgba(255, 255, 255, 0.04);
    }

    .dashboard-card__head,
    .dashboard-section-head {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 1rem;
    }

    .dashboard-list-item {
      position: relative;
      padding-left: 1.4rem;
      line-height: 1.65;
    }

    .dashboard-list-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55rem;
      width: 0.52rem;
      height: 0.52rem;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12);
    }

    .dashboard-mini-panel {
      padding: 0.95rem 1rem;
      border-radius: 18px;
      background: rgba(15, 23, 42, 0.03);
    }

    :host-context(.dark) .dashboard-mini-panel {
      background: rgba(255, 255, 255, 0.04);
    }

    .dashboard-quick-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.95rem 1rem;
      border-radius: 18px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.84);
      color: var(--text-primary);
      font-weight: 600;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }

    .dashboard-quick-link:hover {
      transform: translateY(-1px);
      border-color: rgba(34, 197, 94, 0.25);
      background: rgba(240, 253, 244, 0.9);
    }

    :host-context(.dark) .dashboard-quick-link {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    :host-context(.dark) .dashboard-quick-link:hover {
      background: rgba(34, 197, 94, 0.08);
    }

    .dashboard-settings-shell {
      margin-top: 1.5rem;
      padding: 1.25rem;
      border-radius: 28px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.72);
      box-shadow: 0 16px 48px rgba(15, 23, 42, 0.05);
    }

    :host-context(.dark) .dashboard-settings-shell {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.03);
      box-shadow: none;
    }

    .dashboard-settings-summary {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .dashboard-settings-summary__card {
      padding: 1rem 1.05rem;
      border-radius: 20px;
      background: rgba(15, 23, 42, 0.03);
    }

    :host-context(.dark) .dashboard-settings-summary__card {
      background: rgba(255, 255, 255, 0.04);
    }

    .dashboard-settings-summary__value {
      margin-top: 0.7rem;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .dashboard-settings-summary__meta {
      margin-top: 0.45rem;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-muted);
    }

    .dashboard-settings-tabs {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.85rem;
      margin-bottom: 1.5rem;
    }

    .dashboard-settings-tab {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.35rem;
      padding: 0.95rem 1rem;
      border-radius: 18px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.78);
      text-align: left;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }

    .dashboard-settings-tab:hover {
      transform: translateY(-1px);
      border-color: rgba(34, 197, 94, 0.22);
      background: rgba(240, 253, 244, 0.88);
    }

    .dashboard-settings-tab--active {
      border-color: rgba(34, 197, 94, 0.3);
      background: linear-gradient(180deg, rgba(240, 253, 244, 0.98), rgba(255, 255, 255, 0.96));
      box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.08);
    }

    :host-context(.dark) .dashboard-settings-tab {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    :host-context(.dark) .dashboard-settings-tab:hover,
    :host-context(.dark) .dashboard-settings-tab--active {
      background: rgba(34, 197, 94, 0.09);
    }

    .dashboard-settings-tab__label {
      font-size: 0.94rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .dashboard-settings-tab__copy {
      font-size: 0.84rem;
      line-height: 1.5;
      color: var(--text-muted);
    }

    @media (max-width: 1024px) {
      .dashboard-hero {
        grid-template-columns: 1fr;
      }

      .dashboard-card__head,
      .dashboard-section-head {
        flex-direction: column;
      }

      .dashboard-settings-summary,
      .dashboard-settings-tabs {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 640px) {
      .dashboard-settings-shell {
        padding: 1rem;
      }

      .dashboard-settings-summary,
      .dashboard-settings-tabs {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AffiliateComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly auth = inject(AuthService);
  private readonly referral = inject(ReferralService);
  private readonly toast = inject(ToastService);

  readonly loading = signal(true);
  readonly error = signal(false);
  readonly stats = signal<AffiliateStats>({ clicks: 0, conversions: 0, earningsNgn: 0 });
  readonly apiReferralId = signal('');
  readonly profile = signal<UserProfile | null>(null);
  readonly profileLoading = signal(true);
  readonly profileSaving = signal(false);
  readonly emailSaving = signal(false);
  readonly passwordSaving = signal(false);
  readonly editingProfile = signal(false);
  readonly editingEmail = signal(false);
  readonly editingPassword = signal(false);
  readonly twoFactorMode = signal<'enable' | 'disable' | null>(null);
  readonly twoFactorBusy = signal(false);
  readonly twoFactorCodeSent = signal(false);
  readonly resendingTwoFactorCode = signal(false);
  readonly twoFactorCooldownSeconds = signal(0);
  readonly sessionActionBusy = signal(false);
  readonly payoutSubmitting = signal(false);
  readonly editingPayout = signal(false);
  readonly payoutHistory = signal<PayoutRequestItem[]>([]);
  readonly payoutHistoryLoading = signal(false);
  readonly payoutHistoryError = signal(false);
  readonly payoutHistoryPage = signal(1);
  readonly payoutHistoryPageCount = signal(1);
  readonly payoutMethod = signal('Bank Transfer');
  readonly activeSettingsTab = signal<'profile' | 'security' | 'payouts' | 'sessions'>('profile');

  readonly profileForm = this.fb.nonNullable.group({
    firstName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.maxLength(100)],
      updateOn: 'blur',
    }),
    lastName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.maxLength(100)],
      updateOn: 'blur',
    }),
    username: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_]+$/)],
      updateOn: 'blur',
    }),
  });

  readonly passwordForm = this.fb.nonNullable.group({
    currentPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    newPassword: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/),
      ],
      updateOn: 'blur',
    }),
    confirmPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  readonly emailForm = this.fb.nonNullable.group({
    newEmail: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    currentPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  readonly twoFactorEnableForm = this.fb.nonNullable.group({
    currentPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    code: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'blur',
    }),
  });

  readonly twoFactorDisableForm = this.fb.nonNullable.group({
    currentPassword: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  readonly payoutForm = this.fb.nonNullable.group({
    amount: this.fb.nonNullable.control(0, {
      validators: [Validators.required, Validators.min(1)],
      updateOn: 'blur',
    }),
    payoutMethod: this.fb.nonNullable.control('Bank Transfer', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    bankCode: this.fb.nonNullable.control('', {
      validators: [Validators.maxLength(20)],
      updateOn: 'blur',
    }),
    bankName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.maxLength(120)],
      updateOn: 'blur',
    }),
    accountName: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.maxLength(60)],
      updateOn: 'blur',
    }),
    accountNumber: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.pattern(/^\d{8,20}$/)],
      updateOn: 'blur',
    }),
    notes: this.fb.nonNullable.control('', {
      validators: [Validators.maxLength(240)],
      updateOn: 'blur',
    }),
  });

  readonly referralCode = computed(() => this.apiReferralId() || this.referral.getReferralCode());
  readonly formattedEarnings = computed(() => `NGN ${this.stats().earningsNgn.toLocaleString()}`);
  readonly referralLink = computed(() => {
    const code = this.referralCode();
    if (!code) return '';

    return `${this.baseUrl}/tech-school/apply?ref=${encodeURIComponent(code)}`;
  });
  readonly quickLinks: ReadonlyArray<{ label: string; href: string }> = [
    { label: 'Events', href: '/events' },
    { label: 'Alumni Stories', href: '/alumni' },
    { label: 'Tech School Courses', href: '/tech-school/courses' },
    { label: 'Salary Guide', href: '/resources/salary-guide' },
    { label: 'Bulk Vouchers', href: '/bulk-vouchers' },
    { label: 'IT Services Portfolio', href: '/it-services/portfolio' },
    { label: 'Latest Blog Posts', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Team', href: '/contact' },
  ];
  readonly settingsTabs: ReadonlyArray<{
    id: 'profile' | 'security' | 'payouts' | 'sessions';
    label: string;
    copy: string;
  }> = [
    { id: 'profile', label: 'Profile', copy: 'Details and email preferences' },
    { id: 'security', label: 'Security', copy: 'Password and 2FA controls' },
    { id: 'payouts', label: 'Payouts', copy: 'Requests and payment history' },
    { id: 'sessions', label: 'Sessions', copy: 'Trusted device management' },
  ];
  private readonly baseUrl = typeof globalThis !== 'undefined' && 'location' in globalThis && globalThis.location?.origin
    ? globalThis.location.origin
    : 'https://www.scalefort.org';
  private twoFactorCooldownTimer: ReturnType<typeof setInterval> | null = null;
  private payoutMethodSub?: Subscription;

  ngOnInit(): void {
    this.loadProfile();
    this.loadAffiliateStats();
    this.loadPayoutHistory();
    this.payoutMethod.set(this.payoutForm.controls.payoutMethod.value);
    this.payoutMethodSub = this.payoutForm.controls.payoutMethod.valueChanges.subscribe((value) => {
      if (typeof value === 'string' && value.trim()) {
        this.payoutMethod.set(value.trim());
      }
    });
  }

  ngOnDestroy(): void {
    this.clearTwoFactorCooldownTimer();
    this.payoutMethodSub?.unsubscribe();
  }

  isProfileInvalid(field: 'firstName' | 'lastName' | 'username'): boolean {
    const control = this.profileForm.controls[field];
    return control.invalid && control.touched;
  }

  isEmailInvalid(field: 'newEmail' | 'currentPassword'): boolean {
    const control = this.emailForm.controls[field];
    return control.invalid && control.touched;
  }

  isPasswordInvalid(field: 'currentPassword' | 'newPassword' | 'confirmPassword'): boolean {
    const control = this.passwordForm.controls[field];
    return control.invalid && control.touched;
  }

  isPayoutInvalid(field: 'amount' | 'bankName' | 'accountName' | 'accountNumber'): boolean {
    const control = this.payoutForm.controls[field];
    return control.invalid && control.touched;
  }

  passwordsMismatch(): boolean {
    return (
      this.passwordForm.controls.confirmPassword.touched &&
      this.passwordForm.controls.newPassword.value !== this.passwordForm.controls.confirmPassword.value
    );
  }

  saveProfile(): void {
    if (this.profileForm.invalid || this.profileSaving()) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.profileSaving.set(true);
    this.api
      .updateProfile({
        firstName: this.profileForm.controls.firstName.value.trim(),
        lastName: this.profileForm.controls.lastName.value.trim(),
        username: this.profileForm.controls.username.value.trim(),
      })
      .pipe(finalize(() => this.profileSaving.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success || !response.data) {
            this.toast.error(response.message ?? 'Unable to update your details right now.');
            return;
          }

          this.profile.set(response.data);
          this.editingProfile.set(false);
          this.toast.success(response.message ?? 'Your account details have been updated.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to update your details right now.'));
        },
      });
  }

  changePassword(): void {
    if (this.passwordForm.invalid || this.passwordSaving()) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    if (this.passwordForm.controls.newPassword.value !== this.passwordForm.controls.confirmPassword.value) {
      this.passwordForm.controls.confirmPassword.markAsTouched();
      this.toast.error('Passwords do not match.');
      return;
    }

    this.passwordSaving.set(true);
    this.api
      .changePassword({
        currentPassword: this.passwordForm.controls.currentPassword.value,
        newPassword: this.passwordForm.controls.newPassword.value,
        confirmPassword: this.passwordForm.controls.confirmPassword.value,
      })
      .pipe(finalize(() => this.passwordSaving.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to change your password right now.');
            return;
          }

          this.passwordForm.reset({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          });
          this.auth.syncSession(response.data);
          this.editingPassword.set(false);
          this.toast.success(response.message ?? 'Your password has been changed successfully.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to change your password right now.'));
        },
      });
  }

  requestEmailChange(): void {
    if (this.emailForm.invalid || this.emailSaving()) {
      this.emailForm.markAllAsTouched();
      return;
    }

    this.emailSaving.set(true);
    this.auth
      .requestEmailChange({
        newEmail: this.emailForm.controls.newEmail.value.trim(),
        currentPassword: this.emailForm.controls.currentPassword.value,
      })
      .pipe(finalize(() => this.emailSaving.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to start your email change right now.');
            return;
          }

          this.cancelEmailEditor();
          this.toast.success(response.message ?? 'We sent a confirmation link to your new email address.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to start your email change right now.'));
        },
      });
  }

  openEnableTwoFactor(): void {
    this.twoFactorMode.set('enable');
    this.twoFactorCodeSent.set(false);
    this.twoFactorCooldownSeconds.set(0);
    this.clearTwoFactorCooldownTimer();
    this.twoFactorEnableForm.reset({
      currentPassword: '',
      code: '',
    });
  }

  openDisableTwoFactor(): void {
    this.twoFactorMode.set('disable');
    this.twoFactorCooldownSeconds.set(0);
    this.clearTwoFactorCooldownTimer();
    this.twoFactorDisableForm.reset({
      currentPassword: '',
    });
  }

  sendTwoFactorSetupCode(): void {
    if (this.twoFactorBusy()) {
      return;
    }

    if (this.twoFactorEnableForm.controls.currentPassword.invalid) {
      this.twoFactorEnableForm.controls.currentPassword.markAsTouched();
      return;
    }

    this.twoFactorBusy.set(true);
    this.api
      .beginEmailTwoFactorSetup({
        currentPassword: this.twoFactorEnableForm.controls.currentPassword.value,
      })
      .pipe(finalize(() => this.twoFactorBusy.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to send a verification code right now.');
            return;
          }

          this.twoFactorCodeSent.set(true);
          this.startTwoFactorCooldown(response.retryAfterSeconds ?? 60);
          this.toast.success(response.message ?? 'A verification code has been sent to your email.');
        },
        error: (error: unknown) => {
          const retryAfterSeconds = this.extractRetryAfterSeconds(error);
          if (retryAfterSeconds > 0) {
            this.startTwoFactorCooldown(retryAfterSeconds);
          }
          this.toast.error(this.extractErrorMessage(error, 'Unable to send a verification code right now.'));
        },
      });
  }

  resendTwoFactorSetupCode(): void {
    if (this.resendingTwoFactorCode()) {
      return;
    }

    this.resendingTwoFactorCode.set(true);
    this.api
      .resendEmailTwoFactorSetupCode()
      .pipe(finalize(() => this.resendingTwoFactorCode.set(false)))
      .subscribe({
        next: (response) => {
          this.startTwoFactorCooldown(response.retryAfterSeconds ?? 60);
          this.toast.success(response.message ?? 'A new verification code has been sent to your email.');
        },
        error: (error: unknown) => {
          const retryAfterSeconds = this.extractRetryAfterSeconds(error);
          if (retryAfterSeconds > 0) {
            this.startTwoFactorCooldown(retryAfterSeconds);
          }
          this.toast.error(this.extractErrorMessage(error, 'Unable to resend the verification code right now.'));
        },
      });
  }

  confirmEnableTwoFactor(): void {
    if (this.twoFactorBusy()) {
      return;
    }

    if (this.twoFactorEnableForm.controls.code.invalid) {
      this.twoFactorEnableForm.controls.code.markAsTouched();
      return;
    }

    this.twoFactorBusy.set(true);
    this.api
      .enableEmailTwoFactor({
        code: this.twoFactorEnableForm.controls.code.value,
      })
      .pipe(finalize(() => this.twoFactorBusy.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to enable two-factor authentication right now.');
            return;
          }

          this.profile.update((profile) => (profile ? { ...profile, twoFactorEnabled: true } : profile));
          this.cancelTwoFactorEditor();
          this.toast.success(response.message ?? 'Email two-factor authentication is now enabled.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to enable two-factor authentication right now.'));
        },
      });
  }

  confirmDisableTwoFactor(): void {
    if (this.twoFactorBusy()) {
      return;
    }

    if (this.twoFactorDisableForm.controls.currentPassword.invalid) {
      this.twoFactorDisableForm.controls.currentPassword.markAsTouched();
      return;
    }

    this.twoFactorBusy.set(true);
    this.api
      .disableEmailTwoFactor({
        currentPassword: this.twoFactorDisableForm.controls.currentPassword.value,
      })
      .pipe(finalize(() => this.twoFactorBusy.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to disable two-factor authentication right now.');
            return;
          }

          this.profile.update((profile) => (profile ? { ...profile, twoFactorEnabled: false } : profile));
          this.cancelTwoFactorEditor();
          this.toast.success(response.message ?? 'Email two-factor authentication has been disabled.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to disable two-factor authentication right now.'));
        },
      });
  }

  private loadProfile(): void {
    this.profileLoading.set(true);
    this.api
      .getCurrentUser()
      .pipe(finalize(() => this.profileLoading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success || !response.data) {
            this.toast.error('Unable to load your account details right now.');
            return;
          }

          this.profile.set(response.data);
          this.profileForm.reset({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            username: response.data.userName,
          });
        },
        error: () => {
          this.toast.error('Unable to load your account details right now.');
        },
      });
  }

  private loadAffiliateStats(): void {
    this.api.getAffiliateStats(this.referralCode() || undefined).subscribe({
      next: (response) => {
        if (!response.success) {
          this.error.set(true);
          this.loading.set(false);
          this.toast.error('Unable to load affiliate stats right now.');
          return;
        }

        this.stats.set(response.data ?? { clicks: 0, conversions: 0, earningsNgn: 0 });
        this.apiReferralId.set(response.data?.referralId ?? '');
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
        this.toast.error('Unable to load affiliate stats right now.');
      },
    });
  }

  private loadPayoutHistory(): void {
    this.payoutHistoryLoading.set(true);
    this.payoutHistoryError.set(false);
    const pageIndex = this.payoutHistoryPage();
    this.api
      .getMyPayoutRequests(pageIndex)
      .pipe(finalize(() => this.payoutHistoryLoading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success || !response.data) {
            this.payoutHistoryError.set(true);
            return;
          }

          this.payoutHistory.set(response.data.data ?? []);
          this.payoutHistoryPageCount.set(response.data.pageCount || 1);
        },
        error: () => {
          this.payoutHistoryError.set(true);
        },
      });
  }

  changePayoutHistoryPage(nextPage: number): void {
    const pageCount = this.payoutHistoryPageCount();
    const clamped = Math.min(Math.max(nextPage, 1), Math.max(pageCount, 1));
    if (clamped === this.payoutHistoryPage()) {
      return;
    }

    this.payoutHistoryPage.set(clamped);
    this.loadPayoutHistory();
  }

  copyReferralLink(): void {
    const link = this.referralLink();
    if (!link) {
      this.toast.error('No referral link is available yet.');
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      this.toast.error('Clipboard is not available in this browser.');
      return;
    }

    navigator.clipboard
      .writeText(link)
      .then(() => this.toast.success('Referral link copied.'))
      .catch(() => this.toast.error('Unable to copy link right now.'));
  }

  switchSettingsTab(tab: 'profile' | 'security' | 'payouts' | 'sessions'): void {
    this.activeSettingsTab.set(tab);
  }

  openProfileEditor(): void {
    this.editingProfile.set(true);

    const profile = this.profile();
    if (!profile) {
      return;
    }

    this.profileForm.reset({
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.userName,
    });
  }

  cancelProfileEditor(): void {
    this.editingProfile.set(false);

    const profile = this.profile();
    if (!profile) {
      return;
    }

    this.profileForm.reset({
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.userName,
    });
  }

  openPasswordEditor(): void {
    this.editingPassword.set(true);
    this.passwordForm.reset({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }

  openEmailEditor(): void {
    this.editingEmail.set(true);
    this.emailForm.reset({
      newEmail: '',
      currentPassword: '',
    });
  }

  cancelEmailEditor(): void {
    this.editingEmail.set(false);
    this.emailForm.reset({
      newEmail: '',
      currentPassword: '',
    });
  }

  cancelPasswordEditor(): void {
    this.editingPassword.set(false);
    this.passwordForm.reset({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }

  cancelTwoFactorEditor(): void {
    this.twoFactorMode.set(null);
    this.twoFactorCodeSent.set(false);
    this.twoFactorCooldownSeconds.set(0);
    this.clearTwoFactorCooldownTimer();
    this.twoFactorEnableForm.reset({
      currentPassword: '',
      code: '',
    });
    this.twoFactorDisableForm.reset({
      currentPassword: '',
    });
  }

  openPayoutEditor(): void {
    this.editingPayout.set(true);
    this.payoutForm.reset({
      amount: Math.max(0, Math.floor(this.stats().earningsNgn)),
      payoutMethod: 'Bank Transfer',
      bankCode: '',
      bankName: '',
      accountName: '',
      accountNumber: '',
      notes: '',
    });
    this.payoutMethod.set('Bank Transfer');
  }

  cancelPayoutEditor(): void {
    this.editingPayout.set(false);
    this.payoutForm.reset({
      amount: 0,
      payoutMethod: 'Bank Transfer',
      bankCode: '',
      bankName: '',
      accountName: '',
      accountNumber: '',
      notes: '',
    });
    this.payoutMethod.set('Bank Transfer');
  }

  requestPayout(): void {
    if (this.payoutForm.invalid || this.payoutSubmitting()) {
      this.payoutForm.markAllAsTouched();
      return;
    }

    const amount = Number(this.payoutForm.controls.amount.value);
    const available = this.stats().earningsNgn;
    if (Number.isNaN(amount) || amount <= 0) {
      this.payoutForm.controls.amount.markAsTouched();
      this.toast.error('Enter a valid payout amount.');
      return;
    }

    if (amount > available) {
      this.payoutForm.controls.amount.markAsTouched();
      this.toast.error(`Requested amount exceeds available earnings (NGN ${available.toLocaleString()}).`);
      return;
    }

    const payoutMethod = this.payoutForm.controls.payoutMethod.value.trim();
    const bankCode = this.payoutForm.controls.bankCode.value.trim();
    if (payoutMethod === 'Paystack Transfer' && !bankCode) {
      this.payoutForm.controls.bankCode.markAsTouched();
      this.toast.error('Bank code is required for Paystack transfers.');
      return;
    }

    this.payoutSubmitting.set(true);
    this.api
      .requestPayout({
        amount,
        payoutMethod,
        bankCode: bankCode || undefined,
        bankName: this.payoutForm.controls.bankName.value.trim(),
        accountName: this.payoutForm.controls.accountName.value.trim(),
        accountNumber: this.payoutForm.controls.accountNumber.value.trim(),
        notes: this.payoutForm.controls.notes.value.trim() || undefined,
      })
      .pipe(finalize(() => this.payoutSubmitting.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to submit payout request right now.');
            return;
          }

          this.cancelPayoutEditor();
          this.toast.success(response.message ?? 'Your payout request has been received.');
          this.loadAffiliateStats();
          this.loadPayoutHistory();
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to submit payout request right now.'));
        },
      });
  }

  logoutOtherDevices(): void {
    if (this.sessionActionBusy()) {
      return;
    }

    this.sessionActionBusy.set(true);
    this.auth
      .logoutOtherDevices()
      .pipe(finalize(() => this.sessionActionBusy.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to sign out your other devices right now.');
            return;
          }

          this.toast.success(response.message ?? 'Other devices have been signed out successfully.');
        },
        error: (error: unknown) => {
          this.toast.error(this.extractErrorMessage(error, 'Unable to sign out your other devices right now.'));
        },
      });
  }

  formatCountdown(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes === 0) {
      return `${seconds}s`;
    }

    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  }

  private extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message ?? error.error?.Message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
    }

    return fallback;
  }

  private extractRetryAfterSeconds(error: unknown): number {
    if (!(error instanceof HttpErrorResponse)) {
      return 0;
    }

    const fromHeader = Number(error.headers.get('Retry-After'));
    if (Number.isFinite(fromHeader) && fromHeader > 0) {
      return Math.max(1, Math.ceil(fromHeader));
    }

    const fromBody = Number(error.error?.retryAfterSeconds ?? error.error?.RetryAfterSeconds);
    if (Number.isFinite(fromBody) && fromBody > 0) {
      return Math.max(1, Math.ceil(fromBody));
    }

    return 0;
  }

  private startTwoFactorCooldown(seconds: number): void {
    const safeSeconds = Math.max(0, Math.ceil(seconds));
    this.twoFactorCooldownSeconds.set(safeSeconds);
    this.clearTwoFactorCooldownTimer();

    if (safeSeconds <= 0) {
      return;
    }

    this.twoFactorCooldownTimer = setInterval(() => {
      const next = this.twoFactorCooldownSeconds() - 1;
      if (next <= 0) {
        this.twoFactorCooldownSeconds.set(0);
        this.clearTwoFactorCooldownTimer();
        return;
      }

      this.twoFactorCooldownSeconds.set(next);
    }, 1000);
  }

  private clearTwoFactorCooldownTimer(): void {
    if (this.twoFactorCooldownTimer !== null) {
      clearInterval(this.twoFactorCooldownTimer);
      this.twoFactorCooldownTimer = null;
    }
  }
}

