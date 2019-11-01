import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, AfterViewInit, TemplateRef } from '@angular/core';
import { NzSizeMDSType } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ExportAsService } from 'ngx-export-as';
import 'jspdf-autotable';
import { GridConfig, Field } from '../core/interfaces/grid-config';
import { GridExpConfig } from '../core/interfaces/grid-exp-config';
import { ExcelService } from '../core/services/excel.service';
import { CookieService } from "ngx-cookie-service";
import { CheckboxSelect } from "../cmacs-grid/cmacs-table.component";
export declare class CmacsCompactTableComponent<T = any> implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private i18n;
    private exportAsService;
    private excelService;
    private datePipe;
    private cookies;
    locale: any;
    headerBottomStyle: {};
    private destroy$;
    size: NzSizeMDSType;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    pageSizeOptions: number[];
    virtualScroll: boolean;
    logs: boolean;
    expandable: boolean;
    virtualItemSize: number;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    total: number;
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    pageIndex: number;
    pageSize: number;
    data: T[];
    config: GridConfig;
    configChange: EventEmitter<GridConfig>;
    fieldId: string;
    gridID: string;
    paginationPosition: 'top' | 'bottom' | 'both';
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    nzItemRender: TemplateRef<{
        $implicit: 'page' | 'prev' | 'next';
        page: number;
    }>;
    frontPagination: boolean;
    templateMode: boolean;
    bordered: boolean;
    showPagination: boolean;
    loading: boolean;
    showSizeChanger: boolean;
    hideOnSinglePage: boolean;
    showQuickJumper: boolean;
    simple: boolean;
    checkboxSelect: boolean;
    inLineEdit: boolean;
    dataTable: boolean;
    showRate: boolean;
    exportEvent: EventEmitter<GridExpConfig>;
    buttonClick: EventEmitter<any>;
    rateChange: EventEmitter<any>;
    selectionChange: EventEmitter<T[]>;
    ondlclickRow: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    onedit: EventEmitter<any>;
    rateCount: number;
    multiSelect: boolean;
    sortChange: EventEmitter<any>;
    extra: string | TemplateRef<void>;
    indentSize: number;
    selected: boolean;
    defaultSortOrder: any;
    checkboxCache: CheckboxSelect[];
    isIndeterminate: boolean;
    allChecked: boolean;
    editId: string | null;
    property: string | null;
    rowOnEdition: number;
    mapOfExpandedData: {
        [key: string]: any[];
    };
    fieldID: any;
    inputElement: ElementRef;
    inputNumberElement: ElementRef;
    datePickerElement: ElementRef;
    selectElement: ElementRef;
    boolElement: ElementRef;
    startEdit(id: string, property: string, event: MouseEvent): void;
    sort($event: any, fieldProperty: string): void;
    handleClick(e: Event): void;
    getCustomPadding(item: any, i: number): number;
    childOf(node: any, ancestor: any): boolean;
    endEditMode($event: KeyboardEvent, index: number): void;
    endEditModeNgModel(index: number): void;
    getIndex(id: any): number;
    updateCheckboxCache(): void;
    checkChildrenState(item: any): void;
    checkChildrenStateRec(item: any): boolean;
    updateCheckboxCacheTreeData(): void;
    convertExpandTreeToList(item: any, plainList: any[]): void;
    onButtonClick(field: any): void;
    onCheckboxChange(event?: any): void;
    checkCheckboxState(): CheckboxSelect[];
    onRateChange(count: number, data: any): void;
    onRateClick(event: any): void;
    getFields(): Field[];
    onCheckboxAllChange(status: boolean): void;
    getLabel(data: any, field: Field): string;
    isSelect(field: Field): boolean;
    isString(field: Field): boolean;
    isReadOnly(field: Field): boolean;
    isTypeNumber(value: any): boolean;
    isNumber(field: Field): boolean;
    isBoolean(value: any): boolean;
    isObject(value: any): boolean;
    isDate(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    isCeldTypeButton(field: Field): boolean;
    isCeldTypeTag(field: Field): boolean;
    isCeldTypeTemplateRef(field: Field): boolean;
    isUndefined(value: any): boolean;
    isRowSelected(data: any): boolean;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, exportAsService: ExportAsService, excelService: ExcelService, datePipe: DatePipe, cookies: CookieService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    convertTreeToList(root: object): any[];
    visitNode(node: any, hashMap: any, array: any[]): void;
    collapse(array: any[], data: any, $event: boolean): void;
    onCheckboxTreeChange($event: any, item: any): void;
    updateTreeCheckboxes($event: boolean, array: any, key: any): void;
    getNode(key: any): CheckboxSelect | {
        selected: boolean;
    };
    exportToPng(fileName: string): void;
    exportToExcel(fileName: string): void;
    exportToPdf(fileName: string): void;
    ngOnDestroy(): void;
    clickRow(data: any): void;
    dblClickRow(data: any): void;
}
