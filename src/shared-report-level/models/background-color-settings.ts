import { ColorFillTypeEnum } from '../enums/color-fill-type.enum';

export interface BackgroundColorSettings {
    colorFillType: ColorFillTypeEnum;
    solidColor?: string;
    gradientStartColor?: string;
    gradientEndColor?: string;
    textColor?: string;
}
