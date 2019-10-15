import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CmacsMessageContainerComponent } from './cmacs-message-container.component';
import { CmacsMessageDataFilled, CmacsMessageDataOptions } from './cmacs-message.definitions';
export declare class CmacsMessageComponent implements OnInit, OnDestroy {
    private _messageContainer;
    protected cdr: ChangeDetectorRef;
    message: CmacsMessageDataFilled;
    index: number;
    protected _options: Required<CmacsMessageDataOptions>;
    private _autoErase;
    private _eraseTimer;
    private _eraseTimingStart;
    private _eraseTTL;
    constructor(_messageContainer: CmacsMessageContainerComponent, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEnter(): void;
    onLeave(): void;
    protected _destroy(userAction?: boolean): void;
    closeMessage(): void;
    private _initErase;
    private _updateTTL;
    private _startEraseTimeout;
    private _clearEraseTimeout;
}
