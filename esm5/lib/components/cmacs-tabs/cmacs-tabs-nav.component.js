/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** code from https://github.com/angular/material2 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CmacsTabLabelDirective } from './cmacs-tab-label.directive';
import { CmacsTabsInkBarDirective } from './cmacs-tabs-ink-bar.directive';
/** @type {?} */
var EXAGGERATED_OVERSCROLL = 64;
var CmacsTabsNavComponent = /** @class */ (function () {
    function CmacsTabsNavComponent(elementRef, ngZone, renderer, cdr, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.animated = true;
        this.hideBar = false;
        this.showPagination = true;
        this.type = 'line';
        this.cmacsType = 'icon';
    }
    Object.defineProperty(CmacsTabsNavComponent.prototype, "positionMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPositionMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._tabPositionMode = value;
            this.alignInkBarToSelectedTab();
            if (this.showPagination) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.updatePagination();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsNavComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.onContentChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.showPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.scrollHeader = /**
     * @param {?} scrollDir
     * @return {?}
     */
    function (scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.onPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.onNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.showPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.showPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
        if (this.scrollDistanceChanged) {
            if (this.showPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.realignInkBar = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dirChange = _this.dir ? _this.dir.change : observableOf(null);
            /** @type {?} */
            var resize = typeof window !== 'undefined' ? fromEvent(window, 'resize').pipe(auditTime(10)) : observableOf(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.showPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
            }));
        }));
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.updateTabScrollPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDistance = this.scrollDistance;
        if (this.positionMode === 'horizontal') {
            /** @type {?} */
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.updatePagination = /**
     * @return {?}
     */
    function () {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.checkPaginationEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    };
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.scrollToLabel = /**
     * @param {?} labelIndex
     * @return {?}
     */
    function (labelIndex) {
        /** @type {?} */
        var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            /** @type {?} */
            var labelBeforePos = void 0;
            /** @type {?} */
            var labelAfterPos = void 0;
            if (this.positionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            var beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.checkScrollingControls = /**
     * @return {?}
     */
    function () {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.cdr.markForCheck();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.getMaxScrollDistance = /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    function () {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    };
    Object.defineProperty(CmacsTabsNavComponent.prototype, "scrollDistance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this.scrollDistanceChanged = true;
            this.checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var PAGINATION_PIX = 0;
            if (this.showPaginationControls) {
                PAGINATION_PIX = 64;
            }
            if (this.positionMode === 'horizontal') {
                return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.positionMode === 'horizontal') {
                return this.navListElement.nativeElement.scrollWidth;
            }
            else {
                return this.navListElement.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsNavComponent.prototype, "tabListScrollOffSetWidthHeight", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.positionMode === 'horizontal') {
                return this.scrollListElement.nativeElement.offsetWidth;
            }
            else {
                return this.elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.getLayoutDirection = /**
     * @return {?}
     */
    function () {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /**
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.alignInkBarToSelectedTab = /**
     * @return {?}
     */
    function () {
        if (this.type === 'line') {
            /** @type {?} */
            var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.tabsInkBarDirective) {
                this.tabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsTabsNavComponent.prototype.isCmacsType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === this.cmacsType;
    };
    CmacsTabsNavComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-tabs-nav]',
                    exportAs: 'cmacsTabsNav',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div style=\"float:right;\" *ngIf=\"tabBarExtraContent\" class=\"ant-tabs-extra-content\">\r\n  <ng-template [ngTemplateOutlet]=\"tabBarExtraContent\"></ng-template>\r\n</div>\r\n<div class=\"ant-tabs-nav-container\"\r\n  [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\"\r\n  #navContainerElement>\r\n  <span class=\"ant-tabs-tab-prev\"\r\n    (click)=\"scrollHeader('before')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-prev-icon\">\r\n      <i nz-icon [type]=\"positionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <span class=\"ant-tabs-tab-next\"\r\n    (click)=\"scrollHeader('after')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-next-icon\">\r\n      <i nz-icon [type]=\"positionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-tabs-nav-wrap\">\r\n    <div class=\"ant-tabs-nav-scroll\"\r\n         [class.cmacs-tabs-icon]=\"isCmacsType('icon')\"\r\n         [class.cmacs-tabs-ems]=\"isCmacsType('ems')\"\r\n         [class.cmacs-tabs-schedule]=\"isCmacsType('schedule')\"\r\n         [class.cmacs-tabs-property]=\"isCmacsType('property')\"\r\n         #scrollListElement>\r\n      <div class=\"ant-tabs-nav\"\r\n        [class.ant-tabs-nav-animated]=\"animated\"\r\n        #navListElement\r\n        (cdkObserveContent)=\"onContentChanges()\">\r\n        <div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n        <div cmacs-tabs-ink-bar [hidden]=\"hideBar\" [animated]=\"animated\" [positionMode]=\"positionMode\" style=\"display: block;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".ant-tabs-ink-bar{height:1px;background-color:#2a7cff}.ant-tabs-nav{font-weight:500;font-size:14px}.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-nav .ant-tabs-tab:hover{color:#2a7cff}.ant-tabs-nav .ant-tabs-tab{line-height:2.86;padding:0 12px 2px;margin:unset}.ant-tabs-bar{border-color:#dee0e5}.cmacs-tabs-icon,.cmacs-tabs-property{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.cmacs-tabs-icon .ant-tabs-nav .ant-tabs-tab .anticon{font-size:16px;margin:0 auto}.cmacs-tabs-icon .ant-tabs-nav .ant-tabs-tab-active{color:#2a7cff;border:1px solid #dee0e5;border-bottom-color:transparent}.cmacs-tabs-icon .ant-tabs-ink-bar{background-color:#fff}.cmacs-tabs-icon .ant-tabs-nav .ant-tabs-tab{padding:5px 8px;line-height:unset;margin-left:13px;margin-right:13px}.cmacs-tabs-ems .ant-tabs-nav .ant-tabs-tab .anticon,.cmacs-tabs-schedule .ant-tabs-nav .ant-tabs-tab .anticon{margin-right:0}.cmacs-tabs-ems .ant-tabs-nav,.cmacs-tabs-schedule .ant-tabs-nav{font-size:16px}.cmacs-tabs-ems .ant-tabs-nav .ant-tabs-tab{line-height:unset;padding:12px 18px;margin:unset}.cmacs-tabs-schedule .ant-tabs-nav .ant-tabs-tab{line-height:unset;padding:0 0 10px;margin-left:10px;margin-right:10px}.cmacs-tabs-schedule .ant-tabs-nav .ant-tabs-tab:first-child{margin-left:0}.cmacs-tabs-property .ant-tabs-nav .ant-tabs-tab{line-height:unset;padding:0 4px 15px;margin-left:30px;margin-right:30px}.cmacs-side-panel-wrapper cmacs-tabset{height:100%}.cmacs-side-panel-wrapper cmacs-tabset .ant-tabs-bar{margin-right:30px}.cmacs-side-panel-wrapper .ant-tabs-content{height:calc(100% - 56px);word-break:break-all}.cmacs-side-panel-wrapper .ant-tabs-content .ant-tabs-tabpane{overflow-y:auto;padding-right:30px}.cmacs-side-panel-wrapper .ant-tabs-content .ant-tabs-tabpane>span{width:310px;display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTabsNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    CmacsTabsNavComponent.propDecorators = {
        listOfNzTabLabelDirective: [{ type: ContentChildren, args: [CmacsTabLabelDirective,] }],
        tabsInkBarDirective: [{ type: ViewChild, args: [CmacsTabsInkBarDirective,] }],
        navContainerElement: [{ type: ViewChild, args: ['navContainerElement',] }],
        navListElement: [{ type: ViewChild, args: ['navListElement',] }],
        scrollListElement: [{ type: ViewChild, args: ['scrollListElement',] }],
        onNextClick: [{ type: Output }],
        onPrevClick: [{ type: Output }],
        tabBarExtraContent: [{ type: Input }],
        animated: [{ type: Input }],
        hideBar: [{ type: Input }],
        showPagination: [{ type: Input }],
        type: [{ type: Input }],
        cmacsType: [{ type: Input }],
        positionMode: [{ type: Input }],
        selectedIndex: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTabsNavComponent.prototype, "animated", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTabsNavComponent.prototype, "hideBar", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTabsNavComponent.prototype, "showPagination", void 0);
    return CmacsTabsNavComponent;
}());
export { CmacsTabsNavComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype._tabPositionMode;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype._selectedIndex;
    /**
     * Cached text content of the header.
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype.currentTextContent;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.listOfNzTabLabelDirective;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.tabsInkBarDirective;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.scrollListElement;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.onNextClick;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.onPrevClick;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.tabBarExtraContent;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.animated;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.hideBar;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.showPagination;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.type;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.cmacsType;
    /** @type {?} */
    CmacsTabsNavComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsNavComponent.prototype.dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10YWJzL2NtYWNzLXRhYnMtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFHcEUsc0JBQXNCLEdBQUcsRUFBRTtBQUdqQztJQTZERSwrQkFDUyxVQUFzQixFQUNyQixNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBc0IsRUFDVixHQUFtQjtRQUpoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsUUFBRyxHQUFILEdB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cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKiogY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLXRhYi1sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLXRhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL2NtYWNzLXRhYnNldC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgRVhBR0dFUkFURURfT1ZFUlNDUk9MTCA9IDY0O1xyXG5leHBvcnQgdHlwZSBTY3JvbGxEaXJlY3Rpb24gPSAnYWZ0ZXInIHwgJ2JlZm9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy10YWJzLW5hdl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWJzTmF2JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhYnMtbmF2LmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFicy1uYXYuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYnNOYXZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogVGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4ID0gMDtcclxuICAvKiogQ2FjaGVkIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLiAqL1xyXG4gIHByaXZhdGUgY3VycmVudFRleHRDb250ZW50OiBzdHJpbmc7XHJcbiAgc2hvd1BhZ2luYXRpb25Db250cm9scyA9IGZhbHNlO1xyXG4gIGRpc2FibGVTY3JvbGxBZnRlciA9IHRydWU7XHJcbiAgZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcclxuICByZWFsaWduSW5rQmFyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICB0YWJMYWJlbENvdW50OiBudW1iZXI7XHJcbiAgc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkOiBib29sZWFuO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NUYWJMYWJlbERpcmVjdGl2ZSkgbGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZTogUXVlcnlMaXN0PENtYWNzVGFiTGFiZWxEaXJlY3RpdmU+O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJzSW5rQmFyRGlyZWN0aXZlKSB0YWJzSW5rQmFyRGlyZWN0aXZlOiBDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZCgnbmF2Q29udGFpbmVyRWxlbWVudCcpIG5hdkNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbmF2TGlzdEVsZW1lbnQnKSBuYXZMaXN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzY3JvbGxMaXN0RWxlbWVudCcpIHNjcm9sbExpc3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlQmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSB0eXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZSA9ICdpY29uJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcG9zaXRpb25Nb2RlKHZhbHVlOiBUYWJQb3NpdGlvbk1vZGUpIHtcclxuICAgIHRoaXMuX3RhYlBvc2l0aW9uTW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwb3NpdGlvbk1vZGUoKTogVGFiUG9zaXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLl90YWJQb3NpdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSB0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZTtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXI6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7fVxyXG5cclxuICBvbkNvbnRlbnRDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIC8vIFdlIG5lZWQgdG8gZGlmZiB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIsIGJlY2F1c2UgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgY2FsbGJhY2tcclxuICAgIC8vIHdpbGwgZmlyZSBldmVuIGlmIHRoZSB0ZXh0IGNvbnRlbnQgZGlkbid0IGNoYW5nZSB3aGljaCBpcyBpbmVmZmljaWVudCBhbmQgaXMgcHJvbmVcclxuICAgIC8vIHRvIGluZmluaXRlIGxvb3BzIGlmIGEgcG9vcmx5IGNvbnN0cnVjdGVkIGV4cHJlc3Npb24gaXMgcGFzc2VkIGluIChzZWUgIzE0MjQ5KS5cclxuICAgIGlmICh0ZXh0Q29udGVudCAhPT0gdGhpcy5jdXJyZW50VGV4dENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlKSB7XHJcbiAgICAgIHRoaXMub25QcmV2Q2xpY2suZW1pdCgpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdhZnRlcicgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyKSB7XHJcbiAgICAgIHRoaXMub25OZXh0Q2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgLy8gTW92ZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIG9uZS10aGlyZCB0aGUgbGVuZ3RoIG9mIHRoZSB0YWIgbGlzdCdzIHZpZXdwb3J0LlxyXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSAoKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdGhpcy52aWV3V2lkdGhIZWlnaHRQaXgpIC8gMztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkxhYmVsQ291bnQgIT09IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYkxhYmVsQ291bnQgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFsaWduSW5rQmFyID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCBkaXJDaGFuZ2UgPSB0aGlzLmRpciA/IHRoaXMuZGlyLmNoYW5nZSA6IG9ic2VydmFibGVPZihudWxsKTtcclxuICAgICAgY29uc3QgcmVzaXplID1cclxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKGF1ZGl0VGltZSgxMCkpIDogb2JzZXJ2YWJsZU9mKG51bGwpO1xyXG4gICAgICByZXR1cm4gbWVyZ2UoZGlyQ2hhbmdlLCByZXNpemUpXHJcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxpZ25JbmtCYXIpIHtcclxuICAgICAgdGhpcy5yZWFsaWduSW5rQmFyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC1zY3JvbGxEaXN0YW5jZSA6IHNjcm9sbERpc3RhbmNlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsIDAsIDApYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCR7LXNjcm9sbERpc3RhbmNlfXB4LCAwKWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xyXG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1BhZ2luYXRpb25FbmFibGVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNFbmFibGVkID0gdGhpcy50YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXggPiB0aGlzLnRhYkxpc3RTY3JvbGxPZmZTZXRXaWR0aEhlaWdodDtcclxuICAgIGlmICghaXNFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRW5hYmxlZCAhPT0gdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9MYWJlbChsYWJlbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpW2xhYmVsSW5kZXhdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRMYWJlbCkge1xyXG4gICAgICAvLyBUaGUgdmlldyBsZW5ndGggaXMgdGhlIHZpc2libGUgd2lkdGggb2YgdGhlIHRhYiBsYWJlbHMuXHJcblxyXG4gICAgICBsZXQgbGFiZWxCZWZvcmVQb3M6IG51bWJlcjtcclxuICAgICAgbGV0IGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcclxuICAgICAgaWYgKHRoaXMucG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcclxuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRMZWZ0KCk7XHJcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcclxuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gbGFiZWxBZnRlclBvcyAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFRvcCgpO1xyXG4gICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0SGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYmVmb3JlVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XHJcbiAgICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeDtcclxuXHJcbiAgICAgIGlmIChsYWJlbEJlZm9yZVBvcyA8IGJlZm9yZVZpc2libGVQb3MpIHtcclxuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGJlZm9yZSBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlIC09IGJlZm9yZVZpc2libGVQb3MgLSBsYWJlbEJlZm9yZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFiZWxBZnRlclBvcyA+IGFmdGVyVmlzaWJsZVBvcykge1xyXG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYWZ0ZXIgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSBsYWJlbEFmdGVyUG9zIC0gYWZ0ZXJWaXNpYmxlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBwYWdpbmF0aW9uIGFycm93cyBzaG91bGQgYmUgYWN0aXZhdGVkLlxyXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcclxuICAgIHRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcclxuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSB0YWIgbGlzdCBjb250YWluZXIgYW5kIHRhYiBoZWFkZXIgY29udGFpbmVyLlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxyXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgc3BhcmluZ2x5LlxyXG4gICAqL1xyXG4gIGdldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXggLSB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB0YWIgaGVhZGVyIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBpbiB0aGUgWC1heGlzLiAqL1xyXG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpLCB2KSk7XHJcblxyXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXHJcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbiBjYW4gbW92ZSB0aGUgaGVhZGVyLlxyXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRGlzdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlld1dpZHRoSGVpZ2h0UGl4KCk6IG51bWJlciB7XHJcbiAgICBsZXQgUEFHSU5BVElPTl9QSVggPSAwO1xyXG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xyXG4gICAgICBQQUdJTkFUSU9OX1BJWCA9IDY0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gUEFHSU5BVElPTl9QSVg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gUEFHSU5BVElPTl9QSVg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XHJcbiAgfVxyXG5cclxuICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnbGluZScpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRMYWJlbFdyYXBwZXIgPVxyXG4gICAgICAgIHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZSAmJiB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoXHJcbiAgICAgICAgICA/IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgaWYgKHRoaXMudGFic0lua0JhckRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudGFic0lua0JhckRpcmVjdGl2ZS5hbGlnblRvRWxlbWVudChzZWxlY3RlZExhYmVsV3JhcHBlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQ21hY3NUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IHRoaXMuY21hY3NUeXBlO1xyXG4gIH1cclxufVxyXG4iXX0=