import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { utils, writeFile } from 'xlsx';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { addMonths, addYears, endOfMonth, setDay, setMonth, addDays, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarWeeks, isSameDay, isSameMonth, isSameYear, isThisMonth, isThisYear, setYear, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { DatePipe, DOCUMENT, CommonModule, registerLocaleData } from '@angular/common';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { ExportAsService, ExportAsModule } from 'ngx-export-as';
import { NzMenuDirective, NzMenuModule } from 'ng-zorro-antd/menu';
import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { InputBoolean as InputBoolean$1, isNotNil as isNotNil$1, NgZorroAntdModule, NZ_I18N, en_US, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { VgCoreModule } from 'videogular2/compiled/core';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { takeUntil, startWith, auditTime, distinctUntilChanged, map, tap, flatMap, filter, share, skip, mapTo, debounceTime, take, pluck } from 'rxjs/operators';
import { DateHelperService, NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { Subject, merge, combineLatest, BehaviorSubject, EMPTY, ReplaySubject, fromEvent, Subscription } from 'rxjs';
import { __extends, __decorate, __metadata, __assign, __spread, __read, __values } from 'tslib';
import { FocusMonitor, FocusTrapFactory } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW, BACKSPACE, SPACE, TAB, ESCAPE, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { NgControl, NG_VALUE_ACCESSOR, FormsModule, FormControl, FormControlName, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CdkConnectedOverlay, CdkOverlayOrigin, Overlay, OverlayRef, ConnectionPositionPair, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, Renderer2, ViewChild, ViewEncapsulation, Directive, Self, forwardRef, EventEmitter, Output, Host, TemplateRef, HostListener, ContentChild, ViewContainerRef, Injectable, SkipSelf, InjectionToken, Pipe, ViewChildren, defineInjectable, inject, NgModule, Injector, ComponentFactoryResolver, Type } from '@angular/core';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzUpdateHostClassService, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG, toBoolean, isNotNil, slideMotion, valueFunctionProp, NzNoAnimationDirective, fadeMotion, reverseChildNodes, NzMenuBaseService, collapseMotion, getPlacementName, zoomBigMotion, DEFAULT_SUBMENU_POSITIONS, POSITION_MAP, NzDropdownHigherOrderServiceToken, InputNumber, NzTreeBaseService, NzTreeBase, NzTreeHigherOrderServiceToken, isNil, zoomMotion, getElementOffset, isPromise, isNonEmptyString, isTemplateRef, helpMotion, slideAlertMotion, arraysEqual, ensureNumberInRange, getPercent, getPrecision, shallowCopyArray, silentEvent, reqAnimFrame, LoggerService } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsButtonComponent = /** @class */ (function () {
    function CmacsButtonComponent(elementRef, cdr, renderer, updateHostClassService, zone, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.updateHostClassService = updateHostClassService;
        this.zone = zone;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.el = this.elementRef.nativeElement;
        this.iconOnly = false;
        this.nzWave = new NzWaveDirective(this.zone, this.elementRef, this.waveConfig, this.animationType);
        // tslint:disable-next-line: no-input-rename
        this.nzBlock = false;
        // tslint:disable-next-line: no-input-rename
        this.nzGhost = false;
        // tslint:disable-next-line: no-input-rename
        this.nzSearch = false;
        this.loading = false;
        this.action = false;
        this.type = 'default';
        this.shape = null;
        this.size = 'default';
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
    }
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn';
        /** @type {?} */
        var prefixCmacs = 'cmacs-btn';
        /** @type {?} */
        var sizeMap = { large: 'lg', small: 'sm' };
        this.updateHostClassService.updateHostClass(this.el, (_a = {},
            _a[prefixCls + "-" + this.type] = this.type,
            _a[prefixCls + "-" + this.shape] = this.shape,
            _a[prefixCls + "-" + sizeMap[this.size]] = sizeMap[this.size],
            _a[prefixCls + "-loading"] = this.loading,
            _a[prefixCls + "-icon-only"] = this.iconOnly,
            _a[prefixCmacs + "-action"] = this.action,
            _a[prefixCmacs + "-with-icon"] = this.listOfIconElement !== undefined && this.listOfIconElement.length > 0 && this.contentElement.nativeElement.style.display !== 'none',
            _a[prefixCls + "-background-ghost"] = this.nzGhost,
            _a[prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.loading);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzWave.ngOnDestroy();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.loading);
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.hideBtn = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.style.display = 'none';
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.showBtn = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.style.display = 'inline-block';
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.disabledBtn = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.disabled = true;
    };
    CmacsButtonComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[cmacs-button]',
                    exportAs: 'cmacsButton',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<i nz-icon type=\"loading\" *ngIf=\"loading\"></i>\r\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\r\n",
                    styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px}.ant-btn-primary{background-color:#2a7cff;border-color:#2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover{border:none;color:#97a0ae}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default[disabled],.ant-btn-default[disabled]:focus,.ant-btn-default[disabled]:hover{color:#97a0ae;background-color:#fff;border-color:#f3f3f4}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{border:none}.ant-btn-icon-only{border:1px solid #dee0e5;color:#656c79;background-color:#fff!important}.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{color:#2a7cff;background-color:#fff!important}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-action{height:30px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"]
                }] }
    ];
    /** @nocollapse */
    CmacsButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    CmacsButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
        nzBlock: [{ type: Input, args: ['block',] }],
        nzGhost: [{ type: Input, args: ['ghost',] }],
        nzSearch: [{ type: Input, args: ['search',] }],
        loading: [{ type: Input }],
        action: [{ type: Input }],
        type: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonComponent.prototype, "nzBlock", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonComponent.prototype, "nzGhost", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonComponent.prototype, "action", void 0);
    return CmacsButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsButtonGroupComponent = /** @class */ (function () {
    function CmacsButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.overlap = false;
        this.disabled = false;
        this.disabledNav = false;
        this.prefixCls = 'ant-btn-group';
        this.buttons = [];
        this.indexBtn = 0;
    }
    Object.defineProperty(CmacsButtonGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        this.buttons = this.contentButtons.toArray();
        if (this.overlap) {
            for (var index = 1; index < this.buttons.length; index++) {
                this.buttons[index].hideBtn();
            }
        }
        if (this.disabled) {
            try {
                for (var _b = __values(this.buttons), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var iterator = _c.value;
                    iterator.disabledBtn();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        this.buttons[this.indexBtn--].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        this.buttons[this.indexBtn++].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.isDisableLeft = /**
     * @return {?}
     */
    function () {
        return this.indexBtn === 0 || this.disabled || this.disabledNav;
    };
    /**
     * @return {?}
     */
    CmacsButtonGroupComponent.prototype.isDisableRight = /**
     * @return {?}
     */
    function () {
        return this.indexBtn === this.buttons.length - 1 || this.disabled || this.disabledNav;
    };
    CmacsButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-button-group',
                    exportAs: 'cmacsButtonGroup',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<button cmacs-button [disabled]=\"isDisableLeft()\" *ngIf=\"overlap\" (click)=\"moveLeft()\">\r\n    <i nz-icon type=\"left\"></i>\r\n</button>\r\n\r\n<ng-content></ng-content>\r\n\r\n<button cmacs-button [disabled]=\"isDisableRight()\" *ngIf=\"overlap\" (click)=\"moveRight()\">\r\n    <i nz-icon type=\"right\"></i>\r\n</button>",
                    styles: ["button.ant-btn{height:30px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsButtonGroupComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    CmacsButtonGroupComponent.propDecorators = {
        nzSize: [{ type: Input }],
        overlap: [{ type: Input }],
        disabled: [{ type: Input }],
        disabledNav: [{ type: Input }],
        contentButtons: [{ type: ContentChildren, args: [CmacsButtonComponent,] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonGroupComponent.prototype, "overlap", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonGroupComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsButtonGroupComponent.prototype, "disabledNav", void 0);
    return CmacsButtonGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsInputDirective = /** @class */ (function () {
    function CmacsInputDirective(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        // tslint:disable-next-line: variable-name
        this._disabled = false;
        this.size = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    Object.defineProperty(CmacsInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    CmacsInputDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-input]',
                    exportAs: 'cmacsInput',
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "size === 'large'",
                        '[class.ant-input-sm]': "size === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    CmacsInputDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsInputDirective.propDecorators = {
        size: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CmacsInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsInputNumberComponent = /** @class */ (function () {
    function CmacsInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line: member-ordering
        this.cmacsBlur = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsFocus = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.size = 'default';
        // tslint:disable-next-line: member-ordering
        this.min = -Infinity;
        // tslint:disable-next-line: member-ordering
        this.max = Infinity;
        this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); // tslint:disable-line:no-any
        // tslint:disable-next-line: member-ordering
        this.placeHolder = '';
        // tslint:disable-next-line: member-ordering
        this.cmacsStep = 1;
        // tslint:disable-next-line: member-ordering
        this.disabled = false;
        // tslint:disable-next-line: member-ordering
        this.autoFocus = false;
        this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.updateAutoFocus = 
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.actualValue = this.parser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = this.actualValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = (/** @type {?} */ (this.getValidValue(val)));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.isNotCompleteNumber = 
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (isNaN((/** @type {?} */ (num))) ||
            num === '' ||
            num === null ||
            !!(num && num.toString().indexOf('.') === num.toString().length - 1));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getValidValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat((/** @type {?} */ (value)));
        if (isNaN(val)) {
            return value;
        }
        if (val < this.min) {
            val = this.min;
        }
        if (val > this.max) {
            val = this.max;
        }
        return val;
    };
    /**
     * @param {?} num
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        if (isNotNil(this.precision)) {
            return Number(Number(num).toFixed(this.precision));
        }
        return Number(num);
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.setValidateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        this.setValidateValue();
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getMaxPrecision = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        if (isNotNil(this.precision)) {
            return this.precision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.cmacsStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? -this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.step = /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        var val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        var outOfRange = val > this.max || val < this.min;
        if (val > this.max) {
            val = this.max;
        }
        else if (val < this.min) {
            val = this.min;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this[type](e, ratio, true);
        }), 600);
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && "" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        var displayValue = isNotNil(this.formatter(this.value)) ? this.formatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.max) {
                this.disabledUp = true;
            }
            if (val <= this.min) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // tslint:disable-next-line: deprecation
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.stop();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.registerOnChange = /**
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
    CmacsInputNumberComponent.prototype.registerOnTouched = /**
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
    CmacsInputNumberComponent.prototype.setDisabledState = /**
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
    CmacsInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                _this.onBlur();
                _this.cmacsBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
            else {
                _this.onFocus();
                _this.cmacsFocus.emit();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.autoFocus) {
            this.updateAutoFocus();
        }
        if (changes.formatter) {
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    CmacsInputNumberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    CmacsInputNumberComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-input-number',
                    exportAs: 'cmacsInputNumber',
                    template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n    (mousedown)=\"up($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon type=\"caret-up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n    (mousedown)=\"down($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon type=\"caret-down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-input-number-input\"\r\n    [disabled]=\"disabled\"\r\n    [attr.min]=\"min\"\r\n    [attr.max]=\"max\"\r\n    [placeholder]=\"placeHolder\"\r\n    [attr.step]=\"step\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp()\"\r\n    [ngModel]=\"displayValue\"\r\n    (ngModelChange)=\"onModelChange($event)\"/>\r\n</div>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsInputNumberComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-input-number-focused]': 'isFocused',
                        '[class.ant-input-number-lg]': "size === 'large'",
                        '[class.ant-input-number-sm]': "size === 'small'",
                        '[class.ant-input-number-disabled]': 'disabled'
                    },
                    styles: [".ant-input-number-handler-wrap{opacity:1!important;border:none}.ant-input-number-handler-down{border:none}.ant-input-number-handler-down-inner svg,.ant-input-number-handler-up-inner svg{font-size:18px;color:#bec4cd}.ant-input-number-handler-down-inner{margin-top:-10px}.ant-input-number{height:34px;border:1px solid #dee0e5;color:#acb3bf;box-shadow:none;outline:0;border-radius:3px}.ant-input-number:focus-within{color:#656c79;border:1px solid #dee0e5;box-shadow:none}.ant-input-number:hover{border:1px solid #bec4cd;box-shadow:none}.ant-input-number:hover .ant-input-number-handler-down-inner svg,.ant-input-number:hover .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number:focus-within .ant-input-number-handler-down-inner svg,.ant-input-number:focus-within .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number-handler-down-inner svg:hover,.ant-input-number-handler-up-inner svg:hover{color:#2a7cff!important}.ant-input-number-disabled{background-color:#f6f7fb!important;border-color:#dee0e5;cursor:not-allowed}.ant-input-number-disabled:hover{border-color:#dee0e5}.ant-input-number-disabled .ant-input-number-handler-wrap{display:inherit;background-color:#f6f7fb}.ant-input-number-handler-wrap:hover .ant-input-number-handler{height:50%}.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover{height:50%!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-down svg,.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-up svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler:hover{cursor:not-allowed!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    CmacsInputNumberComponent.propDecorators = {
        cmacsBlur: [{ type: Output }],
        cmacsFocus: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        size: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        parser: [{ type: Input }],
        precision: [{ type: Input }],
        placeHolder: [{ type: Input }],
        cmacsStep: [{ type: Input }],
        disabled: [{ type: Input }],
        autoFocus: [{ type: Input }],
        formatter: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsInputNumberComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsInputNumberComponent.prototype, "autoFocus", void 0);
    return CmacsInputNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsInputGroupComponent = /** @class */ (function () {
    function CmacsInputGroupComponent() {
        // tslint:disable-next-line: variable-name
        this._size = 'default';
        this.search = false;
        this.compact = false;
    }
    Object.defineProperty(CmacsInputGroupComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.suffix || this.prefix || this.prefixIcon || this.suffixIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isAddOn", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.addOnAfter || this.addOnBefore || this.addOnAfterIcon || this.addOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isAffixWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isLargeGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isLargeAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isLargeSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.search && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isSmallGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isSmallAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsInputGroupComponent.prototype, "isSmallSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.search && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.size = _this.size); }));
        }
    };
    /**
     * @return {?}
     */
    CmacsInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenInputSize();
    };
    CmacsInputGroupComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-input-group',
                    exportAs: 'cmacsInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"addOnBefore || addOnBeforeIcon\">\r\n    <i nz-icon [type]=\"addOnBeforeIcon\" *ngIf=\"addOnBeforeIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"addOnBefore\">{{ addOnBefore }}</ng-container>\r\n  </span>\r\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\r\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n  </span>\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"addOnAfter || addOnAfterIcon\">\r\n    <i nz-icon [type]=\"addOnAfterIcon\" *ngIf=\"addOnAfterIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"addOnAfter\">{{ addOnAfter }}</ng-container>\r\n  </span>\r\n</span>\r\n<ng-container *ngIf=\"isAffix && !isAddOn\">\r\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n</ng-container>\r\n<ng-template #affixTemplate>\r\n  <span class=\"ant-input-prefix\" *ngIf=\"prefix || prefixIcon\">\r\n    <!-- TODO: should have a class to set its color, cc: antd-->\r\n    <i nz-icon [type]=\"prefixIcon\" *ngIf=\"prefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"prefix\">{{ prefix }}</ng-container>\r\n  </span>\r\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-suffix\" *ngIf=\"suffix || suffixIcon\">\r\n    <i nz-icon [type]=\"suffixIcon\" *ngIf=\"suffixIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"suffix\">{{ suffix }}</ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-input-group-compact]': 'compact',
                        '[class.ant-input-search-enter-button]': 'search',
                        '[class.ant-input-search]': 'search',
                        '[class.ant-input-search-sm]': 'isSmallSearch',
                        '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                        '[class.ant-input-group-wrapper]': 'isAddOn',
                        '[class.ant-input-group]': 'isGroup',
                        '[class.ant-input-group-lg]': 'isLargeGroup',
                        '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                        '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                        '[class.ant-input-search-lg]': 'isLargeSearch',
                        '[class.ant-input-group-sm]': 'isSmallGroup',
                        '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                        '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                    }
                }] }
    ];
    CmacsInputGroupComponent.propDecorators = {
        listOfNzInputDirective: [{ type: ContentChildren, args: [CmacsInputDirective,] }],
        addOnBeforeIcon: [{ type: Input }],
        addOnAfterIcon: [{ type: Input }],
        prefixIcon: [{ type: Input }],
        suffixIcon: [{ type: Input }],
        addOnBefore: [{ type: Input }],
        addOnAfter: [{ type: Input }],
        prefix: [{ type: Input }],
        suffix: [{ type: Input }],
        search: [{ type: Input }],
        compact: [{ type: Input }],
        size: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsInputGroupComponent.prototype, "search", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsInputGroupComponent.prototype, "compact", void 0);
    return CmacsInputGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // return new CandyDate(setYear(this.date, year));
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        // const date = new Date(this.nativeDate);
        // date.setMonth(month);
        // return new CandyDate(date);
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.endOf = /**
     * @param {?} grain
     * @return {?}
     */
    function (grain) {
        switch (grain) {
            case 'month':
                return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
                case 'day':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate());
                case 'hour':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours());
                case 'minute':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes());
                case 'second':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes() &&
                        left.getSeconds() === right.getSeconds());
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isAfter = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()));
                case 'day':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()));
                case 'hour':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()));
                case 'minute':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()));
                case 'second':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() > right.getSeconds()));
            }
        }
        return false;
    };
    // TODO: Precipitate into a function "compare()"
    // TODO: Precipitate into a function "compare()"
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isBefore = 
    // TODO: Precipitate into a function "compare()"
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()));
                case 'day':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()));
                case 'hour':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()));
                case 'minute':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()));
                case 'second':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() < right.getSeconds()));
            }
        }
        return false;
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return this.isSame(new Date(), 'day');
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isInvalid = /**
     * @return {?}
     */
    function () {
        return isNaN(this.nativeDate.valueOf());
    };
    /**
     * @private
     * @param {?=} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = /**
     * @private
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (date === void 0) { date = this; }
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsPickerComponent = /** @class */ (function () {
    function CmacsPickerComponent(dateHelper, changeDetector) {
        this.dateHelper = dateHelper;
        this.changeDetector = changeDetector;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = (/** @type {?} */ ([
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]));
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    Object.defineProperty(CmacsPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            // The value that really decide the open state of overlay
            return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            if (this.isRange) {
                /** @type {?} */
                var firstInput = (/** @type {?} */ (((/** @type {?} */ (this.pickerInput.nativeElement))).querySelector('input:first-child')));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        }
    };
    // Show overlay content
    // Show overlay content
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.showOverlay = 
    // Show overlay content
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.openChange.emit(this.overlayOpen);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.hideOverlay = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
        }
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.onClickInputBox = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.onClickBackdrop = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.onOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsPickerComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = (/** @type {?} */ (position.connectionPair.originX));
        this.currentPositionY = (/** @type {?} */ (position.connectionPair.originY));
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsPickerComponent.prototype.onClickClear = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    CmacsPickerComponent.prototype.getReadableValue = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        /** @type {?} */
        var value;
        if (this.isRange) {
            value = ((/** @type {?} */ (this.value)))[this.getPartTypeIndex((/** @type {?} */ (partType)))];
        }
        else {
            value = (/** @type {?} */ (this.value));
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    CmacsPickerComponent.prototype.getPartTypeIndex = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        return { left: 0, right: 1 }[partType];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    CmacsPickerComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        // tslint:disable-next-line: no-non-null-assertion
        return this.isRange ? this.placeholder[this.getPartTypeIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsPickerComponent.prototype.isEmptyValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return !val; }));
        }
        else {
            return !value;
        }
    };
    // Whether open state is permanently controlled by user himself
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.isOpenHandledByUser = 
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    function () {
        return this.open !== undefined;
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.animationStart = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    };
    /**
     * @return {?}
     */
    CmacsPickerComponent.prototype.animationDone = /**
     * @return {?}
     */
    function () {
        this.animationOpenState = this.realOpenState;
    };
    CmacsPickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-picker',
                    exportAs: 'cmacsPicker',
                    template: "<span\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\r\n  [ngStyle]=\"style\"\r\n  tabindex=\"0\"\r\n  (click)=\"onClickInputBox()\"\r\n>\r\n  <!-- Content of single picker -->\r\n  <ng-container *ngIf=\"!isRange\">\r\n    <input\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n\r\n      [disabled]=\"disabled\"\r\n      readonly\r\n      value=\"{{ getReadableValue() }}\"\r\n      placeholder=\"{{ getPlaceholder() }}\"\r\n    />\r\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- Content of range picker -->\r\n  <ng-container *ngIf=\"isRange\">\r\n    <span\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\r\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\r\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n    </span>\r\n  </ng-container>\r\n</span>\r\n\r\n<!-- Input for Range ONLY -->\r\n<ng-template #tplRangeInput let-partType=\"partType\">\r\n  <input\r\n    class=\"{{ prefixCls }}-range-picker-input\"\r\n    [disabled]=\"disabled\"\r\n    readonly\r\n    value=\"{{ getReadableValue(partType) }}\"\r\n    placeholder=\"{{ getPlaceholder(partType) }}\"\r\n  />\r\n</ng-template>\r\n\r\n<!-- Right operator icons -->\r\n<ng-template #tplRightRest>\r\n  <i\r\n    nz-icon\r\n    type=\"close-circle\"\r\n    theme=\"fill\"\r\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\r\n    class=\"{{ prefixCls }}-picker-clear\"\r\n    (click)=\"onClickClear($event)\"\r\n  ></i>\r\n  <span class=\"{{ prefixCls }}-picker-icon\">\r\n    <i nz-icon type=\"calendar\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<!-- Overlay -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  (backdropClick)=\"onClickBackdrop()\"\r\n  (detach)=\"onOverlayDetach()\"\r\n>\r\n  <div\r\n    [nzNoAnimation]=\"noAnimation\"\r\n    [@slideMotion]=\"dropdownAnimation\"\r\n    (@slideMotion.start)=\"animationStart()\"\r\n    (@slideMotion.done)=\"animationDone()\"\r\n    style=\"position: relative;\"\r\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\r\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\r\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>",
                    animations: [slideMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CmacsPickerComponent.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ChangeDetectorRef }
    ]; };
    CmacsPickerComponent.propDecorators = {
        noAnimation: [{ type: Input }],
        isRange: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }],
        placeholder: [{ type: Input }],
        allowClear: [{ type: Input }],
        autoFocus: [{ type: Input }],
        className: [{ type: Input }],
        format: [{ type: Input }],
        size: [{ type: Input }],
        style: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        openChange: [{ type: Output }],
        origin: [{ type: ViewChild, args: ['origin',] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        pickerInput: [{ type: ViewChild, args: ['pickerInput',] }]
    };
    return CmacsPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: max-line-length
/** @type {?} */
var POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.allowClear = true;
        this.autoFocus = false;
        this.disabled = false;
        this.popupStyle = POPUP_STYLE_PATCH;
        this.cmacsOnOpenChange = new EventEmitter();
        this.isRange = false; // Indicate whether the value is a range value
        // Indicate whether the value is a range value
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { return void 0; });
        this.onTouchedFn = (/**
         * @return {?}
         */
        function () { return void 0; });
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = /**
     * @return {?}
     */
    function () {
        this.value = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the Locale is not handled by user
        if (!this.locale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.setLocale(); }));
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.popupStyle) {
            // Always assign the popup style patch
            this.popupStyle = this.popupStyle ? __assign({}, this.popupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once PlaceHolder assigned at the first time
        if (changes.placeHolder && changes.placeHolder.firstChange && typeof this.placeHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.locale) {
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (this.isRange) {
            /** @type {?} */
            var vAsRange = (/** @type {?} */ (this.value));
            if (vAsRange.length) {
                this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.value) {
                this.onChangeFn(((/** @type {?} */ (this.value))).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.cmacsOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.cdr.markForCheck();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    };
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = 
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    function () {
        this.locale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.locale) {
            this.placeHolder = this.isRange ? this.locale.lang.rangePlaceholder : this.locale.lang.placeholder;
        }
    };
    // Safe way of setting value with default
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = 
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.value = value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return new CandyDate(val); })) : [];
        }
        else {
            this.value = value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    };
    AbstractPickerComponent.propDecorators = {
        allowClear: [{ type: Input }],
        autoFocus: [{ type: Input }],
        disabled: [{ type: Input }],
        open: [{ type: Input }],
        className: [{ type: Input }],
        disabledDate: [{ type: Input }],
        locale: [{ type: Input }],
        placeHolder: [{ type: Input }],
        popupStyle: [{ type: Input }],
        dropdownClassName: [{ type: Input }],
        size: [{ type: Input }],
        style: [{ type: Input }],
        format: [{ type: Input }],
        value: [{ type: Input }],
        cmacsOnOpenChange: [{ type: Output }],
        picker: [{ type: ViewChild, args: [CmacsPickerComponent,] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AbstractPickerComponent.prototype, "allowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AbstractPickerComponent.prototype, "autoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AbstractPickerComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "open", void 0);
    return AbstractPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The base picker for header panels, current support: Year/Month
 */
var CmacsHeaderPickerComponent = /** @class */ (function (_super) {
    __extends(CmacsHeaderPickerComponent, _super);
    function CmacsHeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
    }
    /**
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.renderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.cmacsOnOpenChange.emit(open);
    };
    // Restore some initial props to let open as new in next time
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.cleanUp = 
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    CmacsHeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    CmacsHeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    CmacsHeaderPickerComponent.propDecorators = {
        placeHolder: [{ type: Input }],
        renderExtraFooter: [{ type: Input }],
        defaultValue: [{ type: Input }],
        format: [{ type: Input }]
    };
    return CmacsHeaderPickerComponent;
}(AbstractPickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDateRangePickerComponent = /** @class */ (function (_super) {
    __extends(CmacsDateRangePickerComponent, _super);
    function CmacsDateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.showWeek = false; // Should show as week picker
        _this.showToday = false;
        _this.cmacsOnPanelChange = new EventEmitter();
        _this.cmacsOnCalendarChange = new EventEmitter();
        _this.cmacsOnOk = new EventEmitter();
        return _this;
    }
    Object.defineProperty(CmacsDateRangePickerComponent.prototype, "showTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isRange && this.showToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        // Default format when it's empty
        if (!this.format) {
            if (this.showWeek) {
                this.format = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.format = this.showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.format = this.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.renderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    };
    // If has no timepicker and the user select a date by date panel, then close picker
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onValueChange = 
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.onValueChange.call(this, value);
        if (!this.showTime) {
            this.closeOverlay();
        }
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onCalendarChange = 
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            /** @type {?} */
            var rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nativeDate; }));
            this.cmacsOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onResultOk = 
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var value = (/** @type {?} */ (this.value));
            if (value.length) {
                this.cmacsOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.cmacsOnOk.emit([]);
            }
        }
        else {
            if (this.value) {
                this.cmacsOnOk.emit(((/** @type {?} */ (this.value))).nativeDate);
            }
            else {
                this.cmacsOnOk.emit(null);
            }
        }
        this.closeOverlay();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.cmacsOnOpenChange.emit(open);
    };
    // Setup fixed style for picker
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.setFixedPickerStyle = 
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showTimeFixes = {};
        if (this.showTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = __assign({}, showTimeFixes, this.style);
    };
    CmacsDateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                }] }
    ];
    /** @nocollapse */
    CmacsDateRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    CmacsDateRangePickerComponent.propDecorators = {
        dateRender: [{ type: Input }],
        disabledTime: [{ type: Input }],
        renderExtraFooter: [{ type: Input }],
        showToday: [{ type: Input }],
        mode: [{ type: Input }],
        ranges: [{ type: Input }],
        cmacsOnPanelChange: [{ type: Output }],
        cmacsOnCalendarChange: [{ type: Output }],
        showTime: [{ type: Input }],
        cmacsOnOk: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDateRangePickerComponent.prototype, "showToday", void 0);
    return CmacsDateRangePickerComponent;
}(AbstractPickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDatePickerComponent = /** @class */ (function (_super) {
    __extends(CmacsDatePickerComponent, _super);
    function CmacsDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.isRange = false;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    CmacsDatePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-date-picker',
                    exportAs: 'cmacsDatePicker',
                    template: "<cmacs-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"mode\"\r\n    (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"locale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"showTime\"\r\n    [format]=\"format\"\r\n    [dateRender]=\"dateRender\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [disabledTime]=\"disabledTime\"\r\n    [placeholder]=\"placeHolder\"\r\n    [dropdownClassName]=\"dropdownClassName\"\r\n    [popupStyle]=\"popupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"ranges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</cmacs-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsDatePickerComponent; }))
                        }
                    ],
                    styles: [".ant-calendar-picker-input{box-shadow:none}.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled){border-color:#bec4cd;color:#bec4cd}.ant-calendar-date{padding-top:2px}.ant-calendar-selected-day .ant-calendar-date{display:-ms-grid;display:grid}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date{background-color:transparent;color:rgba(0,0,0,.65)}.ant-calendar-selected-day:not(.ant-calendar-today)>.ant-calendar-date:after{content:'\u25CF';color:#2a7cff;margin-top:-9px;font-size:10px}.ant-calendar-today .ant-calendar-date{color:#fff!important;background-color:#2a7cff!important}.ant-calendar-cell.ng-star-inserted>.ant-calendar-date{width:30px;height:30px}.ant-calendar-header{margin-top:17px;margin-bottom:17px;border:none;height:17px;line-height:17px}.ant-calendar-header a{line-height:17px!important}.ant-calendar th{padding-top:0;padding-bottom:12px}.ant-calendar-date:hover{background-color:#f6f7fb}.ant-calendar-picker-icon{color:#656c79;cursor:pointer}.ant-calendar-picker i svg{height:16px;width:16px}.ant-calendar-picker-clear,.ant-calendar-picker-icon{width:16px;height:16px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDatePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return CmacsDatePickerComponent;
}(CmacsDateRangePickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMonthPickerComponent = /** @class */ (function (_super) {
    __extends(CmacsMonthPickerComponent, _super);
    function CmacsMonthPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.format = 'yyyy-MM';
        _this.endPanelMode = 'month';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    CmacsMonthPickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-month-picker',
                    exportAs: 'cmacsMonthPicker',
                    template: "<cmacs-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"style\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ dropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"popupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"disabledDate\"\r\n              [disabledYear]=\"disabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"value\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"locale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</cmacs-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsMonthPickerComponent; }))
                        }
                    ],
                    styles: [".ant-calendar-month-panel-header{line-height:17px;border:0}.ant-calendar-month-panel-month{padding-top:3px}.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month{background-color:transparent;color:#656c79;display:-ms-grid;display:grid}.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month::after{content:'\u25CF';color:#2a7cff;font-size:10px}.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover{color:#656c79;background-color:#fff}.ant-calendar-month-panel-month:hover{background-color:#f6f7fb}"]
                }] }
    ];
    /** @nocollapse */
    CmacsMonthPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsMonthPickerComponent.propDecorators = {
        format: [{ type: Input }]
    };
    return CmacsMonthPickerComponent;
}(CmacsHeaderPickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsYearPickerComponent = /** @class */ (function (_super) {
    __extends(CmacsYearPickerComponent, _super);
    function CmacsYearPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.format = 'yyyy';
        _this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    CmacsYearPickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-year-picker',
                    exportAs: 'cmacsYearPicker',
                    template: "<cmacs-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"style\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ dropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"popupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"disabledDate\"\r\n              [disabledYear]=\"disabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"value\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"locale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</cmacs-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsYearPickerComponent; }))
                        }
                    ],
                    styles: [".ant-calendar-year-panel-header{line-height:17px;border:0}.ant-calendar-year-panel-year{padding-top:3px}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year{background-color:transparent;color:#656c79;display:-ms-grid;display:grid}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year::after{content:'\u25CF';color:#2a7cff;font-size:10px}.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover{color:#656c79;background-color:#fff}.ant-calendar-year-panel-year:hover{background-color:#f6f7fb}"]
                }] }
    ];
    /** @nocollapse */
    CmacsYearPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsYearPickerComponent.propDecorators = {
        format: [{ type: Input }]
    };
    return CmacsYearPickerComponent;
}(CmacsHeaderPickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsWeekPickerComponent = /** @class */ (function (_super) {
    __extends(CmacsWeekPickerComponent, _super);
    function CmacsWeekPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.showWeek = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    CmacsWeekPickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-week-picker',
                    exportAs: 'cmacsWeekPicker',
                    template: "<cmacs-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"mode\"\r\n    (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"locale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"showTime\"\r\n    [format]=\"format\"\r\n    [dateRender]=\"dateRender\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [disabledTime]=\"disabledTime\"\r\n    [placeholder]=\"placeHolder\"\r\n    [dropdownClassName]=\"dropdownClassName\"\r\n    [popupStyle]=\"popupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"ranges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</cmacs-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsWeekPickerComponent; }))
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CmacsWeekPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return CmacsWeekPickerComponent;
}(CmacsDateRangePickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsRangePickerComponent = /** @class */ (function (_super) {
    __extends(CmacsRangePickerComponent, _super);
    function CmacsRangePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.isRange = true;
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
        return _this;
    }
    CmacsRangePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-range-picker',
                    exportAs: 'cmacsRangePicker',
                    template: "<cmacs-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"value\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"open\"\r\n  [disabled]=\"disabled\"\r\n  [format]=\"format\"\r\n  [allowClear]=\"allowClear\"\r\n  [autoFocus]=\"autoFocus\"\r\n  [className]=\"className\"\r\n  [placeholder]=\"placeHolder\"\r\n  [size]=\"size\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"mode\"\r\n    (panelModeChange)=\"cmacsOnPanelChange.emit($event)\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"locale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"showTime\"\r\n    [format]=\"format\"\r\n    [dateRender]=\"dateRender\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [disabledTime]=\"disabledTime\"\r\n    [placeholder]=\"placeHolder\"\r\n    [dropdownClassName]=\"dropdownClassName\"\r\n    [popupStyle]=\"popupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"ranges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</cmacs-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRangePickerComponent; }))
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CmacsRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return CmacsRangePickerComponent;
}(CmacsDateRangePickerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsTimePickerComponent = /** @class */ (function () {
    function CmacsTimePickerComponent() {
        this.defaultOpenValue = new Date();
        this.disabled = false;
        this.allowEmpty = true;
        this.use12Hours = false;
        this.placeholder = "Select a time";
        this.format = 'HH:mm:ss';
        this._open = false;
        this._value = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    Object.defineProperty(CmacsTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("set value");
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.value = time;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CmacsTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-time-picker',
                    template: "<nz-time-picker #timeElement [ngModel]=\"_value\" (ngModelChange)=\"onModelChange($event)\"\r\n    [nzDefaultOpenValue]=defaultOpenValue [nzFormat]=format [nzDisabled]=disabled\r\n    [nzFormat]=format [nzUse12Hours]=use12Hours [nzAllowEmpty]=allowEmpty></nz-time-picker>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsTimePickerComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsTimePickerComponent.ctorParameters = function () { return []; };
    CmacsTimePickerComponent.propDecorators = {
        defaultOpenValue: [{ type: Input }],
        disabled: [{ type: Input }],
        allowEmpty: [{ type: Input }],
        use12Hours: [{ type: Input }],
        placeholder: [{ type: Input }],
        format: [{ type: Input }],
        _open: [{ type: Input }]
    };
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Boolean)
    ], CmacsTimePickerComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsTimePickerComponent.prototype, "allowEmpty", void 0);
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsTimePickerComponent.prototype, "use12Hours", void 0);
    return CmacsTimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsStepComponent = /** @class */ (function () {
    function CmacsStepComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.secondary = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        // Set by parent.
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    Object.defineProperty(CmacsStepComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsStepComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    CmacsStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-step',
                    exportAs: 'cmacsStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\r\n<div class=\"ant-steps-item-icon\" [class.ant-steps-item-icon-secondary]=\"secondary\">\r\n  <ng-template [ngIf]=\"!showProcessDot\">\r\n    <span class=\"ant-steps-icon\" *ngIf=\"status === 'finish' && !nzIcon && !secondary\"><i nz-icon type=\"check\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"status === 'error'\"><i nz-icon type=\"close\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"(status === 'process' || status === 'wait') && !nzIcon\"></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\r\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\r\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n      </ng-container>\r\n      <ng-template #iconTemplate>\r\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\r\n    </ng-template>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"showProcessDot\">\r\n    <span class=\"ant-steps-icon\">\r\n      <ng-template #processDotTemplate>\r\n        <span class=\"ant-steps-icon-dot\"></span>\r\n      </ng-template>\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:status, index:index }\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</div>\r\n<div class=\"ant-steps-item-content\">\r\n  <div class=\"ant-steps-item-title\" [class.ant-steps-item-title-secondary]=\"secondary\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-steps-item-description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                    host: {
                        '[class.ant-steps-item-wait]': 'status === "wait"',
                        '[class.ant-steps-item-process]': 'status === "process"',
                        '[class.ant-steps-item-finish]': 'status === "finish"',
                        '[class.ant-steps-item-error]': 'status === "error"',
                        '[class.ant-steps-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        title: [{ type: Input }],
        secondary: [{ type: Input }],
        description: [{ type: Input }],
        status: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return CmacsStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsWizardComponent = /** @class */ (function () {
    function CmacsWizardComponent() {
        this.current = 0;
        this.direction = 'vertical';
        this.labelPlacement = 'horizontal';
        this.size = 'default';
        this.startIndex = 0;
        this.status = 'process';
        this.showProcessDot = false;
        this.destroy$ = new Subject();
    }
    Object.defineProperty(CmacsWizardComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.startIndex || changes.direction || changes.status || changes.current) {
            this.updateChildrenSteps();
        }
        if (changes.direction || changes.nzProgressDot || changes.labelPlacement || changes.size) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsWizardComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /*let stepPrimaryIndexes = [];
        const stepsFiltered = this.steps.filter((step: CmacsStepComponent, index: number) => {
          if (!step.secondary) {
            stepPrimaryIndexes.push(index);
          }
          return !step.secondary;
        });
        this.steps.filter((step: CmacsStepComponent, index: number) => {
          if (step.secondary && stepPrimaryIndexes[this.current] > index) {
            step.index = 0;
            step.currentIndex = 1;
          } else {
            step.index = 1;
            step.currentIndex = 0;
          }
          return !step.secondary;
        });
        const length = stepsFiltered.length;
        stepsFiltered.forEach((step, index) => {*/
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.status;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.direction = _this.direction;
                    step.index = index + _this.startIndex;
                    step.currentIndex = _this.current;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsWizardComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.direction] = true,
            _a["ant-steps-label-horizontal"] = this.direction === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.labelPlacement === 'vertical') && this.direction === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.size === 'small',
            _a);
    };
    CmacsWizardComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'cmacs-wizard',
                    exportAs: 'cmacsWizard',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-title{font-size:12px}.ant-steps-item-title-secondary{line-height:35px!important}.ant-steps-vertical .ant-steps-item-title{line-height:24px;padding-left:10px}.ant-steps-item-process .ant-steps-item-icon{background:#fff;height:23px;width:23px}.ant-steps-item-icon{background:#fff;height:23px;width:23px;font-size:12px}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-tail{position:absolute;top:0;left:12px;padding:23px 0 0;height:130%}.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-icon-secondary{background:#dee0e5!important;height:9px!important;width:9px!important;position:relative;top:13px;left:8px;margin-right:28px!important;border-color:#dee0e5!important}.ant-steps-item-finish .ant-steps-item-icon-secondary{background:#2a7cff!important;border-color:#2a7cff!important}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:3px;padding-left:1px}"]
                }] }
    ];
    CmacsWizardComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [CmacsStepComponent,] }],
        current: [{ type: Input }],
        direction: [{ type: Input }],
        labelPlacement: [{ type: Input }],
        size: [{ type: Input }],
        startIndex: [{ type: Input }],
        status: [{ type: Input }],
        nzProgressDot: [{ type: Input }]
    };
    return CmacsWizardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCheckboxWrapperComponent = /** @class */ (function () {
    function CmacsCheckboxWrapperComponent(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    CmacsCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked; }));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value; }));
    };
    /**
     * @return {?}
     */
    CmacsCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    CmacsCheckboxWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-checkbox-wrapper',
                    exportAs: 'cmacsCheckboxWrapper',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    CmacsCheckboxWrapperComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
    return CmacsCheckboxWrapperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCheckboxComponent = /** @class */ (function () {
    function CmacsCheckboxComponent(elementRef, renderer, cmacsCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cmacsCheckboxWrapperComponent = cmacsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.checkedChange = new EventEmitter();
        this.theme = 'light';
        this.autoFocus = false;
        this.disabled = false;
        this.indeterminate = false;
        this.checked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.checked);
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.innerCheckedChange = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        if (!this.disabled) {
            this.checked = checked;
            this.onChange(this.checked);
            this.checkedChange.emit(this.checked);
            if (this.cmacsCheckboxWrapperComponent) {
                this.cmacsCheckboxWrapperComponent.onChange();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement && this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.registerOnChange = /**
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
    CmacsCheckboxComponent.prototype.registerOnTouched = /**
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
    CmacsCheckboxComponent.prototype.setDisabledState = /**
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
    CmacsCheckboxComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateAutoFocus();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    CmacsCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-checkbox]',
                    exportAs: 'cmacsCheckbox',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<span class=\"ant-checkbox\"\r\n  [class.ant-checkbox-checked]=\"checked && !indeterminate\"\r\n  [class.ant-checkbox-disabled]=\"disabled\"\r\n  [class.cmacs-dark-theme]=\"theme === 'dark'\"\r\n  [class.ant-checkbox-indeterminate]=\"indeterminate\">\r\n  <input #inputElement [checked]=\"checked\" [ngModel]=\"checked\" [disabled]=\"disabled\" (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\"></span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\"><ng-content></ng-content></span>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsCheckboxComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '(click)': 'hostClick($event)'
                    },
                    styles: [".ant-checkbox-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-checkbox-checked .ant-checkbox-inner::after{border-color:#2a7cff}.ant-checkbox-checked .ant-checkbox-inner{background-color:#fff;border-color:#dee0e5}.ant-checkbox-indeterminate .ant-checkbox-inner::after{width:10px;height:10px;background-color:#2a7cff}.ant-checkbox-disabled .ant-checkbox-inner{background-color:#f6f7fb;border-color:#dee0e5!important}.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner{border-color:#bec4cd}.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-checkbox-checked:hover .ant-checkbox-inner,.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-checked .ant-checkbox-inner{background-color:#0d1e3b;border-color:#2d3d5a}.cmacs-dark-theme .ant-checkbox-inner{background-color:#0d1e3b;border:1px solid #2d3d5a}.cmacs-dark-theme.ant-checkbox-indeterminate .ant-checkbox-inner::after{width:10px;height:10px;background-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-disabled .ant-checkbox-inner{background-color:#6a7693;border-color:#2d3d5a!important}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-wrapper:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox:hover .ant-checkbox-inner{border-color:#2d3d5a}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.cmacs-dark-theme.ant-checkbox-checked:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: CmacsCheckboxWrapperComponent, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    CmacsCheckboxComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        checkedChange: [{ type: Output }],
        value: [{ type: Input }],
        theme: [{ type: Input }],
        autoFocus: [{ type: Input }],
        disabled: [{ type: Input }],
        indeterminate: [{ type: Input }],
        checked: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "autoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "indeterminate", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "checked", void 0);
    return CmacsCheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCheckboxGroupComponent = /** @class */ (function () {
    function CmacsCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.options = [];
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    CmacsCheckboxGroupComponent.prototype.onOptionChange = /**
     * @return {?}
     */
    function () {
        this.onChange(this.options);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsCheckboxGroupComponent.prototype.trackByOption = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * @return {?}
     */
    CmacsCheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCheckboxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.options = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCheckboxGroupComponent.prototype.registerOnChange = /**
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
    CmacsCheckboxGroupComponent.prototype.registerOnTouched = /**
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
    CmacsCheckboxGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-checkbox-group',
                    exportAs: 'cmacsCheckboxGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<label cmacs-checkbox\r\n  *ngFor=\"let option of options; trackBy:trackByOption\"\r\n  [disabled]=\"option.disabled || disabled\"\r\n  [(checked)]=\"option.checked\"\r\n  (checkedChange)=\"onOptionChange()\">\r\n  <span>{{ option.label }}</span>\r\n</label>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsCheckboxGroupComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CmacsCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CmacsCheckboxGroupComponent.propDecorators = {
        disabled: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
    return CmacsCheckboxGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function CmacsRadioComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.disabled = false;
        this.autoFocus = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsRadioComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.disabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsRadioComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
                _this.touched$.next();
            }
        }));
        this.updateAutoFocus();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsRadioComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    CmacsRadioComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[cmacs-radio]',
                    exportAs: 'cmacsRadio',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"disabled\">\r\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"disabled\" [checked]=\"checked\" [attr.name]=\"name\">\r\n  <span class=\"ant-radio-inner\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRadioComponent; })),
                            multi: true
                        }
                    ],
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '[class.ant-radio-wrapper-checked]': 'checked',
                        '[class.ant-radio-wrapper-disabled]': 'disabled'
                    },
                    styles: [".ant-radio-inner::after{top:1px;left:1px;width:12px;height:12px;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus,.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}"]
                }] }
    ];
    /** @nocollapse */
    CmacsRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    CmacsRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        autoFocus: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsRadioComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsRadioComponent.prototype, "autoFocus", void 0);
    return CmacsRadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsRadioButtonComponent = /** @class */ (function (_super) {
    __extends(CmacsRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function CmacsRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    CmacsRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-radio-button]',
                    exportAs: 'cmacsRadioButton',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRadioComponent; })),
                            multi: true
                        },
                        {
                            provide: CmacsRadioComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRadioButtonComponent; }))
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"disabled\">\r\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"disabled\" [checked]=\"checked\" [attr.name]=\"name\">\r\n  <span class=\"ant-radio-button-inner\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-button-wrapper-checked]': 'checked',
                        '[class.ant-radio-button-wrapper-disabled]': 'disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    return CmacsRadioButtonComponent;
}(CmacsRadioComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsRadioGroupComponent = /** @class */ (function () {
    function CmacsRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.buttonStyle = 'outline';
        this.size = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                function (radio) {
                    radio.checked = radio.value === _this.value;
                    if (isNotNil(_this.disabled)) {
                        radio.disabled = _this.disabled;
                    }
                    if (_this.name) {
                        radio.name = _this.name;
                    }
                    radio.markForCheck();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, __spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.select$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                if (_this.value !== radio.value) {
                    _this.value = radio.value;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            }));
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, __spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.touched$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.writeValue = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.registerOnChange = /**
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
    CmacsRadioGroupComponent.prototype.registerOnTouched = /**
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
    CmacsRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-radio-group',
                    exportAs: 'cmacsRadioGroup',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group-large]': "size === 'large'",
                        '[class.ant-radio-group-small]': "size === 'small'",
                        '[class.ant-radio-group-solid]': "buttonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return CmacsRadioComponent; })), { descendants: true },] }],
        disabled: [{ type: Input }],
        buttonStyle: [{ type: Input }],
        size: [{ type: Input }],
        name: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsRadioGroupComponent.prototype, "disabled", void 0);
    return CmacsRadioGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsTagComponent = /** @class */ (function () {
    function CmacsTagComponent(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.mode = 'default';
        this.cmacsStatusType = false;
        this.disabled = false;
        this.checked = false;
        this.noAnimation = false;
        this.afterClose = new EventEmitter();
        this.onClose = new EventEmitter();
        this.checkedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    CmacsTagComponent.prototype.isPresetColor = /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTagComponent.prototype.updateClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.presetColor = this.isPresetColor(this.color);
        /** @type {?} */
        var prefix = 'ant-tag';
        /** @type {?} */
        var cmacsPrefix = 'cmacs-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.color && !this.presetColor,
            _a[prefix + "-" + this.color] = this.presetColor,
            _a[prefix + "-checkable"] = this.mode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.checked,
            _a[cmacsPrefix + "-closeable"] = this.mode === 'closeable',
            _a["" + cmacsPrefix] = this.cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType,
            _a[cmacsPrefix + "-" + this.cmacsGridType] = this.cmacsGridType,
            _a[cmacsPrefix + "-" + this.cmacsPriorityType + "-priority"] = this.cmacsPriorityType,
            _a[cmacsPrefix + "-status"] = this.cmacsStatusType,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'checkable') {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.afterClose.emit();
        }
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    CmacsTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-tag',
                    exportAs: 'cmacsTag',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    animations: [fadeMotion],
                    template: "<div [class.cmacs-closeable-inner]=\"mode === 'closeable' && !disabled\" [class.cmacs-closeable-disabled]=\"disabled\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<i nz-icon type=\"close\" *ngIf=\"mode==='closeable' && !disabled\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[@fadeMotion]': '',
                        '(@fadeMotion.done)': 'afterAnimation($event)',
                        '(click)': 'updateCheckedStatus()',
                        '[style.background-color]': 'presetColor? null : color'
                    },
                    styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:1px solid #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:1px solid #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important;cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTagComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    CmacsTagComponent.propDecorators = {
        mode: [{ type: Input }],
        cmacsGridType: [{ type: Input }],
        cmacsPriorityType: [{ type: Input }],
        cmacsStatusType: [{ type: Input }],
        disabled: [{ type: Input }],
        color: [{ type: Input }],
        checked: [{ type: Input }],
        noAnimation: [{ type: Input }],
        afterClose: [{ type: Output }],
        onClose: [{ type: Output }],
        checkedChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTagComponent.prototype, "checked", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTagComponent.prototype, "noAnimation", void 0);
    return CmacsTagComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsTimelineItemComponent = /** @class */ (function () {
    function CmacsTimelineItemComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.color = 'gray';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tryUpdateCustomColor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.tryUpdateCustomColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    };
    CmacsTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    // tslint:disable-next-line:component-selector
                    selector: 'cmacs-timeline-item, [cmacs-timeline-item]',
                    exportAs: 'cmacsTimelineItem',
                    template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-gray]=\"color === 'gray'\"\r\n    [class.ant-timeline-item-head-blue]=\"color === 'blue'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!dot\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"dot\">{{ dot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>",
                    styles: [".ant-timeline-item-head{width:8px;height:8px;border-width:5px}.ant-timeline-item-head-gray{color:#3b3f46;border-color:#dee0e5!important}.ant-timeline-item-tail{border-left-style:dotted}.ant-timeline-item-head-custom{padding:0;width:16px;height:16px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    CmacsTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
        color: [{ type: Input }],
        dot: [{ type: Input }]
    };
    return CmacsTimelineItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsTimelineComponent = /** @class */ (function () {
    function CmacsTimelineComponent(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.reverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTimelineComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var modeChanges = changes.mode;
        /** @type {?} */
        var reverseChanges = changes.reverse;
        /** @type {?} */
        var pendingChanges = changes.pending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges &&
            reverseChanges.previousValue !== reverseChanges.currentValue &&
            !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildren();
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTimelineComponent.prototype.updateChildren = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            var length_1 = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                item.isLast = !_this.reverse ? index === length_1 - 1 : index === 0;
                item.position =
                    _this.mode === 'left' || !_this.mode
                        ? undefined
                        : _this.mode === 'right'
                            ? 'right'
                            : _this.mode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            }));
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTimelineComponent.prototype.reverseChildTimelineDots = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    };
    CmacsTimelineComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    // tslint:disable-next-line:component-selector
                    selector: 'cmacs-timeline',
                    exportAs: 'cmacsTimeline',
                    template: "<ul \r\n    class=\"ant-timeline\" \r\n    [class.ant-timeline-right]=\"mode === 'right'\"\r\n    [class.ant-timeline-alternate]=\"mode === 'alternate'\" \r\n    [class.ant-timeline-pending]=\"!!pending\"\r\n    [class.ant-timeline-reverse]=\"reverse\" \r\n    #timeline>\r\n    <!-- User inserted timeline dots. -->\r\n    <ng-content></ng-content>\r\n    <!-- Pending dot. -->\r\n    <li *ngIf=\"pending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n        <div class=\"ant-timeline-item-tail\"></div>\r\n        <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"pendingDot\">\r\n            {{ pendingDot }}<i *ngIf=\"!pendingDot\" nz-icon type=\"loading\"></i>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"ant-timeline-item-content\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"pending\">\r\n            {{ isPendingBoolean ? '' : pending }}\r\n          </ng-container>\r\n        </div>\r\n    </li>\r\n</ul>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    CmacsTimelineComponent.propDecorators = {
        timeline: [{ type: ViewChild, args: ['timeline',] }],
        listOfTimeLine: [{ type: ContentChildren, args: [CmacsTimelineItemComponent,] }],
        pendingContent: [{ type: ContentChild, args: ['pending',] }],
        mode: [{ type: Input }],
        pending: [{ type: Input }],
        pendingDot: [{ type: Input }],
        reverse: [{ type: Input }]
    };
    return CmacsTimelineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsStringTemplateOutletDirective = /** @class */ (function () {
    function CmacsStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    Object.defineProperty(CmacsStringTemplateOutletDirective.prototype, "cmacsStringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsStringTemplateOutletDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            if (!this.defaultViewRef) {
                this.viewContainer.clear();
                this.inputViewRef = null;
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
                }
            }
        }
        else {
            if (!this.inputViewRef) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
                }
            }
        }
    };
    CmacsStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacsStringTemplateOutlet]',
                    exportAs: 'cmacsStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    CmacsStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    CmacsStringTemplateOutletDirective.propDecorators = {
        cmacsStringTemplateOutlet: [{ type: Input }]
    };
    return CmacsStringTemplateOutletDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMenuDividerDirective = /** @class */ (function () {
    function CmacsMenuDividerDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
    CmacsMenuDividerDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-menu-divider]',
                    exportAs: 'cmacsMenuDivider'
                },] }
    ];
    /** @nocollapse */
    CmacsMenuDividerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsMenuDividerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMenuGroupComponent = /** @class */ (function () {
    function CmacsMenuGroupComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
    }
    CmacsMenuGroupComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[cmacs-menu-group]',
                    exportAs: 'cmacsMenuGroup',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-menu-item-group-title\">\r\n  <ng-content select=\"[title]\"></ng-content>\r\n</div>\r\n<ul class=\"ant-menu-item-group-list\">\r\n  <ng-content></ng-content>\r\n</ul>",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    CmacsMenuGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsMenuGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMenuService = /** @class */ (function (_super) {
    __extends(CmacsMenuService, _super);
    function CmacsMenuService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInDropDown = false;
        return _this;
    }
    CmacsMenuService.decorators = [
        { type: Injectable }
    ];
    return CmacsMenuService;
}(NzMenuBaseService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSubmenuService = /** @class */ (function () {
    function CmacsSubmenuService(hostSubmenuService, nzMenuService) {
        var _this = this;
        this.hostSubmenuService = hostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.hostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })), tap((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (_this.mode = (/** @type {?} */ (mode))); })));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), auditTime(150), distinctUntilChanged(), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setOpenState(data);
            if (_this.hostSubmenuService) {
                _this.hostSubmenuService.subMenuOpen$.next(data);
            }
        })));
        if (this.hostSubmenuService) {
            this.setLevel(this.hostSubmenuService.level + 1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.open$.next(value);
    };
    /**
     * @return {?}
     */
    CmacsSubmenuService.prototype.onMenuItemClick = /**
     * @return {?}
     */
    function () {
        this.setMouseEnterState(false);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setLevel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.level$.next(value);
        this.level = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    CmacsSubmenuService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmacsSubmenuService.ctorParameters = function () { return [
        { type: CmacsSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: CmacsMenuService }
    ]; };
    return CmacsSubmenuService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMenuItemDirective = /** @class */ (function () {
    function CmacsMenuItemDirective(updateHostClassService, menuService, submenuService, renderer, elementRef) {
        this.updateHostClassService = updateHostClassService;
        this.menuService = menuService;
        this.submenuService = submenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.disabled = false;
        this.selected = false;
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.menuService.onMenuItemClick(this);
        if (this.submenuService) {
            this.submenuService.onMenuItemClick();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.updateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.selected,
            _a[prefixName + "-disabled"] = this.disabled,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * store origin padding in padding
         * @type {?}
         */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.menuService.mode$, this.menuService.inlineIndent$, this.submenuService ? this.submenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var padding = null;
            if (_this.menuService.mode === 'inline') {
                if (isNotNil(_this.paddingLeft)) {
                    padding = _this.paddingLeft;
                }
                else {
                    /** @type {?} */
                    var level = _this.submenuService ? _this.submenuService.level + 1 : 1;
                    padding = level * _this.menuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.selected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-menu-item]',
                    exportAs: 'cmacsMenuItem',
                    providers: [NzUpdateHostClassService],
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    CmacsMenuItemDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: NzMenuBaseService },
        { type: CmacsSubmenuService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsMenuItemDirective.propDecorators = {
        paddingLeft: [{ type: Input }],
        disabled: [{ type: Input }],
        selected: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsMenuItemDirective.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsMenuItemDirective.prototype, "selected", void 0);
    return CmacsMenuItemDirective;
}());

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
/**
 * @param {?} higherOrderService
 * @param {?} menuService
 * @return {?}
 */
function CmacsMenuServiceFactory(higherOrderService, menuService) {
    return higherOrderService ? higherOrderService : menuService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSubMenuComponent = /** @class */ (function () {
    function CmacsSubMenuComponent(elementRef, menuService, cdr, submenuService, updateHostClassService, platform, noAnimation) {
        this.elementRef = elementRef;
        this.menuService = menuService;
        this.cdr = cdr;
        this.submenuService = submenuService;
        this.updateHostClassService = updateHostClassService;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.disabled = false;
        this.openChange = new EventEmitter();
        this.placement = 'rightTop';
        this.expandState = 'collapsed';
        this.overlayPositions = __spread(DEFAULT_SUBMENU_POSITIONS);
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setOpenState = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.submenuService.setOpenState(open);
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @return {?}
     */
    function () {
        if (this.submenuService.mode === 'inline' && !this.menuService.isInDropDown && !this.disabled) {
            this.setOpenState(!this.open);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.submenuService.setMouseEnterState(value);
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.submenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        // tslint:disable-next-line: no-non-null-assertion
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-disabled"] = this.disabled,
            _a[prefixName + "-open"] = this.open,
            _a[prefixName + "-selected"] = this.isChildMenuSelected,
            _a[prefixName + "-" + this.submenuService.mode] = true,
            _a[prefixName + "-active"] = this.isMouseHover && !this.disabled,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest(this.submenuService.mode$, this.submenuService.open$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var mode = data[0];
            /** @type {?} */
            var open = data[1];
            if (open && mode === 'inline') {
                _this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                _this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                _this.expandState = 'active';
            }
            else {
                _this.expandState = 'collapsed';
            }
            _this.overlayPositions =
                mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== _this.open) {
                _this.open = open;
                _this.openChange.emit(_this.open);
            }
            _this.setClassMap();
            _this.setTriggerWidth();
        }));
        this.submenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.menuService.menuOpen$.next(data);
        }));
        merge(this.menuService.mode$, this.menuService.inlineIndent$, this.submenuService.level$, this.submenuService.open$, this.submenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setTriggerWidth();
        this.listOfCmacsMenuItemDirective.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, __spread([_this.listOfCmacsMenuItemDirective.changes], _this.listOfCmacsMenuItemDirective.map((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) { return menu.selected$; }))));
        })), map((/**
         * @return {?}
         */
        function () { return _this.listOfCmacsMenuItemDirective.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.selected; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.isChildMenuSelected = selected;
            _this.setClassMap();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzOpen) {
            this.submenuService.setOpenState(this.open);
        }
        if (changes.nzDisabled) {
            this.submenuService.disabled = this.disabled;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsSubMenuComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[cmacs-submenu]',
                    exportAs: 'cmacsSubmenu',
                    providers: [CmacsSubmenuService, NzUpdateHostClassService],
                    animations: [collapseMotion, zoomBigMotion, slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<div cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  [class.ant-dropdown-menu-submenu-title]=\"menuService.isInDropDown\"\r\n  [class.ant-menu-submenu-title]=\"!menuService.isInDropDown\"\r\n  [style.paddingLeft.px]=\"menuService.mode === 'inline'? (paddingLeft ? paddingLeft : submenuService.level * menuService.inlineIndent) : null\"\r\n  (mouseenter)=\"setMouseEnterState(true)\"\r\n  (mouseleave)=\"setMouseEnterState(false)\"\r\n  (click)=\"clickSubMenuTitle()\">\r\n  <ng-content select=\"[title]\"></ng-content>\r\n  <span *ngIf=\"menuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl><i class=\"ant-menu-submenu-arrow\"></i></ng-template>\r\n</div>\r\n<ul *ngIf=\"menuService.mode === 'inline'\"\r\n  [@collapseMotion]=\"expandState\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [ngClass]=\"menuClassName\"\r\n  class=\"ant-menu ant-menu-inline ant-menu-sub\">\r\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template cdkConnectedOverlay\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"open && menuService.mode !== 'inline'\">\r\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n    [@slideMotion]=\"expandState\"\r\n    [@zoomBigMotion]=\"expandState\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [class.ant-menu-light]=\"menuService.theme === 'light'\"\r\n    [class.ant-menu-dark]=\"menuService.theme === 'dark'\"\r\n    [class.ant-menu-submenu-placement-bottomLeft]=\"submenuService.mode === 'horizontal'\"\r\n    [class.ant-menu-submenu-placement-rightTop]=\"submenuService.mode === 'vertical' && placement === 'rightTop'\"\r\n    [class.ant-menu-submenu-placement-leftTop]=\"submenuService.mode === 'vertical' && placement === 'leftTop'\"\r\n    (mouseleave)=\"setMouseEnterState(false)\"\r\n    (mouseenter)=\"setMouseEnterState(true)\">\r\n    <ul [class.ant-dropdown-menu]=\"menuService.isInDropDown\"\r\n      [class.ant-menu]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-vertical]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-vertical]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-sub]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-sub]=\"!menuService.isInDropDown\"\r\n      [ngClass]=\"menuClassName\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    styles: ["\n      .ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsSubMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: ChangeDetectorRef },
        { type: CmacsSubmenuService },
        { type: NzUpdateHostClassService },
        { type: Platform },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsSubMenuComponent.propDecorators = {
        menuClassName: [{ type: Input }],
        paddingLeft: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }],
        openChange: [{ type: Output }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { read: ElementRef },] }],
        listOfCmacsSubMenuComponent: [{ type: ContentChildren, args: [CmacsSubMenuComponent, { descendants: true },] }],
        listOfCmacsMenuItemDirective: [{ type: ContentChildren, args: [CmacsMenuItemDirective, { descendants: true },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSubMenuComponent.prototype, "open", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSubMenuComponent.prototype, "disabled", void 0);
    return CmacsSubMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = CmacsMenuServiceFactory;
var CmacsMenuDirective = /** @class */ (function () {
    function CmacsMenuDirective(elementRef, menuService, updateHostClassService) {
        this.elementRef = elementRef;
        this.menuService = menuService;
        this.updateHostClassService = updateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedCmacsSubMenuComponent = [];
        this.inlineIndent = 24;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inDropDown = false;
        this.inlineCollapsed = false;
        this.selectable = !this.menuService.isInDropDown;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this.listOfCmacsMenuItemDirective) {
            if (this.inlineCollapsed) {
                this.listOfOpenedCmacsSubMenuComponent = this.listOfCmacsSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.open; }));
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
                this.mode = 'vertical';
            }
            else {
                this.listOfOpenedCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(true); }));
                this.listOfOpenedCmacsSubMenuComponent = [];
                this.mode = this.cacheMode;
            }
            this.menuService.setMode(this.mode);
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-root"] = true,
            _a[prefixName + "-" + this.theme] = true,
            _a[prefixName + "-" + this.mode] = true,
            _a[prefixName + "-inline-collapsed"] = this.inlineCollapsed,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.menuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            _this.click.emit(menu);
            if (_this.selectable) {
                _this.listOfCmacsMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.setSelectedState(item === menu); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.cacheMode = this.mode;
        this.updateInlineCollapse();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.menuService.setInlineIndent(this.inlineIndent);
        }
        if (changes.nzInDropDown) {
            this.menuService.isInDropDown = this.inDropDown;
        }
        if (changes.nzTheme) {
            this.menuService.setTheme(this.theme);
        }
        if (changes.nzMode) {
            this.menuService.setMode(this.mode);
            if (!changes.nzMode.isFirstChange() && this.listOfCmacsSubMenuComponent) {
                this.listOfCmacsSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsMenuDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-menu]',
                    exportAs: 'cmacsMenu',
                    providers: [
                        NzUpdateHostClassService,
                        CmacsMenuService,
                        {
                            provide: NzMenuBaseService,
                            useFactory: ɵ0,
                            deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], CmacsMenuService]
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    CmacsMenuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: NzUpdateHostClassService }
    ]; };
    CmacsMenuDirective.propDecorators = {
        listOfCmacsMenuItemDirective: [{ type: ContentChildren, args: [CmacsMenuItemDirective, { descendants: true },] }],
        listOfCmacsSubMenuComponent: [{ type: ContentChildren, args: [CmacsSubMenuComponent, { descendants: true },] }],
        inlineIndent: [{ type: Input }],
        theme: [{ type: Input }],
        mode: [{ type: Input }],
        inDropDown: [{ type: Input }],
        inlineCollapsed: [{ type: Input }],
        selectable: [{ type: Input }],
        click: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsMenuDirective.prototype, "inDropDown", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsMenuDirective.prototype, "inlineCollapsed", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsMenuDirective.prototype, "selectable", void 0);
    return CmacsMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var TemplateType = {
    Date: 0,
    Select: 1,
    Number: 2,
    String: 3,
    Boolean: 4,
};
TemplateType[TemplateType.Date] = 'Date';
TemplateType[TemplateType.Select] = 'Select';
TemplateType[TemplateType.Number] = 'Number';
TemplateType[TemplateType.String] = 'String';
TemplateType[TemplateType.Boolean] = 'Boolean';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var CeldType = {
    Default: 0,
    Button: 1,
    Tag: 2,
    TemplateRef: 3,
    Favorite: 4,
};
CeldType[CeldType.Default] = 'Default';
CeldType[CeldType.Button] = 'Button';
CeldType[CeldType.Tag] = 'Tag';
CeldType[CeldType.TemplateRef] = 'TemplateRef';
CeldType[CeldType.Favorite] = 'Favorite';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    /**
     * @param {?} excelFileName
     * @return {?}
     */
    ExcelService.toExportFileName = /**
     * @param {?} excelFileName
     * @return {?}
     */
    function (excelFileName) {
        return excelFileName + "_export_" + new Date().getTime() + ".xlsx";
    };
    /**
     * @param {?} json
     * @param {?} excelFileName
     * @return {?}
     */
    ExcelService.prototype.exportAsExcelFile = /**
     * @param {?} json
     * @param {?} excelFileName
     * @return {?}
     */
    function (json, excelFileName) {
        /** @type {?} */
        var worksheet = utils.json_to_sheet(json);
        /** @type {?} */
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        writeFile(workbook, ExcelService.toExportFileName(excelFileName));
    };
    ExcelService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExcelService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExcelService.ngInjectableDef = defineInjectable({ factory: function ExcelService_Factory() { return new ExcelService(); }, token: ExcelService, providedIn: "root" });
    return ExcelService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ExportType = {
    Pdf: 'pdf',
    Xslx: 'xlsx',
    Png: 'png',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var CmacsGridComponent = /** @class */ (function () {
    function CmacsGridComponent(cdr, i18n, exportAsService, excelService, datePipe) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.excelService = excelService;
        this.datePipe = datePipe;
        this.locale = {}; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        // tslint:disable-next-line: no-input-rename
        this.size = 'default';
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.loadingDelay = 0;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
        this.showPagination = true;
        this.loading = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.showQuickJumper = false;
        this.simple = false;
        this.checkboxSelect = false;
        this.inLineEdit = false;
        this.dataTable = false;
        this.showRate = false;
        this.exportEvent = new EventEmitter();
        this.buttonClick = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.ondlclickRow = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.onedit = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    /**
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    CmacsGridComponent.prototype.startEdit = /**
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    function (id, property, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
        this.property = property;
    };
    /**
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    CmacsGridComponent.prototype.sort = /**
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    function ($event, fieldProperty) {
        this.sortChange.emit({ sortName: fieldProperty, sortValue: $event });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsGridComponent.prototype.handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var element = (/** @type {?} */ (e.target));
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && this.datePickerElement.nativeElement !== e.target) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && this.boolElement.nativeElement !== e.target))) {
                this.editId = null;
                this.property = null;
                if (this.rowOnEdition >= 0) {
                    this.onedit.emit(this.data[this.rowOnEdition]);
                    this.rowOnEdition = -1;
                }
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} ancestor
     * @return {?}
     */
    CmacsGridComponent.prototype.childOf = /**
     * @param {?} node
     * @param {?} ancestor
     * @return {?}
     */
    function (node, ancestor) {
        /** @type {?} */
        var child = node;
        while (child !== null) {
            if (child === ancestor)
                return true;
            if (child.classList && child.classList.length > 0 && child.className.indexOf('cdk-overlay-pane') >= 0)
                return true;
            child = child.parentNode;
        }
        return false;
    };
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    CmacsGridComponent.prototype.endEditMode = /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    function ($event, index) {
        if ($event.key === ('Enter')) {
            this.editId = null;
            this.property = null;
            this.rowOnEdition = -1;
            this.onedit.emit(this.data[index]);
        }
        else {
            this.rowOnEdition = index;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsGridComponent.prototype.endEditModeNgModel = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.onedit.emit(this.data[index]);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsGridComponent.prototype.getIndex = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        /** @type {?} */
        var i = -1;
        i = this.checkboxCache.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data[_this.config.fieldId] === id; }));
        return i;
    };
    /**
     * @return {?}
     */
    CmacsGridComponent.prototype.updateCheckboxCache = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkboxCache.length = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.checkboxCache.push({
                selected: false,
                data: __assign({}, item)
            });
        }));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.onButtonClick = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.buttonClick.emit(field);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsGridComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataSelectd = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; }));
        this.selected = this.allChecked = dataSelectd.length === this.checkboxCache.length;
        this.isIndeterminate = dataSelectd.length > 0 && !this.allChecked;
        this.selectionChange.emit(dataSelectd.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data; })));
    };
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: no-shadowed-variable
    /**
     * @param {?} count
     * @param {?} data
     * @return {?}
     */
    CmacsGridComponent.prototype.onRateChange = 
    // tslint:disable-next-line: no-shadowed-variable
    /**
     * @param {?} count
     * @param {?} data
     * @return {?}
     */
    function (count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsGridComponent.prototype.onRateClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    CmacsGridComponent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.hidden === undefined || !item.hidden; }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CmacsGridComponent.prototype.onCheckboxAllChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.checkboxCache.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.selected = status;
        }));
        this.isIndeterminate = false;
        this.selectionChange.emit((status) ? this.data : []);
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.getLabel = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        /** @type {?} */
        var result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            /** @type {?} */
            var item = field.select.selectData.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== undefined && item[field.select.value] === data[field.property]; }));
            result = (item !== undefined) ? item[field.select.label] : '';
        }
        return result;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isSelect = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.editTemplate === TemplateType.Select;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsGridComponent.prototype.isNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'number';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsGridComponent.prototype.isString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'string';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsGridComponent.prototype.isBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'boolean';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsGridComponent.prototype.isObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'object';
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isDate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Date;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isCeldTypeDefault = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isCeldTypeButton = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Button;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isCeldTypeTag = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Tag;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsGridComponent.prototype.isCeldTypeTemplateRef = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.TemplateRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsGridComponent.prototype.isUndefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === undefined;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsGridComponent.prototype.isRowSelected = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var dataSelectd = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data[_this.config.fieldId]; }));
        return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
    };
    /**
     * @return {?}
     */
    CmacsGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        }));
        if (this.checkboxSelect) {
            this.updateCheckboxCache();
        }
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.exportEvent.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            switch (config.exportType) {
                case ExportType.Pdf:
                    _this.exportToPdf(config.fileName);
                    break;
                case ExportType.Xslx:
                    _this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    _this.exportToPng(config.fileName);
                    break;
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsGridComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.data) {
            this.updateCheckboxCache();
        }
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsGridComponent.prototype.exportToPng = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        var _this = this;
        /** @type {?} */
        var exportAsConfig = {
            type: 'png',
            // the type you want to download
            elementId: 'tableGrid',
        };
        this.frontPagination = false;
        this.showPagination = false;
        /** @type {?} */
        var interval = setInterval((/**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line: max-line-length
            _this.exportAsService.save(exportAsConfig, fileName + '_export_' + Date.now());
            _this.frontPagination = true;
            _this.showPagination = true;
            clearInterval(interval);
        }), 100);
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsGridComponent.prototype.exportToExcel = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        var _this = this;
        /** @type {?} */
        var dataToExport = [];
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field.editTemplate === TemplateType.Select) {
                    /** @type {?} */
                    var selectItem = field.select.selectData.find((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return option[field.select.value] === item[field.property]; }));
                    if (selectItem !== undefined) {
                        itemToExport[field.display] = selectItem[field.select.label];
                    }
                }
                else {
                    itemToExport[field.display] = item[field.property];
                }
            }));
            dataToExport.push(itemToExport);
        }));
        this.excelService.exportAsExcelFile(dataToExport, fileName);
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsGridComponent.prototype.exportToPdf = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        var _this = this;
        /** @type {?} */
        var doc = new jsPDF();
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var rows = [];
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.celdType === CeldType.Default; })).forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            columns.push(field.display);
        }));
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = [];
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                switch (field.editTemplate) {
                    case TemplateType.Select:
                        /** @type {?} */
                        var selectItem = field.select.selectData.find((/**
                         * @param {?} option
                         * @return {?}
                         */
                        function (option) { return option[field.select.value] === item[field.property]; }));
                        if (selectItem !== undefined) {
                            itemToExport.push(selectItem[field.select.label]);
                        }
                        break;
                    case TemplateType.Date:
                        itemToExport.push(_this.datePipe.transform(item[field.property], 'MMMM dd yyyy'));
                        break;
                    default:
                        itemToExport.push(item[field.property]);
                        break;
                }
            }));
            rows.push(itemToExport);
        }));
        doc.autoTable({
            theme: 'striped',
            margin: { top: 5 },
            body: rows,
            columns: columns
        });
        doc.save(fileName + '_export_' + Date.now());
    };
    /**
     * @return {?}
     */
    CmacsGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsGridComponent.prototype.clickRow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.onclickRow.emit(data);
        if (!this.checkboxSelect) {
            if (!this.multiSelect) {
                this.checkboxCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.selected && item.data[_this.config.fieldId] !== data[_this.config.fieldId]; }))
                    .forEach((/**
                 * @param {?} elem
                 * @return {?}
                 */
                function (elem) { return elem.selected = false; }));
            }
            /** @type {?} */
            var index = this.checkboxCache.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.data[_this.config.fieldId] === data[_this.config.fieldId]; }));
            if (index !== -1) {
                this.checkboxCache[index].selected = !this.checkboxCache[index].selected;
            }
        }
        this.selectionChange.emit(this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data; })));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsGridComponent.prototype.dblClickRow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.ondlclickRow.emit(data);
    };
    CmacsGridComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-grid',
                    exportAs: 'cmacsGrid',
                    template: "<div id=\"tableGrid\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\">\r\n    <thead class=\"ant-table-thead\" *ngIf=\"!dataTable\">\r\n      <tr>\r\n        <th *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n        <th *ngFor=\"let field of getFields()\" [nzShowSort]=\"field.showSort\"\r\n          [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n          nzWidth=\"{{field.width}}\">{{field.display}}</th>\r\n        <th *ngIf=\"showRate\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\" (click)=\"clickRow(data)\" (dblclick)=\"dblClickRow(data)\"\r\n        [class.ant-table-selected-row]=\"isRowSelected(data)\">\r\n        <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n          <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n            (checkedChange)=onCheckboxChange($event)\r\n            *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n        </td>\r\n        <td *ngFor=\"let field of getFields()\" class=\"editable-row\">\r\n          <div *ngIf=\"isCeldTypeDefault(field) && inLineEdit; else componentTpl\">\r\n            <div class=\"editable-cell\"\r\n              *ngIf=\"(editId !== data[config.fieldId] || property !== field.property); else editTpl\">\r\n              <div class=\"editable-cell-value-wrap\" (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n                <ng-container *ngIf=\"!isDate(field) && !isSelect(field)\">{{ data[field.property] }}</ng-container>\r\n                <ng-container *ngIf=\"isDate(field)\">{{ data[field.property]  | date: field.dateFormat}}</ng-container>\r\n                <ng-container *ngIf=\"isSelect(field)\">{{ getLabel(data, field) }}</ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-template #editTpl>\r\n              <input #fieldTypeInput *ngIf=\"isString(data[field.property]) && !isSelect(field)\" type=\"text\" cmacs-input\r\n                [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n              <cmacs-input-number #fieldTypeInputNumber id=\"testing2\"\r\n                *ngIf=\"isNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\"></cmacs-input-number>\r\n\r\n              <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(data[field.property])\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n              <cmacs-date-picker #fieldTypeDatePicker *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\" [allowClear]=\"false\"\r\n                open [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></cmacs-date-picker>\r\n\r\n              <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 200px;\" showSearch\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n                <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n              </cmacs-select>\r\n            </ng-template>\r\n          </div>\r\n          <ng-template #componentTpl>\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <button *ngIf=\"isCeldTypeButton(field)\" cmacs-button type=\"{{field.button.style}}\"\r\n              (click)=onButtonClick(data)>\r\n              <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n              <ng-template #titleTpl>{{field.display}}</ng-template>\r\n            </button>\r\n            <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\"\r\n              [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n              [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n              [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n              [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n              {{  data[field.property] }}\r\n            </cmacs-tag>\r\n            <!--<cmacs-tag *ngIf=\"isCeldTypeTag(field) && (field.tag === undefined || field.tag.color === undefined)\">\r\n              {{ data[field.property] }}</cmacs-tag>\r\n            <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined && field.tag.color !== undefined\"\r\n              [color]=data[field.tag.color]>{{  data[field.property] }}</cmacs-tag>-->\r\n            <ng-container\r\n              *ngIf=\"!inLineEdit && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && isDate(field)\">\r\n              {{ data[field.property]  | date: field.dateFormat}}</ng-container>\r\n            <ng-container\r\n              *ngIf=\"!inLineEdit && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field)\">\r\n              {{ data[field.property] }}</ng-container>\r\n          </ng-template>\r\n        </td>\r\n        <td *ngIf=\"showRate\">\r\n          <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n            (click)=\"onRateClick($event)\"></nz-rate>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                    styles: [".editable-cell{position:relative}.editable-cell-value-wrap{padding:5px 12px;cursor:pointer}.editable-row:hover .editable-cell-value-wrap{border:1px solid #2a7cff;border-radius:4px;padding:4px 11px}:host ::ng-deep .ant-rate-star{font-size:16px}.ant-table-thead>tr{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.ant-table-thead>tr>th:first-child{border-left:3px solid transparent}.ant-table-thead>tr>th{padding:15px;color:#656c79}.ant-table-tbody>tr>td{padding:10px 15px}.ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.ant-table-tbody>tr td:first-child{border-left:3px solid #fff}.ant-table-tbody>tr:hover td:first-child{border-left:3px solid #2a7cff}.ant-table-tbody>.ant-table-selected-row:hover td{border-bottom:1px solid #2a7cff;border-top:1px solid #2a7cff}.ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal}.editable-row,.ng-star-inserted{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}cmacs-tag{padding:2px 5px!important;height:unset}.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}.ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}"]
                }] }
    ];
    /** @nocollapse */
    CmacsGridComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: ExportAsService },
        { type: ExcelService },
        { type: DatePipe }
    ]; };
    CmacsGridComponent.propDecorators = {
        size: [{ type: Input }],
        showTotal: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        virtualItemSize: [{ type: Input }],
        loadingDelay: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        total: [{ type: Input }],
        title: [{ type: Input }],
        footer: [{ type: Input }],
        noResult: [{ type: Input }],
        widthConfig: [{ type: Input }],
        pageIndex: [{ type: Input }],
        pageSize: [{ type: Input }],
        data: [{ type: Input }],
        config: [{ type: Input }],
        fieldId: [{ type: Input }],
        paginationPosition: [{ type: Input }],
        scroll: [{ type: Input }],
        nzItemRender: [{ type: Input }, { type: ViewChild, args: ['renderItemTemplate',] }],
        frontPagination: [{ type: Input }],
        templateMode: [{ type: Input }],
        bordered: [{ type: Input }],
        showPagination: [{ type: Input }],
        loading: [{ type: Input }],
        showSizeChanger: [{ type: Input }],
        hideOnSinglePage: [{ type: Input }],
        showQuickJumper: [{ type: Input }],
        simple: [{ type: Input }],
        checkboxSelect: [{ type: Input }],
        inLineEdit: [{ type: Input }],
        dataTable: [{ type: Input }],
        showRate: [{ type: Input }],
        exportEvent: [{ type: Input }],
        buttonClick: [{ type: Output }],
        rateChange: [{ type: Output }],
        selectionChange: [{ type: Output }],
        ondlclickRow: [{ type: Output }],
        onclickRow: [{ type: Output }],
        onedit: [{ type: Output }],
        rateCount: [{ type: Input }],
        multiSelect: [{ type: Input }],
        sortChange: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['fieldTypeInput', { read: ElementRef },] }],
        inputNumberElement: [{ type: ViewChild, args: ['fieldTypeInputNumber', { read: ElementRef },] }],
        datePickerElement: [{ type: ViewChild, args: ['fieldTypeDatePicker', { read: ElementRef },] }],
        selectElement: [{ type: ViewChild, args: ['fieldTypeSelect', { read: ElementRef },] }],
        boolElement: [{ type: ViewChild, args: ['fieldTypeBool', { read: ElementRef },] }],
        handleClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "virtualScroll", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "virtualItemSize", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "frontPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "templateMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "bordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "showPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "showSizeChanger", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "hideOnSinglePage", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "showQuickJumper", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "simple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "checkboxSelect", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "inLineEdit", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "dataTable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "showRate", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsGridComponent.prototype, "multiSelect", void 0);
    return CmacsGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTreeService = /** @class */ (function (_super) {
    __extends(NzTreeService, _super);
    function NzTreeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NzTreeService.decorators = [
        { type: Injectable }
    ];
    return NzTreeService;
}(NzTreeBaseService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var CmacsTreeComponent = /** @class */ (function (_super) {
    __extends(CmacsTreeComponent, _super);
    function CmacsTreeComponent(nzTreeService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.showIcon = false;
        _this.showExpand = true;
        _this.showLine = false;
        _this.checkable = false;
        _this.asyncData = false;
        _this.draggable = false;
        _this.expandAll = false;
        _this.hideUnMatched = false;
        _this.selectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzBlockNode = false;
        /**
         * @deprecated use
         * expandAll instead
         */
        _this.defaultExpandAll = false;
        // model bind
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.searchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * searchValueChange instead
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        // tslint:disable-next-line: variable-name
        _this._nzMultiple = false;
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        return _this;
    }
    Object.defineProperty(CmacsTreeComponent.prototype, "nzMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMultiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzMultiple = toBoolean(value);
            this.nzTreeService.isMultiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated use
         * nzExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * nzExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated use
         * nzSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * nzSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated use
         * nzCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * nzCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "searchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.searchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                // tslint:disable-next-line: deprecation
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed
         */
        get: /**
         * To render nodes if root is changed
         * @return {?}
         */
        function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.showLine,
            _a[this.prefixCls + "-icon-hide"] = !this.showIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.draggable,
            _a['ant-select-tree'] = this.selectMode,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.initNzData(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeComponent.prototype.registerOnChange = /**
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
    CmacsTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.initNzData = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = toBoolean(changes.nzCheckStrictly.currentValue);
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = toBoolean(changes.nzMultiple.currentValue);
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsTreeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-tree',
                    exportAs: 'cmacsTree',
                    template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes\">\r\n    <cmacs-tree-node\r\n      [treeNode]=\"node\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [showExpand]=\"showExpand\"\r\n      [asyncData]=\"asyncData\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [treeTemplate]=\"treeTemplate\"\r\n      [noAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </cmacs-tree-node>\r\n  </ng-container>\r\n</ul>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsTreeComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTreeComponent.propDecorators = {
        showIcon: [{ type: Input }],
        showExpand: [{ type: Input }],
        showLine: [{ type: Input }],
        expandedIcon: [{ type: Input }],
        checkable: [{ type: Input }],
        asyncData: [{ type: Input }],
        draggable: [{ type: Input }],
        expandAll: [{ type: Input }],
        hideUnMatched: [{ type: Input }],
        selectMode: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzBlockNode: [{ type: Input }],
        defaultExpandAll: [{ type: Input }],
        beforeDrop: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzData: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzDefaultSelectedKeys: [{ type: Input }],
        nzDefaultCheckedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        searchValue: [{ type: Input }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        searchValueChange: [{ type: Output }],
        nzOnSearchNode: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }],
        treeTemplate: [{ type: ContentChild, args: ['treeTemplate',] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "checkable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "asyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "draggable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "expandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "hideUnMatched", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "selectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzBlockNode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "defaultExpandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CmacsTreeComponent.prototype, "nzMultiple", null);
    return CmacsTreeComponent;
}(NzTreeBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsTreeNodeComponent = /** @class */ (function () {
    function CmacsTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, nzNoAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.nzNoAnimation = nzNoAnimation;
        this.hideUnMatched = false;
        this.noAnimation = false;
        this.selectMode = false;
        this.showIcon = false;
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        // tslint:disable-next-line: variable-name
        this._searchValue = '';
        // tslint:disable-next-line: variable-name
        this._draggable = false;
        // tslint:disable-next-line: variable-name
        this._expandAll = false;
    }
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "draggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._draggable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._draggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "defaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandAll;
        },
        /**
         * @deprecated use
         * expandAll instead
         */
        set: /**
         * @deprecated use
         * expandAll instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandAll = value;
            if (value && this.treeNode && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "expandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandAll;
        },
        // default set
        set: 
        // default set
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandAll = value;
            if (value && this.treeNode && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "searchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.highlightKeys = [];
            // tslint:disable-next-line: no-non-null-assertion
            if (value && (/** @type {?} */ (this.treeNode.title)).includes(value)) {
                // match the search value
                /** @type {?} */
                var index = this.treeNode.title.indexOf(value);
                this.highlightKeys = [
                    this.treeNode.title.slice(0, index),
                    this.treeNode.title.slice(index + value.length, this.treeNode.title.length)
                ];
            }
            this._searchValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.treeNode.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.draggable && !this.treeNode.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isShowLineIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isLeaf && this.showLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isLeaf && !this.showLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.treeNode.isExpanded && !this.treeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isExpanded && !this.treeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // to hide unmatched nodes
            return this.searchValue && this.hideUnMatched && !this.treeNode.isMatched && !this.treeNode.isExpanded
                ? 'none'
                : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.prefixCls = this.selectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.treeNode.isDisabled,
            _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
            _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
            _a[this.prefixCls + "-treenode-checkbox-checked"] = this.treeNode.isChecked,
            _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.treeNode.isHalfChecked,
            _a[this.prefixCls + "-treenode-selected"] = this.treeNode.isSelected,
            _a[this.prefixCls + "-treenode-loading"] = this.treeNode.isLoading,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.treeNode.isLeaf,
            _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
            _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
            _b);
        this.nzNodeCheckboxClass = (_c = {},
            _c[this.prefixCls + "-checkbox"] = true,
            _c[this.prefixCls + "-checkbox-checked"] = this.treeNode.isChecked,
            _c[this.prefixCls + "-checkbox-indeterminate"] = this.treeNode.isHalfChecked,
            _c[this.prefixCls + "-checkbox-disabled"] = this.treeNode.isDisabled || this.treeNode.isDisableCheckbox,
            _c);
        this.nzNodeContentClass = (_d = {},
            _d[this.prefixCls + "-node-content-wrapper"] = true,
            _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
            _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
            _d[this.prefixCls + "-node-selected"] = this.treeNode.isSelected,
            _d);
        this.nzNodeContentIconClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e[this.prefixCls + "-icon__customize"] = true,
            _e);
        this.nzNodeContentLoadingClass = (_f = {},
            _f[this.prefixCls + "-iconEle"] = true,
            _f);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectMode) {
            event.preventDefault();
        }
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.treeNode.isSelectable && !this.treeNode.isDisabled) {
            this.treeNode.isSelected = !this.treeNode.isSelected;
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dblclick', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('contextmenu', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.treeNode.isLoading && !this.treeNode.isLeaf) {
            // set async state
            if (this.asyncData && this.treeNode.children.length === 0 && !this.treeNode.isExpanded) {
                this.treeNode.isLoading = true;
            }
            this.treeNode.isExpanded = !this.treeNode.isExpanded;
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('expand', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.treeNode.isDisabled || this.treeNode.isDisableCheckbox) {
            return;
        }
        this.treeNode.isChecked = !this.treeNode.isChecked;
        this.treeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.treeNode);
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('check', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.treeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.treeNode);
        this.treeNode.isExpanded = false;
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragstart', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (node && node.key !== _this.treeNode.key && !_this.treeNode.isExpanded && !_this.treeNode.isLeaf) {
                _this.treeNode.isExpanded = true;
            }
            /** @type {?} */
            var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.treeNode, e);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.treeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragover', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
        }));
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragleave', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === _this.treeNode.key) || (_this.dragPos === 0 && _this.treeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            var dropEvent = _this.nzTreeService.formatEvent('drop', _this.treeNode, e);
            /** @type {?} */
            var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.treeNode, e);
            if (_this.beforeDrop) {
                _this.beforeDrop({
                    // tslint:disable-next-line: no-non-null-assertion
                    dragNode: _this.newMethod(),
                    node: _this.treeNode,
                    pos: _this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.treeNode, _this.dragPos);
                    }
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (_this.treeNode) {
                _this.nzTreeService.dropAndApply(_this.treeNode, _this.dragPos);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.newMethod = /**
     * @private
     * @return {?}
     */
    function () {
        // tslint:disable-next-line: no-non-null-assertion
        return (/** @type {?} */ (this.nzTreeService.getSelectedNode()));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            // if user do not custom beforeDrop
            if (!_this.beforeDrop) {
                /** @type {?} */
                var eventNext = _this.nzTreeService.formatEvent('dragend', _this.treeNode, e);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    };
    /**
     * 监听拖拽事件
     */
    /**
     * 监听拖拽事件
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handDragEvent = /**
     * 监听拖拽事件
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this.draggable) {
                _this.destroy$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragStart(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnter(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragOver(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragLeave(e); }));
                fromEvent(_this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragDrop(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnd(e); }));
            }
            else {
                _this.destroy$.next();
                _this.destroy$.complete();
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // init expanded / selected / checked list
        if (this.treeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.treeNode);
        }
        if (this.treeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.treeNode);
        }
        if (this.treeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.treeNode);
        }
        // TODO
        this.treeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(
        // tslint:disable-next-line: no-non-null-assertion
        filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return (/** @type {?} */ (data.node)).key === _this.treeNode.key; })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setClassMap();
            _this.markForCheck();
        }));
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-tree-node',
                    exportAs: 'cmacsTreeNode',
                    template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            type=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"checkable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{searchValue}}</span>{{highlightKeys[1]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"treeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    animations: [collapseMotion],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeNodeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTreeNodeComponent.propDecorators = {
        dragElement: [{ type: ViewChild, args: ['dragElement',] }],
        treeNode: [{ type: Input }],
        showLine: [{ type: Input }],
        showExpand: [{ type: Input }],
        expandedIcon: [{ type: Input }],
        checkable: [{ type: Input }],
        asyncData: [{ type: Input }],
        hideUnMatched: [{ type: Input }],
        noAnimation: [{ type: Input }],
        selectMode: [{ type: Input }],
        showIcon: [{ type: Input }],
        treeTemplate: [{ type: Input }],
        beforeDrop: [{ type: Input }],
        draggable: [{ type: Input }],
        defaultExpandAll: [{ type: Input }],
        expandAll: [{ type: Input }],
        searchValue: [{ type: Input }],
        onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "showLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "showExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "checkable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "asyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "hideUnMatched", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "noAnimation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "selectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "showIcon", void 0);
    return CmacsTreeNodeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsOptionComponent = /** @class */ (function () {
    function CmacsOptionComponent() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    CmacsOptionComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.changes.next();
    };
    CmacsOptionComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-option',
                    exportAs: 'cmacsOption',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                }] }
    ];
    CmacsOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        nzLabel: [{ type: Input, args: ['label',] }],
        nzValue: [{ type: Input, args: ['value',] }],
        nzDisabled: [{ type: Input, args: ['disabled',] }],
        nzCustomContent: [{ type: Input, args: ['customContent',] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsOptionComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
    return CmacsOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
    NzFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOption' },] }
    ];
    return NzFilterOptionPipe;
}());
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterGroupOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            function (g) {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }));
        }
    };
    NzFilterGroupOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
    ];
    return NzFilterGroupOptionPipe;
}());
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSelectService = /** @class */ (function () {
    function CmacsSelectService() {
        var _this = this;
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // ContentChildren Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(distinctUntilChanged(), share(), tap((/**
         * @return {?}
         */
        function () { return _this.clearInput(); })));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // flat ViewChildren
        this.listOfTemplateOption = [];
        // tag option
        this.listOfTagOption = [];
        // tag option concat template option
        this.listOfTagAndTemplateOption = [];
        // ViewChildren
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // display in top control
        this.listOfCachedSelectedOption = [];
        // selected value or ViewChildren change
        this.valueOrOption$ = combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.listOfSelectedValue = data[0];
            _this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); }));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
            }));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                /** @type {?} */
                var option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, v); }));
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** @type {?} */
            var listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !_this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.nzValue, value); })); }));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var nzOptionComponent = new CmacsOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            }));
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateAddTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzLabel === _this.searchValue; }));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            var option = new CmacsOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        this.updateAddTagOption();
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    CmacsSelectService.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    CmacsSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    CmacsSelectService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
            }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    CmacsSelectService.prototype.updateTemplateOption = /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    CmacsSelectService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = __spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsSelectService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.nzValue); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(CmacsSelectService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isMultipleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    CmacsSelectService.decorators = [
        { type: Injectable }
    ];
    return CmacsSelectService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSelectTopControlComponent = /** @class */ (function () {
    function CmacsSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
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
    CmacsSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
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
    Object.defineProperty(CmacsSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
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
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
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
                    template: "<ng-template #inputTemplate>\r\n  <input #inputElement autocomplete=\"something-new\" [ngStyle]=\"showCustomSearchStyle\" class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\" (compositionend)=\"isComposing = false\" (input)=\"updateWidth()\"\r\n    [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\" [disabled]=\"nzSelectService.disabled\">\r\n</ng-template>\r\n<span class=\"ant-select-arrow\" style=\"right: auto !important; margin-left: 2px;\" cmacs-select-unselectable\r\n  *ngIf=\"showCustomSearch\">\r\n  <i nz-icon type=\"search\" style=\"font-size: 16px !important;\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n</span>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\" cmacs-select-unselectable [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n      class=\"ant-select-selection-selected-value\" [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n      [ngStyle]=\"selectedValueStyle\">\r\n      {{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"showCmacsSearch\" class=\"ant-select-search ant-select-search&#45;&#45;inline\"\r\n      [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n        <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container\r\n      *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue;\">\r\n      <li [@zoomMotion] [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" [attr.title]=\"option.nzLabel\"\r\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\" class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n        <span *ngIf=\"!option.nzDisabled\" class=\"ant-select-selection__choice__remove\"\r\n          (mousedown)=\"$event.preventDefault()\" (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\" [@zoomMotion]\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\" class=\"ant-select-selection__choice\">\r\n      <div class=\"ant-select-selection__choice__content\">\r\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n          <ng-template [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n          </ng-template>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\" class=\"ant-select-selection__clear\"\r\n  cmacs-select-unselectable (mousedown)=\"$event.preventDefault()\" (click)=\"onClearSelection($event)\">\r\n  <i nz-icon type=\"close-circle\" theme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n</span>\r\n<span class=\"ant-select-arrow\" cmacs-select-unselectable *ngIf=\"showCustomSearch; else notCustomArrow\">\r\n    <i nz-icon type=\"arrow-right\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n</span>\r\n<ng-template #notCustomArrow>\r\n  <span class=\"ant-select-arrow\" cmacs-select-unselectable *ngIf=\"nzShowArrow\">\r\n    <i nz-icon type=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n    <ng-template #defaultArrow>\r\n      <div [class.cmacs-select-action]=\"action\">\r\n        <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n      </div>\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n",
                    styles: [".cmacs-select-action{padding:9px;position:relative;top:-9px;left:10px;border-left:1px solid #dee0e5}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}"]
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
        nzShowSearch: [{ type: Input }],
        showCustomSearch: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
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
    return CmacsSelectTopControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsOptionGroupComponent = /** @class */ (function () {
    function CmacsOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(CmacsOptionGroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.label = value;
            this.isLabelString = !(this.nzLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    CmacsOptionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option-group',
                    exportAs: 'nzOptionGroup',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    CmacsOptionGroupComponent.propDecorators = {
        listOfNzOptionComponent: [{ type: ContentChildren, args: [CmacsOptionComponent,] }],
        nzLabel: [{ type: Input }]
    };
    return CmacsOptionGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            return merge.apply(void 0, __spread([_this.listOfCmacsOptionGroupComponent.changes,
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "allowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "showSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "showCmacsSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSelectComponent.prototype, "loading", void 0);
    return CmacsSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSearchComponent = /** @class */ (function () {
    function CmacsSearchComponent() {
        this.disabled = false;
        this.allowClear = false;
        this.showSearch = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.mode = 'default';
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSearchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selected = value;
        if (isNotNil$1(value)) ;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSearchComponent.prototype.registerOnChange = /**
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
    CmacsSearchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CmacsSearchComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.value;
    };
    /**
     * @return {?}
     */
    CmacsSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CmacsSearchComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-search',
                    template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} [showCmacsSearch]=\"true\" [showSearch]=\"true\" showCustomSearch>\r\n    <cmacs-option *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-select>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsSearchComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host ::ng-deep .ant-select-selection__placeholder{margin-left:21px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:30px}:host ::ng-deep .anticon-search{margin-left:8px}:host ::ng-deep .ant-select-selection-selected-value{padding-left:10px}:host ::ng-deep .ant-select-arrow{top:44%}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSearchComponent.ctorParameters = function () { return []; };
    CmacsSearchComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        allowClear: [{ type: Input }],
        showSearch: [{ type: Input }],
        size: [{ type: Input }],
        placeholder: [{ type: Input }],
        selected: [{ type: Input }, { type: Output }],
        mode: [{ type: Input }]
    };
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "allowClear", void 0);
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsSearchComponent.prototype, "showSearch", void 0);
    return CmacsSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODAL_CONFIG = new InjectionToken('MODAL_CONFIG');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalControlService = /** @class */ (function () {
    function ModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(ModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: 
        // Track singleton afterAllClose through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.afterAllClose : (/** @type {?} */ (this.rootAfterAllClose));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: 
        // Track singleton openModals array through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.openModals : (/** @type {?} */ (this.rootOpenModals));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalControlService.prototype, "registeredMetaMap", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : (/** @type {?} */ (this.rootRegisteredMetaMap));
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    ModalControlService.prototype.registerModal = 
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            var afterOpenSubscription = modalRef.afterOpen.subscribe((/**
             * @return {?}
             */
            function () { return _this.openModals.push(modalRef); }));
            /** @type {?} */
            var afterCloseSubscription = modalRef.afterClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.removeOpenModal(modalRef); }));
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    ModalControlService.prototype.deregisterModal = 
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    /**
     * @param {?} modalRef
     * @return {?}
     */
    ModalControlService.prototype.hasRegistered = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    // Close all registered opened modals
    /**
     * @return {?}
     */
    ModalControlService.prototype.closeAll = 
    // Close all registered opened modals
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    ModalControlService.prototype.removeOpenModal = /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    ModalControlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModalControlService.ctorParameters = function () { return [
        { type: ModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ ModalControlService.ngInjectableDef = defineInjectable({ factory: function ModalControlService_Factory() { return new ModalControlService(inject(ModalControlService, 12)); }, token: ModalControlService, providedIn: "root" });
    return ModalControlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
var  /**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
CmacsModalRef = /** @class */ (function () {
    function CmacsModalRef() {
    }
    return CmacsModalRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODAL_ANIMATE_DURATION = 200;
/**
 * @template T, R
 */
var CmacsModalComponent = /** @class */ (function (_super) {
    __extends(CmacsModalComponent, _super);
    function CmacsModalComponent(overlay, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, modalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        var _this = _super.call(this) || this;
        _this.overlay = overlay;
        _this.i18n = i18n;
        _this.cfr = cfr;
        _this.elementRef = elementRef;
        _this.viewContainer = viewContainer;
        _this.modalControl = modalControl;
        _this.focusTrapFactory = focusTrapFactory;
        _this.cdr = cdr;
        _this.modalGlobalConfig = modalGlobalConfig;
        _this.document = document;
        _this.visible = false;
        _this.closable = true;
        _this.okLoading = false;
        _this.okDisabled = false;
        _this.cancelDisabled = false;
        _this.cancelLoading = false;
        _this.keyboard = true;
        _this.noAnimation = false;
        _this.showHelpfulTips = true;
        // [STATIC] Default Modal ONLY
        _this.getContainer = (/**
         * @return {?}
         */
        function () { return _this.overlay.create(); }); // [STATIC]
        // [STATIC]
        _this.zIndex = 1000;
        _this.width = 520;
        _this.okType = 'primary';
        _this.iconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY
        _this.modalType = 'transactional';
        _this.onOk = new EventEmitter();
        _this.onCancel = new EventEmitter();
        _this.cmacsAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        // Trigger when modal open(visible) after animations
        _this.cmacsAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        // Trigger when modal leave-animation over
        _this.visibleChange = new EventEmitter();
        _this.locale = {};
        _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        _this.unsubscribe$ = new Subject();
        _this.scrollStrategy = _this.overlay.scrollStrategies.block();
        return _this;
    }
    Object.defineProperty(CmacsModalComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for cmacsAfterOpen
            return this.cmacsAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for afterClose
            return this.cmacsAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "cancelText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cmacsCancelText || (/** @type {?} */ (this.locale.cancelText));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "okText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cmacsOkText || (/** @type {?} */ (this.locale.okText));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.visible && !this.animationState;
        } // Indicate whether this dialog should hidden
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "mask", {
        /**
         * @description
         * The calculated highest weight of mask value
         *
         * Weight of different mask input:
         * component default value < global configuration < component input value
         */
        get: 
        // Indicate whether this dialog should hidden
        /**
         * \@description
         * The calculated highest weight of mask value
         *
         * Weight of different mask input:
         * component default value < global configuration < component input value
         * @return {?}
         */
        function () {
            if (this.cmacsMask != null) {
                return this.cmacsMask;
            }
            else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMask != null) {
                return this.modalGlobalConfig.cmacsMask;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalComponent.prototype, "maskClosable", {
        /**
         * @description
         * The calculated highest weight of maskClosable value
         *
         * Weight of different maskClosable input:
         * component default value < global configuration < component input value
         */
        get: /**
         * \@description
         * The calculated highest weight of maskClosable value
         *
         * Weight of different maskClosable input:
         * component default value < global configuration < component input value
         * @return {?}
         */
        function () {
            if (this.cmacsMaskClosable != null) {
                return this.cmacsMaskClosable;
            }
            else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMaskClosable != null) {
                return this.modalGlobalConfig.cmacsMaskClosable;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = (/** @type {?} */ (_this.i18n.getLocaleData('Modal')));
        }));
        fromEvent(this.document.body, 'keydown')
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.keydownListener(e); }));
        if (this.isComponent(this.content)) {
            this.createDynamicComponent((/** @type {?} */ (this.content))); // Create component along without View
        }
        if (this.isModalButtons(this.footer)) {
            // Setup default button options
            this.footer = this.formatModalButtons((/** @type {?} */ (this.footer)));
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.getContainer === 'function' ? this.getContainer() : this.getContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Creation modal settings
        if (this.isModalType('creation') || this.isModalType('helpfulTips') || this.isModalType('helpfulTipsNoPanel')) {
            this.cmacsCancelText = null;
            this.cmacsOkText = null;
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    };
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "content"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "content" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "content"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "content" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsModalComponent.prototype.ngOnChanges = 
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "content"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "content" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.visible) {
            this.handleVisibleStateChange(this.visible, !changes.visible.firstChange); // Do not trigger animation while initializing
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            ((/** @type {?} */ (this.autoFocusButtonOk.nativeElement))).focus();
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Close self before destructing
        if (!this.isModalType('interaction')) {
            this.changeVisibleFromInside(false).then((/**
             * @return {?}
             */
            function () {
                _this.destroyModal();
            }));
        }
        else {
            this.closeInteraction();
            this.destroyModal();
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.destroyModal = /**
     * @return {?}
     */
    function () {
        this.modalControl.deregisterModal(this);
        if (this.container instanceof OverlayRef) {
            this.container.dispose();
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsModalComponent.prototype.keydownListener = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === ESCAPE && this.keyboard) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.changeVisibleFromInside(true);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    CmacsModalComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.changeVisibleFromInside(false, result);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    CmacsModalComponent.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        // Destroy equals Close
        this.close(result);
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('ok');
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('cancel');
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.getContentComponentRef = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef;
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef && this.elementRef.nativeElement;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsModalComponent.prototype.onClickMask = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.cmacsMask &&
            this.cmacsMaskClosable &&
            ((/** @type {?} */ ($event.target))).classList.contains('ant-modal-wrap') &&
            this.visible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsModalComponent.prototype.isModalType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.modalType === type;
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.onClickCloseBtn = /**
     * @return {?}
     */
    function () {
        if (this.visible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.closeInteraction = /**
     * @return {?}
     */
    function () {
        this.visible = !this.visible;
        this.visibleChange.emit(this.visible);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsModalComponent.prototype.onClickOkCancel = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var trigger = { ok: this.onOk, cancel: this.onCancel }[type];
        /** @type {?} */
        var loadingKey = { ok: 'okLoading', cancel: 'cancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */
            var caseClose_1 = (/**
             * @param {?} doClose
             * @return {?}
             */
            function (doClose) { return doClose !== false && _this.close((/** @type {?} */ (doClose))); });
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                var handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                function (doClose) {
                    _this[loadingKey] = false;
                    caseClose_1(doClose);
                });
                ((/** @type {?} */ (result))).then(handleThen).catch(handleThen);
            }
            else {
                caseClose_1(result);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsModalComponent.prototype.isNonEmptyString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' && value !== '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsModalComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsModalComponent.prototype.isComponent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Type;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsModalComponent.prototype.isModalButtons = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Array.isArray(value) && value.length > 0;
    };
    // Do rest things when visible state changed
    // Do rest things when visible state changed
    /**
     * @private
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    CmacsModalComponent.prototype.handleVisibleStateChange = 
    // Do rest things when visible state changed
    /**
     * @private
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, animation, closeResult) {
        var _this = this;
        if (animation === void 0) { animation = true; }
        if (!this.isModalType('interaction')) {
            if (visible) {
                // Hide scrollbar at the first time when shown up
                this.scrollStrategy.enable();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
            }
            return Promise.resolve(animation ? this.animateTo(visible) : undefined).then((/**
             * @return {?}
             */
            function () {
                // Emit open/close event after animations over
                if (visible) {
                    _this.cmacsAfterOpen.emit();
                }
                else {
                    _this.cmacsAfterClose.emit(closeResult);
                    _this.restoreFocus();
                    _this.scrollStrategy.disable();
                    // Mark the for check so it can react if the view container is using OnPush change detection.
                    _this.cdr.markForCheck();
                }
            }));
        }
    };
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    CmacsModalComponent.prototype.getButtonCallableProp = 
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    function (options, prop) {
        /** @type {?} */
        var value = options[prop];
        /** @type {?} */
        var args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    };
    // On footer's modal button click
    // On footer's modal button click
    /**
     * @param {?} button
     * @return {?}
     */
    CmacsModalComponent.prototype.onButtonClick = 
    // On footer's modal button click
    /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var result = this.getButtonCallableProp(button, 'onClick');
        if (isPromise(result)) {
            button.loading = true;
            ((/** @type {?} */ (result))).then((/**
             * @return {?}
             */
            function () { return (button.loading = false); })).catch((/**
             * @return {?}
             */
            function () { return (button.loading = false); }));
        }
    };
    // Change visible from inside
    // Change visible from inside
    /**
     * @private
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    CmacsModalComponent.prototype.changeVisibleFromInside = 
    // Change visible from inside
    /**
     * @private
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, closeResult) {
        if (this.visible !== visible) {
            // Change visible value immediately
            this.visible = visible;
            this.visibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    CmacsModalComponent.prototype.changeAnimationState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var _a, _b;
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = (_a = {},
                _a["fade-" + state] = true,
                _a["fade-" + state + "-active"] = true,
                _a);
            this.modalAnimationClassMap = (_b = {},
                _b["zoom-" + state] = true,
                _b["zoom-" + state + "-active"] = true,
                _b);
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    };
    /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    CmacsModalComponent.prototype.animateTo = /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        var _this = this;
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.updateTransformOrigin(); })); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            return setTimeout((/**
             * @return {?}
             */
            function () {
                // Return when animation is over
                _this.changeAnimationState(null);
                resolve();
            }), _this.noAnimation ? 0 : MODAL_ANIMATE_DURATION);
        }));
    };
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    CmacsModalComponent.prototype.formatModalButtons = /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            return __assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        }));
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param {?} component Component class
     * @return {?}
     */
    CmacsModalComponent.prototype.createDynamicComponent = /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param {?} component Component class
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        var childInjector = Injector.create({
            providers: [{ provide: CmacsModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.componentParams) {
            Object.assign(this.contentComponentRef.instance, this.componentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    // Update transform-origin to the last click position on document
    // Update transform-origin to the last click position on document
    /**
     * @private
     * @return {?}
     */
    CmacsModalComponent.prototype.updateTransformOrigin = 
    // Update transform-origin to the last click position on document
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalElement = (/** @type {?} */ (this.modalContainer.nativeElement));
        if (this.previouslyFocusedElement) {
            /** @type {?} */
            var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            /** @type {?} */
            var lastPosition = getElementOffset(this.previouslyFocusedElement);
            /** @type {?} */
            var x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            var y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsModalComponent.prototype.savePreviouslyFocusedElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.document) {
            this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsModalComponent.prototype.trapFocus = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    /**
     * @private
     * @return {?}
     */
    CmacsModalComponent.prototype.restoreFocus = /**
     * @private
     * @return {?}
     */
    function () {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    CmacsModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-modal',
                    exportAs: 'cmacsModal',
                    template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"nzNoAnimation\" *ngIf=\"!isModalType('interaction')\">\r\n  <div *ngIf=\"mask\"\r\n       class=\"ant-modal-mask\"\r\n       [ngClass]=\"maskAnimationClassMap\"\r\n       [class.ant-modal-mask-hidden]=\"hidden\"\r\n       [ngStyle]=\"maskStyle\"\r\n       [style.zIndex]=\"zIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    class=\"ant-modal-wrap {{ wrapClassName }}\"\r\n    [style.zIndex]=\"zIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n         class=\"ant-modal {{ className }}\"\r\n         [ngClass]=\"modalAnimationClassMap\"\r\n         [ngStyle]=\"cmacsStyle\"\r\n         [style.top]=\"isModalType('creation') ? '10vh' : (isModalType('helpfulTips') || isModalType('basic') ||  isModalType('helpfulTipsNoPanel')) ? '4vh' : '100px'\"\r\n         [style.width]=\"width | cmacsToCssUnit\"\r\n         [style.transform-origin]=\"transformOrigin\"\r\n         role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"closable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span *ngIf=\"isModalType('passive') || isModalType('interaction') || isModalType('basic')\"\r\n                [class.ant-modal-close-x]=\"!isModalType('basic')\"\r\n                [class.ant-modal-close-x-basic]=\"isModalType('basic')\"\r\n          >\r\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('transactional')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('creation')\" [ngTemplateOutlet]=\"tplCreationDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTips')\" [ngTemplateOutlet]=\"tplHelpfulTips\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTipsNoPanel') || isModalType('basic')\" [ngTemplateOutlet]=\"tplHelpfulTipsWithoutPanel\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('passive') || isModalType('interaction')\" [ngTemplateOutlet]=\"tplContentPassive\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isModalType('interaction')\">\r\n  <div\r\n    [style.display]=\"visible ? 'inherit' : 'none'\"\r\n    class=\"cmacs-interaction-modal\"\r\n    cdkDrag\r\n    [style.zIndex]=\"zIndex\"\r\n    [ngStyle]=\"cmacsStyle\"\r\n    [style.width]=\"width | cmacsToCssUnit\"\r\n  >\r\n    <div class=\"cmacs-interaction-modal-content\">\r\n      <button class=\"ant-modal-close\" aria-label=\"Close\" (click)=\"closeInteraction()\">\r\n          <span class=\"ant-modal-close-x\"\r\n          >\r\n            <i style=\"color: #ffffff;\" nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n      </button>\r\n      <div class=\"ant-modal-header cmacs-custom-header\">\r\n        <div class=\"ant-modal-title\" style=\"color: #ffffff;\">\r\n          <div>{{title}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-body\" style=\"padding: 10px\">\r\n        <ng-container [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n       [style.height.px]=\"modalType === 'transactional' ? 30 : 50\"\r\n       [style.padding]=\"modalType === 'transactional' ? '7px 24px' : '16px 24px'\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\"\r\n       [style.border-top]=\"modalType === 'transactional' ? 'none' : 'inherit'\"\r\n       [style.padding-bottom]=\"modalType === 'transactional' || modalType === 'passive' ? '20px' : 'inherit'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Creation Modal Content -->\r\n<ng-template #tplCreationDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols\" class=\"cmacs-modal-creation-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? centerPanelCols : (24 - leftPanelCols)\" class=\"cmacs-modal-creation-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [style.display]=\"showHelpfulTips ? 'inherit' : 'none'\" #tipsCreationWizard [nzSpan]=\"rightPanelCols\" class=\"cmacs-modal-creation-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Creation Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTips Modal Content -->\r\n<ng-template #tplHelpfulTips>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols ? leftPanelCols : 8\" class=\"cmacs-modal-helpful-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"centerPanelCols ? centerPanelCols : 8\" class=\"cmacs-modal-helpful-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 8\" class=\"cmacs-modal-helpful-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTips Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n<ng-template #tplHelpfulTipsWithoutPanel>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols ? leftPanelCols : 12\" class=\"cmacs-modal-helpfulTips-no-panel-left\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-left]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 12\" class=\"cmacs-modal-helpfulTips-no-panel-right\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-right]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"iconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><span [innerHTML]=\"title\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container>\r\n            <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button *ngIf=\"cmacsCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n\r\n<!-- [Predefined] Passive Modal Content -->\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentPassive>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header\" [style.padding]=\"modalType === 'passive' ? '7px 24px' : '7px 10px'\" style=\"height: 30px\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\" [style.padding]=\"modalType === 'passive' ? '24px' : '0'\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Passive Modal Content -->\r\n",
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: ChangeDetectionStrategy.Default,
                    styles: [".ant-modal-header{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff}.ant-modal-title{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x{color:#fff;width:25px;height:25px;padding-right:15px;line-height:30px}.ant-modal-close-x-basic{color:#fff;width:30px;height:30px;padding-right:15px;line-height:52px;font-weight:700;font-size:20px}.cmacs-modal-creation-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-creation-center-panel{height:100%;border-left:1px solid #dee0e5;padding:30px;text-align:justify;overflow:auto}.cmacs-modal-creation-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpful-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-helpful-center-panel{height:100%;padding:25px;text-align:justify;overflow:auto}.cmacs-modal-helpful-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpfulTips-no-panel-left,.cmacs-modal-helpfulTips-no-panel-right{padding:25px;height:100%;overflow:auto}.cmacs-custom-header{height:30px;padding:4px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal{box-sizing:border-box;color:rgba(0,0,0,.65);font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;-webkit-font-feature-settings:'tnum';font-feature-settings:'tnum';position:absolute;width:auto;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.cmacs-interaction-modal-content .ant-modal-close,.cmacs-interaction-modal-content .ant-modal-close .ant-modal-close-x{width:25px;height:25px;line-height:30px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsModalComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: NzI18nService },
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ModalControlService },
        { type: FocusTrapFactory },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MODAL_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CmacsModalComponent.propDecorators = {
        visible: [{ type: Input }],
        closable: [{ type: Input }],
        okLoading: [{ type: Input }],
        okDisabled: [{ type: Input }],
        cancelDisabled: [{ type: Input }],
        cancelLoading: [{ type: Input }],
        keyboard: [{ type: Input }],
        noAnimation: [{ type: Input }],
        cmacsMask: [{ type: Input }],
        cmacsMaskClosable: [{ type: Input }],
        showHelpfulTips: [{ type: Input }],
        content: [{ type: Input }],
        componentParams: [{ type: Input }],
        footer: [{ type: Input }],
        getContainer: [{ type: Input }],
        zIndex: [{ type: Input }],
        leftPanelCols: [{ type: Input }],
        centerPanelCols: [{ type: Input }],
        rightPanelCols: [{ type: Input }],
        width: [{ type: Input }],
        wrapClassName: [{ type: Input }],
        className: [{ type: Input }],
        cmacsStyle: [{ type: Input }],
        title: [{ type: Input }],
        maskStyle: [{ type: Input }],
        bodyStyle: [{ type: Input }],
        cmacsOkText: [{ type: Input }],
        cmacsCancelText: [{ type: Input }],
        okType: [{ type: Input }],
        iconType: [{ type: Input }],
        modalType: [{ type: Input }],
        onOk: [{ type: Input }, { type: Output }],
        onCancel: [{ type: Input }, { type: Output }],
        cmacsAfterOpen: [{ type: Output }],
        cmacsAfterClose: [{ type: Output }],
        visibleChange: [{ type: Output }],
        modalContainer: [{ type: ViewChild, args: ['modalContainer',] }],
        bodyContainer: [{ type: ViewChild, args: ['bodyContainer', { read: ViewContainerRef },] }],
        autoFocusButtonOk: [{ type: ViewChild, args: ['autoFocusButtonOk', { read: ElementRef },] }],
        tipsCreationWizard: [{ type: ViewChildren, args: ['tipsCreationWizard',] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "visible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "closable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "okLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "okDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cancelDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cancelLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "keyboard", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsModalComponent.prototype, "noAnimation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cmacsMask", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cmacsMaskClosable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsModalComponent.prototype, "showHelpfulTips", void 0);
    return CmacsModalComponent;
}(CmacsModalRef));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsToCssUnitPipe = /** @class */ (function () {
    function CmacsToCssUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    CmacsToCssUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        /** @type {?} */
        var formatted = +value;
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    CmacsToCssUnitPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cmacsToCssUnit'
                },] }
    ];
    return CmacsToCssUnitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMACS_ROUTE_DATA_BREADCRUMB = 'breadcrumb';
var CmacsBreadcrumbComponent = /** @class */ (function () {
    function CmacsBreadcrumbComponent(injector, ngZone, cd, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cd = cd;
        this.cmacsAutoGenerate = false;
        this.cmacsSeparator = '/';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    CmacsBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.cmacsAutoGenerate) {
            try {
                /** @type {?} */
                var activatedRoute_1 = this.injector.get(ActivatedRoute);
                activatedRoute_1.url.pipe(takeUntil(this.destroy$)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                    _this.cd.markForCheck();
                }));
            }
            catch (e) {
                throw new Error('[NG-ZORRO] You should import RouterModule if you want to use cmacsAutoGenerate');
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsBreadcrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    CmacsBreadcrumbComponent.prototype.navigate = /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    function (url, e) {
        var _this = this;
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        function () {
            return _this.injector
                .get(Router)
                .navigateByUrl(url)
                .then();
        }))
            .then();
    };
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    CmacsBreadcrumbComponent.prototype.getBreadcrumbs = /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var e_1, _a;
        /** @type {?} */
        var children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet === PRIMARY_OUTLET) {
                    // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                    // Parse this layer and generate a breadcrumb item.
                    /** @type {?} */
                    var routeURL = child.snapshot.url.map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    function (segment) { return segment.path; })).join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    // If have data, go to generate a breadcrumb for it.
                    if (child.snapshot.data.hasOwnProperty(CMACS_ROUTE_DATA_BREADCRUMB)) {
                        /** @type {?} */
                        var breadcrumb = {
                            label: child.snapshot.data[CMACS_ROUTE_DATA_BREADCRUMB] || 'Breadcrumb',
                            params: child.snapshot.params,
                            url: nextUrl
                        };
                        breadcrumbs.push(breadcrumb);
                    }
                    return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CmacsBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-breadcrumb',
                    exportAs: 'cmacsBreadcrumb',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>\r\n<ng-container *ngIf=\"cmacsAutoGenerate\">\r\n  <cmacs-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\r\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\r\n  </cmacs-breadcrumb-item>\r\n</ng-container>\r\n",
                    styles: ["\n      cmacs-breadcrumb {\n        display: block;\n      }\n\n      cmacs-breadcrumb-item {\n        font-size: 12px;\n        font-weight: normal;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.5;\n        letter-spacing: normal;\n        color: #acb3bf;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsBreadcrumbComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CmacsBreadcrumbComponent.propDecorators = {
        cmacsAutoGenerate: [{ type: Input }],
        cmacsSeparator: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsBreadcrumbComponent.prototype, "cmacsAutoGenerate", void 0);
    return CmacsBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsBreadcrumbItemComponent = /** @class */ (function () {
    function CmacsBreadcrumbItemComponent(cmacsBreadcrumbComponent) {
        this.cmacsBreadcrumbComponent = cmacsBreadcrumbComponent;
    }
    CmacsBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-breadcrumb-item',
                    exportAs: 'cmacsBreadcrumbItem',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</span>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"cmacsBreadcrumbComponent.cmacsSeparator\">\r\n    {{ cmacsBreadcrumbComponent.cmacsSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                    styles: [".ant-breadcrumb-link a:hover{text-decoration:underline!important}", "\n      cmacs-breadcrumb-item:last-child {\n        color: #656c79;\n      }\n\n      cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: CmacsBreadcrumbComponent }
    ]; };
    return CmacsBreadcrumbItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCardTabComponent = /** @class */ (function () {
    function CmacsCardTabComponent() {
    }
    CmacsCardTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card-tab',
                    exportAs: 'cmacsCardTab',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                }] }
    ];
    CmacsCardTabComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return CmacsCardTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCardComponent = /** @class */ (function () {
    function CmacsCardComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.folderIcon = 'folder';
        this.isEditable = false;
        this.bordered = true;
        this.opened = false;
        this.editable = false;
        this.isRadio = false;
        this.loading = false;
        this.disabled = false;
        this.hoverable = false;
        this.playerReady = new EventEmitter();
        this.actions = [];
        this.team = [];
        this.file = null;
        this.project = [];
        this.cmacsType = 'none';
        this.cmacsIcon = '';
        this.titleChange = new EventEmitter();
        this.ondlclickCard = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.selected = false;
        this.selectedChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.cmacsType === "folder") {
            this.folderIcon = this.opened ? 'folder-open' : 'folder';
        }
        this.isEditable = this.editable;
    };
    /**
     * @param {?} api
     * @return {?}
     */
    CmacsCardComponent.prototype.onPlayerReady = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.playerReady.emit(api);
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.checkRadio = /**
     * @return {?}
     */
    function () {
        this.selectedChange.emit(this.selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.select(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.onDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.cmacsType === 'folder') {
            this.folderIcon = this.folderIcon === 'folder' ? 'folder-open' : 'folder';
            this.opened = !this.opened;
            if (this.opened) {
                this.open.emit();
            }
            else {
                this.close.emit();
            }
        }
        if (this.cmacsType === 'project') {
            this.ondlclickCard.emit(this.project);
        }
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.select = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled) {
            if (!this.isRadio) {
                this.selected = !this.selected;
            }
            else {
                this.selected = this.selected ? this.selected : !this.selected;
            }
            this.selectedChange.emit(this.selected);
        }
    };
    /**
     * @param {?} event
     * @param {?} titleContainer
     * @param {?} titleSpan
     * @return {?}
     */
    CmacsCardComponent.prototype.handleEnter = /**
     * @param {?} event
     * @param {?} titleContainer
     * @param {?} titleSpan
     * @return {?}
     */
    function (event, titleContainer, titleSpan) {
        event.preventDefault();
        event.stopImmediatePropagation();
        titleContainer.style.textOverflow = 'ellipsis';
        /** @type {?} */
        var text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        titleSpan.innerText = text;
        this.isEditable = false;
        this.titleChange.emit(text);
    };
    /**
     * @param {?} titleContainer
     * @return {?}
     */
    CmacsCardComponent.prototype.toggleEdit = /**
     * @param {?} titleContainer
     * @return {?}
     */
    function (titleContainer) {
        this.isEditable = this.editable;
        if (this.isEditable) {
            titleContainer.style.textOverflow = 'initial';
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CmacsCardComponent.prototype.getInitials = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    };
    CmacsCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card',
                    exportAs: 'cmacsCard',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-head\" *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\" [disabled]=\"disabled\"></label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div>\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i nz-icon [type]=\"'paper-clip'\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"cmacs-todo-card-person\">\r\n          <a><i nz-icon [type]=\"'user'\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i nz-icon [type]=\"'message'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n          <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n          <span>{{file.extension}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-content></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <div style=\"margin-bottom: 20px; display: inline-flex\">\r\n        <div class=\"team-person-card\"\r\n             *ngFor=\"let person of team; index as i\"\r\n             [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n             [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \"\r\n        >\r\n          <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n          <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n      <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <img width=\"221px\" height=\"107px\" [src]=\"project.projectImage\">\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a><i nz-icon [type]=\"'arrow-right'\" class=\"project-dates\" style=\"font-size: 16px;\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img class=\"manager-avatar\" width=\"30px\" height=\"30px\" [src]=\"project.teamLead.avatar\">\r\n        <div class=\"project-manager-metadata\">\r\n          <span class=\"manager-name\">{{project.teamLead.name}}</span><br>\r\n          <span class=\"manager-charge\">{{project.teamLead.charge}}</span>\r\n        </div>\r\n        <!-- <a><i nz-icon [type]=\"'mail'\"></i></a> -->\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <div class=\"card-files-folders-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"folderIcon\"></i></a>\r\n      </div>\r\n      <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n        <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" [attr.contentEditable]=\"isEditable\"\r\n        >{{title}}</span>\r\n      </div>\r\n      <div class=\"card-files-folder-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>\r\n\r\n",
                    host: {
                        '[class.ant-card-loading]': 'loading',
                        '[class.ant-card-bordered]': 'bordered',
                        '[class.ant-card-hoverable]': "hoverable || cmacsType === 'selection'",
                        '[class.ant-card-type-inner]': "type === 'inner'",
                        '[class.ant-card-contain-tabs]': '!!tab',
                        '[class.cmacs-card-files-wrapper]': "cmacsType === 'file'",
                        '[class.cmacs-card-measure-wrapper]': "cmacsType === 'measure'",
                        '[class.cmacs-card-measure-wrapper-selected]': "cmacsType === 'measure' && selected",
                        '[class.cmacs-selection-card]': "cmacsType === 'selection'",
                        '[class.cmacs-card-selected]': "cmacsType === 'selection' && selected",
                        '[class.cmacs-card-disabled]': "cmacsType === 'selection' && disabled",
                        '[class.cmacs-action-card]': "cmacsType === 'action'",
                        '[class.cmacs-big-file-card]': "cmacsType === 'big-file'",
                        '[class.cmacs-big-file-card-selected]': "cmacsType === 'big-file' && selected",
                        '[class.cmacs-action-card-disabled]': "cmacsType === 'action' && disabled",
                        '[class.cmacs-information-card]': "cmacsType === 'team'",
                        '[class.cmacs-team-card]': "cmacsType === 'project'",
                        '[class.cmacs-video-player-card]': "cmacsType === 'video'",
                        '[class.cmacs-todo-card]': "cmacsType === 'todo'",
                        '[class.cmacs-todo-card-selected]': "cmacsType === 'todo' && selected",
                        '[class.cmacs-team-card-selected]': "cmacsType === 'project' && selected",
                        '[class.cmacs-card-files-folders-wrapper]': "cmacsType === 'folder'",
                        '[class.file-card-selected]': "cmacsType === 'folder' && selected"
                    },
                    styles: ["\n      cmacs-card {\n        display: block;\n      }\n    ", ".ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-head{min-height:40px;padding:0 14px}.ant-card-extra{padding:8px 0}.ant-card-head-title{padding:12px 0}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-measure-wrapper .cmacs-card-label{padding:9px 0;font-size:13px}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;margin-right:16px;text-align:center;padding:7px 6px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{font-size:18px;top:23%;position:relative;color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label{padding:10px 0}.cmacs-selection-card{width:137px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover{box-shadow:none;border:1px solid #bec4cd}.cmacs-selection-card.ant-card-hoverable:hover .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#d9d9d9!important}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5!important;cursor:default}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;width:165px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .ant-card-head-title{padding:10px 0}.cmacs-information-card:hover .cmacs-btn-action{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:25px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{padding:6px 8px;color:#fff}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-head-title{padding:10px 0}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper i{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;top:10px;margin-left:11px;margin-right:38px}.manager-charge{color:#acb3bf}.manager-name{color:#97a0ae;font-weight:500}.project-manager-details{margin-left:20px;margin-bottom:20px;margin-top:20px}.manager-avatar{display:inline-block;position:relative;top:-9px}.project-manager-details i{font-size:20px;color:#bec4cd;top:-11px;position:relative}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra{display:inline-block}.card-files-folder-extra{display:none;font-size:20px}.card-files-folders-label{width:100px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:11px 5px 11px 11px}.card-files-folders-icon-wrapper{font-size:20px;margin-right:10px;display:inline-block}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-person{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-comments{float:right}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsCardComponent.propDecorators = {
        bordered: [{ type: Input }],
        opened: [{ type: Input }],
        editable: [{ type: Input }],
        isRadio: [{ type: Input }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        hoverable: [{ type: Input }],
        sources: [{ type: Input }],
        playerReady: [{ type: Output }],
        bodyStyle: [{ type: Input }],
        cover: [{ type: Input }],
        body: [{ type: Input }],
        actions: [{ type: Input }],
        team: [{ type: Input }],
        file: [{ type: Input }],
        project: [{ type: Input }],
        todo: [{ type: Input }],
        type: [{ type: Input }],
        cmacsType: [{ type: Input }],
        cmacsIcon: [{ type: Input }],
        title: [{ type: Input }],
        titleChange: [{ type: Output }],
        extra: [{ type: Input }],
        tab: [{ type: ContentChild, args: [CmacsCardTabComponent,] }],
        ondlclickCard: [{ type: Output }],
        open: [{ type: Output }],
        close: [{ type: Output }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        selectedChange: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "bordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "opened", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "editable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "isRadio", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "hoverable", void 0);
    return CmacsCardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCardLoadingComponent = /** @class */ (function () {
    function CmacsCardLoadingComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
    }
    CmacsCardLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card-loading',
                    exportAs: 'cmacsCardLoading',
                    template: "<div class=\"ant-card-loading-content\">\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-22\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-15\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-6\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-18\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-13\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-9\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-4\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-3\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-16\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-6\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n</div>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      cmacs-card-loading {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsCardLoadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsCardLoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCardMetaComponent = /** @class */ (function () {
    function CmacsCardMetaComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-meta');
    }
    CmacsCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card-meta',
                    exportAs: 'cmacsCardMeta',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"avatar\">\r\n  <ng-template [ngTemplateOutlet]=\"avatar\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-meta-detail\" *ngIf=\"title || description\">\r\n  <div class=\"ant-card-meta-title\" *ngIf=\"title\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-card-meta-description\" *ngIf=\"description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                    styles: ["\n      cmacs-card-meta {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsCardMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CmacsCardMetaComponent.propDecorators = {
        title: [{ type: Input }],
        description: [{ type: Input }],
        avatar: [{ type: Input }]
    };
    return CmacsCardMetaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCardGridDirective = /** @class */ (function () {
    function CmacsCardGridDirective(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    CmacsCardGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-card-grid]',
                    exportAs: 'cmacsCardGrid'
                },] }
    ];
    /** @nocollapse */
    CmacsCardGridDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsCardGridDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDateCellDirective = /** @class */ (function () {
    function CmacsDateCellDirective() {
    }
    CmacsDateCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsDateCell]',
                    exportAs: 'cmacsDateCell'
                },] }
    ];
    return CmacsDateCellDirective;
}());
var CmacsMonthCellDirective = /** @class */ (function () {
    function CmacsMonthCellDirective() {
    }
    CmacsMonthCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsMonthCell]',
                    exportAs: 'cmacsMonthCell'
                },] }
    ];
    return CmacsMonthCellDirective;
}());
var CmacsDateFullCellDirective = /** @class */ (function () {
    function CmacsDateFullCellDirective() {
    }
    CmacsDateFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsDateFullCell]',
                    exportAs: 'cmacsDateFullCell'
                },] }
    ];
    return CmacsDateFullCellDirective;
}());
var CmacsMonthFullCellDirective = /** @class */ (function () {
    function CmacsMonthFullCellDirective() {
    }
    CmacsMonthFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsMonthFullCell]',
                    exportAs: 'cmacsMonthFullCell'
                },] }
    ];
    return CmacsMonthFullCellDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCalendarHeaderComponent = /** @class */ (function () {
    function CmacsCalendarHeaderComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.modeChange = new EventEmitter();
        this.fullscreen = true;
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        this._activeDate = new Date();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
            this.setUpYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    CmacsCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-calendar-header',
                    exportAs: 'cmacsCalendarHeader',
                    template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsCalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    CmacsCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        modeChange: [{ type: Output }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return CmacsCalendarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCalendarComponent = /** @class */ (function () {
    function CmacsCalendarComponent(i18n, cdr, dateHelper) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.currentDate = new Date();
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(value, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzFullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = !coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate), { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate, mode: mode });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    CmacsCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpDaysInWeek = /**
     * @private
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd');
            /** @type {?} */
            var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'EEEEEE' : 'dd');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpMonthsInYear = /**
     * @private
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var label = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpDateMatrix = /**
     * @private
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() }) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                var title = this.dateHelper.format(date, dateFormat);
                /** @type {?} */
                var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateCurrentDate = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart, {
                weekStartsOn: this.dateHelper.getFirstDayOfWeek()
            });
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateActiveDate = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart, {
            weekStartsOn: this.dateHelper.getFirstDayOfWeek()
        });
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateCurrentMonth = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateActiveMonth = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    CmacsCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-calendar',
                    exportAs: 'cmacsCalendar',
                    template: "<cmacs-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\r\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\r\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</cmacs-calendar-header>\r\n\r\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\r\n  <div class=\"ant-fullcalendar-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\r\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"ant-fullcalendar-tbody\">\r\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\r\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\r\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\r\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\r\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\r\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\r\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\r\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\r\n            (click)=\"onDateSelect(day.value)\">\r\n            <div class=\"ant-fullcalendar-date\">\r\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\r\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\r\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\r\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\r\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\r\n            class=\"ant-fullcalendar-month-panel-cell\"\r\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\r\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\r\n            (click)=\"onMonthSelect(row * 3 + col)\">\r\n          <div class=\"ant-fullcalendar-month\">\r\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\r\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n            </ng-container>\r\n            <ng-template #defaultCell>\r\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\r\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\r\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    CmacsCalendarComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService }
    ]; };
    CmacsCalendarComponent.propDecorators = {
        nzMode: [{ type: Input, args: ['mode',] }],
        nzModeChange: [{ type: Output, args: ['modeChange',] }],
        nzPanelChange: [{ type: Output, args: ['panelChange',] }],
        nzSelectChange: [{ type: Output, args: ['selectChange',] }],
        nzValue: [{ type: Input, args: ['value',] }],
        nzValueChange: [{ type: Output, args: ['valueChange',] }],
        nzDateCell: [{ type: Input, args: ['dateCell',] }],
        nzDateFullCell: [{ type: Input, args: ['dateFullCell',] }],
        nzMonthCell: [{ type: Input, args: ['monthCell',] }],
        nzMonthFullCell: [{ type: Input, args: ['monthFullCell',] }],
        nzFullscreen: [{ type: Input, args: ['fullScreen',] }],
        nzCard: [{ type: Input, args: ['card',] }],
        dateCellChild: [{ type: ContentChild, args: [CmacsDateCellDirective, { read: TemplateRef },] }],
        dateFullCellChild: [{ type: ContentChild, args: [CmacsDateFullCellDirective, { read: TemplateRef },] }],
        monthCellChild: [{ type: ContentChild, args: [CmacsMonthCellDirective, { read: TemplateRef },] }],
        monthFullCellChild: [{ type: ContentChild, args: [CmacsMonthFullCellDirective, { read: TemplateRef },] }],
        fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
    };
    return CmacsCalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-footer',
                    exportAs: 'calendarFooter',
                    template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\r\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\r\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\r\n  </div>\r\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\r\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\r\n        <span [innerHTML]=\"extraFooter\"></span>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\r\n    <today-button\r\n      *ngIf=\"showToday\"\r\n      [locale]=\"locale\"\r\n      [disabledDate]=\"disabledDate\"\r\n      [hasTimePicker]=\"hasTimePicker\"\r\n      (clickToday)=\"clickToday.emit($event)\"\r\n    ></today-button>\r\n    <time-picker-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [locale]=\"locale\"\r\n      [timePickerDisabled]=\"timePickerDisabled\"\r\n      [showTimePicker]=\"showTimePicker\"\r\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\r\n    ></time-picker-button>\r\n    <ok-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [okDisabled]=\"okDisabled\"\r\n      [locale]=\"locale\"\r\n      (clickOk)=\"clickOk.emit()\"\r\n    ></ok-button>\r\n  </span>\r\n</div>"
                }] }
    ];
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }],
        timePickerDisabled: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
        }
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, (/** @type {?} */ (day)), year];
        }
        else {
            result = [year, month, (/** @type {?} */ (day))];
        }
        return result.filter((/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) { return !!selector; }));
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-header',
                    exportAs: 'calendarHeader',
                    template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledYear\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        disabledYear: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarInputComponent = /** @class */ (function () {
    function CalendarInputComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    CalendarInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.onInputKeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        if (!date.isSame(this.value, 'second')) {
            // Not same with original value
            this.value = date;
            this.valueChange.emit(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarInputComponent.prototype.toReadableInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.checkValidInputDate = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        var date = new CandyDate(input);
        this.invalidInputClass = '';
        if (date.isInvalid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = this.prefixCls + "-input-invalid";
            return null;
        }
        return date;
    };
    CalendarInputComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-input',
                    exportAs: 'calendarInput',
                    template: "<div class=\"{{ prefixCls }}-input-wrap\">\r\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\r\n    <input\r\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\r\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\r\n      value=\"{{ toReadableInput(value) }}\"\r\n      (keyup)=\"onInputKeyup($event)\"\r\n    />\r\n  </div>\r\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\">\r\n    <!--<i nz-icon type=\"close\"></i>-->\r\n  </a>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarInputComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarInputComponent.propDecorators = {
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return CalendarInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OkButtonComponent = /** @class */ (function () {
    function OkButtonComponent() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    OkButtonComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'ok-button',
                    exportAs: 'okButton',
                    template: "<a\r\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\r\n    role=\"button\"\r\n    (click)=\"okDisabled ? null : clickOk.emit()\"\r\n  >\r\n    {{ locale.ok }}\r\n  </a>"
                }] }
    ];
    OkButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        okDisabled: [{ type: Input }],
        clickOk: [{ type: Output }]
    };
    return OkButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimePickerButtonComponent = /** @class */ (function () {
    function TimePickerButtonComponent() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    TimePickerButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    };
    TimePickerButtonComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'time-picker-button',
                    exportAs: 'timePickerButton',
                    template: "<a\r\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"timePickerDisabled ? null : onClick()\"\r\n>\r\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\r\n</a>"
                }] }
    ];
    TimePickerButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        timePickerDisabled: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }]
    };
    return TimePickerButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TodayButtonComponent = /** @class */ (function () {
    function TodayButtonComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @return {?}
     */
    TodayButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    TodayButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    };
    /**
     * @return {?}
     */
    TodayButtonComponent.prototype.onClickToday = /**
     * @return {?}
     */
    function () {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    };
    TodayButtonComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'today-button',
                    exportAs: 'todayButton',
                    template: "<a\r\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"isDisabled ? null : onClickToday()\"\r\n  title=\"{{ title }}\"\r\n>\r\n  {{ hasTimePicker ? locale.now : locale.today }}\r\n</a>"
                }] }
    ];
    /** @nocollapse */
    TodayButtonComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    TodayButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        disabledDate: [{ type: Input }],
        clickToday: [{ type: Output }]
    };
    return TodayButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATE_ROW_NUM = 6;
