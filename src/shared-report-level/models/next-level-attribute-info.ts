import { ReportFormatAttribute, ReportFormatHierarchy } from './report-format';
export interface NextLevelAttributeInfo {
    currentAttr: ReportFormatAttribute;
    nextAttr: ReportFormatAttribute;
    parents: string[];
    hierarchy: ReportFormatHierarchy;
}
