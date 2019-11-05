import { ChartMetaData } from './chart-data-info';
import { ColorType } from '../enums/color-type.enum';
import { CommonChartProperties, RowColumnCommonProperties } from './chart-properties';
import { MarkerTypesEnum } from '../../shared-report-level/enums/marker-types.enum';

export interface MapProperties extends CommonChartProperties {
    colorType: ColorType;
    colorAttributes: string[];
    isAutoColor: boolean;
    color: string;
    rowValues: RowColumnCommonProperties[];
    isColumnProperties: boolean;
    gradient: GradientColor;
    markerProperties: MapObjectProperty[];
    bounds: MapLatLngBounds;
    dsfColumn: Object;
}

export interface MapLatLngBounds {
    southWest: any;
    northEast: any;
}

export interface GradientColor {
    maxValueColor: string;
    minValueColor: string;
    value: Object;
    minValue: number;
    maxValue: number;
}

export interface MapObjectProperty {
    value: Object;
    isDisabled: boolean;
    isAutoColor: boolean;
    isStaticSize: boolean;
    markerType: MarkerTypesEnum;
    staticSize: number;
    sizeColumn: Object;
    markerColorType: ColorType;
    isLabelEnabled: boolean;
    color: string;
    isDataLabelEnabled: boolean;
    dataLabelColumns: Object[];
    maxSize: number;
    minSize: number;
}

export interface MarkerLabelProperties {
    marker: MarkerTypesEnum;
    color: string;
    size: number;
    labels: string[];
    tooltipLabels: string[];
}


export interface MarkerLabelsCreationInfo {
    property: MapObjectProperty;
    record: Object;
    isColumnProperties: boolean;
    chartMetaData: ChartMetaData;
    precision: number;
    scalesInfo: Object;
    isLabelOnly: boolean;
    isTooltipText: boolean;
    nonGeoAttribUniqueValuesInfo: NonGeoAttribUniqueValuesInfo;
    isColNameRequired: boolean;
}

export interface NonGeoAttribUniqueValuesInfo {
    values: Object[];
    idNames: string[];
    displayFields: string[];
    nonGeoAttributes: string[];
}

export interface RDSMapParameters {
    geoAttribs: string[];
    nonGeoAttribs: string[];
    is1toN: boolean;
    isPointMap: boolean;
}
