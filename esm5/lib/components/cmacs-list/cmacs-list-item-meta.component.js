/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
var CmacsListItemMetaComponent = /** @class */ (function () {
    function CmacsListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(CmacsListItemMetaComponent.prototype, "avatar", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CmacsListItemMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-list-item-meta',
                    exportAs: 'cmacsListItemMeta',
                    template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"title || description\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"title\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"description\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    CmacsListItemMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CmacsListItemMetaComponent.propDecorators = {
        avatar: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }]
    };
    return CmacsListItemMetaComponent;
}());
export { CmacsListItemMetaComponent };
if (false) {
    /** @type {?} */
    CmacsListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    CmacsListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    CmacsListItemMetaComponent.prototype.title;
    /** @type {?} */
    CmacsListItemMetaComponent.prototype.description;
    /** @type {?} */
    CmacsListItemMetaComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsListItemMetaComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1saXN0L2NtYWNzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTBCRSxvQ0FBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpCdEUsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQWtCYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQWhCRCxzQkFDSSw4Q0FBTTs7Ozs7UUFEVixVQUNXLEtBQWlDO1lBQzFDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsaXBCQUFvRDtvQkFDcEQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFkQyxVQUFVO2dCQUVWLFNBQVM7Ozt5QkFpQlIsS0FBSzt3QkFVTCxLQUFLOzhCQUVMLEtBQUs7O0lBS1IsaUNBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXJCWSwwQkFBMEI7OztJQUNyQywrQ0FBZTs7SUFDZiwrQ0FBNkI7O0lBWTdCLDJDQUEyQzs7SUFFM0MsaURBQWlEOztJQUVyQyxnREFBNkI7Ozs7O0lBQUUsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbS1tZXRhJyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdEl0ZW1NZXRhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcclxuICBhdmF0YXJTdHIgPSAnJztcclxuICBhdmF0YXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLmF2YXRhclN0ciA9ICcnO1xyXG4gICAgICB0aGlzLmF2YXRhclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0tbWV0YScpO1xyXG4gIH1cclxufVxyXG4iXX0=