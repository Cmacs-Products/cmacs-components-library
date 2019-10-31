/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ExportAsService } from 'ngx-export-as';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TemplateType } from '../core/enums/templateType.enum';
import { CeldType } from '../core/enums/celdType.enum';
import { ExcelService } from '../core/services/excel.service';
import { ExportType } from '../core/enums/export-type.enum';
import { CookieService } from "ngx-cookie-service";
import { isArray } from "util";
/**
 * @template T
 */
// tslint:disable-next-line no-any
export class CmacsCompactTableComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     * @param {?} exportAsService
     * @param {?} excelService
     * @param {?} datePipe
     * @param {?} cookies
     */
    constructor(cdr, i18n, exportAsService, excelService, datePipe, cookies) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.excelService = excelService;
        this.datePipe = datePipe;
        this.cookies = cookies;
        this.locale = {}; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        // tslint:disable-next-line: no-input-rename
        this.size = 'default';
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.virtualScroll = false;
        this.logs = false;
        this.expandable = false;
        this.virtualItemSize = 0;
        this.loadingDelay = 0;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.configChange = new EventEmitter();
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
        this.showPagination = true;
        this.loading = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.showQuickJumper = false;
        this.simple = false;
        this.checkboxSelect = false;
        this.inLineEdit = false;
        this.dataTable = false;
        this.showRate = false;
        this.exportEvent = new EventEmitter();
        this.buttonClick = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.ondlclickRow = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.onedit = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.indentSize = 0;
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.mapOfExpandedData = {};
        this.fieldID = null;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    /**
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    startEdit(id, property, event) {
        if (this.inLineEdit) {
            event.preventDefault();
            event.stopPropagation();
            this.editId = id;
            this.property = property;
        }
    }
    /**
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    sort($event, fieldProperty) {
        this.sortChange.emit({ sortName: fieldProperty, sortValue: $event });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleClick(e) {
        /** @type {?} */
        const element = (/** @type {?} */ (e.target));
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && this.datePickerElement.nativeElement !== e.target) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && this.boolElement.nativeElement !== e.target))) {
                this.editId = null;
                this.property = null;
                if (this.rowOnEdition >= 0) {
                    this.onedit.emit(this.data[this.rowOnEdition]);
                    this.rowOnEdition = -1;
                }
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    getCustomPadding(item, i) {
        if (!i) {
            if (!item.level) {
                return !!item.children ? 6 : 28;
            }
            else {
                return item.level * this.indentSize;
            }
        }
        return 6;
    }
    /**
     * @param {?} node
     * @param {?} ancestor
     * @return {?}
     */
    childOf(node, ancestor) {
        /** @type {?} */
        let child = node;
        while (child !== null) {
            if (child === ancestor)
                return true;
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string' &&
                child.className.indexOf('cdk-overlay-pane') >= 0)
                return true;
            child = child.parentNode;
        }
        return false;
    }
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    endEditMode($event, index) {
        if ($event.key === ('Enter' || 'enter')) {
            this.editId = null;
            this.property = null;
            this.rowOnEdition = -1;
            this.onedit.emit(this.data[index]);
        }
        else {
            this.rowOnEdition = index;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    endEditModeNgModel(index) {
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.onedit.emit(this.data[index]);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getIndex(id) {
        /** @type {?} */
        let i = -1;
        i = this.checkboxCache.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data[this.config.fieldId] === id));
        return i;
    }
    /**
     * @return {?}
     */
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            this.checkboxCache.push({
                selected: false,
                data: Object.assign({}, item)
            });
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    checkChildrenState(item) {
        /** @type {?} */
        let indeterminate;
        /** @type {?} */
        let init = true;
        if (item.children && item.children.length > 0) {
            /** @type {?} */
            const res = this.checkChildrenStateRec(item.children);
            //console.log(res)
            /* if (init) {
               indeterminate = res;
             } else {
               return res !== indeterminate ? true : res;
             }
           } else {
             return false;
           }*/
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    checkChildrenStateRec(item) {
        if (isArray(item)) {
            item.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            elem => {
                this.checkChildrenStateRec(elem);
            }));
        }
        else {
            /** @type {?} */
            const node = this.getNode(item[this.fieldID]);
            return node.selected;
        }
    }
    /**
     * @return {?}
     */
    updateCheckboxCacheTreeData() {
        this.checkboxCache.length = 0;
        this.convertExpandTreeToList(this.data, this.checkboxCache);
    }
    /**
     * @param {?} item
     * @param {?} plainList
     * @return {?}
     */
    convertExpandTreeToList(item, plainList) {
        if (isArray(item)) {
            item.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            elem => {
                plainList.push({
                    selected: false,
                    data: Object.assign({}, elem)
                });
                if (elem.children && elem.children.length > 0) {
                    this.convertExpandTreeToList(elem.children, plainList);
                }
            }));
        }
        else {
            plainList.push({
                selected: false,
                data: Object.assign({}, item)
            });
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onButtonClick(field) {
        this.buttonClick.emit(field);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChange(event) {
        /** @type {?} */
        const dataSelected = this.checkCheckboxState();
        this.selectionChange.emit(dataSelected.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data)));
    }
    /**
     * @return {?}
     */
    checkCheckboxState() {
        /** @type {?} */
        const dataSelected = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected));
        this.selected = this.allChecked = dataSelected.length === this.checkboxCache.length;
        this.isIndeterminate = dataSelected.length > 0 && !this.allChecked;
        return dataSelected;
    }
    // tslint:disable-next-line: no-shadowed-variable
    /**
     * @param {?} count
     * @param {?} data
     * @return {?}
     */
    onRateChange(count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRateClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.hidden === undefined || !item.hidden));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    onCheckboxAllChange(status) {
        this.checkboxCache.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            element.selected = status;
        }));
        this.isIndeterminate = false;
        this.selectionChange.emit((status) ? this.data : []);
    }
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    getLabel(data, field) {
        /** @type {?} */
        let result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            /** @type {?} */
            const item = field.select.selectData.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item !== undefined && item[field.select.value] === data[field.property]));
            result = (item !== undefined) ? item[field.select.label] : '';
        }
        return result;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isSelect(field) {
        return field !== undefined && field.editTemplate === TemplateType.Select;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isString(field) {
        return field !== undefined && field.editTemplate === TemplateType.String;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTypeNumber(value) {
        return value !== undefined && typeof (value) === 'number';
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isNumber(field) {
        return field !== undefined && field.editTemplate === TemplateType.Number;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isBoolean(value) {
        return value !== undefined && typeof (value) === 'boolean';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isObject(value) {
        return value !== undefined && typeof (value) === 'object';
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isDate(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Date;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isCeldTypeDefault(field) {
        return field !== undefined && field.celdType === CeldType.Default;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isCeldTypeButton(field) {
        return field !== undefined && field.celdType === CeldType.Button;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isCeldTypeTag(field) {
        return field !== undefined && field.celdType === CeldType.Tag;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isCeldTypeTemplateRef(field) {
        return field !== undefined && field.celdType === CeldType.TemplateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isUndefined(value) {
        return value === undefined;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    isRowSelected(data) {
        /** @type {?} */
        const dataSelectd = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data[this.config.fieldId]));
        return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.cookies.check(this.gridID)) {
            /** @type {?} */
            const savedConfigStr = this.cookies.get(this.gridID);
            // reset expiration date
            this.cookies.set(this.gridID, savedConfigStr, 365);
            // parse cookie value to typescript const
            /** @type {?} */
            const savedConfig = (/** @type {?} */ (JSON.parse(this.cookies.get(this.gridID))));
            if (typeof savedConfig === "object") {
                this.config = savedConfig;
                this.configChange.emit(this.config);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
        if (this.checkboxSelect && !this.expandable) {
            this.updateCheckboxCache();
        }
        if (this.checkboxSelect && this.expandable) {
            this.updateCheckboxCacheTreeData();
        }
        this.checkCheckboxState();
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.exportEvent.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            switch (config.exportType) {
                case ExportType.Pdf:
                    this.exportToPdf(config.fileName);
                    break;
                case ExportType.Xslx:
                    this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    this.exportToPng(config.fileName);
                    break;
            }
        }));
        /* Convert tree to list if expandable */
        if (this.expandable) {
            this.fieldID = this.config.fieldId;
            /** @type {?} */
            const coerceData = (/** @type {?} */ (this.data));
            coerceData.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.mapOfExpandedData[item[this.fieldID]] = this.convertTreeToList(item);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data) {
            this.updateCheckboxCache();
        }
    }
    /* Expandable Rows */
    /**
     * @param {?} root
     * @return {?}
     */
    convertTreeToList(root) {
        /** @type {?} */
        const stack = [];
        /** @type {?} */
        const array = [];
        /** @type {?} */
        const hashMap = {};
        stack.push(Object.assign({}, root, { level: 0, expand: false }));
        while (stack.length !== 0) {
            /** @type {?} */
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(Object.assign({}, node.children[i], { level: node.level + 1, expand: false, parent: node }));
                }
            }
        }
        return array;
    }
    /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    visitNode(node, hashMap, array) {
        if (!hashMap[node[this.fieldID]]) {
            hashMap[node[this.fieldID]] = true;
            array.push(node);
        }
    }
    /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    collapse(array, data, $event) {
        if ($event === false) {
            if (data.children) {
                data.children.forEach((/**
                 * @param {?} d
                 * @return {?}
                 */
                d => {
                    /** @type {?} */
                    const target = (/** @type {?} */ (array.find((/**
                     * @param {?} a
                     * @return {?}
                     */
                    a => a[this.fieldID] === d[this.fieldID]))));
                    target.expand = false;
                    this.collapse(array, target, false);
                }));
            }
            else {
                return;
            }
        }
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    onCheckboxTreeChange($event, item) {
        this.updateTreeCheckboxes($event, this.data, item[this.fieldID]);
        this.onCheckboxChange($event);
    }
    /**
     * @param {?} $event
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    updateTreeCheckboxes($event, array, key) {
        if (isArray(array)) {
            array.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item[this.fieldID] === key) {
                    this.getNode(key).selected = $event;
                    item.selected = $event;
                    if (item.children && item.children.length > 0) {
                        item.children.forEach((/**
                         * @param {?} c
                         * @return {?}
                         */
                        c => {
                            this.updateTreeCheckboxes($event, c, c[this.fieldID]);
                        }));
                    }
                    return;
                }
                if (item.children) {
                    item.children.forEach((/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => {
                        this.updateTreeCheckboxes($event, d, key);
                    }));
                }
                else {
                    return;
                }
            }));
        }
        else {
            if (array[this.fieldID] === key) {
                array.selected = $event;
                this.getNode(key).selected = $event;
                return;
            }
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getNode(key) {
        /** @type {?} */
        let test = this.checkboxCache.filter((/**
         * @param {?} n
         * @return {?}
         */
        n => n.data[this.fieldID] === key));
        return test ? test[0] : { selected: false };
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToPng(fileName) {
        /** @type {?} */
        const exportAsConfig = {
            type: 'png',
            // the type you want to download
            elementId: this.gridID,
        };
        this.frontPagination = false;
        this.showPagination = false;
        /** @type {?} */
        const interval = setInterval((/**
         * @return {?}
         */
        () => {
            // tslint:disable-next-line: max-line-length
            this.exportAsService.save(exportAsConfig, fileName + '_export_' + Date.now());
            this.frontPagination = true;
            this.showPagination = true;
            clearInterval(interval);
        }), 100);
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToExcel(fileName) {
        /** @type {?} */
        const dataToExport = [];
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.Default)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (field.editTemplate === TemplateType.Select) {
                    /** @type {?} */
                    const selectItem = field.select.selectData.find((/**
                     * @param {?} option
                     * @return {?}
                     */
                    option => option[field.select.value] === item[field.property]));
                    if (selectItem !== undefined) {
                        itemToExport[field.display] = selectItem[field.select.label];
                    }
                }
                else {
                    itemToExport[field.display] = item[field.property];
                }
            }));
            this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                itemToExport[field.display] = item[field.property].context.exportValue;
            }));
            dataToExport.push(itemToExport);
        }));
        this.excelService.exportAsExcelFile(dataToExport, fileName);
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToPdf(fileName) {
        /** @type {?} */
        const doc = new jsPDF();
        /** @type {?} */
        const columns = [];
        /** @type {?} */
        const rows = [];
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.celdType === CeldType.Default)).forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            columns.push(field.display);
        }));
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.celdType === CeldType.TemplateRef)).forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            columns.push(field.display);
        }));
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const itemToExport = [];
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.Default)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                switch (field.editTemplate) {
                    case TemplateType.Select:
                        /** @type {?} */
                        const selectItem = field.select.selectData.find((/**
                         * @param {?} option
                         * @return {?}
                         */
                        option => option[field.select.value] === item[field.property]));
                        if (selectItem !== undefined) {
                            itemToExport.push(selectItem[field.select.label]);
                        }
                        break;
                    case TemplateType.Date:
                        itemToExport.push(this.datePipe.transform(item[field.property], 'MMMM dd yyyy'));
                        break;
                    default:
                        itemToExport.push(item[field.property]);
                        break;
                }
            }));
            this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                itemToExport.push(item[field.property].context.exportValue);
            }));
            rows.push(itemToExport);
        }));
        doc.autoTable({
            theme: 'striped',
            margin: { top: 5 },
            body: rows,
            columns
        });
        doc.save(fileName + '_export_' + Date.now());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    clickRow(data) {
        this.onclickRow.emit(data);
        if (!this.checkboxSelect) {
            if (!this.multiSelect) {
                this.checkboxCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.selected && item.data[this.config.fieldId] !== data[this.config.fieldId]))
                    .forEach((/**
                 * @param {?} elem
                 * @return {?}
                 */
                elem => elem.selected = false));
            }
            /** @type {?} */
            const index = this.checkboxCache.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.data[this.config.fieldId] === data[this.config.fieldId]));
            if (index !== -1) {
                this.checkboxCache[index].selected = !this.checkboxCache[index].selected;
            }
        }
        this.selectionChange.emit(this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    dblClickRow(data) {
        this.ondlclickRow.emit(data);
    }
}
CmacsCompactTableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-compact-table',
                exportAs: 'cmacsCompactTable',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n          *ngFor=\"let field of getFields()\" [nzShowSort]=\"field.showSort\"\r\n          [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n          nzWidth=\"{{field.width}}\">{{field.display}}</th>\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n        <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n          <ng-container *ngFor=\"let data of gridComponent.data;\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && item.children && item.children.length\">\r\n                <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                >\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"checkChildrenState(item)\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item)\"\r\n                  ></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] || property === field.property) &&\r\n                (isString(field) || isDate(field) || isSelect(field))\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    [class.cmacs-compact-table-on-edit-no-padding]=\"isNumber(field)\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    (nzExpandChange)=\"collapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                >\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       style=\"max-width: 100%\"\r\n                    *ngIf=\"(editId !== item[config.fieldId] || property !== field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       style=\"max-width: 100%;\"\r\n                    *ngIf=\"(editId === item[config.fieldId] && property === field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: i}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                     *ngIf=\"showRate\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                      *ngIf=\"extra\">\r\n                </td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #defaultTpl>\r\n\r\n          <tr *ngFor=\"let data of gridComponent.data; index as i\" (click)=\"clickRow(data)\" (dblclick)=\"dblClickRow(data)\"\r\n              [class.ant-table-selected-row]=\"isRowSelected(data)\" [class.cmacs-compact-table-editable-row]=\"inLineEdit\">\r\n\r\n            <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n              <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                     (checkedChange)=onCheckboxChange($event)\r\n                     *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n            </td>\r\n\r\n            <td *ngFor=\"let field of getFields();\"\r\n                [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] || property === field.property) &&\r\n                (isString(field) || isDate(field) || isSelect(field))\"\r\n                [class.cmacs-compact-table-on-edit-no-padding]=\"isNumber(field)\"\r\n            >\r\n\r\n              <div\r\n                *ngIf=\"(editId !== data[config.fieldId] || property !== field.property)\">\r\n                <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data}\"></ng-container>\r\n              </div>\r\n\r\n              <div\r\n                *ngIf=\"(editId === data[config.fieldId] && property === field.property)\">\r\n                <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td *ngIf=\"showRate\">\r\n              <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                       (click)=\"onRateClick($event)\"></nz-rate>\r\n            </td>\r\n\r\n            <td *ngIf=\"extra\">\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n          <!--Editable String Edit Mode-->\r\n          <input #fieldTypeInput class=\"cmacs-compact-table-input\" *ngIf=\"isString(field)\" type=\"text\"\r\n                 cmacs-input [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n          <!--Editable DatePicker Edit Mode-->\r\n          <cmacs-date-picker class=\"cmacs-compact-table-date\" #fieldTypeDatePicker *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\" [allowClear]=\"false\"\r\n                             open [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n          </cmacs-date-picker>\r\n\r\n          <!--Editable Select Edit Mode-->\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" showSearch\r\n                        [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                          value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>\r\n\r\n          <!--Editable InpuNumber Edit Mode-->\r\n          <cmacs-input-number #fieldTypeInputNumber\r\n                              *ngIf=\"isTypeNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                              [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\">\r\n          </cmacs-input-number>\r\n\r\n          <!--<cmacs-input-number #fieldTypeInputNumber id=\"testing2\"\r\n            *ngIf=\"isNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n            [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\"></cmacs-input-number>\r\n\r\n          <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(data[field.property])\"\r\n            [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 200px;\" showSearch\r\n            [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n              value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>-->\r\n        </ng-template>\r\n\r\n        <ng-template #viewModeTpl let-field=\"field\" let-data=\"data\">\r\n          <ng-container>\r\n\r\n            <!--Editable String View Mode-->\r\n            <ng-container *ngIf=\"isString(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell\">{{ data[field.property] }}</div>\r\n              <i class=\"iconUISmall-Edit\"\r\n                 [class.cmacs-compact-table-edit-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n            <!--Editable DatePicker View Mode-->\r\n            <ng-container *ngIf=\"isDate(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-date\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n              <i class=\"iconUILarge-Calendar\"\r\n                 [class.cmacs-compact-table-calendar-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable Select View Mode-->\r\n            <ng-container *ngIf=\"isSelect(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-select\">{{ getLabel(data, field) }}</div>\r\n              <i class=\"iconArrowLarge-Chevron-Down\"\r\n                 [class.cmacs-compact-table-select-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable InputNumber View Mode-->\r\n            <ng-container *ngIf=\"isNumber(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-input-number\">{{ data[field.property] }}</div>\r\n              <i class=\"iconArrowLarge-Solid-UpDown\"\r\n                 [class.cmacs-compact-table-input-number-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n          </ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #componentTpl>\r\n          <!--<ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n            <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n            </ng-container>\r\n          </ng-container>\r\n          <button *ngIf=\"isCeldTypeButton(field)\" cmacs-button type=\"{{field.button.style}}\"\r\n            (click)=onButtonClick(data)>\r\n            <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n            <ng-template #titleTpl>{{field.display}}</ng-template>\r\n          </button>\r\n          <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\"\r\n            [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n            [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n            [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n            [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n            {{  data[field.property] }}\r\n          </cmacs-tag>\r\n          &lt;!&ndash;<cmacs-tag *ngIf=\"isCeldTypeTag(field) && (field.tag === undefined || field.tag.color === undefined)\">\r\n            {{ data[field.property] }}</cmacs-tag>\r\n          <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined && field.tag.color !== undefined\"\r\n            [color]=data[field.tag.color]>{{  data[field.property] }}</cmacs-tag>&ndash;&gt;\r\n          <ng-container\r\n            *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && isDate(field)\">\r\n            {{ data[field.property]  | date: field.dateFormat}}</ng-container>\r\n          <ng-container\r\n            *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field)\">\r\n            {{ data[field.property] }}</ng-container>-->\r\n        </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                host: {
                    '[class.cmacs-compact-table-logs]': 'logs'
                },
                styles: [":host ::ng-deep .ant-table-thead>tr>th{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;background:0 0!important}:host ::ng-deep .ant-table-header{background:0 0}.ant-table-tbody>tr>td{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae}.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child,.ant-table-tbody>tr:hover td:first-child{border-left:3px solid #2a7cff}.ant-table-tbody>tr.cmacs-compact-table-header-logs td:first-child{border-left:3px solid #f6f7fb}.ant-table-tbody>.ant-table-selected-row:hover td{border-bottom:1px solid #2a7cff;border-top:1px solid #2a7cff}.editable-cell{position:relative}:host ::ng-deep .ant-rate-star{font-size:16px}:host ::ng-deep .ant-table-thead>tr>th:first-child{border-left:3px solid transparent}.ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.ant-table-tbody>tr td:first-child{border-left:3px solid #fff}.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,.ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,:host ::ng-deep .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,:host ::ng-deep .ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td{background-color:#fff}.ant-table-tbody>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,:host ::ng-deep .ant-table-thead>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,:host ::ng-deep .ant-table-thead>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#f6f7fb}.ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff;border-left-color:#f2f7ff}:host ::ng-deep .ant-spin-nested-loading{clear:both}.cmacs-compact-table-extra,.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}.cmacs-compact-table-extra{position:relative;top:5px}.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}.cmacs-compact-table-extra a i:hover,.cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}:host ::ng-deep a,:host ::ng-deep a:hover{color:#656c79}.cmacs-compact-table-edit-icon,.cmacs-compact-table-edit-icon-view{float:right;font-size:14px;position:relative;top:3px;opacity:0}.cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-edit-icon{opacity:1}.cmacs-compact-table-input,.cmacs-compact-table-input:focus,.cmacs-compact-table-input:hover,.cmacs-compact-table-select{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff}.cmacs-compact-table-on-edit{padding:0 6px!important}.cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}.cmacs-compact-table-calendar-icon,.cmacs-compact-table-calendar-icon-view,.cmacs-compact-table-input-number-icon,.cmacs-compact-table-input-number-icon-view,.cmacs-compact-table-select-icon,.cmacs-compact-table-select-icon-view{float:right;font-size:14px;position:relative;top:3px}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon{color:#656c79}.cmacs-compact-table-calendar-icon:hover,.cmacs-compact-table-input-number-icon:hover,.cmacs-compact-table-select-icon:hover{cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-date,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select{border-bottom:2px dotted #656c79}.cmacs-compact-table-date cmacs-picker span input,::ng-deep .ant-calendar-input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}cmacs-select{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}:host ::ng-deep .ant-select-arrow{right:6px}cmacs-input-number,cmacs-input-number:focus,cmacs-input-number:focus-within,cmacs-input-number:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff!important}.cmacs-compact-table-overflow-cell{max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}td{text-align:left}:host ::ng-deep .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}.cmacs-compact-table-header-logs,.cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}.cmacs-compact-table-logs-header-th-font,.cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb}:host ::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb}"]
            }] }
];
/** @nocollapse */
CmacsCompactTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ExportAsService },
    { type: ExcelService },
    { type: DatePipe },
    { type: CookieService }
];
CmacsCompactTableComponent.propDecorators = {
    size: [{ type: Input }],
    showTotal: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    logs: [{ type: Input }],
    expandable: [{ type: Input }],
    virtualItemSize: [{ type: Input }],
    loadingDelay: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    total: [{ type: Input }],
    title: [{ type: Input }],
    footer: [{ type: Input }],
    noResult: [{ type: Input }],
    widthConfig: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    data: [{ type: Input }],
    config: [{ type: Input }],
    configChange: [{ type: Output }],
    fieldId: [{ type: Input }],
    gridID: [{ type: Input }],
    paginationPosition: [{ type: Input }],
    scroll: [{ type: Input }],
    nzItemRender: [{ type: Input }, { type: ViewChild, args: ['renderItemTemplate',] }],
    frontPagination: [{ type: Input }],
    templateMode: [{ type: Input }],
    bordered: [{ type: Input }],
    showPagination: [{ type: Input }],
    loading: [{ type: Input }],
    showSizeChanger: [{ type: Input }],
    hideOnSinglePage: [{ type: Input }],
    showQuickJumper: [{ type: Input }],
    simple: [{ type: Input }],
    checkboxSelect: [{ type: Input }],
    inLineEdit: [{ type: Input }],
    dataTable: [{ type: Input }],
    showRate: [{ type: Input }],
    exportEvent: [{ type: Input }],
    buttonClick: [{ type: Output }],
    rateChange: [{ type: Output }],
    selectionChange: [{ type: Output }],
    ondlclickRow: [{ type: Output }],
    onclickRow: [{ type: Output }],
    onedit: [{ type: Output }],
    rateCount: [{ type: Input }],
    multiSelect: [{ type: Input }],
    sortChange: [{ type: Output }],
    extra: [{ type: Input }],
    indentSize: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['fieldTypeInput', { read: ElementRef },] }],
    inputNumberElement: [{ type: ViewChild, args: ['fieldTypeInputNumber', { read: ElementRef },] }],
    datePickerElement: [{ type: ViewChild, args: ['fieldTypeDatePicker', { read: ElementRef },] }],
    selectElement: [{ type: ViewChild, args: ['fieldTypeSelect', { read: ElementRef },] }],
    boolElement: [{ type: ViewChild, args: ['fieldTypeBool', { read: ElementRef },] }],
    handleClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "virtualScroll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "logs", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "expandable", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "virtualItemSize", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "frontPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "templateMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "bordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "showPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "showSizeChanger", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "hideOnSinglePage", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "showQuickJumper", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "simple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "checkboxSelect", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "inLineEdit", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "dataTable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "showRate", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "multiSelect", void 0);