/** @type {?} */
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        // Customize date content while rendering
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) { return !_this.isSameDate(previousValue_1[index], value); })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.valueChange.emit(value);
        }
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            var day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            var tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.dateHelper.format(tempDate.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
        /** @type {?} */
        var firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        var firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        var increased = 0;
        for (var rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            var week = (weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            });
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                var isBeforeMonthYear = this_1.isBeforeMonthYear(current, this_1.value);
                /** @type {?} */
                var isAfterMonthYear = this_1.isAfterMonthYear(current, this_1.value);
                /** @type {?} */
                var cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this_1.getDateTitle(current),
                    customContent: valueFunctionProp(this_1.dateRender, current),
                    // Customized content
                    content: "" + current.getDate(),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.changeValueFromInside(current); }),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return _this.dayHover.emit(cell.value); })
                };
                if (this_1.showWeek && !week.weekNum) {
                    week.weekNum = this_1.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) {
                    // Range selections
                    /** @type {?} */
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    /** @type {?} */
                    var start = rangeValue[0];
                    /** @type {?} */
                    var end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this_1.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = isBeforeMonthYear,
                    _a[this_1.prefixCls + "-next-month-btn-day"] = isAfterMonthYear,
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                week.dateCells.push(cell);
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                _loop_1(colIndex);
            }
            week.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = week.isCurrent,
                _a[this.prefixCls + "-active-week"] = week.isActive,
                _a);
        }
        return weekRows;
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getDateTitle = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var dateFormat = (this.locale && this.locale.dateFormat) || 'YYYY-MM-DD';
        if (this.dateHelper.relyOnDatePipe) {
            // tslint:disable-next-line: deprecation
            dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
        }
        return this.dateHelper.format(date.nativeDate, dateFormat);
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getWeekNum = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.dateHelper.getISOWeek(date.nativeDate);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isBeforeMonthYear = /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    };
    /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isAfterMonthYear = /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-table',
                    exportAs: 'dateTable',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\"\r\n        role=\"columnheader\"\r\n        title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td\r\n        *ngFor=\"let cell of row.dateCells\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\r\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        title=\"{{ cell.title }}\"\r\n        [ngClass]=\"cell.classMap\"\r\n        role=\"gridcell\"\r\n      >\r\n\r\n        <ng-container [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\r\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\r\n            <span [innerHTML]=\"cell.customContent\"></span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <div\r\n              class=\"{{ prefixCls }}-date\"\r\n              [attr.aria-selected]=\"cell.isSelected\"\r\n              [attr.aria-disabled]=\"cell.isDisabled\"\r\n            >\r\n              {{ cell.content }}\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    DateTableComponent.propDecorators = {
        locale: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        dayHover: [{ type: Output }]
    };
    return DateTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var DecadePanelComponent = /** @class */ (function () {
    function DecadePanelComponent() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.previousCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-100);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.nextCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(100);
    };
    /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    DecadePanelComponent.prototype.trackPanelDecade = /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    function (_index, decadeData) {
        return decadeData.content;
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    DecadePanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    };
    /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    DecadePanelComponent.prototype.chooseDecade = /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    function (startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.makePanelDecades = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var decades = [];
        /** @type {?} */
        var currentYear = this.value.getYear();
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 10;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var start = previousYear + index * 10;
                /** @type {?} */
                var end = previousYear + index * 10 + 9;
                /** @type {?} */
                var content = start + "-" + end;
                /** @type {?} */
                var cell = (decades[rowIndex][colIndex] = {
                    content: content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.previousCentury(); });
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.nextCentury(); });
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.chooseDecade(start); });
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return decades;
    };
    DecadePanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'decade-panel',
                    exportAs: 'decadePanel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div class=\"{{ prefixCls }}-header\">\r\n    <a\r\n      class=\"{{ prefixCls }}-prev-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousCentury()\"\r\n      title=\"{{ locale.previousCentury }}\"\r\n    ></a>\r\n\r\n    <div class=\"{{ prefixCls }}-century\">\r\n      {{ startYear }}-{{ endYear }}\r\n    </div>\r\n    <a\r\n      class=\"{{ prefixCls }}-next-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextCentury()\"\r\n      title=\"{{ locale.nextCentury }}\"\r\n    ></a>\r\n  </div>\r\n  <div class=\"{{ prefixCls }}-body\">\r\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n      <tbody class=\"{{ prefixCls }}-tbody\">\r\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\r\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\r\n            role=\"gridcell\"\r\n            title=\"{{ cell.title }}\"\r\n            (click)=\"cell.onClick()\"\r\n            [ngClass]=\"cell.classMap\"\r\n          >\r\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DecadePanelComponent.ctorParameters = function () { return []; };
    DecadePanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return DecadePanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthPanelComponent = /** @class */ (function () {
    function MonthPanelComponent() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    MonthPanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    };
    MonthPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'month-panel',
                    // tslint:disable-line:component-selector
                    exportAs: 'monthPanel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousYear()\"\r\n        title=\"{{ locale.previousYear }}\"\r\n      ></a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-year-select\"\r\n        role=\"button\"\r\n        (click)=\"yearPanelShow.emit()\"\r\n        title=\"{{ locale.yearSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\r\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-next-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"nextYear()\"\r\n        title=\"{{ locale.nextYear }}\"\r\n      ></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <month-table [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\r\n    </div>\r\n  </div>\r\n</div>"
                }] }
    ];
    MonthPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        disabledDate: [{ type: Input }],
        valueChange: [{ type: Output }],
        yearPanelShow: [{ type: Output }]
    };
    return MonthPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_ROW$1 = 4;
