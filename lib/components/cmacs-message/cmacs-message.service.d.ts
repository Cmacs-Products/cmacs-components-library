import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injector, TemplateRef, Type } from '@angular/core';
import { CmacsMessageConfig } from './cmacs-message-config';
import { CmacsMessageContainerComponent } from './cmacs-message-container.component';
import { CmacsMessageData, CmacsMessageDataFilled, CmacsMessageDataOptions } from './cmacs-message.definitions';
export declare class CmacsMessageBaseService<ContainerClass extends CmacsMessageContainerComponent, MessageData, MessageConfig extends CmacsMessageConfig> {
    private overlay;
    private containerClass;
    private injector;
    private cfr;
    private appRef;
    private _idPrefix;
    protected _container: ContainerClass;
    constructor(overlay: Overlay, containerClass: Type<ContainerClass>, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef, _idPrefix?: string);
    remove(messageId?: string): void;
    createMessage(message: MessageData, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    config(config: MessageConfig): void;
    protected _generateMessageId(): string;
    private createContainer;
}
export declare class CmacsMessageService extends CmacsMessageBaseService<CmacsMessageContainerComponent, CmacsMessageData, CmacsMessageConfig> {
    constructor(overlay: Overlay, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef);
    success(content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    error(content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    info(content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    warning(content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    loading(content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
    create(type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string, content: string | TemplateRef<void>, options?: CmacsMessageDataOptions): CmacsMessageDataFilled;
}
