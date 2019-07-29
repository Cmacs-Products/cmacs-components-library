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
import { isNotNil, slideMotion, toBoolean, InputBoolean, NzNoAnimationDirective, } from 'ng-zorro-antd/core';
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
        // tslint:disable-next-line: member-ordering
        this.showSearch = false;
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
        console.log(value);
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
                animations: [slideMotion],
                template: "<div cdkOverlayOrigin\r\n  cmacs-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [nzOpen]=\"nzOpen\"\r\n  [searchValue]=\"searchValue\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"maxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"placeHolder\"\r\n  [nzAllowClear]=\"allowClear\"\r\n  [nzMaxTagCount]=\"maxTagCount\"\r\n  [nzShowArrow]=\"showArrow\"\r\n  [nzLoading]=\"loading\"\r\n  [nzSuffixIcon]=\"suffixIcon\"\r\n  [nzClearIcon]=\"clearIcon\"\r\n  [action]=\"action\"\r\n  [nzRemoveIcon]=\"removeIcon\"\r\n  [nzShowSearch]=\"showSearch\"\r\n  [showCmacsSearch]=\"showCmacsSearch\"\r\n  [showCustomSearch]=\"showCustomSearch\"\r\n  [nzTokenSeparators]=\"tokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\">\r\n  <div\r\n    class=\"ant-select-dropdown\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"dropdownStyle\">\r\n    <div cmacs-option-container\r\n      style=\"overflow: auto;transform: translateZ(0px);\"\r\n      (onSearch)=\"onSearch($event)\"\r\n      [showSearch]=\"showSearch\"\r\n      [showCmacsSearch]=\"showCmacsSearch\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [nzMenuItemSelectedIcon]=\"menuItemSelectedIcon\"\r\n      [nzNotFoundContent]=\"notFoundContent\"\r\n      (nzScrollToBottom)=\"scrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
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
    `, ".ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection{border-color:#bec4cd;box-shadow:none}.ant-select-search--inline .ant-select-search__field{margin-left:21px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5;left:12px;right:unset}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-top:0!important;margin-bottom:0!important}.ant-select-dropdown-menu-item{border-top:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:5px}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.cmacs-select-search-input{width:100%;border:none;outline:0;padding:0 10px 0 6px}.cmacs-select-search-input::-webkit-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff}.cmacs-select-search-icon{color:#dee0e5}"]
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
    showSearch: [{ type: Input }],
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
], CmacsSelectComponent.prototype, "showSearch", void 0);
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
    CmacsSelectComponent.prototype.showSearch;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsR0FFdkIsTUFBTSxvQkFBb0IsQ0FBQztBQU01QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMseUJBQXlCLEVB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RTFCLDBDQUEyQjs7Ozs7SUFFM0Isc0NBQXVCOzs7OztJQUV2Qix3Q0FBaUM7O0lBRWpDLGdEQUFnRTs7SUFFaEUsbURBQXlFOztJQUV6RSx5REFBcUc7O0lBRXJHLDBEQUFtRzs7SUFFbkcsK0RBQWtIOztJQUVsSCw2Q0FBOEQ7O0lBRTlELDhDQUE2RDs7SUFFN0QsMENBQTREOztJQUU1RCx5Q0FBd0Q7O0lBRXhELDBDQUF5RDs7SUFFekQsb0NBQXlDOztJQUV6QyxpREFBa0Q7O0lBRWxELHdEQUF5Qzs7SUFFekMsc0NBQXdCOztJQUV4Qiw2Q0FBa0Q7O0lBRWxELCtDQUFpQzs7SUFFakMsMENBQTRDOztJQUU1QywwQ0FBNEM7O0lBRTVDLCtDQUFpRDs7SUFFakQsZ0RBQWtEOztJQUVsRCx1Q0FBeUM7O0lBRXpDLDJDQUE2Qjs7SUFFN0IsMkNBQTZCOztJQUU3Qiw4Q0FBMkM7O0lBRTNDLDBDQUF1Qzs7SUFFdkMseUNBQXNDOztJQUV0QywwQ0FBdUM7O0lBRXZDLG9EQUFpRDs7SUFFakQseUNBQTBCOztJQUUxQiwrQ0FBd0M7O0lBR3hDLGlEQUE4RDs7Ozs7SUE4SDVELHdDQUEyQjs7SUFDM0IsK0NBQTBDOzs7OztJQUMxQyxtQ0FBOEI7Ozs7O0lBQzlCLDRDQUFrQzs7Ozs7SUFDbEMsd0NBQTBCOztJQUUxQiwyQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmbGF0TWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNOb3ROaWwsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgdG9Cb29sZWFuLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgVEZpbHRlck9wdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmltcG9ydCB7IENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q21hY3NTZWxlY3RTZXJ2aWNlfSBmcm9tIFwiLi9jbWFjcy1zZWxlY3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTZWxlY3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ3NpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFzaG93QXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0b2dnbGVEcm9wRG93bigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIG56T3BlbiA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB2YWx1ZTogYW55IHwgYW55W107XHJcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDogQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Db21wb25lbnQpIGxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Db21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0JsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nID0gJ3Rlc3QtY2xhc3MnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0N1c3RvbVNlYXJjaCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBjbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93QXJyb3cgPSB0cnVlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0NsZWFyU2VhcmNoVmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmF1dG9DbGVhclNlYXJjaFZhbHVlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1heE11bHRpcGxlQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubWF4TXVsdGlwbGVDb3VudCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VydmVyU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJykge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZpbHRlck9wdGlvbih2YWx1ZTogVEZpbHRlck9wdGlvbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgY29tcGFyZVdpdGgodmFsdWU6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRvRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJyxcclxuICAgICAgICAgICdhdXRvZm9jdXMnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICAgICAgdGhpcy5jbWFjc0ZvY3VzLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9uS2V5RG93bihldmVudCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMubnpPcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdCcpO1xyXG4gIH1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZToganNkb2MtZm9ybWF0XHJcbiAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZTogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0VmFsdWUsIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNtYWNzT25TZWFyY2guZW1pdChkYXRhKTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGVsQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1vZGVsVmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm56T3BlbiAhPT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmx1cigpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uek9wZW4gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgZmxhdE1hcCgoKSA9PlxyXG4gICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQubWFwKG9wdGlvbiA9PiBvcHRpb24uY2hhbmdlcyksXHJcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5tYXAoZ3JvdXAgPT5cclxuICAgICAgICAgICAgICBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA/IGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMgOiBFTVBUWVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApLnBpcGUoc3RhcnRXaXRoKHRydWUpKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVUZW1wbGF0ZU9wdGlvbihcclxuICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQudG9BcnJheSgpLFxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LnRvQXJyYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=