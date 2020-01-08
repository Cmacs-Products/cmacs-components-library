/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { CmacsStepComponent } from './cmacs-step.component';
import { InputBoolean } from "ng-zorro-antd";
export class CmacsWizardComponent {
    /**
     * @param {?} elem
     */
    constructor(elem) {
        this.elem = elem;
        this.current = 0;
        this.direction = 'vertical';
        this.labelPlacement = 'horizontal';
        this.size = 'default';
        this.startIndex = 0;
        this.clickable = false;
        this.status = 'process';
        this.indexChange = new EventEmitter();
        this.showProcessDot = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.startIndex || changes.direction || changes.status || changes.current) {
            this.updateChildrenSteps();
        }
        if (changes.direction || changes.nzProgressDot || changes.labelPlacement || changes.size) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildrenSteps();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateChildrenSteps() {
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
            const length = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    step.clickable = this.clickable;
                    step.parent = this.elem;
                    step.outStatus = this.status;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.direction = this.direction;
                    step.index = index + this.startIndex;
                    step.currentIndex = this.current;
                    step.last = length === index + 1;
                    step.markForCheck();
                }));
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.direction}`]: true,
            [`ant-steps-label-horizontal`]: this.direction === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.labelPlacement === 'vertical') && this.direction === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.size === 'small'
        };
    }
}
CmacsWizardComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-wizard',
                exportAs: 'cmacsWizard',
                template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-finish>.ant-steps-item-tail::after,.ant-steps-item-process>.ant-steps-item-tail::after,.ant-steps-item-wait>.ant-steps-item-tail::after{background:-webkit-gradient(linear,left top,left bottom,from(#fff),color-stop(50%,#fff),color-stop(50%,#dee0e5),to(#dee0e5));background:linear-gradient(to bottom,#fff,#fff 50%,#dee0e5 50%,#dee0e5);background-size:100% 4px}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-tail{position:absolute;top:0;left:11px;padding:23px 0 0;height:130%}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-tail-secondary{position:absolute;top:0;left:11px;padding:9px 0 0;height:130%}.ant-steps-vertical>.ant-steps-item.ant-steps-secondary+.ant-steps-item:not(.ant-steps-secondary)>.ant-steps-item-tail{padding:28px 0 0}.ant-steps-vertical .ant-steps-item-icon{margin-right:25px}.ant-steps-item-icon{border-color:#dee0e5;background:#fff;height:23px;width:23px;margin-right:25px;font-size:12px}.ant-steps-item-process .ant-steps-item-icon{background:#fff;height:23px;width:23px;margin-right:25px;font-size:12px;box-shadow:0 6px 10px rgba(59,63,70,.15)}.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon{color:#2a7cff}.ant-steps-item-icon-secondary{background:#dee0e5!important;height:9px;width:9px;position:relative;top:7px;left:7px;margin-right:39px!important;border-color:#dee0e5!important}.ant-steps-item-process .ant-steps-item-icon-secondary{background:#2a7cff!important;height:9px;width:9px;position:relative;top:7px;left:7px;margin-right:39px!important;border-color:#2a7cff!important;box-shadow:none}.ant-steps-item-finish .ant-steps-item-icon-secondary{background:#2a7cff!important;border-color:#2a7cff!important}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:3px;padding-left:1px}.ant-steps-item:not(:last-child){padding-bottom:41px}.ant-steps-item:not(.ant-steps-secondary)+.ant-steps-item.ant-steps-secondary{margin-top:-22px}.ant-steps-item.ant-steps-secondary{padding-bottom:14px}.ant-steps-item.ant-steps-secondary+.ant-steps-item:not(.ant-steps-secondary){padding-top:5px}.ant-steps-vertical .ant-steps-item-content{min-height:auto}.ant-steps-item-title{font-family:Roboto-Medium,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-stretch:normal;font-size:12px}.ant-steps-vertical .ant-steps-item-title{line-height:24px;padding-right:0}.ant-steps-vertical .ant-steps-item-description{font-size:12px;padding-bottom:0}.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-vertical .ant-steps-item-content-secondary{min-height:18px}.ant-steps-item-title-secondary{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;font-stretch:normal}"]
            }] }
];
/** @nocollapse */
CmacsWizardComponent.ctorParameters = () => [
    { type: ElementRef }
];
CmacsWizardComponent.propDecorators = {
    steps: [{ type: ContentChildren, args: [CmacsStepComponent,] }],
    current: [{ type: Input }],
    direction: [{ type: Input }],
    labelPlacement: [{ type: Input }],
    size: [{ type: Input }],
    startIndex: [{ type: Input }],
    clickable: [{ type: Input }],
    status: [{ type: Input }],
    indexChange: [{ type: Output }],
    nzProgressDot: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsWizardComponent.prototype, "clickable", void 0);
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
    CmacsWizardComponent.prototype.clickable;
    /** @type {?} */
    CmacsWizardComponent.prototype.status;
    /** @type {?} */
    CmacsWizardComponent.prototype.indexChange;
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
    /**
     * @type {?}
     * @private
     */
    CmacsWizardComponent.prototype.elem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc3RlcHMvY21hY3Mtd2l6YXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVCxXQUFXLEVBRVgsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBZTNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFtRy9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUEvRjNCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixjQUFTLEdBQW9CLFVBQVUsQ0FBQztRQUN4QyxtQkFBYyxHQUE4QixZQUFZLENBQUM7UUFDekQsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFDaEMsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVl6RSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBd0V2QyxD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RXZHLHdDQUFzQjs7Ozs7SUFFdEIsd0NBQXVDOzs7OztJQXVFM0Isb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sIEhvc3RMaXN0ZW5lcixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciwgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IHR5cGUgTnpTdGF0dXNUeXBlID0gJ3dhaXQnIHwgJ3Byb2Nlc3MnIHwgJ2ZpbmlzaCcgfCAnZXJyb3InO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy13aXphcmQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NXaXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy13aXphcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXdpemFyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1dpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxDbWFjc1N0ZXBDb21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBjdXJyZW50ID0gMDtcclxuICBASW5wdXQoKSBkaXJlY3Rpb246IE56RGlyZWN0aW9uVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgbGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHN0YXJ0SW5kZXggPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGlja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzdGF0dXM6IE56U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcclxuICBAT3V0cHV0KCkgaW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgfVxyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xyXG5cclxuICBjbGFzc01hcDogTmdDbGFzc1R5cGU7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5zdGFydEluZGV4IHx8IGNoYW5nZXMuZGlyZWN0aW9uIHx8IGNoYW5nZXMuc3RhdHVzIHx8IGNoYW5nZXMuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRpcmVjdGlvbiB8fCBjaGFuZ2VzLm56UHJvZ3Jlc3NEb3QgfHwgY2hhbmdlcy5sYWJlbFBsYWNlbWVudCB8fCBjaGFuZ2VzLnNpemUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIHRoaXMuc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XHJcbiAgICAvKmxldCBzdGVwUHJpbWFyeUluZGV4ZXMgPSBbXTtcclxuICAgIGNvbnN0IHN0ZXBzRmlsdGVyZWQgPSB0aGlzLnN0ZXBzLmZpbHRlcigoc3RlcDogQ21hY3NTdGVwQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICghc3RlcC5zZWNvbmRhcnkpIHtcclxuICAgICAgICBzdGVwUHJpbWFyeUluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICFzdGVwLnNlY29uZGFyeTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGVwcy5maWx0ZXIoKHN0ZXA6IENtYWNzU3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoc3RlcC5zZWNvbmRhcnkgJiYgc3RlcFByaW1hcnlJbmRleGVzW3RoaXMuY3VycmVudF0gPiBpbmRleCkge1xyXG4gICAgICAgIHN0ZXAuaW5kZXggPSAwO1xyXG4gICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGVwLmluZGV4ID0gMTtcclxuICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICFzdGVwLnNlY29uZGFyeTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gc3RlcHNGaWx0ZXJlZC5sZW5ndGg7XHJcbiAgICBzdGVwc0ZpbHRlcmVkLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7Ki9cclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc3RlcC5jbGlja2FibGUgPSB0aGlzLmNsaWNrYWJsZTtcclxuICAgICAgICAgIHN0ZXAucGFyZW50ID0gdGhpcy5lbGVtO1xyXG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5zdGFydEluZGV4O1xyXG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICBzdGVwLmxhc3QgPSBsZW5ndGggPT09IGluZGV4ICsgMTtcclxuICAgICAgICAgIHN0ZXAubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmKXtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbYGFudC1zdGVwcy0ke3RoaXMuZGlyZWN0aW9ufWBdOiB0cnVlLFxyXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYF06IHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYF06XHJcbiAgICAgICh0aGlzLnNob3dQcm9jZXNzRG90IHx8IHRoaXMubGFiZWxQbGFjZW1lbnQgPT09ICd2ZXJ0aWNhbCcpICYmIHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWRvdGBdOiB0aGlzLnNob3dQcm9jZXNzRG90LFxyXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLnNpemUgPT09ICdzbWFsbCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=