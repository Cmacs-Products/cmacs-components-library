import { OnInit, TemplateRef } from '@angular/core';
export declare class CmacsSectionComponent implements OnInit {
    extra: string | TemplateRef<void>;
    widgetSpan: string;
    title: string;
    titleIcon: string;
    showCollapse: boolean;
    collapsed: boolean;
    collapsedIcon: string;
    constructor();
    ngOnInit(): void;
    collapseSection(): void;
}
