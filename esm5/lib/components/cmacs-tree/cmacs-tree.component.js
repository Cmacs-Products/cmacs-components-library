/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import cloneDeep from 'lodash/cloneDeep';
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
        _this.displayDataAsyncLoading = [];
        _this.treeDataAsyncLoading = [];
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
        _this.cmacsAsyncData = false;
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
            if (this.cmacsAsyncData) {
                this.treeDataAsyncLoading = value;
                this.displayDataAsyncLoading = this.getFirstLevelNodes(this.treeDataAsyncLoading);
                this.initNzData(this.displayDataAsyncLoading);
            }
            else {
                this.initNzData(value);
            }
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
            if (!value.length && this.selectMode && this.checkable) {
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
    CmacsTreeComponent.prototype.onKeyupHandler = /**
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
                    if (_this.cmacsAsyncData) {
                        _this.onClickAsyncNode(data);
                    }
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
        /** @type {?} */
        var nodesSelected = this.nzTreeService.getSelectedNodeList();
        /** @type {?} */
        var nodesSelectedCount = nodesSelected.length;
        /** @type {?} */
        var states = { startNodeFound: false, endNodeFound: false };
        for (var i = 0; i < this.nzNodes.length; i++) {
            if (states.startNodeFound && states.endNodeFound) {
                break;
            }
            states = this.convertTreeToList(this.nzNodes[i], selectedNode.node, nodesSelected[nodesSelectedCount - 1], states.startNodeFound, states.endNodeFound);
        }
        nodesSelected = (/** @type {?} */ (this.nzTreeService.getSelectedNodeList()));
        /** @type {?} */
        var emitStructure = {};
        emitStructure = {
            eventName: 'selectedMultiple',
            selectedKeys: nodesSelected,
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
        if (index !== undefined && index !== null) {
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
     * @param {?} startNodeFound
     * @param {?} endNodeFound
     * @return {?}
     */
    CmacsTreeComponent.prototype.convertTreeToList = /**
     * @param {?} root
     * @param {?} endNode
     * @param {?} startNode
     * @param {?} startNodeFound
     * @param {?} endNodeFound
     * @return {?}
     */
    function (root, endNode, startNode, startNodeFound, endNodeFound) {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            this.visitNode(node, hashMap);
            if (endNode.key === node.key) {
                endNodeFound = true;
            }
            if (startNode.key === node.key) {
                startNodeFound = true;
            }
            if (!startNode.parentNode && !node.parentNode && (startNodeFound || endNodeFound)) {
                node.isSelected = true;
            }
            if ((startNode.parentNode === node.parentNode) && (startNodeFound || endNodeFound)) {
                node.isSelected = true;
            }
            if (startNodeFound && endNodeFound) {
                return {
                    startNodeFound: startNodeFound,
                    endNodeFound: endNodeFound
                };
            }
            if (node.children.length) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return {
            startNodeFound: startNodeFound,
            endNodeFound: endNodeFound
        };
    };
    /**
     * @param {?} node
     * @param {?} hashMap
     * @return {?}
     */
    CmacsTreeComponent.prototype.visitNode = /**
     * @param {?} node
     * @param {?} hashMap
     * @return {?}
     */
    function (node, hashMap) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
        }
    };
    /* Cmacs Async Data Loading */
    /* Cmacs Async Data Loading */
    /**
     * @param {?} subTree
     * @return {?}
     */
    CmacsTreeComponent.prototype.getFirstLevelNodes = /* Cmacs Async Data Loading */
    /**
     * @param {?} subTree
     * @return {?}
     */
    function (subTree) {
        /** @type {?} */
        var subTreeDeepCopy = [];
        if (subTree.length) {
            subTreeDeepCopy = cloneDeep(subTree);
        }
        else {
            subTreeDeepCopy = subTree.children ? cloneDeep(subTree.children) : [];
        }
        /** @type {?} */
        var firstLevelNodes = [];
        for (var i = 0; i < subTreeDeepCopy.length; i++) {
            /** @type {?} */
            var node = subTreeDeepCopy[i];
            node.children = [];
            firstLevelNodes.push(node);
        }
        return firstLevelNodes;
    };
    /**
     * @param {?} treeData
     * @param {?} key
     * @return {?}
     */
    CmacsTreeComponent.prototype.searchTree = /**
     * @param {?} treeData
     * @param {?} key
     * @return {?}
     */
    function (treeData, key) {
        for (var n = 0; n < treeData.length; n++) {
            /** @type {?} */
            var root = this.treeDataAsyncLoading[n];
            /** @type {?} */
            var node = this.searchSubTree(root, key);
            if (node) {
                return node;
            }
        }
        return null;
    };
    /**
     * @param {?} root
     * @param {?} key
     * @return {?}
     */
    CmacsTreeComponent.prototype.searchSubTree = /**
     * @param {?} root
     * @param {?} key
     * @return {?}
     */
    function (root, key) {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            /** @type {?} */
            var node = stack.pop();
            this.visitNode(node, hashMap);
            if (key === node.key) {
                return node;
            }
            if (node.children && node.children.length) {
                for (var i = 0; i < node.children.length; i++) {
                    stack.push(node.children[i]);
                }
            }
        }
        return null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsTreeComponent.prototype.onClickAsyncNode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        // load child async
        if (event.eventName === 'expand') {
            /** @type {?} */
            var node_1 = event.node;
            if (node_1 && node_1.isExpanded) {
                this.loadNodeChildren(node_1.key).then((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    node_1.addChildren(data);
                }));
            }
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CmacsTreeComponent.prototype.loadNodeChildren = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var subTree = _this.searchTree(_this.treeDataAsyncLoading, key);
            console.log('SubTree', subTree);
            /** @type {?} */
            var firstLevelChildren = _this.getFirstLevelNodes(subTree);
            console.log('First Level Children', firstLevelChildren);
            setTimeout((/**
             * @return {?}
             */
            function () {
                resolve(firstLevelChildren);
            }), 500);
        }));
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
                    styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff!important}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree li.ant-tree-treenode-checkbox-checked .ant-tree-child-tree,:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5;border-top:1px solid #dee0e5}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}:host ::ng-deep .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}:host ::ng-deep .ant-tree li.drag-over,:host ::ng-deep .ant-tree li.drag-over-gap-bottom,:host ::ng-deep .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header{border-bottom:1px solid #2a7cff}:host ::ng-deep .ant-tree li.drag-over-gap-top,:host ::ng-deep .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{border-top:1px solid #2a7cff}:host ::ng-deep .ant-tree li span.ant-tree-switcher{position:relative;z-index:1}::ng-deep .cmacs-context-menu-overlay{position:absolute;top:0;left:0;width:100%;height:100%}"]
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
        cmacsAsyncData: [{ type: Input }],
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
        onKeyupHandler: [{ type: HostListener, args: ['document:keyup.escape', ['$event'],] }]
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
    ], CmacsTreeComponent.prototype, "cmacsAsyncData", void 0);
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
    CmacsTreeComponent.prototype.displayDataAsyncLoading;
    /** @type {?} */
    CmacsTreeComponent.prototype.treeDataAsyncLoading;
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
    CmacsTreeComponent.prototype.cmacsAsyncData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQUUsWUFBWSxFQUMxQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBRXpDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFHWixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFJOUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsa0JBQXFDLEVBQ3JDLFdBQTZCO0lBRTdCLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDL0QsQ0FBQztBQUVEO0lBcUJ3Qyw4Q0FBVTtJQW1NaEQsNEJBQ0UsYUFBK0IsRUFDdkIsR0FBc0IsRUFDSCxXQUFvQztRQUhqRSxZQUtFLGtCQUFNLGFBQWEsQ0FBQyxTQUNyQjtR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S2xEO1FBREMsWUFBWSxFQUFFOzs7d0RBSWQ7SUFnYkgseUJBQUM7Q0FBQSxBQXRlRCxDQXFCd0MsVUFBVSxHQWlkakQ7U0FqZFksa0JBQWtCOzs7SUFDN0IscURBQTZCOztJQUM3QixrREFBMEI7O0lBRTFCLHNDQUEwQzs7SUFDMUMsd0NBQTJDOztJQUMzQyxzQ0FBMEM7O0lBQzFDLDBDQUE4RDs7SUFDOUQsdUNBQTJDOztJQUMzQyx1Q0FBMkM7O0lBQzNDLHVDQUEyQzs7SUFDM0MsdUNBQTJDOztJQUMzQywyQ0FBK0M7O0lBQy9DLHdDQUE0Qzs7SUFDNUMsNkNBQWlEOztJQUNqRCx5Q0FBNkM7O0lBQzdDLHdDQUE0Qzs7SUFDNUMsbUNBQXVDOztJQUN2Qyw0Q0FBZ0Q7O0lBQ2hELHdDQUFnRjs7Ozs7O0lBTWhGLDhDQUFrRDs7SUFDbEQsd0NBQStFOztJQW9HL0Usa0RBQStGOztJQUMvRixrREFBK0Y7O0lBQy9GLGlEQUE4Rjs7SUFFOUYsK0NBQTJGOzs7Ozs7SUFLM0YsNENBQXdGOztJQUV4RixxQ0FBaUY7O0lBQ2pGLHdDQUFvRjs7SUFDcEYsMkNBQXVGOztJQUN2Riw4Q0FBMEY7O0lBQzFGLDRDQUF3Rjs7SUFFeEYsMkNBQXVGOztJQUN2RiwyQ0FBdUY7O0lBQ3ZGLDBDQUFzRjs7SUFDdEYsMkNBQXVGOztJQUN2RixzQ0FBa0Y7O0lBQ2xGLHlDQUFxRjs7SUFFckYsMENBQTZEOztJQUU3RCwwQ0FBcUI7O0lBRXJCLHlDQUFvQjs7SUFDcEIsOENBQTBFOztJQUMxRSxzQ0FBeUI7O0lBQ3pCLHVDQUF1Qjs7SUFDdkIsc0NBQWM7O0lBRWQsc0NBQXFEOztJQUNyRCx1Q0FBbUM7Ozs7O0lBb0NqQyxpQ0FBOEI7O0lBQzlCLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNOb3ROaWwsXHJcbiAgdG9Cb29sZWFuLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcclxuICBOekZvcm1hdEVtaXRFdmVudCxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VHJlZUJhc2UsXHJcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpUcmVlTm9kZSxcclxuXHJcbiAgTnpUcmVlTm9kZU9wdGlvbnNcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlXHJcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWUnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgQ21hY3NUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgZGlzcGxheURhdGFBc3luY0xvYWRpbmcgPSBbXTtcclxuICB0cmVlRGF0YUFzeW5jTG9hZGluZyA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4cGFuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dMaW5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2thYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCbG9ja05vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc0FzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIGV4cGFuZEFsbCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBiZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56TXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX256TXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgKHRoaXMubnpUcmVlU2VydmljZSBhcyBDbWFjc1RyZWVTZXJ2aWNlKS5uek11bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuek11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256TXVsdGlwbGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NBc3luY0RhdGEpIHtcclxuICAgICAgdGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmRpc3BsYXlEYXRhQXN5bmNMb2FkaW5nID0gdGhpcy5nZXRGaXJzdExldmVsTm9kZXModGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZyk7XHJcbiAgICAgIHRoaXMuaW5pdE56RGF0YSh0aGlzLmRpc3BsYXlEYXRhQXN5bmNMb2FkaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuekV4cGFuZGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56U2VsZWN0ZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpDaGVja2VkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xyXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGggJiYgdGhpcy5zZWxlY3RNb2RlICYmIHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIHRoaXMubnpOb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGVsIGJpbmRcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogc2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVUZW1wbGF0ZScpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9uek11bHRpcGxlID0gZmFsc2U7XHJcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5zaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMuc2hvd0ljb24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLm56QmxvY2tOb2RlLFxyXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMuZHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLnNlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLnJhZGlvID8gdHJ1ZSA6IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZXNjYXBlJywgWyckZXZlbnQnXSlcclxuICBvbktleXVwSGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIGFzIGFueTtcclxuICAgICAgaWYgKG5vZGVzU2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoW10sIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2VzY2FwZScsIG5vZGVzU2VsZWN0ZWQubWFwKG4gPT4gbi5rZXkpLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xyXG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XHJcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jbWFjc0FzeW5jRGF0YSkge1xyXG4gICAgICAgICAgICAgIHRoaXMub25DbGlja0FzeW5jTm9kZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICBpZih0aGlzLm56TXVsdGlwbGUgJiYgdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZXNjYXBlJzpcclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLy8gZHJhZyBkcm9wXHJcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkTXVsdGlwbGUnOlxyXG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0aW9uTXVsdGlwbGUoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbk11bHRpcGxlKHNlbGVjdGVkTm9kZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcclxuICAgIGxldCBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcclxuICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWRDb3VudCA9IG5vZGVzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgbGV0IHN0YXRlcyA9IHtzdGFydE5vZGVGb3VuZDogZmFsc2UsIGVuZE5vZGVGb3VuZDogZmFsc2V9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm56Tm9kZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgIGlmIChzdGF0ZXMuc3RhcnROb2RlRm91bmQgJiYgc3RhdGVzLmVuZE5vZGVGb3VuZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlcyA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoXHJcbiAgICAgICAgdGhpcy5uek5vZGVzW2ldLFxyXG4gICAgICAgIHNlbGVjdGVkTm9kZS5ub2RlLFxyXG4gICAgICAgIG5vZGVzU2VsZWN0ZWRbbm9kZXNTZWxlY3RlZENvdW50IC0gMV0sXHJcbiAgICAgICAgc3RhdGVzLnN0YXJ0Tm9kZUZvdW5kLFxyXG4gICAgICAgIHN0YXRlcy5lbmROb2RlRm91bmRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIGFzIGFueTtcclxuICAgIGxldCBlbWl0U3RydWN0dXJlOiBhbnkgPSB7fTtcclxuICAgIGVtaXRTdHJ1Y3R1cmUgPSB7XHJcbiAgICAgIGV2ZW50TmFtZTogJ3NlbGVjdGVkTXVsdGlwbGUnLFxyXG4gICAgICBzZWxlY3RlZEtleXM6IG5vZGVzU2VsZWN0ZWQsXHJcbiAgICAgIG5vZGU6IHNlbGVjdGVkTm9kZS5ub2RlLFxyXG4gICAgICBldmVudDogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KGVtaXRTdHJ1Y3R1cmUgYXMgYW55KTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKGNoYW5nZXMubnpNdWx0aXBsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAodGhpcy5uelRyZWVTZXJ2aWNlIGFzIENtYWNzVHJlZVNlcnZpY2UpLm56TXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQYXJlbnQobm9kZTogYW55LCBpbmRleCA9IG51bGwpIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyhub2RlKTtcclxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgLi4ucGFyZW50ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLnB1c2goLi4ucGFyZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290LCBlbmROb2RlLCBzdGFydE5vZGUsIHN0YXJ0Tm9kZUZvdW5kLCBlbmROb2RlRm91bmQpIHtcclxuICAgIGxldCBzdGFjayA9IFtdLCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHJvb3QpO1xyXG5cclxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBsZXQgbm9kZTogTnpUcmVlTm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKTtcclxuICAgICAgaWYgKGVuZE5vZGUua2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIGVuZE5vZGVGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXJ0Tm9kZS5rZXkgPT09IG5vZGUua2V5KSB7XHJcbiAgICAgICAgc3RhcnROb2RlRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3RhcnROb2RlLnBhcmVudE5vZGUgJiYgIW5vZGUucGFyZW50Tm9kZSAmJiAoc3RhcnROb2RlRm91bmQgfHwgZW5kTm9kZUZvdW5kKSkge1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzdGFydE5vZGUucGFyZW50Tm9kZSA9PT0gbm9kZS5wYXJlbnROb2RlKSAmJiAoc3RhcnROb2RlRm91bmQgfHwgZW5kTm9kZUZvdW5kKSkge1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXJ0Tm9kZUZvdW5kICYmIGVuZE5vZGVGb3VuZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdGFydE5vZGVGb3VuZCxcclxuICAgICAgICAgIGVuZE5vZGVGb3VuZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhcnROb2RlRm91bmQsXHJcbiAgICAgIGVuZE5vZGVGb3VuZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKSB7XHJcbiAgICBpZighaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlLmtleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8qIENtYWNzIEFzeW5jIERhdGEgTG9hZGluZyAqL1xyXG4gIGdldEZpcnN0TGV2ZWxOb2RlcyhzdWJUcmVlKSB7XHJcbiAgICBsZXQgc3ViVHJlZURlZXBDb3B5ID0gW107XHJcbiAgICBpZiAoc3ViVHJlZS5sZW5ndGgpIHtcclxuICAgICAgc3ViVHJlZURlZXBDb3B5ID0gY2xvbmVEZWVwKHN1YlRyZWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViVHJlZURlZXBDb3B5ID0gc3ViVHJlZS5jaGlsZHJlbiA/IGNsb25lRGVlcChzdWJUcmVlLmNoaWxkcmVuKSA6IFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlyc3RMZXZlbE5vZGVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlRyZWVEZWVwQ29weS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgbm9kZSA9IHN1YlRyZWVEZWVwQ29weVtpXTtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICBmaXJzdExldmVsTm9kZXMucHVzaChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdExldmVsTm9kZXM7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hUcmVlKHRyZWVEYXRhLCBrZXkpIHtcclxuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdHJlZURhdGEubGVuZ3RoOyBuKyspIHtcclxuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMudHJlZURhdGFBc3luY0xvYWRpbmdbbl07XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlYXJjaFN1YlRyZWUocm9vdCwga2V5KTtcclxuICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hTdWJUcmVlKHJvb3QsIGtleSkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBsZXQgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKTtcclxuICAgICAgaWYgKGtleSA9PT0gbm9kZS5rZXkpIHtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0FzeW5jTm9kZShldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIC8vIGxvYWQgY2hpbGQgYXN5bmNcclxuICAgIGlmIChldmVudC5ldmVudE5hbWUgPT09ICdleHBhbmQnKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlO1xyXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgICB0aGlzLmxvYWROb2RlQ2hpbGRyZW4obm9kZS5rZXkpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBub2RlLmFkZENoaWxkcmVuKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkTm9kZUNoaWxkcmVuKGtleSk6IFByb21pc2U8TnpUcmVlTm9kZU9wdGlvbnNbXT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBzdWJUcmVlID0gdGhpcy5zZWFyY2hUcmVlKHRoaXMudHJlZURhdGFBc3luY0xvYWRpbmcsIGtleSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdWJUcmVlJywgc3ViVHJlZSlcclxuICAgICAgY29uc3QgZmlyc3RMZXZlbENoaWxkcmVuID0gdGhpcy5nZXRGaXJzdExldmVsTm9kZXMoc3ViVHJlZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJzdCBMZXZlbCBDaGlsZHJlbicsIGZpcnN0TGV2ZWxDaGlsZHJlbilcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGZpcnN0TGV2ZWxDaGlsZHJlbilcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==