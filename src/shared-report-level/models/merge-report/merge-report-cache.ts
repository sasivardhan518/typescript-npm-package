import { AssetAccessedFromEnum } from '../../../shared-app-level/enums/asset-accessed-from.enum';
import { AttributeLabelInfo, ReportInfo } from '../report-info';
import { FilterInfo } from '../filter-info';
import { LinkedArtifacts } from '../linked-artifacts';
import { MergeReportDetails } from './merge-report-info';
import { QuickFilterConfigurationMap } from '../../../shared-app-level/models/quick-filter-configuration-map';
import { SimpleFilterInfo } from '../simple-filter-info';

export interface MergeReportCache {
    usedLabelInfo: AttributeLabelInfo;
    isReportEdited: boolean;
    participatingReports: { [dbId: string]: ParticipatingReportInfo };
    reportInfo: ReportInfo;
    folderId: number;
    assetAccessedFrom: AssetAccessedFromEnum;
    prevMergeReportDetails: MergeReportDetails;
    participatingReportsOrder: number[];
    isPreviewModeEnabled: boolean;
    isMergeReportOwner: boolean;
    quickFilters: FilterInfo[];
    quickFilterValues?: SimpleFilterInfo[];
    quickFilterOptions?: AttributeLabelInfo;
    quickFilterConfiguration: QuickFilterConfigurationMap;
    linkedArtifacts?: LinkedArtifacts;
    reportIds: number[];
}

export interface ParticipatingReportInfo {
    reportInfo: ReportInfo;
    isExistingReport: boolean;
    isReportChanged: boolean;
}
