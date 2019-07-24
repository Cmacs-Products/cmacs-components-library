/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import { CmacsOptionGroupComponent } from './cmacs-option-group.component';
import { CmacsOptionComponent } from './cmacs-option.component';
export declare type TFilterOption = (input: string, option: CmacsOptionComponent) => boolean;
export declare class NzFilterOptionPipe implements PipeTransform {
    transform(options: CmacsOptionComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): CmacsOptionComponent[];
}
export declare class NzFilterGroupOptionPipe implements PipeTransform {
    transform(groups: CmacsOptionGroupComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): CmacsOptionGroupComponent[];
}
export declare function defaultFilterOption(searchValue: string, option: CmacsOptionComponent): boolean;
