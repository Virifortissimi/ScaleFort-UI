export interface ICreatePayment {
    customerEmail?: string;
    amount?: number;
    currency?: 'NGN' | 'USD' | 'EUR';
    orderReference?: string;
}