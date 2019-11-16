/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
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
        this.selected = [];
        this.selectedChange = new EventEmitter();
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
     * @return {?}
     */
    CmacsSearchComponent.prototype.onSelectedChange = /**
     * @return {?}
     */
    function () {
        this.selectedChange.emit(this.selected);
    };
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
                    template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} [showCmacsSearch]=\"true\" [showSearch]=\"true\" showCustomSearch\r\n    [maxTagCount]=\"maxTagCount\" [open]=\"cmacsOpen\"\r\n>\r\n    <cmacs-option [disabled]=\"item.disabled !== undefined ? item.disabled : false\" *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-select>\r\n",
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
        selected: [{ type: Input }],
        selectedChange: [{ type: Output }],
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
    CmacsSearchComponent.prototype.selectedChange;
    /** @type {?} */
    CmacsSearchComponent.prototype.mode;
    /** @type {?} */
    CmacsSearchComponent.prototype.onChange;
    /** @type {?} */
    CmacsSearchComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VhcmNoL2NtYWNzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFpQixRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RTtJQXdERTtRQXhDeUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0QsU0FBSSxHQUEyQixTQUFTLENBQUM7UUFFbEQsYUFBUTs7O1FBQXVDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBQzFELGNBQVM7OztRQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO0lBNEJuQixDQUFDOzs7O0lBMUJqQiwrQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFrQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7WUFDbEIsU0FBUyxHQUFVLEVBQUU7UUFDekIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUtELHdDQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEvREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMm1CQUE0QztvQkFDNUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBRUY7Ozs7OzBCQUdFLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLE1BQU07dUJBQ04sS0FBSzs7SUFUbUI7UUFBZixZQUFZLEVBQUU7OzBEQUFrQjtJQUVqQjtRQUFmLFlBQVksRUFBRTs7NERBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzs0REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzJEQUFtQjtJQTZDN0MsMkJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQXBEWSxvQkFBb0I7OztJQUUvQix1Q0FBMkI7O0lBQzNCLHdDQUEwQzs7SUFDMUMsMkNBQThCOztJQUM5QiwwQ0FBNEM7O0lBQzVDLDBDQUE0Qzs7SUFDNUMseUNBQTJDOztJQUMzQyxvQ0FBeUM7O0lBQ3pDLDJDQUFxQzs7SUFDckMsd0NBQTRCOztJQUM1Qiw4Q0FBc0U7O0lBQ3RFLG9DQUFrRDs7SUFFbEQsd0NBQTBEOztJQUMxRCx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSwgaXNOb3ROaWwsIE56U2VsZWN0U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9vcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzU2VhcmNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpICBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdwbGFjZWhvbGRlcic7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnID0gJ2RlZmF1bHQnO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZTogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtOiBPcHRpb24pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=