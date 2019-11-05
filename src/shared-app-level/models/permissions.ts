export interface PermissionActionValueMap {
    [key: string]: boolean;
}

export interface PermissionActionMap {
    [key: string]: Permission;
}

export interface Permission {
    expression: string;
    permissions: PermissionsMap;
}

export interface PermissionsMap {
    [key: string]: PermissionProps;
}

export interface PermissionProps {
    entity?: PermissionEntity;
}

export interface PermissionEntity {
    id: number;
    type: string;
}

