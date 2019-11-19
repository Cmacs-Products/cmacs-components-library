/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
export class CmacsRangePickerComponent extends CmacsDateRangePickerComponent {
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
        this.isRange = true;
        this.openPickerTitle = '';
        this.openPickerLeftRangeSub = '';
        this.openPickerRightRangeSub = '';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
CmacsRangePickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-range-picker',
                exportAs: 'cmacsRangePicker',
                template: "<div [style.width]=\"width\">\r\n  <ng-container *ngIf=\"cmacsOpen && !isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-date-subtitle\">\r\n      {{openPickerSubtitle}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value\">\r\n      {{value ? parseDate() : placeHolder}}</span>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"cmacsOpen && isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-left\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerLeftRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[0] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-right\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerRightRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[1] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <cmacs-picker\r\n    [isRange]=\"isRange\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    [open]=\"open\"\r\n    [cmacsOpen]=\"cmacsOpen\"\r\n    [disabled]=\"disabled\"\r\n    [format]=\"format\"\r\n    [allowClear]=\"allowClear\"\r\n    [autoFocus]=\"autoFocus\"\r\n    [className]=\"className\"\r\n    [placeholder]=\"placeHolder\"\r\n    [size]=\"size\"\r\n    [width]=\"width\"\r\n    [style]=\"pickerStyle\"\r\n    [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    (openChange)=\"onOpenChange($event)\"\r\n  >\r\n    <date-range-popup *ngIf=\"realOpenState\"\r\n                      [isRange]=\"isRange\"\r\n                      [showWeek]=\"showWeek\"\r\n                      [panelMode]=\"mode\"\r\n                      (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n                      [value]=\"value\"\r\n                      (valueChange)=\"onValueChange($event)\"\r\n                      (calendarChange)=\"onCalendarChange($event)\"\r\n                      [locale]=\"locale?.lang\"\r\n                      [showToday]=\"realShowToday\"\r\n                      [showTime]=\"showTime\"\r\n                      [format]=\"format\"\r\n                      [dateRender]=\"dateRender\"\r\n                      [disabledDate]=\"disabledDate\"\r\n                      [disabledTime]=\"disabledTime\"\r\n                      [placeholder]=\"placeHolder\"\r\n                      [dropdownClassName]=\"dropdownClassName\"\r\n                      [popupStyle]=\"popupStyle\"\r\n                      [extraFooter]=\"extraFooter\"\r\n                      [ranges]=\"ranges\"\r\n                      (resultOk)=\"onResultOk()\"\r\n                      (closePicker)=\"closeOverlay()\"\r\n    ></date-range-popup>\r\n  </cmacs-picker>\r\n</div>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsRangePickerComponent))
                    }
                ],
                host: {
                    '[class.cmacs-open-range-picker]': 'cmacsOpen'
                },
                styles: [".cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-calendar-date{padding-top:2px}.ant-calendar-selected-day .ant-calendar-date{display:-ms-grid;display:grid}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date{background-color:transparent;color:rgba(0,0,0,.65)}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date:after{content:'\u25CF';color:#2a7cff;margin-top:-9px;font-size:10px}.ant-calendar-today .ant-calendar-date{color:#fff!important;background-color:#2a7cff!important}.ant-calendar-cell.ng-star-inserted>.ant-calendar-date{width:30px;height:30px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-calendar-date:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}"]
            }] }
];
/** @nocollapse */
CmacsRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsRangePickerComponent.propDecorators = {
    openPickerTitle: [{ type: Input }],
    openPickerLeftRangeSub: [{ type: Input }],
    openPickerRightRangeSub: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsRangePickerComponent.prototype.isRange;
    /** @type {?} */
    CmacsRangePickerComponent.prototype.openPickerTitle;
    /** @type {?} */
    CmacsRangePickerComponent.prototype.openPickerLeftRangeSub;
    /** @type {?} */
    CmacsRangePickerComponent.prototype.openPickerRightRangeSub;
    /** @type {?} */
    CmacsRangePickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQUUsS0FBSyxFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFxQjlFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSw2QkFBNkI7Ozs7Ozs7OztJQU0xRSxZQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFFL0QsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBWGpFLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDTixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBV3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNm1HQUFpRDtnQkFFakQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7cUJBQ3pEO2lCQUNGO2dCQUNELElBQUksRUFBRTtvQkFDSixpQ0FBaUMsRUFBRSxXQUFXO2lCQUMvQzs7YUFDRjs7OztZQXRCMkIsYUFBYTtZQVh2QyxpQkFBaUI7WUFXVixpQkFBaUI7WUFOeEIsU0FBUztZQUhULFVBQVU7WUFRSCxzQkFBc0IsdUJBb0MxQixJQUFJLFlBQUksUUFBUTs7OzhCQVZsQixLQUFLO3FDQUNMLEtBQUs7c0NBQ0wsS0FBSzs7OztJQUhOLDRDQUFlOztJQUNmLG9EQUE4Qjs7SUFDOUIsMkRBQXFDOztJQUNyQyw0REFBc0M7O0lBUXBDLGdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtcmFuZ2UtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzUmFuZ2VQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzUmFuZ2VQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLW9wZW4tcmFuZ2UtcGlja2VyXSc6ICdjbWFjc09wZW4nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENtYWNzRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcclxuICBpc1JhbmdlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19