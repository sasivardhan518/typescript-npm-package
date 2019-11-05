import { SortOnEnum } from '../enums/sort-on.enum';
import { SortOrder } from '../enums/sort-order.enum';
import { WindowFrameEnum } from '../enums/window-frame.enum';
export interface FunctionTypeToParamsMap {
    [functionName: string]: FunctionParameters;
}

export interface FunctionParameters {
    [parameterName: string]: string[] | SortOrder | number | SortOnEnum | WindowFrameEnum;
}
