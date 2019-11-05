import { DataType } from '../enums/data-type.enum';
import { ExpressionDSF } from './expression-dsf';
import { MeasureFormatInfo } from './measure-format-info';
import { NewTupleVal } from './new-tuple-val';
import { ResultData } from './data-holder';
import { TupleComp } from './tuple-comp';
import { TupleCompVals } from './tuple-comp-vals';

export interface ExpressionAttribMap {
    [key: string]: ExpressionDSF;
}
export interface NewAttribMsrDSFunctions {
    newAttribMsrVals?: NewTupleVal;
    expressionAttribs?: TupleComp[];
    myExpression?: string;
    aggregateAttribs?: TupleComp[];
    dataType?: DataType;
    precision?: number;
    format?: MeasureFormatInfo;
    outputFilter?: TupleCompVals[];
    expressionAttribMap?: ExpressionAttribMap;
    uiInfos: NewAttributeUiInfo;
}

export interface NewAttributeUiInfo {
    timeSortValue: object;
    order: number;
}

