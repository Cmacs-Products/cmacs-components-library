import { ChangeDetectorRef } from '@angular/core';
import { CmacsMessageConfig } from './cmacs-message-config';
import { CmacsMessageDataFilled, CmacsMessageDataOptions } from './cmacs-message.definitions';
export declare class CmacsMessageContainerComponent {
    protected cdr: ChangeDetectorRef;
    messages: CmacsMessageDataFilled[];
    config: Required<CmacsMessageConfig>;
    top: string | null;
    constructor(cdr: ChangeDetectorRef, defaultConfig: CmacsMessageConfig, config: CmacsMessageConfig);
    setConfig(config: CmacsMessageConfig): void;
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message: CmacsMessageDataFilled): void;
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId: string, userAction?: boolean): void;
    /**
     * Remove all messages.
     */
    removeMessageAll(): void;
    /**
     * Merge default options and custom message options
     * @param options
     */
    protected _mergeMessageOptions(options?: CmacsMessageDataOptions): CmacsMessageDataOptions;
}
