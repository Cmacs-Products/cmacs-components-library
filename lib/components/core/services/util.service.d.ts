import 'moment/locale/en-ie';
import { ExportAsService } from 'ngx-export-as';
export declare class UtilService {
    private exportAsService;
    fileName: string;
    elemID: string;
    exportCompanyName: string;
    exportUserName: string;
    exportTitle: string;
    exportCompanyLogoUrl: string;
    exportTableCustomWidth: any;
    exportTableCustomHeight: any;
    constructor(exportAsService: ExportAsService);
    uuidv4(): string;
    exportTable(format: string, fileName: any, elemID: any, exportCompanyName?: string, exportUserName?: string, exportTitle?: string, exportCompanyLogoUrl?: string, exportTableCustomWidth?: any, exportTableCustomHeight?: any): void;
    initExportToPdf(imgData: any): void;
    saveImageToPdf(logoData: any, imgData: any): void;
    addFooters(doc: any, logo: any): void;
    setInlineStyles(targetElem: HTMLElement | SVGElement): void;
    getTableCapture(tables: any, format: any): void;
    imagesLoaded: number;
    combineTwoImages(img1: any, img2: any, format: any): void;
}
