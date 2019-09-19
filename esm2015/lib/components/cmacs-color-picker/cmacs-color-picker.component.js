/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Output, Input, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
export class CmacsColorPickerComponent {
    /**
     * @param {?} ref
     * @param {?} cdr
     */
    constructor(ref, cdr) {
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
    setColor(color) {
        this.color = color;
        this.colorChange.emit(color);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isColorPickerType(type) {
        return this.type === type;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.width = this.ref.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    }
}
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
                styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;-webkit-transition:.3s;transition:.3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent::before{content:'/';font-size:12px;color:#f6503c;-webkit-transform:rotate(20deg);transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent::before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent::before{font-size:14px}", `
      cmacs-color-picker {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsColorPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
CmacsColorPickerComponent.propDecorators = {
    type: [{ type: Input }],
    color: [{ type: Input }],
    colorChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY29sb3ItcGlja2VyL2NtYWNzLWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ0ssaUJBQWlCLEVBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBb0J2QixNQUFNLE9BQU8seUJBQXlCOzs7OztJQXdCcEMsWUFBb0IsR0FBZSxFQUNmLEdBQXNCO1FBRHRCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZCakMsU0FBSSxHQUFzQyxPQUFPLENBQUM7UUFFakQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRW5ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsbUJBQWMsR0FBYztZQUMxQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7SUFHMkMsQ0FBQzs7Ozs7SUFFOUMsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNmpDQUFrRDtnQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtpQkFDNUI7MHdDQUdDOzs7O0tBSUM7YUFFSjs7OztZQXJCQyxVQUFVO1lBQ0ssaUJBQWlCOzs7bUJBdUIvQixLQUFLO29CQUNMLEtBQUs7MEJBQ0wsTUFBTTs7OztJQUZQLHlDQUEyRDs7SUFDM0QsMENBQXVCOztJQUN2QixnREFBbUQ7O0lBRW5ELDBDQUFrQjs7SUFDbEIsbURBZUU7Ozs7O0lBRVUsd0NBQXVCOzs7OztJQUN2Qix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29sb3ItcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29sb3JQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdjbWFjcy1jb2xvci1waWNrZXInXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jb2xvci1waWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgOiAnYmFzaWMnIHwgJ2Jhc2ljV2l0aFRyYW5zcGFyZW50JyA9ICdiYXNpYyc7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgYmFzaWNDb2xvckxpc3Q6IHN0cmluZyBbXSA9IFtcclxuICAgICcjMDAwMDAwJyxcclxuICAgICcjZmZmZmZmJyxcclxuICAgICcjY2MyMjI5JyxcclxuICAgICcjZjY1MDNjJyxcclxuICAgICcjZmZhMjM0JyxcclxuICAgICcjZmZmMTAwJyxcclxuICAgICcjMDBjZTdkJyxcclxuICAgICcjMDA5ZmUzJyxcclxuICAgICcjMmE3Y2ZmJyxcclxuICAgICcjYTEwMGNkJyxcclxuICAgICcjY2YxMzg0JyxcclxuICAgICcjNzk0YzE4JyxcclxuICAgICcjYmVjNGNkJyxcclxuICAgICcjNjU2Yzc5J1xyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGlzQ29sb3JQaWNrZXJUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19