/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
export class CmacsWeekPickerComponent extends CmacsDateRangePickerComponent {
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
        this.showWeek = true;
        this.openPickerTitle = '';
        this.openPickerSubtitle = '';
        this.openPickerLeftRangeSub = '';
        this.openPickerRightRangeSub = '';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
CmacsWeekPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-week-picker',
                exportAs: 'cmacsWeekPicker',
                template: "<div [style.width]=\"width\">\r\n  <ng-container *ngIf=\"cmacsOpen && !isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-date-subtitle\">\r\n      {{openPickerSubtitle}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value\">\r\n      {{value ? parseDate() : placeHolder}}</span>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"cmacsOpen && isRange\">\r\n    <div class=\"cmacs-open-date-title\">\r\n      {{openPickerTitle}}\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-left\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerLeftRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[0] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cmacs-open-range-picker-right\">\r\n      <div class=\"cmacs-open-date-subtitle\">\r\n        {{openPickerRightRangeSub}}: <span class=\"cmacs-open-date-picker-placeholder\" [class.cmacs-open-date-picker-selected-value]=\"value && value.length\">\r\n      {{value && value.length ? parseDate()[1] : placeHolder}}</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <cmacs-picker\r\n    [isRange]=\"isRange\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    [open]=\"open\"\r\n    [cmacsOpen]=\"cmacsOpen\"\r\n    [disabled]=\"disabled\"\r\n    [format]=\"format\"\r\n    [allowClear]=\"allowClear\"\r\n    [autoFocus]=\"autoFocus\"\r\n    [className]=\"className\"\r\n    [placeholder]=\"placeHolder\"\r\n    [size]=\"size\"\r\n    [width]=\"width\"\r\n    [style]=\"pickerStyle\"\r\n    [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    (openChange)=\"onOpenChange($event)\"\r\n  >\r\n    <date-range-popup *ngIf=\"realOpenState\"\r\n                      [isRange]=\"isRange\"\r\n                      [showWeek]=\"showWeek\"\r\n                      [panelMode]=\"mode\"\r\n                      (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n                      [value]=\"value\"\r\n                      (valueChange)=\"onValueChange($event)\"\r\n                      (calendarChange)=\"onCalendarChange($event)\"\r\n                      [locale]=\"locale?.lang\"\r\n                      [showToday]=\"realShowToday\"\r\n                      [showTime]=\"showTime\"\r\n                      [format]=\"format\"\r\n                      [dateRender]=\"dateRender\"\r\n                      [disabledDate]=\"disabledDate\"\r\n                      [disabledTime]=\"disabledTime\"\r\n                      [placeholder]=\"placeHolder\"\r\n                      [dropdownClassName]=\"dropdownClassName\"\r\n                      [popupStyle]=\"popupStyle\"\r\n                      [extraFooter]=\"extraFooter\"\r\n                      [ranges]=\"ranges\"\r\n                      (resultOk)=\"onResultOk()\"\r\n                      (closePicker)=\"closeOverlay()\"\r\n    ></date-range-popup>\r\n  </cmacs-picker>\r\n</div>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsWeekPickerComponent))
                    }
                ]
            }] }
];
/** @nocollapse */
CmacsWeekPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsWeekPickerComponent.propDecorators = {
    openPickerTitle: [{ type: Input }],
    openPickerSubtitle: [{ type: Input }],
    openPickerLeftRangeSub: [{ type: Input }],
    openPickerRightRangeSub: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.showWeek;
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.openPickerTitle;
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.openPickerSubtitle;
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.openPickerLeftRangeSub;
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.openPickerRightRangeSub;
    /** @type {?} */
    CmacsWeekPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci93ZWVrLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUFFLEtBQUssRUFDekIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBaUI5RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNkJBQTZCOzs7Ozs7Ozs7SUFRekUsWUFDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixRQUFtQixFQUNuQixVQUFzQixFQUNLLFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUZmLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQWJqRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRVAsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFXcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2bUdBQWlEO2dCQUNqRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztxQkFDeEQ7aUJBQ0Y7YUFDRjs7OztZQWxCMkIsYUFBYTtZQVh2QyxpQkFBaUI7WUFXVixpQkFBaUI7WUFOeEIsU0FBUztZQUhULFVBQVU7WUFRSCxzQkFBc0IsdUJBa0MxQixJQUFJLFlBQUksUUFBUTs7OzhCQVhsQixLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztzQ0FDTCxLQUFLOzs7O0lBTE4sNENBQWdCOztJQUVoQixtREFBOEI7O0lBQzlCLHNEQUFpQzs7SUFDakMsMERBQXFDOztJQUNyQywyREFBc0M7O0lBUXBDLCtDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtd2Vlay1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NXZWVrUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzV2Vla1BpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1dlZWtQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgc2hvd1dlZWsgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxufVxyXG4iXX0=