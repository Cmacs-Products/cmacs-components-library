/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { CmacsMessageContainerComponent } from './cmacs-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/** @type {?} */
var globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
var /**
 * @template ContainerClass, MessageData, MessageConfig
 */
CmacsMessageBaseService = /** @class */ (function () {
    function CmacsMessageBaseService(overlay, containerClass, injector, cfr, appRef, _idPrefix) {
        if (_idPrefix === void 0) { _idPrefix = ''; }
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this._idPrefix = _idPrefix;
        this._container = this.createContainer();
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    CmacsMessageBaseService.prototype.remove = /**
     * @param {?=} messageId
     * @return {?}
     */
    function (messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageBaseService.prototype.createMessage = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        /** @type {?} */
        var resultMessage = tslib_1.__assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options: options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    CmacsMessageBaseService.prototype.config = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._container.setConfig(config);
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsMessageBaseService.prototype._generateMessageId = /**
     * @protected
     * @return {?}
     */
    function () {
        return this._idPrefix + globalCounter++;
    };
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    CmacsMessageBaseService.prototype.createContainer = 
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        var componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        var overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    };
    return CmacsMessageBaseService;
}());
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export { CmacsMessageBaseService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmacsMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageBaseService.prototype._idPrefix;
}
var CmacsMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsMessageService, _super);
    function CmacsMessageService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, CmacsMessageContainerComponent, injector, cfr, appRef, 'message-') || this;
    }
    // Shortcut methods
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.success = 
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.error = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.info = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.warning = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.loading = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'loading', content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageService.prototype.create = /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    CmacsMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CmacsMessageService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ CmacsMessageService.ngInjectableDef = i0.defineInjectable({ factory: function CmacsMessageService_Factory() { return new CmacsMessageService(i0.inject(i1.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: CmacsMessageService, providedIn: "root" });
    return CmacsMessageService;
}(CmacsMessageBaseService));
export { CmacsMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZXNzYWdlL2NtYWNzLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUV4QixVQUFVLEVBQ1YsUUFBUSxFQUdULE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0lBR2pGLGFBQWEsR0FBRyxDQUFDOzs7O0FBRXJCOzs7O0lBT0UsaUNBQ1UsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsU0FBc0I7UUFBdEIsMEJBQUEsRUFBQSxjQUFzQjtRQUx0QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFFOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sU0FBa0I7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsK0NBQWE7Ozs7O0lB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SUFBUCxVQUFRLE9BQW1DLEVBQUUsT0FBaUM7UUFDNUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsT0FBbUMsRUFBRSxPQUFpQztRQUM1RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7OztJQUVELG9DQUFNOzs7Ozs7SUFBTixVQUNFLElBQW1FLEVBQ25FLE9BQW1DLEVBQ25DLE9BQWlDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbEZRLE9BQU87Z0JBTWQsUUFBUTtnQkFIUix3QkFBd0I7Z0JBRHhCLGNBQWM7Ozs4QkFGaEI7Q0F3SEMsQUF4Q0QsQ0FHeUMsdUJBQXVCLEdBcUMvRDtTQXJDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbmplY3RvcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lc3NhZ2VDb25maWcgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc01lc3NhZ2VEYXRhLCBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkLCBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vY21hY3MtbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5sZXQgZ2xvYmFsQ291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgQ29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgTWVzc2FnZURhdGEsXHJcbiAgTWVzc2FnZUNvbmZpZyBleHRlbmRzIENtYWNzTWVzc2FnZUNvbmZpZ1xyXG4+IHtcclxuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJDbGFzczogVHlwZTxDb250YWluZXJDbGFzcz4sXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9pZFByZWZpeDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUobWVzc2FnZUlkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZUlkKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZUFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlRGF0YSwgb3B0aW9ucz86IENtYWNzTWVzc2FnZURhdGFPcHRpb25zKTogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkID0ge1xyXG4gICAgICAuLi4obWVzc2FnZSBhcyBDbWFjc01lc3NhZ2VEYXRhKSxcclxuICAgICAgLi4ue1xyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBtZXNzYWdlSWQ6IHRoaXMuX2dlbmVyYXRlTWVzc2FnZUlkKCksXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmNyZWF0ZU1lc3NhZ2UocmVzdWx0TWVzc2FnZSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdE1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBjb25maWcoY29uZmlnOiBNZXNzYWdlQ29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlTWVzc2FnZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faWRQcmVmaXggKyBnbG9iYWxDb3VudGVyKys7XHJcbiAgfVxyXG5cclxuICAvLyBNYW51YWxseSBjcmVhdGluZyBjb250YWluZXIgZm9yIG92ZXJsYXkgdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3IsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzM5MVxyXG4gIC8vIE5PVEU6IHdlIG5ldmVyIGNsZWFuIHVwIHRoZSBjb250YWluZXIgY29tcG9uZW50IGFuZCBpdCdzIG92ZXJsYXkgcmVzb3VyY2VzLCBpZiB3ZSBzaG91bGQsIHdlIG5lZWQgdG8gZG8gaXQgYnkgb3VyIG93biBjb2Rlcy5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcigpOiBDb250YWluZXJDbGFzcyB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb250YWluZXJDbGFzcyk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTsgLy8gVXNlIHJvb3QgaW5qZWN0b3JcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7IC8vIEltbWVkaWF0ZWx5IGNoYW5nZSBkZXRlY3Rpb24gdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3JcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTsgLy8gTG9hZCB2aWV3IGludG8gYXBwIHJvb3RcclxuICAgIGNvbnN0IG92ZXJsYXlQYW5lID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnOyAvLyBQYXRjaGluZzogYXNzaWduIHRoZSBzYW1lIHpJbmRleCBvZiBhbnQtbWVzc2FnZSB0byBpdCdzIHBhcmVudCBvdmVybGF5IHBhbmVsLCB0byB0aGUgYW50LW1lc3NhZ2UncyB6aW5kZXggd29yay5cclxuICAgIG92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPHt9Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlU2VydmljZSBleHRlbmRzIENtYWNzTWVzc2FnZUJhc2VTZXJ2aWNlPFxyXG4gIENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBDbWFjc01lc3NhZ2VEYXRhLFxyXG4gIENtYWNzTWVzc2FnZUNvbmZpZ1xyXG4+IHtcclxuICBjb25zdHJ1Y3RvcihvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IsIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XHJcbiAgICBzdXBlcihvdmVybGF5LCBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ21lc3NhZ2UtJyk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG9ydGN1dCBtZXRob2RzXHJcbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IENtYWNzTWVzc2FnZURhdGFPcHRpb25zKTogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyk6IENtYWNzTWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBpbmZvKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnbG9hZGluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoXHJcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnIHwgc3RyaW5nLFxyXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sXHJcbiAgICBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnNcclxuICApOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=