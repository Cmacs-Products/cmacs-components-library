import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
export declare class CmacsUserDropdownComponent {
    private sanitizer;
    private cdr;
    private fb;
    mode: string;
    emailErrorLabel: string;
    inviteGuestLabel: string;
    loadingLabel: string;
    placeHolder: string;
    selectedValue: any;
    maxTagCount: any;
    serverSearch: boolean;
    selectedValueChange: EventEmitter<any>;
    onAddGuestUserByEmail: EventEmitter<any>;
    cmacsOnSearch: EventEmitter<any>;
    _isLoading: boolean;
    _inviteGuest: boolean;
    _searchValue: string;
    _listOfOption: any[];
    showEmailError: boolean;
    selectComponent: CmacsSelectComponent;
    listOfFilteredOption: any[];
    listDividers: any[];
    operatedData: any[];
    firstElemByDivider: any;
    emailForm: FormGroup;
    highlightKeys: any[];
    isLoading: boolean;
    inviteGuest: boolean;
    listOfOption: any[];
    constructor(sanitizer: DomSanitizer, cdr: ChangeDetectorRef, fb: FormBuilder);
    onSelectedValueChange($event: any): void;
    readonly searchValue: string;
    operateData(): void;
    onsearch($event: any): void;
    getFirstElemByDivider(): void;
    getInitials(name: any): any;
    getBackgroundImage(picture: any): import("@angular/platform-browser").SafeStyle;
    addGuestUser(): void;
    addOption(option: any): void;
    removeOption(option: any): void;
    highlightValue(elem: any): any[];
}
