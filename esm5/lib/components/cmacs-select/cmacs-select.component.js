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
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsSelectComponent.prototype.trackValue = 
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
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    CmacsSelectComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
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
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    ", ".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{-webkit-transform:unset!important;transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection{border-color:#bec4cd;box-shadow:none}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important;max-width:94%}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5;left:12px;right:unset}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-top:0!important;margin-bottom:0!important}.ant-select-dropdown-menu-item{border-top:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.cmacs-select-search-input{width:100%;border:none;outline:0;padding:0 10px 0 6px}.cmacs-select-search-input::-webkit-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsRUFDUCxVQUFVLEdBQzFCLE1BQU0sb0JBQW9CLENBQUM7QUFNNUIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFD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QUF5Qzs7SUFFekMsaURBQWtEOztJQUVsRCx3REFBeUM7O0lBRXpDLHNDQUF3Qjs7SUFFeEIsNkNBQWtEOztJQUVsRCwrQ0FBaUM7O0lBRWpDLDBDQUE0Qzs7SUFDNUMsb0NBQXNDOztJQUV0QywwQ0FBNEM7O0lBQzVDLHVDQUF5Qzs7SUFFekMsK0NBQWlEOztJQUVqRCxnREFBa0Q7O0lBRWxELHVDQUF5Qzs7SUFFekMsMkNBQTZCOztJQUU3QiwyQ0FBNkI7O0lBRTdCLDhDQUEyQzs7SUFFM0MsMENBQXVDOztJQUV2Qyx5Q0FBc0M7O0lBRXRDLDBDQUF1Qzs7SUFFdkMsb0RBQWlEOztJQUVqRCx5Q0FBMEI7O0lBRTFCLCtDQUF3Qzs7SUFHeEMsaURBQThEOzs7OztJQXVJNUQsd0NBQTJCOztJQUMzQiwrQ0FBMEM7Ozs7O0lBQzFDLG1DQUE4Qjs7Ozs7SUFDOUIsNENBQWtDOzs7OztJQUNsQyx3Q0FBMEI7O0lBRTFCLDJDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWVyZ2UsIEVNUFRZLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZsYXRNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc05vdE5pbCxcclxuICBzbGlkZU1vdGlvbixcclxuICB0b0Jvb2xlYW4sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpTaXplTERTVHlwZSwgem9vbU1vdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBURmlsdGVyT3B0aW9uLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NtYWNzT3B0aW9uR3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDbWFjc1NlbGVjdFNlcnZpY2V9IGZyb20gXCIuL2NtYWNzLXNlbGVjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlbGVjdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NlbGVjdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbiwgem9vbU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICdzaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnc2l6ZT09PVwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1uby1hcnJvd10nOiAnIXNob3dBcnJvdycsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYWxsb3dDbGVhcicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnbnpPcGVuJyxcclxuICAgICcoY2xpY2spJzogJ3RvZ2dsZURyb3BEb3duKCknXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWxlY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgbnpPcGVuID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHZhbHVlOiBhbnkgfCBhbnlbXTtcclxuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSBzZWxlY3RUb3BDb250cm9sQ29tcG9uZW50OiBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc09wdGlvbkNvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc09wdGlvbkNvbXBvbmVudD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Hcm91cENvbXBvbmVudD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmcgPSAndGVzdC1jbGFzcyc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRhZ3NPdXQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0N1c3RvbVNlYXJjaCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBjbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaG93QXJyb3cgPSB0cnVlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0NsZWFyU2VhcmNoVmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmF1dG9DbGVhclNlYXJjaFZhbHVlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1heE11bHRpcGxlQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubWF4TXVsdGlwbGVDb3VudCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VydmVyU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyB8ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZpbHRlck9wdGlvbih2YWx1ZTogVEZpbHRlck9wdGlvbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgY29tcGFyZVdpdGgodmFsdWU6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRvRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJyxcclxuICAgICAgICAgICdhdXRvZm9jdXMnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICAgICAgdGhpcy5jbWFjc0ZvY3VzLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbik7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vbktleURvd24oZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGpzZG9jLWZvcm1hdFxyXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdFZhbHVlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlbENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtb2RlbFZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbW9kZWxWYWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpPcGVuID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cclxuICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50Lm1hcChvcHRpb24gPT4gb3B0aW9uLmNoYW5nZXMpLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQubWFwKGdyb3VwID0+XHJcbiAgICAgICAgICAgICAgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPyBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzIDogRU1QVFlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKSxcclxuICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC50b0FycmF5KClcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19