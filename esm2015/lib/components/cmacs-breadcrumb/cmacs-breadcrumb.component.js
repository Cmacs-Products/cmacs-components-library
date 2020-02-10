/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core';
/** @type {?} */
export const CMACS_ROUTE_DATA_BREADCRUMB = 'breadcrumb';
/**
 * @record
 */
export function BreadcrumbOption() { }
if (false) {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
export class CmacsBreadcrumbComponent {
    /**
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} cd
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(injector, ngZone, cd, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cd = cd;
        this.cmacsAutoGenerate = false;
        this.cmacsSeparator = '/';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cmacsAutoGenerate) {
            try {
                /** @type {?} */
                const activatedRoute = this.injector.get(ActivatedRoute);
                activatedRoute.url.pipe(takeUntil(this.destroy$)).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                    this.cd.markForCheck();
                }));
            }
            catch (e) {
                throw new Error('[NG-ZORRO] You should import RouterModule if you want to use cmacsAutoGenerate');
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        () => this.injector
            .get(Router)
            .navigateByUrl(url)
            .then()))
            .then();
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                /** @type {?} */
                const routeURL = child.snapshot.url.map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                segment => segment.path)).join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                // If have data, go to generate a breadcrumb for it.
                if (child.snapshot.data.hasOwnProperty(CMACS_ROUTE_DATA_BREADCRUMB)) {
                    /** @type {?} */
                    const breadcrumb = {
                        label: child.snapshot.data[CMACS_ROUTE_DATA_BREADCRUMB] || 'Breadcrumb',
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
    }
}
CmacsBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-breadcrumb',
                exportAs: 'cmacsBreadcrumb',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\r\n<ng-container *ngIf=\"cmacsAutoGenerate\">\r\n  <cmacs-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\r\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\r\n  </cmacs-breadcrumb-item>\r\n</ng-container>\r\n",
                styles: [`
      cmacs-breadcrumb {
        display: block;
      }

      cmacs-breadcrumb-item {
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #acb3bf;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        Display: inline-block;
        cursor: default;

      }
    `]
            }] }
];
/** @nocollapse */
CmacsBreadcrumbComponent.ctorParameters = () => [
    { type: Injector },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
CmacsBreadcrumbComponent.propDecorators = {
    cmacsAutoGenerate: [{ type: Input }],
    cmacsSeparator: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsBreadcrumbComponent.prototype, "cmacsAutoGenerate", void 0);
if (false) {
    /** @type {?} */
    CmacsBreadcrumbComponent.prototype.cmacsAutoGenerate;
    /** @type {?} */
    CmacsBreadcrumbComponent.prototype.cmacsSeparator;
    /** @type {?} */
    CmacsBreadcrumbComponent.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    CmacsBreadcrumbComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsBreadcrumbComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CmacsBreadcrumbComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    CmacsBreadcrumbComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWJyZWFkY3J1bWIvY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVsRCxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsWUFBWTs7OztBQUV2RCxzQ0FJQzs7O0lBSEMsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2YsK0JBQVk7O0FBa0NkLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7O0lBUW5DLFlBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEVBQXFCLEVBQzdCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFWTixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUMsbUJBQWMsR0FBK0IsR0FBRyxDQUFDO1FBRTFELGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVNyQyxR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SztnQkFDMUIsK1RBQWdEO3lCQUU5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQkM7YUFFSjs7OztZQXJEQyxRQUFRO1lBRVIsTUFBTTtZQUxOLGlCQUFpQjtZQUVqQixVQUFVO1lBTVYsU0FBUzs7O2dDQWtEUixLQUFLOzZCQUNMLEtBQUs7O0FBRG1CO0lBQWYsWUFBWSxFQUFFOzttRUFBMkI7OztJQUFuRCxxREFBbUQ7O0lBQ25ELGtEQUEwRDs7SUFFMUQsK0NBQWlEOzs7OztJQUVqRCw0Q0FBdUM7Ozs7O0lBR3JDLDRDQUEwQjs7Ozs7SUFDMUIsMENBQXNCOzs7OztJQUN0QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENNQUNTX1JPVVRFX0RBVEFfQlJFQURDUlVNQiA9ICdicmVhZGNydW1iJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwYXJhbXM6IFBhcmFtcztcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJyZWFkY3J1bWInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NCcmVhZGNydW1iJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWJyZWFkY3J1bWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbWFjcy1icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgY29sb3I6ICNhY2IzYmY7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIERpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc0F1dG9HZW5lcmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzU2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcvJztcclxuXHJcbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbWFjc0F1dG9HZW5lcmF0ZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFJvdXRlID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgICAgIGFjdGl2YXRlZFJvdXRlLnVybC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QpO1xyXG4gICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW05HLVpPUlJPXSBZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlIGNtYWNzQXV0b0dlbmVyYXRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZSh1cmw6IHN0cmluZywgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5uZ1pvbmVcclxuICAgICAgLnJ1bigoKSA9PlxyXG4gICAgICAgIHRoaXMuaW5qZWN0b3JcclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxyXG4gICAgICAgICAgLm5hdmlnYXRlQnlVcmwodXJsKVxyXG4gICAgICAgICAgLnRoZW4oKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgdXJsOiBzdHJpbmcgPSAnJyxcclxuICAgIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXVxyXG4gICk6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCBjaGlsZHJlbjogQWN0aXZhdGVkUm91dGVbXSA9IHJvdXRlLmNoaWxkcmVuO1xyXG4gICAgLy8gSWYgdGhlcmUncyBubyBzdWIgcm9vdCwgdGhlbiBzdG9wIHRoZSByZWN1cnNlIGFuZCByZXR1cm5zIHRoZSBnZW5lcmF0ZWQgYnJlYWRjcnVtYnMuXHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGNoaWxkLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHtcclxuICAgICAgICAvLyBPbmx5IHBhcnNlIGNvbXBvbmVudHMgaW4gcHJpbWFyeSByb3V0ZXItb3V0bGV0IChpbiBhbm90aGVyIHdvcmQsIHJvdXRlci1vdXRsZXQgd2l0aG91dCBhIHNwZWNpZmljIG5hbWUpLlxyXG4gICAgICAgIC8vIFBhcnNlIHRoaXMgbGF5ZXIgYW5kIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBpdGVtLlxyXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSBjaGlsZC5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XHJcbiAgICAgICAgY29uc3QgbmV4dFVybCA9IHVybCArIGAvJHtyb3V0ZVVSTH1gO1xyXG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cclxuICAgICAgICBpZiAoY2hpbGQuc25hcHNob3QuZGF0YS5oYXNPd25Qcm9wZXJ0eShDTUFDU19ST1VURV9EQVRBX0JSRUFEQ1JVTUIpKSB7XHJcbiAgICAgICAgICBjb25zdCBicmVhZGNydW1iOiBCcmVhZGNydW1iT3B0aW9uID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogY2hpbGQuc25hcHNob3QuZGF0YVtDTUFDU19ST1VURV9EQVRBX0JSRUFEQ1JVTUJdIHx8ICdCcmVhZGNydW1iJyxcclxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXHJcbiAgICAgICAgICAgIHVybDogbmV4dFVybFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==