import { ChartPropTypes } from './chart-properties';
import { ChartTypesEnum } from '../enums/chart-types.enum';
import { GridLayoutOptions } from '../../shared-report-level/models/grid-layout-options';
import { ScalesInfo } from './rds-extra-params';
import { TargetValue } from '../../shared-report-level/models/report-ui-info';

export interface ChartMetaData {
  rowName: string;
  rowDescription: string;
  colName: string;
  colDescription: string;
  colVals: Object[];
  rowVals: Object[];
  isGridLayout: boolean;
  gridLayoutOptions?: GridLayoutOptions;
  isColumnDrillable: boolean;
  isRowDrillable: boolean;
  isGridRowDrillable: boolean;
  isScrollEnabled: boolean;
  axisMinMaxValues: ScalesInfo;
  chartProperties: ChartPropTypes;
  uniqueId?: string;
  hideYAxis?: boolean;
  hideXAxis?: boolean;
  hideChart?: boolean;
  chartType?: ChartTypesEnum;
  legend?: boolean;
  legendDiv?: HTMLElement;
  width?: number;
  height?: number;
  multiAxisScaleInfo?: { [key: string]: { scale: string; scaleFactor: number } };
  scaleInfo?: { scale: string; scaleFactor: number };
  targetValues: TargetValue[];
  totalNestedLevels?: number;
  expandedLevels?: Object;
  isNested?: boolean;
  hideYAxisTitle?: boolean;
  hideChartTitle?: boolean;
  tileChartCalculatedValues?: any;
  crntMsrOnPage: string;
  isMeasureOnRows: boolean;
  isMeasureOnGrid: boolean;
  bubbleAttributeIds?: string[];
  bubbleAttributeDescs?: string[];
  nestedValue?: Object;
  precisionInfo?: { [key: string]: number };
  pieRadius?: number;
  isLabelWrappingRequiredForPieChart?: boolean;

}

export interface ChartDataInfo {
  data: Object[];
  metaData: ChartMetaData;
}
