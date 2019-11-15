/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, forwardRef } from '@angular/core';
import { InputBoolean, isNotNil } from 'ng-zorro-antd';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CmacsSearchComponent = /** @class */ (function () {
    function CmacsSearchComponent() {
        this.disabled = false;
        this.allowClear = false;
        this.showSearch = false;
        this.cmacsOpen = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.mode = 'default';
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSearchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selected = value;
        /** @type {?} */
        var listValue = [];
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSearchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSearchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CmacsSearchComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.value;
    };
    /**
     * @return {?}
     */
    CmacsSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CmacsSearchComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-search',
                    template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} [showCmacsSearch]=\"true\" [showSearch]=\"true\" showCustomSearch\r\n    [maxTagCount]=\"maxTagCount\" [open]=\"cmacsOpen\"\r\n>\r\n    <cmacs-option *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-select>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsSearchComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host ::ng-deep .ant-select-selection__placeholder{margin-left:21px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:30px}:host ::ng-deep .anticon-search{margin-left:8px}:host ::ng-deep .ant-select-selection-selected-value{padding-left:10px}:host ::ng-deep .ant-select-arrow{top:44%}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSearchComponent.ctorParameters = function () { return []; };
    CmacsSearchComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        maxTagCount: [{ type: Input }],
        allowClear: [{ type: Input }],
        showSearch: [{ type: Input }],
        cmacsOpen: [{ type: Input }],
        size: [{ type: Input }],
        placeholder: [{ type: Input }],
        selected: [{ type: Input }, { type: Output }],
        mode: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "allowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "showSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "cmacsOpen", void 0);
    return CmacsSearchComponent;
}());
export { CmacsSearchComponent };
if (false) {
    /** @type {?} */
    CmacsSearchComponent.prototype.options;
    /** @type {?} */
    CmacsSearchComponent.prototype.disabled;
    /** @type {?} */
    CmacsSearchComponent.prototype.maxTagCount;
    /** @type {?} */
    CmacsSearchComponent.prototype.allowClear;
    /** @type {?} */
    CmacsSearchComponent.prototype.showSearch;
    /** @type {?} */
    CmacsSearchComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsSearchComponent.prototype.size;
    /** @type {?} */
    CmacsSearchComponent.prototype.placeholder;
    /** @type {?} */
    CmacsSearchComponent.prototype.selected;
    /** @type {?} */
    CmacsSearchComponent.prototype.mode;
    /** @type {?} */
    CmacsSearchComponent.prototype.onChange;
    /** @type {?} */
    CmacsSearchComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VhcmNoL2NtYWNzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFO0lBbURFO1FBbkN5QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBRTVCLFNBQUksR0FBMkIsU0FBUyxDQUFDO1FBRWxELGFBQVE7OztRQUF1QyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUMxRCxjQUFTOzs7UUFBZSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQXdCbkIsQ0FBQzs7Ozs7SUFyQmpCLHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFrQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7WUFDbEIsU0FBUyxHQUFVLEVBQUU7UUFDekIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUtELHdDQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkExREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsaWdCQUE0QztvQkFDNUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBRUY7Ozs7OzBCQUdFLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLLFlBQUksTUFBTTt1QkFDZixLQUFLOztJQVJtQjtRQUFmLFlBQVksRUFBRTs7MERBQWtCO0lBRWpCO1FBQWYsWUFBWSxFQUFFOzs0REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7MkRBQW1CO0lBd0M3QywyQkFBQztDQUFBLEFBNURELElBNERDO1NBL0NZLG9CQUFvQjs7O0lBRS9CLHVDQUEyQjs7SUFDM0Isd0NBQTBDOztJQUMxQywyQ0FBOEI7O0lBQzlCLDBDQUE0Qzs7SUFDNUMsMENBQTRDOztJQUM1Qyx5Q0FBMkM7O0lBQzNDLG9DQUF5Qzs7SUFDekMsMkNBQXFDOztJQUNyQyx3Q0FBaUM7O0lBQ2pDLG9DQUFrRDs7SUFFbEQsd0NBQTBEOztJQUMxRCx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUsIGlzTm90TmlsLCBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlYXJjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSAgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInO1xyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSBzZWxlY3RlZDogYW55O1xyXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgPSAnZGVmYXVsdCc7XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbTogT3B0aW9uKSB7XHJcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19