/** @type {?} */
var MAX_COL$1 = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    function (_index, monthData) {
        return monthData.month;
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = (months[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseMonth(cell.month); })
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.month === currentMonth,
                    _a[this_1.prefixCls + "-current-cell"] = today.getYear() === this_1.value.getYear() && cell.month === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'month-table',
                    exportAs: 'monthTable',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\"\r\n        role=\"gridcell\"\r\n        title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\"\r\n        [ngClass]=\"monthCell.classMap\"\r\n      >\r\n        <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());

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
/** @type {?} */
var defaultDisabledTime = {
    disabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    disabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    disabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = __assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.disabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent() {
        var _this = this;
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        });
        this.disabledEndTime = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        });
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        get: 
        // Range ONLY
        /**
         * @return {?}
         */
        function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnInit = 
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) { return _this.initialArray(prop); }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isRange) {
            if (changes.value) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = (/** @type {?} */ (this.value));
                this.valueForRangeShow = this.normalizeRangeValue((/** @type {?} */ (this.value)));
            }
        }
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes.panelMode && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    DateRangePopupComponent.prototype.onShowTimePickerChange = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickToday = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onDayHover = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            /** @type {?} */
            var base = this.selectedValue[0];
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    function (mode, partType) {
        if (this.isRange) {
            ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHeaderChange = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onSelectTime = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
            /** @type {?} */
            var index = this.getPartTypeIndex(partType);
            // tslint:disable-next-line: no-non-null-assertion
            newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
            this.setValue(newValue);
        }
        else {
            // tslint:disable-next-line: no-non-null-assertion
            this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new CandyDate())))); // If not select a date currently, use today
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValue = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            var _a = __read((/** @type {?} */ (this.selectedValue)), 2), left = _a[0], right = _a[1];
            if ((!left && !right) || (left && right)) {
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
                this.calendarChange.emit([value.clone()]);
            }
            else if (left && !right) {
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
                this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    };
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.enablePrevNext = /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    function (direction, partType) {
        if (this.isRange) {
            var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var showMiddle = !start.addMonths(1).isSame(end, 'month');
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPanelMode = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
        }
        else {
            return (/** @type {?} */ (this.panelMode));
        }
    };
    // Get single value or part value of a range
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValue = 
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValueBySelector = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            // tslint:disable-next-line: max-line-length
            /** @type {?} */
            var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
            return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPartTypeIndex = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        // tslint:disable-next-line: no-non-null-assertion
        return this.partTypeMap[(/** @type {?} */ (partType))];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.hasSelectedValue = /**
     * @return {?}
     */
    function () {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.timePickerDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.okDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getTimeOptions = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var value = typeof val === 'function' ? val() : val;
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
     * @return {?}
     */
    function () {
        this.clearHoverValue();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHoverPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DateRangePopupComponent.prototype.getObjectKeys = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.closePickerPanel = /**
     * @private
     * @return {?}
     */
    function () {
        this.closePicker.emit();
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.clearHoverValue = /**
     * @private
     * @return {?}
     */
    function () {
        this.hoverValue = [];
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.buildTimeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showTime) {
            /** @type {?} */
            var showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                /** @type {?} */
                var value = (/** @type {?} */ (this.value));
                this.timeOptions = [
                    this.overrideTimeOptions(showTime, value[0], 'start'),
                    this.overrideTimeOptions(showTime, value[1], 'end')
                ];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.value)));
            }
        }
        else {
            this.timeOptions = null;
        }
    };
    /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideTimeOptions = /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    function (origin, value, partial) {
        /** @type {?} */
        var disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return __assign({}, origin, getTimeConfig(value, disabledTimeFn));
    };
    // Set value and trigger change event
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setValue = 
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideHms = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    };
    // Check if it's a valid range value
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.isValidRange = 
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            var _a = __read(value, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.normalizeRangeValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = __read(value, 2), start = _a[0], end = _a[1];
        /** @type {?} */
        var newStart = start || new CandyDate();
        /** @type {?} */
        var newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    };
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Sort a range value (accurate to second)
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Sort a range value (accurate to second)
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.sortRangeValue = 
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Sort a range value (accurate to second)
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (Array.isArray(this[key])) {
            var _a = __read(this[key], 2), start = _a[0], end = _a[1];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    };
    // Renew and set a range value to trigger sub-component's change detection
    // Renew and set a range value to trigger sub-component's change detection
    /**
     * @private
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setRangeValue = 
    // Renew and set a range value to trigger sub-component's change detection
    /**
     * @private
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    function (key, partType, value) {
        /** @type {?} */
        var ref = (this[key] = this.cloneRangeDate((/** @type {?} */ (this[key]))));
        ref[this.getPartTypeIndex(partType)] = value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.cloneRangeDate = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.initialArray = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    };
    DateRangePopupComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-range-popup',
                    exportAs: 'dateRangePopup',
                    template: "<div\r\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\r\n  [ngStyle]=\"popupStyle\">\r\n\r\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\r\n    <div class=\"{{ prefixCls }}-panel\">\r\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\r\n      </ng-container>\r\n      <div class=\"{{ prefixCls }}-date-panel\">\r\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\r\n          <!-- Range Selectors -->\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\r\n          <div class=\"ant-calendar-range-middle\">~</div>\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #tplCalendarInput let-partType=\"partType\">\r\n  <calendar-input\r\n    [value]=\"getValue(partType)\"\r\n    (valueChange)=\"changeValue($event, partType)\"\r\n    [locale]=\"locale\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [format]=\"format\"\r\n    [placeholder]=\"getPlaceholder(partType)\"\r\n  ></calendar-input>\r\n</ng-template>\r\n\r\n<ng-template #tplInnerPopup let-partType=\"partType\">\r\n  <inner-popup\r\n    [showWeek]=\"showWeek\"\r\n    [locale]=\"locale\"\r\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\r\n    [timeOptions]=\"getTimeOptions(partType)\"\r\n    [panelMode]=\"getPanelMode(partType)\"\r\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\r\n    [value]=\"getValueBySelector(partType)\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\r\n    [enableNext]=\"enablePrevNext('next', partType)\"\r\n    (dayHover)=\"onDayHover($event)\"\r\n    (selectDate)=\"changeValueFromSelect($event)\"\r\n    (selectTime)=\"onSelectTime($event, partType)\"\r\n    (headerChange)=\"onHeaderChange($event, partType)\"\r\n  ></inner-popup>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <calendar-footer\r\n    *ngIf=\"hasFooter\"\r\n    [locale]=\"locale\"\r\n    [showToday]=\"showToday\"\r\n    [hasTimePicker]=\"hasTimePicker\"\r\n    [timePickerDisabled]=\"timePickerDisabled()\"\r\n    [okDisabled]=\"okDisabled()\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\r\n    [(showTimePicker)]=\"showTimePicker\"\r\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\r\n    (clickOk)=\"resultOk.emit()\"\r\n    (clickToday)=\"onClickToday($event)\"\r\n  ></calendar-footer>\r\n</ng-template>\r\n\r\n<!-- Single ONLY -->\r\n<ng-template #tplSinglePart>\r\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Range ONLY -->\r\n<ng-template #tplRangePart let-partType=\"partType\">\r\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\r\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\r\n    <div style=\"outline: none;\">\r\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Range ONLY: Range Quick Selector -->\r\n<ng-template #tplRangeQuickSelector>\r\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\r\n    (click)=\"onClickPresetRange(ranges[name])\"\r\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\r\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\r\n  >{{ name }}</a>\r\n</ng-template>"
                }] }
    ];
    DateRangePopupComponent.propDecorators = {
        isRange: [{ type: Input }],
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        disabledTime: [{ type: Input }],
        showToday: [{ type: Input }],
        showTime: [{ type: Input }],
        extraFooter: [{ type: Input }],
        ranges: [{ type: Input }],
        dateRender: [{ type: Input }],
        popupStyle: [{ type: Input }],
        dropdownClassName: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        calendarChange: [{ type: Output }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        resultOk: [{ type: Output }],
        closePicker: [{ type: Output }]
    };
    return DateRangePopupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InnerPopupComponent = /** @class */ (function () {
    function InnerPopupComponent() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value && !this.value) {
            this.value = new CandyDate();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectTime.emit(new CandyDate(date));
    };
    // The value real changed to outside
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectDate = 
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    };
    InnerPopupComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'inner-popup',
                    exportAs: 'innerPopup',
                    template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n  ></nz-time-picker-panel>\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [locale]=\"locale\"\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    InnerPopupComponent.ctorParameters = function () { return []; };
    InnerPopupComponent.propDecorators = {
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        timeOptions: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        headerChange: [{ type: Output }],
        selectDate: [{ type: Output }],
        selectTime: [{ type: Output }],
        dayHover: [{ type: Output }]
    };
    return InnerPopupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_ROW$2 = 4;
/** @type {?} */
var MAX_COL$2 = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    YearPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.previousDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-10);
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.nextDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(10);
    };
    /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    YearPanelComponent.prototype.trackPanelYear = /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    function (_index, yearData) {
        return yearData.content;
    };
    /**
     * @private
     * @return {?}
     */
    YearPanelComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    YearPanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    YearPanelComponent.prototype.chooseYear = /**
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    /**
     * @private
     * @return {?}
     */
    YearPanelComponent.prototype.makePanelYears = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var currentYear = this.currentYear;
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 1;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW$2; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var year = previousYear + index;
                /** @type {?} */
                var content = String(year);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                /** @type {?} */
                var cell = (years[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.previousDecade(); });
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.nextDecade(); });
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.chooseYear(cell.year); });
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL$2; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    YearPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'year-panel',
                    exportAs: 'yearPanel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-decade-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousDecade()\"\r\n        title=\"{{ locale.previousDecade }}\"\r\n      ></a>\r\n      <a\r\n        class=\"{{ prefixCls }}-decade-select\"\r\n        role=\"button\"\r\n        (click)=\"decadePanelShow.emit()\"\r\n        title=\"{{ locale.decadeSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-decade-select-content\">\r\n          {{ startYear }}-{{ endYear }}\r\n        </span>\r\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n        <tbody class=\"{{ prefixCls }}-tbody\">\r\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\r\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\r\n              role=\"gridcell\"\r\n              title=\"{{ yearCell.title }}\"\r\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\r\n              [ngClass]=\"yearCell.classMap\"\r\n            >\r\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [
                        // Support disabledDate
                        "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    YearPanelComponent.ctorParameters = function () { return []; };
    YearPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }],
        decadePanelShow: [{ type: Output }]
    };
    return YearPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibPackerModule = /** @class */ (function () {
    function LibPackerModule() {
    }
    LibPackerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule],
                    exports: [
                        CalendarHeaderComponent,
                        CalendarInputComponent,
                        CalendarFooterComponent,
                        OkButtonComponent,
                        TimePickerButtonComponent,
                        TodayButtonComponent,
                        DateTableComponent,
                        YearPanelComponent,
                        MonthPanelComponent,
                        MonthTableComponent,
                        DecadePanelComponent,
                        InnerPopupComponent,
                        DateRangePopupComponent
                    ],
                    declarations: [
                        CalendarHeaderComponent,
                        CalendarInputComponent,
                        CalendarFooterComponent,
                        OkButtonComponent,
                        TimePickerButtonComponent,
                        TodayButtonComponent,
                        DateTableComponent,
                        YearPanelComponent,
                        MonthPanelComponent,
                        MonthTableComponent,
                        DecadePanelComponent,
                        InnerPopupComponent,
                        DateRangePopupComponent
                    ]
                },] }
    ];
    return LibPackerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDropdownADirective = /** @class */ (function () {
    function CmacsDropdownADirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
    }
    CmacsDropdownADirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'a[cmacs-dropdown]'
                },] }
    ];
    /** @nocollapse */
    CmacsDropdownADirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsDropdownADirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDropdownDirective = /** @class */ (function () {
    function CmacsDropdownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.stopPropagation(); })), mapTo(true));
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    CmacsDropdownDirective.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    };
    CmacsDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-dropdown]',
                    exportAs: 'cmacsDropdown'
                },] }
    ];
    /** @nocollapse */
    CmacsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsMenuDropdownService = /** @class */ (function (_super) {
    __extends(CmacsMenuDropdownService, _super);
    function CmacsMenuDropdownService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInDropDown = true;
        return _this;
    }
    CmacsMenuDropdownService.decorators = [
        { type: Injectable }
    ];
    return CmacsMenuDropdownService;
}(NzMenuBaseService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMACS_DROPDOWN_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topLeft,
    POSITION_MAP.topRight,
    POSITION_MAP.leftTop,
    POSITION_MAP.rightTop
];
/**
 * @param {?} injector
 * @return {?}
 */
