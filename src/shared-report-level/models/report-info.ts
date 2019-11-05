import { ArtifactInfo } from './artifact-info';
import { AssetTypeEnum } from '../../shared-app-level/enums/asset-type.enum';
import { AttribOrHierarchy } from './attrib-or-hierarchy';
import { DsFunctions } from './ds-functions';
import { FilterInfo } from './filter-info';
import { KpiInfo } from './kpi-info';
import { LabelInfo } from '../../shared-app-level/models/label-info';
import { LinkedArtifacts } from './linked-artifacts';
import { MergeSpecificInfo } from './merge-report/merge-specific-info';
import { ReportFormatDimensionsIntEnum } from '../enums/report-format-dimensions.enum';
import { ReportUiInfo } from './report-ui-info';
import { ResultData } from './data-holder';
import { SimpleFilterInfo } from './simple-filter-info';
import { SummarizationSettings } from './summarize/summarization-settings';
export interface ReportInfo {
    dbId: number;
    name: string;
    description?: string;
    domainId: number;
    rows?: AttribOrHierarchy[];
    pages?: AttribOrHierarchy[];
    columns?: AttribOrHierarchy[];
    measuresIndex?: MeasureDimensionInfo;
    hierarchies: HierarchyInfo[];
    filters: FilterInfo[];
    quickFilters: FilterInfo[];
    quickFilterValues?: SimpleFilterInfo[];
    quickFilterOptions?: AttributeLabelInfo;
    linkedArtifacts?: LinkedArtifacts;
    kpIs: KpiInfo[];
    attribIdsUsed: SimpleFilterInfo[];
    usedLabelValues?: AttributeLabelInfo;
    uiInfos: ReportUiInfo;
    dsFunctions?: DsFunctions;
    useOwnerContextFilters: boolean;
    originalReportId?: number;
    orignalReportInfo: ReportInfo;
    mergeInfo?: MergeSpecificInfo;
    reportType: AssetTypeEnum;
    originalRoutes?: { [ket: number]: AssetTypeEnum };
    invalidReportInfo?: ReportInfo;
    labelDetails?: { [key: string]: LabelInfo };
    lockInfo?: { [key: string]: boolean };
    lastDSFUpdateTime?: Date;
    isDefaultState?: boolean;
    publishIgnoreFilters: string[];
    artifactsInfo?: ArtifactInfo[];
    summarizeOnExec: boolean;
    summarySettings?: SummarizationSettings;
}

export interface AttributeLabelInfo {
    [description: string]: AttributeResultInfo;
}

export interface HierarchyInfo {
    key: string;
    hierarchies: string[];
    hierarchyType: HierarchyType;
    hierarchyState: HierarchyState;
    totalAttribName: string;
}

export enum HierarchyType {
    Replacement = 1,
    Nested = 2
}

export interface HierarchyState {
    hierarchyKey: string;
    replacementPath: SimpleFilterInfo[];
    expandedLevels: number;
}

export interface HierarchyIndex {
    hierarchyName: string;
    previousLevel: number;
}

export interface AttributeResultInfo {
    requestedAttrib: string;
    resultData: ResultData;
    numOfRows: number;
    domainId: number;
    isRetrievedFromCache: boolean;
    labelDetails: LabelInfo[];
}

export interface MeasureDimensionInfo {
    rcpType: ReportFormatDimensionsIntEnum;
    index: number;
}


