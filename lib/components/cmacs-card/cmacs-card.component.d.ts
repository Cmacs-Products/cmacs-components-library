import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { VgAPI } from "videogular2/compiled/src/core/services/vg-api";
import { Source } from "../cmacs-video-player/cmacs-video-player.component";
export declare type CmacsCardType = 'file' | 'selection' | 'action' | 'team' | 'project' | 'folder' | 'measure' | 'big-file' | 'none' | 'video' | 'todo';
export interface BigFile {
    title?: string;
    extension?: string;
    created_at?: string;
}
export declare class CmacsCardComponent implements OnInit {
    private cdr;
    folderIcon: string;
    isEditable: boolean;
    bordered: boolean;
    opened: boolean;
    editable: boolean;
    isRadio: boolean;
    loading: boolean;
    disabled: boolean;
    hoverable: boolean;
    sources: Source[];
    playerReady: EventEmitter<VgAPI>;
    bodyStyle: {
        [key: string]: string;
    };
    cover: TemplateRef<void>;
    body: TemplateRef<void>;
    actions: Array<TemplateRef<void>>;
    team: any;
    file: BigFile;
    project: any;
    todo: any;
    type: string;
    cmacsType: CmacsCardType;
    cmacsIcon: string;
    title: string | TemplateRef<void>;
    titleChange: EventEmitter<string>;
    extra: string | TemplateRef<void>;
    tab: CmacsCardTabComponent;
    ondlclickCard: EventEmitter<any>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    selected: boolean;
    value: any;
    selectedChange: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    onPlayerReady(api: VgAPI): void;
    checkRadio(): void;
    onClick(event: Event): void;
    onDblClick(): void;
    markForCheck(): void;
    select(event: Event): void;
    handleEnter(event: KeyboardEvent, titleContainer: any, titleSpan: any): void;
    toggleEdit(titleContainer: any): void;
    getInitials(name: any): any;
}
