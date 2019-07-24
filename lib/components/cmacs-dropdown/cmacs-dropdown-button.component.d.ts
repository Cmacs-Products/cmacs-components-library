import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsDropdownComponent } from './cmacs-dropdown.component';
import { CmacsDropdownDirective } from './cmacs-dropdown.directive';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
export declare class CmacsDropdownButtonComponent extends CmacsDropdownComponent implements OnDestroy, AfterContentInit, OnChanges {
    noAnimation?: NzNoAnimationDirective;
    size: string;
    type: string;
    readonly cmacsClick: EventEmitter<MouseEvent>;
    cmacsDropDownDirective: CmacsDropdownDirective;
    constructor(cdr: ChangeDetectorRef, cmacsMenuDropdownService: CmacsMenuDropdownService, noAnimation?: NzNoAnimationDirective);
    /** rewrite afterViewInit hook */
    ngAfterContentInit(): void;
}
