import { AttributeInfo } from '../../shared-app-level/models/attribute-info';
import { AttributeValue } from './attribute-value';

export interface AttributeFilterInfo {
    attributeInfo: AttributeInfo;
    attributeValues: AttributeValue[];
    selectedValues?: AttributeValue[];
}
