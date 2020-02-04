/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNotNil, zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from "../cmacs-tooltip/cmacs-tooltip.component";
var CmacsPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsPopoverComponent, _super);
    function CmacsPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    CmacsPopoverComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isTitleEmpty = this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
        /** @type {?} */
        var isContentEmpty = this.content instanceof TemplateRef ? false : this.content === '' || !isNotNil(this.content);
        return isTitleEmpty && isContentEmpty;
    };
    CmacsPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-popover',
                    exportAs: 'cmacsPopoverComponent',
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n          </div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".ant-popover-inner-content{max-width:226px;min-height:82px;max-height:190px;color:#97a0ae;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.83;letter-spacing:normal;overflow-y:auto}.ant-popover-title{max-width:226px;color:#656c79;font-family:Roboto-Medium;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.167em;letter-spacing:normal;padding:7px 16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-popover-title i{font-size:14px;top:1px;position:relative}.ant-popover-content{border:1px solid #dee0e5}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}", "\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsPopoverComponent.propDecorators = {
        title: [{ type: Input }, { type: ContentChild, args: ['neverUsedTemplate',] }],
        content: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }]
    };
    return CmacsPopoverComponent;
}(CmacsTooltipComponent));
export { CmacsPopoverComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXBvcG92ZXIvY21hY3MtcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRjtJQWlCMkMsaURBQXFCO0lBTzlELCtCQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQW5HLFlBQ0Usa0JBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxTQUN4QjtRQUY4RCxpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFObkcsYUFBTyxHQUFHLHVCQUF1QixDQUFDOztJQVFsQyxDQUFDOzs7OztJQUVTLDhDQUFjOzs7O0lBQXhCOztZQUNRLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztZQUNyRyxjQUFjLEdBQ2xCLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUYsT0FBTyxZQUFZLElBQUksY0FBYyxDQUFDO0lBQ3hDLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDM0IsZ3ZDQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO216QkFHeEIsb0VBSUM7aUJBRUo7Ozs7Z0JBN0JDLGlCQUFpQjtnQkFVZSxzQkFBc0IsdUJBMkJqQixJQUFJLFlBQUksUUFBUTs7O3dCQUhwRCxLQUFLLFlBQUksWUFBWSxTQUFDLG1CQUFtQjswQkFDekMsS0FBSyxZQUFJLFlBQVksU0FBQyxZQUFZOztJQVlyQyw0QkFBQztDQUFBLEFBbENELENBaUIyQyxxQkFBcUIsR0FpQi9EO1NBakJZLHFCQUFxQjs7O0lBQ2hDLHdDQUFrQzs7Ozs7SUFHbEMsc0NBQThFOztJQUM5RSx3Q0FBeUU7O0lBRXJDLDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgem9vbUJpZ01vdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7Q21hY3NUb29sdGlwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtcG9wb3ZlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1BvcG92ZXJDb21wb25lbnQnLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1wb3BvdmVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1wb3BvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1BvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBDbWFjc1Rvb2x0aXBDb21wb25lbnQge1xyXG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcclxuXHJcbiAgLyoqIFVzZWQgdG8gcmVtb3ZlIE56VG9vbFRpcENvbXBvbmVudCBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgKi9cclxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNDb250ZW50RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc1RpdGxlRW1wdHkgPSB0aGlzLnRpdGxlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMudGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLnRpdGxlKTtcclxuICAgIGNvbnN0IGlzQ29udGVudEVtcHR5ID1cclxuICAgICAgdGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMuY29udGVudCA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMuY29udGVudCk7XHJcbiAgICByZXR1cm4gaXNUaXRsZUVtcHR5ICYmIGlzQ29udGVudEVtcHR5O1xyXG4gIH1cclxufVxyXG4iXX0=