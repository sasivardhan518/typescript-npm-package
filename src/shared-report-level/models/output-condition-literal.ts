import { ComparisionType } from '../enums/comparision-type.enum';

export interface OutputConditionLiteral {
    comparison: ComparisionType;
    literal: number;
}
