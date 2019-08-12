/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber } from 'ng-zorro-antd/core';
export class CmacsProgressComponent {
    constructor() {
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzType = 'line';
        this.nzStrokeLinecap = 'round';
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.inferredStrokeWidth = 8;
    }
    /**
     * @return {?}
     */
    get formatter() {
        return this.nzFormat || ((/**
         * @param {?} p
         * @return {?}
         */
        (p) => `${p}%`));
    }
    /**
     * @return {?}
     */
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this.nzStrokeWidth || this.inferredStrokeWidth;
    }
    /**
     * @return {?}
     */
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzGapPosition, nzStrokeLinecap, nzGapDegree, nzType, nzSize, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent) {
            this.updatePathStyles();
        }
        if (nzSize) {
            if (this.nzSize === 'small') {
                this.inferredStrokeWidth = 6;
            }
        }
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
            this.updateIcon();
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
            this.updateIcon();
        }
        if (nzType) {
            if (this.nzType !== 'line') {
                this.inferredStrokeWidth = 6;
            }
            if (this.nzType === 'dashboard') {
                this.inferredGapPosition = 'bottom';
                this.inferredGapDegree = 75;
            }
            if (this.nzType === 'circle') {
                this.inferredGapDegree = 0;
            }
        }
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        const gapPosition = this.nzGapPosition || this.inferredGapPosition;
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
    a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
    a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        /** @type {?} */
        const gapDegree = this.nzGapDegree || this.inferredGapDegree;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.nzPercent / 100) * (len - gapDegree)}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
        /** @type {?} */
        const ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
        this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
    }
}
CmacsProgressComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-progress',
                exportAs: 'cmacsProgress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n     [class.ant-progress-line]=\"nzType == 'line'\"\r\n     [class.ant-progress-small]=\"nzSize == 'small'\"\r\n     [class.ant-progress-show-info]=\"nzShowInfo\"\r\n     [class.ant-progress-circle]=\"isCircleStyle\">\r\n  <!-- Line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div class=\"ant-progress-bg\"\r\n             [style.width.%]=\"nzPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.background]=\"nzStrokeColor\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n        <div class=\"ant-progress-success-bg\"\r\n             [style.width.%]=\"nzSuccessPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n  <!-- Circle/Dashboard progress -->\r\n  <div [style.width.px]=\"this.nzWidth\"\r\n       [style.height.px]=\"this.nzWidth\"\r\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n       class=\"ant-progress-inner\"\r\n       *ngIf=\"isCircleStyle\">\r\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\r\n      <path class=\"ant-progress-circle-trail\"\r\n            stroke=\"#f3f3f3\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke-width]=\"strokeWidth\"\r\n            [ngStyle]=\"trailPathStyle\"\r\n            [attr.d]=\"pathString\"></path>\r\n      <path class=\"ant-progress-circle-path\"\r\n            [attr.d]=\"pathString\"\r\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke]=\"nzStrokeColor || statusColorMap[status]\"\r\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n            [ngStyle]=\"strokePathStyle\"></path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
            }] }
];
CmacsProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input, args: ['showInfo',] }],
    nzWidth: [{ type: Input, args: ['width',] }],
    nzStrokeColor: [{ type: Input, args: ['strokeColor',] }],
    nzSize: [{ type: Input, args: ['size',] }],
    nzFormat: [{ type: Input, args: ['format',] }],
    nzSuccessPercent: [{ type: Input, args: ['successPercent',] }],
    nzPercent: [{ type: Input, args: ['percent',] }],
    nzStrokeWidth: [{ type: Input, args: ['strokeWidth',] }],
    nzGapDegree: [{ type: Input, args: ['gapDegree',] }],
    nzStatus: [{ type: Input, args: ['status',] }],
    nzType: [{ type: Input, args: ['type',] }],
    nzGapPosition: [{ type: Input, args: ['gapPosition',] }],
    nzStrokeLinecap: [{ type: Input, args: ['strokeLinecap',] }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsProgressComponent.prototype, "nzSuccessPercent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsProgressComponent.prototype, "nzPercent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsProgressComponent.prototype, "nzStrokeWidth", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsProgressComponent.prototype, "nzGapDegree", void 0);
