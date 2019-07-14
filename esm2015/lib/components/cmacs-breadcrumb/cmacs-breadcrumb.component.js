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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWJyZWFkY3J1bWIvY21hY3MtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVsRCxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsWUFBWTs7OztBQUV2RCxzQ0FJQzs7O0lBSEMsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2YsK0JBQVk7O0FBNEJkLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7O0lBUW5DLFlBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEVBQXFCLEVBQzdCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFWTixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUMsbUJBQWMsR0FBK0IsR0FBRyxDQUFDO1FBRTFELGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVNyQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUk7O3NCQUNJLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Z0JBQ3hELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN6QixDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO2FBQ25HO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBVyxFQUFFLENBQWE7UUFDakMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNO2FBQ1IsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQ1IsSUFBSSxDQUFDLFFBQVE7YUFDVixHQUFHLENBQUMsTUFBTSxDQUFDO2FBQ1gsYUFBYSxDQUFDLEdBQUcsQ0FBQzthQUNsQixJQUFJLEVBQUUsRUFDVjthQUNBLElBQUksRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQ3BCLEtBQXFCLEVBQ3JCLE1BQWMsRUFBRSxFQUNoQixjQUFrQyxFQUFFOztjQUU5QixRQUFRLEdBQXFCLEtBQUssQ0FBQyxRQUFRO1FBQ2pELHVGQUF1RjtRQUN2RixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsRUFBRTs7OztzQkFHN0IsUUFBUSxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7c0JBQzVFLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUU7Z0JBQ3BDLG9EQUFvRDtnQkFDcEQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsRUFBRTs7MEJBQzdELFVBQVUsR0FBcUI7d0JBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLFlBQVk7d0JBQ3ZFLE1BQU0sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU07d0JBQzdCLEdBQUcsRUFBRSxPQUFPO3FCQUNiO29CQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDOzs7WUF0R0YsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsK1RBQWdEO3lCQUU5Qzs7Ozs7Ozs7Ozs7Ozs7S0FjQzthQUVKOzs7O1lBL0NDLFFBQVE7WUFFUixNQUFNO1lBTE4saUJBQWlCO1lBRWpCLFVBQVU7WUFNVixTQUFTOzs7Z0NBNENSLEtBQUs7NkJBQ0wsS0FBSzs7QUFEbUI7SUFBZixZQUFZLEVBQUU7O21FQUEyQjs7O0lBQW5ELHFEQUFtRDs7SUFDbkQsa0RBQTBEOztJQUUxRCwrQ0FBaUQ7Ozs7O0lBRWpELDRDQUF1Qzs7Ozs7SUFHckMsNENBQTBCOzs7OztJQUMxQiwwQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVULCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ01BQ1NfUk9VVEVfREFUQV9CUkVBRENSVU1CID0gJ2JyZWFkY3J1bWInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHBhcmFtczogUGFyYW1zO1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtYnJlYWRjcnVtYicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0JyZWFkY3J1bWInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNtYWNzLWJyZWFkY3J1bWItaXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogI2FjYjNiZjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NBdXRvR2VuZXJhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc1NlcGFyYXRvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnLyc7XHJcblxyXG4gIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gfCB1bmRlZmluZWQgPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJyZWFkY3J1bWInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY21hY3NBdXRvR2VuZXJhdGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY3RpdmF0ZWRSb3V0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcclxuICAgICAgICBhY3RpdmF0ZWRSb3V0ZS51cmwucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyhhY3RpdmF0ZWRSb3V0ZS5yb290KTtcclxuICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tORy1aT1JST10gWW91IHNob3VsZCBpbXBvcnQgUm91dGVyTW9kdWxlIGlmIHlvdSB3YW50IHRvIHVzZSBjbWFjc0F1dG9HZW5lcmF0ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGUodXJsOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMubmdab25lXHJcbiAgICAgIC5ydW4oKCkgPT5cclxuICAgICAgICB0aGlzLmluamVjdG9yXHJcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcclxuICAgICAgICAgIC5uYXZpZ2F0ZUJ5VXJsKHVybClcclxuICAgICAgICAgIC50aGVuKClcclxuICAgICAgKVxyXG4gICAgICAudGhlbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1icyhcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHVybDogc3RyaW5nID0gJycsXHJcbiAgICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW11cclxuICApOiBCcmVhZGNydW1iT3B0aW9uW10gfCB1bmRlZmluZWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcclxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZC5vdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSB7XHJcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cclxuICAgICAgICAvLyBQYXJzZSB0aGlzIGxheWVyIGFuZCBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgaXRlbS5cclxuICAgICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB1cmwgKyBgLyR7cm91dGVVUkx9YDtcclxuICAgICAgICAvLyBJZiBoYXZlIGRhdGEsIGdvIHRvIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBmb3IgaXQuXHJcbiAgICAgICAgaWYgKGNoaWxkLnNuYXBzaG90LmRhdGEuaGFzT3duUHJvcGVydHkoQ01BQ1NfUk9VVEVfREFUQV9CUkVBRENSVU1CKSkge1xyXG4gICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogQnJlYWRjcnVtYk9wdGlvbiA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IGNoaWxkLnNuYXBzaG90LmRhdGFbQ01BQ1NfUk9VVEVfREFUQV9CUkVBRENSVU1CXSB8fCAnQnJlYWRjcnVtYicsXHJcbiAgICAgICAgICAgIHBhcmFtczogY2hpbGQuc25hcHNob3QucGFyYW1zLFxyXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgbmV4dFVybCwgYnJlYWRjcnVtYnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=