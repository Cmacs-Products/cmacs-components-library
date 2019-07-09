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
// A builder used for managing service creating modals
export { ModalBuilderForService };
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
    /** @nocollapse */ CmacsModalService.ngInjectableDef = i0.defineInjectable({ factory: function CmacsModalService_Factory() { return new CmacsModalService(i0.inject(i1.Overlay), i0.inject(i2.LoggerService), i0.inject(i3.ModalControlService)); }, token: CmacsModalService, providedIn: "root" });
    return CmacsModalService;
}());
export { CmacsModalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbW9kYWwvY21hY3MtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUcvQzs7O0lBSUUsZ0NBQW9CLE9BQWdCLEVBQUUsT0FBb0M7UUFBcEMsd0JBQUEsRUFBQSxZQUFvQztRQUExRSxpQkFXQztRQVhtQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDaEMsMEZBQTBGO1lBQzFGLE9BQU8sQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUMsNEVBQTRFO1NBQy9HO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLEVB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LGNBQWM7WUFDckIsT0FBTyxFQUFFLG9CQUFvQjtTQUM5QjtRQUNELElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsRUFBRTtZQUM5QixtRUFBbUU7WUFDbkUsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQWhGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXhEUSxPQUFPO2dCQVVQLGFBQWE7Z0JBSmIsbUJBQW1COzs7NEJBTjVCO0NBdUlDLEFBakZELElBaUZDO1NBOUVZLGlCQUFpQjs7Ozs7O0lBVWhCLG9DQUF3Qjs7Ozs7SUFBRSxtQ0FBNkI7Ozs7O0lBQUUseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc01vZGFsUmVmIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBDbWFjc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtVHlwZSwgTW9kYWxPcHRpb25zLCBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC50eXBlJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbG9nZ2VyJztcclxuXHJcbi8vIEEgYnVpbGRlciB1c2VkIGZvciBtYW5hZ2luZyBzZXJ2aWNlIGNyZWF0aW5nIG1vZGFsc1xyXG5leHBvcnQgY2xhc3MgTW9kYWxCdWlsZGVyRm9yU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBtb2RhbFJlZjogQ29tcG9uZW50UmVmPENtYWNzTW9kYWxDb21wb25lbnQ+IHwgbnVsbDsgLy8gTW9kYWwgQ29tcG9uZW50UmVmLCBcIm51bGxcIiBtZWFucyBpdCBoYXMgYmVlbiBkZXN0cm95ZWRcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgb3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHt9KSB7XHJcbiAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XHJcblxyXG4gICAgaWYgKCEoJ2dldENvbnRhaW5lcicgaW4gb3B0aW9ucykpIHtcclxuICAgICAgLy8gQXMgd2UgdXNlIENESyB0byBjcmVhdGUgbW9kYWwgaW4gc2VydmljZSBieSBmb3JjZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgZ2V0Q29udGFpbmVyXHJcbiAgICAgIG9wdGlvbnMuZ2V0Q29udGFpbmVyID0gdW5kZWZpbmVkOyAvLyBPdmVycmlkZSBnZXRDb250YWluZXIncyBkZWZhdWx0IHZhbHVlIHRvIHByZXZlbnQgY3JlYXRpbmcgYW5vdGhlciBvdmVybGF5XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VQcm9wcyhvcHRpb25zKTtcclxuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLm9wZW4oKTtcclxuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGVzdHJveU1vZGFsKCkpOyAvLyBbTk9URV0gQnkgZGVmYXVsdCwgY2xvc2UgZXF1YWxzIGRlc3Ryb3kgd2hlbiB1c2luZyBhcyBTZXJ2aWNlXHJcbiAgfVxyXG5cclxuICBnZXRJbnN0YW5jZSgpOiBDbWFjc01vZGFsQ29tcG9uZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZiAmJiB0aGlzLm1vZGFsUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveU1vZGFsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVByb3BzKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGFsUmVmLmluc3RhbmNlLCBvcHRpb25zKTsgLy8gREFOR0VSOiBoZXJlIG5vdCBsaW1pdCB1c2VyJ3MgaW5wdXRzIGF0IHJ1bnRpbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb21wb25lbnQgdG8gQXBwbGljYXRpb25SZWZcclxuICBwcml2YXRlIGNyZWF0ZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChDbWFjc01vZGFsQ29tcG9uZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vZGFsU2VydmljZSB7XHJcbiAgLy8gVHJhY2sgb2YgdGhlIGN1cnJlbnQgY2xvc2UgbW9kYWxzICh3ZSBhc3N1bWUgaW52aXNpYmxlIGlzIGNsb3NlIHRoaXMgdGltZSlcclxuICBnZXQgb3Blbk1vZGFscygpOiBDbWFjc01vZGFsUmVmW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5hZnRlckFsbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE1vZGFsQ29udHJvbFNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3NcclxuICBjbG9zZUFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kYWxDb250cm9sLmNsb3NlQWxsKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGU8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25DYW5jZWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgb3B0aW9ucy5vbkNhbmNlbCA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5PVEU6IHVzZSBDbWFjc01vZGFsQ29tcG9uZW50IGFzIHRoZSBDbWFjc01vZGFsUmVmIGJ5IG5vdywgd2UgbWF5IG5lZWQgYXJjaGl2ZSB0aGUgcmVhbCBDbWFjc01vZGFsUmVmIG9iamVjdCBpbiB0aGUgZnV0dXJlXHJcbiAgICBjb25zdCBtb2RhbFJlZiA9IG5ldyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlKHRoaXMub3ZlcmxheSwgb3B0aW9ucykuZ2V0SW5zdGFuY2UoKSE7XHJcblxyXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSA9ICdjb25maXJtJyk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgaWYgKCdmb290ZXInIGluIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5sb2dnZXIud2FybihgVGhlIENvbmZpcm0tTW9kYWwgZG9lc24ndCBzdXBwb3J0IFwiZm9vdGVyXCIsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoJ3dpZHRoJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLndpZHRoID0gNDE2O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uT2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8gTk9URTogb25seSBzdXBwb3J0IGZ1bmN0aW9uIGN1cnJlbnRseSBieSBjYWxsaW5nIGNvbmZpcm0oKVxyXG4gICAgICBvcHRpb25zLm9uT2sgPSAoKSA9PiB7fTsgLy8gTGVhdmUgYSBlbXB0eSBmdW5jdGlvbiB0byBjbG9zZSB0aGlzIG1vZGFsIGJ5IGRlZmF1bHRcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zLm1vZGFsVHlwZSA9ICdjb25maXJtJztcclxuICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gYGFudC1tb2RhbC1jb25maXJtIGFudC1tb2RhbC1jb25maXJtLSR7Y29uZmlybVR5cGV9ICR7b3B0aW9ucy5jbGFzc05hbWUgfHwgJyd9YDtcclxuICAgIG9wdGlvbnMuY21hY3NNYXNrQ2xvc2FibGUgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGluZm88VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdpbmZvJyk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3I8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdlcnJvcicpO1xyXG4gIH1cclxuXHJcbiAgd2FybmluZzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ3dhcm5pbmcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2ltcGxlQ29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgY29uc3QgaWNvbk1hcDogSW5kZXhhYmxlT2JqZWN0ID0ge1xyXG4gICAgICBpbmZvOiAnaW5mby1jaXJjbGUnLFxyXG4gICAgICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcclxuICAgICAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxyXG4gICAgICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlJ1xyXG4gICAgfTtcclxuICAgIGlmICghKCdpY29uVHlwZScgaW4gb3B0aW9ucykpIHtcclxuICAgICAgb3B0aW9ucy5pY29uVHlwZSA9IGljb25NYXBbY29uZmlybVR5cGVdO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoJ2NhbmNlbFRleHQnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgQ2FuY2VsIGJ1dHRvbiBpZiB0aGUgdXNlciBub3Qgc3BlY2lmeSBhIENhbmNlbCBidXR0b25cclxuICAgICAgb3B0aW9ucy5jbWFjc0NhbmNlbFRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlybShvcHRpb25zLCBjb25maXJtVHlwZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==