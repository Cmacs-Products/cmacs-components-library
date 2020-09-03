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
/** @type {?} */
var moment = moment_;
/**
 * @template T
 */
var CmacsCompactTableComponent = /** @class */ (function () {
    function CmacsCompactTableComponent(cdr, i18n, excelService, datePipe, nzDropdownService, cookies, utilService) {
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
        this.onrowdeleted = new EventEmitter();
        this.onrowadded = new EventEmitter();
        this.indentSize = 0;
        this.selected = false;
        this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value ? "" + value.toString().replace('.', ',') : ''; });
        this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value.replace(',', '.'); });
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
    CmacsCompactTableComponent.prototype.preventDefault = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    };
    /*Context Menu */
    /*Context Menu */
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.contextMenu = /*Context Menu */
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    function ($event, template) {
        this.dropdown = this.nzDropdownService.create($event, template);
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.validate = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        /** @type {?} */
        var formControl = field.validators ? new FormControl(data[field.property], field.validators) : new FormControl(data[field.property]);
        data.valid = data.valid ? data.valid : {};
        data.valid[field.property] = formControl.valid;
        return formControl.valid;
    };
    /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.addRow = /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    function (idx, $event) {
        if ($event === void 0) { $event = null; }
        this.onrowadded.emit(idx);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.data = tslib_1.__spread(this.data);
        this.ondrop.emit(event);
    };
    /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.deleteRow = /**
     * @param {?} idx
     * @param {?=} $event
     * @return {?}
     */
    function (idx, $event) {
        if ($event === void 0) { $event = null; }
        /** @type {?} */
        var itemToRemove = this.data[idx];
        this.onrowdeleted.emit(itemToRemove);
        this.editionOpTriggered = true;
        if ($event) {
            this.preventDefault($event);
        }
    };
    /**
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.startEdit = /**
     * @param {?} id
     * @param {?} property
     * @param {?} event
     * @return {?}
     */
    function (id, property, event) {
        if (this.inLineEdit) {
            event.preventDefault();
            event.stopPropagation();
            if (this.editId !== null) {
                this.emitOnEditEvent();
            }
            this.editId = id;
            this.property = property;
        }
    };
    /**
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.sort = /**
     * @param {?} $event
     * @param {?} fieldProperty
     * @return {?}
     */
    function ($event, fieldProperty) {
        this.sortChange.emit({ sortName: fieldProperty, sortValue: $event });
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getHeaderMaxWidth = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.showSort) {
            return "calc(100% - 15px)";
        }
        return "100%";
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.handleMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var element = (/** @type {?} */ (e.target));
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
    };
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getCustomPadding = /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (item, i) {
        if (!i) {
            if (!item.level) {
                return !!item.children ? 6 : 28;
            }
            else {
                return item.level * this.indentSize;
            }
        }
        return 6;
    };
    /**
     * @param {?} node
     * @param {?} ancestor
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.childOf = /**
     * @param {?} node
     * @param {?} ancestor
     * @return {?}
     */
    function (node, ancestor) {
        /** @type {?} */
        var child = node;
        while (child !== null) {
            if (child === ancestor)
                return true;
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string' &&
                child.className.indexOf('cdk-overlay-pane') >= 0)
                return true;
            child = child.parentNode;
        }
        return false;
    };
    /**
     * @param {?} $event
     * @param {?} index
     * @param {?=} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.endEditMode = /**
     * @param {?} $event
     * @param {?} index
     * @param {?=} data
     * @return {?}
     */
    function ($event, index, data) {
        if (data === void 0) { data = null; }
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
    };
    /**
     * @param {?} index
     * @param {?=} data
     * @param {?=} property
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.endEditModeNgModel = /**
     * @param {?} index
     * @param {?=} data
     * @param {?=} property
     * @return {?}
     */
    function (index, data, property) {
        if (data === void 0) { data = null; }
        if (property === void 0) { property = null; }
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
    };
    /**
     * @param {?} index
     * @param {?=} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngModelChange = /**
     * @param {?} index
     * @param {?=} data
     * @return {?}
     */
    function (index, data) {
        if (data === void 0) { data = null; }
        if (this.expandable) {
            this.nodeOnEdition = data;
            return;
        }
        this.rowOnEdition = index;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getIndex = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        /** @type {?} */
        var i = -1;
        i = this.checkboxCache.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data[_this.config.fieldId] === id; }));
        return i;
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.updateCheckboxCache = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkboxTempCache = [];
        for (var i = 0; i < this.data.length; i++) {
            checkboxTempCache.push({
                selected: this.editionOpTriggered ? false : this.data[i].selected,
                data: tslib_1.__assign({}, this.data[i]),
                order: this.data[i].selected ? this.order++ : -1
            });
        }
        this.checkboxCache = tslib_1.__spread(checkboxTempCache);
        if (this.editionOpTriggered) {
            this.editionOpTriggered = false;
        }
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.updateCheckboxCacheTreeData = /**
     * @return {?}
     */
    function () {
        this.convertExpandTreeToList(this.data, this.checkboxCache);
    };
    /**
     * @param {?} item
     * @param {?} plainList
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.convertExpandTreeToList = /**
     * @param {?} item
     * @param {?} plainList
     * @return {?}
     */
    function (item, plainList) {
        var _this = this;
        if (isArray(item)) {
            item.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var elementInCache = plainList.findIndex((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return el.data[_this.config.fieldId] === elem[_this.config.fieldId]; }));
                if (elementInCache < 0) {
                    plainList.push({
                        selected: false,
                        order: -1,
                        data: tslib_1.__assign({}, elem)
                    });
                }
                if (elem.children && elem.children.length > 0) {
                    _this.convertExpandTreeToList(elem.children, plainList);
                }
            }));
        }
        else {
            /** @type {?} */
            var elementInCache = plainList.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.data[_this.config.fieldId] === item[_this.config.fieldId]; }));
            if (elementInCache < 0) {
                plainList.push({
                    selected: false,
                    order: -1,
                    data: tslib_1.__assign({}, item)
                });
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onButtonClick = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.buttonClick.emit(field);
    };
    /**
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onCheckboxChange = /**
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    function ($event, data) {
        this.checkboxCache[this.getIndex(data[this.config.fieldId])].order = $event ? this.order++ : -1;
        this.refreshCheckboxState();
    };
    /**
     * @param {?=} oninit
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.refreshCheckboxState = /**
     * @param {?=} oninit
     * @return {?}
     */
    function (oninit) {
        if (oninit === void 0) { oninit = false; }
        /** @type {?} */
        var dataSelected = this.checkCheckboxState();
        if (!oninit) {
            this.selectionChange.emit(dataSelected.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.data; })));
        }
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.checkCheckboxState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dataSelected = this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected === true; })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        this.selected = this.allChecked = (dataSelected.length > 0 && (dataSelected.length === this.checkboxCache.length));
        this.isIndeterminate = dataSelected.length > 0 && !this.allChecked;
        return dataSelected;
    };
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: no-shadowed-variable
    /**
     * @param {?} count
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onRateChange = 
    // tslint:disable-next-line: no-shadowed-variable
    /**
     * @param {?} count
     * @param {?} data
     * @return {?}
     */
    function (count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onRateClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        if (this.config && this.config.fields) {
            return this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.hidden === undefined || !item.hidden; }));
        }
        return [];
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onCheckboxAllChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.checkboxCache.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.selected = status;
            element.order = -1;
        }));
        this.isIndeterminate = false;
        this.selectionChange.emit((status) ? this.data : []);
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getLabel = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        /** @type {?} */
        var result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            /** @type {?} */
            var item = field.select.selectData.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== undefined && item[field.select.value] === data[field.property]; }));
            result = (item !== undefined) ? item[field.select.label] : '';
        }
        return result;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isSelect = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Select;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isString = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isReadOnly = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isNumber = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Number;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isBoolean = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Boolean;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'object';
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isDate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Date;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isTime = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Time;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isCeldTypeDefault = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Default;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isCeldTypeButton = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Button;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isCeldTypeTag = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.Tag;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isCeldTypeTemplateRef = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field !== undefined && field.celdType === CeldType.TemplateRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isUndefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === undefined;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isRowSelected = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (this.config) {
            /** @type {?} */
            var dataSelectd = this.checkboxCache.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.selected; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.data[_this.config.fieldId]; }));
            return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cookies.check(this.gridID)) {
            /** @type {?} */
            var savedConfigStr = this.cookies.get(this.gridID);
            // reset expiration date
            this.cookies.set(this.gridID, savedConfigStr, 365);
            // parse cookie value to typescript const
            /** @type {?} */
            var savedConfig = (/** @type {?} */ (JSON.parse(this.cookies.get(this.gridID))));
            if (typeof savedConfig === "object") {
                this.config = savedConfig;
                this.configChange.emit(this.config);
            }
        }
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.setFieldsDefault = /**
     * @return {?}
     */
    function () {
        if (this.config && this.config.fields) {
            this.config.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                field.editable = field.editable === null || field.editable === undefined ? true : field.editable;
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.gridID) {
            this.gridID = this.utilService.uuidv4();
        }
        this.setFieldsDefault();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
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
        function (config) {
            switch (config.exportType) {
                case ExportType.Pdf:
                    _this.exportToPdf(config);
                    break;
                case ExportType.Xslx:
                    _this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    _this.exportToPng(config.fileName);
                    break;
                case ExportType.PdfTree:
                    _this.exportTreePdf(config.fileName);
                    break;
                case ExportType.XslxTree:
                    _this.exportTreeExcel(config.fileName);
                    break;
            }
        }));
        /* Convert tree to list if expandable */
        if (this.expandable && this.config) {
            this.fieldID = this.config.fieldId;
            /** @type {?} */
            var coerceData = (/** @type {?} */ (this.data));
            coerceData.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.mapOfExpandedData[item[_this.fieldID]] = _this.convertTreeToList(item);
            }));
        }
        this.utilService.exportCompleted.subscribe((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
            _this.cdr.markForCheck();
        }));
        this.excelService.exportCompleted.subscribe((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.data && this.config) {
            if (this.expandable) {
                if (!this.data.length) {
                    this.checkboxCache = [];
                    this.mapOfExpandedData = {};
                }
                this.updateCheckboxCacheTreeData();
                this.fieldID = this.config.fieldId;
                /** @type {?} */
                var coerceData = (/** @type {?} */ (this.data));
                coerceData.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (!_this.mapOfExpandedData[item[_this.fieldID]]) {
                        _this.mapOfExpandedData[item[_this.fieldID]] = _this.convertTreeToList(item);
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
    };
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
    CmacsCompactTableComponent.prototype.exportTreePdf = /* getTreeNodeByKey(node: any, key: any) {
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
    function (fileName) {
        /** @type {?} */
        var doc = new jsPDF();
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var rows = [];
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.celdType === CeldType.Default; })).forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            columns.push(field.display);
        }));
        this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.celdType === CeldType.TemplateRef; })).forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            columns.push(field.display);
        }));
        this.exportTreeToPdfRec(rows, this.data, 0);
        doc.autoTable({
            theme: 'striped',
            margin: { top: 5 },
            body: rows,
            columns: columns
        });
        /** @type {?} */
        var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName + '.pdf';
        doc.save(filenameFormatted);
    };
    /**
     * @param {?} rows
     * @param {?} data
     * @param {?=} offSetMargin
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportTreeToPdfRec = /**
     * @param {?} rows
     * @param {?} data
     * @param {?=} offSetMargin
     * @return {?}
     */
    function (rows, data, offSetMargin) {
        var _this = this;
        if (offSetMargin === void 0) { offSetMargin = 0; }
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = [];
            /** @type {?} */
            var coercedItem = (/** @type {?} */ (item));
            /** @type {?} */
            var parentStyles = { cellPadding: [2, 2, 2, 2] };
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @param {?} idx
             * @return {?}
             */
            function (field, idx) {
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
                            var selectItem = field.select.selectData.find((/**
                             * @param {?} option
                             * @return {?}
                             */
                            function (option) { return option[field.select.value] === item[field.property]; }));
                            if (selectItem !== undefined) {
                                itemToExport.push({ content: selectItem[field.select.label], styles: parentStyles });
                            }
                            break;
                        case TemplateType.Date:
                            itemToExport.push({ content: _this.datePipe.transform(item[field.property], 'MMMM dd yyyy'), styles: parentStyles });
                            break;
                        case TemplateType.Time:
                            itemToExport.push({ content: _this.datePipe.transform(item[field.property], 'h:mm a'), styles: parentStyles });
                            break;
                        default:
                            itemToExport.push({ content: item[field.property], styles: parentStyles });
                            break;
                    }
                }
            }));
            rows.push(itemToExport);
            if (coercedItem.children && coercedItem.children.length) {
                _this.exportTreeToPdfRec(rows, coercedItem.children, 5 + offSetMargin);
            }
        }));
    };
    /**
     * @param {?} root
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.convertTreeToList = /**
     * @param {?} root
     * @return {?}
     */
    function (root) {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var array = [];
        /** @type {?} */
        var hashMap = {};
        stack.push(tslib_1.__assign({}, root, { level: 0, expand: this.expandAll ? this.expandAll : root.expand }));
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(tslib_1.__assign({}, node.children[i], { level: node.level + 1, expand: this.expandAll ? this.expandAll : node.children[i].expand, parent: node }));
                }
            }
        }
        return array;
    };
    /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.visitNode = /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    function (node, hashMap, array) {
        if (!hashMap[node[this.fieldID]]) {
            hashMap[node[this.fieldID]] = true;
            array.push(node);
        }
    };
    /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ExpandCollapse = /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    function (array, data, $event) {
        if ($event === false) {
            this.collapseChildren(array, data, $event);
        }
        this.onRowExpandCollapse.emit({ data: data, $event: $event });
    };
    /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.collapseChildren = /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    function (array, data, $event) {
        var _this = this;
        if ($event === false) {
            if (data.children) {
                data.children.forEach((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) {
                    /** @type {?} */
                    var target = (/** @type {?} */ (array.find((/**
                     * @param {?} a
                     * @return {?}
                     */
                    function (a) { return a[_this.fieldID] === d[_this.fieldID]; }))));
                    target.expand = false;
                    _this.collapseChildren(array, target, false);
                }));
            }
            else {
                return;
            }
        }
    };
    /**
     * @param {?} $event
     * @param {?} item
     * @param {?=} subtree
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onCheckboxTreeChange = /**
     * @param {?} $event
     * @param {?} item
     * @param {?=} subtree
     * @return {?}
     */
    function ($event, item, subtree) {
        var _this = this;
        if (subtree === void 0) { subtree = null; }
        this.updateTreeCheckboxes($event, item);
        /** @type {?} */
        var coercedElem = subtree.find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e[_this.fieldID] === item[_this.fieldID]; }));
        if (coercedElem.parent) {
            this.refreshSubTreeCheckboxes(coercedElem.parent);
        }
        this.refreshCheckboxState();
    };
    /**
     * @param {?} $event
     * @param {?} array
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.updateTreeCheckboxes = /**
     * @param {?} $event
     * @param {?} array
     * @return {?}
     */
    function ($event, array) {
        var _this = this;
        array.selected = $event;
        /** @type {?} */
        var node = this.getNode(array[this.fieldID]);
        node.selected = $event;
        node.order = $event ? this.order++ : -1;
        if ((/** @type {?} */ ((/** @type {?} */ (array.children))))) {
            array.children.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                _this.updateTreeCheckboxes($event, d);
            }));
        }
    };
    /**
     * @param {?} subtree
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.refreshSubTreeCheckboxes = /**
     * @param {?} subtree
     * @return {?}
     */
    function (subtree) {
        var e_1, _a;
        if ((/** @type {?} */ ((/** @type {?} */ (subtree.children))))) {
            /** @type {?} */
            var checked = 0;
            /** @type {?} */
            var indeterminate = 0;
            try {
                for (var _b = tslib_1.__values(subtree.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    /** @type {?} */
                    var node_1 = this.getNode(child[this.fieldID]);
                    if (node_1.selected === true) {
                        checked++;
                    }
                    if (node_1.selected === -1) {
                        indeterminate++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            /** @type {?} */
            var node = this.getNode(subtree[this.fieldID]);
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
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getNode = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        /** @type {?} */
        var test = this.checkboxCache.filter((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.data[_this.fieldID] === key; }));
        return test ? test[0] : { selected: false, data: null };
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportToPng = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        this.loading = true;
        this.utilService.exportTable('png', fileName, this.gridID);
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportToExcel = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        var _this = this;
        this.loading = true;
        /** @type {?} */
        var dataToExport = [];
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field.editTemplate === TemplateType.Select) {
                    /** @type {?} */
                    var selectItem = field.select.selectData.find((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return option[field.select.value] === item[field.property]; }));
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
        var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    };
    /* Expandable Rows */
    /* Expandable Rows */
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportTreeExcel = /* Expandable Rows */
    /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        /** @type {?} */
        var dataToExport = [];
        this.exportTreeExcelRec(this.data, dataToExport);
        /** @type {?} */
        var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    };
    /**
     * @param {?} data
     * @param {?} dataToExport
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportTreeExcelRec = /**
     * @param {?} data
     * @param {?} dataToExport
     * @return {?}
     */
    function (data, dataToExport) {
        var _this = this;
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (item.celdType === CeldType.TemplateRef) {
                    itemToExport[field.display] = item[field.property].context.exportValue;
                }
                else {
                    if (field.editTemplate === TemplateType.Select) {
                        /** @type {?} */
                        var selectItem = field.select.selectData.find((/**
                         * @param {?} option
                         * @return {?}
                         */
                        function (option) { return option[field.select.value] === item[field.property]; }));
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
            var coercedItem = (/** @type {?} */ (item));
            if (coercedItem.children && coercedItem.children.length) {
                _this.exportTreeExcelRec(coercedItem.children, dataToExport);
            }
        }));
    };
    /**
     * @param {?} config
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportToPdf = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        this.loading = true;
        this.cdr.detectChanges();
        if (!config.useVersion2) {
            this.utilService.exportTable('pdf', config.fileName, this.gridID, config.exportCompanyName, config.exportUserName, config.exportTitle, config.exportCompanyLogoUrl, config.exportTableCustomWidth, config.exportTableCustomHeight);
        }
        else {
            /** @type {?} */
            var exportConfig = {
                checkboxSelect: this.checkboxSelect,
                selectedItems: this.checkboxSelect ? this.checkboxCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.selected; })).map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.data[_this.config.fieldId]; })) : [],
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
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.clickRow = /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        var _this = this;
        this.clicks++;
        setTimeout((/**
         * @return {?}
         */
        function () {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (_this.clicks === 1) {
                _this.selectRow(event, data);
            }
            if (_this.clicks > 1) {
                _this.dblClickRow(data);
            }
            _this.clicks = 0;
        }), 300);
    };
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.selectRow = /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        var _this = this;
        this.onclickRow.emit(data);
        /* Get index of selection */
        /** @type {?} */
        var index = this.checkboxCache.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data[_this.config.fieldId] === data[_this.config.fieldId]; }));
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
            var selectedItems = this.checkboxCache.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.selected; }));
            this.checkboxCache[index].order = this.checkboxCache[index].selected ? this.order++ : -1;
            this.selectionChange.emit(selectedItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.order - b.order; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.data; })));
        }
        this.cdr.detectChanges();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.removeSelection = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected && item.data[_this.config.fieldId] !== data[_this.config.fieldId]; }))
            .forEach((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { elem.selected = false; elem.order = -1; }));
    };
    /**
     * @param {?} currentIdx
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.selectMultiple = /**
     * @param {?} currentIdx
     * @return {?}
     */
    function (currentIdx) {
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
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.dblClickRow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.ondlclickRow.emit(data);
    };
    /**
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.tapHandler = /**
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    function ($event, data) {
        var _this = this;
        this.tapCount += 1;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.tapCount === 1) {
                $event.preventDefault();
                _this.clickRow(null, data);
            }
            _this.tapCount = 0;
        }), 600);
        if (this.tapCount > 1) {
            $event.preventDefault();
            this.dblClickRow(data);
        }
    };
    /**
     * @param {?} data
     * @param {?} id
     * @param {?} field
     * @param {?} index
     * @param {?} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.clickBooleanCell = /**
     * @param {?} data
     * @param {?} id
     * @param {?} field
     * @param {?} index
     * @param {?} $event
     * @return {?}
     */
    function (data, id, field, index, $event) {
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
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.emitOnEditEvent = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getClassMap = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _a;
        return _a = {},
            _a["cmacs-compact-table-logs-header-th"] = this.logs,
            _a["cmacs-compact-table-logs-header-th-font"] = this.logs,
            _a["" + field.ngClass] = field.ngClass && field.ngClass.length,
            _a;
    };
    /**
     * @param {?} field
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getMaxWidth = /**
     * @param {?} field
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (field, item, i) {
        if (this.expandable) {
            if (item.children && !i) {
                return this.inLineEdit ? "calc(100% - 17px)" : "calc(100% - " + this.getMaxWidthFieldViewMode(field, i) + ")";
            }
            else {
                return this.inLineEdit ? "calc(100% - 17px)" : "calc(100% - " + this.getMaxWidthFieldViewMode(field, i) + ")";
            }
        }
        return this.inLineEdit ? "calc(100% - 17px)" : "calc(100% - " + this.getMaxWidthFieldViewMode(field, i) + ")";
    };
    /**
     * @param {?} field
     * @param {?} i
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getMaxWidthFieldViewMode = /**
     * @param {?} field
     * @param {?} i
     * @return {?}
     */
    function (field, i) {
        if (field.editTemplate === TemplateType.Select ||
            field.editTemplate === TemplateType.Date ||
            field.editTemplate === TemplateType.Time ||
            field.editTemplate === TemplateType.Number) {
            return "18px";
        }
        return '0px';
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getStickyWidth = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this.scroll.x) {
            return null;
        }
        /** @type {?} */
        var width = 0;
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
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getStickyWidthRight = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this.scroll.x) {
            return null;
        }
        /** @type {?} */
        var width = 0;
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
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.getTableComponent = /**
     * @return {?}
     */
    function () {
        return this.nzTableComponent;
    };
    CmacsCompactTableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-compact-table',
                    exportAs: 'cmacsCompactTable',
                    template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n            [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n            [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzSimple]=\"simple\" class=\"cmacs-compact-table\" [class.cmacs-compact-table-expandable]=\"expandable\"\r\n            [class.cmacs-compact-table-scrollable-x]=\"scroll.x!!\" [class.cmacs-compact-table-scrollable-y]=\"scroll.y!!\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit && config && config.fields && config.fields.length\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            nzWidth=\"40px\" [style.minWidth]=\"'40px'\" [style.maxWidth]=\"'40px'\"\r\n            [nzLeft]=\"getStickyWidth('smartTable')\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-add cmacs-compact-table-smart-action-header\">\r\n          <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n             [class.cmacs-compact-table-smart-add-row-icon-visible]=\"!gridComponent.data.length\"\r\n             (click)=\"addRow(-1)\"></i>\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"draggable\"\r\n            [nzLeft]=\"getStickyWidth('draggable')\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n        </th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\"\r\n            [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n            nzWidth=\"30px\"\r\n            nzLeft=\"0px\"\r\n            [style.maxWidth]=\"'30px'\"\r\n            [style.minWidth]=\"'30px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n                 (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <th *ngFor=\"let field of getFields(); index as fi\" [nzShowSort]=\"field.showSort\"\r\n            attr.id=\"{{gridID}}-column-{{fi}}\"\r\n            [ngClass]=\"getClassMap(field)\"\r\n            [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n            [nzWidth]=\"field.width\"\r\n            [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n            [nzLeft]=\"field.left\"\r\n            [nzRight]=\"field.right\">\r\n          <ng-container *ngIf=\"!field.template\">\r\n            <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n                 [class.cmacs-compact-table-overflow-cell-header]=\"!wrapLines\">{{field.display}}</div>\r\n          </ng-container>\r\n          <div [id]=\"gridID + 'column' + fi\" *ngIf=\"field.template\">\r\n            <ng-container [ngTemplateOutlet]=\"field.template.ref\"\r\n                          [ngTemplateOutletContext]=\"field.template.context\">\r\n            </ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            nzWidth=\"80px\"\r\n            [style.maxWidth]=\"'80px'\"\r\n            [style.minWidth]=\"'80px'\"\r\n            [nzRight]=\"getStickyWidthRight('extra')\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n        <th *ngIf=\"smartTable && inLineEdit\"\r\n            nzWidth=\"40px\"\r\n            [style.minWidth]=\"'40px'\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n            [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n        </th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody cdkDropList\r\n           *ngIf=\"!virtualScroll\"\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n      <ng-container *ngIf=\"config && config.fields && config.fields.length\">\r\n        <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n          <ng-container *ngFor=\"let data of gridComponent.data; index as di\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-expandable-row]=\"inLineEdit\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && !!item.children\"\r\n                  (touchstart)=\"tapHandler($event, item)\"\r\n                  (dblclick)=\"dblClickRow(item)\">\r\n                <td *ngIf=\"checkboxSelect\"\r\n                    [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                    [style.minWidth]=\"'30px'\"\r\n                    [style.maxWidth]=\"'30px'\"\r\n                    [style.width]=\"'30px'\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\">\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"getNode(item[fieldID]).selected === -1\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item, mapOfExpandedData[data[fieldID]])\"></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-editable-column]=\"field.editable\"\r\n                    [class.cmacs-compact-table-on-edit-expandable]=\"((editId === item[config.fieldId] && property === field.property && field.editable)) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field) || isNumber(field) && field.editable)\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                    (nzExpandChange)=\"ExpandCollapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                    [style.minWidth]=\"field.width\">\r\n\r\n                  <div [style.display]=\"(isNumber(field) || isTime(field) || isDate(field) || isSelect(field)) ? 'block' : 'inline-flex'\"\r\n                       [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"(editId !== item[config.fieldId] || property !== field.property || field.editable === false )\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item, i: di, item: item, ci: i}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"editId === item[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: di}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    class=\"cmacs-compact-table-rating\"\r\n                    *ngIf=\"showRate && config\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                           [nzCount]='rateCount'\r\n                           [nzDisabled]=\"!inLineEdit\"\r\n                           (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [nzRight]=\"getStickyWidthRight('extra')\"\r\n                    *ngIf=\"extra\"></td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n    </tbody>\r\n\r\n    <tbody cdkDropList\r\n           *ngIf=\"virtualScroll\"\r\n           (cdkDropListDropped)=\"drop($event)\">\r\n      <ng-template nz-virtual-scroll let-data let-di=\"i\">\r\n        <ng-container *ngIf=\"config && config.fields && config.fields.length\">\r\n          <ng-container *ngIf=\"expandable; else defaultTplVirtualScroll;\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data[fieldID]]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-expandable-row]=\"inLineEdit\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && !!item.children\"\r\n                  (touchstart)=\"tapHandler($event, item)\"\r\n                  (dblclick)=\"dblClickRow(item)\">\r\n                <td *ngIf=\"checkboxSelect\"\r\n                    [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                    [style.minWidth]=\"'30px'\"\r\n                    [style.maxWidth]=\"'30px'\"\r\n                    [style.width]=\"'30px'\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\">\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item[fieldID]).selected\" [indeterminate]=\"getNode(item[fieldID]).selected === -1\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item, mapOfExpandedData[data[fieldID]])\"></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-editable-column]=\"field.editable\"\r\n                    [class.cmacs-compact-table-on-edit-expandable]=\"((editId === item[config.fieldId] && property === field.property && field.editable)) &&\r\n                (isString(field) || isDate(field) || isTime(field) || isSelect(field) || isNumber(field) && field.editable)\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && !!item.children\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                    (nzExpandChange)=\"ExpandCollapse(mapOfExpandedData[data[fieldID]], item, $event)\"\r\n                    [style.minWidth]=\"field.width\">\r\n\r\n                  <div [style.display]=\"(isNumber(field) || isTime(field) || isDate(field) || isSelect(field)) ? 'block' : 'inline-flex'\"\r\n                       [class.cmacs-compact-table-overflow-cell-container-logs]=\"expandable && isString(field) && !i\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"(editId !== item[config.fieldId] || property !== field.property || field.editable === false )\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: item, i: di, item: item, ci: i}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       [style.width]=\"item.children && !i ? 'calc(100% - 25px)' : '100%'\"\r\n                       *ngIf=\"editId === item[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: item, i: di}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    class=\"cmacs-compact-table-rating\"\r\n                    *ngIf=\"showRate && config\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                           [nzCount]='rateCount'\r\n                           [nzDisabled]=\"!inLineEdit\"\r\n                           (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    [nzRight]=\"getStickyWidthRight('extra')\"\r\n                    *ngIf=\"extra\"></td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTplVirtualScroll>\r\n            <tr cdkDrag [cdkDragDisabled]=\"!draggable\"\r\n                (click)=\"clickRow($event, data)\" (touchstart)=\"tapHandler($event, data)\"\r\n                [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n                [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n                [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n                (contextmenu)=\"contextMenu($event, contextMenuTemplate)\"\r\n                class=\"cmacs-no-selection\">\r\n\r\n              <ng-template #contextMenuTemplate>\r\n                <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n              </ng-template>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                  [nzLeft]=\"getStickyWidth('smartTable')\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n                   (click)=\"addRow(di, $event)\"></i>\r\n              </td>\r\n\r\n              <td *ngIf=\"draggable\"\r\n                  class=\"cmacs-compact-table-drag-col cmacs-compact-table-fst-td\"\r\n                  [nzLeft]=\"getStickyWidth('draggable')\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\">\r\n                <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n              </td>\r\n\r\n              <td [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n                  [class.cmacs-compact-table-fst-td]=\"!draggable\"\r\n                  *ngIf=\"checkboxSelect && config\">\r\n                <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                       (checkedChange)=\"onCheckboxChange($event, data)\"\r\n                       *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n              </td>\r\n\r\n              <td *ngFor=\"let field of getFields(); index as j\"\r\n                  [class.cmacs-editable-column]=\"field.editable\"\r\n                  [class.cmacs-compact-table-fst-td]=\"!draggable && !checkboxSelect && !j\"\r\n                  [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isString(field) || isDate(field) || isSelect(field) || isTime(field))\"\r\n                  [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isNumber(field) || isDate(field) || isTime(field))\"\r\n                  [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n                  [style.minWidth]=\"field.width\">\r\n\r\n                <div style=\"max-width: 100%\"\r\n                     *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property || field.editable === false)\">\r\n                  <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data, i: di, ci: j}\"></ng-container>\r\n                </div>\r\n\r\n                <div style=\"max-width: 100%\"\r\n                     *ngIf=\"config && editId === data[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n                  <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: di}\"></ng-container>\r\n                </div>\r\n\r\n              </td>\r\n\r\n              <td *ngIf=\"showRate && config\">\r\n                <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                         (click)=\"onRateClick($event)\"></nz-rate>\r\n              </td>\r\n\r\n              <td *ngIf=\"extra\" [nzRight]=\"getStickyWidthRight('extra')\"></td>\r\n\r\n              <td *ngIf=\"smartTable && inLineEdit\"\r\n                  [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n                  [style.maxWidth]=\"'40px'\"\r\n                  [style.minWidth]=\"'40px'\"\r\n                  [class.cmacs-compact-table-logs-td]=\"logs\"\r\n                  class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n                <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close\"\r\n                   *ngIf=\"data.deleteEnabled === undefined || data.deleteEnabled\"\r\n                   (click)=\"deleteRow(di, $event)\"></i>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-template>     \r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #defaultTpl>\r\n  <tr cdkDrag [cdkDragDisabled]=\"!draggable\" *ngFor=\"let data of gridComponent.data; index as i\"\r\n      (click)=\"clickRow($event, data)\" (touchstart)=\"tapHandler($event, data)\"\r\n      [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n      [class.cmacs-compact-table-editable-row]=\"inLineEdit\"\r\n      [class.cmacs-compact-table-smart-table-row]=\"smartTable && inLineEdit\"\r\n      (contextmenu)=\"contextMenu($event, contextMenuTemplate)\"\r\n      class=\"cmacs-no-selection\">\r\n\r\n    <ng-template #contextMenuTemplate>\r\n      <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ dropdown: dropdown, data: data }\"></ng-container>\r\n    </ng-template>\r\n\r\n    <td *ngIf=\"smartTable && inLineEdit\"\r\n        [style.maxWidth]=\"'40px'\"\r\n        [style.minWidth]=\"'40px'\"\r\n        [class.cmacs-compact-table-logs-td]=\"logs\"\r\n        [nzLeft]=\"getStickyWidth('smartTable')\"\r\n        class=\"cmacs-compact-table-smart-table-hot-spot-row-add\">\r\n      <i class=\"cmacs-compact-table-smart-table-hot-spot-row-add-icon iconUILarge-New\"\r\n         (click)=\"addRow(i, $event)\"></i>\r\n    </td>\r\n\r\n    <td *ngIf=\"draggable\"\r\n        class=\"cmacs-compact-table-drag-col cmacs-compact-table-fst-td\"\r\n        [nzLeft]=\"getStickyWidth('draggable')\"\r\n        [style.maxWidth]=\"'40px'\"\r\n        [style.minWidth]=\"'40px'\">\r\n      <i class=\"iconUILarge-Move cmacs-compact-table-drag-handler\" cdkDragHandle></i>\r\n    </td>\r\n\r\n    <td [nzLeft]=\"getStickyWidth('checkboxSelect')\"\r\n        [class.cmacs-compact-table-fst-td]=\"!draggable\"\r\n        *ngIf=\"checkboxSelect && config\">\r\n      <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n             (checkedChange)=\"onCheckboxChange($event, data)\"\r\n             *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n    </td>\r\n\r\n    <td *ngFor=\"let field of getFields(); index as j\"\r\n        [class.cmacs-editable-column]=\"field.editable\"\r\n        [class.cmacs-compact-table-fst-td]=\"!draggable && !checkboxSelect && !j\"\r\n        [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isString(field) || isDate(field) || isSelect(field) || isTime(field))\"\r\n        [class.cmacs-compact-table-on-edit-no-padding]=\"(editId === data[config.fieldId] && property === field.property && field.editable) &&\r\n                (isNumber(field) || isDate(field) || isTime(field))\"\r\n        [nzLeft]=\"field.left\" [nzRight]=\"field.right\"\r\n        [style.minWidth]=\"field.width\">\r\n\r\n      <div style=\"max-width: 100%\"\r\n           *ngIf=\"config && (editId !== data[config.fieldId] || property !== field.property || field.editable === false)\">\r\n        <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data, i: i, ci: j}\"></ng-container>\r\n      </div>\r\n\r\n      <div style=\"max-width: 100%\"\r\n           *ngIf=\"config && editId === data[config.fieldId] && property === field.property && (field.editable || field.editable === undefined)\">\r\n        <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n      </div>\r\n\r\n    </td>\r\n\r\n    <td *ngIf=\"showRate && config\">\r\n      <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n               (click)=\"onRateClick($event)\"></nz-rate>\r\n    </td>\r\n\r\n    <td *ngIf=\"extra\" [nzRight]=\"getStickyWidthRight('extra')\"></td>\r\n\r\n    <td *ngIf=\"smartTable && inLineEdit\"\r\n        [nzRight]=\"getStickyWidthRight('smartTable')\"\r\n        [style.maxWidth]=\"'40px'\"\r\n        [style.minWidth]=\"'40px'\"\r\n        [class.cmacs-compact-table-logs-td]=\"logs\"\r\n        class=\"cmacs-compact-table-smart-table-hot-spot-row-delete\">\r\n      <i class=\"cmacs-compact-table-smart-table-hot-spot-row-delete-icon iconUISmall-Close\"\r\n         *ngIf=\"data.deleteEnabled === undefined || data.deleteEnabled\"\r\n         (click)=\"deleteRow(i, $event)\"></i>\r\n    </td>\r\n  </tr>\r\n</ng-template>\r\n\r\n<ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n  <!--Editable String Edit Mode-->\r\n  <input #fieldTypeInput\r\n         class=\"cmacs-compact-table-input\"\r\n         *ngIf=\"isString(field)\" type=\"text\"\r\n         (click)=\"preventDefault($event)\"\r\n         (dblclick)=\"preventDefault($event)\"\r\n         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n         [placeholder]=\"field.placeholder ? field.placeholder : ''\"\r\n         cmacs-input [(ngModel)]=\"data[field.property]\"\r\n         (keyup)=\"endEditMode($event, i, data)\" />\r\n\r\n  <!--Editable DatePicker Edit Mode-->\r\n  <cmacs-date-picker #fieldTypeDatePicker\r\n                     class=\"cmacs-compact-table-date-edit\"\r\n                     *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\"\r\n                     [allowClear]=\"true\"\r\n                     (click)=\"preventDefault($event)\"\r\n                     (dblclick)=\"preventDefault($event)\"\r\n                     [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                     [(ngModel)]=\"data[field.property]\"\r\n                     (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n  </cmacs-date-picker>\r\n\r\n  <!--Editable DateTimePicker Edit Mode-->\r\n  <cmacs-datetime-picker #fieldTypeDateTimePicker\r\n                         *ngIf=\"isTime(field)\"\r\n                         class=\"cmacs-compact-table-datetime-picker\"\r\n                         [use12Hours]=\"use12Hours\"\r\n                         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                         [format]=\"field.timeFormat ? field.timeFormat : 'h:mm a'\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (dblclick)=\"preventDefault($event)\"\r\n                         [defaultOpenValue]=\"defaultTimeValue\"\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-datetime-picker>\r\n\r\n  <!--Editable Select Edit Mode-->\r\n  <cmacs-select #fieldTypeSelect\r\n                class=\"cmacs-compact-table-select-cell\"\r\n                [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                *ngIf=\"isSelect(field)\"\r\n                [placeHolder]=\"field.placeholder ? field.placeholder : ''\"\r\n                showSearch\r\n                (click)=\"preventDefault($event)\"\r\n                (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n    <cmacs-option *ngFor=\"let sData of field.select.selectData\"\r\n                  label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"\r\n                  divider=\"{{sData[field.select.divider]}}\"\r\n                  [disabled]=\"sData.disabled\">\r\n    </cmacs-option>\r\n  </cmacs-select>\r\n\r\n  <!--Editable InpuNumber Edit Mode-->\r\n  <cmacs-input-number #fieldTypeInputNumber\r\n                      class=\"cmacs-compact-table-input-number-edit\"\r\n                      [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                      *ngIf=\"isNumber(field) && !isSelect(field) && field.useCommaMarker\"\r\n                      [(ngModel)]=\"data[field.property]\"\r\n                      [cmacsStep]=\"field.cmacsStep\"\r\n                      [min]=\"field.min!!\" [max]=\"field.max!!\"\r\n                      [formatter]=\"formatter\"\r\n                      [parser]=\"parser\"\r\n                      (click)=\"preventDefault($event)\"\r\n                      (dblclick)=\"preventDefault($event)\"\r\n                      (keyup)=\"endEditMode($event, i, data)\"\r\n                      (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-input-number>\r\n\r\n  <cmacs-input-number #fieldTypeInputNumber\r\n                      class=\"cmacs-compact-table-input-number-edit\"\r\n                      [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n                      *ngIf=\"isNumber(field) && !isSelect(field) && !field.useCommaMarker\"\r\n                      [(ngModel)]=\"data[field.property]\"\r\n                      [cmacsStep]=\"field.cmacsStep ? field.cmacsStep : 1\"\r\n                      [min]=\"field.min!!\" [max]=\"field.max!!\"\r\n                      (click)=\"preventDefault($event)\"\r\n                      (dblclick)=\"preventDefault($event)\"\r\n                      (keyup)=\"endEditMode($event, i, data)\"\r\n                      (ngModelChange)=\"ngModelChange(i, data)\">\r\n  </cmacs-input-number>\r\n\r\n  <!--Editable Boolean Edit Mode-->\r\n  <label #fieldTypeBool\r\n         cmacs-checkbox\r\n         [class.cmacs-compact-table-edit-mode-invalid]=\"!validate(data, field)\"\r\n         *ngIf=\"isBoolean(field)\"\r\n         [(ngModel)]=\"data[field.property]\"\r\n         (ngModelChange)=\"endEditModeNgModel(i, data)\">\r\n  </label>\r\n\r\n</ng-template>\r\n\r\n<ng-template #viewModeTpl let-field=\"field\" let-data=\"data\" let-i=\"i\" let-item=\"item\" let-ci=\"ci\">\r\n  <ng-container>\r\n\r\n    <!--Editable String View Mode-->\r\n    <ng-container *ngIf=\"config && isString(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div class=\"cmacs-compact-table-inline-cell\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             *ngIf=\"!field.showTooltip || !data[field.property] || !data[field.property].length\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n          {{ data[field.property] && data[field.property].length ? data[field.property] : field.placeholder }}\r\n        </div>\r\n        <div class=\"cmacs-compact-table-inline-cell\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             *ngIf=\"field.showTooltip && data[field.property] && data[field.property].length\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             cmacs-tooltip\r\n             [title]=\"data[field.property]\"\r\n             placement=\"right\"\r\n             [class.cmacs-compact-table-invalid]=\"!validate(data, field)\">\r\n          {{ data[field.property] }}\r\n        </div>\r\n        <i *ngIf=\"field.editable || field.editable === undefined\"\r\n           class=\"iconUISmall-Edit\"\r\n           [class.cmacs-compact-table-edit-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit || !field.editable\">\r\n        </i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable DatePicker View Mode-->\r\n    <ng-container *ngIf=\"config && isDate(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\">{{ data[field.property] ? (data[field.property] | date: field.dateFormat) : field.placeholder }}</div>\r\n        <i class=\"iconUILarge-Calendar\"\r\n           [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable DateTimePicker View Mode-->\r\n    <ng-container *ngIf=\"config && isTime(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-date\">{{ data[field.property] ? ( data[field.property]  | date: field.timeFormat ? field.timeFormat : 'h:mm a') : field.placeholder }}</div>\r\n        <i class=\"iconUILarge-Time\"\r\n           [class.cmacs-compact-table-calendar-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable Select View Mode-->\r\n    <ng-container *ngIf=\"config && isSelect(field)\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\" style=\"width: 100%; max-width: 100%\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-select\">{{ getLabel(data, field) && getLabel(data, field).length ? getLabel(data, field) : field.placeholder }}</div>\r\n        <i class=\"iconArrowLarge-Chevron-Down\"\r\n           [class.cmacs-compact-table-select-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit || !field.editable\"></i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Editable InputNumber View Mode-->\r\n    <ng-container *ngIf=\"config && isNumber(field)\" style=\"width: 100%; max-width: 100%\">\r\n      <div (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n        <div [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n             [style.maxWidth]=\"getMaxWidth(field, item, i)\"\r\n             [class.cmacs-compact-table-overflow-cell]=\"!wrapLines\"\r\n             class=\"cmacs-compact-table-inline-cell cmacs-compact-table-input-number\">{{ data[field.property] !== undefined ? field.useCommaMarker ? data[field.property].toString().replace('.', ',') : data[field.property] : field.placeholder }}</div>\r\n        <i class=\"iconArrowLarge-Solid-UpDown\"\r\n           [class.cmacs-compact-table-input-number-icon]=\"inLineEdit && field.editable\"\r\n           [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit || !field.editable\">\r\n        </i>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Boolean View Mode-->\r\n    <ng-container *ngIf=\"config && isBoolean(field)\">\r\n      <span *ngIf=\"data[field.property] == false || data[field.property] == 'false'\"\r\n            class=\"cmacs-compact-table-boolean-false-icon\"\r\n            [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n            [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n            (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></span>\r\n      <span *ngIf=\"data[field.property] === undefined || data[field.property] === null\"\r\n            class=\"cmacs-compact-table-boolean-indeterminate-icon\"\r\n            [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n            [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n            (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\">\r\n        <span class=\"cmacs-compact-table-boolean-indeterminate-icon-inner\"></span>\r\n      </span>\r\n      <i *ngIf=\"data[field.property] === true || data[field.property] === 'true'\"\r\n         class=\"iconUILarge-Select-All\"\r\n         [class.cmacs-compact-table-invalid]=\"!validate(data, field)\"\r\n         [class.cmacs-compact-table-boolean-icon]=\"inLineEdit && field.editable\"\r\n         (click)=\"clickBooleanCell(data, data[config.fieldId], field, i, $event)\"></i>\r\n    </ng-container>\r\n\r\n    <!-- Template View Mode  -->\r\n    <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field) && data[field.property]\">\r\n      <div [id]=\"gridID + 'column' + ci + 'row' + i\">\r\n        <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.cmacs-compact-table-logs]': 'logs'
                    },
                    styles: ["::ng-deep .cmacs-compact-table-edit-mode-invalid,::ng-deep .cmacs-compact-table-edit-mode-invalid .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:focus,::ng-deep .cmacs-compact-table-edit-mode-invalid:focus .ant-select-selection,::ng-deep .cmacs-compact-table-edit-mode-invalid:hover,::ng-deep .cmacs-compact-table-edit-mode-invalid:hover .ant-select-selection,::ng-deep .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon{border-color:#f6503c!important}::ng-deep .cmacs-compact-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5em}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column{vertical-align:middle}::ng-deep .cmacs-compact-table-smart-action-header i{position:relative!important;top:0!important}::ng-deep .cmacs-compact-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}::ng-deep .cmacs-compact-table .ant-table-column-sorter{width:12px;display:none!important;right:0;position:absolute}::ng-deep .cmacs-compact-table th:hover .ant-table-column-sorter{display:table-cell!important;right:0;position:absolute}::ng-deep .cmacs-compact-table .ant-table-column-sorters,::ng-deep .cmacs-compact-table .ant-table-header-column{width:100%}::ng-deep .cmacs-compact-table-rating{min-width:105px}::ng-deep .cmacs-compact-table-invalid,::ng-deep .cmacs-compact-table-invalid+i{color:#f6503c!important;opacity:1!important}::ng-deep .cmacs-compact-table-invalid.cmacs-compact-table-boolean-indeterminate-icon .cmacs-compact-table-boolean-indeterminate-icon-inner{background-color:#f6503c}::ng-deep .cmacs-compact-table .ant-table-thead{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#656c79}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th{padding:8px 10px}::ng-deep .cmacs-compact-table-drag-handler{color:#bec4cd;font-size:20px;padding:0 10px;margin:0;vertical-align:middle}::ng-deep .cmacs-compact-table-drag-placeholder{border-bottom:1px solid #2a7cff;color:#2a7cff;text-align:left;min-width:100%}::ng-deep .cmacs-compact-table-drag-preview{color:#2a7cff;opacity:.5;text-align:left}::ng-deep .cmacs-compact-table-drag-handler:hover{cursor:pointer;color:#2a7cff}::ng-deep .cmacs-compact-table-drag-col{padding:0!important;margin:0!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add,::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-delete{background:#fff;border-bottom-color:transparent;border-top-color:transparent}::ng-deep .cmacs-compact-table .ant-table-header{background:0 0}::ng-deep .cmacs-compact-table-balance-padding{padding:6px!important}::ng-deep .cmacs-compact-table .ant-table-tbody>tr>td{padding:7px 10px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;-webkit-transition:none;transition:none}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:not(.ant-table-selected-row)>td:not(.cmacs-compact-table-logs-header-th-font){background-color:#fff!important}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th:not(.cmacs-compact-table-logs-header-th){background:#fff!important;border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr:hover td.cmacs-compact-table-fst-td,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child{box-shadow:3px 0 0 #2a7cff inset}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-tbody>.ant-table-selected-row:hover td:not(:first-child):not(.ant-table-td-right-sticky):not(.ant-table-td-left-sticky){box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add).ant-table-td-right-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset}::ng-deep .cmacs-compact-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td.cmacs-compact-table-smart-table-hot-spot-row-add{border-bottom:0}::ng-deep .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row:hover>td:last-child,::ng-deep .cmacs-compact-table .ant-table-tbody>.cmacs-compact-table-smart-table-row>td:last-child{box-shadow:none!important}::ng-deep .cmacs-compact-table .editable-cell{position:relative}::ng-deep .cmacs-compact-table .ant-rate-star{font-size:16px;margin:0}::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-add:hover~td:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover~td{border-bottom-color:#2a7cff}::ng-deep .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td.cmacs-compact-table-smart-table-hot-spot-row-delete:hover .ant-table-tbody>tr.cmacs-compact-table-smart-table-row>td{border-bottom-color:#f6503c}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add:hover,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete:hover{width:28px;border-bottom-color:transparent!important;border-top-color:transparent!important;background-color:#fff!important;box-shadow:none!important;border-bottom:0}::ng-deep .cmacs-compact-table-logs-td,::ng-deep .cmacs-compact-table-logs-td:hover{background-color:#f6f7fb!important}::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,::ng-deep .ant-table-thead>tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon,::ng-deep tr:hover .cmacs-compact-table-smart-table-hot-spot-row-add-icon,::ng-deep tr:hover .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{opacity:1!important}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add-icon:hover,::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete-icon:hover{cursor:pointer}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-delete-icon{font-size:14px;border-radius:100px;background-color:#f6503c;color:#fff;padding:2px;display:-webkit-box;display:flex;width:18px;opacity:0}::ng-deep .cmacs-compact-table-smart-table-hot-spot-row-add-icon{font-size:14px;border-radius:100px;background-color:#2a7cff;color:#fff;padding:2px;display:-webkit-box;display:flex;opacity:0;width:18px}::ng-deep .cmacs-compact-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.cmacs-compact-table-smart-table-hot-spot-row-add):not(.cmacs-compact-table-smart-table-hot-spot-row-delete){background-color:#f2f7ff}::ng-deep .cmacs-compact-table .ant-spin-nested-loading{clear:both}::ng-deep .cmacs-compact-table-extra,::ng-deep .cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}::ng-deep .cmacs-compact-table-extra{position:relative}::ng-deep .cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}::ng-deep .cmacs-compact-table-extra a i:hover,::ng-deep .cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}::ng-deep .cmacs-compact-table a,::ng-deep .cmacs-compact-table a:hover{color:#656c79}::ng-deep .cmacs-compact-table-edit-icon{float:right;font-size:16px;position:relative;opacity:0}::ng-deep .cmacs-compact-table-edit-icon-view{display:none}::ng-deep .cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-edit-icon{opacity:1}::ng-deep .cmacs-compact-table-input,::ng-deep .cmacs-compact-table-input:focus,::ng-deep .cmacs-compact-table-input:hover,::ng-deep .cmacs-compact-table-select{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff;box-shadow:none}::ng-deep .cmacs-compact-table-input{padding-left:3px}::ng-deep .cmacs-compact-table-on-edit{padding:0 6px!important}::ng-deep .cmacs-compact-table-on-edit-expandable{padding-top:0!important;padding-bottom:0!important}::ng-deep .cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}::ng-deep .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-calendar-icon-view,::ng-deep .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-input-number-icon-view,::ng-deep .cmacs-compact-table-select-icon,::ng-deep .cmacs-compact-table-select-icon-view{float:right;font-size:16px;position:relative;line-height:18px}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-calendar-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-input-number-icon,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-compact-table-select-icon{color:#656c79}::ng-deep .cmacs-compact-table-calendar-icon:hover,::ng-deep .cmacs-compact-table-input-number-icon:hover,::ng-deep .cmacs-compact-table-select-icon:hover{cursor:pointer}::ng-deep .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-select{border-bottom:2px dotted transparent;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-editable-row:hover .cmacs-editable-column .cmacs-compact-table-select,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-date,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-input-number,::ng-deep .cmacs-compact-table-expandable-row:hover .cmacs-editable-column .cmacs-compact-table-select{border-bottom:2px dotted #656c79;border-top:2px solid transparent;padding-left:2px;padding-right:2px;margin:-2px}::ng-deep .cmacs-compact-table-date-edit .ant-calendar-input,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}::ng-deep .cmacs-compact-table .cmacs-compact-table-select-cell{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal}::ng-deep .cmacs-compact-table .cmacs-compact-table-select-cell .ant-select-selection{height:34px!important;border:1px solid #2a7cff;margin-left:-8px;margin-right:-7px}::ng-deep .cmacs-compact-table .ant-select-arrow{right:1px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-datetime-picker input{padding-left:3px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-clear,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span .ant-calendar-picker-icon{margin-top:-8px;margin-right:-1px}::ng-deep cmacs-compact-table cmacs-input-number.ant-input-number:not(.cmacs-datetime-picker-input-number){margin-bottom:-5px;margin-left:-9px}::ng-deep cmacs-compact-table cmacs-input-number input.ant-input-number-input{height:32px;padding-left:12px}::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-expandable-td input.cmacs-compact-table-input,::ng-deep cmacs-compact-table .cmacs-compact-table-expandable-row .cmacs-compact-table-on-edit-expandable input.cmacs-compact-table-input{margin-left:-4px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable .cmacs-compact-table-date-edit div{margin-right:-10px;margin-left:-5px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select.cmacs-compact-table-select-cell .ant-select-selection__rendered{margin-left:7px}::ng-deep cmacs-compact-table .cmacs-compact-table-on-edit-expandable cmacs-select .ant-select-arrow{right:-2px}::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:focus,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:focus-within,::ng-deep .cmacs-compact-table-date-edit cmacs-picker span input:hover,::ng-deep .cmacs-compact-table-datetime-picker input,::ng-deep .cmacs-compact-table-datetime-picker input:focus,::ng-deep .cmacs-compact-table-datetime-picker input:focus-within,::ng-deep .cmacs-compact-table-datetime-picker input:hover,::ng-deep .cmacs-compact-table-input-number-edit,::ng-deep .cmacs-compact-table-input-number-edit:focus,::ng-deep .cmacs-compact-table-input-number-edit:focus-within,::ng-deep .cmacs-compact-table-input-number-edit:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;border-color:#2a7cff!important}::ng-deep .cmacs-compact-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle;line-height:20px}::ng-deep .cmacs-compact-table .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}::ng-deep .cmacs-compact-table-header-logs,::ng-deep .cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}::ng-deep thead .cmacs-compact-table-header-logs{box-shadow:0 -1px 0 #dee0e5 inset}::ng-deep .cmacs-compact-table-logs-header-th-font,::ng-deep .cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb!important;border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb!important}::ng-deep .cmacs-compact-table-boolean-false-icon{width:10px;border:1px solid #dee0e5;height:10px;display:block}::ng-deep .cmacs-compact-table-boolean-indeterminate-icon{width:10px;border:1px solid #dee0e5;height:10px;padding:1px;display:block}::ng-deep .cmacs-compact-table-boolean-indeterminate-icon-inner{width:6px;background-color:#dee0e5;height:6px;display:block}::ng-deep .cmacs-compact-table-boolean-icon:hover{cursor:pointer;color:#2a7cff;border-color:#2a7cff}.cdk-drag-preview{box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;border-bottom:1px solid #2a7cff!important;background-color:#fff}.cdk-drag-placeholder{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset;opacity:1}::ng-deep .cmacs-compact-table-smart-add-row-icon-visible{z-index:2;position:absolute;opacity:1!important}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add){box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete),::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-add),::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky:not(.cmacs-compact-table-smart-table-hot-spot-row-delete){border-bottom:1px solid #dee0e5}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky+.ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky+.ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky+.ant-table-td-right-sticky{box-shadow:none}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-th-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-right-sticky{box-shadow:0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-th-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-th-left-sticky{box-shadow:7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-right .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child.ant-table-td-left-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-table-scroll-position-left .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky,::ng-deep .cmacs-compact-table .ant-table-scroll-position-middle .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(:first-child).ant-table-td-right-sticky{box-shadow:0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,0 3px 7px 0 rgba(59,63,70,.2);-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>.ant-table-selected-row:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr:not(.cmacs-compact-table-smart-table-row):hover td:first-child.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row:not(.ant-table-selected-row):hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-middle .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky,::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-expandable) .ant-table-scroll-position-right .ant-table-tbody>tr.cmacs-compact-table-smart-table-row.ant-table-selected-row:hover td.cmacs-compact-table-fst-td.ant-table-td-left-sticky{box-shadow:3px 0 0 #2a7cff inset,0 1px 0 #2a7cff inset,0 -1px 0 #2a7cff inset,7px 3px 7px 0 rgba(59,63,70,.1)!important;-webkit-clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%);clip-path:polygon(-50% -50%,150% -50%,150% 100%,-50% 100%)}::ng-deep .cmacs-compact-table .ant-checkbox-wrapper{display:-ms-inline-grid;display:inline-grid;vertical-align:middle}::ng-deep .cmacs-compact-table .cmacs-no-selection{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .cmacs-compact-table .ant-table-expand-icon-th,::ng-deep .cmacs-compact-table .ant-table-row-expand-icon-cell{text-align:left}::ng-deep .cmacs-compact-table table{table-layout:fixed}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:-webkit-inline-box;display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-compact-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover::before{background-color:transparent}::ng-deep .cmacs-compact-table.cmacs-compact-table-scrollable-y .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:6px}::ng-deep .cmacs-compact-table:not(.cmacs-compact-table-scrollable-y) .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1;margin-right:1px}::ng-deep .cmacs-compact-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin;overflow:scroll!important;position:inherit;padding-bottom:10px;background-color:transparent}::-webkit-scrollbar,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover,::ng-deep .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-compact-table cmacs-datetime-picker.ant-time-picker{width:100%!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCompactTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: ExcelService },
        { type: DatePipe },
        { type: NzDropdownService },
        { type: CookieService },
        { type: UtilService }
    ]; };
    CmacsCompactTableComponent.propDecorators = {
        nzTableComponent: [{ type: ViewChild, args: ['gridComponent',] }],
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
    return CmacsCompactTableComponent;
}());
export { CmacsCompactTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBaUIsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVB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QW9DMUUsd0RBQTJCOztJQStIM0IsMkNBQVU7O0lBaW5CViw0Q0FBVzs7SUFpRVgsOENBQWE7Ozs7O0lBcmdCWCx5Q0FBOEI7Ozs7O0lBQzlCLDBDQUEyQjs7Ozs7SUFDM0Isa0RBQWtDOzs7OztJQUNsQyw4Q0FBMEI7Ozs7O0lBQzFCLHVEQUE0Qzs7Ozs7SUFDNUMsNkNBQThCOzs7OztJQUM5QixpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgY291bnQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOelNpemVNRFNUeXBlLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEV4cG9ydEFzU2VydmljZSwgRXhwb3J0QXNDb25maWcgfSBmcm9tICduZ3gtZXhwb3J0LWFzJztcclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0ICdqc3BkZi1hdXRvdGFibGUnO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWRFeHBDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1leHAtY29uZmlnJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy90ZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvZXhwb3J0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0IH0gZnJvbSBcIi4uL2NtYWNzLWdyaWQvY21hY3MtdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwidXRpbFwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgaXNOb3ROaWwsIE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50LCBOekRyb3Bkb3duU2VydmljZSwgTnpNZW51RHJvcGRvd25TZXJ2aWNlLCBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jbWFjcy1pbnB1dC1udW1iZXIvY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2dyaWRDb21wb25lbnQnKSBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZU1EU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2dzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc21hcnRUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB3cmFwTGluZXMgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBASW5wdXQoKSBjb25maWc6IEdyaWRDb25maWc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZTEySG91cnMgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4oKTtcclxuICBASW5wdXQoKSBmaWVsZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmcgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBJbnB1dCgpIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VFtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25Sb3dFeHBhbmRDb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByYXRlQ291bnQgPSA1O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ucm93ZGVsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnJvd2FkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjb250ZXh0bWVudTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaW5kZW50U2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIGRyb3Bkb3duOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudDtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZSA/IGAke3ZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9YCA6ICcnO1xyXG4gIHBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcclxuICBkZWZhdWx0U29ydE9yZGVyID0gbnVsbDtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGVkaXRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICByb3dPbkVkaXRpb24gPSAtMTtcclxuICBub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICBtYXBPZkV4cGFuZGVkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9ID0ge307XHJcbiAgZGVmYXVsdFRpbWVWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGFzdElkeFNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgZmllbGRJRDogYW55ID0gbnVsbDtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0TnVtYmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dE51bWJlcicsIHsgcmVhZDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCB9KSBpbnB1dE51bWJlckNvbXBvbmVudDogQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVUaW1lUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVUaW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVTZWxlY3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVCb29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJvb2xFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLypDb250ZXh0IE1lbnUgKi9cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMubnpEcm9wZG93blNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoZGF0YTogYW55LCBmaWVsZDogRmllbGQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gZmllbGQudmFsaWRhdG9ycyA/IG5ldyBGb3JtQ29udHJvbChkYXRhW2ZpZWxkLnByb3BlcnR5XSwgZmllbGQudmFsaWRhdG9ycykgOiBuZXcgRm9ybUNvbnRyb2woZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgZGF0YS52YWxpZCA9IGRhdGEudmFsaWQgPyBkYXRhLnZhbGlkIDoge307XHJcbiAgICBkYXRhLnZhbGlkW2ZpZWxkLnByb3BlcnR5XSA9IGZvcm1Db250cm9sLnZhbGlkO1xyXG4gICAgcmV0dXJuIGZvcm1Db250cm9sLnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgYWRkUm93KGlkeDogbnVtYmVyLCAkZXZlbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLm9ucm93YWRkZWQuZW1pdChpZHgpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmICghdGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5vbmRyb3AuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBlZGl0aW9uT3BUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICBkZWxldGVSb3coaWR4OiBudW1iZXIsICRldmVudCA9IG51bGwpIHtcclxuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuZGF0YVtpZHhdO1xyXG4gICAgdGhpcy5vbnJvd2RlbGV0ZWQuZW1pdChpdGVtVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5lZGl0aW9uT3BUcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluTGluZUVkaXQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLmVkaXRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lZGl0SWQgPSBpZDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydCgkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCkge1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogZmllbGRQcm9wZXJ0eSwgc29ydFZhbHVlOiAkZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpIHtcclxuICAgIGlmIChmaWVsZC5zaG93U29ydCkge1xyXG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtIDE1cHgpYDtcclxuICAgIH1cclxuICAgIHJldHVybiBgMTAwJWA7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZU1vdXNlRG93bihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuZGF0ZVRpbWVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlVGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50KSB8fFxyXG4gICAgICAgICAgKHRoaXMuYm9vbEVsZW1lbnQgJiYgdGhpcy5ib29sRWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0TnVtYmVyQ29tcG9uZW50LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1c3RvbVBhZGRpbmcoaXRlbTogYW55LCBpOiBudW1iZXIpIHtcclxuICAgIGlmICghaSkge1xyXG4gICAgICBpZiAoIWl0ZW0ubGV2ZWwpIHtcclxuICAgICAgICByZXR1cm4gISFpdGVtLmNoaWxkcmVuID8gNiA6IDI4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmxldmVsICogdGhpcy5pbmRlbnRTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuICB9XHJcblxyXG4gIGNoaWxkT2Yobm9kZTogYW55LCBhbmNlc3RvcjogYW55KSB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5sZW5ndGggPiAwICYmIGNoaWxkLmNsYXNzTmFtZSAmJiB0eXBlb2YgY2hpbGQuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdjZGstb3ZlcmxheS1wYW5lJykgPj0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIGRhdGEuY21hY3NFZGl0ZWRQcm9wID0gdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KGRhdGEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIHRoaXMubm9kZU9uRWRpdGlvbiA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCwgcHJvcGVydHk6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgZGF0YS5jbWFjc0VkaXRlZFByb3AgPSBwcm9wZXJ0eSA/IHByb3BlcnR5IDogdGhpcy5wcm9wZXJ0eTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uY21hY3NFZGl0ZWRQcm9wID0gcHJvcGVydHkgPyBwcm9wZXJ0eSA6IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBudWxsO1xyXG5cclxuICB9XHJcblxyXG4gIG5nTW9kZWxDaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLm5vZGVPbkVkaXRpb24gPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaWQpOiBudW1iZXIge1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGkgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBpZCk7XHJcbiAgICByZXR1cm4gaTtcclxuICB9XHJcblxyXG4gIG9yZGVyID0gMDtcclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hlY2tib3hUZW1wQ2FjaGUgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoZWNrYm94VGVtcENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA/IGZhbHNlIDogdGhpcy5kYXRhW2ldLnNlbGVjdGVkLFxyXG4gICAgICAgIGRhdGE6IHsgLi4udGhpcy5kYXRhW2ldIH0sXHJcbiAgICAgICAgb3JkZXI6IHRoaXMuZGF0YVtpXS5zZWxlY3RlZCA/IHRoaXMub3JkZXIrKyA6IC0xXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2JveENhY2hlID0gWy4uLmNoZWNrYm94VGVtcENhY2hlXTtcclxuICAgIGlmICh0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCkge1xyXG4gICAgICB0aGlzLmVkaXRpb25PcFRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZVRyZWVEYXRhKCkge1xyXG4gICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdCh0aGlzLmRhdGEsIHRoaXMuY2hlY2tib3hDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChpdGVtOiBhbnksIHBsYWluTGlzdDogYW55W10pIHtcclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGVsZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50SW5DYWNoZSA8IDApIHtcclxuICAgICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcmRlcjogLTEsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uZWxlbSB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChlbGVtLmNoaWxkcmVuLCBwbGFpbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgZWxlbWVudEluQ2FjaGUgPSBwbGFpbkxpc3QuZmluZEluZGV4KGVsID0+IGVsLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICBpZiAoZWxlbWVudEluQ2FjaGUgPCAwKSB7XHJcbiAgICAgICAgcGxhaW5MaXN0LnB1c2goe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3JkZXI6IC0xLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CdXR0b25DbGljayhmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENoYW5nZSgkZXZlbnQsIGRhdGEpIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZVt0aGlzLmdldEluZGV4KGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaENoZWNrYm94U3RhdGUob25pbml0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tDaGVja2JveFN0YXRlKCk7XHJcbiAgICBpZiAoIW9uaW5pdCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGFTZWxlY3RlZC5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQ2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkID09PSB0cnVlKS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5hbGxDaGVja2VkID0gKGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmIChkYXRhU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoKSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGRhdGFTZWxlY3RlZC5sZW5ndGggPiAwICYmICF0aGlzLmFsbENoZWNrZWQ7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGVkO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICBvblJhdGVDaGFuZ2UoY291bnQ6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICBkYXRhW3RoaXMuY29uZmlnLmZpZWxkUmF0ZV0gPSBjb3VudDtcclxuICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgZWxlbWVudC5vcmRlciA9IC0xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyB0aGlzLmRhdGEgOiBbXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgaXNCb29sZWFuKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0ICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBpc0RhdGUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNUaW1lKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgbnpEcm9wZG93blNlcnZpY2U6IE56RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc2F2ZWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNldEZpZWxkc0RlZmF1bHQoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZmllbGRzKSB7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBmaWVsZC5lZGl0YWJsZSA9IGZpZWxkLmVkaXRhYmxlID09PSBudWxsIHx8IGZpZWxkLmVkaXRhYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmllbGQuZWRpdGFibGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZElEKSB7XHJcbiAgICAgIHRoaXMuZ3JpZElEID0gdGhpcy51dGlsU2VydmljZS51dWlkdjQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEZpZWxkc0RlZmF1bHQoKTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiB0aGlzLmV4cGFuZGFibGUgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoY29uZmlnOiBHcmlkRXhwQ29uZmlnKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmVHJlZTpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VHJlZVBkZihjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHhUcmVlOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUcmVlRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBDb252ZXJ0IHRyZWUgdG8gbGlzdCBpZiBleHBhbmRhYmxlICovXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZmllbGRJRCA9IHRoaXMuY29uZmlnLmZpZWxkSWQ7XHJcbiAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgIGNvZXJjZURhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhW2l0ZW1bdGhpcy5maWVsZElEXV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnV0aWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmV4Y2VsU2VydmljZS5leHBvcnRDb21wbGV0ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveENhY2hlID0gW107XHJcbiAgICAgICAgICB0aGlzLm1hcE9mRXhwYW5kZWREYXRhID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGVUcmVlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkSUQgPSB0aGlzLmNvbmZpZy5maWVsZElkO1xyXG4gICAgICAgIGNvbnN0IGNvZXJjZURhdGEgPSB0aGlzLmRhdGEgYXMgYW55W107XHJcbiAgICAgICAgY29lcmNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtW3RoaXMuZmllbGRJRF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwT2ZFeHBhbmRlZERhdGFbaXRlbVt0aGlzLmZpZWxkSURdXSA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaENoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5zZXRGaWVsZHNEZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiBnZXRUcmVlTm9kZUJ5S2V5KG5vZGU6IGFueSwga2V5OiBhbnkpIHtcclxuICAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XHJcbiAgICAgICBub2RlLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICB0aGlzLmdldFRyZWVOb2RlQnlLZXkoZWwsIGtleSk7XHJcbiAgICAgICB9KVxyXG4gICAgIH0gZWxzZSBpZiAobm9kZVt0aGlzLmZpZWxkSURdID09PSBrZXkpIHtcclxuICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgdGhpcy5nZXRUcmVlTm9kZUJ5S2V5KGVsLCBrZXkpO1xyXG4gICAgICAgfSlcclxuICAgICB9XHJcbiAgIH0qL1xyXG5cclxuICAvKiBFeHBhbmRhYmxlIFJvd3MgKi9cclxuICBleHBvcnRUcmVlUGRmKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0KS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgdGhpcy5kYXRhLCAwKTtcclxuXHJcbiAgICBkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgdGhlbWU6ICdzdHJpcGVkJyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogNSB9LFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICBjb2x1bW5zXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZSArICcucGRmJztcclxuICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRyZWVUb1BkZlJlYyhyb3dzOiBhbnksIGRhdGE6IGFueSwgb2ZmU2V0TWFyZ2luID0gMCkge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGNvbnN0IGNvZXJjZWRJdGVtID0gaXRlbSBhcyBhbnk7XHJcbiAgICAgIGxldCBwYXJlbnRTdHlsZXM6IGFueSA9IHsgY2VsbFBhZGRpbmc6IFsyLCAyLCAyLCAyXSB9O1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICBwYXJlbnRTdHlsZXMgPSB7IGNlbGxQYWRkaW5nOiBbMiwgMiwgMiwgMl0gfTtcclxuICAgICAgICBpZiAoIWlkeCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmNlbGxQYWRkaW5nID0gWzIsIDIsIDIsIDIgKyBvZmZTZXRNYXJnaW5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgcGFyZW50U3R5bGVzLmZpbGxDb2xvciA9IFsxNTMsIDIwNCwgMjU1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiBpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHsgY29udGVudDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSwgc3R5bGVzOiBwYXJlbnRTdHlsZXMgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goeyBjb250ZW50OiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCh7IGNvbnRlbnQ6IGl0ZW1bZmllbGQucHJvcGVydHldLCBzdHlsZXM6IHBhcmVudFN0eWxlcyB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgICBpZiAoY29lcmNlZEl0ZW0uY2hpbGRyZW4gJiYgY29lcmNlZEl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUcmVlVG9QZGZSZWMocm93cywgY29lcmNlZEl0ZW0uY2hpbGRyZW4sIDUgKyBvZmZTZXRNYXJnaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290OiBhbnkpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBzdGFjazogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaCh7IC4uLnJvb3QsIGxldmVsOiAwLCBleHBhbmQ6IHRoaXMuZXhwYW5kQWxsID8gdGhpcy5leHBhbmRBbGwgOiByb290LmV4cGFuZCB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4ubm9kZS5jaGlsZHJlbltpXSxcclxuICAgICAgICAgICAgICBsZXZlbDogbm9kZS5sZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgZXhwYW5kOiB0aGlzLmV4cGFuZEFsbCA/IHRoaXMuZXhwYW5kQWxsIDogbm9kZS5jaGlsZHJlbltpXS5leHBhbmQsXHJcbiAgICAgICAgICAgICAgcGFyZW50OiBub2RlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlOiBhbnksIGhhc2hNYXA6IGFueSwgYXJyYXk6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhc2hNYXBbbm9kZVt0aGlzLmZpZWxkSURdXSkge1xyXG4gICAgICBoYXNoTWFwW25vZGVbdGhpcy5maWVsZElEXV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRXhwYW5kQ29sbGFwc2UoYXJyYXk6IGFueVtdLCBkYXRhOiBhbnksICRldmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZUNoaWxkcmVuKGFycmF5LGRhdGEsJGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMub25Sb3dFeHBhbmRDb2xsYXBzZS5lbWl0KHtkYXRhLCRldmVudH0pO1xyXG4gIH1cclxuICBjb2xsYXBzZUNoaWxkcmVuKGFycmF5OiBhbnlbXSwgZGF0YTogYW55LCAkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZGF0YS5jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuZmluZChhID0+IGFbdGhpcy5maWVsZElEXSA9PT0gZFt0aGlzLmZpZWxkSURdKSE7XHJcbiAgICAgICAgICB0YXJnZXQuZXhwYW5kID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlQ2hpbGRyZW4oYXJyYXksIHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRyZWVDaGFuZ2UoJGV2ZW50LCBpdGVtLCBzdWJ0cmVlID0gbnVsbCkge1xyXG4gICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGl0ZW0pO1xyXG4gICAgY29uc3QgY29lcmNlZEVsZW0gPSBzdWJ0cmVlLmZpbmQoZSA9PiBlW3RoaXMuZmllbGRJRF0gPT09IGl0ZW1bdGhpcy5maWVsZElEXSk7XHJcbiAgICBpZiAoY29lcmNlZEVsZW0ucGFyZW50KSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFN1YlRyZWVDaGVja2JveGVzKGNvZXJjZWRFbGVtLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQ6IGJvb2xlYW4sIGFycmF5OiBhbnkpIHtcclxuICAgIGFycmF5LnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoYXJyYXlbdGhpcy5maWVsZElEXSk7XHJcbiAgICBub2RlLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgbm9kZS5vcmRlciA9ICRldmVudCA/IHRoaXMub3JkZXIrKyA6IC0xO1xyXG4gICAgaWYgKGFycmF5LmNoaWxkcmVuISEpIHtcclxuICAgICAgYXJyYXkuY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlQ2hlY2tib3hlcygkZXZlbnQsIGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hTdWJUcmVlQ2hlY2tib3hlcyhzdWJ0cmVlKSB7XHJcbiAgICBpZiAoc3VidHJlZS5jaGlsZHJlbiEhKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gMDtcclxuICAgICAgbGV0IGluZGV0ZXJtaW5hdGUgPSAwO1xyXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBzdWJ0cmVlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZTogQ2hlY2tib3hTZWxlY3QgPSB0aGlzLmdldE5vZGUoY2hpbGRbdGhpcy5maWVsZElEXSk7XHJcbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNoZWNrZWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICBpbmRldGVybWluYXRlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5vZGU6IENoZWNrYm94U2VsZWN0ID0gdGhpcy5nZXROb2RlKHN1YnRyZWVbdGhpcy5maWVsZElEXSk7XHJcbiAgICAgIG5vZGUuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKGluZGV0ZXJtaW5hdGUgfHwgKGNoZWNrZWQgPCBzdWJ0cmVlLmNoaWxkcmVuLmxlbmd0aCAmJiBjaGVja2VkKSkge1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSAtMTtcclxuICAgICAgfSBlbHNlIGlmIChjaGVja2VkID09PSBzdWJ0cmVlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgICBpZiAoc3VidHJlZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoU3ViVHJlZUNoZWNrYm94ZXMoc3VidHJlZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShrZXk6IGFueSkge1xyXG4gICAgbGV0IHRlc3QgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKG4gPT4gbi5kYXRhW3RoaXMuZmllbGRJRF0gPT09IGtleSk7XHJcbiAgICByZXR1cm4gdGVzdCA/IHRlc3RbMF0gOiB7IHNlbGVjdGVkOiBmYWxzZSwgZGF0YTogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcblxyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IHt9O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGFUb0V4cG9ydC5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgZXhwb3J0VHJlZUV4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFUb0V4cG9ydDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKHRoaXMuZGF0YSwgZGF0YVRvRXhwb3J0KTtcclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIGZpbGVOYW1lO1xyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUcmVlRXhjZWxSZWMoZGF0YTogYW55LCBkYXRhVG9FeHBvcnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0ge307XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG5cclxuICAgICAgY29uc3QgY29lcmNlZEl0ZW0gPSBpdGVtIGFzIGFueTtcclxuICAgICAgaWYgKGNvZXJjZWRJdGVtLmNoaWxkcmVuICYmIGNvZXJjZWRJdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VHJlZUV4Y2VsUmVjKGNvZXJjZWRJdGVtLmNoaWxkcmVuLCBkYXRhVG9FeHBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0VG9QZGYoY29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgaWYgKCFjb25maWcudXNlVmVyc2lvbjIpIHtcclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZShcclxuICAgICAgICAncGRmJyxcclxuICAgICAgICBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXhwb3J0Q29uZmlnID0ge1xyXG4gICAgICAgIGNoZWNrYm94U2VsZWN0OiB0aGlzLmNoZWNrYm94U2VsZWN0LFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMuY2hlY2tib3hTZWxlY3QgPyB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSA6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgZGF0ZVBpcGU6IHRoaXMuZGF0ZVBpcGUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgIGVsZW1JRDogdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueU5hbWU6IGNvbmZpZy5leHBvcnRDb21wYW55TmFtZSxcclxuICAgICAgICBleHBvcnRVc2VyTmFtZTogY29uZmlnLmV4cG9ydFVzZXJOYW1lLFxyXG4gICAgICAgIGV4cG9ydFRpdGxlOiBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgZXhwb3J0Q29tcGFueUxvZ29Vcmw6IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA/IGNvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybCA6ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGV2MihcclxuICAgICAgICBleHBvcnRDb25maWdcclxuICAgICAgKTtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tzID0gMDtcclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhldmVudCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMSkge1xyXG4gICAgICAgIHRoaXMuZGJsQ2xpY2tSb3coZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2U7IGVsZW0ub3JkZXIgPSAtMSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE11bHRpcGxlKGN1cnJlbnRJZHgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RJZHhTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAoY3VycmVudElkeCAhPT0gdGhpcy5sYXN0SWR4U2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbdGhpcy5sYXN0SWR4U2VsZWN0ZWRdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgICAgIHRoaXMubGFzdElkeFNlbGVjdGVkID0gY3VycmVudElkeCA+IHRoaXMubGFzdElkeFNlbGVjdGVkID8gdGhpcy5sYXN0SWR4U2VsZWN0ZWQgKyAxIDogdGhpcy5sYXN0SWR4U2VsZWN0ZWQgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbY3VycmVudElkeF0ub3JkZXIgPSB0aGlzLm9yZGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHg7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja1JvdyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25kbGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICB0YXBDb3VudCA9IDA7XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKSB7XHJcbiAgICB0aGlzLnRhcENvdW50ICs9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgfSwgNjAwKTtcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gMSkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjbGlja0Jvb2xlYW5DZWxsKGRhdGE6IGFueSwgaWQ6IGFueSwgZmllbGQ6IEZpZWxkLCBpbmRleDogbnVtYmVyLCAkZXZlbnQ6IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCAmJiBmaWVsZC5lZGl0YWJsZSkge1xyXG4gICAgICBpZiAoZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IG51bGwgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhW2ZpZWxkLnByb3BlcnR5XSA9IChkYXRhW2ZpZWxkLnByb3BlcnR5XSA9PT0gZmFsc2UgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICdmYWxzZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4LCBkYXRhLCBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0T25FZGl0RXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW3RoaXMucm93T25FZGl0aW9uXSk7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5vZGVPbkVkaXRpb24pIHtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uLmNtYWNzRWRpdGVkUHJvcCA9IHRoaXMucHJvcGVydHk7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5ub2RlT25FZGl0aW9uKTtcclxuICAgICAgdGhpcy5ub2RlT25FZGl0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTWFwKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoYF06IHRoaXMubG9ncyxcclxuICAgICAgW2BjbWFjcy1jb21wYWN0LXRhYmxlLWxvZ3MtaGVhZGVyLXRoLWZvbnRgXTogdGhpcy5sb2dzLFxyXG4gICAgICBbYCR7ZmllbGQubmdDbGFzc31gXTogZmllbGQubmdDbGFzcyAmJiBmaWVsZC5uZ0NsYXNzLmxlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoKGZpZWxkOiBGaWVsZCwgaXRlbTogYW55LCBpOiBudW1iZXIpIHtcclxuXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmICFpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5MaW5lRWRpdCA/IGBjYWxjKDEwMCUgLSAxN3B4KWAgOiBgY2FsYygxMDAlIC0gJHt0aGlzLmdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZCwgaSl9KWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbkxpbmVFZGl0ID8gYGNhbGMoMTAwJSAtIDE3cHgpYCA6IGBjYWxjKDEwMCUgLSAke3RoaXMuZ2V0TWF4V2lkdGhGaWVsZFZpZXdNb2RlKGZpZWxkLCBpKX0pYDtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoRmllbGRWaWV3TW9kZShmaWVsZDogRmllbGQsIGk6IG51bWJlcikge1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCB8fFxyXG4gICAgICBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlIHx8XHJcbiAgICAgIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWUgfHxcclxuICAgICAgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBgMThweGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzBweCc7XHJcbiAgfVxyXG5cclxuICBnZXRTdGlja3lXaWR0aChwb3NpdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3NtYXJ0VGFibGUnKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocG9zaXRpb24gPT09ICdkcmFnZ2FibGUnKSB7XHJcbiAgICAgIHdpZHRoID0gdGhpcy5zbWFydFRhYmxlID8gNDAgOiAwO1xyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAnY2hlY2tib3hTZWxlY3QnKSB7XHJcbiAgICAgIGlmICh0aGlzLnNtYXJ0VGFibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgICB3aWR0aCArPSA0MDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RpY2t5V2lkdGhSaWdodChwb3NpdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3NtYXJ0VGFibGUnKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHRyYSkge1xyXG4gICAgICBpZiAodGhpcy5zbWFydFRhYmxlKSB7XHJcbiAgICAgICAgd2lkdGggKz0gNDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZXh0cmEnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpZHRoICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDb21wb25lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRhYmxlQ29tcG9uZW50O1xyXG4gIH1cclxufVxyXG5cclxuIl19