/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd';
var CmacsTimePickerComponent = /** @class */ (function () {
    function CmacsTimePickerComponent() {
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
    CmacsTimePickerComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    Object.defineProperty(CmacsTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("set value");
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.value = time;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return CmacsTimePickerComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsTimePickerComponent.ctorParameters = function () { return []; };
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
    return CmacsTimePickerComponent;
}());
export { CmacsTimePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lLXBpY2tlci9jbWFjcy10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQ7SUE4Q0U7UUFoQ1MscUJBQWdCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5DLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWdCLElBQUksQ0FBQztJQXdCbkIsQ0FBQzs7Ozs7SUFwQmhCLGdEQUFhOzs7O0lBQWIsVUFBYyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSwyQ0FBSzs7OztRQVlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBZEQsVUFBVSxLQUFrQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUM7OztPQUFBOzs7O0lBUUQsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsSUFBaUI7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBK0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxvREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDJSQUFpRDtvQkFFakQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixFQUFDOzRCQUN2RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBRUY7Ozs7O21DQUVFLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBRUwsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBTm1CO1FBQWYsWUFBWSxFQUFFOzs4REFBMkI7SUFDMUI7UUFBZixZQUFZLEVBQUU7O2dFQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7Z0VBQW9CO0lBaUQ5QywrQkFBQztDQUFBLEFBbEVELElBa0VDO1NBckRZLHdCQUF3Qjs7O0lBQ25DLG9EQUF1Qzs7SUFDdkMsNENBQW1EOztJQUNuRCw4Q0FBMkM7O0lBQzNDLDhDQUE0Qzs7SUFFNUMsK0NBQStDOztJQUMvQywwQ0FBNkI7O0lBQzdCLHlDQUF1Qjs7SUFDdkIsMENBQWtDOzs7OztJQUNsQyw2Q0FBZ0Q7Ozs7O0lBQ2hELDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NUaW1lUGlja2VyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93RW1wdHkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2UxMkhvdXJzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlNlbGVjdCBhIHRpbWVcIjtcclxuICBASW5wdXQoKSBmb3JtYXQgPSAnSEg6bW06c3MnO1xyXG4gIEBJbnB1dCgpIF9vcGVuID0gZmFsc2U7XHJcbiAgcHVibGljIF92YWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUgfCBudWxsKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBudWxsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNldCB2YWx1ZVwiKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh0aW1lOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRpbWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodGltZTogRGF0ZSB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=