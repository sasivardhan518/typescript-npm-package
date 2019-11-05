export interface AttributeDataItemInfo {
    name: string;
    description: string;
    dataType: string; // Todo: Change this to enum with all available data types.
    format: string;
}

export interface AttributeDataItems {
    idDataItems: AttributeDataItemInfo[];
    displayDataItems: AttributeDataItemInfo[];
    sortDataItems: AttributeDataItemInfo[];
    colorDataItems?: AttributeDataItemInfo[];
}

export interface AttributeDataItemsMap {
    [key: string]: AttributeDataItems;
}
