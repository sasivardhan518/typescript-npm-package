export interface TotalInfo {
    [totalName: string]: TotalDesc;
}

export interface TotalDesc {
    name: string;
    description: string;
    hierarchyName: string;
}
