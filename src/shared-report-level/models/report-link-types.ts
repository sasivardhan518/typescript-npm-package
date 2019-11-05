import { AttributeValue } from './attribute-value';
import { KpiInfo } from './kpi-info';
import { ResultData } from './data-holder';
import { TargetAssetInfo } from './target-asset-info';
import { UrlAttributeInfo } from './url-attribute-info';

export interface ReportLinksInfo {
    [linkName: string]: ReportLink;
}

export interface ReportLinkBase {
    name: string;
    linkOn?: ReportLinkOn;
    linkType?: LinkType;
    linkInfo?: (string | TargetAssetInfo | UrlAttributeInfo);
    isUserAndReportFilterRequired?: boolean;
}

export interface ReportLinkForUi extends ReportLinkBase {
    filterSpecifications?: ReportLinkFilterSpecification[];
}

export interface ReportLink extends ReportLinkBase {
    linkSpecification?: ReportLinkSpecification;
}

export interface ReportLinkSpecification {
    [attributeName: string]: ReportLinkFilterSpecification;
}

export interface ReportLinkFilterSpecification {
    attributeFilterInfo: ReportLinkAttributeFilterInfo;
    passAsFilterValue: boolean;
    isMeasure: boolean;
    measures: MeasureInfo[];
    isSelected: boolean;
}

export interface ReportLinkAttributeFilterInfo {
    attribName: string;
    isGroup: boolean;
    groupName?: string;
    groupAttributeName?: string;
    attribValues: ResultData;
    descriptiveAttributeValues?: AttributeValue[];
    groupId: string;
}

export interface ReportLinkToInfo {
    reportStoryboardInfo: TargetAssetInfo;
    attributeInfo: UrlAttributeInfo;
    staticUrlInfo: string;
}

export enum ReportLinkOn {
    Attribute = 'Attribute',
    MeasureCells = 'Measure Cells'
}

export enum LinkType {
    ReportOrStoryboard = 'ReportOrStoryboard',
    Attribute = 'Attribute',
    StaticURL = 'Static URL'
}

export interface AttributeLinkMap {
    [attributeName: string]: FilterValueLinkMap;
}

export interface FilterValueLinkMap {
    [attributeValue: string]: string[];
}

export interface MeasureInfo {
    measureName: string;
    measureDescription: string;
    isMeasureSelected: boolean;
}

export enum ReportLinkAllAttrValues {
    CommonLinks = 'CommonLinks'
}
