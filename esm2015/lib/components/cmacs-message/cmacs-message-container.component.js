/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { CMACS_MESSAGE_CONFIG, CMACS_MESSAGE_DEFAULT_CONFIG } from './cmacs-message-config';
export class CmacsMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, defaultConfig, config) {
        this.cdr = cdr;
        this.messages = [];
        this.setConfig(Object.assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = Object.assign({}, this.config, config);
        this.top = toCssPixel(this.config.top);
        this.cdr.markForCheck();
    }
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    createMessage(message) {
        if (this.messages.length >= this.config.maxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    }
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    removeMessage(messageId, userAction = false) {
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        (message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    }
    /**
     * Remove all messages.
     * @return {?}
     */
    removeMessageAll() {
        this.messages = [];
        this.cdr.detectChanges();
    }
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    _mergeMessageOptions(options) {
        /** @type {?} */
        const defaultOptions = {
            duration: this.config.duration,
            animate: this.config.animate,
            pauseOnHover: this.config.pauseOnHover
        };
        return Object.assign({}, defaultOptions, options);
    }
}
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
CmacsMessageContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CMACS_MESSAGE_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CMACS_MESSAGE_CONFIG,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZXNzYWdlL2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBc0Isb0JBQW9CLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVdoSCxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7SUFLekMsWUFDWSxHQUFzQixFQUNrQixhQUFpQyxFQUN6QyxNQUEwQjtRQUYxRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxsQyxhQUFRLEdBQTZCLEVBQUUsQ0FBQztRQVN0QyxJQUFJLENBQUMsU0FBUyxtQkFBTSxhQUFhLEVBQUssTUFBTSxFQUFHLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBMEI7UUFDbEMsSUFBSSxDQUFDLE1BQU0scUJBQVEsSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBTUQsYUFBYSxDQUFDLE9BQStCO1FBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFPRCxhQUFhLENBQUMsU0FBaUIsRUFBRSxhQUFzQixLQUFLO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUtELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQU1TLG9CQUFvQixDQUFDLE9BQWlDOztjQUN4RCxjQUFjLEdBQTRCO1lBQzlDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUM1QixZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1NBQ3ZDO1FBQ0QseUJBQVksY0FBYyxFQUFLLE9BQU8sRUFBRztJQUMzQyxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsb01BQXVEO2FBQ3hEOzs7O1lBcEJDLGlCQUFpQjs0Q0E0QmQsUUFBUSxZQUFJLE1BQU0sU0FBQyw0QkFBNEI7NENBQy9DLFFBQVEsWUFBSSxNQUFNLFNBQUMsb0JBQW9COzs7O0lBUDFDLGtEQUF3Qzs7SUFDeEMsZ0RBQXFDOztJQUNyQyw2Q0FBbUI7Ozs7O0lBR2pCLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzTWVzc2FnZUNvbmZpZywgQ01BQ1NfTUVTU0FHRV9DT05GSUcsIENNQUNTX01FU1NBR0VfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCwgQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVzc2FnZUNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBtZXNzYWdlczogQ21hY3NNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XHJcbiAgY29uZmlnOiBSZXF1aXJlZDxDbWFjc01lc3NhZ2VDb25maWc+O1xyXG4gIHRvcDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ01BQ1NfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogQ21hY3NNZXNzYWdlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDTUFDU19NRVNTQUdFX0NPTkZJRykgY29uZmlnOiBDbWFjc01lc3NhZ2VDb25maWdcclxuICApIHtcclxuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlnKGNvbmZpZzogQ21hY3NNZXNzYWdlQ29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9O1xyXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLnRvcCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBhcnNlZCBtZXNzYWdlIGNvbmZpZ3VyYXRpb24uXHJcbiAgICovXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubWF4U3RhY2spIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XHJcbiAgICBtZXNzYWdlLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgbWVzc2FnZSBieSBgbWVzc2FnZUlkYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZUlkIElkIG9mIHRoZSBtZXNzYWdlIHRvIGJlIHJlbW92ZWQuXHJcbiAgICogQHBhcmFtIHVzZXJBY3Rpb24gV2hldGhlciB0aGlzIGlzIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcsIHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcy5zb21lKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlSWQgPT09IG1lc3NhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5uZXh0KHVzZXJBY3Rpb24pO1xyXG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEuY29tcGxldGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgbWVzc2FnZXMuXHJcbiAgICovXHJcbiAgcmVtb3ZlTWVzc2FnZUFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgY3VzdG9tIG1lc3NhZ2Ugb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM/OiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyk6IENtYWNzTWVzc2FnZURhdGFPcHRpb25zIHtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBDbWFjc01lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcclxuICAgICAgZHVyYXRpb246IHRoaXMuY29uZmlnLmR1cmF0aW9uLFxyXG4gICAgICBhbmltYXRlOiB0aGlzLmNvbmZpZy5hbmltYXRlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLnBhdXNlT25Ib3ZlclxyXG4gICAgfTtcclxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==