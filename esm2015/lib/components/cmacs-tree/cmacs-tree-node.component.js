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
export class CmacsTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cdr
     * @param {?=} nzNoAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, nzNoAnimation) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this._draggable = value;
        this.handDragEvent();
    }
    /**
     * @return {?}
     */
    get draggable() {
        return this._draggable;
    }
    /**
     * @deprecated use
     * expandAll instead
     * @param {?} value
     * @return {?}
     */
    set defaultExpandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get defaultExpandAll() {
        return this._expandAll;
    }
    // default set
    /**
     * @param {?} value
     * @return {?}
     */
    set expandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get expandAll() {
        return this._expandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchValue(value) {
        this.highlightKeys = [];
        // tslint:disable-next-line: no-non-null-assertion
        if (value && (/** @type {?} */ (this.treeNode.title.toLowerCase())).includes(value.toLowerCase())) {
            // match the search value
            /** @type {?} */
            const index = this.treeNode.title.toLowerCase().indexOf(value.toLowerCase());
            this.highlightKeys = [
                this.treeNode.title.slice(0, index),
                this.treeNode.title.slice(index, index + value.length),
                this.treeNode.title.slice(index + value.length, this.treeNode.title.length)
            ];
        }
        this._searchValue = value;
    }
    /**
     * @return {?}
     */
    get searchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this.treeNode.icon;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.draggable && !this.treeNode.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.treeNode.isLeaf && this.showLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.treeNode.isLeaf && !this.showLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.searchValue && this.hideUnMatched && !this.treeNode.isMatched && !this.treeNode.isExpanded
            ? 'none'
            : '';
    }
    /**
     * reset node class
     * @return {?}
     */
    setClassMap() {
        this.prefixCls = this.selectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.treeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.treeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: !this.checkable && this.treeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.treeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.treeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.radio ?
                this.nzTreeService.getCheckedNodeList().length && this.nzTreeService.getCheckedNodeList()[0].key === this.treeNode.key
                : this.treeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.treeNode.isDisabled || this.treeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.treeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
        if (!this.cdr['destroyed']) {
            this.cdr.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.selectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeService.nzMultiple) {
            this.nzTreeService.isMultiple = toBoolean(event.ctrlKey) || toBoolean(event.shiftKey);
            /** @type {?} */
            const selectedNodes = this.nzTreeService.getSelectedNodeList();
            /** @type {?} */
            const selectedNodesCount = selectedNodes.length;
            if (toBoolean(event.shiftKey) && selectedNodesCount > 0) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('selectedMultiple', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
            if (toBoolean(event.ctrlKey)) {
                if (selectedNodesCount) {
                    /** @type {?} */
                    const selectedFiltered = selectedNodes.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => ((n.parentNode === this.treeNode.parentNode) || (!n.parentNode && !this.treeNode.parentNode))));
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
                const eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
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
            const eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * @return {?}
     */
    checkSubTreeSelection() {
        /** @type {?} */
        let stack = [];
        /** @type {?} */
        let hashMap = {};
        stack.push(this.treeNode);
        while (stack.length !== 0) {
            /** @type {?} */
            let node = stack.pop();
            if (!hashMap[node.key]) {
                if (node.isSelected) {
                    return true;
                }
                this.visitNode(node, hashMap);
                if (node.children.length) {
                    for (let i = node.children.length - 1; i >= 0; i--) {
                        stack.push(node.children[i]);
                    }
                }
                if (node.parentNode) {
                    stack.push(node.parentNode);
                }
            }
        }
        return false;
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
    /**
     * @param {?} event
     * @return {?}
     */
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.treeNode.isLoading && !this.treeNode.isLeaf) {
            // set async state
            if (this.asyncData && this.treeNode.children.length === 0 && !this.treeNode.isExpanded) {
                this.treeNode.isLoading = true;
            }
            this.treeNode.isExpanded = !this.treeNode.isExpanded;
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('expand', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    _clickCheckBox(event) {
        if (!this.selectMode) {
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
            const eventNext = this.nzTreeService.formatEvent('check', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * drag event
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onaddchildevt($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        this.onaddchild.emit(this.treeNode);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
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
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.treeNode.key && !this.treeNode.isExpanded && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.treeNode, e);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.treeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
        }));
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.treeNode.key) || (this.dragPos === 0 && this.treeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.treeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
            if (this.beforeDrop) {
                this.beforeDrop({
                    // tslint:disable-next-line: no-non-null-assertion
                    dragNode: this.newMethod(),
                    node: this.treeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                    }
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (this.treeNode) {
                this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    newMethod() {
        // tslint:disable-next-line: no-non-null-assertion
        return (/** @type {?} */ (this.nzTreeService.getSelectedNode()));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.beforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    }
    /**
     * 监听拖拽事件
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.draggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.selectMode && this.checkable && !this.treeNode.isLeaf) {
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
        data => (/** @type {?} */ (data.node)).key === this.treeNode.key)), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            //this.setClassMap();
            this.markForCheck();
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTreeNodeComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-tree-node',
                exportAs: 'cmacsTreeNode',
                template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.paddingLeft.px]=\"treeNode.isLeaf ? ((selectMode ? 22 : 16) * treeNode.level) : 0\"\r\n  [class.cmacs-tree-child-header]=\"treeNode.isLeaf\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <div [class.cmacs-tree-parent-header]=\"!treeNode.isLeaf\"\r\n       [class.cmacs-tree-node-selected]=\"!treeNode.isLeaf && treeNode.isSelected && !checkable\"\r\n       [style.border-top-color]=\"selectMode && index ? '#dee0e5' : 'transparent'\"\r\n       [style.paddingLeft.px]=\"!treeNode.isLeaf || !treeNode.parentNode ? 16 * treeNode.level : 0\">\r\n    <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            type=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"checkable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-radio-btn-inner]=\"selectMode && radio\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"inlineEdit && !treeNode.parentNode\">\r\n          <i class=\"iconUILarge-New cmacs-tree-new-icon\" (click)=\"onaddchildevt($event)\"></i>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"treeTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n    </ng-template>\r\n  </div>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [radio]=\"radio\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [collapseMotion],
                styles: [".cmacs-tree-new-icon{color:#acb3bf;font-size:16px;float:right;top:2px;position:relative}.ant-tree-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner::after{position:absolute;display:table;height:10px;border:none;border-radius:100px;top:2px;left:2px;width:10px;-webkit-transform:none!important;transform:none!important;background-color:#2a7cff;opacity:1;-webkit-transition:.2s cubic-bezier(.12,.4,.29,1.46) .1s;transition:.2s cubic-bezier(.12,.4,.29,1.46) .1s;content:' '}.ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{border-radius:100px}.ant-select-tree-checkbox-indeterminate .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner::after{background-color:#fff}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{background-color:#fff;border-color:#dee0e5}"]
            }] }
];
/** @nocollapse */
CmacsTreeNodeComponent.ctorParameters = () => [
    { type: CmacsTreeService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQ3hCLElBQUksRUFDSixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixRQUFRLEVBQUUsTUFBTSxFQUNoQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxjQUFjLEVBQ2QsWUFBWSxFQUVaLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFZeEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBNGZqQyxZQUNTLGFBQStCLEVBQzlCLE1BQWMsRUFDZCxRQUFtQixFQUNuQixLQUFpQixFQUNqQixHQUFzQixFQUNILGFBQXNDO1FBTDFELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBemYxQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0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UyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUN4RCxTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO3FCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUN2RCxTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3FCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUN4RCxTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO3FCQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUN2RCxTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDO3FCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUzs7OztnQkFBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVM7UUFDckIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBV0QsUUFBUTtRQUNOLDBDQUEwQztRQUMxQyxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhO2FBQ2YsbUJBQW1CLEVBQUU7YUFDckIsSUFBSTtRQUNYLGtEQUFrRDtRQUMxQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLEVBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QscUJBQXFCO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFwakJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHFxS0FBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7O2FBQzdCOzs7O1lBWFEsZ0JBQWdCO1lBckJ2QixNQUFNO1lBS04sU0FBUztZQVRULFVBQVU7WUFGVixpQkFBaUI7WUFzQmpCLHNCQUFzQix1QkFtaEJuQixJQUFJLFlBQUksUUFBUTs7OzBCQWpnQmxCLFNBQVMsU0FBQyxhQUFhO3VCQUV2QixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLEtBQUs7K0JBY0wsS0FBSzt3QkFhTCxLQUFLOzBCQVlMLEtBQUs7MEJBcUlMLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBVXBDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBeUVoQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVluQyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOztBQTVSZDtJQUFmLFlBQVksRUFBRTs7d0RBQW1CO0FBQ2xCO0lBQWYsWUFBWSxFQUFFOzswREFBcUI7QUFFcEI7SUFBZixZQUFZLEVBQUU7O3lEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7eURBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzs2REFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7OzJEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7MERBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzt3REFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OzBEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7cURBQWU7OztJQWJ2Qyw2Q0FBa0Q7O0lBRWxELDBDQUE4Qjs7SUFDOUIsMENBQTJDOztJQUMzQyw0Q0FBNkM7O0lBQzdDLDhDQUE4RDs7SUFDOUQsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLCtDQUErQzs7SUFDL0MsNkNBQTZDOztJQUM3Qyw0Q0FBNEM7O0lBQzVDLDBDQUEwQzs7SUFDMUMsNENBQTRDOztJQUM1Qyx1Q0FBdUM7O0lBQ3ZDLHVDQUF1Qjs7SUFDdkIsOENBQXlDOztJQUN6Qyw0Q0FBK0U7O0lBRS9FLDRDQUFnRjs7SUE4RGhGLDJDQUF1Qjs7SUFDdkIsK0NBQTZCOztJQUM3Qiw2Q0FBaUI7O0lBQ2pCLHFEQUF5Qjs7SUFDekIsb0RBQXdCOztJQUN4QixxREFBeUI7O0lBQ3pCLHdEQUE0Qjs7SUFDNUIsMkRBQStCOzs7OztJQUsvQiwwQ0FBeUI7O0lBQ3pCLHlDQUFZOztJQUNaLDhDQUlFOzs7OztJQU1GLDhDQUFrQjs7SUFFbEIsNENBQW1COztJQUVuQiw0Q0FBbUI7O0lBZ1pqQiwrQ0FBc0M7Ozs7O0lBQ3RDLHdDQUFzQjs7Ozs7SUFDdEIsMENBQTJCOzs7OztJQUMzQix1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUE4Qjs7SUFDOUIsK0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUcmVlTm9kZSxcclxuICB0b0Jvb2xlYW5cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1ub2RlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZU5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdFbGVtZW50JykgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHRyZWVOb2RlOiBOelRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBAT3V0cHV0KCkgb25hZGRjaGlsZDogRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdnYWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kRHJhZ0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIGV4cGFuZEFsbCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZSAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgc2V0XHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkhLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRyZWVOb2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoaW5kZXgsIGluZGV4ICsgdmFsdWUubGVuZ3RoKSxcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLnRpdGxlLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCB0aGlzLnRyZWVOb2RlLnRpdGxlLmxlbmd0aClcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgdmFyXHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBoaWdobGlnaHRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG56Tm9kZUNsYXNzID0ge307XHJcbiAgbnpOb2RlU3dpdGNoZXJDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50SWNvbkNsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBkcmFnIHZhclxyXG4gICAqL1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnUG9zID0gMjtcclxuICBkcmFnUG9zQ2xhc3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnMCc6ICdkcmFnLW92ZXInLFxyXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxyXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgc2V0XHJcbiAgICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9zZWFyY2hWYWx1ZSA9ICcnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfZHJhZ2dhYmxlID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9leHBhbmRBbGwgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IG56SWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU5vZGUuaWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlICYmICF0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dMaW5lSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5zaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dTd2l0Y2hJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzTGVhZiAmJiAhdGhpcy5zaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIHRvIGhpZGUgdW5tYXRjaGVkIG5vZGVzXHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hWYWx1ZSAmJiB0aGlzLmhpZGVVbk1hdGNoZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNNYXRjaGVkICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWRcclxuICAgICAgPyAnbm9uZSdcclxuICAgICAgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IG5vZGUgY2xhc3NcclxuICAgKi9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlZml4Q2xzID0gdGhpcy5zZWxlY3RNb2RlID8gJ2FudC1zZWxlY3QtdHJlZScgOiAnYW50LXRyZWUnO1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMudHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXNlbGVjdGVkYF06ICF0aGlzLmNoZWNrYWJsZSAmJiB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtbG9hZGluZ2BdOiB0aGlzLnRyZWVOb2RlLmlzTG9hZGluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlU3dpdGNoZXJDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcmBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgXTogdGhpcy50cmVlTm9kZS5pc0xlYWYsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX2Nsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ2hlY2tib3hDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveGBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy5yYWRpbyA/XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpLmxlbmd0aCAmJiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KClbMF0ua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleVxyXG4gICAgICAgIDogdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLnRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkIHx8IHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDb250ZW50Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1zZWxlY3RlZGBdOiB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWRcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgXTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY2RyWydkZXN0cm95ZWQnXSkge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0TW9kZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2xpY2sgbm9kZSB0byBzZWxlY3QsIDIwMG1zIHRvIGRibCBjbGlja1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5uelRyZWVTZXJ2aWNlLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZXMgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE5vZGVzQ291bnQgPSBzZWxlY3RlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkgJiYgc2VsZWN0ZWROb2Rlc0NvdW50ID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VsZWN0ZWRNdWx0aXBsZScsICB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE5vZGVzQ291bnQpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVyZWQgPSBzZWxlY3RlZE5vZGVzLmZpbHRlcihuID0+ICgobi5wYXJlbnROb2RlID09PSB0aGlzLnRyZWVOb2RlLnBhcmVudE5vZGUpIHx8ICghbi5wYXJlbnROb2RlICYmICF0aGlzLnRyZWVOb2RlLnBhcmVudE5vZGUpKSk7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLmNoZWNrU3ViVHJlZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc1NlbGVjdGFibGUgJiZcclxuICAgICAgISh0aGlzLm56VHJlZVNlcnZpY2UubnpNdWx0aXBsZSAmJiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkpKSlcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSAhdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTdWJUcmVlU2VsZWN0aW9uKCkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2godGhpcy50cmVlTm9kZSk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmICghaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCk7XHJcbiAgICAgICAgaWYobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgc3RhY2sucHVzaChub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGUobm9kZSwgaGFzaE1hcCkge1xyXG4gICAgaWYoIWhhc2hNYXBbbm9kZS5rZXldKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZS5rZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjb250ZXh0bWVudScsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGFwc2Ugbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLmFzeW5jRGF0YSAmJiB0aGlzLnRyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9ICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQ7XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrIG5vZGVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdE1vZGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXHJcbiAgICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZDtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyBldmVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbJ2RyYWctb3Zlci1nYXAtdG9wJywgJ2RyYWctb3Zlci1nYXAtYm90dG9tJywgJ2RyYWctb3ZlciddO1xyXG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCBlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25hZGRjaGlsZGV2dCgkZXZlbnQ6IEV2ZW50KSAge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uYWRkY2hpbGQuZW1pdCh0aGlzLnRyZWVOb2RlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxyXG4gICAgICAvLyBmaXJlZm94LW5lZWQtaXRcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnRyZWVOb2RlLmtleSEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gZW1wdHlcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy50cmVlTm9kZSk7XHJcbiAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXNldCBwb3NpdGlvblxyXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUua2V5ICE9PSB0aGlzLnRyZWVOb2RlLmtleSAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xyXG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXHJcbiAgICAgIGlmICghKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLnRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbdGhpcy5kcmFnUG9zXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0Ryb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAoIW5vZGUgfHwgKG5vZGUgJiYgbm9kZS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMudHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4gICAgICBjb25zdCBkcmFnRW5kRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuICAgICAgaWYgKHRoaXMuYmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlRHJvcCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uZXdNZXRob2QoKSxcclxuICAgICAgICAgIG5vZGU6IHRoaXMudHJlZU5vZGUsXHJcbiAgICAgICAgICBwb3M6IHRoaXMuZHJhZ1Bvc1xyXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgICAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyZWVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV3TWV0aG9kKCk6IE56VHJlZU5vZGUge1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSE7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXHJcbiAgICAgIGlmICghdGhpcy5iZWZvcmVEcm9wKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55uR5ZCs5ouW5ou95LqL5Lu2XHJcbiAgICovXHJcbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VudGVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnb3ZlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ092ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdsZWF2ZScpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRHJvcChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VuZCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VuZChlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpUcmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpOb0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gaW5pdCBleHBhbmRlZCAvIHNlbGVjdGVkIC8gY2hlY2tlZCBsaXN0XHJcbiAgICBpZih0aGlzLnNlbGVjdE1vZGUgJiYgdGhpcy5jaGVja2FibGUgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ET1xyXG4gICAgdGhpcy50cmVlTm9kZS5jb21wb25lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUoXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5ub2RlIS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvL3RoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19