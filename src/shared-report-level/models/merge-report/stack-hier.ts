import { HierarchyInfo } from '../report-info';
import { ReportComponent } from './report-component';
export interface StackHier extends HierarchyInfo {
    order: string[];
    participatingComponents: ReportComponent[];
    isAligned: boolean;
    isHieararchy: boolean;
}
