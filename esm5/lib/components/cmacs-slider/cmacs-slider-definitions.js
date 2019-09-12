/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVUEsNkJBR0M7OztJQUZDLHdCQUFlOztJQUNmLHdCQUFjOztBQUdoQjtJQUFBO0lBRUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7O0FBS0Qsa0NBSUM7OztJQUhDLDZCQUFjOztJQUNkLDhCQUFlOztJQUNmLDhCQUFhOzs7Ozs7QUFNZixtQ0FJQzs7O0lBSEMsK0JBQWdCOztJQUNoQiw4QkFBYzs7SUFDZCw4QkFBZTs7Ozs7O0FBTWpCLG1DQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDhCQUFlOzs7OztBQU9qQixtQ0FJQzs7O0lBSEMsK0JBQXNCOztJQUN0Qiw4QkFBcUI7O0lBQ3JCLCtCQUFnQjs7Ozs7O0FBR2xCLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBa0I7SUFDOUMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBWTtJQUMxQyxPQUFPLE1BQU0sWUFBWSxNQUFNLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwgTWFya09iajtcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrT2JqIHtcbiAgc3R5bGU/OiBvYmplY3Q7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrcyB7XG4gIFtrZXk6IG51bWJlcl06IE1hcms7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VkIHN0ZXBzIHRoYXQgd291bGQgYmUgcGFzc2VkIHRvIHN1YiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTWFyayB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBjb25maWc6IE1hcms7XG59XG5cbi8qKlxuICogTWFya3MgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRNYXJrIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuLyoqXG4gKiBTdGVwcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFN0ZXAgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHN0eWxlPzogb2JqZWN0O1xufVxuXG5leHBvcnQgdHlwZSBTbGlkZXJTaG93VG9vbHRpcCA9ICdhbHdheXMnIHwgJ25ldmVyJyB8ICdkZWZhdWx0JztcblxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJIYW5kbGVyIHtcbiAgb2Zmc2V0OiBudW1iZXIgfCBudWxsO1xuICB2YWx1ZTogbnVtYmVyIHwgbnVsbDtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZUFSYW5nZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiB2YWx1ZSBpcyBudW1iZXJbXSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29uZmlnQU9iamVjdChjb25maWc6IE1hcmspOiBjb25maWcgaXMgTWFya09iaiB7XG4gIHJldHVybiBjb25maWcgaW5zdGFuY2VvZiBPYmplY3Q7XG59XG4iXX0=