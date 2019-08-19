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
var CmacsDatetimeValueAccessorDirective = /** @class */ (function () {
    function CmacsDatetimeValueAccessorDirective(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange((/** @type {?} */ (value)));
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.registerOnChange = /**
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
    CmacsDatetimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    CmacsDatetimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzTime]',
                    exportAs: 'nzTime',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimeValueAccessorDirective, multi: true }]
                },] }
    ];
    /** @nocollapse */
    CmacsDatetimeValueAccessorDirective.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ElementRef }
    ]; };
    CmacsDatetimeValueAccessorDirective.propDecorators = {
        nzTime: [{ type: Input }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return CmacsDatetimeValueAccessorDirective;
}());
export { CmacsDatetimeValueAccessorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQ7SUFzQ0UsNkNBQW9CLFVBQTZCLEVBQVUsVUFBc0I7UUFBN0QsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7OztJQTNCckYsbURBQUs7OztJQURMO1FBRUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFHRCxrREFBSTs7O0lBREo7UUFFRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHFEQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRUQscURBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBSUQsd0RBQVU7Ozs7SUFBVixVQUFXLEtBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCw4REFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBeUI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwrREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLG1DQUFtQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDM0c7Ozs7Z0JBTlEsaUJBQWlCO2dCQUhOLFVBQVU7Ozt5QkFhM0IsS0FBSzt3QkFFTCxZQUFZLFNBQUMsT0FBTzt1QkFLcEIsWUFBWSxTQUFDLE1BQU07O0lBb0N0QiwwQ0FBQztDQUFBLEFBbkRELElBbURDO1NBOUNZLG1DQUFtQzs7Ozs7O0lBQzlDLHdEQUF5Qzs7Ozs7SUFDekMsdURBQTZCOztJQUM3QixxREFBd0I7Ozs7O0lBOEJaLHlEQUFxQzs7Ozs7SUFBRSx5REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W256VGltZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUaW1lJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRldGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX29uVG91Y2g6ICgpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgbnpUaW1lOiBzdHJpbmc7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJylcclxuICBrZXl1cCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMudG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZUhlbHBlci5wYXJzZVRpbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG91Y2hlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFJhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5uelRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2ggPSBmbjtcclxuICB9XHJcbn1cclxuIl19