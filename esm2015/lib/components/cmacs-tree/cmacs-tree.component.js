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
        if (!value.length && this.inlineEdit) {
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
        let flatNodesList = [];
        /** @type {?} */
        let idxs = [];
        /** @type {?} */
        const nodesSelected = this.nzTreeService.getSelectedNodeList();
        /** @type {?} */
        const nodesSelectedCount = nodesSelected.length;
        this.nzNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            /** @type {?} */
            let array = this.convertTreeToList(node, selectedNode.node, nodesSelected[nodesSelectedCount - 1], idxs);
            flatNodesList = flatNodesList.concat(array);
        }));
        /** @type {?} */
        let i = idxs[0];
        for (i; i <= idxs[1]; i++) {
            if (flatNodesList[i].isSelectable && !flatNodesList[i].isDisabled) {
                flatNodesList[i].isSelected = true;
            }
        }
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
        if (index) {
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
     * @param {?} idxs
     * @return {?}
     */
    convertTreeToList(root, endNode, startNode, idxs) {
        /** @type {?} */
        let stack = [];
        /** @type {?} */
        let array = [];
        /** @type {?} */
        let hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            /** @type {?} */
            let node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (endNode.key === node.key || startNode.key === node.key) {
                idxs.push(array.length - 1);
            }
            if (node.children.length) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return array;
    }
    /**
     * @param {?} node
     * @param {?} hashMap
     * @param {?} array
     * @return {?}
     */
    visitNode(node, hashMap, array) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
            array.push(node);
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
                styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}.ant-tree .ant-tree-treenode-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff}:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5!important;border-top:1px solid #dee0e5!important}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBR1osc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsNkJBQTZCLEVBRTlCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUV4RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGtCQUFxQyxFQUNyQyxXQUE2QjtJQUU3QixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQy9ELENBQUM7QUF1QkQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7Ozs7OztJQXlMaEQsWUFDRSxhQUErQixFQUN2QixHQUFzQixFQUNILFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUhiLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FB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LFlBQVksRUFBRTs7dURBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOztzREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O2lEQUFlO0FBT2Q7SUFBZixZQUFZLEVBQUU7OzREQUEwQjtBQUtsRDtJQURDLFlBQVksRUFBRTs7O29EQUlkOzs7SUE1QkQsc0NBQTBDOztJQUMxQyx3Q0FBMkM7O0lBQzNDLHNDQUEwQzs7SUFDMUMsMENBQThEOztJQUM5RCx1Q0FBMkM7O0lBQzNDLHVDQUEyQzs7SUFDM0MsdUNBQTJDOztJQUMzQyx1Q0FBMkM7O0lBQzNDLDJDQUErQzs7SUFDL0Msd0NBQTRDOztJQUM1Qyw2Q0FBaUQ7O0lBQ2pELHlDQUE2Qzs7SUFDN0Msd0NBQTRDOztJQUM1QyxtQ0FBdUM7O0lBQ3ZDLHdDQUFnRjs7Ozs7O0lBTWhGLDhDQUFrRDs7SUFDbEQsd0NBQStFOztJQThGL0Usa0RBQStGOztJQUMvRixrREFBK0Y7O0lBQy9GLGlEQUE4Rjs7SUFFOUYsK0NBQTJGOzs7Ozs7SUFLM0YsNENBQXdGOztJQUV4RixxQ0FBaUY7O0lBQ2pGLHdDQUFvRjs7SUFDcEYsMkNBQXVGOztJQUN2Riw4Q0FBMEY7O0lBQzFGLDRDQUF3Rjs7SUFFeEYsMkNBQXVGOztJQUN2RiwyQ0FBdUY7O0lBQ3ZGLDBDQUFzRjs7SUFDdEYsMkNBQXVGOztJQUN2RixzQ0FBa0Y7O0lBQ2xGLHlDQUFxRjs7SUFFckYsMENBQTZEOztJQUU3RCwwQ0FBcUI7O0lBRXJCLHlDQUFvQjs7SUFDcEIsOENBQTBFOztJQUMxRSxzQ0FBeUI7O0lBQ3pCLHVDQUF1Qjs7SUFDdkIsc0NBQWM7O0lBRWQsc0NBQXFEOztJQUNyRCx1Q0FBbUM7Ozs7O0lBb0NqQyxpQ0FBOEI7O0lBQzlCLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlLFxyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56VHJlZU5vZGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlXHJcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWUnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgQ21hY3NUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFkaW8gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25hZGRjaGlsZDogRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBleHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuek11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICh0aGlzLm56VHJlZVNlcnZpY2UgYXMgQ21hY3NUcmVlU2VydmljZSkubnpNdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9uek11bHRpcGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56RGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuekV4cGFuZGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56U2VsZWN0ZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpDaGVja2VkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xyXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGggJiYgdGhpcy5pbmxpbmVFZGl0KSB7XHJcbiAgICAgIHRoaXMubnpOb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGVsIGJpbmRcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogc2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVUZW1wbGF0ZScpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9uek11bHRpcGxlID0gZmFsc2U7XHJcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5zaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMuc2hvd0ljb24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLm56QmxvY2tOb2RlLFxyXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMuZHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLnNlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLnJhZGlvID8gdHJ1ZSA6IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0pID0+IHtcclxuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcclxuICAgICAgICBjYXNlICduekV4cGFuZGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2Rlcyk7XHJcbiAgICAgICAgICB0aGlzLm56RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcclxuICAgICAgICAgIHRoaXMubnpDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudE5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekNoZWNrQm94Q2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56RGJsQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDb250ZXh0TWVudS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8vIGRyYWcgZHJvcFxyXG4gICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzZWxlY3RlZE11bHRpcGxlJzpcclxuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGlvbk11bHRpcGxlKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25NdWx0aXBsZShzZWxlY3RlZE5vZGUpIHtcclxuICAgIGxldCBmbGF0Tm9kZXNMaXN0OiBOelRyZWVOb2RlW10gPSBbXSwgaWR4cyA9IFtdO1xyXG4gICAgY29uc3Qgbm9kZXNTZWxlY3RlZCA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XHJcbiAgICBjb25zdCBub2Rlc1NlbGVjdGVkQ291bnQgPSBub2Rlc1NlbGVjdGVkLmxlbmd0aDtcclxuICAgIHRoaXMubnpOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICBsZXQgYXJyYXkgPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KG5vZGUsIHNlbGVjdGVkTm9kZS5ub2RlLCBub2Rlc1NlbGVjdGVkW25vZGVzU2VsZWN0ZWRDb3VudCAtIDFdLCAgaWR4cyk7XHJcbiAgICAgIGZsYXROb2Rlc0xpc3QgPSBmbGF0Tm9kZXNMaXN0LmNvbmNhdChhcnJheSk7XHJcbiAgICB9KTtcclxuICAgIGxldCBpID0gaWR4c1swXTtcclxuICAgIGZvciAoaTsgaSA8PSBpZHhzWzFdOyBpKyspIHtcclxuICAgICAgaWYgKGZsYXROb2Rlc0xpc3RbaV0uaXNTZWxlY3RhYmxlICYmICFmbGF0Tm9kZXNMaXN0W2ldLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICBmbGF0Tm9kZXNMaXN0W2ldLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5fbnpNdWx0aXBsZSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56TXVsdGlwbGUuY3VycmVudFZhbHVlKTtcclxuICAgICAgKHRoaXMubnpUcmVlU2VydmljZSBhcyBDbWFjc1RyZWVTZXJ2aWNlKS5uek11bHRpcGxlID0gdG9Cb29sZWFuKGNoYW5nZXMubnpNdWx0aXBsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUGFyZW50KG5vZGU6IGFueSwgaW5kZXggPSBudWxsKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5jb2VyY2VUcmVlTm9kZXMobm9kZSk7XHJcbiAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2Rlcy5zcGxpY2UoIGluZGV4LCAwLCAuLi5wYXJlbnQgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMucHVzaCguLi5wYXJlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3QsIGVuZE5vZGUsIHN0YXJ0Tm9kZSwgaWR4cykge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGFycmF5ID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXAsIGFycmF5KTtcclxuICAgICAgaWYgKGVuZE5vZGUua2V5ID09PSBub2RlLmtleSB8fCBzdGFydE5vZGUua2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIGlkeHMucHVzaChhcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGUobm9kZSwgaGFzaE1hcCwgYXJyYXkpIHtcclxuICAgIGlmKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICBoYXNoTWFwW25vZGUua2V5XSA9IHRydWU7XHJcbiAgICAgIGFycmF5LnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==