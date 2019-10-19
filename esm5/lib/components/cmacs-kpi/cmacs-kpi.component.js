/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { InputBoolean } from "ng-zorro-antd";
/** @type {?} */
export var KPI_COLORS = [
    '#2a7cff',
    '#00cda1',
    '#ffa234',
    '#a100cd',
    '#cc2229',
    '#009fe3',
    '#688cda',
    '#bec4cd'
];
/**
 * @record
 */
export function KPI() { }
if (false) {
    /** @type {?} */
    KPI.prototype.count;
    /** @type {?} */
    KPI.prototype.description;
}
var CmacsKpiComponent = /** @class */ (function () {
    function CmacsKpiComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.showTotalCount = false;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    CmacsKpiComponent.prototype.sanitizeStyle = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.getTotalCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var total = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            total += item.count;
        }));
        return total;
    };
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.getColoredData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coloredData = [];
        /** @type {?} */
        var remaining = this.data.length % KPI_COLORS.length;
        /** @type {?} */
        var rate = this.data.length / KPI_COLORS.length;
        if (remaining > 0) {
            rate = Math.trunc(rate) + 1;
        }
        /** @type {?} */
        var tempRate = rate;
        /** @type {?} */
        var opacity = 1;
        /** @type {?} */
        var colorIndex = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (tempRate === 0) {
                tempRate = rate;
                colorIndex += 1;
                opacity = 1;
            }
            if (colorIndex >= KPI_COLORS.length) {
                colorIndex = 0;
            }
            if (opacity === 0.4) {
                opacity = 1;
            }
            coloredData.push({
                count: item.count,
                description: item.description,
                color: KPI_COLORS[colorIndex],
                opacity: opacity
            });
            opacity = opacity - 0.2;
            tempRate--;
        }));
        return coloredData;
    };
    CmacsKpiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi',
                    exportAs: 'cmacsKpi',
                    template: "<div class=\"cmacs-kpi-wrapper\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount()}}</div>\r\n  <div style=\"display: inline-block\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"kpi.count\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <div\r\n      class=\"cmacs-kpi-legend-wrapper\"\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n    >\r\n      <div class=\"cmacs-kpi-divider\"\r\n           [style.background-color]=\"kpi.color\"\r\n           [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      ></div>\r\n      <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n      <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".cmacs-kpi-line{height:4px;margin-right:2px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;float:left;margin-top:-2px;display:inline-block}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    CmacsKpiComponent.propDecorators = {
        data: [{ type: Input }],
        title: [{ type: Input }],
        showTotalCount: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsKpiComponent.prototype, "showTotalCount", void 0);
    return CmacsKpiComponent;
}());
export { CmacsKpiComponent };
if (false) {
    /** @type {?} */
    CmacsKpiComponent.prototype.data;
    /** @type {?} */
    CmacsKpiComponent.prototype.title;
    /** @type {?} */
    CmacsKpiComponent.prototype.showTotalCount;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWOzs7O0FBRUQseUJBR0M7OztJQUZDLG9CQUFjOztJQUNkLDBCQUFvQjs7QUFHdEI7SUFtQkUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFGbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFFRCxDQUFDOzs7OztJQUVoRCx5Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjs7WUFDTSxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTtZQUNyQixLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDBDQUFjOzs7SUFBZDs7WUFDTSxXQUFXLEdBQVEsRUFBRTs7WUFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNOztZQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07UUFDL0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3Qjs7WUFFRyxRQUFRLEdBQUcsSUFBSTs7WUFDZixPQUFPLEdBQUcsQ0FBQzs7WUFDWCxVQUFVLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQUk7WUFDckIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQiw4a0NBQXlDO2crQkFHdkMsNkRBSUM7aUJBRUo7Ozs7Z0JBL0JPLFlBQVk7Ozt1QkFrQ2pCLEtBQUs7d0JBQ0wsS0FBSztpQ0FDTCxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7NkRBQXdCO0lBd0RsRCx3QkFBQztDQUFBLEFBekVELElBeUVDO1NBNURZLGlCQUFpQjs7O0lBRTVCLGlDQUFxQjs7SUFDckIsa0NBQXVCOztJQUN2QiwyQ0FBZ0Q7Ozs7O0lBRXBDLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0lucHV0Qm9vbGVhbn0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBLUElfQ09MT1JTID0gW1xyXG4gICcjMmE3Y2ZmJyxcclxuICAnIzAwY2RhMScsXHJcbiAgJyNmZmEyMzQnLFxyXG4gICcjYTEwMGNkJyxcclxuICAnI2NjMjIyOScsXHJcbiAgJyMwMDlmZTMnLFxyXG4gICcjNjg4Y2RhJyxcclxuICAnI2JlYzRjZCdcclxuXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS1BJIHtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpJyxcclxuICBleHBvcnRBczogJ2NtYWNzS3BpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGkuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1rcGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBsZXQgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvckluZGV4ID49IEtQSV9DT0xPUlMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IEtQSV9DT0xPUlNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxuXHJcbn1cclxuIl19