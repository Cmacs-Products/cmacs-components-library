/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
/** @type {?} */
var moment = moment_;
var CmacsTimelineChartComponent = /** @class */ (function () {
    function CmacsTimelineChartComponent(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.legendLabels = [];
        this.colNames = [];
        this.data = [];
        this.destroy$ = new Subject();
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
    Object.defineProperty(CmacsTimelineChartComponent.prototype, "colors", {
        set: /**
         * @param {?} colors
         * @return {?}
         */
        function (colors) {
            this.options.colors = colors;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
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
        var _this = this;
        this.operateData();
        this.checkLang();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkLang();
        }));
    };
    /**
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.checkLang = /**
     * @return {?}
     */
    function () {
        switch (this.i18n.getLocale().locale) {
            case 'de':
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'de' });
                break;
            case 'en':
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'en' });
                break;
            default:
                google.charts.load('46', { 'packages': ['corechart'], 'language': 'en' });
        }
        this.cdr.markForCheck();
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
        return "<div class=\"cmacs-timeline-chart-tooltip-wrapper\">\n  <div class=\"cmacs-timeline-chart-tooltip-title\">\n    <span class=\"cmacs-timeline-chart-legend-marker\" style=\"background-color: " + color + "\"></span>\n    <span class=\"cmacs-timeline-chart-legend-label\">" + data[1] + "</span>\n  </div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-title\">" + data[0] + ":</div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-dates\">" + (this.i18n.getLocale().locale === 'de' ? moment(data[3]).locale('de').format('MMM YYYY') + " - " + moment(data[4]).locale('de').format('MMM YYYY') : moment(data[3]).format('MMM, YYYY') + " - " + moment(data[4]).format('MMM, YYYY')) + " </div>\n  <div class=\"cmacs-timeline-chart-tooltip-project-duration-wrapper\">\n    <div class=\"cmacs-timeline-chart-tooltip-project-duration\">" + (this.i18n.getLocale().locale === 'de' ? 'Dauer' : 'Duration') + ":</div>\n    <div class=\"cmacs-timeline-chart-tooltip-project-duration-date\">" + duration.get('years') + " " + (this.i18n.getLocale().locale === 'de' ? 'Jahre' : 'years') + ", " + duration.get('months') + " " + (this.i18n.getLocale().locale === 'de' ? 'Monate' : 'months') + ", " + duration.get('days') + " " + (this.i18n.getLocale().locale === 'de' ? 'Tage' : 'days') + "</div>\n  </div>\n</div>";
    };
    /**
     * @return {?}
     */
    CmacsTimelineChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsTimelineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-timeline-chart',
                    template: "<div class=\"cmacs-timeline-chart-legend-wrapper\">\r\n  <ng-container *ngFor=\"let label of legendLabels; index as i\">\r\n    <span class=\"cmacs-timeline-chart-legend-marker\" [style.backgroundColor]=\"options.colors[i]\"></span>\r\n    <span class=\"cmacs-timeline-chart-legend-label\">{{label}}</span>\r\n  </ng-container>\r\n</div>\r\n<div class=\"cmacs-timeline-chart-wrapper\">\r\n  <google-chart type=\"Timeline\"\r\n                class=\"cmacs-timeline-chart\"\r\n                [height]=\"height\"\r\n                [width]=\"width\"\r\n                [columnNames]=\"colNames\"\r\n                [options]=\"options\"\r\n                [data]=\"data\">\r\n  </google-chart>\r\n</div>\r\n",
                    styles: ["::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) text{fill:#656c79}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(2) text{fill:#656c79}::ng-deep .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper{padding-bottom:10px;text-align:right;border:none!important}::ng-deep .cmacs-timeline-chart-tooltip-wrapper{background-color:rgba(0,0,0,.75)!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date,::ng-deep .cmacs-timeline-chart-tooltip-project-title{display:inline-block}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date{padding-left:5px;color:#bec4cd}::ng-deep .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}::ng-deep .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}::ng-deep div.google-visualization-tooltip{border:none;width:235px}::ng-deep .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineChartComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    CmacsTimelineChartComponent.propDecorators = {
        legendLabels: [{ type: Input }],
        colNames: [{ type: Input }],
        data: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        colors: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineChartComponent.prototype.destroy$;
    /** @type {?} */
    CmacsTimelineChartComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineChartComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineChartComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLEtBQUssRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBQ3pCLE1BQU0sR0FBRyxPQUFPO0FBR3RCO0lBaUVFLHFDQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQTFEOUQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBSXZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRztZQUNSLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7WUFDOUIsZUFBZSxFQUFFLFNBQVM7WUFDMUIseUJBQXlCLEVBQUUsS0FBSztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNELFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7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QUFDLHVGQUVELElBQUksQ0FBQyxDQUFDLENBQUMsOEVBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUcsQ0FBQyxDQUFDLENBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBSSw2SkFFbE8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsd0ZBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLFdBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSw4QkFFL1QsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4c0JBQW9EOztpQkFFckQ7Ozs7Z0JBYjRELGlCQUFpQjtnQkFJckUsYUFBYTs7OytCQVluQixLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBb0JMLEtBQUs7O0lBc0VSLGtDQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FoR1ksMkJBQTJCOzs7SUFFdEMsbURBQTJCOztJQUMzQiwrQ0FBbUM7O0lBQ25DLDJDQUErQjs7SUFDL0IsNENBQXVCOztJQUN2Qiw2Q0FBd0I7Ozs7O0lBRXhCLCtDQUFpQzs7SUFFakMsOENBY0U7Ozs7O0lBb0NVLDBDQUE4Qjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBsZWdlbmRMYWJlbHMgPSBbXTtcclxuICBASW5wdXQoKSBjb2xOYW1lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIGNvbG9yczogWycjMmE3Y2ZmJywgJyNmZmEyMzQnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYXZvaWRPdmVybGFwcGluZ0dyaWRMaW5lczogZmFsc2UsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGlzSHRtbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aW1lbGluZToge1xyXG4gICAgICByb3dMYWJlbFN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250TmFtZTogJ1JvYm90by1SZWd1bGFyJyxcclxuICAgICAgICBmb250U2l6ZTogJzEyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sb3JzKGNvbG9ycykge1xyXG4gICAgdGhpcy5vcHRpb25zLmNvbG9ycyA9IGNvbG9ycztcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5jaGVja0xhbmcoKTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrTGFuZygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgJ2xhbmd1YWdlJzogJ2RlJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7ICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sICdsYW5ndWFnZSc6ICdlbicgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCc0NicsIHsgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgJ2xhbmd1YWdlJzogJ2VuJyB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgY29uc3QgY29sb3JJZHggPSB0aGlzLmxlZ2VuZExhYmVscy5maW5kSW5kZXgoYyA9PiBjID09PSBpdGVtWzFdKTtcclxuICAgICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICAgIGlmIChjb2xvcklkeCA+PSAwKSB7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JzW2NvbG9ySWR4XTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtWzJdID0gdGhpcy5jcmVhdGVDdXN0b21Ub29sdGlwKGl0ZW0sIGNvbG9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ3VzdG9tVG9vbHRpcChkYXRhLCBjb2xvcikge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24obW9tZW50KGRhdGFbNF0pLmRpZmYobW9tZW50KGRhdGFbM10pKSk7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC10aXRsZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+JHtkYXRhWzFdfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LXRpdGxlXCI+JHtkYXRhWzBdfTo8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWRhdGVzXCI+JHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gYCR7bW9tZW50KGRhdGFbM10pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9IC0gJHttb21lbnQoZGF0YVs0XSkubG9jYWxlKCdkZScpLmZvcm1hdCgnTU1NIFlZWVknKX1gIDogYCR7bW9tZW50KGRhdGFbM10pLmZvcm1hdCgnTU1NLCBZWVlZJyl9IC0gJHsgbW9tZW50KGRhdGFbNF0pLmZvcm1hdCgnTU1NLCBZWVlZJykgfWB9IDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvblwiPiR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdEYXVlcicgOiAnRHVyYXRpb24nIH06PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLWRhdGVcIj4ke2R1cmF0aW9uLmdldCgneWVhcnMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ0phaHJlJyA6ICd5ZWFycyd9LCAke2R1cmF0aW9uLmdldCgnbW9udGhzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdNb25hdGUnIDogJ21vbnRocyd9LCAke2R1cmF0aW9uLmdldCgnZGF5cycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnVGFnZScgOiAnZGF5cyd9PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19