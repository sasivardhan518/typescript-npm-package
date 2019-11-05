import { AggFunctionType } from '../enums/agg-function-type.enum';
import { TupleComp } from './tuple-comp';
import { TupleCompVal } from './tuple-comp-val';
import { TupleCompVals } from './tuple-comp-vals';

export interface ParticipatingAttribs {
    [key: number]: TupleCompVal[];
}

export interface ExpressionDSF {
    aggType?: AggFunctionType;
    aggregateFilters?: TupleCompVals[];
    expressionString?: string;
    expressionAttribs?: TupleComp[];
    participatingAttribVals: ParticipatingAttribs;
}
