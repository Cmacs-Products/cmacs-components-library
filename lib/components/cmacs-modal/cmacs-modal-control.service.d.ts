import { Subject } from 'rxjs';
import { CmacsModalRef } from './cmacs-modal-ref.class';
export declare class ModalControlService {
    private parentService;
    readonly afterAllClose: Subject<void>;
    readonly openModals: CmacsModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private readonly registeredMetaMap;
    constructor(parentService: ModalControlService);
    registerModal(modalRef: CmacsModalRef): void;
    deregisterModal(modalRef: CmacsModalRef): void;
    hasRegistered(modalRef: CmacsModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
}
