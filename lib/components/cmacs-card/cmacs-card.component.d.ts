import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
export declare class CmacsCardComponent {
    bordered: boolean;
    loading: boolean;
    hoverable: boolean;
    bodyStyle: {
        [key: string]: string;
    };
    cover: TemplateRef<void>;
    actions: Array<TemplateRef<void>>;
    type: string;
    title: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
    tab: CmacsCardTabComponent;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
