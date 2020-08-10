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
        this.templatesCellQtty = 0;
        this.templatesHeaderQtty = 0;
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
                    var img = document.getElementById(exportConfig.config.fields[columnIdx].template.context.id);
                    _this.setInlineStyles(img);
                    _this.templatesHeaderQtty++;
                    _this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
                }
                /* Draw body templates */
                if (exportConfig.config.fields[columnIdx] && exportConfig.config.fields[columnIdx].celdType === CeldType.TemplateRef && (docdata.section === 'body')) {
                    /** @type {?} */
                    var img = document.getElementById(exportConfig.config.fields[columnIdx].templateTdId + docdata.row.index);
                    _this.setInlineStyles(img);
                    _this.templatesCellQtty++;
                    _this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
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
        function (item) { return item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef; })).forEach((/**
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
            function (item) { return item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef; })).forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field.celdType === CeldType.TemplateRef) {
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
        /** @type {?} */
        var img = this.images.pop();
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
    UtilService.prototype.templatesCellQtty;
    /** @type {?} */
    UtilService.prototype.templatesHeaderQtty;
    /** @type {?} */
    UtilService.prototype.images;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxlQUFlLENBQUM7Ozs7SUFDMUQsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQXFCRSxxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBbEJwRCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUM3QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM5QywyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRELG1CQUFjLEdB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MkNBQThDOztJQUM5Qyw2Q0FBOEI7O0lBQzlCLDhDQUErQjs7Ozs7SUFFL0IsdUNBQTREOztJQUM1RCxzQ0FBOEQ7Ozs7O0lBRTlELHFDQUlFOztJQTRORixtQ0FBaUI7O0lBcUNqQix3Q0FBc0I7O0lBQ3RCLDBDQUF3Qjs7SUFDeEIsNkJBQVk7Ozs7O0lBalFBLHNDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcblxyXG4gIGZpbGVOYW1lID0gJyc7XHJcbiAgZWxlbUlEID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJztcclxuICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnO1xyXG4gIGV4cG9ydFRpdGxlID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0Q29tcGxldGVkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIGV4cG9ydENvbXBsZXRlZCA9IHRoaXMuX2V4cG9ydENvbXBsZXRlZC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBjbWFjc1BkZkltYWdlcyA9IHtcclxuICAgIGNoZWNrYm94RW1wdHk6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWFDQVlBQUFCR2lDZndBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBQitTVVJCVkVoTDdaYlJDb0F3Q0VYNy96L2M2OFFIOXhQR2hiMFlRbVVXVVI0WWJPRHVZYjY0UlIva1J6Sm1WaUxTMWxwbzRTNHlQSXdNUldPTWVZcURERTlvWkwzM3VidU9sMlZrYUVNV1hsYkpUbE95RkVxV1FzbFNlSmNzYzhSZ2lHNHhNZ3c4RVptbk9NallIWjRBUlhnaDJoQlpoNzhGZC9OVm1lb0tjdkhPa2Q5Q0U1MEFBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgIGNoZWNrYm94SW5kZXRlcm1pbmF0ZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYUNBWUFBQUNrVkR5SkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFDSVNVUkJWRWhMN1pZeENzQWdERVY3bnA2eEYzVlZIT0lsVXI1MGtDYWdWVnRvbXdjWmhKaEhYTDRMUDh4UGhURkdEaUd3YzY2cnZQZDVob1lRb3BHSWpsTS9LU1ZWS29UWWJCYlk5SXdRNGtsbW9jMnFDdGZ0V3BXWU1HUENXcFdZTUdQQ1dwVzhRemhDazNCbVBHbXpoQkNoaWZBY3BUbUFBUnBIdmhpNHE4bUFLcnlUcnd1WmQ4VGFkTElseFY4Z0FBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgY2hlY2tib3hTZWxlY3RlZDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYkNBWUFBQUJpRnA5ckFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFFNFNVUkJWRWhMMVpaUFNnTXhIRWJuT3ZZQzRqVThqbldwdXk2OWhsMTM1Y3FONEF3NEJiVWk3VUp4S2JnU25EOC84OFlNSmtHR0pKTU8rT0NqYVpyNUhwa3Vra3dVclVwVjEvSlZWVWxESjkyUU1maHJVY3JneVBheEV6YzRNbmZ5N3Y1Wml2VkdycTd6cU9UbHB1dHdleTBSQzU2Mkw5MDdIUU1kcnN3UzVlV2pYanFlUW5XWjNaYUlyYWVDTHJQNy80ZytQa1ZlMy9VWGc2UWlKTWNYSW9kbklnOXZlbEtUVE5STFpxYy9RY1pjVDdEb1pxc0hCcTZFTEoxSGcwUThUTW5KcFo1UStFakFXOFFmYkpZaDg1VkExSTdJZ2NyUnVaOEVna1JBR1pMWjNGOEN3U0tZTDIzSllxVi9HQ0JLQkwyTVR4K2lSWEM3MHdNUFJvbENHQlNsUENib01yc3QwV1FISDJGQm9ZNWp0aDRUcmdHdWhFeDNPWm5zdXNVN1piQ1BuZEZKTjNTaW5xWnRwVzZhYnNHWTBFSFhMeUxmSWpwellxZ053Nm9BQUFBQVNVVk9SSzVDWUlJPSdcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLCApIHsgfVxyXG5cclxuICB1dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgY29uc3QgdiA9IGMgPT0gJ3gnID9cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldF90ZXhfc2l6ZSh0eHQsIGZvbnQpOiBhbnkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodHh0KS53aWR0aCxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByYWRpeFxyXG4gICAgICBoZWlnaHQ6IHBhcnNlSW50KGNvbnRleHQuZm9udClcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHNpemU7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUYWJsZShcclxuICAgIGZvcm1hdCA9ICdwbmcnLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgICBlbGVtSUQsXHJcbiAgICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnLFxyXG4gICAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJyxcclxuICAgIGV4cG9ydFRpdGxlID0gJycsXHJcbiAgICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbCxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbCkge1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydFVzZXJOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydFRpdGxlO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gZXhwb3J0VGFibGVDdXN0b21XaWR0aDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBleHBvcnRUYWJsZUN1c3RvbUhlaWdodDtcclxuXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG4gICAgdGhpcy5nZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXRFeHBvcnRUb1BkZihpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuc2F2ZUltYWdlVG9QZGYobG9nbywgaW1nRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvZ28uY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nTG9nby5vbmxvYWQgPSBnZXRMb2dvO1xyXG4gICAgaW1nTG9nby5zcmMgPSB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUltYWdlVG9QZGYobG9nb0RhdGEsIGltZ0RhdGEpIHtcclxuICAgIGNvbnN0IGN1dEltYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgICBjb25zdCBpbWdQcm9wcyA9ICg8YW55PmRvYykuZ2V0SW1hZ2VQcm9wZXJ0aWVzKGltZ0RhdGEpO1xyXG4gICAgICBjb25zdCBjdXRzID0gTWF0aC50cnVuYyhpbWdQcm9wcy5oZWlnaHQgLyAyMDgwKSArIDE7XHJcbiAgICAgIGNvbnN0IHBkZldpZHRoID0gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID8gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoIDogZG9jLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAyICogMTU7XHJcblxyXG4gICAgICBsZXQgcGRmSGVpZ2h0ID0gKDE1MDAgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQpIHtcclxuICAgICAgICBwZGZIZWlnaHQgPSAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY3V0czsgeSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwODA7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCB5ICogMjA4MCwgaW1nUHJvcHMud2lkdGgsIDIwODAsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL1BOR1wiKTtcclxuICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jLmFkZEltYWdlKGltZywgJ1BORycsIDE1LCAzNSwgcGRmV2lkdGgsIHBkZkhlaWdodCwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZEZvb3RlcnMoZG9jLCBsb2dvRGF0YSk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGN1dEltYWdlVXA7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWdEYXRhO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9vdGVycyhkb2MsIGxvZ28pIHtcclxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERELCBZWVlZJyk7XHJcbiAgICBkb2Muc2V0Rm9udCgndGltZXMnKTtcclxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMTAxLCAxMDgsIDEyMSk7XHJcbiAgICBkb2Muc2V0Rm9udFNpemUoOSk7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBwYWdlQ291bnQ7IGkrKykge1xyXG4gICAgICBkb2Muc2V0UGFnZShpKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRDb21wYW55TmFtZSwgMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFVzZXJOYW1lLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MuYWRkSW1hZ2UobG9nbywgJ1BORycsIDE1LCAxNCwgNDAsIDUsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdib2xkJyk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VGl0bGUsIDE1LCAzMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnbm9ybWFsJyk7XHJcbiAgICAgIGRvYy50ZXh0KCdQYWdlICcgKyBTdHJpbmcoaSkgKyAnIG9mICcgKyBTdHJpbmcocGFnZUNvdW50KSwgMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KGRhdGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lU3R5bGVzKHRhcmdldEVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtUHJvcGVydGllcyA9IFtcclxuICAgICAgJ2ZpbGwnLFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAnZm9udC1zaXplJyxcclxuICAgICAgJ3N0cm9rZScsXHJcbiAgICAgICdmb250J1xyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgc3ZnRWxlbXMgPSBBcnJheS5mcm9tKHRhcmdldEVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIikpO1xyXG4gICAgY29uc3QgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbiA9IChub2RlOiBTVkdTVkdFbGVtZW50IHwgSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKCFub2RlLnN0eWxlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgbGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICAgIGZvciAobGV0IHRyYW5zZm9ybVByb3BlcnR5IG9mIHRyYW5zZm9ybVByb3BlcnRpZXMpIHtcclxuICAgICAgICBub2RlLnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHN0eWxlc1t0cmFuc2Zvcm1Qcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihjaGlsZCBhcyBTVkdTVkdFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgc3ZnRWxlbWVudCBvZiBzdmdFbGVtcykge1xyXG4gICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKHN2Z0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KSB7XHJcbiAgICB0YWJsZXNbMF0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtaGVhZGVyJztcclxuICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKHRhYmxlc1swXSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgaW1hZ2VUaW1lb3V0OiAwLFxyXG4gICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgIGVsZW1lbnRJZDogdGFibGVzWzBdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgIG9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoaGVhZGVyID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0YWJsZXNbMV0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtYm9keSc7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMV0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGFibGVzWzFdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5lVHdvSW1hZ2VzKGhlYWRlciwgYm9keSwgZm9ybWF0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbG9nRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgaW1nLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICBpbWcub25sb2FkID0gbG9nRGltZW5zaW9ucztcclxuICAgICAgICAgIGltZy5zcmMgPSBoZWFkZXI7XHJcblxyXG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihoZWFkZXIpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGhlYWRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltYWdlc0xvYWRlZCA9IDA7XHJcbiAgY29tYmluZVR3b0ltYWdlcyhpbWcxLCBpbWcyLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IG1lcmdlSW1hZ2VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA8IDIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2UxLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UxLmhlaWdodCArIGltYWdlMi5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UxLCAwLCAwLCBpbWFnZTEud2lkdGgsIGltYWdlMS5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTIsIDAsIGltYWdlMS5oZWlnaHQsIGltYWdlMi53aWR0aCwgaW1hZ2UyLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGNhbnZhcy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGNvbWJpbmVkKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihjb21iaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMS5zcmMgPSBpbWcxO1xyXG5cclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltZzI7XHJcbiAgfVxyXG5cclxuICB0ZW1wbGF0ZXNDZWxsUXR0eSA9IDA7XHJcbiAgdGVtcGxhdGVzSGVhZGVyUXR0eSA9IDA7XHJcbiAgaW1hZ2VzID0gW107XHJcblxyXG4gIC8vIEV4cG9ydCB0YWJsZSB2ZXJzaW9uIDJcclxuICBleHBvcnRUYWJsZXYyKFxyXG4gICAgZXhwb3J0Q29uZmlnXHJcbiAgICApIHtcclxuXHJcbiAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnMoZXhwb3J0Q29uZmlnKTtcclxuICAgIGNvbnN0IHJvd3MgPSB0aGlzLmdldFJvd3MoZXhwb3J0Q29uZmlnKTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybClcclxuICAgICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TmFtZSlcclxuICAgICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbmZpZy5leHBvcnRDb21wYW55TmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRVc2VyTmFtZSlcclxuICAgICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydENvbmZpZy5leHBvcnRVc2VyTmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5maWxlTmFtZSlcclxuICAgICAgdGhpcy5maWxlTmFtZSA9IGV4cG9ydENvbmZpZy5maWxlTmFtZTtcclxuICAgIGlmICghIWV4cG9ydENvbmZpZy5leHBvcnRUaXRsZSlcclxuICAgICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydENvbmZpZy5leHBvcnRUaXRsZTtcclxuXHJcbiAgICBkb2MuYXV0b1RhYmxlKHtcclxuICAgICAgaGVhZDogW2NvbHVtbnNdLFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICB0aGVtZTogJ3BsYWluJyxcclxuICAgICAgaGVhZFN0eWxlczoge1xyXG4gICAgICAgIGZvbnQ6ICd0aW1lcycsXHJcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICBmaWxsQ29sb3I6ICcjZjZmN2ZiJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250U2l6ZTogMTFcclxuICAgICAgfSxcclxuICAgICAgYm9keVN0eWxlczoge1xyXG4gICAgICAgIGZvbnQ6ICd0aW1lcycsXHJcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICcjOTdhMGFlJyxcclxuICAgICAgICBmb250U2l6ZTogMTFcclxuICAgICAgfSxcclxuICAgICAgY29sdW1uU3R5bGVzOiBleHBvcnRDb25maWcuY29sdW1uU3R5bGVzLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiAzNSwgYm90dG9tOiAzMCwgbGVmdDogMTUsIHJpZ2h0OiAxNSB9LFxyXG4gICAgICBkaWREcmF3Q2VsbDogKGRvY2RhdGEpID0+IHtcclxuICAgICAgICB2YXIgdGV4dFBvcyA9IGRvY2RhdGEuY2VsbC50ZXh0UG9zO1xyXG4gICAgICAgIHZhciBkaW0gPSBkb2NkYXRhLmNlbGwuaGVpZ2h0IC0gZG9jZGF0YS5jZWxsLnBhZGRpbmcoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgY29uc3QgY29sdW1uSWR4ID0gZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0ID8gZG9jZGF0YS5jb2x1bW4uaW5kZXggLSAxIDogZG9jZGF0YS5jb2x1bW4uaW5kZXg7XHJcblxyXG4gICAgICAvKiBEcmF3IGNoZWNrYm94ZXMgaGVhZGVyICovXHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCAmJiBkb2NkYXRhLnNlY3Rpb24gPT09ICdoZWFkJyAmJiBkb2NkYXRhLmNvbHVtbi5pbmRleCA9PT0gJzAnKSB7XHJcbiAgICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSBleHBvcnRDb25maWcuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hTZWxlY3RlZCwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94U2VsZWN0ZWQnLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFleHBvcnRDb25maWcuc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hFbXB0eSwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94RW1wdHknLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveEluZGV0ZXJtaW5hdGUsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveEluZGV0ZXJtaW5hdGUnLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogRHJhdyBjaGVja2JveGVzIGJvZHkgKi9cclxuICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0ICYmIGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2JvZHknICYmIGRvY2RhdGEuY29sdW1uLmluZGV4ID09PSAnMCcpIHtcclxuICAgICAgICAgIGNvbnN0IHJvdyA9IGV4cG9ydENvbmZpZy5kYXRhW2RvY2RhdGEucm93LmluZGV4XTtcclxuICAgICAgICAgIGNvbnN0IGlkeCA9IGV4cG9ydENvbmZpZy5zZWxlY3RlZEl0ZW1zLmluZGV4T2Yocm93W2V4cG9ydENvbmZpZy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hFbXB0eSwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94RW1wdHknLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveFNlbGVjdGVkLCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hTZWxlY3RlZCcsIFwiRkFTVFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBEcmF3IGhlYWRlciB0ZW1wbGF0ZXMgKi9cclxuICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XSAmJiBleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLnRlbXBsYXRlICYmIChkb2NkYXRhLnNlY3Rpb24gPT09ICdoZWFkJykpIHtcclxuICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLnRlbXBsYXRlLmNvbnRleHQuaWQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXMoaW1nKTtcclxuICAgICAgICAgIHRoaXMudGVtcGxhdGVzSGVhZGVyUXR0eSsrO1xyXG4gICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh7IHNyYzogaW1nLCB4OiB0ZXh0UG9zLngsIHk6IHRleHRQb3MueSwgd2lkdGg6IGRpbSwgaGVpZ2h0OiBkaW0gfSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgIC8qIERyYXcgYm9keSB0ZW1wbGF0ZXMgKi8gICAgICAgXHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0gJiYgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYgJiYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2JvZHknKSkge1xyXG4gICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0udGVtcGxhdGVUZElkICsgZG9jZGF0YS5yb3cuaW5kZXgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXMoaW1nKTtcclxuICAgICAgICAgIHRoaXMudGVtcGxhdGVzQ2VsbFF0dHkrKztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goeyBzcmM6IGltZywgeDogdGV4dFBvcy54LCB5OiB0ZXh0UG9zLnksIHdpZHRoOiBkaW0sIGhlaWdodDogZGltIH0pO1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIC8qIERyYXcgYm9yZGVycyAqL1xyXG4gICAgICAgIGlmIChkb2NkYXRhLnNlY3Rpb24gPT09ICdib2R5Jykge1xyXG4gICAgICAgICAgdmFyIHMgPSBkb2NkYXRhLmNlbGwuc3R5bGVzO1xyXG4gICAgICAgICAgcy5saW5lQ29sb3IgPSAnI0RFRTBFNSc7XHJcbiAgICAgICAgICBzLmxpbmVXaWR0aCA9IDAuMTtcclxuICAgICAgICAgIGRvYy5saW5lKGRvY2RhdGEuY2VsbC54LCBkb2NkYXRhLnRhYmxlLmN1cnNvci55LCBkb2NkYXRhLmNlbGwueCArIGRvY2RhdGEuY2VsbC53aWR0aCwgZG9jZGF0YS50YWJsZS5jdXJzb3IueSwgcyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShkb2MsIGV4cG9ydENvbmZpZy5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0VG9QZGZWMihkb2MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zKGV4cG9ydENvbmZpZykge1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG4gICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICBjb2x1bW5zLnB1c2goJycpO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmaWVsZC5kaXNwbGF5KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dzKGV4cG9ydENvbmZpZykge1xyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgZXhwb3J0Q29uZmlnLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvRXhwb3J0ID0gW107XHJcbiAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCgnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBleHBvcnRDb25maWcuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0IHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN3aXRjaCAoZmllbGQuZWRpdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlNlbGVjdDpcclxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RJdGVtID0gZmllbGQuc2VsZWN0LnNlbGVjdERhdGEuZmluZChvcHRpb24gPT4gb3B0aW9uW2ZpZWxkLnNlbGVjdC52YWx1ZV0gPT09IGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goc2VsZWN0SXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLkRhdGU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goZXhwb3J0Q29uZmlnLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ01NTU0gZGQgeXl5eScpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZVR5cGUuVGltZTpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChleHBvcnRDb25maWcuZGF0ZVBpcGUudHJhbnNmb3JtKGl0ZW1bZmllbGQucHJvcGVydHldLCAnaDptbSBhJykpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGl0ZW1bZmllbGQucHJvcGVydHldKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByb3dzLnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUZW1wbGF0ZShkb2MsIGRhdGEpIHtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1hZ2VzLnBvcCgpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG51bGwsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICBzY3JvbGxYOiAwLFxyXG4gICAgICBpbWFnZVRpbWVvdXQ6IDAsXHJcbiAgICAgIHVzZUNPUlM6IHRydWVcclxuICAgIH07XHJcbiAgICBodG1sMmNhbnZhcyhpbWcuc3JjLCBvcHRpb25zKS50aGVuKGNhbnZhcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGRvYy5hZGRJbWFnZShjb21iaW5lZCwgJ1BORycsIGltZy54LCBpbWcueSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCBpbWcuc3JjLmlkLCBcIkZBU1RcIik7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKGRvYywgZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUb1BkZlYyKGRvYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QZGZWMihkb2MpIHtcclxuICAgIGNvbnN0IGdldExvZ28gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbnZhc0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzTC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjYW52YXNMLmhlaWdodCA9IGltZ0xvZ28uaGVpZ2h0O1xyXG4gICAgICBjYW52YXNMLndpZHRoID0gaW1nTG9nby53aWR0aDtcclxuICAgICAgY3R4LmRyYXdJbWFnZShpbWdMb2dvLCAwLCAwKTtcclxuICAgICAgY29uc3QgbG9nbyA9IGNhbnZhc0wudG9EYXRhVVJMKCdpbWFnZS9QTkcnKTtcclxuICAgICAgdGhpcy5hZGRGb290ZXJzKGRvYywgbG9nbyk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvZ28uY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nTG9nby5vbmxvYWQgPSBnZXRMb2dvO1xyXG4gICAgaW1nTG9nby5zcmMgPSB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gIH1cclxuXHJcbn1cclxuIl19