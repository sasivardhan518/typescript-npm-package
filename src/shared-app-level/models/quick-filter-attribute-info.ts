import { AttributeValue } from '../../shared-report-level/models/attribute-value';
import { QuickFilterConfiguration } from './quick-filter-configuration';
export interface QuickFilterValuesInfo {
    attribGId: string;
    attributeName: string;
    attributeValues: AttributeValue[];
    configuration: QuickFilterConfiguration;
}
