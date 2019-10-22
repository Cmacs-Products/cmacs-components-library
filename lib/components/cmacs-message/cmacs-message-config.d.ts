import { InjectionToken } from '@angular/core';
export interface CmacsMessageConfig {
    animate?: boolean;
    duration?: number;
    maxStack?: number;
    pauseOnHover?: boolean;
    top?: number | string;
    width?: number;
    [index: string]: any;
}
export declare const CMACS_MESSAGE_DEFAULT_CONFIG: InjectionToken<CmacsMessageConfig>;
export declare const CMACS_MESSAGE_CONFIG: InjectionToken<CmacsMessageConfig>;
export declare const CMACS_MESSAGE_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<CmacsMessageConfig>;
    useValue: {
        animate: boolean;
        duration: number;
        maxStack: number;
        pauseOnHover: boolean;
        top: number;
    };
};
