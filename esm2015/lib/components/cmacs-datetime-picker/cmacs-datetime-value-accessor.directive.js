/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class CmacsDatetimeValueAccessorDirective {
    /**
     * @param {?} dateHelper
     * @param {?} elementRef
     */
    constructor(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    keyup() {
        this.changed();
    }
    /**
     * @return {?}
     */
    blur() {
        this.touched();
    }
    /**
     * @return {?}
     */
    changed() {
        if (this._onChange) {
            /** @type {?} */
            const value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange((/** @type {?} */ (value)));
        }
    }
    /**
     * @return {?}
     */
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    /**
     * @return {?}
     */
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
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
        this._onTouch = fn;
    }
}
CmacsDatetimeValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimeValueAccessorDirective, multi: true }]
            },] }
];
/** @nocollapse */
CmacsDatetimeValueAccessorDirective.ctorParameters = () => [
    { type: DateHelperService },
    { type: ElementRef }
];
CmacsDatetimeValueAccessorDirective.propDecorators = {
    nzTime: [{ type: Input }],
    keyup: [{ type: HostListener, args: ['keyup',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimeValueAccessorDirective.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    CmacsDatetimeValueAccessorDirective.prototype.nzTime;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimeValueAccessorDirective.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimeValueAccessorDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPdkQsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFpQzlDLFlBQW9CLFVBQTZCLEVBQVUsVUFBc0I7UUFBN0QsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7OztJQTNCckYsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBR0QsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFJRCxVQUFVLENBQUMsS0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLG1DQUFtQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUMzRzs7OztZQU5RLGlCQUFpQjtZQUhOLFVBQVU7OztxQkFhM0IsS0FBSztvQkFFTCxZQUFZLFNBQUMsT0FBTzttQkFLcEIsWUFBWSxTQUFDLE1BQU07Ozs7Ozs7SUFUcEIsd0RBQXlDOzs7OztJQUN6Qyx1REFBNkI7O0lBQzdCLHFEQUF3Qjs7Ozs7SUE4QloseURBQXFDOzs7OztJQUFFLHlEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbnpUaW1lXScsXHJcbiAgZXhwb3J0QXM6ICduelRpbWUnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGF0ZXRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBASW5wdXQoKSBuelRpbWU6IHN0cmluZztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKVxyXG4gIGtleXVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlSGVscGVyLnBhcnNlVGltZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlISk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX29uVG91Y2gpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLCB0aGlzLm56VGltZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=