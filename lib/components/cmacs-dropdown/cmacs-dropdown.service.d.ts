import { Overlay } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { CmacsDropdownContextComponent } from './cmacs-dropdown-context.component';
export declare class CmacsDropdownService {
    private overlay;
    private overlayRef;
    constructor(overlay: Overlay);
    create($event: MouseEvent, templateRef: TemplateRef<void>): CmacsDropdownContextComponent;
    dispose(): void;
}
