/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as i0 from "@angular/core";
export class ExcelService {
    constructor() {
    }
    /**
     * @param {?} excelFileName
     * @return {?}
     */
    static toExportFileName(excelFileName) {
        return `${excelFileName}.xlsx`;
    }
    /**
     * @param {?} json
     * @param {?} excelFileName
     * @return {?}
     */
    exportAsExcelFile(json, excelFileName) {
        /** @type {?} */
        const worksheet = XLSX.utils.json_to_sheet(json);
        /** @type {?} */
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        XLSX.writeFile(workbook, ExcelService.toExportFileName(excelFileName));
    }
}
ExcelService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExcelService.ctorParameters = () => [];
/** @nocollapse */ ExcelService.ngInjectableDef = i0.defineInjectable({ factory: function ExcelService_Factory() { return new ExcelService(); }, token: ExcelService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDOztBQUs3QixNQUFNLE9BQU8sWUFBWTtJQUV2QjtJQUNBLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQXFCO1FBQzNDLE9BQU8sR0FBRyxhQUFhLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxJQUFXLEVBQUUsYUFBcUI7O2NBQ25ELFNBQVMsR0FBbUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztjQUMxRCxRQUFRLEdBQWtCLEVBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQ25GLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OztZQWhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9FeHBvcnRGaWxlTmFtZShleGNlbEZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2V4Y2VsRmlsZU5hbWV9Lnhsc3hgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4cG9ydEFzRXhjZWxGaWxlKGpzb246IGFueVtdLCBleGNlbEZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoanNvbik7XHJcbiAgICBjb25zdCB3b3JrYm9vazogWExTWC5Xb3JrQm9vayA9IHtTaGVldHM6IHsnZGF0YSc6IHdvcmtzaGVldH0sIFNoZWV0TmFtZXM6IFsnZGF0YSddfTtcclxuICAgIFhMU1gud3JpdGVGaWxlKHdvcmtib29rLCBFeGNlbFNlcnZpY2UudG9FeHBvcnRGaWxlTmFtZShleGNlbEZpbGVOYW1lKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==