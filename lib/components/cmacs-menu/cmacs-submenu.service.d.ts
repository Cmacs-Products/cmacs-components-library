import { BehaviorSubject, Subject } from 'rxjs';
import { NzDirectionVHIType } from 'ng-zorro-antd/core';
import { CmacsMenuService } from './cmacs-menu.service';
export declare class CmacsSubmenuService {
    private hostSubmenuService;
    nzMenuService: CmacsMenuService;
    disabled: boolean;
    mode: NzDirectionVHIType;
    mode$: import("rxjs").Observable<string>;
    level: number;
    level$: BehaviorSubject<number>;
    subMenuOpen$: BehaviorSubject<boolean>;
    open$: BehaviorSubject<boolean>;
    mouseEnterLeave$: Subject<boolean>;
    menuOpen$: import("rxjs").Observable<boolean>;
    setOpenState(value: boolean): void;
    onMenuItemClick(): void;
    setLevel(value: number): void;
    setMouseEnterState(value: boolean): void;
    constructor(hostSubmenuService: CmacsSubmenuService, nzMenuService: CmacsMenuService);
}
