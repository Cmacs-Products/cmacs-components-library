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
        return config.DisplayName;
    }
}
CmacsXlsxLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-xlsx-loader',
                exportAs: 'cmacsXlsxLoader',
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"width\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div class=\"cmacs-xlsx-loader-body cmacs-custom-scrollbar\">\r\n    <table class=\"cmacs-xlsx-loader-table\">\r\n      <tr>\r\n        <th class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers; index as i\">\r\n          <span class=\"cmacs-xlsx-loader-index\">{{i + 1}}</span>\r\n          <span class=\"cmacs-xlsx-loader-select\">\r\n            <cmacs-select [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                        (ngModelChange)=\"onSelectionChange($event, header)\" [placeHolder]=\"placeholder\">\r\n              <ng-container *ngFor=\"let config of configuration\">\r\n                <cmacs-option *ngIf=\"!config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                              [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                </cmacs-option>\r\n                <cmacs-option *ngIf=\"config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                              customContent\r\n                              [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                  {{getLabel(config)}} <span style=\"color: darkred\">*</span>\r\n                </cmacs-option>\r\n              </ng-container>\r\n            </cmacs-select>\r\n          </span>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <td *ngFor=\"let header of headers\" class=\"cmacs-xlsx-loader-header\">\r\n          {{header.display}}\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let row of data[0]\">\r\n        <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"cmacs-xlsx-loader-footer\">\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\"\r\n            [disabled]=\"disableSaveBtn()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-xlsx-loader-body th{text-align:center;border:1px solid #d3d3d3;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb}.cmacs-xlsx-loader-body td{border:1px solid #d3d3d3;border-collapse:collapse;padding:2px}.cmacs-xlsx-loader-header{background-color:#f6f7fb;font-weight:600}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{padding:10px;max-height:calc(80vh - 80px);overflow:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:calc(100% - 21px);float:right}.cmacs-xlsx-loader-index{float:left;padding-top:7px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQVl4QixNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQztRQWhCQSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUdELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdWLHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBR3JFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLGVBQWUsR0FBRyxFQUFFOztjQUNwQixjQUFjLEdBQUcsRUFBRTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzs7Y0FDckYsTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7O2tCQUVuQixJQUFJLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNOztrQkFDOUIsRUFBRSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7a0JBRXJELE1BQU0sR0FBRyxFQUFFLENBQUMsVUFBVTtZQUM1QixNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O3NCQUNsQixFQUFFLEdBQW1CLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNwRyxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQztnQkFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUEsQ0FBQzs7Y0FDSSxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBTztRQUNqQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTtRQUNoQixJQUFJLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUM7WUFDbEYsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN4QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQzthQUN6Qzs7Z0JBQ0csSUFBSSxHQUFHO2dCQUNULE9BQU8sRUFBRSxNQUFNO2dCQUNmLGFBQWEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3pFO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTTs7Y0FDeEIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUM7UUFDakcsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDM0IsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxFQUFFOztrQkFDSixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDTixrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsTUFBTTtRQUN6RyxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCx5RkFBeUY7UUFDekY7O1dBRUc7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFNO1FBQ2IsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7OztZQWxJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbXBFQUFpRDtnQkFDakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O2FBRTNCOzs7Ozs0QkFNRSxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7a0NBRUwsTUFBTTtxQkFDTixNQUFNOzRCQUNOLE1BQU07O0FBVGtCO0lBQWYsWUFBWSxFQUFFOzt5REFBaUI7OztJQUx6QywyQ0FBYTs7SUFDYix3Q0FBVTs7SUFFVixpREFBZ0Q7O0lBQ2hELDhDQUFpQzs7SUFDakMsMkNBQXlDOztJQUN6QyxnREFBbUM7O0lBQ25DLCtDQUErQzs7SUFDL0MsOENBQXlCOztJQUN6Qix5Q0FBb0I7O0lBQ3BCLHlDQUFnQzs7SUFFaEMsdURBQTJFOztJQUMzRSwwQ0FBOEQ7O0lBQzlELGlEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIFVwbG9hZEZpbGV9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ21hY3NDb25maWdJdGVtTG9hZGVyIHtcclxuICBQcm9wZXJ0eUlkOiBzdHJpbmc7XHJcbiAgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICBSZXF1aXJlZDogYm9vbGVhbjtcclxuICBNYXRjaGVkQ29sdW1uOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXhsc3gtbG9hZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzWGxzeExvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NYbHN4TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XHJcblxyXG4gIGhlYWRlcnMgPSBbXTtcclxuICBkYXRhID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IENtYWNzQ29uZmlnSXRlbUxvYWRlcltdO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBmaWxlcyA9IFtdO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBjb25maWd1cmF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGlmICh0aGlzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5wYXJzZVhsc3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUgJiYgY2hhbmdlcy52aXNpYmxlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnBhcnNlWGxzeCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlKCRldmVudCkge1xyXG4gICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB0aGlzLmhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uZmlnKCkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxIZWFkZXJzID0gW107XHJcbiAgICBjb25zdCBtYXRjaGVkSGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgb3JpZ2luYWxIZWFkZXJzLnB1c2goaGVhZGVyLmRpc3BsYXkpO1xyXG4gICAgICBtYXRjaGVkSGVhZGVycy5wdXNoKGhlYWRlci5tYXRjaGVkQ29sdW1uKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhWzBdLnVuc2hpZnQobWF0Y2hlZEhlYWRlcnMpO1xyXG4gICAgdGhpcy5kYXRhWzBdLnVuc2hpZnQob3JpZ2luYWxIZWFkZXJzKTtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkNoYW5nZS5lbWl0KHRoaXMuY29uZmlndXJhdGlvbik7XHJcbiAgICB0aGlzLm9uc2F2ZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlWGxzeCgpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBtdWx0aXBsZSBmaWxlcyBvciBmaWxlIGlzIGVtcHR5Jyk7XHJcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgLyogcmVhZCB3b3JrYm9vayAqL1xyXG4gICAgICBjb25zdCBic3RyOiBzdHJpbmcgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0gWExTWC5yZWFkKGJzdHIsIHt0eXBlOiAnYmluYXJ5J30pO1xyXG5cclxuICAgICAgY29uc3Qgc2hlZXRzID0gd2IuU2hlZXROYW1lcztcclxuICAgICAgc2hlZXRzLmZvckVhY2goKHdzbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3cywge2hlYWRlcjogMSwgYmxhbmtyb3dzOiBmYWxzZSwgZGF0ZU5GOiAnTU0vZGQveXl5eSd9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggJiYgdGhpcy5kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJzKHRoaXMuZGF0YVswXVswXSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdLnNsaWNlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF0gYXMgYW55O1xyXG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcnMoZGF0YSl7XHJcbiAgICBkYXRhLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgbGV0IG1hdGNoZWRDb2x1bW4gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5EaXNwbGF5TmFtZSA9PT0gaGVhZGVyKTtcclxuICAgICAgaWYgKG1hdGNoZWRDb2x1bW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbWF0Y2hlZENvbHVtblswXS5NYXRjaGVkQ29sdW1uID0gaGVhZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGhlYWRlcixcclxuICAgICAgICBtYXRjaGVkQ29sdW1uOiBtYXRjaGVkQ29sdW1uLmxlbmd0aCA/IG1hdGNoZWRDb2x1bW5bMF0uUHJvcGVydHlJZCA6IG51bGxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5oZWFkZXJzLnB1c2godGVtcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGhlYWRlcikge1xyXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLk1hdGNoZWRDb2x1bW4gPT09IGhlYWRlci5kaXNwbGF5KTtcclxuICAgIGlmIChwcmV2aW91c1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGVkWzBdLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5Qcm9wZXJ0eUlkID09PSAkZXZlbnQpWzBdO1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IGhlYWRlci5kaXNwbGF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZVNhdmVCdG4oKSB7XHJcbiAgICBjb25zdCByZXF1aXJlZE5vdE1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5SZXF1aXJlZCAmJiAhaXRlbS5NYXRjaGVkQ29sdW1uKS5sZW5ndGg7XHJcbiAgICBpZiAocmVxdWlyZWROb3RNYXRjaGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgbWF0Y2hlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLk1hdGNoZWRDb2x1bW4gIT09IG51bGwpLmxlbmd0aDtcclxuICAgIC8qaWYgKG1hdGNoZWQgIT09IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIGdldExhYmVsKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNvbmZpZy5EaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==