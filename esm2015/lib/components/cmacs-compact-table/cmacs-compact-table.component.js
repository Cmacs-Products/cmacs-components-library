/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core';
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
import { NzDropdownService } from "ng-zorro-antd";
import { FormControl } from "@angular/forms";
import { CmacsInputNumberComponent } from "../cmacs-input-number/cmacs-input-number.component";
import { UtilService } from '../core/services/util.service';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
/** @type {?} */
const moment = moment_;
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
     * @param {?} nzDropdownService
     * @param {?} cookies
     * @param {?} utilService
     */
    constructor(cdr, i18n, exportAsService, excelService, datePipe, nzDropdownService, cookies, utilService) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.excelService = excelService;
        this.datePipe = datePipe;
        this.nzDropdownService = nzDropdownService;
        this.cookies = cookies;
        this.utilService = utilService;
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
        this.expandAll = false;
        this.loadingDelay = 0;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.wrapLines = false;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.configChange = new EventEmitter();
        this.gridID = null;
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
        this.ondrop = new EventEmitter();
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
        this.nodeOnEdition = null;
        this.mapOfExpandedData = {};
        this.defaultTimeValue = new Date();
        this.lastIdxSelected = null;
        this.fieldID = null;
        this.editionOpTriggered = false;
        this.order = 0;
        this.clicks = 0;
        this.tapCount = 0;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    /*Context Menu */
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    contextMenu($event, template) {
        this.dropdown = this.nzDropdownService.create($event, template);
    }
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    validate(data, field) {
        /** @type {?} */
        const formControl = field.validators ? new FormControl(data[field.property], field.validators) : new FormControl(data[field.property]);
        data.valid = data.valid ? data.valid : {};
        data.valid[field.property] = formControl.valid;
        return formControl.valid;
    }
    /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    addRow(idx, $event = null) {
        this.onrowadded.emit(idx);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
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
        this.ondrop.emit(event);
    }
    /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    deleteRow(idx, $event = null) {
        /** @type {?} */
        const itemToRemove = this.data[idx];
        this.onrowdeleted.emit(itemToRemove);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
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
            if (this.editId !== null) {
                this.emitOnEditEvent();
            }
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
     * @param {?} field
     * @return {?}
     */
    getHeaderMaxWidth(field) {
        if (field.showSort) {
            return `calc(100% - 15px)`;
        }
        return `100%`;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleMouseDown(e) {
        /** @type {?} */
        const element = (/** @type {?} */ (e.target));
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && !this.childOf(element, this.datePickerElement.nativeElement)) ||
                (this.dateTimePickerElement && !this.childOf(element, this.dateTimePickerElement.nativeElement)) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && this.boolElement.nativeElement !== e.target))) {
                if (this.inputNumberComponent) {
                    this.inputNumberComponent.blur();
                }
                this.editId = null;
                this.emitOnEditEvent();
                this.property = null;
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
     * @param {?=} data
     * @return {?}
     */
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.editId = null;
            this.rowOnEdition = -1;
            if (this.expandable) {
                data.cmacsEditedProp = this.property;
                this.onedit.emit(data);
                return;
            }
            this.data[index].cmacsEditedProp = this.property;
            this.onedit.emit(this.data[index]);
            this.property = null;
        }
        else {
            if (this.expandable) {
                this.nodeOnEdition = data;
                return;
            }
            this.rowOnEdition = index;
        }
    }
    /**
     * @param {?} index
     * @param {?=} data
     * @param {?=} property
     * @return {?}
     */
    endEditModeNgModel(index, data = null, property = null) {
        if (this.expandable) {
            data.cmacsEditedProp = property ? property : this.property;
            this.onedit.emit(data);
        }
        else {
            this.data[index].cmacsEditedProp = property ? property : this.property;
            this.onedit.emit(this.data[index]);
        }
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.nodeOnEdition = null;
    }
    /**
     * @param {?} index
     * @param {?=} data
     * @return {?}
     */
    ngModelChange(index, data = null) {
        if (this.expandable) {
            this.nodeOnEdition = data;
            return;
        }
        this.rowOnEdition = index;
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
        /** @type {?} */
        const checkboxTempCache = [];
        for (let i = 0; i < this.data.length; i++) {
            checkboxTempCache.push({
                selected: this.editionOpTriggered ? false : this.data[i].selected,
                data: Object.assign({}, this.data[i]),
                order: this.data[i].selected ? this.order++ : -1
            });
        }
        this.checkboxCache = [...checkboxTempCache];
        if (this.editionOpTriggered) {
            this.editionOpTriggered = false;
        }
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
                        order: -1,
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
                    order: -1,
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
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    onCheckboxChange($event, data) {
        this.checkboxCache[this.getIndex(data[this.config.fieldId])].order = $event ? this.order++ : -1;
        this.refreshCheckboxState();
    }
    /**
     * @param {?=} oninit
     * @return {?}
     */
    refreshCheckboxState(oninit = false) {
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
        item => item.selected)).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        this.selected = this.allChecked = (dataSelected.length > 0 && (dataSelected.length === this.checkboxCache.length));
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
            element.order = -1;
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
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Select;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isString(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isNumber(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Number;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isBoolean(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Boolean;
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
    setFieldsDefault() {
        if (this.config && this.config.fields) {
            this.config.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                field.editable = field.editable === null || field.editable === undefined ? true : field.editable;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.gridID) {
            this.gridID = this.utilService.uuidv4();
        }
        this.setFieldsDefault();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
        if (this.checkboxSelect && !this.expandable) {
            this.updateCheckboxCache();
            this.refreshCheckboxState(true);
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
                    this.exportToPdf(config);
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
                this.refreshCheckboxState();
            }
            else {
                this.updateCheckboxCache();
            }
            this.checkCheckboxState();
        }
        if (changes.config) {
            this.setFieldsDefault();
        }
        this.cdr.detectChanges();
    }
    /* getTreeNodeByKey(node: any, key: any) {
        console.log(node)
        if (isArray(node)) {
          node.forEach(el => {
            this.getTreeNodeByKey(el, key);
          })
        } else if (node[this.fieldID] === key) {
          return node;
        } else if (node.children) {
          node.children.forEach(el => {
            this.getTreeNodeByKey(el, key);
          })
        }
      }*/
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
        /** @type {?} */
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName + '.pdf';
        doc.save(filenameFormatted);
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
        stack.push(Object.assign({}, root, { level: 0, expand: this.expandAll ? this.expandAll : root.expand }));
        while (stack.length !== 0) {
            /** @type {?} */
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(Object.assign({}, node.children[i], { level: node.level + 1, expand: this.expandAll ? this.expandAll : node.children[i].expand, parent: node }));
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
        this.refreshCheckboxState();
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
                    /** @type {?} */
                    const node = this.getNode(key);
                    node.selected = $event;
                    item.selected = $event;
                    node.order = $event ? this.order++ : -1;
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
                /** @type {?} */
                const node = this.getNode(key);
                node.selected = $event;
                node.order = $event ? this.order++ : -1;
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
        return test ? test[0] : { selected: false, data: null };
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToPng(fileName) {
        this.utilService.exportTable('png', fileName, this.gridID);
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
        /** @type {?} */
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
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
        /** @type {?} */
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
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
     * @param {?} config
     * @return {?}
     */
    exportToPdf(config) {
        this.utilService.exportTable('pdf', config.fileName, this.gridID, config.exportCompanyName, config.exportUserName, config.exportTitle, config.exportCompanyLogoUrl, config.exportTableCustomWidth, config.exportTableCustomHeight);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    clickRow(event, data) {
        this.clicks++;
        setTimeout((/**
         * @return {?}
         */
        () => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (this.clicks === 1) {
                this.selectRow(event, data);
            }
            if (this.clicks > 1) {
                this.dblClickRow(data);
            }
            this.clicks = 0;
        }), 300);
    }
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    selectRow(event, data) {
        this.onclickRow.emit(data);
        /* Get index of selection */
        /** @type {?} */
        const index = this.checkboxCache.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data[this.config.fieldId] === data[this.config.fieldId]));
        if (!this.checkboxSelect) {
            if (event && (toBoolean(event.ctrlKey) || toBoolean(event.shiftKey))) {
                /* Shift Selection */
                if (toBoolean(event.shiftKey)) {
                    this.selectMultiple(index);
                }
            }
            else {
                this.removeSelection(data);
            }
            /* Select element */
            if (index !== -1) {
                this.checkboxCache[index].selected = event && toBoolean(event.shiftKey) ? true : !this.checkboxCache[index].selected;
                /* Save last index selected */
                this.lastIdxSelected = this.checkboxCache[index].selected ? index : null;
            }
            /** @type {?} */
            const selectedItems = this.checkboxCache.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.selected));
            this.checkboxCache[index].order = this.checkboxCache[index].selected ? this.order++ : -1;
            this.selectionChange.emit(selectedItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.order - b.order)).map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.data)));
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    removeSelection(data) {
        this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected && item.data[this.config.fieldId] !== data[this.config.fieldId]))
            .forEach((/**
         * @param {?} elem
         * @return {?}
         */
        elem => { elem.selected = false; elem.order = -1; }));
    }
    /**
     * @param {?} currentIdx
     * @return {?}
     */
    selectMultiple(currentIdx) {
        if (this.lastIdxSelected !== null) {
            while (currentIdx !== this.lastIdxSelected) {
                this.checkboxCache[this.lastIdxSelected].selected = true;
                this.checkboxCache[this.lastIdxSelected].order = this.order++;
                this.lastIdxSelected = currentIdx > this.lastIdxSelected ? this.lastIdxSelected + 1 : this.lastIdxSelected - 1;
            }
        }
        else {
            this.checkboxCache[currentIdx].selected = true;
            this.checkboxCache[currentIdx].order = this.order++;
        }
        this.lastIdxSelected = currentIdx;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    dblClickRow(data) {
        this.ondlclickRow.emit(data);
    }
    /**
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    tapHandler($event, data) {
        this.tapCount += 1;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.tapCount === 1) {
                $event.preventDefault();
                this.clickRow(null, data);
            }
            this.tapCount = 0;
        }), 600);
        if (this.tapCount > 1) {
            $event.preventDefault();
            this.dblClickRow(data);
        }
    }
    /**
     * @param {?} data
     * @param {?} id
     * @param {?} field
     * @param {?} index
     * @param {?} $event
     * @return {?}
     */
    clickBooleanCell(data, id, field, index, $event) {
        if ($event) {
            this.preventDefault($event);
        }
        if (this.inLineEdit && field.editable) {
            if (data[field.property] === null || data[field.property] === undefined) {
                data[field.property] = true;
            }
            else {
                data[field.property] = (data[field.property] === false || data[field.property] === 'false');
            }
            this.endEditModeNgModel(index, data, field.property);
        }
    }
    /**
     * @return {?}
     */
    emitOnEditEvent() {
        if (this.rowOnEdition >= 0) {
            this.data[this.rowOnEdition].cmacsEditedProp = this.property;
            this.onedit.emit(this.data[this.rowOnEdition]);
            this.rowOnEdition = -1;
            return;
        }
        if (this.nodeOnEdition) {
            this.nodeOnEdition.cmacsEditedProp = this.property;
            this.onedit.emit(this.nodeOnEdition);
            this.nodeOnEdition = null;
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getClassMap(field) {
        return {
            [`cmacs-compact-table-logs-header-th`]: this.logs,
            [`cmacs-compact-table-logs-header-th-font`]: this.logs,
            [`${field.ngClass}`]: field.ngClass && field.ngClass.length
        };
    }
    /**
     * @param {?} field
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    getMaxWidth(field, item, i) {
        if (this.expandable) {
            if (item.children && !i) {
                return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
            }
            else {
                return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
            }
        }
        return this.inLineEdit ? `calc(100% - 17px)` : `calc(100% - ${this.getMaxWidthFieldViewMode(field, i)})`;
    }
    /**
     * @param {?} field
     * @param {?} i
     * @return {?}
     */
    getMaxWidthFieldViewMode(field, i) {
        if (field.editTemplate === TemplateType.Select ||
            field.editTemplate === TemplateType.Date ||
            field.editTemplate === TemplateType.Time ||
            field.editTemplate === TemplateType.Number) {
            return `18px`;
        }
        return '0px';
    }
}
CmacsCompactTableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-compact-table',
                exportAs: 'cmacsCompactTable',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\" class=\"cmacs-compact-table\" [class.cmacs-compact-table-expandable]=\"expandable\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit && config && config.fields && config.fields.length\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            nzWidth=\"40px\" [style.minWidth]=\"'40px'\" [style.maxWidth]=\"'40px'\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header\">\r\n          <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n             [class.cmacs-compact-table-smart-add-row-icon-visible]=\"!gridComponent.data.length\"\r\n             (click)=\"addRow(-1)\"></i>\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"draggable\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\"\r\n            nzWidth=\"30px\"\r\n            [style.maxWidth]=\"'30px'\"\r\n            [style.minWidth]=\"'30px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <th\r\n          *ngFor=\"let field of getFields(); index as fi\" [nzShowSort]=\"field.showSort\"\r\n          attr.id=\"{{gridID}}-column-{{fi}}\"\r\n          [ngClass]=\"getClassMap(field)\"\r\n          [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n          [nzWidth]=\"field.width\"\r\n          [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n          [nzLeft]=\"field.left\"\r\n          [nzRight]=\"field.right\"\r\n        >\r\n          <ng-container *ngIf=\"!field.template\">\r\n          <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n               [class.cmacs-compact-table-overflow-cell-header]=\"!wrapLines\"\r\n               >{{field.display}}</div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"field.template\" [ngTemplateOutlet]=\"field.template.ref\"\r\n                        [ngTemplateOutletContext]=\"field.template.context\">\r\n          </ng-container>\r\n        </th>\r\n\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit\"\r\n            nzWidth=\"40px\"\r\n            [style.minWidth]=\"'40px'\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n        </th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody cdkDropList\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n        <ng-container *ngIf=\"config && config.fields && config.fields.length\">\r\n          <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n            <ng-container *ngFor=\"let data of gridComponent.data; index as di\">\r\n              <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n                <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                    [class.cmacs-compact-table-expandable-row]=\"inLineEdit\"\r\n                    [class.cmacs-compact-table-header-logs]=\"logs && !!item.children\"\r\n                    (touchstart)=\"tapHandler($event, item)\"\r\n                    (dblclick)=\"dblClickRow(item)\">\r\n                  <td *ngIf=\"checkboxSelect\" [style.minWidth]=\"'30px'\" [style.maxWidth]=\"'30px'\" [style.width]=\"'30px'\"\r\n                      [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                  >\r\n                    <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"checkChildrenState(item)\"\r\n                           (checkedChange)=\"onCheckboxTreeChange($event, item)\"\r\n                    ></label>\r\n                  </td>\r\n\r\n                  <td *ngFor=\"let field of getFields(); index as i\"\r\n                      [class.cmacs-editable-column]=\"field.editable\"\r\n                      [class.cmacs-compact-table-on-edit-expandable]=\"((editId === item[config.fieldId] && property === field.property && field.editable)) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field) || isNumber(field) && field.editable)\"\r\n                      [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                      [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                      [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                      [nzShowExpand]=\"!!item.children && !i\"\r\n                      [(nzExpand)]=\"item.expand\"\r\n                      [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                      (nzExpandChange)=\"collapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                      [style.minWidth]=\"field.width\"\r\n                  >\r\n\r\n                    <div [style.display]=\"(isNumber(field) || isTime(field) || isDate(field) || isSelect(field)) ? 'block' : 'inline-flex'\"\r\n                         [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                         [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                         *ngIf=\"(editId !== item[config.fieldId] || property !== field.property || field.editable === false )\">\r\n                      <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item, i: di, item: item}\"></ng-container>\r\n                    </div>\r\n\r\n                    <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                         [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                         *ngIf=\"editId === item[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                      <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: di}\"></ng-container>\r\n                    </div>\r\n\r\n                  </td>\r\n\r\n                  <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                       class=\"cmacs-compact-table-rating\"\r\n                       *ngIf=\"showRate && config\">\r\n                    <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                             [nzCount]='rateCount'\r\n                             [nzDisabled]=\"!inLineEdit\"\r\n                             (ngModelChange)=\"onRateChange($event, data)\"\r\n                             (click)=\"onRateClick($event)\"></nz-rate>\r\n                  </td>\r\n\r\n                  <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                       *ngIf=\"extra\">\r\n                  </td>\r\n\r\n              </ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #defaultTpl>\r\n          <tr cdkDrag [cdkDragDisabled]=\"!draggable\" *ngFor=\"let data of gridComponent.data; index as i\"\r\n              (click)=\"clickRow($event, data)\" (touchstart)=\"tapHandler($event, data)\"\r\n              [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n              [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n              (contextmenu)=\"contextMenu($event, contextMenuTemplate)\"\r\n              class=\"cmacs-no-selection\"\r\n            >\r\n\r\n              <ng-template #contextMenuTemplate>\r\n                <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n              </ng-template>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n                   (click)=\"addRow(i, $event)\"></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"draggable\"\r\n                  class=\"cmacs-compact-table-drag-col\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n              >\r\n                <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"checkboxSelect && config\">\r\n                <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                       (checkedChange)=\"onCheckboxChange($event, data)\"\r\n                       *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n              </td>\r\n\r\n              <td *ngFor=\"let field of getFields(); index as j\"\r\n                  [class.cmacs-editable-column]=\"field.editable\"\r\n                  [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isString(field) || isDate(field) || isSelect(field) || isTime(field))\"\r\n                  [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isNumber(field) || isDate(field) || isTime(field))\"\r\n                  [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                  [style.minWidth]=\"field.width\"\r\n              >\r\n\r\n                <div\r\n                   style=\"max-width: 100%\"\r\n                  *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property || field.editable === false)\">\r\n                  <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n                </div>\r\n\r\n                <div\r\n                  style=\"max-width: 100%\"\r\n                  *ngIf=\"config && editId === data[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                  <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n                </div>\r\n\r\n              </td>\r\n\r\n              <td *ngIf=\"showRate && config\">\r\n                <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                         (click)=\"onRateClick($event)\"></nz-rate>\r\n              </td>\r\n\r\n              <td *ngIf=\"extra\">\r\n              </td>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close\"\r\n                   *ngIf=\"data.deleteEnabled === undefined || data.deleteEnabled\"\r\n                   (click)=\"deleteRow(i, $event)\"></i>\r\n              </td>\r\n            </tr>\r\n        </ng-template>\r\n\r\n        <ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n          <!--Editable String Edit Mode-->\r\n          <input #fieldTypeInput\r\n                 class=\"cmacs-compact-table-input\"\r\n                 *ngIf=\"isString(field)\" type=\"text\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                 [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                 [placeholder]=\"field.placeholder ? field.placeholder : ''\"\r\n                 cmacs-input [(ngModel)]=\"data[field.property]\"\r\n                 (keyup)=\"endEditMode($event, i, data)\"\r\n          />\r\n\r\n          <!--Editable DatePicker Edit Mode-->\r\n          <cmacs-date-picker #fieldTypeDatePicker\r\n            class=\"cmacs-compact-table-date-edit\"\r\n            *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\"\r\n            [allowClear]=\"true\"\r\n            (click)=\"preventDefault($event)\"\r\n            (dblclick)=\"preventDefault($event)\"\r\n            [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n            [(ngModel)]=\"data[field.property]\"\r\n            (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n          </cmacs-date-picker>\r\n\r\n          <!--Editable DateTimePicker Edit Mode-->\r\n          <cmacs-datetime-picker #fieldTypeDateTimePicker\r\n            *ngIf=\"isTime(field)\"\r\n            class=\"cmacs-compact-table-datetime-picker\"\r\n            [use12Hours]=\"true\"\r\n            [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n            format=\"h:mm a\"\r\n            (click)=\"preventDefault($event)\"\r\n            (dblclick)=\"preventDefault($event)\"\r\n            [defaultOpenValue]=\"defaultTimeValue\"\r\n            [(ngModel)]=\"data[field.property]\"\r\n            (ngModelChange)=\"ngModelChange(i, data)\">\r\n          </cmacs-datetime-picker>\r\n\r\n          <!--Editable Select Edit Mode-->\r\n          <cmacs-select #fieldTypeSelect\r\n                        class=\"cmacs-compact-table-select-cell\"\r\n            [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n            *ngIf=\"isSelect(field)\"\r\n            [placeHolder]=\"field.placeholder ? field.placeholder : ''\"\r\n            showSearch\r\n            (click)=\"preventDefault($event)\"\r\n            (dblclick)=\"preventDefault($event)\"\r\n            [(ngModel)]=\"data[field.property]\"\r\n            (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n            <cmacs-option\r\n              *ngFor=\"let sData of field.select.selectData\"\r\n              label=\"{{sData[field.select.label]}}\"\r\n              value=\"{{sData[field.select.value]}}\"\r\n              divider=\"{{sData[field.select.divider]}}\"\r\n              [disabled]=\"sData.disabled\">\r\n            </cmacs-option>\r\n          </cmacs-select>\r\n\r\n          <!--Editable InpuNumber Edit Mode-->\r\n          <cmacs-input-number #fieldTypeInputNumber\r\n            class=\"cmacs-compact-table-input-number-edit\"\r\n            [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n            *ngIf=\"isNumber(field) && !isSelect(field)\"\r\n            [(ngModel)]=\"data[field.property]\"\r\n            [cmacsStep]=\"1\"\r\n            (click)=\"preventDefault($event)\"\r\n            (dblclick)=\"preventDefault($event)\"\r\n            (keyup)=\"endEditMode($event, i, data)\"\r\n            (ngModelChange)=\"ngModelChange(i, data)\">\r\n          </cmacs-input-number>\r\n\r\n          <!--Editable Boolean Edit Mode-->\r\n          <label #fieldTypeBool\r\n            cmacs-checkbox\r\n            [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n            *ngIf=\"isBoolean(field)\"\r\n            [(ngModel)]=\"data[field.property]\"\r\n            (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n          </label>\r\n\r\n        </ng-template>\r\n\r\n        <ng-template #viewModeTpl let-field=\"field\" let-data=\"data\" let-i=\"i\" let-item=\"item\">\r\n          <ng-container>\r\n\r\n            <!--Editable String View Mode-->\r\n            <ng-container *ngIf=\"config && isString(field)\">\r\n              <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n                <div class=\"cmacs-compact-table-inline-cell\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     *ngIf=\"!field.showTooltip || !data[field.property] || !data[field.property].length\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n                  {{ data[field.property] && data[field.property].length ? data[field.property] : field.placeholder }}\r\n                </div>\r\n                <div class=\"cmacs-compact-table-inline-cell\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     *ngIf=\"field.showTooltip && data[field.property] && data[field.property].length\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     cmacs-tooltip\r\n                     [title]=\"data[field.property]\"\r\n                     placement=\"right\"\r\n                     [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n                <i *ngIf=\"field.editable || field.editable === undefined\"\r\n                   class=\"iconUISmall-Edit\"\r\n                   [class.cmacs-compact-table-edit-icon]=\"inLineEdit && field.editable\"\r\n                   [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit || !field.editable\">\r\n                </i>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!--Editable DatePicker View Mode-->\r\n            <ng-container *ngIf=\"config && isDate(field)\">\r\n              <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n                <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\"\r\n                >{{ data[field.property] ? (data[field.property] | date: field.dateFormat) : field.placeholder }}</div>\r\n                <i class=\"iconUILarge-Calendar\"\r\n                   [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n                   [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"\r\n                ></i>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!--Editable DateTimePicker View Mode-->\r\n            <ng-container *ngIf=\"config && isTime(field)\">\r\n              <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n                <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\"\r\n                >{{ data[field.property] ? ( data[field.property]  | date: \"h:mm a\") : field.placeholder }}</div>\r\n                <i class=\"iconUILarge-Time\"\r\n                   [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n                   [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"\r\n                ></i>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!--Editable Select View Mode-->\r\n            <ng-container *ngIf=\"config && isSelect(field)\">\r\n              <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n                <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     class=\"cmacs-compact-table-inline-cell cmacs-compact-table-select\"\r\n                >{{ getLabel(data, field) && getLabel(data, field).length ? getLabel(data, field) : field.placeholder }}</div>\r\n                <i class=\"iconArrowLarge-Chevron-Down\"\r\n                   [class.cmacs-compact-table-select-icon]=\"inLineEdit && field.editable\"\r\n                   [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit || !field.editable\"\r\n                ></i>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!--Editable InputNumber View Mode-->\r\n            <ng-container *ngIf=\"config && isNumber(field)\" style=\"width: 100%; max-width: 100%\">\r\n              <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n                <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                     [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n                     [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n                     class=\"cmacs-compact-table-inline-cell cmacs-compact-table-input-number\"\r\n                >{{ data[field.property] !== undefined ? data[field.property] : field.placeholder }}</div>\r\n                <i class=\"iconArrowLarge-Solid-UpDown\"\r\n                   [class.cmacs-compact-table-input-number-icon]=\"inLineEdit && field.editable\"\r\n                   [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit || !field.editable\">\r\n                </i>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!--Boolean View Mode-->\r\n            <ng-container *ngIf=\"config && isBoolean(field)\">\r\n              <span *ngIf=\"data[field.property] == false || data[field.property] == 'false'\"\r\n                    class=\"cmacs-compact-table-boolean-false-icon\"\r\n                    [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                    [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n                    (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></span>\r\n              <span *ngIf=\"data[field.property] === undefined || data[field.property] === null\"\r\n                    class=\"cmacs-compact-table-boolean-indeterminate-icon\"\r\n                    [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                    [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n                    (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\">\r\n                <span class=\"cmacs-compact-table-boolean-indeterminate-icon-inner\"></span>\r\n              </span>\r\n              <i *ngIf=\"data[field.property] === true || data[field.property] === 'true'\"\r\n                  class=\"iconUILarge-Select-All\"\r\n                  [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n                  [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n                  (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!-- Template View Mode  -->\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field) && data[field.property]\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n            </ng-container>\r\n\r\n          </ng-container>\r\n        </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.cmacs-compact-table-logs]': 'logs'
                },
                styles: [".cmacs-compact-table-edit-mode-invalid,.cmacs-compact-table-edit-mode-invalid:focus,.cmacs-compact-table-edit-mode-invalid:hover,.cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon,::ng-deep .cmacs-compact-table-edit-mode-invalid .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection{border-color:#f6503c!important}.cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}.cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}.cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}::ng-deep .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}::ng-deep .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}::ng-deep .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}::ng-deep .cmacs-compact-table .ant-table-column-sorters,::ng-deep .cmacs-compact-table .ant-table-header-column{width:100%}.cmacs-compact-table-rating{min-width:105px}.cmacs-compact-table-invalid,.cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}.cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}::ng-deep .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}.cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 10px;margin:0;vertical-align:middle}.cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}.cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}.cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}.cmacs-compact-table-drag-col{padding:0!important;margin:0!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}::ng-deep .cmacs-compact-table .ant-table-header{background:0 0}.cmacs-compact-table-balance-padding{padding:6px!important}.cmacs-compact-table .ant-table-tbody>tr>td{padding:7px 10px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;background-color:#fff}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}.cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 -1px 0 #dee0e5 inset}.cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,.cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}.cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child){box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}.cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover td:not(:first-child):not(:last-child){box-shadow:0 -1px 0 #2a7cff inset}.cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}.cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,.cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none}.cmacs-compact-table .editable-cell{position:relative}::ng-deep .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}.ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}.cmacs-compact-table-smart-table-hot-spot-row-add,.cmacs-compact-table-smart-table-hot-spot-row-add:hover,.cmacs-compact-table-smart-table-hot-spot-row-delete,.cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:transparent!important;box-shadow:none;border-bottom:0}::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}.cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,.cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}.cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:-webkit-box;display:flex;width:18px;opacity:0}.cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:-webkit-box;display:flex;opacity:0;width:18px;position:relative;top:16px}.cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff}::ng-deep .cmacs-compact-table .ant-spin-nested-loading{clear:both}.cmacs-compact-table-extra,.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}.cmacs-compact-table-extra{position:relative}.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}.cmacs-compact-table-extra a i:hover,.cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}::ng-deep .cmacs-compact-table a,::ng-deep .cmacs-compact-table a:hover{color:#656c79}.cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}.cmacs-compact-table-edit-icon-view{display:none}.cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,.cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}.cmacs-compact-table-input,.cmacs-compact-table-input:focus,.cmacs-compact-table-input:hover,.cmacs-compact-table-select{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}.cmacs-compact-table-input{padding-left:3px}.cmacs-compact-table-on-edit{padding:0 6px!important}.cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}.cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}.cmacs-compact-table-calendar-icon,.cmacs-compact-table-calendar-icon-view,.cmacs-compact-table-input-number-icon,.cmacs-compact-table-input-number-icon-view,.cmacs-compact-table-select-icon,.cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,.cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,.cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,.cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}.cmacs-compact-table-calendar-icon:hover,.cmacs-compact-table-input-number-icon:hover,.cmacs-compact-table-select-icon:hover{cursor:pointer}.cmacs-compact-table-date,.cmacs-compact-table-input-number,.cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}.cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,.cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,.cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,.cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,.cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,.cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}::ng-deep .cmacs-compact-table-date-edit .ant-calendar-input,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}.cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}::ng-deep .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:-8px;margin-right:-7px}::ng-deep .cmacs-compact-table .ant-select-arrow{right:1px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{padding-left:3px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}::ng-deep cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}::ng-deep cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit div{margin-right:-10px;margin-left:-5px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}.cmacs-compact-table-date-edit cmacs-picker span input:focus,.cmacs-compact-table-date-edit cmacs-picker span input:focus-within,.cmacs-compact-table-date-edit cmacs-picker span input:hover,.cmacs-compact-table-datetime-picker input:focus,.cmacs-compact-table-datetime-picker input:focus-within,.cmacs-compact-table-datetime-picker input:hover,.cmacs-compact-table-input-number-edit,.cmacs-compact-table-input-number-edit:focus,.cmacs-compact-table-input-number-edit:focus-within,.cmacs-compact-table-input-number-edit:hover,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}.cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}::ng-deep .cmacs-compact-table .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}.cmacs-compact-table-header-logs,.cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}thead .cmacs-compact-table-header-logs{box-shadow:0 -1px 0 #dee0e5 inset}tbody .cmacs-compact-table-header-logs td,tbody .cmacs-compact-table-header-logs:hover td{box-shadow:0 -1px 0 #dee0e5 inset;border-bottom:none}.cmacs-compact-table-logs-header-th-font,.cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important;border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}.cmacs-compact-table-boolean-false-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}.cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;padding:1px;display:block}.cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}.cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset;opacity:1}.cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add){border-bottom:0;box-shadow:0 -1px 0 #dee0e5 inset}.cmacs-compact-table .ant-checkbox-wrapper{display:-ms-inline-grid;display:inline-grid;vertical-align:middle}.cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .cmacs-compact-table .ant-table-expand-icon-th,::ng-deep .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}::ng-deep .cmacs-compact-table table{table-layout:fixed}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:-webkit-inline-box;display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-compact-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}::ng-deep .cmacs-compact-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:auto!important;position:inherit;padding-bottom:10px;background-color:transparent}::-webkit-scrollbar,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"]
            }] }
];
/** @nocollapse */
CmacsCompactTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ExportAsService },
    { type: ExcelService },
    { type: DatePipe },
    { type: NzDropdownService },
    { type: CookieService },
    { type: UtilService }
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
    expandAll: [{ type: Input }],
    loadingDelay: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    total: [{ type: Input }],
    title: [{ type: Input }],
    footer: [{ type: Input }],
    noResult: [{ type: Input }],
    widthConfig: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    wrapLines: [{ type: Input }],
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
    ondrop: [{ type: Output }],
    rateCount: [{ type: Input }],
    multiSelect: [{ type: Input }],
    sortChange: [{ type: Output }],
    onrowdeleted: [{ type: Output }],
    onrowadded: [{ type: Output }],
    extra: [{ type: Input }],
    contextmenu: [{ type: Input }],
    indentSize: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['fieldTypeInput', { read: ElementRef },] }],
    inputNumberElement: [{ type: ViewChild, args: ['fieldTypeInputNumber', { read: ElementRef },] }],
    inputNumberComponent: [{ type: ViewChild, args: ['fieldTypeInputNumber', { read: CmacsInputNumberComponent },] }],
    datePickerElement: [{ type: ViewChild, args: ['fieldTypeDatePicker', { read: ElementRef },] }],
    dateTimePickerElement: [{ type: ViewChild, args: ['fieldTypeDateTimePicker', { read: ElementRef },] }],
    selectElement: [{ type: ViewChild, args: ['fieldTypeSelect', { read: ElementRef },] }],
    boolElement: [{ type: ViewChild, args: ['fieldTypeBool', { read: ElementRef },] }],
    handleMouseDown: [{ type: HostListener, args: ['document:mousedown', ['$event'],] }]
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
], CmacsCompactTableComponent.prototype, "expandAll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "wrapLines", void 0);
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
    CmacsCompactTableComponent.prototype.expandAll;
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
    CmacsCompactTableComponent.prototype.wrapLines;
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
    CmacsCompactTableComponent.prototype.ondrop;
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
    CmacsCompactTableComponent.prototype.contextmenu;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.indentSize;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.dropdown;
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
    CmacsCompactTableComponent.prototype.nodeOnEdition;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.mapOfExpandedData;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.defaultTimeValue;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.lastIdxSelected;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.fieldID;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputNumberElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.inputNumberComponent;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.datePickerElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.dateTimePickerElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.selectElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.boolElement;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.editionOpTriggered;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.order;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.clicks;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.tapCount;
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
    CmacsCompactTableComponent.prototype.nzDropdownService;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.cookies;
    /**
     * @type {?}
     * @private
     */
    CmacsCompactTableComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBaUIsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxF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MkM7O0lBQzNDLDhDQUEwQzs7SUFDMUMsaURBQXlEOztJQUN6RCxpREFBZ0Q7O0lBQ2hELGdEQUErQzs7SUFDL0MscURBQW9EOztJQUNwRCxrREFBaUQ7O0lBQ2pELGdEQUErQzs7SUFDL0MsNENBQTJDOztJQUMzQyw0Q0FBMkM7O0lBQzNDLCtDQUF1Qjs7SUFDdkIsaURBQTZDOztJQUM3QyxnREFBK0M7O0lBQy9DLGtEQUFpRDs7SUFDakQsZ0RBQStDOztJQUUvQywyQ0FBMkM7O0lBQzNDLGlEQUFpRDs7SUFDakQsZ0RBQWdDOztJQUVoQyw4Q0FBNEM7O0lBRTVDLDhDQUFpQjs7SUFDakIsc0RBQXdCOztJQUN4QixtREFBcUM7O0lBQ3JDLHFEQUF3Qjs7SUFDeEIsZ0RBQW1COztJQUNuQiw0Q0FBc0I7O0lBQ3RCLDhDQUF3Qjs7SUFDeEIsa0RBQWtCOztJQUNsQixtREFBcUI7O0lBQ3JCLHVEQUFpRDs7SUFDakQsc0RBQThCOztJQUM5QixxREFBdUI7O0lBRXZCLDZDQUFvQjs7SUFFcEIsa0RBQTRFOztJQUM1RSx3REFBd0Y7O0lBQ3hGLDBEQUF3SDs7SUFDeEgsdURBQXNGOztJQUN0RiwyREFBNkY7O0lBQzdGLG1EQUE4RTs7SUFDOUUsaURBQTBFOztJQW9DMUUsd0RBQTJCOztJQStIM0IsMkNBQVU7O0lBaW1CViw0Q0FBVzs7SUFpRVgsOENBQWE7Ozs7O0lBdmRYLHlDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQixxREFBd0M7Ozs7O0lBQ3hDLGtEQUFrQzs7Ozs7SUFDbEMsOENBQTBCOzs7OztJQUMxQix1REFBNEM7Ozs7O0lBQzVDLDZDQUE4Qjs7Ozs7SUFDOUIsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlLCB0b0Jvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgJ2pzcGRmLWF1dG90YWJsZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2hlY2tib3hTZWxlY3R9IGZyb20gXCIuLi9jbWFjcy1ncmlkL2NtYWNzLXRhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2lzQXJyYXl9IGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHtpc05vdE5pbCwgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25TZXJ2aWNlLCBOek1lbnVEcm9wZG93blNlcnZpY2V9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NtYWNzSW5wdXROdW1iZXJDb21wb25lbnR9IGZyb20gXCIuLi9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbWFydFRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nID0gbnVsbDtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBASW5wdXQoKSBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBvcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEV4cENvbmZpZz4oKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yb3dkZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93YWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplOiBudW1iZXIgPSAwO1xyXG5cclxuICBwdWJsaWMgZHJvcGRvd246IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50O1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuICBkZWZhdWx0VGltZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBmaWVsZElEOiBhbnkgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlRGF0ZVRpbWVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWZ9KSBkYXRlVGltZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qQ29udGV4dCBNZW51ICovXHJcbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLm56RHJvcGRvd25TZXJ2aWNlLmNyZWF0ZSgkZXZlbnQsIHRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9ICBmaWVsZC52YWxpZGF0b3JzID8gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldLCBmaWVsZC52YWxpZGF0b3JzKSA6IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICBkYXRhLnZhbGlkID0gZGF0YS52YWxpZCA/IGRhdGEudmFsaWQgOiB7fTtcclxuICAgIGRhdGEudmFsaWRbZmllbGQucHJvcGVydHldID0gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBhZGRSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpIHtcclxuICAgIHRoaXMub25yb3dhZGRlZC5lbWl0KGlkeCk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKCF0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhID0gWy4uLnRoaXMuZGF0YV07XHJcbiAgICB0aGlzLm9uZHJvcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gIGRlbGV0ZVJvdyhpZHg6IG51bWJlciwgJGV2ZW50ID0gbnVsbCkge1xyXG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gdGhpcy5kYXRhW2lkeF07XHJcbiAgICB0aGlzLm9ucm93ZGVsZXRlZC5lbWl0KGl0ZW1Ub1JlbW92ZSk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsICl7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7c29ydE5hbWU6IGZpZWxkUHJvcGVydHksIHNvcnRWYWx1ZTogJGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpIHtcclxuICAgIGlmIChmaWVsZC5zaG93U29ydCkge1xyXG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDE1cHgpYDtcclxuICAgIH1cclxuICAgIHJldHVybiBgMTAwJWA7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZU1vdXNlRG93bihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAodGhpcy5ib29sRWxlbWVudCAmJiB0aGlzLmJvb2xFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBnZXRDdXN0b21QYWRkaW5nKGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKCBub2RlOiBhbnksIGFuY2VzdG9yOiBhbnkgKSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0wICkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlTmdNb2RlbChpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsLCBwcm9wZXJ0eTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHByb3BlcnR5ID8gcHJvcGVydHkgOiB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IG51bGw7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdNb2RlbENoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IGRhdGE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuXHJcbiAgb3JkZXIgPSAwO1xyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVja2JveFRlbXBDYWNoZSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tib3hUZW1wQ2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID8gZmFsc2UgOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQsXHJcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLmRhdGFbaV0gfSxcclxuICAgICAgICBvcmRlcjogdGhpcy5kYXRhW2ldLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbLi4uY2hlY2tib3hUZW1wQ2FjaGVdO1xyXG4gICAgaWYgKHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdGlvbk9wVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoaWxkcmVuU3RhdGUoaXRlbTogYW55KSB7XHJcbiAgICBsZXQgaW5kZXRlcm1pbmF0ZTtcclxuICAgIGxldCBpbml0ID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVzID0gdGhpcy5jaGVja0NoaWxkcmVuU3RhdGVSZWMoaXRlbS5jaGlsZHJlbik7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAvKiBpZiAoaW5pdCkge1xyXG4gICAgICAgICBpbmRldGVybWluYXRlID0gcmVzO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHJlcyAhPT0gaW5kZXRlcm1pbmF0ZSA/IHRydWUgOiByZXM7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICB9Ki9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQ2hpbGRyZW5TdGF0ZVJlYyhpdGVtKSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgaXRlbS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDaGlsZHJlblN0YXRlUmVjKGVsZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoaXRlbVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgcmV0dXJuIG5vZGUuc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKSB7XHJcbiAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KHRoaXMuZGF0YSwgdGhpcy5jaGVja2JveENhY2hlKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGl0ZW06IGFueSwgcGxhaW5MaXN0OiBhbnlbXSkge1xyXG4gICAgaWYgKGlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgaXRlbS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZWxlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5lbGVtIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnRFeHBhbmRUcmVlVG9MaXN0KGVsZW0uY2hpbGRyZW4sIHBsYWluTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBlbGVtZW50SW5DYWNoZSA9IHBsYWluTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaXRlbVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICBwbGFpbkxpc3QucHVzaCh7XHJcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICBvcmRlcjogLTEsXHJcbiAgICAgICAgICBkYXRhOiB7Li4uaXRlbX1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CdXR0b25DbGljayhmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpIHsgICBcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmdldEluZGV4KGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xOyAgICBcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUgKCl7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpOiBGaWVsZFtdIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94QWxsQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcbiAgICAgIGVsZW1lbnQub3JkZXIgPSAtMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCAmJiBmaWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICByZXN1bHQgPSAoaXRlbSAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seShmaWVsZDogRmllbGQpOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICB9XHJcblxyXG4gIGlzQm9vbGVhbihmaWVsZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuIDtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIGlzRGF0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgfVxyXG5cclxuICBpc1RpbWUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgbnpEcm9wZG93blNlcnZpY2U6IE56RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICAgIC8vIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb29raWVzLmNoZWNrKHRoaXMuZ3JpZElEKSkge1xyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZ1N0ciA9IHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpO1xyXG4gICAgICAvLyByZXNldCBleHBpcmF0aW9uIGRhdGVcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgc2F2ZWRDb25maWdTdHIsIDM2NSk7XHJcblxyXG4gICAgICAvLyBwYXJzZSBjb29raWUgdmFsdWUgdG8gdHlwZXNjcmlwdCBjb25zdFxyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCkpIGFzIEdyaWRDb25maWc7XHJcbiAgICAgIGlmICh0eXBlb2Ygc2F2ZWRDb25maWcgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZHNEZWZhdWx0KCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgZmllbGQuZWRpdGFibGUgPSBmaWVsZC5lZGl0YWJsZSA9PT0gbnVsbCB8fCBmaWVsZC5lZGl0YWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpZWxkLmVkaXRhYmxlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmdyaWRJRCkge1xyXG4gICAgICB0aGlzLmdyaWRJRCA9IHRoaXMudXRpbFNlcnZpY2UudXVpZHY0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRGaWVsZHNEZWZhdWx0KCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmICF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgdGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhVGFibGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cG9ydEV2ZW50LnN1YnNjcmliZSgoY29uZmlnOiBHcmlkRXhwQ29uZmlnKSA9PiB7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5leHBvcnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZjpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoY29uZmlnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4OlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUG5nOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BuZyhjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZlRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVQZGYoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4VHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogQ29udmVydCB0cmVlIHRvIGxpc3QgaWYgZXhwYW5kYWJsZSAqL1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLmZpZWxkSUQgPSB0aGlzLmNvbmZpZy5maWVsZElkO1xyXG4gICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveENhY2hlID0gW107XHJcbiAgICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkSUQgPSB0aGlzLmNvbmZpZy5maWVsZElkO1xyXG4gICAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgIGlmKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gLyogZ2V0VHJlZU5vZGVCeUtleShub2RlOiBhbnksIGtleTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgbm9kZS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICB0aGlzLmdldFRyZWVOb2RlQnlLZXkoZWwsIGtleSk7XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKG5vZGVbdGhpcy5maWVsZElEXSA9PT0ga2V5KSB7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRUcmVlTm9kZUJ5S2V5KGVsLCBrZXkpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0qL1xyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlUGRmKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgdGhpcy5kYXRhLCAwKTtcclxuXHJcbiAgICBkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgdGhlbWU6ICdzdHJpcGVkJyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogNSB9LFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICBjb2x1bW5zXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZSArICcucGRmJztcclxuICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRyZWVUb1BkZlJlYyAocm93czogYW55LCBkYXRhOiBhbnksIG9mZlNldE1hcmdpbiA9IDApIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IFtdO1xyXG4gICAgICBjb25zdCBjb2VyY2VkSXRlbSA9IGl0ZW0gYXMgYW55O1xyXG4gICAgICBsZXQgcGFyZW50U3R5bGVzOiBhbnkgPSB7Y2VsbFBhZGRpbmc6ICBbMiwgMiwgMiwgMl19O1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICBwYXJlbnRTdHlsZXMgPSB7Y2VsbFBhZGRpbmc6ICBbMiwgMiwgMiwgMl19O1xyXG4gICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuY2VsbFBhZGRpbmcgPSBbMiwgMiwgMiwgMiArIG9mZlNldE1hcmdpbl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuZmlsbENvbG9yID0gWzE1MywgMjA0LCAyNTVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7Y29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZSwgc3R5bGVzOiBwYXJlbnRTdHlsZXN9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7Y29udGVudDogc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdLCBzdHlsZXM6IHBhcmVudFN0eWxlc30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7Y29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXN9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuVGltZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7Y29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdoOm1tIGEnKSwgIHN0eWxlczogcGFyZW50U3R5bGVzfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goe2NvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlc30pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCBjb2VyY2VkSXRlbS5jaGlsZHJlbiwgNSArIG9mZlNldE1hcmdpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3Q6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IHJvb3QuZXhwYW5kIH0pO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goXHJcbiAgICAgICAgICAgIHsuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICAgIGxldmVsOiBub2RlLmxldmVsICsgMSxcclxuICAgICAgICAgICAgICBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiBub2RlLmNoaWxkcmVuW2ldLmV4cGFuZCxcclxuICAgICAgICAgICAgICBwYXJlbnQ6IG5vZGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIGRhdGEuY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmZpbmQoYSA9PiBhW3RoaXMuZmllbGRJRF0gPT09IGRbdGhpcy5maWVsZElEXSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZShhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCB0aGlzLmRhdGEsIGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcyAoJGV2ZW50OiBib29sZWFuLCBhcnJheTogYW55LCBrZXk6IGFueSkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtW3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoa2V5KTtcclxuICAgICAgICAgIG5vZGUuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgICAgICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgYywgY1t0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goKGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgZCwga2V5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChhcnJheVt0aGlzLmZpZWxkSURdID09PSBrZXkpIHtcclxuICAgICAgICBhcnJheS5zZWxlY3RlZCA9ICRldmVudDtcclxuICAgICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShrZXkpO1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldE5vZGUoa2V5OiBhbnkpIHtcclxuICAgIGxldCB0ZXN0ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihuID0+IG4uZGF0YVt0aGlzLmZpZWxkSURdID09PSBrZXkpO1xyXG4gICAgcmV0dXJuIHRlc3QgPyB0ZXN0WzBdIDoge3NlbGVjdGVkOiBmYWxzZSwgZGF0YTogbnVsbH07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKCdwbmcnLCBmaWxlTmFtZSwgdGhpcy5ncmlkSUQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9FeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgZXhwb3J0VHJlZUV4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKHRoaXMuZGF0YSwgZGF0YVRvRXhwb3J0KTtcclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUcmVlRXhjZWxSZWMoZGF0YTogYW55LCBkYXRhVG9FeHBvcnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKGNvZXJjZWRJdGVtLmNoaWxkcmVuLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0VG9QZGYoY29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAncGRmJyxcclxuICAgICAgY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21XaWR0aCxcclxuICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAvKiBHZXQgaW5kZXggb2Ygc2VsZWN0aW9uICovXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIGlmIChldmVudCAmJiAodG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpIHx8IHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpKSB7XHJcbiAgICAgICAgLyogU2hpZnQgU2VsZWN0aW9uICovXHJcbiAgICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0TXVsdGlwbGUoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGlvbihkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAvKiBTZWxlY3QgZWxlbWVudCAqL1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA9IGV2ZW50ICYmIHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkgPyB0cnVlIDogIXRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgLyogU2F2ZSBsYXN0IGluZGV4IHNlbGVjdGVkICovXHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gaW5kZXggOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0ub3JkZXIgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoc2VsZWN0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcikubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgJiYgaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKVxyXG4gICAgICAuZm9yRWFjaChlbGVtID0+IHsgZWxlbS5zZWxlY3RlZCA9IGZhbHNlOyBlbGVtLm9yZGVyID0gLTEgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNdWx0aXBsZShjdXJyZW50SWR4KSB7XHJcbiAgICBpZiAodGhpcy5sYXN0SWR4U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgd2hpbGUgKGN1cnJlbnRJZHggIT09IHRoaXMubGFzdElkeFNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHggPiB0aGlzLmxhc3RJZHhTZWxlY3RlZCA/IHRoaXMubGFzdElkeFNlbGVjdGVkICsgMSA6IHRoaXMubGFzdElkeFNlbGVjdGVkIC0gMTsgXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHRhcENvdW50ID0gMDtcclxuXHJcbiAgdGFwSGFuZGxlcigkZXZlbnQsIGRhdGEpe1xyXG4gICAgdGhpcy50YXBDb3VudCArPSAxO1xyXG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YXBDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tSb3cobnVsbCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9LCA2MDAgKTtcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gMSkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjbGlja0Jvb2xlYW5DZWxsKGRhdGE6IGFueSwgaWQ6IGFueSwgZmllbGQ6IEZpZWxkLCBpbmRleDogbnVtYmVyLCAkZXZlbnQ6IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZSkge1xyXG4gICAgICBpZiAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGwgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICdmYWxzZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4LCBkYXRhLCBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0T25FZGl0RXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5vZGVPbkVkaXRpb24pIHtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5ub2RlT25FZGl0aW9uKTtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTWFwKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoYF0gOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250YF0gOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgJHtmaWVsZC5uZ0NsYXNzfWBdOiBmaWVsZC5uZ0NsYXNzICYmIGZpZWxkLm5nQ2xhc3MubGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4V2lkdGgoZmllbGQ6IEZpZWxkLCBpdGVtOiBhbnksIGk6IG51bWJlcikge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmICFpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZDogRmllbGQsIGk6IG51bWJlcikge1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBgMThweGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzBweCc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19