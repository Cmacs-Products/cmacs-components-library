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
        divider: [{ type: Input, args: ['divider',] }],
        extendedData: [{ type: Input, args: ['extendedData',] }],
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
    CmacsOptionComponent.prototype.divider;
    /** @type {?} */
    CmacsOptionComponent.prototype.extendedData;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzValue;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBQTtRQVNFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUVcsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNkLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS2xFLENBQUM7Ozs7SUFIQywwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQywwRUFBNEM7aUJBQzdDOzs7MkJBR0UsU0FBUyxTQUFDLFdBQVc7MEJBRXJCLEtBQUssU0FBQyxPQUFPOzBCQUNiLEtBQUssU0FBQyxTQUFTOytCQUNmLEtBQUssU0FBQyxjQUFjOzBCQUVwQixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsVUFBVTtrQ0FDaEIsS0FBSyxTQUFDLGVBQWU7O0lBRGE7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQUNkO1FBQWYsWUFBWSxFQUFFOztpRUFBeUI7SUFLbEUsMkJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWZZLG9CQUFvQjs7O0lBQy9CLHVDQUF3Qjs7SUFDeEIsd0NBQW9EOztJQUVwRCx1Q0FBZ0M7O0lBQ2hDLHVDQUFrQzs7SUFDbEMsNENBQTRDOztJQUU1Qyx1Q0FBNkI7O0lBQzdCLDBDQUFzRDs7SUFDdEQsK0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcHRpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdsYWJlbCcpIG56TGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoJ2RpdmlkZXInKSBkaXZpZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCdleHRlbmRlZERhdGEnKSBleHRlbmRlZERhdGE6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCd2YWx1ZScpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoJ2N1c3RvbUNvbnRlbnQnKSBASW5wdXRCb29sZWFuKCkgbnpDdXN0b21Db250ZW50ID0gZmFsc2U7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19