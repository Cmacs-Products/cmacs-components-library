/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
var /**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
CmacsModalRef = /** @class */ (function () {
    function CmacsModalRef() {
    }
    return CmacsModalRef;
}());
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
export { CmacsModalRef };
if (false) {
    /** @type {?} */
    CmacsModalRef.prototype.afterOpen;
    /** @type {?} */
    CmacsModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    CmacsModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    CmacsModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    CmacsModalRef.prototype.getInstance = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7SUFBQTtJQW1DQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7Ozs7Ozs7OztJQWxDQyxrQ0FBcUM7O0lBQ3JDLG1DQUFtQzs7Ozs7SUFFbkMsK0NBQXNCOzs7Ozs7SUFDdEIsc0RBQWlDOzs7Ozs7SUFDakMsd0RBQW1DOzs7Ozs7SUFLbkMsb0RBQTJCOzs7OztJQUMzQix3REFBK0I7Ozs7Ozs7SUFZL0IsOERBQWtDOzs7Ozs7SUFLbEMscURBQW1DOzs7Ozs7SUFLbkMsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtDbWFjc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL2NtYWNzLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQVBJIGNsYXNzIHRoYXQgcHVibGljIHRvIHVzZXJzIHRvIGhhbmRsZSB0aGUgbW9kYWwgaW5zdGFuY2UuXHJcbiAqIE56TW9kYWxSZWYgaXMgYWltIHRvIGF2b2lkIGFjY2Vzc2luZyB0byB0aGUgbW9kYWwgaW5zdGFuY2UgZGlyZWN0bHkgYnkgdXNlcnMuXHJcbiAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbWFjc01vZGFsUmVmPFQgPSBhbnksIFIgPSBhbnk+IHtcclxuICBhYnN0cmFjdCBhZnRlck9wZW46IE9ic2VydmFibGU8dm9pZD47XHJcbiAgYWJzdHJhY3QgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcclxuXHJcbiAgYWJzdHJhY3Qgb3BlbigpOiB2b2lkO1xyXG4gIGFic3RyYWN0IGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkO1xyXG4gIGFic3RyYWN0IGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdGhlIG56T25Pay9uek9uQ2FuY2VsIGJ5IG1hbnVhbFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHRyaWdnZXJPaygpOiB2b2lkO1xyXG4gIGFic3RyYWN0IHRyaWdnZXJDYW5jZWwoKTogdm9pZDtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogUmV0dXJuIHRoZSBDb21wb25lbnRSZWYgb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcclxuICAvLyAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcclxuICAvLyAgKi9cclxuICAvLyBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjx7fT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XHJcbiAgICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUO1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGRvbSBlbGVtZW50IG9mIHRoaXMgTW9kYWxcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBNb2RhbCBpdHNlbGZcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRJbnN0YW5jZSgpOiBDbWFjc01vZGFsQ29tcG9uZW50O1xyXG59XHJcbiJdfQ==