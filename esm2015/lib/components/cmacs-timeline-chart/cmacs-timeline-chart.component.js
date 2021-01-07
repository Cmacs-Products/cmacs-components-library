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
     * @param {?} colors
     * @return {?}
     */
    set colors(colors) {
        this.options.colors = colors;
        this.cdr.detectChanges();
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
        this.checkLang();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.checkLang();
        }));
    }
    /**
     * @return {?}
     */
    checkLang() {
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
  <div class="cmacs-timeline-chart-tooltip-project-dates">${this.i18n.getLocale().locale === 'de' ? `${moment(data[3]).locale('de').format('MMM YYYY')} - ${moment(data[4]).locale('de').format('MMM YYYY')}` : `${moment(data[3]).format('MMM, YYYY')} - ${moment(data[4]).format('MMM, YYYY')}`} </div>
  <div class="cmacs-timeline-chart-tooltip-project-duration-wrapper">
    <div class="cmacs-timeline-chart-tooltip-project-duration">${this.i18n.getLocale().locale === 'de' ? 'Dauer' : 'Duration'}:</div>
    <div class="cmacs-timeline-chart-tooltip-project-duration-date">${duration.get('years')} ${this.i18n.getLocale().locale === 'de' ? 'jahre' : 'years'}, ${duration.get('months')} ${this.i18n.getLocale().locale === 'de' ? 'monate' : 'months'}, ${duration.get('days')} ${this.i18n.getLocale().locale === 'de' ? 'tage' : 'days'}</div>
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
    height: [{ type: Input }],
    colors: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10aW1lbGluZS1jaGFydC9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLEtBQUssRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BQ3pCLE1BQU0sR0FBRyxPQUFPO0FBUXRCLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBNER0QyxZQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQTFEOUQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBSXZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRztZQUNSLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7WUFDOUIsZUFBZSxFQUFFLFNBQVM7WUFDMUIseUJBQXlCLEVBQUUsS0FBSztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNELFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLFNBQVM7b0JB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LElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBRSxFQUFFOztpRUFFbE8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVc7c0VBQ3hELFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTs7T0FFL1QsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOHNCQUFvRDs7YUFFckQ7Ozs7WUFiNEQsaUJBQWlCO1lBSXJFLGFBQWE7OzsyQkFZbkIsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQW9CTCxLQUFLOzs7O0lBeEJOLG1EQUEyQjs7SUFDM0IsK0NBQW1DOztJQUNuQywyQ0FBK0I7O0lBQy9CLDRDQUF1Qjs7SUFDdkIsNkNBQXdCOzs7OztJQUV4QiwrQ0FBaUM7O0lBRWpDLDhDQWNFOzs7OztJQW9DVSwwQ0FBOEI7Ozs7O0lBQUUsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgbGVnZW5kTGFiZWxzID0gW107XHJcbiAgQElucHV0KCkgY29sTmFtZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICBjb2xvcnM6IFsnIzJhN2NmZicsICcjZmZhMjM0J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGF2b2lkT3ZlcmxhcHBpbmdHcmlkTGluZXM6IGZhbHNlLFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICBpc0h0bWw6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGltZWxpbmU6IHtcclxuICAgICAgcm93TGFiZWxTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnIzY1NmM3OScsXHJcbiAgICAgICAgZm9udE5hbWU6ICdSb2JvdG8tUmVndWxhcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbG9ycyhjb2xvcnMpIHtcclxuICAgIHRoaXMub3B0aW9ucy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIHRoaXMuY2hlY2tMYW5nKCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrTGFuZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0xhbmcoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7ICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sICdsYW5ndWFnZSc6ICdkZScgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoJzQ2JywgeyAncGFja2FnZXMnOiBbJ2NvcmVjaGFydCddLCAnbGFuZ3VhZ2UnOiAnZW4nIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnNDYnLCB7ICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sICdsYW5ndWFnZSc6ICdlbicgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBvcGVyYXRlRGF0YSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgIGNvbnN0IGNvbG9ySWR4ID0gdGhpcy5sZWdlbmRMYWJlbHMuZmluZEluZGV4KGMgPT4gYyA9PT0gaXRlbVsxXSk7XHJcbiAgICAgIGxldCBjb2xvciA9ICcnO1xyXG4gICAgICBpZiAoY29sb3JJZHggPj0gMCkge1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yc1tjb2xvcklkeF07XHJcbiAgICAgIH1cclxuICAgICAgaXRlbVsyXSA9IHRoaXMuY3JlYXRlQ3VzdG9tVG9vbHRpcChpdGVtLCBjb2xvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUN1c3RvbVRvb2x0aXAoZGF0YSwgY29sb3IpIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKG1vbWVudChkYXRhWzRdKS5kaWZmKG1vbWVudChkYXRhWzNdKSkpO1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC13cmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtdGl0bGVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtbGVnZW5kLW1hcmtlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LWxlZ2VuZC1sYWJlbFwiPiR7ZGF0YVsxXX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC10aXRsZVwiPiR7ZGF0YVswXX06PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kYXRlc1wiPiR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/IGAke21vbWVudChkYXRhWzNdKS5sb2NhbGUoJ2RlJykuZm9ybWF0KCdNTU0gWVlZWScpfSAtICR7bW9tZW50KGRhdGFbNF0pLmxvY2FsZSgnZGUnKS5mb3JtYXQoJ01NTSBZWVlZJyl9YCA6IGAke21vbWVudChkYXRhWzNdKS5mb3JtYXQoJ01NTSwgWVlZWScpfSAtICR7IG1vbWVudChkYXRhWzRdKS5mb3JtYXQoJ01NTSwgWVlZWScpIH1gfSA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdGltZWxpbmUtY2hhcnQtdG9vbHRpcC1wcm9qZWN0LWR1cmF0aW9uLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy10aW1lbGluZS1jaGFydC10b29sdGlwLXByb2plY3QtZHVyYXRpb25cIj4ke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnRGF1ZXInIDogJ0R1cmF0aW9uJyB9OjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXRpbWVsaW5lLWNoYXJ0LXRvb2x0aXAtcHJvamVjdC1kdXJhdGlvbi1kYXRlXCI+JHtkdXJhdGlvbi5nZXQoJ3llYXJzJyl9ICR7dGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSA9PT0gJ2RlJyA/ICdqYWhyZScgOiAneWVhcnMnfSwgJHtkdXJhdGlvbi5nZXQoJ21vbnRocycpfSAke3RoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnbW9uYXRlJyA6ICdtb250aHMnfSwgJHtkdXJhdGlvbi5nZXQoJ2RheXMnKX0gJHt0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ3RhZ2UnIDogJ2RheXMnfTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==