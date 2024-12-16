export interface Coupon {
    id: string;
    code: string;
    discount: number;
    description: string;
    startDate: Date;
    endDate: Date;
    removalFlag: boolean;
}
