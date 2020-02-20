/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, toBoolean, InputBoolean, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core';
import { CmacsTreeService } from './cmacs-tree.service';
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var CmacsTreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsTreeComponent, _super);
    function CmacsTreeComponent(nzTreeService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.showIcon = false;
        _this.showExpand = true;
        _this.showLine = false;
        _this.checkable = false;
        _this.asyncData = false;
        _this.draggable = false;
        _this.expandAll = false;
        _this.hideUnMatched = false;
        _this.selectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzBlockNode = false;
        _this.inlineEdit = false;
        _this.radio = false;
        _this.onaddchild = new EventEmitter();
        /**
         * @deprecated use
         * expandAll instead
         */
        _this.defaultExpandAll = false;
        // model bind
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.searchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * searchValueChange instead
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        // tslint:disable-next-line: variable-name
        _this._nzMultiple = false;
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        return _this;
    }
    Object.defineProperty(CmacsTreeComponent.prototype, "nzMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMultiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzMultiple = toBoolean(value);
            ((/** @type {?} */ (this.nzTreeService))).nzMultiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated use
         * nzExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * nzExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated use
         * nzSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * nzSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated use
         * nzCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * nzCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "searchValue", {
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
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (!value.length && this.inlineEdit) {
                this.nzNodes.forEach((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    node.isExpanded = true;
                }));
                this.cdr.detectChanges();
            }
            if (isNotNil(value)) {
                this.searchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                // tslint:disable-next-line: deprecation
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed
         */
        get: /**
         * To render nodes if root is changed
         * @return {?}
         */
        function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsTreeComponent.prototype.onaddchildevt = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onaddchild.emit($event);
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.showLine,
            _a[this.prefixCls + "-icon-hide"] = !this.showIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.draggable,
            _a['ant-select-tree'] = this.selectMode,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.initNzData(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.initNzData = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.radio ? true : this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeComponent.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.checkable) {
            /** @type {?} */
            var nodesSelected = (/** @type {?} */ (this.nzTreeService.getSelectedNodeList()));
            if (nodesSelected.length) {
                this.nzTreeService.calcSelectedKeys([], this.nzNodes, this.nzMultiple);
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('escape', nodesSelected.map((/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) { return n.key; })), event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    if (_this.nzMultiple && _this.getSelectedNodeList().length === 1) {
                        _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    }
                    _this.nzClick.emit(data);
                    break;
                case 'escape':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
                case 'selectedMultiple':
                    _this.onSelectionMultiple(data);
                    break;
            }
        }));
    };
    /**
     * @param {?} selectedNode
     * @return {?}
     */
    CmacsTreeComponent.prototype.onSelectionMultiple = /**
     * @param {?} selectedNode
     * @return {?}
     */
    function (selectedNode) {
        var _this = this;
        /** @type {?} */
        var flatNodesList = [];
        /** @type {?} */
        var idxs = [];
        /** @type {?} */
        var nodesSelected = this.nzTreeService.getSelectedNodeList();
        /** @type {?} */
        var nodesSelectedCount = nodesSelected.length;
        this.nzNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            flatNodesList = _this.convertTreeToList(node, selectedNode.node, nodesSelected[nodesSelectedCount - 1], idxs, flatNodesList);
        }));
        /** @type {?} */
        var i = idxs[0];
        for (i; i <= idxs[1]; i++) {
            if (flatNodesList[i].isSelectable) {
                flatNodesList[i].isSelected = true;
            }
        }
        nodesSelected = (/** @type {?} */ (this.nzTreeService.getSelectedNodeList()));
        /** @type {?} */
        var emitStructure = {};
        emitStructure = {
            eventName: 'selectedMultiple',
            selectedKeys: nodesSelected.map((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key; })),
            node: selectedNode.node,
            event: null
        };
        this.nzClick.emit((/** @type {?} */ (emitStructure)));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = toBoolean(changes.nzCheckStrictly.currentValue);
        }
        if (changes.nzMultiple) {
            this._nzMultiple = toBoolean(changes.nzMultiple.currentValue);
            ((/** @type {?} */ (this.nzTreeService))).nzMultiple = toBoolean(changes.nzMultiple.currentValue);
        }
    };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    CmacsTreeComponent.prototype.addParent = /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    function (node, index) {
        if (index === void 0) { index = null; }
        var _a, _b;
        /** @type {?} */
        var parent = this.coerceTreeNodes(node);
        if (index) {
            (_a = this.nzTreeService.rootNodes).splice.apply(_a, tslib_1.__spread([index, 0], parent));
        }
        else {
            (_b = this.nzTreeService.rootNodes).push.apply(_b, tslib_1.__spread(parent));
        }
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} root
     * @param {?} endNode
     * @param {?} startNode
     * @param {?} idxs
     * @param {?} array
     * @return {?}
     */
    CmacsTreeComponent.prototype.convertTreeToList = /**
     * @param {?} root
     * @param {?} endNode
     * @param {?} startNode
     * @param {?} idxs
     * @param {?} array
     * @return {?}
     */
    function (root, endNode, startNode, idxs, array) {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (endNode.key === node.key || startNode.key === node.key) {
                idxs.push(array.length - 1);
            }
            if (node.children.length) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return array;
    };
    /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    CmacsTreeComponent.prototype.visitNode = /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    function (node, hashMap, array) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
            array.push(node);
        }
    };
    CmacsTreeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-tree',
                    exportAs: 'cmacsTree',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes; index as i\">\r\n    <cmacs-tree-node\r\n      [treeNode]=\"node\"\r\n      [index]=\"i\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [inlineEdit]=\"inlineEdit\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [showExpand]=\"showExpand\"\r\n      [asyncData]=\"asyncData\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [radio]=\"radio\"\r\n      [treeTemplate]=\"treeTemplate\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [noAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </cmacs-tree-node>\r\n  </ng-container>\r\n</ul>\r\n",
                    providers: [
                        CmacsTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], CmacsTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsTreeComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}.ant-tree .ant-tree-treenode-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5;border-top:1px solid #dee0e5}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}:host ::ng-deep .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}:host ::ng-deep .ant-tree li.drag-over,:host ::ng-deep .ant-tree li.drag-over-gap-bottom,:host ::ng-deep .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header{border-bottom:1px solid #2a7cff}:host ::ng-deep .ant-tree li.drag-over-gap-top,:host ::ng-deep .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{border-top:1px solid #2a7cff}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeComponent.ctorParameters = function () { return [
        { type: CmacsTreeService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTreeComponent.propDecorators = {
        showIcon: [{ type: Input }],
        showExpand: [{ type: Input }],
        showLine: [{ type: Input }],
        expandedIcon: [{ type: Input }],
        checkable: [{ type: Input }],
        asyncData: [{ type: Input }],
        draggable: [{ type: Input }],
        expandAll: [{ type: Input }],
        hideUnMatched: [{ type: Input }],
        selectMode: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzBlockNode: [{ type: Input }],
        inlineEdit: [{ type: Input }],
        radio: [{ type: Input }],
        onaddchild: [{ type: Output }],
        defaultExpandAll: [{ type: Input }],
        beforeDrop: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzData: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzDefaultSelectedKeys: [{ type: Input }],
        nzDefaultCheckedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        searchValue: [{ type: Input }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        searchValueChange: [{ type: Output }],
        nzOnSearchNode: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }],
        treeTemplate: [{ type: ContentChild, args: ['treeTemplate',] }],
        onKeydownHandler: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "checkable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "asyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "draggable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "expandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "hideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "selectMode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzBlockNode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "inlineEdit", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "radio", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "defaultExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], CmacsTreeComponent.prototype, "nzMultiple", null);
    return CmacsTreeComponent;
}(NzTreeBase));
export { CmacsTreeComponent };
if (false) {
    /** @type {?} */
    CmacsTreeComponent.prototype.showIcon;
    /** @type {?} */
    CmacsTreeComponent.prototype.showExpand;
    /** @type {?} */
    CmacsTreeComponent.prototype.showLine;
    /** @type {?} */
    CmacsTreeComponent.prototype.expandedIcon;
    /** @type {?} */
    CmacsTreeComponent.prototype.checkable;
    /** @type {?} */
    CmacsTreeComponent.prototype.asyncData;
    /** @type {?} */
    CmacsTreeComponent.prototype.draggable;
    /** @type {?} */
    CmacsTreeComponent.prototype.expandAll;
    /** @type {?} */
    CmacsTreeComponent.prototype.hideUnMatched;
    /** @type {?} */
    CmacsTreeComponent.prototype.selectMode;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzBlockNode;
    /** @type {?} */
    CmacsTreeComponent.prototype.inlineEdit;
    /** @type {?} */
    CmacsTreeComponent.prototype.radio;
    /** @type {?} */
    CmacsTreeComponent.prototype.onaddchild;
    /**
     * @deprecated use
     * expandAll instead
     * @type {?}
     */
    CmacsTreeComponent.prototype.defaultExpandAll;
    /** @type {?} */
    CmacsTreeComponent.prototype.beforeDrop;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.searchValueChange;
    /**
     * @deprecated use
     * searchValueChange instead
     * @type {?}
     */
    CmacsTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzClick;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    CmacsTreeComponent.prototype.treeTemplate;
    /** @type {?} */
    CmacsTreeComponent.prototype._searchValue;
    /** @type {?} */
    CmacsTreeComponent.prototype._nzMultiple;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    CmacsTreeComponent.prototype.destroy$;
    /** @type {?} */
    CmacsTreeComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsTreeComponent.prototype.classMap;
    /** @type {?} */
    CmacsTreeComponent.prototype.onChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeComponent.prototype.cdr;
    /** @type {?} */
    CmacsTreeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQUUsWUFBWSxFQUMxQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFHWixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFOUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsa0JBQXFDLEVBQ3JDLFdBQTZCO0lBRTdCLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDL0QsQ0FBQztBQUVEO0lBcUJ3Qyw4Q0FBVTtJQXlMaEQsNEJBQ0UsYUFBK0IsRUFDdkIsR0FBc0IsRUFDSCxXQUFvQztRQUhqRSxZQUtFLGtCQUFNLGFBQWEsQ0FBQyxTQUNyQjtRQUpTLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsaUJB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Qzs7SUFDNUMsNkNBQWlEOztJQUNqRCx5Q0FBNkM7O0lBQzdDLHdDQUE0Qzs7SUFDNUMsbUNBQXVDOztJQUN2Qyx3Q0FBZ0Y7Ozs7OztJQU1oRiw4Q0FBa0Q7O0lBQ2xELHdDQUErRTs7SUE4Ri9FLGtEQUErRjs7SUFDL0Ysa0RBQStGOztJQUMvRixpREFBOEY7O0lBRTlGLCtDQUEyRjs7Ozs7O0lBSzNGLDRDQUF3Rjs7SUFFeEYscUNBQWlGOztJQUNqRix3Q0FBb0Y7O0lBQ3BGLDJDQUF1Rjs7SUFDdkYsOENBQTBGOztJQUMxRiw0Q0FBd0Y7O0lBRXhGLDJDQUF1Rjs7SUFDdkYsMkNBQXVGOztJQUN2RiwwQ0FBc0Y7O0lBQ3RGLDJDQUF1Rjs7SUFDdkYsc0NBQWtGOztJQUNsRix5Q0FBcUY7O0lBRXJGLDBDQUE2RDs7SUFFN0QsMENBQXFCOztJQUVyQix5Q0FBb0I7O0lBQ3BCLDhDQUEwRTs7SUFDMUUsc0NBQXlCOztJQUN6Qix1Q0FBdUI7O0lBQ3ZCLHNDQUFjOztJQUVkLHNDQUFxRDs7SUFDckQsdUNBQW1DOzs7OztJQW9DakMsaUNBQThCOztJQUM5Qix5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTa2lwU2VsZixcclxuICBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlLFxyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56VHJlZU5vZGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlXHJcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWUnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgQ21hY3NUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFkaW8gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25hZGRjaGlsZDogRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBleHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuek11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICh0aGlzLm56VHJlZVNlcnZpY2UgYXMgQ21hY3NUcmVlU2VydmljZSkubnpNdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9uek11bHRpcGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56RGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuekV4cGFuZGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56U2VsZWN0ZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpDaGVja2VkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xyXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGggJiYgdGhpcy5pbmxpbmVFZGl0KSB7XHJcbiAgICAgIHRoaXMubnpOb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGVsIGJpbmRcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogc2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVUZW1wbGF0ZScpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9uek11bHRpcGxlID0gZmFsc2U7XHJcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5zaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMuc2hvd0ljb24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLm56QmxvY2tOb2RlLFxyXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMuZHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLnNlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLnJhZGlvID8gdHJ1ZSA6IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5ZG93bkhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICBjb25zdCBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKSBhcyBhbnk7XHJcbiAgICAgIGlmIChub2Rlc1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKFtdLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdlc2NhcGUnLCBub2Rlc1NlbGVjdGVkLm1hcChuID0+IG4ua2V5KSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcclxuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgaWYodGhpcy5uek11bHRpcGxlICYmIHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2VzY2FwZSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekNoZWNrQm94Q2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56RGJsQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDb250ZXh0TWVudS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8vIGRyYWcgZHJvcFxyXG4gICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzZWxlY3RlZE11bHRpcGxlJzpcclxuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGlvbk11bHRpcGxlKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25NdWx0aXBsZShzZWxlY3RlZE5vZGU6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XHJcbiAgICBsZXQgZmxhdE5vZGVzTGlzdDogTnpUcmVlTm9kZVtdID0gW10sIGlkeHMgPSBbXTtcclxuICAgIGxldCBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcclxuICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWRDb3VudCA9IG5vZGVzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgdGhpcy5uek5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIGZsYXROb2Rlc0xpc3QgPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KG5vZGUsIHNlbGVjdGVkTm9kZS5ub2RlLCBub2Rlc1NlbGVjdGVkW25vZGVzU2VsZWN0ZWRDb3VudCAtIDFdLCAgaWR4cywgZmxhdE5vZGVzTGlzdCk7XHJcbiAgICB9KTtcclxuICAgIGxldCBpID0gaWR4c1swXTtcclxuICAgIGZvciAoaTsgaSA8PSBpZHhzWzFdOyBpKyspIHtcclxuICAgICAgaWYgKGZsYXROb2Rlc0xpc3RbaV0uaXNTZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgZmxhdE5vZGVzTGlzdFtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm9kZXNTZWxlY3RlZCA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCkgYXMgYW55O1xyXG4gICAgbGV0IGVtaXRTdHJ1Y3R1cmU6IGFueSA9IHt9O1xyXG4gICAgZW1pdFN0cnVjdHVyZSA9IHtcclxuICAgICAgZXZlbnROYW1lOiAnc2VsZWN0ZWRNdWx0aXBsZScsXHJcbiAgICAgIHNlbGVjdGVkS2V5czogbm9kZXNTZWxlY3RlZC5tYXAobiA9PiBuLmtleSksXHJcbiAgICAgIG5vZGU6IHNlbGVjdGVkTm9kZS5ub2RlLFxyXG4gICAgICBldmVudDogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KGVtaXRTdHJ1Y3R1cmUgYXMgYW55KTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKGNoYW5nZXMubnpNdWx0aXBsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAodGhpcy5uelRyZWVTZXJ2aWNlIGFzIENtYWNzVHJlZVNlcnZpY2UpLm56TXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQYXJlbnQobm9kZTogYW55LCBpbmRleCA9IG51bGwpIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyhub2RlKTtcclxuICAgIGlmIChpbmRleCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLnNwbGljZSggaW5kZXgsIDAsIC4uLnBhcmVudCApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2Rlcy5wdXNoKC4uLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRyZWVUb0xpc3Qocm9vdCwgZW5kTm9kZSwgc3RhcnROb2RlLCBpZHhzLCBhcnJheSkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXAsIGFycmF5KTtcclxuICAgICAgaWYgKGVuZE5vZGUua2V5ID09PSBub2RlLmtleSB8fCBzdGFydE5vZGUua2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIGlkeHMucHVzaChhcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpIHtcclxuICAgIGlmKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICBoYXNoTWFwW25vZGUua2V5XSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==