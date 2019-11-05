export interface NgSelectCustomType {
    items?: any[];
    selectedItems?: any[] | any;
    bindLabel?: string;
    bindValue?: string;
    clearable?: boolean;
    placeholder?: string;
    appendTo?: string;
    loading?: boolean;
    closeOnSelect?: boolean;
    hideSelected?: boolean;
    maxSelectedItems?: number;
    virtualScroll?: boolean;
    clearOnBackspace?: boolean;
    multiple?: boolean;
    searchable?: boolean;
    isOpen?: boolean;
    disabled?: boolean;
    isDisplayAll?: boolean;
    isEmptyArrayOnSelectAll?: boolean;
}

