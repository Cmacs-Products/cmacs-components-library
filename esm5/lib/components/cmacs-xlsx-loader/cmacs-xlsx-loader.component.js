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
var CmacsXlsxLoaderComponent = /** @class */ (function () {
    function CmacsXlsxLoaderComponent(cdr, i18n) {
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
    CmacsXlsxLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.visible) {
            this.parseXlsx();
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            switch (_this.i18n.getLocale().locale) {
                case 'de':
                    _this.placeholder = 'Spalte auswählen';
                    break;
                case 'en':
                    _this.placeholder = 'Select Column';
                    break;
                default:
                    _this.placeholder = 'Select Column';
            }
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.parseXlsx();
        }
    };
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
        this.visibleChange.emit(this.visible);
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
        this.data[0].unshift(matchedHeaders);
        this.data[0].unshift(originalHeaders);
        this.configurationChange.emit(this.configuration);
        this.onsave.emit(this.data);
        this.visible = false;
        this.onVisibleChange(false);
    };
    /**
     * @return {?}
     */
    CmacsXlsxLoaderComponent.prototype.handleCancel = /**
     * @return {?}
     */
    function () {
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
            throw new Error('Cannot use multiple files or file is empty');
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
            /** @type {?} */
            var sheets = wb.SheetNames;
            sheets.forEach((/**
             * @param {?} wsname
             * @return {?}
             */
            function (wsname) {
                /** @type {?} */
                var ws = wb.Sheets[wsname];
                _this.data.push(XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, dateNF: 'MM/dd/yyyy' }));
            }));
            if (_this.data && _this.data.length && _this.data[0].length) {
                _this.createHeaders(_this.data[0][0]);
                _this.data[0] = _this.data[0].slice(1);
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
            var value = header.toLowerCase();
            /** @type {?} */
            var matchedColumn = _this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.DisplayName.toLowerCase() === value; }));
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
        if ($event) {
            /** @type {?} */
            var config = this.configuration.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.PropertyId === $event; }))[0];
            config.MatchedColumn = header.display;
        }
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
        // const matched = this.configuration.filter(item => item.MatchedColumn !== null).length;
        /*if (matched !== this.headers.length) {
          return true;
        }*/
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
        return config.DisplayName;
    };
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
    CmacsXlsxLoaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
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
    return CmacsXlsxLoaderComponent;
}());
export { CmacsXlsxLoaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBb0MsVUFBVSxFQUFFLGlCQUFpQixFQUM3RixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsWUFBWSxFQUFjLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUUvQiwyQ0FLQzs7O0lBSkMsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsOENBQXNCOztBQUl4QjtJQThCRSxrQ0FBb0IsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFwQi9ELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBR0QsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUNSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxlQUFlLENBQUM7UUFDdEMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQUcs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QyxtQkFBbUIsRUFBRSxLQUFLOztpQkFFM0I7Ozs7Z0JBdEI0RSxpQkFBaUI7Z0JBRTVELGFBQWE7OztnQ0E0QjVDLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7c0NBRUwsTUFBTTt5QkFDTixNQUFNO2dDQUNOLE1BQU07O0lBWGtCO1FBQWYsWUFBWSxFQUFFOzs2REFBaUI7SUErSTNDLCtCQUFDO0NBQUEsQUFoS0QsSUFnS0M7U0F4Slksd0JBQXdCOzs7Ozs7SUFFbkMsNENBQWlDOztJQUVqQywyQ0FBYTs7SUFDYix3Q0FBVTs7SUFFVixpREFBZ0Q7O0lBQ2hELDhDQUFpQzs7SUFDakMsMkNBQXlDOztJQUN6QyxnREFBbUM7O0lBQ25DLGtEQUFxQzs7SUFDckMsK0NBQStDOztJQUMvQyw4Q0FBeUI7O0lBQ3pCLHlDQUFvQjs7SUFDcEIseUNBQWdDOztJQUNoQyxnREFBeUM7O0lBRXpDLHVEQUEyRTs7SUFDM0UsMENBQThEOztJQUM5RCxpREFBcUU7Ozs7O0lBRXpELHVDQUE4Qjs7Ozs7SUFBRSx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBVcGxvYWRGaWxlLCBOekkxOG5TZXJ2aWNlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbWFjc0NvbmZpZ0l0ZW1Mb2FkZXIge1xyXG4gIFByb3BlcnR5SWQ6IHN0cmluZztcclxuICBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIFJlcXVpcmVkOiBib29sZWFuO1xyXG4gIE1hdGNoZWRDb2x1bW46IHN0cmluZztcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MteGxzeC1sb2FkZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NYbHN4TG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1hsc3hMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95e1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaGVhZGVycyA9IFtdO1xyXG4gIGRhdGEgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgY29uZmlndXJhdGlvbjogQ21hY3NDb25maWdJdGVtTG9hZGVyW107XHJcbiAgQElucHV0KCkgbW9kYWxUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzYXZlQnRuTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBmaWxlcyA9IFtdO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5mb1RlbXBsYXRlOiBFbGVtZW50UmVmID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIGNvbmZpZ3VyYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NwYWx0ZSBhdXN3w6RobGVuJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0IENvbHVtbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QgQ29sdW1uJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICYmIGNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wYXJzZVhsc3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG9yaWdpbmFsSGVhZGVycyk7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhpcy5vbnNhdmUuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlWGxzeCgpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBtdWx0aXBsZSBmaWxlcyBvciBmaWxlIGlzIGVtcHR5Jyk7XHJcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgLyogcmVhZCB3b3JrYm9vayAqL1xyXG4gICAgICBjb25zdCBic3RyOiBzdHJpbmcgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0gWExTWC5yZWFkKGJzdHIsIHt0eXBlOiAnYmluYXJ5J30pO1xyXG5cclxuICAgICAgY29uc3Qgc2hlZXRzID0gd2IuU2hlZXROYW1lcztcclxuICAgICAgc2hlZXRzLmZvckVhY2goKHdzbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3cywge2hlYWRlcjogMSwgYmxhbmtyb3dzOiBmYWxzZSwgZGF0ZU5GOiAnTU0vZGQveXl5eSd9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggJiYgdGhpcy5kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJzKHRoaXMuZGF0YVswXVswXSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdLnNsaWNlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF0gYXMgYW55O1xyXG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcnMoZGF0YSl7XHJcbiAgICBkYXRhLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBoZWFkZXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IG1hdGNoZWRDb2x1bW4gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5EaXNwbGF5TmFtZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZSk7XHJcbiAgICAgIGlmIChtYXRjaGVkQ29sdW1uLmxlbmd0aCkge1xyXG4gICAgICAgIG1hdGNoZWRDb2x1bW5bMF0uTWF0Y2hlZENvbHVtbiA9IGhlYWRlcjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICBkaXNwbGF5OiBoZWFkZXIsXHJcbiAgICAgICAgbWF0Y2hlZENvbHVtbjogbWF0Y2hlZENvbHVtbi5sZW5ndGggPyBtYXRjaGVkQ29sdW1uWzBdLlByb3BlcnR5SWQgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGVhZGVycy5wdXNoKHRlbXApO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBoZWFkZXIpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uID09PSBoZWFkZXIuZGlzcGxheSk7XHJcbiAgICBpZiAocHJldmlvdXNTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgcHJldmlvdXNTZWxlY3RlZFswXS5NYXRjaGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUHJvcGVydHlJZCA9PT0gJGV2ZW50KVswXTtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXIuZGlzcGxheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVTYXZlQnRuKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWROb3RNYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUmVxdWlyZWQgJiYgIWl0ZW0uTWF0Y2hlZENvbHVtbikubGVuZ3RoO1xyXG4gICAgaWYgKHJlcXVpcmVkTm90TWF0Y2hlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uICE9PSBudWxsKS5sZW5ndGg7XHJcbiAgICAvKmlmIChtYXRjaGVkICE9PSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChjb25maWcpIHtcclxuICAgIHJldHVybiBjb25maWcuRGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=