import { ElementRef, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { CmacsListItemMetaComponent } from './cmacs-list-item-meta.component';
export declare class CmacsListItemComponent {
    elementRef: ElementRef;
    private renderer;
    metas: QueryList<CmacsListItemMetaComponent>;
    actions: Array<TemplateRef<void>>;
    content: string | TemplateRef<void>;
    extra: TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
