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
export class CmacsModalRef {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQSxNQUFNLE9BQWdCLGFBQWE7Q0FtQ2xDOzs7SUFsQ0Msa0NBQXFDOztJQUNyQyxtQ0FBbUM7Ozs7O0lBRW5DLCtDQUFzQjs7Ozs7O0lBQ3RCLHNEQUFpQzs7Ozs7O0lBQ2pDLHdEQUFtQzs7Ozs7O0lBS25DLG9EQUEyQjs7Ozs7SUFDM0Isd0RBQStCOzs7Ozs7O0lBWS9CLDhEQUFrQzs7Ozs7O0lBS2xDLHFEQUFtQzs7Ozs7O0lBS25DLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7Q21hY3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEFQSSBjbGFzcyB0aGF0IHB1YmxpYyB0byB1c2VycyB0byBoYW5kbGUgdGhlIG1vZGFsIGluc3RhbmNlLlxyXG4gKiBOek1vZGFsUmVmIGlzIGFpbSB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gdGhlIG1vZGFsIGluc3RhbmNlIGRpcmVjdGx5IGJ5IHVzZXJzLlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21hY3NNb2RhbFJlZjxUID0gYW55LCBSID0gYW55PiB7XHJcbiAgYWJzdHJhY3QgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gIGFic3RyYWN0IGFmdGVyQ2xvc2U6IE9ic2VydmFibGU8Uj47XHJcblxyXG4gIGFic3RyYWN0IG9wZW4oKTogdm9pZDtcclxuICBhYnN0cmFjdCBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcclxuICBhYnN0cmFjdCBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHRoZSBuek9uT2svbnpPbkNhbmNlbCBieSBtYW51YWxcclxuICAgKi9cclxuICBhYnN0cmFjdCB0cmlnZ2VyT2soKTogdm9pZDtcclxuICBhYnN0cmFjdCB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQ7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIFJldHVybiB0aGUgQ29tcG9uZW50UmVmIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XHJcbiAgLy8gICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXHJcbiAgLy8gICovXHJcbiAgLy8gYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8e30+O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBvZiBuekNvbnRlbnQgd2hlbiBzcGVjaWZ5IG56Q29udGVudCBhcyBhIENvbXBvbmVudFxyXG4gICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnQoKTogVDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkb20gZWxlbWVudCBvZiB0aGlzIE1vZGFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgTW9kYWwgaXRzZWxmXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgZ2V0SW5zdGFuY2UoKTogQ21hY3NNb2RhbENvbXBvbmVudDtcclxufVxyXG4iXX0=