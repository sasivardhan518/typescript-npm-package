import { AttributeFilterInfo } from './attribute-filter-info';
import { CombiningConditionType } from './filter-info';
import { ComparisionType } from '../enums/comparision-type.enum';
import { TupleCompVal } from './tuple-comp-val';

export interface LogicalExpression {
    selected?: boolean;
    attribVals: TupleCompVal[];
    comparisonType: ComparisionType;
    value: number;
    comparedToAttribVals: TupleCompVal[];
    expressions: LogicalExpression[];
    combiningType: CombiningConditionType;
    isComparedToExpression?: boolean;
    firstExpressionFilters?: AttributeFilterInfo[];
    secondExpressionFilters?: AttributeFilterInfo[];
}