if (false) {
    /** @type {?} */
    CmacsProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzWidth;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzSize;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzFormat;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzPercent;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzStatus;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzType;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    CmacsProgressComponent.prototype.nzStrokeLinecap;
    /** @type {?} */
    CmacsProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    CmacsProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    CmacsProgressComponent.prototype.pathString;
    /** @type {?} */
    CmacsProgressComponent.prototype.icon;
    /** @type {?} */
    CmacsProgressComponent.prototype.statusColorMap;
    /**
     * @type {?}
     * @private
     */
    CmacsProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    CmacsProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    CmacsProgressComponent.prototype.inferredStrokeWidth;
    /**
     * @type {?}
     * @private
     */
    CmacsProgressComponent.prototype.inferredGapPosition;
    /**
     * @type {?}
     * @private
     */
    CmacsProgressComponent.prototype.inferredGapDegree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1wcm9ncmVzcy9jbWFjcy1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBSUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFlM0QsTUFBTSxPQUFPLHNCQUFzQjtJQVJuQztRQVNxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFTZixXQUFNLEdBQTBCLE1BQU0sQ0FBQztRQUU5QixvQkFBZSxHQUFtQyxPQUFPLENBQUM7UUFNbEYsbUJBQWMsR0FBOEI7WUFDMUMsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztRQUVNLGlCQUFZLEdBQTRCLFFBQVEsQ0FBQztRQUNqRCxtQkFBYyxHQUE0QixRQUFRLENBQUM7UUFDbkQsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBbUkxQyxDQUFDOzs7O0lBL0hDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSTs7OztRQUFDLENBQUMsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLG1C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QUFFOzs2REFBdUI7QUFDeEI7SUFBZCxXQUFXLEVBQUU7OzJEQUFxQjs7O0lBUnZELDRDQUFxQzs7SUFDckMseUNBQThCOztJQUM5QiwrQ0FBNEM7O0lBQzVDLHdDQUE4Qjs7SUFDOUIsMENBQXdEOztJQUN4RCxrREFBa0U7O0lBQ2xFLDJDQUFtRDs7SUFDbkQsK0NBQTJEOztJQUMzRCw2Q0FBdUQ7O0lBQ3ZELDBDQUFtRDs7SUFDbkQsd0NBQXNEOztJQUN0RCwrQ0FBbUU7O0lBQ25FLGlEQUFrRjs7SUFFbEYsZ0RBQTBDOztJQUMxQyxpREFBMkM7O0lBQzNDLDRDQUFtQjs7SUFDbkIsc0NBQWE7O0lBQ2IsZ0RBSUU7Ozs7O0lBRUYsOENBQXlEOzs7OztJQUN6RCxnREFBMkQ7Ozs7O0lBQzNELHFEQUF3Qzs7Ozs7SUFDeEMscURBQW9DOzs7OztJQUNwQyxtREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc1Byb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XHJcbmV4cG9ydCB0eXBlIENtYWNzUHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xyXG5leHBvcnQgdHlwZSBDbWFjc1Byb2dyZXNzVHlwZVR5cGUgPSAnbGluZScgfCAnY2lyY2xlJyB8ICdkYXNoYm9hcmQnO1xyXG5leHBvcnQgdHlwZSBDbWFjc1Byb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUgPSAncm91bmQnIHwgJ3NxdWFyZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtcHJvZ3Jlc3MnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQcm9ncmVzcycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ3Nob3dJbmZvJykgbnpTaG93SW5mbyA9IHRydWU7XHJcbiAgQElucHV0KCd3aWR0aCcpIG56V2lkdGggPSAxMzI7XHJcbiAgQElucHV0KCdzdHJva2VDb2xvcicpIG56U3Ryb2tlQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoJ3NpemUnKSBuelNpemU6IHN0cmluZztcclxuICBASW5wdXQoJ2Zvcm1hdCcpIG56Rm9ybWF0PzogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgnc3VjY2Vzc1BlcmNlbnQnKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgncGVyY2VudCcpIEBJbnB1dE51bWJlcigpIG56UGVyY2VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgnc3Ryb2tlV2lkdGgnKSBASW5wdXROdW1iZXIoKSBuelN0cm9rZVdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCdnYXBEZWdyZWUnKSBASW5wdXROdW1iZXIoKSBuekdhcERlZ3JlZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgnc3RhdHVzJykgbnpTdGF0dXM6IENtYWNzUHJvZ3Jlc3NTdGF0dXNUeXBlO1xyXG4gIEBJbnB1dCgndHlwZScpIG56VHlwZTogQ21hY3NQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgnZ2FwUG9zaXRpb24nKSBuekdhcFBvc2l0aW9uPzogQ21hY3NQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZTtcclxuICBASW5wdXQoJ3N0cm9rZUxpbmVjYXAnKSBuelN0cm9rZUxpbmVjYXA6IENtYWNzUHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XHJcblxyXG4gIHRyYWlsUGF0aFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHN0cm9rZVBhdGhTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIHN0YXR1c0NvbG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgbm9ybWFsOiAnIzEwOGVlOScsXHJcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcclxuICAgIHN1Y2Nlc3M6ICcjODdkMDY4J1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY2FjaGVkU3RhdHVzOiBDbWFjc1Byb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xyXG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IENtYWNzUHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0cm9rZVdpZHRoOiBudW1iZXIgPSA4O1xyXG4gIHByaXZhdGUgaW5mZXJyZWRHYXBQb3NpdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgaW5mZXJyZWRHYXBEZWdyZWU6IG51bWJlcjtcclxuXHJcbiAgZ2V0IGZvcm1hdHRlcigpOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpGb3JtYXQgfHwgKChwOiBudW1iZXIpOiBzdHJpbmcgPT4gYCR7cH0lYCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzKCk6IENtYWNzUHJvZ3Jlc3NTdGF0dXNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm56U3Ryb2tlV2lkdGggfHwgdGhpcy5pbmZlcnJlZFN0cm9rZVdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbnpHYXBQb3NpdGlvbixcclxuICAgICAgbnpTdHJva2VMaW5lY2FwLFxyXG4gICAgICBuekdhcERlZ3JlZSxcclxuICAgICAgbnpUeXBlLFxyXG4gICAgICBuelNpemUsXHJcbiAgICAgIG56U3RhdHVzLFxyXG4gICAgICBuelBlcmNlbnQsXHJcbiAgICAgIG56U3VjY2Vzc1BlcmNlbnRcclxuICAgIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuekdhcFBvc2l0aW9uIHx8IG56U3Ryb2tlTGluZWNhcCB8fCBuekdhcERlZ3JlZSB8fCBuelR5cGUgfHwgbnpQZXJjZW50KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelNpemUpIHtcclxuICAgICAgaWYgKHRoaXMubnpTaXplID09PSAnc21hbGwnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0cm9rZVdpZHRoID0gNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelN0YXR1cykge1xyXG4gICAgICB0aGlzLmNhY2hlZFN0YXR1cyA9IHRoaXMubnpTdGF0dXMgfHwgdGhpcy5jYWNoZWRTdGF0dXM7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xyXG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodGhpcy5uelBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMDtcclxuICAgICAgaWYgKGZpbGxBbGwpIHtcclxuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gdGhpcy5jYWNoZWRTdGF0dXM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56VHlwZSkge1xyXG4gICAgICBpZiAodGhpcy5uelR5cGUgIT09ICdsaW5lJykge1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdHJva2VXaWR0aCA9IDY7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJykge1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRHYXBQb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRHYXBEZWdyZWUgPSA3NTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEdhcERlZ3JlZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhdGhTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xyXG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLm56R2FwUG9zaXRpb24gfHwgdGhpcy5pbmZlcnJlZEdhcFBvc2l0aW9uO1xyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcclxuXHJcbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XHJcbiAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cclxuICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XHJcblxyXG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XHJcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLm56R2FwRGVncmVlIHx8IHRoaXMuaW5mZXJyZWRHYXBEZWdyZWU7XHJcblxyXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxyXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcclxuICAgIH07XHJcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHsodGhpcy5uelBlcmNlbnQgLyAxMDApICogKGxlbiAtIGdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxyXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDaXJjbGUgPSB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJyA/ICdjaGVjaycgOiB0aGlzLnN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicgPyAnY2xvc2UnIDogJyc7XHJcblxyXG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKGlzQ2lyY2xlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=