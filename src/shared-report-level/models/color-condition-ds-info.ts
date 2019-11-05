import { ColorShapeType } from '../enums/color-shape-type.enum';
import { DsFunctionInfo } from './dsFunction-info';
import { GradientProperties } from './gradient-properties';
import { LogicalExpression } from './logical-expression';
import { TupleComp } from './tuple-comp';
import { TupleCompVals } from './tuple-comp-vals';
import { ConditionType } from '../enums/condition-type.enum';

export interface ColorConditionDsInfo extends DsFunctionInfo {
    expressionAttribs: TupleComp[];
    logicalExpression: LogicalExpression;
    applyFilter: TupleCompVals[];
    gradient: GradientProperties;
    uiInfos: ColorConditionUiInfo;
}

export interface ColorConditionUiInfo {
    isTextColorSelected: boolean;
    isGradientColorSelected: boolean;
    isCellColorSelected: boolean;
    isMarkerColorSelected: boolean;
    gradientStartColor: string;
    gradientEndColor: string;
    selectedColor: string;
    textColor: string;
    isOuterGroupEnabled: boolean;
    markerShape: ColorShapeType;
    isHideCells: boolean;
    conditionType: ConditionType;
}
