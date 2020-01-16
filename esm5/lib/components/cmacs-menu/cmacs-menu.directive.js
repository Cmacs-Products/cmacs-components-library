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
        this.cmacsMode = null;
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
            _a["cmacs-menu-side-bar"] = this.cmacsMode === 'side-bar',
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
        if (changes.inlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.inlineIndent) {
            this.menuService.setInlineIndent(this.inlineIndent);
        }
        if (changes.inDropDown) {
            this.menuService.isInDropDown = this.inDropDown;
        }
        if (changes.theme) {
            this.menuService.setTheme(this.theme);
        }
        if (changes.mode) {
            this.menuService.setMode(this.mode);
            if (!changes.mode.isFirstChange() && this.listOfCmacsSubMenuComponent) {
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
            }
        }
        if (changes.theme || changes.mode || changes.inlineCollapsed) {
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
        cmacsMode: [{ type: Input }],
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
    CmacsMenuDirective.prototype.cmacsMode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3MtbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFlBQVksRUFFWixpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN6QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO1NBYWhELHVCQUF1QjtBQVR6QztJQTBERSw0QkFDUyxVQUFzQixFQUNyQixXQUE4QixFQUM5QixzQkFBZ0Q7UUFGakQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQTlDbEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekIsc0NBQWlDLEdBQTRCLEVBQUUsQ0FBQztRQUsvRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdB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QUM3Qix5Q0FBc0M7Ozs7O0lBQ3RDLG9EQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekRpcmVjdGlvblZISVR5cGUsXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NNZW51U2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2NtYWNzLW1lbnUucmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc1N1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzTWVudU1vZGVUeXBlID0gJ3NpZGUtYmFyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW1lbnVdJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVudScsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBDbWFjc01lbnVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogQ21hY3NNZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBDbWFjc01lbnVTZXJ2aWNlXVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgY2FjaGVNb2RlOiBOekRpcmVjdGlvblZISVR5cGU7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQ6IENtYWNzU3ViTWVudUNvbXBvbmVudFtdID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc01lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxcclxuICAgIENtYWNzTWVudUl0ZW1EaXJlY3RpdmVcclxuICA+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgaW5saW5lSW5kZW50ID0gMjQ7XHJcbiAgQElucHV0KCkgdGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xyXG4gIEBJbnB1dCgpIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgY21hY3NNb2RlOiBDbWFjc01lbnVNb2RlVHlwZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkRyb3BEb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RhYmxlID0gIXRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT4oKTtcclxuXHJcbiAgdXBkYXRlSW5saW5lQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlKSB7XHJcbiAgICAgIGlmICh0aGlzLmlubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50ID0gdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZmlsdGVyKHN1Ym1lbnUgPT4gc3VibWVudS5vcGVuKTtcclxuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGUoZmFsc2UpKTtcclxuICAgICAgICB0aGlzLm1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZSh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLmNhY2hlTW9kZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5tb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51JyA6ICdhbnQtbWVudSc7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tcm9vdGBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLnRoZW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLm1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1pbmxpbmUtY29sbGFwc2VkYF06IHRoaXMuaW5saW5lQ29sbGFwc2VkLFxyXG4gICAgICBbYGNtYWNzLW1lbnUtc2lkZS1iYXJgXTogdGhpcy5jbWFjc01vZGUgPT09ICdzaWRlLWJhcidcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbWVudVNlcnZpY2U6IE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1lbnUgPT4ge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQobWVudSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0U2VsZWN0ZWRTdGF0ZShpdGVtID09PSBtZW51KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm1vZGU7XHJcbiAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5pbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuaW5saW5lSW5kZW50KSB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2Uuc2V0SW5saW5lSW5kZW50KHRoaXMuaW5saW5lSW5kZW50KTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmluRHJvcERvd24pIHtcclxuICAgICAgdGhpcy5tZW51U2VydmljZS5pc0luRHJvcERvd24gPSB0aGlzLmluRHJvcERvd247XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy50aGVtZSkge1xyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldFRoZW1lKHRoaXMudGhlbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubW9kZSkge1xyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5tb2RlKTtcclxuICAgICAgaWYgKCFjaGFuZ2VzLm1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnRoZW1lIHx8IGNoYW5nZXMubW9kZSB8fCBjaGFuZ2VzLmlubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=