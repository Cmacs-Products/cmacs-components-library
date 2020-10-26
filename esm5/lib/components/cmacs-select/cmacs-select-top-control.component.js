/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { zoomMotion, NzNoAnimationDirective, InputBoolean } from 'ng-zorro-antd/core';
import { CmacsSelectService } from './cmacs-select.service';
var CmacsSelectTopControlComponent = /** @class */ (function () {
    function CmacsSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.searchValue = '';
        this.isComposing = false;
        this.isComposingCustom = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        this.tagsOut = false;
        this.nzOpen = false;
        this.cmacsOpen = false;
        this.cmacsEditable = false;
        this.action = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.userDropdown = false;
        this.nzTokenSeparators = [];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
        if (this.nzSelectService.isTagsSingleSelectMode) {
            this.setInputValue('');
            this.setInputValueCustom('');
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.getSelectedValues = /**
     * @return {?}
     */
    function () {
        return this.nzSelectService.listOfSelectedValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.setInputValueCustom = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.inputElementCustom) {
            this.inputElementCustom.nativeElement.value = value;
        }
        this.inputValueEditableMode = value;
        this.updateWidthCustom();
        this.nzSelectService.updateEditedValue(value);
    };
    Object.defineProperty(CmacsSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.cmacsEditable) {
                return this.inputValueEditableMode || this.isComposingCustom || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            }
            if (this.userDropdown && this.nzSelectService.isMultipleOrTags) {
                return this.inputValue || this.isComposing ? 'none' : 'block';
            }
            return this.inputValue || this.inputValueEditableMode || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch && !this.showCmacsSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    if (this.cmacsEditable) {
                        showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                    }
                    else {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                    }
                    if (showSelectedValue) {
                        opacity = 1;
                    }
                }
                else {
                    showSelectedValue = true;
                    if (this.cmacsEditable) {
                        showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                    }
                }
            }
            if (this.nzSelectService.isTagsSingleSelectMode && this.inputValue) {
                showSelectedValue = false;
            }
            if (this.nzSelectService.isTagsSingleSelectMode && !this.inputValue) {
                opacity = 1;
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                'margin-left.px': this.showCustomSearch ? '15' : '0',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectTopControlComponent.prototype, "showCustomSearchStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                'margin-left.px': this.showCustomSearch ? '15' : '0',
                'padding-left.px': this.userDropdown ? '0' : null
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.trackValue = 
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
    CmacsSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.updateWidthCustom = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectService.isMultipleOrTags && this.inputElementCustom) {
            if (this.inputValueEditableMode || this.isComposingCustom) {
                this.renderer.setStyle(this.inputElementCustom.nativeElement, 'width', this.inputElementCustom.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElementCustom.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (_this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputElement.nativeElement.focus(); }));
            }
            if (_this.inputElement && _this.cmacsOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputElement.nativeElement.focus(); }));
            }
            if (_this.inputElementCustom && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputElementCustom.nativeElement.focus(); }));
            }
            if (_this.inputElementCustom && _this.cmacsOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputElementCustom.nativeElement.focus(); }));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            if (!(_this.cmacsOpen || _this.nzSelectService.isTagsSingleSelectMode)) {
                _this.setInputValue('');
                _this.setInputValueCustom('');
            }
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSelectTopControlComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.searchValue && changes.searchValue.currentValue !== undefined) {
            this.setInputValue(changes.searchValue.currentValue);
        }
    };
    CmacsSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-select-top-control]',
                    exportAs: 'cmacsSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [zoomMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #inputTemplate>\r\n  <input #inputElement autocomplete=\"something-new\" [ngStyle]=\"showCustomSearchStyle\" class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\" (compositionend)=\"isComposing = false\" (input)=\"updateWidth()\"\r\n    [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\" [disabled]=\"nzSelectService.disabled\"\r\n         [class.cmacs-select-selection-not-empty]=\"getSelectedValues().length && !tagsOut\"\r\n  >\r\n</ng-template>\r\n\r\n<ng-template #customInputTemplate>\r\n  <input #inputElementCustom autocomplete=\"something-new\" [ngStyle]=\"showCustomSearchStyle\" class=\"ant-select-search__field\"\r\n         (compositionstart)=\"isComposingCustom = true\" (compositionend)=\"isComposingCustom = false\" (input)=\"updateWidthCustom()\"\r\n         [ngModel]=\"inputValueEditableMode\" (ngModelChange)=\"setInputValueCustom($event)\" [disabled]=\"nzSelectService.disabled\"\r\n         [class.cmacs-select-selection-not-empty]=\"getSelectedValues().length\">\r\n</ng-template>\r\n\r\n<span class=\"ant-select-arrow cmacs-search-search-icon\" cmacs-select-unselectable\r\n  *ngIf=\"showCustomSearch\">\r\n  <i class=\"iconCreation-Search\"></i>\r\n</span>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\" cmacs-select-unselectable [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode || nzSelectService.isTagsSingleSelectMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n         class=\"ant-select-selection-selected-value\" [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n         [ngStyle]=\"selectedValueStyle\">\r\n      {{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"showCmacsSearch\" class=\"ant-select-search ant-select-search--inline\"\r\n         [style.display]=\"nzOpen || nzSelectService.listOfCachedSelectedOption.length ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n        <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n      </div>\r\n    </div>\r\n    <!--show custom search editable mode-->\r\n    <div *ngIf=\"cmacsEditable\" class=\"ant-select-search ant-select-search--inline\"\r\n         [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"customInputTemplate\"></ng-template>\r\n        <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container *ngIf=\"!tagsOut && !userDropdown\">\r\n      <ng-container\r\n        *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue;\">\r\n        <li [@zoomMotion] [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" [attr.title]=\"option.nzLabel\"\r\n            [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\" class=\"ant-select-selection__choice\">\r\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n          <span *ngIf=\"!option.nzDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                (mousedown)=\"$event.preventDefault()\" (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n        </li>\r\n      </ng-container>\r\n      <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\" [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n            <ng-template [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n                         [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n            + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length && (!userDropdown || (userDropdown && nzSelectService.isSingleMode))\" class=\"ant-select-selection__clear\"\r\n      [class.ant-select-selection__clear-search]=\"showCustomSearch\"\r\n  cmacs-select-unselectable (mousedown)=\"$event.preventDefault()\" (click)=\"onClearSelection($event)\">\r\n  <i nz-icon type=\"close-circle\" theme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n</span>\r\n<span class=\"ant-select-arrow cmacs-search-arrow-right\" cmacs-select-unselectable\r\n      [class.cmacs-selected-nodes]=\"getSelectedValues().length\"\r\n      *ngIf=\"showCustomSearch; else notCustomArrow\">\r\n    <i class=\"iconArrowLarge-Arrow-Right\"></i>\r\n</span>\r\n<ng-template #notCustomArrow>\r\n  <span class=\"ant-select-arrow cmacs-dropdown-arrow\" [class.cmacs-select-action]=\"action\" cmacs-select-unselectable *ngIf=\"nzShowArrow\">\r\n    <i nz-icon type=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n    <ng-template #defaultArrow>\r\n        <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n",
                    styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:10px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsSelectTopControlComponent.propDecorators = {
        searchValue: [{ type: Input }],
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        inputElementCustom: [{ type: ViewChild, args: ['inputElementCustom',] }],
        nzShowSearch: [{ type: Input }],
        showCustomSearch: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        tagsOut: [{ type: Input }],
        nzOpen: [{ type: Input }],
        cmacsOpen: [{ type: Input }],
        cmacsEditable: [{ type: Input }],
        action: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        userDropdown: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectTopControlComponent.prototype, "userDropdown", void 0);
    return CmacsSelectTopControlComponent;
}());
export { CmacsSelectTopControlComponent };
if (false) {
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputValueEditableMode;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.searchValue;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.isComposing;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.isComposingCustom;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputElementCustom;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.showCustomSearch;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.showCmacsSearch;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.tagsOut;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.cmacsEditable;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.action;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzAllowClear;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzShowArrow;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzLoading;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzClearIcon;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.userDropdown;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzTokenSeparators;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectTopControlComponent.prototype.renderer;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsVUFBVSxFQUFFLHNCQUFzQixFQUFFLFlBQVksRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTVEO0lBc0tFLHdDQUNVLFFBQW1CLEVBQ3BCLGVBQW1DLEVBQ2xDLEdBQXNCLEVBQ0gsV0FBb0M7UUFIdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUE3SnhELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7O1FBRXpCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJRixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7SUFvSXZDLENBQUM7Ozs7O0lBbElKLHlEQUFnQjs7OztJQUFoQixVQUFpQixDQUFhO1FBQzVCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsMERBQWlCOzs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxzREFBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCw0REFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHNCQUFJLDhEQUFrQjs7OztRQUF0QjtZQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNwSTtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFO2dCQUM5RCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDL0Q7WUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2xKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOERBQWtCOzs7O1FBQXRCOztnQkFDTSxpQkFBaUIsR0FBRyxLQUFLOztnQkFDekIsT0FBTyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQy9DLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUN0QixpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3FCQUM5RTt5QkFBTTt3QkFDTCxpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQzVEO29CQUNELElBQUksaUJBQWlCLEVBQUU7d0JBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7cUJBQU07b0JBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ3RCLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7cUJBQzlFO2lCQUNGO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEUsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkUsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNiO1lBRUQsT0FBTztnQkFDTCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFDN0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ3BELE9BQU8sRUFBRSxLQUFHLE9BQVM7YUFDdEIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUVBQXFCOzs7O1FBQXpCO1lBQ0UsT0FBTztnQkFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDcEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ2xELENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELGtDQUFrQzs7Ozs7OztJQUNsQyxtREFBVTs7Ozs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLE1BQTRCO1FBQ3JELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDL0IsT0FBTyxFQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsT0FBSSxDQUNuRCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckU7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCwwREFBaUI7OztJQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDcEUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFDckMsT0FBTyxFQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxPQUFJLENBQ3pELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFRCw0REFBbUI7Ozs7O0lBQW5CLFVBQW9CLE1BQTRCLEVBQUUsQ0FBYTtRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBU0QsaURBQVE7OztJQUFSO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUN0RSxJQUFJLEtBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUM3QixVQUFVOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUF2QyxDQUF1QyxFQUFDLENBQUM7YUFDM0Q7WUFDRCxJQUFJLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkMsVUFBVTs7O2dCQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBdkMsQ0FBdUMsRUFBQyxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxLQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFFO2dCQUNuQyxVQUFVOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQTdDLENBQTZDLEVBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksS0FBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzdDLFVBQVU7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBN0MsQ0FBNkMsRUFBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3hFLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUNwRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDbkUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxvREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBQztZQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEQ7SUFDSixDQUFDOztnQkFoTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQywya01BQXdEOztpQkFFekQ7Ozs7Z0JBdEJDLFNBQVM7Z0JBU0Ysa0JBQWtCO2dCQWpCekIsaUJBQWlCO2dCQWdCQyxzQkFBc0IsdUJBK0tyQyxJQUFJLFlBQUksUUFBUTs7OzhCQTdKbEIsS0FBSzsrQkFJTCxTQUFTLFNBQUMsY0FBYztxQ0FDeEIsU0FBUyxTQUFDLG9CQUFvQjsrQkFDOUIsS0FBSzttQ0FDTCxLQUFLO2tDQUVMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3NDQUVMLEtBQUs7b0NBQ0wsS0FBSzs7SUFIbUI7UUFBZixZQUFZLEVBQUU7O3dFQUFzQjtJQTZLaEQscUNBQUM7Q0FBQSxBQWpORCxJQWlOQztTQXZNWSw4QkFBOEI7OztJQUN6QyxvREFBbUI7O0lBQ25CLGdFQUErQjs7SUFDL0IscURBQWtDOztJQUNsQyxxREFBb0I7O0lBQ3BCLDJEQUEwQjs7Ozs7SUFDMUIsa0RBQWlDOztJQUNqQyxzREFBb0Q7O0lBQ3BELDREQUFnRTs7SUFDaEUsc0RBQThCOztJQUM5QiwwREFBa0M7O0lBRWxDLHlEQUFpQzs7SUFDakMsdURBQStCOztJQUMvQixpREFBeUI7O0lBQ3pCLGdEQUF3Qjs7SUFDeEIsbURBQTJCOztJQUMzQix1REFBK0I7O0lBQy9CLGdEQUF3Qjs7SUFDeEIsdURBQStCOztJQUMvQixzREFBOEI7O0lBQzlCLHFEQUE0Qjs7SUFDNUIsbURBQTJCOztJQUMzQixzREFBeUM7O0lBQ3pDLHFEQUF3Qzs7SUFDeEMsc0RBQXlDOztJQUN6QyxzREFBOEM7O0lBRTlDLDZEQUFnRTs7SUFDaEUsMkRBQTBDOzs7OztJQWdJeEMsa0RBQTJCOztJQUMzQix5REFBMEM7Ozs7O0lBQzFDLDZDQUE4Qjs7SUFDOUIscURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHt6b29tTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBJbnB1dEJvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NlbGVjdFRvcENvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBpbnB1dFZhbHVlRWRpdGFibGVNb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNDb21wb3NpbmdDdXN0b20gPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50Q3VzdG9tJykgaW5wdXRFbGVtZW50Q3VzdG9tOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dDdXN0b21TZWFyY2ggPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdzT3V0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcclxuICBASW5wdXQoKSBuelRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWVDdXN0b20oJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWYWx1ZXMoKXtcclxuICAgIHJldHVybiB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS50b2tlblNlcGFyYXRlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5uelRva2VuU2VwYXJhdG9ycyk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlQ3VzdG9tKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudEN1c3RvbSkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGhDdXN0b20oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUVkaXRlZFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzZXJEcm9wZG93biAmJiB0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2ggJiYgIXRoaXMuc2hvd0NtYWNzU2VhcmNoKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIGlmICh0aGlzLmNtYWNzRWRpdGFibGUpIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tIHx8IHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jbWFjc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pc0NvbXBvc2luZ0N1c3RvbSB8fCB0aGlzLmlucHV0VmFsdWVFZGl0YWJsZU1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmIHRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmICF0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0N1c3RvbVNlYXJjaFN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ21hcmdpbi1sZWZ0LnB4JzogdGhpcy5zaG93Q3VzdG9tU2VhcmNoID8gJzE1JyA6ICcwJyxcclxuICAgICAgJ3BhZGRpbmctbGVmdC5weCc6IHRoaXMudXNlckRyb3Bkb3duID8gJzAnIDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoQ3VzdG9tKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnRDdXN0b20pIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZUVkaXRhYmxlTW9kZSB8fCB0aGlzLmlzQ29tcG9zaW5nQ3VzdG9tKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnRDdXN0b20ubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tICYmIG9wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Q3VzdG9tICYmIHRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWxlbWVudEN1c3RvbS5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsZWFySW5wdXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBpZiAoISh0aGlzLmNtYWNzT3BlbiB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlQ3VzdG9tKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgIGlmIChjaGFuZ2VzLnNlYXJjaFZhbHVlICYmIGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlKTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==