import { Domain } from '../../../shared-app-level/models/domain';
import { MergeSpecificInfo } from './merge-specific-info';
import { ReportInfo } from '../report-info';
export interface MergeReportInfo extends ReportInfo {
    mergeInfo: MergeSpecificInfo;
}

export interface MergeReportDetails {
    domainIdsInvolved: number[];
    domainsInvolved: Domain[];
    reportsInvolvedReportInfo: ReportInfo[];
}