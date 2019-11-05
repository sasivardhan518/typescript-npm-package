import { ExportTypesEnum } from '../enums/export-types.enum';
export interface ExportContract {
    exportInfo: ExportAsset[];
    tabId?: string;
    requestId?: string;
}

export interface ExportAsset {
    assetId?: number;
    reportMetaInfo?: any; // ReportMetaInfo;
    mergeReportMetaInfo?: any; // ReportMetaInfo;
    SRMetaInfo?: any;
    storyboardInfo?: any; // StoryboardInfo;
    assetType: ExportResourceType;
    exportOptions: ExportOptions;
}

export interface ExportOptions {
    exportType: string[];
    views?: string[];
    currentPageOnly?: boolean;
}

export enum ExportResourceType {
    Report = 1,
    Storyboard = 2,
    Folder = 3,
    MergeReport = 4,
    StandardReport = 5
}

export enum ExportType {
    Ppt = 'ppt',
    Pdf = 'pdf',
    Excel = 'excel',
    Flatfile = 'flatfile',
    OfflineAppShare = 'offlineAppShare'
}

export interface ExportResponse {
    status: string;
    message: string;
    fileName: string;
    fileSize: string;
}

export interface ExportTypeOption {
    key: ExportTypesEnum;
    label: string;
    isDisabled?: boolean;
}
