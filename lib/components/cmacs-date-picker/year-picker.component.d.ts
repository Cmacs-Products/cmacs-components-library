import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsHeaderPickerComponent, SupportHeaderPanel } from './header-picker.component';
export declare class CmacsYearPickerComponent extends CmacsHeaderPickerComponent {
    noAnimation?: NzNoAnimationDirective;
    format: string;
    endPanelMode: SupportHeaderPanel;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, renderer: Renderer2, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
}
