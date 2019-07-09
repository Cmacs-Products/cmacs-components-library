/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalComponent } from './cmacs-modal.component';
import { LoggerService } from '../core/logger';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "../core/logger/logger.service";
import * as i3 from "./cmacs-modal-control.service";
// A builder used for managing service creating modals
export class ModalBuilderForService {
    /**
     * @param {?} overlay
     * @param {?=} options
     */
    constructor(overlay, options = {}) {
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
        () => this.destroyModal())); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.modalRef && this.modalRef.instance;
    }
    /**
     * @return {?}
     */
    destroyModal() {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    changeProps(options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    }
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    createModal() {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(CmacsModalComponent));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlay;
}
export class CmacsModalService {
    /**
     * @param {?} overlay
     * @param {?} logger
     * @param {?} modalControl
     */
    constructor(overlay, logger, modalControl) {
        this.overlay = overlay;
        this.logger = logger;
        this.modalControl = modalControl;
    }
    // Track of the current close modals (we assume invisible is close this time)
    /**
     * @return {?}
     */
    get openModals() {
        return this.modalControl.openModals;
    }
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.modalControl.afterAllClose.asObservable();
    }
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    closeAll() {
        this.modalControl.closeAll();
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    create(options = {}) {
        if (typeof options.onCancel !== 'function') {
            options.onCancel = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use CmacsModalComponent as the CmacsModalRef by now, we may need archive the real CmacsModalRef object in the future
        /** @type {?} */
        const modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('footer' in options) {
            this.logger.warn(`The Confirm-Modal doesn't support "footer", this property will be ignored.`);
        }
        if (!('width' in options)) {
            options.width = 416;
        }
        if (typeof options.onOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.onOk = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        options.modalType = 'confirm';
        options.className = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.className || ''}`;
        options.cmacsMaskClosable = false;
        return this.create(options);
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.simpleConfirm(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.simpleConfirm(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.simpleConfirm(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.simpleConfirm(options, 'warning');
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    simpleConfirm(options = {}, confirmType) {
        /** @type {?} */
        const iconMap = {
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
    }
}
CmacsModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CmacsModalService.ctorParameters = () => [
    { type: Overlay },
    { type: LoggerService },
    { type: ModalControlService }
];
/** @nocollapse */ CmacsModalService.ngInjectableDef = i0.defineInjectable({ factory: function CmacsModalService_Factory() { return new CmacsModalService(i0.inject(i1.Overlay), i0.inject(i2.LoggerService), i0.inject(i3.ModalControlService)); }, token: CmacsModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsModalService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    CmacsModalService.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    CmacsModalService.prototype.modalControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbW9kYWwvY21hY3MtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUcvQyxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUlqQyxZQUFvQixPQUFnQixFQUFFLFVBQWtDLEVBQUU7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLDBGQUEwRjtZQUMxRixPQUFPLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLDRFQUE0RTtTQUMvRztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQyxDQUFDLGdFQUFn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QUNuQjs7OztZQXhEUSxPQUFPO1lBVVAsYUFBYTtZQUpiLG1CQUFtQjs7Ozs7Ozs7SUE2RGQsb0NBQXdCOzs7OztJQUFFLG1DQUE2Qjs7Ozs7SUFBRSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxSZWYgfSBmcm9tICcuL2NtYWNzLW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1UeXBlLCBNb2RhbE9wdGlvbnMsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLnR5cGUnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9sb2dnZXInO1xyXG5cclxuLy8gQSBidWlsZGVyIHVzZWQgZm9yIG1hbmFnaW5nIHNlcnZpY2UgY3JlYXRpbmcgbW9kYWxzXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8Q21hY3NNb2RhbENvbXBvbmVudD4gfCBudWxsOyAvLyBNb2RhbCBDb21wb25lbnRSZWYsIFwibnVsbFwiIG1lYW5zIGl0IGhhcyBiZWVuIGRlc3Ryb3llZFxyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge30pIHtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcclxuXHJcbiAgICBpZiAoISgnZ2V0Q29udGFpbmVyJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICAvLyBBcyB3ZSB1c2UgQ0RLIHRvIGNyZWF0ZSBtb2RhbCBpbiBzZXJ2aWNlIGJ5IGZvcmNlLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVzZSBnZXRDb250YWluZXJcclxuICAgICAgb3B0aW9ucy5nZXRDb250YWluZXIgPSB1bmRlZmluZWQ7IC8vIE92ZXJyaWRlIGdldENvbnRhaW5lcidzIGRlZmF1bHQgdmFsdWUgdG8gcHJldmVudCBjcmVhdGluZyBhbm90aGVyIG92ZXJsYXlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZVByb3BzKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2Uub3BlbigpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2UuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95TW9kYWwoKSk7IC8vIFtOT1RFXSBCeSBkZWZhdWx0LCBjbG9zZSBlcXVhbHMgZGVzdHJveSB3aGVuIHVzaW5nIGFzIFNlcnZpY2VcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IENtYWNzTW9kYWxDb21wb25lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmICYmIHRoaXMubW9kYWxSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95TW9kYWwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUHJvcHMob3B0aW9uczogTW9kYWxPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kYWxSZWYuaW5zdGFuY2UsIG9wdGlvbnMpOyAvLyBEQU5HRVI6IGhlcmUgbm90IGxpbWl0IHVzZXIncyBpbnB1dHMgYXQgcnVudGltZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvbXBvbmVudCB0byBBcHBsaWNhdGlvblJlZlxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKENtYWNzTW9kYWxDb21wb25lbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW9kYWxTZXJ2aWNlIHtcclxuICAvLyBUcmFjayBvZiB0aGUgY3VycmVudCBjbG9zZSBtb2RhbHMgKHdlIGFzc3VtZSBpbnZpc2libGUgaXMgY2xvc2UgdGhpcyB0aW1lKVxyXG4gIGdldCBvcGVuTW9kYWxzKCk6IENtYWNzTW9kYWxSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wub3Blbk1vZGFscztcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLmFmdGVyQWxsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIG1vZGFsQ29udHJvbDogTW9kYWxDb250cm9sU2VydmljZSkge31cclxuXHJcbiAgLy8gQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9nc1xyXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wuY2xvc2VBbGwoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNhbmNlbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcHRpb25zLm9uQ2FuY2VsID0gKCkgPT4ge307IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTk9URTogdXNlIENtYWNzTW9kYWxDb21wb25lbnQgYXMgdGhlIENtYWNzTW9kYWxSZWYgYnkgbm93LCB3ZSBtYXkgbmVlZCBhcmNoaXZlIHRoZSByZWFsIENtYWNzTW9kYWxSZWYgb2JqZWN0IGluIHRoZSBmdXR1cmVcclxuICAgIGNvbnN0IG1vZGFsUmVmID0gbmV3IE1vZGFsQnVpbGRlckZvclNlcnZpY2UodGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpITtcclxuXHJcbiAgICByZXR1cm4gbW9kYWxSZWY7XHJcbiAgfVxyXG5cclxuICBjb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlID0gJ2NvbmZpcm0nKTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICBpZiAoJ2Zvb3RlcicgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJmb290ZXJcIiwgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoISgnd2lkdGgnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMud2lkdGggPSA0MTY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25PayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IHN1cHBvcnQgZnVuY3Rpb24gY3VycmVudGx5IGJ5IGNhbGxpbmcgY29uZmlybSgpXHJcbiAgICAgIG9wdGlvbnMub25PayA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMubW9kYWxUeXBlID0gJ2NvbmZpcm0nO1xyXG4gICAgb3B0aW9ucy5jbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLmNsYXNzTmFtZSB8fCAnJ31gO1xyXG4gICAgb3B0aW9ucy5jbWFjc01hc2tDbG9zYWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2luZm8nKTtcclxuICB9XHJcblxyXG4gIHN1Y2Nlc3M8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcjxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2Vycm9yJyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnd2FybmluZycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaW1wbGVDb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlKTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICBjb25zdCBpY29uTWFwOiBJbmRleGFibGVPYmplY3QgPSB7XHJcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXHJcbiAgICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxyXG4gICAgICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXHJcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXHJcbiAgICB9O1xyXG4gICAgaWYgKCEoJ2ljb25UeXBlJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmljb25UeXBlID0gaWNvbk1hcFtjb25maXJtVHlwZV07XHJcbiAgICB9XHJcbiAgICBpZiAoISgnY2FuY2VsVGV4dCcgaW4gb3B0aW9ucykpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxyXG4gICAgICBvcHRpb25zLmNtYWNzQ2FuY2VsVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcclxuICB9XHJcbn1cclxuIl19