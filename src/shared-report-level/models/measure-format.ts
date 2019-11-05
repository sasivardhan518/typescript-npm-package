import { MeasureFormatTypesEnum } from '../enums/measure-format-types.enum';
export interface MeasureFormat {
    name: MeasureFormatTypesEnum;
    displayText: string;
}

export interface NegativeNumberFormat {
    number: number;
    displayText: string;
    defaultExpression: string;
    crntExpression: string;
}

export interface CurrencyFormat {
    symbol: string;
    displayText: string;
}

export interface MeasureDateFormat {
    displayText: string;
    dateExpr: string;
}
