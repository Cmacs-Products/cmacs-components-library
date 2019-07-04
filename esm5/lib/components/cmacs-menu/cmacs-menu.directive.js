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
var ɵ0 = CmacsMenuServiceFactory;
var CmacsMenuDirective = /** @class */ (function () {
    function CmacsMenuDirective(elementRef, menuService, updateHostClassService) {
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
    CmacsMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this.listOfCmacsMenuItemDirective) {
            if (this.inlineCollapsed) {
                this.listOfOpenedCmacsSubMenuComponent = this.listOfCmacsSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.open; }));
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
                this.mode = 'vertical';
            }
            else {
                this.listOfOpenedCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(true); }));
                this.listOfOpenedCmacsSubMenuComponent = [];
                this.mode = this.cacheMode;
            }
            this.menuService.setMode(this.mode);
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-root"] = true,
            _a[prefixName + "-" + this.theme] = true,
            _a[prefixName + "-" + this.mode] = true,
            _a[prefixName + "-inline-collapsed"] = this.inlineCollapsed,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.menuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            _this.click.emit(menu);
            if (_this.selectable) {
                _this.listOfCmacsMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.setSelectedState(item === menu); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.cacheMode = this.mode;
        this.updateInlineCollapse();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
                function (submenu) { return submenu.setOpenState(false); }));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    CmacsMenuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: NzUpdateHostClassService }
    ]; };
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
    return CmacsMenuDirective;
}());
export { CmacsMenuDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3MtbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFlBQVksRUFFWixpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN6QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO1NBV2hELHVCQUF1QjtBQVR6QztJQXdERSw0QkFDUyxVQUFzQixFQUNyQixXQUE4QixFQUM5QixzQkFBZ0Q7UUFGakQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQTVDbEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekIsc0NBQWlDLEdBQTRCLEVBQUUsQ0FBQztRQUsvRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdB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bixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIElucHV0Qm9vbGVhbixcbiAgTnpEaXJlY3Rpb25WSElUeXBlLFxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2Vcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbWFjc01lbnVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vY21hY3MtbWVudS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDbWFjc01lbnVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21hY3NTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1zdWJtZW51LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudV0nLFxuICBleHBvcnRBczogJ2NtYWNzTWVudScsXG4gIHByb3ZpZGVyczogW1xuICAgIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBDbWFjc01lbnVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56TWVudUJhc2VTZXJ2aWNlLFxuICAgICAgdXNlRmFjdG9yeTogQ21hY3NNZW51U2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgQ21hY3NNZW51U2VydmljZV1cbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNhY2hlTW9kZTogTnpEaXJlY3Rpb25WSElUeXBlO1xuICBwcml2YXRlIGxpc3RPZk9wZW5lZENtYWNzU3ViTWVudUNvbXBvbmVudDogQ21hY3NTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc01lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxcbiAgICBDbWFjc01lbnVJdGVtRGlyZWN0aXZlXG4gID47XG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGlubGluZUluZGVudCA9IDI0O1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkRyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdGFibGUgPSAhdGhpcy5tZW51U2VydmljZS5pc0luRHJvcERvd247XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT4oKTtcblxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5pbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5maWx0ZXIoc3VibWVudSA9PiBzdWJtZW51Lm9wZW4pO1xuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGUoZmFsc2UpKTtcbiAgICAgICAgdGhpcy5tb2RlID0gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZSh0cnVlKSk7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50ID0gW107XG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xuICAgICAgfVxuICAgICAgdGhpcy5tZW51U2VydmljZS5zZXRNb2RlKHRoaXMubW9kZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51JyA6ICdhbnQtbWVudSc7XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4TmFtZX0tcm9vdGBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy50aGVtZX1gXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS0ke3RoaXMubW9kZX1gXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1pbmxpbmUtY29sbGFwc2VkYF06IHRoaXMuaW5saW5lQ29sbGFwc2VkXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMubWVudVNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcbiAgICAgIHRoaXMuY2xpY2suZW1pdChtZW51KTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVNb2RlID0gdGhpcy5tb2RlO1xuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUluZGVudCkge1xuICAgICAgdGhpcy5tZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5pbmxpbmVJbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekluRHJvcERvd24pIHtcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID0gdGhpcy5pbkRyb3BEb3duO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelRoZW1lKSB7XG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1vZGUpIHtcbiAgICAgIHRoaXMubWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLm1vZGUpO1xuICAgICAgaWYgKCFjaGFuZ2VzLm56TW9kZS5pc0ZpcnN0Q2hhbmdlKCkgJiYgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56VGhlbWUgfHwgY2hhbmdlcy5uek1vZGUgfHwgY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19