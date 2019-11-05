export interface ChartElements {
    bannerOptions: BannerOptions;
}

export interface BannerOptions {
    id: string;
    displayName: string;
    options: Options;
}

export interface Options {
    id: string;
    displayName: string;
    type: string;
    inputOptions?: any[];
    properties: string[];
}
