/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CmacsXlsxLoaderComponent {
    constructor() {
        this.headers = [];
        this.data = [];
        this.files = [];
        this.visible = false;
        this.modalTitle = '';
        this.saveBtnLabel = '';
        this.uploadBtnLabel = '';
        this.placeholder = 'Select Column';
        this.cmacsStyle = {};
        this.configurationChange = new EventEmitter();
        this.onsave = new EventEmitter();
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.files = this.files.concat(file);
            this.parseXlsx();
            this.visible = true;
            return false;
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onVisibleChange($event) {
        this.files = [];
        this.data = [];
        this.headers = [];
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
            throw new Error('Cannot use multiple files');
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
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"width\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div class=\"cmacs-xlsx-loader-body cmacs-custom-scrollbar\">\r\n    <table class=\"cmacs-xlsx-loader-table\">\r\n      <tr>\r\n        <th class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers; index as i\">\r\n          <span class=\"cmacs-xlsx-loader-index\">{{i + 1}}</span>\r\n          <span class=\"cmacs-xlsx-loader-select\">\r\n            <cmacs-select [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                        (ngModelChange)=\"onSelectionChange($event, header)\" [placeHolder]=\"placeholder\">\r\n              <ng-container *ngFor=\"let config of configuration\">\r\n                <cmacs-option [style.color]=\"config.Required ? 'darkred' : 'inherit'\"\r\n                              *ngIf=\"!config.MatchedColumn || config.MatchedColumn === header.display\"\r\n                              [value]=\"config.PropertyId\" [label]=\"getLabel(config)\"></cmacs-option>\r\n              </ng-container>\r\n            </cmacs-select>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <td *ngFor=\"let header of headers\" class=\"cmacs-xlsx-loader-header\">\r\n          {{header.display}}\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let row of data[0]\">\r\n        <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"cmacs-xlsx-loader-footer\">\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\"\r\n            [disabled]=\"disableSaveBtn()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n\r\n<nz-upload [(nzFileList)]=\"files\" [nzBeforeUpload]=\"beforeUpload\">\r\n  <button nz-button><i nz-icon nzType=\"upload\"></i><span>{{uploadBtnLabel}}</span></button>\r\n</nz-upload>\r\n",
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
    saveBtnLabel: [{ type: Input }],
    uploadBtnLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    width: [{ type: Input }],
    configurationChange: [{ type: Output }],
    onsave: [{ type: Output }]
};
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
    CmacsXlsxLoaderComponent.prototype.placeholder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQVl4QixNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQztRQWhCQSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBaUIsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHUCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHZix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqRSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLOUQsaUJBQVk7Ozs7UUFBRyxDQUFDLElBQWdCLEVBQVcsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFH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QUNqQyxnREFBbUM7O0lBQ25DLGtEQUFxQzs7SUFDckMsK0NBQStDOztJQUMvQyw4Q0FBeUI7O0lBQ3pCLHlDQUFnQzs7SUFFaEMsdURBQTJFOztJQUMzRSwwQ0FBOEQ7O0lBSzlELGdEQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIFVwbG9hZEZpbGV9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ21hY3NDb25maWdJdGVtTG9hZGVyIHtcclxuICBQcm9wZXJ0eUlkOiBzdHJpbmc7XHJcbiAgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICBSZXF1aXJlZDogYm9vbGVhbjtcclxuICBNYXRjaGVkQ29sdW1uOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXhsc3gtbG9hZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzWGxzeExvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NYbHN4TG9hZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgaGVhZGVycyA9IFtdO1xyXG4gIGRhdGEgPSBbXTtcclxuICBmaWxlczogVXBsb2FkRmlsZVtdID0gW107XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBjb25maWd1cmF0aW9uOiBDbWFjc0NvbmZpZ0l0ZW1Mb2FkZXJbXTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzYXZlQnRuTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHVwbG9hZEJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgY29uZmlndXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25zYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiA9PiB7XHJcbiAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoZmlsZSk7XHJcbiAgICB0aGlzLnBhcnNlWGxzeCgpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBvblZpc2libGVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG9yaWdpbmFsSGVhZGVycyk7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhpcy5vbnNhdmUuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVhsc3goKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmZvckVhY2goY29uZmlnID0+IHtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgbXVsdGlwbGUgZmlsZXMnKTtcclxuICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAvKiByZWFkIHdvcmtib29rICovXHJcbiAgICAgIGNvbnN0IGJzdHI6IHN0cmluZyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgY29uc3Qgd2I6IFhMU1guV29ya0Jvb2sgPSBYTFNYLnJlYWQoYnN0ciwge3R5cGU6ICdiaW5hcnknfSk7XHJcblxyXG4gICAgICBjb25zdCBzaGVldHMgPSB3Yi5TaGVldE5hbWVzO1xyXG4gICAgICBzaGVldHMuZm9yRWFjaCgod3NuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gd2IuU2hlZXRzW3dzbmFtZV07XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goWExTWC51dGlscy5zaGVldF90b19qc29uKHdzLCB7aGVhZGVyOiAxLCBibGFua3Jvd3M6IGZhbHNlLCBkYXRlTkY6ICdNTS9kZC95eXl5J30pKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCAmJiB0aGlzLmRhdGFbMF0ubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlcnModGhpcy5kYXRhWzBdWzBdKTtcclxuICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbMF0uc2xpY2UoMSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1swXSBhcyBhbnk7XHJcbiAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSGVhZGVycyhkYXRhKXtcclxuICAgIGRhdGEuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICBsZXQgbWF0Y2hlZENvbHVtbiA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLkRpc3BsYXlOYW1lID09PSBoZWFkZXIpO1xyXG4gICAgICBpZiAobWF0Y2hlZENvbHVtbi5sZW5ndGgpIHtcclxuICAgICAgICBtYXRjaGVkQ29sdW1uWzBdLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgZGlzcGxheTogaGVhZGVyLFxyXG4gICAgICAgIG1hdGNoZWRDb2x1bW46IG1hdGNoZWRDb2x1bW4ubGVuZ3RoID8gbWF0Y2hlZENvbHVtblswXS5Qcm9wZXJ0eUlkIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmhlYWRlcnMucHVzaCh0ZW1wKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCwgaGVhZGVyKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uTWF0Y2hlZENvbHVtbiA9PT0gaGVhZGVyLmRpc3BsYXkpO1xyXG4gICAgaWYgKHByZXZpb3VzU2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0ZWRbMF0uTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLlByb3BlcnR5SWQgPT09ICRldmVudClbMF07XHJcbiAgICAgIGNvbmZpZy5NYXRjaGVkQ29sdW1uID0gaGVhZGVyLmRpc3BsYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU2F2ZUJ0bigpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkTm90TWF0Y2hlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLlJlcXVpcmVkICYmICFpdGVtLk1hdGNoZWRDb2x1bW4pLmxlbmd0aDtcclxuICAgIGlmIChyZXF1aXJlZE5vdE1hdGNoZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBtYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uTWF0Y2hlZENvbHVtbiAhPT0gbnVsbCkubGVuZ3RoO1xyXG4gICAgLyppZiAobWF0Y2hlZCAhPT0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0qL1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gY29uZmlnLlJlcXVpcmVkID8gIGNvbmZpZy5EaXNwbGF5TmFtZSArICcgKicgOiBjb25maWcuRGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=