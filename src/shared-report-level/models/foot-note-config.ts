import { FootNoteLocation } from '../../shared-app-level/enums/foot-note-location.enum';
export interface FootNoteConfig {
    description: string;
    footNoteLocation: FootNoteLocation;
    isWrapText: boolean;
    textColor: string;
    fontSize: string;
    bold?: string;
    italic?: string;
    underline?: string;
}
