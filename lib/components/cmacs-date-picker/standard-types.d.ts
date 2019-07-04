import { TemplateRef } from '@angular/core';
import { CandyDate } from './lib/candy-date/candy-date';
export interface PickerResultSingle {
    date: CandyDate;
    dateString: string;
}
export interface PickerResultRange {
    date: CandyDate[];
    dateString: string[];
}
export declare type PickerResult = PickerResultSingle | PickerResultRange;
export declare type DisabledDateFn = (d: Date) => boolean;
export declare type DisabledTimePartial = 'start' | 'end';
export interface DisabledTimeConfig {
    disabledHours(): number[];
    disabledMinutes(hour: number): number[];
    disabledSeconds(hour: number, minute: number): number[];
}
export declare type DisabledTimeFn = (current: Date | Date[], partial?: DisabledTimePartial) => DisabledTimeConfig;
export interface SupportTimeOptions {
    format?: string;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    hideDisabledOptions?: boolean;
    defaultOpenValue?: Date;
    addOn?: TemplateRef<void>;
    disabledHours?(): number[];
    disabledMinutes?(hour: number): number[];
    disabledSeconds?(hour: number, minute: number): number[];
}
export interface PresetRanges {
    [key: string]: Date[] | (() => Date[]);
}
export declare type PanelMode = 'decade' | 'year' | 'month' | 'date' | 'time';
