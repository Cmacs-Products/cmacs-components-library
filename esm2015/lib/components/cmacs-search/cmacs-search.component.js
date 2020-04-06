/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { InputBoolean, isNotNil } from 'ng-zorro-antd';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CmacsSearchComponent {
    constructor() {
        this.disabled = false;
        this.allowClear = false;
        this.showSearch = false;
        this.cmacsOpen = false;
        this.tagsOut = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.selected = [];
        this.selectedChange = new EventEmitter();
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
     * @return {?}
     */
    onSelectedChange() {
        this.selectedChange.emit(this.selected);
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
    }
}
CmacsSearchComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-search',
                template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} [showCmacsSearch]=\"true\" [showSearch]=\"true\" showCustomSearch\r\n    [maxTagCount]=\"maxTagCount\" [tagsOut]=\"tagsOut\" [open]=\"cmacsOpen\" [cmacsOpen]=\"cmacsOpen\"\r\n>\r\n    <cmacs-option [disabled]=\"item.disabled !== undefined ? item.disabled : false\" *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\" divider=\"{{item.divider}}\"></cmacs-option>\r\n</cmacs-select>\r\n",
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
                styles: [":host ::ng-deep .cmacs-search .ant-select-selection__placeholder{margin-left:21px}:host ::ng-deep .cmacs-search .ant-select-arrow{color:rgba(0,0,0,.25)!important;top:14px}:host ::ng-deep .cmacs-search .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:26px}:host ::ng-deep .cmacs-search .anticon-search{margin-left:8px}:host ::ng-deep .cmacs-search .ant-select-selection-selected-value{padding-left:10px}::ng-deep .cmacs-search .ant-select-search--inline .ant-select-search__field{max-width:77%;margin-left:21px!important}::ng-deep .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:26px!important;padding-right:36px;min-width:38px;max-width:94%}::ng-deep .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}"]
            }] }
];
/** @nocollapse */
CmacsSearchComponent.ctorParameters = () => [];
CmacsSearchComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    allowClear: [{ type: Input }],
    showSearch: [{ type: Input }],
    cmacsOpen: [{ type: Input }],
    tagsOut: [{ type: Input }],
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
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSearchComponent.prototype, "tagsOut", void 0);
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
    CmacsSearchComponent.prototype.tagsOut;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VhcmNoL2NtYWNzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFpQixRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdCekUsTUFBTSxPQUFPLG9CQUFvQjtJQTRDL0I7UUF6Q3lCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0QsU0FBSSxHQUFvQyxTQUFTLENBQUM7UUFFM0QsYUFBUTs7O1FBQXVDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUMxRCxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUE0Qm5CLENBQUM7Ozs7SUExQmpCLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxLQUFrQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7WUFDbEIsU0FBUyxHQUFVLEVBQUU7UUFDekIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXNDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsS0FBSyxFQUFFLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHdyQkFBNEM7Z0JBQzVDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFFRjs7Ozs7c0JBR0UsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxNQUFNO21CQUNOLEtBQUs7O0FBVm1CO0lBQWYsWUFBWSxFQUFFOztzREFBa0I7QUFFakI7SUFBZixZQUFZLEVBQUU7O3dEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7d0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzt1REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7O3FEQUFpQjs7O0lBTnpDLHVDQUEyQjs7SUFDM0Isd0NBQTBDOztJQUMxQywyQ0FBOEI7O0lBQzlCLDBDQUE0Qzs7SUFDNUMsMENBQTRDOztJQUM1Qyx5Q0FBMkM7O0lBQzNDLHVDQUF5Qzs7SUFDekMsb0NBQXlDOztJQUN6QywyQ0FBcUM7O0lBQ3JDLHdDQUE0Qjs7SUFDNUIsOENBQXNFOztJQUN0RSxvQ0FBMkQ7O0lBRTNELHdDQUEwRDs7SUFDMUQseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUsIGlzTm90TmlsLCBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlYXJjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSAgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0YWdzT3V0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdwbGFjZWhvbGRlcic7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnID0gJ2RlZmF1bHQnO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZTogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtOiBPcHRpb24pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=