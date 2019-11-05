import { GroupInfo } from './group-info';

export interface GroupCrudActionInfo {
    groupInfo: GroupInfo;
    isAdd: boolean;
    isDelete: boolean;
    isEdit: boolean;
}
