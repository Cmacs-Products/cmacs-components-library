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
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var CmacsCommentAvatarDirective = /** @class */ (function () {
    function CmacsCommentAvatarDirective() {
    }
    CmacsCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[cmacs-comment-avatar]',
                    exportAs: 'cmacsCommentAvatar'
                },] }
    ];
    return CmacsCommentAvatarDirective;
}());
export { CmacsCommentAvatarDirective };
var CmacsCommentContentDirective = /** @class */ (function () {
    function CmacsCommentContentDirective() {
    }
    CmacsCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'cmacs-comment-content, [cmacs-comment-content]',
                    exportAs: 'cmacsCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                },] }
    ];
    return CmacsCommentContentDirective;
}());
export { CmacsCommentContentDirective };
var CmacsCommentActionHostDirective = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsCommentActionHostDirective, _super);
    function CmacsCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    CmacsCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.attach(this.cmacsCommentActionHost);
    };
    /**
     * @return {?}
     */
    CmacsCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    CmacsCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsCommentActionHost]',
                    exportAs: 'cmacsCommentActionHost'
                },] }
    ];
    /** @nocollapse */
    CmacsCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    CmacsCommentActionHostDirective.propDecorators = {
        cmacsCommentActionHost: [{ type: Input }]
    };
    return CmacsCommentActionHostDirective;
}(CdkPortalOutlet));
export { CmacsCommentActionHostDirective };
if (false) {
    /** @type {?} */
    CmacsCommentActionHostDirective.prototype.cmacsCommentActionHost;
}
var CmacsCommentActionComponent = /** @class */ (function () {
    function CmacsCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(CmacsCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    CmacsCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-comment-action',
                    exportAs: 'cmacsCommentAction',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    CmacsCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CmacsCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return CmacsCommentActionComponent;
}());
export { CmacsCommentActionComponent };
if (false) {
    /** @type {?} */
    CmacsCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    CmacsCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    CmacsCommentActionComponent.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudHMvY21hY3MtY29tbWVudC1jZWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO0lBSTBDLENBQUM7O2dCQUoxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7O0lBQ3lDLGtDQUFDO0NBQUEsQUFKM0MsSUFJMkM7U0FBOUIsMkJBQTJCO0FBRXhDO0lBQUE7SUFLMkMsQ0FBQzs7Z0JBTDNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO29CQUMxRCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUU7aUJBQzlDOztJQUMwQyxtQ0FBQztDQUFBLEFBTDVDLElBSzRDO1NBQS9CLDRCQUE0QjtBQUV6QztJQUlxRCwyREFBZTtJQUdsRSx5Q0FBWSx3QkFBa0QsRUFBRSxnQkFBa0M7ZUFDaEcsa0JBQU0sd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHFEQUFXOzs7SUFBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBM0JDLHdCQUF3QjtnQkFPeEIsZ0JBQWdCOzs7eUNBc0JmLEtBQUs7O0lBY1Isc0NBQUM7Q0FBQSxBQW5CRCxDQUlxRCxlQUFlLEdBZW5FO1NBZlksK0JBQStCOzs7SUFDMUMsaUVBQXVEOztBQWdCekQ7SUFlRSxxQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOOUMsa0JBQWEsR0FBMEIsSUFBSSxDQUFDO0lBTUssQ0FBQztJQUoxRCxzQkFBSSxnREFBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBSUQsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsc0RBQXNEO2lCQUNqRTs7OztnQkE1Q0MsZ0JBQWdCOzs7a0NBOENmLFNBQVMsU0FBQyxXQUFXOztJQVl4QixrQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBYlksMkJBQTJCOzs7SUFDdEMsc0RBQTJEOzs7OztJQUMzRCxvREFBb0Q7Ozs7O0lBTXhDLHVEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyW2NtYWNzLWNvbW1lbnQtYXZhdGFyXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBdmF0YXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRBdmF0YXJEaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudC1jb250ZW50LCBbY21hY3MtY29tbWVudC1jb250ZW50XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRDb250ZW50JyxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LWNvbW1lbnQtY29udGVudC1kZXRhaWwnIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tbWVudENvbnRlbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzQ29tbWVudEFjdGlvbkhvc3RdJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tbWVudEFjdGlvbkhvc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNtYWNzQ29tbWVudEFjdGlvbkhvc3Q6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLmF0dGFjaCh0aGlzLmNtYWNzQ29tbWVudEFjdGlvbkhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21tZW50LWFjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBY3Rpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBpbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=