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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7OztJQUMxRCxNQUFNLEdBQUcsT0FBTztBQUN0QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFHMUI7SUFZRSxxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVHBELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBQzlDLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUEwTi9CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBeE53QyxDQUFDOzs7O0lBRTFELDRCQUFNOzs7SUFBTjtRQUNJLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLENBQUM7OztnQkFFekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O2dCQUcxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQix1Q0FBdUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNyQixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFRCxrQ0FBWTs7Ozs7SUFBWixVQUFjLEdBQUcsRUFBRSxJQUFJOztZQUNmLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7WUFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUNkLEtBQUssR0FBRztZQUNaLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1lBRXJDLE1BQU0sRUFBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUNoQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7OztJQUVELGlDQUFXOzs7Ozs7Ozs7Ozs7SUFBWCxVQUNFLE1BQWMsRUFDZCxRQUFRLEVBQ1IsTUFBTSxFQUNOLGlCQUFrQyxFQUNsQyxjQUE0QixFQUM1QixXQUFnQixFQUNoQixvQkFBNkMsRUFDN0Msc0JBQTZCLEVBQzdCLHVCQUE4QjtRQVI5Qix1QkFBQSxFQUFBLGNBQWM7UUFHZCxrQ0FBQSxFQUFBLGtDQUFrQztRQUNsQywrQkFBQSxFQUFBLDRCQUE0QjtRQUM1Qiw0QkFBQSxFQUFBLGdCQUFnQjtRQUNoQixxQ0FBQSxFQUFBLDZDQUE2QztRQUM3Qyx1Q0FBQSxFQUFBLDZCQUE2QjtRQUM3Qix3Q0FBQSxFQUFBLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7O1lBRWpELE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV2QyxDQUFDOzs7OztJQUVELHFDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBTztRQUF2QixpQkFlQzs7WUFkTyxPQUFPOzs7UUFBRzs7Z0JBQ1IsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOztnQkFDMUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFDdkIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQTs7WUFFSyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDM0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsb0NBQWM7Ozs7O0lBQWQsVUFBZSxRQUFRLEVBQUUsT0FBTztRQUFoQyxpQkFnQ0M7O1lBL0JPLFVBQVU7OztRQUFHOztnQkFDWCxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztnQkFDbkMsUUFBUSxHQUFHLENBQUMsbUJBQUssR0FBRyxFQUFBLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7O2dCQUNqRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7O2dCQUM3QyxRQUFRLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFOztnQkFFbEgsU0FBUyxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLO1lBQ2xELElBQUksS0FBSSxDQUFDLHVCQUF1QixFQUFFO2dCQUNoQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsdUJBQXVCLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUN4RTtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUN2QixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O29CQUNmLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7b0JBQ3pGLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztnQkFDekMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNmO2dCQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzFFO1lBRUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7O2dCQUN6QixpQkFBaUIsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNO1lBQy9GLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7O1lBRUssS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3pCLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVELGdDQUFVOzs7OztJQUFWLFVBQVcsR0FBRyxFQUFFLElBQUk7O1lBQ1osU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7O1lBQzNDLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDdEMsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pFLEtBQUssRUFBRSxPQUFPO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDakMsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUNoRyxLQUFLLEVBQUUsTUFBTTthQUNkLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtnQkFDbEYsS0FBSyxFQUFFLE9BQU87YUFDZixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQscUNBQWU7Ozs7SUFBZixVQUFnQixVQUFvQzs7O1lBQzVDLG1CQUFtQixHQUFHO1lBQzFCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFFBQVE7WUFDUixNQUFNO1NBQ1A7O1lBRUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUMzRCxzQkFBc0I7Ozs7UUFBRyxVQUFDLElBQWlDOztZQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ2IsT0FBTzs7Z0JBQ0wsTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQzs7Z0JBQ25DLEtBQThCLElBQUEsd0JBQUEsaUJBQUEsbUJBQW1CLENBQUEsd0RBQUEseUZBQUU7b0JBQTlDLElBQUksaUJBQWlCLGdDQUFBO29CQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQzNEOzs7Ozs7Ozs7O2dCQUNELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBMUMsSUFBSSxLQUFLLFdBQUE7b0JBQ1osc0JBQXNCLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUM7aUJBQ2hEOzs7Ozs7Ozs7UUFDSCxDQUFDLENBQUE7O1lBQ0QsS0FBdUIsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBNUIsSUFBSSxVQUFVLHFCQUFBO2dCQUNqQixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwQzs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07UUFBOUIsaUJBd0RDO1FBdkRDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFMUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLE9BQU87WUFDbkIsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O1lBRUssY0FBYyxHQUFtQjtZQUNyQyxJQUFJLEVBQUUsS0FBSzs7WUFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxTQUFBO1NBQ1I7O1lBQ0ssUUFBUSxHQUFHLFdBQVc7OztRQUFDO1lBQzNCLDRDQUE0QztZQUM1QyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUV2RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO29CQUMzQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzt3QkFFMUIsZ0JBQWMsR0FBbUI7d0JBQ3JDLElBQUksRUFBRSxLQUFLOzt3QkFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3ZCLE9BQU8sU0FBQTtxQkFDUjtvQkFDRCxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFBLElBQUk7d0JBQ3JELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxDQUFDLEVBQUMsQ0FBQztpQkFDSjtxQkFBTTs7d0JBRUMsYUFBYTs7O29CQUFHO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQTs7d0JBQ0ssS0FBRyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUN2QixLQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztvQkFDM0IsS0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7b0JBRWpCLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTt3QkFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFBLElBQUk7O2dDQUNqRCxpQkFBaUIsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNOzRCQUMvRixLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNqRSxDQUFDLEVBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM5QjtpQkFDRjtZQUVILENBQUMsRUFBQyxDQUFDO1lBQ0gsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsR0FBRSxHQUFHLENBQUM7SUFDVCxDQUFDOzs7Ozs7O0lBR0Qsc0NBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNO1FBQW5DLGlCQWlDQzs7WUFoQ08sV0FBVzs7OztRQUFHLFVBQUMsS0FBSztZQUN4QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7O2dCQUNoQixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDL0MsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOztnQkFDeEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUNuRSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhFLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFBLElBQUk7O3dCQUNuRCxpQkFBaUIsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNO29CQUMvRixLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUE7O1lBRUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDOztZQUVaLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOztnQkF0UUYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFMdkIsZUFBZTs7O3NCQUp4QjtDQWdSQyxBQXZRRCxJQXVRQztTQXRRWSxXQUFXOzs7SUFFdEIsK0JBQWM7O0lBQ2QsNkJBQVk7O0lBQ1osd0NBQW1DOztJQUNuQyxxQ0FBNkI7O0lBQzdCLGtDQUFpQjs7SUFDakIsMkNBQThDOztJQUM5Qyw2Q0FBOEI7O0lBQzlCLDhDQUErQjs7SUEwTi9CLG1DQUFpQjs7Ozs7SUF4Tkwsc0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IEV4cG9ydEFzU2VydmljZSwgRXhwb3J0QXNDb25maWcgfSBmcm9tICduZ3gtZXhwb3J0LWFzJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tICdodG1sMmNhbnZhcy9kaXN0L3R5cGVzL2Nzcy90eXBlcy9pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuXHJcbiAgZmlsZU5hbWUgPSAnJztcclxuICBlbGVtSUQgPSAnJztcclxuICBleHBvcnRDb21wYW55TmFtZSA9ICdDb21wYW55IE5hbWUnO1xyXG4gIGV4cG9ydFVzZXJOYW1lID0gJ1VzZXIgTmFtZSc7XHJcbiAgZXhwb3J0VGl0bGUgPSAnJztcclxuICBleHBvcnRDb21wYW55TG9nb1VybCA9ICdhc3NldHMvUFRvQl9sb2dvLnBuZyc7XHJcbiAgZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IG51bGw7XHJcbiAgZXhwb3J0VGFibGVDdXN0b21IZWlnaHQgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cG9ydEFzU2VydmljZTogRXhwb3J0QXNTZXJ2aWNlLCkgeyB9XHJcblxyXG4gIHV1aWR2NCgpIHtcclxuICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcclxuICAgICAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcclxuXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgICAgY29uc3QgdiA9IGMgPT0gJ3gnID9cclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxyXG4gICAgICAgICAgciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0X3RleF9zaXplKCB0eHQsIGZvbnQpOiBhbnkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodHh0KS53aWR0aCxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByYWRpeFxyXG4gICAgICBoZWlnaHQgOiBwYXJzZUludChjb250ZXh0LmZvbnQpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRzaXplO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VGFibGUoXHJcbiAgICBmb3JtYXQgPSAncG5nJyxcclxuICAgIGZpbGVOYW1lLFxyXG4gICAgZWxlbUlELFxyXG4gICAgZXhwb3J0Q29tcGFueU5hbWUgPSAnQ29tcGFueSBOYW1lJyxcclxuICAgIGV4cG9ydFVzZXJOYW1lID0gJ1VzZXIgTmFtZScsXHJcbiAgICBleHBvcnRUaXRsZSA9ICcnLFxyXG4gICAgZXhwb3J0Q29tcGFueUxvZ29VcmwgPSAnYXNzZXRzL1BUb0JfbG9nby5wbmcnLFxyXG4gICAgZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IG51bGwsXHJcbiAgICBleHBvcnRUYWJsZUN1c3RvbUhlaWdodCA9IG51bGwpIHtcclxuXHJcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB0aGlzLmVsZW1JRCA9IGVsZW1JRDtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueU5hbWUgPSBleHBvcnRDb21wYW55TmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VXNlck5hbWUgPSBleHBvcnRVc2VyTmFtZTtcclxuICAgIHRoaXMuZXhwb3J0VGl0bGUgPSBleHBvcnRUaXRsZTtcclxuICAgIHRoaXMuZXhwb3J0Q29tcGFueUxvZ29VcmwgPSBleHBvcnRDb21wYW55TG9nb1VybDtcclxuICAgIHRoaXMuZXhwb3J0VGFibGVDdXN0b21XaWR0aCA9IGV4cG9ydFRhYmxlQ3VzdG9tV2lkdGg7XHJcbiAgICB0aGlzLmV4cG9ydFRhYmxlQ3VzdG9tSGVpZ2h0ID0gZXhwb3J0VGFibGVDdXN0b21IZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGFibGUnKTtcclxuICAgIHRoaXMuZ2V0VGFibGVDYXB0dXJlKHRhYmxlcywgZm9ybWF0KTtcclxuXHJcbiAgfVxyXG5cclxuICBpbml0RXhwb3J0VG9QZGYoaW1nRGF0YSkgeyAgXHJcbiAgICBjb25zdCBnZXRMb2dvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXNMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0wuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzTC5oZWlnaHQgPSBpbWdMb2dvLmhlaWdodDtcclxuICAgICAgY2FudmFzTC53aWR0aCA9IGltZ0xvZ28ud2lkdGg7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nTG9nbywgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBjYW52YXNMLnRvRGF0YVVSTCgnaW1hZ2UvUE5HJyk7XHJcbiAgICAgIHRoaXMuc2F2ZUltYWdlVG9QZGYobG9nbywgaW1nRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvZ28uY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nTG9nby5vbmxvYWQgPSBnZXRMb2dvO1xyXG4gICAgaW1nTG9nby5zcmMgPSB0aGlzLmV4cG9ydENvbXBhbnlMb2dvVXJsO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUltYWdlVG9QZGYobG9nb0RhdGEsIGltZ0RhdGEpIHtcclxuICAgIGNvbnN0IGN1dEltYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERignbCcsICdtbScsICdhNCcsIDEpO1xyXG4gICAgICBjb25zdCBpbWdQcm9wcyA9ICg8YW55PmRvYykuZ2V0SW1hZ2VQcm9wZXJ0aWVzKGltZ0RhdGEpO1xyXG4gICAgICBjb25zdCBjdXRzID0gTWF0aC50cnVuYyhpbWdQcm9wcy5oZWlnaHQgLyAyMDgwKSArIDE7XHJcbiAgICAgIGNvbnN0IHBkZldpZHRoID0gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoID8gdGhpcy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoIDogZG9jLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAyICogMTU7XHJcblxyXG4gICAgICBsZXQgcGRmSGVpZ2h0ID0gKDE1MDAgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuZXhwb3J0VGFibGVDdXN0b21IZWlnaHQpIHtcclxuICAgICAgICBwZGZIZWlnaHQgPSAodGhpcy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY3V0czsgeSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nUHJvcHMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwODA7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCB5ICogMjA4MCwgaW1nUHJvcHMud2lkdGgsIDIwODAsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL1BOR1wiKTtcclxuICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jLmFkZEltYWdlKGltZywgJ1BORycsIDE1LCAzNSwgcGRmV2lkdGgsIHBkZkhlaWdodCwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFkZEZvb3RlcnMoZG9jLCBsb2dvRGF0YSk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KFwiREQuTU0uWVlZWS5ISC5tbS5zc1wiKSArICdfJyArIHRoaXMuZmlsZU5hbWUgKyAnLnBkZic7XHJcbiAgICAgIGRvYy5zYXZlKGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gY3V0SW1hZ2VVcDtcclxuICAgIGltYWdlLnNyYyA9IGltZ0RhdGE7XHJcbiAgfVxyXG5cclxuICBhZGRGb290ZXJzKGRvYywgbG9nbykge1xyXG4gICAgY29uc3QgcGFnZUNvdW50ID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ01NTU0gREQsIFlZWVknKTtcclxuICAgIGRvYy5zZXRGb250KCd0aW1lcycpO1xyXG4gICAgZG9jLnNldFRleHRDb2xvcigxMDEsIDEwOCwgMTIxKTtcclxuICAgIGRvYy5zZXRGb250U2l6ZSg5KTtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XHJcbiAgICAgIGRvYy5zZXRQYWdlKGkpO1xyXG4gICAgICBkb2MudGV4dCh0aGlzLmV4cG9ydENvbXBhbnlOYW1lLCAxNSwgOCwge1xyXG4gICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy50ZXh0KHRoaXMuZXhwb3J0VXNlck5hbWUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIDE1LCA4LCB7XHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgICAgfSk7XHJcbiAgICAgIGRvYy5hZGRJbWFnZShsb2dvLCAnUE5HJywgMTUsIDE0LCA0MCwgNSwgdW5kZWZpbmVkLCAnRkFTVCcpO1xyXG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ2JvbGQnKTtcclxuICAgICAgZG9jLnRleHQodGhpcy5leHBvcnRUaXRsZSwgMTUsIDMwLCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnNldEZvbnRUeXBlKCdub3JtYWwnKTtcclxuICAgICAgZG9jLnRleHQoJ1BhZ2UgJyArIFN0cmluZyhpKSArICcgb2YgJyArIFN0cmluZyhwYWdlQ291bnQpLCAxNSwgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDEwLCB7XHJcbiAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jLnRleHQoZGF0ZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gMTUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSAxMCwge1xyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbmxpbmVTdHlsZXModGFyZ2V0RWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0aWVzID0gW1xyXG4gICAgICAnZmlsbCcsXHJcbiAgICAgICdjb2xvcicsXHJcbiAgICAgICdmb250LXNpemUnLFxyXG4gICAgICAnc3Ryb2tlJyxcclxuICAgICAgJ2ZvbnQnXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBzdmdFbGVtcyA9IEFycmF5LmZyb20odGFyZ2V0RWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKSk7XHJcbiAgICBjb25zdCByZWN1cnNlRWxlbWVudENoaWxkcmVuID0gKG5vZGU6IFNWR1NWR0VsZW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIW5vZGUuc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBsZXQgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgICAgZm9yIChsZXQgdHJhbnNmb3JtUHJvcGVydHkgb2YgdHJhbnNmb3JtUHJvcGVydGllcykge1xyXG4gICAgICAgIG5vZGUuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gc3R5bGVzW3RyYW5zZm9ybVByb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykpIHtcclxuICAgICAgICByZWN1cnNlRWxlbWVudENoaWxkcmVuKGNoaWxkIGFzIFNWR1NWR0VsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBzdmdFbGVtZW50IG9mIHN2Z0VsZW1zKSB7XHJcbiAgICAgIHJlY3Vyc2VFbGVtZW50Q2hpbGRyZW4oc3ZnRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZUNhcHR1cmUodGFibGVzLCBmb3JtYXQpIHtcclxuICAgIHRhYmxlc1swXS5pZCA9IHRoaXMuZWxlbUlEICsgJy10YWJsZS1oZWFkZXInO1xyXG4gICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzBdKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICBzY2FsZTogMyxcclxuICAgICAgYWxsb3dUYWludDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsWTogLXdpbmRvdy5zY3JvbGxZLFxyXG4gICAgICBpbWFnZVRpbWVvdXQ6IDAsXHJcbiAgICAgIHVzZUNPUlM6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZXhwb3J0QXNDb25maWc6IEV4cG9ydEFzQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcclxuICAgICAgZWxlbWVudElkOiB0YWJsZXNbMF0uaWQsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcclxuICAgICAgb3B0aW9uc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5nZXQoZXhwb3J0QXNDb25maWcpLnN1YnNjcmliZShoZWFkZXIgPT4ge1xyXG4gICAgIFxyXG4gICAgICAgIGlmICh0YWJsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgdGFibGVzWzFdLmlkID0gdGhpcy5lbGVtSUQgKyAnLXRhYmxlLWJvZHknO1xyXG4gICAgICAgICAgdGhpcy5zZXRJbmxpbmVTdHlsZXModGFibGVzWzFdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBleHBvcnRBc0NvbmZpZzogRXhwb3J0QXNDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxyXG4gICAgICAgICAgICBlbGVtZW50SWQ6IHRhYmxlc1sxXS5pZCwgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZ2V0KGV4cG9ydEFzQ29uZmlnKS5zdWJzY3JpYmUoYm9keSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluZVR3b0ltYWdlcyhoZWFkZXIsIGJvZHksIGZvcm1hdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGxvZ0RpbWVuc2lvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGltZy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGltZy5oZWlnaHQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGxvZ0RpbWVuc2lvbnM7XHJcbiAgICAgICAgICBpbWcuc3JjID0gaGVhZGVyO1xyXG5cclxuICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdwbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QXNTZXJ2aWNlLmNvbnRlbnRUb0Jsb2IoaGVhZGVyKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWVGb3JtYXR0ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJERC5NTS5ZWVlZLkhILm1tLnNzXCIpICsgJ18nICsgdGhpcy5maWxlTmFtZSArICcucG5nJztcclxuICAgICAgICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5kb3dubG9hZEZyb21CbG9iKGJsb2IsIGZpbGVuYW1lRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRFeHBvcnRUb1BkZihoZWFkZXIpO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltYWdlc0xvYWRlZCA9IDA7XHJcbiAgY29tYmluZVR3b0ltYWdlcyhpbWcxLCBpbWcyLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IG1lcmdlSW1hZ2VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkKys7XHJcbiAgICAgIGlmICh0aGlzLmltYWdlc0xvYWRlZCA8IDIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSAwO1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2UxLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UxLmhlaWdodCArIGltYWdlMi5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UxLCAwLCAwLCBpbWFnZTEud2lkdGgsIGltYWdlMS5oZWlnaHQpO1xyXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZTIsIDAsIGltYWdlMS5oZWlnaHQsIGltYWdlMi53aWR0aCwgaW1hZ2UyLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBXaWR0aCcsIGNhbnZhcy53aWR0aCwgJ0ltYWdlIEhlaWdodCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3BuZycpIHtcclxuICAgICAgICB0aGlzLmV4cG9ydEFzU2VydmljZS5jb250ZW50VG9CbG9iKGNvbWJpbmVkKS5zdWJzY3JpYmUoYmxvYiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlbmFtZUZvcm1hdHRlZCA9IG1vbWVudCgpLmZvcm1hdChcIkRELk1NLllZWVkuSEgubW0uc3NcIikgKyAnXycgKyB0aGlzLmZpbGVOYW1lICsgJy5wbmcnO1xyXG4gICAgICAgICAgdGhpcy5leHBvcnRBc1NlcnZpY2UuZG93bmxvYWRGcm9tQmxvYihibG9iLCBmaWxlbmFtZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbml0RXhwb3J0VG9QZGYoY29tYmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTEub25sb2FkID0gbWVyZ2VJbWFnZXM7XHJcbiAgICBpbWFnZTEuc3JjID0gaW1nMTtcclxuXHJcbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMi5vbmxvYWQgPSBtZXJnZUltYWdlcztcclxuICAgIGltYWdlMi5zcmMgPSBpbWcyO1xyXG4gIH1cclxufVxyXG4iXX0=