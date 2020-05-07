/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class CmacsEditorComponent {
    constructor() {
        this.showEditor = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.height = '250px';
        this.statusbar = false;
        this.resize = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table'],
                    toolbar: [
                        // tslint:disable-next-line: max-line-length
                        'bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'
                    ]
                },
                menubar: false,
                image_title: true,
                resize: true,
                automatic_uploads: true,
                height: this.height,
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
                    editor.on('Change', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.onchange.emit(obj);
                    }));
                }),
                plugins: ['image table'],
                toolbar: 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor'
            };
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.showEditor = true;
        }), 100);
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
CmacsEditorComponent.ctorParameters = () => [];
CmacsEditorComponent.propDecorators = {
    oninit: [{ type: Output }],
    onchange: [{ type: Output }],
    disabled: [{ type: Input }],
    height: [{ type: Input }],
    statusbar: [{ type: Input }],
    resize: [{ type: Input }],
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
    CmacsEditorComponent.prototype.disabled;
    /** @type {?} */
    CmacsEditorComponent.prototype.height;
    /** @type {?} */
    CmacsEditorComponent.prototype.statusbar;
    /** @type {?} */
    CmacsEditorComponent.prototype.resize;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxvQkFBb0I7SUFZL0I7UUFWQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RCxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUdSLENBQUM7Ozs7SUFFakIsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLDRDQUE0Qzt3QkFDNUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVc7cUJBQzVJO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxLQUFLO2dCQUNkLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixNQUFNLEVBQUUsSUFBSTtnQkFDWixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLGlCQUFpQixFQUFFLEdBQUc7Z0JBQ3RCLEtBQUs7Ozs7Z0JBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O29CQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7b0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLENBQUMsRUFBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQTtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxvSEFBb0g7YUFDOUgsQ0FBQztTQUNIO1FBRUQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGdJQUE0QztnQkFHNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFJRSxNQUFNO3VCQUNOLE1BQU07dUJBRU4sS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBUk4sMENBQW1COztJQUNuQixzQ0FBOEQ7O0lBQzlELHdDQUFnRTs7SUFFaEUsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFDM0Isc0NBQXdCOztJQUN4QiwrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcblxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gJzI1MHB4JztcclxuICBASW5wdXQoKSBzdGF0dXNiYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXNpemUgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSddLFxyXG4gICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUnXSxcclxuICAgICAgICB0b29sYmFyOiAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IHwgZm9yZWNvbG9yJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFZGl0b3IgPSB0cnVlO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==