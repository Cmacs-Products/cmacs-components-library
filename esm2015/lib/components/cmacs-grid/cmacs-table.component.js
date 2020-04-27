/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, HostListener } from '@angular/core';
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
import { NzDropdownService } from "ng-zorro-antd";
/**
 * @template T
 */
// tslint:disable-next-line no-any
export class CmacsGridComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     * @param {?} exportAsService
     * @param {?} nzDropdownService
     * @param {?} excelService
     * @param {?} datePipe
     * @param {?} cookies
     */
    constructor(cdr, i18n, exportAsService, nzDropdownService, excelService, datePipe, cookies) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.nzDropdownService = nzDropdownService;
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
        this.printLandscape = false;
        this.wrapLines = false;
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
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.tapCount = 0;
        this.lastIdxSelected = null;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
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
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    startEdit(id, property, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
        this.property = property;
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
            return `calc(${field.width} - 45px)`;
        }
        return `calc(${field.width} - 10px)`;
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
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string'
                && child.className.indexOf('cdk-overlay-pane') >= 0)
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
        const dataSelectd = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected));
        this.selected = this.allChecked = dataSelectd.length === this.checkboxCache.length;
        this.isIndeterminate = dataSelectd.length > 0 && !this.allChecked;
        if (!oninit) {
            this.selectionChange.emit(dataSelectd.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.data)));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ngModelChange(index) {
        this.rowOnEdition = index;
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
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
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
    isString(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
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
        if (this.checkboxSelect) {
            this.updateCheckboxCache();
            this.onCheckboxChange(true);
        }
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data) {
            this.updateCheckboxCache();
            this.onCheckboxChange();
        }
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
        /** @type {?} */
        const fields = this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.celdType === CeldType.Default ||
            item.celdType === CeldType.Tag ||
            item.celdType === CeldType.TemplateRef));
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            fields.forEach((/**
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
    /**
     * @param {?} fileName
     * @return {?}
     */
    exportToPdf(fileName) {
        /** @type {?} */
        const doc = !this.printLandscape ? new jsPDF() : new jsPDF('l', 'pt');
        /** @type {?} */
        const columns = [];
        /** @type {?} */
        const rows = [];
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.celdType === CeldType.Default ||
            item.celdType === CeldType.Tag ||
            item.celdType === CeldType.TemplateRef)).forEach((/**
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
            item => item.celdType === CeldType.Default ||
                item.celdType === CeldType.Tag ||
                item.celdType === CeldType.TemplateRef)).forEach((/**
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
                        itemToExport.push(selectItem[field.select.label]);
                    }
                }
                else if (field.editTemplate === TemplateType.Date) {
                    itemToExport.push(this.datePipe.transform(item[field.property], 'MMMM dd yyyy'));
                }
                else if (field.celdType === CeldType.TemplateRef) {
                    itemToExport.push(item[field.property].context.exportValue);
                }
                else {
                    itemToExport.push(item[field.property]);
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
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    clickRow(event, data) {
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
        elem => elem.selected = false));
    }
    /**
     * @param {?} currentIdx
     * @return {?}
     */
    selectMultiple(currentIdx) {
        if (this.lastIdxSelected !== null) {
            /** @type {?} */
            const minorIdx = Math.min(this.lastIdxSelected, currentIdx);
            /** @type {?} */
            const maxIdx = Math.max(this.lastIdxSelected, currentIdx);
            for (let i = minorIdx; i <= maxIdx; i++) {
                this.checkboxCache[i].selected = true;
            }
        }
        else {
            this.checkboxCache[currentIdx].selected = true;
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
}
CmacsGridComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-grid',
                exportAs: 'cmacsGrid',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\" class=\"cmacs-table\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr>\r\n        <th *ngIf=\"checkboxSelect\"\r\n            nzWidth=\"40px\"\r\n            style=\"border-left: 3px solid #ffffff\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\"\r\n            (nzSortChange)=\"sort($event, field.property)\"\r\n            [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n            [style.maxWidth]=\"field.width\"\r\n            [nzWidth]=\"field.width\">\r\n          <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n               [class.cmacs-table-overflow-cell-header]=\"!wrapLines\"\r\n               >{{field.display}}\r\n          </div>\r\n        </th>\r\n        <th *ngIf=\"showRate\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          (click)=\"clickRow($event, data)\"\r\n          (touchstart)=\"tapHandler($event, data)\"\r\n          (dblclick)=\"dblClickRow(data)\"\r\n          class=\"cmacs-no-selection\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (contextmenu)=\"contextMenu($event, contextMenuTemplate)\">\r\n        <ng-template #contextMenuTemplate>\r\n          <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n        </ng-template>\r\n        <td *ngIf=\"checkboxSelect\" [style.maxWidth]=\"'40px'\" [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n            (checkedChange)=onCheckboxChange()\r\n            *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n        </td>\r\n        <td *ngFor=\"let field of getFields()\" [ngClass]=\"(isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field)) ? ['editable-row'] : ['']\" [style.maxWidth]=\"field.width\">\r\n          <div *ngIf=\"isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field); else componentTpl\">\r\n            <div class=\"editable-cell\" [style.maxWidth]=\"field.width\"\r\n              *ngIf=\"(editId !== data[config.fieldId] || property !== field.property); else editTpl\">\r\n              <div class=\"editable-cell-value-wrap\" [style.maxWidth]=\"field.width\"\r\n                   (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n                <ng-container *ngIf=\"!isDate(field) && !isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isDate(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-template #editTpl>\r\n              <input #fieldTypeInput *ngIf=\"isString(field)\" type=\"text\" cmacs-input class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n              <cmacs-input-number #fieldTypeInputNumber id=\"testing2\" class=\"tableinput\"\r\n                *ngIf=\"isNumber(field)\" [(ngModel)]=\"data[field.property]\"\r\n                [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\" (ngModelChange)=\"ngModelChange(i)\"></cmacs-input-number>\r\n\r\n              <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(data[field.property])\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n              <cmacs-date-picker\r\n                #fieldTypeDatePicker\r\n                *ngIf=\"isDate(field)\"\r\n                [format]=\"'MM/dd/yyyy'\"\r\n                [allowClear]=\"true\"\r\n                class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i)\">\r\n              </cmacs-date-picker>\r\n\r\n              <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 100%;\" showSearch class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n                <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n              </cmacs-select>\r\n            </ng-template>\r\n          </div>\r\n          <ng-template #componentTpl>\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <button *ngIf=\"isCeldTypeButton(field)\" cmacs-button type=\"{{field.button.style}}\"\r\n              (click)=onButtonClick(data)>\r\n              <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n              <ng-template #titleTpl>{{field.display}}</ng-template>\r\n            </button>\r\n            <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\"\r\n              [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n              [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n              [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n              [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n              {{  data[field.property] }}\r\n            </cmacs-tag>\r\n            <ng-container\r\n              *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n            </ng-container>\r\n            <ng-container\r\n              *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div>\r\n            </ng-container>\r\n          </ng-template>\r\n        </td>\r\n        <td *ngIf=\"showRate\" class=\"cmacs-table-rating\">\r\n          <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                   [nzCount]='rateCount'\r\n                   (ngModelChange)=\"onRateChange($event, data)\"\r\n                   [nzDisabled]=\"!inLineEdit\"\r\n                   (click)=\"onRateClick($event)\"></nz-rate>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                styles: ["::ng-deep .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}.cmacs-table .cmacs-table-rating{min-width:105px}.cmacs-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:calc(100% - 5px)}.cmacs-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .cmacs-table .ant-table-column-sorter{width:12px;display:none!important}::ng-deep .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important}::ng-deep .cmacs-table .ant-table-column-sorters,::ng-deep .cmacs-table .ant-table-header-column{width:100%}.editable-cell{position:relative}.editable-cell-value-wrap{padding:6px 0;cursor:pointer;min-height:30px}.editable-row:hover .editable-cell-value-wrap{border:1px solid #2a7cff;border-radius:4px;padding:5px 4px;margin-right:-5px;margin-left:-5px}.cmacs-table .ant-table-tbody>tr td.editable-row:first-child,.cmacs-table .ant-table-tbody>tr>td.editable-row{padding:9px 10px}:host ::ng-deep .cmacs-table .ant-rate{height:16px;font-size:16px}:host ::ng-deep .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table .ant-table-thead>tr{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.cmacs-table .ant-table-thead>tr>th:first-child{border-left:3px solid #fff}::ng-deep .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px}::ng-deep .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}::ng-deep .cmacs-table .ant-table-tbody>tr td:first-child{border-left:3px solid #fff;padding:12px 10px}::ng-deep .cmacs-table .ant-table-thead>tr>th{color:#656c79;background-color:#f6f7fb;padding:15px 10px}::ng-deep .cmacs-table .ant-table-tbody>tr:hover td:first-child{border-left:3px solid #2a7cff}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{border-bottom:1px solid #2a7cff;border-top:1px solid #2a7cff}::ng-deep .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal}.editable-row,.ng-star-inserted{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.editable-row>div,.ng-star-inserted>div{line-height:2em}.cmacs-table cmacs-tag{padding:2px 5px!important;height:unset}.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,::ng-deep .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}:host ::ng-deep .ant-spin-nested-loading{clear:both}:host ::ng-deep .cmacs-table .ant-table table{border-collapse:collapse}::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),::ng-deep .cmacs-table .tableinput,::ng-deep .cmacs-table .tableinput .ant-select-selection--single,::ng-deep .cmacs-table .tableinput .datepickerwidth,::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input,::ng-deep .cmacs-table .tableinput>*{height:30px}.cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .cmacs-table .ant-table-thead>tr:first-child>th:first-child{border-left:3px solid #fff}"]
            }] }
];
/** @nocollapse */
CmacsGridComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ExportAsService },
    { type: NzDropdownService },
    { type: ExcelService },
    { type: DatePipe },
    { type: CookieService }
];
CmacsGridComponent.propDecorators = {
    size: [{ type: Input }],
    showTotal: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    virtualScroll: [{ type: Input }],
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
    printLandscape: [{ type: Input }],
    wrapLines: [{ type: Input }],
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
    contextmenu: [{ type: Input }],
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
], CmacsGridComponent.prototype, "virtualScroll", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "virtualItemSize", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "printLandscape", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "wrapLines", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "frontPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "templateMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "bordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "showPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "showSizeChanger", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "hideOnSinglePage", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "showQuickJumper", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "simple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "checkboxSelect", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "inLineEdit", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "dataTable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "showRate", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridComponent.prototype, "multiSelect", void 0);
if (false) {
    /** @type {?} */
    CmacsGridComponent.prototype.locale;
    /** @type {?} */
    CmacsGridComponent.prototype.headerBottomStyle;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.destroy$;
    /** @type {?} */
    CmacsGridComponent.prototype.size;
    /** @type {?} */
    CmacsGridComponent.prototype.showTotal;
    /** @type {?} */
    CmacsGridComponent.prototype.pageSizeOptions;
    /** @type {?} */
    CmacsGridComponent.prototype.virtualScroll;
    /** @type {?} */
    CmacsGridComponent.prototype.virtualItemSize;
    /** @type {?} */
    CmacsGridComponent.prototype.loadingDelay;
    /** @type {?} */
    CmacsGridComponent.prototype.loadingIndicator;
    /** @type {?} */
    CmacsGridComponent.prototype.total;
    /** @type {?} */
    CmacsGridComponent.prototype.title;
    /** @type {?} */
    CmacsGridComponent.prototype.footer;
    /** @type {?} */
    CmacsGridComponent.prototype.noResult;
    /** @type {?} */
    CmacsGridComponent.prototype.widthConfig;
    /** @type {?} */
    CmacsGridComponent.prototype.pageIndex;
    /** @type {?} */
    CmacsGridComponent.prototype.pageSize;
    /** @type {?} */
    CmacsGridComponent.prototype.data;
    /** @type {?} */
    CmacsGridComponent.prototype.config;
    /** @type {?} */
    CmacsGridComponent.prototype.configChange;
    /** @type {?} */
    CmacsGridComponent.prototype.fieldId;
    /** @type {?} */
    CmacsGridComponent.prototype.gridID;
    /** @type {?} */
    CmacsGridComponent.prototype.paginationPosition;
    /** @type {?} */
    CmacsGridComponent.prototype.scroll;
    /** @type {?} */
    CmacsGridComponent.prototype.nzItemRender;
    /** @type {?} */
    CmacsGridComponent.prototype.printLandscape;
    /** @type {?} */
    CmacsGridComponent.prototype.wrapLines;
    /** @type {?} */
    CmacsGridComponent.prototype.frontPagination;
    /** @type {?} */
    CmacsGridComponent.prototype.templateMode;
    /** @type {?} */
    CmacsGridComponent.prototype.bordered;
    /** @type {?} */
    CmacsGridComponent.prototype.showPagination;
    /** @type {?} */
    CmacsGridComponent.prototype.loading;
    /** @type {?} */
    CmacsGridComponent.prototype.showSizeChanger;
    /** @type {?} */
    CmacsGridComponent.prototype.hideOnSinglePage;
    /** @type {?} */
    CmacsGridComponent.prototype.showQuickJumper;
    /** @type {?} */
    CmacsGridComponent.prototype.simple;
    /** @type {?} */
    CmacsGridComponent.prototype.checkboxSelect;
    /** @type {?} */
    CmacsGridComponent.prototype.inLineEdit;
    /** @type {?} */
    CmacsGridComponent.prototype.dataTable;
    /** @type {?} */
    CmacsGridComponent.prototype.showRate;
    /** @type {?} */
    CmacsGridComponent.prototype.exportEvent;
    /** @type {?} */
    CmacsGridComponent.prototype.buttonClick;
    /** @type {?} */
    CmacsGridComponent.prototype.rateChange;
    /** @type {?} */
    CmacsGridComponent.prototype.selectionChange;
    /** @type {?} */
    CmacsGridComponent.prototype.ondlclickRow;
    /** @type {?} */
    CmacsGridComponent.prototype.onclickRow;
    /** @type {?} */
    CmacsGridComponent.prototype.onedit;
    /** @type {?} */
    CmacsGridComponent.prototype.rateCount;
    /** @type {?} */
    CmacsGridComponent.prototype.multiSelect;
    /** @type {?} */
    CmacsGridComponent.prototype.sortChange;
    /** @type {?} */
    CmacsGridComponent.prototype.contextmenu;
    /** @type {?} */
    CmacsGridComponent.prototype.dropdown;
    /** @type {?} */
    CmacsGridComponent.prototype.selected;
    /** @type {?} */
    CmacsGridComponent.prototype.defaultSortOrder;
    /** @type {?} */
    CmacsGridComponent.prototype.checkboxCache;
    /** @type {?} */
    CmacsGridComponent.prototype.isIndeterminate;
    /** @type {?} */
    CmacsGridComponent.prototype.allChecked;
    /** @type {?} */
    CmacsGridComponent.prototype.editId;
    /** @type {?} */
    CmacsGridComponent.prototype.property;
    /** @type {?} */
    CmacsGridComponent.prototype.rowOnEdition;
    /** @type {?} */
    CmacsGridComponent.prototype.tapCount;
    /** @type {?} */
    CmacsGridComponent.prototype.lastIdxSelected;
    /** @type {?} */
    CmacsGridComponent.prototype.inputElement;
    /** @type {?} */
    CmacsGridComponent.prototype.inputNumberElement;
    /** @type {?} */
    CmacsGridComponent.prototype.datePickerElement;
    /** @type {?} */
    CmacsGridComponent.prototype.selectElement;
    /** @type {?} */
    CmacsGridComponent.prototype.boolElement;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.exportAsService;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.nzDropdownService;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.excelService;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.datePipe;
    /**
     * @type {?}
     * @private
     */
    CmacsGridComponent.prototype.cookies;
}
/**
 * @record
 */
