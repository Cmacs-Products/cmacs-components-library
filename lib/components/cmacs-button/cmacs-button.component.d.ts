import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective } from 'ng-zorro-antd/core';
export declare type CmacsButtonType = 'primary' | 'dashed' | 'danger' | 'default';
export declare type CmacsButtonShape = 'circle' | 'round' | null;
export declare class CmacsButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    private updateHostClassService;
    private zone;
    private waveConfig;
    private animationType;
    readonly el: HTMLElement;
    private iconElement;
    private iconOnly;
    contentElement: ElementRef;
    listOfIconElement: QueryList<ElementRef>;
    nzWave: NzWaveDirective;
    nzBlock: boolean;
    nzGhost: boolean;
    nzSearch: boolean;
    loading: boolean;
    type: CmacsButtonType;
    shape: CmacsButtonShape;
    size: NzSizeLDSType;
    setClassMap(): void;
    updateIconDisplay(value: boolean): void;
    checkContent(): void;
    moveIcon(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, updateHostClassService: NzUpdateHostClassService, zone: NgZone, waveConfig: NzWaveConfig, animationType: string);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
