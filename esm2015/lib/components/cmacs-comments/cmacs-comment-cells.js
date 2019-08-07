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
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
export class CmacsCommentAvatarDirective {
}
CmacsCommentAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-avatar[cmacs-comment-avatar]',
                exportAs: 'cmacsCommentAvatar'
            },] }
];
export class CmacsCommentContentDirective {
}
CmacsCommentContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'cmacs-comment-content, [cmacs-comment-content]',
                exportAs: 'cmacsCommentContent',
                host: { class: 'ant-comment-content-detail' }
            },] }
];
export class CmacsCommentActionHostDirective extends CdkPortalOutlet {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     */
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.attach(this.cmacsCommentActionHost);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
CmacsCommentActionHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cmacsCommentActionHost]',
                exportAs: 'cmacsCommentActionHost'
            },] }
];
/** @nocollapse */
CmacsCommentActionHostDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
CmacsCommentActionHostDirective.propDecorators = {
    cmacsCommentActionHost: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsCommentActionHostDirective.prototype.cmacsCommentActionHost;
}
export class CmacsCommentActionComponent {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    /**
     * @return {?}
     */
    get content() {
        return this.contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
}
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
CmacsCommentActionComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
CmacsCommentActionComponent.propDecorators = {
    implicitContent: [{ type: ViewChild, args: [TemplateRef,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudHMvY21hY3MtY29tbWVudC1jZWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7QUFRRCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFMeEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBQzFELFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTthQUM5Qzs7QUFPRCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsZUFBZTs7Ozs7SUFHbEUsWUFBWSx3QkFBa0QsRUFBRSxnQkFBa0M7UUFDaEcsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUEzQkMsd0JBQXdCO1lBT3hCLGdCQUFnQjs7O3FDQXNCZixLQUFLOzs7O0lBQU4saUVBQXVEOztBQXVCekQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVF0QyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDOzs7O0lBSjFELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLHNEQUFzRDthQUNqRTs7OztZQTVDQyxnQkFBZ0I7Ozs4QkE4Q2YsU0FBUyxTQUFDLFdBQVc7Ozs7SUFBdEIsc0RBQTJEOzs7OztJQUMzRCxvREFBb0Q7Ozs7O0lBTXhDLHVEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyW2NtYWNzLWNvbW1lbnQtYXZhdGFyXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBdmF0YXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRBdmF0YXJEaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudC1jb250ZW50LCBbY21hY3MtY29tbWVudC1jb250ZW50XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRDb250ZW50JyxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LWNvbW1lbnQtY29udGVudC1kZXRhaWwnIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tbWVudENvbnRlbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzQ29tbWVudEFjdGlvbkhvc3RdJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tbWVudEFjdGlvbkhvc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNtYWNzQ29tbWVudEFjdGlvbkhvc3Q6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLmF0dGFjaCh0aGlzLmNtYWNzQ29tbWVudEFjdGlvbkhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21tZW50LWFjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBY3Rpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBpbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=