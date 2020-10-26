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
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this._tagsOut = false;
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
        this._cmacsOpen = false;
        // tslint:disable-next-line: member-ordering
        this._autoFocus = false;
        // tslint:disable-next-line: member-ordering
        this.isInit = false;
        // tslint:disable-next-line: member-ordering
        this.destroy$ = new Subject();
        // tslint:disable-next-line: member-ordering
        this.cmacsOnSearch = new EventEmitter();
        this.cmacsEditedInput = new EventEmitter();
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
        this.notFoundContentShow = true;
        // tslint:disable-next-line: member-ordering
        this.allowClear = false;
        this.open = false;
        // tslint:disable-next-line: member-ordering
        this.showSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.loading = false;
        this.showSelectAll = true;
        // tslint:disable-next-line: member-ordering
        this.showArrow = true;
        // tslint:disable-next-line: member-ordering
        this.tokenSeparators = [];
        this.selectAllLabel = 'Select All';
        renderer.addClass(this.elementRef.nativeElement, 'ant-select');
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
    Object.defineProperty(CmacsSelectComponent.prototype, "cmacsEditable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSelectService.cmacsEditable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.cmacsEditable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectComponent.prototype, "userDropdown", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSelectService.userDropdown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.userDropdown = toBoolean(value);
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
    Object.defineProperty(CmacsSelectComponent.prototype, "tagsOut", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tagsOut = toBoolean(value);
            this.nzSelectService.tagsOut = toBoolean(value);
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
        get: /**
         * @return {?}
         */
        function () {
            return this._cmacsOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cmacsOpen = toBoolean(value);
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
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin && _this.nzSelectService.isTagsSingleSelectMode) {
                if (_this.selectTopControlComponent.inputValue.length &&
                    _this.nzSelectService.activatedOption &&
                    !_this.nzSelectService.activatedOption.nzDisabled) {
                    _this.nzSelectService.clickOption(_this.nzSelectService.activatedOption);
                }
            }
        }));
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (_this.userDropdown && data.length && !_this.nzOpen) {
                _this.nzOpen = true;
                _this.updateCdkConnectedOverlayStatus();
            }
            _this.cmacsOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.nzSelectService.editedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.cmacsEditedInput.emit(data);
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
            if (_this.userDropdown && _this.searchValue === '' && value) {
                _this.nzOpen = false;
                _this.updateCdkConnectedOverlayStatus();
                return;
            }
            if (_this.nzSelectService.isTagsSingleSelectMode) {
                if (value && _this.nzSelectService.listOfCachedSelectedOption.length && _this.selectTopControlComponent.inputValue.length) {
                    value = false;
                    if (_this.nzOpen !== value) {
                        _this.openChange.emit(value);
                    }
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                    _this.nzOpen = value;
                    return;
                }
            }
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
                    template: "<div cdkOverlayOrigin\r\n  cmacs-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [class.cmacs-select-selection]=\"open\"\r\n  [nzOpen]=\"nzOpen\"\r\n  [searchValue]=\"searchValue\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"maxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"placeHolder\"\r\n  [nzAllowClear]=\"allowClear\"\r\n  [nzMaxTagCount]=\"maxTagCount\"\r\n  [nzShowArrow]=\"showArrow\"\r\n  [nzLoading]=\"loading\"\r\n  [cmacsOpen]=\"cmacsOpen\"\r\n  [cmacsEditable]=\"cmacsEditable\"\r\n  [nzSuffixIcon]=\"suffixIcon\"\r\n  [nzClearIcon]=\"clearIcon\"\r\n  [userDropdown]=\"userDropdown\"\r\n  [tagsOut]=\"_tagsOut\"\r\n  [action]=\"action\"\r\n  [nzRemoveIcon]=\"removeIcon\"\r\n  [nzShowSearch]=\"showSearch\"\r\n  [showCmacsSearch]=\"showCmacsSearch\"\r\n  [showCustomSearch]=\"showCustomSearch\"\r\n  [nzTokenSeparators]=\"tokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode || nzSelectService.isTagsSingleSelectMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  [class.cmacs-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  [class.cmacs-select-selection--action]=\"action\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-container *ngIf=\"open\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template\r\n  *ngIf=\"!open\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n  <div\r\n    class=\"ant-select-dropdown cmacs-custom-scrollbar\"\r\n    [class.cmacs-select-user-dropdown]=\"userDropdown\"\r\n    [class.cmacs-select-dropdown]=\"open\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"dropdownStyle\">\r\n    <div cmacs-option-container\r\n         style=\"overflow: auto;transform: translateZ(0px); scrollbar-color: #cfd3d9 #ffffff; scrollbar-width: thin;\"\r\n         (onSearch)=\"onSearch($event)\"\r\n         [showSearch]=\"showSearch\"\r\n         [showSelectAll]=\"showSelectAll\"\r\n         [notFoundContentShow]=\"notFoundContentShow\"\r\n         [notFoundContentCustom]=\"notFoundContentCustom\"\r\n         [userDropdown]=\"userDropdown\"\r\n         [selectAllLabel]=\"selectAllLabel\"\r\n         [showCmacsSearch]=\"showCmacsSearch\"\r\n         (keydown)=\"onKeyDown($event)\"\r\n         [nzMenuItemSelectedIcon]=\"menuItemSelectedIcon\"\r\n         [nzNotFoundContent]=\"notFoundContent\"\r\n         (nzScrollToBottom)=\"scrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\r\n  </div>\r\n  <div *ngIf=\"_tagsOut && nzSelectService.listOfCachedSelectedOption.length\" class=\"ant-select-selection--multiple cmacs-tags-out\" style=\"padding-top: 15px;\">\r\n    <div  class=\"ant-select-selection__rendered cmacs-select-selection__rendered\">\r\n      <ul>\r\n        <ng-container\r\n          *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : maxTagCount;trackBy:trackValue;\">\r\n          <li [@zoomMotion] [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" [attr.title]=\"option.nzLabel\"\r\n              [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\" class=\"ant-select-selection__choice\">\r\n            <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n            <span *ngIf=\"!option.nzDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                  (mousedown)=\"$event.preventDefault()\" (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!removeIcon; else removeIcon\"></i>\r\n        </span>\r\n          </li>\r\n        </ng-container>\r\n        <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > maxTagCount\" [@zoomMotion]\r\n            [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" class=\"ant-select-selection__choice\">\r\n          <div class=\"ant-select-selection__choice__content\">\r\n            <ng-container *ngIf=\"maxTagPlaceholder\">\r\n              <ng-template [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: maxTagCount}\">\r\n              </ng-template>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n              + {{ nzSelectService.listOfCachedSelectedOption.length - maxTagCount }} ...\r\n            </ng-container>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-select-lg]': 'size==="large"',
                        '[class.ant-select-sm]': 'size==="small"',
                        '[class.ant-select-enabled]': '!disabled',
                        '[class.ant-select-no-arrow]': '!showArrow',
                        '[class.ant-select-disabled]': 'disabled',
                        '[class.ant-select-allow-clear]': 'allowClear',
                        '[class.ant-select-open]': 'nzOpen || cmacsOpen',
                        '(click)': 'toggleDropDown()'
                    },
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    ", ".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.cmacs-select-dropdown-menu-item-divider{border-top:1px solid #2a7cff!important}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{-webkit-transform:unset!important;transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection,.ant-select-open .ant-select-selection:focus,.ant-select-open .ant-select-selection:focus-within,.ant-select-open .ant-select-selection:hover{border-color:#dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:3px 3px 0 0}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important;max-width:94%}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5;left:12px;right:unset}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-bottom:0;border:1px solid #dee0e5;margin-top:-1px;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:0 0 3px 3px}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-dropdown-menu-item{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-top:1px solid #dee0e5;padding:7px 14px}.ant-select-dropdown.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.cmacs-select-search-input{width:100%;border:none;outline:0;padding:0 10px 0 6px}.cmacs-select-search-input::-webkit-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff;padding-left:14px!important}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{top:unset;-webkit-transform:unset;transform:unset;bottom:15px;background-color:#fff!important}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .cmacs-user-dropdown-last-elem+.ant-select-selected-icon{bottom:22px}"]
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
        cmacsEditedInput: [{ type: Output }],
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
        notFoundContentShow: [{ type: Input }],
        allowClear: [{ type: Input }],
        open: [{ type: Input }],
        showSearch: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        showCustomSearch: [{ type: Input }],
        loading: [{ type: Input }],
        showSelectAll: [{ type: Input }],
        placeHolder: [{ type: Input }],
        maxTagCount: [{ type: Input }],
        dropdownRender: [{ type: Input }],
        suffixIcon: [{ type: Input }],
        clearIcon: [{ type: Input }],
        removeIcon: [{ type: Input }],
        notFoundContentCustom: [{ type: Input }],
        menuItemSelectedIcon: [{ type: Input }],
        showArrow: [{ type: Input }],
        tokenSeparators: [{ type: Input }],
        maxTagPlaceholder: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        autoClearSearchValue: [{ type: Input }],
        maxMultipleCount: [{ type: Input }],
        serverSearch: [{ type: Input }],
        cmacsEditable: [{ type: Input }],
        userDropdown: [{ type: Input }],
        mode: [{ type: Input }],
        filterOption: [{ type: Input }],
        tagsOut: [{ type: Input }],
        compareWith: [{ type: Input }],
        autoFocus: [{ type: Input }],
        cmacsOpen: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "notFoundContentShow", void 0);
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
    ], CmacsSelectComponent.prototype, "showCmacsSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "showSelectAll", void 0);
    return CmacsSelectComponent;
}());
export { CmacsSelectComponent };
if (false) {
    /** @type {?} */
    CmacsSelectComponent.prototype.nzOpen;
    /** @type {?} */
    CmacsSelectComponent.prototype._tagsOut;
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
    CmacsSelectComponent.prototype._cmacsOpen;
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
    CmacsSelectComponent.prototype.cmacsEditedInput;
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
    CmacsSelectComponent.prototype.notFoundContentShow;
    /** @type {?} */
    CmacsSelectComponent.prototype.allowClear;
    /** @type {?} */
    CmacsSelectComponent.prototype.open;
    /** @type {?} */
    CmacsSelectComponent.prototype.showSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.showCmacsSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.showCustomSearch;
    /** @type {?} */
    CmacsSelectComponent.prototype.loading;
    /** @type {?} */
    CmacsSelectComponent.prototype.showSelectAll;
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
    CmacsSelectComponent.prototype.notFoundContentCustom;
    /** @type {?} */
    CmacsSelectComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    CmacsSelectComponent.prototype.showArrow;
    /** @type {?} */
    CmacsSelectComponent.prototype.tokenSeparators;
    /** @type {?} */
    CmacsSelectComponent.prototype.maxTagPlaceholder;
    /** @type {?} */
    CmacsSelectComponent.prototype.selectAllLabel;
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
    /**
     * @type {?}
     * @private
     */
    CmacsSelectComponent.prototype.elementRef;
    /** @type {?} */
    CmacsSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsRUFDUCxVQUFVLEdBQzFCLE1BQU0sb0JBQW9CLENBQUM7QUFNNUIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHMUQ7SUFzU0UsOEJBQ1UsUUFBbUIsRUFDcEIsZUFBbUMsRUFDbEMsR0FBc0IsRUFDdEIsWUFBMEIsRUFDMUIsUUFBa0IsRUFDbEIsVUFBc0IsRUFDSCxXQUFvQztRQU52RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFsUWpFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVE7OztRQUF1QyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUMxRCxjQUFTOzs7UUFBZSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQzs7UUFFbkMscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQzs7OztRQU1qRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7O1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7O1FBRW5CLFdBQU0sR0FBRyxLQUFLLENBQUM7O1FBRWYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7O1FBWWQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7O1FBRTlDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7UUFFMUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O1FBRXpDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUVyQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7UUFFaEQsU0FBSSxHQUFrQixTQUFTLENBQUM7O1FBRWhDLHNCQUFpQixHQUFXLFlBQVksQ0FBQzs7UUFFekMsNkJBQXdCLEdBQUcsSUFBSSxDQUFDOztRQUVoQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBS0Msd0JBQW1CLEdBQUcsSUFBSSxDQUFDOztRQUUzQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBRyxLQUFLLENBQUM7O1FBRWIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFFbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7O1FBRXhCLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7UUFFekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLElBQUksQ0FBQzs7UUFpQnJDLGNBQVMsR0FBRyxJQUFJLENBQUM7O1FBRWpCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBSS9CLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBMEtyQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUF6S0Qsc0JBQ0ksc0RBQW9COzs7OztRQUR4QixVQUN5QixLQUFjO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksa0RBQWdCOzs7OztRQURwQixVQUNxQixLQUFhO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksOENBQVk7Ozs7O1FBRGhCLFVBQ2lCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksK0NBQWE7Ozs7UUFJakI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQzVDLENBQUM7Ozs7O1FBUEQsVUFDa0IsS0FBYztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBWTs7OztRQUloQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDM0MsQ0FBQzs7Ozs7UUFQRCxVQUNpQixLQUFjO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHNDQUFJOzs7OztRQURSLFVBQ1MsS0FBMkQ7WUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBWTs7Ozs7UUFEaEIsVUFDaUIsS0FBb0I7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQ0kseUNBQU87Ozs7O1FBRFgsVUFDYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUVELHNCQUVJLDZDQUFXOzs7OztRQUZmLFVBRWdCLEtBQW9DO1lBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDJDQUFTOzs7O1FBS2I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFSRCxVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVM7Ozs7UUFJYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQVBELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDBDQUFROzs7O1FBU1o7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFaRCxVQUNhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQU1ELDhDQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDekQsV0FBVyxFQUNYLFdBQVcsQ0FDWixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDdkc7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7OztJQUNsQyx5Q0FBVTs7Ozs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLE1BQTRCO1FBQ3JELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsbUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFO1lBQy9DLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxrREFBbUI7Ozs7O0lBQW5CLFVBQW9CLE1BQTRCLEVBQUUsQ0FBYTtRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHdDQUFTOzs7O0lBQVQsVUFBVSxLQUFvQjtRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsNkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBd0M7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCw4REFBK0I7OztJQUEvQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNsRztJQUNILENBQUM7Ozs7SUFFRCxpRUFBa0M7OztJQUFsQztRQUFBLGlCQU1DO1FBTEMsVUFBVTs7O1FBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsSUFBSSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO2dCQUNuRSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBY0gseUNBQXlDO0lBQ3ZDLG9EQUFvRDtJQUNwRCxrQ0FBa0M7Ozs7Ozs7O0lBQ2xDLHlDQUFVOzs7Ozs7OztJQUFWLFVBQVcsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O1lBQ2YsU0FBUyxHQUFVLEVBQUU7UUFDekIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXNDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBK0RDO1FBOURDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsV0FBVztZQUNwRSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUU7Z0JBQy9ELElBQUksS0FBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNO29CQUNsRCxLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWU7b0JBQ3BDLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUNsRDtvQkFDRSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUN4RTthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDN0UsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNwRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsS0FBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7YUFDeEM7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUM3RSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxVQUFVO1lBQ25GLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN2RSxJQUFJLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFdBQVcsS0FBSyxFQUFFLElBQUksS0FBSyxFQUFFO2dCQUN6RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsS0FBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7Z0JBQ3ZDLE9BQU87YUFDUjtZQUNELElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDL0MsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZILEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ2QsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTt3QkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzdCO29CQUNELEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixLQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLE9BQU87aUJBQ1I7YUFDRjtZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLEtBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7WUFDRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDbkUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLCtCQUErQixDQUFDLE9BQU87YUFDekMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixPQUFPOzs7UUFBQztZQUNOLE9BQUEsS0FBSyxpQ0FDSCxLQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTztnQkFDNUMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sR0FDcEMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdELEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUMvQyxPQUFBLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUE3RSxDQUE2RSxFQUM5RSxHQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFQdkIsQ0FPdUIsRUFDeEIsQ0FDRjthQUNBLFNBQVM7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FDdkMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxFQUN6QyxLQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxFQUFFLENBQy9DLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx1Q0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOztnQkFwYkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7b0JBQ3JDLGduTEFBNEM7O29CQUU1QyxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsZ0JBQWdCO3dCQUN6Qyx1QkFBdUIsRUFBRSxnQkFBZ0I7d0JBQ3pDLDRCQUE0QixFQUFFLFdBQVc7d0JBQ3pDLDZCQUE2QixFQUFFLFlBQVk7d0JBQzNDLDZCQUE2QixFQUFFLFVBQVU7d0JBQ3pDLGdDQUFnQyxFQUFFLFlBQVk7d0JBQzlDLHlCQUF5QixFQUFFLHFCQUFxQjt3QkFDaEQsU0FBUyxFQUFFLGtCQUFrQjtxQkFDOUI7NkJBRUMsK0xBU0M7aUJBR0o7Ozs7Z0JBckVDLFNBQVM7Z0JBeUJILGtCQUFrQjtnQkFyQ3hCLGlCQUFpQjtnQkFSVixZQUFZO2dCQUVaLFFBQVE7Z0JBU2YsVUFBVTtnQkF1QlYsc0JBQXNCLHVCQTJUbkIsSUFBSSxZQUFJLFFBQVE7OzttQ0EzT2xCLFNBQVMsU0FBQyxnQkFBZ0I7c0NBRTFCLFNBQVMsU0FBQyxtQkFBbUI7NENBRTdCLFNBQVMsU0FBQyw4QkFBOEI7NkNBRXhDLGVBQWUsU0FBQyxvQkFBb0I7a0RBRXBDLGVBQWUsU0FBQyx5QkFBeUI7Z0NBRXpDLE1BQU07bUNBQ04sTUFBTTtpQ0FFTixNQUFNOzZCQUVOLE1BQU07NEJBRU4sTUFBTTs2QkFFTixNQUFNO3VCQUVOLEtBQUs7b0NBRUwsS0FBSzsyQ0FFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsS0FBSztrQ0FFTCxLQUFLO3NDQUNMLEtBQUs7NkJBRUwsS0FBSzt1QkFDTCxLQUFLOzZCQUVMLEtBQUs7a0NBRUwsS0FBSzttQ0FFTCxLQUFLOzBCQUVMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7aUNBRUwsS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBRUwsS0FBSzt3Q0FDTCxLQUFLO3VDQUVMLEtBQUs7NEJBRUwsS0FBSztrQ0FFTCxLQUFLO29DQUdMLEtBQUs7aUNBQ0wsS0FBSzt1Q0FFTCxLQUFLO21DQUtMLEtBQUs7K0JBS0wsS0FBSztnQ0FLTCxLQUFLOytCQVNMLEtBQUs7dUJBU0wsS0FBSzsrQkFNTCxLQUFLOzBCQUtMLEtBQUs7OEJBTUwsS0FBSzs0QkFNTCxLQUFLOzRCQVVMLEtBQUs7MkJBU0wsS0FBSzs7SUFoSG1CO1FBQWYsWUFBWSxFQUFFOztxRUFBNEI7SUFFM0I7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7c0RBQWM7SUFFYjtRQUFmLFlBQVksRUFBRTs7NERBQW9CO0lBRW5CO1FBQWYsWUFBWSxFQUFFOztpRUFBeUI7SUFFeEI7UUFBZixZQUFZLEVBQUU7O2tFQUEwQjtJQUV6QjtRQUFmLFlBQVksRUFBRTs7eURBQWlCO0lBQ2hCO1FBQWYsWUFBWSxFQUFFOzsrREFBc0I7SUF1VWhELDJCQUFDO0NBQUEsQUFyYkQsSUFxYkM7U0EzWVksb0JBQW9COzs7SUFDL0Isc0NBQWU7O0lBQ2Ysd0NBQWlCOztJQUVqQixxQ0FBbUI7O0lBQ25CLDJDQUF5Qjs7SUFDekIsd0NBQTBEOztJQUMxRCx5Q0FBbUM7O0lBRW5DLGdEQUF5RDs7SUFFekQsNENBQXFCOzs7OztJQUlyQix5Q0FBMEI7Ozs7O0lBQzFCLDBDQUEyQjs7Ozs7SUFFM0IsMENBQTJCOzs7OztJQUUzQixzQ0FBdUI7Ozs7O0lBRXZCLHdDQUFpQzs7SUFFakMsZ0RBQWdFOztJQUVoRSxtREFBeUU7O0lBRXpFLHlEQUFxRzs7SUFFckcsMERBQW1HOztJQUVuRywrREFBa0g7O0lBRWxILDZDQUE4RDs7SUFDOUQsZ0RBQWlFOztJQUVqRSw4Q0FBNkQ7O0lBRTdELDBDQUE0RDs7SUFFNUQseUNBQXdEOztJQUV4RCwwQ0FBeUQ7O0lBRXpELG9DQUF5Qzs7SUFFekMsaURBQWtEOztJQUVsRCx3REFBeUM7O0lBRXpDLHNDQUF3Qjs7SUFFeEIsNkNBQWtEOztJQUVsRCwrQ0FBaUM7O0lBQ2pDLG1EQUFvRDs7SUFFcEQsMENBQTRDOztJQUM1QyxvQ0FBc0M7O0lBRXRDLDBDQUE0Qzs7SUFFNUMsK0NBQWlEOztJQUVqRCxnREFBa0Q7O0lBRWxELHVDQUF5Qzs7SUFDekMsNkNBQThDOztJQUU5QywyQ0FBNkI7O0lBRTdCLDJDQUE2Qjs7SUFFN0IsOENBQTJDOztJQUUzQywwQ0FBdUM7O0lBRXZDLHlDQUFzQzs7SUFFdEMsMENBQXVDOztJQUN2QyxxREFBa0Q7O0lBRWxELG9EQUFpRDs7SUFFakQseUNBQTBCOztJQUUxQiwrQ0FBd0M7O0lBR3hDLGlEQUE4RDs7SUFDOUQsOENBQXVDOzs7OztJQWtLckMsd0NBQTJCOztJQUMzQiwrQ0FBMEM7Ozs7O0lBQzFDLG1DQUE4Qjs7Ozs7SUFDOUIsNENBQWtDOzs7OztJQUNsQyx3Q0FBMEI7Ozs7O0lBQzFCLDBDQUE4Qjs7SUFDOUIsMkNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelNpemVMRFNUeXBlLCB6b29tTW90aW9uLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRGaWx0ZXJPcHRpb24sXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q21hY3NPcHRpb25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NtYWNzU2VsZWN0U2VydmljZX0gZnJvbSBcIi4vY21hY3Mtc2VsZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbW9kZWxHcm91cFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTZWxlY3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ3NpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFzaG93QXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbiB8fCBjbWFjc09wZW4nLFxyXG4gICAgJyhjbGljayknOiAndG9nZ2xlRHJvcERvd24oKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBuek9wZW4gPSBmYWxzZTtcclxuICBfdGFnc091dCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB2YWx1ZTogYW55IHwgYW55W107XHJcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NtYWNzT3BlbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDogQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Db21wb25lbnQpIGxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Db21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzRWRpdGVkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmcgPSAndGVzdC1jbGFzcyc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vdEZvdW5kQ29udGVudFNob3cgPSB0cnVlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q3VzdG9tU2VhcmNoID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBjbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNob3dBcnJvdyA9IHRydWU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbWF4TXVsdGlwbGVDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tYXhNdWx0aXBsZUNvdW50ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZXJ2ZXJTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc0VkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbWFjc0VkaXRhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbWFjc0VkaXRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNtYWNzRWRpdGFibGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB1c2VyRHJvcGRvd24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93biA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdXNlckRyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93bjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgfCAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWx0ZXJPcHRpb24odmFsdWU6IFRGaWx0ZXJPcHRpb24pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdGFnc091dCAodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RhZ3NPdXQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudGFnc091dCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgY29tcGFyZVdpdGgodmFsdWU6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRvRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jbWFjc09wZW4gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNtYWNzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jbWFjc09wZW47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLmlzSW5pdCkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ2F1dG9mb2N1cycsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgICAgIHRoaXMuY21hY3NGb2N1cy5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgdGhpcy5jbWFjc0JsdXIuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb24pO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub25LZXlEb3duKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBqc2RvYy1mb3JtYXRcclxuICAvKiogdXBkYXRlIG5nTW9kZWwgLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgKiovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBsZXQgbGlzdFZhbHVlOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RWYWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4gJiYgdGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRWYWx1ZS5sZW5ndGggJiZcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiAmJlxyXG4gICAgICAgICAgIXRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbi5uekRpc2FibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsaWNrT3B0aW9uKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKHRoaXMudXNlckRyb3Bkb3duICYmIGRhdGEubGVuZ3RoICYmICF0aGlzLm56T3Blbikge1xyXG4gICAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNtYWNzT25TZWFyY2guZW1pdChkYXRhKTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmVkaXRlZFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNtYWNzRWRpdGVkSW5wdXQuZW1pdChkYXRhKTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGVsQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1vZGVsVmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJEcm9wZG93biAmJiB0aGlzLnNlYXJjaFZhbHVlID09PSAnJyAmJiB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAmJiB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5uek9wZW4gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICAgICAgdGhpcy5uek9wZW4gPSB2YWx1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpPcGVuICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ibHVyKCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChncm91cCA9PlxyXG4gICAgICAgICAgICAgIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID8gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyA6IEVNUFRZXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkucGlwZShzdGFydFdpdGgodHJ1ZSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC50b0FycmF5KCksXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==