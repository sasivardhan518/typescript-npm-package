export interface DropupListItem {
  name: string;
  displayText: string;
  children?: DropupListItem[];
  iconName?: string;
}
