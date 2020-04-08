/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var CmacsCommentAvatarDirective = /** @class */ (function () {
    function CmacsCommentAvatarDirective() {
    }
    CmacsCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'div[cmacs-comment-avatar], cmacs-comment-avatar, [cmacs-comment-avatar]',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudHMvY21hY3MtY29tbWVudC1jZWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBQUE7SUFJMEMsQ0FBQzs7Z0JBSjFDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUVBQXlFO29CQUNuRixRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7SUFDeUMsa0NBQUM7Q0FBQSxBQUozQyxJQUkyQztTQUE5QiwyQkFBMkI7QUFFeEM7SUFBQTtJQUsyQyxDQUFDOztnQkFMM0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnREFBZ0Q7b0JBQzFELFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTtpQkFDOUM7O0lBQzBDLG1DQUFDO0NBQUEsQUFMNUMsSUFLNEM7U0FBL0IsNEJBQTRCO0FBRXpDO0lBSXFELDJEQUFlO0lBR2xFLHlDQUFZLHdCQUFrRCxFQUFFLGdCQUFrQztlQUNoRyxrQkFBTSx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsa0RBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzs7OztnQkEzQkMsd0JBQXdCO2dCQU94QixnQkFBZ0I7Ozt5Q0FzQmYsS0FBSzs7SUFjUixzQ0FBQztDQUFBLEFBbkJELENBSXFELGVBQWUsR0FlbkU7U0FmWSwrQkFBK0I7OztJQUMxQyxpRUFBdUQ7O0FBZ0J6RDtJQWVFLHFDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDO0lBSjFELHNCQUFJLGdEQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFJRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxzREFBc0Q7aUJBQ2pFOzs7O2dCQTVDQyxnQkFBZ0I7OztrQ0E4Q2YsU0FBUyxTQUFDLFdBQVc7O0lBWXhCLGtDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FiWSwyQkFBMkI7OztJQUN0QyxzREFBMkQ7Ozs7O0lBQzNELG9EQUFvRDs7Ozs7SUFNeEMsdURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2NtYWNzLWNvbW1lbnQtYXZhdGFyXSwgY21hY3MtY29tbWVudC1hdmF0YXIsIFtjbWFjcy1jb21tZW50LWF2YXRhcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50QXZhdGFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QXZhdGFyRGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbW1lbnQtY29udGVudCwgW2NtYWNzLWNvbW1lbnQtY29udGVudF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50Q29udGVudCcsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb250ZW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5hdHRhY2godGhpcy5jbWFjc0NvbW1lbnRBY3Rpb25Ib3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudC1hY3Rpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50QWN0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tbWVudEFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIGNvbnRlbnRQb3J0YWw6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50UG9ydGFsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmltcGxpY2l0Q29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICB9XHJcbn1cclxuIl19