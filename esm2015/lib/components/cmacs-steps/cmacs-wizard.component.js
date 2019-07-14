/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { CmacsStepComponent } from './cmacs-step.component';
export class CmacsWizardComponent {
    constructor() {
        this.current = 0;
        this.direction = 'vertical';
        this.labelPlacement = 'horizontal';
        this.size = 'default';
        this.startIndex = 0;
        this.status = 'process';
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
                styles: [".ant-steps{font-family:Roboto;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-title{font-size:12px}.ant-steps-item-title-secondary{line-height:35px!important}.ant-steps-vertical .ant-steps-item-title{line-height:24px;padding-left:10px}.ant-steps-item-process .ant-steps-item-icon{background:#fff;height:23px;width:23px}.ant-steps-item-icon{background:#fff;height:23px;width:23px;font-size:12px}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-tail{position:absolute;top:0;left:12px;padding:23px 0 0;height:130%}.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-icon-secondary{background:#dee0e5!important;height:9px!important;width:9px!important;position:relative;top:13px;left:8px;margin-right:28px!important;border-color:#dee0e5!important}.ant-steps-item-finish .ant-steps-item-icon-secondary{background:#2a7cff!important;border-color:#2a7cff!important}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:3px;padding-left:1px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc3RlcHMvY21hY3Mtd2l6YXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFJTCxTQUFTLEVBRVQsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBZTNELE1BQU0sT0FBTyxvQkFBb0I7SUFUakM7UUFhVyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUyxHQUFvQixVQUFVLENBQUM7UUFDeEMsbUJBQWMsR0FBOEIsWUFBWSxDQUFDO1FBQ3pELFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQVkxQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBZ0Z6QyxDQUFDOzs7OztJQS9GQyxJQUNJLGFBQWEsQ0FBQyxLQUE2RjtRQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFT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QUFLLFlBQVk7WUFDOUYsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUN0QyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPO1NBQzNDLENBQUM7SUFDSixDQUFDOzs7WUFqSEYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix5R0FBNEM7O2FBRTdDOzs7b0JBR0UsZUFBZSxTQUFDLGtCQUFrQjtzQkFFbEMsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBRUwsS0FBSzs7OztJQVROLHFDQUEwRTs7SUFFMUUsdUNBQXFCOztJQUNyQix5Q0FBaUQ7O0lBQ2pELDhDQUFrRTs7SUFDbEUsb0NBQXdDOztJQUN4QywwQ0FBd0I7O0lBQ3hCLHNDQUEwQzs7SUFZMUMsOENBQXVCOztJQUN2Qix3REFBdUc7O0lBRXZHLHdDQUFzQjs7Ozs7SUFFdEIsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOelNpemVEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NtYWNzLXN0ZXAuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtd2l6YXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzV2l6YXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy13aXphcmQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc1N0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8Q21hY3NTdGVwQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgY3VycmVudCA9IDA7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIGxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzdGFydEluZGV4ID0gMDtcclxuICBASW5wdXQoKSBzdGF0dXM6IE56U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQcm9ncmVzc0RvdCh2YWx1ZTogYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcclxuICBjdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47XHJcblxyXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnN0YXJ0SW5kZXggfHwgY2hhbmdlcy5kaXJlY3Rpb24gfHwgY2hhbmdlcy5zdGF0dXMgfHwgY2hhbmdlcy5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLmxhYmVsUGxhY2VtZW50IHx8IGNoYW5nZXMuc2l6ZSkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcclxuICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW5TdGVwcygpOiB2b2lkIHtcclxuICAgIC8qbGV0IHN0ZXBQcmltYXJ5SW5kZXhlcyA9IFtdO1xyXG4gICAgY29uc3Qgc3RlcHNGaWx0ZXJlZCA9IHRoaXMuc3RlcHMuZmlsdGVyKChzdGVwOiBDbWFjc1N0ZXBDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKCFzdGVwLnNlY29uZGFyeSkge1xyXG4gICAgICAgIHN0ZXBQcmltYXJ5SW5kZXhlcy5wdXNoKGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gIXN0ZXAuc2Vjb25kYXJ5O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0ZXBzLmZpbHRlcigoc3RlcDogQ21hY3NTdGVwQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmIChzdGVwLnNlY29uZGFyeSAmJiBzdGVwUHJpbWFyeUluZGV4ZXNbdGhpcy5jdXJyZW50XSA+IGluZGV4KSB7XHJcbiAgICAgICAgc3RlcC5pbmRleCA9IDA7XHJcbiAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ZXAuaW5kZXggPSAxO1xyXG4gICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gIXN0ZXAuc2Vjb25kYXJ5O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsZW5ndGggPSBzdGVwc0ZpbHRlcmVkLmxlbmd0aDtcclxuICAgIHN0ZXBzRmlsdGVyZWQuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHsqL1xyXG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zdGVwcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzdGVwLm91dFN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgc3RlcC5jdXN0b21Qcm9jZXNzVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0ZXAuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLnN0YXJ0SW5kZXg7XHJcbiAgICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgIHN0ZXAubGFzdCA9IGxlbmd0aCA9PT0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgc3RlcC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW2BhbnQtc3RlcHMtJHt0aGlzLmRpcmVjdGlvbn1gXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbGBdOiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGBdOlxyXG4gICAgICAodGhpcy5zaG93UHJvY2Vzc0RvdCB8fCB0aGlzLmxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1kb3RgXTogdGhpcy5zaG93UHJvY2Vzc0RvdCxcclxuICAgICAgWydhbnQtc3RlcHMtc21hbGwnXTogdGhpcy5zaXplID09PSAnc21hbGwnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19