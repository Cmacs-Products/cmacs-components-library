/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
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
                    template: "<cmacs-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"mode\"\r\n    (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"locale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"showTime\"\r\n    [format]=\"format\"\r\n    [dateRender]=\"dateRender\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [disabledTime]=\"disabledTime\"\r\n    [placeholder]=\"placeHolder\"\r\n    [dropdownClassName]=\"dropdownClassName\"\r\n    [popupStyle]=\"popupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"ranges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</cmacs-picker>",
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
                    styles: [".ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}"]
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
    return CmacsDatePickerComponent;
}(CmacsDateRangePickerComponent));
export { CmacsDatePickerComponent };
if (false) {
    /** @type {?} */
    CmacsDatePickerComponent.prototype.isRange;
    /** @type {?} */
    CmacsDatePickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlFO0lBZ0I4QyxvREFBNkI7SUFHekUsa0NBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUUxQztRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSakUsYUFBTyxHQUFHLEtBQUssQ0FBQztRQVdkLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztJQUNyRSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDR6Q0FBaUQ7b0JBRWpELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSx3QkFBd0IsRUFBeEIsQ0FBd0IsRUFBQzt5QkFDeEQ7cUJBQ0Y7O2lCQUNGOzs7O2dCQW5CMkIsYUFBYTtnQkFYdkMsaUJBQWlCO2dCQVdWLGlCQUFpQjtnQkFOeEIsU0FBUztnQkFIVCxVQUFVO2dCQVFILHNCQUFzQix1QkE4QjFCLElBQUksWUFBSSxRQUFROztJQUtyQiwrQkFBQztDQUFBLEFBOUJELENBZ0I4Qyw2QkFBNkIsR0FjMUU7U0FkWSx3QkFBd0I7OztJQUNuQywyQ0FBZ0I7O0lBUWQsK0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IENtYWNzRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENtYWNzRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcclxuICBpc1JhbmdlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYWxlbmRhci1waWNrZXInKTtcclxuICB9XHJcbn1cclxuIl19