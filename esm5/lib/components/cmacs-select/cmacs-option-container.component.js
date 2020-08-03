/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsOptionLiComponent } from './cmacs-option-li.component';
import { CmacsSelectService } from './cmacs-select.service';
var CmacsOptionContainerComponent = /** @class */ (function () {
    function CmacsOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.showSearch = false;
        this.selectAllLabel = 'Select All';
        this.showCmacsSearch = false;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.scrollIntoViewIfNeeded = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        // delay after open
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                /** @type {?} */
                var targetOption = _this.listOfNzOptionLiComponent.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) {
                    return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue);
                }));
                /* tslint:disable:no-any */
                if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                    ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                }
                /* tslint:enable:no-any */
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.onSearch.emit(value);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.trackLabel = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzLabel;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.nzScrollToBottom.emit();
                    }));
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.isAllChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfNotDisabledItems = this.nzSelectService.listOfNzOptionComponent.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled; }));
        if (this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length) {
            return 1;
        }
        else if (!this.nzSelectService.listOfCachedSelectedOption.length) {
            return 0;
        }
        else {
            return -1;
        }
    };
    /**
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.updateCheckboxCache = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCheckedState = this.isAllChecked();
        if (!isCheckedState || isCheckedState === -1) {
            /** @type {?} */
            var listOfSelectedValue_1 = [];
            this.nzSelectService.listOfNzOptionComponent.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (!option.nzDisabled) {
                    listOfSelectedValue_1.push(option.nzValue);
                }
            }));
            this.nzSelectService.updateListOfSelectedValue(listOfSelectedValue_1, true);
        }
        else {
            this.nzSelectService.updateListOfSelectedValue([], true);
        }
    };
    /**
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-option-container]',
                    exportAs: 'cmacsOptionContainer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root cmacs-custom-scrollbar ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon type=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"Search\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound\" class=\"ant-select-dropdown-menu-item\"\r\n      [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n      (click)=\"updateCheckboxCache()\"\r\n  >\r\n      <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n      <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n      <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\r\n    cmacs-select-unselectable\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n",
                    styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;-webkit-transition:.3s;transition:.3s}.cmacs-indeterminate-selection::after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1;content:' ';-webkit-transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}"]
                }] }
    ];
    /** @nocollapse */
    CmacsOptionContainerComponent.ctorParameters = function () { return [
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    CmacsOptionContainerComponent.propDecorators = {
        listOfNzOptionLiComponent: [{ type: ViewChildren, args: [CmacsOptionLiComponent,] }],
        dropdownUl: [{ type: ViewChild, args: ['dropdownUl',] }],
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzNotFoundContent: [{ type: Input }],
        showSearch: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        nzScrollToBottom: [{ type: Output }],
        onSearch: [{ type: Output }]
    };
    return CmacsOptionContainerComponent;
}());
export { CmacsOptionContainerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsOptionContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsOptionContainerComponent.prototype.lastScrollTop;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.inputValue;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.listOfNzOptionLiComponent;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.dropdownUl;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.inputElement;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.showSearch;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.selectAllLabel;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.showCmacsSearch;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.onSearch;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    CmacsOptionContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsOptionContainerComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBd0RFLHVDQUFtQixlQUFtQyxFQUFVLEdBQXNCLEVBQVUsTUFBYztRQUEzRixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUE5Q3RHLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBTWpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFZCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFB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aHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1jb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZHJlbihDbWFjc09wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25MaUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcpIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8vIGRlbGF5IGFmdGVyIG9wZW5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGggJiYgb3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PlxyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgoby5uek9wdGlvbi5uelZhbHVlLCBvcHRpb24ubnpWYWx1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKSB7XHJcbiAgICAgICAgICAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHRyYWNrTGFiZWwoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uISk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgdWwgPSB0aGlzLmRyb3Bkb3duVWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodWwgJiYgdWwuc2Nyb2xsVG9wID4gdGhpcy5sYXN0U2Nyb2xsVG9wICYmIHVsLnNjcm9sbEhlaWdodCA8IHVsLmNsaWVudEhlaWdodCArIHVsLnNjcm9sbFRvcCArIDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxDaGVja2VkKCkge1xyXG4gICAgY29uc3QgbGlzdE9mTm90RGlzYWJsZWRJdGVtcyA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZpbHRlcihpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQpO1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA9PT0gIGxpc3RPZk5vdERpc2FibGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpIHtcclxuICAgIGNvbnN0IGlzQ2hlY2tlZFN0YXRlID0gdGhpcy5pc0FsbENoZWNrZWQoKTtcclxuXHJcbiAgICBpZiAoIWlzQ2hlY2tlZFN0YXRlIHx8IGlzQ2hlY2tlZFN0YXRlID09PSAtMSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW107XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==