import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CmacsRadioComponent } from './cmacs-radio.component';
export declare class CmacsRadioButtonComponent extends CmacsRadioComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
}
