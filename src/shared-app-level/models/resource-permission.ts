import { PermissionInfo } from './permission-info';
export interface ResourcePermission {
    applicationPermissions: PermissionInfo[];
    domainPermissions: DomainPermissions;
}

export interface DomainPermissions {
    [domainId: string]: PermissionInfo[];
}
