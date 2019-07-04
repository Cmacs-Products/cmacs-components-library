import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date/candy-date';
import { PanelMode } from './standard-types';
/**
 * The base picker for header panels, current support: Year/Month
 */
export declare class CmacsHeaderPickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    placeHolder: string;
    renderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    defaultValue: CandyDate;
    format: string;
    endPanelMode: SupportHeaderPanel;
    panelMode: PanelMode;
    extraFooter: TemplateRef<void> | string;
    private supportPanels;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPanelModeChange(mode: PanelMode): void;
    onChooseValue(mode: SupportHeaderPanel, value: CandyDate): void;
    onOpenChange(open: boolean): void;
    private cleanUp;
}
export declare type SupportHeaderPanel = 'year' | 'month';
