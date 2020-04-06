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
        this.cmacsOpen = false;
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
                    opacity = 1;
                }
            }
            else {
                showSelectedValue = true;
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
            if (this.inputElement && this.cmacsOpen) {
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
            if (!this.cmacsOpen) {
                this.setInputValue('');
            }
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
                styles: [".cmacs-select-action{padding:9px;position:relative;top:-9px;left:10px;border-left:1px solid #dee0e5}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"]
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
    cmacsOpen: [{ type: Input }],
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
    CmacsSelectTopControlComponent.prototype.cmacsOpen;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUUsc0JBQXNCLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWM1RCxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7O0lBOEd6QyxZQUNVLFFBQW1CLEVBQ3BCLGVBQW1DLEVBQ2xDLEdBQXNCLEVBQ0gsV0FBb0M7UUFIdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFoSHhELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIscUJBQWdCLEdBQUcsS0FBSyxDQUFDOztRQUV6QixvQkFBZSxHQUFHLEtBQUss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LHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxzOUpBQXdEOzthQUV6RDs7OztZQXRCQyxTQUFTO1lBU0Ysa0JBQWtCO1lBakJ6QixpQkFBaUI7WUFnQkMsc0JBQXNCLHVCQWlJckMsSUFBSSxZQUFJLFFBQVE7OzswQkFoSGxCLEtBQUs7MkJBR0wsU0FBUyxTQUFDLGNBQWM7MkJBQ3hCLEtBQUs7K0JBQ0wsS0FBSzs4QkFFTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUVMLEtBQUs7Z0NBQ0wsS0FBSzs7OztJQXZCTixvREFBbUI7O0lBQ25CLHFEQUFrQzs7SUFDbEMscURBQW9COzs7OztJQUNwQixrREFBaUM7O0lBQ2pDLHNEQUFvRDs7SUFDcEQsc0RBQThCOztJQUM5QiwwREFBa0M7O0lBRWxDLHlEQUFpQzs7SUFDakMsdURBQStCOztJQUMvQixpREFBeUI7O0lBQ3pCLGdEQUF3Qjs7SUFDeEIsbURBQTJCOztJQUMzQixnREFBd0I7O0lBQ3hCLHVEQUErQjs7SUFDL0Isc0RBQThCOztJQUM5QixxREFBNEI7O0lBQzVCLG1EQUEyQjs7SUFDM0Isc0RBQXlDOztJQUN6QyxxREFBd0M7O0lBQ3hDLHNEQUF5Qzs7SUFFekMsNkRBQWdFOztJQUNoRSwyREFBMEM7Ozs7O0lBdUZ4QyxrREFBMkI7O0lBQzNCLHlEQUEwQzs7Ozs7SUFDMUMsNkNBQThCOztJQUM5QixxREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge3pvb21Nb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIElucHV0Qm9vbGVhbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0VG9wQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3pvb21Nb3Rpb25dLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93Q3VzdG9tU2VhcmNoID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnc091dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVmFsdWVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nICk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUgJiYgIXRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICBvcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICdtYXJnaW4tbGVmdC5weCc6IHRoaXMuc2hvd0N1c3RvbVNlYXJjaCA/ICcxNScgOiAnMCcsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93Q3VzdG9tU2VhcmNoU3R5bGUoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnbWFyZ2luLWxlZnQucHgnOiB0aGlzLnNob3dDdXN0b21TZWFyY2ggPyAnMTUnIDogJzAnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgb3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgaWYgKGNoYW5nZXMuc2VhcmNoVmFsdWUgJiYgY2hhbmdlcy5zZWFyY2hWYWx1ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICB0aGlzLnNldElucHV0VmFsdWUoY2hhbmdlcy5zZWFyY2hWYWx1ZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgIH1cclxuICB9XHJcbn1cclxuIl19