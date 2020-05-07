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
        this.onblur = new EventEmitter();
        this.height = '250px';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor';
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
    onblur: [{ type: Output }],
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxvQkFBb0I7SUFlL0I7UUFiQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckQsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7O1FBRWYsa0JBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5SixZQUFPLEdBQUcsb0hBQW9ILENBQUM7SUFHeEgsQ0FBQzs7OztJQUVqQixRQUFRO1FBRU4sSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLFFBQVE7b0JBQ2YsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLGlCQUFpQixFQUFFLEdBQUc7Z0JBQ3RCLEtBQUs7Ozs7Z0JBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O29CQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7b0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztvQkFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxFQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFBO2dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQztTQUNIO1FBRUQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGdJQUE0QztnQkFHNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFJRSxNQUFNO3VCQUNOLE1BQU07cUJBQ04sTUFBTTt1QkFDTixLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUVMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBWE4sMENBQW1COztJQUNuQixzQ0FBOEQ7O0lBQzlELHdDQUFnRTs7SUFDaEUsc0NBQThEOztJQUM5RCx3Q0FBNEI7O0lBQzVCLHNDQUEwQjs7SUFDMUIseUNBQTJCOztJQUMzQixzQ0FBd0I7O0lBRXhCLDZDQUF1Szs7SUFDdkssdUNBQXdJOztJQUN4SSwrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcblxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhlaWdodCA9ICcyNTBweCc7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvciddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IHwgZm9yZWNvbG9yJztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNiYXIsXHJcbiAgICAgICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICAgICAgaW1hZ2VzX3VwbG9hZF91cmw6ICcjJyxcclxuICAgICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25pbml0LmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=