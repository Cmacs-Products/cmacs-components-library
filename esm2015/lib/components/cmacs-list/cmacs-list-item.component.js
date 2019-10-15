/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CmacsListItemMetaComponent } from './cmacs-list-item-meta.component';
export class CmacsListItemComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.actions = [];
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-list-item');
    }
}
CmacsListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-list-item',
                exportAs: 'cmacsListItem',
                template: "<ng-template #contentTpl>\r\n  <div *ngIf=\"content\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #actionsTpl>\r\n  <ul *ngIf=\"actions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of actions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #mainTpl>\r\n  <ng-content></ng-content>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<div *ngIf=\"extra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\r\n  </div>\r\n</div>\r\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CmacsListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CmacsListItemComponent.propDecorators = {
    metas: [{ type: ContentChildren, args: [CmacsListItemMetaComponent,] }],
    actions: [{ type: Input }],
    content: [{ type: Input }],
    extra: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsListItemComponent.prototype.metas;
    /** @type {?} */
    CmacsListItemComponent.prototype.actions;
    /** @type {?} */
    CmacsListItemComponent.prototype.content;
    /** @type {?} */
    CmacsListItemComponent.prototype.extra;
    /** @type {?} */
    CmacsListItemComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsListItemComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbGlzdC9jbWFjcy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFVOUUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFNakMsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUo3RCxZQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUs5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwbkNBQStDO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFqQkMsVUFBVTtZQUdWLFNBQVM7OztvQkFnQlIsZUFBZSxTQUFDLDBCQUEwQjtzQkFDMUMsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFITix1Q0FBMkY7O0lBQzNGLHlDQUFnRDs7SUFDaEQseUNBQTZDOztJQUM3Qyx1Q0FBa0M7O0lBRXRCLDRDQUE2Qjs7Ozs7SUFBRSwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RJdGVtQ29tcG9uZW50IHtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzTGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxDbWFjc0xpc3RJdGVtTWV0YUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xyXG4gIH1cclxufVxyXG4iXX0=