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
var CmacsSelectComponent = /** @class */ (function () {
    function CmacsSelectComponent(renderer, nzSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
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
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
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
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.loading = false;
        // tslint:disable-next-line: member-ordering
        this.showArrow = true;
        // tslint:disable-next-line: member-ordering
        this.tokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    Object.defineProperty(CmacsSelectComponent.prototype, "autoClearSearchValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "maxMultipleCount", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "serverSearch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "mode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
            console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "filterOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "compareWith", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "autoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "cmacsOpen", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzOpen = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.disabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.selectTopControlComponent.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.selectTopControlComponent.inputElement) {
            this.focusMonitor.focusVia(this.selectTopControlComponent.inputElement, 'keyboard');
            this.cmacsFocus.emit();
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.selectTopControlComponent.inputElement) {
            this.selectTopControlComponent.inputElement.nativeElement.blur();
            this.cmacsBlur.emit();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsSelectComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.nzSelectService.setOpenState(!this.nzOpen);
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.setOpenState(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    // tslint:disable-next-line: jsdoc-format
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line: jsdoc-format
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    CmacsSelectComponent.prototype.writeValue = 
    // tslint:disable-next-line: jsdoc-format
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (value) {
        this.value = value;
        /** @type {?} */
        var listValue = [];
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
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.cmacsOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} modelValue
         * @return {?}
         */
        function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
                _this.updateCdkConnectedOverlayPositions();
            }
        }));
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.nzOpen !== value) {
                _this.openChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.nzOpen = value;
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
    CmacsSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCdkConnectedOverlayStatus();
        this.isInit = true;
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfCmacsOptionGroupComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfCmacsOptionGroupComponent.changes,
                _this.listOfCmacsOptionComponent.changes], _this.listOfCmacsOptionComponent.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.changes; })), _this.listOfCmacsOptionGroupComponent.map((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            })))).pipe(startWith(true));
        })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfCmacsOptionComponent.toArray(), _this.listOfCmacsOptionGroupComponent.toArray());
        }));
    };
    /**
     * @return {?}
     */
    CmacsSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectComponent.prototype.onSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValue = value;
    };
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
                            function () { return CmacsSelectComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [slideMotion],
                    template: "<div cdkOverlayOrigin\r\n  cmacs-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [nzOpen]=\"nzOpen\"\r\n  [searchValue]=\"searchValue\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"maxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"placeHolder\"\r\n  [nzAllowClear]=\"allowClear\"\r\n  [nzMaxTagCount]=\"maxTagCount\"\r\n  [nzShowArrow]=\"showArrow\"\r\n  [nzLoading]=\"loading\"\r\n  [nzSuffixIcon]=\"suffixIcon\"\r\n  [nzClearIcon]=\"clearIcon\"\r\n  [action]=\"action\"\r\n  [nzRemoveIcon]=\"removeIcon\"\r\n  [nzShowSearch]=\"showSearch\"\r\n  [showCustomSearch]=\"showCustomSearch\"\r\n  [nzTokenSeparators]=\"tokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\">\r\n  <div\r\n    class=\"ant-select-dropdown\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"dropdownStyle\">\r\n    <div cmacs-option-container\r\n      style=\"overflow: auto;transform: translateZ(0px);\"\r\n      (onSearch)=\"onSearch($event)\"\r\n      [showSearch]=\"showSearch\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [nzMenuItemSelectedIcon]=\"menuItemSelectedIcon\"\r\n      [nzNotFoundContent]=\"notFoundContent\"\r\n      (nzScrollToBottom)=\"scrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
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
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    ", ".ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection{border-color:#bec4cd;box-shadow:none}.ant-select-search--inline .ant-select-search__field{margin-left:21px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5;left:12px;right:unset}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-top:0!important;margin-bottom:0!important}.ant-select-dropdown-menu-item{border-top:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:5px}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.cmacs-select-search-input{width:100%;border:none;outline:0;padding:0 10px 0 6px}.cmacs-select-search-input::-webkit-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff}.cmacs-select-search-icon{color:#dee0e5}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    ], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "loading", void 0);
    return CmacsSelectComponent;
}());
export { CmacsSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsR0FFdkIsTUFBTSxvQkFBb0IsQ0FBQztBQU01QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMseUJBQXlCLEVB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YXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelNpemVMRFNUeXBlLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRGaWx0ZXJPcHRpb24sXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q21hY3NPcHRpb25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NtYWNzU2VsZWN0U2VydmljZX0gZnJvbSBcIi4vY21hY3Mtc2VsZWN0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VsZWN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzU2VsZWN0JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ3NpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdzaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW5vLWFycm93XSc6ICchc2hvd0Fycm93JyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICdhbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICduek9wZW4nLFxyXG4gICAgJyhjbGljayknOiAndG9nZ2xlRHJvcERvd24oKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBuek9wZW4gPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdmFsdWU6IGFueSB8IGFueVtdO1xyXG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbikgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQpIHNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzT3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uQ29tcG9uZW50PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQpIGxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NPblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0ZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZyA9ICd0ZXN0LWNsYXNzJztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgYWN0aW9uID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dDdXN0b21TZWFyY2ggPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgY2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2hvd0Fycm93ID0gdHJ1ZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9DbGVhclNlYXJjaFZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXhNdWx0aXBsZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1heE11bHRpcGxlQ291bnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlcnZlclNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWx0ZXJPcHRpb24odmFsdWU6IFRGaWx0ZXJPcHRpb24pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IGNvbXBhcmVXaXRoKHZhbHVlOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uek9wZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLmlzSW5pdCkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ2F1dG9mb2N1cycsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgICAgIHRoaXMuY21hY3NGb2N1cy5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgdGhpcy5jbWFjc0JsdXIuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vbktleURvd24oZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGpzZG9jLWZvcm1hdFxyXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdFZhbHVlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlbENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtb2RlbFZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbW9kZWxWYWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpPcGVuID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cclxuICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50Lm1hcChvcHRpb24gPT4gb3B0aW9uLmNoYW5nZXMpLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQubWFwKGdyb3VwID0+XHJcbiAgICAgICAgICAgICAgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPyBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzIDogRU1QVFlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKSxcclxuICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC50b0FycmF5KClcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19