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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideMotion } from 'ng-zorro-antd/core';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
var CmacsDropdownContextComponent = /** @class */ (function () {
    function CmacsDropdownContextComponent(cdr) {
        this.cdr = cdr;
        this.open = true;
        this.dropDownPosition = 'bottom';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.init = /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    function (open, templateRef, positionChanges, control) {
        var _this = this;
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.dispose();
        }
    };
    // TODO auto set dropdown class after the bug resolved
    /** https://github.com/angular/angular/issues/14842 **/
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.ngOnDestroy = 
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown-context',
                    exportAs: 'cmacsDropdownContext',
                    animations: [slideMotion],
                    preserveWhitespaces: false,
                    template: "<div *ngIf=\"open\"\r\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\r\n  [@slideMotion]=\"dropDownPosition\"\r\n  (@slideMotion.done)=\"afterAnimation()\">\r\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CmacsMenuDropdownService],
                    styles: ["\n      cmacs-dropdown-context {\n        display: block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownContextComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return CmacsDropdownContextComponent;
}());
export { CmacsDropdownContextComponent };
if (false) {
    /** @type {?} */
    CmacsDropdownContextComponent.prototype.open;
    /** @type {?} */
    CmacsDropdownContextComponent.prototype.templateRef;
    /** @type {?} */
    CmacsDropdownContextComponent.prototype.dropDownPosition;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownContextComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownContextComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownContextComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duL2NtYWNzLWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUEyREUsdUNBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEMxQyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVoscUJBQWdCLEdBQXFCLFFBQVEsQ0FBQztRQUV0QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQTRCWSxDQUFDOzs7Ozs7OztJQTFCOUMsNENBQUk7Ozs7Ozs7SUFBSixVQUNFLElBQWEsRUFDYixXQUE4QixFQUM5QixlQUEyRCxFQUMzRCxPQUE2QjtRQUovQixpQkFhQztRQVBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDM0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw2Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBSUQsc0RBQXNEO0lBQ3RELHVEQUF1RDs7Ozs7O0lBQ3ZELG1EQUFXOzs7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDekIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsbVFBQXNEO29CQUN0RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDOzZCQUVuQyw0UEFhQztpQkFFSjs7OztnQkF2Q0MsaUJBQWlCOztJQWlGbkIsb0NBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQXpDWSw2QkFBNkI7OztJQUN4Qyw2Q0FBWTs7SUFDWixvREFBK0I7O0lBQy9CLHlEQUE4Qzs7Ozs7SUFDOUMsZ0RBQXNDOzs7OztJQUN0QyxpREFBaUM7Ozs7O0lBNEJyQiw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRyb3Bkb3duLWNvbnRleHQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEcm9wZG93bkNvbnRleHQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtZHJvcGRvd24tY29udGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEcm9wZG93bkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG9wZW4gPSB0cnVlO1xyXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgcHJpdmF0ZSBjb250cm9sOiBDbWFjc0Ryb3Bkb3duU2VydmljZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaW5pdChcclxuICAgIG9wZW46IGJvb2xlYW4sXHJcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sXHJcbiAgICBwb3NpdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8Q29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlPixcclxuICAgIGNvbnRyb2w6IENtYWNzRHJvcGRvd25TZXJ2aWNlXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgIHBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBkYXRhLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcGVuKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxyXG4gIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDg0MiAqKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=