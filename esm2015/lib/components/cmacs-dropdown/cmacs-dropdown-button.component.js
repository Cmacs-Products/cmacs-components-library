/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { menuServiceFactory, CmacsDropdownComponent } from './cmacs-dropdown.component';
import { CmacsDropdownDirective } from './cmacs-dropdown.directive';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
const ɵ0 = menuServiceFactory;
export class CmacsDropdownButtonComponent extends CmacsDropdownComponent {
    /**
     * @param {?} cdr
     * @param {?} cmacsMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, cmacsMenuDropdownService, noAnimation) {
        super(cdr, cmacsMenuDropdownService, noAnimation);
        this.noAnimation = noAnimation;
        this.size = 'default';
        this.type = 'default';
        this.cmacsClick = new EventEmitter();
    }
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(this.visible$);
    }
}
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
                styles: [`
      cmacs-dropdown-button {
        position: relative;
        display: inline-block;
      }

      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsDropdownButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CmacsMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsDropdownButtonComponent.propDecorators = {
    size: [{ type: Input }],
    type: [{ type: Input }],
    cmacsClick: [{ type: Output }],
    cmacsDropDownDirective: [{ type: ViewChild, args: [CmacsDropdownDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vY21hY3MtZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztXQWF2RCxrQkFBa0I7QUF1QnBDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFBc0I7Ozs7OztJQU10RSxZQUNFLEdBQXNCLEVBQ3RCLHdCQUFrRCxFQUN2QixXQUFvQztRQUUvRCxLQUFLLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRnZCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVJ4RCxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDUCxlQUFVLEdBQUUsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQVM5RCxDQUFDOzs7OztJQUdELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1Qsd0JBQXdCO29CQUN4Qjt3QkFDRSxPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxVQUFVLElBQW9CO3dCQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQUNELDBrREFBcUQ7eUJBRW5EOzs7Ozs7Ozs7Ozs7OztLQWNDO2FBRUo7Ozs7WUF0REMsaUJBQWlCO1lBbUJWLHdCQUF3QjtZQUp3QixzQkFBc0IsdUJBaUQxRSxJQUFJLFlBQUksUUFBUTs7O21CQVJsQixLQUFLO21CQUNMLEtBQUs7eUJBQ0wsTUFBTTtxQ0FDTixTQUFTLFNBQUMsc0JBQXNCOzs7O0lBSGpDLDRDQUEwQjs7SUFDMUIsNENBQTBCOztJQUMxQixrREFBOEQ7O0lBQzlELDhEQUFrRjs7SUFLaEYsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24sIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtZW51U2VydmljZUZhY3RvcnksIENtYWNzRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzTWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vY21hY3MtbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZHJvcGRvd24tYnV0dG9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzRHJvcGRvd25CdXR0b24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzTWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBtZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ21hY3NEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQ2xpY2s9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAVmlld0NoaWxkKENtYWNzRHJvcGRvd25EaXJlY3RpdmUpIGNtYWNzRHJvcERvd25EaXJlY3RpdmU6IENtYWNzRHJvcGRvd25EaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGNtYWNzTWVudURyb3Bkb3duU2VydmljZTogQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIGNtYWNzTWVudURyb3Bkb3duU2VydmljZSwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqIHJld3JpdGUgYWZ0ZXJWaWV3SW5pdCBob29rICovXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGFydFN1YnNjcmliZSh0aGlzLnZpc2libGUkKTtcclxuICB9XHJcbn1cclxuIl19