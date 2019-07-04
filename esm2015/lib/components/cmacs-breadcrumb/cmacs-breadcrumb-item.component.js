/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CmacsBreadcrumbComponent } from './cmacs-breadcrumb.component';
export class CmacsBreadcrumbItemComponent {
    /**
     * @param {?} cmacsBreadcrumbComponent
     */
    constructor(cmacsBreadcrumbComponent) {
        this.cmacsBreadcrumbComponent = cmacsBreadcrumbComponent;
    }
}
CmacsBreadcrumbItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-breadcrumb-item',
                exportAs: 'cmacsBreadcrumbItem',
                preserveWhitespaces: false,
                template: "<span class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</span>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"cmacsBreadcrumbComponent.cmacsSeparator\">\r\n    {{ cmacsBreadcrumbComponent.cmacsSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                styles: ["cmacs-breadcrumb-item{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#acb3bf}a:hover{text-decoration:underline}", `
      cmacs-breadcrumb-item:last-child {
        color: #656c79;
      }

      cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator {
        display: none;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsBreadcrumbItemComponent.ctorParameters = () => [
    { type: CmacsBreadcrumbComponent }
];
if (false) {
    /** @type {?} */
    CmacsBreadcrumbItemComponent.prototype.cmacsBreadcrumbComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnJlYWRjcnVtYi9jbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBc0J0RSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBQ3ZDLFlBQW1CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUcsQ0FBQzs7O1lBckIxRSxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwyVEFBbUQ7eU9BR2pEOzs7Ozs7OztLQVFDO2FBRUo7Ozs7WUFyQk8sd0JBQXdCOzs7O0lBdUJsQixnRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtDbWFjc0JyZWFkY3J1bWJDb21wb25lbnR9IGZyb20gJy4vY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJyZWFkY3J1bWItaXRlbScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0JyZWFkY3J1bWJJdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJ2NtYWNzLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGNvbG9yOiAjNjU2Yzc5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbWFjcy1icmVhZGNydW1iLWl0ZW06bGFzdC1jaGlsZCAuYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCcmVhZGNydW1iSXRlbUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNtYWNzQnJlYWRjcnVtYkNvbXBvbmVudDogQ21hY3NCcmVhZGNydW1iQ29tcG9uZW50KSB7fVxyXG59XHJcbiJdfQ==