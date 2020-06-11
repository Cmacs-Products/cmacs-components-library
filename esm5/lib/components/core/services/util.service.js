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
    /** @type {?} */
    UtilService.prototype.imagesLoaded;
    /**
     * @type {?}
     * @private
     */
    UtilService.prototype.exportAsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7OztJQUMxRCxNQUFNLEdBQUcsT0FBTztBQUN0QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFHMUI7SUFZRSxxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVHBELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBQzlDLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUE4TS9CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBNU13QyxDQUFDOzs7O0lBRTFELDRCQUFNOzs7SUFBTjtRQUNJLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLENBQUM7OztnQkFFekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O2dCQUcxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQix1Q0FBdUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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SyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7O2dCQTFQRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dCQUx2QixlQUFlOzs7c0JBSnhCO0NBb1FDLEFBM1BELElBMlBDO1NBMVBZLFdBQVc7OztJQUV0QiwrQkFBYzs7SUFDZCw2QkFBWTs7SUFDWix3Q0FBbUM7O0lBQ25DLHFDQUE2Qjs7SUFDN0Isa0NBQWlCOztJQUNqQiwyQ0FBOEM7O0lBQzlDLDZDQUE4Qjs7SUFDOUIsOENBQStCOztJQThNL0IsbUNBQWlCOzs7OztJQTVNTCxzQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlLCBFeHBvcnRBc0NvbmZpZyB9IGZyb20gJ25neC1leHBvcnQtYXMnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gJ2h0bWwyY2FudmFzL2Rpc3QvdHlwZXMvY3NzL3R5cGVzL2ltYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG5cclxuICBmaWxlTmFtZSA9ICcnO1xyXG4gIGVsZW1JRCA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlOYW1lID0gJ0NvbXBhbnkgTmFtZSc7XHJcbiAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJztcclxuICBleHBvcnRUaXRsZSA9ICcnO1xyXG4gIGV4cG9ydENvbXBhbnlMb2dvVXJsID0gJ2Fzc2V0cy9QVG9CX2xvZ28ucG5nJztcclxuICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbDtcclxuICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhwb3J0QXNTZXJ2aWNlOiBFeHBvcnRBc1NlcnZpY2UsKSB7IH1cclxuXHJcbiAgdXVpZHY0KCkge1xyXG4gICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICBjb25zdCB2ID0gYyA9PSAneCcgP1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1iaXR3aXNlXHJcbiAgICAgICAgICByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUYWJsZShcclxuICAgIGZvcm1hdCA9ICdwbmcnLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgICBlbGVtSUQsXHJcbiAgICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnLFxyXG4gICAgZXhwb3J0VXNlck5hbWUgPSAnVXNlciBOYW1lJyxcclxuICAgIGV4cG9ydFRpdGxlID0gJycsXHJcbiAgICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZycsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gbnVsbCxcclxuICAgIGV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gbnVsbCkge1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TmFtZSA9IGV4cG9ydENvbXBhbnlOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRVc2VyTmFtZSA9IGV4cG9ydFVzZXJOYW1lO1xyXG4gICAgdGhpcy5leHBvcnRUaXRsZSA9IGV4cG9ydFRpdGxlO1xyXG4gICAgdGhpcy5leHBvcnRDb21wYW55TG9nb1VybCA9IGV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gICAgdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID0gZXhwb3J0VGFibGVDdXN0b21XaWR0aDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBleHBvcnRUYWJsZUN1c3RvbUhlaWdodDtcclxuXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSUQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0YWJsZScpO1xyXG4gICAgdGhpcy5nZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXRFeHBvcnRUb1BkZihpbWdEYXRhKSB7ICBcclxuICAgIGNvbnN0IGdldExvZ28gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbnZhc0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzTC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjYW52YXNMLmhlaWdodCA9IGltZ0xvZ28uaGVpZ2h0O1xyXG4gICAgICBjYW52YXNMLndpZHRoID0gaW1nTG9nby53aWR0aDtcclxuICAgICAgY3R4LmRyYXdJbWFnZShpbWdMb2dvLCAwLCAwKTtcclxuICAgICAgY29uc3QgbG9nbyA9IGNhbnZhc0wudG9EYXRhVVJMKCdpbWFnZS9QTkcnKTtcclxuICAgICAgdGhpcy5zYXZlSW1hZ2VUb1BkZihsb2dvLCBpbWdEYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1nTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nTG9nby5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWdMb2dvLm9ubG9hZCA9IGdldExvZ287XHJcbiAgICBpbWdMb2dvLnNyYyA9IHRoaXMuZXhwb3J0Q29tcGFueUxvZ29Vcmw7XHJcbiAgfVxyXG5cclxuICBzYXZlSW1hZ2VUb1BkZihsb2dvRGF0YSwgaW1nRGF0YSkge1xyXG4gICAgY29uc3QgY3V0SW1hZ2VVcCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZG9jID0gbmV3IGpzUERGKCdsJywgJ21tJywgJ2E0JywgMSk7XHJcbiAgICAgIGNvbnN0IGltZ1Byb3BzID0gKDxhbnk+ZG9jKS5nZXRJbWFnZVByb3BlcnRpZXMoaW1nRGF0YSk7XHJcbiAgICAgIGNvbnN0IGN1dHMgPSBNYXRoLnRydW5jKGltZ1Byb3BzLmhlaWdodCAvIDIwODApICsgMTtcclxuICAgICAgY29uc3QgcGRmV2lkdGggPSB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggPyB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tV2lkdGggOiBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKSAtIDIgKiAxNTtcclxuXHJcbiAgICAgIGxldCBwZGZIZWlnaHQgPSAoMTUwMCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICBpZiAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCkge1xyXG4gICAgICAgIHBkZkhlaWdodCA9ICh0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ICogcGRmV2lkdGgpIC8gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjdXRzOyB5KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMjA4MDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIHkgKiAyMDgwLCBpbWdQcm9wcy53aWR0aCwgMjA4MCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBpbWcgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvUE5HXCIpO1xyXG4gICAgICAgIGlmICh5KSB7XHJcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2MuYWRkSW1hZ2UoaW1nLCAnUE5HJywgMTUsIDM1LCBwZGZXaWR0aCwgcGRmSGVpZ2h0LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuYWRkRm9vdGVycyhkb2MsIGxvZ29EYXRhKTtcclxuICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucGRmJztcclxuICAgICAgZG9jLnNhdmUoZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBjdXRJbWFnZVVwO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nRGF0YTtcclxuICB9XHJcblxyXG4gIGFkZEZvb3RlcnMoZG9jLCBsb2dvKSB7XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnTU1NTSBERCwgWVlZWScpO1xyXG4gICAgZG9jLnNldEZvbnQoJ3RpbWVzJyk7XHJcbiAgICBkb2Muc2V0VGV4dENvbG9yKDEwMSwgMTA4LCAxMjEpO1xyXG4gICAgZG9jLnNldEZvbnRTaXplKDkpO1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gcGFnZUNvdW50OyBpKyspIHtcclxuICAgICAgZG9jLnNldFBhZ2UoaSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0Q29tcGFueU5hbWUsIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRVc2VyTmFtZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIDgsIHtcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLmFkZEltYWdlKGxvZ28sICdQTkcnLCAxNSwgMTQsIDQwLCA1LCB1bmRlZmluZWQsICdGQVNUJyk7XHJcbiAgICAgIGRvYy5zZXRGb250VHlwZSgnYm9sZCcpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydFRpdGxlLCAxNSwgMzAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ25vcm1hbCcpO1xyXG4gICAgICBkb2MudGV4dCgnUGFnZSAnICsgU3RyaW5nKGkpICsgJyBvZiAnICsgU3RyaW5nKHBhZ2VDb3VudCksIDE1LCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gMTAsIHtcclxuICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2MudGV4dChkYXRlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldElubGluZVN0eWxlcyh0YXJnZXRFbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICdmaWxsJyxcclxuICAgICAgJ2NvbG9yJyxcclxuICAgICAgJ2ZvbnQtc2l6ZScsXHJcbiAgICAgICdzdHJva2UnLFxyXG4gICAgICAnZm9udCdcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHN2Z0VsZW1zID0gQXJyYXkuZnJvbSh0YXJnZXRFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpKTtcclxuICAgIGNvbnN0IHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4gPSAobm9kZTogU1ZHU1ZHRWxlbWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmICghbm9kZS5zdHlsZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGxldCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgICBmb3IgKGxldCB0cmFuc2Zvcm1Qcm9wZXJ0eSBvZiB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSBzdHlsZXNbdHJhbnNmb3JtUHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oY2hpbGQgYXMgU1ZHU1ZHRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IHN2Z0VsZW1lbnQgb2Ygc3ZnRWxlbXMpIHtcclxuICAgICAgcmVjdXJzZUVsZW1lbnRDaGlsZHJlbihzdmdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhYmxlQ2FwdHVyZSh0YWJsZXMsIGZvcm1hdCkge1xyXG4gICAgdGFibGVzWzBdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWhlYWRlcic7XHJcbiAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgIHNjYWxlOiAzLFxyXG4gICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiAtd2luZG93LnNjcm9sbFksXHJcbiAgICAgIGltYWdlVGltZW91dDogMCxcclxuICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICBlbGVtZW50SWQ6IHRhYmxlc1swXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmdldChleHBvcnRBc0NvbmZpZykuc3Vic2NyaWJlKGhlYWRlciA9PiB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYgKHRhYmxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0YWJsZXNbMV0uaWQgPSB0aGlzLmVsZW1JRCArICctdGFibGUtYm9keSc7XHJcbiAgICAgICAgICB0aGlzLnNldElubGluZVN0eWxlcyh0YWJsZXNbMV0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGV4cG9ydEFzQ29uZmlnOiBFeHBvcnRBc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXHJcbiAgICAgICAgICAgIGVsZW1lbnRJZDogdGFibGVzWzFdLmlkLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShib2R5ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5lVHdvSW1hZ2VzKGhlYWRlciwgYm9keSwgZm9ybWF0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbG9nRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgaW1nLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICBpbWcub25sb2FkID0gbG9nRGltZW5zaW9ucztcclxuICAgICAgICAgIGltZy5zcmMgPSBoZWFkZXI7XHJcblxyXG4gICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuY29udGVudFRvQmxvYihoZWFkZXIpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmRvd25sb2FkRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEV4cG9ydFRvUGRmKGhlYWRlcik7XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzTG9hZGVkID0gMDtcclxuICBjb21iaW5lVHdvSW1hZ2VzKGltZzEsIGltZzIsIGZvcm1hdCkge1xyXG4gICAgY29uc3QgbWVyZ2VJbWFnZXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQrKztcclxuICAgICAgaWYgKHRoaXMuaW1hZ2VzTG9hZGVkIDwgMikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCA9IDA7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSBpbWFnZTEud2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZTEuaGVpZ2h0ICsgaW1hZ2UyLmhlaWdodDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTEsIDAsIDAsIGltYWdlMS53aWR0aCwgaW1hZ2UxLmhlaWdodCk7XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlMiwgMCwgaW1hZ2UxLmhlaWdodCwgaW1hZ2UyLndpZHRoLCBpbWFnZTIuaGVpZ2h0KTtcclxuICAgICAgY29uc3QgY29tYmluZWQgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFdpZHRoJywgY2FudmFzLndpZHRoLCAnSW1hZ2UgSGVpZ2h0JywgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICBpZiAoZm9ybWF0ID09PSAncG5nJykge1xyXG4gICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoY29tYmluZWQpLnN1YnNjcmliZShibG9iID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBuZyc7XHJcbiAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihjb21iaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMS5zcmMgPSBpbWcxO1xyXG5cclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLm9ubG9hZCA9IG1lcmdlSW1hZ2VzO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltZzI7XHJcbiAgfVxyXG59XHJcbiJdfQ==