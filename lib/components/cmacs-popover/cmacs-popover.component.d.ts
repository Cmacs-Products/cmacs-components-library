import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from "../cmacs-tooltip/cmacs-tooltip.component";
export declare class CmacsPopoverComponent extends CmacsTooltipComponent {
    noAnimation?: NzNoAnimationDirective;
    _prefix: string;
    /** Used to remove NzToolTipComponent @ContentChild('nzTemplate') */
    title: string | TemplateRef<void>;
    content: string | TemplateRef<void>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    protected isContentEmpty(): boolean;
}
