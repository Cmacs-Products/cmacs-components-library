import { EventEmitter, OnChanges } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
export declare type FloatingMenuType = 'top' | 'bottom' | 'left' | 'right';
export declare const FLOATING_MENU_LOCALIZATION: {
    'Dock To Left': string;
    'Dock To Right': string;
    'Dock To Top': string;
    'Dock To Bottom': string;
    'Minimize Toolbar': string;
};
export declare class CmacsFloatingMenuComponent implements OnChanges {
    _minimizeToolbar: boolean;
    _i18n: {
        'Dock To Left': string;
        'Dock To Right': string;
        'Dock To Top': string;
        'Dock To Bottom': string;
        'Minimize Toolbar': string;
    };
    cdkDrag: CdkDrag;
    position: FloatingMenuType;
    visible: boolean;
    showExtras: boolean;
    dragBoundary: string;
    positionChange: EventEmitter<FloatingMenuType>;
    carrot: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    i18n: any;
    constructor();
    ngOnChanges(): void;
    minimizeToolbar(): void;
    expandToolbar(): void;
    dockToLeft(): void;
    dockToRight(): void;
    dockToTop(): void;
    dockToBottom(): void;
    getPlacement(): "left" | "right" | "top" | "bottom";
    resetDragDrop(): void;
}
