import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { CmacsTimelineMode } from './cmacs-timeline.components';
export declare class CmacsTimelineItemComponent implements OnInit, OnChanges {
    private renderer;
    private cdr;
    liTemplate: ElementRef;
    color: string;
    dot: string | TemplateRef<void>;
    isLast: boolean;
    position: CmacsTimelineMode | undefined;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    private tryUpdateCustomColor;
}
