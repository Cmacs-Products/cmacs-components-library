import { EventEmitter, OnInit } from '@angular/core';
export declare class CmacsEditorComponent implements OnInit {
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    disabled: boolean;
    height: string;
    statusbar: boolean;
    resize: boolean;
    tinyMceSettings: any;
    constructor();
    ngOnInit(): void;
}
