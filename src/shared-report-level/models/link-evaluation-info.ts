import { AttributeDataItemsMap } from './attribute-data-item';
import { AttributeInfo } from '../../shared-app-level/models/attribute-info';
import { AttributeLinkMap, ReportLinksInfo } from './report-link-types';
import { ReportFilterValue } from './report-format';
export interface LinkEvaluationInfo {
    isMeasure?: boolean;
    colFields?: ReportFilterValue[];
    colAttrNames?: string[];
    idDataItem?: string;
    attributeLinkMap?: AttributeLinkMap;
    currentAttrs?: string[];
    currentAttrInfo?: AttributeInfo;
    pageFilters?: Object[];
    isAttribLink?: boolean;
    data: Object;
    currentReportLinks: ReportLinksInfo;
    isChart?: boolean;
    allAttribsDataItemMap: AttributeDataItemsMap;
    rowAttribName?: string;
    currentAttributeName?: string;
    isGridColLink?: boolean;
    isGridRowLink?: boolean;
    isNested?: boolean;
}
