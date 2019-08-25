/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { CmacsStepComponent } from './cmacs-step.component';
var CmacsWizardComponent = /** @class */ (function () {
    function CmacsWizardComponent() {
        this.current = 0;
        this.direction = 'vertical';
        this.labelPlacement = 'horizontal';
        this.size = 'default';
        this.startIndex = 0;
        this.status = 'process';
        this.showProcessDot = false;
        this.destroy$ = new Subject();
    }
    Object.defineProperty(CmacsWizardComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.startIndex || changes.direction || changes.status || changes.current) {
            this.updateChildrenSteps();
        }
        if (changes.direction || changes.nzProgressDot || changes.labelPlacement || changes.size) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    CmacsWizardComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsWizardComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /*let stepPrimaryIndexes = [];
        const stepsFiltered = this.steps.filter((step: CmacsStepComponent, index: number) => {
          if (!step.secondary) {
            stepPrimaryIndexes.push(index);
          }
          return !step.secondary;
        });
        this.steps.filter((step: CmacsStepComponent, index: number) => {
          if (step.secondary && stepPrimaryIndexes[this.current] > index) {
            step.index = 0;
            step.currentIndex = 1;
          } else {
            step.index = 1;
            step.currentIndex = 0;
          }
          return !step.secondary;
        });
        const length = stepsFiltered.length;
        stepsFiltered.forEach((step, index) => {*/
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.status;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.direction = _this.direction;
                    step.index = index + _this.startIndex;
                    step.currentIndex = _this.current;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsWizardComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.direction] = true,
            _a["ant-steps-label-horizontal"] = this.direction === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.labelPlacement === 'vertical') && this.direction === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.size === 'small',
            _a);
    };
    CmacsWizardComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'cmacs-wizard',
                    exportAs: 'cmacsWizard',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-title{font-size:12px}.ant-steps-item-title-secondary{line-height:35px!important}.ant-steps-vertical .ant-steps-item-title{line-height:24px;padding-left:10px}.ant-steps-item-process .ant-steps-item-icon{background:#fff;height:23px;width:23px}.ant-steps-item-icon{background:#fff;height:23px;width:23px;font-size:12px}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-tail{position:absolute;top:0;left:12px;padding:23px 0 0;height:130%}.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-icon-secondary{background:#dee0e5!important;height:9px!important;width:9px!important;position:relative;top:13px;left:8px;margin-right:28px!important;border-color:#dee0e5!important}.ant-steps-item-finish .ant-steps-item-icon-secondary{background:#2a7cff!important;border-color:#2a7cff!important}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:3px;padding-left:1px}"]
                }] }
    ];
    CmacsWizardComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [CmacsStepComponent,] }],
        current: [{ type: Input }],
        direction: [{ type: Input }],
        labelPlacement: [{ type: Input }],
        size: [{ type: Input }],
        startIndex: [{ type: Input }],
        status: [{ type: Input }],
        nzProgressDot: [{ type: Input }]
    };
    return CmacsWizardComponent;
}());
export { CmacsWizardComponent };
if (false) {
    /** @type {?} */
    CmacsWizardComponent.prototype.steps;
    /** @type {?} */
    CmacsWizardComponent.prototype.current;
    /** @type {?} */
    CmacsWizardComponent.prototype.direction;
    /** @type {?} */
    CmacsWizardComponent.prototype.labelPlacement;
    /** @type {?} */
    CmacsWizardComponent.prototype.size;
    /** @type {?} */
    CmacsWizardComponent.prototype.startIndex;
    /** @type {?} */
    CmacsWizardComponent.prototype.status;
    /** @type {?} */
    CmacsWizardComponent.prototype.showProcessDot;
    /** @type {?} */
    CmacsWizardComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    CmacsWizardComponent.prototype.classMap;
    /**
     * @type {?}
     * @private
     */
    CmacsWizardComponent.prototype.destroy$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc3RlcHMvY21hY3Mtd2l6YXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFJTCxTQUFTLEVBRVQsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBTTNEO0lBQUE7UUFhVyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUyxHQUFvQixVQUFVLENBQUM7UUFDeEMsbUJBQWMsR0FBOEIsWUFBWSxDQUFDO1FBQ3pELFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQVkxQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBZ0Z6QyxDQUFDO0lBL0ZDLHNCQUNJLCtDQUFhOzs7OztRQURqQixVQUNrQixLQUE2RjtZQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFD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SUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFlBQVk7WUFDOUYsR0FBQyxlQUFlLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFDdEMsR0FBQyxpQkFBaUIsSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87ZUFDM0MsQ0FBQztJQUNKLENBQUM7O2dCQWpIRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHlHQUE0Qzs7aUJBRTdDOzs7d0JBR0UsZUFBZSxTQUFDLGtCQUFrQjswQkFFbEMsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBRUwsS0FBSzs7SUErRlIsMkJBQUM7Q0FBQSxBQW5IRCxJQW1IQztTQTFHWSxvQkFBb0I7OztJQUUvQixxQ0FBMEU7O0lBRTFFLHVDQUFxQjs7SUFDckIseUNBQWlEOztJQUNqRCw4Q0FBa0U7O0lBQ2xFLG9DQUF3Qzs7SUFDeEMsMENBQXdCOztJQUN4QixzQ0FBMEM7O0lBWTFDLDhDQUF1Qjs7SUFDdkIsd0RBQXVHOztJQUV2Ryx3Q0FBc0I7Ozs7O0lBRXRCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1zdGVwLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5leHBvcnQgdHlwZSBOelN0YXR1c1R5cGUgPSAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXdpemFyZCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1dpemFyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXdpemFyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PENtYWNzU3RlcENvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIGN1cnJlbnQgPSAwO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBsYWJlbFBsYWNlbWVudDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc3RhcnRJbmRleCA9IDA7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgfVxyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xyXG5cclxuICBjbGFzc01hcDogTmdDbGFzc1R5cGU7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5zdGFydEluZGV4IHx8IGNoYW5nZXMuZGlyZWN0aW9uIHx8IGNoYW5nZXMuc3RhdHVzIHx8IGNoYW5nZXMuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRpcmVjdGlvbiB8fCBjaGFuZ2VzLm56UHJvZ3Jlc3NEb3QgfHwgY2hhbmdlcy5sYWJlbFBsYWNlbWVudCB8fCBjaGFuZ2VzLnNpemUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIHRoaXMuc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XHJcbiAgICAvKmxldCBzdGVwUHJpbWFyeUluZGV4ZXMgPSBbXTtcclxuICAgIGNvbnN0IHN0ZXBzRmlsdGVyZWQgPSB0aGlzLnN0ZXBzLmZpbHRlcigoc3RlcDogQ21hY3NTdGVwQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICghc3RlcC5zZWNvbmRhcnkpIHtcclxuICAgICAgICBzdGVwUHJpbWFyeUluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICFzdGVwLnNlY29uZGFyeTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGVwcy5maWx0ZXIoKHN0ZXA6IENtYWNzU3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoc3RlcC5zZWNvbmRhcnkgJiYgc3RlcFByaW1hcnlJbmRleGVzW3RoaXMuY3VycmVudF0gPiBpbmRleCkge1xyXG4gICAgICAgIHN0ZXAuaW5kZXggPSAwO1xyXG4gICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGVwLmluZGV4ID0gMTtcclxuICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICFzdGVwLnNlY29uZGFyeTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gc3RlcHNGaWx0ZXJlZC5sZW5ndGg7XHJcbiAgICBzdGVwc0ZpbHRlcmVkLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7Ki9cclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5zdGFydEluZGV4O1xyXG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICBzdGVwLmxhc3QgPSBsZW5ndGggPT09IGluZGV4ICsgMTtcclxuICAgICAgICAgIHN0ZXAubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgYW50LXN0ZXBzLSR7dGhpcy5kaXJlY3Rpb259YF06IHRydWUsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgXTogdGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcclxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtdmVydGljYWxgXTpcclxuICAgICAgKHRoaXMuc2hvd1Byb2Nlc3NEb3QgfHwgdGhpcy5sYWJlbFBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykgJiYgdGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcclxuICAgICAgW2BhbnQtc3RlcHMtZG90YF06IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXHJcbiAgICAgIFsnYW50LXN0ZXBzLXNtYWxsJ106IHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==