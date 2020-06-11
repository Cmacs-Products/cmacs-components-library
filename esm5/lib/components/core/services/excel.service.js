/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as i0 from "@angular/core";
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    /**
     * @param {?} excelFileName
     * @return {?}
     */
    ExcelService.toExportFileName = /**
     * @param {?} excelFileName
     * @return {?}
     */
    function (excelFileName) {
        return excelFileName + ".xlsx";
    };
    /**
     * @param {?} json
     * @param {?} excelFileName
     * @return {?}
     */
    ExcelService.prototype.exportAsExcelFile = /**
     * @param {?} json
     * @param {?} excelFileName
     * @return {?}
     */
    function (json, excelFileName) {
        /** @type {?} */
        var worksheet = XLSX.utils.json_to_sheet(json);
        /** @type {?} */
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        XLSX.writeFile(workbook, ExcelService.toExportFileName(excelFileName));
    };
    ExcelService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExcelService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExcelService.ngInjectableDef = i0.defineInjectable({ factory: function ExcelService_Factory() { return new ExcelService(); }, token: ExcelService, providedIn: "root" });
    return ExcelService;
}());
export { ExcelService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDOztBQUU3QjtJQUtFO0lBQ0EsQ0FBQzs7Ozs7SUFFTSw2QkFBZ0I7Ozs7SUFBdkIsVUFBd0IsYUFBcUI7UUFDM0MsT0FBVSxhQUFhLFVBQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTSx3Q0FBaUI7Ozs7O0lBQXhCLFVBQXlCLElBQVcsRUFBRSxhQUFxQjs7WUFDbkQsU0FBUyxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O1lBQzFELFFBQVEsR0FBa0IsRUFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUxEO0NBb0JDLEFBakJELElBaUJDO1NBZFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7ZXhjZWxGaWxlTmFtZX0ueGxzeGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbEZpbGUoanNvbjogYW55W10sIGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgd29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChqc29uKTtcclxuICAgIGNvbnN0IHdvcmtib29rOiBYTFNYLldvcmtCb29rID0ge1NoZWV0czogeydkYXRhJzogd29ya3NoZWV0fSwgU2hlZXROYW1lczogWydkYXRhJ119O1xyXG4gICAgWExTWC53cml0ZUZpbGUod29ya2Jvb2ssIEV4Y2VsU2VydmljZS50b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWUpKTtcclxuICB9XHJcbn1cclxuIl19