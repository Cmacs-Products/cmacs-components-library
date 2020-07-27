/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var ExcelService = /** @class */ (function () {
    function ExcelService() {
        this._exportCompleted = new Subject();
        this.exportCompleted = this._exportCompleted.asObservable();
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
        this._exportCompleted.next(true);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExcelService.prototype._exportCompleted;
    /** @type {?} */
    ExcelService.prototype.exportCompleted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRS9CO0lBUUU7UUFIUSxxQkFBZ0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUc5RCxDQUFDOzs7OztJQUVNLDZCQUFnQjs7OztJQUF2QixVQUF3QixhQUFxQjtRQUMzQyxPQUFVLGFBQWEsVUFBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVNLHdDQUFpQjs7Ozs7SUFBeEIsVUFBeUIsSUFBVyxFQUFFLGFBQXFCOztZQUNuRCxTQUFTLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7WUFDMUQsUUFBUSxHQUFrQixFQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQztRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFORDtDQXlCQyxBQXJCRCxJQXFCQztTQWxCWSxZQUFZOzs7Ozs7SUFFdkIsd0NBQTREOztJQUM1RCx1Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9leHBvcnRDb21wbGV0ZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgZXhwb3J0Q29tcGxldGVkID0gdGhpcy5fZXhwb3J0Q29tcGxldGVkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7ZXhjZWxGaWxlTmFtZX0ueGxzeGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbEZpbGUoanNvbjogYW55W10sIGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgd29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChqc29uKTtcclxuICAgIGNvbnN0IHdvcmtib29rOiBYTFNYLldvcmtCb29rID0ge1NoZWV0czogeydkYXRhJzogd29ya3NoZWV0fSwgU2hlZXROYW1lczogWydkYXRhJ119O1xyXG4gICAgWExTWC53cml0ZUZpbGUod29ya2Jvb2ssIEV4Y2VsU2VydmljZS50b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWUpKTtcclxuICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=