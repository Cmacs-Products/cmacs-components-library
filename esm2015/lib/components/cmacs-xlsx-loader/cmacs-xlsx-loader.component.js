/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { InputBoolean } from "ng-zorro-antd";
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
export class CmacsXlsxLoaderComponent {
    constructor() {
        this.headers = [];
        this.data = [];
        this.modalTitle = '';
        this.visible = false;
        this.saveBtnLabel = '';
        this.placeholder = 'Select Column';
        this.cmacsStyle = {};
        this.files = [];
        this.configurationChange = new EventEmitter();
        this.onsave = new EventEmitter();
        this.visibleChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.visible) {
            this.parseXlsx();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.parseXlsx();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onVisibleChange($event) {
        this.files = [];
        this.data = [];
        this.headers = [];
        this.visibleChange.emit(this.visible);
    }
    /**
     * @return {?}
     */
    saveConfig() {
        /** @type {?} */
        const originalHeaders = [];
        /** @type {?} */
        const matchedHeaders = [];
        this.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        header => {
            originalHeaders.push(header.display);
            matchedHeaders.push(header.matchedColumn);
        }));
        this.data[0].unshift(matchedHeaders);
        this.data[0].unshift(originalHeaders);
        this.configurationChange.emit(this.configuration);
        this.onsave.emit(this.data);
        this.visible = false;
        this.onVisibleChange(false);
    }
    /**
     * @return {?}
     */
    parseXlsx() {
        this.data = [];
        this.headers = [];
        this.configuration.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            config.MatchedColumn = null;
        }));
        if (this.files.length !== 1)
            throw new Error('Cannot use multiple files or file is empty');
        /** @type {?} */
        const reader = new FileReader();
        reader.onload = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            /* read workbook */
            /** @type {?} */
            const bstr = e.target.result;
            /** @type {?} */
            const wb = XLSX.read(bstr, { type: 'binary' });
            /** @type {?} */
            const sheets = wb.SheetNames;
            sheets.forEach((/**
             * @param {?} wsname
             * @return {?}
             */
            (wsname) => {
                /** @type {?} */
                const ws = wb.Sheets[wsname];
                this.data.push(XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, dateNF: 'MM/dd/yyyy' }));
            }));
            if (this.data && this.data.length && this.data[0].length) {
                this.createHeaders(this.data[0][0]);
                this.data[0] = this.data[0].slice(1);
            }
        });
        /** @type {?} */
        const file = (/** @type {?} */ (this.files[0]));
        reader.readAsBinaryString(file);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    createHeaders(data) {
        data.forEach((/**
         * @param {?} header
         * @return {?}
         */
        header => {
            /** @type {?} */
            let matchedColumn = this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.DisplayName === header));
            if (matchedColumn.length) {
                matchedColumn[0].MatchedColumn = header;
            }
            /** @type {?} */
            let temp = {
                display: header,
                matchedColumn: matchedColumn.length ? matchedColumn[0].PropertyId : null
            };
            this.headers.push(temp);
        }));
    }
    /**
     * @param {?} $event
     * @param {?} header
     * @return {?}
     */
    onSelectionChange($event, header) {
        /** @type {?} */
        const previousSelected = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.MatchedColumn === header.display));
        if (previousSelected.length) {
            previousSelected[0].MatchedColumn = null;
        }
        if ($event) {
            /** @type {?} */
            const config = this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.PropertyId === $event))[0];
            config.MatchedColumn = header.display;
        }
    }
    /**
     * @return {?}
     */
    disableSaveBtn() {
        /** @type {?} */
        const requiredNotMatched = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.Required && !item.MatchedColumn)).length;
        if (requiredNotMatched) {
            return true;
        }
        // const matched = this.configuration.filter(item => item.MatchedColumn !== null).length;
        /*if (matched !== this.headers.length) {
          return true;
        }*/
    }
    /**
     * @param {?} config
     * @return {?}
     */
    getLabel(config) {
        return config.Required ? config.DisplayName + ' *' : config.DisplayName;
    }
}
CmacsXlsxLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-xlsx-loader',
                exportAs: 'cmacsXlsxLoader',
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"width\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div class=\"cmacs-xlsx-loader-body cmacs-custom-scrollbar\">\r\n    <table class=\"cmacs-xlsx-loader-table\">\r\n      <tr>\r\n        <th class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers; index as i\">\r\n          <span class=\"cmacs-xlsx-loader-index\">{{i + 1}}</span>\r\n          <span class=\"cmacs-xlsx-loader-select\">\r\n            <cmacs-select [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                        (ngModelChange)=\"onSelectionChange($event, header)\" [placeHolder]=\"placeholder\">\r\n              <ng-container *ngFor=\"let config of configuration\">\r\n                <cmacs-option [style.color]=\"config.Required ? 'darkred' : 'inherit'\"\r\n                              *ngIf=\"!config.MatchedColumn || config.MatchedColumn === header.display\"\r\n                              [value]=\"config.PropertyId\" [label]=\"getLabel(config)\"></cmacs-option>\r\n              </ng-container>\r\n            </cmacs-select>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <td *ngFor=\"let header of headers\" class=\"cmacs-xlsx-loader-header\">\r\n          {{header.display}}\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let row of data[0]\">\r\n        <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"cmacs-xlsx-loader-footer\">\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\"\r\n            [disabled]=\"disableSaveBtn()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-xlsx-loader-body th{text-align:center;border:1px solid #d3d3d3;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb}.cmacs-xlsx-loader-body td{border:1px solid #d3d3d3;border-collapse:collapse;padding:2px}.cmacs-xlsx-loader-header{background-color:#f6f7fb;font-weight:600}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{padding:10px;max-height:calc(80vh - 80px);overflow:auto}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:calc(100% - 21px);float:right}.cmacs-xlsx-loader-index{float:left;padding-top:7px}"]
            }] }
];
/** @nocollapse */
CmacsXlsxLoaderComponent.ctorParameters = () => [];
CmacsXlsxLoaderComponent.propDecorators = {
    configuration: [{ type: Input }],
    modalTitle: [{ type: Input }],
    visible: [{ type: Input }],
    saveBtnLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    files: [{ type: Input }],
    width: [{ type: Input }],
    configurationChange: [{ type: Output }],
    onsave: [{ type: Output }],
    visibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsXlsxLoaderComponent.prototype, "visible", void 0);
