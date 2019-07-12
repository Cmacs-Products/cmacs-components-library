/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoggerService } from 'ng-zorro-antd/core';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalComponent } from './cmacs-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "ng-zorro-antd/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbW9kYWwvY21hY3MtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQW1CLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFJOUQ7OztJQUlFLGdDQUFvQixPQUFnQixFQUFFLE9BQW9DO1FBQXBDLHdCQUFBLEVBQUEsWUFBb0M7UUFBMUUsaUJBV0M7UUFYbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLDBGQUEwRjtZQUMxRixPQUFPLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLDRFQUE0RTtTQUMvRztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixF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RSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7UUFDRCxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDOUIsbUVBQW1FO1lBQ25FLE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFoRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF2RFEsT0FBTztnQkFLVSxhQUFhO2dCQUM5QixtQkFBbUI7Ozs0QkFONUI7Q0FzSUMsQUFqRkQsSUFpRkM7U0E5RVksaUJBQWlCOzs7Ozs7SUFVaEIsb0NBQXdCOzs7OztJQUFFLG1DQUE2Qjs7Ozs7SUFBRSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTG9nZ2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxSZWYgfSBmcm9tICcuL2NtYWNzLW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1UeXBlLCBNb2RhbE9wdGlvbnMsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLnR5cGUnO1xyXG5cclxuLy8gQSBidWlsZGVyIHVzZWQgZm9yIG1hbmFnaW5nIHNlcnZpY2UgY3JlYXRpbmcgbW9kYWxzXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8Q21hY3NNb2RhbENvbXBvbmVudD4gfCBudWxsOyAvLyBNb2RhbCBDb21wb25lbnRSZWYsIFwibnVsbFwiIG1lYW5zIGl0IGhhcyBiZWVuIGRlc3Ryb3llZFxyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge30pIHtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcclxuXHJcbiAgICBpZiAoISgnZ2V0Q29udGFpbmVyJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICAvLyBBcyB3ZSB1c2UgQ0RLIHRvIGNyZWF0ZSBtb2RhbCBpbiBzZXJ2aWNlIGJ5IGZvcmNlLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVzZSBnZXRDb250YWluZXJcclxuICAgICAgb3B0aW9ucy5nZXRDb250YWluZXIgPSB1bmRlZmluZWQ7IC8vIE92ZXJyaWRlIGdldENvbnRhaW5lcidzIGRlZmF1bHQgdmFsdWUgdG8gcHJldmVudCBjcmVhdGluZyBhbm90aGVyIG92ZXJsYXlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZVByb3BzKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2Uub3BlbigpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2UuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95TW9kYWwoKSk7IC8vIFtOT1RFXSBCeSBkZWZhdWx0LCBjbG9zZSBlcXVhbHMgZGVzdHJveSB3aGVuIHVzaW5nIGFzIFNlcnZpY2VcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IENtYWNzTW9kYWxDb21wb25lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmICYmIHRoaXMubW9kYWxSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95TW9kYWwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUHJvcHMob3B0aW9uczogTW9kYWxPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kYWxSZWYuaW5zdGFuY2UsIG9wdGlvbnMpOyAvLyBEQU5HRVI6IGhlcmUgbm90IGxpbWl0IHVzZXIncyBpbnB1dHMgYXQgcnVudGltZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvbXBvbmVudCB0byBBcHBsaWNhdGlvblJlZlxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKENtYWNzTW9kYWxDb21wb25lbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW9kYWxTZXJ2aWNlIHtcclxuICAvLyBUcmFjayBvZiB0aGUgY3VycmVudCBjbG9zZSBtb2RhbHMgKHdlIGFzc3VtZSBpbnZpc2libGUgaXMgY2xvc2UgdGhpcyB0aW1lKVxyXG4gIGdldCBvcGVuTW9kYWxzKCk6IENtYWNzTW9kYWxSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wub3Blbk1vZGFscztcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLmFmdGVyQWxsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIG1vZGFsQ29udHJvbDogTW9kYWxDb250cm9sU2VydmljZSkge31cclxuXHJcbiAgLy8gQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9nc1xyXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wuY2xvc2VBbGwoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNhbmNlbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcHRpb25zLm9uQ2FuY2VsID0gKCkgPT4ge307IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTk9URTogdXNlIENtYWNzTW9kYWxDb21wb25lbnQgYXMgdGhlIENtYWNzTW9kYWxSZWYgYnkgbm93LCB3ZSBtYXkgbmVlZCBhcmNoaXZlIHRoZSByZWFsIENtYWNzTW9kYWxSZWYgb2JqZWN0IGluIHRoZSBmdXR1cmVcclxuICAgIGNvbnN0IG1vZGFsUmVmID0gbmV3IE1vZGFsQnVpbGRlckZvclNlcnZpY2UodGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpITtcclxuXHJcbiAgICByZXR1cm4gbW9kYWxSZWY7XHJcbiAgfVxyXG5cclxuICBjb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlID0gJ2NvbmZpcm0nKTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICBpZiAoJ2Zvb3RlcicgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJmb290ZXJcIiwgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoISgnd2lkdGgnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMud2lkdGggPSA0MTY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25PayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IHN1cHBvcnQgZnVuY3Rpb24gY3VycmVudGx5IGJ5IGNhbGxpbmcgY29uZmlybSgpXHJcbiAgICAgIG9wdGlvbnMub25PayA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMubW9kYWxUeXBlID0gJ2NvbmZpcm0nO1xyXG4gICAgb3B0aW9ucy5jbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLmNsYXNzTmFtZSB8fCAnJ31gO1xyXG4gICAgb3B0aW9ucy5jbWFjc01hc2tDbG9zYWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2luZm8nKTtcclxuICB9XHJcblxyXG4gIHN1Y2Nlc3M8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcjxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBDbWFjc01vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2Vycm9yJyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IENtYWNzTW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnd2FybmluZycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaW1wbGVDb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlKTogQ21hY3NNb2RhbFJlZjxUPiB7XHJcbiAgICBjb25zdCBpY29uTWFwOiBJbmRleGFibGVPYmplY3QgPSB7XHJcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXHJcbiAgICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxyXG4gICAgICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXHJcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXHJcbiAgICB9O1xyXG4gICAgaWYgKCEoJ2ljb25UeXBlJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmljb25UeXBlID0gaWNvbk1hcFtjb25maXJtVHlwZV07XHJcbiAgICB9XHJcbiAgICBpZiAoISgnY2FuY2VsVGV4dCcgaW4gb3B0aW9ucykpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxyXG4gICAgICBvcHRpb25zLmNtYWNzQ2FuY2VsVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcclxuICB9XHJcbn1cclxuIl19