/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class CmacsEditorComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.showEditor = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.height = '250px';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                image_title: true,
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: (/**
                 * @param {?} editor
                 * @return {?}
                 */
                (editor) => {
                    editor.on('init', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.oninit.emit(obj);
                    }));
                    editor.on('blur', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.onblur.emit(obj);
                    }));
                    editor.on('keyup', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.onkeyup.emit(obj);
                    }));
                    editor.on('Change', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.onchange.emit(obj);
                    }));
                }),
                plugins: ['image table textcolor'],
                toolbar: this.toolbar
            };
            this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                switch (this.i18n.getLocale().locale) {
                    case 'de':
                        this.tinyMceSettings.language = 'de';
                        break;
                    case 'en':
                        this.tinyMceSettings.language = null;
                        break;
                    default:
                        this.tinyMceSettings.language = null;
                }
                this.cdr.detectChanges();
            }));
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.showEditor = true;
            this.cdr.detectChanges();
        }), 100);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-editor',
                exportAs: 'cmacsEditor',
                template: "<editor *ngIf=\"showEditor\" [init]=\"tinyMceSettings\" class=\"cmacs-editor\" [disabled]=\"disabled\"></editor>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".cmacs-editor .tox .tox-statusbar{border-top:none}.cmacs-editor .tox .tox-statusbar__text-container{display:none}"]
            }] }
];
/** @nocollapse */
CmacsEditorComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
CmacsEditorComponent.propDecorators = {
    oninit: [{ type: Output }],
    onchange: [{ type: Output }],
    onblur: [{ type: Output }],
    onkeyup: [{ type: Output }],
    disabled: [{ type: Input }],
    height: [{ type: Input }],
    statusbar: [{ type: Input }],
    resize: [{ type: Input }],
    toolbarmobile: [{ type: Input }],
    toolbar: [{ type: Input }],
    tinyMceSettings: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsEditorComponent.prototype.showEditor;
    /** @type {?} */
    CmacsEditorComponent.prototype.oninit;
    /** @type {?} */
    CmacsEditorComponent.prototype.onchange;
    /** @type {?} */
    CmacsEditorComponent.prototype.onblur;
    /** @type {?} */
    CmacsEditorComponent.prototype.onkeyup;
    /** @type {?} */
    CmacsEditorComponent.prototype.disabled;
    /** @type {?} */
    CmacsEditorComponent.prototype.height;
    /** @type {?} */
    CmacsEditorComponent.prototype.statusbar;
    /** @type {?} */
    CmacsEditorComponent.prototype.resize;
    /** @type {?} */
    CmacsEditorComponent.prototype.toolbarmobile;
    /** @type {?} */
    CmacsEditorComponent.prototype.toolbar;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
    /**
     * @type {?}
     * @private
     */
    CmacsEditorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsEditorComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsEditorComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBVS9CLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBaUIvQixZQUFvQixJQUFtQixFQUFVLEdBQXNCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWZ2RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRELFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDOztRQUVmLGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENB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UUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixnSUFBNEM7Z0JBRzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVhRLGFBQWE7WUFIcEIsaUJBQWlCOzs7cUJBa0JoQixNQUFNO3VCQUNOLE1BQU07cUJBQ04sTUFBTTtzQkFDTixNQUFNO3VCQUNOLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBRUwsS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFaTiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUNoRSxzQ0FBOEQ7O0lBQzlELHVDQUErRDs7SUFDL0Qsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFDM0Isc0NBQXdCOztJQUV4Qiw2Q0FBdUs7O0lBQ3ZLLHVDQUF3STs7SUFDeEksK0NBQStCOzs7OztJQUMvQix3Q0FBaUM7Ozs7O0lBRXJCLG9DQUEyQjs7Ozs7SUFBRSxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWVkaXRvcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0VkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25pbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25ibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWlnaHQgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIHN0YXR1c2JhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZSA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgQElucHV0KCkgdG9vbGJhcm1vYmlsZSA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXTtcclxuICBASW5wdXQoKSB0b29sYmFyID0gJ2JvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZvcmVjb2xvcic7XHJcbiAgQElucHV0KCkgdGlueU1jZVNldHRpbmdzITogYW55O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNiYXIsXHJcbiAgICAgICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICAgICAgaW1hZ2VzX3VwbG9hZF91cmw6ICcjJyxcclxuICAgICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25pbml0LmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25rZXl1cC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzLmxhbmd1YWdlID0gJ2RlJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzLmxhbmd1YWdlID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncy5sYW5ndWFnZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRvciA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=