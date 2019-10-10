import { DomSanitizer } from "@angular/platform-browser";
export declare const KPI_COLORS: string[];
export interface KPI {
    count: number;
    description: string;
}
export declare class CmacsKpiComponent {
    private sanitizer;
    data: KPI[];
    title: string;
    constructor(sanitizer: DomSanitizer);
    sanitizeStyle(style: string): import("@angular/platform-browser").SafeStyle;
    getColoredData(): any;
}
