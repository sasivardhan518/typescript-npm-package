import { DataHolder } from './data-holder';
import { ListInfo } from '../../shared-app-level/models/list-info';
export interface AnalyticalStubResponse {
    definition: ListInfo;
    resultData: DataHolder;
}
