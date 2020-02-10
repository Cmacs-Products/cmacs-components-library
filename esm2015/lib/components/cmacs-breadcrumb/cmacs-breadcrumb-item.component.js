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
                template: "<div class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"cmacsBreadcrumbComponent.cmacsSeparator\">\r\n    {{ cmacsBreadcrumbComponent.cmacsSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                styles: [".ant-breadcrumb-link a{color:#acb3bf}.ant-breadcrumb-link a:hover{text-decoration:underline;color:#2a7cff}.ant-breadcrumb-link{display:-ms-inline-grid;display:inline-grid;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ant-breadcrumb a{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}cmacs-breadcrumb-item:last-child,cmacs-breadcrumb-item:last-child .ant-breadcrumb-link{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;line-height:initial}", `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnJlYWRjcnVtYi9jbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBc0J0RSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBQ3ZDLFlBQW1CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUcsQ0FBQzs7O1lBckIxRSxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix5VEFBbUQ7d2pCQUdqRDs7Ozs7Ozs7S0FRQzthQUVKOzs7O1lBckJPLHdCQUF3Qjs7OztJQXVCbEIsZ0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q21hY3NCcmVhZGNydW1iQ29tcG9uZW50fSBmcm9tICcuL2NtYWNzLWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1icmVhZGNydW1iLWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NCcmVhZGNydW1iSXRlbScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICdjbWFjcy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzY1NmM3OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY21hY3MtYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbWFjc0JyZWFkY3J1bWJDb21wb25lbnQ6IENtYWNzQnJlYWRjcnVtYkNvbXBvbmVudCkge31cclxufVxyXG4iXX0=