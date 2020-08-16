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
        var columns = (/** @type {?} */ ((/** @type {?} */ (exportConfig.columns)))) ? exportConfig.columns : this.getColumns(exportConfig);
        /** @type {?} */
        var rows = (/** @type {?} */ ((/** @type {?} */ (exportConfig.rows)))) ? exportConfig.rows : this.getRows(exportConfig);
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
            head: (/** @type {?} */ ((/** @type {?} */ (exportConfig.columns)))) ? null : [columns],
            columns: (/** @type {?} */ ((/** @type {?} */ (exportConfig.columns)))) ? columns : null,
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
                if (exportConfig.rows === null || exportConfig.rows === undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxlQUFlLENBQUM7Ozs7SUFDMUQsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQXFCRSxxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBbEJwRCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUM3QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM5QywyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRELG1CQUFjLEdB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LDZDQUE4Qjs7SUFDOUIsOENBQStCOzs7OztJQUUvQix1Q0FBNEQ7O0lBQzVELHNDQUE4RDs7Ozs7SUFFOUQscUNBSUU7O0lBNE5GLG1DQUFpQjs7SUFxQ2pCLDZCQUFZOzs7OztJQS9QQSxzQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2VudW1zL3RlbXBsYXRlVHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG5cclxuICBmaWxlTmFtZSA9ICcnO1xyXG4gIGVsZW1JRCA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZSc7XHJcbiAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJztcclxuICBleHBvcnRUaXRsZSA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJztcclxuICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbDtcclxuICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydENvbXBsZXRlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBleHBvcnRDb21wbGV0ZWQgPSB0aGlzLl9leHBvcnRDb21wbGV0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgY21hY3NQZGZJbWFnZXMgPSB7XHJcbiAgICBjaGVja2JveEVtcHR5OiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCc0FBQUFhQ0FZQUFBQkdpQ2Z3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQUVuUUFBQkowQWQ1bUgzZ0FBQUIrU1VSQlZFaEw3WmJSQ29Bd0NFWDcvei9jNjhRSDl4UEdoYjBZUW1VV1VSNFliT0R1WWI2NFJSL2tSekptVmlMUzFscG80UzR5UEl3TVJXT01lWXFEREU5b1pMMzN1YnVPbDJWa2FFTVdYbGJKVGxPeUZFcVdRc2xTZUpjc2M4UmdpRzR4TWd3OEVabW5PTWpZSFo0QVJYZ2gyaEJaaDc4RmQvTlZtZW9LY3ZIT2tkOUNFNTBBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICBjaGVja2JveEluZGV0ZXJtaW5hdGU6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWFDQVlBQUFDa1ZEeUpBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBQ0lTVVJCVkVoTDdaWXhDc0FnREVWN25wNnhGM1ZWSE9JbFVyNTBrQ2FnVlZ0b213Y1poSmhIWEw0TFA4eFBoVEZHRGlHd2M2NnJ2UGQ1aG9ZUW9wR0lqbE0vS1NWVktvVFliQmJZOUl3UTRrbG1vYzJxQ3RmdFdwV1lNR1BDV3BXWU1HUENXcFc4UXpoQ2szQm1QR216aEJDaGlmQWNwVG1BQVJwSHZoaTRxOG1BS3J5VHJ3dVpkOFRhZExJbHhWOGdBQUFBQUVsRlRrU3VRbUNDJyxcclxuICAgIGNoZWNrYm94U2VsZWN0ZWQ6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWJDQVlBQUFCaUZwOXJBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBRTRTVVJCVkVoTDFaWlBTZ014SEVibk92WUM0alU4am5XcHV5NjlobDEzNWNxTjRBdzRCYlVpN1VKeEtiZ1NuRDgvODhZTUprR0dKSk1PK09DamFacjVIcGt1a2t3VXJVcFYxL0pWVlVsREo5MlFNZmhyVWNyZ3lQYXhFemM0TW5meTd2NVppdlZHcnE3enFPVGxwdXR3ZXkwUkM1NjJMOTA3SFFNZHJzd1M1ZVdqWGpxZVFuV1ozWmFJcmFlQ0xyUDcvNGcrUGtWZTMvVVhnNlFpSk1jWElvZG5JZzl2ZWxLVFROUkxacWMvUWNaY1Q3RG9acXNIQnE2RUxKMUhnMFE4VE1uSnBaNVErRWpBVzhRZmJKWWg4NVZBMUk3SWdjclJ1WjhFZ2tSQUdaTFozRjhDd1NLWUwyM0pZcVYvR0NCS0JMMk1UeCtpUlhDNzB3TVBSb2xDR0JTbFBDYm9NcnN0MFdRSEgyRkJvWTVqdGg0VHJnR3VoRXgzT1puc3VzVTdaYkNQbmRGSk4zU2lucVp0cFc2YWJzR1kwRUhYTHlMZklqcHpZcWdOdzZvQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSwgKSB7IH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRfdGV4X3NpemUodHh0LCBmb250KTogYW55IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBlbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgY29uc3QgdHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGgsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcclxuICAgICAgaGVpZ2h0OiBwYXJzZUludChjb250ZXh0LmZvbnQpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRzaXplO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VGFibGUoXHJcbiAgICBmb3JtYXQgPSAncG5nJyxcclxuICAgIGZpbGVOYW1lLFxyXG4gICAgZWxlbUlELFxyXG4gICAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJyxcclxuICAgIGV4cG9ydFVzZXJOYW1lID0gJ1VzZXIgTmFtZScsXHJcbiAgICBleHBvcnRUaXRsZSA9ICcnLFxyXG4gICAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnLFxyXG4gICAgZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IG51bGwsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGwpIHtcclxuXHJcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB0aGlzLmVsZW1JRCA9IGVsZW1JRDtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueU5hbWUgPSBleHBvcnRDb21wYW55TmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VXNlck5hbWUgPSBleHBvcnRVc2VyTmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VGl0bGUgPSBleHBvcnRUaXRsZTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueUxvZ29VcmwgPSBleHBvcnRDb21wYW55TG9nb1VybDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGg7XHJcbiAgICB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gZXhwb3J0VGFibGVDdXN0b21IZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGFibGUnKTtcclxuICAgIHRoaXMuZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KTtcclxuXHJcbiAgfVxyXG5cclxuICBpbml0RXhwb3J0VG9QZGYoaW1nRGF0YSkge1xyXG4gICAgY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNMLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhc0wuaGVpZ2h0ID0gaW1nTG9nby5oZWlnaHQ7XHJcbiAgICAgIGNhbnZhc0wud2lkdGggPSBpbWdMb2dvLndpZHRoO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0xvZ28sIDAsIDApO1xyXG4gICAgICBjb25zdCBsb2dvID0gY2FudmFzTC50b0RhdGFVUkwoJ2ltYWdlL1BORycpO1xyXG4gICAgICB0aGlzLnNhdmVJbWFnZVRvUGRmKGxvZ28sIGltZ0RhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZVRvUGRmKGxvZ29EYXRhLCBpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBjdXRJbWFnZVVwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgICAgY29uc3QgaW1nUHJvcHMgPSAoPGFueT5kb2MpLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgY29uc3QgY3V0cyA9IE1hdGgudHJ1bmMoaW1nUHJvcHMuaGVpZ2h0IC8gMjA4MCkgKyAxO1xyXG4gICAgICBjb25zdCBwZGZXaWR0aCA9IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA/IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA6IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC0gMiAqIDE1O1xyXG5cclxuICAgICAgbGV0IHBkZkhlaWdodCA9ICgxNTAwICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIGlmICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0KSB7XHJcbiAgICAgICAgcGRmSGVpZ2h0ID0gKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGN1dHM7IHkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyMDgwO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgeSAqIDIwODAsIGltZ1Byb3BzLndpZHRoLCAyMDgwLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9QTkdcIik7XHJcbiAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvYy5hZGRJbWFnZShpbWcsICdQTkcnLCAxNSwgMzUsIHBkZldpZHRoLCBwZGZIZWlnaHQsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGRGb290ZXJzKGRvYywgbG9nb0RhdGEpO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBjdXRJbWFnZVVwO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nRGF0YTtcclxuICB9XHJcblxyXG4gIGFkZEZvb3RlcnMoZG9jLCBsb2dvKSB7XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnTU1NTSBERCwgWVlZWScpO1xyXG4gICAgZG9jLnNldEZvbnQoJ3RpbWVzJyk7XHJcbiAgICBkb2Muc2V0VGV4dENvbG9yKDEwMSwgMTA4LCAxMjEpO1xyXG4gICAgZG9jLnNldEZvbnRTaXplKDkpO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gcGFnZUNvdW50OyBpKyspIHtcclxuICAgICAgZG9jLnNldFBhZ2UoaSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0Q29tcGFueU5hbWUsIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRVc2VyTmFtZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLmFkZEltYWdlKGxvZ28sICdQTkcnLCAxNSwgMTQsIDQwLCA1LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnYm9sZCcpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFRpdGxlLCAxNSwgMzAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ25vcm1hbCcpO1xyXG4gICAgICBkb2MudGV4dCgnUGFnZSAnICsgU3RyaW5nKGkpICsgJyBvZiAnICsgU3RyaW5nKHBhZ2VDb3VudCksIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dChkYXRlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldElubGluZVN0eWxlcyh0YXJnZXRFbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICdmaWxsJyxcclxuICAgICAgJ2NvbG9yJyxcclxuICAgICAgJ2ZvbnQtc2l6ZScsXHJcbiAgICAgICdzdHJva2UnLFxyXG4gICAgICAnZm9udCdcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHN2Z0VsZW1zID0gQXJyYXkuZnJvbSh0YXJnZXRFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpKTtcclxuICAgIGNvbnN0IHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4gPSAobm9kZTogU1ZHU1ZHRWxlbWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmICghbm9kZS5zdHlsZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGxldCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgICBmb3IgKGxldCB0cmFuc2Zvcm1Qcm9wZXJ0eSBvZiB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSBzdHlsZXNbdHJhbnNmb3JtUHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oY2hpbGQgYXMgU1ZHU1ZHRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IHN2Z0VsZW1lbnQgb2Ygc3ZnRWxlbXMpIHtcclxuICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihzdmdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCkge1xyXG4gICAgdGFibGVzWzBdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWhlYWRlcic7XHJcbiAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnNjcm9sbFksXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICBlbGVtZW50SWQ6IHRhYmxlc1swXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmdldChleHBvcnRBc0NvbmZpZykuc3Vic2NyaWJlKGhlYWRlciA9PiB7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgdGFibGVzWzFdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWJvZHknO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzFdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRhYmxlc1sxXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoYm9keSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluZVR3b0ltYWdlcyhoZWFkZXIsIGJvZHksIGZvcm1hdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGxvZ0RpbWVuc2lvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGltZy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGltZy5oZWlnaHQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGxvZ0RpbWVuc2lvbnM7XHJcbiAgICAgICAgICBpbWcuc3JjID0gaGVhZGVyO1xyXG5cclxuICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoaGVhZGVyKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihoZWFkZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXNMb2FkZWQgPSAwO1xyXG4gIGNvbWJpbmVUd29JbWFnZXMoaW1nMSwgaW1nMiwgZm9ybWF0KSB7XHJcbiAgICBjb25zdCBtZXJnZUltYWdlcyA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCsrO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXNMb2FkZWQgPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gMDtcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlMS53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlMS5oZWlnaHQgKyBpbWFnZTIuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlMSwgMCwgMCwgaW1hZ2UxLndpZHRoLCBpbWFnZTEuaGVpZ2h0KTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UyLCAwLCBpbWFnZTEuaGVpZ2h0LCBpbWFnZTIud2lkdGgsIGltYWdlMi5oZWlnaHQpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW1hZ2UgV2lkdGgnLCBjYW52YXMud2lkdGgsICdJbWFnZSBIZWlnaHQnLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihjb21iaW5lZCkuc3Vic2NyaWJlKGJsb2IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5fZXhwb3J0Q29tcGxldGVkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbml0RXhwb3J0VG9QZGYoY29tYmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTEub25sb2FkID0gbWVyZ2VJbWFnZXM7XHJcbiAgICBpbWFnZTEuc3JjID0gaW1nMTtcclxuXHJcbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMi5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMi5zcmMgPSBpbWcyO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzID0gW107XHJcblxyXG4gIC8vIEV4cG9ydCB0YWJsZSB2ZXJzaW9uIDJcclxuICBleHBvcnRUYWJsZXYyKFxyXG4gICAgZXhwb3J0Q29uZmlnXHJcbiAgICApIHtcclxuXHJcbiAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBleHBvcnRDb25maWcuY29sdW1ucyEhID8gZXhwb3J0Q29uZmlnLmNvbHVtbnMgOiB0aGlzLmdldENvbHVtbnMoZXhwb3J0Q29uZmlnKTtcclxuICAgIGNvbnN0IHJvd3MgPSBleHBvcnRDb25maWcucm93cyEhID8gZXhwb3J0Q29uZmlnLnJvd3MgOiB0aGlzLmdldFJvd3MoZXhwb3J0Q29uZmlnKTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybClcclxuICAgICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TmFtZSlcclxuICAgICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRVc2VyTmFtZSlcclxuICAgICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydENvbmZpZy5leHBvcnRVc2VyTmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5maWxlTmFtZSlcclxuICAgICAgdGhpcy5maWxlTmFtZSA9IGV4cG9ydENvbmZpZy5maWxlTmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRUaXRsZSlcclxuICAgICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydENvbmZpZy5leHBvcnRUaXRsZTtcclxuXHJcbiAgICBkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgaGVhZDogZXhwb3J0Q29uZmlnLmNvbHVtbnMhISA/IG51bGwgOiBbY29sdW1uc10sXHJcbiAgICAgIGNvbHVtbnM6IGV4cG9ydENvbmZpZy5jb2x1bW5zISEgPyBjb2x1bW5zIDogbnVsbCxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgdGhlbWU6ICdwbGFpbicsXHJcbiAgICAgIGhlYWRTdHlsZXM6IHtcclxuICAgICAgICBmb250OiAndGltZXMnLFxyXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgZmlsbENvbG9yOiAnI2Y2ZjdmYicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udFNpemU6IDExXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHlTdHlsZXM6IHtcclxuICAgICAgICBmb250OiAndGltZXMnLFxyXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzk3YTBhZScsXHJcbiAgICAgICAgZm9udFNpemU6IDExXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtblN0eWxlczogZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogMzUsIGJvdHRvbTogMzAsIGxlZnQ6IDE1LCByaWdodDogMTUgfSxcclxuICAgICAgZGlkRHJhd0NlbGw6IChkb2NkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5yb3dzID09PSBudWxsIHx8IGV4cG9ydENvbmZpZy5yb3dzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHZhciB0ZXh0UG9zID0gZG9jZGF0YS5jZWxsLnRleHRQb3M7XHJcbiAgICAgICAgICB2YXIgZGltID0gZG9jZGF0YS5jZWxsLmhlaWdodCAtIGRvY2RhdGEuY2VsbC5wYWRkaW5nKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgICAgY29uc3QgY3VzdG9tV2lkdGggPSBleHBvcnRDb25maWcuY29sdW1uU3R5bGVzICYmIGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXNbZG9jZGF0YS5jb2x1bW4uaW5kZXhdXHJcbiAgICAgICAgICAgICYmIGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXNbZG9jZGF0YS5jb2x1bW4uaW5kZXhdLmNvbnRlbnRXaWR0aCA/IGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXNbZG9jZGF0YS5jb2x1bW4uaW5kZXhdLmNvbnRlbnRXaWR0aCA6IGRpbTtcclxuICAgICAgICAgIGNvbnN0IGNvbHVtbklkeCA9IGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCA/IGRvY2RhdGEuY29sdW1uLmluZGV4IC0gMSA6IGRvY2RhdGEuY29sdW1uLmluZGV4O1xyXG5cclxuICAgICAgICAgIC8qIERyYXcgY2hlY2tib3hlcyBoZWFkZXIgKi9cclxuICAgICAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QgJiYgZG9jZGF0YS5zZWN0aW9uID09PSAnaGVhZCcgJiYgZG9jZGF0YS5jb2x1bW4uaW5kZXggPT09ICcwJykge1xyXG4gICAgICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSBleHBvcnRDb25maWcuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveFNlbGVjdGVkLCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hTZWxlY3RlZCcsIFwiRkFTVFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hFbXB0eSwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94RW1wdHknLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hJbmRldGVybWluYXRlLCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hJbmRldGVybWluYXRlJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogRHJhdyBjaGVja2JveGVzIGJvZHkgKi9cclxuICAgICAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QgJiYgZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScgJiYgZG9jZGF0YS5jb2x1bW4uaW5kZXggPT09ICcwJykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBleHBvcnRDb25maWcuZGF0YVtkb2NkYXRhLnJvdy5pbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGV4cG9ydENvbmZpZy5zZWxlY3RlZEl0ZW1zLmluZGV4T2Yocm93W2V4cG9ydENvbmZpZy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94RW1wdHksICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveEVtcHR5JywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94U2VsZWN0ZWQsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveFNlbGVjdGVkJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogRHJhdyBoZWFkZXIgdGVtcGxhdGVzICovXHJcbiAgICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XSAmJiBleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLnRlbXBsYXRlICYmIChkb2NkYXRhLnNlY3Rpb24gPT09ICdoZWFkJykpIHtcclxuICAgICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cG9ydENvbmZpZy5lbGVtSUQgKyAnY29sdW1uJyArIGNvbHVtbklkeCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKGltZyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goeyBzcmM6IGltZywgeDogdGV4dFBvcy54LCB5OiB0ZXh0UG9zLnksIHdpZHRoOiBkaW0sIGhlaWdodDogZGltIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIERyYXcgYm9keSB0ZW1wbGF0ZXMgYW5kIHRhZ3MgKi9cclxuICAgICAgICAgIGlmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdXHJcbiAgICAgICAgICAgICYmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZlxyXG4gICAgICAgICAgICAgIHx8IGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZylcclxuICAgICAgICAgICAgJiYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2JvZHknKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChleHBvcnRDb25maWcuZWxlbUlEICsgJ2NvbHVtbicgKyBjb2x1bW5JZHggKyAncm93JyArIGRvY2RhdGEucm93LmluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKGltZyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh7IHNyYzogaW1nLCB4OiB0ZXh0UG9zLngsIHk6IHRleHRQb3MueSwgd2lkdGg6IGN1c3RvbVdpZHRoLCBoZWlnaHQ6IGRpbSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRHJhdyBib3JkZXJzICovXHJcbiAgICAgICAgaWYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2JvZHknKSB7XHJcbiAgICAgICAgICB2YXIgcyA9IGRvY2RhdGEuY2VsbC5zdHlsZXM7XHJcbiAgICAgICAgICBzLmxpbmVDb2xvciA9ICcjREVFMEU1JztcclxuICAgICAgICAgIHMubGluZVdpZHRoID0gMC4xO1xyXG4gICAgICAgICAgZG9jLmxpbmUoZG9jZGF0YS5jZWxsLngsIGRvY2RhdGEudGFibGUuY3Vyc29yLnksIGRvY2RhdGEuY2VsbC54ICsgZG9jZGF0YS5jZWxsLndpZHRoLCBkb2NkYXRhLnRhYmxlLmN1cnNvci55LCBzKTtcclxuICAgICAgICB9ICBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKGRvYywgZXhwb3J0Q29uZmlnLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBvcnRUb1BkZlYyKGRvYyk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldENvbHVtbnMoZXhwb3J0Q29uZmlnKSB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcbiAgICBpZiAoZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgIGNvbHVtbnMucHVzaCgnJyk7XHJcbiAgICB9XHJcbiAgICBleHBvcnRDb25maWcuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0XHJcbiAgICAgIHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZ1xyXG4gICAgICB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dzKGV4cG9ydENvbmZpZykge1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgZXhwb3J0Q29uZmlnLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCgnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBleHBvcnRDb25maWcuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8XHJcbiAgICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmIHx8IGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcpIHtcclxuICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChmaWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuU2VsZWN0OlxyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YS5maW5kKG9wdGlvbiA9PiBvcHRpb25bZmllbGQuc2VsZWN0LnZhbHVlXSA9PT0gaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0SXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuRGF0ZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChleHBvcnRDb25maWcuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnTU1NTSBkZCB5eXl5JykpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGV4cG9ydENvbmZpZy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdoOm1tIGEnKSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goaXRlbVtmaWVsZC5wcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJvd3MucHVzaChpdGVtVG9FeHBvcnQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcm93cztcclxuICB9XHJcblxyXG4gIHJlbmRlclRlbXBsYXRlKGRvYywgZGF0YSkge1xyXG4gICAgZG9jLnNldFBhZ2UoMSk7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltYWdlcy5wb3AoKTtcclxuICAgIGltZy5zcmMuc3R5bGUud2lkdGggPSAnZml0LWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG51bGwsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICBzY3JvbGxYOiAwLFxyXG4gICAgICBpbWFnZVRpbWVvdXQ6IDAsXHJcbiAgICAgIHVzZUNPUlM6IHRydWVcclxuICAgIH07XHJcbiAgICBodG1sMmNhbnZhcyhpbWcuc3JjLCBvcHRpb25zKS50aGVuKGNhbnZhcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGRvYy5hZGRJbWFnZShjb21iaW5lZCwgJ1BORycsIGltZy54LCBpbWcueSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCBpbWcuc3JjLmlkLCBcIkZBU1RcIik7XHJcbiAgICAgIGltZy5zcmMuc3R5bGUud2lkdGggPSAnaW5oZXJpdGVkJztcclxuICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoZG9jLCBkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmV4cG9ydFRvUGRmVjIoZG9jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb1BkZlYyKGRvYykge1xyXG4gICAgY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNMLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhc0wuaGVpZ2h0ID0gaW1nTG9nby5oZWlnaHQ7XHJcbiAgICAgIGNhbnZhc0wud2lkdGggPSBpbWdMb2dvLndpZHRoO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0xvZ28sIDAsIDApO1xyXG4gICAgICBjb25zdCBsb2dvID0gY2FudmFzTC50b0RhdGFVUkwoJ2ltYWdlL1BORycpO1xyXG4gICAgICB0aGlzLmFkZEZvb3RlcnMoZG9jLCBsb2dvKTtcclxuICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucGRmJztcclxuICAgICAgdGhpcy5fZXhwb3J0Q29tcGxldGVkLm5leHQodHJ1ZSk7XHJcbiAgICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1nTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nTG9nby5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWdMb2dvLm9ubG9hZCA9IGdldExvZ287XHJcbiAgICBpbWdMb2dvLnNyYyA9IHRoaXMuZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=