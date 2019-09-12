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
export class Marks {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVUEsNkJBR0M7OztJQUZDLHdCQUFlOztJQUNmLHdCQUFjOztBQUdoQixNQUFNLE9BQU8sS0FBSztDQUVqQjs7Ozs7QUFLRCxrQ0FJQzs7O0lBSEMsNkJBQWM7O0lBQ2QsOEJBQWU7O0lBQ2YsOEJBQWE7Ozs7OztBQU1mLG1DQUlDOzs7SUFIQywrQkFBZ0I7O0lBQ2hCLDhCQUFjOztJQUNkLDhCQUFlOzs7Ozs7QUFNakIsbUNBR0M7OztJQUZDLCtCQUFnQjs7SUFDaEIsOEJBQWU7Ozs7O0FBT2pCLG1DQUlDOzs7SUFIQywrQkFBc0I7O0lBQ3RCLDhCQUFxQjs7SUFDckIsK0JBQWdCOzs7Ozs7QUFHbEIsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFrQjtJQUM5QyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFZO0lBQzFDLE9BQU8sTUFBTSxZQUFZLE1BQU0sQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCBNYXJrT2JqO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtPYmoge1xuICBzdHlsZT86IG9iamVjdDtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcbiAgW2tleTogbnVtYmVyXTogTWFyaztcbn1cblxuLyoqXG4gKiBQcm9jZXNzZWQgc3RlcHMgdGhhdCB3b3VsZCBiZSBwYXNzZWQgdG8gc3ViIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWRNYXJrIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIGNvbmZpZzogTWFyaztcbn1cblxuLyoqXG4gKiBNYXJrcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZE1hcmsgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN0eWxlPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFN0ZXBzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkU3RlcCBleHRlbmRzIEV4dGVuZGVkTWFyayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbmV4cG9ydCB0eXBlIFNsaWRlclNob3dUb29sdGlwID0gJ2Fsd2F5cycgfCAnbmV2ZXInIHwgJ2RlZmF1bHQnO1xuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlcltdIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlckhhbmRsZXIge1xuICBvZmZzZXQ6IG51bWJlciB8IG51bGw7XG4gIHZhbHVlOiBudW1iZXIgfCBudWxsO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlQVJhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb25maWdBT2JqZWN0KGNvbmZpZzogTWFyayk6IGNvbmZpZyBpcyBNYXJrT2JqIHtcbiAgcmV0dXJuIGNvbmZpZyBpbnN0YW5jZW9mIE9iamVjdDtcbn1cbiJdfQ==