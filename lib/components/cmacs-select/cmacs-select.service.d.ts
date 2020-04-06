/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ReplaySubject, Subject } from 'rxjs';
import { CmacsOptionGroupComponent } from './cmacs-option-group.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { TFilterOption } from './cmacs-option.pipe';
export declare class CmacsSelectService {
    autoClearSearchValue: boolean;
    serverSearch: boolean;
    tagsOut: boolean;
    filterOption: TFilterOption;
    mode: 'default' | 'multiple' | 'tags' | 'tagsSingleSelect';
    maxMultipleCount: number;
    disabled: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    private listOfSelectedValueWithEmit$;
    private mapOfTemplateOption$;
    private searchValueRaw$;
    private listOfFilteredOption;
    private openRaw$;
    private checkRaw$;
    private open;
    clearInput$: Subject<boolean>;
    searchValue: string;
    isShowNotFound: boolean;
    open$: import("rxjs").Observable<boolean>;
    activatedOption: CmacsOptionComponent | null;
    activatedOption$: ReplaySubject<CmacsOptionComponent>;
    listOfSelectedValue$: import("rxjs").Observable<any[]>;
    modelChange$: import("rxjs").Observable<any[]>;
    searchValue$: import("rxjs").Observable<string>;
    listOfSelectedValue: any[];
    listOfTemplateOption: CmacsOptionComponent[];
    listOfTagOption: CmacsOptionComponent[];
    listOfTagAndTemplateOption: CmacsOptionComponent[];
    listOfNzOptionComponent: CmacsOptionComponent[];
    listOfNzOptionGroupComponent: CmacsOptionGroupComponent[];
    addedTagOption: CmacsOptionComponent | null;
    listOfCachedSelectedOption: CmacsOptionComponent[];
    valueOrOption$: import("rxjs").Observable<[any[], {
        listOfNzOptionComponent: CmacsOptionComponent[];
        listOfNzOptionGroupComponent: CmacsOptionGroupComponent[];
    }]>;
    check$: import("rxjs").Observable<string | boolean | {} | any[] | CmacsOptionComponent | [any[], {
        listOfNzOptionComponent: CmacsOptionComponent[];
        listOfNzOptionGroupComponent: CmacsOptionGroupComponent[];
    }]>;
    clickOption(option: CmacsOptionComponent): void;
    updateListOfCachedOption(): void;
    updateListOfTagOption(): void;
    updateAddTagOption(): void;
    updateListOfFilteredOption(): void;
    clearInput(): void;
    updateListOfSelectedValue(value: any[], emit: boolean): void;
    updateActivatedOption(option: CmacsOptionComponent | null): void;
    tokenSeparate(inputValue: string, tokenSeparators: string[]): void;
    includesSeparators(str: string | string[], separators: string[]): boolean;
    splitBySeparators(str: string | string[], separators: string[]): string[];
    resetActivatedOptionIfNeeded(): void;
    updateTemplateOption(listOfNzOptionComponent: CmacsOptionComponent[], listOfNzOptionGroupComponent: CmacsOptionGroupComponent[]): void;
    updateSearchValue(value: string): void;
    updateSelectedValueByLabelList(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    removeValueFormSelected(option: CmacsOptionComponent): void;
    setOpenState(value: boolean): void;
    check(): void;
    readonly isSingleMode: boolean;
    readonly isTagsMode: boolean;
    readonly isTagsSingleSelectMode: boolean;
    readonly isMultipleMode: boolean;
    readonly isMultipleOrTags: boolean;
}
