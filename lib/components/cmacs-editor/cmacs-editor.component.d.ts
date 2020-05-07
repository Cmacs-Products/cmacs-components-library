import { EventEmitter, OnInit } from '@angular/core';
export declare class CmacsEditorComponent implements OnInit {
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    disabled: boolean;
    height: string;
    tinyMceSettings: {
        mobile: {
            theme: string;
            plugins: string[];
            toolbar: string[];
        };
        menubar: boolean;
        image_title: boolean;
        resize: boolean;
        automatic_uploads: boolean;
        height: string;
        file_picker_types: string;
        images_upload_url: string;
        setup: (editor: any) => void;
        plugins: string[];
        toolbar: string;
    };
    constructor();
    ngOnInit(): void;
}
