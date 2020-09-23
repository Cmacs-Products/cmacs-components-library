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
export class CmacsOptionContainerComponent {
    /**
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(nzSelectService, cdr, ngZone) {
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
                template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root cmacs-custom-scrollbar ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon type=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"Search\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound && showSelectAll\" class=\"ant-select-dropdown-menu-item\"\r\n      [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n      (click)=\"updateCheckboxCache()\"\r\n  >\r\n      <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n      <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n      <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n  </li>\r\n  <li *ngIf=\"(nzSelectService.isShowNotFound || userDropdown) && notFoundContentShow\"\r\n    cmacs-select-unselectable\r\n    [class.cmacs-not-found-custom]=\"notFoundContentCustom\"\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <ng-container *ngIf=\"notFoundContentCustom\" [ngTemplateOutlet]=\"notFoundContentCustom\"></ng-container>\r\n    <nz-embed-empty *ngIf=\"!notFoundContentCustom\" [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n",
                styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;-webkit-transition:.3s;transition:.3s}.cmacs-indeterminate-selection::after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1;content:' ';-webkit-transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;transition:.1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"]
            }] }
];
/** @nocollapse */
CmacsOptionContainerComponent.ctorParameters = () => [
    { type: CmacsSelectService },
    { type: ChangeDetectorRef },
    { type: NgZone }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBVzVELE1BQU0sT0FBTyw2QkFBNkI7Ozs7OztJQW1EeEMsWUFBbUIsZUFBbUMsRUFBVSxHQUFzQixFQUFVLE1BQWM7UUFBM0Ysb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbER0RyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQU1qQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUdkLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFrQ3dELENBQUM7Ozs7O0lBaENsSCxzQkFBc0IsQ0FBQyxNQUE0QjtRQUNqRCxtQkFBbUI7UUFDbkIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7O3NCQUMvRSxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNyRTtnQkFDRCwyQkFBMkI7Z0JBQzNCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBQSxZQUFZLENBQUMsRUFBRSxFQUFPLENBQUMsQ0FBQyxzQkFBc0IsRUFBRTtvQkFDdEYsQ0FBQyxtQkFBQSxZQUFZLENBQUMsRUFBRSxFQUFPLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQ0QsMEJBQTBCO2FBQzNCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFpQztRQUMxRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUdELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBNEI7UUFDckQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUN0RixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQUEsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFOztrQkFDM0IsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN4QyxTQUFTLENBQWEsRUFBRSxFQUFFLFFBQVEsQ0FBQztpQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRTtvQkFDcEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7UUFDNUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sS0FBTSxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFDN0YsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRTtZQUNsRSxPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7O0lBRUQsbUJBQW1COztjQUNYLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBRTFDLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxLQUFLLENBQUMsQ0FBQyxFQUFFOztrQkFDdEMsbUJBQW1CLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLE9BQU87Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3RCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXBIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixvdkhBQXNEOzthQUV2RDs7OztZQVZRLGtCQUFrQjtZQXBCekIsaUJBQWlCO1lBS2pCLE1BQU07Ozt3Q0E4QkwsWUFBWSxTQUFDLHNCQUFzQjt5QkFDbkMsU0FBUyxTQUFDLFlBQVk7MkJBQ3RCLFNBQVMsU0FBQyxjQUFjO2dDQUN4QixLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FDQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkFDTCxNQUFNO3VCQUNOLE1BQU07Ozs7Ozs7SUFoQlAsaURBQWlDOzs7OztJQUNqQyxzREFBMEI7O0lBQzFCLG1EQUFtQjs7SUFDbkIsa0VBQW1HOztJQUNuRyxtREFBZ0Q7O0lBQ2hELHFEQUFvRDs7SUFDcEQsMERBQW1DOztJQUNuQyw0REFBb0M7O0lBQ3BDLHFEQUE4Qjs7SUFDOUIsbURBQTRCOztJQUM1QixzREFBOEI7O0lBQzlCLHVEQUF1Qzs7SUFDdkMsd0RBQWlDOztJQUNqQywrREFBbUQ7O0lBQ25ELDhEQUFrRDs7SUFDbEQseURBQStEOztJQUMvRCxpREFBeUQ7O0lBa0M3Qyx3REFBMEM7Ozs7O0lBQUUsNENBQThCOzs7OztJQUFFLCtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1jb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZHJlbihDbWFjc09wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25MaUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcpIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLy8gZGVsYXkgYWZ0ZXIgb3BlblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCAmJiBvcHRpb24pIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvLm56T3B0aW9uLm56VmFsdWUsIG9wdGlvbi5uelZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXHJcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQpIHtcclxuICAgICAgICAgICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50KTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChvcHRpb24hKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCB1bCA9IHRoaXMuZHJvcGRvd25VbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odWwsICdzY3JvbGwnKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGlmICh1bCAmJiB1bC5zY3JvbGxUb3AgPiB0aGlzLmxhc3RTY3JvbGxUb3AgJiYgdWwuc2Nyb2xsSGVpZ2h0IDwgdWwuY2xpZW50SGVpZ2h0ICsgdWwuc2Nyb2xsVG9wICsgMTApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gdWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0FsbENoZWNrZWQoKSB7XHJcbiAgICBjb25zdCBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCk7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID09PSAgbGlzdE9mTm90RGlzYWJsZWRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCkge1xyXG4gICAgY29uc3QgaXNDaGVja2VkU3RhdGUgPSB0aGlzLmlzQWxsQ2hlY2tlZCgpO1xyXG5cclxuICAgIGlmICghaXNDaGVja2VkU3RhdGUgfHwgaXNDaGVja2VkU3RhdGUgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbXTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19