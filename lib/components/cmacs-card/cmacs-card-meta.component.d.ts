import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class CmacsCardMetaComponent {
    title: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    avatar: TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
