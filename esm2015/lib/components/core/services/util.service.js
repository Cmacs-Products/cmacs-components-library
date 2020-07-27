/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { ExportAsService } from 'ngx-export-as';
import * as i0 from "@angular/core";
import * as i1 from "ngx-export-as";
/** @type {?} */
const moment = moment_;
import jsPDF from 'jspdf';
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
        this.imagesLoaded = 0;
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
    /** @type {?} */
    UtilService.prototype.imagesLoaded;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sZUFBZSxDQUFDOzs7O01BQzFELE1BQU0sR0FBRyxPQUFPO0FBQ3RCLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUkxQixNQUFNLE9BQU8sV0FBVzs7OztJQVd0QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUcEQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixzQkFBaUIsR0FBRyxjQUFjLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxXQUFXLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFDOUMsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQTBOL0IsaUJBQVksR0FBRyxDQUFDLENBQUM7SUF4TndDLENBQUM7Ozs7SUFFMUQsTUFBTTtRQUNGLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOzs7a0JBRTdELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7OztrQkFHMUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsdUNBQXVDO2dCQUN2QyxDQUFDLENB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RyxJQUFJLENBQUM7O2NBRVosTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7OztZQXRRRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBTHZCLGVBQWU7Ozs7O0lBUXRCLCtCQUFjOztJQUNkLDZCQUFZOztJQUNaLHdDQUFtQzs7SUFDbkMscUNBQTZCOztJQUM3QixrQ0FBaUI7O0lBQ2pCLDJDQUE4Qzs7SUFDOUMsNkNBQThCOztJQUM5Qiw4Q0FBK0I7O0lBME4vQixtQ0FBaUI7Ozs7O0lBeE5MLHNDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyBFeHBvcnRBc1NlcnZpY2UsIEV4cG9ydEFzQ29uZmlnIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCB7IGltYWdlIH0gZnJvbSAnaHRtbDJjYW52YXMvZGlzdC90eXBlcy9jc3MvdHlwZXMvaW1hZ2UnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcblxyXG4gIGZpbGVOYW1lID0gJyc7XHJcbiAgZWxlbUlEID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJztcclxuICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnO1xyXG4gIGV4cG9ydFRpdGxlID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSwpIHsgfVxyXG5cclxuICB1dWlkdjQoKSB7XHJcbiAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XHJcblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICAgIHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldF90ZXhfc2l6ZSggdHh0LCBmb250KTogYW55IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBlbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgY29uc3QgdHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGgsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcclxuICAgICAgaGVpZ2h0IDogcGFyc2VJbnQoY29udGV4dC5mb250KVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0c2l6ZTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRhYmxlKFxyXG4gICAgZm9ybWF0ID0gJ3BuZycsXHJcbiAgICBmaWxlTmFtZSxcclxuICAgIGVsZW1JRCxcclxuICAgIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZScsXHJcbiAgICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnLFxyXG4gICAgZXhwb3J0VGl0bGUgPSAnJyxcclxuICAgIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsLFxyXG4gICAgZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBudWxsKSB7XHJcblxyXG4gICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgdGhpcy5lbGVtSUQgPSBlbGVtSUQ7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBhbnlOYW1lID0gZXhwb3J0Q29tcGFueU5hbWU7XHJcbiAgICB0aGlzLmV4cG9ydFVzZXJOYW1lID0gZXhwb3J0VXNlck5hbWU7XHJcbiAgICB0aGlzLmV4cG9ydFRpdGxlID0gZXhwb3J0VGl0bGU7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsID0gZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgICB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBleHBvcnRUYWJsZUN1c3RvbVdpZHRoO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhYmxlJyk7XHJcbiAgICB0aGlzLmdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5pdEV4cG9ydFRvUGRmKGltZ0RhdGEpIHsgIFxyXG4gICAgY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNMLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhc0wuaGVpZ2h0ID0gaW1nTG9nby5oZWlnaHQ7XHJcbiAgICAgIGNhbnZhc0wud2lkdGggPSBpbWdMb2dvLndpZHRoO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0xvZ28sIDAsIDApO1xyXG4gICAgICBjb25zdCBsb2dvID0gY2FudmFzTC50b0RhdGFVUkwoJ2ltYWdlL1BORycpO1xyXG4gICAgICB0aGlzLnNhdmVJbWFnZVRvUGRmKGxvZ28sIGltZ0RhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZVRvUGRmKGxvZ29EYXRhLCBpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBjdXRJbWFnZVVwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgICAgY29uc3QgaW1nUHJvcHMgPSAoPGFueT5kb2MpLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgY29uc3QgY3V0cyA9IE1hdGgudHJ1bmMoaW1nUHJvcHMuaGVpZ2h0IC8gMjA4MCkgKyAxO1xyXG4gICAgICBjb25zdCBwZGZXaWR0aCA9IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA/IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA6IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC0gMiAqIDE1O1xyXG5cclxuICAgICAgbGV0IHBkZkhlaWdodCA9ICgxNTAwICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIGlmICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0KSB7XHJcbiAgICAgICAgcGRmSGVpZ2h0ID0gKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGN1dHM7IHkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyMDgwO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgeSAqIDIwODAsIGltZ1Byb3BzLndpZHRoLCAyMDgwLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9QTkdcIik7XHJcbiAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvYy5hZGRJbWFnZShpbWcsICdQTkcnLCAxNSwgMzUsIHBkZldpZHRoLCBwZGZIZWlnaHQsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5hZGRGb290ZXJzKGRvYywgbG9nb0RhdGEpO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICBkb2Muc2F2ZShmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGN1dEltYWdlVXA7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWdEYXRhO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9vdGVycyhkb2MsIGxvZ28pIHtcclxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERELCBZWVlZJyk7XHJcbiAgICBkb2Muc2V0Rm9udCgndGltZXMnKTtcclxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMTAxLCAxMDgsIDEyMSk7XHJcbiAgICBkb2Muc2V0Rm9udFNpemUoOSk7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBwYWdlQ291bnQ7IGkrKykge1xyXG4gICAgICBkb2Muc2V0UGFnZShpKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRDb21wYW55TmFtZSwgMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFVzZXJOYW1lLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MuYWRkSW1hZ2UobG9nbywgJ1BORycsIDE1LCAxNCwgNDAsIDUsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdib2xkJyk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VGl0bGUsIDE1LCAzMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnbm9ybWFsJyk7XHJcbiAgICAgIGRvYy50ZXh0KCdQYWdlICcgKyBTdHJpbmcoaSkgKyAnIG9mICcgKyBTdHJpbmcocGFnZUNvdW50KSwgMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KGRhdGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lU3R5bGVzKHRhcmdldEVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtUHJvcGVydGllcyA9IFtcclxuICAgICAgJ2ZpbGwnLFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAnZm9udC1zaXplJyxcclxuICAgICAgJ3N0cm9rZScsXHJcbiAgICAgICdmb250J1xyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgc3ZnRWxlbXMgPSBBcnJheS5mcm9tKHRhcmdldEVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIikpO1xyXG4gICAgY29uc3QgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbiA9IChub2RlOiBTVkdTVkdFbGVtZW50IHwgSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKCFub2RlLnN0eWxlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgbGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICAgIGZvciAobGV0IHRyYW5zZm9ybVByb3BlcnR5IG9mIHRyYW5zZm9ybVByb3BlcnRpZXMpIHtcclxuICAgICAgICBub2RlLnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHN0eWxlc1t0cmFuc2Zvcm1Qcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihjaGlsZCBhcyBTVkdTVkdFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgc3ZnRWxlbWVudCBvZiBzdmdFbGVtcykge1xyXG4gICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKHN2Z0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KSB7XHJcbiAgICB0YWJsZXNbMF0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtaGVhZGVyJztcclxuICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKHRhYmxlc1swXSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IC13aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgaW1hZ2VUaW1lb3V0OiAwLFxyXG4gICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgIGVsZW1lbnRJZDogdGFibGVzWzBdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgIG9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoaGVhZGVyID0+IHtcclxuICAgICBcclxuICAgICAgICBpZiAodGFibGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIHRhYmxlc1sxXS5pZCA9IHRoaXMuZWxlbUlEICsgJy10YWJsZS1ib2R5JztcclxuICAgICAgICAgIHRoaXMuc2V0SW5saW5lU3R5bGVzKHRhYmxlc1sxXSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgICAgICAgZWxlbWVudElkOiB0YWJsZXNbMV0uaWQsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcclxuICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmdldChleHBvcnRBc0NvbmZpZykuc3Vic2NyaWJlKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJpbmVUd29JbWFnZXMoaGVhZGVyLCBib2R5LCBmb3JtYXQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBsb2dEaW1lbnNpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgV2lkdGgnLCBpbWcud2lkdGgsICdJbWFnZSBIZWlnaHQnLCBpbWcuaGVpZ2h0KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgIGltZy5vbmxvYWQgPSBsb2dEaW1lbnNpb25zO1xyXG4gICAgICAgICAgaW1nLnNyYyA9IGhlYWRlcjtcclxuXHJcbiAgICAgICAgICBpZiAoZm9ybWF0ID09PSAncG5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGhlYWRlcikuc3Vic2NyaWJlKGJsb2IgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBuZyc7XHJcbiAgICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RXhwb3J0VG9QZGYoaGVhZGVyKTtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXNMb2FkZWQgPSAwO1xyXG4gIGNvbWJpbmVUd29JbWFnZXMoaW1nMSwgaW1nMiwgZm9ybWF0KSB7XHJcbiAgICBjb25zdCBtZXJnZUltYWdlcyA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCsrO1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXNMb2FkZWQgPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gMDtcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlMS53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlMS5oZWlnaHQgKyBpbWFnZTIuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlMSwgMCwgMCwgaW1hZ2UxLndpZHRoLCBpbWFnZTEuaGVpZ2h0KTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UyLCAwLCBpbWFnZTEuaGVpZ2h0LCBpbWFnZTIud2lkdGgsIGltYWdlMi5oZWlnaHQpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICBjb25zb2xlLmxvZygnSW1hZ2UgV2lkdGgnLCBjYW52YXMud2lkdGgsICdJbWFnZSBIZWlnaHQnLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihjb21iaW5lZCkuc3Vic2NyaWJlKGJsb2IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGNvbWJpbmVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UxLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UxLnNyYyA9IGltZzE7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTIub25sb2FkID0gbWVyZ2VJbWFnZXM7XHJcbiAgICBpbWFnZTIuc3JjID0gaW1nMjtcclxuICB9XHJcbn1cclxuIl19