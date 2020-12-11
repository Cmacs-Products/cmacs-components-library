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
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TemplateType } from '../core/enums/templateType.enum';
import { CeldType } from '../core/enums/celdType.enum';
import { ExcelService } from '../core/services/excel.service';
import { ExportType } from '../core/enums/export-type.enum';
import { CookieService } from "ngx-cookie-service";
import { isArray } from "util";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { NzDropdownService, NzTableComponent } from "ng-zorro-antd";
import { FormControl } from "@angular/forms";
import { CmacsInputNumberComponent } from "../cmacs-input-number/cmacs-input-number.component";
import { UtilService } from '../core/services/util.service';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { CmacsDateTimePickerComponent } from '../cmacs-datetime-picker/cmacs-datetime-picker.component';
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
     * @param {?} excelService
     * @param {?} datePipe
     * @param {?} nzDropdownService
     * @param {?} cookies
     * @param {?} utilService
     */
    constructor(cdr, i18n, excelService, datePipe, nzDropdownService, cookies, utilService) {
        this.cdr = cdr;
        this.i18n = i18n;
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
        this.exclusiveSelect = false;
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
        this.use12Hours = true;
        this.configChange = new EventEmitter();
        this.gridID = null;
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
        this.centerTable = false;
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
        this.onRowExpandCollapse = new EventEmitter();
        this.ondrop = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.onrowdeleted = new EventEmitter();
        this.onrowadded = new EventEmitter();
        this.indentSize = 0;
        this.selected = false;
        this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (value) {
                return accounting.formatNumber(value, { precision: 3, thousand: " ", decimal: "," });
            }
            return value;
        });
        this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (value) {
                return accounting.unformat(value, ',');
            }
            return value;
        });
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
            this.cdr.detectChanges();
            this.focusSelect(this.inputElement);
            if (this.inputNumberComponent) {
                this.focusSelect(this.inputNumberComponent.inputElement);
            }
            if (this.dateTimePicker) {
                this.focusSelect(this.dateTimePicker.inputRef);
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    focusSelect(elem) {
        if (elem) {
            elem.nativeElement.focus();
            setTimeout((/**
             * @return {?}
             */
            () => {
                elem.nativeElement.select();
            }), 100);
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
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    filter($event, fieldProperty) {
        this.filterChange.emit({ filterName: fieldProperty, filterValue: $event });
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
        item => item.selected === true)).sort((/**
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
        if (!this.exclusiveSelect) {
            this.selectionChange.emit((status) ? this.data : []);
        }
        else {
            /** @type {?} */
            const dataSelected = this.checkboxCache.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.order - b.order));
            this.selectionChange.emit((status) ? dataSelected.map((/**
             * @param {?} e
             * @return {?}
             */
            e => e.data)) : []);
        }
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
        if (this.getIndexCookie() && this.cookies.check(this.gridID)) {
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
    getIndexCookie() {
        /** @type {?} */
        let allowIndexPageCookie = false;
        /** @type {?} */
        let consentCookie = this.cookies.get('OptanonConsent');
        if (consentCookie != "") {
            /** @type {?} */
            let groupIndex = consentCookie.indexOf('groups=');
            /** @type {?} */
            let groups = consentCookie.substring(groupIndex);
            //will return somethinglike groups=C0002:0,C0001:1
            /** @type {?} */
            let functionalGroupIndex = groups.indexOf('C0009:');
            if (functionalGroupIndex != -1) {
                /** @type {?} */
                const categoryValue = groups.substring(functionalGroupIndex + 6, functionalGroupIndex + 7);
                if (Number(categoryValue) === 1) {
                    allowIndexPageCookie = true;
                }
            }
        }
        return allowIndexPageCookie;
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
        this.exportEvent.pipe(takeUntil(this.destroy$)).subscribe((/**
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
        this.utilService.exportCompleted.subscribe((/**
         * @return {?}
         */
        () => {
            this.loading = false;
            this.cdr.markForCheck();
        }));
        this.excelService.exportCompleted.subscribe((/**
         * @return {?}
         */
        () => {
            this.loading = false;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            if (this.expandable) {
                this.mapOfExpandedData = {};
                if (!this.data.length) {
                    this.checkboxCache = [];
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
    ExpandCollapse(array, data, $event) {
        if ($event === false) {
            this.collapseChildren(array, data, $event);
        }
        this.onRowExpandCollapse.emit({ data, $event });
    }
    /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    collapseChildren(array, data, $event) {
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
                    this.collapseChildren(array, target, false);
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
     * @param {?=} subtree
     * @return {?}
     */
    onCheckboxTreeChange($event, item, subtree = null) {
        if (!this.exclusiveSelect) {
            this.updateTreeCheckboxes($event, item);
            /** @type {?} */
            const coercedElem = subtree.find((/**
             * @param {?} e
             * @return {?}
             */
            e => e[this.fieldID] === item[this.fieldID]));
            if (coercedElem.parent) {
                this.refreshSubTreeCheckboxes(coercedElem.parent);
            }
        }
        this.refreshCheckboxState();
    }
    /**
     * @param {?} $event
     * @param {?} array
     * @return {?}
     */
    updateTreeCheckboxes($event, array) {
        array.selected = $event;
        /** @type {?} */
        const node = this.getNode(array[this.fieldID]);
        node.selected = $event;
        node.order = $event ? this.order++ : -1;
        if ((/** @type {?} */ ((/** @type {?} */ (array.children))))) {
            array.children.forEach((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                this.updateTreeCheckboxes($event, d);
            }));
        }
    }
    /**
     * @param {?} subtree
     * @return {?}
     */
    refreshSubTreeCheckboxes(subtree) {
        if ((/** @type {?} */ ((/** @type {?} */ (subtree.children))))) {
            /** @type {?} */
            let checked = 0;
            /** @type {?} */
            let indeterminate = 0;
            for (let child of subtree.children) {
                /** @type {?} */
                const node = this.getNode(child[this.fieldID]);
                if (node.selected === true) {
                    checked++;
                }
                if (node.selected === -1) {
                    indeterminate++;
                }
            }
            /** @type {?} */
            const node = this.getNode(subtree[this.fieldID]);
            node.selected = false;
            if (indeterminate || (checked < subtree.children.length && checked)) {
                node.selected = -1;
            }
            else if (checked === subtree.children.length) {
                node.selected = true;
            }
        }
        if (subtree.parent) {
            this.refreshSubTreeCheckboxes(subtree.parent);
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
        this.loading = true;
        this.utilService.exportTable('png', fileName, this.gridID);
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToExcel(fileName) {
        this.loading = true;
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
                if (!field.hidden) {
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
                if (!field.hidden) {
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
        this.loading = true;
        this.cdr.detectChanges();
        if (!config.useVersion2) {
            this.utilService.exportTable('pdf', config.fileName, this.gridID, config.exportCompanyName, config.exportUserName, config.exportTitle, config.exportCompanyLogoUrl, config.exportTableCustomWidth, config.exportTableCustomHeight);
        }
        else {
            /** @type {?} */
            const exportConfig = {
                checkboxSelect: this.checkboxSelect,
                selectedItems: this.checkboxSelect ? this.checkboxCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.selected)).map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.data[this.config.fieldId])) : [],
                fileName: config.fileName,
                datePipe: this.datePipe,
                data: this.data,
                elemID: this.gridID,
                config: this.config,
                columnStyles: config.columnStyles,
                exportCompanyName: config.exportCompanyName,
                exportUserName: config.exportUserName,
                exportTitle: config.exportTitle,
                exportCompanyLogoUrl: config.exportCompanyLogoUrl ? config.exportCompanyLogoUrl : 'assets/PToB_logo.png',
            };
            this.utilService.exportTablev2(exportConfig);
        }
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
    /**
     * @param {?} position
     * @return {?}
     */
    getStickyWidth(position) {
        if (!this.scroll.x) {
            return null;
        }
        /** @type {?} */
        let width = 0;
        if (position === 'smartTable') {
            return width + 'px';
        }
        if (position === 'draggable') {
            width = this.smartTable ? 40 : 0;
            return width + 'px';
        }
        if (position === 'checkboxSelect') {
            if (this.smartTable) {
                width += 40;
            }
            if (this.draggable) {
                width += 40;
            }
            return width + 'px';
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    getStickyWidthRight(position) {
        if (!this.scroll.x) {
            return null;
        }
        /** @type {?} */
        let width = 0;
        if (position === 'smartTable') {
            return width + 'px';
        }
        if (this.extra) {
            if (this.smartTable) {
                width += 40;
            }
            if (position === 'extra') {
                return width + 'px';
            }
        }
    }
    /**
     * @return {?}
     */
    getTableComponent() {
        return this.nzTableComponent;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    transformDate(date) {
        /** @type {?} */
        const m = moment(date);
        m.locale(this.i18n.getLocale().locale);
        return m.format(this.i18n.getLocale().locale === 'de' ? 'DD. MMM YYYY' : 'MMM DD, YYYY');
    }
}
CmacsCompactTableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-compact-table',
                exportAs: 'cmacsCompactTable',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n            [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n            [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzSimple]=\"simple\" class=\"cmacs-compact-table\" [class.cmacs-compact-table-expandable]=\"expandable\"\r\n            [class.cmacs-compact-table-scrollable-x]=\"scroll.x!!\" [class.cmacs-compact-table-scrollable-y]=\"scroll.y!!\"\r\n            [class.cmacs-compact-table-empty-table]=\"!data.length\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit && config && config.fields && config.fields.length\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            nzWidth=\"40px\" [style.minWidth]=\"'40px'\" [style.maxWidth]=\"'40px'\"\r\n            [nzLeft]=\"getStickyWidth('smartTable')\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header\">\r\n          <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n             [class.cmacs-compact-table-smart-add-row-icon-visible]=\"!gridComponent.data.length\"\r\n             (click)=\"addRow(-1)\"></i>\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"draggable\"\r\n            [nzLeft]=\"getStickyWidth('draggable')\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\"\r\n            [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n            nzWidth=\"30px\"\r\n            nzLeft=\"0px\"\r\n            [style.maxWidth]=\"'30px'\"\r\n            [style.minWidth]=\"'30px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n                 (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <ng-container *ngFor=\"let field of getFields(); index as fi\">\r\n          <ng-container *ngIf=\"!field.customFilter; else thWithFilters\">\r\n            <th [nzShowSort]=\"field.showSort\"\r\n                [nzShowFilter]=\"field.showFilter\"\r\n                [nzFilters]=\"field.filters!! ? field.filters : []\"\r\n                [nzFilterMultiple]=\"field.filterMultiple\"\r\n                (nzFilterChange)=\"filter($event, field.property)\"\r\n                attr.id=\"{{gridID}}-column-{{fi}}\"\r\n                [ngClass]=\"getClassMap(field)\"\r\n                [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n                [nzWidth]=\"field.width\"\r\n                [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n                [nzLeft]=\"field.left\"\r\n                [nzRight]=\"field.right\">\r\n              <ng-container *ngIf=\"!field.template\">\r\n                <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n                     [class.cmacs-compact-table-overflow-cell-header]=\"!wrapLines\">{{field.display}}</div>\r\n              </ng-container>\r\n              <div [id]=\"gridID + 'column' + fi\" *ngIf=\"field.template\">\r\n                <ng-container [ngTemplateOutlet]=\"field.template.ref\"\r\n                              [ngTemplateOutletContext]=\"field.template.context\">\r\n                </ng-container>\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-template #thWithFilters>\r\n            <th [nzShowSort]=\"field.showSort\"\r\n                nzCustomFilter\r\n                attr.id=\"{{gridID}}-column-{{fi}}\"\r\n                [ngClass]=\"getClassMap(field)\"\r\n                [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n                [nzWidth]=\"field.width\"\r\n                [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n                [nzLeft]=\"field.left\"\r\n                [nzRight]=\"field.right\">\r\n              <ng-container *ngIf=\"!field.template\">\r\n                <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n                     [class.cmacs-compact-table-overflow-cell-header]=\"!wrapLines\">{{field.display}}</div>\r\n              </ng-container>\r\n              <div [id]=\"gridID + 'column' + fi\" *ngIf=\"field.template\">\r\n                <ng-container [ngTemplateOutlet]=\"field.template.ref\"\r\n                              [ngTemplateOutletContext]=\"field.template.context\">\r\n                </ng-container>\r\n              </div>\r\n              <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\r\n                <i nz-icon\r\n                   nzType=\"search\"\r\n                   class=\"ant-table-filter-icon\"\r\n                   [class.ant-table-filter-open]=\"dropdown.nzVisible\"\r\n                   nz-dropdown></i>\r\n                <ng-container [ngTemplateOutlet]=\"field.customFilter.ref\"\r\n                              [ngTemplateOutletContext]=\"field.customFilter.context\">\r\n                </ng-container>\r\n              </nz-dropdown>\r\n            </th>\r\n          </ng-template>\r\n        </ng-container>\r\n\r\n\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            nzWidth=\"80px\"\r\n            [style.maxWidth]=\"'80px'\"\r\n            [style.minWidth]=\"'80px'\"\r\n            [nzRight]=\"getStickyWidthRight('extra')\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit\"\r\n            nzWidth=\"40px\"\r\n            [style.minWidth]=\"'40px'\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\" *ngIf=\"centerTable\"></th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody cdkDropList\r\n           *ngIf=\"!virtualScroll\"\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n      <ng-container *ngIf=\"config && config.fields && config.fields.length\">\r\n        <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n          <ng-container *ngFor=\"let data of gridComponent.data; index as di\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-expandable-row]=\"inLineEdit\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && !!item.children\"\r\n                  [class.ant-table-selected-row]=\"getNode(item[fieldID]).selected\"\r\n                  (touchstart)=\"tapHandler($event, item)\"\r\n                  (dblclick)=\"dblClickRow(item)\">\r\n\r\n                <td *ngIf=\"checkboxSelect\"\r\n                    [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                    [style.minWidth]=\"'30px'\"\r\n                    [style.maxWidth]=\"'30px'\"\r\n                    [style.width]=\"'30px'\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\">\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"getNode(item[fieldID]).selected === -1\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item, mapOfExpandedData[data[fieldID]])\"></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-editable-column]=\"field.editable\"\r\n                    [class.cmacs-compact-table-on-edit-expandable]=\"((editId === item[config.fieldId] && property === field.property && field.editable)) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field) || isNumber(field) && field.editable)\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                    (nzExpandChange)=\"ExpandCollapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                    [style.minWidth]=\"field.width\">\r\n\r\n                  <div [style.display]=\"(isNumber(field) || isTime(field) || isDate(field) || isSelect(field)) ? 'block' : 'inline-flex'\"\r\n                       [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"(editId !== item[config.fieldId] || property !== field.property || field.editable === false )\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item, i: di, item: item, ci: i}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"editId === item[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: di}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    class=\"cmacs-compact-table-rating\"\r\n                    *ngIf=\"showRate && config\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                           [nzCount]='rateCount'\r\n                           [nzDisabled]=\"!inLineEdit\"\r\n                           (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [nzRight]=\"getStickyWidthRight('extra')\"\r\n                    *ngIf=\"extra\"></td>\r\n\r\n                <td *ngIf=\"centerTable\" [class.cmacs-compact-table-logs-td]=\"logs\" class=\"cmacs-compact-table-align-td\"></td>\r\n\r\n</ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-template #defaultTpl>\r\n          <tr cdkDrag [cdkDragDisabled]=\"!draggable\" *ngFor=\"let data of gridComponent.data; index as i\"\r\n              (click)=\"clickRow($event, data)\" (touchstart)=\"tapHandler($event, data)\"\r\n              [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n              [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n              (contextmenu)=\"contextMenu($event, contextMenuTemplate)\"\r\n              class=\"cmacs-no-selection\">\r\n\r\n            <ng-template #contextMenuTemplate>\r\n              <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n            </ng-template>\r\n\r\n            <td *ngIf=\"smartTable && inLineEdit\"\r\n                [style.maxWidth]=\"'40px'\"\r\n                [style.minWidth]=\"'40px'\"\r\n                [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                [nzLeft]=\"getStickyWidth('smartTable')\"\r\n                class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n              <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n                 (click)=\"addRow(i, $event)\"></i>\r\n            </td>\r\n\r\n            <td *ngIf=\"draggable\"\r\n                class=\"cmacs-compact-table-drag-col cmacs-compact-table-fst-td\"\r\n                [nzLeft]=\"getStickyWidth('draggable')\"\r\n                [style.maxWidth]=\"'40px'\"\r\n                [style.minWidth]=\"'40px'\">\r\n              <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n            </td>\r\n\r\n            <td [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                [class.cmacs-compact-table-fst-td]=\"!draggable\"\r\n                *ngIf=\"checkboxSelect && config\">\r\n              <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                     (checkedChange)=\"onCheckboxChange($event, data)\"\r\n                     *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n            </td>\r\n\r\n            <td *ngFor=\"let field of getFields(); index as j\"\r\n                [class.cmacs-editable-column]=\"field.editable\"\r\n                [class.cmacs-compact-table-fst-td]=\"!draggable && !checkboxSelect && !j\"\r\n                [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isString(field) || isDate(field) || isSelect(field) || isTime(field))\"\r\n                [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isNumber(field) || isDate(field) || isTime(field))\"\r\n                [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                [style.minWidth]=\"field.width\">\r\n\r\n              <div style=\"max-width: 100%\"\r\n                   *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property || field.editable === false)\">\r\n                <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data, i: i, ci: j}\"></ng-container>\r\n              </div>\r\n\r\n              <div style=\"max-width: 100%\"\r\n                   *ngIf=\"config && editId === data[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td *ngIf=\"showRate && config\">\r\n              <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                       (click)=\"onRateClick($event)\"></nz-rate>\r\n            </td>\r\n\r\n            <td *ngIf=\"extra\" [nzRight]=\"getStickyWidthRight('extra')\"></td>\r\n\r\n            <td *ngIf=\"smartTable && inLineEdit\"\r\n                [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n                [style.maxWidth]=\"'40px'\"\r\n                [style.minWidth]=\"'40px'\"\r\n                [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n              <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close\"\r\n                 *ngIf=\"data.deleteEnabled === undefined || data.deleteEnabled\"\r\n                 (click)=\"deleteRow(i, $event)\"></i>\r\n            </td>\r\n\r\n            <td *ngIf=\"centerTable\" [class.cmacs-compact-table-logs-td]=\"logs\" class=\"cmacs-compact-table-align-td\"></td>\r\n          </tr>\r\n        </ng-template>\r\n      </ng-container>\r\n\r\n    </tbody>\r\n\r\n    <tbody cdkDropList\r\n           *ngIf=\"virtualScroll\"\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n      <ng-template nz-virtual-scroll let-data let-di=\"i\">\r\n        <ng-container *ngIf=\"config && config.fields && config.fields.length\">\r\n          <ng-container *ngIf=\"expandable; else defaultTplVirtualScroll;\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-expandable-row]=\"inLineEdit\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && !!item.children\"\r\n                  (touchstart)=\"tapHandler($event, item)\"\r\n                  (dblclick)=\"dblClickRow(item)\">\r\n                <td *ngIf=\"checkboxSelect\"\r\n                    [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                    [style.minWidth]=\"'30px'\"\r\n                    [style.maxWidth]=\"'30px'\"\r\n                    [style.width]=\"'30px'\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\">\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"getNode(item[fieldID]).selected === -1\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item, mapOfExpandedData[data[fieldID]])\"></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-editable-column]=\"field.editable\"\r\n                    [class.cmacs-compact-table-on-edit-expandable]=\"((editId === item[config.fieldId] && property === field.property && field.editable)) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field) || isNumber(field) && field.editable)\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                    (nzExpandChange)=\"ExpandCollapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                    [style.minWidth]=\"field.width\">\r\n\r\n                  <div [style.display]=\"(isNumber(field) || isTime(field) || isDate(field) || isSelect(field)) ? 'block' : 'inline-flex'\"\r\n                       [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"(editId !== item[config.fieldId] || property !== field.property || field.editable === false )\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item, i: di, item: item, ci: i}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"editId === item[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: di}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    class=\"cmacs-compact-table-rating\"\r\n                    *ngIf=\"showRate && config\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                           [nzCount]='rateCount'\r\n                           [nzDisabled]=\"!inLineEdit\"\r\n                           (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    [nzRight]=\"getStickyWidthRight('extra')\"\r\n                    *ngIf=\"extra\"></td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTplVirtualScroll>\r\n            <tr cdkDrag [cdkDragDisabled]=\"!draggable\"\r\n                (click)=\"clickRow($event, data)\" (touchstart)=\"tapHandler($event, data)\"\r\n                [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n                [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n                [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n                (contextmenu)=\"contextMenu($event, contextMenuTemplate)\"\r\n                class=\"cmacs-no-selection\">\r\n\r\n              <ng-template #contextMenuTemplate>\r\n                <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n              </ng-template>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                  [nzLeft]=\"getStickyWidth('smartTable')\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n                   (click)=\"addRow(di, $event)\"></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"draggable\"\r\n                  class=\"cmacs-compact-table-drag-col cmacs-compact-table-fst-td\"\r\n                  [nzLeft]=\"getStickyWidth('draggable')\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\">\r\n                <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n              </td>\r\n\r\n              <td [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                  [class.cmacs-compact-table-fst-td]=\"!draggable\"\r\n                  *ngIf=\"checkboxSelect && config\">\r\n                <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                       (checkedChange)=\"onCheckboxChange($event, data)\"\r\n                       *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n              </td>\r\n\r\n              <td *ngFor=\"let field of getFields(); index as j\"\r\n                  [class.cmacs-editable-column]=\"field.editable\"\r\n                  [class.cmacs-compact-table-fst-td]=\"!draggable && !checkboxSelect && !j\"\r\n                  [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isString(field) || isDate(field) || isSelect(field) || isTime(field))\"\r\n                  [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isNumber(field) || isDate(field) || isTime(field))\"\r\n                  [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                  [style.minWidth]=\"field.width\">\r\n\r\n                <div style=\"max-width: 100%\"\r\n                     *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property || field.editable === false)\">\r\n                  <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data, i: di, ci: j}\"></ng-container>\r\n                </div>\r\n\r\n                <div style=\"max-width: 100%\"\r\n                     *ngIf=\"config && editId === data[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                  <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: di}\"></ng-container>\r\n                </div>\r\n\r\n              </td>\r\n\r\n              <td *ngIf=\"showRate && config\">\r\n                <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                         (click)=\"onRateClick($event)\"></nz-rate>\r\n              </td>\r\n\r\n              <td *ngIf=\"extra\" [nzRight]=\"getStickyWidthRight('extra')\"></td>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close\"\r\n                   *ngIf=\"data.deleteEnabled === undefined || data.deleteEnabled\"\r\n                   (click)=\"deleteRow(di, $event)\"></i>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-template>     \r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n  <!--Editable String Edit Mode-->\r\n  <input #fieldTypeInput\r\n         class=\"cmacs-compact-table-input\"\r\n         *ngIf=\"isString(field)\" type=\"text\"\r\n         (click)=\"preventDefault($event)\"\r\n         (dblclick)=\"preventDefault($event)\"\r\n         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n         [placeholder]=\"field.placeholder ? field.placeholder : ''\"\r\n         cmacs-input [(ngModel)]=\"data[field.property]\"\r\n         (keyup)=\"endEditMode($event, i, data)\" />\r\n\r\n  <!--Editable DatePicker Edit Mode-->\r\n  <cmacs-date-picker #fieldTypeDatePicker\r\n                     class=\"cmacs-compact-table-date-edit\"\r\n                     *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\"\r\n                     [allowClear]=\"true\"\r\n                     (click)=\"preventDefault($event)\"\r\n                     (dblclick)=\"preventDefault($event)\"\r\n                     [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                     [(ngModel)]=\"data[field.property]\"\r\n                     (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n  </cmacs-date-picker>\r\n\r\n  <!--Editable DateTimePicker Edit Mode-->\r\n  <cmacs-datetime-picker #fieldTypeDateTimePicker\r\n                         *ngIf=\"isTime(field)\"\r\n                         class=\"cmacs-compact-table-datetime-picker\"\r\n                         [use12Hours]=\"use12Hours\"\r\n                         hideSeconds\r\n                         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                         [format]=\"field.timeFormat ? field.timeFormat : 'h:mm a'\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (dblclick)=\"preventDefault($event)\"\r\n                         [defaultOpenValue]=\"defaultTimeValue\"\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-datetime-picker>\r\n\r\n  <!--Editable Select Edit Mode-->\r\n  <cmacs-select #fieldTypeSelect\r\n                class=\"cmacs-compact-table-select-cell\"\r\n                [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                *ngIf=\"isSelect(field)\"\r\n                [placeHolder]=\"field.placeholder ? field.placeholder : ''\"\r\n                showSearch\r\n                (click)=\"preventDefault($event)\"\r\n                (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n    <cmacs-option *ngFor=\"let sData of field.select.selectData\"\r\n                  label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"\r\n                  divider=\"{{sData[field.select.divider]}}\"\r\n                  [disabled]=\"sData.disabled\">\r\n    </cmacs-option>\r\n  </cmacs-select>\r\n\r\n  <!--Editable InpuNumber Edit Mode-->\r\n  <cmacs-input-number #fieldTypeInputNumber\r\n                      class=\"cmacs-compact-table-input-number-edit\"\r\n                      [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                      *ngIf=\"isNumber(field) && !isSelect(field) && field.useCommaMarker\"\r\n                      [(ngModel)]=\"data[field.property]\"\r\n                      [cmacsStep]=\"field.cmacsStep\"\r\n                      [min]=\"field.min!!\" [max]=\"field.max!!\"\r\n                      [formatter]=\"formatter\"\r\n                      [parser]=\"parser\"\r\n                      (click)=\"preventDefault($event)\"\r\n                      (dblclick)=\"preventDefault($event)\"\r\n                      (keyup)=\"endEditMode($event, i, data)\"\r\n                      (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-input-number>\r\n\r\n  <cmacs-input-number #fieldTypeInputNumber\r\n                      class=\"cmacs-compact-table-input-number-edit\"\r\n                      [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                      *ngIf=\"isNumber(field) && !isSelect(field) && !field.useCommaMarker\"\r\n                      [(ngModel)]=\"data[field.property]\"\r\n                      [cmacsStep]=\"field.cmacsStep ? field.cmacsStep : 1\"\r\n                      [min]=\"field.min!!\" [max]=\"field.max!!\"\r\n                      (click)=\"preventDefault($event)\"\r\n                      (dblclick)=\"preventDefault($event)\"\r\n                      (keyup)=\"endEditMode($event, i, data)\"\r\n                      (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-input-number>\r\n\r\n  <!--Editable Boolean Edit Mode-->\r\n  <label #fieldTypeBool\r\n         cmacs-checkbox\r\n         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n         *ngIf=\"isBoolean(field)\"\r\n         [(ngModel)]=\"data[field.property]\"\r\n         (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n  </label>\r\n\r\n</ng-template>\r\n\r\n<ng-template #viewModeTpl let-field=\"field\" let-data=\"data\" let-i=\"i\" let-item=\"item\" let-ci=\"ci\">\r\n  <ng-container>\r\n\r\n    <!--Editable String View Mode-->\r\n    <ng-container *ngIf=\"config && isString(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div class=\"cmacs-compact-table-inline-cell\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             *ngIf=\"!field.showTooltip || !data[field.property] || !data[field.property].length\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n          {{ data[field.property] && data[field.property].length ? data[field.property] : field.placeholder }}\r\n        </div>\r\n        <div class=\"cmacs-compact-table-inline-cell\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             *ngIf=\"field.showTooltip && data[field.property] && data[field.property].length\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             cmacs-tooltip\r\n             [title]=\"data[field.property]\"\r\n             placement=\"right\"\r\n             [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n          {{ data[field.property] }}\r\n        </div>\r\n        <i *ngIf=\"field.editable || field.editable === undefined\"\r\n           class=\"iconUISmall-Edit\"\r\n           [class.cmacs-compact-table-edit-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit || !field.editable\">\r\n        </i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable DatePicker View Mode-->\r\n    <ng-container *ngIf=\"config && isDate(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\">{{ data[field.property] ? transformDate(data[field.property]) : field.placeholder }}</div>\r\n        <i class=\"iconUILarge-Calendar\"\r\n           [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable DateTimePicker View Mode-->\r\n    <ng-container *ngIf=\"config && isTime(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\">{{ data[field.property] ? ( data[field.property]  | date: field.timeFormat ? field.timeFormat : 'h:mm a') : field.placeholder }}</div>\r\n        <i class=\"iconUILarge-Time\"\r\n           [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable Select View Mode-->\r\n    <ng-container *ngIf=\"config && isSelect(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-select\">{{ getLabel(data, field) && getLabel(data, field).length ? getLabel(data, field) : field.placeholder }}</div>\r\n        <i class=\"iconArrowLarge-Chevron-Down\"\r\n           [class.cmacs-compact-table-select-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable InputNumber View Mode-->\r\n    <ng-container *ngIf=\"config && isNumber(field)\" style=\"width: 100%; max-width: 100%\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-input-number\">{{ data[field.property] !== undefined ? field.useCommaMarker ? data[field.property].toString().replace('.', ',') : data[field.property] : field.placeholder }}</div>\r\n        <i class=\"iconArrowLarge-Solid-UpDown\"\r\n           [class.cmacs-compact-table-input-number-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit || !field.editable\">\r\n        </i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Boolean View Mode-->\r\n    <ng-container *ngIf=\"config && isBoolean(field)\">\r\n      <span *ngIf=\"data[field.property] == false || data[field.property] == 'false'\"\r\n            class=\"cmacs-compact-table-boolean-false-icon\"\r\n            [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n            [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n            (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></span>\r\n      <span *ngIf=\"data[field.property] === undefined || data[field.property] === null\"\r\n            class=\"cmacs-compact-table-boolean-indeterminate-icon\"\r\n            [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n            [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n            (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\">\r\n        <span class=\"cmacs-compact-table-boolean-indeterminate-icon-inner\"></span>\r\n      </span>\r\n      <i *ngIf=\"data[field.property] === true || data[field.property] === 'true'\"\r\n         class=\"iconUILarge-Select-All\"\r\n         [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n         [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n         (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></i>\r\n    </ng-container>\r\n\r\n    <!-- Template View Mode  -->\r\n    <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field) && data[field.property]\">\r\n      <div [id]=\"gridID + 'column' + ci + 'row' + i\">\r\n        <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.cmacs-compact-table-logs]': 'logs'
                },
                styles: ["::ng-deep .cmacs-compact-table-edit-mode-invalid,::ng-deep .cmacs-compact-table-edit-mode-invalid .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:focus,::ng-deep .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:hover,::ng-deep .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,::ng-deep .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr>td.cmacs-compact-table-align-td{border-bottom:none!important;box-shadow:none!important;background-color:#f6f7fb!important}::ng-deep .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}::ng-deep .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}::ng-deep .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}::ng-deep .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}::ng-deep .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}::ng-deep .cmacs-compact-table .ant-table-column-sorters,::ng-deep .cmacs-compact-table .ant-table-header-column{width:100%}::ng-deep .cmacs-compact-table-rating{min-width:105px}::ng-deep .cmacs-compact-table-invalid,::ng-deep .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}::ng-deep .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}::ng-deep .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}::ng-deep .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 10px;margin:0;vertical-align:middle}::ng-deep .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}::ng-deep .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}::ng-deep .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}::ng-deep .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}::ng-deep .cmacs-compact-table .ant-table-header{background:0 0}::ng-deep .cmacs-compact-table-balance-padding{padding:6px!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr>td{padding:7px 10px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;-webkit-transition:none;transition:none}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font):not(.cmacs-compact-table-align-td){background-color:#fff!important}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover td.cmacs-compact-table-fst-td,::ng-deep .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child{box-shadow:3px 0 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,::ng-deep .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset!important}::ng-deep .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky){box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):first-child.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}::ng-deep .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,::ng-deep .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}::ng-deep .cmacs-compact-table .editable-cell{position:relative}::ng-deep .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add:hover,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important;border-bottom:0}::ng-deep .cmacs-compact-table-logs-td,::ng-deep .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,::ng-deep tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,::ng-deep tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:-webkit-box;display:flex;width:18px;opacity:0}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:-webkit-box;display:flex;opacity:0;width:18px}::ng-deep .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff!important}::ng-deep .cmacs-compact-table .ant-spin-nested-loading{clear:both}::ng-deep .cmacs-compact-table-extra,::ng-deep .cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}::ng-deep .cmacs-compact-table-extra{position:relative}::ng-deep .cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}::ng-deep .cmacs-compact-table-extra a i:hover,::ng-deep .cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}::ng-deep .cmacs-compact-table a,::ng-deep .cmacs-compact-table a:hover{color:#656c79}::ng-deep .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}::ng-deep .cmacs-compact-table-edit-icon-view{display:none}::ng-deep .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}::ng-deep .cmacs-compact-table-input,::ng-deep .cmacs-compact-table-input:focus,::ng-deep .cmacs-compact-table-input:hover,::ng-deep .cmacs-compact-table-select{max-width:100%;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}::ng-deep .cmacs-compact-table-input{padding-left:3px}::ng-deep .cmacs-compact-table-on-edit{padding:0 6px!important}::ng-deep .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}::ng-deep .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}::ng-deep .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-calendar-icon-view,::ng-deep .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-input-number-icon-view,::ng-deep .cmacs-compact-table-select-icon,::ng-deep .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}::ng-deep .cmacs-compact-table-calendar-icon:hover,::ng-deep .cmacs-compact-table-input-number-icon:hover,::ng-deep .cmacs-compact-table-select-icon:hover{cursor:pointer}::ng-deep .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}::ng-deep .cmacs-compact-table-date-edit .ant-calendar-input,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}::ng-deep .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}::ng-deep .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:-8px;margin-right:-7px}::ng-deep .cmacs-compact-table .ant-select-arrow{right:1px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{padding-left:3px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}::ng-deep cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}::ng-deep cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit div{margin-right:-10px;margin-left:-5px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:focus,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:hover,::ng-deep .cmacs-compact-table-datetime-picker input,::ng-deep .cmacs-compact-table-datetime-picker input:focus,::ng-deep .cmacs-compact-table-datetime-picker input:focus-within,::ng-deep .cmacs-compact-table-datetime-picker input:hover,::ng-deep .cmacs-compact-table-input-number-edit,::ng-deep .cmacs-compact-table-input-number-edit:focus,::ng-deep .cmacs-compact-table-input-number-edit:focus-within,::ng-deep .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}::ng-deep .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}::ng-deep .cmacs-compact-table .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table-header-logs,::ng-deep .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}::ng-deep thead .cmacs-compact-table-header-logs{box-shadow:0 -1px 0 #dee0e5 inset}::ng-deep .cmacs-compact-table-logs-header-th-font,::ng-deep .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important;border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}::ng-deep .cmacs-compact-table-boolean-false-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}::ng-deep .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;padding:1px;display:block}::ng-deep .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}::ng-deep .cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset;opacity:1}::ng-deep .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-checkbox-wrapper{display:-ms-inline-grid;display:inline-grid;vertical-align:middle}::ng-deep .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .cmacs-compact-table .ant-table-expand-icon-th,::ng-deep .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}::ng-deep .cmacs-compact-table table{table-layout:fixed}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:-webkit-inline-box;display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover::before{background-color:transparent}::ng-deep .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}::ng-deep .cmacs-compact-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}::-webkit-scrollbar,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}::ng-deep .cmacs-compact-table .ant-table-row-expand-icon{background:0 0!important}"]
            }] }
];
/** @nocollapse */
CmacsCompactTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ExcelService },
    { type: DatePipe },
    { type: NzDropdownService },
    { type: CookieService },
    { type: UtilService }
];
CmacsCompactTableComponent.propDecorators = {
    nzTableComponent: [{ type: ViewChild, args: ['gridComponent',] }],
    size: [{ type: Input }],
    showTotal: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    exclusiveSelect: [{ type: Input }],
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
    use12Hours: [{ type: Input }],
    configChange: [{ type: Output }],
    fieldId: [{ type: Input }],
    gridID: [{ type: Input }],
    paginationPosition: [{ type: Input }],
    scroll: [{ type: Input }],
    nzItemRender: [{ type: Input }, { type: ViewChild, args: ['renderItemTemplate',] }],
    frontPagination: [{ type: Input }],
    templateMode: [{ type: Input }],
    bordered: [{ type: Input }],
    centerTable: [{ type: Input }],
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
    onRowExpandCollapse: [{ type: Output }],
    ondrop: [{ type: Output }],
    rateCount: [{ type: Input }],
    multiSelect: [{ type: Input }],
    sortChange: [{ type: Output }],
    filterChange: [{ type: Output }],
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
    dateTimePicker: [{ type: ViewChild, args: [CmacsDateTimePickerComponent,] }],
    handleMouseDown: [{ type: HostListener, args: ['document:mousedown', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "virtualScroll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsCompactTableComponent.prototype, "exclusiveSelect", void 0);
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
], CmacsCompactTableComponent.prototype, "use12Hours", void 0);
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
], CmacsCompactTableComponent.prototype, "centerTable", void 0);
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
    CmacsCompactTableComponent.prototype.nzTableComponent;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.size;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.showTotal;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.virtualScroll;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.exclusiveSelect;
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
    CmacsCompactTableComponent.prototype.use12Hours;
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
    CmacsCompactTableComponent.prototype.centerTable;
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
    CmacsCompactTableComponent.prototype.onRowExpandCollapse;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.ondrop;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.rateCount;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.multiSelect;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.sortChange;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.filterChange;
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
    CmacsCompactTableComponent.prototype.formatter;
    /** @type {?} */
    CmacsCompactTableComponent.prototype.parser;
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
    CmacsCompactTableComponent.prototype.dateTimePicker;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBaUIsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVB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QUF3SDs7SUFDeEgsdURBQXNGOztJQUN0RiwyREFBOEY7O0lBQzlGLG1EQUE4RTs7SUFDOUUsaURBQTBFOztJQUMxRSxvREFBc0Y7O0lBb0N0Rix3REFBMkI7O0lBb0ozQiwyQ0FBVTs7SUE4b0JWLDRDQUFXOztJQWlFWCw4Q0FBYTs7Ozs7SUE1aEJYLHlDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQixrREFBa0M7Ozs7O0lBQ2xDLDhDQUEwQjs7Ozs7SUFDMUIsdURBQTRDOzs7OztJQUM1Qyw2Q0FBOEI7Ozs7O0lBQzlCLGlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56U2l6ZU1EU1R5cGUsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgJ2pzcGRmLWF1dG90YWJsZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3QgfSBmcm9tIFwiLi4vY21hY3MtZ3JpZC9jbWFjcy10YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBpc05vdE5pbCwgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25TZXJ2aWNlLCBOek1lbnVEcm9wZG93blNlcnZpY2UsIE56VGFibGVDb21wb25lbnQgfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NtYWNzLWlucHV0LW51bWJlci9jbWFjcy1pbnB1dC1udW1iZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kYXRldGltZS1waWNrZXIvY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmRlY2xhcmUgdmFyIGFjY291bnRpbmc6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tcGFjdFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3NdJzogJ2xvZ3MnXHJcbiAgfVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKCdncmlkQ29tcG9uZW50JykgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVNRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhjbHVzaXZlU2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbWFydFRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlMTJIb3VycyA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlclRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYm94U2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluTGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGF0YVRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dSYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUW10+KCk7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblJvd0V4cGFuZENvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93ZGVsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2FkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIGRyb3Bkb3duOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudDtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGFjY291bnRpbmcuZm9ybWF0TnVtYmVyKHZhbHVlLCB7IHByZWNpc2lvbjogMywgdGhvdXNhbmQ6IFwiIFwiLCBkZWNpbWFsOiBcIixcIiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG4gIHBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGFjY291bnRpbmcudW5mb3JtYXQodmFsdWUsICcsJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcbiAgZGVmYXVsdFRpbWVWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGFzdElkeFNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgZmllbGRJRDogYW55ID0gbnVsbDtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0TnVtYmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9KSBpbnB1dE51bWJlckNvbXBvbmVudDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVUaW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCkgZGF0ZVRpbWVQaWNrZXI6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQ7XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKkNvbnRleHQgTWVudSAqL1xyXG4gIGNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5uekRyb3Bkb3duU2VydmljZS5jcmVhdGUoJGV2ZW50LCB0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBmaWVsZC52YWxpZGF0b3JzID8gbmV3IEZvcm1Db250cm9sKGRhdGFbZmllbGQucHJvcGVydHldLCBmaWVsZC52YWxpZGF0b3JzKSA6IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICBkYXRhLnZhbGlkID0gZGF0YS52YWxpZCA/IGRhdGEudmFsaWQgOiB7fTtcclxuICAgIGRhdGEudmFsaWRbZmllbGQucHJvcGVydHldID0gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBhZGRSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpIHtcclxuICAgIHRoaXMub25yb3dhZGRlZC5lbWl0KGlkeCk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKCF0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhID0gWy4uLnRoaXMuZGF0YV07XHJcbiAgICB0aGlzLm9uZHJvcC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gIGRlbGV0ZVJvdyhpZHg6IG51bWJlciwgJGV2ZW50ID0gbnVsbCkge1xyXG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gdGhpcy5kYXRhW2lkeF07XHJcbiAgICB0aGlzLm9ucm93ZGVsZXRlZC5lbWl0KGl0ZW1Ub1JlbW92ZSk7XHJcbiAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmlucHV0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVQaWNrZXIpIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuZGF0ZVRpbWVQaWNrZXIuaW5wdXRSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1NlbGVjdChlbGVtOiBhbnkpIHtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55LCBmaWVsZFByb3BlcnR5OiBzdHJpbmcsKSB7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApIHtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJOYW1lOiBmaWVsZFByb3BlcnR5LCBmaWx0ZXJWYWx1ZTogJGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxNXB4KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYDEwMCVgO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVNb3VzZURvd24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHx8XHJcbiAgICAgICAgKHRoaXMuaW5wdXROdW1iZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5pbnB1dE51bWJlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVUaW1lUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dE51bWJlckNvbXBvbmVudC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXN0b21QYWRkaW5nKGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgaWYgKCFpdGVtLmxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuICEhaXRlbS5jaGlsZHJlbiA/IDYgOiAyODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5sZXZlbCAqIHRoaXMuaW5kZW50U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBjaGlsZE9mKG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSkge1xyXG4gICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgIHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IGFuY2VzdG9yKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QubGVuZ3RoID4gMCAmJiBjaGlsZC5jbGFzc05hbWUgJiYgdHlwZW9mIGNoaWxkLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49IDApIHJldHVybiB0cnVlO1xyXG4gICAgICBjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAoJ0VudGVyJyB8fCAnZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICBkYXRhLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhW2luZGV4XS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwsIHByb3BlcnR5OiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdLmNtYWNzRWRpdGVkUHJvcCA9IHByb3BlcnR5ID8gcHJvcGVydHkgOiB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuXHJcbiAgfVxyXG5cclxuICBuZ01vZGVsQ2hhbmdlKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gZGF0YTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KGlkKTogbnVtYmVyIHtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBpID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG5cclxuICBvcmRlciA9IDA7XHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoZWNrYm94VGVtcENhY2hlID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjaGVja2JveFRlbXBDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPyBmYWxzZSA6IHRoaXMuZGF0YVtpXS5zZWxlY3RlZCxcclxuICAgICAgICBkYXRhOiB7IC4uLnRoaXMuZGF0YVtpXSB9LFxyXG4gICAgICAgIG9yZGVyOiB0aGlzLmRhdGFbaV0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZSA9IFsuLi5jaGVja2JveFRlbXBDYWNoZV07XHJcbiAgICBpZiAodGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQpIHtcclxuICAgICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpIHtcclxuICAgIHRoaXMuY29udmVydEV4cGFuZFRyZWVUb0xpc3QodGhpcy5kYXRhLCB0aGlzLmNoZWNrYm94Q2FjaGUpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEV4cGFuZFRyZWVUb0xpc3QoaXRlbTogYW55LCBwbGFpbkxpc3Q6IGFueVtdKSB7XHJcbiAgICBpZiAoaXNBcnJheShpdGVtKSkge1xyXG4gICAgICBpdGVtLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBlbGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgICBpZiAoZWxlbWVudEluQ2FjaGUgPCAwKSB7XHJcbiAgICAgICAgICBwbGFpbkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgb3JkZXI6IC0xLFxyXG4gICAgICAgICAgICBkYXRhOiB7IC4uLmVsZW0gfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbiAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuY29udmVydEV4cGFuZFRyZWVUb0xpc3QoZWxlbS5jaGlsZHJlbiwgcGxhaW5MaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGVsZW1lbnRJbkNhY2hlID0gcGxhaW5MaXN0LmZpbmRJbmRleChlbCA9PiBlbC5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpdGVtW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgaWYgKGVsZW1lbnRJbkNhY2hlIDwgMCkge1xyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIG9yZGVyOiAtMSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSkge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50LCBkYXRhKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5nZXRJbmRleChkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKV0ub3JkZXIgPSAkZXZlbnQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hDaGVja2JveFN0YXRlKG9uaW5pdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgaWYgKCFvbmluaXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUoKSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IChkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCkpO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBkYXRhU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgcmV0dXJuIGRhdGFTZWxlY3RlZDtcclxuICB9XHJcblxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpOiBGaWVsZFtdIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94QWxsQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcbiAgICAgIGVsZW1lbnQub3JkZXIgPSAtMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZXhjbHVzaXZlU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyB0aGlzLmRhdGEgOiBbXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gZGF0YVNlbGVjdGVkLm1hcChlID0+IGUuZGF0YSkgOiBbXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldExhYmVsKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgJiYgZmllbGQuc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBjb25zdCBpdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgcmVzdWx0ID0gKGl0ZW0gIT09IHVuZGVmaW5lZCkgPyBpdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3QoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNOdW1iZXIoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgfVxyXG5cclxuICBpc0Jvb2xlYW4oZmllbGQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIGlzRGF0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgfVxyXG5cclxuICBpc1RpbWUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHJpdmF0ZSBuekRyb3Bkb3duU2VydmljZTogTnpEcm9wZG93blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0SW5kZXhDb29raWUoKSAmJiB0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc2F2ZWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCkge1xyXG4gICAgbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRzRGVmYXVsdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGZpZWxkLmVkaXRhYmxlID0gZmllbGQuZWRpdGFibGUgPT09IG51bGwgfHwgZmllbGQuZWRpdGFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5lZGl0YWJsZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ncmlkSUQpIHtcclxuICAgICAgdGhpcy5ncmlkSUQgPSB0aGlzLnV0aWxTZXJ2aWNlLnV1aWR2NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0RmllbGRzRGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiAhdGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0ICYmIHRoaXMuZXhwYW5kYWJsZSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGZUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseFRyZWU6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIENvbnZlcnQgdHJlZSB0byBsaXN0IGlmIGV4cGFuZGFibGUgKi9cclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5maWVsZElEID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGUgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgICAgY29uc3QgY29lcmNlRGF0YSA9IHRoaXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChpdGVtKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qIGdldFRyZWVOb2RlQnlLZXkobm9kZTogYW55LCBrZXk6IGFueSkge1xyXG4gICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgIG5vZGUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVCeUtleShlbCwga2V5KTtcclxuICAgICAgIH0pXHJcbiAgICAgfSBlbHNlIGlmIChub2RlW3RoaXMuZmllbGRJRF0gPT09IGtleSkge1xyXG4gICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICB0aGlzLmdldFRyZWVOb2RlQnlLZXkoZWwsIGtleSk7XHJcbiAgICAgICB9KVxyXG4gICAgIH1cclxuICAgfSovXHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVQZGYoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCB0aGlzLmRhdGEsIDApO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZVRvUGRmUmVjKHJvd3M6IGFueSwgZGF0YTogYW55LCBvZmZTZXRNYXJnaW4gPSAwKSB7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgbGV0IHBhcmVudFN0eWxlczogYW55ID0geyBjZWxsUGFkZGluZzogWzIsIDIsIDIsIDJdIH07XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKChmaWVsZCwgaWR4KSA9PiB7XHJcblxyXG4gICAgICAgIHBhcmVudFN0eWxlcyA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG4gICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuY2VsbFBhZGRpbmcgPSBbMiwgMiwgMiwgMiArIG9mZlNldE1hcmdpbl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwYXJlbnRTdHlsZXMuZmlsbENvbG9yID0gWzE1MywgMjA0LCAyNTVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWUsIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuVGltZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnaDptbSBhJyksIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogaXRlbVtmaWVsZC5wcm9wZXJ0eV0sIHN0eWxlczogcGFyZW50U3R5bGVzIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzLCBjb2VyY2VkSXRlbS5jaGlsZHJlbiwgNSArIG9mZlNldE1hcmdpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3Q6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogdGhpcy5leHBhbmRBbGwgPyB0aGlzLmV4cGFuZEFsbCA6IHJvb3QuZXhwYW5kIH0pO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICAgIGxldmVsOiBub2RlLmxldmVsICsgMSxcclxuICAgICAgICAgICAgICBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiBub2RlLmNoaWxkcmVuW2ldLmV4cGFuZCxcclxuICAgICAgICAgICAgICBwYXJlbnQ6IG5vZGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBFeHBhbmRDb2xsYXBzZShhcnJheTogYW55W10sIGRhdGE6IGFueSwgJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksZGF0YSwkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblJvd0V4cGFuZENvbGxhcHNlLmVtaXQoe2RhdGEsJGV2ZW50fSk7XHJcbiAgfVxyXG4gIGNvbGxhcHNlQ2hpbGRyZW4oYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5maW5kKGEgPT4gYVt0aGlzLmZpZWxkSURdID09PSBkW3RoaXMuZmllbGRJRF0pITtcclxuICAgICAgICAgIHRhcmdldC5leHBhbmQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29sbGFwc2VDaGlsZHJlbihhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0sIHN1YnRyZWUgPSBudWxsKSB7XHJcbiAgICBpZiAoIXRoaXMuZXhjbHVzaXZlU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBpdGVtKTtcclxuICAgICAgY29uc3QgY29lcmNlZEVsZW0gPSBzdWJ0cmVlLmZpbmQoZSA9PiBlW3RoaXMuZmllbGRJRF0gPT09IGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIGlmIChjb2VyY2VkRWxlbS5wYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhjb2VyY2VkRWxlbS5wYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudDogYm9vbGVhbiwgYXJyYXk6IGFueSkge1xyXG4gICAgYXJyYXkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShhcnJheVt0aGlzLmZpZWxkSURdKTtcclxuICAgIG5vZGUuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICBub2RlLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICBpZiAoYXJyYXkuY2hpbGRyZW4hISkge1xyXG4gICAgICBhcnJheS5jaGlsZHJlbi5mb3JFYWNoKChkOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKHN1YnRyZWUpIHtcclxuICAgIGlmIChzdWJ0cmVlLmNoaWxkcmVuISEpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSAwO1xyXG4gICAgICBsZXQgaW5kZXRlcm1pbmF0ZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHN1YnRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBub2RlOiBDaGVja2JveFNlbGVjdCA9IHRoaXMuZ2V0Tm9kZShjaGlsZFt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY2hlY2tlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoc3VidHJlZVt0aGlzLmZpZWxkSURdKTtcclxuICAgICAgbm9kZS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoaW5kZXRlcm1pbmF0ZSB8fCAoY2hlY2tlZCA8IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoICYmIGNoZWNrZWQpKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQgPT09IHN1YnRyZWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgIGlmIChzdWJ0cmVlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROb2RlKGtleTogYW55KSB7XHJcbiAgICBsZXQgdGVzdCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIobiA9PiBuLmRhdGFbdGhpcy5maWVsZElEXSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHsgc2VsZWN0ZWQ6IGZhbHNlLCBkYXRhOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgZmlsZU5hbWU7XHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRBc0V4Y2VsRmlsZShkYXRhVG9FeHBvcnQsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIC8qIEV4cGFuZGFibGUgUm93cyAqL1xyXG4gIGV4cG9ydFRyZWVFeGNlbChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbFJlYyh0aGlzLmRhdGEsIGRhdGFUb0V4cG9ydCk7XHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VHJlZUV4Y2VsUmVjKGRhdGE6IGFueSwgZGF0YVRvRXhwb3J0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGlmIChjb2VyY2VkSXRlbS5jaGlsZHJlbiAmJiBjb2VyY2VkSXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRyZWVFeGNlbFJlYyhjb2VyY2VkSXRlbS5jaGlsZHJlbiwgZGF0YVRvRXhwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGV4cG9ydFRvUGRmKGNvbmZpZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGlmICghY29uZmlnLnVzZVZlcnNpb24yKSB7XHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoXHJcbiAgICAgICAgJ3BkZicsXHJcbiAgICAgICAgY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICAgIHRoaXMuZ3JpZElELFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydFRpdGxlLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21XaWR0aCxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21IZWlnaHRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGV4cG9ydENvbmZpZyA9IHtcclxuICAgICAgICBjaGVja2JveFNlbGVjdDogdGhpcy5jaGVja2JveFNlbGVjdCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLmNoZWNrYm94U2VsZWN0ID8gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgOiBbXSxcclxuICAgICAgICBmaWxlTmFtZTogY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICAgIGRhdGVQaXBlOiB0aGlzLmRhdGVQaXBlLFxyXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICBlbGVtSUQ6IHRoaXMuZ3JpZElELFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgY29sdW1uU3R5bGVzOiBjb25maWcuY29sdW1uU3R5bGVzLFxyXG4gICAgICAgIGV4cG9ydENvbXBhbnlOYW1lOiBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgZXhwb3J0VXNlck5hbWU6IGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBleHBvcnRUaXRsZTogY29uZmlnLmV4cG9ydFRpdGxlLFxyXG4gICAgICAgIGV4cG9ydENvbXBhbnlMb2dvVXJsOiBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwgPyBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwgOiAnYXNzZXRzL1BUb0JfbG9nby5wbmcnLFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxldjIoXHJcbiAgICAgICAgZXhwb3J0Q29uZmlnXHJcbiAgICAgICk7XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAvKiBHZXQgaW5kZXggb2Ygc2VsZWN0aW9uICovXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIGlmIChldmVudCAmJiAodG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpIHx8IHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpKSB7XHJcbiAgICAgICAgLyogU2hpZnQgU2VsZWN0aW9uICovXHJcbiAgICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0TXVsdGlwbGUoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGlvbihkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAvKiBTZWxlY3QgZWxlbWVudCAqL1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA9IGV2ZW50ICYmIHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkgPyB0cnVlIDogIXRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgLyogU2F2ZSBsYXN0IGluZGV4IHNlbGVjdGVkICovXHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gaW5kZXggOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0ub3JkZXIgPSB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoc2VsZWN0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcikubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgJiYgaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKVxyXG4gICAgICAuZm9yRWFjaChlbGVtID0+IHsgZWxlbS5zZWxlY3RlZCA9IGZhbHNlOyBlbGVtLm9yZGVyID0gLTEgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNdWx0aXBsZShjdXJyZW50SWR4KSB7XHJcbiAgICBpZiAodGhpcy5sYXN0SWR4U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgd2hpbGUgKGN1cnJlbnRJZHggIT09IHRoaXMubGFzdElkeFNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHggPiB0aGlzLmxhc3RJZHhTZWxlY3RlZCA/IHRoaXMubGFzdElkeFNlbGVjdGVkICsgMSA6IHRoaXMubGFzdElkeFNlbGVjdGVkIC0gMTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4O1xyXG4gIH1cclxuXHJcbiAgZGJsQ2xpY2tSb3coZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uZGxjbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdGFwQ291bnQgPSAwO1xyXG5cclxuICB0YXBIYW5kbGVyKCRldmVudCwgZGF0YSkge1xyXG4gICAgdGhpcy50YXBDb3VudCArPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRhcENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1JvdyhudWxsLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCk7XHJcbiAgICBpZiAodGhpcy50YXBDb3VudCA+IDEpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2tCb29sZWFuQ2VsbChkYXRhOiBhbnksIGlkOiBhbnksIGZpZWxkOiBGaWVsZCwgaW5kZXg6IG51bWJlciwgJGV2ZW50OiBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHQoJGV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQgJiYgZmllbGQuZWRpdGFibGUpIHtcclxuICAgICAgaWYgKGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPSAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IGZhbHNlIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSAnZmFsc2UnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVuZEVkaXRNb2RlTmdNb2RlbChpbmRleCwgZGF0YSwgZmllbGQucHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMucm93T25FZGl0aW9uID49IDApIHtcclxuICAgICAgdGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXS5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ub2RlT25FZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbi5jbWFjc0VkaXRlZFByb3AgPSB0aGlzLnByb3BlcnR5O1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMubm9kZU9uRWRpdGlvbik7XHJcbiAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc01hcChmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtgY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aGBdOiB0aGlzLmxvZ3MsXHJcbiAgICAgIFtgY21hY3MtY29tcGFjdC10YWJsZS1sb2dzLWhlYWRlci10aC1mb250YF06IHRoaXMubG9ncyxcclxuICAgICAgW2Ake2ZpZWxkLm5nQ2xhc3N9YF06IGZpZWxkLm5nQ2xhc3MgJiYgZmllbGQubmdDbGFzcy5sZW5ndGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aChmaWVsZDogRmllbGQsIGl0ZW06IGFueSwgaTogbnVtYmVyKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiAhaSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluTGluZUVkaXQgPyBgY2FsYygxMDAlIC0gMTdweClgIDogYGNhbGMoMTAwJSAtICR7dGhpcy5nZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQsIGkpfSlgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhXaWR0aEZpZWxkVmlld01vZGUoZmllbGQ6IEZpZWxkLCBpOiBudW1iZXIpIHtcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcikge1xyXG4gICAgICByZXR1cm4gYDE4cHhgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcwcHgnO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RpY2t5V2lkdGgocG9zaXRpb24pIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdzbWFydFRhYmxlJykge1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnZHJhZ2dhYmxlJykge1xyXG4gICAgICB3aWR0aCA9IHRoaXMuc21hcnRUYWJsZSA/IDQwIDogMDtcclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2NoZWNrYm94U2VsZWN0Jykge1xyXG4gICAgICBpZiAodGhpcy5zbWFydFRhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0aWNreVdpZHRoUmlnaHQocG9zaXRpb24pIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdzbWFydFRhYmxlJykge1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0cmEpIHtcclxuICAgICAgaWYgKHRoaXMuc21hcnRUYWJsZSkge1xyXG4gICAgICAgIHdpZHRoICs9IDQwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2V4dHJhJykge1xyXG4gICAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ29tcG9uZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUYWJsZUNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybURhdGUoZGF0ZSkge1xyXG4gICAgY29uc3QgbSA9IG1vbWVudChkYXRlKTtcclxuICAgIG0ubG9jYWxlKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpO1xyXG4gICAgcmV0dXJuIG0uZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuIE1NTSBZWVlZJyA6ICdNTU0gREQsIFlZWVknKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==