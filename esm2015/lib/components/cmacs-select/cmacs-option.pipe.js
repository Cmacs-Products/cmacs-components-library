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
export class NzFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
        }
    }
}
NzFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOption' },] }
];
export class NzFilterGroupOptionPipe {
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            g => {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => filterOption(searchValue, o)));
            }));
        }
    }
}
NzFilterGroupOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBT3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBQzdCLFNBQVMsQ0FDUCxPQUErQixFQUMvQixXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBMEIsQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7OztZQWJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFpQmhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBQ2xDLFNBQVMsQ0FDUCxNQUFtQyxFQUNuQyxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsTUFBTSxFQUErQixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4RCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7Ozs7Ozs7QUFrQnJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQTRCO0lBQ25GLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uJyB9KVxyXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgb3B0aW9uczogQ21hY3NPcHRpb25Db21wb25lbnRbXSxcclxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXHJcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXHJcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cclxuICApOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIENtYWNzT3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJHcm91cE9wdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIE56RmlsdGVyR3JvdXBPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgZ3JvdXBzOiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W10sXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxyXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXHJcbiAgKTogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdIHtcclxuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBncm91cHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcclxuICAgICAgICByZXR1cm4gZy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xyXG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLm56TGFiZWwpIHtcclxuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=