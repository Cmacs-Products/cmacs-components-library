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
        /** @type {?} */
        const matchedData = [...this.data];
        matchedData.unshift(matchedHeaders);
        matchedData.unshift(originalHeaders);
        this.configurationChange.emit(this.configuration);
        this.onsave.emit(matchedData);
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
            /* grab first sheet */
            /** @type {?} */
            const wsname = wb.SheetNames[0];
            /** @type {?} */
            const ws = wb.Sheets[wsname];
            /* save data */
            this.data = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, dateNF: 'MM/dd/yyyy' });
            if (this.data && this.data.length) {
                this.createHeaders(this.data[0]);
                this.data = this.data.slice(1);
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
        /** @type {?} */
        const config = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.PropertyId === $event))[0];
        config.MatchedColumn = header.display;
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
        /** @type {?} */
        const matched = this.configuration.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.MatchedColumn !== null)).length;
        if (matched !== this.headers.length) {
            return true;
        }
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
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"width\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div class=\"cmacs-xlsx-loader-body\">\r\n    <table class=\"cmacs-xlsx-loader-table cmacs-custom-scrollbar\">\r\n      <tr>\r\n        <th *ngFor=\"let header of headers\">{{header.display}}</th>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers\">\r\n          <cmacs-select style=\"width: 100%\" [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                        (ngModelChange)=\"onSelectionChange($event, header)\" placeHolder=\"\">\r\n            <ng-container *ngFor=\"let config of configuration\">\r\n              <cmacs-option [style.color]=\"config.Required ? 'darkred' : 'inherit'\"\r\n                *ngIf=\"!config.MatchedColumn || config.MatchedColumn === header.display\"\r\n                [value]=\"config.PropertyId\" [label]=\"getLabel(config)\"></cmacs-option>\r\n            </ng-container>\r\n          </cmacs-select>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let row of data\">\r\n        <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"cmacs-xlsx-loader-footer\">\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\"\r\n            [disabled]=\"disableSaveBtn()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n\r\n<nz-upload [(nzFileList)]=\"files\" [nzBeforeUpload]=\"beforeUpload\">\r\n  <button nz-button><i nz-icon nzType=\"upload\"></i><span>{{uploadBtnLabel}}</span></button>\r\n</nz-upload>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: ["th{text-align:center}td{border:1px solid #d3d3d3;border-collapse:collapse;padding:6px}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{padding:10px;max-height:calc(80vh - 80px);overflow:auto}.cmacs-xlsx-loader-table{width:100%}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}"]
            }] }
];
/** @nocollapse */
CmacsXlsxLoaderComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQVl4QixNQUFNLE9BQU8sd0JBQXdCO0lBaUJuQztRQWZBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFpQixFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdQLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdmLHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUs5RCxpQkFBWTs7OztRQUFHLENBQUMsSUFBZ0IsRUFBVyxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU8sS0FBSyxD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MkU7O0lBQzNFLDBDQUE4RDs7SUFLOUQsZ0RBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lucHV0Qm9vbGVhbiwgVXBsb2FkRmlsZX0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbWFjc0NvbmZpZ0l0ZW1Mb2FkZXIge1xyXG4gIFByb3BlcnR5SWQ6IHN0cmluZztcclxuICBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIFJlcXVpcmVkOiBib29sZWFuO1xyXG4gIE1hdGNoZWRDb2x1bW46IHN0cmluZztcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MteGxzeC1sb2FkZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NYbHN4TG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1hsc3hMb2FkZXJDb21wb25lbnQge1xyXG5cclxuICBoZWFkZXJzID0gW107XHJcbiAgZGF0YSA9IFtdO1xyXG4gIGZpbGVzOiBVcGxvYWRGaWxlW10gPSBbXTtcclxuICB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IENtYWNzQ29uZmlnSXRlbUxvYWRlcltdO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdXBsb2FkQnRuTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgY29uZmlndXJhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25zYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiA9PiB7XHJcbiAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoZmlsZSk7XHJcbiAgICB0aGlzLnBhcnNlWGxzeCgpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBvblZpc2libGVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG1hdGNoZWREYXRhID0gWy4uLnRoaXMuZGF0YV07XHJcbiAgICBtYXRjaGVkRGF0YS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIG1hdGNoZWREYXRhLnVuc2hpZnQob3JpZ2luYWxIZWFkZXJzKTtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkNoYW5nZS5lbWl0KHRoaXMuY29uZmlndXJhdGlvbik7XHJcbiAgICB0aGlzLm9uc2F2ZS5lbWl0KG1hdGNoZWREYXRhKTtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblZpc2libGVDaGFuZ2UoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VYbHN4KCkge1xyXG4gICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB0aGlzLmhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbi5mb3JFYWNoKGNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbmZpZy5NYXRjaGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIG11bHRpcGxlIGZpbGVzJyk7XHJcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgLyogcmVhZCB3b3JrYm9vayAqL1xyXG4gICAgICBjb25zdCBic3RyOiBzdHJpbmcgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0gWExTWC5yZWFkKGJzdHIsIHt0eXBlOiAnYmluYXJ5J30pO1xyXG5cclxuICAgICAgLyogZ3JhYiBmaXJzdCBzaGVldCAqL1xyXG4gICAgICBjb25zdCB3c25hbWU6IHN0cmluZyA9IHdiLlNoZWV0TmFtZXNbMF07XHJcbiAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xyXG5cclxuICAgICAgLyogc2F2ZSBkYXRhICovXHJcbiAgICAgIHRoaXMuZGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3cywge2hlYWRlcjogMSwgYmxhbmtyb3dzOiBmYWxzZSwgZGF0ZU5GOiAnTU0vZGQveXl5eSd9KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlcnModGhpcy5kYXRhWzBdKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF0gYXMgYW55O1xyXG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcnMoZGF0YSl7XHJcbiAgICBkYXRhLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgbGV0IG1hdGNoZWRDb2x1bW4gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5EaXNwbGF5TmFtZSA9PT0gaGVhZGVyKTtcclxuICAgICAgaWYgKG1hdGNoZWRDb2x1bW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbWF0Y2hlZENvbHVtblswXS5NYXRjaGVkQ29sdW1uID0gaGVhZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGhlYWRlcixcclxuICAgICAgICBtYXRjaGVkQ29sdW1uOiBtYXRjaGVkQ29sdW1uLmxlbmd0aCA/IG1hdGNoZWRDb2x1bW5bMF0uUHJvcGVydHlJZCA6IG51bGxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5oZWFkZXJzLnB1c2godGVtcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGhlYWRlcikge1xyXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLk1hdGNoZWRDb2x1bW4gPT09IGhlYWRlci5kaXNwbGF5KTtcclxuICAgIGlmIChwcmV2aW91c1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGVkWzBdLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUHJvcGVydHlJZCA9PT0gJGV2ZW50KVswXTtcclxuICAgIGNvbmZpZy5NYXRjaGVkQ29sdW1uID0gaGVhZGVyLmRpc3BsYXk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU2F2ZUJ0bigpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkTm90TWF0Y2hlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLlJlcXVpcmVkICYmICFpdGVtLk1hdGNoZWRDb2x1bW4pLmxlbmd0aDtcclxuICAgIGlmIChyZXF1aXJlZE5vdE1hdGNoZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uTWF0Y2hlZENvbHVtbiAhPT0gbnVsbCkubGVuZ3RoO1xyXG4gICAgaWYgKG1hdGNoZWQgIT09IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChjb25maWcpIHtcclxuICAgIHJldHVybiBjb25maWcuUmVxdWlyZWQgPyAgY29uZmlnLkRpc3BsYXlOYW1lICsgJyAqJyA6IGNvbmZpZy5EaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==