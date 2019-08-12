/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber } from 'ng-zorro-antd/core';
var CmacsProgressComponent = /** @class */ (function () {
    function CmacsProgressComponent() {
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
    Object.defineProperty(CmacsProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || ((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p + "%"; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || this.inferredStrokeWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzSize = changes.nzSize, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
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
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
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
    };
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || this.inferredGapPosition;
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
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
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n    a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n    a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || this.inferredGapDegree;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.nzPercent / 100) * (len - gapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    CmacsProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
        /** @type {?} */
        var ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
        this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
    };
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
    return CmacsProgressComponent;
}());
export { CmacsProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1wcm9ncmVzcy9jbWFjcy1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBSUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPM0Q7SUFBQTtRQVNxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFTZixXQUFNLEdBQTBCLE1BQU0sQ0FBQztRQUU5QixvQkFBZSxHQUFtQyxPQUFPLENBQUM7UUFNbEYsbUJBQWMsR0FBOEI7WUFDMUMsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztRQUVNLGlCQUFZLEdBQTRCLFFBQVEsQ0FBQztRQUNqRCxtQkFBYyxHQUE0QixRQUFRLENBQUM7UUFDbkQsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBbUkxQyxDQUFDO0lBL0hDLHNCQUFJLDZDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUk7Ozs7WUFBQyxVQUFDLENBQVMsSUFBYSxPQUFHLENBQUMsTUFBRyxFQUFQLENBQU8sRUFBQyxDQUFDO1FBQzNELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEs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b0VBQTJCO0lBQ2pDO1FBQWQsV0FBVyxFQUFFOzs2REFBbUI7SUFDZDtRQUFkLFdBQVcsRUFBRTs7aUVBQXVCO0lBQ3hCO1FBQWQsV0FBVyxFQUFFOzsrREFBcUI7SUFxSnpELDZCQUFDO0NBQUEsQUF0S0QsSUFzS0M7U0E5Slksc0JBQXNCOzs7SUFDakMsNENBQXFDOztJQUNyQyx5Q0FBOEI7O0lBQzlCLCtDQUE0Qzs7SUFDNUMsd0NBQThCOztJQUM5QiwwQ0FBd0Q7O0lBQ3hELGtEQUFrRTs7SUFDbEUsMkNBQW1EOztJQUNuRCwrQ0FBMkQ7O0lBQzNELDZDQUF1RDs7SUFDdkQsMENBQW1EOztJQUNuRCx3Q0FBc0Q7O0lBQ3RELCtDQUFtRTs7SUFDbkUsaURBQWtGOztJQUVsRixnREFBMEM7O0lBQzFDLGlEQUEyQzs7SUFDM0MsNENBQW1COztJQUNuQixzQ0FBYTs7SUFDYixnREFJRTs7Ozs7SUFFRiw4Q0FBeUQ7Ozs7O0lBQ3pELGdEQUEyRDs7Ozs7SUFDM0QscURBQXdDOzs7OztJQUN4QyxxREFBb0M7Ozs7O0lBQ3BDLG1EQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzUHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuZXhwb3J0IHR5cGUgQ21hY3NQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XHJcbmV4cG9ydCB0eXBlIENtYWNzUHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJyB8ICdjaXJjbGUnIHwgJ2Rhc2hib2FyZCc7XHJcbmV4cG9ydCB0eXBlIENtYWNzUHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCcgfCAnc3F1YXJlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1wcm9ncmVzcycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Byb2dyZXNzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Byb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgnc2hvd0luZm8nKSBuelNob3dJbmZvID0gdHJ1ZTtcclxuICBASW5wdXQoJ3dpZHRoJykgbnpXaWR0aCA9IDEzMjtcclxuICBASW5wdXQoJ3N0cm9rZUNvbG9yJykgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2l6ZScpIG56U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgnZm9ybWF0JykgbnpGb3JtYXQ/OiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgQElucHV0KCdzdWNjZXNzUGVyY2VudCcpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCdwZXJjZW50JykgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXI7XHJcbiAgQElucHV0KCdzdHJva2VXaWR0aCcpIEBJbnB1dE51bWJlcigpIG56U3Ryb2tlV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoJ2dhcERlZ3JlZScpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlOiBudW1iZXI7XHJcbiAgQElucHV0KCdzdGF0dXMnKSBuelN0YXR1czogQ21hY3NQcm9ncmVzc1N0YXR1c1R5cGU7XHJcbiAgQElucHV0KCd0eXBlJykgbnpUeXBlOiBDbWFjc1Byb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XHJcbiAgQElucHV0KCdnYXBQb3NpdGlvbicpIG56R2FwUG9zaXRpb24/OiBDbWFjc1Byb2dyZXNzR2FwUG9zaXRpb25UeXBlO1xyXG4gIEBJbnB1dCgnc3Ryb2tlTGluZWNhcCcpIG56U3Ryb2tlTGluZWNhcDogQ21hY3NQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJztcclxuXHJcbiAgdHJhaWxQYXRoU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgc3Ryb2tlUGF0aFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHBhdGhTdHJpbmc6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgc3RhdHVzQ29sb3JNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBub3JtYWw6ICcjMTA4ZWU5JyxcclxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxyXG4gICAgc3VjY2VzczogJyM4N2QwNjgnXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IENtYWNzUHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogQ21hY3NQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIGluZmVycmVkU3Ryb2tlV2lkdGg6IG51bWJlciA9IDg7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEdhcFBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEdhcERlZ3JlZTogbnVtYmVyO1xyXG5cclxuICBnZXQgZm9ybWF0dGVyKCk6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCAoKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgKTtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0dXMoKTogQ21hY3NQcm9ncmVzc1N0YXR1c1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdGF0dXMgfHwgdGhpcy5pbmZlcnJlZFN0YXR1cztcclxuICB9XHJcblxyXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCB0aGlzLmluZmVycmVkU3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaXJjbGVTdHlsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuekdhcFBvc2l0aW9uLFxyXG4gICAgICBuelN0cm9rZUxpbmVjYXAsXHJcbiAgICAgIG56R2FwRGVncmVlLFxyXG4gICAgICBuelR5cGUsXHJcbiAgICAgIG56U2l6ZSxcclxuICAgICAgbnpTdGF0dXMsXHJcbiAgICAgIG56UGVyY2VudCxcclxuICAgICAgbnpTdWNjZXNzUGVyY2VudFxyXG4gICAgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56R2FwUG9zaXRpb24gfHwgbnpTdHJva2VMaW5lY2FwIHx8IG56R2FwRGVncmVlIHx8IG56VHlwZSB8fCBuelBlcmNlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U2l6ZSkge1xyXG4gICAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkU3Ryb2tlV2lkdGggPSA2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xyXG4gICAgICBpZiAoZmlsbEFsbCkge1xyXG4gICAgICAgIGlmICgoaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSAmJiB0aGlzLm56U3VjY2Vzc1BlcmNlbnQhID49IDEwMCkgfHwgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpUeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0cm9rZVdpZHRoID0gNjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEdhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEdhcERlZ3JlZSA9IDc1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScpIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkR2FwRGVncmVlID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCB0aGlzLmluZmVycmVkR2FwUG9zaXRpb247XHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcclxuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xyXG5cclxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cclxuICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxyXG4gICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcclxuXHJcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcclxuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgdGhpcy5pbmZlcnJlZEdhcERlZ3JlZTtcclxuXHJcbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xyXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXHJcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3Ryb2tlUGF0aFN0eWxlID0ge1xyXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeyh0aGlzLm56UGVyY2VudCAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXHJcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0NpcmNsZSA9IHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XHJcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ2NoZWNrJyA6IHRoaXMuc3RhdHVzID09PSAnZXhjZXB0aW9uJyA/ICdjbG9zZScgOiAnJztcclxuXHJcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAoaXNDaXJjbGUgPyAnLW8nIDogJy1jaXJjbGUtZmlsbCcpIDogJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==