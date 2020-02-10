/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel } from '@swimlane/ngx-charts/release/common/label.helper';
export class CmacsComboSeriesVerticalComponent {
    constructor() {
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
    ngOnChanges(changes) {
        this.update();
    }
    /**
     * @return {?}
     */
    update() {
        /** @type {?} */
        let width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
        }
        /** @type {?} */
        let d0 = 0;
        /** @type {?} */
        let total;
        if (this.type === 'normalized') {
            total = this.series.map((/**
             * @param {?} d
             * @return {?}
             */
            d => d.value)).reduce((/**
             * @param {?} sum
             * @param {?} d
             * @return {?}
             */
            (sum, d) => sum + d), 0);
        }
        this.bars = this.series.map((/**
         * @param {?} d
         * @param {?} index
         * @return {?}
         */
        (d, index) => {
            /** @type {?} */
            let value = d.value;
            /** @type {?} */
            const label = d.name;
            /** @type {?} */
            const formattedLabel = formatLabel(label);
            /** @type {?} */
            const roundEdges = this.type === 'standard';
            /** @type {?} */
            const bar = {
                value,
                label,
                roundEdges,
                data: d,
                width,
                formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (this.type === 'standard') {
                bar.height = Math.abs(this.yScale(value) - this.yScale(0));
                bar.x = this.xScale(label);
                if (value < 0) {
                    bar.y = this.yScale(0);
                }
                else {
                    bar.y = this.yScale(value);
                }
            }
            else if (this.type === 'stacked') {
                /** @type {?} */
                const offset0 = d0;
                /** @type {?} */
                const offset1 = offset0 + value;
                d0 += value;
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (this.type === 'normalized') {
                /** @type {?} */
                let offset0 = d0;
                /** @type {?} */
                let offset1 = offset0 + value;
                d0 += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (this.colors.scaleType === 'ordinal') {
                bar.color = this.colors.getColor(label);
            }
            else {
                if (this.type === 'standard') {
                    bar.color = this.colors.getColor(value);
                    bar.gradientStops = this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = this.colors.getColor(bar.offset1);
                    bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            /** @type {?} */
            let tooltipLabel = formattedLabel;
            if (this.seriesName) {
                tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
            }
            this.getSeriesTooltips(this.seriesLine, index);
            /** @type {?} */
            const lineValue = this.seriesLine[0].series[index].value;
            bar.tooltipText = `
        <span class="tooltip-label">${tooltipLabel}</span>
        <span class="tooltip-val"> Y1 - ${value.toLocaleString()} • Y2 - ${lineValue.toLocaleString()}%</span>
      `;
            return bar;
        }));
    }
    /**
     * @param {?} seriesLine
     * @param {?} index
     * @return {?}
     */
    getSeriesTooltips(seriesLine, index) {
        return seriesLine.map((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            return d.series[index];
        }));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    isActive(entry) {
        if (!this.activeEntries) {
            return false;
        }
        /** @type {?} */
        const item = this.activeEntries.find((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            return entry.name === d.name && entry.series === d.series;
        }));
        return item !== undefined;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onClick(data) {
        this.select.emit(data);
    }
    /**
     * @param {?} index
     * @param {?} bar
     * @return {?}
     */
    trackBy(index, bar) {
        return bar.label;
    }
}
CmacsComboSeriesVerticalComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'g[ngx-combo-charts-series-vertical]',
                template: `
    <svg:g
      ngx-charts-bar
      *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="'vertical'"
      [roundEdges]="bar.roundEdges"
      [gradient]="gradient"
      [isActive]="isActive(bar.data)"
      [animations]="animations"
      [noBarWhenZero]="noBarWhenZero"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="bar.tooltipText"
    ></svg:g>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tYm8tc2VyaWVzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29tYm8tc2VyaWVzLXZlcnRpY2FsL2NtYWNzLWNvbWJvLXNlcmllcy12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQThDL0UsTUFBTSxPQUFPLGlDQUFpQztJQTVDOUM7UUE4Q1csU0FBSSxHQUFHLFVBQVUsQ0FBQztRQU1sQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUl4QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBZ0kzQyxDQUFDOzs7OztJQTFIQyxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELE1BQU07O1lBQ0EsS0FBSztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENB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NEI7O0lBQzVCLHVEQUEyQjs7SUFDM0IsMERBQThCOztJQUU5QixtREFBc0M7O0lBQ3RDLHFEQUF3Qzs7SUFDeEMsdURBQTBDOztJQUMxQyxzREFBeUM7O0lBRXpDLGlEQUFVOztJQUNWLDhDQUFPOztJQUNQLDhDQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgZm9ybWF0TGFiZWwgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWNoYXJ0cy9yZWxlYXNlL2NvbW1vbi9sYWJlbC5oZWxwZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2dbbmd4LWNvbWJvLWNoYXJ0cy1zZXJpZXMtdmVydGljYWxdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHN2ZzpnXHJcbiAgICAgIG5neC1jaGFydHMtYmFyXHJcbiAgICAgICpuZ0Zvcj1cImxldCBiYXIgb2YgYmFyczsgdHJhY2tCeTogdHJhY2tCeVwiXHJcbiAgICAgIFtAYW5pbWF0aW9uU3RhdGVdPVwiJ2FjdGl2ZSdcIlxyXG4gICAgICBbd2lkdGhdPVwiYmFyLndpZHRoXCJcclxuICAgICAgW2hlaWdodF09XCJiYXIuaGVpZ2h0XCJcclxuICAgICAgW3hdPVwiYmFyLnhcIlxyXG4gICAgICBbeV09XCJiYXIueVwiXHJcbiAgICAgIFtmaWxsXT1cImJhci5jb2xvclwiXHJcbiAgICAgIFtzdG9wc109XCJiYXIuZ3JhZGllbnRTdG9wc1wiXHJcbiAgICAgIFtkYXRhXT1cImJhci5kYXRhXCJcclxuICAgICAgW29yaWVudGF0aW9uXT1cIid2ZXJ0aWNhbCdcIlxyXG4gICAgICBbcm91bmRFZGdlc109XCJiYXIucm91bmRFZGdlc1wiXHJcbiAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXHJcbiAgICAgIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZShiYXIuZGF0YSlcIlxyXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcclxuICAgICAgW25vQmFyV2hlblplcm9dPVwibm9CYXJXaGVuWmVyb1wiXHJcbiAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcclxuICAgICAgKGFjdGl2YXRlKT1cImFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgbmd4LXRvb2x0aXBcclxuICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxyXG4gICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCIndG9wJ1wiXHJcbiAgICAgIFt0b29sdGlwVHlwZV09XCIndG9vbHRpcCdcIlxyXG4gICAgICBbdG9vbHRpcFRpdGxlXT1cImJhci50b29sdGlwVGV4dFwiXHJcbiAgICA+PC9zdmc6Zz5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJyonXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSg1MDAsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbWJvU2VyaWVzVmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGRpbXM7XHJcbiAgQElucHV0KCkgdHlwZSA9ICdzdGFuZGFyZCc7XHJcbiAgQElucHV0KCkgc2VyaWVzO1xyXG4gIEBJbnB1dCgpIHNlcmllc0xpbmU7XHJcbiAgQElucHV0KCkgeFNjYWxlO1xyXG4gIEBJbnB1dCgpIHlTY2FsZTtcclxuICBASW5wdXQoKSBjb2xvcnM7XHJcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ3JhZGllbnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogYW55W107XHJcbiAgQElucHV0KCkgc2VyaWVzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFuaW1hdGlvbnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG5vQmFyV2hlblplcm8gPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmFuZHdpZHRoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBiYXJzOiBhbnk7XHJcbiAgeDogYW55O1xyXG4gIHk6IGFueTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGxldCB3aWR0aDtcclxuICAgIGlmICh0aGlzLnNlcmllcy5sZW5ndGgpIHtcclxuICAgICAgd2lkdGggPSB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKTtcclxuICAgICAgdGhpcy5iYW5kd2lkdGguZW1pdCh3aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGQwID0gMDtcclxuICAgIGxldCB0b3RhbDtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdub3JtYWxpemVkJykge1xyXG4gICAgICB0b3RhbCA9IHRoaXMuc2VyaWVzLm1hcChkID0+IGQudmFsdWUpLnJlZHVjZSgoc3VtLCBkKSA9PiBzdW0gKyBkLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhcnMgPSB0aGlzLnNlcmllcy5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZC5uYW1lO1xyXG4gICAgICBjb25zdCBmb3JtYXR0ZWRMYWJlbCA9IGZvcm1hdExhYmVsKGxhYmVsKTtcclxuICAgICAgY29uc3Qgcm91bmRFZGdlcyA9IHRoaXMudHlwZSA9PT0gJ3N0YW5kYXJkJztcclxuXHJcbiAgICAgIGNvbnN0IGJhcjogYW55ID0ge1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHJvdW5kRWRnZXMsXHJcbiAgICAgICAgZGF0YTogZCxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBmb3JtYXR0ZWRMYWJlbCxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy50eXBlID09PSAnc3RhbmRhcmQnKSB7XHJcbiAgICAgICAgYmFyLmhlaWdodCA9IE1hdGguYWJzKHRoaXMueVNjYWxlKHZhbHVlKSAtIHRoaXMueVNjYWxlKDApKTtcclxuICAgICAgICBiYXIueCA9IHRoaXMueFNjYWxlKGxhYmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgYmFyLnkgPSB0aGlzLnlTY2FsZSgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmFyLnkgPSB0aGlzLnlTY2FsZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3N0YWNrZWQnKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0MCA9IGQwO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldDEgPSBvZmZzZXQwICsgdmFsdWU7XHJcbiAgICAgICAgZDAgKz0gdmFsdWU7XHJcblxyXG4gICAgICAgIGJhci5oZWlnaHQgPSB0aGlzLnlTY2FsZShvZmZzZXQwKSAtIHRoaXMueVNjYWxlKG9mZnNldDEpO1xyXG4gICAgICAgIGJhci54ID0gMDtcclxuICAgICAgICBiYXIueSA9IHRoaXMueVNjYWxlKG9mZnNldDEpO1xyXG4gICAgICAgIGJhci5vZmZzZXQwID0gb2Zmc2V0MDtcclxuICAgICAgICBiYXIub2Zmc2V0MSA9IG9mZnNldDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbm9ybWFsaXplZCcpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0MCA9IGQwO1xyXG4gICAgICAgIGxldCBvZmZzZXQxID0gb2Zmc2V0MCArIHZhbHVlO1xyXG4gICAgICAgIGQwICs9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICBvZmZzZXQwID0gKG9mZnNldDAgKiAxMDApIC8gdG90YWw7XHJcbiAgICAgICAgICBvZmZzZXQxID0gKG9mZnNldDEgKiAxMDApIC8gdG90YWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9mZnNldDAgPSAwO1xyXG4gICAgICAgICAgb2Zmc2V0MSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYXIuaGVpZ2h0ID0gdGhpcy55U2NhbGUob2Zmc2V0MCkgLSB0aGlzLnlTY2FsZShvZmZzZXQxKTtcclxuICAgICAgICBiYXIueCA9IDA7XHJcbiAgICAgICAgYmFyLnkgPSB0aGlzLnlTY2FsZShvZmZzZXQxKTtcclxuICAgICAgICBiYXIub2Zmc2V0MCA9IG9mZnNldDA7XHJcbiAgICAgICAgYmFyLm9mZnNldDEgPSBvZmZzZXQxO1xyXG4gICAgICAgIHZhbHVlID0gKG9mZnNldDEgLSBvZmZzZXQwKS50b0ZpeGVkKDIpICsgJyUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jb2xvcnMuc2NhbGVUeXBlID09PSAnb3JkaW5hbCcpIHtcclxuICAgICAgICBiYXIuY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcihsYWJlbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N0YW5kYXJkJykge1xyXG4gICAgICAgICAgYmFyLmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgYmFyLmdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmFyLmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IoYmFyLm9mZnNldDEpO1xyXG4gICAgICAgICAgYmFyLmdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKGJhci5vZmZzZXQxLCBiYXIub2Zmc2V0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdG9vbHRpcExhYmVsID0gZm9ybWF0dGVkTGFiZWw7XHJcbiAgICAgIGlmICh0aGlzLnNlcmllc05hbWUpIHtcclxuICAgICAgICB0b29sdGlwTGFiZWwgPSBgJHt0aGlzLnNlcmllc05hbWV9IOKAoiAke2Zvcm1hdHRlZExhYmVsfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0U2VyaWVzVG9vbHRpcHModGhpcy5zZXJpZXNMaW5lLCBpbmRleCk7XHJcbiAgICAgIGNvbnN0IGxpbmVWYWx1ZSA9IHRoaXMuc2VyaWVzTGluZVswXS5zZXJpZXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICBiYXIudG9vbHRpcFRleHQgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWxhYmVsXCI+JHt0b29sdGlwTGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj4gWTEgLSAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCl9IOKAoiBZMiAtICR7bGluZVZhbHVlLnRvTG9jYWxlU3RyaW5nKCl9JTwvc3Bhbj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIHJldHVybiBiYXI7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0U2VyaWVzVG9vbHRpcHMoc2VyaWVzTGluZSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBzZXJpZXNMaW5lLm1hcChkID0+IHtcclxuICAgICAgcmV0dXJuIGQuc2VyaWVzW2luZGV4XTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc0FjdGl2ZShlbnRyeSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XHJcbiAgICAgIHJldHVybiBlbnRyeS5uYW1lID09PSBkLm5hbWUgJiYgZW50cnkuc2VyaWVzID09PSBkLnNlcmllcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnkoaW5kZXgsIGJhcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYmFyLmxhYmVsO1xyXG4gIH1cclxufVxyXG4iXX0=