import { ResultData } from './data-holder';

export interface SimpleFilterInfo {
    domainId: number;
    attribGId: string | number;
    attribValues: ResultData;
    key?: string;
}
