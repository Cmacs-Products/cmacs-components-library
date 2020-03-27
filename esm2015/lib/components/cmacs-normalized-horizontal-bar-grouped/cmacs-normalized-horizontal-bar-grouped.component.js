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
        // chart
        this.chartWidth = 250;
        this.chartHeight = 100;
        this.minWidth = 300;
        this.minHeight = 200;
        this.pw = 1;
        this.ph = 1;
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
    ngOnChanges() {
        this.pw = 1;
        if (this.view && this.view.length === 2) {
            this.pw = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        this.ph = 1;
        if (this.view && this.view.length === 2) {
            this.ph = this.view[1] > this.minHeight ? this.view[1] / this.minHeight : 1;
        }
        //
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.drawCanvas();
        }), 0);
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
            canvas.width = this.chartWidth * this.pw;
            canvas.height = this.chartHeight * this.ph;
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
                    context.moveTo(move, canvas.height / 2);
                    context.lineWidth = 8;
                    /** @type {?} */
                    const val = elems[i].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[i];
                    context.lineTo(move - 5, canvas.height / 2);
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
                styles: [":host{padding:15px;display:block}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}::ng-deep .chart-select .ant-select-selection,::ng-deep .chart-select .ant-select-selection:focus,::ng-deep .chart-select .ant-select-selection:hover{border:0;background-color:transparent!important}"]
            }] }
];
/** @nocollapse */
CmacsNormalizedHorizontalBarGroupedComponent.ctorParameters = () => [
    { type: UtilService }
];
CmacsNormalizedHorizontalBarGroupedComponent.propDecorators = {
    clickMenu: [{ type: Output }],
    data: [{ type: Input }],
    colorScheme: [{ type: Input }],
    view: [{ type: Input }]
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
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.chartWidth;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.chartHeight;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.minWidth;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.minHeight;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.pw;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.ph;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.view;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQix1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWxJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVM1RCxNQUFNLE9BQU8sNENBQTRDOzs7O0lBMkJ2RCxZQUNVLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUExQmpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztRQU1yQyxnQkFBVyxHQUFHO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1NBQzFDLENBQUM7O1FBU0YsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsT0FBRSxHQUFHLENBQUMsQ0FBQztRQU1MLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFROzs7WUFFRixJQUFJLEdBQVUsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFF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QUcsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBakdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxveUJBQXVFO2dCQUV2RSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFSUSxXQUFXOzs7d0JBV2pCLE1BQU07bUJBR04sS0FBSzswQkFHTCxLQUFLO21CQWlCTCxLQUFLOzs7O0lBdkJOLGlFQUE4Qzs7SUFHOUMsNERBQWlDOztJQUdqQyxtRUFFRTs7SUFFRiwwREFBRzs7SUFFSCw4REFBa0I7O0lBQ2xCLGtFQUFxQjs7SUFDckIscUVBQXVCOztJQUd2QixrRUFBaUI7O0lBQ2pCLG1FQUFrQjs7SUFDbEIsZ0VBQWU7O0lBQ2YsaUVBQWdCOztJQUNoQiwwREFBTzs7SUFDUCwwREFBTzs7SUFDUCw0REFBeUI7Ozs7O0lBR3ZCLDREQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhTXVsdGkgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvY2hhcnQtZGF0YS1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJHcm91cGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuXHJcbiAgLy8gb3RwaW9uc1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0M3QjQyQycsICcjQUFBQUFBJ11cclxuICB9O1xyXG5cclxuICBpZDtcclxuXHJcbiAgbGVnZW5kITogc3RyaW5nW107XHJcbiAgc2VsZWN0TGlzdDogc3RyaW5nW107XHJcbiAgc2VsZWN0ZWRWYWx1ZSE6IHN0cmluZztcclxuXHJcbiAgLy8gY2hhcnRcclxuICBjaGFydFdpZHRoID0gMjUwO1xyXG4gIGNoYXJ0SGVpZ2h0ID0gMTAwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIG1pbkhlaWdodCA9IDIwMDtcclxuICBwdyA9IDE7XHJcbiAgcGggPSAxO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gc2V0IGxlZ2VuZCB2YWx1ZXNcclxuICAgIGxldCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLm1hcChkID0+IGQuc2VyaWVzLm1hcCh4ID0+IHgubmFtZSkpLmZvckVhY2goKHgpID0+IHRlbXAgPSBbLi4udGVtcCwgLi4ueF0pO1xyXG4gICAgdGhpcy5sZWdlbmQgID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50ZW1wXSkpO1xyXG5cclxuICAgIC8vIHNldCBzZWxlY3QgZGF0YVxyXG4gICAgdGhpcy5zZWxlY3RMaXN0ID0gdGhpcy5kYXRhLm1hcCh4ID0+IHgubmFtZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RMaXN0WzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnB3ID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnB3ID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5waCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5waCA9IHRoaXMudmlld1sxXSA+IHRoaXMubWluSGVpZ2h0ID8gdGhpcy52aWV3WzFdIC8gdGhpcy5taW5IZWlnaHQgOiAxO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wdztcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRIZWlnaHQgKiB0aGlzLnBoO1xyXG5cclxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkuc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBhLm5hbWUpIC0gdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYi5uYW1lKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBlbGVtcy5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gODtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2ldLnZhbHVlO1xyXG4gICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NoZW1lLmRvbWFpbltpXTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=