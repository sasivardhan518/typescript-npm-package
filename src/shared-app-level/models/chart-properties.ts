import { BarFormatTypesEnum } from '../../shared-report-level/enums/bar-format-types.enum';
import { ChartTypesEnum } from '../enums/chart-types.enum';
import { ColorType } from '../enums/color-type.enum';
import { ComparisionType } from '../../shared-report-level/enums/comparision-type.enum';
import { FunnelType } from '../../shared-report-level/enums/funnel-type.enum';
import { IconsEnum } from '../enums/icons.enum';
import { MapProperties } from './map-properties';
import { MarkerTypesEnum } from '../../shared-report-level/enums/marker-types.enum';
import { OrientationsEnum } from '../enums/orientations.enum';
import { ScaleFactorsEnum } from '../../shared-report-level/enums/scale-factors.enum';
import { SliceDisplayValue } from '../../shared-report-level/enums/slice-display-value.enum';
import { SliceType } from '../../shared-report-level/enums/slice-type.enum';
import { SortType } from '../../shared-report-level/enums/sort-type-enum';
import { TileSymbolsEnum } from '../../shared-report-level/enums/tile-symbols.enum';

export interface BubbleChartProperties {
  xValue: Object;
  yValue: Object;
  bubbleValue: Object;
  min: number;
  max: number;
  attributeName: string;
  colorType: ColorType;
  isAutoColor: boolean;
  attribValueProperties?: RowAttributeValueProperty[];
}

export interface RowAttributeValueProperty extends RowColumnCommonProperties {
  shape: MarkerTypesEnum;
  size: number;
  isDrilldownAvailable?: boolean;
  isLinkAvailable?: boolean;
}

export interface TileChartProperties extends CommonChartProperties {
  tilesToDisplay: Object[];
  valuesToDisplay: Object[];
  columnValues: TileColumnProperties[];
  tileOptions: TileOptions;
}

export interface TileOptions {
  precision?: number;
  titleFontSize?: number | string;
  tileBackgroundColor?: string;
  tileBorderColor?: string;
  titleColor: string;
  titlePosition?: string;
  rowCount?: number;
  colCount?: number;
  titleFontStyle?: { bold: boolean, italic: boolean, underline: boolean };
}

export interface TileColumnProperties {
  value: Object;
  fontSize: string | number;
  fontColor: string;
  fontType: string;
  symbol?: string;
  invert?: boolean;
  isDisabled: boolean;
  scaleFormat?: string;
  baseColor?: string;
  symbolSize?: string | number;
  conditionColor?: string;
  conditionOperator?: ComparisionType;
  isComparedToNumber?: boolean;
  comparedValue?: number;
  comparedColumn?: Object;
  customDescription?: string;
  precision?: number | string;
  displayUnits?: ScaleFactorsEnum;
  defaultScaleInfo?: string;
}

export interface RowColumnCommonProperties {
  value: Object;
  color: string;
  colorValue?: Object;
}

export interface ChartItemProperty extends RowColumnCommonProperties {
  chartType?: ChartTypesEnum;
  axis?: string;
  lineThickness?: number | string;
  fillAlpha?: number | string;
  lineType?: string;
  markerShape?: MarkerTypesEnum;
  isDisabled?: boolean;
  isDataLabelEnabled?: boolean;
}

export interface SerialChartProperties extends CommonChartProperties {
  value: Object;
  columnProperties: ChartItemProperty[];
  format?: BarFormatTypesEnum;
  orientation?: OrientationsEnum;
  colorType?: ColorType;
  isAutoColor?: boolean;
  showExtremeLabels?: boolean;
  interBarWidth?: number | string;
  intraBarWidth?: number | string;
  color?: string;
}


export interface SliceChartProperties {
  value: Object;
  sliceCount: number;
  format?: BarFormatTypesEnum;
  pieType?: SliceType;
  funnelType?: FunnelType;
  displayValueType: SliceDisplayValue;
  isDefaultSort: boolean;
  colorType: ColorType;
  isAutoColor: boolean;
  threeDAngle: number;
  rowProperties: RowColumnCommonProperties[];
  othersText?: string;
}

export interface WordChartProperties {
  value: Object;
}

export interface TreeChartProperties {
  value: Object;
  colorType: ColorType;
  isAutoColor: boolean;
  rowProperties: RowColumnCommonProperties[];
}

export interface ValueAxisData {
  [key: string]: {
    values: ChartItemProperty[]
  };
}

export interface ChartType {
  name: ChartTypesEnum;
  displayText: string;
}

export interface SimpleObject {
  name: string | number | boolean;
  displayText: string;
  iconName?: IconsEnum | MarkerTypesEnum | TileSymbolsEnum;
}

export interface DualChartProperties {
  sourceValue: Object;
  targetValue: Object;
}

export interface GaugeChartProperties extends DualChartProperties {
  needleColor: string;
  sourceValueColor: string;
  targetValueColor: string;
  isCustomTarget: boolean;
  customTargetValue: number;
  displayValueType: SliceDisplayValue;
}

export interface TargetChartProperties extends DualChartProperties {
  isAbsoluteValue: boolean;
}

export interface BridgeChartProperties extends DualChartProperties {
  sortOrder: SortType;
  othersText: string;
  positiveColor: string;
  negativeColor: string;
}

export interface CommonChartProperties {
  isAllSelected?: boolean;
  formatKey?: string;
}

export type ChartPropTypes = BubbleChartProperties | SerialChartProperties | WordChartProperties | DualChartProperties | TileChartProperties | TreeChartProperties | BridgeChartProperties | SliceChartProperties | TargetChartProperties | MapProperties;
