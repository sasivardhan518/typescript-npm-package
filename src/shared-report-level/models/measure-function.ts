import { AggregateFunctionEnum } from '../enums/aggregate-function.enum';
import { MeasureFormatTypesEnum } from '../enums/measure-format-types.enum';
import { ParameterDef } from './measure';
import { SortOrder } from '../enums/sort-order.enum';
import { WindowFunctionEnum } from '../enums/window-function.enum';
import { MeasureFunctionTypeEnum } from '../enums/measure-function- type.enum';
export interface MeasureFunction {
    name: WindowFunctionEnum | AggregateFunctionEnum;
    type: MeasureFunctionTypeEnum;
    functionType: MeasureFunctionTypeEnum;
    description: string;
    formatType: MeasureFormatTypesEnum;
}

export interface DropdownOptions {
    items: any[];
    isMultiSelect: boolean;
    parameterValue: string[] | SortOrder | number;
    name: string;
    displayLabel: string;
    bindLabel: string;
    selectedValues: any[];
    isSearchable: boolean;
    isError: boolean;
}

export interface InputOptions {
    label: string;
    parameterValue: string[] | SortOrder | number;
    inputType: string; // Type of input feild
    maxValue: number;
    minValue: number;
    stepValue: number;
    isError: boolean;
}

export interface ParameterDefControlMap {
    name: string;
    description: string;
    parameterDef: ParameterDef;
    parentParameterDef: string;
    controlType: string; // Input or dropdown
    inputType: string; // Text or number in case of input
    dropdownItems: any[];
    maxSelectionCount: number;
    minSelectionCount: number;
    isMultiSelected: boolean;
    value: any;
    tooltip: string;
    isError: boolean;
}
