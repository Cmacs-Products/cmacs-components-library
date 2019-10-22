import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class CmacsListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl: TemplateRef<void>;
    avatar: string | TemplateRef<void>;
    title: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
