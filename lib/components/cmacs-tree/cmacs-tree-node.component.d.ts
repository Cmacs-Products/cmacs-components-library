import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzFormatBeforeDropEvent, NzNoAnimationDirective, NzTreeNode } from 'ng-zorro-antd/core';
import { CmacsTreeService } from './cmacs-tree.service';
export declare class CmacsTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: CmacsTreeService;
    private ngZone;
    private renderer;
    private elRef;
    private cdr;
    nzNoAnimation?: NzNoAnimationDirective;
    dragElement: ElementRef;
    treeNode: NzTreeNode;
    showLine: boolean;
    showExpand: boolean;
    expandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    checkable: boolean;
    asyncData: boolean;
    hideUnMatched: boolean;
    noAnimation: boolean;
    selectMode: boolean;
    showIcon: boolean;
    inlineEdit: boolean;
    radio: boolean;
    index: number;
    treeTemplate: TemplateRef<void>;
    beforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    onaddchild: EventEmitter<NzTreeNode>;
    draggable: boolean;
    /**
     * @deprecated use
     * expandAll instead
     */
    defaultExpandAll: boolean;
    expandAll: boolean;
    searchValue: string;
    prefixCls: string;
    highlightKeys: string[];
    nzNodeClass: {};
    nzNodeSwitcherClass: {};
    nzNodeContentClass: {};
    nzNodeCheckboxClass: {};
    nzNodeContentIconClass: {};
    nzNodeContentLoadingClass: {};
    /**
     * drag var
     */
    destroy$: Subject<{}>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    _searchValue: string;
    _draggable: boolean;
    _expandAll: boolean;
    readonly nzIcon: string;
    readonly canDraggable: boolean | null;
    readonly isShowLineIcon: boolean;
    readonly isShowSwitchIcon: boolean;
    readonly isSwitcherOpen: boolean;
    readonly isSwitcherClose: boolean;
    readonly displayStyle: string;
    /**
     * reset node class
     */
    setClassMap(): void;
    onMousedown(event: MouseEvent): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    checkSubTreeSelection(): boolean;
    visitNode(node: any, hashMap: any): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    onaddchildevt($event: Event): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    private newMethod;
    handleDragEnd(e: DragEvent): void;
    /**
     * 监听拖拽事件
     */
    handDragEvent(): void;
    isTemplateRef(value: {}): boolean;
    markForCheck(): void;
    constructor(nzTreeService: CmacsTreeService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef, cdr: ChangeDetectorRef, nzNoAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
