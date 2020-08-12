/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { ExportAsService } from 'ngx-export-as';
import * as i0 from "@angular/core";
import * as i1 from "ngx-export-as";
/** @type {?} */
var moment = moment_;
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
import { CeldType } from '../enums/celdType.enum';
import { TemplateType } from '../enums/templateType.enum';
var UtilService = /** @class */ (function () {
    function UtilService(exportAsService) {
        this.exportAsService = exportAsService;
        this.fileName = '';
        this.elemID = '';
        this.exportCompanyName = 'Company Name';
        this.exportUserName = 'User Name';
        this.exportTitle = '';
        this.exportCompanyLogoUrl = 'assets/PToB_logo.png';
        this.exportTableCustomWidth = null;
        this.exportTableCustomHeight = null;
        this._exportCompleted = new Subject();
        this.exportCompleted = this._exportCompleted.asObservable();
        this.cmacsPdfImages = {
            checkboxEmpty: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAB+SURBVEhL7ZbRCoAwCEX7/z/c68QH9xPGhb0YQmUWUR4YbODuYb64RR/kRzJmViLS1lpo4S4yPIwMRWOMeYqDDE9oZL33ubuOl2VkaEMWXlbJTlOyFEqWQslSeJcsc8RgiG4xMgw8EZmnOMjYHZ4ARXgh2hBZh78Fd/NVmeoKcvHOkd9CE50AAAAASUVORK5CYII=',
            checkboxIndeterminate: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAACISURBVEhL7ZYxCsAgDEV7np6xF3VVHOIlUr50kCagVVtomwcZhJhHXL4LP8xPhTFGDiGwc66rvPd5hoYQopGIjlM/KSVVKoTYbBbY9IwQ4klmoc2qCtftWpWYMGPCWpWYMGPCWpW8QzhCk3BmPGmzhBChifAcpTmAARpHvhi4q8mAKryTrwuZd8TadLIlxV8gAAAAAElFTkSuQmCC',
            checkboxSelected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAE4SURBVEhL1ZZPSgMxHEbnOvYC4jU8jnWpuy69hl135cqN4Aw4BbUi7UJxKbgSnD8/88YMJkGGJJMO+OCjaZr5HpkukkwUrUpV1/JVVUlDJ92QMfhrUcrgyPaxEzc4Mnfy7v5ZivVGrq7zqOTlputwey0RC562L907HQMdrswS5eWjXjqeQnWZ3ZaIraeCLrP7/4g+PkVe3/UXg6QiJMcXIodnIg9velKTTNRLZqc/QcZcT7DoZqsHBq6ELJ1Hg0Q8TMnJpZ5Q+EjAW8QfbJYh85VA1I7IgcrRuZ8EgkRAGZLZ3F8CwSKYL23JYqV/GCBKBL2MTx+iRXC70wMPRolCGBSlPCboMrst0WQHH2FBoY5jth4TrgGuhEx3OZnsusU7ZbCPndFJN3SinqZtpW6absGY0EHXLyLfIjpzYqgNw6oAAAAASUVORK5CYII='
        };
        this.imagesLoaded = 0;
        this.images = [];
    }
    /**
     * @return {?}
     */
    UtilService.prototype.uuidv4 = /**
     * @return {?}
     */
    function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            // tslint:disable-next-line: no-bitwise
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            // tslint:disable-next-line: triple-equals
            /** @type {?} */
            var v = c == 'x' ?
                // tslint:disable-next-line: no-bitwise
                r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    };
    /**
     * @param {?} txt
     * @param {?} font
     * @return {?}
     */
    UtilService.prototype.get_tex_size = /**
     * @param {?} txt
     * @param {?} font
     * @return {?}
     */
    function (txt, font) {
        /** @type {?} */
        var element = document.createElement('canvas');
        /** @type {?} */
        var context = element.getContext('2d');
        context.font = font;
        /** @type {?} */
        var tsize = {
            width: context.measureText(txt).width,
            // tslint:disable-next-line: radix
            height: parseInt(context.font)
        };
        return tsize;
    };
    /**
     * @param {?=} format
     * @param {?=} fileName
     * @param {?=} elemID
     * @param {?=} exportCompanyName
     * @param {?=} exportUserName
     * @param {?=} exportTitle
     * @param {?=} exportCompanyLogoUrl
     * @param {?=} exportTableCustomWidth
     * @param {?=} exportTableCustomHeight
     * @return {?}
     */
    UtilService.prototype.exportTable = /**
     * @param {?=} format
     * @param {?=} fileName
     * @param {?=} elemID
     * @param {?=} exportCompanyName
     * @param {?=} exportUserName
     * @param {?=} exportTitle
     * @param {?=} exportCompanyLogoUrl
     * @param {?=} exportTableCustomWidth
     * @param {?=} exportTableCustomHeight
     * @return {?}
     */
    function (format, fileName, elemID, exportCompanyName, exportUserName, exportTitle, exportCompanyLogoUrl, exportTableCustomWidth, exportTableCustomHeight) {
        if (format === void 0) { format = 'png'; }
        if (exportCompanyName === void 0) { exportCompanyName = 'Company Name'; }
        if (exportUserName === void 0) { exportUserName = 'User Name'; }
        if (exportTitle === void 0) { exportTitle = ''; }
        if (exportCompanyLogoUrl === void 0) { exportCompanyLogoUrl = 'assets/PToB_logo.png'; }
        if (exportTableCustomWidth === void 0) { exportTableCustomWidth = null; }
        if (exportTableCustomHeight === void 0) { exportTableCustomHeight = null; }
        this.fileName = fileName;
        this.elemID = elemID;
        this.exportCompanyName = exportCompanyName;
        this.exportUserName = exportUserName;
        this.exportTitle = exportTitle;
        this.exportCompanyLogoUrl = exportCompanyLogoUrl;
        this.exportTableCustomWidth = exportTableCustomWidth;
        this.exportTableCustomHeight = exportTableCustomHeight;
        /** @type {?} */
        var tables = document.getElementById(elemID).getElementsByTagName('table');
        this.getTableCapture(tables, format);
    };
    /**
     * @param {?} imgData
     * @return {?}
     */
    UtilService.prototype.initExportToPdf = /**
     * @param {?} imgData
     * @return {?}
     */
    function (imgData) {
        var _this = this;
        /** @type {?} */
        var getLogo = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var canvasL = document.createElement('canvas');
            /** @type {?} */
            var ctx = canvasL.getContext('2d');
            canvasL.height = imgLogo.height;
            canvasL.width = imgLogo.width;
            ctx.drawImage(imgLogo, 0, 0);
            /** @type {?} */
            var logo = canvasL.toDataURL('image/PNG');
            _this.saveImageToPdf(logo, imgData);
        });
        /** @type {?} */
        var imgLogo = new Image();
        imgLogo.crossOrigin = "Anonymous";
        imgLogo.onload = getLogo;
        imgLogo.src = this.exportCompanyLogoUrl;
    };
    /**
     * @param {?} logoData
     * @param {?} imgData
     * @return {?}
     */
    UtilService.prototype.saveImageToPdf = /**
     * @param {?} logoData
     * @param {?} imgData
     * @return {?}
     */
    function (logoData, imgData) {
        var _this = this;
        /** @type {?} */
        var cutImageUp = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var doc = new jsPDF('l', 'mm', 'a4', 1);
            /** @type {?} */
            var imgProps = ((/** @type {?} */ (doc))).getImageProperties(imgData);
            /** @type {?} */
            var cuts = Math.trunc(imgProps.height / 2080) + 1;
            /** @type {?} */
            var pdfWidth = _this.exportTableCustomWidth ? _this.exportTableCustomWidth : doc.internal.pageSize.getWidth() - 2 * 15;
            /** @type {?} */
            var pdfHeight = (1500 * pdfWidth) / imgProps.width;
            if (_this.exportTableCustomHeight) {
                pdfHeight = (_this.exportTableCustomHeight * pdfWidth) / imgProps.width;
            }
            for (var y = 0; y < cuts; y++) {
                /** @type {?} */
                var canvas = document.createElement('canvas');
                canvas.width = imgProps.width;
                canvas.height = 2080;
                /** @type {?} */
                var context = canvas.getContext('2d');
                context.drawImage(image, 0, y * 2080, imgProps.width, 2080, 0, 0, canvas.width, canvas.height);
                /** @type {?} */
                var img = canvas.toDataURL("image/PNG");
                if (y) {
                    doc.addPage();
                }
                doc.addImage(img, 'PNG', 15, 35, pdfWidth, pdfHeight, undefined, 'FAST');
            }
            _this.addFooters(doc, logoData);
            /** @type {?} */
            var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + _this.fileName + '.pdf';
            _this._exportCompleted.next(true);
            doc.save(filenameFormatted);
        });
        /** @type {?} */
        var image = new Image();
        image.onload = cutImageUp;
        image.src = imgData;
    };
    /**
     * @param {?} doc
     * @param {?} logo
     * @return {?}
     */
    UtilService.prototype.addFooters = /**
     * @param {?} doc
     * @param {?} logo
     * @return {?}
     */
    function (doc, logo) {
        /** @type {?} */
        var pageCount = doc.internal.getNumberOfPages();
        /** @type {?} */
        var date = moment().format('MMMM DD, YYYY');
        doc.setFont('times');
        doc.setTextColor(101, 108, 121);
        doc.setFontSize(9);
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.text(this.exportCompanyName, 15, 8, {
                align: 'left'
            });
            doc.text(this.exportUserName, doc.internal.pageSize.width - 15, 8, {
                align: 'right'
            });
            doc.addImage(logo, 'PNG', 15, 14, 40, 5, undefined, 'FAST');
            doc.setFontType('bold');
            doc.text(this.exportTitle, 15, 30, {
                align: 'left'
            });
            doc.setFontType('normal');
            doc.text('Page ' + String(i) + ' of ' + String(pageCount), 15, doc.internal.pageSize.height - 10, {
                align: 'left'
            });
            doc.text(date, doc.internal.pageSize.width - 15, doc.internal.pageSize.height - 10, {
                align: 'right'
            });
        }
    };
    /**
     * @param {?} targetElem
     * @return {?}
     */
    UtilService.prototype.setInlineStyles = /**
     * @param {?} targetElem
     * @return {?}
     */
    function (targetElem) {
        var e_1, _a;
        /** @type {?} */
        var transformProperties = [
            'fill',
            'color',
            'font-size',
            'stroke',
            'font'
        ];
        /** @type {?} */
        var svgElems = Array.from(targetElem.getElementsByTagName("svg"));
        /** @type {?} */
        var recurseElementChildren = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            var e_2, _a, e_3, _b;
            if (!node.style)
                return;
            /** @type {?} */
            var styles = getComputedStyle(node);
            try {
                for (var transformProperties_1 = tslib_1.__values(transformProperties), transformProperties_1_1 = transformProperties_1.next(); !transformProperties_1_1.done; transformProperties_1_1 = transformProperties_1.next()) {
                    var transformProperty = transformProperties_1_1.value;
                    node.style[transformProperty] = styles[transformProperty];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (transformProperties_1_1 && !transformProperties_1_1.done && (_a = transformProperties_1.return)) _a.call(transformProperties_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                for (var _c = tslib_1.__values(Array.from(node.childNodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var child = _d.value;
                    recurseElementChildren((/** @type {?} */ (child)));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
        try {
            for (var svgElems_1 = tslib_1.__values(svgElems), svgElems_1_1 = svgElems_1.next(); !svgElems_1_1.done; svgElems_1_1 = svgElems_1.next()) {
                var svgElement = svgElems_1_1.value;
                recurseElementChildren(svgElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (svgElems_1_1 && !svgElems_1_1.done && (_a = svgElems_1.return)) _a.call(svgElems_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} tables
     * @param {?} format
     * @return {?}
     */
    UtilService.prototype.getTableCapture = /**
     * @param {?} tables
     * @param {?} format
     * @return {?}
     */
    function (tables, format) {
        var _this = this;
        tables[0].id = this.elemID + '-table-header';
        this.setInlineStyles(tables[0]);
        /** @type {?} */
        var options = {
            background: 'white',
            scale: 3,
            allowTaint: true,
            scrollY: -window.scrollY,
            imageTimeout: 0,
            useCORS: true
        };
        /** @type {?} */
        var exportAsConfig = {
            type: 'png',
            // the type you want to download
            elementId: tables[0].id,
            options: options
        };
        /** @type {?} */
        var interval = setInterval((/**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line: max-line-length
            _this.exportAsService.get(exportAsConfig).subscribe((/**
             * @param {?} header
             * @return {?}
             */
            function (header) {
                if (tables.length > 1) {
                    tables[1].id = _this.elemID + '-table-body';
                    _this.setInlineStyles(tables[1]);
                    /** @type {?} */
                    var exportAsConfig_1 = {
                        type: 'png',
                        // the type you want to download
                        elementId: tables[1].id,
                        options: options
                    };
                    _this.exportAsService.get(exportAsConfig_1).subscribe((/**
                     * @param {?} body
                     * @return {?}
                     */
                    function (body) {
                        _this.combineTwoImages(header, body, format);
                    }));
                }
                else {
                    /** @type {?} */
                    var logDimensions = (/**
                     * @return {?}
                     */
                    function () {
                        console.log('Image Width', img_1.width, 'Image Height', img_1.height);
                    });
                    /** @type {?} */
                    var img_1 = new Image();
                    img_1.onload = logDimensions;
                    img_1.src = header;
                    if (format === 'png') {
                        _this.exportAsService.contentToBlob(header).subscribe((/**
                         * @param {?} blob
                         * @return {?}
                         */
                        function (blob) {
                            /** @type {?} */
                            var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + _this.fileName + '.png';
                            _this.exportAsService.downloadFromBlob(blob, filenameFormatted);
                            _this._exportCompleted.next(true);
                        }));
                    }
                    else {
                        _this.initExportToPdf(header);
                    }
                }
            }));
            clearInterval(interval);
        }), 100);
    };
    /**
     * @param {?} img1
     * @param {?} img2
     * @param {?} format
     * @return {?}
     */
    UtilService.prototype.combineTwoImages = /**
     * @param {?} img1
     * @param {?} img2
     * @param {?} format
     * @return {?}
     */
    function (img1, img2, format) {
        var _this = this;
        /** @type {?} */
        var mergeImages = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.imagesLoaded++;
            if (_this.imagesLoaded < 2) {
                return;
            }
            _this.imagesLoaded = 0;
            /** @type {?} */
            var canvas = document.createElement('canvas');
            canvas.width = image1.width;
            canvas.height = image1.height + image2.height;
            /** @type {?} */
            var context = canvas.getContext('2d');
            context.drawImage(image1, 0, 0, image1.width, image1.height);
            context.drawImage(image2, 0, image1.height, image2.width, image2.height);
            /** @type {?} */
            var combined = canvas.toDataURL('image/png');
            console.log('Image Width', canvas.width, 'Image Height', canvas.height);
            if (format === 'png') {
                _this.exportAsService.contentToBlob(combined).subscribe((/**
                 * @param {?} blob
                 * @return {?}
                 */
                function (blob) {
                    /** @type {?} */
                    var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + _this.fileName + '.png';
                    _this.exportAsService.downloadFromBlob(blob, filenameFormatted);
                    _this._exportCompleted.next(true);
                }));
            }
            else {
                _this.initExportToPdf(combined);
            }
        });
        /** @type {?} */
        var image1 = new Image();
        image1.onload = mergeImages;
        image1.src = img1;
        /** @type {?} */
        var image2 = new Image();
        image2.onload = mergeImages;
        image2.src = img2;
    };
    // Export table version 2
    // Export table version 2
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    UtilService.prototype.exportTablev2 = 
    // Export table version 2
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    function (exportConfig) {
        var _this = this;
        /** @type {?} */
        var doc = new jsPDF('l', 'mm', 'a4', 1);
        /** @type {?} */
        var columns = this.getColumns(exportConfig);
        /** @type {?} */
        var rows = this.getRows(exportConfig);
        if (!!exportConfig.exportCompanyLogoUrl)
            this.exportCompanyLogoUrl = exportConfig.exportCompanyLogoUrl;
        if (!!exportConfig.exportCompanyName)
            this.exportCompanyName = exportConfig.exportCompanyName;
        if (!!exportConfig.exportUserName)
            this.exportUserName = exportConfig.exportUserName;
        if (!!exportConfig.fileName)
            this.fileName = exportConfig.fileName;
        if (!!exportConfig.exportTitle)
            this.exportTitle = exportConfig.exportTitle;
        doc.autoTable({
            head: [columns],
            body: rows,
            theme: 'plain',
            headStyles: {
                font: 'times',
                fontStyle: 'normal',
                fillColor: '#f6f7fb',
                textColor: '#656c79',
                fontSize: 11
            },
            bodyStyles: {
                font: 'times',
                fontStyle: 'normal',
                fillColor: '#ffffff',
                textColor: '#97a0ae',
                fontSize: 11
            },
            columnStyles: exportConfig.columnStyles,
            margin: { top: 35, bottom: 30, left: 15, right: 15 },
            didDrawCell: (/**
             * @param {?} docdata
             * @return {?}
             */
            function (docdata) {
                /** @type {?} */
                var textPos = docdata.cell.textPos;
                /** @type {?} */
                var dim = docdata.cell.height - docdata.cell.padding('vertical');
                /** @type {?} */
                var customWidth = exportConfig.columnStyles && exportConfig.columnStyles[docdata.column.index]
                    && exportConfig.columnStyles[docdata.column.index].contentWidth ? exportConfig.columnStyles[docdata.column.index].contentWidth : dim;
                /** @type {?} */
                var columnIdx = exportConfig.checkboxSelect ? docdata.column.index - 1 : docdata.column.index;
                /* Draw checkboxes header */
                if (exportConfig.checkboxSelect && docdata.section === 'head' && docdata.column.index === '0') {
                    if (exportConfig.selectedItems.length === exportConfig.data.length) {
                        doc.addImage(_this.cmacsPdfImages.checkboxSelected, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxSelected', "FAST");
                    }
                    else if (!exportConfig.selectedItems.length) {
                        doc.addImage(_this.cmacsPdfImages.checkboxEmpty, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxEmpty', "FAST");
                    }
                    else {
                        doc.addImage(_this.cmacsPdfImages.checkboxIndeterminate, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxIndeterminate', "FAST");
                    }
                }
                /* Draw checkboxes body */
                if (exportConfig.checkboxSelect && docdata.section === 'body' && docdata.column.index === '0') {
                    /** @type {?} */
                    var row = exportConfig.data[docdata.row.index];
                    /** @type {?} */
                    var idx = exportConfig.selectedItems.indexOf(row[exportConfig.config.fieldId]);
                    if (idx < 0) {
                        doc.addImage(_this.cmacsPdfImages.checkboxEmpty, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxEmpty', "FAST");
                    }
                    else {
                        doc.addImage(_this.cmacsPdfImages.checkboxSelected, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxSelected', "FAST");
                    }
                }
                /* Draw header templates */
                if (exportConfig.config.fields[columnIdx] && exportConfig.config.fields[columnIdx].template && (docdata.section === 'head')) {
                    /** @type {?} */
                    var img = document.getElementById(exportConfig.elemID + 'column' + columnIdx);
                    _this.setInlineStyles(img);
                    _this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
                }
                /* Draw body templates and tags */
                if (exportConfig.config.fields[columnIdx]
                    && (exportConfig.config.fields[columnIdx].celdType === CeldType.TemplateRef
                        || exportConfig.config.fields[columnIdx].celdType === CeldType.Tag)
                    && (docdata.section === 'body')) {
                    /** @type {?} */
                    var img = document.getElementById(exportConfig.elemID + 'column' + columnIdx + 'row' + docdata.row.index);
                    if (img) {
                        _this.setInlineStyles(img);
                        _this.images.push({ src: img, x: textPos.x, y: textPos.y, width: customWidth, height: dim });
                    }
                }
                /* Draw borders */
                if (docdata.section === 'body') {
                    /** @type {?} */
                    var s = docdata.cell.styles;
                    s.lineColor = '#DEE0E5';
                    s.lineWidth = 0.1;
                    doc.line(docdata.cell.x, docdata.table.cursor.y, docdata.cell.x + docdata.cell.width, docdata.table.cursor.y, s);
                }
            }),
        });
        if (this.images.length) {
            this.renderTemplate(doc, exportConfig.data);
        }
        else {
            this.exportToPdfV2(doc);
        }
    };
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    UtilService.prototype.getColumns = /**
     * @param {?} exportConfig
     * @return {?}
     */
    function (exportConfig) {
        /** @type {?} */
        var columns = [];
        if (exportConfig.checkboxSelect) {
            columns.push('');
        }
        exportConfig.config.fields.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.celdType === CeldType.Default
            || item.celdType === CeldType.Tag
            || item.celdType === CeldType.TemplateRef; })).forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            columns.push(field.display);
        }));
        return columns;
    };
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    UtilService.prototype.getRows = /**
     * @param {?} exportConfig
     * @return {?}
     */
    function (exportConfig) {
        /** @type {?} */
        var rows = [];
        exportConfig.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemToExport = [];
            if (exportConfig.checkboxSelect) {
                itemToExport.push('');
            }
            // tslint:disable-next-line: no-shadowed-variable
            exportConfig.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.celdType === CeldType.Default ||
                item.celdType === CeldType.TemplateRef || item.celdType === CeldType.Tag; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field.celdType === CeldType.TemplateRef || field.celdType === CeldType.Tag) {
                    itemToExport.push('');
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
                                itemToExport.push(selectItem[field.select.label]);
                            }
                            break;
                        case TemplateType.Date:
                            itemToExport.push(exportConfig.datePipe.transform(item[field.property], 'MMMM dd yyyy'));
                            break;
                        case TemplateType.Time:
                            itemToExport.push(exportConfig.datePipe.transform(item[field.property], 'h:mm a'));
                            break;
                        default:
                            itemToExport.push(item[field.property]);
                            break;
                    }
                }
            }));
            rows.push(itemToExport);
        }));
        return rows;
    };
    /**
     * @param {?} doc
     * @param {?} data
     * @return {?}
     */
    UtilService.prototype.renderTemplate = /**
     * @param {?} doc
     * @param {?} data
     * @return {?}
     */
    function (doc, data) {
        var _this = this;
        doc.setPage(1);
        /** @type {?} */
        var img = this.images.pop();
        img.src.style.width = 'fit-content';
        /** @type {?} */
        var options = {
            background: null,
            scale: 3,
            allowTaint: true,
            scrollY: -window.pageYOffset,
            scrollX: 0,
            imageTimeout: 0,
            useCORS: true
        };
        html2canvas(img.src, options).then((/**
         * @param {?} canvas
         * @return {?}
         */
        function (canvas) {
            /** @type {?} */
            var combined = canvas.toDataURL('image/png');
            doc.addImage(combined, 'PNG', img.x, img.y, img.width, img.height, img.src.id, "FAST");
            img.src.style.width = 'inherited';
            if (_this.images.length) {
                _this.renderTemplate(doc, data);
            }
            else {
                _this.exportToPdfV2(doc);
            }
        }));
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    UtilService.prototype.exportToPdfV2 = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        var _this = this;
        /** @type {?} */
        var getLogo = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var canvasL = document.createElement('canvas');
            /** @type {?} */
            var ctx = canvasL.getContext('2d');
            canvasL.height = imgLogo.height;
            canvasL.width = imgLogo.width;
            ctx.drawImage(imgLogo, 0, 0);
            /** @type {?} */
            var logo = canvasL.toDataURL('image/PNG');
            _this.addFooters(doc, logo);
            /** @type {?} */
            var filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + _this.fileName + '.pdf';
            _this._exportCompleted.next(true);
            doc.save(filenameFormatted);
        });
        /** @type {?} */
        var imgLogo = new Image();
        imgLogo.crossOrigin = "Anonymous";
        imgLogo.onload = getLogo;
        imgLogo.src = this.exportCompanyLogoUrl;
    };
    UtilService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UtilService.ctorParameters = function () { return [
        { type: ExportAsService }
    ]; };
    /** @nocollapse */ UtilService.ngInjectableDef = i0.defineInjectable({ factory: function UtilService_Factory() { return new UtilService(i0.inject(i1.ExportAsService)); }, token: UtilService, providedIn: "root" });
    return UtilService;
}());
export { UtilService };
if (false) {
    /** @type {?} */
    UtilService.prototype.fileName;
    /** @type {?} */
    UtilService.prototype.elemID;
    /** @type {?} */
    UtilService.prototype.exportCompanyName;
    /** @type {?} */
    UtilService.prototype.exportUserName;
    /** @type {?} */
    UtilService.prototype.exportTitle;
    /** @type {?} */
    UtilService.prototype.exportCompanyLogoUrl;
    /** @type {?} */
    UtilService.prototype.exportTableCustomWidth;
    /** @type {?} */
    UtilService.prototype.exportTableCustomHeight;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype._exportCompleted;
    /** @type {?} */
    UtilService.prototype.exportCompleted;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.cmacsPdfImages;
    /** @type {?} */
    UtilService.prototype.imagesLoaded;
    /** @type {?} */
    UtilService.prototype.images;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxlQUFlLENBQUM7Ozs7SUFDMUQsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQXFCRSxxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBbEJwRCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUM3QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM5QywyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRELG1CQUFjLEdB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QUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNO1lBQy9GLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQTs7WUFFSyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDM0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDMUMsQ0FBQzs7Z0JBOWRGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Z0JBUHZCLGVBQWU7OztzQkFKeEI7Q0EyZUMsQUFoZUQsSUFnZUM7U0EvZFksV0FBVzs7O0lBRXRCLCtCQUFjOztJQUNkLDZCQUFZOztJQUNaLHdDQUFtQzs7SUFDbkMscUNBQTZCOztJQUM3QixrQ0FBaUI7O0lBQ2pCLDJDQUE4Qzs7SUFDOUMsNkNBQThCOztJQUM5Qiw4Q0FBK0I7Ozs7O0lBRS9CLHVDQUE0RDs7SUFDNUQsc0NBQThEOzs7OztJQUU5RCxxQ0FJRTs7SUE0TkYsbUNBQWlCOztJQXFDakIsNkJBQVk7Ozs7O0lBL1BBLHNDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcblxyXG4gIGZpbGVOYW1lID0gJyc7XHJcbiAgZWxlbUlEID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJztcclxuICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnO1xyXG4gIGV4cG9ydFRpdGxlID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0Q29tcGxldGVkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIGV4cG9ydENvbXBsZXRlZCA9IHRoaXMuX2V4cG9ydENvbXBsZXRlZC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBjbWFjc1BkZkltYWdlcyA9IHtcclxuICAgIGNoZWNrYm94RW1wdHk6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWFDQVlBQUFCR2lDZndBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBQitTVVJCVkVoTDdaYlJDb0F3Q0VYNy96L2M2OFFIOXhQR2hiMFlRbVVXVVI0WWJPRHVZYjY0UlIva1J6Sm1WaUxTMWxwbzRTNHlQSXdNUldPTWVZcURERTlvWkwzM3VidU9sMlZrYUVNV1hsYkpUbE95RkVxV1FzbFNlSmNzYzhSZ2lHNHhNZ3c4RVptbk9NallIWjRBUlhnaDJoQlpoNzhGZC9OVm1lb0tjdkhPa2Q5Q0U1MEFBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgIGNoZWNrYm94SW5kZXRlcm1pbmF0ZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYUNBWUFBQUNrVkR5SkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFDSVNVUkJWRWhMN1pZeENzQWdERVY3bnA2eEYzVlZIT0lsVXI1MGtDYWdWVnRvbXdjWmhKaEhYTDRMUDh4UGhURkdEaUd3YzY2cnZQZDVob1lRb3BHSWpsTS9LU1ZWS29UWWJCYlk5SXdRNGtsbW9jMnFDdGZ0V3BXWU1HUENXcFdZTUdQQ1dwVzhRemhDazNCbVBHbXpoQkNoaWZBY3BUbUFBUnBIdmhpNHE4bUFLcnlUcnd1WmQ4VGFkTElseFY4Z0FBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgY2hlY2tib3hTZWxlY3RlZDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYkNBWUFBQUJpRnA5ckFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFFNFNVUkJWRWhMMVpaUFNnTXhIRWJuT3ZZQzRqVThqbldwdXk2OWhsMTM1Y3FONEF3NEJiVWk3VUp4S2JnU25EOC84OFlNSmtHR0pKTU8rT0NqYVpyNUhwa3Vra3dVclVwVjEvSlZWVWxESjkyUU1maHJVY3JneVBheEV6YzRNbmZ5N3Y1Wml2VkdycTd6cU9UbHB1dHdleTBSQzU2Mkw5MDdIUU1kcnN3UzVlV2pYanFlUW5XWjNaYUlyYWVDTHJQNy80ZytQa1ZlMy9VWGc2UWlKTWNYSW9kbklnOXZlbEtUVE5STFpxYy9RY1pjVDdEb1pxc0hCcTZFTEoxSGcwUThUTW5KcFo1UStFakFXOFFmYkpZaDg1VkExSTdJZ2NyUnVaOEVna1JBR1pMWjNGOEN3U0tZTDIzSllxVi9HQ0JLQkwyTVR4K2lSWEM3MHdNUFJvbENHQlNsUENib01yc3QwV1FISDJGQm9ZNWp0aDRUcmdHdWhFeDNPWm5zdXNVN1piQ1BuZEZKTjNTaW5xWnRwVzZhYnNHWTBFSFhMeUxmSWpwellxZ053Nm9BQUFBQVNVVk9SSzVDWUlJPSdcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLCApIHsgfVxyXG5cclxuICB1dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgY29uc3QgdiA9IGMgPT0gJ3gnID9cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldF90ZXhfc2l6ZSh0eHQsIGZvbnQpOiBhbnkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodHh0KS53aWR0aCxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByYWRpeFxyXG4gICAgICBoZWlnaHQ6IHBhcnNlSW50KGNvbnRleHQuZm9udClcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHNpemU7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUYWJsZShcclxuICAgIGZvcm1hdCA9ICdwbmcnLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgICBlbGVtSUQsXHJcbiAgICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnLFxyXG4gICAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJyxcclxuICAgIGV4cG9ydFRpdGxlID0gJycsXHJcbiAgICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbCxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbCkge1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydFVzZXJOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydFRpdGxlO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gZXhwb3J0VGFibGVDdXN0b21XaWR0aDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBleHBvcnRUYWJsZUN1c3RvbUhlaWdodDtcclxuXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG4gICAgdGhpcy5nZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXRFeHBvcnRUb1BkZihpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuc2F2ZUltYWdlVG9QZGYobG9nbywgaW1nRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvZ28uY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nTG9nby5vbmxvYWQgPSBnZXRMb2dvO1xyXG4gICAgaW1nTG9nby5zcmMgPSB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUltYWdlVG9QZGYobG9nb0RhdGEsIGltZ0RhdGEpIHtcclxuICAgIGNvbnN0IGN1dEltYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgICBjb25zdCBpbWdQcm9wcyA9ICg8YW55PmRvYykuZ2V0SW1hZ2VQcm9wZXJ0aWVzKGltZ0RhdGEpO1xyXG4gICAgICBjb25zdCBjdXRzID0gTWF0aC50cnVuYyhpbWdQcm9wcy5oZWlnaHQgLyAyMDgwKSArIDE7XHJcbiAgICAgIGNvbnN0IHBkZldpZHRoID0gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID8gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoIDogZG9jLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAyICogMTU7XHJcblxyXG4gICAgICBsZXQgcGRmSGVpZ2h0ID0gKDE1MDAgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQpIHtcclxuICAgICAgICBwZGZIZWlnaHQgPSAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY3V0czsgeSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwODA7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCB5ICogMjA4MCwgaW1nUHJvcHMud2lkdGgsIDIwODAsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL1BOR1wiKTtcclxuICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jLmFkZEltYWdlKGltZywgJ1BORycsIDE1LCAzNSwgcGRmV2lkdGgsIHBkZkhlaWdodCwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZEZvb3RlcnMoZG9jLCBsb2dvRGF0YSk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGN1dEltYWdlVXA7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWdEYXRhO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9vdGVycyhkb2MsIGxvZ28pIHtcclxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERELCBZWVlZJyk7XHJcbiAgICBkb2Muc2V0Rm9udCgndGltZXMnKTtcclxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMTAxLCAxMDgsIDEyMSk7XHJcbiAgICBkb2Muc2V0Rm9udFNpemUoOSk7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBwYWdlQ291bnQ7IGkrKykge1xyXG4gICAgICBkb2Muc2V0UGFnZShpKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRDb21wYW55TmFtZSwgMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFVzZXJOYW1lLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MuYWRkSW1hZ2UobG9nbywgJ1BORycsIDE1LCAxNCwgNDAsIDUsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdib2xkJyk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VGl0bGUsIDE1LCAzMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnbm9ybWFsJyk7XHJcbiAgICAgIGRvYy50ZXh0KCdQYWdlICcgKyBTdHJpbmcoaSkgKyAnIG9mICcgKyBTdHJpbmcocGFnZUNvdW50KSwgMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KGRhdGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lU3R5bGVzKHRhcmdldEVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtUHJvcGVydGllcyA9IFtcclxuICAgICAgJ2ZpbGwnLFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAnZm9udC1zaXplJyxcclxuICAgICAgJ3N0cm9rZScsXHJcbiAgICAgICdmb250J1xyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgc3ZnRWxlbXMgPSBBcnJheS5mcm9tKHRhcmdldEVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIikpO1xyXG4gICAgY29uc3QgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbiA9IChub2RlOiBTVkdTVkdFbGVtZW50IHwgSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKCFub2RlLnN0eWxlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgbGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICAgIGZvciAobGV0IHRyYW5zZm9ybVByb3BlcnR5IG9mIHRyYW5zZm9ybVByb3BlcnRpZXMpIHtcclxuICAgICAgICBub2RlLnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHN0eWxlc1t0cmFuc2Zvcm1Qcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihjaGlsZCBhcyBTVkdTVkdFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgc3ZnRWxlbWVudCBvZiBzdmdFbGVtcykge1xyXG4gICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKHN2Z0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KSB7XHJcbiAgICB0YWJsZXNbMF0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtaGVhZGVyJztcclxuICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKHRhYmxlc1swXSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgaW1hZ2VUaW1lb3V0OiAwLFxyXG4gICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgIGVsZW1lbnRJZDogdGFibGVzWzBdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgIG9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoaGVhZGVyID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0YWJsZXNbMV0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtYm9keSc7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMV0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGFibGVzWzFdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5lVHdvSW1hZ2VzKGhlYWRlciwgYm9keSwgZm9ybWF0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbG9nRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgaW1nLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICBpbWcub25sb2FkID0gbG9nRGltZW5zaW9ucztcclxuICAgICAgICAgIGltZy5zcmMgPSBoZWFkZXI7XHJcblxyXG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihoZWFkZXIpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGhlYWRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltYWdlc0xvYWRlZCA9IDA7XHJcbiAgY29tYmluZVR3b0ltYWdlcyhpbWcxLCBpbWcyLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IG1lcmdlSW1hZ2VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA8IDIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2UxLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UxLmhlaWdodCArIGltYWdlMi5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UxLCAwLCAwLCBpbWFnZTEud2lkdGgsIGltYWdlMS5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTIsIDAsIGltYWdlMS5oZWlnaHQsIGltYWdlMi53aWR0aCwgaW1hZ2UyLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGNhbnZhcy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGNvbWJpbmVkKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihjb21iaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMS5zcmMgPSBpbWcxO1xyXG5cclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltZzI7XHJcbiAgfVxyXG5cclxuICBpbWFnZXMgPSBbXTtcclxuXHJcbiAgLy8gRXhwb3J0IHRhYmxlIHZlcnNpb24gMlxyXG4gIGV4cG9ydFRhYmxldjIoXHJcbiAgICBleHBvcnRDb25maWdcclxuICAgICkge1xyXG5cclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1ucyhleHBvcnRDb25maWcpO1xyXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZ2V0Um93cyhleHBvcnRDb25maWcpO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsKVxyXG4gICAgICB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsID0gZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlOYW1lKVxyXG4gICAgICB0aGlzLmV4cG9ydENvbXBhbnlOYW1lID0gZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydFVzZXJOYW1lKVxyXG4gICAgICB0aGlzLmV4cG9ydFVzZXJOYW1lID0gZXhwb3J0Q29uZmlnLmV4cG9ydFVzZXJOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmZpbGVOYW1lKVxyXG4gICAgICB0aGlzLmZpbGVOYW1lID0gZXhwb3J0Q29uZmlnLmZpbGVOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydFRpdGxlKVxyXG4gICAgICB0aGlzLmV4cG9ydFRpdGxlID0gZXhwb3J0Q29uZmlnLmV4cG9ydFRpdGxlO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICBoZWFkOiBbY29sdW1uc10sXHJcbiAgICAgIGJvZHk6IHJvd3MsXHJcbiAgICAgIHRoZW1lOiAncGxhaW4nLFxyXG4gICAgICBoZWFkU3R5bGVzOiB7XHJcbiAgICAgICAgZm9udDogJ3RpbWVzJyxcclxuICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgIGZpbGxDb2xvcjogJyNmNmY3ZmInLFxyXG4gICAgICAgIHRleHRDb2xvcjogJyM2NTZjNzknLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMVxyXG4gICAgICB9LFxyXG4gICAgICBib2R5U3R5bGVzOiB7XHJcbiAgICAgICAgZm9udDogJ3RpbWVzJyxcclxuICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJyM5N2EwYWUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMVxyXG4gICAgICB9LFxyXG4gICAgICBjb2x1bW5TdHlsZXM6IGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXMsXHJcbiAgICAgIG1hcmdpbjogeyB0b3A6IDM1LCBib3R0b206IDMwLCBsZWZ0OiAxNSwgcmlnaHQ6IDE1IH0sXHJcbiAgICAgIGRpZERyYXdDZWxsOiAoZG9jZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciB0ZXh0UG9zID0gZG9jZGF0YS5jZWxsLnRleHRQb3M7XHJcbiAgICAgICAgdmFyIGRpbSA9IGRvY2RhdGEuY2VsbC5oZWlnaHQgLSBkb2NkYXRhLmNlbGwucGFkZGluZygndmVydGljYWwnKTtcclxuICAgICAgICBjb25zdCBjdXN0b21XaWR0aCA9IGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXMgJiYgZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlc1tkb2NkYXRhLmNvbHVtbi5pbmRleF1cclxuICAgICAgICAgICYmIGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXNbZG9jZGF0YS5jb2x1bW4uaW5kZXhdLmNvbnRlbnRXaWR0aCA/IGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXNbZG9jZGF0YS5jb2x1bW4uaW5kZXhdLmNvbnRlbnRXaWR0aCA6IGRpbTtcclxuICAgICAgICBjb25zdCBjb2x1bW5JZHggPSBleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QgPyBkb2NkYXRhLmNvbHVtbi5pbmRleCAtIDEgOiBkb2NkYXRhLmNvbHVtbi5pbmRleDtcclxuXHJcbiAgICAgIC8qIERyYXcgY2hlY2tib3hlcyBoZWFkZXIgKi9cclxuICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0ICYmIGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2hlYWQnICYmIGRvY2RhdGEuY29sdW1uLmluZGV4ID09PSAnMCcpIHtcclxuICAgICAgICAgIGlmIChleHBvcnRDb25maWcuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IGV4cG9ydENvbmZpZy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveFNlbGVjdGVkLCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hTZWxlY3RlZCcsIFwiRkFTVFwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIWV4cG9ydENvbmZpZy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveEVtcHR5LCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hFbXB0eScsIFwiRkFTVFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94SW5kZXRlcm1pbmF0ZSwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94SW5kZXRlcm1pbmF0ZScsIFwiRkFTVFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBEcmF3IGNoZWNrYm94ZXMgYm9keSAqL1xyXG4gICAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QgJiYgZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScgJiYgZG9jZGF0YS5jb2x1bW4uaW5kZXggPT09ICcwJykge1xyXG4gICAgICAgICAgY29uc3Qgcm93ID0gZXhwb3J0Q29uZmlnLmRhdGFbZG9jZGF0YS5yb3cuaW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgaWR4ID0gZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihyb3dbZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveEVtcHR5LCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hFbXB0eScsIFwiRkFTVFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94U2VsZWN0ZWQsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveFNlbGVjdGVkJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8qIERyYXcgaGVhZGVyIHRlbXBsYXRlcyAqL1xyXG4gICAgICAgIGlmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdICYmIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0udGVtcGxhdGUgJiYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2hlYWQnKSkge1xyXG4gICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cG9ydENvbmZpZy5lbGVtSUQgKyAnY29sdW1uJyArIGNvbHVtbklkeCk7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyhpbWcpO1xyXG4gICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh7IHNyYzogaW1nLCB4OiB0ZXh0UG9zLngsIHk6IHRleHRQb3MueSwgd2lkdGg6IGRpbSwgaGVpZ2h0OiBkaW0gfSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgIC8qIERyYXcgYm9keSB0ZW1wbGF0ZXMgYW5kIHRhZ3MgKi8gICAgICAgXHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF1cclxuICAgICAgICAgICYmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZlxyXG4gICAgICAgICAgfHwgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnKVxyXG4gICAgICAgICAgJiYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2JvZHknKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cG9ydENvbmZpZy5lbGVtSUQgKyAnY29sdW1uJyArIGNvbHVtbklkeCArICdyb3cnICsgZG9jZGF0YS5yb3cuaW5kZXgpO1xyXG4gICAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyhpbWcpO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHsgc3JjOiBpbWcsIHg6IHRleHRQb3MueCwgeTogdGV4dFBvcy55LCB3aWR0aDogY3VzdG9tV2lkdGgsIGhlaWdodDogZGltIH0pO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEcmF3IGJvcmRlcnMgKi9cclxuICAgICAgICBpZiAoZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScpIHtcclxuICAgICAgICAgIHZhciBzID0gZG9jZGF0YS5jZWxsLnN0eWxlcztcclxuICAgICAgICAgIHMubGluZUNvbG9yID0gJyNERUUwRTUnO1xyXG4gICAgICAgICAgcy5saW5lV2lkdGggPSAwLjE7XHJcbiAgICAgICAgICBkb2MubGluZShkb2NkYXRhLmNlbGwueCwgZG9jZGF0YS50YWJsZS5jdXJzb3IueSwgZG9jZGF0YS5jZWxsLnggKyBkb2NkYXRhLmNlbGwud2lkdGgsIGRvY2RhdGEudGFibGUuY3Vyc29yLnksIHMpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoZG9jLCBleHBvcnRDb25maWcuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4cG9ydFRvUGRmVjIoZG9jKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1ucyhleHBvcnRDb25maWcpIHtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgY29sdW1ucy5wdXNoKCcnKTtcclxuICAgIH1cclxuICAgIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHRcclxuICAgICAgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnXHJcbiAgICAgIHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldFJvd3MoZXhwb3J0Q29uZmlnKSB7XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcbiAgICBleHBvcnRDb25maWcuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKCcnKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZiB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYgfHwgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZykge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGV4cG9ydENvbmZpZy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goZXhwb3J0Q29uZmlnLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGUoZG9jLCBkYXRhKSB7XHJcbiAgICBkb2Muc2V0UGFnZSgxKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1hZ2VzLnBvcCgpO1xyXG4gICAgaW1nLnNyYy5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgIHNjcm9sbFg6IDAsXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGh0bWwyY2FudmFzKGltZy5zcmMsIG9wdGlvbnMpLnRoZW4oY2FudmFzID0+IHtcclxuICAgICAgY29uc3QgY29tYmluZWQgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICAgICAgZG9jLmFkZEltYWdlKGNvbWJpbmVkLCAnUE5HJywgaW1nLngsIGltZy55LCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIGltZy5zcmMuaWQsIFwiRkFTVFwiKTtcclxuICAgICAgaW1nLnNyYy5zdHlsZS53aWR0aCA9ICdpbmhlcml0ZWQnO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShkb2MsIGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VG9QZGZWMihkb2MpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvUGRmVjIoZG9jKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuYWRkRm9vdGVycyhkb2MsIGxvZ28pO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==