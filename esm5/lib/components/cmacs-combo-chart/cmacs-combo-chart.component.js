/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, } from '@angular/core';
// import { curveLinear } from 'd3-shape';
// import { scaleBand, scaleLinear, scalePoint, scaleTime } from 'd3-scale';
// import {
//   BaseChartComponent,
//   LineSeriesComponent,
//   ViewDimensions,
//   ColorHelper,
//   calculateViewDimensions
// } from '@swimlane/ngx-charts';
var CmacsComboChartComponent = /** @class */ (function () {
    function CmacsComboChartComponent() {
        // = curveLinear;
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.roundDomains = false;
        this.animations = true;
        this.noBarWhenZero = true;
        //   @Output() activate: EventEmitter<any> = new EventEmitter();
        //   @Output() deactivate: EventEmitter<any> = new EventEmitter();
        //   @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;
        //   @ContentChild('seriesTooltipTemplate') seriesTooltipTemplate: TemplateRef<any>;
        //   @ViewChild(LineSeriesComponent) lineSeriesComponent: LineSeriesComponent;
        //   dims: ViewDimensions;
        //   xScale: any;
        //   yScale: any;
        //   xDomain: any;
        //   yDomain: any;
        //   transform: string;
        //   colors: ColorHelper;
        //   colorsLine: ColorHelper;
        //   margin: any[] = [10, 20, 10, 20];
        //   xAxisHeight = 0;
        //   yAxisWidth = 0;
        //   legendOptions: any;
        //   scaleType = 'linear';
        //   xScaleLine;
        //   yScaleLine;
        //   xDomainLine;
        //   yDomainLine;
        //   seriesDomain;
        //   scaledAxis;
        //   combinedSeries;
        //   xSet;
        //   filteredDomain;
        //   hoveredVertical;
        //   yOrientLeft = 'left';
        //   yOrientRight = 'right';
        //   legendSpacing = 0;
        //   bandwidth;
        //   barPadding = 8;
        //   trackBy(index, item): string {
        //     return item.name;
        //   }
        //   update(): void {
        //     super.update();
        //     this.dims = calculateViewDimensions({
        //       width: this.width,
        //       height: this.height,
        //       margins: this.margin,
        //       showXAxis: this.xAxis,
        //       showYAxis: this.yAxis,
        //       xAxisHeight: this.xAxisHeight,
        //       yAxisWidth: this.yAxisWidth,
        //       showXLabel: this.showXAxisLabel,
        //       showYLabel: this.showYAxisLabel,
        //       showLegend: this.legend,
        //       legendType: this.schemeType,
        //       legendPosition: this.legendPosition
        //     });
        //     if (!this.yAxis) {
        //       this.legendSpacing = 0;
        //     } else if (this.showYAxisLabel && this.yAxis) {
        //       this.legendSpacing = 100;
        //     } else {
        //       this.legendSpacing = 40;
        //     }
        //     this.xScale = this.getXScale();
        //     this.yScale = this.getYScale();
        //     // line chart
        //     this.xDomainLine = this.getXDomainLine();
        //     if (this.filteredDomain) {
        //       this.xDomainLine = this.filteredDomain;
        //     }
        //     this.yDomainLine = this.getYDomainLine();
        //     this.seriesDomain = this.getSeriesDomain();
        //     this.scaleLines();
        //     this.setColors();
        //     this.legendOptions = this.getLegendOptions();
        //     this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        //   }
        //   deactivateAll() {
        //     this.activeEntries = [...this.activeEntries];
        //     for (const entry of this.activeEntries) {
        //       this.deactivate.emit({ value: entry, entries: [] });
        //     }
        //     this.activeEntries = [];
        //   }
        //   @HostListener('mouseleave')
        //   hideCircles(): void {
        //     this.hoveredVertical = null;
        //     this.deactivateAll();
        //   }
        //   updateHoveredVertical(item): void {
        //     this.hoveredVertical = item.value;
        //     this.deactivateAll();
        //   }
        //   updateDomain(domain): void {
        //     this.filteredDomain = domain;
        //     this.xDomainLine = this.filteredDomain;
        //     this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        //   }
        //   scaleLines() {
        //     this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        //     this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
        //   }
        //   getSeriesDomain(): any[] {
        //     this.combinedSeries = this.lineChart.slice(0);
        //     this.combinedSeries.push({
        //       name: this.yAxisLabel,
        //       series: this.results
        //     });
        //     return this.combinedSeries.map(d => d.name);
        //   }
        //   isDate(value): boolean {
        //     if (value instanceof Date) {
        //       return true;
        //     }
        //     return false;
        //   }
        //   getScaleType(values): string {
        //     let date = true;
        //     let num = true;
        //     for (const value of values) {
        //       if (!this.isDate(value)) {
        //         date = false;
        //       }
        //       if (typeof value !== 'number') {
        //         num = false;
        //       }
        //     }
        //     if (date) { return 'time'; }
        //     if (num) { return 'linear'; }
        //     return 'ordinal';
        //   }
        //   getXDomainLine(): any[] {
        //     let values = [];
        //     for (const results of this.lineChart) {
        //       for (const d of results.series) {
        //         if (!values.includes(d.name)) {
        //           values.push(d.name);
        //         }
        //       }
        //     }
        //     this.scaleType = this.getScaleType(values);
        //     let domain = [];
        //     if (this.scaleType === 'time') {
        //       const min = Math.min(...values);
        //       const max = Math.max(...values);
        //       domain = [min, max];
        //     } else if (this.scaleType === 'linear') {
        //       values = values.map(v => Number(v));
        //       const min = Math.min(...values);
        //       const max = Math.max(...values);
        //       domain = [min, max];
        //     } else {
        //       domain = values;
        //     }
        //     this.xSet = values;
        //     return domain;
        //   }
        //   getYDomainLine(): any[] {
        //     const domain = [];
        //     for (const results of this.lineChart) {
        //       for (const d of results.series) {
        //         if (domain.indexOf(d.value) < 0) {
        //           domain.push(d.value);
        //         }
        //         if (d.min !== undefined) {
        //           if (domain.indexOf(d.min) < 0) {
        //             domain.push(d.min);
        //           }
        //         }
        //         if (d.max !== undefined) {
        //           if (domain.indexOf(d.max) < 0) {
        //             domain.push(d.max);
        //           }
        //         }
        //       }
        //     }
        //     let min = Math.min(...domain);
        //     const max = Math.max(...domain);
        //     if (this.yRightAxisScaleFactor) {
        //       const minMax = this.yRightAxisScaleFactor(min, max);
        //       return [Math.min(0, minMax.min), minMax.max];
        //     } else {
        //       min = Math.min(0, min);
        //       return [min, max];
        //     }
        //   }
        //   getXScaleLine(domain, width): any {
        //     let scale;
        //     if (this.bandwidth === undefined) {
        //       this.bandwidth = width - this.barPadding;
        //     }
        //     const offset = Math.floor((width + this.barPadding - (this.bandwidth + this.barPadding) * domain.length) / 2);
        //     if (this.scaleType === 'time') {
        //       scale = scaleTime()
        //         .range([0, width])
        //         .domain(domain);
        //     } else if (this.scaleType === 'linear') {
        //       scale = scaleLinear()
        //         .range([0, width])
        //         .domain(domain);
        //       if (this.roundDomains) {
        //         scale = scale.nice();
        //       }
        //     } else if (this.scaleType === 'ordinal') {
        //       scale = scalePoint()
        //         .range([offset + this.bandwidth / 2, width - offset - this.bandwidth / 2])
        //         .domain(domain);
        //     }
        //     return scale;
        //   }
        //   getYScaleLine(domain, height): any {
        //     const scale = scaleLinear()
        //       .range([height, 0])
        //       .domain(domain);
        //     return this.roundDomains ? scale.nice() : scale;
        //   }
        //   getXScale(): any {
        //     this.xDomain = this.getXDomain();
        //     const spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
        //     return scaleBand()
        //       .range([0, this.dims.width])
        //       .paddingInner(spacing)
        //       .domain(this.xDomain);
        //   }
        //   getYScale(): any {
        //     this.yDomain = this.getYDomain();
        //     const scale = scaleLinear()
        //       .range([this.dims.height, 0])
        //       .domain(this.yDomain);
        //     return this.roundDomains ? scale.nice() : scale;
        //   }
        //   getXDomain(): any[] {
        //     return this.results.map(d => d.name);
        //   }
        //   getYDomain() {
        //     const values = this.results.map(d => d.value);
        //     const min = Math.min(0, ...values);
        //     const max = Math.max(...values);
        //     if (this.yLeftAxisScaleFactor) {
        //       const minMax = this.yLeftAxisScaleFactor(min, max);
        //       return [Math.min(0, minMax.min), minMax.max];
        //     } else {
        //       return [min, max];
        //     }
        //   }
        //   onClick(data) {
        //     this.select.emit(data);
        //   }
        //   setColors(): void {
        //     let domain;
        //     if (this.schemeType === 'ordinal') {
        //       domain = this.xDomain;
        //     } else {
        //       domain = this.yDomain;
        //     }
        //     this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
        //     this.colorsLine = new ColorHelper(this.colorSchemeLine, this.schemeType, domain, this.customColors);
        //   }
        //   getLegendOptions() {
        //     const opts = {
        //       scaleType: this.schemeType,
        //       colors: undefined,
        //       domain: [],
        //       title: undefined,
        //       position: this.legendPosition
        //     };
        //     if (opts.scaleType === 'ordinal') {
        //       opts.domain = this.seriesDomain;
        //       opts.colors = this.colorsLine;
        //       opts.title = this.legendTitle;
        //     } else {
        //       opts.domain = this.seriesDomain;
        //       opts.colors = this.colors.scale;
        //     }
        //     return opts;
        //   }
        //   updateLineWidth(width): void {
        //     this.bandwidth = width;
        //     this.scaleLines();
        //   }
        //   updateYAxisWidth({ width }): void {
        //     this.yAxisWidth = width + 20;
        //     this.update();
        //   }
        //   updateXAxisHeight({ height }): void {
        //     this.xAxisHeight = height;
        //     this.update();
        //   }
        //   onActivate(item) {
        //     const idx = this.activeEntries.findIndex(d => {
        //       return d.name === item.name && d.value === item.value && d.series === item.series;
        //     });
        //     if (idx > -1) {
        //       return;
        //     }
        //     this.activeEntries = [item, ...this.activeEntries];
        //     this.activate.emit({ value: item, entries: this.activeEntries });
        //   }
        //   onDeactivate(item) {
        //     const idx = this.activeEntries.findIndex(d => {
        //       return d.name === item.name && d.value === item.value && d.series === item.series;
        //     });
        //     this.activeEntries.splice(idx, 1);
        //     this.activeEntries = [...this.activeEntries];
        //     this.deactivate.emit({ value: item, entries: this.activeEntries });
        //   }
    }
    CmacsComboChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-combo-chart',
                    template: "<!-- <cmacs-dashboard-widget-container>\r\n  <ngx-charts-chart\r\n    [view]=\"[width + legendSpacing, height]\"\r\n    [showLegend]=\"legend\"\r\n    [legendOptions]=\"legendOptions\"\r\n    [activeEntries]=\"activeEntries\"\r\n    [animations]=\"animations\"\r\n    (legendLabelClick)=\"onClick($event)\"\r\n    (legendLabelActivate)=\"onActivate($event)\"\r\n    (legendLabelDeactivate)=\"onDeactivate($event)\"\r\n  >\r\n    <svg:g [attr.transform]=\"transform\" class=\"bar-chart chart\">\r\n      <svg:g\r\n        ngx-charts-x-axis\r\n        *ngIf=\"xAxis\"\r\n        [xScale]=\"xScale\"\r\n        [dims]=\"dims\"\r\n        [showLabel]=\"showXAxisLabel\"\r\n        [labelText]=\"xAxisLabel\"\r\n        [tickFormatting]=\"xAxisTickFormatting\"\r\n        (dimensionsChanged)=\"updateXAxisHeight($event)\"\r\n      ></svg:g>\r\n      <svg:g\r\n        ngx-charts-y-axis\r\n        *ngIf=\"yAxis\"\r\n        [yScale]=\"yScale\"\r\n        [dims]=\"dims\"\r\n        [yOrient]=\"yOrientLeft\"\r\n        [showGridLines]=\"showGridLines\"\r\n        [showLabel]=\"showYAxisLabel\"\r\n        [labelText]=\"yAxisLabel\"\r\n        [tickFormatting]=\"yAxisTickFormatting\"\r\n        (dimensionsChanged)=\"updateYAxisWidth($event)\"\r\n      ></svg:g>\r\n      <svg:g\r\n        ngx-charts-y-axis\r\n        *ngIf=\"yAxis\"\r\n        [yScale]=\"yScaleLine\"\r\n        [dims]=\"dims\"\r\n        [yOrient]=\"yOrientRight\"\r\n        [showGridLines]=\"showGridLines\"\r\n        [showLabel]=\"showRightYAxisLabel\"\r\n        [labelText]=\"yAxisLabelRight\"\r\n        [tickFormatting]=\"yRightAxisTickFormatting\"\r\n        (dimensionsChanged)=\"updateYAxisWidth($event)\"\r\n      ></svg:g>\r\n      <svg:g\r\n        ngx-combo-charts-series-vertical\r\n        [xScale]=\"xScale\"\r\n        [yScale]=\"yScale\"\r\n        [colors]=\"colors\"\r\n        [series]=\"results\"\r\n        [seriesLine]=\"lineChart\"\r\n        [dims]=\"dims\"\r\n        [gradient]=\"gradient\"\r\n        tooltipDisabled=\"true\"\r\n        [activeEntries]=\"activeEntries\"\r\n        [animations]=\"animations\"\r\n        [noBarWhenZero]=\"noBarWhenZero\"\r\n        (activate)=\"onActivate($event)\"\r\n        (deactivate)=\"onDeactivate($event)\"\r\n        (bandwidth)=\"updateLineWidth($event)\"\r\n        (select)=\"onClick($event)\"\r\n      ></svg:g>\r\n    </svg:g>\r\n    <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\r\n      <svg:g>\r\n        <svg:g *ngFor=\"let series of lineChart; trackBy: trackBy\">\r\n          <svg:g\r\n            ngx-charts-line-series\r\n            [xScale]=\"xScaleLine\"\r\n            [yScale]=\"yScaleLine\"\r\n            [colors]=\"colorsLine\"\r\n            [data]=\"series\"\r\n            [activeEntries]=\"activeEntries\"\r\n            [scaleType]=\"scaleType\"\r\n            [curve]=\"curve\"\r\n            [rangeFillOpacity]=\"rangeFillOpacity\"\r\n            [animations]=\"animations\"\r\n          />\r\n        </svg:g>\r\n\r\n        <svg:g\r\n          ngx-charts-tooltip-area\r\n          *ngIf=\"!tooltipDisabled\"\r\n          [dims]=\"dims\"\r\n          [xSet]=\"xSet\"\r\n          [xScale]=\"xScaleLine\"\r\n          [yScale]=\"yScaleLine\"\r\n          [results]=\"combinedSeries\"\r\n          [colors]=\"colorsLine\"\r\n          [tooltipDisabled]=\"tooltipDisabled\"\r\n          (hover)=\"updateHoveredVertical($event)\"\r\n        />\r\n\r\n        <svg:g *ngFor=\"let series of lineChart\">\r\n          <svg:g\r\n            ngx-charts-circle-series\r\n            [xScale]=\"xScaleLine\"\r\n            [yScale]=\"yScaleLine\"\r\n            [colors]=\"colorsLine\"\r\n            [data]=\"series\"\r\n            [scaleType]=\"scaleType\"\r\n            [visibleValue]=\"hoveredVertical\"\r\n            [activeEntries]=\"activeEntries\"\r\n            [tooltipDisabled]=\"tooltipDisabled\"\r\n            (select)=\"onClick($event)\"\r\n            (activate)=\"onActivate($event)\"\r\n            (deactivate)=\"onDeactivate($event)\"\r\n          />\r\n        </svg:g>\r\n      </svg:g>\r\n    </svg:g>\r\n  </ngx-charts-chart>\r\n</cmacs-dashboard-widget-container> -->",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive{-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
                }] }
    ];
    CmacsComboChartComponent.propDecorators = {
        curve: [{ type: Input }],
        legend: [{ type: Input }],
        legendTitle: [{ type: Input }],
        legendPosition: [{ type: Input }],
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        showXAxisLabel: [{ type: Input }],
        showYAxisLabel: [{ type: Input }],
        showRightYAxisLabel: [{ type: Input }],
        xAxisLabel: [{ type: Input }],
        yAxisLabel: [{ type: Input }],
        yAxisLabelRight: [{ type: Input }],
        tooltipDisabled: [{ type: Input }],
        gradient: [{ type: Input }],
        showGridLines: [{ type: Input }],
        activeEntries: [{ type: Input }],
        schemeType: [{ type: Input }],
        xAxisTickFormatting: [{ type: Input }],
        yAxisTickFormatting: [{ type: Input }],
        yRightAxisTickFormatting: [{ type: Input }],
        roundDomains: [{ type: Input }],
        colorSchemeLine: [{ type: Input }],
        autoScale: [{ type: Input }],
        lineChart: [{ type: Input }],
        yLeftAxisScaleFactor: [{ type: Input }],
        yRightAxisScaleFactor: [{ type: Input }],
        rangeFillOpacity: [{ type: Input }],
        animations: [{ type: Input }],
        noBarWhenZero: [{ type: Input }]
    };
    return CmacsComboChartComponent;
}());
export { CmacsComboChartComponent };
if (false) {
    /** @type {?} */
    CmacsComboChartComponent.prototype.curve;
    /** @type {?} */
    CmacsComboChartComponent.prototype.legend;
    /** @type {?} */
    CmacsComboChartComponent.prototype.legendTitle;
    /** @type {?} */
    CmacsComboChartComponent.prototype.legendPosition;
    /** @type {?} */
    CmacsComboChartComponent.prototype.xAxis;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yAxis;
    /** @type {?} */
    CmacsComboChartComponent.prototype.showXAxisLabel;
    /** @type {?} */
    CmacsComboChartComponent.prototype.showYAxisLabel;
    /** @type {?} */
    CmacsComboChartComponent.prototype.showRightYAxisLabel;
    /** @type {?} */
    CmacsComboChartComponent.prototype.xAxisLabel;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yAxisLabel;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yAxisLabelRight;
    /** @type {?} */
    CmacsComboChartComponent.prototype.tooltipDisabled;
    /** @type {?} */
    CmacsComboChartComponent.prototype.gradient;
    /** @type {?} */
    CmacsComboChartComponent.prototype.showGridLines;
    /** @type {?} */
    CmacsComboChartComponent.prototype.activeEntries;
    /** @type {?} */
    CmacsComboChartComponent.prototype.schemeType;
    /** @type {?} */
    CmacsComboChartComponent.prototype.xAxisTickFormatting;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yAxisTickFormatting;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yRightAxisTickFormatting;
    /** @type {?} */
    CmacsComboChartComponent.prototype.roundDomains;
    /** @type {?} */
    CmacsComboChartComponent.prototype.colorSchemeLine;
    /** @type {?} */
    CmacsComboChartComponent.prototype.autoScale;
    /** @type {?} */
    CmacsComboChartComponent.prototype.lineChart;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yLeftAxisScaleFactor;
    /** @type {?} */
    CmacsComboChartComponent.prototype.yRightAxisScaleFactor;
    /** @type {?} */
    CmacsComboChartComponent.prototype.rangeFillOpacity;
    /** @type {?} */
    CmacsComboChartComponent.prototype.animations;
    /** @type {?} */
    CmacsComboChartComponent.prototype.noBarWhenZero;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tYm8tY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1jb21iby1jaGFydC9jbWFjcy1jb21iby1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNKLGlCQUFpQixHQU9sQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVl4QjtJQUFBOztRQVNVLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixtQkFBYyxHQUFHLE9BQU8sQ0FBQztRQVN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUsxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU9yQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRWhDLGdFQUFnRTtRQUNoRSxrRUFBa0U7UUFFbEUsd0VBQXdFO1FBQ3hFLG9GQUFvRjtRQUVwRiw4RUFBOEU7UUFFOUUsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFD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Q0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3NDQUNMLEtBQUs7c0NBQ0wsS0FBSzsyQ0FDTCxLQUFLOytCQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUNBQ0wsS0FBSzt3Q0FDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLOztJQXFXUiwrQkFBQztDQUFBLEFBellBLElBeVlBO1NBbllZLHdCQUF3Qjs7O0lBRW5DLHlDQUFvQjs7SUFDcEIsMENBQXdCOztJQUN4QiwrQ0FBZ0M7O0lBQ2hDLGtEQUFrQzs7SUFDbEMseUNBQWU7O0lBQ2YseUNBQWU7O0lBQ2Ysa0RBQXdCOztJQUN4QixrREFBd0I7O0lBQ3hCLHVEQUE2Qjs7SUFDN0IsOENBQW9COztJQUNwQiw4Q0FBb0I7O0lBQ3BCLG1EQUF5Qjs7SUFDekIsbURBQWlDOztJQUNqQyw0Q0FBMkI7O0lBQzNCLGlEQUE4Qjs7SUFDOUIsaURBQW1DOztJQUNuQyw4Q0FBNEI7O0lBQzVCLHVEQUFrQzs7SUFDbEMsdURBQWtDOztJQUNsQyw0REFBdUM7O0lBQ3ZDLGdEQUE4Qjs7SUFDOUIsbURBQWdDOztJQUNoQyw2Q0FBbUI7O0lBQ25CLDZDQUF3Qjs7SUFDeEIsd0RBQW1DOztJQUNuQyx5REFBb0M7O0lBQ3BDLG9EQUFrQzs7SUFDbEMsOENBQTJCOztJQUMzQixpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IHtcclxuICAgQ29tcG9uZW50LFxyXG4gICBJbnB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4vLyAgIE91dHB1dCxcclxuLy8gICBFdmVudEVtaXR0ZXIsXHJcbi8vICAgVmlld0NoaWxkLFxyXG4vLyAgIEhvc3RMaXN0ZW5lcixcclxuLy8gICBDb250ZW50Q2hpbGQsXHJcbi8vICAgVGVtcGxhdGVSZWZcclxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gaW1wb3J0IHsgY3VydmVMaW5lYXIgfSBmcm9tICdkMy1zaGFwZSc7XHJcbi8vIGltcG9ydCB7IHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlUG9pbnQsIHNjYWxlVGltZSB9IGZyb20gJ2QzLXNjYWxlJztcclxuLy8gaW1wb3J0IHtcclxuLy8gICBCYXNlQ2hhcnRDb21wb25lbnQsXHJcbi8vICAgTGluZVNlcmllc0NvbXBvbmVudCxcclxuLy8gICBWaWV3RGltZW5zaW9ucyxcclxuLy8gICBDb2xvckhlbHBlcixcclxuLy8gICBjYWxjdWxhdGVWaWV3RGltZW5zaW9uc1xyXG4vLyB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtY2hhcnRzJztcclxuXHJcbiBAQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbWJvLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tYm8tY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbWJvLWNoYXJ0LmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbWJvQ2hhcnRDb21wb25lbnQgeyAvLyBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGN1cnZlOiBhbnk7IC8vID0gY3VydmVMaW5lYXI7XHJcbiAgQElucHV0KCkgbGVnZW5kID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGVnZW5kVGl0bGUgPSAnTGVnZW5kJztcclxuICBASW5wdXQoKSBsZWdlbmRQb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgQElucHV0KCkgeEF4aXM7XHJcbiAgQElucHV0KCkgeUF4aXM7XHJcbiAgQElucHV0KCkgc2hvd1hBeGlzTGFiZWw7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWw7XHJcbiAgQElucHV0KCkgc2hvd1JpZ2h0WUF4aXNMYWJlbDtcclxuICBASW5wdXQoKSB4QXhpc0xhYmVsO1xyXG4gIEBJbnB1dCgpIHlBeGlzTGFiZWw7XHJcbiAgQElucHV0KCkgeUF4aXNMYWJlbFJpZ2h0O1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dHcmlkTGluZXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgc2NoZW1lVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHhBeGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcclxuICBASW5wdXQoKSB5QXhpc1RpY2tGb3JtYXR0aW5nOiBhbnk7XHJcbiAgQElucHV0KCkgeVJpZ2h0QXhpc1RpY2tGb3JtYXR0aW5nOiBhbnk7XHJcbiAgQElucHV0KCkgcm91bmREb21haW5zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWVMaW5lOiBhbnlbXTtcclxuICBASW5wdXQoKSBhdXRvU2NhbGU7XHJcbiAgQElucHV0KCkgbGluZUNoYXJ0OiBhbnk7XHJcbiAgQElucHV0KCkgeUxlZnRBeGlzU2NhbGVGYWN0b3I6IGFueTtcclxuICBASW5wdXQoKSB5UmlnaHRBeGlzU2NhbGVGYWN0b3I6IGFueTtcclxuICBASW5wdXQoKSByYW5nZUZpbGxPcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgYW5pbWF0aW9ucyA9IHRydWU7XHJcbiAgQElucHV0KCkgbm9CYXJXaGVuWmVybyA9IHRydWU7XHJcblxyXG4vLyAgIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbi8vICAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuLy8gICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbi8vICAgQENvbnRlbnRDaGlsZCgnc2VyaWVzVG9vbHRpcFRlbXBsYXRlJykgc2VyaWVzVG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuLy8gICBAVmlld0NoaWxkKExpbmVTZXJpZXNDb21wb25lbnQpIGxpbmVTZXJpZXNDb21wb25lbnQ6IExpbmVTZXJpZXNDb21wb25lbnQ7XHJcblxyXG4vLyAgIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xyXG4vLyAgIHhTY2FsZTogYW55O1xyXG4vLyAgIHlTY2FsZTogYW55O1xyXG4vLyAgIHhEb21haW46IGFueTtcclxuLy8gICB5RG9tYWluOiBhbnk7XHJcbi8vICAgdHJhbnNmb3JtOiBzdHJpbmc7XHJcbi8vICAgY29sb3JzOiBDb2xvckhlbHBlcjtcclxuLy8gICBjb2xvcnNMaW5lOiBDb2xvckhlbHBlcjtcclxuLy8gICBtYXJnaW46IGFueVtdID0gWzEwLCAyMCwgMTAsIDIwXTtcclxuLy8gICB4QXhpc0hlaWdodCA9IDA7XHJcbi8vICAgeUF4aXNXaWR0aCA9IDA7XHJcbi8vICAgbGVnZW5kT3B0aW9uczogYW55O1xyXG4vLyAgIHNjYWxlVHlwZSA9ICdsaW5lYXInO1xyXG4vLyAgIHhTY2FsZUxpbmU7XHJcbi8vICAgeVNjYWxlTGluZTtcclxuLy8gICB4RG9tYWluTGluZTtcclxuLy8gICB5RG9tYWluTGluZTtcclxuLy8gICBzZXJpZXNEb21haW47XHJcbi8vICAgc2NhbGVkQXhpcztcclxuLy8gICBjb21iaW5lZFNlcmllcztcclxuLy8gICB4U2V0O1xyXG4vLyAgIGZpbHRlcmVkRG9tYWluO1xyXG4vLyAgIGhvdmVyZWRWZXJ0aWNhbDtcclxuLy8gICB5T3JpZW50TGVmdCA9ICdsZWZ0JztcclxuLy8gICB5T3JpZW50UmlnaHQgPSAncmlnaHQnO1xyXG4vLyAgIGxlZ2VuZFNwYWNpbmcgPSAwO1xyXG4vLyAgIGJhbmR3aWR0aDtcclxuLy8gICBiYXJQYWRkaW5nID0gODtcclxuXHJcbi8vICAgdHJhY2tCeShpbmRleCwgaXRlbSk6IHN0cmluZyB7XHJcbi8vICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdXBkYXRlKCk6IHZvaWQge1xyXG4vLyAgICAgc3VwZXIudXBkYXRlKCk7XHJcbi8vICAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XHJcbi8vICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4vLyAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4vLyAgICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpbixcclxuLy8gICAgICAgc2hvd1hBeGlzOiB0aGlzLnhBeGlzLFxyXG4vLyAgICAgICBzaG93WUF4aXM6IHRoaXMueUF4aXMsXHJcbi8vICAgICAgIHhBeGlzSGVpZ2h0OiB0aGlzLnhBeGlzSGVpZ2h0LFxyXG4vLyAgICAgICB5QXhpc1dpZHRoOiB0aGlzLnlBeGlzV2lkdGgsXHJcbi8vICAgICAgIHNob3dYTGFiZWw6IHRoaXMuc2hvd1hBeGlzTGFiZWwsXHJcbi8vICAgICAgIHNob3dZTGFiZWw6IHRoaXMuc2hvd1lBeGlzTGFiZWwsXHJcbi8vICAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxyXG4vLyAgICAgICBsZWdlbmRUeXBlOiB0aGlzLnNjaGVtZVR5cGUsXHJcbi8vICAgICAgIGxlZ2VuZFBvc2l0aW9uOiB0aGlzLmxlZ2VuZFBvc2l0aW9uXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBpZiAoIXRoaXMueUF4aXMpIHtcclxuLy8gICAgICAgdGhpcy5sZWdlbmRTcGFjaW5nID0gMDtcclxuLy8gICAgIH0gZWxzZSBpZiAodGhpcy5zaG93WUF4aXNMYWJlbCAmJiB0aGlzLnlBeGlzKSB7XHJcbi8vICAgICAgIHRoaXMubGVnZW5kU3BhY2luZyA9IDEwMDtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHRoaXMubGVnZW5kU3BhY2luZyA9IDQwO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgdGhpcy54U2NhbGUgPSB0aGlzLmdldFhTY2FsZSgpO1xyXG4vLyAgICAgdGhpcy55U2NhbGUgPSB0aGlzLmdldFlTY2FsZSgpO1xyXG5cclxuLy8gICAgIC8vIGxpbmUgY2hhcnRcclxuLy8gICAgIHRoaXMueERvbWFpbkxpbmUgPSB0aGlzLmdldFhEb21haW5MaW5lKCk7XHJcbi8vICAgICBpZiAodGhpcy5maWx0ZXJlZERvbWFpbikge1xyXG4vLyAgICAgICB0aGlzLnhEb21haW5MaW5lID0gdGhpcy5maWx0ZXJlZERvbWFpbjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0aGlzLnlEb21haW5MaW5lID0gdGhpcy5nZXRZRG9tYWluTGluZSgpO1xyXG4vLyAgICAgdGhpcy5zZXJpZXNEb21haW4gPSB0aGlzLmdldFNlcmllc0RvbWFpbigpO1xyXG5cclxuLy8gICAgIHRoaXMuc2NhbGVMaW5lcygpO1xyXG5cclxuLy8gICAgIHRoaXMuc2V0Q29sb3JzKCk7XHJcbi8vICAgICB0aGlzLmxlZ2VuZE9wdGlvbnMgPSB0aGlzLmdldExlZ2VuZE9wdGlvbnMoKTtcclxuXHJcbi8vICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLmRpbXMueE9mZnNldH0gLCAke3RoaXMubWFyZ2luWzBdfSlgO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZGVhY3RpdmF0ZUFsbCgpIHtcclxuLy8gICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xyXG4vLyAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmFjdGl2ZUVudHJpZXMpIHtcclxuLy8gICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogZW50cnksIGVudHJpZXM6IFtdIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgdGhpcy5hY3RpdmVFbnRyaWVzID0gW107XHJcbi8vICAgfVxyXG5cclxuLy8gICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuLy8gICBoaWRlQ2lyY2xlcygpOiB2b2lkIHtcclxuLy8gICAgIHRoaXMuaG92ZXJlZFZlcnRpY2FsID0gbnVsbDtcclxuLy8gICAgIHRoaXMuZGVhY3RpdmF0ZUFsbCgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdXBkYXRlSG92ZXJlZFZlcnRpY2FsKGl0ZW0pOiB2b2lkIHtcclxuLy8gICAgIHRoaXMuaG92ZXJlZFZlcnRpY2FsID0gaXRlbS52YWx1ZTtcclxuLy8gICAgIHRoaXMuZGVhY3RpdmF0ZUFsbCgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdXBkYXRlRG9tYWluKGRvbWFpbik6IHZvaWQge1xyXG4vLyAgICAgdGhpcy5maWx0ZXJlZERvbWFpbiA9IGRvbWFpbjtcclxuLy8gICAgIHRoaXMueERvbWFpbkxpbmUgPSB0aGlzLmZpbHRlcmVkRG9tYWluO1xyXG4vLyAgICAgdGhpcy54U2NhbGVMaW5lID0gdGhpcy5nZXRYU2NhbGVMaW5lKHRoaXMueERvbWFpbkxpbmUsIHRoaXMuZGltcy53aWR0aCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBzY2FsZUxpbmVzKCkge1xyXG4vLyAgICAgdGhpcy54U2NhbGVMaW5lID0gdGhpcy5nZXRYU2NhbGVMaW5lKHRoaXMueERvbWFpbkxpbmUsIHRoaXMuZGltcy53aWR0aCk7XHJcbi8vICAgICB0aGlzLnlTY2FsZUxpbmUgPSB0aGlzLmdldFlTY2FsZUxpbmUodGhpcy55RG9tYWluTGluZSwgdGhpcy5kaW1zLmhlaWdodCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRTZXJpZXNEb21haW4oKTogYW55W10ge1xyXG4vLyAgICAgdGhpcy5jb21iaW5lZFNlcmllcyA9IHRoaXMubGluZUNoYXJ0LnNsaWNlKDApO1xyXG4vLyAgICAgdGhpcy5jb21iaW5lZFNlcmllcy5wdXNoKHtcclxuLy8gICAgICAgbmFtZTogdGhpcy55QXhpc0xhYmVsLFxyXG4vLyAgICAgICBzZXJpZXM6IHRoaXMucmVzdWx0c1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gdGhpcy5jb21iaW5lZFNlcmllcy5tYXAoZCA9PiBkLm5hbWUpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaXNEYXRlKHZhbHVlKTogYm9vbGVhbiB7XHJcbi8vICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBmYWxzZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGdldFNjYWxlVHlwZSh2YWx1ZXMpOiBzdHJpbmcge1xyXG4vLyAgICAgbGV0IGRhdGUgPSB0cnVlO1xyXG4vLyAgICAgbGV0IG51bSA9IHRydWU7XHJcblxyXG4vLyAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcclxuLy8gICAgICAgaWYgKCF0aGlzLmlzRGF0ZSh2YWx1ZSkpIHtcclxuLy8gICAgICAgICBkYXRlID0gZmFsc2U7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XHJcbi8vICAgICAgICAgbnVtID0gZmFsc2U7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpZiAoZGF0ZSkgeyByZXR1cm4gJ3RpbWUnOyB9XHJcbi8vICAgICBpZiAobnVtKSB7IHJldHVybiAnbGluZWFyJzsgfVxyXG4vLyAgICAgcmV0dXJuICdvcmRpbmFsJztcclxuLy8gICB9XHJcblxyXG4vLyAgIGdldFhEb21haW5MaW5lKCk6IGFueVtdIHtcclxuLy8gICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuXHJcbi8vICAgICBmb3IgKGNvbnN0IHJlc3VsdHMgb2YgdGhpcy5saW5lQ2hhcnQpIHtcclxuLy8gICAgICAgZm9yIChjb25zdCBkIG9mIHJlc3VsdHMuc2VyaWVzKSB7XHJcbi8vICAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXMoZC5uYW1lKSkge1xyXG4vLyAgICAgICAgICAgdmFsdWVzLnB1c2goZC5uYW1lKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0aGlzLnNjYWxlVHlwZSA9IHRoaXMuZ2V0U2NhbGVUeXBlKHZhbHVlcyk7XHJcbi8vICAgICBsZXQgZG9tYWluID0gW107XHJcblxyXG4vLyAgICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSAndGltZScpIHtcclxuLy8gICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udmFsdWVzKTtcclxuLy8gICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuLy8gICAgICAgZG9tYWluID0gW21pbiwgbWF4XTtcclxuLy8gICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICdsaW5lYXInKSB7XHJcbi8vICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiBOdW1iZXIodikpO1xyXG4vLyAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xyXG4vLyAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4vLyAgICAgICBkb21haW4gPSBbbWluLCBtYXhdO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgZG9tYWluID0gdmFsdWVzO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRoaXMueFNldCA9IHZhbHVlcztcclxuLy8gICAgIHJldHVybiBkb21haW47XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRZRG9tYWluTGluZSgpOiBhbnlbXSB7XHJcbi8vICAgICBjb25zdCBkb21haW4gPSBbXTtcclxuXHJcbi8vICAgICBmb3IgKGNvbnN0IHJlc3VsdHMgb2YgdGhpcy5saW5lQ2hhcnQpIHtcclxuLy8gICAgICAgZm9yIChjb25zdCBkIG9mIHJlc3VsdHMuc2VyaWVzKSB7XHJcbi8vICAgICAgICAgaWYgKGRvbWFpbi5pbmRleE9mKGQudmFsdWUpIDwgMCkge1xyXG4vLyAgICAgICAgICAgZG9tYWluLnB1c2goZC52YWx1ZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChkLm1pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC5taW4pIDwgMCkge1xyXG4vLyAgICAgICAgICAgICBkb21haW4ucHVzaChkLm1pbik7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChkLm1heCAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC5tYXgpIDwgMCkge1xyXG4vLyAgICAgICAgICAgICBkb21haW4ucHVzaChkLm1heCk7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRvbWFpbik7XHJcbi8vICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5kb21haW4pO1xyXG4vLyAgICAgaWYgKHRoaXMueVJpZ2h0QXhpc1NjYWxlRmFjdG9yKSB7XHJcbi8vICAgICAgIGNvbnN0IG1pbk1heCA9IHRoaXMueVJpZ2h0QXhpc1NjYWxlRmFjdG9yKG1pbiwgbWF4KTtcclxuLy8gICAgICAgcmV0dXJuIFtNYXRoLm1pbigwLCBtaW5NYXgubWluKSwgbWluTWF4Lm1heF07XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBtaW4gPSBNYXRoLm1pbigwLCBtaW4pO1xyXG4vLyAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIGdldFhTY2FsZUxpbmUoZG9tYWluLCB3aWR0aCk6IGFueSB7XHJcbi8vICAgICBsZXQgc2NhbGU7XHJcbi8vICAgICBpZiAodGhpcy5iYW5kd2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgICB0aGlzLmJhbmR3aWR0aCA9IHdpZHRoIC0gdGhpcy5iYXJQYWRkaW5nO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5mbG9vcigod2lkdGggKyB0aGlzLmJhclBhZGRpbmcgLSAodGhpcy5iYW5kd2lkdGggKyB0aGlzLmJhclBhZGRpbmcpICogZG9tYWluLmxlbmd0aCkgLyAyKTtcclxuXHJcbi8vICAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xyXG4vLyAgICAgICBzY2FsZSA9IHNjYWxlVGltZSgpXHJcbi8vICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbi8vICAgICAgICAgLmRvbWFpbihkb21haW4pO1xyXG4vLyAgICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicpIHtcclxuLy8gICAgICAgc2NhbGUgPSBzY2FsZUxpbmVhcigpXHJcbi8vICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbi8vICAgICAgICAgLmRvbWFpbihkb21haW4pO1xyXG5cclxuLy8gICAgICAgaWYgKHRoaXMucm91bmREb21haW5zKSB7XHJcbi8vICAgICAgICAgc2NhbGUgPSBzY2FsZS5uaWNlKCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICdvcmRpbmFsJykge1xyXG4vLyAgICAgICBzY2FsZSA9IHNjYWxlUG9pbnQoKVxyXG4vLyAgICAgICAgIC5yYW5nZShbb2Zmc2V0ICsgdGhpcy5iYW5kd2lkdGggLyAyLCB3aWR0aCAtIG9mZnNldCAtIHRoaXMuYmFuZHdpZHRoIC8gMl0pXHJcbi8vICAgICAgICAgLmRvbWFpbihkb21haW4pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBzY2FsZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGdldFlTY2FsZUxpbmUoZG9tYWluLCBoZWlnaHQpOiBhbnkge1xyXG4vLyAgICAgY29uc3Qgc2NhbGUgPSBzY2FsZUxpbmVhcigpXHJcbi8vICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcclxuLy8gICAgICAgLmRvbWFpbihkb21haW4pO1xyXG5cclxuLy8gICAgIHJldHVybiB0aGlzLnJvdW5kRG9tYWlucyA/IHNjYWxlLm5pY2UoKSA6IHNjYWxlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0WFNjYWxlKCk6IGFueSB7XHJcbi8vICAgICB0aGlzLnhEb21haW4gPSB0aGlzLmdldFhEb21haW4oKTtcclxuLy8gICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLnhEb21haW4ubGVuZ3RoIC8gKHRoaXMuZGltcy53aWR0aCAvIHRoaXMuYmFyUGFkZGluZyArIDEpO1xyXG4vLyAgICAgcmV0dXJuIHNjYWxlQmFuZCgpXHJcbi8vICAgICAgIC5yYW5nZShbMCwgdGhpcy5kaW1zLndpZHRoXSlcclxuLy8gICAgICAgLnBhZGRpbmdJbm5lcihzcGFjaW5nKVxyXG4vLyAgICAgICAuZG9tYWluKHRoaXMueERvbWFpbik7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRZU2NhbGUoKTogYW55IHtcclxuLy8gICAgIHRoaXMueURvbWFpbiA9IHRoaXMuZ2V0WURvbWFpbigpO1xyXG4vLyAgICAgY29uc3Qgc2NhbGUgPSBzY2FsZUxpbmVhcigpXHJcbi8vICAgICAgIC5yYW5nZShbdGhpcy5kaW1zLmhlaWdodCwgMF0pXHJcbi8vICAgICAgIC5kb21haW4odGhpcy55RG9tYWluKTtcclxuLy8gICAgIHJldHVybiB0aGlzLnJvdW5kRG9tYWlucyA/IHNjYWxlLm5pY2UoKSA6IHNjYWxlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0WERvbWFpbigpOiBhbnlbXSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQubmFtZSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRZRG9tYWluKCkge1xyXG4vLyAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQudmFsdWUpO1xyXG4vLyAgICAgY29uc3QgbWluID0gTWF0aC5taW4oMCwgLi4udmFsdWVzKTtcclxuLy8gICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XHJcbi8vICAgICBpZiAodGhpcy55TGVmdEF4aXNTY2FsZUZhY3Rvcikge1xyXG4vLyAgICAgICBjb25zdCBtaW5NYXggPSB0aGlzLnlMZWZ0QXhpc1NjYWxlRmFjdG9yKG1pbiwgbWF4KTtcclxuLy8gICAgICAgcmV0dXJuIFtNYXRoLm1pbigwLCBtaW5NYXgubWluKSwgbWluTWF4Lm1heF07XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIG9uQ2xpY2soZGF0YSkge1xyXG4vLyAgICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHNldENvbG9ycygpOiB2b2lkIHtcclxuLy8gICAgIGxldCBkb21haW47XHJcbi8vICAgICBpZiAodGhpcy5zY2hlbWVUeXBlID09PSAnb3JkaW5hbCcpIHtcclxuLy8gICAgICAgZG9tYWluID0gdGhpcy54RG9tYWluO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgZG9tYWluID0gdGhpcy55RG9tYWluO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgdGhpcy5jb2xvcnMgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIHRoaXMuc2NoZW1lVHlwZSwgZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XHJcbi8vICAgICB0aGlzLmNvbG9yc0xpbmUgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5jb2xvclNjaGVtZUxpbmUsIHRoaXMuc2NoZW1lVHlwZSwgZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZXRMZWdlbmRPcHRpb25zKCkge1xyXG4vLyAgICAgY29uc3Qgb3B0cyA9IHtcclxuLy8gICAgICAgc2NhbGVUeXBlOiB0aGlzLnNjaGVtZVR5cGUsXHJcbi8vICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxyXG4vLyAgICAgICBkb21haW46IFtdLFxyXG4vLyAgICAgICB0aXRsZTogdW5kZWZpbmVkLFxyXG4vLyAgICAgICBwb3NpdGlvbjogdGhpcy5sZWdlbmRQb3NpdGlvblxyXG4vLyAgICAgfTtcclxuLy8gICAgIGlmIChvcHRzLnNjYWxlVHlwZSA9PT0gJ29yZGluYWwnKSB7XHJcbi8vICAgICAgIG9wdHMuZG9tYWluID0gdGhpcy5zZXJpZXNEb21haW47XHJcbi8vICAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnNMaW5lO1xyXG4vLyAgICAgICBvcHRzLnRpdGxlID0gdGhpcy5sZWdlbmRUaXRsZTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG9wdHMuZG9tYWluID0gdGhpcy5zZXJpZXNEb21haW47XHJcbi8vICAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnMuc2NhbGU7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gb3B0cztcclxuLy8gICB9XHJcblxyXG4vLyAgIHVwZGF0ZUxpbmVXaWR0aCh3aWR0aCk6IHZvaWQge1xyXG4vLyAgICAgdGhpcy5iYW5kd2lkdGggPSB3aWR0aDtcclxuLy8gICAgIHRoaXMuc2NhbGVMaW5lcygpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdXBkYXRlWUF4aXNXaWR0aCh7IHdpZHRoIH0pOiB2b2lkIHtcclxuLy8gICAgIHRoaXMueUF4aXNXaWR0aCA9IHdpZHRoICsgMjA7XHJcbi8vICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdXBkYXRlWEF4aXNIZWlnaHQoeyBoZWlnaHQgfSk6IHZvaWQge1xyXG4vLyAgICAgdGhpcy54QXhpc0hlaWdodCA9IGhlaWdodDtcclxuLy8gICAgIHRoaXMudXBkYXRlKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBvbkFjdGl2YXRlKGl0ZW0pIHtcclxuLy8gICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kSW5kZXgoZCA9PiB7XHJcbi8vICAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlICYmIGQuc2VyaWVzID09PSBpdGVtLnNlcmllcztcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbi8vICAgICAgIHJldHVybjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbaXRlbSwgLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcclxuLy8gICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7IHZhbHVlOiBpdGVtLCBlbnRyaWVzOiB0aGlzLmFjdGl2ZUVudHJpZXMgfSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBvbkRlYWN0aXZhdGUoaXRlbSkge1xyXG4vLyAgICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcclxuLy8gICAgICAgcmV0dXJuIGQubmFtZSA9PT0gaXRlbS5uYW1lICYmIGQudmFsdWUgPT09IGl0ZW0udmFsdWUgJiYgZC5zZXJpZXMgPT09IGl0ZW0uc2VyaWVzO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgdGhpcy5hY3RpdmVFbnRyaWVzLnNwbGljZShpZHgsIDEpO1xyXG4vLyAgICAgdGhpcy5hY3RpdmVFbnRyaWVzID0gWy4uLnRoaXMuYWN0aXZlRW50cmllc107XHJcblxyXG4vLyAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xyXG4vLyAgIH1cclxuXHJcbn1cclxuIl19