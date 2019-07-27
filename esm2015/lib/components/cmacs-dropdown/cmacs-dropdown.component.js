/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, EMPTY, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { slideMotion, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzMenuDirective } from 'ng-zorro-antd/menu';
import { CmacsDropdownDirective } from './cmacs-dropdown.directive';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function menuServiceFactory(injector) {
    return injector.get(CmacsMenuDropdownService);
}
export class CmacsDropdownComponent {
    /**
     * @param {?} cdr
     * @param {?} cmacsMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, cmacsMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.cmacsMenuDropdownService = cmacsMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.updatedPosition = 'bottom';
        this.dropDownPosition = 'bottom';
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.trigger = 'hover';
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.placement = 'bottomLeft';
        this.clickHide = true;
        this.disabled = false;
        this.visible = false;
        this.tableFilter = false;
        this.visibleChange = new EventEmitter();
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.trigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updatedPosition = this.dropDownPosition;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        const click$ = this.clickHide ? this.cmacsMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest(merge(observable$, click$), this.cmacsMenuDropdownService.menuOpen$)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[0] || value[1])), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.disabled && this.visible !== visible) {
                this.visible = visible;
                this.visibleChange.emit(this.visible);
                this.triggerWidth = this.cmacsDropdownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (this.cmacsDropdownDirective) {
            this.cmacsDropdownDirective.setDisabled(this.disabled);
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
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(merge(this.visible$, this.trigger === 'hover' ? this.cmacsDropdownDirective.hover$ : this.cmacsDropdownDirective.$click));
        this.updateDisabledState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible) {
            this.visible$.next(this.visible);
        }
        if (changes.disabled) {
            this.updateDisabledState();
        }
        if (changes.placement) {
            this.dropDownPosition = this.placement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = [POSITION_MAP[this.placement], ...this.positions];
        }
    }
}
CmacsDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-dropdown',
                exportAs: 'cmacsDropdown',
                preserveWhitespaces: false,
                providers: [
                    CmacsMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: menuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                animations: [slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content select=\"[cmacs-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropdownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"visible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div #dropdown class=\"{{'cmacs-dropdown ant-dropdown ant-dropdown-placement-'+placement}}\"\r\n    [class.cmacs-dropdown-updated-position-bottom-top]=\"updatedPosition === 'top'\"\r\n    [class.cmacs-dropdown-updated-position-top-bottom]=\"updatedPosition === 'bottom'\"\r\n    [ngClass]=\"overlayClassName\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"tableFilter\">\r\n      <ng-content select=\"[cmacs-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [":root{--bg-color:white}.cmacs-dropdown .ant-dropdown-menu-item{padding:8px 10px 8px 5px;border-top:1px solid #dee0e5}.cmacs-dropdown .ant-dropdown-menu-item:first-child{border-top:none}.cmacs-dropdown ul{padding:0;border:1px solid #dee0e5}.cmacs-dropdown.ant-dropdown-placement-bottomCenter ul{top:8px}.cmacs-dropdown.ant-dropdown-placement-topCenter ul{top:-8px}.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{display:none}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}", `
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsDropdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CmacsMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsDropdownComponent.propDecorators = {
    cmacsDropdownDirective: [{ type: ContentChild, args: [CmacsDropdownDirective,] }],
    nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    trigger: [{ type: Input }],
    overlayClassName: [{ type: Input }],
    overlayStyle: [{ type: Input }],
    placement: [{ type: Input }],
    clickHide: [{ type: Input }],
    disabled: [{ type: Input }],
    visible: [{ type: Input }],
    tableFilter: [{ type: Input }],
    visibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDropdownComponent.prototype, "clickHide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDropdownComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDropdownComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDropdownComponent.prototype, "tableFilter", void 0);
if (false) {
    /** @type {?} */
    CmacsDropdownComponent.prototype.triggerWidth;
    /** @type {?} */
    CmacsDropdownComponent.prototype.updatedPosition;
    /** @type {?} */
    CmacsDropdownComponent.prototype.dropDownPosition;
    /** @type {?} */
    CmacsDropdownComponent.prototype.positions;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownComponent.prototype.destroy$;
    /** @type {?} */
    CmacsDropdownComponent.prototype.cmacsDropdownDirective;
    /** @type {?} */
    CmacsDropdownComponent.prototype.nzMenuDirective;
    /** @type {?} */
    CmacsDropdownComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsDropdownComponent.prototype.trigger;
    /** @type {?} */
    CmacsDropdownComponent.prototype.overlayClassName;
    /** @type {?} */
    CmacsDropdownComponent.prototype.overlayStyle;
    /** @type {?} */
    CmacsDropdownComponent.prototype.placement;
    /** @type {?} */
    CmacsDropdownComponent.prototype.clickHide;
    /** @type {?} */
    CmacsDropdownComponent.prototype.disabled;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visible;
    /** @type {?} */
    CmacsDropdownComponent.prototype.tableFilter;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visibleChange;
    /**
     * @type {?}
     * @protected
     */
    CmacsDropdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownComponent.prototype.cmacsMenuDropdownService;
    /** @type {?} */
    CmacsDropdownComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQ0wsV0FBVyxFQUNYLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osaUNBQWlDLEVBRWpDLHNCQUFzQixFQUN0QixZQUFZLEVBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBSXpFLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxRQUFrQjtJQUNuRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBZ0NE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aURBQWdFOztJQUNoRSxxREFBeUU7O0lBQ3pFLHlDQUE4Qzs7SUFDOUMsa0RBQStCOztJQUMvQiw4Q0FBc0Q7O0lBQ3RELDJDQUE2Qzs7SUFDN0MsMkNBQTBDOztJQUMxQywwQ0FBMEM7O0lBQzFDLHlDQUF5Qzs7SUFDekMsNkNBQTZDOztJQUM3QywrQ0FBNkU7Ozs7O0lBeUMzRSxxQ0FBZ0M7Ozs7O0lBQ2hDLDBEQUEwRDs7SUFDMUQsNkNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgUE9TSVRJT05fTUFQXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuXHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzTWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vY21hY3MtbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIHBsYWNlbWVudCA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51U2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpNZW51QmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kcm9wZG93bicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Ryb3Bkb3duJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzTWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBtZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZHJvcGRvd20uY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICB1cGRhdGVkUG9zaXRpb24gPSAnYm90dG9tJztcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XHJcbiAgdmlzaWJsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NEcm9wZG93bkRpcmVjdGl2ZSkgY21hY3NEcm9wZG93bkRpcmVjdGl2ZTogQ21hY3NEcm9wZG93bkRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKE56TWVudURpcmVjdGl2ZSkgbnpNZW51RGlyZWN0aXZlOiBOek1lbnVEaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBJbnB1dCgpIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcclxuICBASW5wdXQoKSBvdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBwbGFjZW1lbnQgPSAnYm90dG9tTGVmdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgICB0aGlzLnVwZGF0ZWRQb3NpdGlvbiA9IHRoaXMuZHJvcERvd25Qb3NpdGlvbjtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaWNrJCA9IHRoaXMuY2xpY2tIaWRlID8gdGhpcy5jbWFjc01lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpIDogRU1QVFk7XHJcbiAgICBjb21iaW5lTGF0ZXN0KG1lcmdlKG9ic2VydmFibGUkLCBjbGljayQpLCB0aGlzLmNtYWNzTWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY21hY3NNZW51RHJvcGRvd25TZXJ2aWNlOiBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKFxyXG4gICAgICBtZXJnZShcclxuICAgICAgICB0aGlzLnZpc2libGUkLFxyXG4gICAgICAgIHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5ob3ZlciQgOiB0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUuJGNsaWNrXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHRoaXMudmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnBsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSB0aGlzLnBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLCAuLi50aGlzLnBvc2l0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==