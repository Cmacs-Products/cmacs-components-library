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
export class CmacsTreeComponent extends NzTreeBase {
    /**
     * @param {?} nzTreeService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, cdr, noAnimation) {
        super(nzTreeService);
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.showIcon = false;
        this.showExpand = true;
        this.showLine = false;
        this.checkable = false;
        this.asyncData = false;
        this.draggable = false;
        this.expandAll = false;
        this.hideUnMatched = false;
        this.selectMode = false;
        this.nzCheckStrictly = false;
        this.nzBlockNode = false;
        this.inlineEdit = false;
        this.radio = false;
        this.onaddchild = new EventEmitter();
        /**
         * @deprecated use
         * expandAll instead
         */
        this.defaultExpandAll = false;
        // model bind
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.searchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * searchValueChange instead
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        // tslint:disable-next-line: variable-name
        this._nzMultiple = false;
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMultiple(value) {
        this._nzMultiple = toBoolean(value);
        ((/** @type {?} */ (this.nzTreeService))).nzMultiple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzMultiple() {
        return this._nzMultiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated use
     * nzExpandedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzSelectedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzCheckedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (!value.length && this.selectMode && this.checkable) {
            this.nzNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                node.isExpanded = true;
            }));
            this.cdr.detectChanges();
        }
        if (isNotNil(value)) {
            this.searchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            // tslint:disable-next-line: deprecation
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    /**
     * @return {?}
     */
    get searchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed
     * @return {?}
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onaddchildevt($event) {
        this.onaddchild.emit($event);
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.showLine,
            [`${this.prefixCls}-icon-hide`]: !this.showIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.draggable,
            ['ant-select-tree']: this.selectMode
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initNzData(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.radio ? true : this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydownHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.checkable) {
            /** @type {?} */
            const nodesSelected = (/** @type {?} */ (this.nzTreeService.getSelectedNodeList()));
            if (nodesSelected.length) {
                this.nzTreeService.calcSelectedKeys([], this.nzNodes, this.nzMultiple);
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('escape', nodesSelected.map((/**
                 * @param {?} n
                 * @return {?}
                 */
                n => n.key)), event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            switch (data.eventName) {
                case 'expand':
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    if (this.nzMultiple && this.getSelectedNodeList().length === 1) {
                        this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    }
                    this.nzClick.emit(data);
                    break;
                case 'escape':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
                case 'selectedMultiple':
                    this.onSelectionMultiple(data);
                    break;
            }
        }));
    }
    /**
     * @param {?} selectedNode
     * @return {?}
     */
    onSelectionMultiple(selectedNode) {
        /** @type {?} */
        let nodesSelected = this.nzTreeService.getSelectedNodeList();
        /** @type {?} */
        const nodesSelectedCount = nodesSelected.length;
        /** @type {?} */
        let states = { startNodeFound: false, endNodeFound: false };
        for (let i = 0; i < this.nzNodes.length; i++) {
            if (states.startNodeFound && states.endNodeFound) {
                break;
            }
            states = this.convertTreeToList(this.nzNodes[i], selectedNode.node, nodesSelected[nodesSelectedCount - 1], states.startNodeFound, states.endNodeFound);
        }
        nodesSelected = (/** @type {?} */ (this.nzTreeService.getSelectedNodeList()));
        /** @type {?} */
        let emitStructure = {};
        emitStructure = {
            eventName: 'selectedMultiple',
            selectedKeys: nodesSelected,
            node: selectedNode.node,
            event: null
        };
        this.nzClick.emit((/** @type {?} */ (emitStructure)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = toBoolean(changes.nzCheckStrictly.currentValue);
        }
        if (changes.nzMultiple) {
            this._nzMultiple = toBoolean(changes.nzMultiple.currentValue);
            ((/** @type {?} */ (this.nzTreeService))).nzMultiple = toBoolean(changes.nzMultiple.currentValue);
        }
    }
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    addParent(node, index = null) {
        /** @type {?} */
        let parent = this.coerceTreeNodes(node);
        if (index !== undefined && index !== null) {
            this.nzTreeService.rootNodes.splice(index, 0, ...parent);
        }
        else {
            this.nzTreeService.rootNodes.push(...parent);
        }
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} root
     * @param {?} endNode
     * @param {?} startNode
     * @param {?} startNodeFound
     * @param {?} endNodeFound
     * @return {?}
     */
    convertTreeToList(root, endNode, startNode, startNodeFound, endNodeFound) {
        /** @type {?} */
        let stack = [];
        /** @type {?} */
        let hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            /** @type {?} */
            let node = stack.pop();
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
                    startNodeFound,
                    endNodeFound
                };
            }
            if (node.children.length) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return {
            startNodeFound,
            endNodeFound
        };
    }
    /**
     * @param {?} node
     * @param {?} hashMap
     * @return {?}
     */
    visitNode(node, hashMap) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
        }
    }
}
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
                        () => CmacsTreeComponent)),
                        multi: true
                    }
                ],
                styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff!important}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree li.ant-tree-treenode-checkbox-checked .ant-tree-child-tree,:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5;border-top:1px solid #dee0e5}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}:host ::ng-deep .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}:host ::ng-deep .ant-tree li.drag-over,:host ::ng-deep .ant-tree li.drag-over-gap-bottom,:host ::ng-deep .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header{border-bottom:1px solid #2a7cff}:host ::ng-deep .ant-tree li.drag-over-gap-top,:host ::ng-deep .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{border-top:1px solid #2a7cff}"]
            }] }
];
/** @nocollapse */
CmacsTreeComponent.ctorParameters = () => [
    { type: CmacsTreeService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQUUsWUFBWSxFQUMxQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFHWixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFOUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsa0JBQXFDLEVBQ3JDLFdBQTZCO0lBRTdCLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDL0QsQ0FBQztBQXVCRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTs7Ozs7O0lBeUxoRCxZQUNFLGFBQStCLEVBQ3ZCLEdBQXNCLEVBQ0gsV0FBb0M7UUFFL0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSGIsUUFBRyxHQUFILEdB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OUYsK0NBQTJGOzs7Ozs7SUFLM0YsNENBQXdGOztJQUV4RixxQ0FBaUY7O0lBQ2pGLHdDQUFvRjs7SUFDcEYsMkNBQXVGOztJQUN2Riw4Q0FBMEY7O0lBQzFGLDRDQUF3Rjs7SUFFeEYsMkNBQXVGOztJQUN2RiwyQ0FBdUY7O0lBQ3ZGLDBDQUFzRjs7SUFDdEYsMkNBQXVGOztJQUN2RixzQ0FBa0Y7O0lBQ2xGLHlDQUFxRjs7SUFFckYsMENBQTZEOztJQUU3RCwwQ0FBcUI7O0lBRXJCLHlDQUFvQjs7SUFDcEIsOENBQTBFOztJQUMxRSxzQ0FBeUI7O0lBQ3pCLHVDQUF1Qjs7SUFDdkIsc0NBQWM7O0lBRWQsc0NBQXFEOztJQUNyRCx1Q0FBbUM7Ozs7O0lBb0NqQyxpQ0FBOEI7O0lBQzlCLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNOb3ROaWwsXHJcbiAgdG9Cb29sZWFuLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcclxuICBOekZvcm1hdEVtaXRFdmVudCxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VHJlZUJhc2UsXHJcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpUcmVlTm9kZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RyZWVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy10cmVlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KFxyXG4gIGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgdHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2VcclxuKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBoaWdoZXJPcmRlclNlcnZpY2UgPyBoaWdoZXJPcmRlclNlcnZpY2UgOiB0cmVlU2VydmljZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBDbWFjc1RyZWVTZXJ2aWNlXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVHJlZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4cGFuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dMaW5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2thYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnZ2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCbG9ja05vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIGV4cGFuZEFsbCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBiZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56TXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX256TXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgKHRoaXMubnpUcmVlU2VydmljZSBhcyBDbWFjc1RyZWVTZXJ2aWNlKS5uek11bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuek11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256TXVsdGlwbGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56RXhwYW5kZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpTZWxlY3RlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuekNoZWNrZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XHJcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCAmJiB0aGlzLnNlbGVjdE1vZGUgJiYgdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uek5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgICAgdGhpcy5uek9uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyByZW5kZXIgbm9kZXMgaWYgcm9vdCBpcyBjaGFuZ2VkXHJcbiAgICovXHJcbiAgZ2V0IG56Tm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgb25hZGRjaGlsZGV2dCgkZXZlbnQ6IE56VHJlZU5vZGUpICB7XHJcbiAgICB0aGlzLm9uYWRkY2hpbGQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gbW9kZWwgYmluZFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBzZWFyY2hWYWx1ZUNoYW5nZSBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hOb2RlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEYmxDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ecm9wOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQENvbnRlbnRDaGlsZCgndHJlZVRlbXBsYXRlJykgdHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX256TXVsdGlwbGUgPSBmYWxzZTtcclxuICBuekRlZmF1bHRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0+KDYpO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGNsYXNzTWFwID0ge307XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZSddOiB0aGlzLnNob3dMaW5lLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWBdOiAhdGhpcy5zaG93SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ibG9jay1ub2RlYF06IHRoaXMubnpCbG9ja05vZGUsXHJcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5kcmFnZ2FibGUsXHJcbiAgICAgIFsnYW50LXNlbGVjdC10cmVlJ106IHRoaXMuc2VsZWN0TW9kZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMucmFkaW8gPyB0cnVlIDogdGhpcy5uekNoZWNrU3RyaWN0bHk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5uek11bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpUcmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duSGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIGFzIGFueTtcclxuICAgICAgaWYgKG5vZGVzU2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoW10sIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2VzY2FwZScsIG5vZGVzU2VsZWN0ZWQubWFwKG4gPT4gbi5rZXkpLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xyXG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XHJcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICBpZih0aGlzLm56TXVsdGlwbGUgJiYgdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZXNjYXBlJzpcclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLy8gZHJhZyBkcm9wXHJcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkTXVsdGlwbGUnOlxyXG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0aW9uTXVsdGlwbGUoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbk11bHRpcGxlKHNlbGVjdGVkTm9kZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcclxuICAgIGxldCBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcclxuICAgIGNvbnN0IG5vZGVzU2VsZWN0ZWRDb3VudCA9IG5vZGVzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgbGV0IHN0YXRlcyA9IHtzdGFydE5vZGVGb3VuZDogZmFsc2UsIGVuZE5vZGVGb3VuZDogZmFsc2V9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm56Tm9kZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgIGlmIChzdGF0ZXMuc3RhcnROb2RlRm91bmQgJiYgc3RhdGVzLmVuZE5vZGVGb3VuZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlcyA9IHRoaXMuY29udmVydFRyZWVUb0xpc3QoXHJcbiAgICAgICAgdGhpcy5uek5vZGVzW2ldLFxyXG4gICAgICAgIHNlbGVjdGVkTm9kZS5ub2RlLFxyXG4gICAgICAgIG5vZGVzU2VsZWN0ZWRbbm9kZXNTZWxlY3RlZENvdW50IC0gMV0sXHJcbiAgICAgICAgc3RhdGVzLnN0YXJ0Tm9kZUZvdW5kLFxyXG4gICAgICAgIHN0YXRlcy5lbmROb2RlRm91bmRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIGFzIGFueTtcclxuICAgIGxldCBlbWl0U3RydWN0dXJlOiBhbnkgPSB7fTtcclxuICAgIGVtaXRTdHJ1Y3R1cmUgPSB7XHJcbiAgICAgIGV2ZW50TmFtZTogJ3NlbGVjdGVkTXVsdGlwbGUnLFxyXG4gICAgICBzZWxlY3RlZEtleXM6IG5vZGVzU2VsZWN0ZWQsXHJcbiAgICAgIG5vZGU6IHNlbGVjdGVkTm9kZS5ub2RlLFxyXG4gICAgICBldmVudDogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KGVtaXRTdHJ1Y3R1cmUgYXMgYW55KTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKGNoYW5nZXMubnpNdWx0aXBsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAodGhpcy5uelRyZWVTZXJ2aWNlIGFzIENtYWNzVHJlZVNlcnZpY2UpLm56TXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQYXJlbnQobm9kZTogYW55LCBpbmRleCA9IG51bGwpIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyhub2RlKTtcclxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgLi4ucGFyZW50ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLnB1c2goLi4ucGFyZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChyb290LCBlbmROb2RlLCBzdGFydE5vZGUsIHN0YXJ0Tm9kZUZvdW5kLCBlbmROb2RlRm91bmQpIHtcclxuICAgIGxldCBzdGFjayA9IFtdLCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHJvb3QpO1xyXG5cclxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBsZXQgbm9kZTogTnpUcmVlTm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKTtcclxuICAgICAgaWYgKGVuZE5vZGUua2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIGVuZE5vZGVGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXJ0Tm9kZS5rZXkgPT09IG5vZGUua2V5KSB7XHJcbiAgICAgICAgc3RhcnROb2RlRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3RhcnROb2RlLnBhcmVudE5vZGUgJiYgIW5vZGUucGFyZW50Tm9kZSAmJiAoc3RhcnROb2RlRm91bmQgfHwgZW5kTm9kZUZvdW5kKSkge1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzdGFydE5vZGUucGFyZW50Tm9kZSA9PT0gbm9kZS5wYXJlbnROb2RlKSAmJiAoc3RhcnROb2RlRm91bmQgfHwgZW5kTm9kZUZvdW5kKSkge1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXJ0Tm9kZUZvdW5kICYmIGVuZE5vZGVGb3VuZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdGFydE5vZGVGb3VuZCxcclxuICAgICAgICAgIGVuZE5vZGVGb3VuZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhcnROb2RlRm91bmQsXHJcbiAgICAgIGVuZE5vZGVGb3VuZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlLCBoYXNoTWFwKSB7XHJcbiAgICBpZighaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlLmtleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=