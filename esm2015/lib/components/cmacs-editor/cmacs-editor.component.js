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
        this.tinyMceSettings = {
            mobile: {
                theme: 'mobile',
                plugins: ['image table'],
                toolbar: [
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
    /**
     * @return {?}
     */
    ngOnInit() {
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
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxvQkFBb0I7SUFtQy9CO1FBakNBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3ZELFdBQU0sR0FBVyxPQUFPLENBQUM7UUFDekIsb0JBQWUsR0FBRztZQUN6QixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVc7aUJBQzVJO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsS0FBSztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxJQUFJO1lBQ1osaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsaUJBQWlCLEVBQUUsT0FBTztZQUMxQixpQkFBaUIsRUFBRSxHQUFHO1lBQ3RCLEtBQUs7Ozs7WUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7Z0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztnQkFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDeEIsT0FBTyxFQUFFLG9IQUFvSDtTQUM5SCxDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGdJQUE0QztnQkFHNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFJRSxNQUFNO3VCQUNOLE1BQU07dUJBRU4sS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFOTiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUVoRSx3Q0FBNEI7O0lBQzVCLHNDQUFrQzs7SUFDbEMsK0NBeUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZWRpdG9yJyxcclxuICBleHBvcnRBczogJ2NtYWNzRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxyXG5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIHRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgIG1vYmlsZToge1xyXG4gICAgICB0aGVtZTogJ21vYmlsZScsXHJcbiAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUnXSxcclxuICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvcidcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICByZXNpemU6IHRydWUsXHJcbiAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSddLFxyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZvcmVjb2xvcidcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFZGl0b3IgPSB0cnVlO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==