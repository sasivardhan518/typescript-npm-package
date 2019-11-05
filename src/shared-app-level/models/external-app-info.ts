export interface ExternalAppInfo {
    assetId: number;
    filters: ExternalAppFilter[];
}

export interface ExternalAppFilter {
    attrName: string;
    values: string[];
    descriptions?: string[];
    domainId?: number;
}
