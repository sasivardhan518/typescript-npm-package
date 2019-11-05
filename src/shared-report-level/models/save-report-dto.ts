import { AssetProperties } from '../../shared-app-level/models/asset-properties';
import { ReportInfo } from './report-info';

export interface SaveReportDto {
    reportInfo: ReportInfo;
    folderId: number;
    assetProperties?: AssetProperties;
}

export interface MergeReportSaveResponse {
    reportId: number;
    hiddenAssetsMapping: OldNewReportMapping;
}

export interface OldNewReportMapping {
    [oldReportId: number]: number;
}