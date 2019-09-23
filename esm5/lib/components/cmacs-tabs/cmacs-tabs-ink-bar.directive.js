/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var CmacsTabsInkBarDirective = /** @class */ (function () {
    function CmacsTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animated = false;
        this.positionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.alignToElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function () { return _this.setStyles(element); }));
            }));
        }
        else {
            this.setStyles(element);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.setStyles = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** when horizontal remove height style and add transform left **/
        if (this.positionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.getLeftPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.getElementWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.getTopPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CmacsTabsInkBarDirective.prototype.getElementHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    CmacsTabsInkBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-tabs-ink-bar]',
                    exportAs: 'cmacsTabsInkBar',
                    host: {
                        '[class.ant-tabs-ink-bar-animated]': 'animated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!animated'
                    },
                },] }
    ];
    /** @nocollapse */
    CmacsTabsInkBarDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    CmacsTabsInkBarDirective.propDecorators = {
        animated: [{ type: Input }],
        positionMode: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTabsInkBarDirective.prototype, "animated", void 0);
    return CmacsTabsInkBarDirective;
}());
export { CmacsTabsInkBarDirective };
if (false) {
    /** @type {?} */
    CmacsTabsInkBarDirective.prototype.animated;
    /** @type {?} */
    CmacsTabsInkBarDirective.prototype.positionMode;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsInkBarDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsInkBarDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsInkBarDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFicy9jbWFjcy10YWJzLWluay1iYXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlsRDtJQWFFLGtDQUFvQixRQUFtQixFQUFVLFVBQXNCLEVBQVUsTUFBYztRQUEzRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKdEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQyxpQkFBWSxHQUFvQixZQUFZLENBQUM7UUFHcEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsT0FBb0I7UUFBbkMsaUJBUUM7UUFQQyxJQUFJLE9BQU8scUJBQXFCLEtBQUssV0FBVyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQztnQkFDNUIscUJBQXFCOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztZQUN2RCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsT0FBb0I7UUFDNUIsa0VBQWtFO1FBQ2xFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsaUJBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWEsQ0FDMUQsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLDhEQUE4RDtZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFdBQVcsRUFDWCxzQkFBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBUSxDQUN6RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxrREFBZTs7OztJQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsa0RBQWU7Ozs7SUFBZixVQUFnQixPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRTt3QkFDSixtQ0FBbUMsRUFBRSxVQUFVO3dCQUMvQyxzQ0FBc0MsRUFBRSxXQUFXO3FCQUNwRDtpQkFDRjs7OztnQkFiOEMsU0FBUztnQkFBcEMsVUFBVTtnQkFBUyxNQUFNOzs7MkJBZTFDLEtBQUs7K0JBRUwsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7OzhEQUFrQjtJQXVENUMsK0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQXhEWSx3QkFBd0I7OztJQUNuQyw0Q0FBMEM7O0lBRTFDLGdEQUFzRDs7Ozs7SUFFMUMsNENBQTJCOzs7OztJQUFFLDhDQUE4Qjs7Ozs7SUFBRSwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9jbWFjcy10YWJzZXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXRhYnMtaW5rLWJhcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWJzSW5rQmFyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWRdJzogJ2FuaW1hdGVkJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1uby1hbmltYXRlZF0nOiAnIWFuaW1hdGVkJ1xyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbk1vZGU6IFRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJzLWluay1iYXInKTtcclxuICB9XHJcblxyXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNldFN0eWxlcyhlbGVtZW50KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB3aGVuIGhvcml6b250YWwgcmVtb3ZlIGhlaWdodCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSBsZWZ0ICoqL1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgke3RoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4LCAwcHgpYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0aGlzLmdldEVsZW1lbnRXaWR0aChlbGVtZW50KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiogd2hlbiB2ZXJ0aWNhbCByZW1vdmUgd2lkdGggc3R5bGUgYW5kIGFkZCB0cmFuc2Zvcm0gdG9wICoqL1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICBgdHJhbnNsYXRlM2QoMHB4LCAke3RoaXMuZ2V0VG9wUG9zaXRpb24oZWxlbWVudCl9LCAwcHgpYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5nZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCcgOiAnMCc7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JyA6ICcwJztcclxuICB9XHJcblxyXG4gIGdldFRvcFBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyA6ICcwJztcclxuICB9XHJcbn1cclxuIl19