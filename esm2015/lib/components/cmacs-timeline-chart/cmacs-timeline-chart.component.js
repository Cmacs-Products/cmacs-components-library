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
const moment = moment_;
export class CmacsTimelineChartComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data) {
            this.operateData();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.operateData();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    google.charts.load('current', { 'packages': ['corechart'], 'language': 'de' });
                    break;
                case 'en':
                    google.charts.load('current', { 'packages': ['corechart'], 'language': 'en' });
                    break;
                default:
                    google.charts.load('current', { 'packages': ['corechart'], 'language': 'en' });
            }
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    operateData() {
        for (let i = 0; i < this.data.length; i++) {
            /** @type {?} */
            const item = this.data[i];
            /** @type {?} */
            const colorIdx = this.legendLabels.findIndex((/**
             * @param {?} c
             * @return {?}
             */
            c => c === item[1]));
            /** @type {?} */
            let color = '';
            if (colorIdx >= 0) {
                color = this.options.colors[colorIdx];
            }
            item[2] = this.createCustomTooltip(item, color);
        }
    }
    /**
     * @param {?} data
     * @param {?} color
     * @return {?}
     */
    createCustomTooltip(data, color) {
        /** @type {?} */
        const duration = moment.duration(moment(data[4]).diff(moment(data[3])));
        return `<div class="cmacs-timeline-chart-tooltip-wrapper">
  <div class="cmacs-timeline-chart-tooltip-title">
    <span class="cmacs-timeline-chart-legend-marker" style="background-color: ${color}"></span>
    <span class="cmacs-timeline-chart-legend-label">${data[1]}</span>
  </div>
  <div class="cmacs-timeline-chart-tooltip-project-title">${data[0]}:</div>
  <div class="cmacs-timeline-chart-tooltip-project-dates">${moment(data[3]).format('MMM, YYYY')} - ${moment(data[4]).format('MMM, YYYY')}</div>
  <div class="cmacs-timeline-chart-tooltip-project-duration-wrapper">
    <div class="cmacs-timeline-chart-tooltip-project-duration">Duration:</div>
    <div class="cmacs-timeline-chart-tooltip-project-duration-date">${duration.get('years')} years, ${duration.get('months')} months, ${duration.get('days')} days</div>
  </div>
</div>`;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTimelineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-timeline-chart',
                template: "<div class=\"cmacs-timeline-chart-legend-wrapper\">\r\n  <ng-container *ngFor=\"let label of legendLabels; index as i\">\r\n    <span class=\"cmacs-timeline-chart-legend-marker\" [style.backgroundColor]=\"options.colors[i]\"></span>\r\n    <span class=\"cmacs-timeline-chart-legend-label\">{{label}}</span>\r\n  </ng-container>\r\n</div>\r\n<div class=\"cmacs-timeline-chart-wrapper\">\r\n  <google-chart type=\"Timeline\"\r\n                class=\"cmacs-timeline-chart\"\r\n                [height]=\"height\"\r\n                [width]=\"width\"\r\n                [columnNames]=\"colNames\"\r\n                [options]=\"options\"\r\n                [data]=\"data\">\r\n  </google-chart>\r\n</div>\r\n",
                styles: ["::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) text{fill:none}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(3) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div div svg g:nth-of-type(5) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) text{fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(4) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(6) rect{height:15px;-webkit-transform:translateY(4px);transform:translateY(4px)}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) rect{stroke:#bec4cd;stroke-width:.5px;fill:none}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) path{stroke:none}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar{width:6px;height:6px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .cmacs-timeline-chart ::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(1) text{fill:#656c79}::ng-deep .cmacs-timeline-chart div div div svg g:nth-of-type(2) text{fill:#656c79}::ng-deep .cmacs-timeline-chart-legend-marker{width:4px;height:10px;border-radius:5px;display:inline-block}.cmacs-timeline-chart-legend-label{padding-left:6px;padding-right:20px;font-family:Roboto-Regular;font-size:12px;color:#656c79}.cmacs-timeline-chart-legend-wrapper{padding-bottom:10px;text-align:right;border:none!important}::ng-deep .cmacs-timeline-chart-tooltip-wrapper{background-color:rgba(0,0,0,.75)!important;color:#fff;font-size:12px;font-family:Roboto-Regular;padding:10px 14px;border-radius:2px}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date,::ng-deep .cmacs-timeline-chart-tooltip-project-title{display:inline-block}::ng-deep .cmacs-timeline-chart-tooltip-project-dates,::ng-deep .cmacs-timeline-chart-tooltip-project-duration-date{padding-left:5px;color:#bec4cd}::ng-deep .cmacs-timeline-chart-tooltip-title{border-bottom:1px solid #bec4cd;padding:2px 0 5px;margin-bottom:8px}::ng-deep .cmacs-timeline-chart-tooltip-title .cmacs-timeline-chart-legend-label{color:#fff!important;padding-left:5px}::ng-deep div.google-visualization-tooltip{border:none;width:235px}::ng-deep .cmacs-timeline-chart-tooltip-project-duration-wrapper{padding-top:5px}"]
            }] }
];
/** @nocollapse */
CmacsTimelineChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
CmacsTimelineChartComponent.propDecorators = {
    legendLabels: [{ type: Input }],
    colNames: [{ type: Input }],
    data: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLEtBQUssRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BQ3pCLE1BQU0sR0FBRyxPQUFPO0FBUXRCLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBbUR0QyxZQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWpEOUQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBSXZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRztZQUNSLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7WUFDOUIsZUFBZSxFQUFFLFNBQVM7WUFDMUIseUJBQXlCLEVBQUUsS0FBSztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNELFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLFNBQVM7b0JB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RyxDQUFDLE1BQU0sQ0FBQzs7T0FFckosQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOHNCQUFvRDs7YUFFckQ7Ozs7WUFiNEQsaUJBQWlCO1lBSXJFLGFBQWE7OzsyQkFZbkIsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBSk4sbURBQTJCOztJQUMzQiwrQ0FBbUM7O0lBQ25DLDJDQUErQjs7SUFDL0IsNENBQXVCOztJQUN2Qiw2Q0FBd0I7Ozs7O0lBRXhCLCtDQUFpQzs7SUFFakMsOENBY0U7Ozs7O0lBMkJVLDBDQUE4Qjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBsZWdlbmRMYWJlbHMgPSBbXTtcclxuICBASW5wdXQoKSBjb2xOYW1lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIGNvbG9yczogWycjMmE3Y2ZmJywgJyNmZmEyMzQnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYXZvaWRPdmVybGFwcGluZ0dyaWRMaW5lczogZmFsc2UsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGlzSHRtbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aW1lbGluZToge1xyXG4gICAgICByb3dMYWJlbFN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICcjNjU2Yzc5JyxcclxuICAgICAgICBmb250TmFtZTogJ1JvYm90by1SZWd1bGFyJyxcclxuICAgICAgICBmb250U2l6ZTogJzEyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCdjdXJyZW50JywgeyAncGFja2FnZXMnOiBbJ2NvcmVjaGFydCddLCAnbGFuZ3VhZ2UnOiAnZGUnIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCdjdXJyZW50JywgeyAncGFja2FnZXMnOiBbJ2NvcmVjaGFydCddLCAnbGFuZ3VhZ2UnOiAnZW4nIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHsgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgJ2xhbmd1YWdlJzogJ2VuJyB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgY29uc3QgY29sb3JJZHggPSB0aGlzLmxlZ2VuZExhYmVscy5maW5kSW5kZXgoYyA9PiBjID09PSBpdGVtWzFdKTtcclxuICAgICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICAgIGlmIChjb2xvcklkeCA+PSAwKSB7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JzW2NvbG9ySWR4XTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtWzJdID0gdGhpcy5jcmVhdGVDdXN0b21Ub29sdGlwKGl0ZW0sIGNvbG9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ3VzdG9tVG9vbHRpcChkYXRhLCBjb2xvcikge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24obW9tZW50KGRhdGFbNF0pLmRpZmYobW9tZW50KGRhdGFbM10pKSk7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC10aXRsZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC1sZWdlbmQtbWFya2VyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLWxhYmVsXCI+JHtkYXRhWzFdfTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LXRpdGxlXCI+JHtkYXRhWzBdfTo8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWRhdGVzXCI+JHttb21lbnQoZGF0YVszXSkuZm9ybWF0KCdNTU0sIFlZWVknKX0gLSAke21vbWVudChkYXRhWzRdKS5mb3JtYXQoJ01NTSwgWVlZWScpfTwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb24td3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvblwiPkR1cmF0aW9uOjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvbi1kYXRlXCI+JHtkdXJhdGlvbi5nZXQoJ3llYXJzJyl9IHllYXJzLCAke2R1cmF0aW9uLmdldCgnbW9udGhzJyl9IG1vbnRocywgJHtkdXJhdGlvbi5nZXQoJ2RheXMnKX0gZGF5czwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==