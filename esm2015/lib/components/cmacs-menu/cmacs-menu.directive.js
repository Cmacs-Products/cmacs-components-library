/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsMenuItemDirective } from './cmacs-menu-item.directive';
import { CmacsMenuServiceFactory } from './cmacs-menu.resolver';
import { CmacsMenuService } from './cmacs-menu.service';
import { CmacsSubMenuComponent } from './cmacs-submenu.component';
const ɵ0 = CmacsMenuServiceFactory;
export class CmacsMenuDirective {
    /**
     * @param {?} elementRef
     * @param {?} menuService
     * @param {?} updateHostClassService
     */
    constructor(elementRef, menuService, updateHostClassService) {
        this.elementRef = elementRef;
        this.menuService = menuService;
        this.updateHostClassService = updateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedCmacsSubMenuComponent = [];
        this.inlineIndent = 24;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inDropDown = false;
        this.inlineCollapsed = false;
        this.selectable = !this.menuService.isInDropDown;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this.listOfCmacsMenuItemDirective) {
            if (this.inlineCollapsed) {
                this.listOfOpenedCmacsSubMenuComponent = this.listOfCmacsSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.open));
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(false)));
                this.mode = 'vertical';
            }
            else {
                this.listOfOpenedCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(true)));
                this.listOfOpenedCmacsSubMenuComponent = [];
                this.mode = this.cacheMode;
            }
            this.menuService.setMode(this.mode);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-root`]: true,
            [`${prefixName}-${this.theme}`]: true,
            [`${prefixName}-${this.mode}`]: true,
            [`${prefixName}-inline-collapsed`]: this.inlineCollapsed
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.menuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        menu => {
            this.click.emit(menu);
            if (this.selectable) {
                this.listOfCmacsMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.setSelectedState(item === menu)));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.cacheMode = this.mode;
        this.updateInlineCollapse();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.menuService.setInlineIndent(this.inlineIndent);
        }
        if (changes.nzInDropDown) {
            this.menuService.isInDropDown = this.inDropDown;
        }
        if (changes.nzTheme) {
            this.menuService.setTheme(this.theme);
        }
        if (changes.nzMode) {
            this.menuService.setMode(this.mode);
            if (!changes.nzMode.isFirstChange() && this.listOfCmacsSubMenuComponent) {
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(false)));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsMenuDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[cmacs-menu]',
                exportAs: 'cmacsMenu',
                providers: [
                    NzUpdateHostClassService,
                    CmacsMenuService,
                    {
                        provide: NzMenuBaseService,
                        useFactory: ɵ0,
                        deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], CmacsMenuService]
                    }
                ]
            },] }
];
/** @nocollapse */
CmacsMenuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzMenuBaseService },
    { type: NzUpdateHostClassService }
];
CmacsMenuDirective.propDecorators = {
    listOfCmacsMenuItemDirective: [{ type: ContentChildren, args: [CmacsMenuItemDirective, { descendants: true },] }],
    listOfCmacsSubMenuComponent: [{ type: ContentChildren, args: [CmacsSubMenuComponent, { descendants: true },] }],
    inlineIndent: [{ type: Input }],
    theme: [{ type: Input }],
    mode: [{ type: Input }],
    inDropDown: [{ type: Input }],
    inlineCollapsed: [{ type: Input }],
    selectable: [{ type: Input }],
    click: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsMenuDirective.prototype, "inDropDown", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsMenuDirective.prototype, "inlineCollapsed", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsMenuDirective.prototype, "selectable", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsMenuDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuDirective.prototype.cacheMode;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuDirective.prototype.listOfOpenedCmacsSubMenuComponent;
    /** @type {?} */
    CmacsMenuDirective.prototype.listOfCmacsMenuItemDirective;
    /** @type {?} */
    CmacsMenuDirective.prototype.listOfCmacsSubMenuComponent;
    /** @type {?} */
    CmacsMenuDirective.prototype.inlineIndent;
    /** @type {?} */
    CmacsMenuDirective.prototype.theme;
    /** @type {?} */
    CmacsMenuDirective.prototype.mode;
    /** @type {?} */
    CmacsMenuDirective.prototype.inDropDown;
    /** @type {?} */
    CmacsMenuDirective.prototype.inlineCollapsed;
    /** @type {?} */
    CmacsMenuDirective.prototype.selectable;
    /** @type {?} */
    CmacsMenuDirective.prototype.click;
    /** @type {?} */
    CmacsMenuDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuDirective.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuDirective.prototype.updateHostClassService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3MtbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFlBQVksRUFFWixpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN6QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO1dBV2hELHVCQUF1QjtBQUt6QyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUEwQzdCLFlBQ1MsVUFBc0IsRUFDckIsV0FBOEIsRUFDOUIsc0JBQWdEO1FBRmpELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUE1Q2xELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpCLHNDQUFpQyxHQUE0QixFQUFFLENBQUM7UUFLL0QsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFxQixPQUFPLENBQUM7UUFDbEMsU0FBSSxHQUF1QixVQUFVLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUNsRCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFnQ25FLENBQUM7Ozs7SUE5Qkosb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDO2dCQUMxRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTzs7OztnQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU87Ozs7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxFQUFFLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXOztjQUNILFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDbkYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6RSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQ3ZCLENBQUMsR0FBRyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUk7WUFDNUIsQ0FBQyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQ3JDLENBQUMsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNwQyxDQUFDLEdBQUcsVUFBVSxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3pELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFRRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFDLENBQUM7YUFDekY7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO2dCQUN2RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTzs7OztnQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQzthQUNsRjtTQUNGO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXhHRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFO29CQUNULHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLElBQXlCO3dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxpQ0FBaUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO3FCQUM5RjtpQkFDRjthQUNGOzs7O1lBMUNDLFVBQVU7WUFvQlYsaUJBQWlCO1lBQ2pCLHdCQUF3Qjs7OzJDQTBCdkIsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTswQ0FHN0QsZUFBZSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkFDNUQsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsTUFBTTs7QUFIa0I7SUFBZixZQUFZLEVBQUU7O3NEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7MkRBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFOztzREFBNkM7Ozs7OztJQVpyRSxzQ0FBaUM7Ozs7O0lBQ2pDLHVDQUFzQzs7Ozs7SUFDdEMsK0RBQXdFOztJQUN4RSwwREFFRTs7SUFDRix5REFBNkg7O0lBQzdILDBDQUEyQjs7SUFDM0IsbUNBQTJDOztJQUMzQyxrQ0FBK0M7O0lBQy9DLHdDQUE0Qzs7SUFDNUMsNkNBQWlEOztJQUNqRCx3Q0FBcUU7O0lBQ3JFLG1DQUFzRTs7SUE2QnBFLHdDQUE2Qjs7Ozs7SUFDN0IseUNBQXNDOzs7OztJQUN0QyxvREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpEaXJlY3Rpb25WSElUeXBlLFxyXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzTWVudVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9jbWFjcy1tZW51LnJlc29sdmVyJztcclxuaW1wb3J0IHsgQ21hY3NNZW51U2VydmljZSB9IGZyb20gJy4vY21hY3MtbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1zdWJtZW51LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01lbnUnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgQ21hY3NNZW51U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IENtYWNzTWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgQ21hY3NNZW51U2VydmljZV1cclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGNhY2hlTW9kZTogTnpEaXJlY3Rpb25WSElUeXBlO1xyXG4gIHByaXZhdGUgbGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50OiBDbWFjc1N1Yk1lbnVDb21wb25lbnRbXSA9IFtdO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8XHJcbiAgICBDbWFjc01lbnVJdGVtRGlyZWN0aXZlXHJcbiAgPjtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc1N1Yk1lbnVDb21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGlubGluZUluZGVudCA9IDI0O1xyXG4gIEBJbnB1dCgpIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcclxuICBASW5wdXQoKSBtb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkRyb3BEb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RhYmxlID0gIXRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT4oKTtcclxuXHJcbiAgdXBkYXRlSW5saW5lQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlKSB7XHJcbiAgICAgIGlmICh0aGlzLmlubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50ID0gdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZmlsdGVyKHN1Ym1lbnUgPT4gc3VibWVudS5vcGVuKTtcclxuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGUoZmFsc2UpKTtcclxuICAgICAgICB0aGlzLm1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZSh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLmNhY2hlTW9kZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5tb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51JyA6ICdhbnQtbWVudSc7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tcm9vdGBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLnRoZW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLm1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1pbmxpbmUtY29sbGFwc2VkYF06IHRoaXMuaW5saW5lQ29sbGFwc2VkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubWVudVNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcclxuICAgICAgdGhpcy5jbGljay5lbWl0KG1lbnUpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVNb2RlID0gdGhpcy5tb2RlO1xyXG4gICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpJbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpJbmxpbmVJbmRlbnQpIHtcclxuICAgICAgdGhpcy5tZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5pbmxpbmVJbmRlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpJbkRyb3BEb3duKSB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID0gdGhpcy5pbkRyb3BEb3duO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUaGVtZSkge1xyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldFRoZW1lKHRoaXMudGhlbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNb2RlKSB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLm1vZGUpO1xyXG4gICAgICBpZiAoIWNoYW5nZXMubnpNb2RlLmlzRmlyc3RDaGFuZ2UoKSAmJiB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZShmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelRoZW1lIHx8IGNoYW5nZXMubnpNb2RlIHx8IGNoYW5nZXMubnpJbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19