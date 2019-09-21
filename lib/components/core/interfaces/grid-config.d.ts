import { CeldType } from '../enums/CeldType.enum';
import { TemplateType } from '../enums/TemplateType.enum';
import { ButtonStyle } from '../enums/ButtonStyle.enum';
import { TemplateRef } from "@angular/core";
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
    sortOrder?: string;
    editTemplate?: TemplateType;
    showSort?: boolean;
    dateFormat?: string;
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
    cmacsGridType?: string;
    cmacsStatusType?: boolean;
    cmacsPriorityType?: string;
}
export declare type CmacsGridType = 'active' | 'created' | 'pre-bid' | 'archive' | 'inactive' | 'warranty';
export declare type CmacsPriorityType = 'high' | 'low' | 'medium';
export declare type SortOrder = 'ascend' | 'descend' | null;
export interface CmacsGridTemplateRef {
    ref: TemplateRef<any>;
    context: {};
}
