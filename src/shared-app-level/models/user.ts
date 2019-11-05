import { ResourcePermission } from './resource-permission';
export interface User {
    userName: string;
    fullName: string;
    defaultGroupId?: number;
    permissions?: ResourcePermission;
    preferredLanguage?: string;
    preferredTheme?: string;
    lastAccessedDate?: string;
    forgotPassword: boolean;
    firstLogin: boolean;
    accessToken: string;
    expiry: string;
    passwordExpired?: boolean;
    preferredView: string;
    tenantId: number;
    licenseResponse: LicenseResponse;
}

interface LicenseResponse {
    licenseViolation: boolean;
    licenseViolationReasons?: (string)[] | null;
}

