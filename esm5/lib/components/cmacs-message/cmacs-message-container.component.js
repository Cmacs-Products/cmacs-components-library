/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { CMACS_MESSAGE_CONFIG, CMACS_MESSAGE_DEFAULT_CONFIG } from './cmacs-message-config';
var CmacsMessageContainerComponent = /** @class */ (function () {
    function CmacsMessageContainerComponent(cdr, defaultConfig, config) {
        this.cdr = cdr;
        this.messages = [];
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CmacsMessageContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = tslib_1.__assign({}, this.config, config);
        this.top = toCssPixel(this.config.top);
        this.cdr.markForCheck();
    };
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    CmacsMessageContainerComponent.prototype.createMessage = /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.maxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    };
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    CmacsMessageContainerComponent.prototype.removeMessage = /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    function (messageId, userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                _this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    };
    /**
     * Remove all messages.
     */
    /**
     * Remove all messages.
     * @return {?}
     */
    CmacsMessageContainerComponent.prototype.removeMessageAll = /**
     * Remove all messages.
     * @return {?}
     */
    function () {
        this.messages = [];
        this.cdr.detectChanges();
    };
    /**
     * Merge default options and custom message options
     * @param options
     */
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    CmacsMessageContainerComponent.prototype._mergeMessageOptions = /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            duration: this.config.duration,
            animate: this.config.animate,
            pauseOnHover: this.config.pauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    CmacsMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-message-container',
                    exportAs: 'cmacsMessageContainer',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\" [style.top]=\"top\">\r\n  <cmacs-message *ngFor=\"let message of messages; let i = index\" [message]=\"message\" [index]=\"i\"></cmacs-message>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    CmacsMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CMACS_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CMACS_MESSAGE_CONFIG,] }] }
    ]; };
    return CmacsMessageContainerComponent;
}());
export { CmacsMessageContainerComponent };
if (false) {
    /** @type {?} */
    CmacsMessageContainerComponent.prototype.messages;
    /** @type {?} */
    CmacsMessageContainerComponent.prototype.config;
    /** @type {?} */
    CmacsMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    CmacsMessageContainerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZXNzYWdlL2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRCxPQUFPLEVBQXNCLG9CQUFvQixFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHaEg7SUFhRSx3Q0FDWSxHQUFzQixFQUNrQixhQUFpQyxFQUN6QyxNQUEwQjtRQUYxRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxsQyxhQUFRLEdBQTZCLEVBQUUsQ0FBQztRQVN0QyxJQUFJLENBQUMsU0FBUyxzQkFBTSxhQUFhLEVBQUssTUFBTSxFQUFHLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxrREFBUzs7OztJQUFULFVBQVUsTUFBMEI7UUFDbEMsSUFBSSxDQUFDLE1BQU0sd0JBQVEsSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsc0RBQWE7Ozs7O0lBQWIsVUFBYyxPQUErQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHNEQUFhOzs7Ozs7SUFBYixVQUFjLFNBQWlCLEVBQUUsVUFBMkI7UUFBNUQsaUJBV0M7UUFYZ0MsMkJBQUEsRUFBQSxrQkFBMkI7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlEQUFnQjs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNPLDZEQUFvQjs7Ozs7O0lBQTlCLFVBQStCLE9BQWlDOztZQUN4RCxjQUFjLEdBQTRCO1lBQzlDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUM1QixZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1NBQ3ZDO1FBQ0QsNEJBQVksY0FBYyxFQUFLLE9BQU8sRUFBRztJQUMzQyxDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsb01BQXVEO2lCQUN4RDs7OztnQkFwQkMsaUJBQWlCO2dEQTRCZCxRQUFRLFlBQUksTUFBTSxTQUFDLDRCQUE0QjtnREFDL0MsUUFBUSxZQUFJLE1BQU0sU0FBQyxvQkFBb0I7O0lBK0Q1QyxxQ0FBQztDQUFBLEFBL0VELElBK0VDO1NBdkVZLDhCQUE4Qjs7O0lBQ3pDLGtEQUF3Qzs7SUFDeEMsZ0RBQXFDOztJQUNyQyw2Q0FBbUI7Ozs7O0lBR2pCLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzTWVzc2FnZUNvbmZpZywgQ01BQ1NfTUVTU0FHRV9DT05GSUcsIENNQUNTX01FU1NBR0VfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCwgQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVzc2FnZUNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBtZXNzYWdlczogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XHJcbiAgY29uZmlnOiBSZXF1aXJlZDxDbWFjc01lc3NhZ2VDb25maWc+O1xyXG4gIHRvcDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ01BQ1NfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogQ21hY3NNZXNzYWdlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDTUFDU19NRVNTQUdFX0NPTkZJRykgY29uZmlnOiBDbWFjc01lc3NhZ2VDb25maWdcclxuICApIHtcclxuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlnKGNvbmZpZzogQ21hY3NNZXNzYWdlQ29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9O1xyXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLnRvcCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBhcnNlZCBtZXNzYWdlIGNvbmZpZ3VyYXRpb24uXHJcbiAgICovXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubWF4U3RhY2spIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XHJcbiAgICBtZXNzYWdlLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgbWVzc2FnZSBieSBgbWVzc2FnZUlkYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZUlkIElkIG9mIHRoZSBtZXNzYWdlIHRvIGJlIHJlbW92ZWQuXHJcbiAgICogQHBhcmFtIHVzZXJBY3Rpb24gV2hldGhlciB0aGlzIGlzIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcsIHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcy5zb21lKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlSWQgPT09IG1lc3NhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5uZXh0KHVzZXJBY3Rpb24pO1xyXG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEuY29tcGxldGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgbWVzc2FnZXMuXHJcbiAgICovXHJcbiAgcmVtb3ZlTWVzc2FnZUFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgY3VzdG9tIG1lc3NhZ2Ugb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM/OiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyk6IENtYWNzTWVzc2FnZURhdGFPcHRpb25zIHtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcclxuICAgICAgZHVyYXRpb246IHRoaXMuY29uZmlnLmR1cmF0aW9uLFxyXG4gICAgICBhbmltYXRlOiB0aGlzLmNvbmZpZy5hbmltYXRlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLnBhdXNlT25Ib3ZlclxyXG4gICAgfTtcclxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==