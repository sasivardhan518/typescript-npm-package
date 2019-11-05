import { AggregateFunctionEnum } from '../enums/aggregate-function.enum';
import { MeasureDataTypeEnum } from '../enums/measure-data-type.enum';
import { MeasureFormatInfo } from './measure-format-info';
import { OutputConditionLiteral } from './output-condition-literal';
import { SimpleFilterInfo } from './simple-filter-info';
import { SortOnEnum } from '../enums/sort-on.enum';
import { SortOrder } from '../enums/sort-order.enum';
import { WindowFrameEnum } from '../enums/window-frame.enum';
import { WindowFunctionEnum } from '../enums/window-function.enum';

export interface KpiInfo {
    key: string;
    domainId: number;
    name: string;
    measureCreatorId: string;
    parameters: KpiParameterInfo;
    dataType?: MeasureDataTypeEnum;
    excludeFilters: string[];
    excludeLabels: string[];
    filters: SimpleFilterInfo[];
    outputCondition: OutputConditionLiteral;
    hidden: boolean;
    format?: MeasureFormatInfo;
    windowFunction?: WindowFunctionEnum;
    windowAttributes?: string[]; // Mandatory when Windowing function is provided.
    windowSort?: SortOrder; // If WindowFunction is provided, then needed for all except for {Windowing} type.
    sortOn?: SortOnEnum; //  Indicates whether the Sort applied should be applied on "Partition by Attributes" or "Measure". Mandatory for window functions.
    windowStart?: WindowSize; //  It provides a way to specify the span of the Window. This is applicable for Windowing functions except for Ranking functions, Lead/Lag functions & Running total functins.
    windowEnd?: WindowSize; //  It provides a way to specify the span of the Window. This is applicable for Windowing functions except for Ranking functions, Lead/Lag functions & Running total functins.
    offset?: number; // Gets or sets the offset for the window function. Mandatory when WindowFunction is "Lead" or "Lag".
    groupCount?: number; // Gets or sets the group count for the window function. Mandatory when WindowFunction is "Ntile"
    aggregateFunction?: AggregateFunctionEnum;
    aggregateAttributes?: string[]; // Mandatory when aggregate function is provided.
    aggregateSort?: SortOrder; // Mandatory when AggregateFunction is "Percentile" or "Contribution".
    value?: number; // Mandatory when AggregateFunction is "Percentile" or "Contribution". The value should be between 0 and 1.
}

export interface KpiParameterInfo {
    MeasureName?: string;
    Duration?: string;
    RValue?: string;
    [key: string]: any;
}

export interface WindowSize {
    windowFrame: WindowFrameEnum;
    rowCount: number;
}
