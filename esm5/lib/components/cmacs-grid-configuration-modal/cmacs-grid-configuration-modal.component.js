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
        this.data = [];
        this.visibleChange = new EventEmitter();
        this.dataChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsGridConfigurationModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cookies.check(this.gridID)) {
            /** @type {?} */
            var savedConfig = JSON.parse(this.cookies.get(this.gridID));
            if (typeof savedConfig === "object") {
                this.data = {
                    fields: savedConfig
                };
            }
            this.dataChange.emit(this.data);
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
        /** @type {?} */
        var newData = {};
        newData.fields = $event;
        this.dataChange.emit(newData);
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
        this.cookies.set(this.gridID, JSON.stringify(this.data.fields));
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
        this.visibleChange.emit($event);
    };
    CmacsGridConfigurationModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-grid-configuration-modal',
                    exportAs: 'cmacsGridConfigurationModal',
                    template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"'570px'\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div style=\"padding: 10px 10px 60px 10px;\">\r\n    <cmacs-moveable-list [header]=\"header\"\r\n                         [(data)]=\"data.fields\"\r\n                         (dataChange)=\"onDataChange($event)\"\r\n    >\r\n    </cmacs-moveable-list>\r\n    <button style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n",
                    styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}"]
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
    /**
     * @type {?}
     * @private
     */
    CmacsGridConfigurationModalComponent.prototype.cookies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWpEO0lBa0JFLDhDQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBVmpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNkLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbkUsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXJCLENBQUM7Ozs7SUFFOUMsOERBQWU7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUM3QixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLFdBQVc7aUJBQ3BCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRUQsMkRBQVk7Ozs7SUFBWixVQUFhLE1BQTBCOztZQUNqQyxPQUFPLEdBQVEsRUFBRTtRQUNyQixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQseURBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELDhEQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLHdxQkFBOEQ7O2lCQUUvRDs7OztnQkFQTyxhQUFhOzs7MEJBVWxCLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsTUFBTTs2QkFDTixNQUFNOztJQVJrQjtRQUFmLFlBQVksRUFBRTs7eUVBQWlCO0lBeUMzQywyQ0FBQztDQUFBLEFBakRELElBaURDO1NBM0NZLG9DQUFvQzs7O0lBRS9DLHVEQUF5Qzs7SUFDekMsMERBQWlDOztJQUNqQyxzREFBNkI7O0lBQzdCLDREQUFtQzs7SUFDbkMsMERBQXlCOztJQUN6QixzREFBd0I7O0lBQ3hCLG9EQUF3Qjs7SUFDeEIsNkRBQTZFOztJQUM3RSwwREFBa0U7Ozs7O0lBRXRELHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQge01vdmVhYmxlTGlzdEl0ZW19IGZyb20gXCIuLi9jbWFjcy1tb3ZlYWJsZS1saXN0L2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NHcmlkQ29uZmlndXJhdGlvbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlID0ge307XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGF0YTogYW55ID0gW107XHJcbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVzOiBDb29raWVTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb29raWVzLmNoZWNrKHRoaXMuZ3JpZElEKSkge1xyXG4gICAgICBjb25zdCBzYXZlZENvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCkpO1xyXG4gICAgICBpZiAodHlwZW9mIHNhdmVkQ29uZmlnID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgZmllbGRzOiBzYXZlZENvbmZpZ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YUNoYW5nZSgkZXZlbnQ6IE1vdmVhYmxlTGlzdEl0ZW1bXSkge1xyXG4gICAgbGV0IG5ld0RhdGE6IGFueSA9IHt9O1xyXG4gICAgbmV3RGF0YS5maWVsZHMgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChuZXdEYXRhKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25maWcoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuZmllbGRzKSk7XHJcbiAgfVxyXG5cclxuICBvblZpc2libGVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19