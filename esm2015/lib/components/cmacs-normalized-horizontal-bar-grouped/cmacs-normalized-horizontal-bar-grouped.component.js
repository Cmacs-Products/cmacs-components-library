/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsNormalizedHorizontalBarGroupedComponent {
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
        // set legend values
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
        // set select data
        this.selectList = this.data.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name));
        if (this.selectList.length > 0) {
            this.selectedValue = this.selectList[0];
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.drawCanvas();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    /**
     * @return {?}
     */
    drawCanvas() {
        /** @type {?} */
        const canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        if (canvas.getContext) {
            /** @type {?} */
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (this.selectedValue) {
                /** @type {?} */
                const elems = this.data.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.name === this.selectedValue)).series.sort((/**
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
                /** @type {?} */
                const total = elems.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.value)).reduce((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a + b), 0);
                /** @type {?} */
                let move = 0;
                for (let i = 0; i < elems.length; i++) {
                    context.beginPath();
                    context.moveTo(move, 1);
                    context.lineWidth = 10;
                    /** @type {?} */
                    const val = elems[i].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[i];
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
    }
}
CmacsNormalizedHorizontalBarGroupedComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-normalized-horizontal-bar-grouped',
                template: "<!-- Legend -->\r\n<div nz-row class=\"legend-row\">\r\n  <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n    <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n    <span class=\"legend-text\">{{l}}</span>\r\n  </div>\r\n</div>\r\n<!-- Chart -->\r\n<div nz-row class=\"chart-content\">\r\n  <div nz-row class=\"chart-content-canvas\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-select\">\r\n    <cmacs-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"drawCanvas()\">\r\n      <cmacs-option *ngFor=\"let item of selectList\" value=\"{{ item }}\" label=\"{{ item }}\"></cmacs-option>\r\n    </cmacs-select>\r\n  </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-canvas{width:88%;margin-top:18%}.chart-content-canvas{text-align:center;height:138px;overflow:hidden}.chart-content{height:85%}.chart-select{height:15%}::ng-deep .chart-select .ant-select-selection,::ng-deep .chart-select .ant-select-selection:focus,::ng-deep .chart-select .ant-select-selection:hover{border:0}"]
            }] }
];
/** @nocollapse */
CmacsNormalizedHorizontalBarGroupedComponent.ctorParameters = () => [
    { type: UtilService }
];
CmacsNormalizedHorizontalBarGroupedComponent.propDecorators = {
    clickMenu: [{ type: Output }],
    data: [{ type: Input }],
    colorScheme: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.data;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.colorScheme;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.id;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.legend;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.selectList;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.selectedValue;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQix1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVM1RCxNQUFNLE9BQU8sNENBQTRDOzs7O0lBa0J2RCxZQUNVLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFqQmpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztRQU1yQyxnQkFBVyxHQUFHO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1NBQzFDLENBQUM7UUFXQSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsUUFBUTs7O1lBRUYsSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMs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QztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBMUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxveUJBQXVFO2dCQUV2RSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFSUSxXQUFXOzs7d0JBV2pCLE1BQU07bUJBR04sS0FBSzswQkFHTCxLQUFLOzs7O0lBTk4saUVBQThDOztJQUc5Qyw0REFBaUM7O0lBR2pDLG1FQUVFOztJQUVGLDBEQUFHOztJQUVILDhEQUFrQjs7SUFDbEIsa0VBQXFCOztJQUNyQixxRUFBdUI7Ozs7O0lBR3JCLDREQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc05vcm1hbGl6ZWRIb3Jpem9udGFsQmFyR3JvdXBlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGEhOiBDaGFydERhdGFNdWx0aVtdO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzVBQTQ1NCcsICcjQzdCNDJDJywgJyNBQUFBQUEnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuICBzZWxlY3RMaXN0OiBzdHJpbmdbXTtcclxuICBzZWxlY3RlZFZhbHVlITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdXRpbDogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuaWQgPSB1dGlsLnV1aWR2NCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBzZXQgbGVnZW5kIHZhbHVlc1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcblxyXG4gICAgLy8gc2V0IHNlbGVjdCBkYXRhXHJcbiAgICB0aGlzLnNlbGVjdExpc3QgPSB0aGlzLmRhdGEubWFwKHggPT4geC5uYW1lKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdExpc3RbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5uYW1lID09PSB0aGlzLnNlbGVjdGVkVmFsdWUpLnNlcmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYS5uYW1lKSAtIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGIubmFtZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gZWxlbXMubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCAxKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tpXS52YWx1ZTtcclxuICAgICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjaGVtZS5kb21haW5baV07XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMSk7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=