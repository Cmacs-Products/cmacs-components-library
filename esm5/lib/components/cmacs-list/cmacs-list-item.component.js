/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CmacsListItemMetaComponent } from './cmacs-list-item-meta.component';
var CmacsListItemComponent = /** @class */ (function () {
    function CmacsListItemComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.actions = [];
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-list-item');
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
    CmacsListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CmacsListItemComponent.propDecorators = {
        metas: [{ type: ContentChildren, args: [CmacsListItemMetaComponent,] }],
        actions: [{ type: Input }],
        content: [{ type: Input }],
        extra: [{ type: Input }]
    };
    return CmacsListItemComponent;
}());
export { CmacsListItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbGlzdC9jbWFjcy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFOUU7SUFjRSxnQ0FBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUo3RCxZQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUs5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QiwwbkNBQStDO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWpCQyxVQUFVO2dCQUdWLFNBQVM7Ozt3QkFnQlIsZUFBZSxTQUFDLDBCQUEwQjswQkFDMUMsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBS1IsNkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVRZLHNCQUFzQjs7O0lBQ2pDLHVDQUEyRjs7SUFDM0YseUNBQWdEOztJQUNoRCx5Q0FBNkM7O0lBQzdDLHVDQUFrQzs7SUFFdEIsNENBQTZCOzs7OztJQUFFLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0xpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1pdGVtJyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdEl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1Db21wb25lbnQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzITogUXVlcnlMaXN0PENtYWNzTGlzdEl0ZW1NZXRhQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBleHRyYTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==