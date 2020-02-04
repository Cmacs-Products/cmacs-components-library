/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetType, WidgetDataType } from '../core/enums/widget-type.enum';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export class CmacsDashboardWidgetContainerComponent {
    constructor() {
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        this.type = WidgetType.general;
        this.dataType = WidgetDataType.single;
        this.WidgetTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
        this.chartSelected = WidgetActionType.verticalBarChart;
        this.menuClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onMenuClick(type) {
        if (this.isChartTypeMenu(type)) {
            this.chartSelected = type;
        }
        this.menuClick.emit(type);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isChartTypeMenu(type) {
        return type === WidgetActionType.verticalBarChart || type === WidgetActionType.horizontalBarChart
            || type === WidgetActionType.pieChart || type === WidgetActionType.lineChart || type === WidgetActionType.gauge;
    }
}
CmacsDashboardWidgetContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-dashboard-widget-container',
                template: "<div nz-row class=\"widget-header\">\r\n  <div nz-col nzSpan=\"17\" class=\"widget-header-title\">{{headerText}}</div>\r\n  <div nz-col class=\"widget-header-actions\">\r\n    <button cmacs-button ghost><span class=\"iconUILarge-Calendar\"></span></button>\r\n    <cmacs-dropdown  [placement]=\"'bottomCenter'\" trigger=\"click\">\r\n      <button cmacs-button cmacs-dropdown ghost [action]=\"true\">\r\n        <i class=\"iconUILarge-More-horizontal\"></i>\r\n      </button>\r\n      <ul cmacs-menu>\r\n        <li cmacs-menu-item>\r\n          <a>\r\n            <i class=\"iconUISmall-Edit\"></i>\r\n            Edit\r\n          </a>\r\n        </li>\r\n        <li cmacs-submenu>\r\n          <span title>\r\n              <i class=\"iconUILarge-Reports\"></i>\r\n              Chart Type\r\n          </span>\r\n          <ul>\r\n            <li cmacs-menu-item>\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.verticalBarChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.verticalBarChart\"></i> Vertical Bar\r\n                Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item>\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.horizontalBarChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.horizontalBarChart\"></i>Horizontal Bar Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.single\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.pieChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.pieChart\"></i>Pie Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.multi\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.lineChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.lineChart\"></i>Line Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.single\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.gauge)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.gauge\"></i>Gauge\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li cmacs-submenu>\r\n          <span title>\r\n              <i class=\"iconArrowLarge-Export\"></i>\r\n              Export\r\n          </span>\r\n          <ul>\r\n            <li cmacs-menu-item>Option 1</li>\r\n          </ul>\r\n        </li>\r\n        <li cmacs-menu-item>\r\n          <a>\r\n            <i class=\"iconArrowLarge-Open\"></i>\r\n            Open in New Window\r\n          </a>\r\n        </li>\r\n        <li cmacs-menu-item>\r\n          <a>\r\n            <i class=\"iconUILarge-Trash\"></i>\r\n            Remove\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </cmacs-dropdown>\r\n  </div>\r\n</div>\r\n<div nz-row class=\"widget-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<div nz-row class=\"widget-footer\">\r\n  <span>{{footerText}}: <b>{{footerValue}}</b></span>\r\n</div>",
                styles: [":host{width:310px;height:280px;background-color:#fff;display:block;border-radius:3px;border:1px solid #dee0e5}.widget-header{height:44px;border-bottom:1px solid #dee0e5;padding:12px 20px}.widget-header-title{font-size:14px}.widget-header-actions{text-align:end;margin-top:-7px}.widget-header-actions>*{font-size:16px}.widget-footer{height:54px;border-top:1px solid #dee0e5;padding:15px;text-align:end}.widget-content{height:170px;overflow-y:auto;overflow:overlay;margin-top:15px}.widget-content::-webkit-scrollbar{height:5px;width:5px}.widget-content::-webkit-scrollbar-thumb{background-color:#a1a1a1;border-radius:10px}.widget-content::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1;border-radius:10px}"]
            }] }
];
/** @nocollapse */
CmacsDashboardWidgetContainerComponent.ctorParameters = () => [];
CmacsDashboardWidgetContainerComponent.propDecorators = {
    headerText: [{ type: Input }],
    footerText: [{ type: Input }],
    footerValue: [{ type: Input }],
    type: [{ type: Input }],
    dataType: [{ type: Input }],
    menuClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.headerText;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.footerText;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.footerValue;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.type;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.dataType;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.WidgetTypeEnum;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.WidgetDataTypeEnum;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.chartSelected;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.menuClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGFzaGJvYXJkLXdpZGdldC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU96RSxNQUFNLE9BQU8sc0NBQXNDO0lBYWpEO1FBWFMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRTFDLG1CQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsY0FBYyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO0lBRTNDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQXNCO1FBQ3BDLE9BQU8sSUFBSSxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQixJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxrQkFBa0I7ZUFDNUYsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDcEgsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1Qyx1c0dBQWdFOzthQUVqRTs7Ozs7eUJBR0UsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUtMLE1BQU07Ozs7SUFUUCw0REFBeUI7O0lBQ3pCLDREQUF5Qjs7SUFDekIsNkRBQTBCOztJQUMxQixzREFBbUM7O0lBQ25DLDBEQUEwQzs7SUFFMUMsZ0VBQWtDOztJQUNsQyxvRUFBb0M7O0lBQ3BDLCtEQUFrRDs7SUFDbEQsMkRBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRUeXBlLCBXaWRnZXREYXRhVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGFzaGJvYXJkLXdpZGdldC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZGFzaGJvYXJkLXdpZGdldC1jb250YWluZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Rhc2hib2FyZFdpZGdldENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuICBASW5wdXQoKSB0eXBlID0gV2lkZ2V0VHlwZS5nZW5lcmFsO1xyXG4gIEBJbnB1dCgpIGRhdGFUeXBlID0gV2lkZ2V0RGF0YVR5cGUuc2luZ2xlO1xyXG5cclxuICBXaWRnZXRUeXBlRW51bSA9IFdpZGdldEFjdGlvblR5cGU7XHJcbiAgV2lkZ2V0RGF0YVR5cGVFbnVtID0gV2lkZ2V0RGF0YVR5cGU7XHJcbiAgY2hhcnRTZWxlY3RlZCA9IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydDtcclxuICBAT3V0cHV0KCkgbWVudUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxXaWRnZXRBY3Rpb25UeXBlPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9uTWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hhcnRUeXBlTWVudSh0eXBlKSkge1xyXG4gICAgICB0aGlzLmNoYXJ0U2VsZWN0ZWQgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tZW51Q2xpY2suZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIGlzQ2hhcnRUeXBlTWVudSh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS52ZXJ0aWNhbEJhckNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuaG9yaXpvbnRhbEJhckNoYXJ0XHJcbiAgICAgIHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUucGllQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5saW5lQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5nYXVnZTtcclxuICB9XHJcbn1cclxuIl19