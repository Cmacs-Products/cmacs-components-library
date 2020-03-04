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
            if (value && (/** @type {?} */ (this.treeNode.title.toLowerCase())).includes(value.toLowerCase())) {
                // match the search value
                /** @type {?} */
                var index = this.treeNode.title.toLowerCase().indexOf(value.toLowerCase());
                this.highlightKeys = [
                    this.treeNode.title.slice(0, index),
                    this.treeNode.title.slice(index, index + value.length),
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
        if (!this.cdr['destroyed']) {
            this.cdr.detectChanges();
        }
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
        var _this = this;
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
            if (toBoolean(event.ctrlKey)) {
                if (selectedNodesCount) {
                    /** @type {?} */
                    var selectedFiltered = selectedNodes.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return ((n.parentNode === _this.treeNode.parentNode) || (!n.parentNode && !_this.treeNode.parentNode)); }));
                    if (selectedFiltered.length) {
                        this.treeNode.isSelected = true;
                    }
                    else {
                        this.treeNode.isSelected = !this.checkSubTreeSelection();
                    }
                }
                else {
                    this.treeNode.isSelected = true;
                }
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }
        if (this.treeNode.isSelectable &&
            !(this.nzTreeService.nzMultiple && (toBoolean(event.shiftKey) || toBoolean(event.ctrlKey)))) {
            if (!this.treeNode.isSelected) {
                this.treeNode.isSelected = !this.treeNode.isSelected;
            }
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.checkSubTreeSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var hashMap = {};
        stack.push(this.treeNode);
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            if (!hashMap[node.key]) {
                if (node.isSelected) {
                    return true;
                }
                this.visitNode(node, hashMap);
                if (node.children.length) {
                    for (var i = node.children.length - 1; i >= 0; i--) {
                        stack.push(node.children[i]);
                    }
                }
                if (node.parentNode) {
                    stack.push(node.parentNode);
                }
            }
        }
        return false;
    };
    /**
     * @param {?} node
     * @param {?} hashMap
     * @return {?}
     */
    CmacsTreeNodeComponent.prototype.visitNode = /**
     * @param {?} node
     * @param {?} hashMap
     * @return {?}
     */
    function (node, hashMap) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
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
            //this.setClassMap();
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
                    template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.paddingLeft.px]=\"treeNode.isLeaf ? ((selectMode ? 22 : 16) * treeNode.level) : 0\"\r\n  [class.cmacs-tree-child-header]=\"treeNode.isLeaf\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <div [class.cmacs-tree-parent-header]=\"!treeNode.isLeaf\"\r\n       [class.cmacs-tree-node-selected]=\"!treeNode.isLeaf && treeNode.isSelected\"\r\n       [style.border-top-color]=\"selectMode && index ? '#dee0e5' : 'transparent'\"\r\n       [style.paddingLeft.px]=\"!treeNode.isLeaf || !treeNode.parentNode ? 16 * treeNode.level : 0\">\r\n    <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            type=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"checkable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-radio-btn-inner]=\"selectMode && radio\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"inlineEdit && !treeNode.parentNode\">\r\n          <i class=\"iconUILarge-New cmacs-tree-new-icon\" (click)=\"onaddchildevt($event)\"></i>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"treeTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n    </ng-template>\r\n  </div>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [radio]=\"radio\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQ3hCLElBQUksRUFDSixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixRQUFRLEVBQUUsTUFBTSxFQUNoQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxjQUFjLEVBQ2QsWUFBWSxFQUVaLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUFvZ0JFLGdDQUNTLGFBQStCLEVBQzlCLE1BQWMsRUFDZCxRQUFtQixFQUNuQixLQUFpQixFQUNqQixHQUFzQixFQUNILGFBQXNDO1FBTDFELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBdmYxQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBSzdCLGVBQVUsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQzs7UUE4RGhGLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDhCQUF5QixHQUFHLEVBQUUsQ0FBQzs7OztRQUsvQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBOEI7WUFDeEMsR0FBRyxFQUFFLFdBQVc7WUFDaEIsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixJQUFJLEVBQUUsbUJBQW1CO1NBQzFCLENBQUM7Ozs7O1FBTUYsaUJBQVksR0FBRyxFQUFFLENBQUM7O1FBRWxCLGVBQVUsR0FBRyxLQUFLLENBQUM7O1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFvWmhCLENBQUM7SUE1ZUosc0JBQ0ksNkNBQVM7Ozs7UUFLYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQVJELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFVRCxzQkFDSSxvREFBZ0I7Ozs7UUFPcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztRQWREOzs7V0FHRzs7Ozs7OztRQUNILFVBQ3FCLEtBQWM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDakM7UUFDSCxDQUFDOzs7T0FBQTtJQU9ELHNCQUNJLDZDQUFTOzs7O1FBT2I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztRQVhELGNBQWM7Ozs7Ozs7UUFDZCxVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDakM7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLCtDQUFXOzs7O1FBZWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFsQkQsVUFDZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUM1QixrREFBa0Q7WUFDOUMsSUFBSSxLQUFLLElBQUksbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7OztvQkFFdkUsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxhQUFhLEdBQUc7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO29CQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUM1RSxDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQXFDRCxzQkFBSSwwQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBWTs7OztRQUFoQjtZQUNFLDBCQUEwQjtZQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO2dCQUNwRyxDQUFDLENBQUMsTUFBTTtnQkFDUixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1QsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7SUFDSCw0Q0FBVzs7OztJQUFYOztRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUVsRSxJQUFJLENBQUMsV0FBVztZQUNkLEdBQUksSUFBSSxDQUFDLFNBQVMsdUJBQW9CLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1lBQ2pFLEdBQUksSUFBSSxDQUFDLFNBQVMsNEJBQXlCLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFDakUsR0FBSSxJQUFJLENBQUMsU0FBUyw2QkFBMEIsSUFBRyxJQUFJLENBQUMsZUFBZTtZQUNuRSxHQUFJLElBQUksQ0FBQyxTQUFTLCtCQUE0QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUN4RSxHQUFJLElBQUksQ0FBQyxTQUFTLHFDQUFrQyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUNsRixHQUFJLElBQUksQ0FBQyxTQUFTLHVCQUFvQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUNqRSxHQUFJLElBQUksQ0FBQyxTQUFTLHNCQUFtQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztlQUNoRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixHQUFJLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBRyxJQUFJO1lBQ3BDLEdBQUksSUFBSSxDQUFDLFNBQVMsbUJBQWdCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3pELEdBQUksSUFBSSxDQUFDLFNBQVMsbUJBQWdCLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFDeEQsR0FBSSxJQUFJLENBQUMsU0FBUyxvQkFBaUIsSUFBRyxJQUFJLENBQUMsZUFBZTtlQUMzRCxDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixHQUFJLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBRyxJQUFJO1lBQ3BDLEdBQUksSUFBSSxDQUFDLFNBQVMsc0JBQW1CLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN0SCxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQzNCLEdBQUksSUFBSSxDQUFDLFNBQVMsNEJBQXlCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1lBQ3pFLEdBQUksSUFBSSxDQUFDLFNBQVMsdUJBQW9CLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUI7ZUFDckcsQ0FBQztRQUVGLElBQUksQ0FBQyxrQkFBa0I7WUFDckIsR0FBSSxJQUFJLENBQUMsU0FBUywwQkFBdUIsSUFBRyxJQUFJO1lBQ2hELEdBQUksSUFBSSxDQUFDLFNBQVMsK0JBQTRCLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFDcEUsR0FBSSxJQUFJLENBQUMsU0FBUyxnQ0FBNkIsSUFBRyxJQUFJLENBQUMsZUFBZTtZQUN0RSxHQUFJLElBQUksQ0FBQyxTQUFTLG1CQUFnQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtlQUM5RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQjtZQUN6QixHQUFJLElBQUksQ0FBQyxTQUFTLGFBQVUsSUFBRyxJQUFJO1lBQ25DLEdBQUksSUFBSSxDQUFDLFNBQVMscUJBQWtCLElBQUcsSUFBSTtlQUM1QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLHlCQUF5QjtZQUM1QixHQUFJLElBQUksQ0FBQyxTQUFTLGFBQVUsSUFBRyxJQUFJO2VBQ3BDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0lBRUgsQ0FBQzs7Ozs7SUFHRCw0Q0FBVzs7OztJQURYLFVBQ1ksS0FBaUI7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBRUgsd0NBQU87Ozs7O0lBRFAsVUFDUSxLQUFpQjtRQUR6QixpQkF5Q0M7UUF2Q0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBRWhGLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFOztnQkFDeEQsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLE1BQU07WUFDL0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixHQUFHLENBQUMsRUFBRTs7b0JBQ2pELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQkFDM0Ysa0RBQWtEO2dCQUNsRCxtQkFBQSxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUQ7WUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksa0JBQWtCLEVBQUU7O3dCQUNoQixnQkFBZ0IsR0FBRyxhQUFhLENBQUMsTUFBTTs7OztvQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQTdGLENBQTZGLEVBQUM7b0JBQ2pKLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO3dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7cUJBQzFEO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDakM7O29CQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0JBQ3ZGLGtEQUFrRDtnQkFDMUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUM3RjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUN0RDs7Z0JBQ0ssU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNyRixrREFBa0Q7WUFDNUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELHNEQUFxQjs7O0lBQXJCOztZQUNNLEtBQUssR0FBRyxFQUFFOztZQUFFLE9BQU8sR0FBRyxFQUFFO1FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFCLE9BQU0sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2dCQUNwQixJQUFJLEdBQWUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDOUIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDdkIsS0FBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzlCO2lCQUNGO2dCQUNELElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxJQUFJLEVBQUUsT0FBTztRQUNyQixJQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBR0QsMkNBQVU7Ozs7SUFEVixVQUNXLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDdEYsa0RBQWtEO1FBQzlDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBRUgsOENBQWE7Ozs7SUFEYixVQUNjLEtBQWlCO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDekYsa0RBQWtEO1FBQzlDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw2Q0FBWTs7Ozs7SUFBWixVQUFhLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckQsa0JBQWtCO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7O2dCQUMvQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLGtEQUFrRDtZQUM1QyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBYzs7Ozs7SUFBZCxVQUFlLEtBQWlCO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDOztZQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDbkYsa0RBQWtEO1FBQzlDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHOzs7OztJQUNILCtDQUFjOzs7O0lBQWQ7UUFBQSxpQkFLQzs7WUFKTyxTQUFTLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLENBQUM7UUFDNUUsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDhDQUFhOzs7O0lBQWIsVUFBYyxNQUFhO1FBQ3pCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxnREFBZTs7OztJQUFmLFVBQWdCLENBQVk7UUFDMUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUk7WUFDRixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ3hCLGtEQUFrRDtZQUM1QyxtQkFBQSxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FDM0Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLFFBQVE7U0FDVDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O1lBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkYsa0RBQWtEO1FBQzlDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELGdEQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBWTtRQUE1QixpQkFjQztRQWJDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1FBQUM7O2dCQUNSLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUNqRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDaEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ2pDOztnQkFDSyxTQUFTLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3JGLGtEQUFrRDtZQUM1QyxtQkFBQSxtQkFBQSxLQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELCtDQUFjOzs7O0lBQWQsVUFBZSxDQUFZO1FBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1lBQzVCLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3pGO1NBQ0Y7O1lBQ0ssU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRixrREFBa0Q7UUFDOUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsZ0RBQWU7Ozs7SUFBZixVQUFnQixDQUFZO1FBQTVCLGlCQVFDO1FBUEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1FBQUM7WUFDZCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O1lBQ0csU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRixrREFBa0Q7UUFDOUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLENBQVk7UUFBM0IsaUJBaUNDO1FBaENDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7UUFBQztZQUNkLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Z0JBQ2hCLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JHLE9BQU87YUFDUjs7O2dCQUVLLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O2dCQUNwRSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQzs7b0JBRWQsUUFBUSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzFCLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUTtvQkFDbkIsR0FBRyxFQUFFLEtBQUksQ0FBQyxPQUFPO2lCQUNsQixDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLE9BQWdCO29CQUM1QixJQUFJLE9BQU8sRUFBRTt3QkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDOUQ7b0JBQ1gsa0RBQWtEO29CQUN4QyxtQkFBQSxtQkFBQSxLQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25FLGtEQUFrRDtvQkFDeEMsbUJBQUEsbUJBQUEsS0FBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JFLGtEQUFrRDtnQkFDMUMsbUJBQUEsbUJBQUEsS0FBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDBDQUFTOzs7O0lBQWpCO1FBQ0Ysa0RBQWtEO1FBQzlDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsOENBQWE7Ozs7SUFBYixVQUFjLENBQVk7UUFBMUIsaUJBVUM7UUFUQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7UUFBQztZQUNkLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTs7b0JBQ2QsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDckYsa0RBQWtEO2dCQUMxQyxtQkFBQSxtQkFBQSxLQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw4Q0FBYTs7OztJQUFiO1FBQUEsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQztZQUM1QixJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsU0FBUyxDQUFZLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztxQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVM7Ozs7Z0JBQUMsVUFBQyxDQUFZLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7Z0JBQ3hELFNBQVMsQ0FBWSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7cUJBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTOzs7O2dCQUFDLFVBQUMsQ0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO2dCQUN4RCxTQUFTLENBQVksS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO3FCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxVQUFDLENBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztnQkFDdkQsU0FBUyxDQUFZLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztxQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVM7Ozs7Z0JBQUMsVUFBQyxDQUFZLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7Z0JBQ3hELFNBQVMsQ0FBWSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7cUJBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTOzs7O2dCQUFDLFVBQUMsQ0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO2dCQUN2RCxTQUFTLENBQVksS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDO3FCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxVQUFDLENBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDhDQUFhOzs7O0lBQWIsVUFBYyxLQUFTO1FBQ3JCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsNkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBV0QseUNBQVE7OztJQUFSO1FBQUEsaUJBNEJDO1FBM0JDLDBDQUEwQztRQUMxQyxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsT0FBTztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYTthQUNmLG1CQUFtQixFQUFFO2FBQ3JCLElBQUk7UUFDWCxrREFBa0Q7UUFDMUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsbUJBQUEsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBcEMsQ0FBb0MsRUFBQyxFQUNwRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVM7OztRQUFDO1lBQ1QscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbGpCRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1cEtBQStDO29CQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDOztpQkFDN0I7Ozs7Z0JBWFEsZ0JBQWdCO2dCQXJCdkIsTUFBTTtnQkFLTixTQUFTO2dCQVRULFVBQVU7Z0JBRlYsaUJBQWlCO2dCQXNCakIsc0JBQXNCLHVCQWloQm5CLElBQUksWUFBSSxRQUFROzs7OEJBL2ZsQixTQUFTLFNBQUMsYUFBYTsyQkFFdkIsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBRUwsTUFBTTs0QkFFTixLQUFLO21DQWNMLEtBQUs7NEJBYUwsS0FBSzs4QkFZTCxLQUFLOzhCQXFJTCxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVVwQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQXlFaEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FZbkMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE1UmQ7UUFBZixZQUFZLEVBQUU7OzREQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7OERBQXFCO0lBRXBCO1FBQWYsWUFBWSxFQUFFOzs2REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7aUVBQXVCO0lBQ3RCO1FBQWYsWUFBWSxFQUFFOzsrREFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7NERBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzs4REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7O3lEQUFlO0lBMmhCekMsNkJBQUM7Q0FBQSxBQW5qQkQsSUFtakJDO1NBemlCWSxzQkFBc0I7OztJQUNqQyw2Q0FBa0Q7O0lBRWxELDBDQUE4Qjs7SUFDOUIsMENBQTJDOztJQUMzQyw0Q0FBNkM7O0lBQzdDLDhDQUE4RDs7SUFDOUQsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLCtDQUErQzs7SUFDL0MsNkNBQTZDOztJQUM3Qyw0Q0FBNEM7O0lBQzVDLDBDQUEwQzs7SUFDMUMsNENBQTRDOztJQUM1Qyx1Q0FBdUM7O0lBQ3ZDLHVDQUF1Qjs7SUFDdkIsOENBQXlDOztJQUN6Qyw0Q0FBK0U7O0lBRS9FLDRDQUFnRjs7SUE4RGhGLDJDQUF1Qjs7SUFDdkIsK0NBQTZCOztJQUM3Qiw2Q0FBaUI7O0lBQ2pCLHFEQUF5Qjs7SUFDekIsb0RBQXdCOztJQUN4QixxREFBeUI7O0lBQ3pCLHdEQUE0Qjs7SUFDNUIsMkRBQStCOzs7OztJQUsvQiwwQ0FBeUI7O0lBQ3pCLHlDQUFZOztJQUNaLDhDQUlFOzs7OztJQU1GLDhDQUFrQjs7SUFFbEIsNENBQW1COztJQUVuQiw0Q0FBbUI7O0lBOFlqQiwrQ0FBc0M7Ozs7O0lBQ3RDLHdDQUFzQjs7Ozs7SUFDdEIsMENBQTJCOzs7OztJQUMzQix1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUE4Qjs7SUFDOUIsK0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUcmVlTm9kZSxcclxuICB0b0Jvb2xlYW5cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1ub2RlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZU5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdFbGVtZW50JykgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHRyZWVOb2RlOiBOelRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBAT3V0cHV0KCkgb25hZGRjaGlsZDogRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdnYWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kRHJhZ0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIGV4cGFuZEFsbCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZSAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgc2V0XHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkhLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRyZWVOb2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoaW5kZXgsIGluZGV4ICsgdmFsdWUubGVuZ3RoKSxcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLnRpdGxlLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCB0aGlzLnRyZWVOb2RlLnRpdGxlLmxlbmd0aClcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgdmFyXHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBoaWdobGlnaHRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG56Tm9kZUNsYXNzID0ge307XHJcbiAgbnpOb2RlU3dpdGNoZXJDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50SWNvbkNsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBkcmFnIHZhclxyXG4gICAqL1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnUG9zID0gMjtcclxuICBkcmFnUG9zQ2xhc3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnMCc6ICdkcmFnLW92ZXInLFxyXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxyXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgc2V0XHJcbiAgICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9zZWFyY2hWYWx1ZSA9ICcnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfZHJhZ2dhYmxlID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9leHBhbmRBbGwgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IG56SWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU5vZGUuaWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlICYmICF0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dMaW5lSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5zaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dTd2l0Y2hJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzTGVhZiAmJiAhdGhpcy5zaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIHRvIGhpZGUgdW5tYXRjaGVkIG5vZGVzXHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hWYWx1ZSAmJiB0aGlzLmhpZGVVbk1hdGNoZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNNYXRjaGVkICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWRcclxuICAgICAgPyAnbm9uZSdcclxuICAgICAgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IG5vZGUgY2xhc3NcclxuICAgKi9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlZml4Q2xzID0gdGhpcy5zZWxlY3RNb2RlID8gJ2FudC1zZWxlY3QtdHJlZScgOiAnYW50LXRyZWUnO1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMudHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXNlbGVjdGVkYF06IHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1sb2FkaW5nYF06IHRoaXMudHJlZU5vZGUuaXNMb2FkaW5nXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVTd2l0Y2hlckNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLnRyZWVOb2RlLmlzTGVhZixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDaGVja2JveENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLnJhZGlvID9cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkubGVuZ3RoICYmIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKVswXS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5XHJcbiAgICAgICAgOiB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMudHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlcmBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLXNlbGVjdGVkYF06IHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcy5jZHJbJ2Rlc3Ryb3llZCddKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RNb2RlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56VHJlZVNlcnZpY2UubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlcyA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZXNDb3VudCA9IHNlbGVjdGVkTm9kZXMubGVuZ3RoO1xyXG4gICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSAmJiBzZWxlY3RlZE5vZGVzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWxlY3RlZE11bHRpcGxlJywgIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTm9kZXNDb3VudCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJlZCA9IHNlbGVjdGVkTm9kZXMuZmlsdGVyKG4gPT4gKChuLnBhcmVudE5vZGUgPT09IHRoaXMudHJlZU5vZGUucGFyZW50Tm9kZSkgfHwgKCFuLnBhcmVudE5vZGUgJiYgIXRoaXMudHJlZU5vZGUucGFyZW50Tm9kZSkpKTtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcmVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkID0gIXRoaXMuY2hlY2tTdWJUcmVlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzU2VsZWN0YWJsZSAmJlxyXG4gICAgICAhKHRoaXMubnpUcmVlU2VydmljZS5uek11bHRpcGxlICYmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpIHx8IHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSkpKVxyXG4gICAge1xyXG4gICAgICBpZiAoIXRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjbGljaycsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1N1YlRyZWVTZWxlY3Rpb24oKSB7XHJcbiAgICBsZXQgc3RhY2sgPSBbXSwgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaCh0aGlzLnRyZWVOb2RlKTtcclxuXHJcbiAgICB3aGlsZShzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgbGV0IG5vZGU6IE56VHJlZU5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgaWYgKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKTtcclxuICAgICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgZm9yKGxldCBpID0gbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihub2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKSB7XHJcbiAgICBpZighaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlLmtleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZGJsY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcclxuICBuekNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjb2xsYXBzZSBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrRXhwYW5kKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMudHJlZU5vZGUuaXNMb2FkaW5nICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAvLyBzZXQgYXN5bmMgc3RhdGVcclxuICAgICAgaWYgKHRoaXMuYXN5bmNEYXRhICYmIHRoaXMudHJlZU5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZDtcclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdleHBhbmQnLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2sgbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0NoZWNrQm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudHJlZU5vZGUuaXNDaGVja2VkID0gIXRoaXMudHJlZU5vZGUuaXNDaGVja2VkO1xyXG4gICAgdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyYWdDbGFzcyA9IFsnZHJhZy1vdmVyLWdhcC10b3AnLCAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLCAnZHJhZy1vdmVyJ107XHJcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbmFkZGNoaWxkZXZ0KCRldmVudDogRXZlbnQpICB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMub25hZGRjaGlsZC5lbWl0KHRoaXMudHJlZU5vZGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGllIHRocm93IGVycm9yXHJcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICBlLmRhdGFUcmFuc2ZlciEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMudHJlZU5vZGUua2V5ISk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBlbXB0eVxyXG4gICAgfVxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZSh0aGlzLnRyZWVOb2RlKTtcclxuICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnc3RhcnQnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIHJlc2V0IHBvc2l0aW9uXHJcbiAgICB0aGlzLmRyYWdQb3MgPSAyO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcclxuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5rZXkgIT09IHRoaXMudHJlZU5vZGUua2V5ICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID0gdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNEcm9wUG9zaXRpb24oZSk7XHJcbiAgICBpZiAodGhpcy5kcmFnUG9zICE9PSBkcm9wUG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICB0aGlzLmRyYWdQb3MgPSBkcm9wUG9zaXRpb247XHJcbiAgICAgIC8vIGxlYWYgbm9kZSB3aWxsIHBhc3NcclxuICAgICAgaWYgKCEodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMudHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmRyYWdQb3NDbGFzc1t0aGlzLmRyYWdQb3NdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnb3ZlcicsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnTGVhdmUoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdsZWF2ZScsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmICghbm9kZSB8fCAobm9kZSAmJiBub2RlLmtleSA9PT0gdGhpcy50cmVlTm9kZS5rZXkpIHx8ICh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy50cmVlTm9kZS5pc0xlYWYpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHBhc3MgaWYgbm9kZSBpcyBsZWFmTm9cclxuICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcm9wJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdFbmRFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4gICAgICBpZiAodGhpcy5iZWZvcmVEcm9wKSB7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVEcm9wKHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICAgIGRyYWdOb2RlOiB0aGlzLm5ld01ldGhvZCgpLFxyXG4gICAgICAgICAgbm9kZTogdGhpcy50cmVlTm9kZSxcclxuICAgICAgICAgIHBvczogdGhpcy5kcmFnUG9zXHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKChjYW5Ecm9wOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMudHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XHJcbiAgICAgICAgICB9XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcmFnRW5kRXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJlZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMudHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZXdNZXRob2QoKTogTnpUcmVlTm9kZSB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpITtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcclxuICAgICAgaWYgKCF0aGlzLmJlZm9yZURyb3ApIHtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnm5HlkKzmi5bmi73kuovku7ZcclxuICAgKi9cclxuICBoYW5kRHJhZ0V2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VudGVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnTGVhdmUoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Ryb3AnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuek5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBpbml0IGV4cGFuZGVkIC8gc2VsZWN0ZWQgLyBjaGVja2VkIGxpc3RcclxuICAgIGlmKHRoaXMuaW5saW5lRWRpdCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldE5vZGVBY3RpdmUodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPXHJcbiAgICB0aGlzLnRyZWVOb2RlLmNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZShcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLm5vZGUhLmtleSA9PT0gdGhpcy50cmVlTm9kZS5rZXkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=