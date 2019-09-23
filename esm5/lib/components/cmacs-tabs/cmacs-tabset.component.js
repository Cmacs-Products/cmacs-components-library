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
/** get some code from https://github.com/angular/material2 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { toNumber, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsTabComponent } from './cmacs-tab.component';
import { CmacsTabsNavComponent } from './cmacs-tabs-nav.component';
/**
 * @record
 */
export function AnimatedInterface() { }
if (false) {
    /** @type {?} */
    AnimatedInterface.prototype.inkBar;
    /** @type {?} */
    AnimatedInterface.prototype.tabPane;
}
var TabChangeEvent = /** @class */ (function () {
    function TabChangeEvent() {
    }
    return TabChangeEvent;
}());
export { TabChangeEvent };
if (false) {
    /** @type {?} */
    TabChangeEvent.prototype.index;
    /** @type {?} */
    TabChangeEvent.prototype.tab;
}
var CmacsTabsetComponent = /** @class */ (function () {
    function CmacsTabsetComponent(renderer, nzUpdateHostClassService, elementRef, cdr) {
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabPositionMode = 'horizontal';
        this.showPagination = true;
        this.animated = true;
        this.hideAll = false;
        this.tabPosition = 'top';
        this.size = 'default';
        this.type = 'line';
        this.cmacsType = 'text';
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(CmacsTabsetComponent.prototype, "selectedIndex", {
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
            this.indexToSelect = value ? toNumber(value, null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsetComponent.prototype, "inkBarAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.animated === true || ((/** @type {?} */ (this.animated))).inkBar === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTabsetComponent.prototype, "tabPaneAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.animated === true || ((/** @type {?} */ (this.animated))).tabPane === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTabsetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.tabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.tabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["ant-tabs"] = true,
            _a["ant-tabs-vertical"] = this.tabPosition === 'left' || this.tabPosition === 'right',
            _a["ant-tabs-" + this.tabPosition] = this.tabPosition,
            _a["ant-tabs-no-animation"] = this.animated === false || ((/** @type {?} */ (this.animated))).tabPane === false,
            _a["ant-tabs-" + this.type] = this.type,
            _a["ant-tabs-large"] = this.size === 'large',
            _a["ant-tabs-small"] = this.size === 'small',
            _a));
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    CmacsTabsetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        if (!disabled) {
            this.selectedIndex = index;
            this.listOfNzTabComponent.toArray()[index].click.emit();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsTabsetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new TabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                if (i !== index) {
                    item.deselect.emit();
                }
            }));
            event.tab.select.emit();
        }
        return event;
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    CmacsTabsetComponent.prototype.clampTabIndex = /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTabsetComponent.prototype.subscribeToTabLabels = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge.apply(void 0, tslib_1.__spread(this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.stateChanges; })))).subscribe((/**
         * @return {?}
         */
        function () {
            return _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.tabPosition) {
            if (this.tabPosition === 'top' || this.tabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.tabPosition);
        }
        if (changes.type) {
            if (this.type === 'card') {
                this.animated = false;
            }
        }
        if (changes.size || changes.animated || changes.tabPosition || changes.type) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                /** @type {?} */
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.selectChange.emit(this.createChangeEvent(indexToSelect_1));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    function (tab, index) { return (tab.isActive = index === indexToSelect_1); }));
                    if (!isFirstRun_1) {
                        _this.selectedIndexChange.emit(indexToSelect_1);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                /** @type {?} */
                var tabs = _this.listOfNzTabComponent.toArray();
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        _this.indexToSelect = _this._selectedIndex = i;
                        break;
                    }
                }
            }
            _this.subscribeToTabLabels();
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    CmacsTabsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setPosition(this.tabPosition);
    };
    CmacsTabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-tabset',
                    exportAs: 'cmacsTabset',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-container *ngIf=\"listOfNzTabComponent\">\r\n  <div cmacs-tabs-nav\r\n    role=\"tablist\"\r\n    tabindex=\"0\"\r\n    class=\"ant-tabs-bar\"\r\n    [class.ant-tabs-card-bar]=\"type === 'card'\"\r\n    [class.ant-tabs-top-bar]=\"tabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-bar]=\"tabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-bar]=\"tabPosition === 'left'\"\r\n    [class.ant-tabs-right-bar]=\"tabPosition === 'right'\"\r\n    [class.ant-tabs-small-bar]=\"size === 'small'\"\r\n    [class.ant-tabs-default-bar]=\"size === 'default'\"\r\n    [class.ant-tabs-large-bar]=\"size === 'large'\"\r\n    [type]=\"type\"\r\n    [cmacsType]=\"cmacsType\"\r\n    [showPagination]=\"showPagination\"\r\n    [positionMode]=\"tabPositionMode\"\r\n    [animated]=\"inkBarAnimated\"\r\n    [ngStyle]=\"tabBarStyle\"\r\n    [hideBar]=\"hideAll\"\r\n    [tabBarExtraContent]=\"tabBarExtraContent\"\r\n    [selectedIndex]=\"selectedIndex\"\r\n    (onNextClick)=\"onNextClick.emit()\"\r\n    (onPrevClick)=\"onPrevClick.emit()\">\r\n    <div cmacs-tab-label\r\n      role=\"tab\"\r\n      [style.margin-right.px]=\"tabBarGutter\"\r\n      [class.ant-tabs-tab-active]=\"(selectedIndex == i) && !hideAll\"\r\n      [disabled]=\"tab.disabled\"\r\n      (click)=\"clickLabel(i,tab.disabled)\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <div #tabContent\r\n    class=\"ant-tabs-content\"\r\n    [class.ant-tabs-top-content]=\"tabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-content]=\"tabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-content]=\"tabPosition === 'left'\"\r\n    [class.ant-tabs-right-content]=\"tabPosition === 'right'\"\r\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\r\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\r\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(selectedIndex || 0 ) * 100)\">\r\n    <div cmacs-tab-body\r\n      class=\"ant-tabs-tabpane\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [active]=\"(selectedIndex == i) && !hideAll\"\r\n      [forceRender]=\"tab.forceRender\"\r\n      [content]=\"tab.template || tab.content\">\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                    styles: ["\n      cmacs-tabset {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsTabsetComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    CmacsTabsetComponent.propDecorators = {
        listOfNzTabComponent: [{ type: ContentChildren, args: [CmacsTabComponent,] }],
        tabsNavComponent: [{ type: ViewChild, args: [CmacsTabsNavComponent,] }],
        tabContent: [{ type: ViewChild, args: ['tabContent',] }],
        tabBarExtraContent: [{ type: Input }],
        showPagination: [{ type: Input }],
        animated: [{ type: Input }],
        hideAll: [{ type: Input }],
        tabPosition: [{ type: Input }],
        size: [{ type: Input }],
        tabBarGutter: [{ type: Input }],
        tabBarStyle: [{ type: Input }],
        type: [{ type: Input }],
        cmacsType: [{ type: Input }],
        onNextClick: [{ type: Output }],
        onPrevClick: [{ type: Output }],
        selectChange: [{ type: Output }],
        selectedIndexChange: [{ type: Output }],
        selectedIndex: [{ type: Input }]
    };
    return CmacsTabsetComponent;
}());
export { CmacsTabsetComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.tabLabelSubscription;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabPositionMode;
    /** @type {?} */
    CmacsTabsetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabsNavComponent;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabContent;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabBarExtraContent;
    /** @type {?} */
    CmacsTabsetComponent.prototype.showPagination;
    /** @type {?} */
    CmacsTabsetComponent.prototype.animated;
    /** @type {?} */
    CmacsTabsetComponent.prototype.hideAll;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabPosition;
    /** @type {?} */
    CmacsTabsetComponent.prototype.size;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabBarGutter;
    /** @type {?} */
    CmacsTabsetComponent.prototype.tabBarStyle;
    /** @type {?} */
    CmacsTabsetComponent.prototype.type;
    /** @type {?} */
    CmacsTabsetComponent.prototype.cmacsType;
    /** @type {?} */
    CmacsTabsetComponent.prototype.onNextClick;
    /** @type {?} */
    CmacsTabsetComponent.prototype.onPrevClick;
    /** @type {?} */
    CmacsTabsetComponent.prototype.selectChange;
    /** @type {?} */
    CmacsTabsetComponent.prototype.selectedIndexChange;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTabsetComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFicy9jbWFjcy10YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBSUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQWlCLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFbkUsdUNBR0M7OztJQUZDLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztBQUduQjtJQUFBO0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywrQkFBYzs7SUFDZCw2QkFBdUI7O0FBUXpCO0lBbUlFLDhCQUNVLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUN0QixHQUFzQjtRQUh0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJIeEIsa0JBQWEsR0FBa0IsQ0FBQyxDQUFDO1FBQ2pDLE9BQUUsR0FBZ0Is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QUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxNQUFNOzhCQUNOLE1BQU07K0JBQ04sTUFBTTtzQ0FDTixNQUFNO2dDQUVOLEtBQUs7O0lBb01SLDJCQUFDO0NBQUEsQUFoUEQsSUFnUEM7U0FoT1ksb0JBQW9COzs7Ozs7SUFFL0IsNkNBQXlDOzs7OztJQUN6QyxrQ0FBd0Q7Ozs7O0lBQ3hELDhDQUE2Qzs7Ozs7O0lBRTdDLGdEQUE4Qzs7Ozs7O0lBRTlDLG9EQUFrRDs7SUFDbEQsK0NBQWdEOztJQUNoRCxvREFBdUY7O0lBQ3ZGLGdEQUEwRTs7SUFDMUUsMENBQWdEOztJQUNoRCxrREFBK0M7O0lBQy9DLDhDQUErQjs7SUFDL0Isd0NBQXNEOztJQUN0RCx1Q0FBeUI7O0lBQ3pCLDJDQUEwQzs7SUFDMUMsb0NBQXlDOztJQUN6Qyw0Q0FBOEI7O0lBQzlCLDJDQUFnRDs7SUFDaEQsb0NBQWdDOztJQUNoQyx5Q0FBMEM7O0lBQzFDLDJDQUEwRDs7SUFDMUQsMkNBQTBEOztJQUMxRCw0Q0FBdUc7O0lBQ3ZHLG1EQUEwRjs7Ozs7SUEwRnhGLHdDQUEyQjs7Ozs7SUFDM0Isd0RBQTBEOzs7OztJQUMxRCwwQ0FBOEI7Ozs7O0lBQzlCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0b051bWJlciwgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy10YWJzLW5hdi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRlZEludGVyZmFjZSB7XHJcbiAgaW5rQmFyOiBib29sZWFuO1xyXG4gIHRhYlBhbmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJDaGFuZ2VFdmVudCB7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICB0YWI6IENtYWNzVGFiQ29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJQb3NpdGlvbiA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5leHBvcnQgdHlwZSBUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5leHBvcnQgdHlwZSBUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xyXG5leHBvcnQgdHlwZSBDbWFjc1RhYlR5cGUgPSAndGV4dCcgfCAnaWNvbicgfCAnZW1zJyB8ICdzY2hlZHVsZScgfCAncHJvcGVydHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWJzZXQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWJzZXQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFic2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtdGFic2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFic2V0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0YWJzIGJlaW5nIGFkZGVkL3JlbW92ZWQuICovXHJcbiAgcHJpdmF0ZSB0YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gY2hhbmdlcyBpbiB0aGUgdGFiIGxhYmVscy4gKi9cclxuICBwcml2YXRlIHRhYkxhYmVsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHRhYlBvc2l0aW9uTW9kZTogVGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJzTmF2Q29tcG9uZW50KSB0YWJzTmF2Q29tcG9uZW50OiBDbWFjc1RhYnNOYXZDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYW5pbWF0ZWQ6IEFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgaGlkZUFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRhYlBvc2l0aW9uOiBUYWJQb3NpdGlvbiA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgdHlwZTogVGFiVHlwZSA9ICdsaW5lJztcclxuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzVGFiVHlwZSA9ICd0ZXh0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWUgPyB0b051bWJlcih2YWx1ZSwgbnVsbCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLmFuaW1hdGVkIGFzIEFuaW1hdGVkSW50ZXJmYWNlKS5pbmtCYXIgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMuYW5pbWF0ZWQgYXMgQW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih2YWx1ZTogVGFiUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkNvbnRlbnQpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgdGhpcy5lbCxcclxuICAgICAgICAgIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy50YWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICB0aGlzLmVsLFxyXG4gICAgICAgICAgdGhpcy50YWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudC10YWJzYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRhYnMtdmVydGljYWxgXTogdGhpcy50YWJQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMudGFiUG9zaXRpb24gPT09ICdyaWdodCcsXHJcbiAgICAgIFtgYW50LXRhYnMtJHt0aGlzLnRhYlBvc2l0aW9ufWBdOiB0aGlzLnRhYlBvc2l0aW9uLFxyXG4gICAgICBbYGFudC10YWJzLW5vLWFuaW1hdGlvbmBdOlxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPT09IGZhbHNlIHx8ICh0aGlzLmFuaW1hdGVkIGFzIEFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZSxcclxuICAgICAgW2BhbnQtdGFicy0ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlLFxyXG4gICAgICBbYGFudC10YWJzLWxhcmdlYF06IHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2BhbnQtdGFicy1zbWFsbGBdOiB0aGlzLnNpemUgPT09ICdzbWFsbCdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KClbaW5kZXhdLmNsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpW2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudGFiUG9zaXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMudGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMudGFiUG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy50YWJQb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy50eXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjYXJkJykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuc2l6ZSB8fCBjaGFuZ2VzLmFuaW1hdGVkIHx8IGNoYW5nZXMudGFiUG9zaXRpb24gfHwgY2hhbmdlcy50eXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgYW1vdW50IG9mIHRhYnMsIGluIG9yZGVyIHRvIGJlXHJcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XHJcblxyXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXHJcbiAgICAgIC8vIGV4cGxpY2l0IGNoYW5nZSB0aGF0IHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiLlxyXG4gICAgICBpZiAoaW5kZXhUb1NlbGVjdCA9PT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYF9pbmRleFRvU2VsZWN0YCBhbmQgYF9zZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxyXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcclxuICAgICAgICAgICAgLy8gYWRkaW5nIGEgdGFiIHdpdGhpbiB0aGUgYHNlbGVjdGVkSW5kZXhDaGFuZ2VgIGV2ZW50LlxyXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnRhYlBvc2l0aW9uKTtcclxuICB9XHJcbn1cclxuIl19