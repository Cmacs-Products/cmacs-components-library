/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
var CmacsDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsDatePickerComponent, _super);
    function CmacsDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.isRange = false;
        _this.openPickerTitle = '';
        _this.openPickerSubtitle = '';
        _this.openPickerLeftRangeSub = '';
        _this.openPickerRightRangeSub = '';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
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
                            function () { return CmacsDatePickerComponent; }))
                        }
                    ],
                    host: {
                        '[class.cmacs-open-date-picker]': 'cmacsOpen'
                    },
                    styles: [".cmacs-open-date-title{font-size:12px;font-weight:600;margin-bottom:10px}.cmacs-open-range-picker:hover .ant-calendar-range-picker-input{color:transparent}.cmacs-open-range-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-open-date-subtitle{font-size:12px;color:#acb3bf;margin-bottom:10px}.cmacs-open-date-picker-placeholder{font-size:12px;font-weight:600;color:#acb3bf}.cmacs-open-date-picker-selected-value{color:#2a7cff}.cmacs-open-date-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-open-range-picker-left,.cmacs-open-range-picker-right{display:inline-block}.cmacs-open-range-picker-right{float:right}.cmacs-open-range-picker-left{float:left}.ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-calendar-date{padding-top:2px}.ant-calendar-selected-day .ant-calendar-date{display:-ms-grid;display:grid}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date{background-color:transparent;color:rgba(0,0,0,.65)}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date:after{content:'\u25CF';color:#2a7cff;margin-top:-9px;font-size:10px}.ant-calendar-today .ant-calendar-date{color:#fff!important;background-color:#2a7cff!important}.ant-calendar-cell.ng-star-inserted>.ant-calendar-date{width:30px;height:30px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-calendar-date:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDatePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsDatePickerComponent.propDecorators = {
        openPickerTitle: [{ type: Input }],
        openPickerSubtitle: [{ type: Input }],
        openPickerLeftRangeSub: [{ type: Input }],
        openPickerRightRangeSub: [{ type: Input }]
    };
    return CmacsDatePickerComponent;
}(CmacsDateRangePickerComponent));
export { CmacsDatePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUc5RTtJQW1COEMsb0RBQTZCO0lBT3pFLGtDQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFOakUsWUFRRSxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FFMUM7UUFKNEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBWmpFLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDUCxxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsNEJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDZCQUF1QixHQUFHLEVBQUUsQ0FBQztRQVdwQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7SUFDckUsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw2bUdBQWlEO29CQUVqRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLEVBQUM7eUJBQ3hEO3FCQUNGO29CQUNELElBQUksRUFBRTt3QkFDSixnQ0FBZ0MsRUFBRSxXQUFXO3FCQUM5Qzs7aUJBQ0Y7Ozs7Z0JBdkIyQixhQUFhO2dCQVp2QyxpQkFBaUI7Z0JBWVYsaUJBQWlCO2dCQU54QixTQUFTO2dCQUpULFVBQVU7Z0JBU0gsc0JBQXNCLHVCQXNDMUIsSUFBSSxZQUFJLFFBQVE7OztrQ0FYbEIsS0FBSztxQ0FDTCxLQUFLO3lDQUNMLEtBQUs7MENBQ0wsS0FBSzs7SUFjUiwrQkFBQztDQUFBLEFBdENELENBbUI4Qyw2QkFBNkIsR0FtQjFFO1NBbkJZLHdCQUF3Qjs7O0lBQ25DLDJDQUFnQjs7SUFDaEIsbURBQThCOztJQUM5QixzREFBaUM7O0lBQ2pDLDBEQUFxQzs7SUFDckMsMkRBQXNDOztJQVFwQywrQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBPcHRpb25hbCxcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2FuZHlEYXRlfSBmcm9tIFwiLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEYXRlUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLW9wZW4tZGF0ZS1waWNrZXJdJzogJ2NtYWNzT3BlbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgaXNSYW5nZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJUaXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJTdWJ0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJMZWZ0UmFuZ2VTdWIgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyUmlnaHRSYW5nZVN1YiA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FsZW5kYXItcGlja2VyJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=