export enum DepartmentType {
    TechSchool = 1,
    CorporateTraining = 2,
    ITServices = 3
}

export enum CourseInterest {
    FrontendDevelopment = 1,
    PythonDevelopment = 2,
    DotnetDevelopment = 3,
    CloudComputing = 4,
    DataAnalysis = 5,
    CyberSecurity = 6,
    ProductManagement = 7,
    ProductDesign = 8
}

export enum ITServiceType {
    CustomWebDevelopment = 1,
    ECommerceSolutions = 2,
    CloudIntegration = 3,
    APIDevelopment = 4,
    MaintenanceAndSupport = 5,
    UIUXDevelopment = 6,
    ProductManagement = 7,
    ApplicationDevelopment = 8
}

export enum TopicType {
    TechnicalUpskilling = 1,
    LeadershipInTech = 2,
    AgileTransformation = 3,
    CloudMigration = 4,
    DataLiteracy = 5,
    Cybersecurity = 6
}

export interface ICreateApplicationInquiry {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    departmentType?: DepartmentType;
    courseInterest?: CourseInterest;
    companyName?: string;
    trainingTopic?: TopicType;
    serviceType?: ITServiceType;
    submissionDate?: Date;
    referralId?: string;
}