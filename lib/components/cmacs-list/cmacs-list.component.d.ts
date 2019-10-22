import { ElementRef, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsListGrid } from './interface';
export declare class CmacsListComponent implements OnInit, OnChanges {
    private el;
    private updateHostClassService;
    dataSource: any[];
    bordered: boolean;
    grid: CmacsListGrid;
    header: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    itemLayout: 'vertical' | 'horizontal';
    renderItem: TemplateRef<void>;
    loading: boolean;
    classicGrid: boolean;
    loadMore: TemplateRef<void>;
    pagination: TemplateRef<void>;
    size: NzSizeLDSType;
    split: boolean;
    noResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(): void;
}
