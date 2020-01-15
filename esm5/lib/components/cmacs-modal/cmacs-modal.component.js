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
        _this.showHelpfulTips = true;
        _this.useCmacsDefaultSizes = true;
        // [STATIC] Default Modal ONLY
        _this.getContainer = (/**
         * @return {?}
         */
        function () { return _this.overlay.create(); }); // [STATIC]
        // [STATIC]
        _this.zIndex = 1000;
        _this.width = 400;
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
        if (this.isModalType('helpfulTips')) {
            this.width = 835;
        }
        if (this.isModalType('helpfulTipsNoPanel') || this.isModalType('basic')) {
            this.width = 570;
        }
        if (this.useCmacsDefaultSizes) {
            this.transformToDefaultSizes();
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
        if (changes.showHelpfulTips !== undefined || changes.useCmacsDefaultSizes !== undefined) {
            if (this.useCmacsDefaultSizes) {
                this.transformToDefaultSizes();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsModalComponent.prototype.transformToDefaultSizes = /**
     * @return {?}
     */
    function () {
        switch (this.modalType) {
            case 'creation':
                this.width = this.showHelpfulTips ? 1100 : 835;
                break;
            case 'helpfulTips':
                this.width = 835;
                break;
            case 'helpfulTipsNoPanel':
                this.width = 570;
                break;
            case 'basic':
                this.width = 570;
                break;
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
                    template: "<ng-template #tplOriginContent>\r\n  <ng-content></ng-content>\r\n</ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n  <!-- container for the models -->\r\n<div [nzNoAnimation]=\"nzNoAnimation\" *ngIf=\"!isModalType('interaction')\">\r\n  <div *ngIf=\"mask\" class=\"ant-modal-mask\" [ngClass]=\"maskAnimationClassMap\" [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"maskStyle\" [style.zIndex]=\"zIndex\"></div>\r\n  <div (click)=\"onClickMask($event)\" class=\"ant-modal-wrap {{ wrapClassName }} model-wrapper\" [style.zIndex]=\"zIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\" tabindex=\"-1\" role=\"dialog\">\r\n    <div #modalContainer class=\"ant-modal {{ className }} model-container\" [ngClass]=\"modalAnimationClassMap\" [ngStyle]=\"cmacsStyle\"\r\n      [style.width]=\"width | cmacsToCssUnit\" [style.transform-origin]=\"transformOrigin\" role=\"document\">\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"closable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span *ngIf=\"isModalType('passive') || isModalType('interaction') || isModalType('basic')\"\r\n            [class.ant-modal-close-x]=\"!isModalType('basic')\" [class.ant-modal-close-x-basic]=\"isModalType('basic')\" class=\"iconspan\">\r\n            <i class=\"iconUILarge-Close\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('transactional')\" [ngTemplateOutlet]=\"tplContentDefault\">\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('creation')\" [ngTemplateOutlet]=\"tplCreationDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTips')\" [ngTemplateOutlet]=\"tplHelpfulTips\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTipsNoPanel') || isModalType('basic')\"\r\n            [ngTemplateOutlet]=\"tplHelpfulTipsWithoutPanel\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('passive') || isModalType('interaction')\"\r\n            [ngTemplateOutlet]=\"tplContentPassive\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- interactive model -->\r\n<div *ngIf=\"isModalType('interaction')\">\r\n  <div [style.display]=\"visible ? 'inherit' : 'none'\" class=\"cmacs-interaction-modal\" cdkDrag [style.zIndex]=\"zIndex\"\r\n    [ngStyle]=\"cmacsStyle\" [style.width]=\"width | cmacsToCssUnit\">\r\n    <div class=\"cmacs-interaction-modal-content\">\r\n      <button class=\"ant-modal-close\" aria-label=\"Close\" (click)=\"closeInteraction()\">\r\n        <span class=\"ant-modal-close-x iconspan\">\r\n          <i class=\"iconUILarge-Close\"></i>\r\n        </span>\r\n      </button>\r\n      <div class=\"ant-modal-header cmacs-custom-header\">\r\n        <div class=\"ant-modal-title\" style=\"color: #ffffff;\">\r\n          <div>{{title}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-body\" style=\"padding: 10px\">\r\n        <ng-container [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Passive model -->\r\n<ng-template #tplContentPassive>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header\" [style.padding]=\"modalType === 'passive' ? '6px 20px' : '7px 10px'\"\r\n    style=\"height: 30px\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\">\r\n          <div [innerHTML]=\"title\"></div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\" [style.padding]=\"modalType === 'passive' ? '24px 10px 46px 20px' : '0'\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n          <div [innerHTML]=\"content\"></div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- transactional model -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header\" [style.height.px]=\"modalType === 'transactional' ? 30 : 50\"\r\n    [style.padding]=\"modalType === 'transactional' ? '6px 20px' : '16px 40px'\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\">\r\n          <div [innerHTML]=\"title\"></div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body trans-model-body\" [ngStyle]=\"bodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n          <div [innerHTML]=\"content\"></div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer trans-model-footer\"\r\n    [style.border-top]=\"modalType === 'transactional' ? 'none' : 'inherit'\"\r\n    [style.padding-bottom]=\"modalType === 'transactional' || modalType === 'passive' ? '20px' : 'inherit'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div [innerHTML]=\"footer\"></div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Creation Modal Content -->\r\n<ng-template #tplCreationDefault>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header creation-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\">\r\n          <div [innerHTML]=\"title\"></div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? leftPanelCols : 6\" class=\"cmacs-modal-creation-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? centerPanelCols : (24 - leftPanelCols)\"\r\n        class=\"cmacs-modal-creation-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [style.display]=\"showHelpfulTips ? 'inherit' : 'none'\" #tipsCreationWizard [nzSpan]=\"rightPanelCols\"\r\n        class=\"cmacs-modal-creation-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer creation-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div [innerHTML]=\"footer\"></div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Helpful tooltip model -->\r\n<ng-template #tplHelpfulTips>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header helpful-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\">\r\n          <div [innerHTML]=\"title\"></div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"centerPanelCols ? centerPanelCols : 16\" class=\"cmacs-modal-helpful-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 8\" class=\"cmacs-modal-helpful-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer helpful-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div [innerHTML]=\"footer\"></div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Helpful tooltip without panel -->\r\n<ng-template #tplHelpfulTipsWithoutPanel>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header helpful-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\">\r\n          <div [innerHTML]=\"title\"></div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"24\" class=\"cmacs-modal-helpfulTips-no-panel-center\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-center]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer helpful-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div [innerHTML]=\"footer\"></div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"iconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><span [innerHTML]=\"title\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container>\r\n            <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n                <div [innerHTML]=\"content\"></div>\r\n              </ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button *ngIf=\"cmacsCancelText!==null\" (click)=\"onClickOkCancel('cancel')\"\r\n          [nzLoading]=\"cancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"okType\"\r\n          (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>",
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: ChangeDetectionStrategy.Default,
                    styles: [".ant-modal-content{border-radius:3px;box-shadow:0 3px 7px rgba(59,63,70,.2)}.model-wrapper{display:-webkit-box!important;display:flex!important;height:100%}.model-container{margin:auto;top:0}.ant-modal-header{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff;border-radius:3px 3px 0 0}.ant-modal-title{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x{color:#fff;line-height:30px;margin-right:20px}.ant-modal-close-x-basic{color:#fff;margin-right:20px;padding-right:15px;line-height:50px}.ant-modal-close i{color:#fff}.cmacs-interaction-modal{box-sizing:border-box;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;-webkit-font-feature-settings:'tnum';font-feature-settings:'tnum';position:absolute;width:auto!important;min-width:150px;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.cmacs-custom-header{height:30px;padding:6px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal-content .ant-modal-close-x{margin-right:12px}.trans-model-body{padding:24px 20px 10px}.trans-model-footer{padding:10px 20px 20px}::ng-deep .trans-model-footer.ant-modal-footer button+button{margin-left:15px}.creation-footer,.creation-header,.helpful-footer,.helpful-header{padding:16px 40px}.cmacs-modal-creation-left-panel{padding:0 40px;height:calc(100% - 80px);overflow:auto;border-right:1px solid #dee0e5;margin-top:40px;margin-bottom:40px}.cmacs-modal-creation-center-panel,.cmacs-modal-helpful-center-panel,.cmacs-modal-helpfulTips-no-panel-center{height:100%;padding:40px;overflow:auto}.cmacs-modal-creation-right-panel,.cmacs-modal-helpful-right-panel{background-color:#f6f7fb;padding:40px 35px 35px;height:100%;overflow:auto}.creation-footer,.helpful-footer{box-shadow:0 -2px 5px rgba(59,63,70,.1);border-top:none;border-radius:0 0 3px 3px;z-index:1;position:relative}"]
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
        useCmacsDefaultSizes: [{ type: Input }],
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsModalComponent.prototype, "showHelpfulTips", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsModalComponent.prototype, "useCmacsDefaultSizes", void 0);
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
    CmacsModalComponent.prototype.showHelpfulTips;
    /** @type {?} */
    CmacsModalComponent.prototype.useCmacsDefaultSizes;
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
    CmacsModalComponent.prototype.leftPanelCols;
    /** @type {?} */
    CmacsModalComponent.prototype.centerPanelCols;
    /** @type {?} */
    CmacsModalComponent.prototype.rightPanelCols;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUFFLFNBQVMsRUFFakIsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQUUsWUFBWSxFQUN2QixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1B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Q0FBOEI7Ozs7O0lBQzlCLGdEQUF3RTs7Ozs7SUFDeEUsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCwgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RWxlbWVudE9mZnNldCwgaXNQcm9taXNlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE1PREFMX0NPTkZJRywgTW9kYWxDb25maWcgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbmZpZyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxSZWYgfSBmcm9tICcuL2NtYWNzLW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGUsIE9uQ2xpY2tDYWxsYmFjayB9IGZyb20gJy4vY21hY3MtbW9kYWwudHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTU9EQUxfQU5JTUFURV9EVVJBVElPTiA9IDIwMDsgLy8gRHVyYXRpb24gd2hlbiBwZXJmb3JtIGFuaW1hdGlvbnMgKG1zKVxyXG5cclxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgLy8gVXNpbmcgT25QdXNoIGZvciBtb2RhbCBjYXVzZWQgZm9vdGVyIGNhbiBub3QgdG8gZGV0ZWN0IGNoYW5nZXMuIHdlIGNhbiBmaXggaXQgd2hlbiA4LnguXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgQ21hY3NNb2RhbFJlZjxULCBSPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNhbmNlbERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNhbmNlbExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc01hc2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzTWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SGVscGZ1bFRpcHMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VDbWFjc0RlZmF1bHRTaXplcyA9IHRydWU7XHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XHJcbiAgQElucHV0KCkgY29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIGNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsOyAvLyBbU1RBVElDXSBEZWZhdWx0IE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBnZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpID0gKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSgpOyAvLyBbU1RBVElDXVxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSBsZWZ0UGFuZWxDb2xzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY2VudGVyUGFuZWxDb2xzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmlnaHRQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNDAwO1xyXG4gIEBJbnB1dCgpIHdyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICBASW5wdXQoKSBtYXNrU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBjbWFjc09rVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBjbWFjc0NhbmNlbFRleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgb2tUeXBlID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIGljb25UeXBlOiBzdHJpbmcgPSAncXVlc3Rpb24tY2lyY2xlJzsgLy8gQ29uZmlybSBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgbW9kYWxUeXBlOiBNb2RhbFR5cGUgPSAndHJhbnNhY3Rpb25hbCc7XHJcblxyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBvbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0FmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0FmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFI+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBsZWF2ZS1hbmltYXRpb24gb3ZlclxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHlDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxyXG4gIEBWaWV3Q2hpbGRyZW4oJ3RpcHNDcmVhdGlvbldpemFyZCcpIHRpcHNDcmVhdGlvbldpemFyZDogUXVlcnlMaXN0PGFueT47XHJcblxyXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBjbWFjc0FmdGVyT3BlblxyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NBZnRlck9wZW4uYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPFI+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGFmdGVyQ2xvc2VcclxuICAgIHJldHVybiB0aGlzLmNtYWNzQWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0NhbmNlbFRleHQgfHwgdGhpcy5sb2NhbGUuY2FuY2VsVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc09rVGV4dCB8fCB0aGlzLmxvY2FsZS5va1RleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy52aXNpYmxlICYmICF0aGlzLmFuaW1hdGlvblN0YXRlO1xyXG4gIH0gLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIGRpYWxvZyBzaG91bGQgaGlkZGVuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2sgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFzayBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2soKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jbWFjc01hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbWFjc01hc2s7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2s7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2tDbG9zYWJsZSB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrQ2xvc2FibGUgaW5wdXQ6XHJcbiAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAqL1xyXG4gIGdldCBtYXNrQ2xvc2FibGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jbWFjc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNtYWNzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubW9kYWxHbG9iYWxDb25maWcuY21hY3NNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9jYWxlOiB7IG9rVGV4dD86IHN0cmluZzsgY2FuY2VsVGV4dD86IHN0cmluZyB9ID0ge307XHJcbiAgbWFza0FuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgdHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JzsgLy8gVGhlIG9yaWdpbiBwb2ludCB0aGF0IGFuaW1hdGlvbiBiYXNlZCBvblxyXG5cclxuICBwcml2YXRlIGNvbnRlbnRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjsgLy8gSGFuZGxlIHRoZSByZWZlcmVuY2Ugd2hlbiB1c2luZyBjb250ZW50IGFzIENvbXBvbmVudFxyXG4gIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU6IEFuaW1hdGlvblN0YXRlOyAvLyBDdXJyZW50IGFuaW1hdGlvbiBzdGF0ZVxyXG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG4gIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IEJsb2NrU2Nyb2xsU3RyYXRlZ3k7XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE1vZGFsQ29udHJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1PREFMX0NPTkZJRykgcHJpdmF0ZSBtb2RhbEdsb2JhbENvbmZpZzogTW9kYWxDb25maWcsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJykgYXMgeyBva1RleHQ6IHN0cmluZzsgY2FuY2VsVGV4dDogc3RyaW5nIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5kb2N1bWVudC5ib2R5LCAna2V5ZG93bicpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDb21wb25lbnQodGhpcy5jb250ZW50KSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5jb250ZW50IGFzIFR5cGU8VD4pOyAvLyBDcmVhdGUgY29tcG9uZW50IGFsb25nIHdpdGhvdXQgVmlld1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzTW9kYWxCdXR0b25zKHRoaXMuZm9vdGVyKSkge1xyXG4gICAgICAvLyBTZXR1cCBkZWZhdWx0IGJ1dHRvbiBvcHRpb25zXHJcbiAgICAgIHRoaXMuZm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5mb290ZXIgYXMgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgdGhlIG1vZGFsIGRvbSB0byBlbHNld2hlcmVcclxuICAgIHRoaXMuY29udGFpbmVyID0gdHlwZW9mIHRoaXMuZ2V0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5nZXRDb250YWluZXIoKSA6IHRoaXMuZ2V0Q29udGFpbmVyO1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgLy8gTk9URTogb25seSBhdHRhY2ggdGhlIGRvbSB0byBvdmVybGF5LCB0aGUgdmlldyBjb250YWluZXIgaXMgbm90IGNoYW5nZWQgYWN0dWFsbHlcclxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0aW9uIG1vZGFsIHNldHRpbmdzXHJcbiAgICBpZiAodGhpcy5pc01vZGFsVHlwZSgnY3JlYXRpb24nKSB8fCB0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwcycpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzTm9QYW5lbCcpKSB7XHJcbiAgICAgIHRoaXMuY21hY3NDYW5jZWxUZXh0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jbWFjc09rVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHMnKSl7XHJcbiAgICAgIHRoaXMud2lkdGggPSA4MzU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykgfHwgdGhpcy5pc01vZGFsVHlwZSgnYmFzaWMnKSl7XHJcbiAgICAgIHRoaXMud2lkdGggPSA1NzA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudXNlQ21hY3NEZWZhdWx0U2l6ZXMpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1Ub0RlZmF1bHRTaXplcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJjb250ZW50XCIoQ29tcG9uZW50KSBldGMuIGFzIGlucHV0cyB0aGF0IGluaXRpYWxpemVkIGR5bmFtaWNhbGx5LlxyXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJjb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy52aXNpYmxlLCAhY2hhbmdlcy52aXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuc2hvd0hlbHBmdWxUaXBzICE9PSB1bmRlZmluZWQgfHwgY2hhbmdlcy51c2VDbWFjc0RlZmF1bHRTaXplcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZUNtYWNzRGVmYXVsdFNpemVzKSB7IHRoaXMudHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubW9kYWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2NyZWF0aW9uJzpcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zaG93SGVscGZ1bFRpcHMgPyAxMTAwIDogODM1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hlbHBmdWxUaXBzJzpcclxuICAgICAgICB0aGlzLndpZHRoID0gODM1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hlbHBmdWxUaXBzTm9QYW5lbCc6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDU3MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDU3MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIHNlbGYgYmVmb3JlIGRlc3RydWN0aW5nXHJcbiAgICBpZiAoIXRoaXMuaXNNb2RhbFR5cGUoJ2ludGVyYWN0aW9uJykpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlSW50ZXJhY3Rpb24oKTtcclxuICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBkZXN0cm95TW9kYWwoKSB7XHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlLCByZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICAvLyBEZXN0cm95IGVxdWFscyBDbG9zZVxyXG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogQ21hY3NNb2RhbENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZiAmJiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jbWFjc01hc2sgJiZcclxuICAgICAgdGhpcy5jbWFjc01hc2tDbG9zYWJsZSAmJlxyXG4gICAgICAoJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnQtbW9kYWwtd3JhcCcpICYmXHJcbiAgICAgIHRoaXMudmlzaWJsZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxUeXBlID09PSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5vbk9rLCBjYW5jZWw6IHRoaXMub25DYW5jZWwgfVt0eXBlXTtcclxuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7IG9rOiAnb2tMb2FkaW5nJywgY2FuY2VsOiAnY2FuY2VsTG9hZGluZycgfVt0eXBlXTtcclxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gZG9DbG9zZSAhPT0gZmFsc2UgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcclxuICAgICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSBmYWxzZTtcclxuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx2b2lkPikudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXNlQ2xvc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gRG8gcmVzdCB0aGluZ3Mgd2hlbiB2aXNpYmxlIHN0YXRlIGNoYW5nZWRcclxuICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlOiBib29sZWFuLCBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5pc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKSkge1xyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGF0IHRoZSBmaXJzdCB0aW1lIHdoZW4gc2hvd24gdXBcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uID8gdGhpcy5hbmltYXRlVG8odmlzaWJsZSkgOiB1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIEVtaXQgb3Blbi9jbG9zZSBldmVudCBhZnRlciBhbmltYXRpb25zIG92ZXJcclxuICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5jbWFjc0FmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY21hY3NBZnRlckNsb3NlLmVtaXQoY2xvc2VSZXN1bHQpO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgLy8gTWFyayB0aGUgZm9yIGNoZWNrIHNvIGl0IGNhbiByZWFjdCBpZiB0aGUgdmlldyBjb250YWluZXIgaXMgdXNpbmcgT25QdXNoIGNoYW5nZSBkZXRlY3Rpb24uXHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTG9va3VwIGEgYnV0dG9uJ3MgcHJvcGVydHksIGlmIHRoZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGNhbGwgJiB0aGVuIHJldHVybiB0aGUgcmVzdWx0LCBvdGhlcndpc2UsIHJldHVybiBpdHNlbGYuXHJcbiAgcHVibGljIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9IHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcclxuICAgIGNvbnN0IGFyZ3M6IFRbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICBhcmdzLnB1c2godGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBhcmdzKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gZm9vdGVyJ3MgbW9kYWwgYnV0dG9uIGNsaWNrXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ29uQ2xpY2snKTsgLy8gQ2FsbCBvbkNsaWNrIGRpcmVjdGx5XHJcbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgYnV0dG9uLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAocmVzdWx0IGFzIFByb21pc2U8e30+KS50aGVuKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSkuY2F0Y2goKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoYW5nZSB2aXNpYmxlIGZyb20gaW5zaWRlXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgLy8gQ2hhbmdlIHZpc2libGUgdmFsdWUgaW1tZWRpYXRlbHlcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlLCB0cnVlLCBjbG9zZVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlKHN0YXRlOiBBbmltYXRpb25TdGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvbiB3aGVuIHNob3dzIHVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMubm9BbmltYXRpb24gPyAwIDogTU9EQUxfQU5JTUFURV9EVVJBVElPTlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRNb2RhbEJ1dHRvbnMoYnV0dG9uczogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4ge1xyXG4gICAgcmV0dXJuIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ue1xyXG4gICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgYXV0b0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLmJ1dHRvblxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxyXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDbWFjc01vZGFsUmVmLCB1c2VWYWx1ZTogdGhpcyB9XSxcclxuICAgICAgcGFyZW50OiB0aGlzLnZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoY2hpbGRJbmplY3Rvcik7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMuY29tcG9uZW50UGFyYW1zKTtcclxuICAgIH1cclxuICAgIC8vIERvIHRoZSBmaXJzdCBjaGFuZ2UgZGV0ZWN0aW9uIGltbWVkaWF0ZWx5IChvciB3ZSBkbyBkZXRlY3Rpb24gYXQgbmdBZnRlclZpZXdJbml0LCBtdWx0aS1jaGFuZ2VzIGVycm9yIHdpbGwgYmUgdGhyb3duKVxyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSB0cmFuc2Zvcm0tb3JpZ2luIHRvIHRoZSBsYXN0IGNsaWNrIHBvc2l0aW9uIG9uIGRvY3VtZW50XHJcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNseURPTVJlY3QgPSB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBsYXN0UG9zaXRpb24ubGVmdCArIHByZXZpb3VzbHlET01SZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3ggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke3kgLSBtb2RhbEVsZW1lbnQub2Zmc2V0VG9wfXB4IDBweGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19