import { ColorShapeType } from '../enums/color-shape-type.enum';

export interface ColorColCellStyleInfo {
    shapeType?: ColorShapeType;
    color?: string;
    gradientStartColor?: string;
    gradientEndColor?: string;
    textColor?: string;
}
