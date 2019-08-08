/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, QueryList, TemplateRef, Type, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getElementOffset, isPromise, InputBoolean } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { MODAL_CONFIG } from './cmacs-modal-config';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalRef } from './cmacs-modal-ref.class';
/** @type {?} */
export var MODAL_ANIMATE_DURATION = 200;
/**
 * @template T, R
 */
var CmacsModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsModalComponent, _super);
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
        _this.showHelpfulTips = false;
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
        var _this = this;
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            ((/** @type {?} */ (this.autoFocusButtonOk.nativeElement))).focus();
        }
        this.tipsCreationWizard.changes.subscribe((/**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            if (component._results.length > 0) {
                _this.showHelpfulTips = !!component.first.nativeElement.innerHTML;
                _this.cdr.detectChanges();
            }
        }));
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
        this.changeVisibleFromInside(false).then((/**
         * @return {?}
         */
        function () {
            _this.modalControl.deregisterModal(_this);
            if (_this.container instanceof OverlayRef) {
                _this.container.dispose();
            }
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        }));
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
            return tslib_1.__assign({
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
                    template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"nzNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n       class=\"ant-modal-mask\"\r\n       [ngClass]=\"maskAnimationClassMap\"\r\n       [class.ant-modal-mask-hidden]=\"hidden\"\r\n       [ngStyle]=\"maskStyle\"\r\n       [style.zIndex]=\"zIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    class=\"ant-modal-wrap {{ wrapClassName }}\"\r\n    [style.zIndex]=\"zIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n         class=\"ant-modal {{ className }}\"\r\n         [ngClass]=\"modalAnimationClassMap\"\r\n         [ngStyle]=\"cmacsStyle\"\r\n         [style.top]=\"isModalType('creation') ? '10vh' : (isModalType('helpfulTips') || isModalType('basic') ||  isModalType('helpfulTipsNoPanel')) ? '4vh' : '100px'\"\r\n         [style.width]=\"isModalType('helpfulTipsNoPanel') ? '570px' : width | cmacsToCssUnit\"\r\n         [style.transform-origin]=\"transformOrigin\"\r\n         role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"closable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span *ngIf=\"isModalType('passive') || isModalType('interaction') || isModalType('basic')\"\r\n                [class.ant-modal-close-x]=\"!isModalType('basic')\"\r\n                [class.ant-modal-close-x-basic]=\"isModalType('basic')\"\r\n          >\r\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('transactional')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('creation')\" [ngTemplateOutlet]=\"tplCreationDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTips')\" [ngTemplateOutlet]=\"tplHelpfulTips\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTipsNoPanel') || isModalType('basic')\" [ngTemplateOutlet]=\"tplHelpfulTipsWithoutPanel\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('passive') || isModalType('interaction')\" [ngTemplateOutlet]=\"tplContentPassive\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n       [style.height.px]=\"modalType === 'transactional' ? 30 : 50\"\r\n       [style.padding]=\"modalType === 'transactional' ? '7px 24px' : '16px 24px'\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\"\r\n       [style.border-top]=\"modalType === 'transactional' ? 'none' : 'inherit'\"\r\n       [style.padding-bottom]=\"modalType === 'transactional' || modalType === 'passive' ? '20px' : 'inherit'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Creation Modal Content -->\r\n<ng-template #tplCreationDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"6\" class=\"cmacs-modal-creation-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? 12 : 18\" class=\"cmacs-modal-creation-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [style.display]=\"showHelpfulTips ? 'inherit' : 'none'\" #tipsCreationWizard [nzSpan]=\"6\" class=\"cmacs-modal-creation-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Creation Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTips Modal Content -->\r\n<ng-template #tplHelpfulTips>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"8\" class=\"cmacs-modal-helpful-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"8\" class=\"cmacs-modal-helpful-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"8\" class=\"cmacs-modal-helpful-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTips Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n<ng-template #tplHelpfulTipsWithoutPanel>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"12\" class=\"cmacs-modal-helpfulTips-no-panel-left\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-left]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"12\" class=\"cmacs-modal-helpfulTips-no-panel-right\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-right]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"iconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><span [innerHTML]=\"title\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container>\r\n            <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button *ngIf=\"cmacsCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n\r\n<!-- [Predefined] Passive Modal Content -->\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentPassive>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header\" [style.padding]=\"modalType === 'passive' ? '7px 24px' : '7px 10px'\" style=\"height: 30px\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\" [style.padding]=\"modalType === 'passive' ? '24px' : '0'\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Passive Modal Content -->\r\n",
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: ChangeDetectionStrategy.Default,
                    styles: [".ant-modal-header{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff}.ant-modal-title{font-family:Roboto;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x{color:#fff;width:25px;height:25px;padding-right:15px;line-height:30px}.ant-modal-close-x-basic{color:#fff;width:30px;height:30px;padding-right:15px;line-height:52px;font-weight:700;font-size:20px}.cmacs-modal-creation-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-creation-center-panel{height:100%;border-left:1px solid #dee0e5;padding:30px;text-align:justify;overflow:auto}.cmacs-modal-creation-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpful-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-helpful-center-panel{height:100%;padding:25px;text-align:justify;overflow:auto}.cmacs-modal-helpful-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpfulTips-no-panel-left,.cmacs-modal-helpfulTips-no-panel-right{padding:25px;height:100%;overflow:auto}"]
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
        content: [{ type: Input }],
        componentParams: [{ type: Input }],
        footer: [{ type: Input }],
        getContainer: [{ type: Input }],
        zIndex: [{ type: Input }],
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "closable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "okLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "okDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cancelDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cancelLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "keyboard", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsModalComponent.prototype, "noAnimation", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cmacsMask", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsModalComponent.prototype, "cmacsMaskClosable", void 0);
    return CmacsModalComponent;
}(CmacsModalRef));
export { CmacsModalComponent };
if (false) {
    /** @type {?} */
    CmacsModalComponent.prototype.visible;
    /** @type {?} */
    CmacsModalComponent.prototype.closable;
    /** @type {?} */
    CmacsModalComponent.prototype.okLoading;
    /** @type {?} */
    CmacsModalComponent.prototype.okDisabled;
    /** @type {?} */
    CmacsModalComponent.prototype.cancelDisabled;
    /** @type {?} */
    CmacsModalComponent.prototype.cancelLoading;
    /** @type {?} */
    CmacsModalComponent.prototype.keyboard;
    /** @type {?} */
    CmacsModalComponent.prototype.noAnimation;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsMask;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsMaskClosable;
    /** @type {?} */
    CmacsModalComponent.prototype.content;
    /** @type {?} */
    CmacsModalComponent.prototype.componentParams;
    /** @type {?} */
    CmacsModalComponent.prototype.footer;
    /** @type {?} */
    CmacsModalComponent.prototype.getContainer;
    /** @type {?} */
    CmacsModalComponent.prototype.zIndex;
    /** @type {?} */
    CmacsModalComponent.prototype.width;
    /** @type {?} */
    CmacsModalComponent.prototype.wrapClassName;
    /** @type {?} */
    CmacsModalComponent.prototype.className;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsModalComponent.prototype.title;
    /** @type {?} */
    CmacsModalComponent.prototype.maskStyle;
    /** @type {?} */
    CmacsModalComponent.prototype.bodyStyle;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsOkText;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsCancelText;
    /** @type {?} */
    CmacsModalComponent.prototype.okType;
    /** @type {?} */
    CmacsModalComponent.prototype.iconType;
    /** @type {?} */
    CmacsModalComponent.prototype.modalType;
    /** @type {?} */
    CmacsModalComponent.prototype.onOk;
    /** @type {?} */
    CmacsModalComponent.prototype.onCancel;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsAfterOpen;
    /** @type {?} */
    CmacsModalComponent.prototype.cmacsAfterClose;
    /** @type {?} */
    CmacsModalComponent.prototype.visibleChange;
    /** @type {?} */
    CmacsModalComponent.prototype.modalContainer;
    /** @type {?} */
    CmacsModalComponent.prototype.bodyContainer;
    /** @type {?} */
    CmacsModalComponent.prototype.autoFocusButtonOk;
    /** @type {?} */
    CmacsModalComponent.prototype.tipsCreationWizard;
    /** @type {?} */
    CmacsModalComponent.prototype.showHelpfulTips;
    /** @type {?} */
    CmacsModalComponent.prototype.locale;
    /** @type {?} */
    CmacsModalComponent.prototype.maskAnimationClassMap;
    /** @type {?} */
    CmacsModalComponent.prototype.modalAnimationClassMap;
    /** @type {?} */
    CmacsModalComponent.prototype.transformOrigin;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.contentComponentRef;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.animationState;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.previouslyFocusedElement;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.focusTrap;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.scrollStrategy;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.modalControl;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.modalGlobalConfig;
    /**
     * @type {?}
     * @private
     */
    CmacsModalComponent.prototype.document;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUFFLFNBQVMsRUFFakIsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQUUsWUFBWSxFQUN2QixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFDLE1B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QUE0Qjs7SUFDNUIscUNBQWdGOztJQUNoRiwyQ0FBaUg7O0lBQ2pILHFDQUErQjs7SUFDL0Isb0NBQXNDOztJQUN0Qyw0Q0FBK0I7O0lBQy9CLHdDQUEyQjs7SUFDM0IseUNBQTRCOztJQUM1QixvQ0FBeUM7O0lBQ3pDLHdDQUEyQjs7SUFDM0Isd0NBQTJCOztJQUMzQiwwQ0FBb0M7O0lBQ3BDLDhDQUF3Qzs7SUFDeEMscUNBQTRCOztJQUM1Qix1Q0FBOEM7O0lBQzlDLHdDQUFnRDs7SUFFaEQsbUNBQStGOztJQUMvRix1Q0FBbUc7O0lBRW5HLDZDQUE2RDs7SUFDN0QsOENBQTJEOztJQUMzRCw0Q0FBK0Q7O0lBRS9ELDZDQUF3RDs7SUFDeEQsNENBQXdGOztJQUN4RixnREFBb0Y7O0lBQ3BGLGlEQUF1RTs7SUFFdkUsOENBQXdCOztJQTBEeEIscUNBQXNEOztJQUN0RCxvREFBcUM7O0lBQ3JDLHFEQUFzQzs7SUFDdEMsOENBQWdDOzs7OztJQUVoQyxrREFBNkM7Ozs7O0lBQzdDLDZDQUF1Qzs7Ozs7SUFDdkMsd0NBQTRDOzs7OztJQUM1QywyQ0FBMkM7Ozs7O0lBQzNDLHVEQUE4Qzs7Ozs7SUFDOUMsd0NBQTZCOzs7OztJQUM3Qiw2Q0FBNEM7Ozs7O0lBSzFDLHNDQUF3Qjs7Ozs7SUFDeEIsbUNBQTJCOzs7OztJQUMzQixrQ0FBcUM7Ozs7O0lBQ3JDLHlDQUE4Qjs7Ozs7SUFDOUIsNENBQXVDOzs7OztJQUN2QywyQ0FBeUM7Ozs7O0lBQ3pDLCtDQUEwQzs7Ozs7SUFDMUMsa0NBQThCOzs7OztJQUM5QixnREFBd0U7Ozs7O0lBQ3hFLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuXHJcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEJsb2NrU2Nyb2xsU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEVsZW1lbnRPZmZzZXQsIGlzUHJvbWlzZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBNT0RBTF9DT05GSUcsIE1vZGFsQ29uZmlnfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbmZpZyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxSZWZ9IGZyb20gJy4vY21hY3MtbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC50eXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXHJcblxyXG50eXBlIEFuaW1hdGlvblN0YXRlID0gJ2VudGVyJyB8ICdsZWF2ZScgfCBudWxsO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW1vZGFsLmNvbXBvbmVudC5jc3MnXSxcclxuICAvLyBVc2luZyBPblB1c2ggZm9yIG1vZGFsIGNhdXNlZCBmb290ZXIgY2FuIG5vdCB0byBkZXRlY3QgY2hhbmdlcy4gd2UgY2FuIGZpeCBpdCB3aGVuIDgueC5cclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBDbWFjc01vZGFsUmVmPFQsIFI+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBNb2RhbE9wdGlvbnM8VD4ge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb2tMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2FuY2VsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzTWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NNYXNrQ2xvc2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XHJcbiAgQElucHV0KCkgY29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIGNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsOyAvLyBbU1RBVElDXSBEZWZhdWx0IE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBnZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpID0gKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSgpOyAvLyBbU1RBVElDXVxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNTIwO1xyXG4gIEBJbnB1dCgpIHdyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICBASW5wdXQoKSBtYXNrU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBjbWFjc09rVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBjbWFjc0NhbmNlbFRleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgb2tUeXBlID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIGljb25UeXBlOiBzdHJpbmcgPSAncXVlc3Rpb24tY2lyY2xlJzsgLy8gQ29uZmlybSBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgbW9kYWxUeXBlOiBNb2RhbFR5cGUgPSAndHJhbnNhY3Rpb25hbCc7XHJcblxyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBvbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0FmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0FmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFI+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBsZWF2ZS1hbmltYXRpb24gb3ZlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHlDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxyXG4gIEBWaWV3Q2hpbGRyZW4oJ3RpcHNDcmVhdGlvbldpemFyZCcpIHRpcHNDcmVhdGlvbldpemFyZDogUXVlcnlMaXN0PGFueT47XHJcblxyXG4gIHNob3dIZWxwZnVsVGlwcyA9IGZhbHNlO1xyXG5cclxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgY21hY3NBZnRlck9wZW5cclxuICAgIHJldHVybiB0aGlzLmNtYWNzQWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBhZnRlckNsb3NlXHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0FmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NDYW5jZWxUZXh0IHx8IHRoaXMubG9jYWxlLmNhbmNlbFRleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9rVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NPa1RleHQgfHwgdGhpcy5sb2NhbGUub2tUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudmlzaWJsZSAmJiAhdGhpcy5hbmltYXRpb25TdGF0ZTtcclxuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2sgaW5wdXQ6XHJcbiAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAqL1xyXG4gIGdldCBtYXNrKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY21hY3NNYXNrICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY21hY3NNYXNrO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubW9kYWxHbG9iYWxDb25maWcuY21hY3NNYXNrICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9kYWxHbG9iYWxDb25maWcuY21hY3NNYXNrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrQ2xvc2FibGUgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFza0Nsb3NhYmxlIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFza0Nsb3NhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY21hY3NNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbWFjc01hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9kYWxHbG9iYWxDb25maWcuY21hY3NNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvY2FsZTogeyBva1RleHQ/OiBzdHJpbmc7IGNhbmNlbFRleHQ/OiBzdHJpbmcgfSA9IHt9O1xyXG4gIG1hc2tBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICBtb2RhbEFuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIHRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4IDBweCc7IC8vIFRoZSBvcmlnaW4gcG9pbnQgdGhhdCBhbmltYXRpb24gYmFzZWQgb25cclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50Q29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47IC8vIEhhbmRsZSB0aGUgcmVmZXJlbmNlIHdoZW4gdXNpbmcgY29udGVudCBhcyBDb21wb25lbnRcclxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcclxuICBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5OiBCbG9ja1Njcm9sbFN0cmF0ZWd5O1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBNb2RhbENvbnRyb2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNT0RBTF9DT05GSUcpIHByaXZhdGUgbW9kYWxHbG9iYWxDb25maWc6IE1vZGFsQ29uZmlnLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdNb2RhbCcpIGFzIHsgb2tUZXh0OiBzdHJpbmc7IGNhbmNlbFRleHQ6IHN0cmluZyB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KHRoaXMuZG9jdW1lbnQuYm9keSwgJ2tleWRvd24nKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMuY29udGVudCkpIHtcclxuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljQ29tcG9uZW50KHRoaXMuY29udGVudCBhcyBUeXBlPFQ+KTsgLy8gQ3JlYXRlIGNvbXBvbmVudCBhbG9uZyB3aXRob3V0IFZpZXdcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc01vZGFsQnV0dG9ucyh0aGlzLmZvb3RlcikpIHtcclxuICAgICAgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xyXG4gICAgICB0aGlzLmZvb3RlciA9IHRoaXMuZm9ybWF0TW9kYWxCdXR0b25zKHRoaXMuZm9vdGVyIGFzIEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBsYWNlIHRoZSBtb2RhbCBkb20gdG8gZWxzZXdoZXJlXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHR5cGVvZiB0aGlzLmdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZ2V0Q29udGFpbmVyKCkgOiB0aGlzLmdldENvbnRhaW5lcjtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgIC8vIE5PVEU6IG9ubHkgYXR0YWNoIHRoZSBkb20gdG8gb3ZlcmxheSwgdGhlIHZpZXcgY29udGFpbmVyIGlzIG5vdCBjaGFuZ2VkIGFjdHVhbGx5XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLm92ZXJsYXlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGlvbiBtb2RhbCBzZXR0aW5nc1xyXG4gICAgaWYgKHRoaXMuaXNNb2RhbFR5cGUoJ2NyZWF0aW9uJykgfHwgdGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHMnKSB8fCB0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwc05vUGFuZWwnKSkge1xyXG4gICAgICB0aGlzLmNtYWNzQ2FuY2VsVGV4dCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY21hY3NPa1RleHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJjb250ZW50XCIoQ29tcG9uZW50KSBldGMuIGFzIGlucHV0cyB0aGF0IGluaXRpYWxpemVkIGR5bmFtaWNhbGx5LlxyXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJjb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy52aXNpYmxlLCAhY2hhbmdlcy52aXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgdXNpbmcgQ29tcG9uZW50LCBpdCBpcyB0aGUgdGltZSB0byBhdHRhY2ggVmlldyB3aGlsZSBib2R5Q29udGFpbmVyIGlzIHJlYWR5XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xyXG4gICAgICAodGhpcy5hdXRvRm9jdXNCdXR0b25Pay5uYXRpdmVFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGlwc0NyZWF0aW9uV2l6YXJkLmNoYW5nZXMuc3Vic2NyaWJlKChjb21wb25lbnQpID0+XHJcbiAgICB7XHJcbiAgICAgIGlmIChjb21wb25lbnQuX3Jlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hlbHBmdWxUaXBzID0gISFjb21wb25lbnQuZmlyc3QubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIHNlbGYgYmVmb3JlIGRlc3RydWN0aW5nXHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5tb2RhbENvbnRyb2wuZGVyZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5rZXlib2FyZCkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIC8vIERlc3Ryb3kgZXF1YWxzIENsb3NlXHJcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyT2soKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnb2snKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJDYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnN0YW5jZSgpOiBDbWFjc01vZGFsQ29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnQoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmICYmIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNtYWNzTWFzayAmJlxyXG4gICAgICB0aGlzLmNtYWNzTWFza0Nsb3NhYmxlICYmXHJcbiAgICAgICgkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2FudC1tb2RhbC13cmFwJykgJiZcclxuICAgICAgdGhpcy52aXNpYmxlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNNb2RhbFR5cGUodHlwZTogTW9kYWxUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbFR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHsgb2s6IHRoaXMub25PaywgY2FuY2VsOiB0aGlzLm9uQ2FuY2VsIH1bdHlwZV07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ29rTG9hZGluZycsIGNhbmNlbDogJ2NhbmNlbExvYWRpbmcnIH1bdHlwZV07XHJcbiAgICBpZiAodHJpZ2dlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xyXG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0cmlnZ2VyKHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IGRvQ2xvc2UgIT09IGZhbHNlICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTsgLy8gVXNlcnMgY2FuIHJldHVybiBcImZhbHNlXCIgdG8gcHJldmVudCBjbG9zaW5nIGJ5IGRlZmF1bHRcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGhlbiA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiB7XHJcbiAgICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gZmFsc2U7XHJcbiAgICAgICAgICBjYXNlQ2xvc2UoZG9DbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAocmVzdWx0IGFzIFByb21pc2U8dm9pZD4pLnRoZW4oaGFuZGxlVGhlbikuY2F0Y2goaGFuZGxlVGhlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXHJcbiAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbiwgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZSwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXHJcbiAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uID8gdGhpcy5hbmltYXRlVG8odmlzaWJsZSkgOiB1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc0FmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc0FmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAvLyBNYXJrIHRoZSBmb3IgY2hlY2sgc28gaXQgY2FuIHJlYWN0IGlmIHRoZSB2aWV3IGNvbnRhaW5lciBpcyB1c2luZyBPblB1c2ggY2hhbmdlIGRldGVjdGlvbi5cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgY29uc3QgYXJnczogVFtdID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBmb290ZXIncyBtb2RhbCBidXR0b24gY2xpY2tcclxuICBwdWJsaWMgb25CdXR0b25DbGljayhidXR0b246IE1vZGFsQnV0dG9uT3B0aW9uczxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnb25DbGljaycpOyAvLyBDYWxsIG9uQ2xpY2sgZGlyZWN0bHlcclxuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICBidXR0b24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx7fT4pLnRoZW4oKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIHZpc2libGUgZnJvbSBpbnNpZGVcclxuICBwcml2YXRlIGNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHZpc2libGU6IGJvb2xlYW4sIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAvLyBDaGFuZ2UgdmlzaWJsZSB2YWx1ZSBpbW1lZGlhdGVseVxyXG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5ub0FuaW1hdGlvbiA/IDAgOiBNT0RBTF9BTklNQVRFX0RVUkFUSU9OXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XHJcbiAgICByZXR1cm4gYnV0dG9ucy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi57XHJcbiAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBhdXRvTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uYnV0dG9uXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENtYWNzTW9kYWxSZWYsIHVzZVZhbHVlOiB0aGlzIH1dLFxyXG4gICAgICBwYXJlbnQ6IHRoaXMudmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShjaGlsZEluamVjdG9yKTtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudFBhcmFtcykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5jb21wb25lbnRQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcclxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c2x5RE9NUmVjdCA9IHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KTtcclxuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCB5ID0gbGFzdFBvc2l0aW9uLnRvcCArIHByZXZpb3VzbHlET01SZWN0LmhlaWdodCAvIDI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=