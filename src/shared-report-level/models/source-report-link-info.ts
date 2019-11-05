import { AssetAccessedFromEnum } from '../../shared-app-level/enums/asset-accessed-from.enum';
import { ReportExecInput } from './report-exec-input';
import { ReportLink } from './report-link-types';
import { SimpleFilterInfo } from './simple-filter-info';

export interface SourceReportLinkInfo {
    domainId: number;
    assetAccessedFrom: AssetAccessedFromEnum;
    reportLink?: ReportLink;
    reportExecInput: ReportExecInput;
    isPublishedToMe?: boolean;
}

export interface FilterValues {
    [attributeName: string]: SimpleFilterInfo;
}
