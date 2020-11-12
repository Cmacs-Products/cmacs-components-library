/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectorRef, } from '@angular/core';
import { InputBoolean, NzI18nService } from "ng-zorro-antd";
import { CookieService } from "ngx-cookie-service";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class CmacsGridConfigurationModalComponent {
    /**
     * @param {?} cookies
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cookies, cdr, i18n) {
        this.cookies = cookies;
        this.cdr = cdr;
        this.i18n = i18n;
        this.visible = false;
        this.modalTitle = '';
        this.header = '';
        this.saveBtnLabel = '';
        this.cmacsStyle = {};
        this.visibleChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.origin = null;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.origin = JSON.parse(JSON.stringify(this.data));
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.saveBtnLabel = 'Speichern';
                    this.modalTitle = 'Spaltenoptionen';
                    this.header = 'Spaltenoptionen';
                    break;
                case 'en':
                    this.saveBtnLabel = 'Save';
                    this.modalTitle = 'Column Options';
                    this.header = 'Column Options';
                    break;
                default:
                    this.saveBtnLabel = 'Save';
                    this.modalTitle = 'Column Options';
            }
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.origin = JSON.parse(JSON.stringify(this.data));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDataChange($event) {
        this.data.fields = $event;
        this.dataChange.emit(JSON.parse(JSON.stringify(this.data)));
    }
    /**
     * @return {?}
     */
    saveConfig() {
        this.visible = false;
        this.visibleChange.emit(false);
        if (this.getIndexCookie()) {
            this.cookies.set(this.gridID, JSON.stringify(this.data), 365);
        }
    }
    /**
     * @return {?}
     */
    getIndexCookie() {
        /** @type {?} */
        let allowIndexPageCookie = false;
        /** @type {?} */
        let consentCookie = this.cookies.get('OptanonConsent');
        if (consentCookie != "") {
            /** @type {?} */
            let groupIndex = consentCookie.indexOf('groups=');
            /** @type {?} */
            let groups = consentCookie.substring(groupIndex);
            //will return somethinglike groups=C0002:0,C0001:1
            /** @type {?} */
            let functionalGroupIndex = groups.indexOf('C0009:');
            if (functionalGroupIndex != -1) {
                /** @type {?} */
                const categoryValue = groups.substring(functionalGroupIndex + 6, functionalGroupIndex + 7);
                if (Number(categoryValue) === 1) {
                    allowIndexPageCookie = true;
                }
            }
        }
        return allowIndexPageCookie;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onVisibleChange($event) {
        if (this.getIndexCookie()) {
            this.dataChange.emit(this.origin);
        }
        this.visibleChange.emit($event);
    }
}
CmacsGridConfigurationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-grid-configuration-modal',
                exportAs: 'cmacsGridConfigurationModal',
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"'570px'\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div style=\"padding: 10px 10px 60px 10px;\">\r\n    <cmacs-moveable-list [header]=\"header\"\r\n                         [(data)]=\"data.fields\"\r\n                         (dataChange)=\"onDataChange($event)\"\r\n    >\r\n    </cmacs-moveable-list>\r\n    <button *ngIf=\"getIndexCookie()\" style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                styles: [".cmacs-custom-grid-list{max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"]
            }] }
];
/** @nocollapse */
CmacsGridConfigurationModalComponent.ctorParameters = () => [
    { type: CookieService },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
CmacsGridConfigurationModalComponent.propDecorators = {
    visible: [{ type: Input }],
    modalTitle: [{ type: Input }],
    header: [{ type: Input }],
    saveBtnLabel: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    gridID: [{ type: Input }],
    data: [{ type: Input }],
    visibleChange: [{ type: Output }],
    dataChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsGridConfigurationModalComponent.prototype, "visible", void 0);
if (false) {
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.visible;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.modalTitle;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.header;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.saveBtnLabel;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.gridID;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.data;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.visibleChange;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.dataChange;
    /** @type {?} */
    CmacsGridConfigurationModalComponent.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.cookies;
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUFpQixpQkFBaUIsR0FDekMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUS9CLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7OztJQWUvQyxZQUFvQixPQUFzQixFQUFVLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkYsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWI5RSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBR2Ysa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNuRSxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFbEUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNOLGFBQVEsR0FBRyxJQUFJLE9B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XG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LFxyXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIE56STE4blNlcnZpY2V9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7TW92ZWFibGVMaXN0SXRlbX0gZnJvbSBcIi4uL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NHcmlkQ29uZmlndXJhdGlvbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvcmlnaW4gPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5zYXZlQnRuTGFiZWwgPSAnU3BlaWNoZXJuJztcclxuICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9ICdTcGFsdGVub3B0aW9uZW4nO1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXIgPSAnU3BhbHRlbm9wdGlvbmVuJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ1NhdmUnO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgICAgIHRoaXMuaGVhZGVyID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLnNhdmVCdG5MYWJlbCA9ICdTYXZlJztcclxuICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9ICdDb2x1bW4gT3B0aW9ucyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUgJiYgY2hhbmdlcy52aXNpYmxlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9yaWdpbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFDaGFuZ2UoJGV2ZW50OiBNb3ZlYWJsZUxpc3RJdGVtW10pIHtcclxuICAgIHRoaXMuZGF0YS5maWVsZHMgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25maWcoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSwgMzY1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCkge1xyXG4gICAgbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llO1xyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0SW5kZXhDb29raWUoKSkge1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLm9yaWdpbik7XHJcbiAgICB9ICAgXHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19