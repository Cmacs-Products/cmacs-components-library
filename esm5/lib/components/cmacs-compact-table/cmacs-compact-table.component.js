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
var CmacsCompactTableComponent = /** @class */ (function () {
    function CmacsCompactTableComponent(cdr, i18n, exportAsService, excelService, datePipe, cookies) {
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
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
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
     * @param {?} e
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var element = (/** @type {?} */ (e.target));
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
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.endEditMode = /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    function ($event, index) {
        if ($event.key === ('Enter' || 'enter')) {
            this.editId = null;
            this.property = null;
            this.rowOnEdition = -1;
            this.onedit.emit(this.data[index]);
        }
        else {
            this.rowOnEdition = index;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.endEditModeNgModel = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.onedit.emit(this.data[index]);
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
        var _this = this;
        this.checkboxCache.length = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.checkboxCache.push({
                selected: false,
                data: tslib_1.__assign({}, item)
            });
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.checkChildrenState = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var indeterminate;
        /** @type {?} */
        var init = true;
        if (item.children && item.children.length > 0) {
            /** @type {?} */
            var res = this.checkChildrenStateRec(item.children);
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
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.checkChildrenStateRec = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (isArray(item)) {
            item.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                _this.checkChildrenStateRec(elem);
            }));
        }
        else {
            /** @type {?} */
            var node = this.getNode(item.key);
            return node.selected;
        }
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.updateCheckboxCacheTreeData = /**
     * @return {?}
     */
    function () {
        this.checkboxCache.length = 0;
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
                plainList.push({
                    selected: false,
                    data: tslib_1.__assign({}, elem)
                });
                if (elem.children && elem.children.length > 0) {
                    _this.convertExpandTreeToList(elem.children, plainList);
                }
            }));
        }
        else {
            plainList.push({
                selected: false,
                data: tslib_1.__assign({}, item)
            });
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
     * @param {?} event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataSelected = this.checkCheckboxState();
        this.selectionChange.emit(dataSelected.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data; })));
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
        function (item) { return item.selected; }));
        this.selected = this.allChecked = dataSelected.length === this.checkboxCache.length;
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
        return this.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.hidden === undefined || !item.hidden; }));
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
        return field !== undefined && field.editTemplate === TemplateType.Select;
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
        return field !== undefined && field.editTemplate === TemplateType.String;
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
     * @param {?} value
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isTypeNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'number';
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
        return field !== undefined && field.editTemplate === TemplateType.Number;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.isBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && typeof (value) === 'boolean';
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
    };
    /**
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
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
        function (config) {
            switch (config.exportType) {
                case ExportType.Pdf:
                    _this.exportToPdf(config.fileName);
                    break;
                case ExportType.Xslx:
                    _this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    _this.exportToPng(config.fileName);
                    break;
            }
        }));
        /* Convert tree to list if expandable */
        if (this.expandable) {
            /** @type {?} */
            var coerceData = (/** @type {?} */ (this.data));
            coerceData.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.mapOfExpandedData[item.key] = _this.convertTreeToList(item);
            }));
        }
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
        if (changes.data) {
            this.updateCheckboxCache();
        }
    };
    /* Expandable Rows */
    /* Expandable Rows */
    /**
     * @param {?} root
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.convertTreeToList = /* Expandable Rows */
    /**
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
        stack.push(tslib_1.__assign({}, root, { level: 0, expand: false }));
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(tslib_1.__assign({}, node.children[i], { level: node.level + 1, expand: false, parent: node }));
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
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
            array.push(node);
        }
    };
    /**
     * @param {?} array
     * @param {?} data
     * @param {?} $event
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.collapse = /**
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
                    function (a) { return a.key === d.key; }))));
                    target.expand = false;
                    _this.collapse(array, target, false);
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
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.onCheckboxTreeChange = /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        this.updateTreeCheckboxes($event, this.data, item.key);
        this.onCheckboxChange($event);
    };
    /**
     * @param {?} $event
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.updateTreeCheckboxes = /**
     * @param {?} $event
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    function ($event, array, key) {
        var _this = this;
        if (isArray(array)) {
            array.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.key === key) {
                    _this.getNode(key).selected = $event;
                    item.selected = $event;
                    if (item.children && item.children.length > 0) {
                        item.children.forEach((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) {
                            _this.updateTreeCheckboxes($event, c, c.key);
                        }));
                    }
                    return;
                }
                if (item.children) {
                    item.children.forEach((/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) {
                        _this.updateTreeCheckboxes($event, d, key);
                    }));
                }
                else {
                    return;
                }
            }));
        }
        else {
            if (array.key === key) {
                array.selected = $event;
                this.getNode(key).selected = $event;
                return;
            }
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
        /** @type {?} */
        var test = this.checkboxCache.filter((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.data.key === key; }));
        return test ? test[0] : { selected: false };
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
        var _this = this;
        /** @type {?} */
        var exportAsConfig = {
            type: 'png',
            // the type you want to download
            elementId: this.gridID,
        };
        this.frontPagination = false;
        this.showPagination = false;
        /** @type {?} */
        var interval = setInterval((/**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line: max-line-length
            _this.exportAsService.save(exportAsConfig, fileName + '_export_' + Date.now());
            _this.frontPagination = true;
            _this.showPagination = true;
            clearInterval(interval);
        }), 100);
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
            function (item) { return item.celdType === CeldType.Default; })).forEach((/**
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
                else {
                    itemToExport[field.display] = item[field.property];
                }
            }));
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                itemToExport[field.display] = item[field.property].context.exportValue;
            }));
            dataToExport.push(itemToExport);
        }));
        this.excelService.exportAsExcelFile(dataToExport, fileName);
    };
    /**
     * @param {?} fileName
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.exportToPdf = /**
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        var _this = this;
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
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = [];
            // tslint:disable-next-line: no-shadowed-variable
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                switch (field.editTemplate) {
                    case TemplateType.Select:
                        /** @type {?} */
                        var selectItem = field.select.selectData.find((/**
                         * @param {?} option
                         * @return {?}
                         */
                        function (option) { return option[field.select.value] === item[field.property]; }));
                        if (selectItem !== undefined) {
                            itemToExport.push(selectItem[field.select.label]);
                        }
                        break;
                    case TemplateType.Date:
                        itemToExport.push(_this.datePipe.transform(item[field.property], 'MMMM dd yyyy'));
                        break;
                    default:
                        itemToExport.push(item[field.property]);
                        break;
                }
            }));
            _this.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                itemToExport.push(item[field.property].context.exportValue);
            }));
            rows.push(itemToExport);
        }));
        doc.autoTable({
            theme: 'striped',
            margin: { top: 5 },
            body: rows,
            columns: columns
        });
        doc.save(fileName + '_export_' + Date.now());
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
     * @param {?} data
     * @return {?}
     */
    CmacsCompactTableComponent.prototype.clickRow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.onclickRow.emit(data);
        if (!this.checkboxSelect) {
            if (!this.multiSelect) {
                this.checkboxCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.selected && item.data[_this.config.fieldId] !== data[_this.config.fieldId]; }))
                    .forEach((/**
                 * @param {?} elem
                 * @return {?}
                 */
                function (elem) { return elem.selected = false; }));
            }
            /** @type {?} */
            var index = this.checkboxCache.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.data[_this.config.fieldId] === data[_this.config.fieldId]; }));
            if (index !== -1) {
                this.checkboxCache[index].selected = !this.checkboxCache[index].selected;
            }
        }
        this.selectionChange.emit(this.checkboxCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data; })));
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
    CmacsCompactTableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-compact-table',
                    exportAs: 'cmacsCompactTable',
                    template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\">\r\n    <thead class=\"ant-table-thead\" *ngIf=\"!dataTable\">\r\n      <tr [class.cmacs-compact-table-header-logs]=\"logs\">\r\n\r\n        <th [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n            [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n          *ngFor=\"let field of getFields()\" [nzShowSort]=\"field.showSort\"\r\n          [(nzSort)]=\"field.showSort ? field.sortOrder : defaultSortOrder\" (nzSortChange)=\"sort($event, field.property)\"\r\n          nzWidth=\"{{field.width}}\">{{field.display}}</th>\r\n        <th *ngIf=\"showRate\"></th>\r\n\r\n        <th\r\n          [class.cmacs-compact-table-logs-header-th]=\"logs\"\r\n          [class.cmacs-compact-table-logs-header-th-font]=\"logs\"\r\n            *ngIf=\"extra\">\r\n          <div class=\"cmacs-compact-table-extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n        <ng-container *ngIf=\"expandable; else defaultTpl;\">\r\n          <ng-container *ngFor=\"let data of gridComponent.data;\">\r\n            <ng-container *ngFor=\"let item of mapOfExpandedData[data.key]\">\r\n              <tr *ngIf=\"(item.parent && item.parent.expand) || !item.parent\"\r\n                  [class.cmacs-compact-table-header-logs]=\"logs && item.children && item.children.length\">\r\n                <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                >\r\n                  <label cmacs-checkbox [(ngModel)]=\"getNode(item.key).selected\" [indeterminate]=\"checkChildrenState(item)\"\r\n                         (checkedChange)=\"onCheckboxTreeChange($event, item)\"\r\n                  ></label>\r\n                </td>\r\n\r\n                <td *ngFor=\"let field of getFields(); index as i\"\r\n                    [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] || property === field.property) &&\r\n                (isString(field) || isDate(field) || isSelect(field))\"\r\n                    [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                    [class.cmacs-compact-table-on-edit-no-padding]=\"isNumber(field)\"\r\n                    [class.cmacs-compact-table-expandable-td]=\"!i\"\r\n                    [style.paddingLeft.px]=\"getCustomPadding(item, i)\"\r\n                    [nzShowExpand]=\"!!item.children && !i\"\r\n                    [(nzExpand)]=\"item.expand\"\r\n                    (nzExpandChange)=\"collapse(mapOfExpandedData[data.key], item, $event)\"\r\n                >\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       style=\"max-width: 100%\"\r\n                    *ngIf=\"(editId !== data[config.fieldId] || property !== field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data}\"></ng-container>\r\n                  </div>\r\n\r\n                  <div [style.display]=\"isNumber(field) ? 'block' : 'inline-flex'\"\r\n                       style=\"max-width: 100%;\"\r\n                    *ngIf=\"(editId === data[config.fieldId] && property === field.property)\">\r\n                    <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                     *ngIf=\"showRate\">\r\n                  <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                           (click)=\"onRateClick($event)\"></nz-rate>\r\n                </td>\r\n\r\n                <td  [class.cmacs-compact-table-logs-header-th-font]=\"logs && item.children && item.children.length\"\r\n                      *ngIf=\"extra\">\r\n                </td>\r\n\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #defaultTpl>\r\n\r\n          <tr *ngFor=\"let data of gridComponent.data; index as i\" (click)=\"clickRow(data)\" (dblclick)=\"dblClickRow(data)\"\r\n              [class.ant-table-selected-row]=\"isRowSelected(data)\" [class.cmacs-compact-table-editable-row]=\"inLineEdit\">\r\n\r\n            <td *ngIf=\"checkboxSelect\" nzWidth=\"2%\">\r\n              <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n                     (checkedChange)=onCheckboxChange($event)\r\n                     *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n            </td>\r\n\r\n            <td *ngFor=\"let field of getFields();\"\r\n                [class.cmacs-compact-table-on-edit]=\"(editId === data[config.fieldId] || property === field.property) &&\r\n                (isString(field) || isDate(field) || isSelect(field))\"\r\n                [class.cmacs-compact-table-on-edit-no-padding]=\"isNumber(field)\"\r\n            >\r\n\r\n              <div\r\n                *ngIf=\"(editId !== data[config.fieldId] || property !== field.property)\">\r\n                <ng-container *ngTemplateOutlet=\"viewModeTpl;context: {field: field, data: data}\"></ng-container>\r\n              </div>\r\n\r\n              <div\r\n                *ngIf=\"(editId === data[config.fieldId] && property === field.property)\">\r\n                <ng-container *ngTemplateOutlet=\"editTpl;context: {field: field, data: data, i: i}\"></ng-container>\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td *ngIf=\"showRate\">\r\n              <nz-rate [ngModel]=\"data[config.fieldRate]\" [nzCount]='rateCount' (ngModelChange)=\"onRateChange($event, data)\"\r\n                       (click)=\"onRateClick($event)\"></nz-rate>\r\n            </td>\r\n\r\n            <td *ngIf=\"extra\">\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template #editTpl let-field=\"field\" let-data=\"data\" let-i=\"i\">\r\n          <!--Editable String Edit Mode-->\r\n          <input #fieldTypeInput class=\"cmacs-compact-table-input\" *ngIf=\"isString(field)\" type=\"text\"\r\n                 cmacs-input [(ngModel)]=\"data[field.property]\" (keyup)=\"endEditMode($event, i)\" />\r\n\r\n          <!--Editable DatePicker Edit Mode-->\r\n          <cmacs-date-picker class=\"cmacs-compact-table-date\" #fieldTypeDatePicker *ngIf=\"isDate(field)\" [format]=\"'MM/dd/yyyy'\" [allowClear]=\"false\"\r\n                             open [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n          </cmacs-date-picker>\r\n\r\n          <!--Editable Select Edit Mode-->\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" showSearch\r\n                        [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                          value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>\r\n\r\n          <!--Editable InpuNumber Edit Mode-->\r\n          <cmacs-input-number #fieldTypeInputNumber\r\n                              *ngIf=\"isTypeNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                              [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\">\r\n          </cmacs-input-number>\r\n\r\n          <!--<cmacs-input-number #fieldTypeInputNumber id=\"testing2\"\r\n            *ngIf=\"isNumber(data[field.property]) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n            [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\"></cmacs-input-number>\r\n\r\n          <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(data[field.property])\"\r\n            [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n          <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 200px;\" showSearch\r\n            [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n            <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n              value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n          </cmacs-select>-->\r\n        </ng-template>\r\n\r\n        <ng-template #viewModeTpl let-field=\"field\" let-data=\"data\">\r\n          <ng-container>\r\n\r\n            <!--Editable String View Mode-->\r\n            <ng-container *ngIf=\"isString(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell\">{{ data[field.property] }}</div>\r\n              <i class=\"iconUISmall-Edit\"\r\n                 [class.cmacs-compact-table-edit-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-edit-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n            <!--Editable DatePicker View Mode-->\r\n            <ng-container *ngIf=\"isDate(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-date\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n              <i class=\"iconUILarge-Calendar\"\r\n                 [class.cmacs-compact-table-calendar-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-calendar-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable Select View Mode-->\r\n            <ng-container *ngIf=\"isSelect(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-select\">{{ getLabel(data, field) }}</div>\r\n              <i class=\"iconArrowLarge-Chevron-Down\"\r\n                 [class.cmacs-compact-table-select-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-select-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n            </ng-container>\r\n\r\n            <!--Editable InputNumber View Mode-->\r\n            <ng-container *ngIf=\"isNumber(field)\">\r\n              <div class=\"cmacs-compact-table-overflow-cell cmacs-compact-table-input-number\">{{ data[field.property] }}</div>\r\n              <i class=\"iconArrowLarge-Solid-UpDown\"\r\n                 [class.cmacs-compact-table-input-number-icon]=\"inLineEdit\"\r\n                 [class.cmacs-compact-table-input-number-icon-view]=\"!inLineEdit\"\r\n                 (click)=\"startEdit(data[config.fieldId], field.property, $event)\">\r\n              </i>\r\n            </ng-container>\r\n\r\n          </ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #componentTpl>\r\n          <!--<ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n            <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n            </ng-container>\r\n          </ng-container>\r\n          <button *ngIf=\"isCeldTypeButton(field)\" cmacs-button type=\"{{field.button.style}}\"\r\n            (click)=onButtonClick(data)>\r\n            <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n            <ng-template #titleTpl>{{field.display}}</ng-template>\r\n          </button>\r\n          <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\"\r\n            [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n            [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n            [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n            [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n            {{  data[field.property] }}\r\n          </cmacs-tag>\r\n          &lt;!&ndash;<cmacs-tag *ngIf=\"isCeldTypeTag(field) && (field.tag === undefined || field.tag.color === undefined)\">\r\n            {{ data[field.property] }}</cmacs-tag>\r\n          <cmacs-tag *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined && field.tag.color !== undefined\"\r\n            [color]=data[field.tag.color]>{{  data[field.property] }}</cmacs-tag>&ndash;&gt;\r\n          <ng-container\r\n            *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && isDate(field)\">\r\n            {{ data[field.property]  | date: field.dateFormat}}</ng-container>\r\n          <ng-container\r\n            *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field)\">\r\n            {{ data[field.property] }}</ng-container>-->\r\n        </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
                    host: {
                        '[class.cmacs-compact-table-logs]': 'logs'
                    },
                    styles: [".ant-table-thead>tr>th{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;background:0 0!important}.ant-table-tbody>tr>td{padding:6px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae}.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover td:first-child,.ant-table-tbody>tr:hover td:first-child{border-left:3px solid #2a7cff}.ant-table-tbody>tr.cmacs-compact-table-header-logs td:first-child{border-left:3px solid #f6f7fb}.ant-table-tbody>.ant-table-selected-row:hover td{border-bottom:1px solid #2a7cff;border-top:1px solid #2a7cff}.editable-cell{position:relative}:host ::ng-deep .ant-rate-star{font-size:16px}.ant-table-thead>tr>th:first-child{border-left:3px solid transparent}.ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.ant-table-tbody>tr td:first-child{border-left:3px solid #fff}.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,.ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,.ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td,.ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row):not(.cmacs-compact-table-header-logs)>td{background-color:#fff}.ant-table-tbody>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-tbody>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-thead>tr.ant-table-row-hover.cmacs-compact-table-header-logs:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.ant-table-thead>tr.cmacs-compact-table-header-logs:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#f6f7fb}.ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff;border-left-color:#f2f7ff}:host ::ng-deep .ant-spin-nested-loading{clear:both}.cmacs-compact-table-extra,.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{font-size:16px;color:#656c79;display:-webkit-inline-box;display:inline-flex}.cmacs-compact-table-extra{position:relative;top:5px}.cmacs-compact-table-extra a,::ng-deep .cmacs-compact-table-extra a i,::ng-deep .cmacs-compact-table-extra i{margin-right:5px}.cmacs-compact-table-extra a i:hover,.cmacs-compact-table-extra a:hover,::ng-deep .cmacs-compact-table-extra i:hover{cursor:pointer}:host ::ng-deep a,:host ::ng-deep a:hover{color:#656c79}.cmacs-compact-table-edit-icon,.cmacs-compact-table-edit-icon-view{float:right;font-size:14px;position:relative;top:3px;opacity:0}.cmacs-compact-table-edit-icon:hover{color:#2a7cff;cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-edit-icon{opacity:1}.cmacs-compact-table-input,.cmacs-compact-table-input:focus,.cmacs-compact-table-input:hover,.cmacs-compact-table-select{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff}.cmacs-compact-table-on-edit{padding:0 6px!important}.cmacs-compact-table-on-edit-no-padding{padding:0 0 0 6px!important}.cmacs-compact-table-calendar-icon,.cmacs-compact-table-calendar-icon-view,.cmacs-compact-table-input-number-icon,.cmacs-compact-table-input-number-icon-view,.cmacs-compact-table-select-icon,.cmacs-compact-table-select-icon-view{float:right;font-size:14px;position:relative;top:3px}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-calendar-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number-icon,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select-icon{color:#656c79}.cmacs-compact-table-calendar-icon:hover,.cmacs-compact-table-input-number-icon:hover,.cmacs-compact-table-select-icon:hover{cursor:pointer}.cmacs-compact-table-editable-row:hover .cmacs-compact-table-date,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-input-number,.cmacs-compact-table-editable-row:hover .cmacs-compact-table-select{border-bottom:2px dotted #656c79}.cmacs-compact-table-date cmacs-picker span input,::ng-deep .ant-calendar-input{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}cmacs-select{width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal}:host ::ng-deep .ant-select-arrow{right:6px}cmacs-input-number,cmacs-input-number:focus,cmacs-input-number:focus-within,cmacs-input-number:hover{max-width:100%;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;border-color:#2a7cff!important}.cmacs-compact-table-overflow-cell{max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}td{text-align:left}:host ::ng-deep .ant-table-row-collapsed::after{font-family:ArrowSmall!important;content:\"\\e903\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-collapsed{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded::after{font-family:ArrowSmall!important;content:\"\\e900\";-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ant-table-row-expanded{margin-right:5px;border:none;-webkit-transition:.3s;transition:.3s}.cmacs-compact-table-header-logs,.cmacs-compact-table-header-logs:hover{background-color:#f6f7fb!important;color:#656c79!important}.cmacs-compact-table-logs-header-th-font,.cmacs-compact-table-logs-header-th-font:hover{color:#656c79!important;background-color:#f6f7fb}:host ::ng-deep .cmacs-compact-table-header-logs .ant-table-row-expand-icon{background-color:#f6f7fb}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCompactTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: ExportAsService },
        { type: ExcelService },
        { type: DatePipe },
        { type: CookieService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUvY21hY3MtY29tcGFjdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFN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OztJQUN2QixpREFBNkM7O0lBQzdDLGdEQUErQzs7SUFFL0MsMkNBQTJDOztJQUMzQyxnREFBZ0M7O0lBRWhDLDhDQUFpQjs7SUFDakIsc0RBQXdCOztJQUN4QixtREFBcUM7O0lBQ3JDLHFEQUF3Qjs7SUFDeEIsZ0RBQW1COztJQUNuQiw0Q0FBc0I7O0lBQ3RCLDhDQUF3Qjs7SUFDeEIsa0RBQWtCOztJQUNsQix1REFBaUQ7O0lBRWpELGtEQUE0RTs7SUFDNUUsd0RBQXdGOztJQUN4Rix1REFBc0Y7O0lBQ3RGLG1EQUE4RTs7SUFDOUUsaURBQTBFOzs7OztJQW9ReEUseUNBQThCOzs7OztJQUM5QiwwQ0FBMkI7Ozs7O0lBQzNCLHFEQUF3Qzs7Ozs7SUFDeEMsa0RBQWtDOzs7OztJQUNsQyw4Q0FBMEI7Ozs7O0lBQzFCLDZDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEV4cG9ydEFzU2VydmljZSwgRXhwb3J0QXNDb25maWcgfSBmcm9tICduZ3gtZXhwb3J0LWFzJztcclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0ICdqc3BkZi1hdXRvdGFibGUnO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEdyaWRFeHBDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1leHAtY29uZmlnJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy90ZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvZXhwb3J0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xyXG5pbXBvcnQge0NoZWNrYm94U2VsZWN0fSBmcm9tIFwiLi4vY21hY3MtZ3JpZC9jbWFjcy10YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtpc0FycmF5fSBmcm9tIFwidXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21wYWN0VGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNtYWNzLWNvbXBhY3QtdGFibGUtbG9nc10nOiAnbG9ncydcclxuICB9XHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvZ3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIGRhdGE6IFRbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR3JpZENvbmZpZztcclxuICBAT3V0cHV0KCkgY29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8R3JpZENvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZmllbGRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBJbnB1dCgpIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8e1xyXG4gICAgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCc7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2JveFNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbkxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhdGFUYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cG9ydEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkRXhwQ29uZmlnPigpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VFtdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByYXRlQ291bnQgPSA1O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aVNlbGVjdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBpbmRlbnRTaXplOiBudW1iZXIgPSAwO1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIG1hcE9mRXhwYW5kZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUlucHV0TnVtYmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0TnVtYmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVEYXRlUGlja2VyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZVNlbGVjdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZUJvb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYm9vbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHN0YXJ0RWRpdChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBpZDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydCgkZXZlbnQ6IGFueSwgZmllbGRQcm9wZXJ0eTogc3RyaW5nLCApe1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoe3NvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkgfHxcclxuICAgICAgICAodGhpcy5pbnB1dE51bWJlckVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLmlucHV0TnVtYmVyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5kYXRlUGlja2VyRWxlbWVudCAmJiB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB8fFxyXG4gICAgICAgICh0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMuY2hpbGRPZihlbGVtZW50LCB0aGlzLnNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudCkgfHxcclxuICAgICAgICAodGhpcy5ib29sRWxlbWVudCAmJiB0aGlzLmJvb2xFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnJvd09uRWRpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZWRpdC5lbWl0KHRoaXMuZGF0YVt0aGlzLnJvd09uRWRpdGlvbl0pO1xyXG4gICAgICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIGdldEN1c3RvbVBhZGRpbmcoaXRlbTogYW55LCBpOiBudW1iZXIpIHtcclxuICAgIGlmICghaSkge1xyXG4gICAgICBpZiAoIWl0ZW0ubGV2ZWwpIHtcclxuICAgICAgICByZXR1cm4gISFpdGVtLmNoaWxkcmVuID8gNiA6IDI4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmxldmVsICogdGhpcy5pbmRlbnRTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuICB9XHJcblxyXG4gIGNoaWxkT2YoIG5vZGU6IGFueSwgYW5jZXN0b3I6IGFueSApIHtcclxuICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGNoaWxkID09PSBhbmNlc3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aCA+IDAgJiYgY2hpbGQuY2xhc3NOYW1lICYmIHR5cGVvZiBjaGlsZC5jbGFzc05hbWUgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2Nkay1vdmVybGF5LXBhbmUnKSA+PTAgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZU5nTW9kZWwoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB0aGlzLnJvd09uRWRpdGlvbiA9IC0xO1xyXG4gICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KGlkKTogbnVtYmVyIHtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBpID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB7IC4uLml0ZW0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGlsZHJlblN0YXRlKGl0ZW06IGFueSkge1xyXG4gICAgbGV0IGluZGV0ZXJtaW5hdGU7XHJcbiAgICBsZXQgaW5pdCA9IHRydWU7XHJcblxyXG4gICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY2hlY2tDaGlsZHJlblN0YXRlUmVjKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlcylcclxuICAgICAgLyogaWYgKGluaXQpIHtcclxuICAgICAgICAgaW5kZXRlcm1pbmF0ZSA9IHJlcztcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiByZXMgIT09IGluZGV0ZXJtaW5hdGUgPyB0cnVlIDogcmVzO1xyXG4gICAgICAgfVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgfSovXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NoaWxkcmVuU3RhdGVSZWMoaXRlbSkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrQ2hpbGRyZW5TdGF0ZVJlYyhlbGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKGl0ZW0ua2V5KTtcclxuICAgICAgcmV0dXJuIG5vZGUuc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuY29udmVydEV4cGFuZFRyZWVUb0xpc3QodGhpcy5kYXRhLCB0aGlzLmNoZWNrYm94Q2FjaGUpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEV4cGFuZFRyZWVUb0xpc3QoaXRlbTogYW55LCBwbGFpbkxpc3Q6IGFueVtdKSB7XHJcbiAgICBpZiAoaXNBcnJheShpdGVtKSkge1xyXG4gICAgICBpdGVtLmZvckVhY2goZWxlbSA9PiB7XHJcblxyXG4gICAgICAgIHBsYWluTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uZWxlbSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jb252ZXJ0RXhwYW5kVHJlZVRvTGlzdChlbGVtLmNoaWxkcmVuLCBwbGFpbkxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFpbkxpc3QucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CdXR0b25DbGljayhmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENoYW5nZShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhU2VsZWN0ZWQubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0NoZWNrYm94U3RhdGUgKCl7XHJcbiAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5hbGxDaGVja2VkID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aDtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIG9uUmF0ZUNoYW5nZShjb3VudDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGFbdGhpcy5jb25maWcuZmllbGRSYXRlXSA9IGNvdW50O1xyXG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hBbGxDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KChzdGF0dXMpID8gdGhpcy5kYXRhIDogW10pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoZGF0YTogYW55LCBmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCAmJiBmaWVsZC5zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gZGF0YVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICByZXN1bHQgPSAoaXRlbSAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seShmaWVsZDogRmllbGQpOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHkgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZWFkb25seTtcclxuICB9XHJcblxyXG4gIGlzVHlwZU51bWJlcih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ251bWJlcic7XHJcbiAgfVxyXG5cclxuICBpc051bWJlcihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICB9XHJcblxyXG4gIGlzQm9vbGVhbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlQnV0dG9uKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUYWcoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhwb3J0QXNTZXJ2aWNlOiBFeHBvcnRBc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2VcclxuICApIHtcclxuICAgIC8vIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb29raWVzLmNoZWNrKHRoaXMuZ3JpZElEKSkge1xyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZ1N0ciA9IHRoaXMuY29va2llcy5nZXQodGhpcy5ncmlkSUQpO1xyXG4gICAgICAvLyByZXNldCBleHBpcmF0aW9uIGRhdGVcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgc2F2ZWRDb25maWdTdHIsIDM2NSk7XHJcblxyXG4gICAgICAvLyBwYXJzZSBjb29raWUgdmFsdWUgdG8gdHlwZXNjcmlwdCBjb25zdFxyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCkpIGFzIEdyaWRDb25maWc7XHJcbiAgICAgIGlmICh0eXBlb2Ygc2F2ZWRDb25maWcgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hTZWxlY3QgJiYgIXRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCAmJiB0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlVHJlZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrQ2hlY2tib3hTdGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGFUYWJsZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwb3J0RXZlbnQuc3Vic2NyaWJlKChjb25maWc6IEdyaWRFeHBDb25maWcpID0+IHtcclxuXHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmV4cG9ydFR5cGUpIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUGRmOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZihjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhzbHg6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoY29uZmlnLmZpbGVOYW1lKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Qbmc6XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydFRvUG5nKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogQ29udmVydCB0cmVlIHRvIGxpc3QgaWYgZXhwYW5kYWJsZSAqL1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICBjb25zdCBjb2VyY2VEYXRhID0gdGhpcy5kYXRhIGFzIGFueVtdO1xyXG4gICAgICBjb2VyY2VEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBPZkV4cGFuZGVkRGF0YVtpdGVtLmtleV0gPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogRXhwYW5kYWJsZSBSb3dzICovXHJcbiAgY29udmVydFRyZWVUb0xpc3Qocm9vdDogb2JqZWN0KTogYW55W10ge1xyXG4gICAgY29uc3Qgc3RhY2s6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBhcnJheTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2goeyAuLi5yb290LCBsZXZlbDogMCwgZXhwYW5kOiBmYWxzZSB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsgLi4ubm9kZS5jaGlsZHJlbltpXSwgbGV2ZWw6IG5vZGUubGV2ZWwgKyAxLCBleHBhbmQ6IGZhbHNlLCBwYXJlbnQ6IG5vZGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgYXJyYXk6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIWhhc2hNYXBbbm9kZS5rZXldKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZS5rZXldID0gdHJ1ZTtcclxuICAgICAgYXJyYXkucHVzaChub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxhcHNlKGFycmF5OiBhbnlbXSwgZGF0YTogYW55LCAkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZGF0YS5jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuZmluZChhID0+IGEua2V5ID09PSBkLmtleSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZShhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VHJlZUNoYW5nZSgkZXZlbnQsIGl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCB0aGlzLmRhdGEsIGl0ZW0ua2V5KTtcclxuICAgIHRoaXMub25DaGVja2JveENoYW5nZSgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVHJlZUNoZWNrYm94ZXMgKCRldmVudDogYm9vbGVhbiwgYXJyYXk6IGFueSwga2V5OiBhbnkpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5rZXkgPT09IGtleSkge1xyXG4gICAgICAgICAgdGhpcy5nZXROb2RlKGtleSkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gJGV2ZW50O1xyXG4gICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWVDaGVja2JveGVzKCRldmVudCwgYywgYy5rZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJlZUNoZWNrYm94ZXMoJGV2ZW50LCBkLCBrZXkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGFycmF5LmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgYXJyYXkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlKGtleSkuc2VsZWN0ZWQgPSAkZXZlbnQ7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShrZXk6IGFueSkge1xyXG4gICAgbGV0IHRlc3QgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKG4gPT4gbi5kYXRhLmtleSA9PT0ga2V5KTtcclxuICAgIHJldHVybiB0ZXN0ID8gdGVzdFswXSA6IHtzZWxlY3RlZDogZmFsc2V9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgZWxlbWVudElkOiB0aGlzLmdyaWRJRCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLnNhdmUoZXhwb3J0QXNDb25maWcsIGZpbGVOYW1lICsgJ19leHBvcnRfJyArIERhdGUubm93KCkpO1xyXG4gICAgICB0aGlzLmZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydFRvRXhjZWwoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRvRXhwb3J0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmVkaXRUZW1wbGF0ZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaXRlbVRvRXhwb3J0W2ZpZWxkLmRpc3BsYXldID0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dC5leHBvcnRWYWx1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhVG9FeHBvcnQucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leGNlbFNlcnZpY2UuZXhwb3J0QXNFeGNlbEZpbGUoZGF0YVRvRXhwb3J0LCBmaWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZihmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcganNQREYoKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlNlbGVjdDpcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnTU1NTSBkZCB5eXl5JykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChpdGVtW2ZpZWxkLnByb3BlcnR5XS5jb250ZXh0LmV4cG9ydFZhbHVlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByb3dzLnB1c2goaXRlbVRvRXhwb3J0KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgdGhlbWU6ICdzdHJpcGVkJyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogNSB9LFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICBjb2x1bW5zXHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2Muc2F2ZShmaWxlTmFtZSArICdfZXhwb3J0XycgKyBEYXRlLm5vdygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbGlja1JvdyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aVNlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSAhPT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSlcclxuICAgICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gZWxlbS5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZCA9ICF0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICB9XHJcblxyXG4gIGRibENsaWNrUm93KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vbmRsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==