/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
var CmacsDropdownDirective = /** @class */ (function () {
    function CmacsDropdownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.stopPropagation(); })), mapTo(true));
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    CmacsDropdownDirective.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    };
    CmacsDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-dropdown]',
                    exportAs: 'cmacsDropdown'
                },] }
    ];
    /** @nocollapse */
    CmacsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsDropdownDirective;
}());
export { CmacsDropdownDirective };
if (false) {
    /** @type {?} */
    CmacsDropdownDirective.prototype.el;
    /** @type {?} */
    CmacsDropdownDirective.prototype.hover$;
    /** @type {?} */
    CmacsDropdownDirective.prototype.$click;
    /** @type {?} */
    CmacsDropdownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9jbWFjcy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBdUJFLGdDQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbEJ0RSxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELFdBQU0sR0FBd0IsS0FBSyxDQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDcEQsQ0FBQztRQUNGLFdBQU0sR0FBd0IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQW5CLENBQW1CLEVBQUMsRUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNaLENBQUM7UUFXQSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQVZELDRDQUFXOzs7O0lBQVgsVUFBWSxRQUFpQjtRQUMzQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBUG1CLFVBQVU7Z0JBQUUsU0FBUzs7SUE4QnpDLDZCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F0Qlksc0JBQXNCOzs7SUFDakMsb0NBQWdEOztJQUNoRCx3Q0FHRTs7SUFDRix3Q0FHRTs7SUFVVSw0Q0FBNkI7Ozs7O0lBQUUsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ2NtYWNzRHJvcGRvd24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlIHtcclxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBob3ZlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBtZXJnZShcclxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8odHJ1ZSkpLFxyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXHJcbiAgKTtcclxuICAkY2xpY2s6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBmcm9tRXZlbnQodGhpcy5lbCwgJ2NsaWNrJykucGlwZShcclxuICAgIHRhcChlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpLFxyXG4gICAgbWFwVG8odHJ1ZSlcclxuICApO1xyXG5cclxuICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcsICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcclxuICB9XHJcbn1cclxuIl19