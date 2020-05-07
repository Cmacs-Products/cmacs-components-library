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
                template: "<editor *ngIf=\"showEditor\" [init]=\"tinyMceSettings\" class=\"cmacs-editor\"></editor>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".cmacs-editor .tox .tox-statusbar{border-top:none}.cmacs-editor .tox .tox-statusbar__text-container{display:none}"]
            }] }
];
/** @nocollapse */
CmacsEditorComponent.ctorParameters = () => [];
CmacsEditorComponent.propDecorators = {
    oninit: [{ type: Output }],
    onchange: [{ type: Output }],
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
    CmacsEditorComponent.prototype.height;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxvQkFBb0I7SUFrQy9CO1FBaENBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELFdBQU0sR0FBVyxPQUFPLENBQUM7UUFDekIsb0JBQWUsR0FBRztZQUN6QixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVc7aUJBQzVJO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsS0FBSztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxJQUFJO1lBQ1osaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsaUJBQWlCLEVBQUUsT0FBTztZQUMxQixpQkFBaUIsRUFBRSxHQUFHO1lBQ3RCLEtBQUs7Ozs7WUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7Z0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztnQkFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDeEIsT0FBTyxFQUFFLG9IQUFvSDtTQUM5SCxDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHdHQUE0QztnQkFHNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFJRSxNQUFNO3VCQUNOLE1BQU07cUJBRU4sS0FBSzs4QkFDTCxLQUFLOzs7O0lBTE4sMENBQW1COztJQUNuQixzQ0FBOEQ7O0lBQzlELHdDQUFnRTs7SUFFaEUsc0NBQWtDOztJQUNsQywrQ0F5QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcblxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJzI1MHB4JztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MgPSB7XHJcbiAgICBtb2JpbGU6IHtcclxuICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlJ10sXHJcbiAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgcmVzaXplOiB0cnVlLFxyXG4gICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICB9KTtcclxuICAgICAgZWRpdG9yLm9uKCdDaGFuZ2UnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUnXSxcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3QgfCBmb3JlY29sb3InXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=