/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
export class CmacsDatePickerComponent extends CmacsDateRangePickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.isRange = false;
        this.openPickerTitle = '';
        this.openPickerSubtitle = '';
        this.openPickerLeftRangeSub = '';
        this.openPickerRightRangeSub = '';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
CmacsDatePickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-date-picker',
                exportAs: 'cmacsDatePicker',
                template: "<div [style.width]=\"width\">\r\n  <ng-container *ngIf=\"cmacsOpen && !isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-date-subtitle\">\r\n      {{openPickerSubtitle}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value\">\r\n      {{value ? parseDate() : placeHolder}}</span>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"cmacsOpen && isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-left\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerLeftRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[0] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-right\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerRightRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[1] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <cmacs-picker\r\n    [isRange]=\"isRange\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    [open]=\"open\"\r\n    [cmacsOpen]=\"cmacsOpen\"\r\n    [disabled]=\"disabled\"\r\n    [format]=\"format\"\r\n    [allowClear]=\"allowClear\"\r\n    [autoFocus]=\"autoFocus\"\r\n    [className]=\"className\"\r\n    [placeholder]=\"placeHolder\"\r\n    [size]=\"size\"\r\n    [width]=\"width\"\r\n    [style]=\"pickerStyle\"\r\n    [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    (openChange)=\"onOpenChange($event)\"\r\n  >\r\n    <date-range-popup *ngIf=\"realOpenState\"\r\n                      [isRange]=\"isRange\"\r\n                      [showWeek]=\"showWeek\"\r\n                      [panelMode]=\"mode\"\r\n                      (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n                      [value]=\"value\"\r\n                      (valueChange)=\"onValueChange($event)\"\r\n                      (calendarChange)=\"onCalendarChange($event)\"\r\n                      [locale]=\"locale?.lang\"\r\n                      [showToday]=\"realShowToday\"\r\n                      [showTime]=\"showTime\"\r\n                      [format]=\"format\"\r\n                      [dateRender]=\"dateRender\"\r\n                      [disabledDate]=\"disabledDate\"\r\n                      [disabledTime]=\"disabledTime\"\r\n                      [placeholder]=\"placeHolder\"\r\n                      [dropdownClassName]=\"dropdownClassName\"\r\n                      [popupStyle]=\"popupStyle\"\r\n                      [extraFooter]=\"extraFooter\"\r\n                      [ranges]=\"ranges\"\r\n                      (resultOk)=\"onResultOk()\"\r\n                      (closePicker)=\"closeOverlay()\"\r\n    ></date-range-popup>\r\n  </cmacs-picker>\r\n</div>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsDatePickerComponent))
                    }
                ],
                host: {
                    '[class.cmacs-open-date-picker]': 'cmacsOpen'
                },
                styles: [".cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-calendar-date{padding-top:2px}.ant-calendar-selected-day .ant-calendar-date{display:-ms-grid;display:grid}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date{background-color:transparent;color:rgba(0,0,0,.65)}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date:after{content:'\u25CF';color:#2a7cff;margin-top:-9px;font-size:10px}.ant-calendar-today .ant-calendar-date{color:#fff!important;background-color:#2a7cff!important}.ant-calendar-cell.ng-star-inserted>.ant-calendar-date{width:30px;height:30px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-calendar-date:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}"]
            }] }
];
/** @nocollapse */
CmacsDatePickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsDatePickerComponent.propDecorators = {
    openPickerTitle: [{ type: Input }],
    openPickerSubtitle: [{ type: Input }],
    openPickerLeftRangeSub: [{ type: Input }],
    openPickerRightRangeSub: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsDatePickerComponent.prototype.isRange;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.openPickerTitle;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.openPickerSubtitle;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.openPickerLeftRangeSub;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.openPickerRightRangeSub;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBc0I5RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNkJBQTZCOzs7Ozs7Ozs7SUFPekUsWUFDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixRQUFtQixFQUNuQixVQUFzQixFQUNLLFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUZmLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVpqRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ1Asb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFXcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2bUdBQWlEO2dCQUVqRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztxQkFDeEQ7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGdDQUFnQyxFQUFFLFdBQVc7aUJBQzlDOzthQUNGOzs7O1lBdkIyQixhQUFhO1lBWnZDLGlCQUFpQjtZQVlWLGlCQUFpQjtZQU54QixTQUFTO1lBSlQsVUFBVTtZQVNILHNCQUFzQix1QkFzQzFCLElBQUksWUFBSSxRQUFROzs7OEJBWGxCLEtBQUs7aUNBQ0wsS0FBSztxQ0FDTCxLQUFLO3NDQUNMLEtBQUs7Ozs7SUFKTiwyQ0FBZ0I7O0lBQ2hCLG1EQUE4Qjs7SUFDOUIsc0RBQWlDOztJQUNqQywwREFBcUM7O0lBQ3JDLDJEQUFzQzs7SUFRcEMsK0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IENtYWNzRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NhbmR5RGF0ZX0gZnJvbSBcIi4vbGliL2NhbmR5LWRhdGUvY2FuZHktZGF0ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jbWFjcy1vcGVuLWRhdGUtcGlja2VyXSc6ICdjbWFjc09wZW4nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xyXG4gIGlzUmFuZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19