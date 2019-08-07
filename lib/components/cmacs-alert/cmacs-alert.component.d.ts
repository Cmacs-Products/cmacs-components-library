/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core';
export declare class CmacsAlertComponent implements OnChanges {
    destroy: boolean;
    iconType: string;
    iconTheme: string;
    private isTypeSet;
    private isShowIconSet;
    closeText: string | TemplateRef<void>;
    cmacsIconType: NgClassType;
    message: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    type: 'success' | 'info' | 'warning' | 'error';
    closeable: boolean;
    showIcon: boolean;
    banner: boolean;
    readonly onClose: EventEmitter<boolean>;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateIconClassMap(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
