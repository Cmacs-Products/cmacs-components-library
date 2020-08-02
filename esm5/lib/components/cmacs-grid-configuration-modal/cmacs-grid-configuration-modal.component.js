/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { InputBoolean } from "ng-zorro-antd";
import { CookieService } from "ngx-cookie-service";
var CmacsGridConfigurationModalComponent = /** @class */ (function () {
    function CmacsGridConfigurationModalComponent(cookies) {
        this.cookies = cookies;
        this.visible = false;
        this.modalTitle = '';
        this.header = '';
        this.saveBtnLabel = '';
        this.cmacsStyle = {};
        this.visibleChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.origin = null;
    }
    /**
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.origin = JSON.parse(JSON.stringify(this.data));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.origin = JSON.parse(JSON.stringify(this.data));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.onDataChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.data.fields = $event;
        this.dataChange.emit(this.data);
    };
    /**
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.saveConfig = /**
     * @return {?}
     */
    function () {
        this.visible = false;
        this.visibleChange.emit(false);
        this.cookies.set(this.gridID, JSON.stringify(this.data), 365);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.onVisibleChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dataChange.emit(this.origin);
        this.visibleChange.emit($event);
    };
    CmacsGridConfigurationModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-grid-configuration-modal',
                    exportAs: 'cmacsGridConfigurationModal',
                    template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"'570px'\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div style=\"padding: 10px 10px 60px 10px;\">\r\n    <cmacs-moveable-list [header]=\"header\"\r\n                         [(data)]=\"data.fields\"\r\n                         (dataChange)=\"onDataChange($event)\"\r\n    >\r\n    </cmacs-moveable-list>\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                    styles: [".cmacs-custom-grid-list{max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsGridConfigurationModalComponent.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
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
    return CmacsGridConfigurationModalComponent;
}());
export { CmacsGridConfigurationModalComponent };
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
    CmacsGridConfigurationModalComponent.prototype.cookies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWpEO0lBb0JFLDhDQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBWmpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHZixrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ25FLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVsRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBRStCLENBQUM7Ozs7SUFFOUMsdURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCwwREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyREFBWTs7OztJQUFaLFVBQWEsTUFBMEI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQseURBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELDhEQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyx3cUJBQThEOztpQkFFL0Q7Ozs7Z0JBUE8sYUFBYTs7OzBCQVVsQixLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLE1BQU07NkJBQ04sTUFBTTs7SUFSa0I7UUFBZixZQUFZLEVBQUU7O3lFQUFpQjtJQXlDM0MsMkNBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTNDWSxvQ0FBb0M7OztJQUUvQyx1REFBeUM7O0lBQ3pDLDBEQUFpQzs7SUFDakMsc0RBQTZCOztJQUM3Qiw0REFBbUM7O0lBQ25DLDBEQUF5Qjs7SUFDekIsc0RBQXdCOztJQUN4QixvREFBbUI7O0lBQ25CLDZEQUE2RTs7SUFDN0UsMERBQWtFOztJQUVsRSxzREFBYzs7Ozs7SUFFRix1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LFxyXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7TW92ZWFibGVMaXN0SXRlbX0gZnJvbSBcIi4uL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzR3JpZENvbmZpZ3VyYXRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvcmlnaW4gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSAmJiBjaGFuZ2VzLnZpc2libGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YUNoYW5nZSgkZXZlbnQ6IE1vdmVhYmxlTGlzdEl0ZW1bXSkge1xyXG4gICAgdGhpcy5kYXRhLmZpZWxkcyA9ICRldmVudDtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uZmlnKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSwgMzY1KTtcclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMub3JpZ2luKTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=