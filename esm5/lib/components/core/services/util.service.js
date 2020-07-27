/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { ExportAsService } from 'ngx-export-as';
import * as i0 from "@angular/core";
import * as i1 from "ngx-export-as";
/** @type {?} */
var moment = moment_;
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
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
        this.imagesLoaded = 0;
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
    /** @type {?} */
    UtilService.prototype.imagesLoaded;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7OztJQUMxRCxNQUFNLEdBQUcsT0FBTztBQUN0QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQWVFLHFCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFacEQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixzQkFBaUIsR0FBRyxjQUFjLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxXQUFXLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFDOUMsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUV2QixxQkFBZ0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQTROOUQsaUJBQVksR0FBRyxDQUFDLENBQUM7SUExTndDLENBQUM7Ozs7SUFFMUQsNEJBQU07OztJQUFOO1FBQ0ksT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsQ0FBQzs7O2dCQUV6RCxDQUFDLEdB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QThCOztJQUM5Qiw4Q0FBK0I7Ozs7O0lBRS9CLHVDQUE0RDs7SUFDNUQsc0NBQThEOztJQTROOUQsbUNBQWlCOzs7OztJQTFOTCxzQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gJ2h0bWwyY2FudmFzL2Rpc3QvdHlwZXMvY3NzL3R5cGVzL2ltYWdlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcblxyXG4gIGZpbGVOYW1lID0gJyc7XHJcbiAgZWxlbUlEID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJztcclxuICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnO1xyXG4gIGV4cG9ydFRpdGxlID0gJyc7XHJcbiAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsO1xyXG4gIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0Q29tcGxldGVkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHVibGljIGV4cG9ydENvbXBsZXRlZCA9IHRoaXMuX2V4cG9ydENvbXBsZXRlZC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSwpIHsgfVxyXG5cclxuICB1dWlkdjQoKSB7XHJcbiAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XHJcblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGNvbnN0IHYgPSBjID09ICd4JyA/XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICAgIHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldF90ZXhfc2l6ZSggdHh0LCBmb250KTogYW55IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBlbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgY29uc3QgdHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGgsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcclxuICAgICAgaGVpZ2h0IDogcGFyc2VJbnQoY29udGV4dC5mb250KVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0c2l6ZTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFRhYmxlKFxyXG4gICAgZm9ybWF0ID0gJ3BuZycsXHJcbiAgICBmaWxlTmFtZSxcclxuICAgIGVsZW1JRCxcclxuICAgIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZScsXHJcbiAgICBleHBvcnRVc2VyTmFtZSA9ICdVc2VyIE5hbWUnLFxyXG4gICAgZXhwb3J0VGl0bGUgPSAnJyxcclxuICAgIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJyxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBudWxsLFxyXG4gICAgZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBudWxsKSB7XHJcblxyXG4gICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgdGhpcy5lbGVtSUQgPSBlbGVtSUQ7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBhbnlOYW1lID0gZXhwb3J0Q29tcGFueU5hbWU7XHJcbiAgICB0aGlzLmV4cG9ydFVzZXJOYW1lID0gZXhwb3J0VXNlck5hbWU7XHJcbiAgICB0aGlzLmV4cG9ydFRpdGxlID0gZXhwb3J0VGl0bGU7XHJcbiAgICB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsID0gZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgICB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPSBleHBvcnRUYWJsZUN1c3RvbVdpZHRoO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhYmxlJyk7XHJcbiAgICB0aGlzLmdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5pdEV4cG9ydFRvUGRmKGltZ0RhdGEpIHsgIFxyXG4gICAgY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXNMLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhc0wuaGVpZ2h0ID0gaW1nTG9nby5oZWlnaHQ7XHJcbiAgICAgIGNhbnZhc0wud2lkdGggPSBpbWdMb2dvLndpZHRoO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0xvZ28sIDAsIDApO1xyXG4gICAgICBjb25zdCBsb2dvID0gY2FudmFzTC50b0RhdGFVUkwoJ2ltYWdlL1BORycpO1xyXG4gICAgICB0aGlzLnNhdmVJbWFnZVRvUGRmKGxvZ28sIGltZ0RhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWdMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdMb2dvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZ0xvZ28ub25sb2FkID0gZ2V0TG9nbztcclxuICAgIGltZ0xvZ28uc3JjID0gdGhpcy5leHBvcnRDb21wYW55TG9nb1VybDtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZVRvUGRmKGxvZ29EYXRhLCBpbWdEYXRhKSB7XHJcbiAgICBjb25zdCBjdXRJbWFnZVVwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCAnYTQnLCAxKTtcclxuICAgICAgY29uc3QgaW1nUHJvcHMgPSAoPGFueT5kb2MpLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgY29uc3QgY3V0cyA9IE1hdGgudHJ1bmMoaW1nUHJvcHMuaGVpZ2h0IC8gMjA4MCkgKyAxO1xyXG4gICAgICBjb25zdCBwZGZXaWR0aCA9IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA/IHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA6IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC0gMiAqIDE1O1xyXG5cclxuICAgICAgbGV0IHBkZkhlaWdodCA9ICgxNTAwICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIGlmICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0KSB7XHJcbiAgICAgICAgcGRmSGVpZ2h0ID0gKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGN1dHM7IHkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyMDgwO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgeSAqIDIwODAsIGltZ1Byb3BzLndpZHRoLCAyMDgwLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9QTkdcIik7XHJcbiAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvYy5hZGRJbWFnZShpbWcsICdQTkcnLCAxNSwgMzUsIHBkZldpZHRoLCBwZGZIZWlnaHQsIHVuZGVmaW5lZCwgJ0ZBU1QnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5hZGRGb290ZXJzKGRvYywgbG9nb0RhdGEpO1xyXG4gICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wZGYnO1xyXG4gICAgICB0aGlzLl9leHBvcnRDb21wbGV0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBjdXRJbWFnZVVwO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nRGF0YTtcclxuICB9XHJcblxyXG4gIGFkZEZvb3RlcnMoZG9jLCBsb2dvKSB7XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnTU1NTSBERCwgWVlZWScpO1xyXG4gICAgZG9jLnNldEZvbnQoJ3RpbWVzJyk7XHJcbiAgICBkb2Muc2V0VGV4dENvbG9yKDEwMSwgMTA4LCAxMjEpO1xyXG4gICAgZG9jLnNldEZvbnRTaXplKDkpO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gcGFnZUNvdW50OyBpKyspIHtcclxuICAgICAgZG9jLnNldFBhZ2UoaSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0Q29tcGFueU5hbWUsIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRVc2VyTmFtZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLmFkZEltYWdlKGxvZ28sICdQTkcnLCAxNSwgMTQsIDQwLCA1LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnYm9sZCcpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFRpdGxlLCAxNSwgMzAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ25vcm1hbCcpO1xyXG4gICAgICBkb2MudGV4dCgnUGFnZSAnICsgU3RyaW5nKGkpICsgJyBvZiAnICsgU3RyaW5nKHBhZ2VDb3VudCksIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dChkYXRlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldElubGluZVN0eWxlcyh0YXJnZXRFbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICdmaWxsJyxcclxuICAgICAgJ2NvbG9yJyxcclxuICAgICAgJ2ZvbnQtc2l6ZScsXHJcbiAgICAgICdzdHJva2UnLFxyXG4gICAgICAnZm9udCdcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHN2Z0VsZW1zID0gQXJyYXkuZnJvbSh0YXJnZXRFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpKTtcclxuICAgIGNvbnN0IHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4gPSAobm9kZTogU1ZHU1ZHRWxlbWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmICghbm9kZS5zdHlsZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGxldCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgICBmb3IgKGxldCB0cmFuc2Zvcm1Qcm9wZXJ0eSBvZiB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSBzdHlsZXNbdHJhbnNmb3JtUHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oY2hpbGQgYXMgU1ZHU1ZHRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IHN2Z0VsZW1lbnQgb2Ygc3ZnRWxlbXMpIHtcclxuICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihzdmdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCkge1xyXG4gICAgdGFibGVzWzBdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWhlYWRlcic7XHJcbiAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnNjcm9sbFksXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICBlbGVtZW50SWQ6IHRhYmxlc1swXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmdldChleHBvcnRBc0NvbmZpZykuc3Vic2NyaWJlKGhlYWRlciA9PiB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYgKHRhYmxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0YWJsZXNbMV0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtYm9keSc7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMV0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGFibGVzWzFdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5lVHdvSW1hZ2VzKGhlYWRlciwgYm9keSwgZm9ybWF0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbG9nRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgaW1nLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICBpbWcub25sb2FkID0gbG9nRGltZW5zaW9ucztcclxuICAgICAgICAgIGltZy5zcmMgPSBoZWFkZXI7XHJcblxyXG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihoZWFkZXIpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGhlYWRlcik7XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzTG9hZGVkID0gMDtcclxuICBjb21iaW5lVHdvSW1hZ2VzKGltZzEsIGltZzIsIGZvcm1hdCkge1xyXG4gICAgY29uc3QgbWVyZ2VJbWFnZXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQrKztcclxuICAgICAgaWYgKHRoaXMuaW1hZ2VzTG9hZGVkIDwgMikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCA9IDA7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSBpbWFnZTEud2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZTEuaGVpZ2h0ICsgaW1hZ2UyLmhlaWdodDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTEsIDAsIDAsIGltYWdlMS53aWR0aCwgaW1hZ2UxLmhlaWdodCk7XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlMiwgMCwgaW1hZ2UxLmhlaWdodCwgaW1hZ2UyLndpZHRoLCBpbWFnZTIuaGVpZ2h0KTtcclxuICAgICAgY29uc3QgY29tYmluZWQgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgY2FudmFzLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICBpZiAoZm9ybWF0ID09PSAncG5nJykge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoY29tYmluZWQpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBuZyc7XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICAgIHRoaXMuX2V4cG9ydENvbXBsZXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGNvbWJpbmVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UxLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UxLnNyYyA9IGltZzE7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTIub25sb2FkID0gbWVyZ2VJbWFnZXM7XHJcbiAgICBpbWFnZTIuc3JjID0gaW1nMjtcclxuICB9XHJcbn1cclxuIl19