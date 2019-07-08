/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoggerService } from 'ng-zorro-antd/core/logger/public-api';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalComponent } from './cmacs-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "ng-zorro-antd/core/logger/public-api";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbW9kYWwvY21hY3MtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUk5RCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUlqQyxZQUFvQixPQUFnQixFQUFFLFVBQWtDLEVBQUU7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLDBGQUEwRjtZQUMxRixPQUFPLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLDRFQUE0RTtTQUMvRztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQyxDQUFDLGdFQUFn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QUNuQjs7OztZQXpEUSxPQUFPO1lBTVAsYUFBYTtZQUViLG1CQUFtQjs7Ozs7Ozs7SUE0RGQsb0NBQXdCOzs7OztJQUFFLG1DQUE2Qjs7Ozs7SUFBRSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyL3B1YmxpYy1hcGknO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vY21hY3MtbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NNb2RhbFJlZiB9IGZyb20gJy4vY21hY3MtbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgQ21hY3NNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucywgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJy4vY21hY3MtbW9kYWwudHlwZSc7XHJcblxyXG4vLyBBIGJ1aWxkZXIgdXNlZCBmb3IgbWFuYWdpbmcgc2VydmljZSBjcmVhdGluZyBtb2RhbHNcclxuZXhwb3J0IGNsYXNzIE1vZGFsQnVpbGRlckZvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbW9kYWxSZWY6IENvbXBvbmVudFJlZjxDbWFjc01vZGFsQ29tcG9uZW50PiB8IG51bGw7IC8vIE1vZGFsIENvbXBvbmVudFJlZiwgXCJudWxsXCIgbWVhbnMgaXQgaGFzIGJlZW4gZGVzdHJveWVkXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7fSkge1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xyXG5cclxuICAgIGlmICghKCdnZXRDb250YWluZXInIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIC8vIEFzIHdlIHVzZSBDREsgdG8gY3JlYXRlIG1vZGFsIGluIHNlcnZpY2UgYnkgZm9yY2UsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXNlIGdldENvbnRhaW5lclxyXG4gICAgICBvcHRpb25zLmdldENvbnRhaW5lciA9IHVuZGVmaW5lZDsgLy8gT3ZlcnJpZGUgZ2V0Q29udGFpbmVyJ3MgZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IGNyZWF0aW5nIGFub3RoZXIgb3ZlcmxheVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlUHJvcHMob3B0aW9ucyk7XHJcbiAgICB0aGlzLm1vZGFsUmVmIS5pbnN0YW5jZS5vcGVuKCk7XHJcbiAgICB0aGlzLm1vZGFsUmVmIS5pbnN0YW5jZS5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRlc3Ryb3lNb2RhbCgpKTsgLy8gW05PVEVdIEJ5IGRlZmF1bHQsIGNsb3NlIGVxdWFscyBkZXN0cm95IHdoZW4gdXNpbmcgYXMgU2VydmljZVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogQ21hY3NNb2RhbENvbXBvbmVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWYgJiYgdGhpcy5tb2RhbFJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lNb2RhbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VQcm9wcyhvcHRpb25zOiBNb2RhbE9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5tb2RhbFJlZi5pbnN0YW5jZSwgb3B0aW9ucyk7IC8vIERBTkdFUjogaGVyZSBub3QgbGltaXQgdXNlcidzIGlucHV0cyBhdCBydW50aW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgY29tcG9uZW50IHRvIEFwcGxpY2F0aW9uUmVmXHJcbiAgcHJpdmF0ZSBjcmVhdGVNb2RhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcclxuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoQ21hY3NNb2RhbENvbXBvbmVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb2RhbFNlcnZpY2Uge1xyXG4gIC8vIFRyYWNrIG9mIHRoZSBjdXJyZW50IGNsb3NlIG1vZGFscyAod2UgYXNzdW1lIGludmlzaWJsZSBpcyBjbG9zZSB0aGlzIHRpbWUpXHJcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogQ21hY3NNb2RhbFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5vcGVuTW9kYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wuYWZ0ZXJBbGxDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByaXZhdGUgbW9kYWxDb250cm9sOiBNb2RhbENvbnRyb2xTZXJ2aWNlKSB7fVxyXG5cclxuICAvLyBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzXHJcbiAgY2xvc2VBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5jbG9zZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQ2FuY2VsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG9wdGlvbnMub25DYW5jZWwgPSAoKSA9PiB7fTsgLy8gTGVhdmUgYSBlbXB0eSBmdW5jdGlvbiB0byBjbG9zZSB0aGlzIG1vZGFsIGJ5IGRlZmF1bHRcclxuICAgIH1cclxuXHJcbiAgICAvLyBOT1RFOiB1c2UgQ21hY3NNb2RhbENvbXBvbmVudCBhcyB0aGUgQ21hY3NNb2RhbFJlZiBieSBub3csIHdlIG1heSBuZWVkIGFyY2hpdmUgdGhlIHJlYWwgQ21hY3NNb2RhbFJlZiBvYmplY3QgaW4gdGhlIGZ1dHVyZVxyXG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgTW9kYWxCdWlsZGVyRm9yU2VydmljZSh0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCkhO1xyXG5cclxuICAgIHJldHVybiBtb2RhbFJlZjtcclxuICB9XHJcblxyXG4gIGNvbmZpcm08VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUgPSAnY29uZmlybScpOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIGlmICgnZm9vdGVyJyBpbiBvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYFRoZSBDb25maXJtLU1vZGFsIGRvZXNuJ3Qgc3VwcG9ydCBcImZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcclxuICAgIH1cclxuICAgIGlmICghKCd3aWR0aCcgaW4gb3B0aW9ucykpIHtcclxuICAgICAgb3B0aW9ucy53aWR0aCA9IDQxNjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbk9rICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIE5PVEU6IG9ubHkgc3VwcG9ydCBmdW5jdGlvbiBjdXJyZW50bHkgYnkgY2FsbGluZyBjb25maXJtKClcclxuICAgICAgb3B0aW9ucy5vbk9rID0gKCkgPT4ge307IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucy5tb2RhbFR5cGUgPSAnY29uZmlybSc7XHJcbiAgICBvcHRpb25zLmNsYXNzTmFtZSA9IGBhbnQtbW9kYWwtY29uZmlybSBhbnQtbW9kYWwtY29uZmlybS0ke2NvbmZpcm1UeXBlfSAke29wdGlvbnMuY2xhc3NOYW1lIHx8ICcnfWA7XHJcbiAgICBvcHRpb25zLmNtYWNzTWFza0Nsb3NhYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBpbmZvPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnaW5mbycpO1xyXG4gIH1cclxuXHJcbiAgc3VjY2VzczxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIGVycm9yPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnZXJyb3InKTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmc8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICd3YXJuaW5nJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpbXBsZUNvbmZpcm08VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUpOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIGNvbnN0IGljb25NYXA6IEluZGV4YWJsZU9iamVjdCA9IHtcclxuICAgICAgaW5mbzogJ2luZm8tY2lyY2xlJyxcclxuICAgICAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXHJcbiAgICAgIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcclxuICAgICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZSdcclxuICAgIH07XHJcbiAgICBpZiAoISgnaWNvblR5cGUnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMuaWNvblR5cGUgPSBpY29uTWFwW2NvbmZpcm1UeXBlXTtcclxuICAgIH1cclxuICAgIGlmICghKCdjYW5jZWxUZXh0JyBpbiBvcHRpb25zKSkge1xyXG4gICAgICAvLyBSZW1vdmUgdGhlIENhbmNlbCBidXR0b24gaWYgdGhlIHVzZXIgbm90IHNwZWNpZnkgYSBDYW5jZWwgYnV0dG9uXHJcbiAgICAgIG9wdGlvbnMuY21hY3NDYW5jZWxUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpcm0ob3B0aW9ucywgY29uZmlybVR5cGUpO1xyXG4gIH1cclxufVxyXG4iXX0=