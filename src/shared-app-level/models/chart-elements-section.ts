import { ChartGroupsEnum } from '../enums/chart-groups.enum';
import { ChartSectionsEnum } from '../enums/chart-sections.enum';
import { ChartSectionsTypesEnum } from '../enums/chart-sections-types.enum';
import { WidgetGroupsEnum } from '../../storyboard/shared/enums/widget-groups.enum';
import { WidgetSectionsEnum } from '../../storyboard/shared/enums/widget-sections.enum';

export interface ChartElementsSection {
    name: ChartSectionsEnum | WidgetSectionsEnum;
    displayText: string;
    type: ChartSectionsTypesEnum;
    children?: { [name: string]: ChartElementsSection };
    groups?: (ChartGroupsEnum | WidgetGroupsEnum)[];
}
