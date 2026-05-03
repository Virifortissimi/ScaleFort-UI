export interface IPricing {
    id: string,
    referralId: string,
    mainOnceAmount: number,
    mainTwiceAmount: number,
    mainThriceAmount: number,
    onceAmount: number,
    twiceAmount: number,
    thriceAmount: number
}

export interface IPricePlan {
    id: number;
    title?: string;
    description?: string;
    mainAmount?: number;
    discountedAmount?: number;
}