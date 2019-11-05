import { CurrencyFormat } from './measure-format';
import { MeasureFormatTypesEnum } from '../enums/measure-format-types.enum';
export interface MeasureFormatInfo {
    type: MeasureFormatTypesEnum;
    expression: string;
    decimalPlaces: number;
    isNumbericSeperatorEnabled: boolean;
    currencyFormat: CurrencyFormat;
}
