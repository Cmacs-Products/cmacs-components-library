/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { menuServiceFactory, CmacsDropdownComponent } from './cmacs-dropdown.component';
import { CmacsDropdownDirective } from './cmacs-dropdown.directive';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
var ɵ0 = menuServiceFactory;
var CmacsDropdownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsDropdownButtonComponent, _super);
    function CmacsDropdownButtonComponent(cdr, cmacsMenuDropdownService, noAnimation) {
        var _this = _super.call(this, cdr, cmacsMenuDropdownService, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.size = 'default';
        _this.type = 'default';
        _this.cmacsClick = new EventEmitter();
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    CmacsDropdownButtonComponent.prototype.ngAfterContentInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.visible$);
    };
    CmacsDropdownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown-button',
                    exportAs: 'cmacsDropdownButton',
                    preserveWhitespaces: false,
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        CmacsMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: ɵ0,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" cmacs-dropdown>\r\n  <button cmacs-button\r\n    type=\"button\"\r\n    [disabled]=\"disabled\"\r\n    [type]=\"type\"\r\n    [size]=\"size\"\r\n    (click)=\"cmacsClick.emit($event)\">\r\n    <span><ng-content></ng-content></span>\r\n  </button>\r\n  <button cmacs-button\r\n    type=\"button\"\r\n    class=\"ant-dropdown-trigger\"\r\n    [type]=\"type\"\r\n    [size]=\"size\"\r\n    [disabled]=\"disabled\"\r\n    (click)=\"setVisibleStateWhen(true,'click')\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <i nz-icon type=\"ellipsis\"></i>\r\n  </button>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropDownDirective\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"visible\">\r\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+ placement}}\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <ng-content select=\"[nz-menu]\"></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: ["\n      cmacs-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CmacsMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsDropdownButtonComponent.propDecorators = {
        size: [{ type: Input }],
        type: [{ type: Input }],
        cmacsClick: [{ type: Output }],
        cmacsDropDownDirective: [{ type: ViewChild, args: [CmacsDropdownDirective,] }]
    };
    return CmacsDropdownButtonComponent;
}(CmacsDropdownComponent));
export { CmacsDropdownButtonComponent };
if (false) {
    /** @type {?} */
    CmacsDropdownButtonComponent.prototype.size;
    /** @type {?} */
    CmacsDropdownButtonComponent.prototype.type;
    /** @type {?} */
    CmacsDropdownButtonComponent.prototype.cmacsClick;
    /** @type {?} */
    CmacsDropdownButtonComponent.prototype.cmacsDropDownDirective;
    /** @type {?} */
    CmacsDropdownButtonComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vY21hY3MtZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGlDQUFpQyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7U0FhdkQsa0JBQWtCO0FBWHBDO0lBa0NrRCx3REFBc0I7SUFNdEUsc0NBQ0UsR0FBc0IsRUFDdEIsd0JBQWtELEVBQ3ZCLFdBQW9DO1FBSGpFLFlBS0Usa0JBQU0sR0FBRyxFQUFFLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxTQUNsRDtRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSeEQsVUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixVQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ1AsZ0JBQVUsR0FBRSxJQUFJLFlBQVksRUFBYyxDQUFDOztJQVM5RCxDQUFDO0lBRUQsaUNBQWlDOzs7OztJQUNqQyx5REFBa0I7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4Qjs0QkFDRSxPQUFPLEVBQUUsaUNBQWlDOzRCQUMxQyxVQUFVLElBQW9COzRCQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQy9CO3FCQUNGO29CQUNELDBrREFBcUQ7NkJBRW5ELCtSQWNDO2lCQUVKOzs7O2dCQXREQyxpQkFBaUI7Z0JBbUJWLHdCQUF3QjtnQkFKd0Isc0JBQXNCLHVCQWlEMUUsSUFBSSxZQUFJLFFBQVE7Ozt1QkFSbEIsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07eUNBQ04sU0FBUyxTQUFDLHNCQUFzQjs7SUFjbkMsbUNBQUM7Q0FBQSxBQXBERCxDQWtDa0Qsc0JBQXNCLEdBa0J2RTtTQWxCWSw0QkFBNEI7OztJQUN2Qyw0Q0FBMEI7O0lBQzFCLDRDQUEwQjs7SUFDMUIsa0RBQThEOztJQUM5RCw4REFBa0Y7O0lBS2hGLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2VsZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHNsaWRlTW90aW9uLCBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWVudVNlcnZpY2VGYWN0b3J5LCBDbWFjc0Ryb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRyb3Bkb3duLWJ1dHRvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Ryb3Bkb3duQnV0dG9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kcm9wZG93bi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEcm9wZG93bkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIENtYWNzRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgc2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSB0eXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0NsaWNrPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlKSBjbWFjc0Ryb3BEb3duRGlyZWN0aXZlOiBDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBjbWFjc01lbnVEcm9wZG93blNlcnZpY2U6IENtYWNzTWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBjbWFjc01lbnVEcm9wZG93blNlcnZpY2UsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhcnRTdWJzY3JpYmUodGhpcy52aXNpYmxlJCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==