/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core';
import { CmacsMessageContainerComponent } from './cmacs-message-container.component';
export class CmacsMessageComponent {
    // Time to live.
    /**
     * @param {?} _messageContainer
     * @param {?} cdr
     */
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // `CmacsMessageContainer` does its job so all properties cannot be undefined.
        this._options = (/** @type {?} */ (this.message.options));
        if (this._options.animate) {
            this.message.state = 'enter';
        }
        this._autoErase = this._options.duration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.pauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.pauseOnHover) {
            this._startEraseTimeout();
        }
    }
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    _destroy(userAction = false) {
        if (this._options.animate) {
            this.message.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            () => this._messageContainer.removeMessage(this.message.messageId, userAction)), 200);
        }
        else {
            this._messageContainer.removeMessage(this.message.messageId, userAction);
        }
    }
    /**
     * @return {?}
     */
    closeMessage() {
        this._destroy();
    }
    /**
     * @private
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.duration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @private
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            () => this._destroy()), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
CmacsMessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-message',
                exportAs: 'cmacsMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: "<div class=\"ant-message-notice\"\r\n  [@moveUpMotion]=\"message.state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div class=\"ant-message-notice-content\" [style.width.px]=\"message.options && message.options.width ? message.options.width : 'inherit'\" [ngClass]=\"'ant-message-' + message.type\">\r\n    <div class=\"ant-message-custom-content\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"message.content\">\r\n        <span [innerHTML]=\"message.content\"></span>\r\n      </ng-container>\r\n      <i (click)=\"closeMessage()\" class=\"cmacs-closable-message\" *ngIf=\"message.options && message.options.closable\" nz-icon [type]=\"'close'\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".ant-message-success{background-color:#00ce7d;border-color:#00ce7d}.ant-message-info{background-color:#009fe3;border-color:#009fe3}.ant-message-warning{background-color:#ffc634;border-color:#ffc634}.ant-message-error{background-color:#f6503c;border-color:#f6503c}.ant-message-custom-content{font-family:Roboto-Regular;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff;text-align:left}.cmacs-closable-message{color:#fff!important;font-size:12px!important;float:right!important;margin-right:-5px!important}.cmacs-closable-message:hover{cursor:pointer}"]
            }] }
];
/** @nocollapse */
CmacsMessageComponent.ctorParameters = () => [
    { type: CmacsMessageContainerComponent },
    { type: ChangeDetectorRef }
];
CmacsMessageComponent.propDecorators = {
    message: [{ type: Input }],
    index: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsMessageComponent.prototype.message;
    /** @type {?} */
    CmacsMessageComponent.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    CmacsMessageComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageComponent.prototype._autoErase;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageComponent.prototype._eraseTimer;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageComponent.prototype._eraseTimingStart;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageComponent.prototype._eraseTTL;
    /**
     * @type {?}
     * @private
     */
    CmacsMessageComponent.prototype._messageContainer;
    /**
     * @type {?}
     * @protected
     */
    CmacsMessageComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvY21hY3MtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQWFyRixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFXaEMsWUFBb0IsaUJBQWlELEVBQVksR0FBc0I7UUFBbkYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFnQztRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQUovRixnQkFBVyxHQUFrQixJQUFJLENBQUM7SUFJZ0UsQ0FBQzs7OztJQUUzRyxRQUFRO1FBQ04sOEVBQThFO1FBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQXFDLENBQUM7UUFFMUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFD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ekMsc0NBQXVCOzs7OztJQUV2Qix5Q0FBc0Q7Ozs7O0lBRXRELDJDQUE0Qjs7Ozs7SUFDNUIsNENBQTBDOzs7OztJQUMxQyxrREFBa0M7Ozs7O0lBQ2xDLDBDQUEwQjs7Ozs7SUFFZCxrREFBeUQ7Ozs7O0lBQUUsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbW92ZVVwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NNZXNzYWdlRGF0YUZpbGxlZCwgQ21hY3NNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL2NtYWNzLW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1lc3NhZ2UnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNZXNzYWdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbbW92ZVVwTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBtZXNzYWdlOiBDbWFjc01lc3NhZ2VEYXRhRmlsbGVkO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBfb3B0aW9uczogUmVxdWlyZWQ8Q21hY3NNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgdG8gc2V0IGEgdGltZW91dCB0byBkZXN0cm95IGl0c2VsZi5cclxuICBwcml2YXRlIF9lcmFzZVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9lcmFzZVRpbWluZ1N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlLlxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlQ29udGFpbmVyOiBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGBDbWFjc01lc3NhZ2VDb250YWluZXJgIGRvZXMgaXRzIGpvYiBzbyBhbGwgcHJvcGVydGllcyBjYW5ub3QgYmUgdW5kZWZpbmVkLlxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubWVzc2FnZS5vcHRpb25zIGFzIFJlcXVpcmVkPENtYWNzTWVzc2FnZURhdGFPcHRpb25zPjtcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5kdXJhdGlvbiA+IDA7XHJcblxyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xyXG4gICAgICB0aGlzLl9pbml0RXJhc2UoKTtcclxuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xyXG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLnBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIHNlbGZcclxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3kodXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5zdGF0ZSA9ICdsZWF2ZSc7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5tZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbiksIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5tZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RXJhc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9lcmFzZVRUTCA9IHRoaXMuX29wdGlvbnMuZHVyYXRpb247XHJcbiAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVRUTCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5fZXJhc2VUVEwgLT0gRGF0ZS5ub3coKSAtIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGVzdHJveSgpLCB0aGlzLl9lcmFzZVRUTCk7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZXJhc2VUaW1lcik7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=