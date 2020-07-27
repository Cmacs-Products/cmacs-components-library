/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ExcelService {
    constructor() {
        this._exportCompleted = new Subject();
        this.exportCompleted = this._exportCompleted.asObservable();
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
        this._exportCompleted.next(true);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExcelService.prototype._exportCompleted;
    /** @type {?} */
    ExcelService.prototype.exportCompleted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxZQUFZO0lBS3ZCO1FBSFEscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDckQsb0JBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHOUQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBcUI7UUFDM0MsT0FBTyxHQUFHLGFBQWEsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVNLGlCQUFpQixDQUFDLElBQVcsRUFBRSxhQUFxQjs7Y0FDbkQsU0FBUyxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQzFELFFBQVEsR0FBa0IsRUFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0Msd0NBQTREOztJQUM1RCx1Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9leHBvcnRDb21wbGV0ZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgZXhwb3J0Q29tcGxldGVkID0gdGhpcy5fZXhwb3J0Q29tcGxldGVkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7ZXhjZWxGaWxlTmFtZX0ueGxzeGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbEZpbGUoanNvbjogYW55W10sIGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgd29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChqc29uKTtcclxuICAgIGNvbnN0IHdvcmtib29rOiBYTFNYLldvcmtCb29rID0ge1NoZWV0czogeydkYXRhJzogd29ya3NoZWV0fSwgU2hlZXROYW1lczogWydkYXRhJ119O1xyXG4gICAgWExTWC53cml0ZUZpbGUod29ya2Jvb2ssIEV4Y2VsU2VydmljZS50b0V4cG9ydEZpbGVOYW1lKGV4Y2VsRmlsZU5hbWUpKTtcclxuICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=