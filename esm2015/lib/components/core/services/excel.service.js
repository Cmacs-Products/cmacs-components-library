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
        return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDOztBQUs3QixNQUFNLE9BQU8sWUFBWTtJQUV2QjtJQUNBLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQXFCO1FBQzNDLE9BQU8sR0FBRyxhQUFhLFdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVNLGlCQUFpQixDQUFDLElBQVcsRUFBRSxhQUFxQjs7Y0FDbkQsU0FBUyxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQzFELFFBQVEsR0FBa0IsRUFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7ZXhjZWxGaWxlTmFtZX1fZXhwb3J0XyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9Lnhsc3hgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4cG9ydEFzRXhjZWxGaWxlKGpzb246IGFueVtdLCBleGNlbEZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoanNvbik7XHJcbiAgICBjb25zdCB3b3JrYm9vazogWExTWC5Xb3JrQm9vayA9IHtTaGVldHM6IHsnZGF0YSc6IHdvcmtzaGVldH0sIFNoZWV0TmFtZXM6IFsnZGF0YSddfTtcclxuICAgIFhMU1gud3JpdGVGaWxlKHdvcmtib29rLCBFeGNlbFNlcnZpY2UudG9FeHBvcnRGaWxlTmFtZShleGNlbEZpbGVOYW1lKSk7XHJcbiAgfVxyXG59Il19