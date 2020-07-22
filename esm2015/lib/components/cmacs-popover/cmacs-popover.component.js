/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNotNil, zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from "../cmacs-tooltip/cmacs-tooltip.component";
export class CmacsPopoverComponent extends CmacsTooltipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
    }
    /**
     * @protected
     * @return {?}
     */
    isContentEmpty() {
        /** @type {?} */
        const isTitleEmpty = this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
        /** @type {?} */
        const isContentEmpty = this.content instanceof TemplateRef ? false : this.content === '' || !isNotNil(this.content);
        return isTitleEmpty && isContentEmpty;
    }
}
CmacsPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-popover',
                exportAs: 'cmacsPopoverComponent',
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n          </div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".ant-popover-inner-content{max-width:226px;min-height:82px;max-height:190px;color:#97a0ae;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.83;letter-spacing:normal;overflow-y:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.ant-popover-title{max-width:226px;color:#656c79;font-family:Roboto-Medium;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.167em;letter-spacing:normal;padding:7px 16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-popover-title i{font-size:14px;top:1px;position:relative}.ant-popover-content{border:1px solid #dee0e5}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}", `
      .ant-popover {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsPopoverComponent.propDecorators = {
    title: [{ type: Input }, { type: ContentChild, args: ['neverUsedTemplate',] }],
    content: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }]
};
if (false) {
    /** @type {?} */
    CmacsPopoverComponent.prototype._prefix;
    /**
     * Used to remove NzToolTipComponent \@ContentChild('nzTemplate')
     * @type {?}
     */
    CmacsPopoverComponent.prototype.title;
    /** @type {?} */
    CmacsPopoverComponent.prototype.content;
    /** @type {?} */
    CmacsPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXBvcG92ZXIvY21hY3MtcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBbUJoRixNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXFCOzs7OztJQU85RCxZQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQ2pHLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEcUMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBTm5HLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztJQVFsQyxDQUFDOzs7OztJQUVTLGNBQWM7O2NBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztjQUNyRyxjQUFjLEdBQ2xCLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUYsT0FBTyxZQUFZLElBQUksY0FBYyxDQUFDO0lBQ3hDLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsZ3ZDQUE2QztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzQyQkFHeEI7Ozs7S0FJQzthQUVKOzs7O1lBN0JDLGlCQUFpQjtZQVVlLHNCQUFzQix1QkEyQmpCLElBQUksWUFBSSxRQUFROzs7b0JBSHBELEtBQUssWUFBSSxZQUFZLFNBQUMsbUJBQW1CO3NCQUN6QyxLQUFLLFlBQUksWUFBWSxTQUFDLFlBQVk7Ozs7SUFKbkMsd0NBQWtDOzs7OztJQUdsQyxzQ0FBOEU7O0lBQzlFLHdDQUF5RTs7SUFFckMsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCB6b29tQmlnTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtDbWFjc1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tIFwiLi4vY21hY3MtdG9vbHRpcC9jbWFjcy10b29sdGlwLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1wb3BvdmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzUG9wb3ZlckNvbXBvbmVudCcsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXBvcG92ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXBvcG92ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIENtYWNzVG9vbHRpcENvbXBvbmVudCB7XHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG5cclxuICAvKiogVXNlZCB0byByZW1vdmUgTnpUb29sVGlwQ29tcG9uZW50IEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSAqL1xyXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ25ldmVyVXNlZFRlbXBsYXRlJykgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzVGl0bGVFbXB0eSA9IHRoaXMudGl0bGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy50aXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMudGl0bGUpO1xyXG4gICAgY29uc3QgaXNDb250ZW50RW1wdHkgPVxyXG4gICAgICB0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy5jb250ZW50ID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5jb250ZW50KTtcclxuICAgIHJldHVybiBpc1RpdGxlRW1wdHkgJiYgaXNDb250ZW50RW1wdHk7XHJcbiAgfVxyXG59XHJcbiJdfQ==