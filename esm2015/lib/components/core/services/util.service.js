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
import { Subject } from 'rxjs';
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
    /** @type {?} */
    UtilService.prototype.imagesLoaded;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sZUFBZSxDQUFDOzs7O01BQzFELE1BQU0sR0FBRyxPQUFPO0FBQ3RCLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE1BQU0sT0FBTyxXQUFXOzs7O0lBY3RCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVpwRCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQUM3QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix5QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM5QywyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBNE45RCxpQkFBWSxHQUFHLENBQUMsQ0FBQztJQTFOd0MsQ0FBQzs7OztJQUUxRCxNQUFNO1FBQ0YsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLEVB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LENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUE7O2NBRUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDOztjQUVaLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7WUE1UUYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztZQU52QixlQUFlOzs7OztJQVN0QiwrQkFBYzs7SUFDZCw2QkFBWTs7SUFDWix3Q0FBbUM7O0lBQ25DLHFDQUE2Qjs7SUFDN0Isa0NBQWlCOztJQUNqQiwyQ0FBOEM7O0lBQzlDLDZDQUE4Qjs7SUFDOUIsOENBQStCOzs7OztJQUUvQix1Q0FBNEQ7O0lBQzVELHNDQUE4RDs7SUE0TjlELG1DQUFpQjs7Ozs7SUExTkwsc0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IEV4cG9ydEFzU2VydmljZSwgRXhwb3J0QXNDb25maWcgfSBmcm9tICduZ3gtZXhwb3J0LWFzJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tICdodG1sMmNhbnZhcy9kaXN0L3R5cGVzL2Nzcy90eXBlcy9pbWFnZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG5cclxuICBmaWxlTmFtZSA9ICcnO1xyXG4gIGVsZW1JRCA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZSc7XHJcbiAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJztcclxuICBleHBvcnRUaXRsZSA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJztcclxuICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbDtcclxuICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydENvbXBsZXRlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBleHBvcnRDb21wbGV0ZWQgPSB0aGlzLl9leHBvcnRDb21wbGV0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhwb3J0QXNTZXJ2aWNlOiBFeHBvcnRBc1NlcnZpY2UsKSB7IH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICBjb25zdCB2ID0gYyA9PSAneCcgP1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgICByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRfdGV4X3NpemUoIHR4dCwgZm9udCk6IGFueSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29udGV4dC5mb250ID0gZm9udDtcclxuICAgIGNvbnN0IHRzaXplID0ge1xyXG4gICAgICB3aWR0aDogY29udGV4dC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoLFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHJhZGl4XHJcbiAgICAgIGhlaWdodCA6IHBhcnNlSW50KGNvbnRleHQuZm9udClcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHNpemU7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUYWJsZShcclxuICAgIGZvcm1hdCA9ICdwbmcnLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgICBlbGVtSUQsXHJcbiAgICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnLFxyXG4gICAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJyxcclxuICAgIGV4cG9ydFRpdGxlID0gJycsXHJcbiAgICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbCxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbCkge1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydFVzZXJOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydFRpdGxlO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gZXhwb3J0VGFibGVDdXN0b21XaWR0aDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBleHBvcnRUYWJsZUN1c3RvbUhlaWdodDtcclxuXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG4gICAgdGhpcy5nZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXRFeHBvcnRUb1BkZihpbWdEYXRhKSB7ICBcclxuICAgIGNvbnN0IGdldExvZ28gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbnZhc0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzTC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjYW52YXNMLmhlaWdodCA9IGltZ0xvZ28uaGVpZ2h0O1xyXG4gICAgICBjYW52YXNMLndpZHRoID0gaW1nTG9nby53aWR0aDtcclxuICAgICAgY3R4LmRyYXdJbWFnZShpbWdMb2dvLCAwLCAwKTtcclxuICAgICAgY29uc3QgbG9nbyA9IGNhbnZhc0wudG9EYXRhVVJMKCdpbWFnZS9QTkcnKTtcclxuICAgICAgdGhpcy5zYXZlSW1hZ2VUb1BkZihsb2dvLCBpbWdEYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1nTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nTG9nby5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWdMb2dvLm9ubG9hZCA9IGdldExvZ287XHJcbiAgICBpbWdMb2dvLnNyYyA9IHRoaXMuZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgfVxyXG5cclxuICBzYXZlSW1hZ2VUb1BkZihsb2dvRGF0YSwgaW1nRGF0YSkge1xyXG4gICAgY29uc3QgY3V0SW1hZ2VVcCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCdsJywgJ21tJywgJ2E0JywgMSk7XHJcbiAgICAgIGNvbnN0IGltZ1Byb3BzID0gKDxhbnk+ZG9jKS5nZXRJbWFnZVByb3BlcnRpZXMoaW1nRGF0YSk7XHJcbiAgICAgIGNvbnN0IGN1dHMgPSBNYXRoLnRydW5jKGltZ1Byb3BzLmhlaWdodCAvIDIwODApICsgMTtcclxuICAgICAgY29uc3QgcGRmV2lkdGggPSB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPyB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggOiBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKSAtIDIgKiAxNTtcclxuXHJcbiAgICAgIGxldCBwZGZIZWlnaHQgPSAoMTUwMCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICBpZiAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCkge1xyXG4gICAgICAgIHBkZkhlaWdodCA9ICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjdXRzOyB5KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMjA4MDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIHkgKiAyMDgwLCBpbWdQcm9wcy53aWR0aCwgMjA4MCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBpbWcgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvUE5HXCIpO1xyXG4gICAgICAgIGlmICh5KSB7XHJcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2MuYWRkSW1hZ2UoaW1nLCAnUE5HJywgMTUsIDM1LCBwZGZXaWR0aCwgcGRmSGVpZ2h0LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuYWRkRm9vdGVycyhkb2MsIGxvZ29EYXRhKTtcclxuICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucGRmJztcclxuICAgICAgdGhpcy5fZXhwb3J0Q29tcGxldGVkLm5leHQodHJ1ZSk7XHJcbiAgICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gY3V0SW1hZ2VVcDtcclxuICAgIGltYWdlLnNyYyA9IGltZ0RhdGE7XHJcbiAgfVxyXG5cclxuICBhZGRGb290ZXJzKGRvYywgbG9nbykge1xyXG4gICAgY29uc3QgcGFnZUNvdW50ID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ01NTU0gREQsIFlZWVknKTtcclxuICAgIGRvYy5zZXRGb250KCd0aW1lcycpO1xyXG4gICAgZG9jLnNldFRleHRDb2xvcigxMDEsIDEwOCwgMTIxKTtcclxuICAgIGRvYy5zZXRGb250U2l6ZSg5KTtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XHJcbiAgICAgIGRvYy5zZXRQYWdlKGkpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydENvbXBhbnlOYW1lLCAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VXNlck5hbWUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5hZGRJbWFnZShsb2dvLCAnUE5HJywgMTUsIDE0LCA0MCwgNSwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ2JvbGQnKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRUaXRsZSwgMTUsIDMwLCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdub3JtYWwnKTtcclxuICAgICAgZG9jLnRleHQoJ1BhZ2UgJyArIFN0cmluZyhpKSArICcgb2YgJyArIFN0cmluZyhwYWdlQ291bnQpLCAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQoZGF0ZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbmxpbmVTdHlsZXModGFyZ2V0RWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0aWVzID0gW1xyXG4gICAgICAnZmlsbCcsXHJcbiAgICAgICdjb2xvcicsXHJcbiAgICAgICdmb250LXNpemUnLFxyXG4gICAgICAnc3Ryb2tlJyxcclxuICAgICAgJ2ZvbnQnXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBzdmdFbGVtcyA9IEFycmF5LmZyb20odGFyZ2V0RWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKSk7XHJcbiAgICBjb25zdCByZWN1cnNlRWxlbWVudENoaWxkcmVuID0gKG5vZGU6IFNWR1NWR0VsZW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIW5vZGUuc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBsZXQgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgICAgZm9yIChsZXQgdHJhbnNmb3JtUHJvcGVydHkgb2YgdHJhbnNmb3JtUHJvcGVydGllcykge1xyXG4gICAgICAgIG5vZGUuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gc3R5bGVzW3RyYW5zZm9ybVByb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykpIHtcclxuICAgICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKGNoaWxkIGFzIFNWR1NWR0VsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBzdmdFbGVtZW50IG9mIHN2Z0VsZW1zKSB7XHJcbiAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oc3ZnRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpIHtcclxuICAgIHRhYmxlc1swXS5pZCA9IHRoaXMuZWxlbUlEICsgJy10YWJsZS1oZWFkZXInO1xyXG4gICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzBdKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICBzY2FsZTogMyxcclxuICAgICAgYWxsb3dUYWludDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsWTogLXdpbmRvdy5zY3JvbGxZLFxyXG4gICAgICBpbWFnZVRpbWVvdXQ6IDAsXHJcbiAgICAgIHVzZUNPUlM6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgZWxlbWVudElkOiB0YWJsZXNbMF0uaWQsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcclxuICAgICAgb3B0aW9uc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShoZWFkZXIgPT4ge1xyXG4gICAgIFxyXG4gICAgICAgIGlmICh0YWJsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgdGFibGVzWzFdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWJvZHknO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzFdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRhYmxlc1sxXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoYm9keSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluZVR3b0ltYWdlcyhoZWFkZXIsIGJvZHksIGZvcm1hdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGxvZ0RpbWVuc2lvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGltZy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGltZy5oZWlnaHQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGxvZ0RpbWVuc2lvbnM7XHJcbiAgICAgICAgICBpbWcuc3JjID0gaGVhZGVyO1xyXG5cclxuICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoaGVhZGVyKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihoZWFkZXIpO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltYWdlc0xvYWRlZCA9IDA7XHJcbiAgY29tYmluZVR3b0ltYWdlcyhpbWcxLCBpbWcyLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IG1lcmdlSW1hZ2VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA8IDIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2UxLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UxLmhlaWdodCArIGltYWdlMi5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UxLCAwLCAwLCBpbWFnZTEud2lkdGgsIGltYWdlMS5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTIsIDAsIGltYWdlMS5oZWlnaHQsIGltYWdlMi53aWR0aCwgaW1hZ2UyLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGNhbnZhcy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGNvbWJpbmVkKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihjb21iaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMS5zcmMgPSBpbWcxO1xyXG5cclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltZzI7XHJcbiAgfVxyXG59XHJcbiJdfQ==