if (false) {
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.headers;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.data;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.configuration;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.modalTitle;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.visible;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.saveBtnLabel;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.placeholder;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.files;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.width;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.configurationChange;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.onsave;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.visibleChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQVl4QixNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQztRQWhCQSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUdELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdWLHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBR3JFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxD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LEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO2tDQUVMLE1BQU07cUJBQ04sTUFBTTs0QkFDTixNQUFNOztBQVRrQjtJQUFmLFlBQVksRUFBRTs7eURBQWlCOzs7SUFMekMsMkNBQWE7O0lBQ2Isd0NBQVU7O0lBRVYsaURBQWdEOztJQUNoRCw4Q0FBaUM7O0lBQ2pDLDJDQUF5Qzs7SUFDekMsZ0RBQW1DOztJQUNuQywrQ0FBK0M7O0lBQy9DLDhDQUF5Qjs7SUFDekIseUNBQW9COztJQUNwQix5Q0FBZ0M7O0lBRWhDLHVEQUEyRTs7SUFDM0UsMENBQThEOztJQUM5RCxpREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBVcGxvYWRGaWxlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENtYWNzQ29uZmlnSXRlbUxvYWRlciB7XHJcbiAgUHJvcGVydHlJZDogc3RyaW5nO1xyXG4gIERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgUmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgTWF0Y2hlZENvbHVtbjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy14bHN4LWxvYWRlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1hsc3hMb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzWGxzeExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2Vze1xyXG5cclxuICBoZWFkZXJzID0gW107XHJcbiAgZGF0YSA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBjb25maWd1cmF0aW9uOiBDbWFjc0NvbmZpZ0l0ZW1Mb2FkZXJbXTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QgQ29sdW1uJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlID0ge307XHJcbiAgQElucHV0KCkgZmlsZXMgPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgY29uZmlndXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25zYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICYmIGNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wYXJzZVhsc3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG9yaWdpbmFsSGVhZGVycyk7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhpcy5vbnNhdmUuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVhsc3goKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmZvckVhY2goY29uZmlnID0+IHtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgbXVsdGlwbGUgZmlsZXMgb3IgZmlsZSBpcyBlbXB0eScpO1xyXG4gICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIC8qIHJlYWQgd29ya2Jvb2sgKi9cclxuICAgICAgY29uc3QgYnN0cjogc3RyaW5nID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICBjb25zdCB3YjogWExTWC5Xb3JrQm9vayA9IFhMU1gucmVhZChic3RyLCB7dHlwZTogJ2JpbmFyeSd9KTtcclxuXHJcbiAgICAgIGNvbnN0IHNoZWV0cyA9IHdiLlNoZWV0TmFtZXM7XHJcbiAgICAgIHNoZWV0cy5mb3JFYWNoKCh3c25hbWUpID0+IHtcclxuICAgICAgICBjb25zdCB3czogWExTWC5Xb3JrU2hlZXQgPSB3Yi5TaGVldHNbd3NuYW1lXTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaChYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od3MsIHtoZWFkZXI6IDEsIGJsYW5rcm93czogZmFsc2UsIGRhdGVORjogJ01NL2RkL3l5eXknfSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoICYmIHRoaXMuZGF0YVswXS5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVycyh0aGlzLmRhdGFbMF1bMF0pO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXS5zbGljZSgxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdIGFzIGFueTtcclxuICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVIZWFkZXJzKGRhdGEpe1xyXG4gICAgZGF0YS5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIGxldCBtYXRjaGVkQ29sdW1uID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uRGlzcGxheU5hbWUgPT09IGhlYWRlcik7XHJcbiAgICAgIGlmIChtYXRjaGVkQ29sdW1uLmxlbmd0aCkge1xyXG4gICAgICAgIG1hdGNoZWRDb2x1bW5bMF0uTWF0Y2hlZENvbHVtbiA9IGhlYWRlcjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICBkaXNwbGF5OiBoZWFkZXIsXHJcbiAgICAgICAgbWF0Y2hlZENvbHVtbjogbWF0Y2hlZENvbHVtbi5sZW5ndGggPyBtYXRjaGVkQ29sdW1uWzBdLlByb3BlcnR5SWQgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGVhZGVycy5wdXNoKHRlbXApO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBoZWFkZXIpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uID09PSBoZWFkZXIuZGlzcGxheSk7XHJcbiAgICBpZiAocHJldmlvdXNTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgcHJldmlvdXNTZWxlY3RlZFswXS5NYXRjaGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUHJvcGVydHlJZCA9PT0gJGV2ZW50KVswXTtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXIuZGlzcGxheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVTYXZlQnRuKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWROb3RNYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUmVxdWlyZWQgJiYgIWl0ZW0uTWF0Y2hlZENvbHVtbikubGVuZ3RoO1xyXG4gICAgaWYgKHJlcXVpcmVkTm90TWF0Y2hlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uICE9PSBudWxsKS5sZW5ndGg7XHJcbiAgICAvKmlmIChtYXRjaGVkICE9PSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChjb25maWcpIHtcclxuICAgIHJldHVybiBjb25maWcuUmVxdWlyZWQgPyAgY29uZmlnLkRpc3BsYXlOYW1lICsgJyAqJyA6IGNvbmZpZy5EaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==