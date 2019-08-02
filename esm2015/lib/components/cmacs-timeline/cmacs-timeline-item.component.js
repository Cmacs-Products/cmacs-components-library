/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
export class CmacsTimelineItemComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.color = 'gray';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    tryUpdateCustomColor() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
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
CmacsTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
CmacsTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
    color: [{ type: Input }],
    dot: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQWV2QixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQVFuQyxZQUFvQixRQUFtQixFQUFVLEdBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU45RCxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBR3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHMkQsQ0FBQzs7OztJQUUzRSxRQUFRO1FBQ0osSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzs7OztJQUNELGFBQWE7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sb0JBQW9COztjQUNsQixhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7Y0FDeEMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNyRixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzs7Z0JBRTFCLFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELFFBQVEsRUFBRSxtQkFBbUI7Z0JBRTdCLHlzQkFBbUQ7O2FBQ3REOzs7O1lBbEJHLFNBQVM7WUFOVCxpQkFBaUI7Ozt5QkEyQmhCLFNBQVMsU0FBQyxZQUFZO29CQUN0QixLQUFLO2tCQUNMLEtBQUs7Ozs7SUFGTixnREFBZ0Q7O0lBQ2hELDJDQUF3Qjs7SUFDeEIseUNBQXlDOztJQUV6Qyw0Q0FBZTs7SUFDZiw4Q0FBd0M7Ozs7O0lBRTVCLDhDQUEyQjs7Ozs7SUFBRSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RpbWVsaW5lTW9kZSB9IGZyb20gJy4vY21hY3MtdGltZWxpbmUuY29tcG9uZW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gICAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1pdGVtLCBbY21hY3MtdGltZWxpbmUtaXRlbV0nLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lSXRlbScsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScpIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XHJcbiAgICBASW5wdXQoKSBjb2xvciA9ICdncmF5JztcclxuICAgIEBJbnB1dCgpIGRvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gICAgaXNMYXN0ID0gZmFsc2U7XHJcbiAgICBwb3NpdGlvbjogQ21hY3NUaW1lbGluZU1vZGUgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJ107XHJcbiAgICAgICAgY29uc3QgY2lyY2xlID0gdGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10aW1lbGluZS1pdGVtLWhlYWQnKTtcclxuICAgICAgICBpZiAoZGVmYXVsdENvbG9ycy5pbmRleE9mKHRoaXMuY29sb3IpID09PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLmNvbG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19