if (false) {
    /** @type {?} */
    CmacsCompactTableComponent.prototype.locale;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.headerBottomStyle;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.destroy$;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.size;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showTotal;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.virtualScroll;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.logs;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.expandable;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.virtualItemSize;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.loadingDelay;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.loadingIndicator;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.total;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.title;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.footer;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.noResult;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.widthConfig;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.pageIndex;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.pageSize;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.data;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.config;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.configChange;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.fieldId;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.gridID;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.paginationPosition;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.scroll;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.nzItemRender;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.frontPagination;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.templateMode;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.bordered;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showPagination;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.loading;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showSizeChanger;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.hideOnSinglePage;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showQuickJumper;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.simple;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.checkboxSelect;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inLineEdit;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.dataTable;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showRate;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.exportEvent;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.buttonClick;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.rateChange;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.selectionChange;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.ondlclickRow;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.onclickRow;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.onedit;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.rateCount;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.multiSelect;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.sortChange;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.extra;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.indentSize;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.selected;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.defaultSortOrder;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.checkboxCache;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.isIndeterminate;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.allChecked;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.editId;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.property;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.rowOnEdition;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.mapOfExpandedData;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.fieldID;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputNumberElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.datePickerElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.selectElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.boolElement;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.exportAsService;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.excelService;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.datePipe;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.cookies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFN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Riw2Q0FBeUI7O0lBQ3pCLDRDQUF3Qjs7SUFDeEIsd0RBQWtFOztJQUNsRSw0Q0FBaUY7O0lBQ2pGLGtEQUdHOztJQUNILHFEQUFnRDs7SUFDaEQsa0RBQThDOztJQUM5Qyw4Q0FBMEM7O0lBQzFDLG9EQUErQzs7SUFDL0MsNkNBQXlDOztJQUN6QyxxREFBaUQ7O0lBQ2pELHNEQUFrRDs7SUFDbEQscURBQWlEOztJQUNqRCw0Q0FBd0M7O0lBQ3hDLG9EQUFnRDs7SUFDaEQsZ0RBQTRDOztJQUM1QywrQ0FBMkM7O0lBQzNDLDhDQUEwQzs7SUFDMUMsaURBQXlEOztJQUN6RCxpREFBZ0Q7O0lBQ2hELGdEQUErQzs7SUFDL0MscURBQW9EOztJQUNwRCxrREFBaUQ7O0lBQ2pELGdEQUErQzs7SUFDL0MsNENBQTJDOztJQUMzQywrQ0FBdUI7O0lBQ3ZCLGlEQUE2Qzs7SUFDN0MsZ0RBQStDOztJQUUvQywyQ0FBMkM7O0lBQzNDLGdEQUFnQzs7SUFFaEMsOENBQWlCOztJQUNqQixzREFBd0I7O0lBQ3hCLG1EQUFxQzs7SUFDckMscURBQXdCOztJQUN4QixnREFBbUI7O0lBQ25CLDRDQUFzQjs7SUFDdEIsOENBQXdCOztJQUN4QixrREFBa0I7O0lBQ2xCLHVEQUFpRDs7SUFFakQsNkNBQW9COztJQUVwQixrREFBNEU7O0lBQzVFLHdEQUF3Rjs7SUFDeEYsdURBQXNGOztJQUN0RixtREFBOEU7O0lBQzlFLGlEQUEwRTs7Ozs7SUFvUXhFLHlDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQixxREFBd0M7Ozs7O0lBQ3hDLGtEQUFrQzs7Ozs7SUFDbEMsOENBQTBCOzs7OztJQUMxQiw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBHcmlkRXhwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtZXhwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEV4Y2VsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2V4cG9ydC10eXBlLmVudW0nO1xyXG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0IHtDaGVja2JveFNlbGVjdH0gZnJvbSBcIi4uL2NtYWNzLWdyaWQvY21hY3MtdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7aXNBcnJheX0gZnJvbSBcInV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tcGFjdFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3NdJzogJ2xvZ3MnXHJcbiAgfVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZU1EU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2dzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBkYXRhOiBUW10gPSBbXTtcclxuICBASW5wdXQoKSBjb25maWc6IEdyaWRDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBASW5wdXQoKSBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcblxyXG4gIGZpZWxkSUQ6IGFueSA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dE51bWJlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gaWQ7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywgKXtcclxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHtzb3J0TmFtZTogZmllbGRQcm9wZXJ0eSwgc29ydFZhbHVlOiAkZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgdGhpcy5kYXRlUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5zZWxlY3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHx8XHJcbiAgICAgICAgKHRoaXMuYm9vbEVsZW1lbnQgJiYgdGhpcy5ib29sRWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBnZXRDdXN0b21QYWRkaW5nKGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKCBub2RlOiBhbnksIGFuY2VzdG9yOiBhbnkgKSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0wICkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2hpbGRyZW5TdGF0ZShpdGVtOiBhbnkpIHtcclxuICAgIGxldCBpbmRldGVybWluYXRlO1xyXG4gICAgbGV0IGluaXQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZXMgPSB0aGlzLmNoZWNrQ2hpbGRyZW5TdGF0ZVJlYyhpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIC8qIGlmIChpbml0KSB7XHJcbiAgICAgICAgIGluZGV0ZXJtaW5hdGUgPSByZXM7XHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gcmVzICE9PSBpbmRldGVybWluYXRlID8gdHJ1ZSA6IHJlcztcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgIH0qL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGlsZHJlblN0YXRlUmVjKGl0ZW0pIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShpdGVtKSkge1xyXG4gICAgICBpdGVtLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGVja0NoaWxkcmVuU3RhdGVSZWMoZWxlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZShpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICByZXR1cm4gbm9kZS5zZWxlY3RlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdCh0aGlzLmRhdGEsIHRoaXMuY2hlY2tib3hDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuXHJcbiAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGFTZWxlY3RlZC5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2hlY2tib3hTdGF0ZSAoKXtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmFsbENoZWNrZWQgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpOiBGaWVsZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEFsbENoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyB0aGlzLmRhdGEgOiBbXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNUeXBlTnVtYmVyKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnbnVtYmVyJztcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnYm9vbGVhbic7XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc2F2ZWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmIHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5zdWJzY3JpYmUoKGNvbmZpZzogR3JpZEV4cENvbmZpZykgPT4ge1xyXG5cclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBDb252ZXJ0IHRyZWUgdG8gbGlzdCBpZiBleHBhbmRhYmxlICovXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgY29udmVydFRyZWVUb0xpc3Qocm9vdDogb2JqZWN0KTogYW55W10ge1xyXG4gICAgY29uc3Qgc3RhY2s6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBhcnJheTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2goeyAuLi5yb290LCBsZXZlbDogMCwgZXhwYW5kOiBmYWxzZSB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsgLi4ubm9kZS5jaGlsZHJlbltpXSwgbGV2ZWw6IG5vZGUubGV2ZWwgKyAxLCBleHBhbmQ6IGZhbHNlLCBwYXJlbnQ6IG5vZGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIGRhdGEuY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmZpbmQoYSA9PiBhW3RoaXMuZmllbGRJRF0gPT09IGRbdGhpcy5maWVsZElEXSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZShhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCB0aGlzLmRhdGEsIGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICB0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRyZWVDaGVja2JveGVzICgkZXZlbnQ6IGJvb2xlYW4sIGFycmF5OiBhbnksIGtleTogYW55KSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW1bdGhpcy5maWVsZElEXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmdldE5vZGUoa2V5KS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBjLCBjW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBkLCBrZXkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGFycmF5W3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgIGFycmF5LnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgICAgIHRoaXMuZ2V0Tm9kZShrZXkpLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldE5vZGUoa2V5OiBhbnkpIHtcclxuICAgIGxldCB0ZXN0ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihuID0+IG4uZGF0YVt0aGlzLmZpZWxkSURdID09PSBrZXkpO1xyXG4gICAgcmV0dXJuIHRlc3QgPyB0ZXN0WzBdIDoge3NlbGVjdGVkOiBmYWxzZX07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICBlbGVtZW50SWQ6IHRoaXMuZ3JpZElELCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2Uuc2F2ZShleHBvcnRBc0NvbmZpZywgZmlsZU5hbWUgKyAnX2V4cG9ydF8nICsgRGF0ZS5ub3coKSk7XHJcbiAgICAgIHRoaXMuZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9FeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRBc0V4Y2VsRmlsZShkYXRhVG9FeHBvcnQsIGZpbGVOYW1lKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvUGRmKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IFtdO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2godGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5zYXZlKGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgJiYgaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKVxyXG4gICAgICAgICAgLmZvckVhY2goZWxlbSA9PiBlbGVtLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gIXRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgZGJsQ2xpY2tSb3coZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uZGxjbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuIl19