/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
/** @type {?} */
var moment = moment_;
var CmacsTimelineChartComponent = /** @class */ (function () {
    function CmacsTimelineChartComponent() {
        this.legendLabels = [];
        this.colNames = [];
        this.data = [];
        this.options = {
            colors: ['#2a7cff', '#ffa234'],
            backgroundColor: '#ffffff',
            avoidOverlappingGridLines: false,
            tooltip: {
                isHtml: true,
            },
            timeline: {
                rowLabelStyle: {
                    color: '#656c79',
                    fontName: 'Roboto-Regular',
                    fontSize: '12'
                }
            }
        };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.data) {
            this.operateData();
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.operateData();
    };
    /**
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.operateData = /**
     * @return {?}
     */
    function () {
        var _loop_1 = function (i) {
            /** @type {?} */
            var item = this_1.data[i];
            /** @type {?} */
            var colorIdx = this_1.legendLabels.findIndex((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c === item[1]; }));
            /** @type {?} */
            var color = '';
            if (colorIdx >= 0) {
                color = this_1.options.colors[colorIdx];
            }
            item[2] = this_1.createCustomTooltip(item, color);
        };
        var this_1 = this;
        for (var i = 0; i < this.data.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @param {?} data
     * @param {?} color
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.createCustomTooltip = /**
     * @param {?} data
     * @param {?} color
     * @return {?}
     */
    function (data, color) {
        /** @type {?} */
        var duration = moment.duration(moment(data[4]).diff(moment(data[3])));
        return "<div class=\"cmacs-timeline-chart-tooltip-wrapper\">\n  <div class=\"cmacs-timeline-chart-tooltip-title\">\n    <span class=\"cmacs-timeline-chart-legend-marker\" style=\"background-color: " + color + "\"></span>\n    <span class=\"cmacs-timeline-chart-legend-label\">" + data[1] + "</span>\n  </div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-title\">" + data[0] + ":</div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-dates\">" + moment(data[3]).format('MMM, YYYY') + " - " + moment(data[4]).format('MMM, YYYY') + "</div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-duration-wrapper\">\n    <div class=\"cmacs-timeline-chart-tooltip-project-duration\">Duration:</div>\n    <div class=\"cmacs-timeline-chart-tooltip-project-duration-date\">" + duration.get('years') + " years, " + duration.get('months') + " months, " + duration.get('days') + " days</div>\n  </div>\n</div>";
    };
    CmacsTimelineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-timeline-chart',
                    template: "<div class=\"cmacs-timeline-chart-legend-wrapper\">\r\n  <ng-container *ngFor=\"let label of legendLabels; index as i\">\r\n    <span class=\"cmacs-timeline-chart-legend-marker\" [style.backgroundColor]=\"options.colors[i]\"></span>\r\n    <span class=\"cmacs-timeline-chart-legend-label\">{{label}}</span>\r\n  </ng-container>\r\n</div>\r\n<div class=\"cmacs-timeline-chart-wrapper\">\r\n  <google-chart type=\"Timeline\"\r\n                class=\"cmacs-timeline-chart\"\r\n                [height]=\"height\"\r\n                [width]=\"width\"\r\n                [columnNames]=\"colNames\"\r\n                [options]=\"options\"\r\n                [data]=\"data\">\r\n  </google-chart>\r\n</div>\r\n",
                    styles: ["::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) text{fill:#656c79}::ng-deep .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper{padding-bottom:10px;text-align:right;border:none!important}::ng-deep .cmacs-timeline-chart-tooltip-wrapper{background-color:rgba(0,0,0,.75)!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date,::ng-deep .cmacs-timeline-chart-tooltip-project-title{display:inline-block}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date{padding-left:5px;color:#bec4cd}::ng-deep .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}::ng-deep .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}::ng-deep div.google-visualization-tooltip{border:none;width:235px}::ng-deep .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineChartComponent.ctorParameters = function () { return []; };
    CmacsTimelineChartComponent.propDecorators = {
        legendLabels: [{ type: Input }],
        colNames: [{ type: Input }],
        data: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return CmacsTimelineChartComponent;
}());
export { CmacsTimelineChartComponent };
if (false) {
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.legendLabels;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.colNames;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.data;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.width;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.height;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDOztJQUN2QixNQUFNLEdBQUcsT0FBTztBQUV0QjtJQXlDRTtRQWxDUyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFJL0IsWUFBTyxHQUFHO1lBQ1IsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUM5QixlQUFlLEVBQUUsU0FBUztZQUMxQix5QkFBeUIsRUFBRSxLQUFLO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBRTtvQkFDYixLQUFLLEVBQUUsU0FBUztvQkFDaEIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFnQkYsQ0FBQzs7Ozs7SUFaRCxpREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQU1ELGlEQUFXOzs7SUFBWDtnQ0FDVyxDQUFDOztnQkFDRixJQUFJLEdBQUcsT0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFDbkIsUUFBUSxHQUFHLE9BQUssWUFBWSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxFQUFDOztnQkFDNUQsS0FBSyxHQUFHLEVBQUU7WUFDZCxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssR0FBRyxPQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBSyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7OztRQVBqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFoQyxDQUFDO1NBUVQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCx5REFBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQUksRUFBRSxLQUFLOztZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sa01BRXFFLEtBQUssMEVBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsdUZBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyw2RUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlQQUdsRSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBVyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBWSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQ0FFckosQ0FBQztJQUNOLENBQUM7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsOHNCQUFvRDs7aUJBRXJEOzs7OzsrQkFHRSxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBOERSLGtDQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksMkJBQTJCOzs7SUFFdEMsbURBQTJCOztJQUMzQiwrQ0FBbUM7O0lBQ25DLDJDQUErQjs7SUFDL0IsNENBQXVCOztJQUN2Qiw2Q0FBd0I7O0lBRXhCLDhDQWNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbGVnZW5kTGFiZWxzID0gW107XHJcbiAgQElucHV0KCkgY29sTmFtZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIGNvbG9yczogWycjMmE3Y2ZmJywgJyNmZmEyMzQnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYXZvaWRPdmVybGFwcGluZ0dyaWRMaW5lczogZmFsc2UsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGlzSHRtbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aW1lbGluZToge1xyXG4gICAgICByb3dMYWJlbFN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250TmFtZTogJ1JvYm90by1SZWd1bGFyJyxcclxuICAgICAgICBmb250U2l6ZTogJzEyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvcGVyYXRlRGF0YSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgIGNvbnN0IGNvbG9ySWR4ID0gdGhpcy5sZWdlbmRMYWJlbHMuZmluZEluZGV4KGMgPT4gYyA9PT0gaXRlbVsxXSk7XHJcbiAgICAgIGxldCBjb2xvciA9ICcnO1xyXG4gICAgICBpZiAoY29sb3JJZHggPj0gMCkge1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yc1tjb2xvcklkeF07XHJcbiAgICAgIH1cclxuICAgICAgaXRlbVsyXSA9IHRoaXMuY3JlYXRlQ3VzdG9tVG9vbHRpcChpdGVtLCBjb2xvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUN1c3RvbVRvb2x0aXAoZGF0YSwgY29sb3IpIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKG1vbWVudChkYXRhWzRdKS5kaWZmKG1vbWVudChkYXRhWzNdKSkpO1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC13cmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtdGl0bGVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLW1hcmtlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1sYWJlbFwiPiR7ZGF0YVsxXX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC10aXRsZVwiPiR7ZGF0YVswXX06PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kYXRlc1wiPiR7bW9tZW50KGRhdGFbM10pLmZvcm1hdCgnTU1NLCBZWVlZJyl9IC0gJHttb21lbnQoZGF0YVs0XSkuZm9ybWF0KCdNTU0sIFlZWVknKX08L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb25cIj5EdXJhdGlvbjo8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24tZGF0ZVwiPiR7ZHVyYXRpb24uZ2V0KCd5ZWFycycpfSB5ZWFycywgJHtkdXJhdGlvbi5nZXQoJ21vbnRocycpfSBtb250aHMsICR7ZHVyYXRpb24uZ2V0KCdkYXlzJyl9IGRheXM8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==