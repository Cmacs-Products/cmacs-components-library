/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
var CmacsTimelineItemComponent = /** @class */ (function () {
    function CmacsTimelineItemComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.color = 'gray';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tryUpdateCustomColor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTimelineItemComponent.prototype.tryUpdateCustomColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    };
    CmacsTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    // tslint:disable-next-line:component-selector
                    selector: 'cmacs-timeline-item, [cmacs-timeline-item]',
                    exportAs: 'cmacsTimelineItem',
                    template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-gray]=\"color === 'gray'\"\r\n    [class.ant-timeline-item-head-blue]=\"color === 'blue'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!dot\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"dot\">{{ dot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>",
                    styles: [".ant-timeline-item-head{width:8px;height:8px;border-width:5px}.ant-timeline-item-head-gray{color:#3b3f46;border-color:#dee0e5!important}.ant-timeline-item-tail{border-left-style:dotted}.ant-timeline-item-head-custom{padding:0;width:16px;height:16px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    CmacsTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
        color: [{ type: Input }],
        dot: [{ type: Input }]
    };
    return CmacsTimelineItemComponent;
}());
export { CmacsTimelineItemComponent };
if (false) {
    /** @type {?} */
    CmacsTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    CmacsTimelineItemComponent.prototype.color;
    /** @type {?} */
    CmacsTimelineItemComponent.prototype.dot;
    /** @type {?} */
    CmacsTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    CmacsTimelineItemComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineItemComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQW1CSSxvQ0FBb0IsUUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOOUQsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUd4QixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRzJELENBQUM7Ozs7SUFFM0UsNkNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzs7OztJQUNELGtEQUFhOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyx5REFBb0I7Ozs7SUFBNUI7O1lBQ1UsYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7O1lBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDckYsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQzs7Z0JBMUNKLFNBQVMsU0FBQztvQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O29CQUUxQixRQUFRLEVBQUUsNENBQTRDO29CQUN0RCxRQUFRLEVBQUUsbUJBQW1CO29CQUU3Qix5c0JBQW1EOztpQkFDdEQ7Ozs7Z0JBbEJHLFNBQVM7Z0JBTlQsaUJBQWlCOzs7NkJBMkJoQixTQUFTLFNBQUMsWUFBWTt3QkFDdEIsS0FBSztzQkFDTCxLQUFLOztJQTZCVixpQ0FBQztDQUFBLEFBM0NELElBMkNDO1NBaENZLDBCQUEwQjs7O0lBQ25DLGdEQUFnRDs7SUFDaEQsMkNBQXdCOztJQUN4Qix5Q0FBeUM7O0lBRXpDLDRDQUFlOztJQUNmLDhDQUF3Qzs7Ozs7SUFFNUIsOENBQTJCOzs7OztJQUFFLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25Jbml0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFRlbXBsYXRlUmVmLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVGltZWxpbmVNb2RlIH0gZnJvbSAnLi9jbWFjcy10aW1lbGluZS5jb21wb25lbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWl0ZW0sIFtjbWFjcy10aW1lbGluZS1pdGVtXScsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVJdGVtJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJykgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBJbnB1dCgpIGNvbG9yID0gJ2dyYXknO1xyXG4gICAgQElucHV0KCkgZG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgICBpc0xhc3QgPSBmYWxzZTtcclxuICAgIHBvc2l0aW9uOiBDbWFjc1RpbWVsaW5lTW9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLm56Q29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9ycyA9IFsnYmx1ZScsICdyZWQnLCAnZ3JlZW4nXTtcclxuICAgICAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xyXG4gICAgICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5jb2xvcikgPT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicsIHRoaXMuY29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=