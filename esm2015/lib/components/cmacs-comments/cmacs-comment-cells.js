/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
export class CmacsCommentAvatarDirective {
}
CmacsCommentAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'div[cmacs-comment-avatar], cmacs-comment-avatar, [cmacs-comment-avatar]',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudHMvY21hY3MtY29tbWVudC1jZWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFNdkIsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUVBQXlFO2dCQUNuRixRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztBQVFELE1BQU0sT0FBTyw0QkFBNEI7OztZQUx4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdEQUFnRDtnQkFDMUQsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO2FBQzlDOztBQU9ELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxlQUFlOzs7OztJQUdsRSxZQUFZLHdCQUFrRCxFQUFFLGdCQUFrQztRQUNoRyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQTNCQyx3QkFBd0I7WUFPeEIsZ0JBQWdCOzs7cUNBc0JmLEtBQUs7Ozs7SUFBTixpRUFBdUQ7O0FBdUJ6RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBUXRDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTjlDLGtCQUFhLEdBQTBCLElBQUksQ0FBQztJQU1LLENBQUM7Ozs7SUFKMUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0RBQXNEO2FBQ2pFOzs7O1lBNUNDLGdCQUFnQjs7OzhCQThDZixTQUFTLFNBQUMsV0FBVzs7OztJQUF0QixzREFBMkQ7Ozs7O0lBQzNELG9EQUFvRDs7Ozs7SUFNeEMsdURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2NtYWNzLWNvbW1lbnQtYXZhdGFyXSwgY21hY3MtY29tbWVudC1hdmF0YXIsIFtjbWFjcy1jb21tZW50LWF2YXRhcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50QXZhdGFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QXZhdGFyRGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbW1lbnQtY29udGVudCwgW2NtYWNzLWNvbW1lbnQtY29udGVudF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50Q29udGVudCcsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb250ZW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5hdHRhY2godGhpcy5jbWFjc0NvbW1lbnRBY3Rpb25Ib3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudC1hY3Rpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50QWN0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tbWVudEFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIGNvbnRlbnRQb3J0YWw6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50UG9ydGFsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmltcGxpY2l0Q29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICB9XHJcbn1cclxuIl19