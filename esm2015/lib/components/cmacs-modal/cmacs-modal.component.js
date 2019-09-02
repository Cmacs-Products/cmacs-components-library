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
export const MODAL_ANIMATE_DURATION = 200;
/**
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class CmacsModalComponent extends CmacsModalRef {
    // tslint:disable-line:no-any
    /**
     * @param {?} overlay
     * @param {?} i18n
     * @param {?} cfr
     * @param {?} elementRef
     * @param {?} viewContainer
     * @param {?} modalControl
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} modalGlobalConfig
     * @param {?} document
     */
    constructor(overlay, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, modalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        super();
        this.overlay = overlay;
        this.i18n = i18n;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.modalGlobalConfig = modalGlobalConfig;
        this.document = document;
        this.visible = false;
        this.closable = true;
        this.okLoading = false;
        this.okDisabled = false;
        this.cancelDisabled = false;
        this.cancelLoading = false;
        this.keyboard = true;
        this.noAnimation = false;
        this.showHelpfulTips = true;
        // [STATIC] Default Modal ONLY
        this.getContainer = (/**
         * @return {?}
         */
        () => this.overlay.create()); // [STATIC]
        // [STATIC]
        this.zIndex = 1000;
        this.width = 520;
        this.okType = 'primary';
        this.iconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY
        this.modalType = 'transactional';
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.cmacsAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        // Trigger when modal open(visible) after animations
        this.cmacsAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        // Trigger when modal leave-animation over
        this.visibleChange = new EventEmitter();
        this.locale = {};
        this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        this.unsubscribe$ = new Subject();
        this.scrollStrategy = this.overlay.scrollStrategies.block();
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for cmacsAfterOpen
        return this.cmacsAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for afterClose
        return this.cmacsAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    get cancelText() {
        return this.cmacsCancelText || (/** @type {?} */ (this.locale.cancelText));
    }
    /**
     * @return {?}
     */
    get okText() {
        return this.cmacsOkText || (/** @type {?} */ (this.locale.okText));
    }
    /**
     * @return {?}
     */
    get hidden() {
        return !this.visible && !this.animationState;
    } // Indicate whether this dialog should hidden
    // Indicate whether this dialog should hidden
    /**
     * \@description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     * @return {?}
     */
    get mask() {
        if (this.cmacsMask != null) {
            return this.cmacsMask;
        }
        else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMask != null) {
            return this.modalGlobalConfig.cmacsMask;
        }
        else {
            return true;
        }
    }
    /**
     * \@description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     * @return {?}
     */
    get maskClosable() {
        if (this.cmacsMaskClosable != null) {
            return this.cmacsMaskClosable;
        }
        else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMaskClosable != null) {
            return this.modalGlobalConfig.cmacsMaskClosable;
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = (/** @type {?} */ (this.i18n.getLocaleData('Modal')));
        }));
        fromEvent(this.document.body, 'keydown')
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => this.keydownListener(e)));
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
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "content"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "content" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible) {
            this.handleVisibleStateChange(this.visible, !changes.visible.firstChange); // Do not trigger animation while initializing
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            ((/** @type {?} */ (this.autoFocusButtonOk.nativeElement))).focus();
        }
        /*this.tipsCreationWizard.changes.subscribe((component) =>
        {
          if (component._results.length > 0) {
            this.showHelpfulTips = !!component.first.nativeElement.innerHTML;
            this.cdr.detectChanges();
          }
        });*/
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then((/**
         * @return {?}
         */
        () => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.keyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @return {?}
     */
    open() {
        this.changeVisibleFromInside(true);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this;
    }
    /**
     * @return {?}
     */
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClickMask($event) {
        if (this.cmacsMask &&
            this.cmacsMaskClosable &&
            ((/** @type {?} */ ($event.target))).classList.contains('ant-modal-wrap') &&
            this.visible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isModalType(type) {
        return this.modalType === type;
    }
    /**
     * @return {?}
     */
    onClickCloseBtn() {
        if (this.visible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @return {?}
     */
    onClickCloseInteraction() {
        this.visible = !this.visible;
        this.visibleChange.emit(this.visible);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onClickOkCancel(type) {
        /** @type {?} */
        const trigger = { ok: this.onOk, cancel: this.onCancel }[type];
        /** @type {?} */
        const loadingKey = { ok: 'okLoading', cancel: 'cancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            (doClose) => doClose !== false && this.close((/** @type {?} */ (doClose))));
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                const handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                });
                ((/** @type {?} */ (result))).then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isComponent(value) {
        return value instanceof Type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Do rest things when visible state changed
    /**
     * @private
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    handleVisibleStateChange(visible, animation = true, closeResult) {
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
            () => {
                // Emit open/close event after animations over
                if (visible) {
                    this.cmacsAfterOpen.emit();
                }
                else {
                    this.cmacsAfterClose.emit(closeResult);
                    this.restoreFocus();
                    this.scrollStrategy.disable();
                    // Mark the for check so it can react if the view container is using OnPush change detection.
                    this.cdr.markForCheck();
                }
            }));
        }
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On footer's modal button click
    /**
     * @param {?} button
     * @return {?}
     */
    onButtonClick(button) {
        /** @type {?} */
        const result = this.getButtonCallableProp(button, 'onClick');
        if (isPromise(result)) {
            button.loading = true;
            ((/** @type {?} */ (result))).then((/**
             * @return {?}
             */
            () => (button.loading = false))).catch((/**
             * @return {?}
             */
            () => (button.loading = false)));
        }
    }
    // Change visible from inside
    /**
     * @private
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    changeVisibleFromInside(visible, closeResult) {
        if (this.visible !== visible) {
            // Change visible value immediately
            this.visible = visible;
            this.visibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    animateTo(isVisible) {
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout((/**
             * @return {?}
             */
            () => this.updateTransformOrigin())); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => setTimeout((/**
         * @return {?}
         */
        () => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }), this.noAnimation ? 0 : MODAL_ANIMATE_DURATION)));
    }
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    formatModalButtons(buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        button => {
            return Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        }));
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param {?} component Component class
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        const childInjector = Injector.create({
            providers: [{ provide: CmacsModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.componentParams) {
            Object.assign(this.contentComponentRef.instance, this.componentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    /**
     * @private
     * @return {?}
     */
    updateTransformOrigin() {
        /** @type {?} */
        const modalElement = (/** @type {?} */ (this.modalContainer.nativeElement));
        if (this.previouslyFocusedElement) {
            /** @type {?} */
            const previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            /** @type {?} */
            const lastPosition = getElementOffset(this.previouslyFocusedElement);
            /** @type {?} */
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
        }
    }
    /**
     * @private
     * @return {?}
     */
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    /**
     * @private
     * @return {?}
     */
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
CmacsModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-modal',
                exportAs: 'cmacsModal',
                template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"nzNoAnimation\" *ngIf=\"!isModalType('interaction')\">\r\n  <div *ngIf=\"mask\"\r\n       class=\"ant-modal-mask\"\r\n       [ngClass]=\"maskAnimationClassMap\"\r\n       [class.ant-modal-mask-hidden]=\"hidden\"\r\n       [ngStyle]=\"maskStyle\"\r\n       [style.zIndex]=\"zIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    class=\"ant-modal-wrap {{ wrapClassName }}\"\r\n    [style.zIndex]=\"zIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n         class=\"ant-modal {{ className }}\"\r\n         [ngClass]=\"modalAnimationClassMap\"\r\n         [ngStyle]=\"cmacsStyle\"\r\n         [style.top]=\"isModalType('creation') ? '10vh' : (isModalType('helpfulTips') || isModalType('basic') ||  isModalType('helpfulTipsNoPanel')) ? '4vh' : '100px'\"\r\n         [style.width]=\"width | cmacsToCssUnit\"\r\n         [style.transform-origin]=\"transformOrigin\"\r\n         role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"closable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span *ngIf=\"isModalType('passive') || isModalType('interaction') || isModalType('basic')\"\r\n                [class.ant-modal-close-x]=\"!isModalType('basic')\"\r\n                [class.ant-modal-close-x-basic]=\"isModalType('basic')\"\r\n          >\r\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('transactional')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('creation')\" [ngTemplateOutlet]=\"tplCreationDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTips')\" [ngTemplateOutlet]=\"tplHelpfulTips\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTipsNoPanel') || isModalType('basic')\" [ngTemplateOutlet]=\"tplHelpfulTipsWithoutPanel\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('passive') || isModalType('interaction')\" [ngTemplateOutlet]=\"tplContentPassive\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isModalType('interaction')\">\r\n  <div\r\n    [style.display]=\"visible ? 'inherit' : 'none'\"\r\n    class=\"cmacs-interaction-modal\"\r\n    cdkDrag\r\n    [style.zIndex]=\"zIndex\"\r\n    [ngStyle]=\"cmacsStyle\"\r\n    [style.width]=\"width | cmacsToCssUnit\"\r\n  >\r\n    <div class=\"cmacs-interaction-modal-content\">\r\n      <button class=\"ant-modal-close\" aria-label=\"Close\" (click)=\"onClickCloseInteraction()\">\r\n          <span class=\"ant-modal-close-x\"\r\n          >\r\n            <i style=\"color: #ffffff;\" nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n      </button>\r\n      <div class=\"ant-modal-header cmacs-custom-header\">\r\n        <div class=\"ant-modal-title\" style=\"color: #ffffff;\">\r\n          <div>{{title}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-body\" style=\"padding: 10px\">\r\n        <ng-container [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n       [style.height.px]=\"modalType === 'transactional' ? 30 : 50\"\r\n       [style.padding]=\"modalType === 'transactional' ? '7px 24px' : '16px 24px'\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\"\r\n       [style.border-top]=\"modalType === 'transactional' ? 'none' : 'inherit'\"\r\n       [style.padding-bottom]=\"modalType === 'transactional' || modalType === 'passive' ? '20px' : 'inherit'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Creation Modal Content -->\r\n<ng-template #tplCreationDefault>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols\" class=\"cmacs-modal-creation-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? centerPanelCols : (24 - leftPanelCols)\" class=\"cmacs-modal-creation-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [style.display]=\"showHelpfulTips ? 'inherit' : 'none'\" #tipsCreationWizard [nzSpan]=\"rightPanelCols\" class=\"cmacs-modal-creation-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Creation Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTips Modal Content -->\r\n<ng-template #tplHelpfulTips>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols ? leftPanelCols : 8\" class=\"cmacs-modal-helpful-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"centerPanelCols ? centerPanelCols : 8\" class=\"cmacs-modal-helpful-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 8\" class=\"cmacs-modal-helpful-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTips Modal Content -->\r\n\r\n<!-- [Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n<ng-template #tplHelpfulTipsWithoutPanel>\r\n  <div *ngIf=\"title\"\r\n       class=\"ant-modal-header\"\r\n  >\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"leftPanelCols ? leftPanelCols : 12\" class=\"cmacs-modal-helpfulTips-no-panel-left\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-left]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 12\" class=\"cmacs-modal-helpfulTips-no-panel-right\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-right]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\"\r\n       class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\"><div [innerHTML]=\"footer\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" nz-button\r\n                (click)=\"onButtonClick(button)\"\r\n                [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n                [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n                [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n                [nzType]=\"button.type\"\r\n                [nzShape]=\"button.shape\"\r\n                [nzSize]=\"button.size\"\r\n                [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\" [disabled]=\"cancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] HelpfulTipsWithoutPanel Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"iconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><span [innerHTML]=\"title\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container>\r\n            <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button *ngIf=\"cmacsCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n\r\n<!-- [Predefined] Passive Modal Content -->\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentPassive>\r\n  <div *ngIf=\"title\" class=\"ant-modal-header\" [style.padding]=\"modalType === 'passive' ? '7px 24px' : '7px 10px'\" style=\"height: 30px\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(title)\"><div [innerHTML]=\"title\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\" [style.padding]=\"modalType === 'passive' ? '24px' : '0'\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\"><div [innerHTML]=\"content\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Passive Modal Content -->\r\n",
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default,
                styles: [".ant-modal-header{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff}.ant-modal-title{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x{color:#fff;width:25px;height:25px;padding-right:15px;line-height:30px}.ant-modal-close-x-basic{color:#fff;width:30px;height:30px;padding-right:15px;line-height:52px;font-weight:700;font-size:20px}.cmacs-modal-creation-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-creation-center-panel{height:100%;border-left:1px solid #dee0e5;padding:30px;text-align:justify;overflow:auto}.cmacs-modal-creation-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpful-left-panel{padding:30px;height:100%;overflow:auto}.cmacs-modal-helpful-center-panel{height:100%;padding:25px;text-align:justify;overflow:auto}.cmacs-modal-helpful-right-panel{background-color:#f6f7fb;padding:25px;height:100%;overflow:auto}.cmacs-modal-helpfulTips-no-panel-left,.cmacs-modal-helpfulTips-no-panel-right{padding:25px;height:100%;overflow:auto}.cmacs-custom-header{height:30px;padding:4px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal{box-sizing:border-box;color:rgba(0,0,0,.65);font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;-webkit-font-feature-settings:'tnum';font-feature-settings:'tnum';position:absolute;width:auto;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.cmacs-interaction-modal-content .ant-modal-close,.cmacs-interaction-modal-content .ant-modal-close .ant-modal-close-x{width:25px;height:25px;line-height:30px}"]
            }] }
];
/** @nocollapse */
CmacsModalComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUFFLFNBQVMsRUFFakIsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQUUsWUFBWSxFQUN2QixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFDLE1B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O0lBQ3ZDLDJDQUF5Qzs7Ozs7SUFDekMsK0NBQTBDOzs7OztJQUMxQyxrQ0FBOEI7Ozs7O0lBQzlCLGdEQUF3RTs7Ozs7SUFDeEUsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCwgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RWxlbWVudE9mZnNldCwgaXNQcm9taXNlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE1PREFMX0NPTkZJRywgTW9kYWxDb25maWd9IGZyb20gJy4vY21hY3MtbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vY21hY3MtbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NNb2RhbFJlZn0gZnJvbSAnLi9jbWFjcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL2NtYWNzLW1vZGFsLnR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuXHJcbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vZGFsJyxcclxuICBleHBvcnRBczogJ2NtYWNzTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW9kYWwuY29tcG9uZW50LmNzcyddLFxyXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxyXG59KVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIENtYWNzTW9kYWxSZWY8VCwgUj5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBva0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NNYXNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc01hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0hlbHBmdWxUaXBzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBUeXBlPFQ+OyAvLyBbU1RBVElDXSBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIHVzZSA8bmctY29udGVudD5cclxuICBASW5wdXQoKSBjb21wb25lbnRQYXJhbXM6IFQ7IC8vIFtTVEFUSUNdIE9OTFkgYXZhbGlhYmxlIHdoZW4gY29udGVudCBpcyBhIGNvbXBvbmVudFxyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIGdldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAxMDAwO1xyXG4gIEBJbnB1dCgpIGxlZnRQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSBjZW50ZXJQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSByaWdodFBhbmVsQ29sczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XHJcbiAgQElucHV0KCkgd3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIG1hc2tTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGNtYWNzT2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzQ2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBva1R5cGUgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBtb2RhbFR5cGU6IE1vZGFsVHlwZSA9ICd0cmFuc2FjdGlvbmFsJztcclxuXHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJykgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYm9keUNvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG9Gb2N1c0J1dHRvbk9rJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmOyAvLyBPbmx5IGFpbSB0byBmb2N1cyB0aGUgb2sgYnV0dG9uIHRoYXQgbmVlZHMgdG8gYmUgYXV0byBmb2N1c2VkXHJcbiAgQFZpZXdDaGlsZHJlbigndGlwc0NyZWF0aW9uV2l6YXJkJykgdGlwc0NyZWF0aW9uV2l6YXJkOiBRdWVyeUxpc3Q8YW55PjtcclxuXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGNtYWNzQWZ0ZXJPcGVuXHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0FmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgYWZ0ZXJDbG9zZVxyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzQ2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzT2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnZpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XHJcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFzaygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY21hY3NNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIGNvbnRlbnQgYXMgQ29tcG9uZW50XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7IC8vIEN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTW9kYWxDb250cm9sU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTU9EQUxfQ09ORklHKSBwcml2YXRlIG1vZGFsR2xvYmFsQ29uZmlnOiBNb2RhbENvbmZpZyxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKSBhcyB7IG9rVGV4dDogc3RyaW5nOyBjYW5jZWxUZXh0OiBzdHJpbmcgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLmNvbnRlbnQpKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5mb290ZXIpKSB7XHJcbiAgICAgIC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcclxuICAgICAgdGhpcy5mb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLmZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5nZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbnRhaW5lcigpIDogdGhpcy5nZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRpb24gbW9kYWwgc2V0dGluZ3NcclxuICAgIGlmICh0aGlzLmlzTW9kYWxUeXBlKCdjcmVhdGlvbicpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzJykgfHwgdGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykpIHtcclxuICAgICAgdGhpcy5jbWFjc0NhbmNlbFRleHQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNtYWNzT2tUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RlciBtb2RhbCB3aGVuIGFmdGVyT3Blbi9hZnRlckNsb3NlIGlzIHN0YWJsZVxyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wucmVnaXN0ZXJNb2RhbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBOT1QgYXZhaWxhYmxlIHdoZW4gdXNpbmcgYnkgc2VydmljZSFcclxuICAvLyBCZWNhdXNlIG5nT25DaGFuZ2VzIG5ldmVyIGJlIGNhbGxlZCB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UsXHJcbiAgLy8gaGVyZSB3ZSBjYW4ndCBzdXBwb3J0IFwiY29udGVudFwiKENvbXBvbmVudCkgZXRjLiBhcyBpbnB1dHMgdGhhdCBpbml0aWFsaXplZCBkeW5hbWljYWxseS5cclxuICAvLyBCVVQ6IFVzZXIgYWxzbyBjYW4gY2hhbmdlIFwiY29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMudmlzaWJsZSwgIWNoYW5nZXMudmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKnRoaXMudGlwc0NyZWF0aW9uV2l6YXJkLmNoYW5nZXMuc3Vic2NyaWJlKChjb21wb25lbnQpID0+XHJcbiAgICB7XHJcbiAgICAgIGlmIChjb21wb25lbnQuX3Jlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hlbHBmdWxUaXBzID0gISFjb21wb25lbnQuZmlyc3QubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTsqL1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmtleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSwgcmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcclxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IENtYWNzTW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25DbGlja01hc2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY21hY3NNYXNrICYmXHJcbiAgICAgIHRoaXMuY21hY3NNYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYW50LW1vZGFsLXdyYXAnKSAmJlxyXG4gICAgICB0aGlzLnZpc2libGVcclxuICAgICkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsVHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrQ2xvc2VCdG4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrQ2xvc2VJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tPa0NhbmNlbCh0eXBlOiAnb2snIHwgJ2NhbmNlbCcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB7IG9rOiB0aGlzLm9uT2ssIGNhbmNlbDogdGhpcy5vbkNhbmNlbCB9W3R5cGVdO1xyXG4gICAgY29uc3QgbG9hZGluZ0tleSA9IHsgb2s6ICdva0xvYWRpbmcnLCBjYW5jZWw6ICdjYW5jZWxMb2FkaW5nJyB9W3R5cGVdO1xyXG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiBkb0Nsb3NlICE9PSBmYWxzZSAmJiB0aGlzLmNsb3NlKGRvQ2xvc2UgYXMgUik7IC8vIFVzZXJzIGNhbiByZXR1cm4gXCJmYWxzZVwiIHRvIHByZXZlbnQgY2xvc2luZyBieSBkZWZhdWx0XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4ge1xyXG4gICAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2FzZUNsb3NlKGRvQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHZvaWQ+KS50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTW9kYWxCdXR0b25zKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvLyBEbyByZXN0IHRoaW5ncyB3aGVuIHZpc2libGUgc3RhdGUgY2hhbmdlZFxyXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpKXtcclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXHJcbiAgICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFuaW1hdGlvbiA/IHRoaXMuYW5pbWF0ZVRvKHZpc2libGUpIDogdW5kZWZpbmVkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMuY21hY3NBZnRlck9wZW4uZW1pdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNtYWNzQWZ0ZXJDbG9zZS5lbWl0KGNsb3NlUmVzdWx0KTtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAgIC8vIE1hcmsgdGhlIGZvciBjaGVjayBzbyBpdCBjYW4gcmVhY3QgaWYgdGhlIHZpZXcgY29udGFpbmVyIGlzIHVzaW5nIE9uUHVzaCBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvb2t1cCBhIGJ1dHRvbidzIHByb3BlcnR5LCBpZiB0aGUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBjYWxsICYgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCwgb3RoZXJ3aXNlLCByZXR1cm4gaXRzZWxmLlxyXG4gIHB1YmxpYyBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zPFQ+LCBwcm9wOiBzdHJpbmcpOiB7fSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XHJcbiAgICBjb25zdCBhcmdzOiBUW10gPSBbXTtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcclxuICAgICAgYXJncy5wdXNoKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgYXJncykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIE9uIGZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlzaWJsZSBmcm9tIGluc2lkZVxyXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIC8vIENoYW5nZSB2aXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZSwgdHJ1ZSwgY2xvc2VSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZShzdGF0ZTogQW5pbWF0aW9uU3RhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYGZhZGUtJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYGZhZGUtJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgem9vbS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgem9vbS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlVG8oaXNWaXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb24gd2hlbiBzaG93cyB1cFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtT3JpZ2luKCkpOyAvLyBbTk9URV0gVXNpbmcgdGltZW91dCBkdWUgdG8gdGhlIGRvY3VtZW50LmNsaWNrIGV2ZW50IGlzIGZpcmVkIGxhdGVyIHRoYW4gdmlzaWJsZSBjaGFuZ2UsIHNvIGlmIG5vdCBwb3N0cG9uZWQgdG8gbmV4dCBldmVudC1sb29wLCB3ZSBjYW4ndCBnZXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKGlzVmlzaWJsZSA/ICdlbnRlcicgOiAnbGVhdmUnKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gUmV0dXJuIHdoZW4gYW5pbWF0aW9uIGlzIG92ZXJcclxuICAgICAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUobnVsbCk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzLm5vQW5pbWF0aW9uID8gMCA6IE1PREFMX0FOSU1BVEVfRFVSQVRJT05cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcclxuICAgIHJldHVybiBidXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLntcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5idXR0b25cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcclxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ21hY3NNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfV0sXHJcbiAgICAgIHBhcmVudDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UGFyYW1zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlLCB0aGlzLmNvbXBvbmVudFBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICAvLyBEbyB0aGUgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBpbW1lZGlhdGVseSAob3Igd2UgZG8gZGV0ZWN0aW9uIGF0IG5nQWZ0ZXJWaWV3SW5pdCwgbXVsdGktY2hhbmdlcyBlcnJvciB3aWxsIGJlIHRocm93bilcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBVcGRhdGUgdHJhbnNmb3JtLW9yaWdpbiB0byB0aGUgbGFzdCBjbGljayBwb3NpdGlvbiBvbiBkb2N1bWVudFxyXG4gIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtT3JpZ2luKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzbHlET01SZWN0ID0gdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCB4ID0gbGFzdFBvc2l0aW9uLmxlZnQgKyBwcmV2aW91c2x5RE9NUmVjdC53aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IHkgPSBsYXN0UG9zaXRpb24udG9wICsgcHJldmlvdXNseURPTVJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHt4IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHt5IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCAmJiB0eXBlb2YgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==