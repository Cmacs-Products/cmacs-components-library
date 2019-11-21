import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import { NzTreeService } from './cmacs-tree.service';
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: NzTreeService): NzTreeBaseService;
export declare class CmacsTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    showIcon: boolean;
    showExpand: boolean;
    showLine: boolean;
    expandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    checkable: boolean;
    asyncData: boolean;
    draggable: boolean;
    expandAll: boolean;
    hideUnMatched: boolean;
    selectMode: boolean;
    nzCheckStrictly: boolean;
    nzBlockNode: boolean;
    inlineEdit: boolean;
    onaddchild: EventEmitter<NzTreeNode>;
    /**
     * @deprecated use
     * expandAll instead
     */
    defaultExpandAll: boolean;
    beforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzMultiple: boolean;
    nzData: any[];
    /**
     * @deprecated use
     * nzExpandedKeys instead
     */
    nzDefaultExpandedKeys: string[];
    /**
     * @deprecated use
     * nzSelectedKeys instead
     */
    nzDefaultSelectedKeys: string[];
    /**
     * @deprecated use
     * nzCheckedKeys instead
     */
    nzDefaultCheckedKeys: string[];
    nzExpandedKeys: string[];
    nzSelectedKeys: string[];
    nzCheckedKeys: string[];
    searchValue: string;
    /**
     * To render nodes if root is changed
     */
    readonly nzNodes: NzTreeNode[];
    onaddchildevt($event: NzTreeNode): void;
    readonly nzExpandedKeysChange: EventEmitter<string[]>;
    readonly nzSelectedKeysChange: EventEmitter<string[]>;
    readonly nzCheckedKeysChange: EventEmitter<string[]>;
    readonly searchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use
     * searchValueChange instead
     */
    readonly nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    treeTemplate: TemplateRef<any>;
    _searchValue: string;
    _nzMultiple: boolean;
    nzDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<{}>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: NzTreeBaseService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    addParent(node: any): void;
    ngOnDestroy(): void;
}
