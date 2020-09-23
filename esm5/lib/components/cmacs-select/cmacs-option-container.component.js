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
        this.notFoundContentShow = true;
        this.userDropdown = false;
        this.showSearch = false;
        this.showSelectAll = true;
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
                    template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root cmacs-custom-scrollbar ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon type=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"Search\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound && showSelectAll\" class=\"ant-select-dropdown-menu-item\"\r\n      [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n      (click)=\"updateCheckboxCache()\"\r\n  >\r\n      <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n      <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n      <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n  </li>\r\n  <li *ngIf=\"(nzSelectService.isShowNotFound || userDropdown) && notFoundContentShow\"\r\n    cmacs-select-unselectable\r\n    [class.cmacs-not-found-custom]=\"notFoundContentCustom\"\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <ng-container *ngIf=\"notFoundContentCustom\" [ngTemplateOutlet]=\"notFoundContentCustom\"></ng-container>\r\n    <nz-embed-empty *ngIf=\"!notFoundContentCustom\" [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n",
                    styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;-webkit-transition:.3s;transition:.3s}.cmacs-indeterminate-selection::after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1;content:' ';-webkit-transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"]
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
        notFoundContentShow: [{ type: Input }],
        userDropdown: [{ type: Input }],
        showSearch: [{ type: Input }],
        showSelectAll: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        notFoundContentCustom: [{ type: Input }],
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
    CmacsOptionContainerComponent.prototype.notFoundContentShow;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.userDropdown;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.showSearch;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.showSelectAll;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.selectAllLabel;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.showCmacsSearch;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    CmacsOptionContainerComponent.prototype.notFoundContentCustom;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBNERFLHVDQUFtQixlQUFtQyxFQUFVLEdBQXNCLEVBQVUsTUFBYztRQUEzRixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsRHRHLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBTWpCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzlCLG9CQUFl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SUFDOUIsdURBQXVDOztJQUN2Qyx3REFBaUM7O0lBQ2pDLCtEQUFtRDs7SUFDbkQsOERBQWtEOztJQUNsRCx5REFBK0Q7O0lBQy9ELGlEQUF5RDs7SUFrQzdDLHdEQUEwQzs7Ozs7SUFBRSw0Q0FBOEI7Ozs7O0lBQUUsK0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtb3B0aW9uLWNvbnRhaW5lcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb25Db250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBAVmlld0NoaWxkcmVuKENtYWNzT3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc09wdGlvbkxpQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93blVsJykgZHJvcGRvd25VbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnRTaG93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSB1c2VyRHJvcGRvd24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAvLyBkZWxheSBhZnRlciBvcGVuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQubGVuZ3RoICYmIG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT5cclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG8ubnpPcHRpb24ubnpWYWx1ZSwgb3B0aW9uLm56VmFsdWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cclxuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xyXG4gICAgICAgICAgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMub25TZWFyY2guZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbiEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsID0gdGhpcy5kcm9wZG93blVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih1bCwgJ3Njcm9sbCcpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaWYgKHVsICYmIHVsLnNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCAmJiB1bC5zY3JvbGxIZWlnaHQgPCB1bC5jbGllbnRIZWlnaHQgKyB1bC5zY3JvbGxUb3AgKyAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSB1bC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQWxsQ2hlY2tlZCgpIHtcclxuICAgIGNvbnN0IGxpc3RPZk5vdERpc2FibGVkSXRlbXMgPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPT09ICBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKSB7XHJcbiAgICBjb25zdCBpc0NoZWNrZWRTdGF0ZSA9IHRoaXMuaXNBbGxDaGVja2VkKCk7XHJcblxyXG4gICAgaWYgKCFpc0NoZWNrZWRTdGF0ZSB8fCBpc0NoZWNrZWRTdGF0ZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=