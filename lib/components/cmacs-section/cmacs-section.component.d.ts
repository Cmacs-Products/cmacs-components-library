import { OnInit, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class CmacsSectionComponent implements OnInit, OnChanges {
    extra: string | TemplateRef<void>;
    widgetSpan: string;
    title: string;
    titleIcon: string;
    showCollapse: boolean;
    extraData: any;
    collapsed: boolean;
    validate: boolean;
    onbeforecollapse: EventEmitter<any>;
    oncollapse: EventEmitter<any>;
    onbeforeexpand: EventEmitter<any>;
    onexpand: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    collapseSection(): void;
    ngOnChanges(changes: SimpleChanges): void;
    triggerCollapseEvents(before: boolean): void;
}
