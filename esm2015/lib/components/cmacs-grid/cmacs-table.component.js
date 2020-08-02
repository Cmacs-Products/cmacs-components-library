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
import 'jspdf-autotable';
import { TemplateType } from '../core/enums/templateType.enum';
import { CeldType } from '../core/enums/celdType.enum';
import { ExcelService } from '../core/services/excel.service';
import { ExportType } from '../core/enums/export-type.enum';
import { CookieService } from "ngx-cookie-service";
import { NzDropdownService } from "ng-zorro-antd";
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { UtilService } from '../core/services/util.service';
/** @type {?} */
const moment = moment_;
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
     * @param {?} utilService
     * @param {?} datePipe
     * @param {?} cookies
     */
    constructor(cdr, i18n, exportAsService, nzDropdownService, excelService, utilService, datePipe, cookies) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.nzDropdownService = nzDropdownService;
        this.excelService = excelService;
        this.utilService = utilService;
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
        this.printLandscape = true;
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
        this.order = 0;
        this.clicks = 0;
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
            return `calc(100% - 15px)`;
        }
        return `100%`;
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
                data: Object.assign({}, item),
                order: item.selected ? this.order++ : -1
            });
        }));
    }
    /**
     * @return {?}
     */
    getMaxWidth() {
        return `calc(100% - 17px)`;
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
        this.preventDefault(event);
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
            this.refreshCheckboxState(true);
        }
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.checkCheckboxState();
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
            }
        }));
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
        if (changes.data) {
            this.updateCheckboxCache();
            this.refreshCheckboxState();
        }
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
        /** @type {?} */
        const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    exportToPdf(config) {
        this.loading = true;
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
     * @param {?} $event
     * @return {?}
     */
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
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
        elem => { elem.selected = false, elem.order = -1; }));
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
}
CmacsGridComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-grid',
                exportAs: 'cmacsGrid',
                template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\" class=\"cmacs-table\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr>\r\n        <th *ngIf=\"checkboxSelect\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\"\r\n            (nzSortChange)=\"sort($event, field.property)\"\r\n            [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n            [style.maxWidth]=\"field.width\"\r\n            [nzWidth]=\"field.width\">\r\n          <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n               [class.cmacs-table-overflow-cell-header]=\"!wrapLines\"\r\n               >{{field.display}}\r\n          </div>\r\n        </th>\r\n        <th [style.minWidth]=\"'105px'\"\r\n            [style.maxWidth]=\"'105px'\"\r\n            [nzWidth]=\"'105px'\" *ngIf=\"showRate\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          (click)=\"clickRow($event, data)\"\r\n          (touchstart)=\"tapHandler($event, data)\"\r\n          class=\"cmacs-no-selection\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (contextmenu)=\"contextMenu($event, contextMenuTemplate)\">\r\n        <ng-template #contextMenuTemplate>\r\n          <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n        </ng-template>\r\n        <td *ngIf=\"checkboxSelect\" [style.maxWidth]=\"'40px'\" [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n            (checkedChange)=\"onCheckboxChange($event, data)\"\r\n            *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n        </td>\r\n        <td *ngFor=\"let field of getFields()\" [ngClass]=\"(isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field)) ? ['editable-row'] : ['']\" [style.maxWidth]=\"'100%'\">\r\n          <ng-container *ngIf=\"isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field); else componentTpl\">\r\n            <div class=\"editable-cell\" [style.maxWidth]=\"'100%'\"\r\n              *ngIf=\"(editId !== data[config.fieldId] || property !== field.property); else editTpl\">\r\n              <div class=\"editable-cell-value-wrap\" [style.maxWidth]=\"'100%'\"\r\n                   (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n                <ng-container *ngIf=\"!isDate(field) && !isSelect(field)\">\r\n                    <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                      *ngIf=\"!field.showTooltip || !data[field.property] || !data[field.property].length\"\r\n                      [style.maxWidth]=\"getMaxWidth()\">\r\n                      {{ data[field.property] && data[field.property].length ? data[field.property] : field.placeholder }}\r\n                    </div>\r\n                    <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                      *ngIf=\"field.showTooltip && data[field.property] && data[field.property].length\"\r\n                      [style.maxWidth]=\"getMaxWidth()\" cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                      {{ data[field.property] }}\r\n                    </div>\r\n                  <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isDate(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-template #editTpl>\r\n              <input #fieldTypeInput *ngIf=\"isString(field)\" type=\"text\" cmacs-input class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n              <cmacs-input-number #fieldTypeInputNumber id=\"testing2\" class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                *ngIf=\"isNumber(field)\" [(ngModel)]=\"data[field.property]\"\r\n                [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\" (ngModelChange)=\"ngModelChange(i)\"></cmacs-input-number>\r\n\r\n              <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(data[field.property])\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n              <cmacs-date-picker\r\n                #fieldTypeDatePicker\r\n                *ngIf=\"isDate(field)\"\r\n                (click)=\"preventDefault($event)\"\r\n                (dblclick)=\"preventDefault($event)\"\r\n                [format]=\"'MM/dd/yyyy'\"\r\n                [allowClear]=\"true\"\r\n                class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i)\">\r\n              </cmacs-date-picker>\r\n\r\n              <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 100%;\" showSearch class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n                <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n              </cmacs-select>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #componentTpl>\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <button *ngIf=\"isCeldTypeButton(field)\" cmacs-button type=\"{{field.button.style}}\"\r\n              (click)=onButtonClick(data)>\r\n              <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n              <ng-template #titleTpl>{{field.display}}</ng-template>\r\n            </button>\r\n            <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\"\r\n              [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n              [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n              [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n              [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n              {{  data[field.property] }}\r\n            </cmacs-tag>\r\n            <ng-container\r\n              *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n            </ng-container>\r\n            <ng-container\r\n              *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                *ngIf=\"!field.showTooltip || !data[field.property] || !data[field.property].length\" [style.maxWidth]=\"getMaxWidth()\">\r\n                {{ data[field.property] && data[field.property].length ? data[field.property] : field.placeholder }}\r\n              </div>\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                *ngIf=\"field.showTooltip && data[field.property] && data[field.property].length\" [style.maxWidth]=\"getMaxWidth()\"\r\n                cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                {{ data[field.property] }}\r\n              </div>\r\n              <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n            </ng-container>\r\n          </ng-template>\r\n        </td>\r\n        <td *ngIf=\"showRate\" class=\"cmacs-table-rating\">\r\n          <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                   [nzCount]='rateCount'\r\n                   (ngModelChange)=\"onRateChange($event, data)\"\r\n                   [nzDisabled]=\"!inLineEdit\"\r\n                   (click)=\"onRateClick($event)\"></nz-rate>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["::ng-deep .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}.cmacs-table .cmacs-table-rating{min-width:105px}.cmacs-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table tbody td>.cmacs-table-overflow-cell{line-height:24px!important}.cmacs-table .cmacs-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}::ng-deep .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}::ng-deep .cmacs-table .ant-table-column-sorters,::ng-deep .cmacs-table .ant-table-header-column{width:100%}::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover::before{background-color:transparent}.cmacs-table .editable-cell{position:relative}.cmacs-table .editable-cell-value-wrap{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table .editable-row:hover .editable-cell-value-wrap{border:1px solid #2a7cff;border-radius:4px;padding:5px 4px;margin-right:-5px;margin-left:-5px}.cmacs-table .ant-table-tbody>tr td.editable-row:first-child,.cmacs-table .ant-table-tbody>tr>td.editable-row{padding:9px 10px}::ng-deep .cmacs-table .ant-rate{height:16px;font-size:16px}::ng-deep .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table .ant-table-thead>tr{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}::ng-deep .cmacs-table .ant-table-thead>tr>th{color:#656c79;background-color:#f6f7fb;border-bottom:1px solid transparent}::ng-deep .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0;box-shadow:0 -1px 0 #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18);position:relative}::ng-deep .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:0 -1px 0 #dee0e5 inset}::ng-deep .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}::ng-deep .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 -1px 0 #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;position:relative}.cmacs-table .editable-row,.cmacs-table .ng-star-inserted{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-table cmacs-tag{padding:1px 5px!important;height:unset}.cmacs-table .ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,::ng-deep .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}::ng-deep .cmacs-table .ant-spin-nested-loading{clear:both}::ng-deep .cmacs-table .ant-table table{border-collapse:collapse}::ng-deep .cmacs-table .tableinput.ant-input:focus,::ng-deep .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2a7cff}::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),::ng-deep .cmacs-table .tableinput,::ng-deep .cmacs-table .tableinput .ant-select-selection--single,::ng-deep .cmacs-table .tableinput .datepickerwidth,::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input,::ng-deep .cmacs-table .tableinput>*{height:30px!important}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}::ng-deep .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}::ng-deep .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}::ng-deep .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}::ng-deep .cmacs-table cmacs-input-number.tableinput,::ng-deep .cmacs-table cmacs-select.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell,::ng-deep .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}::ng-deep .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}::ng-deep .cmacs-table table{table-layout:fixed}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:-webkit-inline-box;display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner,::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on),::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on){color:#bec4cd}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}::ng-deep .cmacs-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:auto!important;position:inherit}::-webkit-scrollbar,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"]
            }] }
];
/** @nocollapse */
CmacsGridComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ExportAsService },
    { type: NzDropdownService },
    { type: ExcelService },
    { type: UtilService },
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
    /** @type {?} */
    CmacsGridComponent.prototype.order;
    /** @type {?} */
    CmacsGridComponent.prototype.clicks;
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
    CmacsGridComponent.prototype.utilService;
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
    /** @type {?|undefined} */
    CheckboxSelect.prototype.order;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1ncmlkL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFpQixTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBOEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxLQUFLLE9BQU8sTUFB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eEMsK0NBQTRDOzs7OztJQUM1QywwQ0FBa0M7Ozs7O0lBQ2xDLHlDQUFnQzs7Ozs7SUFDaEMsc0NBQTBCOzs7OztJQUMxQixxQ0FBOEI7Ozs7O0FBeU5sQyxvQ0FJQzs7O0lBSEMsOEJBQVU7O0lBQ1Ysa0NBQWtCOztJQUNsQiwrQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlLCB0b0Jvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBHcmlkRXhwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtZXhwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEV4Y2VsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2V4cG9ydC10eXBlLmVudW0nO1xyXG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ncmlkJyxcclxuICBleHBvcnRBczogJ2NtYWNzR3JpZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10YWJsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgQ21hY3NHcmlkQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBJbnB1dCgpIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW50TGFuZHNjYXBlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd3JhcExpbmVzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VFtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByYXRlQ291bnQgPSA1O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRleHRtZW51OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwdWJsaWMgZHJvcGRvd246IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50O1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIHRhcENvdW50ID0gMDtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLypDb250ZXh0IE1lbnUgKi9cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMubnpEcm9wZG93blNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgc29ydCgkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApe1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoe3NvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyTWF4V2lkdGgoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICBpZiAoZmllbGQuc2hvd1NvcnQpIHtcclxuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxNXB4KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYDEwMCVgO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSB8fFxyXG4gICAgICAgICh0aGlzLmJvb2xFbGVtZW50ICYmIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucm93T25FZGl0aW9uID49IDApIHtcclxuICAgICAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoaWxkT2YoIG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSApIHtcclxuICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGNoaWxkID09PSBhbmNlc3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49MCApIHJldHVybiB0cnVlO1xyXG4gICAgICBjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAoJ0VudGVyJyB8fCAnZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlTmdNb2RlbChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVtpbmRleF0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIG9yZGVyID0gMDtcclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkID8gaXRlbS5zZWxlY3RlZCA6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9LFxyXG4gICAgICAgIG9yZGVyOiBpdGVtLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAxN3B4KWA7XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSkge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMuZ2V0SW5kZXgoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSldLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2hlY2tib3hTdGF0ZShvbmluaXQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuICAgIGlmICghb25pbml0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YVNlbGVjdGVkLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmFsbENoZWNrZWQgPSAoZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKGRhdGFTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGgpKTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBuZ01vZGVsQ2hhbmdlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbik7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94QWxsQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgoc3RhdHVzKSA/IHRoaXMuZGF0YSA6IFtdKTtcclxuICB9XHJcblxyXG4gIGdldExhYmVsKGRhdGE6IGFueSwgZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QgJiYgZmllbGQuc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBjb25zdCBpdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGRhdGFbZmllbGQucHJvcGVydHldKTtcclxuICAgICAgcmVzdWx0ID0gKGl0ZW0gIT09IHVuZGVmaW5lZCkgPyBpdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3QoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAodmFsdWUpID09PSAnYm9vbGVhbic7XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc051bWJlcihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhwb3J0QXNTZXJ2aWNlOiBFeHBvcnRBc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG56RHJvcGRvd25TZXJ2aWNlOiBOekRyb3Bkb3duU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICAvLyByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29va2llcy5jaGVjayh0aGlzLmdyaWRJRCkpIHtcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWdTdHIgPSB0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKTtcclxuICAgICAgLy8gcmVzZXQgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIHNhdmVkQ29uZmlnU3RyLCAzNjUpO1xyXG5cclxuICAgICAgLy8gcGFyc2UgY29va2llIHZhbHVlIHRvIHR5cGVzY3JpcHQgY29uc3RcclxuICAgICAgY29uc3Qgc2F2ZWRDb25maWcgPSBKU09OLnBhcnNlKHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpKSBhcyBHcmlkQ29uZmlnO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzYXZlZENvbmZpZztcclxuICAgICAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5leHBvcnRFdmVudC5zdWJzY3JpYmUoKGNvbmZpZzogR3JpZEV4cENvbmZpZykgPT4ge1xyXG5cclxuICAgICAgc3dpdGNoIChjb25maWcuZXhwb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5QZGY6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKGNvbmZpZyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuWHNseDpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbChjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBuZzpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QbmcoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BuZyhmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZSgncG5nJywgZmlsZU5hbWUsIHRoaXMuZ3JpZElEKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcgfHxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZik7XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZihjb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydFRhYmxlKFxyXG4gICAgICAncGRmJyxcclxuICAgICAgY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICB0aGlzLmdyaWRJRCxcclxuICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICBjb25maWcuZXhwb3J0VXNlck5hbWUsXHJcbiAgICAgIGNvbmZpZy5leHBvcnRUaXRsZSxcclxuICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICBjb25maWcuZXhwb3J0VGFibGVDdXN0b21XaWR0aCxcclxuICAgICAgY29uZmlnLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKXtcclxuICAgIHRoaXMudGFwQ291bnQgKz0gMTtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH0sIDYwMCApO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiAxKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDEpIHtcclxuICAgICAgICB0aGlzLmRibENsaWNrUm93KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgLyogR2V0IGluZGV4IG9mIHNlbGVjdGlvbiAqL1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgIGlmICghdGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSkge1xyXG4gICAgICAgIC8qIFNoaWZ0IFNlbGVjdGlvbiAqL1xyXG4gICAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3Rpb24oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLyogU2VsZWN0IGVsZW1lbnQgKi9cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPSBldmVudCAmJiB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpID8gdHJ1ZSA6ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICAgIC8qIFNhdmUgbGFzdCBpbmRleCBzZWxlY3RlZCAqL1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IGluZGV4IDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLm9yZGVyID0gdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0aW9uKGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2VsZWN0ZWQgPSBmYWxzZSwgZWxlbS5vcmRlciA9IC0xIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TXVsdGlwbGUoY3VycmVudElkeCkge1xyXG4gICAgaWYgKHRoaXMubGFzdElkeFNlbGVjdGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChjdXJyZW50SWR4ICE9PSB0aGlzLmxhc3RJZHhTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmxhc3RJZHhTZWxlY3RlZF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICAgICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4ID4gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPyB0aGlzLmxhc3RJZHhTZWxlY3RlZCArIDEgOiB0aGlzLmxhc3RJZHhTZWxlY3RlZCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZVtjdXJyZW50SWR4XS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeDtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hTZWxlY3Qge1xyXG4gIGRhdGE6IGFueTtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBvcmRlcj86IG51bWJlcjtcclxufVxyXG4iXX0=