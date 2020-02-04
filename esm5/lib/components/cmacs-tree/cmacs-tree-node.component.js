/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, HostListener, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { collapseMotion, InputBoolean, NzNoAnimationDirective, NzTreeNode, toBoolean } from 'ng-zorro-antd/core';
import { CmacsTreeService } from './cmacs-tree.service';
var CmacsTreeNodeComponent = /** @class */ (function () {
    function CmacsTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, nzNoAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.nzNoAnimation = nzNoAnimation;
        this.hideUnMatched = false;
        this.noAnimation = false;
        this.selectMode = false;
        this.showIcon = false;
        this.inlineEdit = false;
        this.radio = false;
        this.onaddchild = new EventEmitter();
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        // tslint:disable-next-line: variable-name
        this._searchValue = '';
        // tslint:disable-next-line: variable-name
        this._draggable = false;
        // tslint:disable-next-line: variable-name
        this._expandAll = false;
    }
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "draggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._draggable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._draggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "defaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandAll;
        },
        /**
         * @deprecated use
         * expandAll instead
         */
        set: /**
         * @deprecated use
         * expandAll instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandAll = value;
            if (value && this.treeNode && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "expandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandAll;
        },
        // default set
        set: 
        // default set
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandAll = value;
            if (value && this.treeNode && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "searchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.highlightKeys = [];
            // tslint:disable-next-line: no-non-null-assertion
            if (value && (/** @type {?} */ (this.treeNode.title)).includes(value)) {
                // match the search value
                /** @type {?} */
                var index = this.treeNode.title.indexOf(value);
                this.highlightKeys = [
                    this.treeNode.title.slice(0, index),
                    this.treeNode.title.slice(index + value.length, this.treeNode.title.length)
                ];
            }
            this._searchValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.treeNode.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.draggable && !this.treeNode.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isShowLineIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isLeaf && this.showLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isLeaf && !this.showLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.treeNode.isExpanded && !this.treeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.treeNode.isExpanded && !this.treeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeNodeComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // to hide unmatched nodes
            return this.searchValue && this.hideUnMatched && !this.treeNode.isMatched && !this.treeNode.isExpanded
                ? 'none'
                : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.prefixCls = this.selectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.treeNode.isDisabled,
            _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
            _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
            _a[this.prefixCls + "-treenode-checkbox-checked"] = this.treeNode.isChecked,
            _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.treeNode.isHalfChecked,
            _a[this.prefixCls + "-treenode-selected"] = this.treeNode.isSelected,
            _a[this.prefixCls + "-treenode-loading"] = this.treeNode.isLoading,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.treeNode.isLeaf,
            _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
            _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
            _b);
        this.nzNodeCheckboxClass = (_c = {},
            _c[this.prefixCls + "-checkbox"] = true,
            _c[this.prefixCls + "-checkbox-checked"] = this.radio ?
                this.nzTreeService.getCheckedNodeList().length && this.nzTreeService.getCheckedNodeList()[0].key === this.treeNode.key
                : this.treeNode.isChecked,
            _c[this.prefixCls + "-checkbox-indeterminate"] = this.treeNode.isHalfChecked,
            _c[this.prefixCls + "-checkbox-disabled"] = this.treeNode.isDisabled || this.treeNode.isDisableCheckbox,
            _c);
        this.nzNodeContentClass = (_d = {},
            _d[this.prefixCls + "-node-content-wrapper"] = true,
            _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
            _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
            _d[this.prefixCls + "-node-selected"] = this.treeNode.isSelected,
            _d);
        this.nzNodeContentIconClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e[this.prefixCls + "-icon__customize"] = true,
            _e);
        this.nzNodeContentLoadingClass = (_f = {},
            _f[this.prefixCls + "-iconEle"] = true,
            _f);
        this.cdr.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectMode) {
            event.preventDefault();
        }
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeService.nzMultiple) {
            this.nzTreeService.isMultiple = toBoolean(event.ctrlKey) || toBoolean(event.shiftKey);
            /** @type {?} */
            var selectedNodes = this.nzTreeService.getSelectedNodeList();
            /** @type {?} */
            var selectedNodesCount = selectedNodes.length;
            if (toBoolean(event.shiftKey) && selectedNodesCount > 0) {
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('selectedMultiple', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }
        if (this.treeNode.isSelectable && !this.treeNode.isDisabled && !(this.nzTreeService.nzMultiple && toBoolean(event.shiftKey))) {
            if (!this.treeNode.isSelected) {
                this.treeNode.isSelected = !this.treeNode.isSelected;
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dblclick', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.nzContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('contextmenu', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.treeNode.isLoading && !this.treeNode.isLeaf) {
            // set async state
            if (this.asyncData && this.treeNode.children.length === 0 && !this.treeNode.isExpanded) {
                this.treeNode.isLoading = true;
            }
            this.treeNode.isExpanded = !this.treeNode.isExpanded;
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('expand', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.treeNode.isDisabled || this.treeNode.isDisableCheckbox) {
            return;
        }
        this.treeNode.isChecked = !this.treeNode.isChecked;
        this.treeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.treeNode);
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('check', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.onaddchildevt = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        this.onaddchild.emit(this.treeNode);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.treeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.treeNode);
        this.treeNode.isExpanded = false;
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragstart', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (node && node.key !== _this.treeNode.key && !_this.treeNode.isExpanded && !_this.treeNode.isLeaf) {
                _this.treeNode.isExpanded = true;
            }
            /** @type {?} */
            var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.treeNode, e);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.treeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragover', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
        }));
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragleave', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === _this.treeNode.key) || (_this.dragPos === 0 && _this.treeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            var dropEvent = _this.nzTreeService.formatEvent('drop', _this.treeNode, e);
            /** @type {?} */
            var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.treeNode, e);
            if (_this.beforeDrop) {
                _this.beforeDrop({
                    // tslint:disable-next-line: no-non-null-assertion
                    dragNode: _this.newMethod(),
                    node: _this.treeNode,
                    pos: _this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.treeNode, _this.dragPos);
                    }
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (_this.treeNode) {
                _this.nzTreeService.dropAndApply(_this.treeNode, _this.dragPos);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.newMethod = /**
     * @private
     * @return {?}
     */
    function () {
        // tslint:disable-next-line: no-non-null-assertion
        return (/** @type {?} */ (this.nzTreeService.getSelectedNode()));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            // if user do not custom beforeDrop
            if (!_this.beforeDrop) {
                /** @type {?} */
                var eventNext = _this.nzTreeService.formatEvent('dragend', _this.treeNode, e);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    };
    /**
     * 监听拖拽事件
     */
    /**
     * 监听拖拽事件
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.handDragEvent = /**
     * 监听拖拽事件
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this.draggable) {
                _this.destroy$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragStart(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnter(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragOver(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragLeave(e); }));
                fromEvent(_this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragDrop(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnd(e); }));
            }
            else {
                _this.destroy$.next();
                _this.destroy$.complete();
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // init expanded / selected / checked list
        if (this.inlineEdit && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
        if (this.treeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.treeNode);
        }
        if (this.treeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.treeNode);
        }
        if (this.treeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.treeNode);
        }
        // TODO
        this.treeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(
        // tslint:disable-next-line: no-non-null-assertion
        filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return (/** @type {?} */ (data.node)).key === _this.treeNode.key; })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setClassMap();
            _this.markForCheck();
        }));
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-tree-node',
                    exportAs: 'cmacsTreeNode',
                    template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.paddingLeft.px]=\"treeNode.isLeaf ? ((selectMode ? 22 : 16) * treeNode.level) : 0\"\r\n  [class.cmacs-tree-child-header]=\"treeNode.isLeaf\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <div [class.cmacs-tree-parent-header]=\"!treeNode.isLeaf\"\r\n       [class.cmacs-tree-node-selected]=\"!treeNode.isLeaf && treeNode.isSelected\"\r\n       [style.border-top-color]=\"selectMode && index ? '#dee0e5' : 'transparent'\"\r\n       [style.paddingLeft.px]=\"!treeNode.isLeaf || !treeNode.parentNode ? 16 * treeNode.level : 0\">\r\n    <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            type=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"checkable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-radio-btn-inner]=\"selectMode && radio\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{searchValue}}</span>{{highlightKeys[1]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"inlineEdit && !treeNode.parentNode\">\r\n          <i class=\"iconUILarge-New cmacs-tree-new-icon\" (click)=\"onaddchildevt($event)\"></i>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"treeTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n    </ng-template>\r\n  </div>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [radio]=\"radio\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    animations: [collapseMotion],
                    styles: [".cmacs-tree-new-icon{color:#acb3bf;font-size:16px;float:right;top:2px;position:relative}.ant-tree-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner::after{position:absolute;display:table;height:10px;border:none;border-radius:100px;top:2px;left:2px;width:10px;-webkit-transform:none!important;transform:none!important;background-color:#2a7cff;opacity:1;-webkit-transition:.2s cubic-bezier(.12,.4,.29,1.46) .1s;transition:.2s cubic-bezier(.12,.4,.29,1.46) .1s;content:' '}.ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{border-radius:100px}.ant-select-tree-checkbox-indeterminate .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner::after{background-color:#fff}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{background-color:#fff;border-color:#dee0e5}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeNodeComponent.ctorParameters = function () { return [
        { type: CmacsTreeService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTreeNodeComponent.propDecorators = {
        dragElement: [{ type: ViewChild, args: ['dragElement',] }],
        treeNode: [{ type: Input }],
        showLine: [{ type: Input }],
        showExpand: [{ type: Input }],
        expandedIcon: [{ type: Input }],
        checkable: [{ type: Input }],
        asyncData: [{ type: Input }],
        hideUnMatched: [{ type: Input }],
        noAnimation: [{ type: Input }],
        selectMode: [{ type: Input }],
        showIcon: [{ type: Input }],
        inlineEdit: [{ type: Input }],
        radio: [{ type: Input }],
        index: [{ type: Input }],
        treeTemplate: [{ type: Input }],
        beforeDrop: [{ type: Input }],
        onaddchild: [{ type: Output }],
        draggable: [{ type: Input }],
        defaultExpandAll: [{ type: Input }],
        expandAll: [{ type: Input }],
        searchValue: [{ type: Input }],
        onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "showLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "showExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "checkable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsTreeNodeComponent.prototype, "asyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "hideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "noAnimation", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "selectMode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "showIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "inlineEdit", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeNodeComponent.prototype, "radio", void 0);
    return CmacsTreeNodeComponent;
}());
export { CmacsTreeNodeComponent };
if (false) {
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragElement;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.treeNode;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showLine;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showExpand;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.expandedIcon;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.checkable;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.asyncData;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.hideUnMatched;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.noAnimation;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.selectMode;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showIcon;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.inlineEdit;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.radio;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.index;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.treeTemplate;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.beforeDrop;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.onaddchild;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.highlightKeys;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeCheckboxClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /**
     * drag var
     * @type {?}
     */
    CmacsTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    CmacsTreeNodeComponent.prototype._searchValue;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype._draggable;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype._expandAll;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNoAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQ3hCLElBQUksRUFDSixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixRQUFRLEVBQUUsTUFBTSxFQUNoQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxjQUFjLEVBQ2QsWUFBWSxFQUVaLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUFpZEUsZ0NBQ1MsYUFBK0IsRUFDOUIsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLEtBQWlCLEVBQ2pCLEdBQXNCLEVBQ0gsYUFBc0M7UUFMMUQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFwYzFDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FB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OztJQUN2Qiw4Q0FBeUM7O0lBQ3pDLDRDQUErRTs7SUFFL0UsNENBQWdGOztJQTZEaEYsMkNBQXVCOztJQUN2QiwrQ0FBNkI7O0lBQzdCLDZDQUFpQjs7SUFDakIscURBQXlCOztJQUN6QixvREFBd0I7O0lBQ3hCLHFEQUF5Qjs7SUFDekIsd0RBQTRCOztJQUM1QiwyREFBK0I7Ozs7O0lBSy9CLDBDQUF5Qjs7SUFDekIseUNBQVk7O0lBQ1osOENBSUU7Ozs7O0lBTUYsOENBQWtCOztJQUVsQiw0Q0FBbUI7O0lBRW5CLDRDQUFtQjs7SUE0VmpCLCtDQUFzQzs7Ozs7SUFDdEMsd0NBQXNCOzs7OztJQUN0QiwwQ0FBMkI7Ozs7O0lBQzNCLHVDQUF5Qjs7Ozs7SUFDekIscUNBQThCOztJQUM5QiwrQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb2xsYXBzZU1vdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVOb2RlLFxyXG4gIHRvQm9vbGVhblxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RyZWVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy10cmVlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlLW5vZGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlTm9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnKSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgdHJlZU5vZGU6IE56VHJlZU5vZGU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dMaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXN5bmNEYXRhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBiZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmhhbmREcmFnRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ2dhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogZXhwYW5kQWxsIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBkZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCBzZXRcclxuICBASW5wdXQoKVxyXG4gIHNldCBleHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUudGl0bGUhLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50cmVlTm9kZS50aXRsZS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIHRoaXMudHJlZU5vZGUudGl0bGUubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCB2YXJcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGhpZ2hsaWdodEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgbnpOb2RlQ2xhc3MgPSB7fTtcclxuICBuek5vZGVTd2l0Y2hlckNsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudENsYXNzID0ge307XHJcbiAgbnpOb2RlQ2hlY2tib3hDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgdmFyXHJcbiAgICovXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdQb3MgPSAyO1xyXG4gIGRyYWdQb3NDbGFzczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICcwJzogJ2RyYWctb3ZlcicsXHJcbiAgICAnMSc6ICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsXHJcbiAgICAnLTEnOiAnZHJhZy1vdmVyLWdhcC10b3AnXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVmYXVsdCBzZXRcclxuICAgKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlID0gJyc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9kcmFnZ2FibGUgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX2V4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBnZXQgbnpJY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50cmVlTm9kZS5pY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbkRyYWdnYWJsZSgpOiBib29sZWFuIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUgJiYgIXRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCA/IHRydWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd0xpbmVJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzTGVhZiAmJiB0aGlzLnNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudHJlZU5vZGUuaXNMZWFmICYmICF0aGlzLnNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTd2l0Y2hlckNsb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gdG8gaGlkZSB1bm1hdGNoZWQgbm9kZXNcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaFZhbHVlICYmIHRoaXMuaGlkZVVuTWF0Y2hlZCAmJiAhdGhpcy50cmVlTm9kZS5pc01hdGNoZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZFxyXG4gICAgICA/ICdub25lJ1xyXG4gICAgICA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xyXG4gICAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVmaXhDbHMgPSB0aGlzLnNlbGVjdE1vZGUgPyAnYW50LXNlbGVjdC10cmVlJyA6ICdhbnQtdHJlZSc7XHJcblxyXG4gICAgdGhpcy5uek5vZGVDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1kaXNhYmxlZGBdOiB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLnRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc2VsZWN0ZWRgXTogdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWxvYWRpbmdgXTogdGhpcy50cmVlTm9kZS5pc0xvYWRpbmdcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlci1ub29wYF06IHRoaXMudHJlZU5vZGUuaXNMZWFmLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX29wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3hgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMucmFkaW8gP1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKS5sZW5ndGggJiYgdGhpcy5uelRyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpWzBdLmtleSA9PT0gdGhpcy50cmVlTm9kZS5rZXlcclxuICAgICAgICA6IHRoaXMudHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWRpc2FibGVkYF06IHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ29udGVudENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtc2VsZWN0ZWRgXTogdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVDb250ZW50SWNvbkNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uX19jdXN0b21pemVgXTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdE1vZGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsaWNrIG5vZGUgdG8gc2VsZWN0LCAyMDBtcyB0byBkYmwgY2xpY2tcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgbnpDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubnpUcmVlU2VydmljZS5uek11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpIHx8IHRvQm9vbGVhbihldmVudC5zaGlmdEtleSk7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3RlZE5vZGVzID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWROb2Rlc0NvdW50ID0gc2VsZWN0ZWROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGlmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpICYmIHNlbGVjdGVkTm9kZXNDb3VudCA+IDApIHtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlbGVjdGVkTXVsdGlwbGUnLCAgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkICYmICEodGhpcy5uelRyZWVTZXJ2aWNlLm56TXVsdGlwbGUgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSAhdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjb250ZXh0bWVudScsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGFwc2Ugbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLmFzeW5jRGF0YSAmJiB0aGlzLnRyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9ICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQ7XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrIG5vZGVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gcmV0dXJuIGlmIG5vZGUgaXMgZGlzYWJsZWRcclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZDtcclxuICAgIHRoaXMudHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyBldmVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbJ2RyYWctb3Zlci1nYXAtdG9wJywgJ2RyYWctb3Zlci1nYXAtYm90dG9tJywgJ2RyYWctb3ZlciddO1xyXG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCBlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25hZGRjaGlsZGV2dCgkZXZlbnQ6IEV2ZW50KSAge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uYWRkY2hpbGQuZW1pdCh0aGlzLnRyZWVOb2RlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxyXG4gICAgICAvLyBmaXJlZm94LW5lZWQtaXRcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnRyZWVOb2RlLmtleSEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gZW1wdHlcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy50cmVlTm9kZSk7XHJcbiAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXNldCBwb3NpdGlvblxyXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUua2V5ICE9PSB0aGlzLnRyZWVOb2RlLmtleSAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xyXG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXHJcbiAgICAgIGlmICghKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLnRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbdGhpcy5kcmFnUG9zXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0Ryb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAoIW5vZGUgfHwgKG5vZGUgJiYgbm9kZS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMudHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4gICAgICBjb25zdCBkcmFnRW5kRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuICAgICAgaWYgKHRoaXMuYmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlRHJvcCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uZXdNZXRob2QoKSxcclxuICAgICAgICAgIG5vZGU6IHRoaXMudHJlZU5vZGUsXHJcbiAgICAgICAgICBwb3M6IHRoaXMuZHJhZ1Bvc1xyXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgICAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyZWVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV3TWV0aG9kKCk6IE56VHJlZU5vZGUge1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSE7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXHJcbiAgICAgIGlmICghdGhpcy5iZWZvcmVEcm9wKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55uR5ZCs5ouW5ou95LqL5Lu2XHJcbiAgICovXHJcbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VudGVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnb3ZlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ092ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdsZWF2ZScpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRHJvcChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VuZCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VuZChlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpUcmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpOb0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gaW5pdCBleHBhbmRlZCAvIHNlbGVjdGVkIC8gY2hlY2tlZCBsaXN0XHJcbiAgICBpZih0aGlzLmlubGluZUVkaXQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ET1xyXG4gICAgdGhpcy50cmVlTm9kZS5jb21wb25lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUoXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5ub2RlIS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==