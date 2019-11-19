/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from 'ng-zorro-antd/core';
import { CmacsTimelineItemComponent } from './cmacs-timeline-item.component';
export class CmacsTimelineComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.reverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const modeChanges = changes.mode;
        /** @type {?} */
        const reverseChanges = changes.reverse;
        /** @type {?} */
        const pendingChanges = changes.pending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges &&
            reverseChanges.previousValue !== reverseChanges.currentValue &&
            !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildren();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item.isLast = !this.reverse ? index === length - 1 : index === 0;
                item.position =
                    this.mode === 'left' || !this.mode
                        ? undefined
                        : this.mode === 'right'
                            ? 'right'
                            : this.mode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    }
}
CmacsTimelineComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                // tslint:disable-next-line:component-selector
                selector: 'cmacs-timeline',
                exportAs: 'cmacsTimeline',
                template: "<ul \r\n    class=\"ant-timeline\" \r\n    [class.ant-timeline-right]=\"mode === 'right'\"\r\n    [class.ant-timeline-alternate]=\"mode === 'alternate'\" \r\n    [class.ant-timeline-pending]=\"!!pending\"\r\n    [class.ant-timeline-reverse]=\"reverse\" \r\n    #timeline>\r\n    <!-- User inserted timeline dots. -->\r\n    <ng-content></ng-content>\r\n    <!-- Pending dot. -->\r\n    <li *ngIf=\"pending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n        <div class=\"ant-timeline-item-tail\"></div>\r\n        <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"pendingDot\">\r\n            {{ pendingDot }}<i *ngIf=\"!pendingDot\" nz-icon type=\"loading\"></i>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"ant-timeline-item-content\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"pending\">\r\n            {{ isPendingBoolean ? '' : pending }}\r\n          </ng-container>\r\n        </div>\r\n    </li>\r\n</ul>",
                styles: [".ant-timeline-item{font-family:Roboto;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#acb3bf}.ant-timeline-item-content{top:-5px}"]
            }] }
];
/** @nocollapse */
CmacsTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
CmacsTimelineComponent.propDecorators = {
    timeline: [{ type: ViewChild, args: ['timeline',] }],
    listOfTimeLine: [{ type: ContentChildren, args: [CmacsTimelineItemComponent,] }],
    pendingContent: [{ type: ContentChild, args: ['pending',] }],
    mode: [{ type: Input }],
    pending: [{ type: Input }],
    pendingDot: [{ type: Input }],
    reverse: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsTimelineComponent.prototype.timeline;
    /** @type {?} */
    CmacsTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    CmacsTimelineComponent.prototype.pendingContent;
    /** @type {?} */
    CmacsTimelineComponent.prototype.mode;
    /** @type {?} */
    CmacsTimelineComponent.prototype.pending;
    /** @type {?} */
    CmacsTimelineComponent.prototype.pendingDot;
    /** @type {?} */
    CmacsTimelineComponent.prototype.reverse;
    /** @type {?} */
    CmacsTimelineComponent.prototype.isPendingBoolean;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUuY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUvY21hY3MtdGltZWxpbmUuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZTdFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBYy9CLFlBQW9CLEdBQXNCLEVBQVUsUUFBa0I7UUFBbEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTjdELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFekIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRW1DLENBQUM7Ozs7O0lBRTNFLFdBQVcsQ0FBQyxPQUFzQjs7Y0FDeEIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJOztjQUMxQixjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU87O2NBQ2hDLGNBQWMsR0FBRyxPQUFPLENBQUMsT0FBTztRQUV0QyxJQUFJ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LFNBQVMsU0FBQyxVQUFVOzZCQUNwQixlQUFlLFNBQUMsMEJBQTBCOzZCQUMxQyxZQUFZLFNBQUMsU0FBUzttQkFFdEIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQVBOLDBDQUF5RDs7SUFDekQsZ0RBQW1HOztJQUNuRyxnREFBMkQ7O0lBRTNELHNDQUFpQzs7SUFDakMseUNBQXVEOztJQUN2RCw0Q0FBZ0Q7O0lBQ2hELHlDQUF5Qjs7SUFFekIsa0RBQXlCOzs7OztJQUV6QiwwQ0FBdUM7Ozs7O0lBRTNCLHFDQUE4Qjs7Ozs7SUFBRSwwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgcmV2ZXJzZUNoaWxkTm9kZXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzVGltZWxpbmVNb2RlID0gJ2xlZnQnIHwgJ2FsdGVybmF0ZScgfCAncmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUnLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgQFZpZXdDaGlsZCgndGltZWxpbmUnKSB0aW1lbGluZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgICBAQ29udGVudENoaWxkcmVuKENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50KSBsaXN0T2ZUaW1lTGluZTogUXVlcnlMaXN0PENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50PjtcclxuICAgIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnKSBwZW5kaW5nQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gICAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZU1vZGU7XHJcbiAgICBASW5wdXQoKSBwZW5kaW5nOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBASW5wdXQoKSBwZW5kaW5nRG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIEBJbnB1dCgpIHJldmVyc2UgPSBmYWxzZTtcclxuXHJcbiAgICBpc1BlbmRpbmdCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkgeyB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1vZGVDaGFuZ2VzID0gY2hhbmdlcy5tb2RlO1xyXG4gICAgICAgIGNvbnN0IHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlcy5yZXZlcnNlO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDaGFuZ2VzID0gY2hhbmdlcy5wZW5kaW5nO1xyXG5cclxuICAgICAgICBpZiAobW9kZUNoYW5nZXMgJiYgKG1vZGVDaGFuZ2VzLnByZXZpb3VzVmFsdWUgIT09IG1vZGVDaGFuZ2VzLmN1cnJlbnRWYWx1ZSB8fCBtb2RlQ2hhbmdlcy5pc0ZpcnN0Q2hhbmdlKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByZXZlcnNlQ2hhbmdlcyAmJlxyXG4gICAgICAgICAgICByZXZlcnNlQ2hhbmdlcy5wcmV2aW91c1ZhbHVlICE9PSByZXZlcnNlQ2hhbmdlcy5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgICAgICAgIXJldmVyc2VDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnJldmVyc2VDaGlsZFRpbWVsaW5lRG90cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGVuZGluZ0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gcGVuZGluZ0NoYW5nZXMuY3VycmVudFZhbHVlID09PSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lICYmIHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5yZXZlcnNlID8gaW5kZXggPT09IGxlbmd0aCAtIDEgOiBpbmRleCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9PT0gJ2xlZnQnIHx8ICF0aGlzLm1vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1vZGUgPT09ICdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHJldmVyc2VDaGlsZE5vZGVzKHRoaXMudGltZWxpbmUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=