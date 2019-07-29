/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, forwardRef } from '@angular/core';
import { InputBoolean, isNotNil } from 'ng-zorro-antd';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CmacsSearchComponent {
    constructor() {
        this.disabled = false;
        this.allowClear = false;
        this.showSearch = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.mode = 'default';
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selected = value;
        /** @type {?} */
        let listValue = [];
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.options);
    }
}
CmacsSearchComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-search',
                template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} [showCmacsSearch]=\"true\" [showSearch]=\"true\" showCustomSearch>\r\n    <cmacs-option *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-select>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsSearchComponent)),
                        multi: true
                    }
                ],
                styles: [":host ::ng-deep .ant-select-selection__placeholder{margin-left:21px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:30px}:host ::ng-deep .anticon-search{margin-left:8px}:host ::ng-deep .ant-select-selection-selected-value{padding-left:10px}:host ::ng-deep .ant-select-arrow{top:44%}"]
            }] }
];
/** @nocollapse */
CmacsSearchComponent.ctorParameters = () => [];
CmacsSearchComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    allowClear: [{ type: Input }],
    showSearch: [{ type: Input }],
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
if (false) {
    /** @type {?} */
    CmacsSearchComponent.prototype.options;
    /** @type {?} */
    CmacsSearchComponent.prototype.disabled;
    /** @type {?} */
    CmacsSearchComponent.prototype.allowClear;
    /** @type {?} */
    CmacsSearchComponent.prototype.showSearch;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VhcmNoL2NtYWNzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0J6RSxNQUFNLE9BQU8sb0JBQW9CO0lBb0MvQjtRQWpDeUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkMsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFFNUIsU0FBSSxHQUEyQixTQUFTLENBQUM7UUFFbEQsYUFBUTs7O1FBQXVDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUMxRCxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUF3Qm5CLENBQUM7Ozs7O0lBckJqQixVQUFVLENBQUMsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O1lBQ2xCLFNBQVMsR0FBVSxFQUFFO1FBQ3pCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBS0QsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQXpERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtY0FBNEM7Z0JBQzVDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFFRjs7Ozs7c0JBR0UsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSyxZQUFJLE1BQU07bUJBQ2YsS0FBSzs7QUFObUI7SUFBZixZQUFZLEVBQUU7O3NEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7d0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzt3REFBb0I7OztJQUg1Qyx1Q0FBMkI7O0lBQzNCLHdDQUEwQzs7SUFDMUMsMENBQTRDOztJQUM1QywwQ0FBNEM7O0lBQzVDLG9DQUF5Qzs7SUFDekMsMkNBQXFDOztJQUNyQyx3Q0FBaUM7O0lBQ2pDLG9DQUFrRDs7SUFFbEQsd0NBQTBEOztJQUMxRCx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUsIGlzTm90TmlsLCBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlYXJjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdwbGFjZWhvbGRlcic7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHNlbGVjdGVkOiBhbnk7XHJcbiAgQElucHV0KCkgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyA9ICdkZWZhdWx0JztcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZTogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtOiBPcHRpb24pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19