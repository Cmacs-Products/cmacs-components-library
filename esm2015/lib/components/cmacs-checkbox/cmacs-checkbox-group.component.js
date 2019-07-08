/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function CmacsCheckBoxOptionInterface() { }
if (false) {
    /** @type {?} */
    CmacsCheckBoxOptionInterface.prototype.label;
    /** @type {?} */
    CmacsCheckBoxOptionInterface.prototype.value;
    /** @type {?|undefined} */
    CmacsCheckBoxOptionInterface.prototype.checked;
    /** @type {?|undefined} */
    CmacsCheckBoxOptionInterface.prototype.disabled;
}
export class CmacsCheckboxGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.options = [];
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    onOptionChange() {
        this.onChange(this.options);
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackByOption(_index, option) {
        return option.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.options = value;
        this.cdr.markForCheck();
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
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
}
CmacsCheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-checkbox-group',
                exportAs: 'cmacsCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<label cmacs-checkbox\r\n  *ngFor=\"let option of options; trackBy:trackByOption\"\r\n  [disabled]=\"option.disabled || disabled\"\r\n  [(checked)]=\"option.checked\"\r\n  (checkedChange)=\"onOptionChange()\">\r\n  <span>{{ option.label }}</span>\r\n</label>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsCheckboxGroupComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
CmacsCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CmacsCheckboxGroupComponent.propDecorators = {
    disabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
if (false) {
    /** @type {?} */
    CmacsCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    CmacsCheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    CmacsCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    CmacsCheckboxGroupComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1jaGVja2JveC9jbWFjcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRWxELGtEQUtDOzs7SUFKQyw2Q0FBYzs7SUFDZCw2Q0FBYzs7SUFDZCwrQ0FBa0I7O0lBQ2xCLGdEQUFtQjs7QUFpQnJCLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFnQnRDLFlBQ1UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsR0FBc0IsRUFDOUIsUUFBbUI7UUFIWCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQWpCaEMsYUFBUTs7O1FBQXlCLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQzs7UUFFNUMsY0FBUzs7O1FBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO1FBQ2xDLFlBQU8sR0FBbUMsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFnQnhDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFmRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWMsRUFBRSxNQUFvQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFxQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBNkM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyw4UUFBb0Q7Z0JBQ3BELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixFQUFDO3dCQUMxRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBOUJDLFVBQVU7WUFMSCxZQUFZO1lBR25CLGlCQUFpQjtZQUtqQixTQUFTOzs7dUJBa0NSLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzs2REFBa0I7OztJQUoxQywrQ0FBNEM7O0lBRTVDLGdEQUFrQzs7SUFDbEMsOENBQTZDOztJQUM3QywrQ0FBMEM7Ozs7O0lBV3hDLGlEQUE4Qjs7Ozs7SUFDOUIsbURBQWtDOzs7OztJQUNsQywwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENtYWNzQ2hlY2tCb3hPcHRpb25JbnRlcmZhY2Uge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2hlY2tib3gtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDaGVja2JveEdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0NoZWNrYm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IG51bGw7XHJcbiAgb3B0aW9uczogQ21hY3NDaGVja0JveE9wdGlvbkludGVyZmFjZVtdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIG9uT3B0aW9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2hlY2tib3gtZ3JvdXAnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENtYWNzQ2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==