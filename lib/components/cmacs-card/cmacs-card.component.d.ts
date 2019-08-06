import { ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
export declare type CmacsCardType = 'file' | 'selection' | 'action' | 'team' | 'project' | 'folder' | 'none';
export declare class CmacsCardComponent implements OnInit {
    folderIcon: string;
    bordered: boolean;
    opened: boolean;
    editable: boolean;
    loading: boolean;
    disabled: boolean;
    hoverable: boolean;
    bodyStyle: {
        [key: string]: string;
    };
    cover: TemplateRef<void>;
    actions: Array<TemplateRef<void>>;
    team: any;
    project: any;
    type: string;
    cmacsType: CmacsCardType;
    cmacsIcon: string;
    title: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
    tab: CmacsCardTabComponent;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    onClick(event: Event): void;
    onDblClick(): void;
    select(event: Event): void;
    getInitials(name: any): any;
}
