/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { InputBoolean } from "ng-zorro-antd";
import { CookieService } from "ngx-cookie-service";
export class CmacsGridConfigurationModalComponent {
    /**
     * @param {?} cookies
     */
    constructor(cookies) {
        this.cookies = cookies;
        this.visible = false;
        this.modalTitle = '';
        this.header = '';
        this.saveBtnLabel = '';
        this.cmacsStyle = {};
        this.data = [];
        this.visibleChange = new EventEmitter();
        this.dataChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.cookies.check(this.gridID)) {
            /** @type {?} */
            const savedConfig = JSON.parse(this.cookies.get(this.gridID));
            if (typeof savedConfig === "object") {
                this.data = {
                    fields: savedConfig
                };
            }
            this.dataChange.emit(this.data);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDataChange($event) {
        /** @type {?} */
        let newData = {};
        newData.fields = $event;
        this.dataChange.emit(newData);
    }
    /**
     * @return {?}
     */
    saveConfig() {
        this.visible = false;
        this.visibleChange.emit(false);
        this.cookies.set(this.gridID, JSON.stringify(this.data.fields));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onVisibleChange($event) {
        this.visibleChange.emit($event);
    }
}
CmacsGridConfigurationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-grid-configuration-modal',
                exportAs: 'cmacsGridConfigurationModal',
                template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"'570px'\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div style=\"padding: 10px 10px 60px 10px;\">\r\n    <cmacs-moveable-list [header]=\"header\"\r\n                         [(data)]=\"data.fields\"\r\n                         (dataChange)=\"onDataChange($event)\"\r\n    >\r\n    </cmacs-moveable-list>\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
CmacsGridConfigurationModalComponent.ctorParameters = () => [
    { type: CookieService }
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
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.cookies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBUWpELE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFZL0MsWUFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVZqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ25FLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVyQixDQUFDOzs7O0lBRTlDLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTs7a0JBQzdCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixNQUFNLEVBQUUsV0FBVztpQkFDcEIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBMEI7O1lBQ2pDLE9BQU8sR0FBUSxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsd3FCQUE4RDs7YUFFL0Q7Ozs7WUFQTyxhQUFhOzs7c0JBVWxCLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7NEJBQ0wsTUFBTTt5QkFDTixNQUFNOztBQVJrQjtJQUFmLFlBQVksRUFBRTs7cUVBQWlCOzs7SUFBekMsdURBQXlDOztJQUN6QywwREFBaUM7O0lBQ2pDLHNEQUE2Qjs7SUFDN0IsNERBQW1DOztJQUNuQywwREFBeUI7O0lBQ3pCLHNEQUF3Qjs7SUFDeEIsb0RBQXdCOztJQUN4Qiw2REFBNkU7O0lBQzdFLDBEQUFrRTs7Ozs7SUFFdEQsdURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7TW92ZWFibGVMaXN0SXRlbX0gZnJvbSBcIi4uL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzR3JpZENvbmZpZ3VyYXRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kYWxUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzYXZlQnRuTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRhOiBhbnkgPSBbXTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSk7XHJcbiAgICAgIGlmICh0eXBlb2Ygc2F2ZWRDb25maWcgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICBmaWVsZHM6IHNhdmVkQ29uZmlnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRhQ2hhbmdlKCRldmVudDogTW92ZWFibGVMaXN0SXRlbVtdKSB7XHJcbiAgICBsZXQgbmV3RGF0YTogYW55ID0ge307XHJcbiAgICBuZXdEYXRhLmZpZWxkcyA9ICRldmVudDtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KG5ld0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5maWVsZHMpKTtcclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=