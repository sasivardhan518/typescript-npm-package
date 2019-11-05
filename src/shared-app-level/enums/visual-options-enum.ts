import * as _ from 'lodash';
import { ChartElementsPropertiesInputValues } from '../models/chart-elements-property';
import { ChartPropertiesEnum } from './chart-properties.enum';
import { HeaderTextPositionEnum } from '../../storyboard/shared/enums/header-text-position.enum';
import { ScaleFactorsEnum } from '../../report/shared/enums/scale-factors.enum';
import { SimpleObject } from '../models/chart-properties';

export enum VisualOptionsEnum {
  FontSizes = 'FontSizes',
  Scales = 'Scales',
  TitlePositions = 'TitlePositions',
  YaxisTitlePositions = 'YaxisTitlePositions',
  AxisPositions = 'AxisPositions',
  AxisLabelPositions = 'AxisLabelPositions',
  DataLabelPositions = 'DataLabelPositions',
  HorizontalDataLabelPositions = 'HorizontalDataLabelPositions',
  BulletTypes = 'BulletTypes',
  TextTypes = 'TextTypes',
  LegendPositions = 'LegendPositions',
  ColorInputTypes = 'ColorInputTypes',
  FontStyles = 'FontStyles',
  HeaderPosition = 'HeaderPosition',
  LegendVisibilityOptions = 'LegendVisibilityOptions',
  ToggleOptions = 'ToggleOptions',
  AxisLineToggleOptions = 'AxisLineToggleOptions',
  AutoToggleOptions = 'AutoToggleOptions',
  BorderSize = 'BorderSize',
  ReverseOrder = 'ReverseOrder',
  IntersectedValuesVisibilityOptions = 'IntersectedValuesVisibilityOptions'
}

export enum IntersectedValuesVisibilityEnum {
  NoOverlap = 'NoOverlap',
  HideAll = 'HideAll',
  ShowAll = 'ShowAll'
}

class VisualOptions {
  public getFontSizes() {
    return [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  }

  public getBorderSizes() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  public getScales() {
    return [
      { name: ScaleFactorsEnum.Trillion, displayText: 'T' },
      { name: ScaleFactorsEnum.Billion, displayText: 'B' },
      { name: ScaleFactorsEnum.Million, displayText: 'M' },
      { name: ScaleFactorsEnum.Thousand, displayText: 'K' },
      { name: ScaleFactorsEnum.None, displayText: 'none' }
    ];
  }

  public getColorInputTypes() {
    return [
      { name: ChartPropertiesEnum.ColorPicker, displayText: 'color', children: [{ name: ChartPropertiesEnum.ColorPicker, displayText: '' }] },
      // { name: ChartPropertiesEnum.ColorPalette, displayText: 'Color Palette', children: [] }, //to-do
      {
        name: ChartPropertiesEnum.Gradient, displayText: 'gradient',
        children: [
          { name: ChartPropertiesEnum.GradientRotation, displayText: 'rotation' },
          { name: ChartPropertiesEnum.GradientColorPicker, displayText: 'color' },
          { name: ChartPropertiesEnum.GradientOpacity, displayText: 'opacity' }
        ]
      }
    ];
  }

  public getTextTypes() {
    return [
      { name: 'normal', displayText: 'normal' },
      { name: 'bold', displayText: 'bold' }
    ];
  }

  public getFontStyles() {
    return [
      { name: 'normal', displayText: 'normal' },
      { name: 'italic', displayText: 'italic' }
    ];
  }

  public getTitlePositions() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: 'left', displayText: 'left' },
      { name: 'right', displayText: 'right' },
      { name: 'center', displayText: 'center' }];
  }

  public getHeaderPositions() {
    return [HeaderTextPositionEnum.TopLeft, HeaderTextPositionEnum.TopMiddle, HeaderTextPositionEnum.TopRight, HeaderTextPositionEnum.MiddleRight, HeaderTextPositionEnum.MiddleLeft, HeaderTextPositionEnum.Center, HeaderTextPositionEnum.BottomRight, HeaderTextPositionEnum.BottomLeft, HeaderTextPositionEnum.BottomMiddle];
  }

  public getYaxisTitlePositions() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: 'top', displayText: 'top' },
      { name: 'middle', displayText: 'middle' },
      { name: 'bottom', displayText: 'bottom' }];
  }


  public getLegendPositions() {
    return [
      { name: 'left', displayText: 'left' },
      { name: 'right', displayText: 'right' },
      { name: 'top', displayText: 'top' },
      { name: 'bottom', displayText: 'bottom' }];
  }

  public getAxisLabelsPositions() {
    return [
      { name: true, displayText: 'inside' },
      { name: false, displayText: 'outside' }
    ];
  }
  public getAxisPositions() {
    return [
      { name: false, displayText: 'default' },
      { name: true, displayText: 'opposite' }
    ];
  }

  public getDefaultPosition(): ChartElementsPropertiesInputValues {
    return { name: 'default', displayText: 'default' };
  }

  public getDataLabelsPositions() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: '0', displayText: 'top' },
      { name: '0.5', displayText: 'middle' },
      // { name: 'left', displayText: 'Left' },
      // { name: 'right', displayText: 'Right' },
      // { name: '0.1', displayText: 'Inside' },
      { name: '1', displayText: 'bottom' },
    ];
  }

  public getDataLabelsHorizontalPositions() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: '1', displayText: 'left' },
      { name: '0.5', displayText: 'center' },
      // { name: '0.1', displayText: 'Inside' },
      { name: '0', displayText: 'right' },
      // { name: 'left', displayText: 'Left' },
      // { name: 'right', displayText: 'Right' },
    ];
  }

  public getLegendVisibiltyTypes() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: true, displayText: 'hide' },
      { name: false, displayText: 'show' }
    ];
  }

  public getVisibiltyTypes() {
    return [
      { name: true, displayText: 'hide' },
      { name: false, displayText: 'show' }
    ];
  }

  public getAutoVisibiltyTypes() {
    return [
      // { name: 'Auto', displayText: 'auto' },
      { name: true, displayText: 'hide' },
      { name: false, displayText: 'show' }
    ];
  }

  public getReverseOrderOptions() {
    return [
      { name: true, displayText: 'true' },
      { name: false, displayText: 'false' }
    ];
  }

  public getAxisLineToggleOptions() {
    return [
      { name: 0, displayText: 'hide' },
      { name: 1, displayText: 'show' }
    ];
  }

  public getIntersectedValuesVisibiltyOptions() {
    return [
      { name: IntersectedValuesVisibilityEnum.HideAll, displayText: 'hideAll' },
      { name: IntersectedValuesVisibilityEnum.ShowAll, displayText: 'showAll' },
      { name: IntersectedValuesVisibilityEnum.NoOverlap, displayText: 'noOverlap' }
    ];
  }
}

