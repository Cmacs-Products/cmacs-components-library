export declare class ExcelService {
    private _exportCompleted;
    exportCompleted: import("rxjs").Observable<any>;
    constructor();
    static toExportFileName(excelFileName: string): string;
    exportAsExcelFile(json: any[], excelFileName: string): void;
}
