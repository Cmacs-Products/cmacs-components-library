/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class CmacsSectionComponent {
    constructor() {
        this.widgetSpan = '24';
        this.title = '';
        this.showCollapse = true;
        this.collapsed = false;
        this.validate = false;
        this.onbeforecollapse = new EventEmitter();
        this.oncollapse = new EventEmitter();
        this.onbeforeexpand = new EventEmitter();
        this.onexpand = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    collapseSection() {
        if (!this.validate) {
            this.collapsed = !this.collapsed;
            this.triggerCollapseEvents(false);
        }
        else {
            this.triggerCollapseEvents(true);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.collapsed && changes.collapsed.previousValue !== undefined) {
            this.triggerCollapseEvents(false);
        }
    }
    /**
     * @param {?} before
     * @return {?}
     */
    triggerCollapseEvents(before) {
        if (before) {
            if (this.collapsed) {
                this.onbeforeexpand.emit();
            }
            else {
                this.onbeforecollapse.emit();
            }
        }
        else if (this.collapsed) {
            this.oncollapse.emit();
        }
        else {
            this.onexpand.emit();
        }
    }
}
CmacsSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-section',
                template: "<div nz-col [nzSpan]=\"widgetSpan\" class=\"widget-container\">\r\n    <div nz-row class=\"widget-container-bar\" nzType=\"flex\" nzJustify=\"space-between\">\r\n      <div nz-col>\r\n        <div nz-row class=\"widget-container-bar-title\">\r\n          <i *ngIf=\"titleIcon\" [ngClass]=\"titleIcon\"></i><span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n      <div nz-col>\r\n        <div nz-row *ngIf=\"extra\" class=\"widget-container-bar-btns\">\r\n          <ng-container *ngTemplateOutlet=\"extra; context: { data: extraData}\">{{ extra }}</ng-container>\r\n          <button cmacs-button class=\"log-action-btn\"\r\n                  (click)=\"collapseSection()\"\r\n                  [action]=\"true\"\r\n                  ghost>\r\n            <i [class.iconArrowSmall-Chevron-Right]=\"collapsed\"\r\n               [class.iconArrowSmall-Chevron-Down]=\"!collapsed\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsed\" class=\"widget-container-content\" >\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".widget-container{border-top:3px solid #00cda1;padding:20px 40px 30px;margin-bottom:40px;background-color:#f6f7fb;box-shadow:0 2px 4px rgba(0,0,0,.1)}.widget-container-bar-title i{font-size:20px;vertical-align:sub}.widget-container-bar-title span{margin-left:8px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.widget-container-bar{margin-bottom:20px}.widget-container-content{overflow-x:auto;overflow-y:hidden}"]
            }] }
];
/** @nocollapse */
CmacsSectionComponent.ctorParameters = () => [];
CmacsSectionComponent.propDecorators = {
    extra: [{ type: Input }],
    widgetSpan: [{ type: Input }],
    title: [{ type: Input }],
    titleIcon: [{ type: Input }],
    showCollapse: [{ type: Input }],
    extraData: [{ type: Input }],
    collapsed: [{ type: Input }],
    validate: [{ type: Input }],
    onbeforecollapse: [{ type: Output }],
    oncollapse: [{ type: Output }],
    onbeforeexpand: [{ type: Output }],
    onexpand: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CmacsSectionComponent.prototype.extra;
    /** @type {?} */
    CmacsSectionComponent.prototype.widgetSpan;
    /** @type {?} */
    CmacsSectionComponent.prototype.title;
    /** @type {?} */
    CmacsSectionComponent.prototype.titleIcon;
    /** @type {?} */
    CmacsSectionComponent.prototype.showCollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.extraData;
    /** @type {?} */
    CmacsSectionComponent.prototype.collapsed;
    /** @type {?} */
    CmacsSectionComponent.prototype.validate;
    /** @type {?} */
    CmacsSectionComponent.prototype.onbeforecollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.oncollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.onbeforeexpand;
    /** @type {?} */
    CmacsSectionComponent.prototype.onexpand;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlY3Rpb24vY21hY3Mtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBSXhCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDO1FBYlMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVoRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUN0RSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFFSCxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLE1BQWU7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUdILENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHFsQ0FBMkM7Z0JBRTNDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs7b0JBSUUsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOytCQUVMLE1BQU07eUJBQ04sTUFBTTs2QkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUFaUCxzQ0FBMkM7O0lBQzNDLDJDQUEyQjs7SUFDM0Isc0NBQW9COztJQUNwQiwwQ0FBNEI7O0lBQzVCLDZDQUE2Qjs7SUFDN0IsMENBQXlCOztJQUN6QiwwQ0FBMkI7O0lBQzNCLHlDQUEwQjs7SUFFMUIsaURBQXdFOztJQUN4RSwyQ0FBa0U7O0lBQ2xFLCtDQUFzRTs7SUFDdEUseUNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjbWFjcy1zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWRnZXRTcGFuID0gJzI0JztcclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlSWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93Q29sbGFwc2UgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGV4dHJhRGF0YSE6IGFueTtcclxuICBASW5wdXQoKSBjb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgb25iZWZvcmVjb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25iZWZvcmVleHBhbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZXhwYW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlU2VjdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgdGhpcy50cmlnZ2VyQ29sbGFwc2VFdmVudHMoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmlnZ2VyQ29sbGFwc2VFdmVudHModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5jb2xsYXBzZWQgJiYgY2hhbmdlcy5jb2xsYXBzZWQucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ29sbGFwc2VFdmVudHMoYmVmb3JlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoYmVmb3JlKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMub25iZWZvcmVleHBhbmQuZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25iZWZvcmVjb2xsYXBzZS5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5vbmNvbGxhcHNlLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25leHBhbmQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==