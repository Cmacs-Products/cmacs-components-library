/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CmacsBreadcrumbComponent } from './cmacs-breadcrumb.component';
var CmacsBreadcrumbItemComponent = /** @class */ (function () {
    function CmacsBreadcrumbItemComponent(cmacsBreadcrumbComponent) {
        this.cmacsBreadcrumbComponent = cmacsBreadcrumbComponent;
    }
    CmacsBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-breadcrumb-item',
                    exportAs: 'cmacsBreadcrumbItem',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</span>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"cmacsBreadcrumbComponent.cmacsSeparator\">\r\n    {{ cmacsBreadcrumbComponent.cmacsSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                    styles: ["cmacs-breadcrumb-item{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#acb3bf}a:hover{text-decoration:underline}", "\n      cmacs-breadcrumb-item:last-child {\n        color: #656c79;\n      }\n\n      cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: CmacsBreadcrumbComponent }
    ]; };
    return CmacsBreadcrumbItemComponent;
}());
export { CmacsBreadcrumbItemComponent };
if (false) {
    /** @type {?} */
    CmacsBreadcrumbItemComponent.prototype.cmacsBreadcrumbComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnJlYWRjcnVtYi9jbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXRFO0lBcUJFLHNDQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7O2dCQXJCMUUsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsMlRBQW1EOzZPQUdqRCwyTEFRQztpQkFFSjs7OztnQkFyQk8sd0JBQXdCOztJQXdCaEMsbUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQUZZLDRCQUE0Qjs7O0lBQzNCLGdFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0NtYWNzQnJlYWRjcnVtYkNvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtYnJlYWRjcnVtYi1pdGVtJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnJlYWRjcnVtYkl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1icmVhZGNydW1iLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgY29sb3I6ICM2NTZjNzk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNtYWNzLWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0JyZWFkY3J1bWJJdGVtQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY21hY3NCcmVhZGNydW1iQ29tcG9uZW50OiBDbWFjc0JyZWFkY3J1bWJDb21wb25lbnQpIHt9XHJcbn1cclxuIl19