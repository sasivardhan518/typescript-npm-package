import { DisplayLocationEnum } from '../enums/displayLocation.enum';
import { QuickFilterDisplayTypeEnum } from '../enums/quick-filter-display-type.enum';

export interface QuickFilterConfiguration {
    listDisplayType: QuickFilterDisplayTypeEnum;
    isSingleSelect: boolean;
    generateReportOnSelection: boolean;
    attributeDisplayLocation: DisplayLocationEnum;
    forceSelection: boolean;
    displayFilterValue: boolean;
    displayInFilterPanel: boolean;
    isStoryboardFilter: boolean;
    isFiltersSelected: boolean;
}

