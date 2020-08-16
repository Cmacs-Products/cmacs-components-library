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
        const columns = (/** @type {?} */ ((/** @type {?} */ (exportConfig.columns)))) ? exportConfig.columns : this.getColumns(exportConfig);
        /** @type {?} */
        const rows = (/** @type {?} */ ((/** @type {?} */ (exportConfig.rows)))) ? exportConfig.rows : this.getRows(exportConfig);
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
            (docdata) => {
                if (exportConfig.rows === null || exportConfig.rows === undefined) {
                    /** @type {?} */
                    var textPos = docdata.cell.textPos;
                    /** @type {?} */
                    var dim = docdata.cell.height - docdata.cell.padding('vertical');
                    /** @type {?} */
                    const customWidth = exportConfig.columnStyles && exportConfig.columnStyles[docdata.column.index]
                        && exportConfig.columnStyles[docdata.column.index].contentWidth ? exportConfig.columnStyles[docdata.column.index].contentWidth : dim;
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
                        var img = document.getElementById(exportConfig.elemID + 'column' + columnIdx);
                        this.setInlineStyles(img);
                        this.images.push({ src: img, x: textPos.x, y: textPos.y, width: dim, height: dim });
                    }
                    /* Draw body templates and tags */
                    if (exportConfig.config.fields[columnIdx]
                        && (exportConfig.config.fields[columnIdx].celdType === CeldType.TemplateRef
                            || exportConfig.config.fields[columnIdx].celdType === CeldType.Tag)
                        && (docdata.section === 'body')) {
                        /** @type {?} */
                        var img = document.getElementById(exportConfig.elemID + 'column' + columnIdx + 'row' + docdata.row.index);
                        if (img) {
                            this.setInlineStyles(img);
                            this.images.push({ src: img, x: textPos.x, y: textPos.y, width: customWidth, height: dim });
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
        item => item.celdType === CeldType.Default
            || item.celdType === CeldType.Tag
            || item.celdType === CeldType.TemplateRef)).forEach((/**
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
            item => item.celdType === CeldType.Default ||
                item.celdType === CeldType.TemplateRef || item.celdType === CeldType.Tag)).forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (field.celdType === CeldType.TemplateRef || field.celdType === CeldType.Tag) {
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
        doc.setPage(1);
        /** @type {?} */
        const img = this.images.pop();
        img.src.style.width = 'fit-content';
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
            img.src.style.width = 'inherited';
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
    UtilService.prototype.images;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7OztNQUMxRCxNQUFNLEdBQUcsT0FBTztBQUN0QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzFELE1BQU0sT0FBTyxXQUFXOzs7O0lBb0J0QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQnBELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBQzlDLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFFdkIscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDckQsb0JBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENB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QUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTTtZQUMvRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7O2NBRUssT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLENBQUM7OztZQWplRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBUHZCLGVBQWU7Ozs7O0lBVXRCLCtCQUFjOztJQUNkLDZCQUFZOztJQUNaLHdDQUFtQzs7SUFDbkMscUNBQTZCOztJQUM3QixrQ0FBaUI7O0lBQ2pCLDJDQUE4Qzs7SUFDOUMsNkNBQThCOztJQUM5Qiw4Q0FBK0I7Ozs7O0lBRS9CLHVDQUE0RDs7SUFDNUQsc0NBQThEOzs7OztJQUU5RCxxQ0FJRTs7SUE0TkYsbUNBQWlCOztJQXFDakIsNkJBQVk7Ozs7O0lBL1BBLHNDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcblxyXG4gIGZpbGVOYW1lID0gJyc7XHJcbiAgZWxlbUlEID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJztcclxuICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnO1xyXG4gIGV4cG9ydFRpdGxlID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0Q29tcGxldGVkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIGV4cG9ydENvbXBsZXRlZCA9IHRoaXMuX2V4cG9ydENvbXBsZXRlZC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBjbWFjc1BkZkltYWdlcyA9IHtcclxuICAgIGNoZWNrYm94RW1wdHk6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWFDQVlBQUFCR2lDZndBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRW5RQUFCSjBBZDVtSDNnQUFBQitTVVJCVkVoTDdaYlJDb0F3Q0VYNy96L2M2OFFIOXhQR2hiMFlRbVVXVVI0WWJPRHVZYjY0UlIva1J6Sm1WaUxTMWxwbzRTNHlQSXdNUldPTWVZcURERTlvWkwzM3VidU9sMlZrYUVNV1hsYkpUbE95RkVxV1FzbFNlSmNzYzhSZ2lHNHhNZ3c4RVptbk9NallIWjRBUlhnaDJoQlpoNzhGZC9OVm1lb0tjdkhPa2Q5Q0U1MEFBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgIGNoZWNrYm94SW5kZXRlcm1pbmF0ZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYUNBWUFBQUNrVkR5SkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFDSVNVUkJWRWhMN1pZeENzQWdERVY3bnA2eEYzVlZIT0lsVXI1MGtDYWdWVnRvbXdjWmhKaEhYTDRMUDh4UGhURkdEaUd3YzY2cnZQZDVob1lRb3BHSWpsTS9LU1ZWS29UWWJCYlk5SXdRNGtsbW9jMnFDdGZ0V3BXWU1HUENXcFdZTUdQQ1dwVzhRemhDazNCbVBHbXpoQkNoaWZBY3BUbUFBUnBIdmhpNHE4bUFLcnlUcnd1WmQ4VGFkTElseFY4Z0FBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgY2hlY2tib3hTZWxlY3RlZDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYkNBWUFBQUJpRnA5ckFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFFblFBQUJKMEFkNW1IM2dBQUFFNFNVUkJWRWhMMVpaUFNnTXhIRWJuT3ZZQzRqVThqbldwdXk2OWhsMTM1Y3FONEF3NEJiVWk3VUp4S2JnU25EOC84OFlNSmtHR0pKTU8rT0NqYVpyNUhwa3Vra3dVclVwVjEvSlZWVWxESjkyUU1maHJVY3JneVBheEV6YzRNbmZ5N3Y1Wml2VkdycTd6cU9UbHB1dHdleTBSQzU2Mkw5MDdIUU1kcnN3UzVlV2pYanFlUW5XWjNaYUlyYWVDTHJQNy80ZytQa1ZlMy9VWGc2UWlKTWNYSW9kbklnOXZlbEtUVE5STFpxYy9RY1pjVDdEb1pxc0hCcTZFTEoxSGcwUThUTW5KcFo1UStFakFXOFFmYkpZaDg1VkExSTdJZ2NyUnVaOEVna1JBR1pMWjNGOEN3U0tZTDIzSllxVi9HQ0JLQkwyTVR4K2lSWEM3MHdNUFJvbENHQlNsUENib01yc3QwV1FISDJGQm9ZNWp0aDRUcmdHdWhFeDNPWm5zdXNVN1piQ1BuZEZKTjNTaW5xWnRwVzZhYnNHWTBFSFhMeUxmSWpwellxZ053Nm9BQUFBQVNVVk9SSzVDWUlJPSdcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLCApIHsgfVxyXG5cclxuICB1dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgY29uc3QgdiA9IGMgPT0gJ3gnID9cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldF90ZXhfc2l6ZSh0eHQsIGZvbnQpOiBhbnkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodHh0KS53aWR0aCxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByYWRpeFxyXG4gICAgICBoZWlnaHQ6IHBhcnNlSW50KGNvbnRleHQuZm9udClcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHNpemU7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUYWJsZShcclxuICAgIGZvcm1hdCA9ICdwbmcnLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgICBlbGVtSUQsXHJcbiAgICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnLFxyXG4gICAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJyxcclxuICAgIGV4cG9ydFRpdGxlID0gJycsXHJcbiAgICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbCxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbCkge1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydFVzZXJOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydFRpdGxlO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gZXhwb3J0VGFibGVDdXN0b21XaWR0aDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBleHBvcnRUYWJsZUN1c3RvbUhlaWdodDtcclxuXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG4gICAgdGhpcy5nZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXRFeHBvcnRUb1BkZihpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuc2F2ZUltYWdlVG9QZGYobG9nbywgaW1nRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvZ28uY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nTG9nby5vbmxvYWQgPSBnZXRMb2dvO1xyXG4gICAgaW1nTG9nby5zcmMgPSB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUltYWdlVG9QZGYobG9nb0RhdGEsIGltZ0RhdGEpIHtcclxuICAgIGNvbnN0IGN1dEltYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgICBjb25zdCBpbWdQcm9wcyA9ICg8YW55PmRvYykuZ2V0SW1hZ2VQcm9wZXJ0aWVzKGltZ0RhdGEpO1xyXG4gICAgICBjb25zdCBjdXRzID0gTWF0aC50cnVuYyhpbWdQcm9wcy5oZWlnaHQgLyAyMDgwKSArIDE7XHJcbiAgICAgIGNvbnN0IHBkZldpZHRoID0gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID8gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoIDogZG9jLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAyICogMTU7XHJcblxyXG4gICAgICBsZXQgcGRmSGVpZ2h0ID0gKDE1MDAgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQpIHtcclxuICAgICAgICBwZGZIZWlnaHQgPSAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY3V0czsgeSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwODA7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCB5ICogMjA4MCwgaW1nUHJvcHMud2lkdGgsIDIwODAsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL1BOR1wiKTtcclxuICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jLmFkZEltYWdlKGltZywgJ1BORycsIDE1LCAzNSwgcGRmV2lkdGgsIHBkZkhlaWdodCwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZEZvb3RlcnMoZG9jLCBsb2dvRGF0YSk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGN1dEltYWdlVXA7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWdEYXRhO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9vdGVycyhkb2MsIGxvZ28pIHtcclxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERELCBZWVlZJyk7XHJcbiAgICBkb2Muc2V0Rm9udCgndGltZXMnKTtcclxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMTAxLCAxMDgsIDEyMSk7XHJcbiAgICBkb2Muc2V0Rm9udFNpemUoOSk7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBwYWdlQ291bnQ7IGkrKykge1xyXG4gICAgICBkb2Muc2V0UGFnZShpKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRDb21wYW55TmFtZSwgMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFVzZXJOYW1lLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MuYWRkSW1hZ2UobG9nbywgJ1BORycsIDE1LCAxNCwgNDAsIDUsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdib2xkJyk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VGl0bGUsIDE1LCAzMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnbm9ybWFsJyk7XHJcbiAgICAgIGRvYy50ZXh0KCdQYWdlICcgKyBTdHJpbmcoaSkgKyAnIG9mICcgKyBTdHJpbmcocGFnZUNvdW50KSwgMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KGRhdGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lU3R5bGVzKHRhcmdldEVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtUHJvcGVydGllcyA9IFtcclxuICAgICAgJ2ZpbGwnLFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAnZm9udC1zaXplJyxcclxuICAgICAgJ3N0cm9rZScsXHJcbiAgICAgICdmb250J1xyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgc3ZnRWxlbXMgPSBBcnJheS5mcm9tKHRhcmdldEVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIikpO1xyXG4gICAgY29uc3QgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbiA9IChub2RlOiBTVkdTVkdFbGVtZW50IHwgSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKCFub2RlLnN0eWxlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgbGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICAgIGZvciAobGV0IHRyYW5zZm9ybVByb3BlcnR5IG9mIHRyYW5zZm9ybVByb3BlcnRpZXMpIHtcclxuICAgICAgICBub2RlLnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHN0eWxlc1t0cmFuc2Zvcm1Qcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihjaGlsZCBhcyBTVkdTVkdFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgc3ZnRWxlbWVudCBvZiBzdmdFbGVtcykge1xyXG4gICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKHN2Z0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KSB7XHJcbiAgICB0YWJsZXNbMF0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtaGVhZGVyJztcclxuICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKHRhYmxlc1swXSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgaW1hZ2VUaW1lb3V0OiAwLFxyXG4gICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgIGVsZW1lbnRJZDogdGFibGVzWzBdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgIG9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoaGVhZGVyID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0YWJsZXNbMV0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtYm9keSc7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMV0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGFibGVzWzFdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5lVHdvSW1hZ2VzKGhlYWRlciwgYm9keSwgZm9ybWF0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbG9nRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgaW1nLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICBpbWcub25sb2FkID0gbG9nRGltZW5zaW9ucztcclxuICAgICAgICAgIGltZy5zcmMgPSBoZWFkZXI7XHJcblxyXG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihoZWFkZXIpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGhlYWRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltYWdlc0xvYWRlZCA9IDA7XHJcbiAgY29tYmluZVR3b0ltYWdlcyhpbWcxLCBpbWcyLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IG1lcmdlSW1hZ2VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA8IDIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2UxLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UxLmhlaWdodCArIGltYWdlMi5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UxLCAwLCAwLCBpbWFnZTEud2lkdGgsIGltYWdlMS5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTIsIDAsIGltYWdlMS5oZWlnaHQsIGltYWdlMi53aWR0aCwgaW1hZ2UyLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGNhbnZhcy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGNvbWJpbmVkKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihjb21iaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMS5zcmMgPSBpbWcxO1xyXG5cclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltZzI7XHJcbiAgfVxyXG5cclxuICBpbWFnZXMgPSBbXTtcclxuXHJcbiAgLy8gRXhwb3J0IHRhYmxlIHZlcnNpb24gMlxyXG4gIGV4cG9ydFRhYmxldjIoXHJcbiAgICBleHBvcnRDb25maWdcclxuICAgICkge1xyXG5cclxuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGV4cG9ydENvbmZpZy5jb2x1bW5zISEgPyBleHBvcnRDb25maWcuY29sdW1ucyA6IHRoaXMuZ2V0Q29sdW1ucyhleHBvcnRDb25maWcpO1xyXG4gICAgY29uc3Qgcm93cyA9IGV4cG9ydENvbmZpZy5yb3dzISEgPyBleHBvcnRDb25maWcucm93cyA6IHRoaXMuZ2V0Um93cyhleHBvcnRDb25maWcpO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsKVxyXG4gICAgICB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsID0gZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlOYW1lKVxyXG4gICAgICB0aGlzLmV4cG9ydENvbXBhbnlOYW1lID0gZXhwb3J0Q29uZmlnLmV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydFVzZXJOYW1lKVxyXG4gICAgICB0aGlzLmV4cG9ydFVzZXJOYW1lID0gZXhwb3J0Q29uZmlnLmV4cG9ydFVzZXJOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmZpbGVOYW1lKVxyXG4gICAgICB0aGlzLmZpbGVOYW1lID0gZXhwb3J0Q29uZmlnLmZpbGVOYW1lO1xyXG4gICAgaWYgKCEhZXhwb3J0Q29uZmlnLmV4cG9ydFRpdGxlKVxyXG4gICAgICB0aGlzLmV4cG9ydFRpdGxlID0gZXhwb3J0Q29uZmlnLmV4cG9ydFRpdGxlO1xyXG5cclxuICAgIGRvYy5hdXRvVGFibGUoe1xyXG4gICAgICBoZWFkOiBleHBvcnRDb25maWcuY29sdW1ucyEhID8gbnVsbCA6IFtjb2x1bW5zXSxcclxuICAgICAgY29sdW1uczogZXhwb3J0Q29uZmlnLmNvbHVtbnMhISA/IGNvbHVtbnMgOiBudWxsLFxyXG4gICAgICBib2R5OiByb3dzLFxyXG4gICAgICB0aGVtZTogJ3BsYWluJyxcclxuICAgICAgaGVhZFN0eWxlczoge1xyXG4gICAgICAgIGZvbnQ6ICd0aW1lcycsXHJcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICBmaWxsQ29sb3I6ICcjZjZmN2ZiJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250U2l6ZTogMTFcclxuICAgICAgfSxcclxuICAgICAgYm9keVN0eWxlczoge1xyXG4gICAgICAgIGZvbnQ6ICd0aW1lcycsXHJcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICcjOTdhMGFlJyxcclxuICAgICAgICBmb250U2l6ZTogMTFcclxuICAgICAgfSxcclxuICAgICAgY29sdW1uU3R5bGVzOiBleHBvcnRDb25maWcuY29sdW1uU3R5bGVzLFxyXG4gICAgICBtYXJnaW46IHsgdG9wOiAzNSwgYm90dG9tOiAzMCwgbGVmdDogMTUsIHJpZ2h0OiAxNSB9LFxyXG4gICAgICBkaWREcmF3Q2VsbDogKGRvY2RhdGEpID0+IHtcclxuICAgICAgICBpZiAoZXhwb3J0Q29uZmlnLnJvd3MgPT09IG51bGwgfHwgZXhwb3J0Q29uZmlnLnJvd3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdmFyIHRleHRQb3MgPSBkb2NkYXRhLmNlbGwudGV4dFBvcztcclxuICAgICAgICAgIHZhciBkaW0gPSBkb2NkYXRhLmNlbGwuaGVpZ2h0IC0gZG9jZGF0YS5jZWxsLnBhZGRpbmcoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21XaWR0aCA9IGV4cG9ydENvbmZpZy5jb2x1bW5TdHlsZXMgJiYgZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlc1tkb2NkYXRhLmNvbHVtbi5pbmRleF1cclxuICAgICAgICAgICAgJiYgZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlc1tkb2NkYXRhLmNvbHVtbi5pbmRleF0uY29udGVudFdpZHRoID8gZXhwb3J0Q29uZmlnLmNvbHVtblN0eWxlc1tkb2NkYXRhLmNvbHVtbi5pbmRleF0uY29udGVudFdpZHRoIDogZGltO1xyXG4gICAgICAgICAgY29uc3QgY29sdW1uSWR4ID0gZXhwb3J0Q29uZmlnLmNoZWNrYm94U2VsZWN0ID8gZG9jZGF0YS5jb2x1bW4uaW5kZXggLSAxIDogZG9jZGF0YS5jb2x1bW4uaW5kZXg7XHJcblxyXG4gICAgICAgICAgLyogRHJhdyBjaGVja2JveGVzIGhlYWRlciAqL1xyXG4gICAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCAmJiBkb2NkYXRhLnNlY3Rpb24gPT09ICdoZWFkJyAmJiBkb2NkYXRhLmNvbHVtbi5pbmRleCA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgIGlmIChleHBvcnRDb25maWcuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IGV4cG9ydENvbmZpZy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIGRvYy5hZGRJbWFnZSh0aGlzLmNtYWNzUGRmSW1hZ2VzLmNoZWNrYm94U2VsZWN0ZWQsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveFNlbGVjdGVkJywgXCJGQVNUXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFleHBvcnRDb25maWcuc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveEVtcHR5LCAnUE5HJywgdGV4dFBvcy54LCB0ZXh0UG9zLnksIGRpbSwgZGltLCAnY2hlY2tib3hFbXB0eScsIFwiRkFTVFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkb2MuYWRkSW1hZ2UodGhpcy5jbWFjc1BkZkltYWdlcy5jaGVja2JveEluZGV0ZXJtaW5hdGUsICdQTkcnLCB0ZXh0UG9zLngsIHRleHRQb3MueSwgZGltLCBkaW0sICdjaGVja2JveEluZGV0ZXJtaW5hdGUnLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBEcmF3IGNoZWNrYm94ZXMgYm9keSAqL1xyXG4gICAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCAmJiBkb2NkYXRhLnNlY3Rpb24gPT09ICdib2R5JyAmJiBkb2NkYXRhLmNvbHVtbi5pbmRleCA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGV4cG9ydENvbmZpZy5kYXRhW2RvY2RhdGEucm93LmluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gZXhwb3J0Q29uZmlnLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihyb3dbZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hFbXB0eSwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94RW1wdHknLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZG9jLmFkZEltYWdlKHRoaXMuY21hY3NQZGZJbWFnZXMuY2hlY2tib3hTZWxlY3RlZCwgJ1BORycsIHRleHRQb3MueCwgdGV4dFBvcy55LCBkaW0sIGRpbSwgJ2NoZWNrYm94U2VsZWN0ZWQnLCBcIkZBU1RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBEcmF3IGhlYWRlciB0ZW1wbGF0ZXMgKi9cclxuICAgICAgICAgIGlmIChleHBvcnRDb25maWcuY29uZmlnLmZpZWxkc1tjb2x1bW5JZHhdICYmIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0udGVtcGxhdGUgJiYgKGRvY2RhdGEuc2VjdGlvbiA9PT0gJ2hlYWQnKSkge1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXhwb3J0Q29uZmlnLmVsZW1JRCArICdjb2x1bW4nICsgY29sdW1uSWR4KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXMoaW1nKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh7IHNyYzogaW1nLCB4OiB0ZXh0UG9zLngsIHk6IHRleHRQb3MueSwgd2lkdGg6IGRpbSwgaGVpZ2h0OiBkaW0gfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogRHJhdyBib2R5IHRlbXBsYXRlcyBhbmQgdGFncyAqL1xyXG4gICAgICAgICAgaWYgKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF1cclxuICAgICAgICAgICAgJiYgKGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzW2NvbHVtbklkeF0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmXHJcbiAgICAgICAgICAgICAgfHwgZXhwb3J0Q29uZmlnLmNvbmZpZy5maWVsZHNbY29sdW1uSWR4XS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnKVxyXG4gICAgICAgICAgICAmJiAoZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cG9ydENvbmZpZy5lbGVtSUQgKyAnY29sdW1uJyArIGNvbHVtbklkeCArICdyb3cnICsgZG9jZGF0YS5yb3cuaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXMoaW1nKTtcclxuICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHsgc3JjOiBpbWcsIHg6IHRleHRQb3MueCwgeTogdGV4dFBvcy55LCB3aWR0aDogY3VzdG9tV2lkdGgsIGhlaWdodDogZGltIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEcmF3IGJvcmRlcnMgKi9cclxuICAgICAgICBpZiAoZG9jZGF0YS5zZWN0aW9uID09PSAnYm9keScpIHtcclxuICAgICAgICAgIHZhciBzID0gZG9jZGF0YS5jZWxsLnN0eWxlcztcclxuICAgICAgICAgIHMubGluZUNvbG9yID0gJyNERUUwRTUnO1xyXG4gICAgICAgICAgcy5saW5lV2lkdGggPSAwLjE7XHJcbiAgICAgICAgICBkb2MubGluZShkb2NkYXRhLmNlbGwueCwgZG9jZGF0YS50YWJsZS5jdXJzb3IueSwgZG9jZGF0YS5jZWxsLnggKyBkb2NkYXRhLmNlbGwud2lkdGgsIGRvY2RhdGEudGFibGUuY3Vyc29yLnksIHMpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoZG9jLCBleHBvcnRDb25maWcuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4cG9ydFRvUGRmVjIoZG9jKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1ucyhleHBvcnRDb25maWcpIHtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGlmIChleHBvcnRDb25maWcuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgY29sdW1ucy5wdXNoKCcnKTtcclxuICAgIH1cclxuICAgIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHRcclxuICAgICAgfHwgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGFnXHJcbiAgICAgIHx8IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29sdW1ucy5wdXNoKGZpZWxkLmRpc3BsYXkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldFJvd3MoZXhwb3J0Q29uZmlnKSB7XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcbiAgICBleHBvcnRDb25maWcuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSBbXTtcclxuICAgICAgaWYgKGV4cG9ydENvbmZpZy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKCcnKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIGV4cG9ydENvbmZpZy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgfHxcclxuICAgICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZiB8fCBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYgfHwgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZykge1xyXG4gICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5TZWxlY3Q6XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKHNlbGVjdEl0ZW1bZmllbGQuc2VsZWN0LmxhYmVsXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydC5wdXNoKGV4cG9ydENvbmZpZy5kYXRlUGlwZS50cmFuc2Zvcm0oaXRlbVtmaWVsZC5wcm9wZXJ0eV0sICdNTU1NIGRkIHl5eXknKSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgICAgaXRlbVRvRXhwb3J0LnB1c2goZXhwb3J0Q29uZmlnLmRhdGVQaXBlLnRyYW5zZm9ybShpdGVtW2ZpZWxkLnByb3BlcnR5XSwgJ2g6bW0gYScpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnQucHVzaChpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcm93cy5wdXNoKGl0ZW1Ub0V4cG9ydCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGUoZG9jLCBkYXRhKSB7XHJcbiAgICBkb2Muc2V0UGFnZSgxKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1hZ2VzLnBvcCgpO1xyXG4gICAgaW1nLnNyYy5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgIHNjcm9sbFg6IDAsXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGh0bWwyY2FudmFzKGltZy5zcmMsIG9wdGlvbnMpLnRoZW4oY2FudmFzID0+IHtcclxuICAgICAgY29uc3QgY29tYmluZWQgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICAgICAgZG9jLmFkZEltYWdlKGNvbWJpbmVkLCAnUE5HJywgaW1nLngsIGltZy55LCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIGltZy5zcmMuaWQsIFwiRkFTVFwiKTtcclxuICAgICAgaW1nLnNyYy5zdHlsZS53aWR0aCA9ICdpbmhlcml0ZWQnO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShkb2MsIGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0VG9QZGZWMihkb2MpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRvUGRmVjIoZG9jKSB7XHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuYWRkRm9vdGVycyhkb2MsIGxvZ28pO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==