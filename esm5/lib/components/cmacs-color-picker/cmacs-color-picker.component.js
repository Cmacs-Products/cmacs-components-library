/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Output, Input, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
var CmacsColorPickerComponent = /** @class */ (function () {
    function CmacsColorPickerComponent(ref, cdr) {
        this.ref = ref;
        this.cdr = cdr;
        this.type = 'basic';
        this.colorChange = new EventEmitter();
        this.width = 0;
        this.basicColorList = [
            '#000000',
            '#ffffff',
            '#cc2229',
            '#f6503c',
            '#ffa234',
            '#fff100',
            '#00ce7d',
            '#009fe3',
            '#2a7cff',
            '#a100cd',
            '#cf1384',
            '#794c18',
            '#bec4cd',
            '#656c79'
        ];
    }
    /**
     * @param {?} color
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.setColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.color = color;
        this.colorChange.emit(color);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.isColorPickerType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.type === type;
    };
    /**
     * @return {?}
     */
    CmacsColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.width = this.ref.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    };
    CmacsColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-color-picker',
                    exportAs: 'cmacsColorPicker',
                    template: "<ng-container *ngIf=\"isColorPickerType('basicWithTransparent')\"\r\n>\r\n  <div style=\"width: 18px; margin-right: 4px; display: inline-block\">\r\n    <div\r\n      class=\"cmacs-color-picker-color-wrapper\"\r\n      [class.cmacs-color-picker-color-wrapper-selected]=\"'transparent' === color\"\r\n      (click)=\"setColor('transparent')\"\r\n    >\r\n      <div class=\"cmacs-color-picker-color-transparent\"></div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div\r\n  style=\"display: inline-block; float: right\"\r\n  [style.width.px]=\"isColorPickerType('basicWithTransparent') ? width - 22 : width\"\r\n>\r\n  <div class=\"cmacs-color-picker-color-wrapper\"\r\n       *ngFor=\"let $color of basicColorList\"\r\n       [class.cmacs-color-picker-color-wrapper-selected]=\"$color === color\"\r\n       (click)=\"setColor($color)\"\r\n  >\r\n    <div class=\"cmacs-color-picker-color\"\r\n         [style.backgroundColor]=\"$color\"\r\n         [style.borderColor]=\"$color === '#ffffff'? '#dee0e5' : 'transparent'\"\r\n    ></div>\r\n  </div>\r\n</div>\r\n\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'cmacs-color-picker'
                    },
                    styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;-webkit-transition:.3s;transition:.3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent::before{content:'/';font-size:12px;color:#f6503c;-webkit-transform:rotate(20deg);transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent::before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent::before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsColorPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    CmacsColorPickerComponent.propDecorators = {
        type: [{ type: Input }],
        color: [{ type: Input }],
        colorChange: [{ type: Output }]
    };
    return CmacsColorPickerComponent;
}());
export { CmacsColorPickerComponent };
if (false) {
    /** @type {?} */
    CmacsColorPickerComponent.prototype.type;
    /** @type {?} */
    CmacsColorPickerComponent.prototype.color;
    /** @type {?} */
    CmacsColorPickerComponent.prototype.colorChange;
    /** @type {?} */
    CmacsColorPickerComponent.prototype.width;
    /** @type {?} */
    CmacsColorPickerComponent.prototype.basicColorList;
    /**
     * @type {?}
     * @private
     */
    CmacsColorPickerComponent.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    CmacsColorPickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29sb3ItcGlja2VyL2NtYWNzLWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ0ssaUJBQWlCLEVBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBMENFLG1DQUFvQixHQUFlLEVBQ2YsR0FBc0I7UUFEdEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBdkJqQyxTQUFJLEdBQXNDLE9BQU8sQ0FBQztRQUVqRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFbkQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixtQkFBYyxHQUFjO1lBQzFCLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztJQUcyQyxDQUFDOzs7OztJQUU5Qyw0Q0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHFEQUFpQjs7OztJQUFqQixVQUFrQixJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw2akNBQWtEO29CQUNsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsb0JBQW9CO3FCQUM1Qjs4d0NBR0Msc0VBSUM7aUJBRUo7Ozs7Z0JBckJDLFVBQVU7Z0JBQ0ssaUJBQWlCOzs7dUJBdUIvQixLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUFxQ1QsZ0NBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXpDWSx5QkFBeUI7OztJQUVwQyx5Q0FBMkQ7O0lBQzNELDBDQUF1Qjs7SUFDdkIsZ0RBQW1EOztJQUVuRCwwQ0FBa0I7O0lBQ2xCLG1EQWVFOzs7OztJQUVVLHdDQUF1Qjs7Ozs7SUFDdkIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbG9yLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbG9yUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnY21hY3MtY29sb3ItcGlja2VyJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtY29sb3ItcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG5cclxuICBASW5wdXQoKSB0eXBlIDogJ2Jhc2ljJyB8ICdiYXNpY1dpdGhUcmFuc3BhcmVudCcgPSAnYmFzaWMnO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGJhc2ljQ29sb3JMaXN0OiBzdHJpbmcgW10gPSBbXHJcbiAgICAnIzAwMDAwMCcsXHJcbiAgICAnI2ZmZmZmZicsXHJcbiAgICAnI2NjMjIyOScsXHJcbiAgICAnI2Y2NTAzYycsXHJcbiAgICAnI2ZmYTIzNCcsXHJcbiAgICAnI2ZmZjEwMCcsXHJcbiAgICAnIzAwY2U3ZCcsXHJcbiAgICAnIzAwOWZlMycsXHJcbiAgICAnIzJhN2NmZicsXHJcbiAgICAnI2ExMDBjZCcsXHJcbiAgICAnI2NmMTM4NCcsXHJcbiAgICAnIzc5NGMxOCcsXHJcbiAgICAnI2JlYzRjZCcsXHJcbiAgICAnIzY1NmM3OSdcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgfVxyXG5cclxuICBpc0NvbG9yUGlja2VyVHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==