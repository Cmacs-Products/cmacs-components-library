/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { toBoolean } from 'ng-zorro-antd/core';
var CmacsInputDirective = /** @class */ (function () {
    function CmacsInputDirective(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        // tslint:disable-next-line: variable-name
        this._disabled = false;
        this.size = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    Object.defineProperty(CmacsInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    CmacsInputDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-input]',
                    exportAs: 'cmacsInput',
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "size === 'large'",
                        '[class.ant-input-sm]': "size === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    CmacsInputDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsInputDirective.propDecorators = {
        size: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CmacsInputDirective;
}());
export { CmacsInputDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsInputDirective.prototype._disabled;
    /** @type {?} */
    CmacsInputDirective.prototype.size;
    /** @type {?} */
    CmacsInputDirective.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC9jbWFjcy1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RDtJQTRCRSw2QkFBdUMsU0FBb0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQWpFLGNBQVMsR0FBVCxTQUFTLENBQVc7O1FBZm5ELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFldkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFkRCxzQkFDSSx5Q0FBUTs7OztRQUlaO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQVZELFVBQ2EsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7Z0JBbkJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxZQUFZOztvQkFFdEIsSUFBSSxFQUFFO3dCQUNKLDRCQUE0QixFQUFFLFVBQVU7d0JBQ3hDLHNCQUFzQixFQUFFLGtCQUFrQjt3QkFDMUMsc0JBQXNCLEVBQUUsa0JBQWtCO3FCQUMzQztpQkFDRjs7OztnQkFiUSxTQUFTLHVCQStCSCxRQUFRLFlBQUksSUFBSTtnQkFoQ2tCLFNBQVM7Z0JBQXRDLFVBQVU7Ozt1QkFrQjNCLEtBQUs7MkJBRUwsS0FBSzs7SUFlUiwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBcEJZLG1CQUFtQjs7Ozs7O0lBRTlCLHdDQUEwQjs7SUFDMUIsbUNBQXlDOztJQWM3Qix3Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLWlucHV0XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0lucHV0JyxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc21dJzogYHNpemUgPT09ICdzbWFsbCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NJbnB1dERpcmVjdGl2ZSB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWlucHV0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==