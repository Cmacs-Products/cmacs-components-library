/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
var CmacsOptionComponent = /** @class */ (function () {
    function CmacsOptionComponent() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    CmacsOptionComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.changes.next();
    };
    CmacsOptionComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-option',
                    exportAs: 'cmacsOption',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                }] }
    ];
    CmacsOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        nzLabel: [{ type: Input, args: ['label',] }],
        nzValue: [{ type: Input, args: ['value',] }],
        nzDisabled: [{ type: Input, args: ['disabled',] }],
        nzCustomContent: [{ type: Input, args: ['customContent',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsOptionComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
    return CmacsOptionComponent;
}());
export { CmacsOptionComponent };
if (false) {
    /** @type {?} */
    CmacsOptionComponent.prototype.changes;
    /** @type {?} */
    CmacsOptionComponent.prototype.template;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzLabel;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzValue;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vY21hY3Mtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBU0UsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNVyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLbEUsQ0FBQzs7OztJQUhDLDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLDBFQUE0QztpQkFDN0M7OzsyQkFHRSxTQUFTLFNBQUMsV0FBVzswQkFFckIsS0FBSyxTQUFDLE9BQU87MEJBRWIsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFVBQVU7a0NBQ2hCLEtBQUssU0FBQyxlQUFlOztJQURhO1FBQWYsWUFBWSxFQUFFOzs0REFBb0I7SUFDZDtRQUFmLFlBQVksRUFBRTs7aUVBQXlCO0lBS2xFLDJCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FiWSxvQkFBb0I7OztJQUMvQix1Q0FBd0I7O0lBQ3hCLHdDQUFvRDs7SUFFcEQsdUNBQWdDOztJQUVoQyx1Q0FBNkI7O0lBQzdCLDBDQUFzRDs7SUFDdEQsK0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcHRpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdsYWJlbCcpIG56TGFiZWw6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCd2YWx1ZScpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoJ2N1c3RvbUNvbnRlbnQnKSBASW5wdXRCb29sZWFuKCkgbnpDdXN0b21Db250ZW50ID0gZmFsc2U7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19