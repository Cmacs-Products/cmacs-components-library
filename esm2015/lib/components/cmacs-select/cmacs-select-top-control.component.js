/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { zoomMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsSelectService } from './cmacs-select.service';
export class CmacsSelectTopControlComponent {
    /**
     * @param {?} renderer
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.searchValue = '';
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        this.tagsOut = false;
        this.nzOpen = false;
        this.action = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClearSelection(e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    }
    /**
     * @return {?}
     */
    getSelectedValues() {
        return this.nzSelectService.listOfSelectedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get selectedValueStyle() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.nzShowSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            'margin-left.px': this.showCustomSearch ? '15' : '0',
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    get showCustomSearchStyle() {
        return {
            'margin-left.px': this.showCustomSearch ? '15' : '0',
        };
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
    updateWidth() {
        if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        open => {
            if (this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.inputElement.nativeElement.focus()));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setInputValue('');
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.searchValue && changes.searchValue.currentValue !== undefined) {
            this.setInputValue(changes.searchValue.currentValue);
        }
    }
}
CmacsSelectTopControlComponent.decorators = [
    { type: Component, args: [{
                selector: '[cmacs-select-top-control]',
                exportAs: 'cmacsSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #inputTemplate>\r\n  <input #inputElement autocomplete=\"something-new\" [ngStyle]=\"showCustomSearchStyle\" class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\" (compositionend)=\"isComposing = false\" (input)=\"updateWidth()\"\r\n    [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\" [disabled]=\"nzSelectService.disabled\"\r\n         [class.cmacs-select-selection-not-empty]=\"getSelectedValues().length && !tagsOut\"\r\n  >\r\n</ng-template>\r\n<span class=\"ant-select-arrow cmacs-search-search-icon\" cmacs-select-unselectable\r\n  *ngIf=\"showCustomSearch\">\r\n  <i class=\"iconCreation-Search\"></i>\r\n</span>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\" cmacs-select-unselectable [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode || nzSelectService.isTagsSingleSelectMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n      class=\"ant-select-selection-selected-value\" [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n      [ngStyle]=\"selectedValueStyle\">\r\n      {{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"showCmacsSearch\" class=\"ant-select-search ant-select-search&#45;&#45;inline\"\r\n      [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n        <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container *ngIf=\"!tagsOut\">\r\n      <ng-container\r\n        *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue;\">\r\n        <li [@zoomMotion] [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" [attr.title]=\"option.nzLabel\"\r\n            [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\" class=\"ant-select-selection__choice\">\r\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n          <span *ngIf=\"!option.nzDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                (mousedown)=\"$event.preventDefault()\" (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n        </li>\r\n      </ng-container>\r\n      <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\" [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n            <ng-template [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n                         [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n            + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\" class=\"ant-select-selection__clear\"\r\n      [class.ant-select-selection__clear-search]=\"showCustomSearch\"\r\n  cmacs-select-unselectable (mousedown)=\"$event.preventDefault()\" (click)=\"onClearSelection($event)\">\r\n  <i nz-icon type=\"close-circle\" theme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n</span>\r\n<span class=\"ant-select-arrow cmacs-search-arrow-right\" cmacs-select-unselectable\r\n      [class.cmacs-selected-nodes]=\"getSelectedValues().length\"\r\n      *ngIf=\"showCustomSearch; else notCustomArrow\">\r\n    <i class=\"iconArrowLarge-Arrow-Right\"></i>\r\n</span>\r\n<ng-template #notCustomArrow>\r\n  <span class=\"ant-select-arrow\" cmacs-select-unselectable *ngIf=\"nzShowArrow\">\r\n    <i nz-icon type=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n    <ng-template #defaultArrow>\r\n      <div [class.cmacs-select-action]=\"action\">\r\n        <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n      </div>\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n",
                styles: [".cmacs-select-action{padding:9px;position:relative;top:-9px;left:10px;border-left:1px solid #dee0e5}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:29px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}.ant-select-selection{overflow:hidden}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{margin-left:30px!important}.ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}"]
            }] }
];
/** @nocollapse */
CmacsSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: CmacsSelectService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsSelectTopControlComponent.propDecorators = {
    searchValue: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    nzShowSearch: [{ type: Input }],
    showCustomSearch: [{ type: Input }],
    showCmacsSearch: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    tagsOut: [{ type: Input }],
    nzOpen: [{ type: Input }],
    action: [{ type: Input }],
    nzMaxTagCount: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzClearIcon: [{ type: Input }],
    nzRemoveIcon: [{ type: Input }],
    nzMaxTagPlaceholder: [{ type: Input }],
    nzTokenSeparators: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.searchValue;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    CmacsSelectTopControlComponent.prototype.inputElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUUsc0JBQXNCLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWM1RCxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7O0lBcUd6QyxZQUNVLFFBQW1CLEVBQ3BCLGVBQW1DLEVBQ2xDLEdBQXNCLEVBQ0gsV0FBb0M7UUFIdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF2R3hELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIscUJBQWdCLEdBQUcsS0FBSyxDQUFDOztRQUV6QixvQkFBZSxHQUFHLEtBQUss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QW9COzs7OztJQUNwQixrREFBaUM7O0lBQ2pDLHNEQUFvRDs7SUFDcEQsc0RBQThCOztJQUM5QiwwREFBa0M7O0lBRWxDLHlEQUFpQzs7SUFDakMsdURBQStCOztJQUMvQixpREFBeUI7O0lBQ3pCLGdEQUF3Qjs7SUFDeEIsZ0RBQXdCOztJQUN4Qix1REFBK0I7O0lBQy9CLHNEQUE4Qjs7SUFDOUIscURBQTRCOztJQUM1QixtREFBMkI7O0lBQzNCLHNEQUF5Qzs7SUFDekMscURBQXdDOztJQUN4QyxzREFBeUM7O0lBRXpDLDZEQUFnRTs7SUFDaEUsMkRBQTBDOzs7OztJQStFeEMsa0RBQTJCOztJQUMzQix5REFBMEM7Ozs7O0lBQzFDLDZDQUE4Qjs7SUFDOUIscURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHt6b29tTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBJbnB1dEJvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NlbGVjdFRvcENvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0N1c3RvbVNlYXJjaCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhZ3NPdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcclxuICBASW5wdXQoKSBuelRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFZhbHVlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnRva2VuU2VwYXJhdGUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLm56VG9rZW5TZXBhcmF0b3JzKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRWYWx1ZVN0eWxlKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93Q3VzdG9tU2VhcmNoU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGVhcklucHV0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSAmJiBjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG4iXX0=