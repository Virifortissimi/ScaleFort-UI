export interface IApplicationInquiry {
    firtstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    departmentType: any; // Enum
    courseInterest: any; // Enum
    companyName: string;
    trainingTopic: string;
    serviceType: any; // Enum
    submissionDate: Date;
    referralId: string;
}