import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { CmacsTimelineItemComponent } from './cmacs-timeline-item.component';
export declare type CmacsTimelineMode = 'left' | 'alternate' | 'right';
export declare class CmacsTimelineComponent implements AfterContentInit, OnChanges, OnDestroy {
    private cdr;
    private platform;
    timeline: ElementRef<HTMLElement>;
    listOfTimeLine: QueryList<CmacsTimelineItemComponent>;
    pendingContent: TemplateRef<void>;
    mode: CmacsTimelineMode;
    pending: string | boolean | TemplateRef<void>;
    pendingDot: string | TemplateRef<void>;
    reverse: boolean;
    isPendingBoolean: boolean;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateChildren;
    private reverseChildTimelineDots;
}
