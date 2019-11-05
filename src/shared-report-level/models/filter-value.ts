import { AttributeInfo } from '../../shared-app-level/models/attribute-info';
import { AttributeValue } from './attribute-value';

export interface FilterValue {
    attributeInfo: AttributeInfo;
    attributeValues: AttributeValue[];
}
