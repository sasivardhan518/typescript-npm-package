import { Asset } from './asset';
import { PublishGroup } from './publish-group';
import { PublishUser } from './publish-user';


export interface UIPublishInfo {
    assetIds: number[];
    published: {
        'users': PublishUser[],
        'groups': PublishGroup[]
    };
    unpublished: {
        'users': PublishUser[],
        'groups': PublishGroup[]
    };
    isPublish: boolean;
    unpublishToExistingUsersAndGroups?: boolean;
}

export interface PublishInfo {
    assetID: number;
    users: string[];
    groups: number[];
}

export interface UnPublishInfo {
    assetID: number;
    users: string[];
    groups: number[];
}

export interface PublishAssetInfo {
    asset: Asset;
    isPublished: boolean;
}
