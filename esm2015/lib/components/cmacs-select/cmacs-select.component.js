/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, slideMotion, toBoolean, InputBoolean, NzNoAnimationDirective, zoomMotion, } from 'ng-zorro-antd/core';
import { CmacsSelectTopControlComponent } from './cmacs-select-top-control.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsOptionGroupComponent } from "./cmacs-option-group.component";
import { CmacsSelectService } from "./cmacs-select.service";
export class CmacsSelectComponent {
    /**
     * @param {?} renderer
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} focusMonitor
     * @param {?} platform
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(renderer, nzSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this.searchValue = '';
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        // tslint:disable-next-line: member-ordering
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line: member-ordering
        // tslint:disable-next-line: variable-name
        // tslint:disable-next-line: member-ordering
        this._disabled = false;
        // tslint:disable-next-line: member-ordering
        this._autoFocus = false;
        // tslint:disable-next-line: member-ordering
        this.isInit = false;
        // tslint:disable-next-line: member-ordering
        this.destroy$ = new Subject();
        // tslint:disable-next-line: member-ordering
        this.cmacsOnSearch = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.scrollToBottom = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.openChange = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsBlur = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsFocus = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.size = 'default';
        // tslint:disable-next-line: member-ordering
        this.dropdownClassName = 'test-class';
        // tslint:disable-next-line: member-ordering
        this.dropdownMatchSelectWidth = true;
        // tslint:disable-next-line: member-ordering
        this.action = false;
        // tslint:disable-next-line: member-ordering
        this.allowClear = false;
        this.open = false;
        // tslint:disable-next-line: member-ordering
        this.showSearch = false;
        this.tagsOut = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.loading = false;
        // tslint:disable-next-line: member-ordering
        this.showArrow = true;
        // tslint:disable-next-line: member-ordering
        this.tokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoClearSearchValue(value) {
        this.nzSelectService.autoClearSearchValue = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxMultipleCount(value) {
        this.nzSelectService.maxMultipleCount = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set serverSearch(value) {
        this.nzSelectService.serverSearch = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this.nzSelectService.mode = value;
        this.nzSelectService.check();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filterOption(value) {
        this.nzSelectService.filterOption = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set compareWith(value) {
        this.nzSelectService.compareWith = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get autoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cmacsOpen(value) {
        this.nzOpen = value;
        this.nzSelectService.setOpenState(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
        this.nzSelectService.disabled = this._disabled;
        this.nzSelectService.check();
        if (this.disabled && this.isInit) {
            this.closeDropDown();
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.selectTopControlComponent.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.selectTopControlComponent.inputElement) {
            this.focusMonitor.focusVia(this.selectTopControlComponent.inputElement, 'keyboard');
            this.cmacsFocus.emit();
        }
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
    blur() {
        if (this.selectTopControlComponent.inputElement) {
            this.selectTopControlComponent.inputElement.nativeElement.blur();
            this.cmacsBlur.emit();
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
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        this.nzSelectService.onKeyDown(event);
    }
    /**
     * @return {?}
     */
    toggleDropDown() {
        if (!this.disabled) {
            this.nzSelectService.setOpenState(!this.nzOpen);
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.nzSelectService.setOpenState(false);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    }
    // tslint:disable-next-line: jsdoc-format
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    writeValue(value) {
        this.value = value;
        /** @type {?} */
        let listValue = [];
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.cmacsOnSearch.emit(data);
            this.updateCdkConnectedOverlayPositions();
        }));
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} modelValue
         * @return {?}
         */
        modelValue => {
            if (this.value !== modelValue) {
                this.value = modelValue;
                this.onChange(this.value);
                this.updateCdkConnectedOverlayPositions();
            }
        }));
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (this.nzOpen !== value) {
                this.openChange.emit(value);
            }
            if (value) {
                this.focus();
                this.updateCdkConnectedOverlayStatus();
            }
            else {
                this.blur();
                this.onTouched();
            }
            this.nzOpen = value;
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
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
        this.isInit = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfCmacsOptionGroupComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        () => merge(this.listOfCmacsOptionGroupComponent.changes, this.listOfCmacsOptionComponent.changes, ...this.listOfCmacsOptionComponent.map((/**
         * @param {?} option
         * @return {?}
         */
        option => option.changes)), ...this.listOfCmacsOptionGroupComponent.map((/**
         * @param {?} group
         * @return {?}
         */
        group => group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY))).pipe(startWith(true)))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.nzSelectService.updateTemplateOption(this.listOfCmacsOptionComponent.toArray(), this.listOfCmacsOptionGroupComponent.toArray());
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
     * @param {?} value
     * @return {?}
     */
    onSearch(value) {
        this.searchValue = value;
    }
}
CmacsSelectComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-select',
                exportAs: 'cmacsSelect',
                preserveWhitespaces: false,
                providers: [
                    CmacsSelectService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsSelectComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [slideMotion, zoomMotion],
                template: "<div cdkOverlayOrigin\r\n  cmacs-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [class.cmacs-select-selection]=\"open\"\r\n  [nzOpen]=\"nzOpen\"\r\n  [searchValue]=\"searchValue\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"maxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"placeHolder\"\r\n  [nzAllowClear]=\"allowClear\"\r\n  [nzMaxTagCount]=\"maxTagCount\"\r\n  [nzShowArrow]=\"showArrow\"\r\n  [nzLoading]=\"loading\"\r\n  [nzSuffixIcon]=\"suffixIcon\"\r\n  [nzClearIcon]=\"clearIcon\"\r\n  [tagsOut]=\"tagsOut\"\r\n  [action]=\"action\"\r\n  [nzRemoveIcon]=\"removeIcon\"\r\n  [nzShowSearch]=\"showSearch\"\r\n  [showCmacsSearch]=\"showCmacsSearch\"\r\n  [showCustomSearch]=\"showCustomSearch\"\r\n  [nzTokenSeparators]=\"tokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode || nzSelectService.isTagsSingleSelectMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  [class.cmacs-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  [class.cmacs-select-selection--action]=\"action\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-container *ngIf=\"open\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template\r\n  *ngIf=\"!open\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n  <div\r\n    class=\"ant-select-dropdown cmacs-custom-scrollbar\"\r\n    [class.cmacs-select-dropdown]=\"open\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"dropdownStyle\">\r\n    <div cmacs-option-container\r\n         style=\"overflow: auto;transform: translateZ(0px);\"\r\n         (onSearch)=\"onSearch($event)\"\r\n         [showSearch]=\"showSearch\"\r\n         [showCmacsSearch]=\"showCmacsSearch\"\r\n         (keydown)=\"onKeyDown($event)\"\r\n         [nzMenuItemSelectedIcon]=\"menuItemSelectedIcon\"\r\n         [nzNotFoundContent]=\"notFoundContent\"\r\n         (nzScrollToBottom)=\"scrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\r\n  </div>\r\n  <div *ngIf=\"tagsOut && nzSelectService.listOfCachedSelectedOption.length\" class=\"ant-select-selection--multiple cmacs-tags-out\" style=\"padding-top: 15px;\">\r\n    <div  class=\"ant-select-selection__rendered cmacs-select-selection__rendered\">\r\n      <ul>\r\n        <ng-container\r\n          *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : maxTagCount;trackBy:trackValue;\">\r\n          <li [@zoomMotion] [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" [attr.title]=\"option.nzLabel\"\r\n              [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\" class=\"ant-select-selection__choice\">\r\n            <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n            <span *ngIf=\"!option.nzDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                  (mousedown)=\"$event.preventDefault()\" (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!removeIcon; else removeIcon\"></i>\r\n        </span>\r\n          </li>\r\n        </ng-container>\r\n        <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > maxTagCount\" [@zoomMotion]\r\n            [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" class=\"ant-select-selection__choice\">\r\n          <div class=\"ant-select-selection__choice__content\">\r\n            <ng-container *ngIf=\"maxTagPlaceholder\">\r\n              <ng-template [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: maxTagCount}\">\r\n              </ng-template>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n              + {{ nzSelectService.listOfCachedSelectedOption.length - maxTagCount }} ...\r\n            </ng-container>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-select-lg]': 'size==="large"',
                    '[class.ant-select-sm]': 'size==="small"',
                    '[class.ant-select-enabled]': '!disabled',
                    '[class.ant-select-no-arrow]': '!showArrow',
                    '[class.ant-select-disabled]': 'disabled',
                    '[class.ant-select-allow-clear]': 'allowClear',
                    '[class.ant-select-open]': 'nzOpen',
                    '(click)': 'toggleDropDown()'
                },
                styles: [`
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `, ".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{-webkit-transform:unset!important;transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection{border-color:#bec4cd;box-shadow:none}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important;max-width:94%}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5;left:12px;right:unset}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-top:0!important;margin-bottom:0!important}.ant-select-dropdown-menu-item{border-top:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.cmacs-select-search-input{width:100%;border:none;outline:0;padding:0 10px 0 6px}.cmacs-select-search-input::-webkit-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}"]
            }] }
];
/** @nocollapse */
CmacsSelectComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: CmacsSelectService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: Platform },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsSelectComponent.propDecorators = {
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    selectTopControlComponent: [{ type: ViewChild, args: [CmacsSelectTopControlComponent,] }],
    listOfCmacsOptionComponent: [{ type: ContentChildren, args: [CmacsOptionComponent,] }],
    listOfCmacsOptionGroupComponent: [{ type: ContentChildren, args: [CmacsOptionGroupComponent,] }],
    cmacsOnSearch: [{ type: Output }],
    scrollToBottom: [{ type: Output }],
    openChange: [{ type: Output }],
    cmacsBlur: [{ type: Output }],
    cmacsFocus: [{ type: Output }],
    size: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    dropdownMatchSelectWidth: [{ type: Input }],
    action: [{ type: Input }],
    dropdownStyle: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    allowClear: [{ type: Input }],
    open: [{ type: Input }],
    showSearch: [{ type: Input }],
    tagsOut: [{ type: Input }],
    showCmacsSearch: [{ type: Input }],
    showCustomSearch: [{ type: Input }],
    loading: [{ type: Input }],
    placeHolder: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    dropdownRender: [{ type: Input }],
    suffixIcon: [{ type: Input }],
    clearIcon: [{ type: Input }],
    removeIcon: [{ type: Input }],
    menuItemSelectedIcon: [{ type: Input }],
    showArrow: [{ type: Input }],
    tokenSeparators: [{ type: Input }],
    maxTagPlaceholder: [{ type: Input }],
    autoClearSearchValue: [{ type: Input }],
    maxMultipleCount: [{ type: Input }],
    serverSearch: [{ type: Input }],
    mode: [{ type: Input }],
    filterOption: [{ type: Input }],
    compareWith: [{ type: Input }],
    autoFocus: [{ type: Input }],
    cmacsOpen: [{ type: Input }],
    disabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "allowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "open", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "showSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "tagsOut", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "showCmacsSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSelectComponent.prototype, "loading", void 0);
if (false) {
    /** @type {?} */
    CmacsSelectComponent.prototype.nzOpen;
    /** @type {?} */
    CmacsSelectComponent.prototype.value;
    /** @type {?} */
    CmacsSelectComponent.prototype.searchValue;
    /** @type {?} */
    CmacsSelectComponent.prototype.onChange;
    /** @type {?} */
    CmacsSelectComponent.prototype.onTouched;
    /** @type {?} */
    CmacsSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    CmacsSelectComponent.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype._autoFocus;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.destroy$;
    /** @type {?} */
    CmacsSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    CmacsSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsSelectComponent.prototype.selectTopControlComponent;
    /** @type {?} */
    CmacsSelectComponent.prototype.listOfCmacsOptionComponent;
    /** @type {?} */
    CmacsSelectComponent.prototype.listOfCmacsOptionGroupComponent;
    /** @type {?} */
    CmacsSelectComponent.prototype.cmacsOnSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.scrollToBottom;
    /** @type {?} */
    CmacsSelectComponent.prototype.openChange;
    /** @type {?} */
    CmacsSelectComponent.prototype.cmacsBlur;
    /** @type {?} */
    CmacsSelectComponent.prototype.cmacsFocus;
    /** @type {?} */
    CmacsSelectComponent.prototype.size;
    /** @type {?} */
    CmacsSelectComponent.prototype.dropdownClassName;
    /** @type {?} */
    CmacsSelectComponent.prototype.dropdownMatchSelectWidth;
    /** @type {?} */
    CmacsSelectComponent.prototype.action;
    /** @type {?} */
    CmacsSelectComponent.prototype.dropdownStyle;
    /** @type {?} */
    CmacsSelectComponent.prototype.notFoundContent;
    /** @type {?} */
    CmacsSelectComponent.prototype.allowClear;
    /** @type {?} */
    CmacsSelectComponent.prototype.open;
    /** @type {?} */
    CmacsSelectComponent.prototype.showSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.tagsOut;
    /** @type {?} */
    CmacsSelectComponent.prototype.showCmacsSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.showCustomSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.loading;
    /** @type {?} */
    CmacsSelectComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsSelectComponent.prototype.maxTagCount;
    /** @type {?} */
    CmacsSelectComponent.prototype.dropdownRender;
    /** @type {?} */
    CmacsSelectComponent.prototype.suffixIcon;
    /** @type {?} */
    CmacsSelectComponent.prototype.clearIcon;
    /** @type {?} */
    CmacsSelectComponent.prototype.removeIcon;
    /** @type {?} */
    CmacsSelectComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    CmacsSelectComponent.prototype.showArrow;
    /** @type {?} */
    CmacsSelectComponent.prototype.tokenSeparators;
    /** @type {?} */
    CmacsSelectComponent.prototype.maxTagPlaceholder;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.renderer;
    /** @type {?} */
    CmacsSelectComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.platform;
    /** @type {?} */
    CmacsSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsRUFDUCxVQUFVLEdBQzFCLE1BQU0sb0JBQW9CLENBQUM7QUFNNUIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFD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bEMsd0NBQTBCOztJQUUxQiwyQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmbGF0TWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNOb3ROaWwsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgdG9Cb29sZWFuLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56U2l6ZUxEU1R5cGUsIHpvb21Nb3Rpb24sXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgVEZpbHRlck9wdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmltcG9ydCB7IENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q21hY3NTZWxlY3RTZXJ2aWNlfSBmcm9tIFwiLi9jbWFjcy1zZWxlY3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTZWxlY3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ3NpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFzaG93QXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0b2dnbGVEcm9wRG93bigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIG56T3BlbiA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB2YWx1ZTogYW55IHwgYW55W107XHJcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDogQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Db21wb25lbnQpIGxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Db21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0JsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nID0gJ3Rlc3QtY2xhc3MnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0YWdzT3V0ID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dDdXN0b21TZWFyY2ggPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgY2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2hvd0Fycm93ID0gdHJ1ZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9DbGVhclNlYXJjaFZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXhNdWx0aXBsZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1heE11bHRpcGxlQ291bnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlcnZlclNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgfCAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWx0ZXJPcHRpb24odmFsdWU6IFRGaWx0ZXJPcHRpb24pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IGNvbXBhcmVXaXRoKHZhbHVlOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uek9wZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLmlzSW5pdCkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ2F1dG9mb2N1cycsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgICAgIHRoaXMuY21hY3NGb2N1cy5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgdGhpcy5jbWFjc0JsdXIuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb24pO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub25LZXlEb3duKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZSghdGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBqc2RvYy1mb3JtYXRcclxuICAvKiogdXBkYXRlIG5nTW9kZWwgLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgKiovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBsZXQgbGlzdFZhbHVlOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RWYWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuY21hY3NPblNlYXJjaC5lbWl0KGRhdGEpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZWxDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobW9kZWxWYWx1ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG1vZGVsVmFsdWU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMubnpPcGVuICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ibHVyKCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChncm91cCA9PlxyXG4gICAgICAgICAgICAgIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID8gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyA6IEVNUFRZXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkucGlwZShzdGFydFdpdGgodHJ1ZSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC50b0FycmF5KCksXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==