export class VisualOptionsManager {
  static readonly optionValues: VisualOptions = new VisualOptions();

  static getEnumList(): string[] {
    const enumArray: string[] = [];
    for (const enumName in VisualOptionsEnum) {
      if (isNaN(Number(enumName))) {
        enumArray.push(enumName);
      }
    }
    return enumArray;
  }

  /**
   * This method safeguards against the case sensitivty of enumName
   * @param {string} enumName
   * @returns {string} returns the actual enum name ignoring casing
   */
  static getProperEnumNameIgnoringCase(visualOptionsEnum: string): string {
    let properEnumName = '';
    for (const actualEnumName in VisualOptionsEnum) {
      if (isNaN(Number(actualEnumName)) && actualEnumName.toLowerCase() === visualOptionsEnum.toLowerCase()) {
        properEnumName = actualEnumName;
        break;
      }
    }
    return properEnumName;
  }

  /**
   * This method returns the visual options relevant to the visual option enum name passed.
   * @param {string} visualOptionsEnum - enum name of visual option
   * @returns {string} returns the option values array
   */
  static getOptionValues(visualOptionsEnum: string, isDefaultValueRequired: boolean = false): ChartElementsPropertiesInputValues[] | (number | string)[] {
    const enumName = VisualOptionsManager.getProperEnumNameIgnoringCase(visualOptionsEnum);
    const optionValues = VisualOptionsManager.optionValues;
    let values: ChartElementsPropertiesInputValues[] | (number | string)[] = [];
    switch (VisualOptionsEnum[enumName]) {
      case VisualOptionsEnum.FontSizes:
        values = optionValues.getFontSizes();
        break;
      case VisualOptionsEnum.BorderSize:
        values = optionValues.getBorderSizes();
        break;
      case VisualOptionsEnum.Scales:
        values = optionValues.getScales();
        break;
      case VisualOptionsEnum.AxisLabelPositions:
        values = optionValues.getAxisLabelsPositions();
        break;
      case VisualOptionsEnum.AxisPositions:
        values = optionValues.getAxisPositions();
        break;
      case VisualOptionsEnum.ColorInputTypes:
        values = optionValues.getColorInputTypes();
        break;
      case VisualOptionsEnum.TextTypes:
        values = optionValues.getTextTypes();
        break;
      case VisualOptionsEnum.DataLabelPositions:
        values = optionValues.getDataLabelsPositions();
        break;
      case VisualOptionsEnum.HorizontalDataLabelPositions:
        values = optionValues.getDataLabelsHorizontalPositions();
        break;
      case VisualOptionsEnum.TitlePositions:
        values = optionValues.getTitlePositions();
        break;
      case VisualOptionsEnum.YaxisTitlePositions:
        values = optionValues.getYaxisTitlePositions();
        break;
      case VisualOptionsEnum.LegendPositions:
        values = optionValues.getLegendPositions();
        break;
      case VisualOptionsEnum.LegendVisibilityOptions:
        values = optionValues.getLegendVisibiltyTypes();
        break;
      case VisualOptionsEnum.HeaderPosition:
        values = optionValues.getHeaderPositions();
        break;
      case VisualOptionsEnum.ToggleOptions:
        values = optionValues.getVisibiltyTypes();
        break;
      case VisualOptionsEnum.AutoToggleOptions:
        values = optionValues.getAutoVisibiltyTypes();
        break;
      case VisualOptionsEnum.ReverseOrder:
        values = optionValues.getReverseOrderOptions();
        break;
      case VisualOptionsEnum.AxisLineToggleOptions:
        values = optionValues.getAxisLineToggleOptions();
        break;
      case VisualOptionsEnum.IntersectedValuesVisibilityOptions:
        values = optionValues.getIntersectedValuesVisibiltyOptions();
        break;

    }
    if (isDefaultValueRequired) {
      (<ChartElementsPropertiesInputValues[]>values).push(VisualOptionsManager.optionValues.getDefaultPosition());
    }
    return values;
  }
}
