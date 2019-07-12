/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd';
export class CmacsTimePickerComponent {
    constructor() {
        this.defaultOpenValue = new Date();
        this.disabled = false;
        this.allowEmpty = true;
        this.use12Hours = false;
        this.placeholder = "Select a time";
        this.format = 'HH:mm:ss';
        this._open = false;
        this._value = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        this.value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        console.log("set value");
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this.value = time;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CmacsTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-time-picker',
                template: "<nz-time-picker #timeElement [ngModel]=\"_value\" (ngModelChange)=\"onModelChange($event)\"\r\n    [nzDefaultOpenValue]=defaultOpenValue [nzFormat]=format [nzDisabled]=disabled\r\n    [nzFormat]=format [nzUse12Hours]=use12Hours [nzAllowEmpty]=allowEmpty></nz-time-picker>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsTimePickerComponent)),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsTimePickerComponent.ctorParameters = () => [];
CmacsTimePickerComponent.propDecorators = {
    defaultOpenValue: [{ type: Input }],
    disabled: [{ type: Input }],
    allowEmpty: [{ type: Input }],
    use12Hours: [{ type: Input }],
    placeholder: [{ type: Input }],
    format: [{ type: Input }],
    _open: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTimePickerComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTimePickerComponent.prototype, "allowEmpty", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTimePickerComponent.prototype, "use12Hours", void 0);
if (false) {
    /** @type {?} */
    CmacsTimePickerComponent.prototype.defaultOpenValue;
    /** @type {?} */
    CmacsTimePickerComponent.prototype.disabled;
    /** @type {?} */
    CmacsTimePickerComponent.prototype.allowEmpty;
    /** @type {?} */
    CmacsTimePickerComponent.prototype.use12Hours;
    /** @type {?} */
    CmacsTimePickerComponent.prototype.placeholder;
    /** @type {?} */
    CmacsTimePickerComponent.prototype.format;
    /** @type {?} */
    CmacsTimePickerComponent.prototype._open;
    /** @type {?} */
    CmacsTimePickerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CmacsTimePickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    CmacsTimePickerComponent.prototype._onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lLXBpY2tlci9jbWFjcy10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFleEQsTUFBTSxPQUFPLHdCQUF3QjtJQWlDbkM7UUFoQ1MscUJBQWdCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5DLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWdCLElBQUksQ0FBQztJQXdCbkIsQ0FBQzs7Ozs7SUFwQmhCLGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBa0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQWlCO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBK0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwyUkFBaUQ7Z0JBRWpELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixFQUFDO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFFRjs7Ozs7K0JBRUUsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFFTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7QUFObUI7SUFBZixZQUFZLEVBQUU7OzBEQUEyQjtBQUMxQjtJQUFmLFlBQVksRUFBRTs7NERBQW1CO0FBQ2xCO0lBQWYsWUFBWSxFQUFFOzs0REFBb0I7OztJQUg1QyxvREFBdUM7O0lBQ3ZDLDRDQUFtRDs7SUFDbkQsOENBQTJDOztJQUMzQyw4Q0FBNEM7O0lBRTVDLCtDQUErQzs7SUFDL0MsMENBQTZCOztJQUM3Qix5Q0FBdUI7O0lBQ3ZCLDBDQUFrQzs7Ozs7SUFDbEMsNkNBQWdEOzs7OztJQUNoRCw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWUtcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVGltZVBpY2tlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0VtcHR5ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VycyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJTZWxlY3QgYSB0aW1lXCI7XHJcbiAgQElucHV0KCkgZm9ybWF0ID0gJ0hIOm1tOnNzJztcclxuICBASW5wdXQoKSBfb3BlbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXQgdmFsdWVcIik7XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aW1lO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcbn1cclxuIl19