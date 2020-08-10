/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { ExportAsService } from 'ngx-export-as';
import * as i0 from "@angular/core";
import * as i1 from "ngx-export-as";
/** @type {?} */
const moment = moment_;
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
import { CeldType } from '../enums/celdType.enum';
import { TemplateType } from '../enums/templateType.enum';
export class UtilService {
    /**
     * @param {?} exportAsService
     */
    constructor(exportAsService) {
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
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            // tslint:disable-next-line: no-bitwise
            /** @type {?} */
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: triple-equals
            /** @type {?} */
            const v = c == 'x' ?
                // tslint:disable-next-line: no-bitwise
                r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    /**
     * @param {?} txt
     * @param {?} font
     * @return {?}
     */
    get_tex_size(txt, font) {
        /** @type {?} */
        const element = document.createElement('canvas');
        /** @type {?} */
        const context = element.getContext('2d');
        context.font = font;
        /** @type {?} */
        const tsize = {
            width: context.measureText(txt).width,
            // tslint:disable-next-line: radix
            height: parseInt(context.font)
        };
        return tsize;
    }
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
    exportTable(format = 'png', fileName, elemID, exportCompanyName = 'Company Name', exportUserName = 'User Name', exportTitle = '', exportCompanyLogoUrl = 'assets/PToB_logo.png', exportTableCustomWidth = null, exportTableCustomHeight = null) {
        this.fileName = fileName;
        this.elemID = elemID;
        this.exportCompanyName = exportCompanyName;
        this.exportUserName = exportUserName;
        this.exportTitle = exportTitle;
        this.exportCompanyLogoUrl = exportCompanyLogoUrl;
        this.exportTableCustomWidth = exportTableCustomWidth;
        this.exportTableCustomHeight = exportTableCustomHeight;
        /** @type {?} */
        const tables = document.getElementById(elemID).getElementsByTagName('table');
        this.getTableCapture(tables, format);
    }
    /**
     * @param {?} imgData
     * @return {?}
     */
    initExportToPdf(imgData) {
        /** @type {?} */
        const getLogo = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const canvasL = document.createElement('canvas');
            /** @type {?} */
            const ctx = canvasL.getContext('2d');
            canvasL.height = imgLogo.height;
            canvasL.width = imgLogo.width;
            ctx.drawImage(imgLogo, 0, 0);
            /** @type {?} */
            const logo = canvasL.toDataURL('image/PNG');
            this.saveImageToPdf(logo, imgData);
        });
        /** @type {?} */
        const imgLogo = new Image();
        imgLogo.crossOrigin = "Anonymous";
        imgLogo.onload = getLogo;
        imgLogo.src = this.exportCompanyLogoUrl;
    }
    /**
     * @param {?} logoData
     * @param {?} imgData
     * @return {?}
     */
    saveImageToPdf(logoData, imgData) {
        /** @type {?} */
        const cutImageUp = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const doc = new jsPDF('l', 'mm', 'a4', 1);
            /** @type {?} */
            const imgProps = ((/** @type {?} */ (doc))).getImageProperties(imgData);
            /** @type {?} */
            const cuts = Math.trunc(imgProps.height / 2080) + 1;
            /** @type {?} */
            const pdfWidth = this.exportTableCustomWidth ? this.exportTableCustomWidth : doc.internal.pageSize.getWidth() - 2 * 15;
            /** @type {?} */
            let pdfHeight = (1500 * pdfWidth) / imgProps.width;
            if (this.exportTableCustomHeight) {
                pdfHeight = (this.exportTableCustomHeight * pdfWidth) / imgProps.width;
            }
            for (let y = 0; y < cuts; y++) {
                /** @type {?} */
                const canvas = document.createElement('canvas');
                canvas.width = imgProps.width;
                canvas.height = 2080;
                /** @type {?} */
                const context = canvas.getContext('2d');
                context.drawImage(image, 0, y * 2080, imgProps.width, 2080, 0, 0, canvas.width, canvas.height);
                /** @type {?} */
                const img = canvas.toDataURL("image/PNG");
                if (y) {
                    doc.addPage();
                }
                doc.addImage(img, 'PNG', 15, 35, pdfWidth, pdfHeight, undefined, 'FAST');
            }
            this.addFooters(doc, logoData);
            /** @type {?} */
            const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + this.fileName + '.pdf';
            this._exportCompleted.next(true);
            doc.save(filenameFormatted);
        });
        /** @type {?} */
        const image = new Image();
        image.onload = cutImageUp;
        image.src = imgData;
    }
    /**
     * @param {?} doc
     * @param {?} logo
     * @return {?}
     */
    addFooters(doc, logo) {
        /** @type {?} */
        const pageCount = doc.internal.getNumberOfPages();
        /** @type {?} */
        const date = moment().format('MMMM DD, YYYY');
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
    }
    /**
     * @param {?} targetElem
     * @return {?}
     */
    setInlineStyles(targetElem) {
        /** @type {?} */
        const transformProperties = [
            'fill',
            'color',
            'font-size',
            'stroke',
            'font'
        ];
        /** @type {?} */
        let svgElems = Array.from(targetElem.getElementsByTagName("svg"));
        /** @type {?} */
        const recurseElementChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (!node.style)
                return;
            /** @type {?} */
            let styles = getComputedStyle(node);
            for (let transformProperty of transformProperties) {
                node.style[transformProperty] = styles[transformProperty];
            }
            for (let child of Array.from(node.childNodes)) {
                recurseElementChildren((/** @type {?} */ (child)));
            }
        });
        for (let svgElement of svgElems) {
            recurseElementChildren(svgElement);
        }
    }
    /**
     * @param {?} tables
     * @param {?} format
     * @return {?}
     */
    getTableCapture(tables, format) {
        tables[0].id = this.elemID + '-table-header';
        this.setInlineStyles(tables[0]);
        /** @type {?} */
        const options = {
            background: 'white',
            scale: 3,
            allowTaint: true,
            scrollY: -window.scrollY,
            imageTimeout: 0,
            useCORS: true
        };
        /** @type {?} */
        const exportAsConfig = {
            type: 'png',
            // the type you want to download
            elementId: tables[0].id,
            options
        };
        /** @type {?} */
        const interval = setInterval((/**
         * @return {?}
         */
        () => {
            // tslint:disable-next-line: max-line-length
            this.exportAsService.get(exportAsConfig).subscribe((/**
             * @param {?} header
             * @return {?}
             */
            header => {
                if (tables.length > 1) {
                    tables[1].id = this.elemID + '-table-body';
                    this.setInlineStyles(tables[1]);
                    /** @type {?} */
                    const exportAsConfig = {
                        type: 'png',
                        // the type you want to download
                        elementId: tables[1].id,
                        options
                    };
                    this.exportAsService.get(exportAsConfig).subscribe((/**
                     * @param {?} body
                     * @return {?}
                     */
                    body => {
                        this.combineTwoImages(header, body, format);
                    }));
                }
                else {
                    /** @type {?} */
                    const logDimensions = (/**
                     * @return {?}
                     */
                    () => {
                        console.log('Image Width', img.width, 'Image Height', img.height);
                    });
                    /** @type {?} */
                    const img = new Image();
                    img.onload = logDimensions;
                    img.src = header;
                    if (format === 'png') {
                        this.exportAsService.contentToBlob(header).subscribe((/**
                         * @param {?} blob
                         * @return {?}
                         */
                        blob => {
                            /** @type {?} */
                            const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + this.fileName + '.png';
                            this.exportAsService.downloadFromBlob(blob, filenameFormatted);
                            this._exportCompleted.next(true);
                        }));
                    }
                    else {
                        this.initExportToPdf(header);
                    }
                }
            }));
            clearInterval(interval);
        }), 100);
    }
    /**
     * @param {?} img1
     * @param {?} img2
     * @param {?} format
     * @return {?}
     */
    combineTwoImages(img1, img2, format) {
        /** @type {?} */
        const mergeImages = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.imagesLoaded++;
            if (this.imagesLoaded < 2) {
                return;
            }
            this.imagesLoaded = 0;
            /** @type {?} */
            const canvas = document.createElement('canvas');
            canvas.width = image1.width;
            canvas.height = image1.height + image2.height;
            /** @type {?} */
            const context = canvas.getContext('2d');
            context.drawImage(image1, 0, 0, image1.width, image1.height);
            context.drawImage(image2, 0, image1.height, image2.width, image2.height);
            /** @type {?} */
            const combined = canvas.toDataURL('image/png');
            console.log('Image Width', canvas.width, 'Image Height', canvas.height);
            if (format === 'png') {
                this.exportAsService.contentToBlob(combined).subscribe((/**
                 * @param {?} blob
                 * @return {?}
                 */
                blob => {
                    /** @type {?} */
                    const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + this.fileName + '.png';
                    this.exportAsService.downloadFromBlob(blob, filenameFormatted);
                    this._exportCompleted.next(true);
                }));
            }
            else {
                this.initExportToPdf(combined);
            }
        });
        /** @type {?} */
        const image1 = new Image();
        image1.onload = mergeImages;
        image1.src = img1;
        /** @type {?} */
        const image2 = new Image();
        image2.onload = mergeImages;
        image2.src = img2;
    }
    // Export table version 2
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    exportTablev2(exportConfig) {
        /** @type {?} */
        const doc = new jsPDF('l', 'mm', 'a4', 1);
        /** @type {?} */
        const columns = this.getColumns(exportConfig);
        /** @type {?} */
        const rows = this.getRows(exportConfig);
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
            (docdata) => {
                /** @type {?} */
                var textPos = docdata.cell.textPos;
                /** @type {?} */
                var dim = docdata.cell.height - docdata.cell.padding('vertical');
                /** @type {?} */
                const columnIdx = exportConfig.checkboxSelect ? docdata.column.index - 1 : docdata.column.index;
                /* Draw checkboxes header */
                if (exportConfig.checkboxSelect && docdata.section === 'head' && docdata.column.index === '0') {
                    if (exportConfig.selectedItems.length === exportConfig.data.length) {
                        doc.addImage(this.cmacsPdfImages.checkboxSelected, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxSelected', "FAST");
                    }
                    else if (!exportConfig.selectedItems.length) {
                        doc.addImage(this.cmacsPdfImages.checkboxEmpty, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxEmpty', "FAST");
                    }
                    else {
                        doc.addImage(this.cmacsPdfImages.checkboxIndeterminate, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxIndeterminate', "FAST");
                    }
                }
                /* Draw checkboxes body */
                if (exportConfig.checkboxSelect && docdata.section === 'body' && docdata.column.index === '0') {
                    /** @type {?} */
                    const row = exportConfig.data[docdata.row.index];
                    /** @type {?} */
                    const idx = exportConfig.selectedItems.indexOf(row[exportConfig.config.fieldId]);
                    if (idx < 0) {
                        doc.addImage(this.cmacsPdfImages.checkboxEmpty, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxEmpty', "FAST");
                    }
                    else {
                        doc.addImage(this.cmacsPdfImages.checkboxSelected, 'PNG', textPos.x, textPos.y, dim, dim, 'checkboxSelected', "FAST");
                    }
                }
                /* Draw header templates */
                if (exportConfig.config.fields[columnIdx] && exportConfig.config.fields[columnIdx].template && (docdata.section === 'head')) {
                    /** @type {?} */
                    var img = document.getElementById(exportConfig.config.fields[columnIdx].template.context.id);
                    this.setInlineStyles(img);
                    this.templatesHeaderQtty++;
                    this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
                }
                /* Draw body templates */
                if (exportConfig.config.fields[columnIdx] && exportConfig.config.fields[columnIdx].celdType === CeldType.TemplateRef && (docdata.section === 'body')) {
                    /** @type {?} */
                    var img = document.getElementById(exportConfig.config.fields[columnIdx].templateTdId + docdata.row.index);
                    this.setInlineStyles(img);
                    this.templatesCellQtty++;
                    this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
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
    }
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    getColumns(exportConfig) {
        /** @type {?} */
        const columns = [];
        if (exportConfig.checkboxSelect) {
            columns.push('');
        }
        exportConfig.config.fields.filter((/**
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
        return columns;
    }
    /**
     * @param {?} exportConfig
     * @return {?}
     */
    getRows(exportConfig) {
        /** @type {?} */
        const rows = [];
        exportConfig.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const itemToExport = [];
            if (exportConfig.checkboxSelect) {
                itemToExport.push('');
            }
            // tslint:disable-next-line: no-shadowed-variable
            exportConfig.config.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.celdType === CeldType.Default || item.celdType === CeldType.TemplateRef)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (field.celdType === CeldType.TemplateRef) {
                    itemToExport.push('');
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
    }
    /**
     * @param {?} doc
     * @param {?} data
     * @return {?}
     */
    renderTemplate(doc, data) {
        /** @type {?} */
        const img = this.images.pop();
        /** @type {?} */
        const options = {
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
        canvas => {
            /** @type {?} */
            const combined = canvas.toDataURL('image/png');
            doc.addImage(combined, 'PNG', img.x, img.y, img.width, img.height, img.src.id, "FAST");
            if (this.images.length) {
                this.renderTemplate(doc, data);
            }
            else {
                this.exportToPdfV2(doc);
            }
        }));
    }
    /**
     * @param {?} doc
     * @return {?}
     */
    exportToPdfV2(doc) {
        /** @type {?} */
        const getLogo = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const canvasL = document.createElement('canvas');
            /** @type {?} */
            const ctx = canvasL.getContext('2d');
            canvasL.height = imgLogo.height;
            canvasL.width = imgLogo.width;
            ctx.drawImage(imgLogo, 0, 0);
            /** @type {?} */
            const logo = canvasL.toDataURL('image/PNG');
            this.addFooters(doc, logo);
            /** @type {?} */
            const filenameFormatted = moment().format("DD.MM.YYYY.HH.mm.ss") + '_' + this.fileName + '.pdf';
            this._exportCompleted.next(true);
            doc.save(filenameFormatted);
        });
        /** @type {?} */
        const imgLogo = new Image();
        imgLogo.crossOrigin = "Anonymous";
        imgLogo.onload = getLogo;
        imgLogo.src = this.exportCompanyLogoUrl;
    }
}
UtilService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UtilService.ctorParameters = () => [
    { type: ExportAsService }
];
/** @nocollapse */ UtilService.ngInjectableDef = i0.defineInjectable({ factory: function UtilService_Factory() { return new UtilService(i0.inject(i1.ExportAsService)); }, token: UtilService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7OztNQUMxRCxNQUFNLEdBQUcsT0FBTztBQUN0QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzFELE1BQU0sT0FBTyxXQUFXOzs7O0lBb0J0QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQnBELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBQzlDLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFFdkIscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDckQsb0JBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENB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LENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUMvRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7O2NBRUssT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLENBQUM7OztZQXBkRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBUHZCLGVBQWU7Ozs7O0lBVXRCLCtCQUFjOztJQUNkLDZCQUFZOztJQUNaLHdDQUFtQzs7SUFDbkMscUNBQTZCOztJQUM3QixrQ0FBaUI7O0lBQ2pCLDJDQUE4Qzs7SUFDOUMsNkNBQThCOztJQUM5Qiw4Q0FBK0I7Ozs7O0lBRS9CLHVDQUE0RDs7SUFDNUQsc0NBQThEOzs7OztJQUU5RCxxQ0FJRTs7SUE0TkYsbUNBQWlCOztJQXFDakIsd0NBQXNCOztJQUN0QiwwQ0FBd0I7O0lBQ3hCLDZCQUFZOzs7OztJQWpRQSxzQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2VudW1zL3RlbXBsYXRlVHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG5cclxuICBmaWxlTmFtZSA9ICcnO1xyXG4gIGVsZW1JRCA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZSc7XHJcbiAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJztcclxuICBleHBvcnRUaXRsZSA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJztcclxuICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbDtcclxuICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydENvbXBsZXRlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBleHBvcnRDb21wbGV0ZWQgPSB0aGlzLl9leHBvcnRDb21wbGV0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgY21hY3NQZGZJbWFnZXMgPSB7XHJcbiAgICBjaGVja2JveEVtcHR5OiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCc0FBQUFhQ0FZQUFBQkdpQ2Z3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQUVuUUFBQkowQWQ1bUgzZ0FBQUIrU1VSQlZFaEw3WmJSQ29Bd0NFWDcvei9jNjhRSDl4UEdoYjBZUW1VV1VSNFliT0R1WWI2NFJSL2tSekptVmlMUzFscG80UzR5UEl3TVJXT01lWXFEREU5b1pMMzN1YnVPbDJWa2FFTVdYbGJKVGxPeUZFcVdRc2xTZUpjc2M4UmdpRzR4TWd3OEVabW5PTWpZSFo0QVJYZ2gyaEJaaDc4RmQvTlZtZW9LY3ZIT2tkOUNFNTBBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICBjaGVja2JveEluZGV0ZXJtaW5hdGU6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWFDQVlBQUFDa1ZEeUpBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBQ0lTVVJCVkVoTDdaWXhDc0FnREVWN25wNnhGM1ZWSE9JbFVyNTBrQ2FnVlZ0b213Y1poSmhIWEw0TFA4eFBoVEZHRGlHd2M2NnJ2UGQ1aG9ZUW9wR0lqbE0vS1NWVktvVFliQmJZOUl3UTRrbG1vYzJxQ3RmdFdwV1lNR1BDV3BXWU1HUENXcFc4UXpoQ2szQm1QR216aEJDaGlmQWNwVG1BQVJwSHZoaTRxOG1BS3J5VHJ3dVpkOFRhZExJbHhWOGdBQUFBQUVsRlRrU3VRbUNDJyxcclxuICAgIGNoZWNrYm94U2VsZWN0ZWQ6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWJDQVlBQUFCaUZwOXJBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBRTRTVVJCVkVoTDFaWlBTZ014SEVibk92WUM0alU4am5XcHV5NjlobDEzNWNxTjRBdzRCYlVpN1VKeEtiZ1NuRDgvODhZTUprR0dKSk1PK09DamFacjVIcGt1a2t3VXJVcFYxL0pWVlVsREo5MlFNZmhyVWNyZ3lQYXhFemM0TW5meTd2NVppdlZHcnE3enFPVGxwdXR3ZXkwUkM1NjJMOTA3SFFNZHJzd1M1ZVdqWGpxZVFuV1ozWmFJcmFlQ0xyUDcvNGcrUGtWZTMvVVhnNlFpSk1jWElvZG5JZzl2ZWxLVFROUkxacWMvUWNaY1Q3RG9acXNIQnE2RUxKMUhnMFE4VE1uSnBaNVErRWpBVzhRZmJKWWg4NVZBMUk3SWdjclJ1WjhFZ2tSQUdaTFozRjhDd1NLWUwyM0pZcVYvR0NCS0JMMk1UeCtpUlhDNzB3TVBSb2xDR0JTbFBDYm9NcnN0MFdRSEgyRkJvWTVqdGg0VHJnR3VoRXgzT1puc3VzVTdaYkNQbmRGSk4zU2lucVp0cFc2YWJzR1kwRUhYTHlMZklqcHpZcWdOdzZvQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSwgKSB7IH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRfdGV4X3NpemUodHh0LCBmb250KTogYW55IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBlbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgY29uc3QgdHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGgsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcclxuICAgICAgaGVpZ2h0OiBwYXJzZUludChjb250ZXh0LmZvbnQpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRzaXplO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VGFibGUoXHJcbiAgICBmb3JtYXQgPSAncG5nJyxcclxuICAgIGZpbGVOYW1lLFxyXG4gICAgZWxlbUlELFxyXG4gICAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJyxcclxuICAgIGV4cG9ydFVzZXJOYW1lID0gJ1VzZXIgTmFtZScsXHJcbiAgICBleHBvcnRUaXRsZSA9ICcnLFxyXG4gICAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnLFxyXG4gICAgZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IG51bGwsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGwpIHtcclxuXHJcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB0aGlzLmVsZW1JRCA9IGVsZW1JRDtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueU5hbWUgPSBleHBvcnRDb21wYW55TmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VXNlck5hbWUgPSBleHBvcnRVc2VyTmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VGl0bGUgPSBleHBvcnRUaXRsZTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueUxvZ29VcmwgPSBleHBvcnRDb21wYW55TG9nb1VybDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGg7XHJcbiAgICB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gZXhwb3J0VGFibGVDdXN0b21IZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGFibGUnKTtcclxuICAgIHRoaXMuZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KTtcclxuXHJcbiAgfVxyXG5cclxuICBpbml0RXhwb3J0VG9QZGYoaW1nRGF0YSkge1xyXG4gICAgY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNMLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhc0wuaGVpZ2h0ID0gaW1nTG9nby5oZWlnaHQ7XHJcbiAgICAgIGNhbnZhc0wud2lkdGggPSBpbWdMb2dvLndpZHRoO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0xvZ28sIDAsIDApO1xyXG4gICAgICBjb25zdCBsb2dvID0gY2FudmFzTC50b0RhdGFVUkwoJ2ltYWdlL1BORycpO1xyXG4gICAgICB0aGlzLnNhdmVJbWFnZVRvUGRmKGxvZ28sIGltZ0RhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZVRvUGRmKGxvZ29EYXRhLCBpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBjdXRJbWFnZVVwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgICAgY29uc3QgaW1nUHJvcHMgPSAoPGFueT5kb2MpLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgY29uc3QgY3V0cyA9IE1hdGgudHJ1bmMoaW1nUHJvcHMuaGVpZ2h0IC8gMjA4MCkgKyAxO1xyXG4gICAgICBjb25zdCBwZGZXaWR0aCA9IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA/IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA6IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC0gMiAqIDE1O1xyXG5cclxuICAgICAgbGV0IHBkZkhlaWdodCA9ICgxNTAwICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIGlmICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0KSB7XHJcbiAgICAgICAgcGRmSGVpZ2h0ID0gKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGN1dHM7IHkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyMDgwO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgeSAqIDIwODAsIGltZ1Byb3BzLndpZHRoLCAyMDgwLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9QTkdcIik7XHJcbiAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvYy5hZGRJbWFnZShpbWcsICdQTkcnLCAxNSwgMzUsIHBkZldpZHRoLCBwZGZIZWlnaHQsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGRGb290ZXJzKGRvYywgbG9nb0RhdGEpO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBjdXRJbWFnZVVwO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nRGF0YTtcclxuICB9XHJcblxyXG4gIGFkZEZvb3RlcnMoZG9jLCBsb2dvKSB7XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnTU1NTSBERCwgWVlZWScpO1xyXG4gICAgZG9jLnNldEZvbnQoJ3RpbWVzJyk7XHJcbiAgICBkb2Muc2V0VGV4dENvbG9yKDEwMSwgMTA4LCAxMjEpO1xyXG4gICAgZG9jLnNldEZvbnRTaXplKDkpO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gcGFnZUNvdW50OyBpKyspIHtcclxuICAgICAgZG9jLnNldFBhZ2UoaSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0Q29tcGFueU5hbWUsIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRVc2VyTmFtZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLmFkZEltYWdlKGxvZ28sICdQTkcnLCAxNSwgMTQsIDQwLCA1LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnYm9sZCcpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFRpdGxlLCAxNSwgMzAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ25vcm1hbCcpO1xyXG4gICAgICBkb2MudGV4dCgnUGFnZSAnICsgU3RyaW5nKGkpICsgJyBvZiAnICsgU3RyaW5nKHBhZ2VDb3VudCksIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dChkYXRlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldElubGluZVN0eWxlcyh0YXJnZXRFbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICdmaWxsJyxcclxuICAgICAgJ2NvbG9yJyxcclxuICAgICAgJ2ZvbnQtc2l6ZScsXHJcbiAgICAgICdzdHJva2UnLFxyXG4gICAgICAnZm9udCdcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHN2Z0VsZW1zID0gQXJyYXkuZnJvbSh0YXJnZXRFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpKTtcclxuICAgIGNvbnN0IHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4gPSAobm9kZTogU1ZHU1ZHRWxlbWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmICghbm9kZS5zdHlsZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGxldCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgICBmb3IgKGxldCB0cmFuc2Zvcm1Qcm9wZXJ0eSBvZiB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSBzdHlsZXNbdHJhbnNmb3JtUHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oY2hpbGQgYXMgU1ZHU1ZHRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IHN2Z0VsZW1lbnQgb2Ygc3ZnRWxlbXMpIHtcclxuICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihzdmdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCkge1xyXG4gICAgdGFibGVzWzBdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWhlYWRlcic7XHJcbiAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnNjcm9sbFksXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICBlbGVtZW50SWQ6IHRhYmxlc1swXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmdldChleHBvcnRBc0NvbmZpZykuc3Vic2NyaWJlKGhlYWRlciA9PiB7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgdGFibGVzWzFdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWJvZHknO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzFdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRhYmxlc1sxXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoYm9keSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluZVR3b0ltYWdlcyhoZWFkZXIsIGJvZHksIGZvcm1hdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGxvZ0RpbWVuc2lvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGltZy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGltZy5oZWlnaHQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGxvZ0RpbWVuc2lvbnM7XHJcbiAgICAgICAgICBpbWcuc3JjID0gaGVhZGVyO1xyXG5cclxuICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoaGVhZGVyKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihoZWFkZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXNMb2FkZWQgPSAwO1xyXG4gIGNvbWJpbmVUd29JbWFnZXMoaW1nMSwgaW1nMiwgZm9ybWF0KSB7XHJcbiAgICBjb25zdCBtZXJnZUltYWdlcyA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCsrO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXNMb2FkZWQgPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gMDtcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlMS53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlMS5oZWlnaHQgKyBpbWFnZTIuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlMSwgMCwgMCwgaW1hZ2UxLndpZHRoLCBpbWFnZTEuaGVpZ2h0KTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UyLCAwLCBpbWFnZTEuaGVpZ2h0LCBpbWFnZTIud2lkdGgsIGltYWdlMi5oZWlnaHQpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW1hZ2UgV2lkdGgnLCBjYW52YXMud2lkdGgsICdJbWFnZSBIZWlnaHQnLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihjb21iaW5lZCkuc3Vic2NyaWJlKGJsb2IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5fZXhwb3J0Q29tcGxldGVkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbml0RXhwb3J0VG9QZGYoY29tYmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTEub25sb2FkID0gbWVyZ2VJbWFnZXM7XHJcbiAgICBpbWFnZTEuc3JjID0gaW1nMTtcclxuXHJcbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMi5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMi5zcmMgPSBpbWcyO1xyXG4gIH1cclxuXHJcbiAgdGVtcGxhdGVzQ2VsbFF0dHkgPSAwO1xyXG4gIHRlbXBsYXRlc0hlYWRlclF0dHkgPSAwO1xyXG4gIGltYWdlcyA9IFtdO1xyXG5cclxuICAvLyBFeHBvcnQgdGFibGUgdmVyc2lvbiAyXHJcbiAgZXhwb3J0VGFibGV2MihcclxuICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgKSB7XHJcblxyXG4gICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCdsJywgJ21tJywgJ2E0JywgMSk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKGV4cG9ydENvbmZpZyk7XHJcbiAgICBjb25zdCByb3dzID0gdGhpcy5nZXRSb3dzKGV4cG9ydENvbmZpZyk7XHJcbiAgICBpZiAoISFleHBvcnRDb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwpXHJcbiAgICAgIHRoaXMuZXhwb3J0Q29tcGFueUxvZ29VcmwgPSBleHBvcnRDb25maWcuZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgICBpZiAoISFleHBvcnRDb25maWcuZXhwb3J0Q29tcGFueU5hbWUpXHJcbiAgICAgIHRoaXMuZXhwb3J0Q29tcGFueU5hbWUgPSBleHBvcnRDb25maWcuZXhwb3J0Q29tcGFueU5hbWU7XHJcbiAgICBpZiAoISFleHBvcnRDb25maWcuZXhwb3J0VXNlck5hbWUpXHJcbiAgICAgIHRoaXMuZXhwb3J0VXNlck5hbWUgPSBleHBvcnRDb25maWcuZXhwb3J0VXNlck5hbWU7XHJcbiAgICBpZiAoISFleHBvcnRDb25maWcuZmlsZU5hbWUpXHJcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBleHBvcnRDb25maWcuZmlsZU5hbWU7XHJcbiAgICBpZiAoISFleHBvcnRDb25maWcuZXhwb3J0VGl0bGUpXHJcbiAgICAgIHRoaXMuZXhwb3J0VGl0bGUgPSBleHBvcnRDb25maWcuZXhwb3J0VGl0bGU7XHJcblxyXG4gICAgZG9jLmF1dG9UYWJsZSh7XHJcbiAgICAgIGhlYWQ6IFtjb2x1bW5zXSxcclxuICAgICAgYm9keTogcm93cyxcclxuICAgICAgdGhlbWU6ICdwbGFpbicsXHJcbiAgICAgIGhlYWRTdHlsZXM6IHtcclxuICAgICAgICBmb250OiAndGltZXMnLFxyXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgZmlsbENvbG9yOiAnI2Y2ZjdmYicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udFNpemU6IDExXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHlTdHlsZXM6IHtcclxuICAgICAgICBmb250OiAndGltZXMnLFxyXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzk3YTBhZScsXHJcbiAgICAgICAgZm9udFNpemU6IDExXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtblN0eWxlczogZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlcyxcclxuICAgICAgbWFyZ2luOiB7IHRvcDogMzUsIGJvdHRvbTogMzAsIGxlZnQ6IDE1LCByaWdodDogMTUgfSxcclxuICAgICAgZGlkRHJhd0NlbGw6IChkb2NkYXRhKSA9PiB7XHJcbiAgICAgICAgdmFyIHRleHRQb3MgPSBkb2NkYXRhLmNlbGwudGV4dFBvcztcclxuICAgICAgICB2YXIgZGltID0gZG9jZGF0YS5jZWxsLmhlaWdodCAtIGRvY2RhdGEuY2VsbC5wYWRkaW5nKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbklkeCA9IGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCA/IGRvY2RhdGEuY29sdW1uLmluZGV4IC0gMSA6IGRvY2RhdGEuY29sdW1uLmluZGV4O1xyXG5cclxuICAgICAgLyogRHJhdyBjaGVja2JveGVzIGhlYWRlciAqL1xyXG4gICAgICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QgJiYgZG9jZGF0YS5zZWN0aW9uID09PSAnaGVhZCcgJiYgZG9jZGF0YS5jb2x1bW4uaW5kZXggPT09ICcwJykge1xyXG4gICAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gZXhwb3J0Q29uZmlnLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94U2VsZWN0ZWQsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveFNlbGVjdGVkJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94RW1wdHksICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveEVtcHR5JywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hJbmRldGVybWluYXRlLCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hJbmRldGVybWluYXRlJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8qIERyYXcgY2hlY2tib3hlcyBib2R5ICovXHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCAmJiBkb2NkYXRhLnNlY3Rpb24gPT09ICdib2R5JyAmJiBkb2NkYXRhLmNvbHVtbi5pbmRleCA9PT0gJzAnKSB7XHJcbiAgICAgICAgICBjb25zdCByb3cgPSBleHBvcnRDb25maWcuZGF0YVtkb2NkYXRhLnJvdy5pbmRleF07XHJcbiAgICAgICAgICBjb25zdCBpZHggPSBleHBvcnRDb25maWcuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHJvd1tleHBvcnRDb25maWcuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94RW1wdHksICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveEVtcHR5JywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hTZWxlY3RlZCwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94U2VsZWN0ZWQnLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogRHJhdyBoZWFkZXIgdGVtcGxhdGVzICovXHJcbiAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0gJiYgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XS50ZW1wbGF0ZSAmJiAoZG9jZGF0YS5zZWN0aW9uID09PSAnaGVhZCcpKSB7XHJcbiAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XS50ZW1wbGF0ZS5jb250ZXh0LmlkKTtcclxuICAgICAgICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKGltZyk7XHJcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlc0hlYWRlclF0dHkrKztcclxuICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goeyBzcmM6IGltZywgeDogdGV4dFBvcy54LCB5OiB0ZXh0UG9zLnksIHdpZHRoOiBkaW0sIGhlaWdodDogZGltIH0pO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAvKiBEcmF3IGJvZHkgdGVtcGxhdGVzICovICAgICAgIFxyXG4gICAgICAgIGlmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdICYmIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmICYmIChkb2NkYXRhLnNlY3Rpb24gPT09ICdib2R5JykpIHtcclxuICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdLnRlbXBsYXRlVGRJZCArIGRvY2RhdGEucm93LmluZGV4KTtcclxuICAgICAgICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKGltZyk7XHJcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlc0NlbGxRdHR5Kys7XHJcbiAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHsgc3JjOiBpbWcsIHg6IHRleHRQb3MueCwgeTogdGV4dFBvcy55LCB3aWR0aDogZGltLCBoZWlnaHQ6IGRpbSB9KTtcclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAvKiBEcmF3IGJvcmRlcnMgKi9cclxuICAgICAgICBpZiAoZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScpIHtcclxuICAgICAgICAgIHZhciBzID0gZG9jZGF0YS5jZWxsLnN0eWxlcztcclxuICAgICAgICAgIHMubGluZUNvbG9yID0gJyNERUUwRTUnO1xyXG4gICAgICAgICAgcy5saW5lV2lkdGggPSAwLjE7XHJcbiAgICAgICAgICBkb2MubGluZShkb2NkYXRhLmNlbGwueCwgZG9jZGF0YS50YWJsZS5jdXJzb3IueSwgZG9jZGF0YS5jZWxsLnggKyBkb2NkYXRhLmNlbGwud2lkdGgsIGRvY2RhdGEudGFibGUuY3Vyc29yLnksIHMpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoZG9jLCBleHBvcnRDb25maWcuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4cG9ydFRvUGRmVjIoZG9jKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1ucyhleHBvcnRDb25maWcpIHtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgY29sdW1ucy5wdXNoKCcnKTtcclxuICAgIH1cclxuICAgIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb2x1bW5zLnB1c2goZmllbGQuZGlzcGxheSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93cyhleHBvcnRDb25maWcpIHtcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGV4cG9ydENvbmZpZy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0V4cG9ydCA9IFtdO1xyXG4gICAgICBpZiAoZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0KSB7XHJcbiAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goJycpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGV4cG9ydENvbmZpZy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goZXhwb3J0Q29uZmlnLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGUoZG9jLCBkYXRhKSB7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltYWdlcy5wb3AoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBudWxsLFxyXG4gICAgICBzY2FsZTogMyxcclxuICAgICAgYWxsb3dUYWludDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsWTogLXdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgc2Nyb2xsWDogMCxcclxuICAgICAgaW1hZ2VUaW1lb3V0OiAwLFxyXG4gICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgaHRtbDJjYW52YXMoaW1nLnNyYywgb3B0aW9ucykudGhlbihjYW52YXMgPT4ge1xyXG4gICAgICBjb25zdCBjb21iaW5lZCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICBkb2MuYWRkSW1hZ2UoY29tYmluZWQsICdQTkcnLCBpbWcueCwgaW1nLnksIGltZy53aWR0aCwgaW1nLmhlaWdodCwgaW1nLnNyYy5pZCwgXCJGQVNUXCIpO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShkb2MsIGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VG9QZGZWMihkb2MpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvUGRmVjIoZG9jKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuYWRkRm9vdGVycyhkb2MsIGxvZ28pO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==