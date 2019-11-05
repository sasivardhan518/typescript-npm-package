import { AxisTypesEnum } from '../enums/axis-types.enum';
import { ChartPropTypes } from '../../shared-app-level/models/chart-properties';
import { ChartTypesEnum } from '../../shared-app-level/enums/chart-types.enum';
import { ColorColumnFunction } from './color-column-function';
import { ColumnFilterInfo } from './column-filter-info';
import { ColumnFunctionDimensionInfo } from './column-function-dimension-info';
import { DisplayFiltersInfo } from './display-filters';
import { FootNoteConfig } from './foot-note-config';
import { GridLayoutOptions } from './grid-layout-options';
import { MapLatLngBounds } from '../../shared-app-level/models/map-properties';
import { MeasureFormatInfo } from './measure-format-info';
import { PeriodTypesEnum } from '../enums/period-types.enum';
import { QuickFilterConfigurationMap } from '../../shared-app-level/models/quick-filter-configuration-map';
import { ReportColumnWidthMap } from './report-column-width-map';
import { ReportFilterValue, ReportFormat } from './report-format';
import { ReportGridSizeInfo } from './report-grid-size-info';
import { ReportLinksInfo } from './report-link-types';
import { SortInfo } from './sort-info';
import { TopXInfo } from './top-x-info';
import { VisualTypesEnum } from '../enums/visual-types.enum';

export interface ReportUiInfo {
  visualsInfo: VisualsInfo;
  quickFilterConfiguration?: QuickFilterConfigurationMap;
  lockActions?: string[];
  displayFilters: DisplayFiltersInfo;
  reportLinksInfo: ReportLinksInfo;
  expandedLevels?: object;
  attributeAliasNames: object;
  measureFormatInfo: ReportMeasureFormatInfo;
  displayOptions: DisplayOptions;
  mapDrillBounds?: MapLatLngBounds;
}

export interface VisualsInfo {
  visuals: ReportVisual[];
  currentVisualIndex: number;
  currentVisualName: string;
}

export interface ReportVisual {
  displayText: string;
  name: string;
  visualType: VisualTypesEnum;
  isCriteriaChanged: boolean;
  format?: ReportFormat;
  chartType?: ChartTypesEnum;
  visualProperties?: VisualProperties;
  isSummaryEnabled: boolean;
  footNoteConfig?: FootNoteConfig;
  isFormatRow?: boolean;
  columnFunctionsInfo?: ColumnFunctionsInfo;
  isDisabled?: boolean;
}

export interface VisualProperties {
  visualFilters: FilterValueObject;
  selectedPeriod: PeriodTypesEnum;
  chartProperties?: ChartPropTypes;
  chartElements?: any;
  isScrollApplied?: boolean;
  targetValues?: TargetValue[];
  gridLayoutOptions?: GridLayoutOptions;
}

export interface FilterValueObject {
  [key: string]: ReportFilterValue[];
}

export interface ColumnFunctionsInfo extends ColumnFunctionDimensionInfo {
  functionInfo: FunctionInfo;
}

export interface FunctionInfo {
  colorColumnFunction?: ColorColumnFunction;
  columnFilterInfo?: ColumnFilterInfo;
  topXInfo?: TopXInfo;
  sortInfo?: SortInfo;
  reportColumnWidthMap?: ReportColumnWidthMap;
  reportGridSizeInfo?: ReportGridSizeInfo;
}

export interface TargetValue {
  axis: AxisTypesEnum;
  value: number | object | string;
  color: string;
  lineType: string;
  lineThickness: number | string;
  label?: string;
  hierarchyKeys?: string[];
  attributes?: string[];
}

export interface UiTargetValue extends TargetValue {
  description?: string;
  isDisabled?: boolean;
}

export interface ReportMeasureFormatInfo {
  [measureKey: string]: MeasureFormatInfo;
}

export interface DisplayOptions {
  isDisplayFilterLine: boolean;
  showOrHideFilterVariable: boolean;
  isDisplaySourceLine: boolean;
  isDisplayUserFiltersAttrNames: boolean;
}

