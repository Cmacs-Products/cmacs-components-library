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
                    template: "<div class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"cmacsBreadcrumbComponent.cmacsSeparator\">\r\n    {{ cmacsBreadcrumbComponent.cmacsSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                    styles: [".ant-breadcrumb-link a{color:#acb3bf}.ant-breadcrumb-link a:hover{text-decoration:underline;color:#2a7cff}.ant-breadcrumb-link{display:-ms-inline-grid;display:inline-grid;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ant-breadcrumb a{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}cmacs-breadcrumb-item:last-child,cmacs-breadcrumb-item:last-child .ant-breadcrumb-link{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;line-height:initial}", "\n      cmacs-breadcrumb-item:last-child {\n        color: #656c79;\n      }\n\n      cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnJlYWRjcnVtYi9jbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXRFO0lBcUJFLHNDQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7O2dCQXJCMUUsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIseVRBQW1EOzRqQkFHakQsMkxBUUM7aUJBRUo7Ozs7Z0JBckJPLHdCQUF3Qjs7SUF3QmhDLG1DQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FGWSw0QkFBNEI7OztJQUMzQixnRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtDbWFjc0JyZWFkY3J1bWJDb21wb25lbnR9IGZyb20gJy4vY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJyZWFkY3J1bWItaXRlbScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0JyZWFkY3J1bWJJdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJ2NtYWNzLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGNvbG9yOiAjNjU2Yzc5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbWFjcy1icmVhZGNydW1iLWl0ZW06bGFzdC1jaGlsZCAuYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCcmVhZGNydW1iSXRlbUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNtYWNzQnJlYWRjcnVtYkNvbXBvbmVudDogQ21hY3NCcmVhZGNydW1iQ29tcG9uZW50KSB7fVxyXG59XHJcbiJdfQ==