/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
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
                    template: "<div class=\"cmacs-kpi-wrapper\">\r\n  <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n  <div\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n    class=\"cmacs-kpi-line\"\r\n    [class.border-radius-left]=\"i === 0\"\r\n    [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n    [style.width.%]=\"kpi.count\"\r\n    [style.background-color]=\"kpi.color\"\r\n    [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    >\r\n  </div>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".cmacs-kpi-line{height:4px;margin-right:2px;display:inline-block}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    CmacsKpiComponent.propDecorators = {
        data: [{ type: Input }],
        title: [{ type: Input }]
    };
    return CmacsKpiComponent;
}());
export { CmacsKpiComponent };
if (false) {
    /** @type {?} */
    CmacsKpiComponent.prototype.data;
    /** @type {?} */
    CmacsKpiComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWOzs7O0FBRUQseUJBR0M7OztJQUZDLG9CQUFjOztJQUNkLDBCQUFvQjs7QUFHdEI7SUFrQkUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDOzs7OztJQUVoRCx5Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELDBDQUFjOzs7SUFBZDs7WUFDTSxXQUFXLEdBQVEsRUFBRTs7WUFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNOztZQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07UUFDL0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3Qjs7WUFFRyxRQUFRLEdBQUcsSUFBSTs7WUFDZixPQUFPLEdBQUcsQ0FBQzs7WUFDWCxVQUFVLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQUk7WUFDckIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQiw4NEJBQXlDO3U0QkFHdkMsNkRBSUM7aUJBRUo7Ozs7Z0JBOUJPLFlBQVk7Ozt1QkFpQ2pCLEtBQUs7d0JBQ0wsS0FBSzs7SUFnRFIsd0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQW5EWSxpQkFBaUI7OztJQUU1QixpQ0FBcUI7O0lBQ3JCLGtDQUF1Qjs7Ozs7SUFFWCxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCwgU2FuaXRpemVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTdHlsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3Nhbml0aXphdGlvbi9ieXBhc3NcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX0NPTE9SUyA9IFtcclxuICAnIzJhN2NmZicsXHJcbiAgJyMwMGNkYTEnLFxyXG4gICcjZmZhMjM0JyxcclxuICAnI2ExMDBjZCcsXHJcbiAgJyNjYzIyMjknLFxyXG4gICcjMDA5ZmUzJyxcclxuICAnIzY4OGNkYScsXHJcbiAgJyNiZWM0Y2QnXHJcbl07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtQSSB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0twaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mta3BpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZGF0YTogS1BJW107XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGxldCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9ySW5kZXggPj0gS1BJX0NPTE9SUy5sZW5ndGgpIHtcclxuICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogS1BJX0NPTE9SU1tjb2xvckluZGV4XSxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgIHRlbXBSYXRlLS07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=