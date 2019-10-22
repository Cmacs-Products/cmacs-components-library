import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare type CmacsMessageType = 'success' | 'info' | 'warning' | 'error' | 'loading';
export interface CmacsMessageDataOptions {
    duration?: number;
    animate?: boolean;
    pauseOnHover?: boolean;
    width?: number;
    closable?: boolean;
}
/**
 * Message data for terminal users.
 */
export interface CmacsMessageData {
    type?: CmacsMessageType | string;
    content?: string | TemplateRef<void>;
}
/**
 * Filled version of CmacsMessageData (includes more private properties).
 */
export interface CmacsMessageDataFilled extends CmacsMessageData {
    messageId: string;
    createdAt: Date;
    options?: CmacsMessageDataOptions;
    state?: 'enter' | 'leave';
    onClose?: Subject<boolean>;
}
