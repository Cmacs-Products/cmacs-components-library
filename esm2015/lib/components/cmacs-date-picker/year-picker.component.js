/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsHeaderPickerComponent } from './header-picker.component';
export class CmacsYearPickerComponent extends CmacsHeaderPickerComponent {
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
        this.format = 'yyyy';
        this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
CmacsYearPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-year-picker',
                exportAs: 'cmacsYearPicker',
                template: "<cmacs-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"style\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ dropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"popupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"disabledDate\"\r\n              [disabledYear]=\"disabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"value\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"locale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</cmacs-picker>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsYearPickerComponent))
                    }
                ],
                styles: [".ant-calendar-year-panel-header{line-height:17px;border:0}.ant-calendar-year-panel-year{padding-top:3px}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year{background-color:transparent;color:#656c79;display:-ms-grid;display:grid}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year::after{content:'\u25CF';color:#2a7cff;font-size:10px}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover{color:#656c79;background-color:#fff}.ant-calendar-year-panel-year:hover{background-color:#f6f7fb}"]
            }] }
];
/** @nocollapse */
CmacsYearPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsYearPickerComponent.propDecorators = {
    format: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsYearPickerComponent.prototype.format;
    /** @type {?} */
    CmacsYearPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    CmacsYearPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci95ZWFyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSwwQkFBMEIsRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQWtCM0YsTUFBTSxPQUFPLHdCQUF5QixTQUFRLDBCQUEwQjs7Ozs7Ozs7O0lBS3RFLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDSyxXQUFvQztRQUUvRCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGZixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFWeEQsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUV6QixpQkFBWSxHQUF1QixNQUFNLENBQUM7UUFXeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtbURBQTZDO2dCQUU3QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztxQkFDeEQ7aUJBQ0Y7O2FBQ0Y7Ozs7WUFuQjJCLGFBQWE7WUFadkMsaUJBQWlCO1lBWVYsaUJBQWlCO1lBTnhCLFNBQVM7WUFKVCxVQUFVO1lBU0gsc0JBQXNCLHVCQWdDMUIsSUFBSSxZQUFJLFFBQVE7OztxQkFWbEIsS0FBSzs7OztJQUFOLDBDQUF5Qjs7SUFFekIsZ0RBQTBDOztJQVF4QywrQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NIZWFkZXJQaWNrZXJDb21wb25lbnQsIFN1cHBvcnRIZWFkZXJQYW5lbCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXllYXItcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzWWVhclBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3llYXItcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1llYXJQaWNrZXJDb21wb25lbnQpXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NZZWFyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQ21hY3NIZWFkZXJQaWNrZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICd5eXl5JztcclxuXHJcbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYWxlbmRhci1waWNrZXInKTtcclxuICB9XHJcbn1cclxuIl19