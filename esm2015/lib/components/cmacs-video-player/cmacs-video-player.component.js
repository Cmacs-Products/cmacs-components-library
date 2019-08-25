/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
/**
 * @record
 */
export function Source() { }
if (false) {
    /** @type {?} */
    Source.prototype.src;
    /** @type {?} */
    Source.prototype.type;
}
export class CmacsVideoPlayerComponent {
    constructor() {
        this.playerReady = new EventEmitter();
    }
    /**
     * @param {?} api
     * @return {?}
     */
    onPlayerReady(api) {
        this.playerReady.emit(api);
    }
}
CmacsVideoPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-video-player',
                exportAs: 'cmacsVideoPlayer',
                template: "<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\r\n  <vg-overlay-play style=\"background-color: white\"></vg-overlay-play>\r\n  <vg-buffering></vg-buffering>\r\n\r\n  <vg-controls style=\"height: 30px; background-color: #0d1e3b; opacity: 0.5\" [vgAutohide]=\"true\" [vgAutohideTime]=\"2\">\r\n    <vg-play-pause style=\"height: 30px; width: 30px;\"></vg-play-pause>\r\n\r\n    <vg-mute style=\"height: 30px; width: 30px;\"></vg-mute>\r\n    <vg-volume style=\"height: 30px;\"></vg-volume>\r\n\r\n    <vg-scrub-bar style=\"height: 30px;\">\r\n      <vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>\r\n      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n    </vg-scrub-bar>\r\n\r\n    <vg-time-display style=\"height: 30px; width: 45px;line-height: 30px;\" vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n    <vg-fullscreen style=\"height: 30px;\"></vg-fullscreen>\r\n  </vg-controls>\r\n\r\n  <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n    <source *ngFor=\"let source of sources\" src=\"{{source.src}}\" type=\"{{source.type}}\">\r\n  </video>\r\n</vg-player>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: ["vg-time-display::before{content:'-';color:#fff;margin-right:2px}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow::before{content:\"\\e01b\";font-size:28px;background-color:#2a7cff;padding:11px;border-radius:30px}[class*=\" vg-icon-\"]{font-size:19px}vg-volume .volumeValue{height:3px!important;border-radius:100px;background-color:#2d3d5a!important}vg-volume .volumeBackground{height:3px!important;border-radius:100px;background-color:#6a7693!important}vg-volume .volumeKnob{height:12px!important;width:12px!important}vg-scrub-bar-current-time{height:3px!important;border-radius:100px!important;top:calc(50% - 1px)!important;background-color:#6a7693!important}vg-scrub-bar-buffering-time{height:3px!important;border-radius:100px!important;top:calc(50% - 1px)!important}vg-scrub-bar-current-time .slider{height:12px!important;width:12px!important;z-index:2}"]
            }] }
];
/** @nocollapse */
CmacsVideoPlayerComponent.ctorParameters = () => [];
CmacsVideoPlayerComponent.propDecorators = {
    sources: [{ type: Input }],
    playerReady: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CmacsVideoPlayerComponent.prototype.sources;
    /** @type {?} */
    CmacsVideoPlayerComponent.prototype.playerReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQUd2Qiw0QkFHQzs7O0lBRkMscUJBQVk7O0lBQ1osc0JBQWE7O0FBWWYsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQztRQUZVLGdCQUFXLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7SUFFeEQsQ0FBQzs7Ozs7SUFFaEIsYUFBYSxDQUFDLEdBQVM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixncUNBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O2FBRTNCOzs7OztzQkFHRSxLQUFLOzBCQUNMLE1BQU07Ozs7SUFEUCw0Q0FBMkI7O0lBQzNCLGdEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcInZpZGVvZ3VsYXIyL2NvbXBpbGVkL3NyYy9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3VyY2Uge1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy12aWRlby1wbGF5ZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NWaWRlb1BsYXllcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NWaWRlb1BsYXllckNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgc291cmNlczogU291cmNlW107XHJcbiAgQE91dHB1dCgpIHBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8VmdBUEk+ID0gbmV3IEV2ZW50RW1pdHRlcjxWZ0FQST4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvblBsYXllclJlYWR5KGFwaTpWZ0FQSSl7XHJcbiAgICB0aGlzLnBsYXllclJlYWR5LmVtaXQoYXBpKTtcclxuICB9XHJcbn1cclxuIl19