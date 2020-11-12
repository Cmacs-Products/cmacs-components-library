/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, EventEmitter, Output, ElementRef, ChangeDetectorRef } from '@angular/core';
import { InputBoolean, NzI18nService } from "ng-zorro-antd";
import * as XLSX from "xlsx";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        this.headers = [];
        this.data = [];
        this.modalTitle = '';
        this.visible = false;
        this.saveBtnLabel = '';
        this.cancelBtnLabel = '';
        this.placeholder = 'Select Column';
        this.cmacsStyle = {};
        this.files = [];
        this.infoTemplate = null;
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
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.placeholder = 'Spalte auswählen';
                    break;
                case 'en':
                    this.placeholder = 'Select Column';
                    break;
                default:
                    this.placeholder = 'Select Column';
            }
            this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
    handleCancel() {
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
            const value = header.toLowerCase();
            /** @type {?} */
            let matchedColumn = this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.DisplayName.toLowerCase() === value));
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
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"helpfulTips\"\r\n  class=\"cmacs-data-loader-modal\"\r\n  [width]=\"width\"\r\n  [useCmacsDefaultSizes]=\"false\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  [footer]=\"modalFooter\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div cmacs-modal-helpful-center-panel>\r\n    <div class=\"cmacs-xlsx-loader-body cmacs-custom-scrollbar\">\r\n      <table class=\"cmacs-xlsx-loader-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers\">\r\n              <span class=\"cmacs-xlsx-loader-select\">\r\n                <cmacs-select [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                              (ngModelChange)=\"onSelectionChange($event, header)\" [placeHolder]=\"placeholder\">\r\n                  <ng-container *ngFor=\"let config of configuration\">\r\n                    <cmacs-option *ngIf=\"!config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                                  [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                    </cmacs-option>\r\n                    <cmacs-option *ngIf=\"config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                                  customContent\r\n                                  [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                      {{getLabel(config)}} <span style=\"color: #F6503C\">*</span>\r\n                    </cmacs-option>\r\n                  </ng-container>\r\n                </cmacs-select>\r\n              </span>\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td *ngFor=\"let header of headers\" class=\"cmacs-xlsx-loader-header\">\r\n              {{header.display}}\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let row of data[0]\">\r\n            <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div cmacs-modal-helpful-right-panel>\r\n    <ng-container [ngTemplateOutlet]=\"infoTemplate\"></ng-container>\r\n  </div>\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">{{cancelBtnLabel}}</button>\r\n  <button cmacs-button type=\"primary\" [disabled]=\"disableSaveBtn()\" (click)=\"saveConfig()\">\r\n    <span>{{saveBtnLabel}}</span>\r\n  </button>\r\n</ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-xlsx-loader-body th{text-align:center;box-shadow:inset 1px 1px #d3d3d3,0 1px #d3d3d3;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb;position:-webkit-sticky;position:sticky;top:0}.cmacs-xlsx-loader-body th:last-child{border-right:1px solid #d3d3d3}.cmacs-xlsx-loader-body td{border:1px solid #d3d3d3;border-collapse:collapse;padding:6px 10px}.cmacs-xlsx-loader-header{background-color:#f6f7fb;font-weight:600;position:-webkit-sticky;position:sticky;top:34px;box-shadow:inset 1px -1px #d3d3d3;border-left:none!important;border-right:none!important;border-top:none!important}.cmacs-xlsx-loader-header:last-child{border-right:1px solid #d3d3d3!important}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{max-height:calc(531px - 80px);overflow:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:100%}.cmacs-xlsx-loader-index{float:left;padding-top:7px}::ng-deep .cmacs-data-loader-modal .cmacs-modal-helpful-center-panel{padding:10px}"]
            }] }
];
/** @nocollapse */
CmacsXlsxLoaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
CmacsXlsxLoaderComponent.propDecorators = {
    configuration: [{ type: Input }],
    modalTitle: [{ type: Input }],
    visible: [{ type: Input }],
    saveBtnLabel: [{ type: Input }],
    cancelBtnLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    files: [{ type: Input }],
    width: [{ type: Input }],
    infoTemplate: [{ type: Input }],
    configurationChange: [{ type: Output }],
    onsave: [{ type: Output }],
    visibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsXlsxLoaderComponent.prototype, "visible", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsXlsxLoaderComponent.prototype.destroy$;
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
    CmacsXlsxLoaderComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.placeholder;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.files;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.width;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.infoTemplate;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.configurationChange;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.onsave;
    /** @type {?} */
    CmacsXlsxLoaderComponent.prototype.visibleChange;
    /**
     * @type {?}
     * @private
     */
    CmacsXlsxLoaderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsXlsxLoaderComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBb0MsVUFBVSxFQUFFLGlCQUFpQixFQUM3RixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsWUFBWSxFQUFjLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUUvQiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQVl4QixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQXNCbkMsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFwQi9ELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBR0QsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUNSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxlQUFlLENBQUM7UUFDdEMsZUFBVSxHQUFHLEVBQUUs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MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUVMLE1BQU07cUJBQ04sTUFBTTs0QkFDTixNQUFNOztBQVhrQjtJQUFmLFlBQVksRUFBRTs7eURBQWlCOzs7Ozs7SUFQekMsNENBQWlDOztJQUVqQywyQ0FBYTs7SUFDYix3Q0FBVTs7SUFFVixpREFBZ0Q7O0lBQ2hELDhDQUFpQzs7SUFDakMsMkNBQXlDOztJQUN6QyxnREFBbUM7O0lBQ25DLGtEQUFxQzs7SUFDckMsK0NBQStDOztJQUMvQyw4Q0FBeUI7O0lBQ3pCLHlDQUFvQjs7SUFDcEIseUNBQWdDOztJQUNoQyxnREFBeUM7O0lBRXpDLHVEQUEyRTs7SUFDM0UsMENBQThEOztJQUM5RCxpREFBcUU7Ozs7O0lBRXpELHVDQUE4Qjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBVcGxvYWRGaWxlLCBOekkxOG5TZXJ2aWNlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbWFjc0NvbmZpZ0l0ZW1Mb2FkZXIge1xyXG4gIFByb3BlcnR5SWQ6IHN0cmluZztcclxuICBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIFJlcXVpcmVkOiBib29sZWFuO1xyXG4gIE1hdGNoZWRDb2x1bW46IHN0cmluZztcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MteGxzeC1sb2FkZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NYbHN4TG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1hsc3hMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95e1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaGVhZGVycyA9IFtdO1xyXG4gIGRhdGEgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgY29uZmlndXJhdGlvbjogQ21hY3NDb25maWdJdGVtTG9hZGVyW107XHJcbiAgQElucHV0KCkgbW9kYWxUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzYXZlQnRuTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBmaWxlcyA9IFtdO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5mb1RlbXBsYXRlOiBFbGVtZW50UmVmID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIGNvbmZpZ3VyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NwYWx0ZSBhdXN3w6RobGVuJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0IENvbHVtbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QgQ29sdW1uJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICYmIGNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wYXJzZVhsc3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG9yaWdpbmFsSGVhZGVycyk7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhpcy5vbnNhdmUuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlWGxzeCgpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBtdWx0aXBsZSBmaWxlcyBvciBmaWxlIGlzIGVtcHR5Jyk7XHJcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgLyogcmVhZCB3b3JrYm9vayAqL1xyXG4gICAgICBjb25zdCBic3RyOiBzdHJpbmcgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0gWExTWC5yZWFkKGJzdHIsIHt0eXBlOiAnYmluYXJ5J30pO1xyXG5cclxuICAgICAgY29uc3Qgc2hlZXRzID0gd2IuU2hlZXROYW1lcztcclxuICAgICAgc2hlZXRzLmZvckVhY2goKHdzbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3cywge2hlYWRlcjogMSwgYmxhbmtyb3dzOiBmYWxzZSwgZGF0ZU5GOiAnTU0vZGQveXl5eSd9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggJiYgdGhpcy5kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJzKHRoaXMuZGF0YVswXVswXSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdLnNsaWNlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF0gYXMgYW55O1xyXG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcnMoZGF0YSl7XHJcbiAgICBkYXRhLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBoZWFkZXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IG1hdGNoZWRDb2x1bW4gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5EaXNwbGF5TmFtZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZSk7XHJcbiAgICAgIGlmIChtYXRjaGVkQ29sdW1uLmxlbmd0aCkge1xyXG4gICAgICAgIG1hdGNoZWRDb2x1bW5bMF0uTWF0Y2hlZENvbHVtbiA9IGhlYWRlcjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICBkaXNwbGF5OiBoZWFkZXIsXHJcbiAgICAgICAgbWF0Y2hlZENvbHVtbjogbWF0Y2hlZENvbHVtbi5sZW5ndGggPyBtYXRjaGVkQ29sdW1uWzBdLlByb3BlcnR5SWQgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGVhZGVycy5wdXNoKHRlbXApO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBoZWFkZXIpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uID09PSBoZWFkZXIuZGlzcGxheSk7XHJcbiAgICBpZiAocHJldmlvdXNTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgcHJldmlvdXNTZWxlY3RlZFswXS5NYXRjaGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUHJvcGVydHlJZCA9PT0gJGV2ZW50KVswXTtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXIuZGlzcGxheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVTYXZlQnRuKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWROb3RNYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUmVxdWlyZWQgJiYgIWl0ZW0uTWF0Y2hlZENvbHVtbikubGVuZ3RoO1xyXG4gICAgaWYgKHJlcXVpcmVkTm90TWF0Y2hlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uICE9PSBudWxsKS5sZW5ndGg7XHJcbiAgICAvKmlmIChtYXRjaGVkICE9PSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChjb25maWcpIHtcclxuICAgIHJldHVybiBjb25maWcuRGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=