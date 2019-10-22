/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { CmacsMessageContainerComponent } from './cmacs-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class CmacsMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} _idPrefix
     */
    constructor(overlay, containerClass, injector, cfr, appRef, _idPrefix = '') {
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
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return this._idPrefix + globalCounter++;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    createContainer() {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
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
export class CmacsMessageService extends CmacsMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, CmacsMessageContainerComponent, injector, cfr, appRef, 'message-');
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
CmacsMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CmacsMessageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ CmacsMessageService.ngInjectableDef = i0.defineInjectable({ factory: function CmacsMessageService_Factory() { return new CmacsMessageService(i0.inject(i1.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: CmacsMessageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZXNzYWdlL2NtYWNzLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixRQUFRLEVBR1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7SUFHakYsYUFBYSxHQUFHLENBQUM7Ozs7QUFFckIsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7O0lBT2xDLFlBQ1UsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsWUFBb0IsRUFBRTtRQUx0QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFFOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBa0I7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CLEVB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LEVBQUUsT0FBaUM7UUFDNUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUNKLElBQW1FLEVBQ25FLE9BQW1DLEVBQ25DLE9BQWlDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbEZRLE9BQU87WUFNZCxRQUFRO1lBSFIsd0JBQXdCO1lBRHhCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbmplY3RvcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lc3NhZ2VDb25maWcgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc01lc3NhZ2VEYXRhLCBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkLCBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vY21hY3MtbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5sZXQgZ2xvYmFsQ291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgQ29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgTWVzc2FnZURhdGEsXHJcbiAgTWVzc2FnZUNvbmZpZyBleHRlbmRzIENtYWNzTWVzc2FnZUNvbmZpZ1xyXG4+IHtcclxuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJDbGFzczogVHlwZTxDb250YWluZXJDbGFzcz4sXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9pZFByZWZpeDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUobWVzc2FnZUlkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZUlkKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZUFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlRGF0YSwgb3B0aW9ucz86IENtYWNzTWVzc2FnZURhdGFPcHRpb25zKTogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkID0ge1xyXG4gICAgICAuLi4obWVzc2FnZSBhcyBDbWFjc01lc3NhZ2VEYXRhKSxcclxuICAgICAgLi4ue1xyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBtZXNzYWdlSWQ6IHRoaXMuX2dlbmVyYXRlTWVzc2FnZUlkKCksXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmNyZWF0ZU1lc3NhZ2UocmVzdWx0TWVzc2FnZSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdE1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBjb25maWcoY29uZmlnOiBNZXNzYWdlQ29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlTWVzc2FnZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faWRQcmVmaXggKyBnbG9iYWxDb3VudGVyKys7XHJcbiAgfVxyXG5cclxuICAvLyBNYW51YWxseSBjcmVhdGluZyBjb250YWluZXIgZm9yIG92ZXJsYXkgdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3IsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzM5MVxyXG4gIC8vIE5PVEU6IHdlIG5ldmVyIGNsZWFuIHVwIHRoZSBjb250YWluZXIgY29tcG9uZW50IGFuZCBpdCdzIG92ZXJsYXkgcmVzb3VyY2VzLCBpZiB3ZSBzaG91bGQsIHdlIG5lZWQgdG8gZG8gaXQgYnkgb3VyIG93biBjb2Rlcy5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcigpOiBDb250YWluZXJDbGFzcyB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb250YWluZXJDbGFzcyk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTsgLy8gVXNlIHJvb3QgaW5qZWN0b3JcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7IC8vIEltbWVkaWF0ZWx5IGNoYW5nZSBkZXRlY3Rpb24gdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3JcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTsgLy8gTG9hZCB2aWV3IGludG8gYXBwIHJvb3RcclxuICAgIGNvbnN0IG92ZXJsYXlQYW5lID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnOyAvLyBQYXRjaGluZzogYXNzaWduIHRoZSBzYW1lIHpJbmRleCBvZiBhbnQtbWVzc2FnZSB0byBpdCdzIHBhcmVudCBvdmVybGF5IHBhbmVsLCB0byB0aGUgYW50LW1lc3NhZ2UncyB6aW5kZXggd29yay5cclxuICAgIG92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPHt9Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlU2VydmljZSBleHRlbmRzIENtYWNzTWVzc2FnZUJhc2VTZXJ2aWNlPFxyXG4gIENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBDbWFjc01lc3NhZ2VEYXRhLFxyXG4gIENtYWNzTWVzc2FnZUNvbmZpZ1xyXG4+IHtcclxuICBjb25zdHJ1Y3RvcihvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IsIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XHJcbiAgICBzdXBlcihvdmVybGF5LCBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ21lc3NhZ2UtJyk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG9ydGN1dCBtZXRob2RzXHJcbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IENtYWNzTWVzc2FnZURhdGFPcHRpb25zKTogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyk6IENtYWNzTWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBpbmZvKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMpOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnbG9hZGluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoXHJcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnIHwgc3RyaW5nLFxyXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sXHJcbiAgICBvcHRpb25zPzogQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnNcclxuICApOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=