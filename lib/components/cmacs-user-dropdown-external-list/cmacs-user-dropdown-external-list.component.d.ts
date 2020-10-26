import { EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class CmacsUserDropdownExternalListComponent {
    private sanitizer;
    _data: any[];
    listDividers: any[];
    origin: any[];
    removedOption: EventEmitter<any>;
    selectedValue: any;
    data: any[];
    constructor(sanitizer: DomSanitizer);
    operateData(values: any[]): any[];
    getInitials(name: any): any;
    getBackgroundImage(picture: any): import("@angular/platform-browser").SafeStyle;
    removeOption(elem: any): void;
}
