/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel } from '@swimlane/ngx-charts/release/common/label.helper';
var CmacsComboSeriesVerticalComponent = /** @class */ (function () {
    function CmacsComboSeriesVerticalComponent() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.noBarWhenZero = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.bandwidth = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.update();
    };
    /**
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
        }
        /** @type {?} */
        var d0 = 0;
        /** @type {?} */
        var total;
        if (this.type === 'normalized') {
            total = this.series.map((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.value; })).reduce((/**
             * @param {?} sum
             * @param {?} d
             * @return {?}
             */
            function (sum, d) { return sum + d; }), 0);
        }
        this.bars = this.series.map((/**
         * @param {?} d
         * @param {?} index
         * @return {?}
         */
        function (d, index) {
            /** @type {?} */
            var value = d.value;
            /** @type {?} */
            var label = d.name;
            /** @type {?} */
            var formattedLabel = formatLabel(label);
            /** @type {?} */
            var roundEdges = _this.type === 'standard';
            /** @type {?} */
            var bar = {
                value: value,
                label: label,
                roundEdges: roundEdges,
                data: d,
                width: width,
                formattedLabel: formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (_this.type === 'standard') {
                bar.height = Math.abs(_this.yScale(value) - _this.yScale(0));
                bar.x = _this.xScale(label);
                if (value < 0) {
                    bar.y = _this.yScale(0);
                }
                else {
                    bar.y = _this.yScale(value);
                }
            }
            else if (_this.type === 'stacked') {
                /** @type {?} */
                var offset0 = d0;
                /** @type {?} */
                var offset1 = offset0 + value;
                d0 += value;
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (_this.type === 'normalized') {
                /** @type {?} */
                var offset0 = d0;
                /** @type {?} */
                var offset1 = offset0 + value;
                d0 += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (_this.colors.scaleType === 'ordinal') {
                bar.color = _this.colors.getColor(label);
            }
            else {
                if (_this.type === 'standard') {
                    bar.color = _this.colors.getColor(value);
                    bar.gradientStops = _this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = _this.colors.getColor(bar.offset1);
                    bar.gradientStops = _this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            /** @type {?} */
            var tooltipLabel = formattedLabel;
            if (_this.seriesName) {
                tooltipLabel = _this.seriesName + " \u2022 " + formattedLabel;
            }
            _this.getSeriesTooltips(_this.seriesLine, index);
            /** @type {?} */
            var lineValue = _this.seriesLine[0].series[index].value;
            bar.tooltipText = "\n        <span class=\"tooltip-label\">" + tooltipLabel + "</span>\n        <span class=\"tooltip-val\"> Y1 - " + value.toLocaleString() + " \u2022 Y2 - " + lineValue.toLocaleString() + "%</span>\n      ";
            return bar;
        }));
    };
    /**
     * @param {?} seriesLine
     * @param {?} index
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.getSeriesTooltips = /**
     * @param {?} seriesLine
     * @param {?} index
     * @return {?}
     */
    function (seriesLine, index) {
        return seriesLine.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return d.series[index];
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.isActive = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        if (!this.activeEntries) {
            return false;
        }
        /** @type {?} */
        var item = this.activeEntries.find((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return entry.name === d.name && entry.series === d.series;
        }));
        return item !== undefined;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.onClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.select.emit(data);
    };
    /**
     * @param {?} index
     * @param {?} bar
     * @return {?}
     */
    CmacsComboSeriesVerticalComponent.prototype.trackBy = /**
     * @param {?} index
     * @param {?} bar
     * @return {?}
     */
    function (index, bar) {
        return bar.label;
    };
    CmacsComboSeriesVerticalComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'g[ngx-combo-charts-series-vertical]',
                    template: "\n    <svg:g\n      ngx-charts-bar\n      *ngFor=\"let bar of bars; trackBy: trackBy\"\n      [@animationState]=\"'active'\"\n      [width]=\"bar.width\"\n      [height]=\"bar.height\"\n      [x]=\"bar.x\"\n      [y]=\"bar.y\"\n      [fill]=\"bar.color\"\n      [stops]=\"bar.gradientStops\"\n      [data]=\"bar.data\"\n      [orientation]=\"'vertical'\"\n      [roundEdges]=\"bar.roundEdges\"\n      [gradient]=\"gradient\"\n      [isActive]=\"isActive(bar.data)\"\n      [animations]=\"animations\"\n      [noBarWhenZero]=\"noBarWhenZero\"\n      (select)=\"onClick($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      ngx-tooltip\n      [tooltipDisabled]=\"tooltipDisabled\"\n      [tooltipPlacement]=\"'top'\"\n      [tooltipType]=\"'tooltip'\"\n      [tooltipTitle]=\"bar.tooltipText\"\n    ></svg:g>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('animationState', [
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: '*'
                                }),
                                animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                            ])
                        ])
                    ]
                }] }
    ];
    CmacsComboSeriesVerticalComponent.propDecorators = {
        dims: [{ type: Input }],
        type: [{ type: Input }],
        series: [{ type: Input }],
        seriesLine: [{ type: Input }],
        xScale: [{ type: Input }],
        yScale: [{ type: Input }],
        colors: [{ type: Input }],
        tooltipDisabled: [{ type: Input }],
        gradient: [{ type: Input }],
        activeEntries: [{ type: Input }],
        seriesName: [{ type: Input }],
        animations: [{ type: Input }],
        noBarWhenZero: [{ type: Input }],
        select: [{ type: Output }],
        activate: [{ type: Output }],
        deactivate: [{ type: Output }],
        bandwidth: [{ type: Output }]
    };
    return CmacsComboSeriesVerticalComponent;
}());
export { CmacsComboSeriesVerticalComponent };
if (false) {
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.dims;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.type;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.series;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.seriesLine;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.xScale;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.yScale;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.colors;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.tooltipDisabled;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.gradient;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.activeEntries;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.seriesName;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.animations;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.noBarWhenZero;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.select;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.activate;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.deactivate;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.bandwidth;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.bars;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.x;
    /** @type {?} */
    CmacsComboSeriesVerticalComponent.prototype.y;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tYm8tc2VyaWVzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tYm8tc2VyaWVzLXZlcnRpY2FsL2NtYWNzLWNvbWJvLXNlcmllcy12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRTtJQUFBO1FBOENXLFNBQUksR0FBRyxVQUFVLENBQUM7UUFNbEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFJeEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVwQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWdJM0MsQ0FBQzs7Ozs7SUExSEMsdURBQVc7Ozs7SUFBWCxVQUFZLE9BQU87UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxrREFBTTs7O0lBQU47UUFBQSxpQkFpR0M7O1lBaEdLLEtBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNB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Qjs7SUFDaEIsbURBQWdCOztJQUNoQixtREFBZ0I7O0lBQ2hCLDREQUFpQzs7SUFDakMscURBQTJCOztJQUMzQiwwREFBOEI7O0lBQzlCLHVEQUE0Qjs7SUFDNUIsdURBQTJCOztJQUMzQiwwREFBOEI7O0lBRTlCLG1EQUFzQzs7SUFDdEMscURBQXdDOztJQUN4Qyx1REFBMEM7O0lBQzFDLHNEQUF5Qzs7SUFFekMsaURBQVU7O0lBQ1YsOENBQU87O0lBQ1AsOENBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRMYWJlbCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtY2hhcnRzL3JlbGVhc2UvY29tbW9uL2xhYmVsLmhlbHBlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY29tYm8tY2hhcnRzLXNlcmllcy12ZXJ0aWNhbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3ZnOmdcclxuICAgICAgbmd4LWNoYXJ0cy1iYXJcclxuICAgICAgKm5nRm9yPVwibGV0IGJhciBvZiBiYXJzOyB0cmFja0J5OiB0cmFja0J5XCJcclxuICAgICAgW0BhbmltYXRpb25TdGF0ZV09XCInYWN0aXZlJ1wiXHJcbiAgICAgIFt3aWR0aF09XCJiYXIud2lkdGhcIlxyXG4gICAgICBbaGVpZ2h0XT1cImJhci5oZWlnaHRcIlxyXG4gICAgICBbeF09XCJiYXIueFwiXHJcbiAgICAgIFt5XT1cImJhci55XCJcclxuICAgICAgW2ZpbGxdPVwiYmFyLmNvbG9yXCJcclxuICAgICAgW3N0b3BzXT1cImJhci5ncmFkaWVudFN0b3BzXCJcclxuICAgICAgW2RhdGFdPVwiYmFyLmRhdGFcIlxyXG4gICAgICBbb3JpZW50YXRpb25dPVwiJ3ZlcnRpY2FsJ1wiXHJcbiAgICAgIFtyb3VuZEVkZ2VzXT1cImJhci5yb3VuZEVkZ2VzXCJcclxuICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcclxuICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlKGJhci5kYXRhKVwiXHJcbiAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxyXG4gICAgICBbbm9CYXJXaGVuWmVyb109XCJub0JhcldoZW5aZXJvXCJcclxuICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKGRlYWN0aXZhdGUpPVwiZGVhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxyXG4gICAgICBuZ3gtdG9vbHRpcFxyXG4gICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXHJcbiAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cIid0b3AnXCJcclxuICAgICAgW3Rvb2x0aXBUeXBlXT1cIid0b29sdGlwJ1wiXHJcbiAgICAgIFt0b29sdGlwVGl0bGVdPVwiYmFyLnRvb2x0aXBUZXh0XCJcclxuICAgID48L3N2ZzpnPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignYW5pbWF0aW9uU3RhdGUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnKidcclxuICAgICAgICB9KSxcclxuICAgICAgICBhbmltYXRlKDUwMCwgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tYm9TZXJpZXNWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgZGltcztcclxuICBASW5wdXQoKSB0eXBlID0gJ3N0YW5kYXJkJztcclxuICBASW5wdXQoKSBzZXJpZXM7XHJcbiAgQElucHV0KCkgc2VyaWVzTGluZTtcclxuICBASW5wdXQoKSB4U2NhbGU7XHJcbiAgQElucHV0KCkgeVNjYWxlO1xyXG4gIEBJbnB1dCgpIGNvbG9ycztcclxuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcclxuICBASW5wdXQoKSBzZXJpZXNOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW5pbWF0aW9ucyA9IHRydWU7XHJcbiAgQElucHV0KCkgbm9CYXJXaGVuWmVybyA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiYW5kd2lkdGggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGJhcnM6IGFueTtcclxuICB4OiBhbnk7XHJcbiAgeTogYW55O1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgbGV0IHdpZHRoO1xyXG4gICAgaWYgKHRoaXMuc2VyaWVzLmxlbmd0aCkge1xyXG4gICAgICB3aWR0aCA9IHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpO1xyXG4gICAgICB0aGlzLmJhbmR3aWR0aC5lbWl0KHdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZDAgPSAwO1xyXG4gICAgbGV0IHRvdGFsO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ25vcm1hbGl6ZWQnKSB7XHJcbiAgICAgIHRvdGFsID0gdGhpcy5zZXJpZXMubWFwKGQgPT4gZC52YWx1ZSkucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmFycyA9IHRoaXMuc2VyaWVzLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHZhbHVlID0gZC52YWx1ZTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBkLm5hbWU7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZExhYmVsID0gZm9ybWF0TGFiZWwobGFiZWwpO1xyXG4gICAgICBjb25zdCByb3VuZEVkZ2VzID0gdGhpcy50eXBlID09PSAnc3RhbmRhcmQnO1xyXG5cclxuICAgICAgY29uc3QgYmFyOiBhbnkgPSB7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgcm91bmRFZGdlcyxcclxuICAgICAgICBkYXRhOiBkLFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGZvcm1hdHRlZExhYmVsLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdzdGFuZGFyZCcpIHtcclxuICAgICAgICBiYXIuaGVpZ2h0ID0gTWF0aC5hYnModGhpcy55U2NhbGUodmFsdWUpIC0gdGhpcy55U2NhbGUoMCkpO1xyXG4gICAgICAgIGJhci54ID0gdGhpcy54U2NhbGUobGFiZWwpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICBiYXIueSA9IHRoaXMueVNjYWxlKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBiYXIueSA9IHRoaXMueVNjYWxlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnc3RhY2tlZCcpIHtcclxuICAgICAgICBjb25zdCBvZmZzZXQwID0gZDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0MSA9IG9mZnNldDAgKyB2YWx1ZTtcclxuICAgICAgICBkMCArPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgYmFyLmhlaWdodCA9IHRoaXMueVNjYWxlKG9mZnNldDApIC0gdGhpcy55U2NhbGUob2Zmc2V0MSk7XHJcbiAgICAgICAgYmFyLnggPSAwO1xyXG4gICAgICAgIGJhci55ID0gdGhpcy55U2NhbGUob2Zmc2V0MSk7XHJcbiAgICAgICAgYmFyLm9mZnNldDAgPSBvZmZzZXQwO1xyXG4gICAgICAgIGJhci5vZmZzZXQxID0gb2Zmc2V0MTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWxpemVkJykge1xyXG4gICAgICAgIGxldCBvZmZzZXQwID0gZDA7XHJcbiAgICAgICAgbGV0IG9mZnNldDEgPSBvZmZzZXQwICsgdmFsdWU7XHJcbiAgICAgICAgZDAgKz0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0b3RhbCA+IDApIHtcclxuICAgICAgICAgIG9mZnNldDAgPSAob2Zmc2V0MCAqIDEwMCkgLyB0b3RhbDtcclxuICAgICAgICAgIG9mZnNldDEgPSAob2Zmc2V0MSAqIDEwMCkgLyB0b3RhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2Zmc2V0MCA9IDA7XHJcbiAgICAgICAgICBvZmZzZXQxID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhci5oZWlnaHQgPSB0aGlzLnlTY2FsZShvZmZzZXQwKSAtIHRoaXMueVNjYWxlKG9mZnNldDEpO1xyXG4gICAgICAgIGJhci54ID0gMDtcclxuICAgICAgICBiYXIueSA9IHRoaXMueVNjYWxlKG9mZnNldDEpO1xyXG4gICAgICAgIGJhci5vZmZzZXQwID0gb2Zmc2V0MDtcclxuICAgICAgICBiYXIub2Zmc2V0MSA9IG9mZnNldDE7XHJcbiAgICAgICAgdmFsdWUgPSAob2Zmc2V0MSAtIG9mZnNldDApLnRvRml4ZWQoMikgKyAnJSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbG9ycy5zY2FsZVR5cGUgPT09ICdvcmRpbmFsJykge1xyXG4gICAgICAgIGJhci5jb2xvciA9IHRoaXMuY29sb3JzLmdldENvbG9yKGxhYmVsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnc3RhbmRhcmQnKSB7XHJcbiAgICAgICAgICBiYXIuY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICBiYXIuZ3JhZGllbnRTdG9wcyA9IHRoaXMuY29sb3JzLmdldExpbmVhckdyYWRpZW50U3RvcHModmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBiYXIuY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcihiYXIub2Zmc2V0MSk7XHJcbiAgICAgICAgICBiYXIuZ3JhZGllbnRTdG9wcyA9IHRoaXMuY29sb3JzLmdldExpbmVhckdyYWRpZW50U3RvcHMoYmFyLm9mZnNldDEsIGJhci5vZmZzZXQwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBmb3JtYXR0ZWRMYWJlbDtcclxuICAgICAgaWYgKHRoaXMuc2VyaWVzTmFtZSkge1xyXG4gICAgICAgIHRvb2x0aXBMYWJlbCA9IGAke3RoaXMuc2VyaWVzTmFtZX0g4oCiICR7Zm9ybWF0dGVkTGFiZWx9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRTZXJpZXNUb29sdGlwcyh0aGlzLnNlcmllc0xpbmUsIGluZGV4KTtcclxuICAgICAgY29uc3QgbGluZVZhbHVlID0gdGhpcy5zZXJpZXNMaW5lWzBdLnNlcmllc1tpbmRleF0udmFsdWU7XHJcbiAgICAgIGJhci50b29sdGlwVGV4dCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke3Rvb2x0aXBMYWJlbH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLXZhbFwiPiBZMSAtICR7dmFsdWUudG9Mb2NhbGVTdHJpbmcoKX0g4oCiIFkyIC0gJHtsaW5lVmFsdWUudG9Mb2NhbGVTdHJpbmcoKX0lPC9zcGFuPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgcmV0dXJuIGJhcjtcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRTZXJpZXNUb29sdGlwcyhzZXJpZXNMaW5lLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIHNlcmllc0xpbmUubWFwKGQgPT4ge1xyXG4gICAgICByZXR1cm4gZC5zZXJpZXNbaW5kZXhdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuYWN0aXZlRW50cmllcykgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZChkID0+IHtcclxuICAgICAgcmV0dXJuIGVudHJ5Lm5hbWUgPT09IGQubmFtZSAmJiBlbnRyeS5zZXJpZXMgPT09IGQuc2VyaWVzO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaXRlbSAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeShpbmRleCwgYmFyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBiYXIubGFiZWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==