export function CheckboxSelect() { }
if (false) {
    /** @type {?} */
    CheckboxSelect.prototype.data;
    /** @type {?} */
    CheckboxSelect.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1ncmlkL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQWlCLFNBQVMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBNkIsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFTNUUsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7SUFtUjdCLFlBQ1UsR0FBc0IsRUFDdEIsSUFBbUIsRUFDbkIsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLFlBQTBCLEVBQzFCLFFBQWtCLEVBQ2xCLE9BQXNCO1FBTnRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBelJoQyxXQUFNLEdBQVEsRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUMvQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7UUFFOUIsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFFaEMsb0JBQWUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN2QixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBSVYsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7O1FBRWQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVULGlCQUFZLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFHekUsdUJBQWtCLEdBQThCLFFBQVEsQ0FBQztRQUN6RCxXQUFNLEdBQTZDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFLeEQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQy9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixpQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixvQkFBZSxHQUFHLElBQUksQ0FBQztRQXVOckIsb0VBQW9FO0lBQ3RFLENBQUM7Ozs7Ozs7SUEvTUQsV0FBVyxDQUFDLE1BQWtCLEVBQUUsUUFBMkI7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUFnQixFQUFFLEtBQWlCO1FBQ3ZELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQVcsRUFBRSxhQUFxQjtRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLFFBQVEsS0FBSyxDQUFDLEtBQUssVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxRQUFRLEtBQUssQ0FBQyxLQUFLLFVBQVUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxDQUFROztjQUNaLE9BQU8sR0FBRyxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFlO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQ0UsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ25FLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRixDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEYsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7b0JBQy9FLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDbEU7Z0JBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4QjthQUVGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUUsSUFBUyxFQUFFLFFBQWE7O1lBQzNCLEtBQUssR0FBRyxJQUFJO1FBQ2hCLE9BQU8sS0FBSyxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLEtBQUssS0FBSyxRQUFRO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQ3BDLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUTttQkFDdkcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBRyxDQUFDO2dCQUFHLE9BQU8sSUFBSSxDQUFDO1lBQ2xFLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBcUIsRUFBRSxLQUFhO1FBQzlDLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBRTs7WUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUMvQyxJQUFJLG9CQUFPLElBQUksQ0FBRTthQUNsQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSzs7Y0FDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuRixJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQy9EO0lBRUgsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUFTO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsTUFBZTtRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxJQUFTLEVBQUUsS0FBWTs7WUFDMUIsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTs7O2tCQUV0RSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQzFILE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUMvRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2hILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDbEgsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNsSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQVk7UUFDNUIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFZO1FBQ3hCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFZO1FBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFHRCxXQUFXLENBQUMsS0FBVTtRQUNwQixPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBUzs7Y0FDZixXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ2hILE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFjRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7O2tCQUM3QixjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwRCx3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7OztrQkFHN0MsV0FBVyxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQWM7WUFDM0UsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7WUFFbkQsUUFBUSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN6QixLQUFLLFVBQVUsQ0FBQyxHQUFHO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsTUFBTTtnQkFDUixLQUFLLFVBQVUsQ0FBQyxJQUFJO29CQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLFVBQVUsQ0FBQyxHQUFHO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFnQjs7Y0FDcEIsY0FBYyxHQUFtQjtZQUNyQyxJQUFJLEVBQUUsS0FBSzs7WUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7Y0FDdEIsUUFBUSxHQUFHLFdBQVc7OztRQUFDLEdBQUcsRUFBRTtZQUNoQyw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsR0FBRSxHQUFHLENBQUM7SUFHVCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFnQjs7Y0FDdEIsWUFBWSxHQUFVLEVBQUU7O2NBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDaEMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTztZQUNsQyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxHQUFHO1lBQzlCLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsRUFBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ2pCLFlBQVksR0FBRyxFQUFFO1lBQ3ZCLGlEQUFpRDtZQUNqRCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTs7MEJBQ3hDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O29CQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztvQkFDOUcsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO3dCQUM1QixZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5RDtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsRUFBRTtvQkFDbEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7aUJBQ3hFO3FCQUFNO29CQUNMLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFnQjs7Y0FDcEIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzs7Y0FDL0QsT0FBTyxHQUFHLEVBQUU7O2NBQ1osSUFBSSxHQUFHLEVBQUU7UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPO1lBQ2xFLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUc7WUFDOUIsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsV0FBVyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNqQixZQUFZLEdBQUcsRUFBRTtZQUN2QixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQy9CLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUc7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFdBQVcsRUFBQyxDQUFDLE9BQU87Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7OzBCQUN4QyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztvQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUM7b0JBRTlHLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTt3QkFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUNuRDtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtvQkFDbkQsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xGO3FCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsV0FBVyxFQUFFO29CQUNsRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM3RDtxQkFBTTtvQkFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDekM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ25CLFVBQVU7OztRQUFFLEdBQUcsRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLEdBQUUsR0FBRyxDQUFFLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBRUgsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCLEVBQUUsSUFBUztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O2NBRXJCLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQztRQUNoSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dCQUNwRSxxQkFBcUI7Z0JBQ3JCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQ0Qsb0JBQW9CO1lBQ3BCLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUNySCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQzFFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUM7YUFDN0csT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxVQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7O2tCQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQzs7a0JBQ3JELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO1lBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN2QztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQS9mRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsazNRQUEyQzs7YUFFNUM7Ozs7WUF2Q0MsaUJBQWlCO1lBbUJWLGFBQWE7WUFFYixlQUFlO1lBVVksaUJBQWlCO1lBSDVDLFlBQVk7WUE5QlosUUFBUTtZQWdDVCxhQUFhOzs7bUJBZ0JsQixLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBRUwsS0FBSztxQkFDTCxLQUFLOzJCQUNMLE1BQU07c0JBQ04sS0FBSztxQkFDTCxLQUFLO2lDQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLLFlBQUksU0FBUyxTQUFDLG9CQUFvQjs2QkFJdkMsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQUNOLE1BQU07OEJBQ04sTUFBTTsyQkFDTixNQUFNO3lCQUNOLE1BQU07cUJBQ04sTUFBTTt3QkFDTixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsTUFBTTswQkFFTixLQUFLOzJCQWNMLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7aUNBQ2hELFNBQVMsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0NBQ3RELFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7NEJBQ3JELFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7MEJBQ2pELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzBCQXlCL0MsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7QUE1RmY7SUFBZixZQUFZLEVBQUU7O3lEQUF1QjtBQUN2QjtJQUFkLFdBQVcsRUFBRTs7MkRBQXFCO0FBc0JuQjtJQUFmLFlBQVksRUFBRTs7MERBQXdCO0FBQ3ZCO0lBQWYsWUFBWSxFQUFFOztxREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7OzJEQUF3QjtBQUN2QjtJQUFmLFlBQVksRUFBRTs7d0RBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOztvREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OzBEQUF1QjtBQUN0QjtJQUFmLFlBQVksRUFBRTs7bURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzsyREFBeUI7QUFDeEI7SUFBZixZQUFZLEVBQUU7OzREQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs7MkRBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFOztrREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTs7MERBQXdCO0FBQ3ZCO0lBQWYsWUFBWSxFQUFFOztzREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O3FEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7b0RBQWtCO0FBU2pCO0lBQWYsWUFBWSxFQUFFOzt1REFBcUI7OztJQXJEN0Msb0NBQWlCOztJQUNqQiwrQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUF1Qzs7SUFFdkMsa0NBQXlDOztJQUN6Qyx1Q0FBZ0Y7O0lBQ2hGLDZDQUFnRDs7SUFDaEQsMkNBQStDOztJQUMvQyw2Q0FBNEM7O0lBQzVDLDBDQUEwQjs7SUFDMUIsOENBQTZDOztJQUM3QyxtQ0FBbUI7O0lBQ25CLG1DQUEyQzs7SUFDM0Msb0NBQTRDOztJQUM1QyxzQ0FBOEM7O0lBQzlDLHlDQUFvQzs7SUFDcEMsdUNBQXVCOztJQUN2QixzQ0FBdUI7O0lBRXZCLGtDQUFtQjs7SUFDbkIsb0NBQTRCOztJQUM1QiwwQ0FBa0Y7O0lBQ2xGLHFDQUF5Qjs7SUFDekIsb0NBQXdCOztJQUN4QixnREFBa0U7O0lBQ2xFLG9DQUFpRjs7SUFDakYsMENBR0c7O0lBQ0gsNENBQWdEOztJQUNoRCx1Q0FBMkM7O0lBQzNDLDZDQUFnRDs7SUFDaEQsMENBQThDOztJQUM5QyxzQ0FBMEM7O0lBQzFDLDRDQUErQzs7SUFDL0MscUNBQXlDOztJQUN6Qyw2Q0FBaUQ7O0lBQ2pELDhDQUFrRDs7SUFDbEQsNkNBQWlEOztJQUNqRCxvQ0FBd0M7O0lBQ3hDLDRDQUFnRDs7SUFDaEQsd0NBQTRDOztJQUM1Qyx1Q0FBMkM7O0lBQzNDLHNDQUEwQzs7SUFDMUMseUNBQXlEOztJQUN6RCx5Q0FBZ0Q7O0lBQ2hELHdDQUErQzs7SUFDL0MsNkNBQW9EOztJQUNwRCwwQ0FBaUQ7O0lBQ2pELHdDQUErQzs7SUFDL0Msb0NBQTJDOztJQUMzQyx1Q0FBdUI7O0lBQ3ZCLHlDQUE2Qzs7SUFDN0Msd0NBQStDOztJQUUvQyx5Q0FBaUQ7O0lBQ2pELHNDQUE0Qzs7SUFFNUMsc0NBQWlCOztJQUNqQiw4Q0FBd0I7O0lBQ3hCLDJDQUFxQzs7SUFDckMsNkNBQXdCOztJQUN4Qix3Q0FBbUI7O0lBQ25CLG9DQUFzQjs7SUFDdEIsc0NBQXdCOztJQUN4QiwwQ0FBa0I7O0lBQ2xCLHNDQUFhOztJQUNiLDZDQUF1Qjs7SUFFdkIsMENBQTRFOztJQUM1RSxnREFBd0Y7O0lBQ3hGLCtDQUFzRjs7SUFDdEYsMkNBQThFOztJQUM5RSx5Q0FBMEU7Ozs7O0lBeU14RSxpQ0FBOEI7Ozs7O0lBQzlCLGtDQUEyQjs7Ozs7SUFDM0IsNkNBQXdDOzs7OztJQUN4QywrQ0FBNEM7Ozs7O0lBQzVDLDBDQUFrQzs7Ozs7SUFDbEMsc0NBQTBCOzs7OztJQUMxQixxQ0FBOEI7Ozs7O0FBZ09sQyxvQ0FHQzs7O0lBRkMsOEJBQVU7O0lBQ1Ysa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlLCB0b0Jvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgJ2pzcGRmLWF1dG90YWJsZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25TZXJ2aWNlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWdyaWQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NHcmlkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhYmxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dyaWRDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGhlYWRlckJvdHRvbVN0eWxlID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVNRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgQElucHV0KCkgY29uZmlnOiBHcmlkQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4oKTtcclxuICBASW5wdXQoKSBmaWVsZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcHJpbnRMYW5kc2NhcGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VFtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByYXRlQ291bnQgPSA1O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwdWJsaWMgZHJvcGRvd246IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50O1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIHRhcENvdW50ID0gMDtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLypDb250ZXh0IE1lbnUgKi9cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMubnpEcm9wZG93blNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgc29ydCgkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApe1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoe3NvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKCR7ZmllbGQud2lkdGh9IC0gNDVweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBjYWxjKCR7ZmllbGQud2lkdGh9IC0gMTBweClgO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSB8fFxyXG4gICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucm93T25FZGl0aW9uID49IDApIHtcclxuICAgICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoaWxkT2YoIG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSApIHtcclxuICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGNoaWxkID09PSBhbmNlc3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49MCApIHJldHVybiB0cnVlO1xyXG4gICAgICBjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAoJ0VudGVyJyB8fCAnZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlTmdNb2RlbChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWQgPyBpdGVtLnNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQnV0dG9uQ2xpY2soZmllbGQ6IGFueSkge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2Uob25pbml0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYWxsQ2hlY2tlZCA9IGRhdGFTZWxlY3RkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aDtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGQubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDaGVja2VkO1xyXG5cclxuICAgIGlmICghb25pbml0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YVNlbGVjdGQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdNb2RlbENoYW5nZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIG9uUmF0ZUNoYW5nZShjb3VudDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGFbdGhpcy5jb25maWcuZmllbGRSYXRlXSA9IGNvdW50O1xyXG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCAmJiBmaWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICByZXN1bHQgPSAoaXRlbSAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoZmllbGQ6IEZpZWxkKTogYm9vbGVhbntcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5ICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdib29sZWFuJztcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIGlzRGF0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b24oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRhZyhmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWc7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpEcm9wZG93blNlcnZpY2U6IE56RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICAvLyByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLm9uQ2hlY2tib3hDaGFuZ2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5zdWJzY3JpYmUoKGNvbmZpZzogR3JpZEV4cENvbmZpZykgPT4ge1xyXG5cclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIHRoaXMub25DaGVja2JveENoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgZWxlbWVudElkOiB0aGlzLmdyaWRJRCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLnNhdmUoZXhwb3J0QXNDb25maWcsIGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gICAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKTtcclxuXHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZihmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkb2MgPSAhdGhpcy5wcmludExhbmRzY2FwZSA/IG5ldyBqc1BERigpIDogbmV3IGpzUERGKCdsJywgJ3B0Jyk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnIHx8XHJcbiAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IFtdO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcgfHxcclxuICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZSkge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICB0aGVtZTogJ3N0cmlwZWQnLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiA1IH0sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIGNvbHVtbnNcclxuICAgIH0pO1xyXG5cclxuICAgIGRvYy5zYXZlKGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKXtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgJiYgaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdICE9PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKVxyXG4gICAgICAuZm9yRWFjaChlbGVtID0+IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNdWx0aXBsZShjdXJyZW50SWR4KSB7XHJcbiAgICBpZiAodGhpcy5sYXN0SWR4U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbWlub3JJZHggPSBNYXRoLm1pbih0aGlzLmxhc3RJZHhTZWxlY3RlZCwgY3VycmVudElkeCk7XHJcbiAgICAgIGNvbnN0IG1heElkeCA9IE1hdGgubWF4KHRoaXMubGFzdElkeFNlbGVjdGVkLCBjdXJyZW50SWR4KTtcclxuICAgICAgZm9yIChsZXQgaSA9IG1pbm9ySWR4OyBpIDw9IG1heElkeDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hTZWxlY3Qge1xyXG4gIGRhdGE6IGFueTtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxufVxyXG4iXX0=