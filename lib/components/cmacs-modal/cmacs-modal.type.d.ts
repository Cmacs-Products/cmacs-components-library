import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, TemplateRef, Type } from '@angular/core';
export declare type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;
export declare type ModalType = 'transactional' | 'confirm' | 'passive' | 'interaction' | 'creation' | 'helpfulTips' | 'helpfulTipsNoPanel' | 'basic';
export declare type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface ModalOptions<T = any, R = any> {
    modalType?: ModalType;
    visible?: boolean;
    zIndex?: number;
    width?: number | string;
    wrapClassName?: string;
    className?: string;
    cmacsStyle?: object;
    iconType?: string;
    title?: string | TemplateRef<{}>;
    cmacsTitle?: string | TemplateRef<{}>;
    content?: string | TemplateRef<{}> | Type<T>;
    componentParams?: Partial<T>;
    closable?: boolean;
    keyboard?: boolean;
    cmacsMask?: boolean;
    cmacsMaskClosable?: boolean;
    maskStyle?: object;
    bodyStyle?: object;
    footer?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    getContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    cmacsAfterOpen?: EventEmitter<void>;
    cmacsAfterClose?: EventEmitter<R>;
    cmacsOkText?: string | null;
    okType?: string;
    okLoading?: boolean;
    okDisabled?: boolean;
    cancelDisabled?: boolean;
    onOk?: EventEmitter<T> | OnClickCallback<T>;
    cmacsCancelText?: string | null;
    cancelLoading?: boolean;
    noAnimation?: boolean;
    onCancel?: EventEmitter<T> | OnClickCallback<T>;
}
export interface ModalOptionsForService<T = any> extends ModalOptions<T> {
    onOk?: OnClickCallback<T>;
    onCancel?: OnClickCallback<T>;
}
export interface ModalButtonOptions<T = any> {
    label: string;
    type?: string;
    shape?: string;
    ghost?: boolean;
    size?: string;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): (void | {}) | Promise<void | {}>;
    [key: string]: any;
}
