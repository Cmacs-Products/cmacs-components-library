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
        _this.useCmacsDefaultSizes = false;
        // [STATIC] Default Modal ONLY
        _this.getContainer = (/**
         * @return {?}
         */
        function () { return _this.overlay.create(); }); // [STATIC]
        // [STATIC]
        _this.zIndex = 1000;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUFFLFNBQVMsRUFFakIsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQUUsWUFBWSxFQUN2QixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFDLE1B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QUE0Qjs7SUFDNUIsdUNBQThDOztJQUM5Qyx3Q0FBZ0Q7O0lBRWhELG1DQUErRjs7SUFDL0YsdUNBQW1HOztJQUVuRyw2Q0FBNkQ7O0lBQzdELDhDQUEyRDs7SUFDM0QsNENBQStEOztJQUUvRCw2Q0FBd0Q7O0lBQ3hELDRDQUF3Rjs7SUFDeEYsZ0RBQW9GOztJQUNwRixpREFBdUU7O0lBMER2RSxxQ0FBc0Q7O0lBQ3RELG9EQUFxQzs7SUFDckMscURBQXNDOztJQUN0Qyw4Q0FBZ0M7Ozs7O0lBRWhDLGtEQUE2Qzs7Ozs7SUFDN0MsNkNBQXVDOzs7OztJQUN2Qyx3Q0FBNEM7Ozs7O0lBQzVDLDJDQUEyQzs7Ozs7SUFDM0MsdURBQThDOzs7OztJQUM5Qyx3Q0FBNkI7Ozs7O0lBQzdCLDZDQUE0Qzs7Ozs7SUFLMUMsc0NBQXdCOzs7OztJQUN4QixtQ0FBMkI7Ozs7O0lBQzNCLGtDQUFxQzs7Ozs7SUFDckMseUNBQThCOzs7OztJQUM5Qiw0Q0FBdUM7Ozs7O0lBQ3ZDLDJDQUF5Qzs7Ozs7SUFDekMsK0NBQTBDOzs7OztJQUMxQyxrQ0FBOEI7Ozs7O0lBQzlCLGdEQUF3RTs7Ozs7SUFDeEUsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCwgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RWxlbWVudE9mZnNldCwgaXNQcm9taXNlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE1PREFMX0NPTkZJRywgTW9kYWxDb25maWd9IGZyb20gJy4vY21hY3MtbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vY21hY3MtbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NNb2RhbFJlZn0gZnJvbSAnLi9jbWFjcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL2NtYWNzLW1vZGFsLnR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuXHJcbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vZGFsJyxcclxuICBleHBvcnRBczogJ2NtYWNzTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW9kYWwuY29tcG9uZW50LmNzcyddLFxyXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxyXG59KVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIENtYWNzTW9kYWxSZWY8VCwgUj5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBva0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NNYXNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc01hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0hlbHBmdWxUaXBzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlQ21hY3NEZWZhdWx0U2l6ZXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBUeXBlPFQ+OyAvLyBbU1RBVElDXSBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIHVzZSA8bmctY29udGVudD5cclxuICBASW5wdXQoKSBjb21wb25lbnRQYXJhbXM6IFQ7IC8vIFtTVEFUSUNdIE9OTFkgYXZhbGlhYmxlIHdoZW4gY29udGVudCBpcyBhIGNvbXBvbmVudFxyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIGdldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAxMDAwO1xyXG4gIEBJbnB1dCgpIGxlZnRQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSBjZW50ZXJQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSByaWdodFBhbmVsQ29sczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgd3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIG1hc2tTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGNtYWNzT2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzQ2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBva1R5cGUgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBtb2RhbFR5cGU6IE1vZGFsVHlwZSA9ICd0cmFuc2FjdGlvbmFsJztcclxuXHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJykgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYm9keUNvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG9Gb2N1c0J1dHRvbk9rJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmOyAvLyBPbmx5IGFpbSB0byBmb2N1cyB0aGUgb2sgYnV0dG9uIHRoYXQgbmVlZHMgdG8gYmUgYXV0byBmb2N1c2VkXHJcbiAgQFZpZXdDaGlsZHJlbigndGlwc0NyZWF0aW9uV2l6YXJkJykgdGlwc0NyZWF0aW9uV2l6YXJkOiBRdWVyeUxpc3Q8YW55PjtcclxuXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGNtYWNzQWZ0ZXJPcGVuXHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0FmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgYWZ0ZXJDbG9zZVxyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzQ2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzT2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnZpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XHJcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFzaygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY21hY3NNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIGNvbnRlbnQgYXMgQ29tcG9uZW50XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7IC8vIEN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTW9kYWxDb250cm9sU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTU9EQUxfQ09ORklHKSBwcml2YXRlIG1vZGFsR2xvYmFsQ29uZmlnOiBNb2RhbENvbmZpZyxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKSBhcyB7IG9rVGV4dDogc3RyaW5nOyBjYW5jZWxUZXh0OiBzdHJpbmcgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLmNvbnRlbnQpKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5mb290ZXIpKSB7XHJcbiAgICAgIC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcclxuICAgICAgdGhpcy5mb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLmZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5nZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbnRhaW5lcigpIDogdGhpcy5nZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRpb24gbW9kYWwgc2V0dGluZ3NcclxuICAgIGlmICh0aGlzLmlzTW9kYWxUeXBlKCdjcmVhdGlvbicpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzJykgfHwgdGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykpIHtcclxuICAgICAgdGhpcy5jbWFjc0NhbmNlbFRleHQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNtYWNzT2tUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy51c2VDbWFjc0RlZmF1bHRTaXplcykge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVRvRGVmYXVsdFNpemVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgbW9kYWwgd2hlbiBhZnRlck9wZW4vYWZ0ZXJDbG9zZSBpcyBzdGFibGVcclxuICAgIHRoaXMubW9kYWxDb250cm9sLnJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBbTk9URV0gTk9UIGF2YWlsYWJsZSB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UhXHJcbiAgLy8gQmVjYXVzZSBuZ09uQ2hhbmdlcyBuZXZlciBiZSBjYWxsZWQgd2hlbiB1c2luZyBieSBzZXJ2aWNlLFxyXG4gIC8vIGhlcmUgd2UgY2FuJ3Qgc3VwcG9ydCBcImNvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXHJcbiAgLy8gQlVUOiBVc2VyIGFsc28gY2FuIGNoYW5nZSBcImNvbnRlbnRcIiBkeW5hbWljYWxseSB0byB0cmlnZ2VyIFVJIGNoYW5nZXMgKHByb3ZpZGVkIHlvdSBkb24ndCB1c2UgXGJDb21wb25lbnQgdGhhdCBuZWVkcyBpbml0aWFsaXphdGlvbnMpXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh0aGlzLnZpc2libGUsICFjaGFuZ2VzLnZpc2libGUuZmlyc3RDaGFuZ2UpOyAvLyBEbyBub3QgdHJpZ2dlciBhbmltYXRpb24gd2hpbGUgaW5pdGlhbGl6aW5nXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5zaG93SGVscGZ1bFRpcHMgIT09IHVuZGVmaW5lZCB8fCBjaGFuZ2VzLnVzZUNtYWNzRGVmYXVsdFNpemVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMudXNlQ21hY3NEZWZhdWx0U2l6ZXMpIHt0aGlzLnRyYW5zZm9ybVRvRGVmYXVsdFNpemVzKCk7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubW9kYWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2NyZWF0aW9uJzpcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zaG93SGVscGZ1bFRpcHMgPyAxMTAwIDogODM1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgdXNpbmcgQ29tcG9uZW50LCBpdCBpcyB0aGUgdGltZSB0byBhdHRhY2ggVmlldyB3aGlsZSBib2R5Q29udGFpbmVyIGlzIHJlYWR5XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xyXG4gICAgICAodGhpcy5hdXRvRm9jdXNCdXR0b25Pay5uYXRpdmVFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcclxuICAgIGlmKCF0aGlzLmlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZUludGVyYWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZGVzdHJveU1vZGFsKCl7XHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlLCByZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICAvLyBEZXN0cm95IGVxdWFscyBDbG9zZVxyXG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogQ21hY3NNb2RhbENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZiAmJiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jbWFjc01hc2sgJiZcclxuICAgICAgdGhpcy5jbWFjc01hc2tDbG9zYWJsZSAmJlxyXG4gICAgICAoJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnQtbW9kYWwtd3JhcCcpICYmXHJcbiAgICAgIHRoaXMudmlzaWJsZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxUeXBlID09PSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5vbk9rLCBjYW5jZWw6IHRoaXMub25DYW5jZWwgfVt0eXBlXTtcclxuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7IG9rOiAnb2tMb2FkaW5nJywgY2FuY2VsOiAnY2FuY2VsTG9hZGluZycgfVt0eXBlXTtcclxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gZG9DbG9zZSAhPT0gZmFsc2UgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcclxuICAgICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSBmYWxzZTtcclxuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx2b2lkPikudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXNlQ2xvc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gRG8gcmVzdCB0aGluZ3Mgd2hlbiB2aXNpYmxlIHN0YXRlIGNoYW5nZWRcclxuICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlOiBib29sZWFuLCBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5pc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKSl7XHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgLy8gSGlkZSBzY3JvbGxiYXIgYXQgdGhlIGZpcnN0IHRpbWUgd2hlbiBzaG93biB1cFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy50cmFwRm9jdXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhbmltYXRpb24gPyB0aGlzLmFuaW1hdGVUbyh2aXNpYmxlKSA6IHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gRW1pdCBvcGVuL2Nsb3NlIGV2ZW50IGFmdGVyIGFuaW1hdGlvbnMgb3ZlclxyXG4gICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmNtYWNzQWZ0ZXJPcGVuLmVtaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbWFjc0FmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAvLyBNYXJrIHRoZSBmb3IgY2hlY2sgc28gaXQgY2FuIHJlYWN0IGlmIHRoZSB2aWV3IGNvbnRhaW5lciBpcyB1c2luZyBPblB1c2ggY2hhbmdlIGRldGVjdGlvbi5cclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgY29uc3QgYXJnczogVFtdID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBmb290ZXIncyBtb2RhbCBidXR0b24gY2xpY2tcclxuICBwdWJsaWMgb25CdXR0b25DbGljayhidXR0b246IE1vZGFsQnV0dG9uT3B0aW9uczxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnb25DbGljaycpOyAvLyBDYWxsIG9uQ2xpY2sgZGlyZWN0bHlcclxuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICBidXR0b24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx7fT4pLnRoZW4oKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIHZpc2libGUgZnJvbSBpbnNpZGVcclxuICBwcml2YXRlIGNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHZpc2libGU6IGJvb2xlYW4sIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAvLyBDaGFuZ2UgdmlzaWJsZSB2YWx1ZSBpbW1lZGlhdGVseVxyXG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5ub0FuaW1hdGlvbiA/IDAgOiBNT0RBTF9BTklNQVRFX0RVUkFUSU9OXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XHJcbiAgICByZXR1cm4gYnV0dG9ucy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi57XHJcbiAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBhdXRvTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uYnV0dG9uXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENtYWNzTW9kYWxSZWYsIHVzZVZhbHVlOiB0aGlzIH1dLFxyXG4gICAgICBwYXJlbnQ6IHRoaXMudmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShjaGlsZEluamVjdG9yKTtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudFBhcmFtcykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5jb21wb25lbnRQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcclxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c2x5RE9NUmVjdCA9IHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KTtcclxuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCB5ID0gbGFzdFBvc2l0aW9uLnRvcCArIHByZXZpb3VzbHlET01SZWN0LmhlaWdodCAvIDI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=