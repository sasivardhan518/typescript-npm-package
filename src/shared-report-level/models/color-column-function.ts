import { ColorFillTypeEnum } from '../enums/color-fill-type.enum';
import { ColumnFunctionDimensionInfo } from './column-function-dimension-info';
import { ColumnFunctionInfo } from './column-function-info';


export interface ColorColumnFunction {
    info: { [key: string]: ColorColumnFunctionInfo };
}

export interface ColorColumnFunctionInfo extends ColumnFunctionInfo {
    textColor: string;
    colorFillType: ColorFillTypeEnum;
    solidColor?: string;
    gradientStartColor?: string;
    gradientEndColor?: string;
}