function menuServiceFactory(injector) {
    return injector.get(CmacsMenuDropdownService);
}
var CmacsDropdownComponent = /** @class */ (function () {
    function CmacsDropdownComponent(cdr, cmacsMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.cmacsMenuDropdownService = cmacsMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.updatedPosition = 'bottom';
        this.updatedOverLay = 'end';
        this.updatedOrigin = 'end';
        this.dropDownPosition = 'bottom';
        this.positions = __spread(CMACS_DROPDOWN_POSITIONS);
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.trigger = 'hover';
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.placement = 'bottomLeft';
        this.clickHide = true;
        this.disabled = false;
        this.visible = false;
        this.tableFilter = false;
        this.visibleChange = new EventEmitter();
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    CmacsDropdownComponent.prototype.setVisibleStateWhen = /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.trigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsDropdownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updatedOverLay = position.connectionPair.overlayX;
        this.updatedOrigin = position.connectionPair.originX;
        this.updatedPosition = this.dropDownPosition;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    CmacsDropdownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        var _this = this;
        /** @type {?} */
        var click$ = this.clickHide ? this.cmacsMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest(merge(observable$, click$), this.cmacsMenuDropdownService.menuOpen$)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.disabled && _this.visible !== visible) {
                _this.visible = visible;
                _this.visibleChange.emit(_this.visible);
                _this.triggerWidth = _this.cmacsDropdownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        if (this.cmacsDropdownDirective) {
            this.cmacsDropdownDirective.setDisabled(this.disabled);
        }
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.startSubscribe(merge(this.visible$, this.trigger === 'hover' ? this.cmacsDropdownDirective.hover$ : this.cmacsDropdownDirective.$click));
        this.updateDisabledState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.visible) {
            this.visible$.next(this.visible);
        }
        if (changes.disabled) {
            this.updateDisabledState();
        }
        if (changes.placement) {
            this.dropDownPosition = this.placement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = __spread([POSITION_MAP[this.placement]], this.positions);
        }
    };
    CmacsDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown',
                    exportAs: 'cmacsDropdown',
                    preserveWhitespaces: false,
                    providers: [
                        CmacsMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: menuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content select=\"[cmacs-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropdownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"visible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div #dropdown class=\"{{'cmacs-dropdown ant-dropdown ant-dropdown-placement-'+placement}}\"\r\n    [class.cmacs-dropdown-updated-position-bottom-top]=\"updatedPosition === 'top'\"\r\n    [class.cmacs-dropdown-updated-position-top-bottom]=\"updatedPosition === 'bottom'\"\r\n    [class.cmacs-dropdown-updated-overlay-end-start]=\"updatedOverLay === 'start'\"\r\n    [class.cmacs-dropdown-updated-origin-end-start]=\"updatedOrigin === 'start'\"\r\n    [ngClass]=\"overlayClassName\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"tableFilter\">\r\n      <ng-content select=\"[cmacs-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [":root{--bg-color:white}.cmacs-dropdown .ant-dropdown-menu-item{padding:8px 10px 8px 5px;border-top:1px solid #dee0e5}.cmacs-dropdown .ant-dropdown-menu-item:first-child{border-top:none}.cmacs-dropdown ul{padding:0;border:1px solid #dee0e5}.cmacs-dropdown.ant-dropdown-placement-bottomCenter ul{top:8px}.cmacs-dropdown.ant-dropdown-placement-topCenter ul{top:-8px}.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:-7px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-rightTop ul{right:-6px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{display:none}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:calc(-100% - 8px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop ul{left:calc(80% - 5px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{display:none}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}", "\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CmacsMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsDropdownComponent.propDecorators = {
        cmacsDropdownDirective: [{ type: ContentChild, args: [CmacsDropdownDirective,] }],
        nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        trigger: [{ type: Input }],
        overlayClassName: [{ type: Input }],
        overlayStyle: [{ type: Input }],
        placement: [{ type: Input }],
        clickHide: [{ type: Input }],
        disabled: [{ type: Input }],
        visible: [{ type: Input }],
        tableFilter: [{ type: Input }],
        visibleChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "clickHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "visible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "tableFilter", void 0);
    return CmacsDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$1 = menuServiceFactory;
var CmacsDropdownButtonComponent = /** @class */ (function (_super) {
    __extends(CmacsDropdownButtonComponent, _super);
    function CmacsDropdownButtonComponent(cdr, cmacsMenuDropdownService, noAnimation) {
        var _this = _super.call(this, cdr, cmacsMenuDropdownService, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.size = 'default';
        _this.type = 'default';
        _this.cmacsClick = new EventEmitter();
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    CmacsDropdownButtonComponent.prototype.ngAfterContentInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.visible$);
    };
    CmacsDropdownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown-button',
                    exportAs: 'cmacsDropdownButton',
                    preserveWhitespaces: false,
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        CmacsMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: ɵ0$1,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" cmacs-dropdown>\r\n  <button cmacs-button\r\n    type=\"button\"\r\n    [disabled]=\"disabled\"\r\n    [type]=\"type\"\r\n    [size]=\"size\"\r\n    (click)=\"cmacsClick.emit($event)\">\r\n    <span><ng-content></ng-content></span>\r\n  </button>\r\n  <button cmacs-button\r\n    type=\"button\"\r\n    class=\"ant-dropdown-trigger\"\r\n    [type]=\"type\"\r\n    [size]=\"size\"\r\n    [disabled]=\"disabled\"\r\n    (click)=\"setVisibleStateWhen(true,'click')\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <i nz-icon type=\"ellipsis\"></i>\r\n  </button>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropDownDirective\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"visible\">\r\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+ placement}}\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <ng-content select=\"[nz-menu]\"></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: ["\n      cmacs-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CmacsMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsDropdownButtonComponent.propDecorators = {
        size: [{ type: Input }],
        type: [{ type: Input }],
        cmacsClick: [{ type: Output }],
        cmacsDropDownDirective: [{ type: ViewChild, args: [CmacsDropdownDirective,] }]
    };
    return CmacsDropdownButtonComponent;
}(CmacsDropdownComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDropdownContextComponent = /** @class */ (function () {
    function CmacsDropdownContextComponent(cdr) {
        this.cdr = cdr;
        this.open = true;
        this.dropDownPosition = 'bottom';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.init = /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    function (open, templateRef, positionChanges, control) {
        var _this = this;
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.dispose();
        }
    };
    // TODO auto set dropdown class after the bug resolved
    /** https://github.com/angular/angular/issues/14842 **/
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    CmacsDropdownContextComponent.prototype.ngOnDestroy = 
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown-context',
                    exportAs: 'cmacsDropdownContext',
                    animations: [slideMotion],
                    preserveWhitespaces: false,
                    template: "<div *ngIf=\"open\"\r\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\r\n  [@slideMotion]=\"dropDownPosition\"\r\n  (@slideMotion.done)=\"afterAnimation()\">\r\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CmacsMenuDropdownService],
                    styles: ["\n      cmacs-dropdown-context {\n        display: block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownContextComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return CmacsDropdownContextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDropdownService = /** @class */ (function () {
    function CmacsDropdownService(overlay) {
        this.overlay = overlay;
    }
    /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    CmacsDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    function ($event, templateRef) {
        var _this = this;
        $event.preventDefault();
        this.dispose();
        this.overlayRef = this.overlay.create(new OverlayConfig({
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo({
                x: $event.x,
                y: $event.y
            })
                .withPositions([
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ])
        }));
        /** @type {?} */
        var positionChanges = ((/** @type {?} */ (this.overlayRef.getConfig().positionStrategy)))
            .positionChanges;
        /** @type {?} */
        var instance = this.overlayRef.attach(new ComponentPortal(CmacsDropdownContextComponent)).instance;
        fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () { return instance.close(); }));
        instance.init(true, templateRef, positionChanges, this);
        return instance;
    };
    /**
     * @return {?}
     */
    CmacsDropdownService.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    CmacsDropdownService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmacsDropdownService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    return CmacsDropdownService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDividerComponent = /** @class */ (function () {
    function CmacsDividerComponent() {
        this.size = '17px';
    }
    CmacsDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-divider',
                    template: "<span class=\"ant-divider ant-divider-vertical\" [style.font-size]=\"size\">\r\n  <ng-container></ng-container>\r\n</span>\r\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ant-divider,.ant-divider-vertical{height:1em}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDividerComponent.ctorParameters = function () { return []; };
    CmacsDividerComponent.propDecorators = {
        size: [{ type: Input }]
    };
    return CmacsDividerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormExplainComponent = /** @class */ (function () {
    function CmacsFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
    }
    CmacsFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-explain',
                    exportAs: 'cmacsFormExplain',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [helpMotion],
                    template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>",
                    styles: ["\n      cmacs-form-explain {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsFormExplainComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsFormExplainComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
var CmacsFormItemComponent = /** @class */ (function (_super) {
    __extends(CmacsFormItemComponent, _super);
    function CmacsFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, cdr) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) || this;
        _this.cdr = cdr;
        _this.flex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        return _this;
    }
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.updateFlexStyle = /**
     * @return {?}
     */
    function () {
        if (this.flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzFormExplainComponent) {
            this.listOfNzFormExplainComponent.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.updateFlexStyle();
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.hasOwnProperty('flex')) {
            this.updateFlexStyle();
        }
    };
    CmacsFormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-item',
                    exportAs: 'cmacsFormItem',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-form-item-with-help]': 'listOfNzFormExplainComponent && (listOfNzFormExplainComponent.length > 0)'
                    },
                    styles: ["\n      cmacs-form-item {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsFormItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
    CmacsFormItemComponent.propDecorators = {
        flex: [{ type: Input }],
        listOfNzFormExplainComponent: [{ type: ContentChildren, args: [CmacsFormExplainComponent, { descendants: true },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsFormItemComponent.prototype, "flex", void 0);
    return CmacsFormItemComponent;
}(NzRowDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormControlComponent = /** @class */ (function (_super) {
    __extends(CmacsFormControlComponent, _super);
    function CmacsFormControlComponent(nzUpdateHostClassService, elementRef, cmacsFormItemComponent, nzRowDirective, cdr, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, cmacsFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
        return _this;
    }
    Object.defineProperty(CmacsFormControlComponent.prototype, "cmacsHasFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFeedback;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsFormControlComponent.prototype, "cmacsValidateStatus", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof FormControl || value instanceof NgModel) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.removeSubscribe = /**
     * @return {?}
     */
    function () {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.watchControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CmacsFormControlComponent.prototype.validateControlStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (/** @type {?} */ ((!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status)));
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.setControlClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = '';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'exclamation';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = '';
        }
        else {
            this.status = 'init';
            this.iconType = '';
        }
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.status === 'warning',
            _a["is-validating"] = this.status === 'validating',
            _a["has-error"] = this.status === 'error',
            _a["has-success"] = this.status === 'success',
            _a["has-feedback"] = this.cmacsHasFeedback,
            _a);
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.defaultValidateControl && !this.validateControl && !this.validateString) {
            this.cmacsValidateStatus = this.defaultValidateControl;
        }
    };
    /**
     * @return {?}
     */
    CmacsFormControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    CmacsFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-control',
                    exportAs: 'cmacsFormControl',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"cmacsHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <ng-content select=\"cmacs-form-explain\"></ng-content>\r\n</div>\r\n",
                    styles: [".ant-form-item-label{display:block;text-align:left;width:100%;color:#97a0ae!important;font-size:12px!important}.ant-form-item-label>label{color:#97a0ae}.ant-form label{font-size:12px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-form-item-required::before{content:none}.ant-form-item-label>label.ant-form-item-required::after{display:inline-block;color:#f5222d;font-size:9px;font-family:SimSun,sans-serif;line-height:1;content:'*';position:relative;top:-5px;left:5px}.ant-form-item-label>label::after{content:none}", "\n      cmacs-form-control {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsFormControlComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: CmacsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CmacsFormControlComponent.propDecorators = {
        defaultValidateControl: [{ type: ContentChild, args: [NgControl,] }],
        cmacsHasFeedback: [{ type: Input }],
        cmacsValidateStatus: [{ type: Input }]
    };
    return CmacsFormControlComponent;
}(NzColDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormExtraComponent = /** @class */ (function () {
    function CmacsFormExtraComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
    }
    CmacsFormExtraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-extra',
                    exportAs: 'cmacsFormExtra',
                    template: "<ng-content></ng-content>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      cmacs-form-extra {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsFormExtraComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsFormExtraComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormLabelComponent = /** @class */ (function (_super) {
    __extends(CmacsFormLabelComponent, _super);
    function CmacsFormLabelComponent(nzUpdateHostClassService, elementRef, cmacsFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, cmacsFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.cmacsRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(CmacsFormLabelComponent.prototype, "cmacsNoColon", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.noColon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsFormLabelComponent.prototype.setDefaultNoColon = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsFormLabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    CmacsFormLabelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    CmacsFormLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-label',
                    exportAs: 'cmacsFormLabel',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<label [attr.for]=\"cmacsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : cmacsNoColon\"\r\n  [class.ant-form-item-required]=\"cmacsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
                }] }
    ];
    /** @nocollapse */
    CmacsFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: CmacsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    CmacsFormLabelComponent.propDecorators = {
        cmacsFor: [{ type: Input }],
        cmacsRequired: [{ type: Input }],
        cmacsNoColon: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsFormLabelComponent.prototype, "cmacsRequired", void 0);
    return CmacsFormLabelComponent;
}(NzColDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormSplitComponent = /** @class */ (function () {
    function CmacsFormSplitComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
    CmacsFormSplitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-split',
                    exportAs: 'cmacsFormSplit',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    CmacsFormSplitComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsFormSplitComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormTextComponent = /** @class */ (function () {
    function CmacsFormTextComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
    CmacsFormTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-text',
                    exportAs: 'cmacsFormText',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    CmacsFormTextComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return CmacsFormTextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFormDirective = /** @class */ (function () {
    function CmacsFormDirective(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.layout = 'horizontal';
        this.cmacsNoColon = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @return {?}
     */
    CmacsFormDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.layout] = this.layout,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsFormDirective.prototype.updateItemsDefaultColon = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.cmacsFormLabelComponent) {
            this.cmacsFormLabelComponent.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.setDefaultNoColon(_this.cmacsNoColon); }));
        }
    };
    /**
     * @return {?}
     */
    CmacsFormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsFormDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('cmacsNoColon')) {
            this.updateItemsDefaultColon();
        }
    };
    /**
     * @return {?}
     */
    CmacsFormDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cmacsFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateItemsDefaultColon();
        }));
    };
    /**
     * @return {?}
     */
    CmacsFormDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-form]',
                    exportAs: 'cmacsForm',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    CmacsFormDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    CmacsFormDirective.propDecorators = {
        layout: [{ type: Input }],
        cmacsNoColon: [{ type: Input }],
        cmacsFormLabelComponent: [{ type: ContentChildren, args: [CmacsFormLabelComponent, { descendants: true },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsFormDirective.prototype, "cmacsNoColon", void 0);
    return CmacsFormDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsProgressComponent = /** @class */ (function () {
    function CmacsProgressComponent() {
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzType = 'line';
        this.nzStrokeLinecap = 'round';
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.inferredStrokeWidth = 8;
    }
    Object.defineProperty(CmacsProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || ((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p + "%"; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || this.inferredStrokeWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzSize = changes.nzSize, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent) {
            this.updatePathStyles();
        }
        if (nzSize) {
            if (this.nzSize === 'small') {
                this.inferredStrokeWidth = 6;
            }
        }
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
            this.updateIcon();
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
            this.updateIcon();
        }
        if (nzType) {
            if (this.nzType !== 'line') {
                this.inferredStrokeWidth = 6;
            }
            if (this.nzType === 'dashboard') {
                this.inferredGapPosition = 'bottom';
                this.inferredGapDegree = 75;
            }
            if (this.nzType === 'circle') {
                this.inferredGapDegree = 0;
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || this.inferredGapPosition;
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n    a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n    a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || this.inferredGapDegree;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.nzPercent / 100) * (len - gapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
        /** @type {?} */
        var ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
        this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
    };
    CmacsProgressComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-progress',
                    exportAs: 'cmacsProgress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n     [class.ant-progress-line]=\"nzType == 'line'\"\r\n     [class.ant-progress-small]=\"nzSize == 'small'\"\r\n     [class.ant-progress-show-info]=\"nzShowInfo\"\r\n     [class.ant-progress-circle]=\"isCircleStyle\">\r\n  <!-- Line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div class=\"ant-progress-bg\"\r\n             [style.width.%]=\"nzPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.background]=\"nzStrokeColor\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n        <div class=\"ant-progress-success-bg\"\r\n             [style.width.%]=\"nzSuccessPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n  <!-- Circle/Dashboard progress -->\r\n  <div [style.width.px]=\"this.nzWidth\"\r\n       [style.height.px]=\"this.nzWidth\"\r\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n       class=\"ant-progress-inner\"\r\n       *ngIf=\"isCircleStyle\">\r\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\r\n      <path class=\"ant-progress-circle-trail\"\r\n            stroke=\"#f3f3f3\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke-width]=\"strokeWidth\"\r\n            [ngStyle]=\"trailPathStyle\"\r\n            [attr.d]=\"pathString\"></path>\r\n      <path class=\"ant-progress-circle-path\"\r\n            [attr.d]=\"pathString\"\r\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke]=\"nzStrokeColor || statusColorMap[status]\"\r\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n            [ngStyle]=\"strokePathStyle\"></path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    CmacsProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input, args: ['showInfo',] }],
        nzWidth: [{ type: Input, args: ['width',] }],
        nzStrokeColor: [{ type: Input, args: ['strokeColor',] }],
        nzSize: [{ type: Input, args: ['size',] }],
        nzFormat: [{ type: Input, args: ['format',] }],
        nzSuccessPercent: [{ type: Input, args: ['successPercent',] }],
        nzPercent: [{ type: Input, args: ['percent',] }],
        nzStrokeWidth: [{ type: Input, args: ['strokeWidth',] }],
        nzGapDegree: [{ type: Input, args: ['gapDegree',] }],
        nzStatus: [{ type: Input, args: ['status',] }],
        nzType: [{ type: Input, args: ['type',] }],
        nzGapPosition: [{ type: Input, args: ['gapPosition',] }],
        nzStrokeLinecap: [{ type: Input, args: ['strokeLinecap',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsProgressComponent.prototype, "nzSuccessPercent", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsProgressComponent.prototype, "nzPercent", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsProgressComponent.prototype, "nzStrokeWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsProgressComponent.prototype, "nzGapDegree", void 0);
    return CmacsProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsFloatingMenuComponent = /** @class */ (function () {
    function CmacsFloatingMenuComponent() {
        this.carrot = ''; // bottom | top | '';
    }
    CmacsFloatingMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-floating-menu',
                    exportAs: 'cmacsFloatingMenu',
                    template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.carrot-bottom-menu]': "carrot === 'bottom'",
                        '[class.carrot-top-menu]': "carrot === 'top'",
                        '[style.top]': "top",
                        '[style.bottom]': "bottom",
                        '[style.left]': "left",
                        '[style.right]': "right",
                    },
                    styles: ["cmacs-floating-menu{display:inline-block;position:fixed}cmacs-floating-menu>div{border-radius:3px;background-color:#0d1e3b;box-shadow:0 8px 7px -3px rgba(5,6,6,.18);z-index:50}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu>div>button:first-child{padding-left:16px!important}cmacs-floating-menu>div>button:last-child{padding-right:16px!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled:hover,cmacs-floating-menu .ant-btn-icon-only,cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}"]
                }] }
    ];
    /** @nocollapse */
    CmacsFloatingMenuComponent.ctorParameters = function () { return []; };
    CmacsFloatingMenuComponent.propDecorators = {
        carrot: [{ type: Input }],
        top: [{ type: Input }],
        bottom: [{ type: Input }],
        left: [{ type: Input }],
        right: [{ type: Input }]
    };
    return CmacsFloatingMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsOptionLiComponent = /** @class */ (function () {
    function CmacsOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.clickOption = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.clickOption(this.nzOption);
    };
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.selected = isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })));
            _this.cdr.markForCheck();
        }));
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option) {
                _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
            }
            else {
                _this.active = false;
            }
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsOptionLiComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-option-li]',
                    exportAs: 'cmacsOptionLi',
                    template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  {{nzOption.nzLabel}}\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"',
                        '(click)': 'clickOption()',
                        '(mousedown)': '$event.preventDefault()'
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CmacsOptionLiComponent.propDecorators = {
        nzOption: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }]
    };
    return CmacsOptionLiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsOptionContainerComponent = /** @class */ (function () {
    function CmacsOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.showSearch = false;
        this.showCmacsSearch = false;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.scrollIntoViewIfNeeded = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        // delay after open
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                /** @type {?} */
                var targetOption = _this.listOfNzOptionLiComponent.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) {
                    return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue);
                }));
                /* tslint:disable:no-any */
                if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                    ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                }
                /* tslint:enable:no-any */
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.onSearch.emit(value);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.trackLabel = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzLabel;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.trackValue = 
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
    CmacsOptionContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.nzScrollToBottom.emit();
                    }));
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    CmacsOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-option-container]',
                    exportAs: 'cmacsOptionContainer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon type=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"Search\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\r\n    cmacs-select-unselectable\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n"
                }] }
    ];
    /** @nocollapse */
    CmacsOptionContainerComponent.ctorParameters = function () { return [
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    CmacsOptionContainerComponent.propDecorators = {
        listOfNzOptionLiComponent: [{ type: ViewChildren, args: [CmacsOptionLiComponent,] }],
        dropdownUl: [{ type: ViewChild, args: ['dropdownUl',] }],
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzNotFoundContent: [{ type: Input }],
        showSearch: [{ type: Input }],
        showCmacsSearch: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        nzScrollToBottom: [{ type: Output }],
        onSearch: [{ type: Output }]
    };
    return CmacsOptionContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSelectUnselectableDirective = /** @class */ (function () {
    function CmacsSelectUnselectableDirective() {
    }
    CmacsSelectUnselectableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacs-select-unselectable]',
                    exportAs: 'cmacsSelectUnselectable',
                    host: {
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"'
                    }
                },] }
    ];
    return CmacsSelectUnselectableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsKanbanComponent = /** @class */ (function () {
    function CmacsKanbanComponent() {
        this.multiselect = false;
        /**
         * Template for items to render. "item" object ist passed (see examples)
         * itemTemplate is for each column
         * itemTemplates is for change the template of a column
         */
        this.itemTemplate = null;
        this.itemTemplates = null;
        /**
         * Template for column headers. Current groupName will be passed (see examples)
         */
        this.columnHeaderTemplate = null;
        /**
         * Template for column headers. Current groupName will be passed (see examples)
         */
        this.columnHeaderCollapsedTemplate = null;
        // scrolling
        this.hasVerticalScroll = false;
        this.heightContainer = '500px';
        /**
         * Templates for actions and description panels
         */
        this.actionPanelTemplates = null;
        this.descriptionPanelTemplates = null;
        this.draggedItem = new EventEmitter();
        this.onclickItem = new EventEmitter();
        this.ondblclickItem = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.selectedItems = [];
        this.dragStartedColumn = null;
    }
    /**
     * @return {?}
     */
    CmacsKanbanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getItemTemplate = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.actionPanelTemplates) {
            /** @type {?} */
            var elem = this.itemTemplates.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.id === id; }));
            if (elem) {
                return elem.template;
            }
        }
        return this.itemTemplate;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getActionPanel = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.actionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        var elem = this.actionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.id === id; }));
        return elem ? elem.template : null;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getDescriptionPanel = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.descriptionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        var elem = this.descriptionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.id === id; }));
        return elem ? elem.template : null;
    };
    /**
     * @return {?}
     */
    CmacsKanbanComponent.prototype.verticalScrollStyle = /**
     * @return {?}
     */
    function () {
        return (this.hasVerticalScroll) ? { height: this.heightContainer } : {};
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnStyle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        return (this.columnWidth && !collapsed) ? { minWidth: this.columnWidth } : {};
    };
    /**
     * @param {?} column
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnExpand = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        column.collapsed = false;
    };
    /**
     * @param {?} col
     * @return {?}
     */
    CmacsKanbanComponent.prototype.setDragStartedColumn = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.dragStartedColumn = col;
    };
    /**
     * @param {?} event
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.drop = /**
     * @param {?} event
     * @param {?} columnId
     * @return {?}
     */
    function (event, columnId) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.emitDroppedItem(event.item.data, columnId);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return id === columnId; }))) {
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
            }
        }
        this.dragStartedColumn = null;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.emitDroppedItem = /**
     * @private
     * @param {?} data
     * @param {?} columnId
     * @return {?}
     */
    function (data, columnId) {
        data.columnId = columnId;
        this.draggedItem.emit(data);
    };
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.clickItem = /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    function (item, columnId) {
        console.log(this.board);
        item.columnId = columnId;
        this.onclickItem.emit(item);
        // add or remove elements to selected items
        if (!item.disabled) {
            /** @type {?} */
            var idx = this.selectedItems.findIndex((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) { return elem.id === item.id; }));
            if (idx === -1) {
                if (!this.multiselect) {
                    this.selectedItems = [];
                }
                this.selectedItems.push(item);
            }
            else {
                this.selectedItems.splice(idx, 1);
            }
            this.selectionChange.emit(this.selectedItems);
        }
    };
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.dblclickItem = /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    function (item, columnId) {
        item.columnId = columnId;
        this.ondblclickItem.emit(item);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.isItemSelected = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.selectedItems.some((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.id === id; }));
    };
    CmacsKanbanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kanban',
                    exportAs: 'cmacsKanban',
                    template: "<div class=\"root\">\r\n    <div class=\"board\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle(column.collapsed)\" [ngClass]=\"column.class\"\r\n            [class.collapsed]=\"column.collapsed\"\r\n          >\r\n            <!-- collapsed -->\r\n            <div *ngIf=\"column.collapsed\" class=\"column-header-collapsed\" (click)=\"columnExpand(column)\">\r\n              <button cmacs-button style=\"padding: 8px;\">\r\n                <i nz-icon type=\"arrows-alt\" style=\"font-size: 15px;\"></i>\r\n              </button>\r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-1\"></div>\r\n              <ng-container  [ngIf]=\"columnHeaderCollapsedTemplate\" *ngTemplateOutlet=\"columnHeaderCollapsedTemplate; context: { column: column}\"></ng-container>\r\n              <div *ngIf=\"!columnHeaderCollapsedTemplate\" class=\"column-header-collapsed-text\">\r\n                <span>{{ column.name }}</span>\r\n              </div>  \r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-2\"></div>\r\n            </div>\r\n            <!-- end collapsed -->\r\n            <ng-container class=\"column-header-template\" [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <span class=\"column-title\">{{column.name}}</span>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container class=\"column-action-panel\" [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item, column.id)\"\r\n                   (dblclick)=\"dblclickItem(item, column.id)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container class=\"column-description-panel\" [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.has-gradient-text{background:-webkit-linear-gradient(#13f7f4,#2af598);-webkit-text-fill-color:transparent}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:500;padding:10px 20px;font-family:Roboto;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79}.column-title-items{line-height:1.67;font-size:12px;color:#acb3bf;float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;-webkit-box-flex:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:8px;margin-bottom:8px;height:80px}.column-header-collapsed-line-2{margin-top:8px;height:100%}.column-header-collapsed-text{-webkit-transform:rotate(90deg);transform:rotate(90deg);margin:0 auto;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto}"]
                }] }
    ];
    /** @nocollapse */
    CmacsKanbanComponent.ctorParameters = function () { return []; };
    CmacsKanbanComponent.propDecorators = {
        board: [{ type: Input }],
        multiselect: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        itemTemplates: [{ type: Input }],
        columnHeaderTemplate: [{ type: Input }],
        columnHeaderCollapsedTemplate: [{ type: Input }],
        hasVerticalScroll: [{ type: Input }],
        heightContainer: [{ type: Input }],
        actionPanelTemplates: [{ type: Input }],
        descriptionPanelTemplates: [{ type: Input }],
        columnWidth: [{ type: Input }],
        draggedItem: [{ type: Output }],
        onclickItem: [{ type: Output }],
        ondblclickItem: [{ type: Output }],
        selectionChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "multiselect", void 0);
    __decorate([
        InputBoolean$1(),
        __metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "hasVerticalScroll", void 0);
    return CmacsKanbanComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsAlertComponent = /** @class */ (function () {
    function CmacsAlertComponent() {
        this.destroy = false;
        this.iconType = 'info-circle';
        this.iconTheme = 'fill';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.type = 'info';
        this.closeable = false;
        this.showIcon = false;
        this.banner = false;
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
    };
    /**
     * @return {?}
     */
    CmacsAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.destroy) {
            this.onClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    CmacsAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        switch (this.type) {
            case 'error':
                this.iconType = 'close-circle';
                break;
            case 'success':
                this.iconType = 'check-circle';
                break;
            case 'info':
                this.iconType = 'info-circle';
                break;
            case 'warning':
                this.iconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.description ? 'outline' : 'fill';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var showIcon = changes.showIcon, description = changes.description, type = changes.type, banner = changes.banner;
        if (showIcon) {
            this.isShowIconSet = true;
        }
        if (description || type) {
            this.updateIconClassMap();
        }
        if (type) {
            this.isTypeSet = true;
        }
        if (banner) {
            if (!this.isTypeSet) {
                this.type = 'warning';
            }
            if (!this.isShowIconSet) {
                this.showIcon = true;
            }
        }
    };
    CmacsAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-alert',
                    exportAs: 'cmacsAlert',
                    animations: [slideAlertMotion],
                    template: "<div *ngIf=\"!destroy\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"type === 'success'\"\r\n  [class.ant-alert-info]=\"type === 'info'\"\r\n  [class.ant-alert-warning]=\"type === 'warning'\"\r\n  [class.ant-alert-error]=\"type === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!showIcon\"\r\n  [class.ant-alert-banner]=\"banner\"\r\n  [class.ant-alert-closable]=\"closeable\"\r\n  [class.ant-alert-with-description]=\"!!description\"\r\n  [@slideAlertMotion]\r\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"showIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"cmacsIconType\" *ngIf=\"cmacsIconType; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"message\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"message\">{{ message }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"closeable || closeText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"closeText; else closeDefaultTemplate\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"closeText\">{{ closeText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".ant-alert-info{background-color:#009fe3;border:1px solid #009fe3}.ant-alert{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff}.ant-alert-close-icon .anticon-close{color:#fff;-webkit-transition:color .3s;transition:color .3s;vertical-align:2px}", "\n      cmacs-alert {\n        display: block;\n      }\n    "]
                }] }
    ];
    CmacsAlertComponent.propDecorators = {
        closeText: [{ type: Input }],
        cmacsIconType: [{ type: Input }],
        message: [{ type: Input }],
        description: [{ type: Input }],
        type: [{ type: Input }],
        closeable: [{ type: Input }],
        showIcon: [{ type: Input }],
        banner: [{ type: Input }],
        onClose: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsAlertComponent.prototype, "closeable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsAlertComponent.prototype, "showIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsAlertComponent.prototype, "banner", void 0);
    return CmacsAlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCommentAvatarDirective = /** @class */ (function () {
    function CmacsCommentAvatarDirective() {
    }
    CmacsCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[cmacs-comment-avatar]',
                    exportAs: 'cmacsCommentAvatar'
                },] }
    ];
    return CmacsCommentAvatarDirective;
}());
var CmacsCommentContentDirective = /** @class */ (function () {
    function CmacsCommentContentDirective() {
    }
    CmacsCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'cmacs-comment-content, [cmacs-comment-content]',
                    exportAs: 'cmacsCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                },] }
    ];
    return CmacsCommentContentDirective;
}());
var CmacsCommentActionHostDirective = /** @class */ (function (_super) {
    __extends(CmacsCommentActionHostDirective, _super);
    function CmacsCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    CmacsCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.attach(this.cmacsCommentActionHost);
    };
    /**
     * @return {?}
     */
    CmacsCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    CmacsCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cmacsCommentActionHost]',
                    exportAs: 'cmacsCommentActionHost'
                },] }
    ];
    /** @nocollapse */
    CmacsCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    CmacsCommentActionHostDirective.propDecorators = {
        cmacsCommentActionHost: [{ type: Input }]
    };
    return CmacsCommentActionHostDirective;
}(CdkPortalOutlet));
var CmacsCommentActionComponent = /** @class */ (function () {
    function CmacsCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(CmacsCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    CmacsCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-comment-action',
                    exportAs: 'cmacsCommentAction',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    CmacsCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CmacsCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return CmacsCommentActionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsCommentComponent = /** @class */ (function () {
    function CmacsCommentComponent() {
    }
    CmacsCommentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-comment',
                    exportAs: 'cmacsComment',
                    template: "<div class=\"ant-comment-inner\">\r\n  <div class=\"ant-comment-avatar\">\r\n    <ng-content select=\"nz-avatar[cmacs-comment-avatar]\"></ng-content>\r\n    <div class=\"ant-comment-content-author\">\r\n      <span *ngIf=\"author\" class=\"ant-comment-content-author-name\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"author\">{{ author }}</ng-container>\r\n      </span>\r\n    </div>\r\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\r\n      <li *ngFor=\"let action of actions\">\r\n        <span><ng-template [cmacsCommentActionHost]=\"action.content\"></ng-template></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"ant-comment-content\">\r\n    <ng-content select=\"cmacs-comment-content\"></ng-content>\r\n    <span *ngIf=\"datetime\" class=\"ant-comment-content-author-time\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"datetime\">{{ datetime }}</ng-container>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"ant-comment-nested\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ant-comment'
                    },
                    styles: [".ant-comment-content-author{display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.ant-comment-inner{display:block;padding:16px 0}.ant-comment-avatar{margin-bottom:14px}.ant-comment-content{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.83;letter-spacing:normal;color:#97a0ae}.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#656c79}.ant-comment-actions{display:inline-block;float:right;padding:0;margin:0;line-height:35px}.ant-comment-actions>li>span{font-size:19px;color:#bec4cd}", "\n      cmacs-comment {\n        display: block;\n      }\n\n      cmacs-comment-content {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsCommentComponent.ctorParameters = function () { return []; };
    CmacsCommentComponent.propDecorators = {
        author: [{ type: Input }],
        datetime: [{ type: Input }],
        actions: [{ type: ContentChildren, args: [CmacsCommentActionComponent,] }]
    };
    return CmacsCommentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSliderTrackComponent = /** @class */ (function () {
    function CmacsSliderTrackComponent() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderTrackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = this.nzOffset + "%";
                this.style.height = this.nzLength + "%";
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = this.nzOffset + "%";
                this.style.width = this.nzLength + "%";
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    };
    CmacsSliderTrackComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider-track',
                    exportAs: 'cmacsSliderTrack',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>",
                    styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}"]
                }] }
    ];
    CmacsSliderTrackComponent.propDecorators = {
        nzOffset: [{ type: Input }],
        nzLength: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsSliderTrackComponent.prototype, "nzOffset", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], CmacsSliderTrackComponent.prototype, "nzLength", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderTrackComponent.prototype, "nzVertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderTrackComponent.prototype, "nzIncluded", void 0);
    return CmacsSliderTrackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
/**
 * @param {?} value
 * @return {?}
 */
function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
function isConfigAObject(config) {
    return config instanceof Object;
}

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
/**
 * @return {?}
 */
function getValueTypeNotMatchError() {
    return new Error("The \"range\" can't match the \"ngModel\"'s type, please check these properties: \"range\", \"ngModel\", \"defaultValue\".");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSliderComponent = /** @class */ (function () {
    function CmacsSliderComponent(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.disabled = false;
        this.dots = false;
        this.included = true;
        this.range = false;
        this.vertical = false;
        this.defaultValue = null;
        this.marks = null;
        this.max = 100;
        this.min = 0;
        this.step = 1;
        this.tooltipVisible = 'default';
        this.onAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
    /**
     * @return {?}
     */
    CmacsSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.handles = this.generateHandles(this.range ? 2 : 1);
        this.sliderDOM = this.slider.nativeElement;
        this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        if (this.platform.isBrowser) {
            this.createDraggingObservables();
        }
        this.toggleDragDisabled(this.disabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var disabled = changes.disabled, marks = changes.marks, range = changes.range;
        if (disabled && !disabled.firstChange) {
            this.toggleDragDisabled(disabled.currentValue);
        }
        else if (marks && !marks.firstChange) {
            this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        }
        else if (range && !range.firstChange) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @return {?}
     */
    CmacsSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CmacsSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.setValue(val, true);
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    CmacsSliderComponent.prototype.onValueChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    CmacsSliderComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSliderComponent.prototype.registerOnTouched = /**
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
    CmacsSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    CmacsSliderComponent.prototype.setValue = /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (value, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    };
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    CmacsSliderComponent.prototype.getValue = /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a - b; }));
        }
        return (/** @type {?} */ (this.value));
    };
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.getValueToOffset = /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue)
            ? normalizedValue.map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.valueToOffset(val); }))
            : this.valueToOffset(normalizedValue);
    };
    /**
     * Find the closest value to be activated (only for range = true).
     */
    /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    CmacsSliderComponent.prototype.setActiveValueIndex = /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        /** @type {?} */
        var value = this.getValue();
        if (isValueARange(value)) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1;
            /** @type {?} */
            var activeIndex_1 = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < (/** @type {?} */ (minimal_1))) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            }));
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    CmacsSliderComponent.prototype.setActiveValue = /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (isValueARange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            var newValue = shallowCopyArray((/** @type {?} */ (this.value)));
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * Update track and handles' position and length.
     */
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.updateTrackAndHandles = /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    function () {
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        var trackParts = isValueARange(offsetSorted)
            ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]]
            : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        }));
        _a = __read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = __read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.onDragStart = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.range ? this.activeValueIndex : 0);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.onDragMove = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.onDragEnd = /**
     * @private
     * @return {?}
     */
    function () {
        this.onAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    };
    /**
     * Create user interactions handles.
     */
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.createDraggingObservables = /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.vertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof TouchEvent; })
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (/**
             * @return {?}
             */
            function () { return true; }) : _a;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    CmacsSliderComponent.prototype.subscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    CmacsSliderComponent.prototype.unsubscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    };
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    CmacsSliderComponent.prototype.toggleDragMoving = /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    CmacsSliderComponent.prototype.toggleDragDisabled = /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    CmacsSliderComponent.prototype.findClosestValue = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.max - this.min) * (this.vertical ? 1 - ratio : ratio) + this.min;
        /** @type {?} */
        var points = this.marks === null ? [] : Object.keys(this.marks).map(parseFloat);
        if (this.step !== null && !this.dots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.step) * this.step;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        function (point) { return Math.abs(val - point); }));
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
        return this.step === null ? closest : parseFloat(closest.toFixed(getPrecision(this.step)));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.valueToOffset = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return getPercent(this.min, this.max, value);
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.getSliderStartPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = getElementOffset(this.sliderDOM);
        return this.vertical ? offset.top : offset.left;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.getSliderLength = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.vertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    CmacsSliderComponent.prototype.cacheSliderProperty = /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.formatValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.assertValueValid((/** @type {?} */ (value)))) {
            res = this.defaultValue === null ? (this.range ? [this.min, this.max] : this.min) : this.defaultValue;
        }
        else {
            res = isValueARange((/** @type {?} */ (value)))
                ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return ensureNumberInRange(val, _this.min, _this.max); }))
                : ensureNumberInRange((/** @type {?} */ (value)), this.min, this.max);
        }
        return res;
    };
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.assertValueValid = /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    };
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     */
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    CmacsSliderComponent.prototype.assertValueTypeMatch = /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return true;
        }
        else if (isValueARange(value) !== this.range) {
            throw getValueTypeNotMatchError();
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    CmacsSliderComponent.prototype.valuesEqual = /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    function (valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    };
    /**
     * Show one handle's tooltip and hide others'.
     */
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    CmacsSliderComponent.prototype.showHandleTooltip = /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.active = index === handleIndex;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderComponent.prototype.hideAllHandleTooltip = /**
     * @private
     * @return {?}
     */
    function () {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return (handle.active = false); }));
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CmacsSliderComponent.prototype.generateHandles = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return Array(amount)
            .fill(0)
            .map((/**
         * @return {?}
         */
        function () { return ({ offset: null, value: null, active: false }); }));
    };
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    CmacsSliderComponent.prototype.generateMarkItems = /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.min && val <= this.max) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    };
    CmacsSliderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider',
                    exportAs: 'cmacsSlider',
                    preserveWhitespaces: false,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsSliderComponent; })),
                            multi: true
                        }
                    ],
                    template: "<div #slider\r\n  class=\"ant-slider\"\r\n  [class.ant-slider-disabled]=\"disabled\"\r\n  [class.ant-slider-vertical]=\"vertical\"\r\n  [class.ant-slider-with-marks]=\"marksArray\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <cmacs-slider-track\r\n    [nzVertical]=\"vertical\"\r\n    [nzIncluded]=\"included\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"></cmacs-slider-track>\r\n  <cmacs-slider-step\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"vertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"included\"></cmacs-slider-step>\r\n  <cmacs-slider-handle\r\n    *ngFor=\"let handle of handles\"\r\n    [nzVertical]=\"vertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"tipFormatter\"\r\n    [nzTooltipVisible]=\"tooltipVisible\"></cmacs-slider-handle>\r\n  <cmacs-slider-marks\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"vertical\"\r\n    [nzMin]=\"min\"\r\n    [nzMax]=\"max\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"included\"></cmacs-slider-marks>\r\n</div>\r\n",
                    styles: [".ant-slider-rail{height:3px;border-radius:100px;background-color:#cfd3d9}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSliderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    CmacsSliderComponent.propDecorators = {
        slider: [{ type: ViewChild, args: ['slider',] }],
        disabled: [{ type: Input }],
        dots: [{ type: Input }],
        included: [{ type: Input }],
        range: [{ type: Input }],
        vertical: [{ type: Input }],
        defaultValue: [{ type: Input }],
        marks: [{ type: Input }],
        max: [{ type: Input }],
        min: [{ type: Input }],
        step: [{ type: Input }],
        tooltipVisible: [{ type: Input }],
        tipFormatter: [{ type: Input }],
        onAfterChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsSliderComponent.prototype, "dots", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsSliderComponent.prototype, "included", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsSliderComponent.prototype, "range", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], CmacsSliderComponent.prototype, "vertical", void 0);
    return CmacsSliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSliderHandleComponent = /** @class */ (function () {
    function CmacsSliderHandleComponent(sliderComponent, cdr) {
        var _this = this;
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(true);
                _this.updateTooltipPosition();
                _this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(false);
                _this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var nzOffset = changes.nzOffset, nzValue = changes.nzValue, nzActive = changes.nzActive, nzTooltipVisible = changes.nzTooltipVisible;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.toggleTooltip(true, true); }));
        }
    };
    /**
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hovers_.unsubscribe();
    };
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.toggleTooltip = /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    function (show, force) {
        if (force === void 0) { force = false; }
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateTooltipTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.tooltip.updatePosition(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
    };
    CmacsSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider-handle',
                    exportAs: 'cmacsSliderHandle',
                    preserveWhitespaces: false,
                    template: "<nz-tooltip\r\n  *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\r\n  [nzTitle]=\"tooltipTitle\"\r\n  [nzTrigger]=\"null\">\r\n  <div nz-tooltip class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\r\n</nz-tooltip>\r\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\" class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\r\n",
                    host: {
                        '(mouseenter)': 'enterHandle()',
                        '(mouseleave)': 'leaveHandle()'
                    },
                    styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSliderHandleComponent.ctorParameters = function () { return [
        { type: CmacsSliderComponent },
        { type: ChangeDetectorRef }
    ]; };
    CmacsSliderHandleComponent.propDecorators = {
        tooltip: [{ type: ViewChild, args: [NzToolTipComponent,] }],
        nzVertical: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzTooltipVisible: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzActive: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderHandleComponent.prototype, "nzActive", void 0);
    return CmacsSliderHandleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSliderMarksComponent = /** @class */ (function () {
    function CmacsSliderMarksComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    function (_index, mark) {
        return mark.value;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.buildMarks = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var style = _this.buildStyles(value, range, config);
            /** @type {?} */
            var label = isConfigAObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.buildStyles = /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    function (value, range, config) {
        /** @type {?} */
        var style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        else {
            /** @type {?} */
            var marksCount = this.nzMarksArray.length;
            /** @type {?} */
            var unit = 100 / (marksCount - 1);
            /** @type {?} */
            var markWidth = unit * 0.9;
            style = {
                width: markWidth + "%",
                marginLeft: -markWidth / 2 + "%",
                left: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = __assign({}, style, config.style);
        }
        return style;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                /** @type {?} */
                var value = mark.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    };
    CmacsSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'cmacs-slider-marks',
                    exportAs: 'cmacsSliderMarks',
                    template: "<div class=\"ant-slider-mark\">\r\n  <span\r\n    class=\"ant-slider-mark-text\"\r\n    *ngFor=\"let attr of marks; trackBy: trackById\"\r\n    [class.ant-slider-mark-active]=\"attr.active\"\r\n    [ngStyle]=\"attr.style\"\r\n    [innerHTML]=\"attr.label\">\r\n  </span>\r\n</div>"
                }] }
    ];
    CmacsSliderMarksComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderMarksComponent.prototype, "nzVertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderMarksComponent.prototype, "nzIncluded", void 0);
    return CmacsSliderMarksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSliderStepComponent = /** @class */ (function () {
    function CmacsSliderStepComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildSteps();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    function (_index, step) {
        return step.value;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.buildSteps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.nzVertical ? 'bottom' : 'left';
        this.steps = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            return {
                value: value,
                offset: offset,
                config: config,
                active: false,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a)
            };
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.steps.forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var value = step.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                step.active = isActive;
            }));
        }
    };
    CmacsSliderStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider-step',
                    exportAs: 'cmacsSliderStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-slider-step\">\r\n  <span\r\n    class=\"ant-slider-dot\"\r\n    *ngFor=\"let mark of steps; trackBy: trackById\"\r\n    [class.ant-slider-dot-active]=\"mark.active\"\r\n    [ngStyle]=\"mark.style\">\r\n  </span>\r\n</div>"
                }] }
    ];
    CmacsSliderStepComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderStepComponent.prototype, "nzVertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSliderStepComponent.prototype, "nzIncluded", void 0);
    return CmacsSliderStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsVideoPlayerComponent = /** @class */ (function () {
    function CmacsVideoPlayerComponent() {
        this.playerReady = new EventEmitter();
    }
    /**
     * @param {?} api
     * @return {?}
     */
    CmacsVideoPlayerComponent.prototype.onPlayerReady = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.playerReady.emit(api);
    };
    CmacsVideoPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-video-player',
                    exportAs: 'cmacsVideoPlayer',
                    template: "<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\r\n  <vg-overlay-play style=\"background-color: white\"></vg-overlay-play>\r\n  <vg-buffering></vg-buffering>\r\n\r\n  <vg-controls style=\"height: 30px; background-color: #0d1e3b; opacity: 0.5\" [vgAutohide]=\"true\" [vgAutohideTime]=\"2\">\r\n    <vg-play-pause style=\"height: 30px; width: 30px;\"></vg-play-pause>\r\n\r\n    <vg-mute style=\"height: 30px; width: 30px;\"></vg-mute>\r\n    <vg-volume style=\"height: 30px;\"></vg-volume>\r\n\r\n    <vg-scrub-bar style=\"height: 30px;\">\r\n      <vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>\r\n      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n    </vg-scrub-bar>\r\n\r\n    <vg-time-display style=\"height: 30px; width: 45px;line-height: 30px;\" vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n    <vg-fullscreen style=\"height: 30px;\"></vg-fullscreen>\r\n  </vg-controls>\r\n\r\n  <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n    <source *ngFor=\"let source of sources\" src=\"{{source.src}}\" type=\"{{source.type}}\">\r\n  </video>\r\n</vg-player>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["vg-time-display::before{content:'-';color:#fff;margin-right:2px}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow::before{content:\"\\e01b\";font-size:28px;background-color:#2a7cff;padding:11px;border-radius:30px}[class*=\" vg-icon-\"]{font-size:19px}vg-volume .volumeValue{height:3px!important;border-radius:100px;background-color:#2d3d5a!important}vg-volume .volumeBackground{height:3px!important;border-radius:100px;background-color:#6a7693!important}vg-volume .volumeKnob{height:12px!important;width:12px!important}vg-scrub-bar-current-time{height:3px!important;border-radius:100px!important;top:calc(50% - 1px)!important;background-color:#6a7693!important}vg-scrub-bar-buffering-time{height:3px!important;border-radius:100px!important;top:calc(50% - 1px)!important}vg-scrub-bar-current-time .slider{height:12px!important;width:12px!important;z-index:2}"]
                }] }
    ];
    /** @nocollapse */
    CmacsVideoPlayerComponent.ctorParameters = function () { return []; };
    CmacsVideoPlayerComponent.propDecorators = {
        sources: [{ type: Input }],
        playerReady: [{ type: Output }]
    };
    return CmacsVideoPlayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDateTimePickerComponent = /** @class */ (function () {
    function CmacsDateTimePickerComponent(element, renderer, updateCls, cdr) {
        this.element = element;
        this.renderer = renderer;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }
        ];
        this.size = null;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.clearText = 'clear';
        this.popupClassName = '';
        this.placeHolder = '';
        this.defaultOpenValue = new Date();
        this.format = 'HH:mm';
        this.cmacsOpen = false;
        this.use12Hours = false;
        this.openChange = new EventEmitter();
    }
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "hideDisabledOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideDisabledOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideDisabledOptions = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "allowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowEmpty = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "autoFocus", {
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
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "disabled", {
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
            /** @type {?} */
            var input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (this._disabled) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.cmacsOpen = true;
        this.openChange.emit(this.cmacsOpen);
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.cmacsOpen = false;
        this.openChange.emit(this.cmacsOpen);
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.disabled) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.onClickClearBtn = /**
     * @return {?}
     */
    function () {
        this.value = null;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["ant-time-picker"] = true,
            _a["ant-time-picker-" + this.size] = isNotNil(this.size),
            _a));
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var use12Hours = changes.use12Hours, format = changes.format;
        if (use12Hours && !use12Hours.previousValue && use12Hours.currentValue && !format) {
            this.format = 'h:mm:ss a';
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this._value = time;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsDateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-datetime-picker',
                    exportAs: 'cmacsDateTimePicker',
                    template: "<input\r\n  type=\"text\"\r\n  [nzTime]=\"format\"\r\n  class=\"ant-time-picker-input\"\r\n  [placeholder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n  [(ngModel)]=\"value\"\r\n  readonly=\"readonly\"\r\n  (click)=\"open()\"\r\n  #inputElement>\r\n<span class=\"ant-time-picker-icon\">\r\n  <i nz-icon type=\"clock-circle\"></i>\r\n</span>\r\n<i\r\n  *ngIf=\"allowEmpty && value\"\r\n  nz-icon\r\n  type=\"close-circle\"\r\n  theme=\"fill\"\r\n  class=\"anticon anticon-close-circle ant-time-picker-clear\"\r\n  tabindex=\"-1\"\r\n  [attr.aria-label]=\"clearText\"\r\n  [attr.title]=\"clearText\"\r\n  (click)=\"onClickClearBtn()\"\r\n></i>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"cmacsOpen\"\r\n  [cdkConnectedOverlayOffsetY]=\"-2\"\r\n  (detach)=\"close()\"\r\n  (backdropClick)=\"close()\">\r\n  <cmacs-datetime-picker-panel\r\n    [ngClass]=\"popupClassName\"\r\n    [@slideMotion]=\"'bottom'\"\r\n    [format]=\"format\"\r\n    [nzHourStep]=\"hourStep\"\r\n    [nzMinuteStep]=\"minuteStep\"\r\n    [nzSecondStep]=\"secondStep\"\r\n    [nzDisabledHours]=\"disabledHours\"\r\n    [nzDisabledMinutes]=\"disabledMinutes\"\r\n    [nzDisabledSeconds]=\"disabledSeconds\"\r\n    [nzPlaceHolder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n    [nzHideDisabledOptions]=\"hideDisabledOptions\"\r\n    [nzUse12Hours]=\"use12Hours\"\r\n    [nzDefaultOpenValue]=\"defaultOpenValue\"\r\n    [nzAddOn]=\"addOn\"\r\n    [opened]=\"cmacsOpen\"\r\n    [nzClearText]=\"clearText\"\r\n    [nzAllowEmpty]=\"allowEmpty\"\r\n    [(ngModel)]=\"value\">\r\n  </cmacs-datetime-picker-panel>\r\n</ng-template>\r\n\r\n",
                    animations: [slideMotion],
                    providers: [NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    CmacsDateTimePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
    CmacsDateTimePickerComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputElement',] }],
        size: [{ type: Input }],
        hourStep: [{ type: Input }],
        minuteStep: [{ type: Input }],
        secondStep: [{ type: Input }],
        clearText: [{ type: Input }],
        popupClassName: [{ type: Input }],
        placeHolder: [{ type: Input }],
        addOn: [{ type: Input }],
        defaultOpenValue: [{ type: Input }],
        disabledHours: [{ type: Input }],
        disabledMinutes: [{ type: Input }],
        disabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        cmacsOpen: [{ type: Input }],
        use12Hours: [{ type: Input }],
        openChange: [{ type: Output }],
        hideDisabledOptions: [{ type: Input }],
        allowEmpty: [{ type: Input }],
        autoFocus: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CmacsDateTimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsDatetimeValueAccessorDirective = /** @class */ (function () {
    function CmacsDatetimeValueAccessorDirective(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange((/** @type {?} */ (value)));
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    CmacsDatetimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzTime]',
                    exportAs: 'nzTime',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimeValueAccessorDirective, multi: true }]
                },] }
    ];
    /** @nocollapse */
    CmacsDatetimeValueAccessorDirective.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ElementRef }
    ]; };
    CmacsDatetimeValueAccessorDirective.propDecorators = {
        nzTime: [{ type: Input }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return CmacsDatetimeValueAccessorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._selected12Hours = undefined;
        this._use12Hours = false;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    TimeHolder.prototype.setDefaultValueIfNil = /**
     * @return {?}
     */
    function () {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setMinutes = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setHours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setSeconds = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setUse12Hours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._value) {
                this._value = value;
                if (isNotNil(this._value)) {
                    this._hours = (/** @type {?} */ (this._value)).getHours();
                    this._minutes = (/** @type {?} */ (this._value)).getMinutes();
                    this._seconds = (/** @type {?} */ (this._value)).getSeconds();
                    if (this._use12Hours && isNotNil(this._hours)) {
                        this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                    }
                }
                else {
                    this._clear();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    TimeHolder.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                (/** @type {?} */ (this._value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                (/** @type {?} */ (this._value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this._hours)) < 12) {
                    (/** @type {?} */ (this._hours)) += 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this._hours)) >= 12) {
                    (/** @type {?} */ (this._hours)) -= 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
            }
            this._value = new Date((/** @type {?} */ (this._value)));
        }
        this.changed();
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this._value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: /**
         * \@description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         * @return {?}
         */
        function () {
            return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "realHours", {
        /**
         * @description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         */
        get: /**
         * \@description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         * @return {?}
         */
        function () {
            return this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "hours", {
        /**
         * @description
         * Same as realHours
         * @see realHours
         */
        get: /**
         * \@description
         * Same as realHours
         * @see realHours
         * @return {?}
         */
        function () {
            return this._hours;
        },
        /**
         * @description
         * Set viewHours to realHours
         */
        set: /**
         * \@description
         * Set viewHours to realHours
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._hours) {
                if (this._use12Hours) {
                    if (this.selected12Hours === 'PM' && value !== 12) {
                        (/** @type {?} */ (this._hours)) = ((/** @type {?} */ (value))) + 12;
                    }
                    else if (this.selected12Hours === 'AM' && value === 12) {
                        this._hours = 0;
                    }
                    else {
                        this._hours = value;
                    }
                }
                else {
                    this._hours = value;
                }
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._minutes) {
                this._minutes = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._seconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._seconds) {
                this._seconds = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "selected12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected12Hours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
                this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._defaultOpenValue !== value) {
                this._defaultOpenValue = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "defaultViewHours", {
        /**
         * @description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         */
        get: /**
         * \@description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hours = this._defaultOpenValue.getHours();
            return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultRealHours", {
        /**
         * @description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         */
        get: /**
         * \@description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultHours", {
        /**
         * @description
         * Same as defaultRealHours
         */
        get: /**
         * \@description
         * Same as defaultRealHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "default12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.calculateViewHour = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    };
    return TimeHolder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
}
var CmacsDatetimePickerPanelComponent = /** @class */ (function () {
    function CmacsDatetimePickerPanelComponent(element, updateCls, cdr) {
        this.element = element;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._defaultOpenValue = new Date();
        this._opened = false;
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
    }
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        // tslint:disable-next-line: member-ordering
        set: 
        // tslint:disable-next-line: member-ordering
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            if (this.opened) {
                this.initPosition();
                this.selectInputRange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDefaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._defaultOpenValue = value;
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
                this.hourEnabled = charSet.has('H') || charSet.has('h');
                this.minuteEnabled = charSet.has('m');
                this.secondEnabled = charSet.has('s');
                if (this.hourEnabled) {
                    this.enabledColumns++;
                }
                if (this.minuteEnabled) {
                    this.enabledColumns++;
                }
                if (this.secondEnabled) {
                    this.enabledColumns++;
                }
                if (this.nzUse12Hours) {
                    this.build12Hours();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = __spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isUpperForamt = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperForamt ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperForamt ? 'PM' : 'pm'
            }
        ];
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.selected12Hours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
        /*this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');*/
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.viewHours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, (/** @type {?} */ (_this.time.viewHours)), 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, (/** @type {?} */ (_this.time.minutes)), 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, (/** @type {?} */ (_this.time.seconds)), 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
            if (_this.nzUse12Hours && _this.use12HoursListElement) {
                /** @type {?} */
                var selectedHours = isNotNil(_this.time.selected12Hours)
                    ? _this.time.selected12Hours
                    : _this.time.default12Hours;
                /** @type {?} */
                var index = selectedHours === 'AM' ? 0 : 1;
                _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
        this.hours = (((this.time.hours ? this.time.hours : this.time.defaultHours) + 11) % 12 + 1);
        this.seconds = this.time.seconds ? this.time.seconds : this.time.defaultSeconds;
        this.minutes = this.time.minutes ? this.time.minutes : this.time.defaultMinutes;
        this.range = this.time.selected12Hours ? this.time.selected12Hours : this.time.default12Hours.toLowerCase();
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.registerOnChange = /**
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
    CmacsDatetimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /* Customized code */
    /* Customized code */
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.updateTime = /* Customized code */
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    function ($event, type) {
        if (type === 'hours') {
            this.time.setHours($event, false);
        }
        if (type === 'minutes') {
            this.time.setMinutes($event, false);
        }
        if (type === 'seconds') {
            this.time.setSeconds($event, false);
        }
    };
    CmacsDatetimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-datetime-picker-panel',
                    exportAs: 'cmacsDateTimePickerPanel',
                    template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n    </div>\r\n    <div>\r\n      <cmacs-input-number style=\"margin-right: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"1\" [max]=\"12\" [(ngModel)]=\"hours\"\r\n                          (ngModelChange)=\"updateTime($event, 'hours')\"></cmacs-input-number>\r\n      <div class=\"cmacs-datetime-dividers\"><span>:</span></div>\r\n      <cmacs-input-number style=\"margin-left: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"0\" [max]=\"59\" [(ngModel)]=\"minutes\"\r\n                          (ngModelChange)=\"updateTime($event, 'minutes')\"></cmacs-input-number>\r\n      <!--<cmacs-input-number [min]=\"0\" [max]=\"59\" [(ngModel)]=\"seconds\"\r\n                          (ngModelChange)=\"updateTime($event, 'seconds')\"></cmacs-input-number>-->\r\n      <cmacs-select style=\"margin: 11px 11px 11px 0\" [(ngModel)]=\"range\" (ngModelChange)=\"select12Hours($event)\">\r\n        <cmacs-option class=\"{{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\"\r\n                    *ngFor=\"let range of use12HoursRange\" [value]=\"range.value\" [label]=\"range.value | uppercase\"></cmacs-option>\r\n      </cmacs-select>\r\n    </div>\r\n    <!--<div class=\"{{ prefixCls }}-combobox\">\r\n      <div\r\n        *ngIf=\"hourEnabled\"\r\n        #hourListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let hour of hourRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\r\n              (click)=\"selectHour(hour)\"\r\n              class=\"\r\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ hour.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"minuteEnabled\"\r\n        #minuteListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let minute of minuteRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\r\n              (click)=\"selectMinute(minute)\"\r\n              class=\"\r\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ minute.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"secondEnabled\"\r\n        #secondListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let second of secondRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\r\n              (click)=\"selectSecond(second)\"\r\n              class=\"\r\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ second.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"nzUse12Hours\"\r\n        #use12HoursListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let range of use12HoursRange \">\r\n            <li\r\n              *ngIf=\"!nzHideDisabledOptions\"\r\n              (click)=\"select12Hours(range)\"\r\n              class=\"\r\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\r\n              \"\r\n            >\r\n              {{ range.value }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>-->\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    providers: [NzUpdateHostClassService, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }],
                    styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px}cmacs-select .ant-select-selection{height:30px}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.ant-time-picker-panel-inner{width:224px!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDatetimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
    CmacsDatetimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [CmacsDatetimeValueAccessorDirective,] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement',] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement',] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement',] }],
        use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement',] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        opened: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsDatetimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return CmacsDatetimePickerPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsPhoneNumberComponent = /** @class */ (function () {
    function CmacsPhoneNumberComponent() {
        this.hasError = new EventEmitter();
        this.telOutput = new EventEmitter();
        this.inputObject = new EventEmitter();
        this.countryChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.getNumber = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.telOutput.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.telInputObject = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.inputObject.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.onCountryChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.countryChange.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.hasErrorEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.hasError.emit($event);
    };
    CmacsPhoneNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-phone-number',
                    exportAs: 'cmacsPhoneNumber',
                    template: "<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".iti__country-list{position:fixed}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsPhoneNumberComponent.ctorParameters = function () { return []; };
    CmacsPhoneNumberComponent.propDecorators = {
        init: [{ type: Input }],
        hasError: [{ type: Output }],
        telOutput: [{ type: Output }],
        inputObject: [{ type: Output }],
        countryChange: [{ type: Output }]
    };
    return CmacsPhoneNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsColorPickerComponent = /** @class */ (function () {
    function CmacsColorPickerComponent(ref, cdr) {
        this.ref = ref;
        this.cdr = cdr;
        this.type = 'basic';
        this.colorChange = new EventEmitter();
        this.width = 0;
        this.basicColorList = [
            '#000000',
            '#ffffff',
            '#cc2229',
            '#f6503c',
            '#ffa234',
            '#fff100',
            '#00ce7d',
            '#009fe3',
            '#2a7cff',
            '#a100cd',
            '#cf1384',
            '#794c18',
            '#bec4cd',
            '#656c79'
        ];
    }
    /**
     * @param {?} color
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.setColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.color = color;
        this.colorChange.emit(color);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.isColorPickerType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.type === type;
    };
    /**
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.width = this.ref.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    };
    CmacsColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-color-picker',
                    exportAs: 'cmacsColorPicker',
                    template: "<ng-container *ngIf=\"isColorPickerType('basicWithTransparent')\"\r\n>\r\n  <div style=\"width: 18px; margin-right: 4px; display: inline-block\">\r\n    <div\r\n      class=\"cmacs-color-picker-color-wrapper\"\r\n      [class.cmacs-color-picker-color-wrapper-selected]=\"'transparent' === color\"\r\n      (click)=\"setColor('transparent')\"\r\n    >\r\n      <div class=\"cmacs-color-picker-color-transparent\"></div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div\r\n  style=\"display: inline-block; float: right\"\r\n  [style.width.px]=\"isColorPickerType('basicWithTransparent') ? width - 22 : width\"\r\n>\r\n  <div class=\"cmacs-color-picker-color-wrapper\"\r\n       *ngFor=\"let $color of basicColorList\"\r\n       [class.cmacs-color-picker-color-wrapper-selected]=\"$color === color\"\r\n       (click)=\"setColor($color)\"\r\n  >\r\n    <div class=\"cmacs-color-picker-color\"\r\n         [style.backgroundColor]=\"$color\"\r\n         [style.borderColor]=\"$color === '#ffffff'? '#dee0e5' : 'transparent'\"\r\n    ></div>\r\n  </div>\r\n</div>\r\n\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'cmacs-color-picker'
                    },
                    styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;-webkit-transition:.3s;transition:.3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent::before{content:'/';font-size:12px;color:#f6503c;-webkit-transform:rotate(20deg);transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent::before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent::before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsColorPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    CmacsColorPickerComponent.propDecorators = {
        type: [{ type: Input }],
        color: [{ type: Input }],
        colorChange: [{ type: Output }]
    };
    return CmacsColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmacsSwitchComponent = /** @class */ (function () {
    function CmacsSwitchComponent(cdr, focusMonitor) {
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.loading = false;
        this.disabled = false;
        this.control = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsSwitchComponent.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (!this.disabled && !this.loading && !this.control) {
            this.updateValue(!this.checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.control && !this.disabled && !this.loading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsSwitchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    CmacsSwitchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.switchElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    CmacsSwitchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsSwitchComponent.prototype.registerOnChange = /**
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
    CmacsSwitchComponent.prototype.registerOnTouched = /**
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
    CmacsSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-switch',
                    exportAs: 'cmacsSwitch',
                    preserveWhitespaces: false,
                    template: "<button type=\"button\" #switchElement\r\n  nz-wave\r\n  class=\"ant-switch\"\r\n  [disabled]=\"disabled\"\r\n  [class.ant-switch-checked]=\"checked\"\r\n  [class.ant-switch-loading]=\"loading\"\r\n  [class.ant-switch-disabled]=\"disabled\"\r\n  [class.ant-switch-small]=\"size === 'small'\"\r\n  [nzWaveExtraNode]=\"true\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n  <i *ngIf=\"loading\" nz-icon type=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n  <span class=\"ant-switch-inner\">\r\n    <span>\r\n      <ng-container *ngIf=\"checked\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"checkedChildren\">{{ checkedChildren }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!checked\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"unCheckedChildren\">{{ unCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </span>\r\n</button>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsSwitchComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '(click)': 'hostClick($event)'
                    },
                    styles: [".ant-switch-loading-icon,.ant-switch::after{width:20px;height:20px;top:2px}.ant-switch{min-width:50px;height:26px;background-color:#cfd3d9}.ant-switch-checked{background-color:#2a7cff}.ant-switch:focus{box-shadow:none}.ant-switch-disabled{opacity:.3}", "\n      cmacs-switch {\n        display: inline-block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    CmacsSwitchComponent.propDecorators = {
        switchElement: [{ type: ViewChild, args: ['switchElement',] }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        control: [{ type: Input }],
        checkedChildren: [{ type: Input }],
        unCheckedChildren: [{ type: Input }],
        size: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSwitchComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSwitchComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], CmacsSwitchComponent.prototype, "control", void 0);
    return CmacsSwitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMACS_COMMENT_CELLS = [
    CmacsCommentActionComponent,
    CmacsCommentAvatarDirective,
    CmacsCommentActionHostDirective,
    CmacsCommentContentDirective
];
registerLocaleData(en);
var ɵ0$2 = en_US;
var CmacsComponentsLibModule = /** @class */ (function () {
    function CmacsComponentsLibModule() {
    }
    CmacsComponentsLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread([
                        CmacsButtonGroupComponent,
                        CmacsVideoPlayerComponent,
                        CmacsButtonComponent,
                        CmacsInputDirective,
                        CmacsButtonComponent,
                        CmacsInputGroupComponent,
                        CmacsInputNumberComponent,
                        CmacsHeaderPickerComponent,
                        CmacsDateRangePickerComponent,
                        CmacsPickerComponent,
                        CmacsDatePickerComponent,
                        CmacsMonthPickerComponent,
                        CmacsYearPickerComponent,
                        CmacsWeekPickerComponent,
                        CmacsRangePickerComponent,
                        CmacsTimePickerComponent,
                        CmacsWizardComponent,
                        CmacsCheckboxComponent,
                        CmacsCheckboxWrapperComponent,
                        CmacsCheckboxGroupComponent,
                        CmacsRadioComponent,
                        CmacsRadioButtonComponent,
                        CmacsRadioGroupComponent,
                        CmacsTagComponent,
                        CmacsTimelineComponent,
                        CmacsTimelineItemComponent,
                        CmacsStringTemplateOutletDirective,
                        CmacsMenuDividerDirective,
                        CmacsMenuGroupComponent,
                        CmacsMenuItemDirective,
                        CmacsMenuDirective,
                        CmacsSubMenuComponent,
                        CmacsSubMenuComponent,
                        CmacsGridComponent,
                        CmacsTreeComponent,
                        CmacsTreeNodeComponent,
                        CmacsSelectComponent,
                        CmacsOptionComponent,
                        CmacsSelectTopControlComponent,
                        CmacsSearchComponent,
                        CmacsStepComponent,
                        CmacsModalComponent,
                        CmacsToCssUnitPipe,
                        CmacsBreadcrumbComponent,
                        CmacsBreadcrumbItemComponent,
                        CmacsCardComponent,
                        CmacsCardTabComponent,
                        CmacsCardLoadingComponent,
                        CmacsCardMetaComponent,
                        CmacsCardGridDirective,
                        CmacsCalendarComponent,
                        CmacsCalendarHeaderComponent,
                        CmacsDateCellDirective,
                        CmacsDateFullCellDirective,
                        CmacsMonthCellDirective,
                        CmacsMonthFullCellDirective,
                        CmacsDividerComponent,
                        CmacsDropdownComponent,
                        CmacsDropdownButtonComponent,
                        CmacsDropdownDirective,
                        CmacsDropdownADirective,
                        CmacsDropdownContextComponent,
                        CmacsProgressComponent,
                        CmacsFloatingMenuComponent,
                        CmacsFormExtraComponent,
                        CmacsFormLabelComponent,
                        CmacsFormDirective,
                        CmacsFormItemComponent,
                        CmacsFormControlComponent,
                        CmacsFormExplainComponent,
                        CmacsFormTextComponent,
                        CmacsFormSplitComponent,
                        NzFilterGroupOptionPipe,
                        NzFilterOptionPipe,
                        CmacsOptionContainerComponent,
                        CmacsOptionGroupComponent,
                        CmacsOptionLiComponent,
                        CmacsSelectUnselectableDirective,
                        CmacsAlertComponent
                    ], CMACS_COMMENT_CELLS, [
                        CmacsCommentComponent,
                        CmacsSliderComponent,
                        CmacsSliderHandleComponent,
                        CmacsSliderMarksComponent,
                        CmacsSliderStepComponent,
                        CmacsSliderTrackComponent,
                        CmacsKanbanComponent,
                        CmacsDateTimePickerComponent,
                        CmacsDatetimePickerPanelComponent,
                        CmacsDatetimeValueAccessorDirective,
                        CmacsPhoneNumberComponent,
                        CmacsColorPickerComponent,
                        CmacsSwitchComponent
                    ]),
                    imports: [
                        CommonModule,
                        FormsModule,
                        OverlayModule,
                        LibPackerModule,
                        NgZorroAntdModule,
                        NzIconModule,
                        NzI18nModule,
                        NzOverlayModule,
                        NzNoAnimationModule,
                        ExportAsModule,
                        NzMenuModule,
                        NzGridModule,
                        LayoutModule,
                        PlatformModule,
                        ReactiveFormsModule,
                        VgCoreModule,
                        VgControlsModule,
                        VgOverlayPlayModule,
                        VgBufferingModule,
                        Ng2TelInputModule,
                        DragDropModule
                    ],
                    exports: __spread([
                        CmacsButtonGroupComponent,
                        CmacsButtonComponent,
                        CmacsInputDirective,
                        CmacsInputGroupComponent,
                        CmacsInputNumberComponent,
                        CmacsHeaderPickerComponent,
                        CmacsDateRangePickerComponent,
                        CmacsPickerComponent,
                        CmacsDatePickerComponent,
                        CmacsMonthPickerComponent,
                        CmacsYearPickerComponent,
                        CmacsWeekPickerComponent,
                        CmacsRangePickerComponent,
                        CmacsTimePickerComponent,
                        CmacsWizardComponent,
                        CmacsCheckboxComponent,
                        CmacsCheckboxWrapperComponent,
                        CmacsCheckboxGroupComponent,
                        CmacsRadioComponent,
                        CmacsRadioButtonComponent,
                        CmacsRadioGroupComponent,
                        CmacsTagComponent,
                        CmacsTimelineComponent,
                        CmacsTimelineItemComponent,
                        CmacsStringTemplateOutletDirective,
                        CmacsMenuDividerDirective,
                        CmacsMenuGroupComponent,
                        CmacsMenuItemDirective,
                        CmacsMenuDirective,
                        CmacsSubMenuComponent,
                        CmacsGridComponent,
                        CmacsTreeComponent,
                        CmacsTreeNodeComponent,
                        CmacsSelectComponent,
                        CmacsOptionComponent,
                        CmacsSelectTopControlComponent,
                        CmacsSearchComponent,
                        CmacsStepComponent,
                        CmacsModalComponent,
                        CmacsToCssUnitPipe,
                        CmacsBreadcrumbComponent,
                        CmacsBreadcrumbItemComponent,
                        CmacsCardComponent,
                        CmacsCardTabComponent,
                        CmacsCardLoadingComponent,
                        CmacsCardMetaComponent,
                        CmacsCardGridDirective,
                        CmacsCalendarComponent,
                        CmacsDateCellDirective,
                        CmacsDateFullCellDirective,
                        CmacsMonthCellDirective,
                        CmacsMonthFullCellDirective,
                        LibPackerModule,
                        NzMenuModule,
                        CmacsDropdownComponent,
                        CmacsDropdownButtonComponent,
                        CmacsDropdownDirective,
                        CmacsDropdownADirective,
                        CmacsDividerComponent,
                        CmacsProgressComponent,
                        CmacsFloatingMenuComponent,
                        CmacsFormExtraComponent,
                        CmacsFormLabelComponent,
                        CmacsFormDirective,
                        CmacsFormItemComponent,
                        CmacsFormControlComponent,
                        CmacsFormExplainComponent,
                        CmacsFormTextComponent,
                        CmacsFormSplitComponent,
                        NzGridModule,
                        LayoutModule,
                        PlatformModule,
                        ReactiveFormsModule,
                        CmacsOptionContainerComponent,
                        CmacsOptionGroupComponent,
                        CmacsOptionLiComponent,
                        CmacsSelectUnselectableDirective,
                        CmacsAlertComponent
                    ], CMACS_COMMENT_CELLS, [
                        CmacsCommentComponent,
                        CmacsSliderComponent,
                        CmacsSliderHandleComponent,
                        CmacsSliderMarksComponent,
                        CmacsSliderStepComponent,
                        CmacsSliderTrackComponent,
                        CmacsKanbanComponent,
                        CmacsDateTimePickerComponent,
                        CmacsDatetimePickerPanelComponent,
                        CmacsDatetimeValueAccessorDirective,
                        CmacsVideoPlayerComponent,
                        CmacsPhoneNumberComponent,
                        CmacsColorPickerComponent,
                        CmacsSwitchComponent
                    ]),
                    providers: [{ provide: NZ_I18N, useValue: ɵ0$2 }, DatePipe, CmacsDropdownService],
                    entryComponents: [
                        CmacsModalComponent,
                        CmacsDropdownContextComponent
                    ],
                },] }
    ];
    return CmacsComponentsLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// A builder used for managing service creating modals
var  
// A builder used for managing service creating modals
ModalBuilderForService = /** @class */ (function () {
    function ModalBuilderForService(overlay, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.overlay = overlay;
        this.createModal();
        if (!('getContainer' in options)) {
            // As we use CDK to create modal in service by force, there is no need to use getContainer
            options.getContainer = undefined; // Override getContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        (/** @type {?} */ (this.modalRef)).instance.open();
        (/** @type {?} */ (this.modalRef)).instance.afterClose.subscribe((/**
         * @return {?}
         */
        function () { return _this.destroyModal(); })); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.modalRef && this.modalRef.instance;
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.destroyModal = /**
     * @return {?}
     */
    function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    ModalBuilderForService.prototype.changeProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    // Create component to ApplicationRef
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    ModalBuilderForService.prototype.createModal = 
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(CmacsModalComponent));
    };
    return ModalBuilderForService;
}());
var CmacsModalService = /** @class */ (function () {
    function CmacsModalService(overlay, logger, modalControl) {
        this.overlay = overlay;
        this.logger = logger;
        this.modalControl = modalControl;
    }
    Object.defineProperty(CmacsModalService.prototype, "openModals", {
        // Track of the current close modals (we assume invisible is close this time)
        get: 
        // Track of the current close modals (we assume invisible is close this time)
        /**
         * @return {?}
         */
        function () {
            return this.modalControl.openModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsModalService.prototype, "afterAllClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.afterAllClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Closes all of the currently-open dialogs
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    CmacsModalService.prototype.closeAll = 
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    function () {
        this.modalControl.closeAll();
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    CmacsModalService.prototype.create = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.onCancel !== 'function') {
            options.onCancel = (/**
             * @return {?}
             */
            function () { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use CmacsModalComponent as the CmacsModalRef by now, we may need archive the real CmacsModalRef object in the future
        /** @type {?} */
        var modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    CmacsModalService.prototype.confirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('footer' in options) {
            this.logger.warn("The Confirm-Modal doesn't support \"footer\", this property will be ignored.");
        }
        if (!('width' in options)) {
            options.width = 416;
        }
        if (typeof options.onOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.onOk = (/**
             * @return {?}
             */
            function () { }); // Leave a empty function to close this modal by default
        }
        options.modalType = 'confirm';
        options.className = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.className || '');
        options.cmacsMaskClosable = false;
        return this.create(options);
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    CmacsModalService.prototype.info = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'info');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    CmacsModalService.prototype.success = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'success');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    CmacsModalService.prototype.error = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'error');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    CmacsModalService.prototype.warning = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'warning');
    };
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    CmacsModalService.prototype.simpleConfirm = /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('iconType' in options)) {
            options.iconType = iconMap[confirmType];
        }
        if (!('cancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.cmacsCancelText = null;
        }
        return this.confirm(options, confirmType);
    };
    CmacsModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CmacsModalService.ctorParameters = function () { return [
        { type: Overlay },
        { type: LoggerService },
        { type: ModalControlService }
    ]; };
    /** @nocollapse */ CmacsModalService.ngInjectableDef = defineInjectable({ factory: function CmacsModalService_Factory() { return new CmacsModalService(inject(Overlay), inject(LoggerService), inject(ModalControlService)); }, token: CmacsModalService, providedIn: "root" });
    return CmacsModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ButtonStyle = {
    Primary: 'primary',
    Default: 'default',
    Dashed: 'dashed',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ModeTabType = {
    Closeable: 'closeable',
    Default: 'default',
    Checkable: 'checkable',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CmacsButtonGroupComponent, CmacsComponentsLibModule, CmacsButtonComponent, CmacsInputDirective, CmacsInputNumberComponent, CmacsInputGroupComponent, CmacsHeaderPickerComponent, CmacsDateRangePickerComponent, CmacsPickerComponent, CmacsDatePickerComponent, CmacsMonthPickerComponent, CmacsYearPickerComponent, CmacsWeekPickerComponent, CmacsRangePickerComponent, CmacsDividerComponent, CmacsFloatingMenuComponent, CmacsTimePickerComponent, CmacsWizardComponent, CmacsCheckboxComponent, CmacsCheckboxWrapperComponent, CmacsCheckboxGroupComponent, CmacsRadioComponent, CmacsRadioButtonComponent, CmacsRadioGroupComponent, CmacsTagComponent, CmacsTimelineComponent, CmacsTimelineItemComponent, CmacsStringTemplateOutletDirective, CmacsMenuDividerDirective, CmacsMenuGroupComponent, CmacsMenuItemDirective, CmacsMenuDirective, CmacsSubMenuComponent, CmacsGridComponent, NzTreeServiceFactory, CmacsTreeComponent, CmacsTreeNodeComponent, CmacsSelectComponent, CmacsOptionComponent, CmacsSelectTopControlComponent, CmacsSearchComponent, CmacsStepComponent, MODAL_ANIMATE_DURATION, CmacsModalComponent, CmacsToCssUnitPipe, CMACS_ROUTE_DATA_BREADCRUMB, CmacsBreadcrumbComponent, CmacsBreadcrumbItemComponent, CmacsCardComponent, CmacsCardTabComponent, CmacsCardLoadingComponent, CmacsCardMetaComponent, CmacsCardGridDirective, CmacsDateCellDirective, CmacsMonthCellDirective, CmacsDateFullCellDirective, CmacsMonthFullCellDirective, CmacsCalendarHeaderComponent, CmacsCalendarComponent, ModalBuilderForService, CmacsModalService, ModalControlService, LibPackerModule, ButtonStyle, CeldType, ExportType, ModeTabType, TemplateType, CmacsModalRef, CmacsDropdownADirective, CmacsProgressComponent, CmacsDropdownButtonComponent, CmacsDropdownContextComponent, menuServiceFactory, CMACS_DROPDOWN_POSITIONS, CmacsDropdownComponent, CmacsDropdownDirective, CmacsAlertComponent, CmacsCommentComponent, CmacsCommentAvatarDirective, CmacsCommentContentDirective, CmacsCommentActionHostDirective, CmacsCommentActionComponent, CmacsSliderComponent, CmacsSliderHandleComponent, CmacsSliderMarksComponent, CmacsSliderStepComponent, CmacsSliderTrackComponent, isValueARange, isConfigAObject, Marks, CmacsDatetimePickerPanelComponent, CmacsDateTimePickerComponent, CmacsDatetimeValueAccessorDirective, CmacsVideoPlayerComponent, CmacsPhoneNumberComponent, CmacsKanbanComponent, CmacsColorPickerComponent, CmacsSwitchComponent, AbstractPickerComponent as ɵa, CalendarFooterComponent as ɵba, CalendarHeaderComponent as ɵy, CalendarInputComponent as ɵz, OkButtonComponent as ɵbb, TimePickerButtonComponent as ɵbc, TodayButtonComponent as ɵbd, DateTableComponent as ɵbe, DecadePanelComponent as ɵbi, MonthPanelComponent as ɵbg, MonthTableComponent as ɵbh, DateRangePopupComponent as ɵbk, InnerPopupComponent as ɵbj, YearPanelComponent as ɵbf, CmacsDropdownService as ɵbl, CmacsMenuDropdownService as ɵk, CmacsFormControlComponent as ɵq, CmacsFormExplainComponent as ɵo, CmacsFormExtraComponent as ɵl, CmacsFormItemComponent as ɵn, CmacsFormLabelComponent as ɵm, CmacsFormSplitComponent as ɵs, CmacsFormTextComponent as ɵr, CmacsFormDirective as ɵp, CmacsMenuServiceFactory as ɵd, CmacsMenuService as ɵc, CmacsSubmenuService as ɵb, MODAL_CONFIG as ɵj, CmacsOptionContainerComponent as ɵv, CmacsOptionGroupComponent as ɵh, CmacsOptionLiComponent as ɵw, NzFilterGroupOptionPipe as ɵu, NzFilterOptionPipe as ɵt, CmacsSelectUnselectableDirective as ɵx, CmacsSelectService as ɵg, NzTreeService as ɵf, ExcelService as ɵe };

//# sourceMappingURL=cmacs-components-lib.js.map