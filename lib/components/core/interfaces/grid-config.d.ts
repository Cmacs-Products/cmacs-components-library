import { CeldType } from '../enums/CeldType.enum';
import { TemplateType } from '../enums/TemplateType.enum';
import { ButtonStyle } from '../enums/ButtonStyle.enum';
export interface GridConfig {
    fields: Field[];
    fieldId: string;
    fieldRate: string;
}
export interface Field {
    celdType: CeldType;
    display: string;
    property?: string;
    width?: string;
    hidden?: boolean;
    select?: SelectConfig;
    button?: ButtonConfig;
    tag?: TagConfig;
    editTemplate?: TemplateType;
    showSort?: boolean;
}
export interface SelectConfig {
    selectData: any[];
    label: string;
    value: string;
}
export interface ButtonConfig {
    style: ButtonStyle;
    icon?: string;
}
export interface TagConfig {
    color?: string;
}
