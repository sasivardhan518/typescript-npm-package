import { ReportInfo } from '../../shared-report-level/models/report-info';
import { StandardReportFilterInfo } from './standard-report-filter-info';
import { StandardReportQueryType } from '../enums/standard-report-query-type.enum';

export interface StandardReportInfo extends ReportInfo {
    query: string;
    queryType: StandardReportQueryType;
    srFilters: StandardReportFilterInfo[];
    outputParam?: string;
}
