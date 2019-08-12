import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare type CmacsProgressGapPositionType = 'top' | 'bottom' | 'left' | 'right';
export declare type CmacsProgressStatusType = 'success' | 'exception' | 'active' | 'normal';
export declare type CmacsProgressTypeType = 'line' | 'circle' | 'dashboard';
export declare type CmacsProgressStrokeLinecapType = 'round' | 'square';
export declare class CmacsProgressComponent implements OnInit, OnChanges {
    nzShowInfo: boolean;
    nzWidth: number;
    nzStrokeColor: string;
    nzSize: string;
    nzFormat?: (percent: number) => string;
    nzSuccessPercent?: number;
    nzPercent: number;
    nzStrokeWidth: number;
    nzGapDegree: number;
    nzStatus: CmacsProgressStatusType;
    nzType: CmacsProgressTypeType;
    nzGapPosition?: CmacsProgressGapPositionType;
    nzStrokeLinecap: CmacsProgressStrokeLinecapType;
    trailPathStyle: {
        [key: string]: string;
    };
    strokePathStyle: {
        [key: string]: string;
    };
    pathString: string;
    icon: string;
    statusColorMap: {
        [key: string]: string;
    };
    private cachedStatus;
    private inferredStatus;
    private inferredStrokeWidth;
    private inferredGapPosition;
    private inferredGapDegree;
    readonly formatter: (percent: number) => string;
    readonly status: CmacsProgressStatusType;
    readonly strokeWidth: number;
    readonly isCircleStyle: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePathStyles(): void;
    updateIcon(): void;
}
