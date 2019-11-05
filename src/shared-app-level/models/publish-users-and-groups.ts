import { PublishGroup } from './publish-group';
import { PublishUser } from './publish-user';

export interface DomainUsersAndGroups {
    [domainId: string]: PublishUsersAndGroups;
}

export interface PublishUsersAndGroups {
    appUsers: PublishUser[];
    appGroups: PublishGroup[];
}
