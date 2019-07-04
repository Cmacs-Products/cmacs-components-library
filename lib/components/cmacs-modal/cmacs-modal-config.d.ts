import { InjectionToken } from '@angular/core';
export interface ModalConfig {
    cmacsMask?: boolean;
    cmacsMaskClosable?: boolean;
}
export declare const MODAL_CONFIG: InjectionToken<ModalConfig>;
