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
import { Pipe } from '@angular/core';
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
    NzFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOption' },] }
    ];
    return NzFilterOptionPipe;
}());
export { NzFilterOptionPipe };
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterGroupOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            function (g) {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }));
        }
    };
    NzFilterGroupOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
    ];
    return NzFilterGroupOptionPipe;
}());
export { NzFilterGroupOptionPipe };
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBEO0lBQUE7SUFjQSxDQUFDOzs7Ozs7OztJQVpDLHNDQUFTOzs7Ozs7O0lBQVQsVUFDRSxPQUErQixFQUMvQixXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBMEIsQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7O2dCQWJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUFjaEMseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxrQkFBa0I7QUFlL0I7SUFBQTtJQWdCQSxDQUFDOzs7Ozs7OztJQWRDLDJDQUFTOzs7Ozs7O0lBQVQsVUFDRSxNQUFtQyxFQUNuQyxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsTUFBTSxFQUErQixDQUFDLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQztnQkFDckQsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztZQUMzRSxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBZkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFOztJQWdCckMsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLHVCQUF1Qjs7Ozs7O0FBaUJwQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsV0FBbUIsRUFBRSxNQUE0QjtJQUNuRixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDN0U7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBURmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpID0+IGJvb2xlYW47XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlck9wdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIE56RmlsdGVyT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShcclxuICAgIG9wdGlvbnM6IENtYWNzT3B0aW9uQ29tcG9uZW50W10sXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxyXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXHJcbiAgKTogQ21hY3NPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBDbWFjc09wdGlvbkNvbXBvbmVudFtdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyR3JvdXBPcHRpb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBOekZpbHRlckdyb3VwT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShcclxuICAgIGdyb3VwczogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbixcclxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxyXG4gICk6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSB7XHJcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gZ3JvdXBzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChncm91cHMgYXMgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdKS5maWx0ZXIoZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGcubGlzdE9mTnpPcHRpb25Db21wb25lbnQuc29tZShvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlOiBzdHJpbmcsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcclxuICBpZiAob3B0aW9uICYmIG9wdGlvbi5uekxhYmVsKSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19