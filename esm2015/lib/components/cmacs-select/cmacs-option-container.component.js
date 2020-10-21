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
import { NzI18nService } from 'ng-zorro-antd';
export class CmacsOptionContainerComponent {
    /**
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} i18n
     */
    constructor(nzSelectService, cdr, ngZone, i18n) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.notFoundContentShow = true;
        this.userDropdown = false;
        this.showSearch = false;
        this.showSelectAll = true;
        this.selectAllLabel = 'Select All';
        this.searchLabel = 'Search';
        this.showCmacsSearch = false;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                /** @type {?} */
                const targetOption = this.listOfNzOptionLiComponent.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue)));
                /* tslint:disable:no-any */
                if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                    ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                }
                /* tslint:enable:no-any */
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.onSearch.emit(value);
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackLabel(_index, option) {
        return option.nzLabel;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.nzValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.nzScrollToBottom.emit();
                    }));
                }
            }));
        }));
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.selectAllLabel = 'Wählen Sie Alle';
                    this.searchLabel = 'Suche';
                    break;
                case 'en':
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
                    break;
                default:
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
            }
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    isAllChecked() {
        /** @type {?} */
        const listOfNotDisabledItems = this.nzSelectService.listOfNzOptionComponent.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled));
        if (this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length) {
            return 1;
        }
        else if (!this.nzSelectService.listOfCachedSelectedOption.length) {
            return 0;
        }
        else {
            return -1;
        }
    }
    /**
     * @return {?}
     */
    updateCheckboxCache() {
        /** @type {?} */
        const isCheckedState = this.isAllChecked();
        if (!isCheckedState || isCheckedState === -1) {
            /** @type {?} */
            const listOfSelectedValue = [];
            this.nzSelectService.listOfNzOptionComponent.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                if (!option.nzDisabled) {
                    listOfSelectedValue.push(option.nzValue);
                }
            }));
            this.nzSelectService.updateListOfSelectedValue(listOfSelectedValue, true);
        }
        else {
            this.nzSelectService.updateListOfSelectedValue([], true);
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
CmacsOptionContainerComponent.decorators = [
    { type: Component, args: [{
                selector: '[cmacs-option-container]',
                exportAs: 'cmacsOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root cmacs-custom-scrollbar ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon type=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"{{searchLabel}}\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound && showSelectAll\" class=\"ant-select-dropdown-menu-item\"\r\n      [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n      (click)=\"updateCheckboxCache()\"\r\n  >\r\n      <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n      <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n      <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n  </li>\r\n  <li *ngIf=\"(nzSelectService.isShowNotFound || userDropdown) && notFoundContentShow\"\r\n    cmacs-select-unselectable\r\n    [class.cmacs-not-found-custom]=\"notFoundContentCustom\"\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <ng-container *ngIf=\"notFoundContentCustom\" [ngTemplateOutlet]=\"notFoundContentCustom\"></ng-container>\r\n    <nz-embed-empty *ngIf=\"!notFoundContentCustom\" [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n",
                styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;-webkit-transition:.3s;transition:.3s}.cmacs-indeterminate-selection::after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1;content:' ';-webkit-transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"]
            }] }
];
/** @nocollapse */
CmacsOptionContainerComponent.ctorParameters = () => [
    { type: CmacsSelectService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NzI18nService }
];
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
    searchLabel: [{ type: Input }],
    showCmacsSearch: [{ type: Input }],
    nzMenuItemSelectedIcon: [{ type: Input }],
    notFoundContentCustom: [{ type: Input }],
    nzScrollToBottom: [{ type: Output }],
    onSearch: [{ type: Output }]
};
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
    CmacsOptionContainerComponent.prototype.searchLabel;
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
    /**
     * @type {?}
     * @private
     */
    CmacsOptionContainerComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXOUMsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7OztJQW9EeEMsWUFBbUIsZUFBbUMsRUFBVSxHQUFzQixFQUFVLE1BQWMsRUFBVSxJQUFtQjtRQUF4SCxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBbkRuSSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQU1qQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBRyxL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QkFBc0I7Z0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsNnZIQUFzRDs7YUFFdkQ7Ozs7WUFYUSxrQkFBa0I7WUFwQnpCLGlCQUFpQjtZQUtqQixNQUFNO1lBZ0JDLGFBQWE7Ozt3Q0FlbkIsWUFBWSxTQUFDLHNCQUFzQjt5QkFDbkMsU0FBUyxTQUFDLFlBQVk7MkJBQ3RCLFNBQVMsU0FBQyxjQUFjO2dDQUN4QixLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOytCQUNMLE1BQU07dUJBQ04sTUFBTTs7Ozs7OztJQWpCUCxpREFBaUM7Ozs7O0lBQ2pDLHNEQUEwQjs7SUFDMUIsbURBQW1COztJQUNuQixrRUFBbUc7O0lBQ25HLG1EQUFnRDs7SUFDaEQscURBQW9EOztJQUNwRCwwREFBbUM7O0lBQ25DLDREQUFvQzs7SUFDcEMscURBQThCOztJQUM5QixtREFBNEI7O0lBQzVCLHNEQUE4Qjs7SUFDOUIsdURBQXVDOztJQUN2QyxvREFBZ0M7O0lBQ2hDLHdEQUFpQzs7SUFDakMsK0RBQW1EOztJQUNuRCw4REFBa0Q7O0lBQ2xELHlEQUErRDs7SUFDL0QsaURBQXlEOztJQWtDN0Msd0RBQTBDOzs7OztJQUFFLDRDQUE4Qjs7Ozs7SUFBRSwrQ0FBc0I7Ozs7O0lBQUUsNkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1vcHRpb24tY29udGFpbmVyXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbkNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ21hY3NPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uTGlDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVWwnKSBkcm9wZG93blVsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudFNob3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93U2VsZWN0QWxsID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICBASW5wdXQoKSBzZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLy8gZGVsYXkgYWZ0ZXIgb3BlblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCAmJiBvcHRpb24pIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvLm56T3B0aW9uLm56VmFsdWUsIG9wdGlvbi5uelZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXHJcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQpIHtcclxuICAgICAgICAgICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50KTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbiEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsID0gdGhpcy5kcm9wZG93blVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih1bCwgJ3Njcm9sbCcpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaWYgKHVsICYmIHVsLnNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCAmJiB1bC5zY3JvbGxIZWlnaHQgPCB1bC5jbGllbnRIZWlnaHQgKyB1bC5zY3JvbGxUb3AgKyAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSB1bC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnV8OkaGxlbiBTaWUgQWxsZSc7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1N1Y2hlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxDaGVja2VkKCkge1xyXG4gICAgY29uc3QgbGlzdE9mTm90RGlzYWJsZWRJdGVtcyA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZpbHRlcihpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQpO1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA9PT0gIGxpc3RPZk5vdERpc2FibGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpIHtcclxuICAgIGNvbnN0IGlzQ2hlY2tlZFN0YXRlID0gdGhpcy5pc0FsbENoZWNrZWQoKTtcclxuXHJcbiAgICBpZiAoIWlzQ2hlY2tlZFN0YXRlIHx8IGlzQ2hlY2tlZFN0YXRlID09PSAtMSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW107XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==