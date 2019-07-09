import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalRef } from './cmacs-modal-ref.class';
import { CmacsModalComponent } from './cmacs-modal.component';
import { ConfirmType, ModalOptionsForService } from './cmacs-modal.type';
import { LoggerService } from '../core/logger';
export declare class ModalBuilderForService {
    private overlay;
    private modalRef;
    private overlayRef;
    constructor(overlay: Overlay, options?: ModalOptionsForService);
    getInstance(): CmacsModalComponent | null;
    destroyModal(): void;
    private changeProps;
    private createModal;
}
export declare class CmacsModalService {
    private overlay;
    private logger;
    private modalControl;
    readonly openModals: CmacsModalRef[];
    readonly afterAllClose: Observable<void>;
    constructor(overlay: Overlay, logger: LoggerService, modalControl: ModalControlService);
    closeAll(): void;
    create<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    confirm<T>(options?: ModalOptionsForService<T>, confirmType?: ConfirmType): CmacsModalRef<T>;
    info<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    success<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    error<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    warning<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    private simpleConfirm;
}
