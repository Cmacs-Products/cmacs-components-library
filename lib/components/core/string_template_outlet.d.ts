import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class CmacsStringTemplateOutletDirective {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    cmacsStringTemplateOutlet: string | TemplateRef<void>;
    updateView(): void;
}
