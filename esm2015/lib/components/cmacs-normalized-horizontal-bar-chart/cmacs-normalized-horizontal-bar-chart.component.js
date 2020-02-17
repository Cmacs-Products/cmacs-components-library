/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsNormalizedHorizontalBarChartComponent {
    /**
     * @param {?} util
     */
    constructor(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        // otpions
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
        };
        this.id = util.uuidv4();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let temp = [];
        this.data.map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.series.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name)))).forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => temp = [...temp, ...x]));
        this.legend = Array.from(new Set([...temp]));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        for (let index = 0; index < this.data.length; index++) {
            /** @type {?} */
            const canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id + '-' + index)));
            if (canvas.getContext) {
                //
                /** @type {?} */
                const context = canvas.getContext('2d');
                /** @type {?} */
                const total = this.data[index].series.map((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => s.value)).reduce((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a + b), 0);
                /** @type {?} */
                let move = 0;
                //
                /** @type {?} */
                const elems = this.data[index].series.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => this.legend.findIndex((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y === a.name)) - this.legend.findIndex((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y === b.name))));
                for (let j = 0; j < elems.length; j++) {
                    // Reset the current path
                    context.beginPath();
                    context.moveTo(move, 1);
                    context.lineWidth = 15;
                    /** @type {?} */
                    const val = elems[j].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[j];
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        this.clickMenu.emit(type);
    }
}
CmacsNormalizedHorizontalBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-normalized-horizontal-bar-chart',
                template: "<!-- Legend -->\r\n<div nz-row class=\"legend-row\">\r\n  <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n    <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n    <span class=\"legend-text\">{{l}}</span>\r\n  </div>\r\n</div>\r\n<!-- Chart -->\r\n<div nz-row class=\"chart-content\">\r\n  <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n    <div nz-col nzSpan=\"8\">{{item.name}}</div>\r\n    <div nz-col nzSpan=\"16\" style=\"height: 8px; margin-top: 7px;\">\r\n      <canvas id=\"canvas-{{id}}-{{i}}\" class=\"chart-content-canvas\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-content{margin-top:15px;padding-left:20px;padding-right:20px;overflow:auto;height:160px;margin-right:20px}.chart-content-row{margin-bottom:15px;font-family:Roboto;font-size:12px;letter-spacing:.12px;color:#656c79}.chart-content::-webkit-scrollbar{width:7px}.chart-content::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px}.chart-content::-webkit-scrollbar-thumb{background-color:#c9c9c9;border-radius:10px}.chart-content::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1;border-radius:10px}.chart-content-canvas{width:100%}"]
            }] }
];
/** @nocollapse */
CmacsNormalizedHorizontalBarChartComponent.ctorParameters = () => [
    { type: UtilService }
];
CmacsNormalizedHorizontalBarChartComponent.propDecorators = {
    clickMenu: [{ type: Output }],
    data: [{ type: Input }],
    colorScheme: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.data;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.colorScheme;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.id;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.legend;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sMENBQTBDOzs7O0lBZ0JyRCxZQUNVLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFmakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBTXJDLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQVNBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLElBQUksR0FBVSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQy9DLE1BQU0sR0FBRyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBc0I7WUFDL0YsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFOzs7c0JBRWYsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztzQkFDakMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsTUFBTTs7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUMsQ0FBQzs7b0JBQzlFLElBQUksR0FBRyxDQUFDOzs7c0JBRU4sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFDcEY7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLHlCQUF5QjtvQkFDekIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7OzBCQUNqQixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQzFCLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELDRyQkFBcUU7O2FBRXRFOzs7O1lBTlEsV0FBVzs7O3dCQVNqQixNQUFNO21CQUdOLEtBQUs7MEJBR0wsS0FBSzs7OztJQU5OLCtEQUE4Qzs7SUFHOUMsMERBQWlDOztJQUdqQyxpRUFFRTs7SUFFRix3REFBRzs7SUFFSCw0REFBa0I7Ozs7O0lBR2hCLDBEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDaGFydERhdGFNdWx0aSB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9jaGFydC1kYXRhLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGEhOiBDaGFydERhdGFNdWx0aVtdO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzVBQTQ1NCcsICcjQzdCNDJDJywgJyNBQUFBQUEnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkICsgJy0nICsgaW5kZXgpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5tYXAocyA9PiBzLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBhLm5hbWUpIC0gdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYi5uYW1lKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgcGF0aFxyXG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDEpO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxNTtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2pdLnZhbHVlO1xyXG4gICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NoZW1lLmRvbWFpbltqXTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAxKTtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==