/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import * as XLSX from "xlsx";
/**
 * @record
 */
export function CmacsConfigItemLoader() { }
if (false) {
    /** @type {?} */
    CmacsConfigItemLoader.prototype.PropertyId;
    /** @type {?} */
    CmacsConfigItemLoader.prototype.DisplayName;
    /** @type {?} */
    CmacsConfigItemLoader.prototype.Required;
    /** @type {?} */
    CmacsConfigItemLoader.prototype.MatchedColumn;
}
var CmacsXlsxLoaderComponent = /** @class */ (function () {
    function CmacsXlsxLoaderComponent() {
        var _this = this;
        this.headers = [];
        this.data = [];
        this.files = [];
        this.visible = false;
        this.modalTitle = '';
        this.saveBtnLabel = '';
        this.uploadBtnLabel = '';
        this.cmacsStyle = {};
        this.configurationChange = new EventEmitter();
        this.onsave = new EventEmitter();
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.files = _this.files.concat(file);
            _this.parseXlsx();
            _this.visible = true;
            return false;
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.onVisibleChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.files = [];
        this.data = [];
        this.headers = [];
    };
    /**
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.saveConfig = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var originalHeaders = [];
        /** @type {?} */
        var matchedHeaders = [];
        this.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            originalHeaders.push(header.display);
            matchedHeaders.push(header.matchedColumn);
        }));
        /** @type {?} */
        var matchedData = tslib_1.__spread(this.data);
        matchedData.unshift(matchedHeaders);
        matchedData.unshift(originalHeaders);
        this.configurationChange.emit(this.configuration);
        this.onsave.emit(matchedData);
        this.visible = false;
        this.onVisibleChange(false);
    };
    /**
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.parseXlsx = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data = [];
        this.headers = [];
        this.configuration.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            config.MatchedColumn = null;
        }));
        if (this.files.length !== 1)
            throw new Error('Cannot use multiple files');
        /** @type {?} */
        var reader = new FileReader();
        reader.onload = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /* read workbook */
            /** @type {?} */
            var bstr = e.target.result;
            /** @type {?} */
            var wb = XLSX.read(bstr, { type: 'binary' });
            /* grab first sheet */
            /** @type {?} */
            var wsname = wb.SheetNames[0];
            /** @type {?} */
            var ws = wb.Sheets[wsname];
            /* save data */
            _this.data = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, dateNF: 'MM/dd/yyyy' });
            if (_this.data && _this.data.length) {
                _this.createHeaders(_this.data[0]);
                _this.data = _this.data.slice(1);
            }
        });
        /** @type {?} */
        var file = (/** @type {?} */ (this.files[0]));
        reader.readAsBinaryString(file);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.createHeaders = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        data.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            /** @type {?} */
            var matchedColumn = _this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.DisplayName === header; }));
            if (matchedColumn.length) {
                matchedColumn[0].MatchedColumn = header;
            }
            /** @type {?} */
            var temp = {
                display: header,
                matchedColumn: matchedColumn.length ? matchedColumn[0].PropertyId : null
            };
            _this.headers.push(temp);
        }));
    };
    /**
     * @param {?} $event
     * @param {?} header
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.onSelectionChange = /**
     * @param {?} $event
     * @param {?} header
     * @return {?}
     */
    function ($event, header) {
        /** @type {?} */
        var previousSelected = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.MatchedColumn === header.display; }));
        if (previousSelected.length) {
            previousSelected[0].MatchedColumn = null;
        }
        /** @type {?} */
        var config = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.PropertyId === $event; }))[0];
        config.MatchedColumn = header.display;
    };
    /**
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.disableSaveBtn = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requiredNotMatched = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.Required && !item.MatchedColumn; })).length;
        if (requiredNotMatched) {
            return true;
        }
        /** @type {?} */
        var matched = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.MatchedColumn !== null; })).length;
        if (matched !== this.headers.length) {
            return true;
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.getLabel = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return config.Required ? config.DisplayName + ' *' : config.DisplayName;
    };
    CmacsXlsxLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-xlsx-loader',
                    exportAs: 'cmacsXlsxLoader',
                    template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"width\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div class=\"cmacs-xlsx-loader-body\">\r\n    <table class=\"cmacs-xlsx-loader-table cmacs-custom-scrollbar\">\r\n      <tr>\r\n        <th *ngFor=\"let header of headers\">{{header.display}}</th>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers\">\r\n          <cmacs-select style=\"width: 100%\" [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                        (ngModelChange)=\"onSelectionChange($event, header)\" placeHolder=\"\">\r\n            <ng-container *ngFor=\"let config of configuration\">\r\n              <cmacs-option [style.color]=\"config.Required ? 'darkred' : 'inherit'\"\r\n                *ngIf=\"!config.MatchedColumn || config.MatchedColumn === header.display\"\r\n                [value]=\"config.PropertyId\" [label]=\"getLabel(config)\"></cmacs-option>\r\n            </ng-container>\r\n          </cmacs-select>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let row of data\">\r\n        <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"cmacs-xlsx-loader-footer\">\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\"\r\n            [disabled]=\"disableSaveBtn()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n\r\n<nz-upload [(nzFileList)]=\"files\" [nzBeforeUpload]=\"beforeUpload\">\r\n  <button nz-button><i nz-icon nzType=\"upload\"></i><span>{{uploadBtnLabel}}</span></button>\r\n</nz-upload>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["th{text-align:center}td{border:1px solid #d3d3d3;border-collapse:collapse;padding:6px}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{padding:10px;max-height:calc(80vh - 80px);overflow:auto}.cmacs-xlsx-loader-table{width:100%}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsXlsxLoaderComponent.ctorParameters = function () { return []; };
    CmacsXlsxLoaderComponent.propDecorators = {
        configuration: [{ type: Input }],
        modalTitle: [{ type: Input }],
        saveBtnLabel: [{ type: Input }],
        uploadBtnLabel: [{ type: Input }],
        cmacsStyle: [{ type: Input }],
        width: [{ type: Input }],
        configurationChange: [{ type: Output }],
        onsave: [{ type: Output }]
    };
    return CmacsXlsxLoaderComponent;
}());
export { CmacsXlsxLoaderComponent };
if (false) {
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.headers;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.data;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.files;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.visible;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.configuration;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.modalTitle;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.saveBtnLabel;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.uploadBtnLabel;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.width;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.configurationChange;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.onsave;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.beforeUpload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7Ozs7QUFFN0IsMkNBS0M7OztJQUpDLDJDQUFtQjs7SUFDbkIsNENBQW9COztJQUNwQix5Q0FBa0I7O0lBQ2xCLDhDQUFzQjs7QUFJeEI7SUF5QkU7UUFBQSxpQkFDQztRQWhCRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBaUIsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHUCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHZix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqRSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLOUQsaUJBQVk7Ozs7UUFBRyxVQUFDLElBQWdCO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxF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MkNBQWE7O0lBQ2Isd0NBQVU7O0lBQ1YseUNBQXlCOztJQUN6QiwyQ0FBZ0I7O0lBRWhCLGlEQUFnRDs7SUFDaEQsOENBQWlDOztJQUNqQyxnREFBbUM7O0lBQ25DLGtEQUFxQzs7SUFDckMsOENBQXlCOztJQUN6Qix5Q0FBZ0M7O0lBRWhDLHVEQUEyRTs7SUFDM0UsMENBQThEOztJQUs5RCxnREFLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBVcGxvYWRGaWxlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENtYWNzQ29uZmlnSXRlbUxvYWRlciB7XHJcbiAgUHJvcGVydHlJZDogc3RyaW5nO1xyXG4gIERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgUmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgTWF0Y2hlZENvbHVtbjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy14bHN4LWxvYWRlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1hsc3hMb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzWGxzeExvYWRlckNvbXBvbmVudCB7XHJcblxyXG4gIGhlYWRlcnMgPSBbXTtcclxuICBkYXRhID0gW107XHJcbiAgZmlsZXM6IFVwbG9hZEZpbGVbXSA9IFtdO1xyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgY29uZmlndXJhdGlvbjogQ21hY3NDb25maWdJdGVtTG9hZGVyW107XHJcbiAgQElucHV0KCkgbW9kYWxUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB1cGxvYWRCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBjb25maWd1cmF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuID0+IHtcclxuICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChmaWxlKTtcclxuICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uZmlnKCkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxIZWFkZXJzID0gW107XHJcbiAgICBjb25zdCBtYXRjaGVkSGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgb3JpZ2luYWxIZWFkZXJzLnB1c2goaGVhZGVyLmRpc3BsYXkpO1xyXG4gICAgICBtYXRjaGVkSGVhZGVycy5wdXNoKGhlYWRlci5tYXRjaGVkQ29sdW1uKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbWF0Y2hlZERhdGEgPSBbLi4udGhpcy5kYXRhXTtcclxuICAgIG1hdGNoZWREYXRhLnVuc2hpZnQobWF0Y2hlZEhlYWRlcnMpO1xyXG4gICAgbWF0Y2hlZERhdGEudW5zaGlmdChvcmlnaW5hbEhlYWRlcnMpO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uQ2hhbmdlLmVtaXQodGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIHRoaXMub25zYXZlLmVtaXQobWF0Y2hlZERhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVhsc3goKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmZvckVhY2goY29uZmlnID0+IHtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgbXVsdGlwbGUgZmlsZXMnKTtcclxuICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAvKiByZWFkIHdvcmtib29rICovXHJcbiAgICAgIGNvbnN0IGJzdHI6IHN0cmluZyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgY29uc3Qgd2I6IFhMU1guV29ya0Jvb2sgPSBYTFNYLnJlYWQoYnN0ciwge3R5cGU6ICdiaW5hcnknfSk7XHJcblxyXG4gICAgICAvKiBncmFiIGZpcnN0IHNoZWV0ICovXHJcbiAgICAgIGNvbnN0IHdzbmFtZTogc3RyaW5nID0gd2IuU2hlZXROYW1lc1swXTtcclxuICAgICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gd2IuU2hlZXRzW3dzbmFtZV07XHJcblxyXG4gICAgICAvKiBzYXZlIGRhdGEgKi9cclxuICAgICAgdGhpcy5kYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdzLCB7aGVhZGVyOiAxLCBibGFua3Jvd3M6IGZhbHNlLCBkYXRlTkY6ICdNTS9kZC95eXl5J30pO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVycyh0aGlzLmRhdGFbMF0pO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgxKTtcclxuICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXSBhcyBhbnk7XHJcbiAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSGVhZGVycyhkYXRhKXtcclxuICAgIGRhdGEuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICBsZXQgbWF0Y2hlZENvbHVtbiA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLkRpc3BsYXlOYW1lID09PSBoZWFkZXIpO1xyXG4gICAgICBpZiAobWF0Y2hlZENvbHVtbi5sZW5ndGgpIHtcclxuICAgICAgICBtYXRjaGVkQ29sdW1uWzBdLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgZGlzcGxheTogaGVhZGVyLFxyXG4gICAgICAgIG1hdGNoZWRDb2x1bW46IG1hdGNoZWRDb2x1bW4ubGVuZ3RoID8gbWF0Y2hlZENvbHVtblswXS5Qcm9wZXJ0eUlkIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmhlYWRlcnMucHVzaCh0ZW1wKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCwgaGVhZGVyKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uTWF0Y2hlZENvbHVtbiA9PT0gaGVhZGVyLmRpc3BsYXkpO1xyXG4gICAgaWYgKHByZXZpb3VzU2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0ZWRbMF0uTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5Qcm9wZXJ0eUlkID09PSAkZXZlbnQpWzBdO1xyXG4gICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXIuZGlzcGxheTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVTYXZlQnRuKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWROb3RNYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUmVxdWlyZWQgJiYgIWl0ZW0uTWF0Y2hlZENvbHVtbikubGVuZ3RoO1xyXG4gICAgaWYgKHJlcXVpcmVkTm90TWF0Y2hlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uICE9PSBudWxsKS5sZW5ndGg7XHJcbiAgICBpZiAobWF0Y2hlZCAhPT0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExhYmVsKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNvbmZpZy5SZXF1aXJlZCA/ICBjb25maWcuRGlzcGxheU5hbWUgKyAnIConIDogY29uZmlnLkRpc3BsYXlOYW1lO1xyXG4gIH1cclxuXHJcbn1cclxuIl19