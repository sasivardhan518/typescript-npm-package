import { ResourceType } from '../enums/resource-type.enum';

export interface PermissionInfo {
    permissionId: number;
    resourceType: ResourceType;
    displayText: string;
    crypticPermission: string;
}
