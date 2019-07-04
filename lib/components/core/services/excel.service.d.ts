export declare class ExcelService {
    constructor();
    static toExportFileName(excelFileName: string): string;
    exportAsExcelFile(json: any[], excelFileName: string): void;
}
