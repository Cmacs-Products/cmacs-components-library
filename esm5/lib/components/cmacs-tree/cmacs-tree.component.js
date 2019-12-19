/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef } from '@angular/core';
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
            /** @type {?} */
            var array = _this.convertTreeToList(node, selectedNode.node, nodesSelected[nodesSelectedCount - 1], idxs);
            flatNodesList = flatNodesList.concat(array);
        }));
        /** @type {?} */
        var i = idxs[0];
        for (i; i <= idxs[1]; i++) {
            if (flatNodesList[i].isSelectable && !flatNodesList[i].isDisabled) {
                flatNodesList[i].isSelected = true;
            }
        }
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
     * @return {?}
     */
    CmacsTreeComponent.prototype.convertTreeToList = /**
     * @param {?} root
     * @param {?} endNode
     * @param {?} startNode
     * @param {?} idxs
     * @return {?}
     */
    function (root, endNode, startNode, idxs) {
        /** @type {?} */
        var stack = [];
        /** @type {?} */
        var array = [];
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
                    styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}.ant-tree .ant-tree-treenode-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff}:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5!important;border-top:1px solid #dee0e5!important}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}"]
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
        treeTemplate: [{ type: ContentChild, args: ['treeTemplate',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBR1osc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsNkJBQTZCLEVBRTlCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUV4RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGtCQUFxQyxFQUNyQyxXQUE2QjtJQUU3QixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQy9ELENBQUM7QUFFRDtJQXFCd0MsOENBQVU7SUF5TGhELDRCQUNFLGFBQStCLEVBQ3ZCLEdBQXNCLEVBQ0gsV0FBb0M7UUFIakUsWUFLRSxrQkFBTSxhQUFhLENBQUMsU0FDckI7UUFKUyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGlCQUFXLEdBQVgsV0FB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SUFDdkYsMkNBQXVGOztJQUN2RiwwQ0FBc0Y7O0lBQ3RGLDJDQUF1Rjs7SUFDdkYsc0NBQWtGOztJQUNsRix5Q0FBcUY7O0lBRXJGLDBDQUE2RDs7SUFFN0QsMENBQXFCOztJQUVyQix5Q0FBb0I7O0lBQ3BCLDhDQUEwRTs7SUFDMUUsc0NBQXlCOztJQUN6Qix1Q0FBdUI7O0lBQ3ZCLHNDQUFjOztJQUVkLHNDQUFxRDs7SUFDckQsdUNBQW1DOzs7OztJQW9DakMsaUNBQThCOztJQUM5Qix5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTa2lwU2VsZixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc05vdE5pbCxcclxuICB0b0Jvb2xlYW4sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUcmVlQmFzZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOelRyZWVOb2RlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVHJlZVNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXRyZWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoXHJcbiAgaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICB0cmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZVxyXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRyZWUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc1RyZWVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIENtYWNzVHJlZVNlcnZpY2VdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NUcmVlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJsb2NrTm9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogZXhwYW5kQWxsIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgbnpNdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpNdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAodGhpcy5uelRyZWVTZXJ2aWNlIGFzIENtYWNzVHJlZVNlcnZpY2UpLm56TXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpNdWx0aXBsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuekRhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpFeHBhbmRlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuelNlbGVjdGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56Q2hlY2tlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcclxuICAgIGlmICghdmFsdWUubGVuZ3RoICYmIHRoaXMuaW5saW5lRWRpdCkge1xyXG4gICAgICB0aGlzLm56Tm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxyXG4gICAgICB0aGlzLm56T25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHJlbmRlciBub2RlcyBpZiByb290IGlzIGNoYW5nZWRcclxuICAgKi9cclxuICBnZXQgbnpOb2RlcygpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XHJcbiAgfVxyXG5cclxuICBvbmFkZGNoaWxkZXZ0KCRldmVudDogTnpUcmVlTm9kZSkgIHtcclxuICAgIHRoaXMub25hZGRjaGlsZC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBtb2RlbCBiaW5kXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlYXJjaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIHNlYXJjaFZhbHVlQ2hhbmdlIGluc3RlYWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaE5vZGU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3A6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAQ29udGVudENoaWxkKCd0cmVlVGVtcGxhdGUnKSB0cmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfT4oNik7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgY2xhc3NNYXAgPSB7fTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMuc2hvd0xpbmUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYF06ICF0aGlzLnNob3dJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5uekJsb2NrTm9kZSxcclxuICAgICAgWydkcmFnZ2FibGUtdHJlZSddOiB0aGlzLmRyYWdnYWJsZSxcclxuICAgICAgWydhbnQtc2VsZWN0LXRyZWUnXTogdGhpcy5zZWxlY3RNb2RlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaW5pdE56RGF0YSh2YWx1ZTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5yYWRpbyA/IHRydWUgOiB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xyXG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XHJcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxyXG4gICAgICAgICAgICB0aGlzLm56Q29udGV4dE1lbnUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcclxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdTdGFydC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbnRlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJvcC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW5kLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnc2VsZWN0ZWRNdWx0aXBsZSc6XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3Rpb25NdWx0aXBsZShkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uTXVsdGlwbGUoc2VsZWN0ZWROb2RlKSB7XHJcbiAgICBsZXQgZmxhdE5vZGVzTGlzdDogTnpUcmVlTm9kZVtdID0gW10sIGlkeHMgPSBbXTtcclxuICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gICAgY29uc3Qgbm9kZXNTZWxlY3RlZENvdW50ID0gbm9kZXNTZWxlY3RlZC5sZW5ndGg7XHJcbiAgICB0aGlzLm56Tm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgbGV0IGFycmF5ID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChub2RlLCBzZWxlY3RlZE5vZGUubm9kZSwgbm9kZXNTZWxlY3RlZFtub2Rlc1NlbGVjdGVkQ291bnQgLSAxXSwgIGlkeHMpO1xyXG4gICAgICBmbGF0Tm9kZXNMaXN0ID0gZmxhdE5vZGVzTGlzdC5jb25jYXQoYXJyYXkpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgaSA9IGlkeHNbMF07XHJcbiAgICBmb3IgKGk7IGkgPD0gaWR4c1sxXTsgaSsrKSB7XHJcbiAgICAgIGlmIChmbGF0Tm9kZXNMaXN0W2ldLmlzU2VsZWN0YWJsZSAmJiAhZmxhdE5vZGVzTGlzdFtpXS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgZmxhdE5vZGVzTGlzdFtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdG9Cb29sZWFuKGNoYW5nZXMubnpDaGVja1N0cmljdGx5LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuX256TXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICh0aGlzLm56VHJlZVNlcnZpY2UgYXMgQ21hY3NUcmVlU2VydmljZSkubnpNdWx0aXBsZSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56TXVsdGlwbGUuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFBhcmVudChub2RlOiBhbnksIGluZGV4ID0gbnVsbCkge1xyXG4gICAgbGV0IHBhcmVudCA9IHRoaXMuY29lcmNlVHJlZU5vZGVzKG5vZGUpO1xyXG4gICAgaWYgKGluZGV4KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgLi4ucGFyZW50ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLnB1c2goLi4ucGFyZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290LCBlbmROb2RlLCBzdGFydE5vZGUsIGlkeHMpIHtcclxuICAgIGxldCBzdGFjayA9IFtdLCBhcnJheSA9IFtdLCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHJvb3QpO1xyXG5cclxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBsZXQgbm9kZTogTnpUcmVlTm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwLCBhcnJheSk7XHJcbiAgICAgIGlmIChlbmROb2RlLmtleSA9PT0gbm9kZS5rZXkgfHwgc3RhcnROb2RlLmtleSA9PT0gbm9kZS5rZXkpIHtcclxuICAgICAgICBpZHhzLnB1c2goYXJyYXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGUsIGhhc2hNYXAsIGFycmF5KSB7XHJcbiAgICBpZighaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlLmtleV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=