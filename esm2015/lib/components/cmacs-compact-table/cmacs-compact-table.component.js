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
import { moveItemInArray } from "@angular/cdk/drag-drop";
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
        this.smartTable = false;
        this.draggable = false;
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
        this.onrowdeleted = new EventEmitter();
        this.onrowadded = new EventEmitter();
        this.indentSize = 0;
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.mapOfExpandedData = {};
        this.defaultTimeValue = new Date();
        this.fieldID = null;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    addRow(idx) {
        /** @type {?} */
        const newitem = {};
        this.config.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            newitem[field.property] = field.default;
        }));
        newitem[this.config.fieldId] = Math.random().toString(36).substring(10);
        this.data.splice(idx + 1, 0, newitem);
        this.data = [...this.data];
        this.onrowadded.emit(newitem);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (!this.draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.data = [...this.data];
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    deleteRow(idx) {
        /** @type {?} */
        const itemToRemove = this.data[idx];
        this.data = this.data.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item !== itemToRemove));
        this.onrowdeleted.emit(itemToRemove);
    }
    /**
     * @param {?} field
     * @return {?}
     */
    calcPadding(field) {
        if (!this.expandable) {
            for (const field of this.config.fields) {
                if (this.isNumber(field) || this.isDate(field) || this.isTime(field) || this.isSelect(field)) {
                    return 0;
                }
            }
            return 6;
        }
        if (this.isNumber(field) || this.isDate(field) || this.isTime(field) || this.isSelect(field)) {
            return 0;
        }
        return 6;
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
                (this.datePickerElement && !this.childOf(element, this.datePickerElement.nativeElement)) ||
                (this.dateTimePickerElement && !this.childOf(element, this.dateTimePickerElement.nativeElement)) ||
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
                selected: item.selected ? item.selected : false,
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
                /** @type {?} */
                let elementInCache = plainList.findIndex((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => el.data[this.config.fieldId] === elem[this.config.fieldId]));
                if (elementInCache < 0) {
                    plainList.push({
                        selected: false,
                        data: Object.assign({}, elem)
                    });
                }
                if (elem.children && elem.children.length > 0) {
                    this.convertExpandTreeToList(elem.children, plainList);
                }
            }));
        }
        else {
            /** @type {?} */
            let elementInCache = plainList.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            el => el.data[this.config.fieldId] === item[this.config.fieldId]));
            if (elementInCache < 0) {
                plainList.push({
                    selected: false,
                    data: Object.assign({}, item)
                });
            }
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
     * @param {?=} oninit
     * @return {?}
     */
    onCheckboxChange(oninit = false) {
        /** @type {?} */
        const dataSelected = this.checkCheckboxState();
        if (!oninit) {
            this.selectionChange.emit(dataSelected.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.data)));
        }
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
        if (this.config && this.config.fields) {
            return this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.hidden === undefined || !item.hidden));
        }
        return [];
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
     * @param {?} field
     * @return {?}
     */
    isBoolean(field) {
        return field !== undefined && field.editTemplate === TemplateType.Boolean;
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
    isTime(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Time;
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
        if (this.config) {
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
        return false;
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
        this.cdr.detectChanges();
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
            this.onCheckboxChange(true);
        }
        if (this.checkboxSelect && this.expandable && this.config) {
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
                case ExportType.PdfTree:
                    this.exportTreePdf(config.fileName);
                    break;
                case ExportType.XslxTree:
                    this.exportTreeExcel(config.fileName);
                    break;
            }
        }));
        /* Convert tree to list if expandable */
        if (this.expandable && this.config) {
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
        if (changes.data && this.config) {
            if (this.expandable) {
                if (!this.data.length) {
                    this.checkboxCache = [];
                    this.mapOfExpandedData = {};
                }
                this.updateCheckboxCacheTreeData();
                this.fieldID = this.config.fieldId;
                /** @type {?} */
                const coerceData = (/** @type {?} */ (this.data));
                coerceData.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    if (!this.mapOfExpandedData[item[this.fieldID]]) {
                        this.mapOfExpandedData[item[this.fieldID]] = this.convertTreeToList(item);
                    }
                }));
                this.onCheckboxChange();
            }
            else {
                this.updateCheckboxCache();
            }
        }
    }
    /* Expandable Rows */
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportTreePdf(fileName) {
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
        this.exportTreeToPdfRec(rows, this.data, 0);
        doc.autoTable({
            theme: 'striped',
            margin: { top: 5 },
            body: rows,
            columns
        });
        doc.save(fileName + '_export_' + Date.now());
    }
    /**
     * @param {?} rows
     * @param {?} data
     * @param {?=} offSetMargin
     * @return {?}
     */
    exportTreeToPdfRec(rows, data, offSetMargin = 0) {
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const itemToExport = [];
            /** @type {?} */
            const coercedItem = (/** @type {?} */ (item));
            /** @type {?} */
            let parentStyles = { cellPadding: [2, 2, 2, 2] };
            // tslint:disable-next-line: no-shadowed-variable
            this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @param {?} idx
             * @return {?}
             */
            (field, idx) => {
                parentStyles = { cellPadding: [2, 2, 2, 2] };
                if (!idx) {
                    parentStyles.cellPadding = [2, 2, 2, 2 + offSetMargin];
                }
                if (coercedItem.children && coercedItem.children.length) {
                    parentStyles.fillColor = [153, 204, 255];
                }
                if (item.celdType === CeldType.TemplateRef) {
                    itemToExport.push({ content: item[field.property].context.exportValue, styles: parentStyles });
                }
                else {
                    switch (field.editTemplate) {
                        case TemplateType.Select:
                            /** @type {?} */
                            const selectItem = field.select.selectData.find((/**
                             * @param {?} option
                             * @return {?}
                             */
                            option => option[field.select.value] === item[field.property]));
                            if (selectItem !== undefined) {
                                itemToExport.push({ content: selectItem[field.select.label], styles: parentStyles });
                            }
                            break;
                        case TemplateType.Date:
                            itemToExport.push({ content: this.datePipe.transform(item[field.property], 'MMMM dd yyyy'), styles: parentStyles });
                            break;
                        case TemplateType.Time:
                            itemToExport.push({ content: this.datePipe.transform(item[field.property], 'h:mm a'), styles: parentStyles });
                            break;
                        default:
                            itemToExport.push({ content: item[field.property], styles: parentStyles });
                            break;
                    }
                }
            }));
            rows.push(itemToExport);
            if (coercedItem.children && coercedItem.children.length) {
                this.exportTreeToPdfRec(rows, coercedItem.children, 5 + offSetMargin);
            }
        }));
    }
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
            item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
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
                else if (field.celdType === CeldType.TemplateRef) {
                    itemToExport[field.display] = item[field.property].context.exportValue;
                }
                else {
                    itemToExport[field.display] = item[field.property];
                }
            }));
            dataToExport.push(itemToExport);
        }));
        this.excelService.exportAsExcelFile(dataToExport, fileName);
    }
    /* Expandable Rows */
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportTreeExcel(fileName) {
        /** @type {?} */
        const dataToExport = [];
        this.exportTreeExcelRec(this.data, dataToExport);
        this.excelService.exportAsExcelFile(dataToExport, fileName);
    }
    /**
     * @param {?} data
     * @param {?} dataToExport
     * @return {?}
     */
    exportTreeExcelRec(data, dataToExport) {
        data.forEach((/**
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
            item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (item.celdType === CeldType.TemplateRef) {
                    itemToExport[field.display] = item[field.property].context.exportValue;
                }
                else {
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
                }
            }));
            dataToExport.push(itemToExport);
            /** @type {?} */
            const coercedItem = (/** @type {?} */ (item));
            if (coercedItem.children && coercedItem.children.length) {
                this.exportTreeExcelRec(coercedItem.children, dataToExport);
            }
        }));
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
        item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
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
            item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (field.celdType === CeldType.TemplateRef) {
                    itemToExport.push(item[field.property].context.exportValue);
                }
                else {
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
                        case TemplateType.Time:
                            itemToExport.push(this.datePipe.transform(item[field.property], 'h:mm a'));
                            break;
                        default:
                            itemToExport.push(item[field.property]);
                            break;
                    }
                }
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
    /**
     * @param {?} data
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    clickBooleanCell(data, id, property, event) {
        data[property] = (data[property] === false || data[property] === 'false');
        this.startEdit(id, property, event);
    }
}
CmacsCompactTableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-compact-table',
                exportAs: 'cmacsCompactTable',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit\" class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n          <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n             (click)=\"addRow(-1)\"></i>\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n                 [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n                 *ngIf=\"draggable\" nzWidth=\"2%\">\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n          *ngFor=\"let field of getFields()\" [nzShowSort]=\"field.showSort\"\r\n          [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n          nzWidth=\"{{field.width}}\">\r\n          <ng-container *ngIf=\"!field.template\">{{field.display}}</ng-container>\r\n          <ng-container *ngIf=\"field.template\" [ngTemplateOutlet]=\"field.template.ref\"\r\n                        [ngTemplateOutletContext]=\"field.template.context\">\r\n          </ng-container>\r\n        </th>\r\n\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <td *ngIf=\"smartTable && inLineEdit\" class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n        </td>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody cdkDropList\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n        <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n          <ng-container *ngFor=\"let data of gridComponent.data;\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && item.children && item.children.length\"\r\n                  (dblclick)=\"dblClickRow(item)\">\r\n                <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                >\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"checkChildrenState(item)\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item)\"\r\n                  ></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field))\"\r\n                    [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] || property === field.property) &&\r\n                isNumber(field)\"\r\n                    [style.paddingBottom.px]=\"calcPadding(field)\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    (nzExpandChange)=\"collapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                >\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                    *ngIf=\"(editId !== item[config.fieldId] || property !== field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                    *ngIf=\"(editId === item[config.fieldId] && property === field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: i}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                     *ngIf=\"showRate && config\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                      *ngIf=\"extra\">\r\n                </td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #defaultTpl>\r\n          <tr cdkDrag [cdkDragDisabled]=\"!draggable\" *ngFor=\"let data of gridComponent.data; index as i\" (click)=\"clickRow(data)\" (dblclick)=\"dblClickRow(data)\"\r\n                [class.ant-table-selected-row]=\"isRowSelected(data)\" [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n                [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n            >\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\" class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n                   (click)=\"addRow(i)\"></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"draggable\" nzWidth=\"3%\" class=\"cmacs-compact-table-drag-col\">\r\n                <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"checkboxSelect && config\" nzWidth=\"2%\">\r\n                <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                       (checkedChange)=onCheckboxChange()\r\n                       *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n              </td>\r\n\r\n              <td *ngFor=\"let field of getFields(); index as j\"\r\n                  [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property) &&\r\n                (isString(field) || isDate(field) || isSelect(field))\"\r\n                  [class.cmacs-compact-table-on-edit-no-padding]=\"editId === data[config.fieldId] && property === field.property &&\r\n                isNumber(field)\"\r\n                  [style.paddingBottom.px]=\"calcPadding(field)\"\r\n              >\r\n\r\n                <div\r\n                  *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property)\">\r\n                  <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data}\"></ng-container>\r\n                </div>\r\n\r\n                <div\r\n                  *ngIf=\"config && (editId === data[config.fieldId] && property === field.property)\">\r\n                  <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n                </div>\r\n\r\n              </td>\r\n\r\n              <td *ngIf=\"showRate && config\">\r\n                <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                         (click)=\"onRateClick($event)\"></nz-rate>\r\n              </td>\r\n\r\n              <td *ngIf=\"extra\">\r\n              </td>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\" class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close1\"\r\n                   (click)=\"deleteRow(i)\"></i>\r\n              </td>\r\n            </tr>\r\n        </ng-template>\r\n\r\n        <ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n          <!--Editable String Edit Mode-->\r\n          <input #fieldTypeInput class=\"cmacs-compact-table-input\" *ngIf=\"isString(field)\" type=\"text\"\r\n                 cmacs-input [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n          <!--Editable DatePicker Edit Mode-->\r\n          <cmacs-date-picker class=\"cmacs-compact-table-date\" #fieldTypeDatePicker *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\" [allowClear]=\"false\"\r\n                             open [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n          </cmacs-date-picker>\r\n\r\n          <!--Editable DateTimePicker Edit Mode-->\r\n          <cmacs-datetime-picker #fieldTypeDateTimePicker *ngIf=\"isTime(field)\" [use12Hours]=\"true\" format=\"h:mm a\"\r\n                                 [defaultOpenValue]=\"defaultTimeValue\" [(ngModel)]=\"data[field.property]\"\r\n                                 [cmacsOpen]=\"true\" (openChange)=\"endEditModeNgModel(i)\">\r\n          </cmacs-datetime-picker>\r\n\r\n          <!--Editable Select Edit Mode-->\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" showSearch\r\n                        [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                          value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>\r\n\r\n          <!--Editable InpuNumber Edit Mode-->\r\n          <cmacs-input-number #fieldTypeInputNumber\r\n                              *ngIf=\"isTypeNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                              [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\">\r\n          </cmacs-input-number>\r\n\r\n          <!--Editable Boolean Edit Mode-->\r\n          <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(field)\"\r\n          [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n          <!--<cmacs-input-number #fieldTypeInputNumber id=\"testing2\"\r\n            *ngIf=\"isNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n            [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\"></cmacs-input-number>\r\n\r\n\r\n\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 200px;\" showSearch\r\n            [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n              value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>-->\r\n        </ng-template>\r\n\r\n        <ng-template #viewModeTpl let-field=\"field\" let-data=\"data\">\r\n          <ng-container>\r\n\r\n            <!--Editable String View Mode-->\r\n            <ng-container *ngIf=\"config && isString(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell\"\r\n              [class.cmacs-table-overflow-cell-logs]=\"expandable\">{{ data[field.property] }}</div>\r\n              <i class=\"iconUISmall-Edit\"\r\n                 [class.cmacs-compact-table-edit-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n            <!--Editable DatePicker View Mode-->\r\n            <ng-container *ngIf=\"config && isDate(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-date\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n              <i class=\"iconUILarge-Calendar\"\r\n                 [class.cmacs-compact-table-calendar-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable DateTimePicker View Mode-->\r\n            <ng-container *ngIf=\"config && isTime(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-date\">{{ data[field.property]  | date: \"h:mm a\"}}</div>\r\n              <i class=\"iconUILarge-Time\"\r\n                 [class.cmacs-compact-table-calendar-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable Select View Mode-->\r\n            <ng-container *ngIf=\"config && isSelect(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-select\">{{ getLabel(data, field) }}</div>\r\n              <i class=\"iconArrowLarge-Chevron-Down\"\r\n                 [class.cmacs-compact-table-select-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable InputNumber View Mode-->\r\n            <ng-container *ngIf=\"config && isNumber(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-input-number\">{{ data[field.property] }}</div>\r\n              <i class=\"iconArrowLarge-Solid-UpDown\"\r\n                 [class.cmacs-compact-table-input-number-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n            <!--Boolean View Mode-->\r\n            <ng-container *ngIf=\"config && isBoolean(field)\">\r\n              <span *ngIf=\"data[field.property] == false || data[field.property] == 'false'\"\r\n                    class=\"cmacs-compact-table-boolean-false-icon\"\r\n                    [class.cmacs-compact-table-boolean-icon]=\"inLineEdit\"\r\n                    (click)=\"clickBooleanCell(data, data[config.fieldId], field.property, $event)\"></span>\r\n              <i *ngIf=\"data[field.property] === true || data[field.property] === 'true'\"\r\n                  class=\"iconUILarge-Select-All\"\r\n                  [class.cmacs-compact-table-boolean-icon]=\"inLineEdit\"\r\n                  (click)=\"clickBooleanCell(data, data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!-- Template View Mode  -->\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n            </ng-container>\r\n\r\n          </ng-container>\r\n        </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                host: {
                    '[class.cmacs-compact-table-logs]': 'logs'
                },
                styles: [":host ::ng-deep .ant-table-thead>tr>th{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;background:0 0!important}::ng-deep .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:-webkit-inline-box;display:inline-flex;width:auto!important}.cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 10px;margin:0;position:relative;top:3px}.cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:center;min-width:100%}.cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:center}.cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}.cmacs-compact-table-drag-col{padding:0!important;margin:0!important}:host ::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,:host ::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}:host ::ng-deep .ant-table-header{background:0 0}.cmacs-compact-table-balance-padding{padding:6px!important}.ant-table-tbody>tr>td{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;background-color:#fff}.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child,.ant-table-tbody>tr:hover td:first-child{border-left:3px solid #2a7cff}.ant-table-tbody>tr.cmacs-compact-table-smart-table-row:hover td:first-child{border-left:3px solid transparent}.ant-table-tbody>tr.cmacs-compact-table-header-logs td:first-child{border-left:3px solid #f6f7fb}.ant-table-tbody>.ant-table-selected-row:hover td{border-bottom:1px solid #2a7cff;border-top:1px solid #2a7cff}.editable-cell{position:relative}:host ::ng-deep .ant-rate-star{font-size:16px;margin:0}:host ::ng-deep .ant-table-thead>tr>th:first-child{border-left:3px solid transparent}.ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover{box-shadow:0 3px 7px -7px rgba(5,6,6,.18)}.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}.cmacs-compact-table-smart-table-hot-spot-row-add,.cmacs-compact-table-smart-table-hot-spot-row-add:hover,.cmacs-compact-table-smart-table-hot-spot-row-delete,.cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:transparent!important}.cmacs-compact-table-smart-table-hot-spot-row-add:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1}.cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,.cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}.cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:-webkit-box;display:flex;opacity:0}.cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:-webkit-box;display:flex;opacity:0;position:relative;top:18px}.ant-table-tbody>tr td:first-child{border-left:3px solid transparent}.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,.ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,:host ::ng-deep .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,:host ::ng-deep .ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td{background-color:#fff}.ant-table-tbody>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,:host ::ng-deep .ant-table-thead>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,:host ::ng-deep .ant-table-thead>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#f6f7fb;box-shadow:0 3px 7px -7px rgba(5,6,6,.18)}.ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff;border-left-color:#f2f7ff}:host ::ng-deep .ant-spin-nested-loading{clear:both}.cmacs-compact-table-extra,.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}.cmacs-compact-table-extra{position:relative;top:5px}.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}.cmacs-compact-table-extra a i:hover,.cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}:host ::ng-deep a,:host ::ng-deep a:hover{color:#656c79}.cmacs-compact-table-edit-icon,.cmacs-compact-table-edit-icon-view{float:right;font-size:14px;position:relative;top:3px;opacity:0}.cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-edit-icon{opacity:1}.cmacs-compact-table-input,.cmacs-compact-table-input:focus,.cmacs-compact-table-input:hover,.cmacs-compact-table-select{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff}.cmacs-compact-table-on-edit{padding:0 6px!important}.cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}.cmacs-compact-table-calendar-icon,.cmacs-compact-table-calendar-icon-view,.cmacs-compact-table-input-number-icon,.cmacs-compact-table-input-number-icon-view,.cmacs-compact-table-select-icon,.cmacs-compact-table-select-icon-view{float:right;font-size:14px;position:relative;top:3px}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon{color:#656c79}.cmacs-compact-table-calendar-icon:hover,.cmacs-compact-table-input-number-icon:hover,.cmacs-compact-table-select-icon:hover{cursor:pointer}.cmacs-compact-table-date,.cmacs-compact-table-input-number,.cmacs-compact-table-select{border-bottom:2px dotted transparent}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-date,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select{border-bottom:2px dotted #656c79}.cmacs-compact-table-date cmacs-picker span input,::ng-deep .ant-calendar-input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}cmacs-select{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}:host ::ng-deep .ant-select-arrow{right:6px}cmacs-input-number,cmacs-input-number:focus,cmacs-input-number:focus-within,cmacs-input-number:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff!important}.cmacs-compact-table-overflow-cell{max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}td{text-align:left}:host ::ng-deep .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}.cmacs-compact-table-header-logs,.cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}.cmacs-compact-table-logs-header-th-font,.cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important}:host ::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}.cmacs-table-overflow-cell-logs{max-width:calc(100% - 14px)}.cmacs-compact-table-overflow-cell-container-logs{max-width:calc(100% - 22px)}.cmacs-compact-table-boolean-false-icon{width:10px;border:1px solid #adaebb;height:10px;display:block}.cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important}.cdk-drag-placeholder{border-bottom:1px solid #2a7cff!important}"]
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
    smartTable: [{ type: Input }],
    draggable: [{ type: Input }],
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
    onrowdeleted: [{ type: Output }],
    onrowadded: [{ type: Output }],
    extra: [{ type: Input }],
    indentSize: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['fieldTypeInput', { read: ElementRef },] }],
    inputNumberElement: [{ type: ViewChild, args: ['fieldTypeInputNumber', { read: ElementRef },] }],
    datePickerElement: [{ type: ViewChild, args: ['fieldTypeDatePicker', { read: ElementRef },] }],
    dateTimePickerElement: [{ type: ViewChild, args: ['fieldTypeDateTimePicker', { read: ElementRef },] }],
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
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "smartTable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "draggable", void 0);
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
    CmacsCompactTableComponent.prototype.smartTable;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.draggable;
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
    CmacsCompactTableComponent.prototype.onrowdeleted;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.onrowadded;
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
    CmacsCompactTableComponent.prototype.defaultTimeValue;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.fieldID;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputNumberElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.datePickerElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.dateTimePickerElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFN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Rjs7SUFDbEYsNkNBQXlCOztJQUN6Qiw0Q0FBd0I7O0lBQ3hCLHdEQUFrRTs7SUFDbEUsNENBQWlGOztJQUNqRixrREFHRzs7SUFDSCxxREFBZ0Q7O0lBQ2hELGtEQUE4Qzs7SUFDOUMsOENBQTBDOztJQUMxQyxvREFBK0M7O0lBQy9DLDZDQUF5Qzs7SUFDekMscURBQWlEOztJQUNqRCxzREFBa0Q7O0lBQ2xELHFEQUFpRDs7SUFDakQsNENBQXdDOztJQUN4QyxvREFBZ0Q7O0lBQ2hELGdEQUE0Qzs7SUFDNUMsK0NBQTJDOztJQUMzQyw4Q0FBMEM7O0lBQzFDLGlEQUF5RDs7SUFDekQsaURBQWdEOztJQUNoRCxnREFBK0M7O0lBQy9DLHFEQUFvRDs7SUFDcEQsa0RBQWlEOztJQUNqRCxnREFBK0M7O0lBQy9DLDRDQUEyQzs7SUFDM0MsK0NBQXVCOztJQUN2QixpREFBNkM7O0lBQzdDLGdEQUErQzs7SUFDL0Msa0RBQWlEOztJQUNqRCxnREFBK0M7O0lBRS9DLDJDQUEyQzs7SUFDM0MsZ0RBQWdDOztJQUVoQyw4Q0FBaUI7O0lBQ2pCLHNEQUF3Qjs7SUFDeEIsbURBQXFDOztJQUNyQyxxREFBd0I7O0lBQ3hCLGdEQUFtQjs7SUFDbkIsNENBQXNCOztJQUN0Qiw4Q0FBd0I7O0lBQ3hCLGtEQUFrQjs7SUFDbEIsdURBQWlEOztJQUNqRCxzREFBOEI7O0lBRTlCLDZDQUFvQjs7SUFFcEIsa0RBQTRFOztJQUM1RSx3REFBd0Y7O0lBQ3hGLHVEQUFzRjs7SUFDdEYsMkRBQTZGOztJQUM3RixtREFBOEU7O0lBQzlFLGlEQUEwRTs7Ozs7SUE4VHhFLHlDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQixxREFBd0M7Ozs7O0lBQ3hDLGtEQUFrQzs7Ozs7SUFDbEMsOENBQTBCOzs7OztJQUMxQiw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBHcmlkRXhwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtZXhwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEV4Y2VsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2V4cG9ydC10eXBlLmVudW0nO1xyXG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0IHtDaGVja2JveFNlbGVjdH0gZnJvbSBcIi4uL2NtYWNzLWdyaWQvY21hY3MtdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7aXNBcnJheX0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbWFydFRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBASW5wdXQoKSBjb25maWc6IEdyaWRDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBASW5wdXQoKSBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgcmF0ZUNvdW50ID0gNTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlTZWxlY3QgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2RlbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcbiAgZGVmYXVsdFRpbWVWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGZpZWxkSUQ6IGFueSA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dE51bWJlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlVGltZVBpY2tlcicsIHsgcmVhZDogRWxlbWVudFJlZn0pIGRhdGVUaW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBhZGRSb3coaWR4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG5ld2l0ZW06IGFueSA9IHt9O1xyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xyXG4gICAgICBuZXdpdGVtW2ZpZWxkLnByb3BlcnR5XSA9IGZpZWxkLmRlZmF1bHQ7XHJcbiAgICB9KTtcclxuICAgIG5ld2l0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0gPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTApO1xyXG4gICAgdGhpcy5kYXRhLnNwbGljZSggaWR4ICsgMSwgMCwgbmV3aXRlbSk7XHJcbiAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhXTtcclxuICAgIHRoaXMub25yb3dhZGRlZC5lbWl0KG5ld2l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJvdyhpZHg6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gdGhpcy5kYXRhW2lkeF07XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gaXRlbVRvUmVtb3ZlKTtcclxuICAgIHRoaXMub25yb3dkZWxldGVkLmVtaXQoaXRlbVRvUmVtb3ZlKTtcclxuICB9XHJcblxyXG4gIGNhbGNQYWRkaW5nKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgaWYgKCF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bWJlcihmaWVsZCkgfHwgdGhpcy5pc0RhdGUoZmllbGQpIHx8IHRoaXMuaXNUaW1lKGZpZWxkKSB8fCB0aGlzLmlzU2VsZWN0KGZpZWxkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiA2O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNOdW1iZXIoZmllbGQpIHx8IHRoaXMuaXNEYXRlKGZpZWxkKSB8fCB0aGlzLmlzVGltZShmaWVsZCkgfHwgdGhpcy5pc1NlbGVjdChmaWVsZCkpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuXHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gaWQ7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywgKXtcclxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHtzb3J0TmFtZTogZmllbGRQcm9wZXJ0eSwgc29ydFZhbHVlOiAkZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVUaW1lUGlja2VyRWxlbWVudCAmJiAgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVUaW1lUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5zZWxlY3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHx8XHJcbiAgICAgICAgKHRoaXMuYm9vbEVsZW1lbnQgJiYgdGhpcy5ib29sRWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBnZXRDdXN0b21QYWRkaW5nKGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKCBub2RlOiBhbnksIGFuY2VzdG9yOiBhbnkgKSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0wICkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZCA/IGl0ZW0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB7IC4uLml0ZW0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGlsZHJlblN0YXRlKGl0ZW06IGFueSkge1xyXG4gICAgbGV0IGluZGV0ZXJtaW5hdGU7XHJcbiAgICBsZXQgaW5pdCA9IHRydWU7XHJcblxyXG4gICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY2hlY2tDaGlsZHJlblN0YXRlUmVjKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlcylcclxuICAgICAgLyogaWYgKGluaXQpIHtcclxuICAgICAgICAgaW5kZXRlcm1pbmF0ZSA9IHJlcztcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiByZXMgIT09IGluZGV0ZXJtaW5hdGUgPyB0cnVlIDogcmVzO1xyXG4gICAgICAgfVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgfSovXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoaWxkcmVuU3RhdGVSZWMoaXRlbSkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrQ2hpbGRyZW5TdGF0ZVJlYyhlbGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIHJldHVybiBub2RlLnNlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCkge1xyXG4gICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdCh0aGlzLmRhdGEsIHRoaXMuY2hlY2tib3hDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGVsZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB7IC4uLmVsZW0gfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbiAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuY29udmVydEV4cGFuZFRyZWVUb0xpc3QoZWxlbS5jaGlsZHJlbiwgcGxhaW5MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IHsuLi5pdGVtfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKG9uaW5pdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUgKCl7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5hbGxDaGVja2VkID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aDtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIG9uUmF0ZUNoYW5nZShjb3VudDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGFbdGhpcy5jb25maWcuZmllbGRSYXRlXSA9IGNvdW50O1xyXG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEFsbENoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyB0aGlzLmRhdGEgOiBbXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNUeXBlTnVtYmVyKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnbnVtYmVyJztcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW4gO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICB9XHJcblxyXG4gIGlzVGltZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUJ1dHRvbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5CdXR0b247XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGFnKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZztcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG5cclxuICBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICAvLyByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMub25DaGVja2JveENoYW5nZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiB0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuXHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmVHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZVBkZihjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHhUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBDb252ZXJ0IHRyZWUgdG8gbGlzdCBpZiBleHBhbmRhYmxlICovXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGEgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYoIXRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVQZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCB0aGlzLmRhdGEsIDApO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5zYXZlKGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZVRvUGRmUmVjIChyb3dzOiBhbnksIGRhdGE6IGFueSwgb2ZmU2V0TWFyZ2luID0gMCkge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGxldCBwYXJlbnRTdHlsZXM6IGFueSA9IHtjZWxsUGFkZGluZzogIFsyLCAyLCAyLCAyXX07XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKChmaWVsZCwgaWR4KSA9PiB7XHJcblxyXG4gICAgICAgIHBhcmVudFN0eWxlcyA9IHtjZWxsUGFkZGluZzogIFsyLCAyLCAyLCAyXX07XHJcbiAgICAgICAgaWYgKCFpZHgpIHtcclxuICAgICAgICAgIHBhcmVudFN0eWxlcy5jZWxsUGFkZGluZyA9IFsyLCAyLCAyLCAyICsgb2ZmU2V0TWFyZ2luXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIHBhcmVudFN0eWxlcy5maWxsQ29sb3IgPSBbMTUzLCAyMDQsIDI1NV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHtjb250ZW50OiBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlLCBzdHlsZXM6IHBhcmVudFN0eWxlc30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHtjb250ZW50OiBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0sIHN0eWxlczogcGFyZW50U3R5bGVzfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHtjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpLCBzdHlsZXM6IHBhcmVudFN0eWxlc30pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHtjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCAgc3R5bGVzOiBwYXJlbnRTdHlsZXN9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7Y29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0sIHN0eWxlczogcGFyZW50U3R5bGVzfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByb3dzLnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3MsIGNvZXJjZWRJdGVtLmNoaWxkcmVuLCA1ICsgb2ZmU2V0TWFyZ2luKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRyZWVUb0xpc3Qocm9vdDogb2JqZWN0KTogYW55W10ge1xyXG4gICAgY29uc3Qgc3RhY2s6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBhcnJheTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2goeyAuLi5yb290LCBsZXZlbDogMCwgZXhwYW5kOiBmYWxzZSB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsuLi5ub2RlLmNoaWxkcmVuW2ldLCBsZXZlbDogbm9kZS5sZXZlbCArIDEsIGV4cGFuZDogZmFsc2UsIHBhcmVudDogbm9kZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlOiBhbnksIGhhc2hNYXA6IGFueSwgYXJyYXk6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICBoYXNoTWFwW25vZGVbdGhpcy5maWVsZElEXV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sbGFwc2UoYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5maW5kKGEgPT4gYVt0aGlzLmZpZWxkSURdID09PSBkW3RoaXMuZmllbGRJRF0pITtcclxuICAgICAgICAgIHRhcmdldC5leHBhbmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29sbGFwc2UoYXJyYXksIHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgdGhpcy5kYXRhLCBpdGVtW3RoaXMuZmllbGRJRF0pO1xyXG4gICAgdGhpcy5vbkNoZWNrYm94Q2hhbmdlKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcyAoJGV2ZW50OiBib29sZWFuLCBhcnJheTogYW55LCBrZXk6IGFueSkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtW3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgICAgdGhpcy5nZXROb2RlKGtleSkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgYywgY1t0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goKGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgZCwga2V5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChhcnJheVt0aGlzLmZpZWxkSURdID09PSBrZXkpIHtcclxuICAgICAgICBhcnJheS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgICAgICB0aGlzLmdldE5vZGUoa2V5KS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXROb2RlKGtleTogYW55KSB7XHJcbiAgICBsZXQgdGVzdCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIobiA9PiBuLmRhdGFbdGhpcy5maWVsZElEXSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHtzZWxlY3RlZDogZmFsc2V9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgZWxlbWVudElkOiB0aGlzLmdyaWRJRCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLnNhdmUoZXhwb3J0QXNDb25maWcsIGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gICAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5leHBvcnRUcmVlRXhjZWxSZWModGhpcy5kYXRhLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUcmVlRXhjZWxSZWMoZGF0YTogYW55LCBkYXRhVG9FeHBvcnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKGNvZXJjZWRJdGVtLmNoaWxkcmVuLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0VG9QZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnTU1NTSBkZCB5eXl5JykpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnaDptbSBhJykpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jLmF1dG9UYWJsZSh7XHJcbiAgICAgIHRoZW1lOiAnc3RyaXBlZCcsXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDUgfSxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgY29sdW1uc1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jLnNhdmUoZmlsZU5hbWUgKyAnX2V4cG9ydF8nICsgRGF0ZS5ub3coKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tSb3coZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoIXRoaXMubXVsdGlTZWxlY3QpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgICAgICAuZm9yRWFjaChlbGVtID0+IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjbGlja0Jvb2xlYW5DZWxsKGRhdGE6IGFueSwgaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGRhdGFbcHJvcGVydHldID0gKGRhdGFbcHJvcGVydHldID09PSBmYWxzZSB8fCBkYXRhW3Byb3BlcnR5XSA9PT0gJ2ZhbHNlJyk7XHJcbiAgICB0aGlzLnN0YXJ0RWRpdChpZCwgcHJvcGVydHksIGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==