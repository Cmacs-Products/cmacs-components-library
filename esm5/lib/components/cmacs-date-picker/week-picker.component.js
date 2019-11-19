/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
var CmacsWeekPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsWeekPickerComponent, _super);
    function CmacsWeekPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.showWeek = true;
        _this.openPickerTitle = '';
        _this.openPickerSubtitle = '';
        _this.openPickerLeftRangeSub = '';
        _this.openPickerRightRangeSub = '';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
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
                            function () { return CmacsWeekPickerComponent; }))
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CmacsWeekPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsWeekPickerComponent.propDecorators = {
        openPickerTitle: [{ type: Input }],
        openPickerSubtitle: [{ type: Input }],
        openPickerLeftRangeSub: [{ type: Input }],
        openPickerRightRangeSub: [{ type: Input }]
    };
    return CmacsWeekPickerComponent;
}(CmacsDateRangePickerComponent));
export { CmacsWeekPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci93ZWVrLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFBRSxLQUFLLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RTtJQWU4QyxvREFBNkI7SUFRekUsa0NBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUUxQztRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFiakUsY0FBUSxHQUFHLElBQUksQ0FBQztRQUVQLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qiw0QkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsNkJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBV3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztJQUNyRSxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDZtR0FBaUQ7b0JBQ2pELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSx3QkFBd0IsRUFBeEIsQ0FBd0IsRUFBQzt5QkFDeEQ7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBbEIyQixhQUFhO2dCQVh2QyxpQkFBaUI7Z0JBV1YsaUJBQWlCO2dCQU54QixTQUFTO2dCQUhULFVBQVU7Z0JBUUgsc0JBQXNCLHVCQWtDMUIsSUFBSSxZQUFJLFFBQVE7OztrQ0FYbEIsS0FBSztxQ0FDTCxLQUFLO3lDQUNMLEtBQUs7MENBQ0wsS0FBSzs7SUFhUiwrQkFBQztDQUFBLEFBbENELENBZThDLDZCQUE2QixHQW1CMUU7U0FuQlksd0JBQXdCOzs7SUFDbkMsNENBQWdCOztJQUVoQixtREFBOEI7O0lBQzlCLHNEQUFpQzs7SUFDakMsMERBQXFDOztJQUNyQywyREFBc0M7O0lBUXBDLCtDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtd2Vlay1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NXZWVrUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzV2Vla1BpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1dlZWtQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgc2hvd1dlZWsgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xyXG4gIH1cclxufVxyXG4iXX0=