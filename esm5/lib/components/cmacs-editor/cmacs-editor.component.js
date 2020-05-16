/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var CmacsEditorComponent = /** @class */ (function () {
    function CmacsEditorComponent() {
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
    }
    /**
     * @return {?}
     */
    CmacsEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
                function (editor) {
                    editor.on('init', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.oninit.emit(obj);
                    }));
                    editor.on('blur', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.onblur.emit(obj);
                    }));
                    editor.on('keyup', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.onkeyup.emit(obj);
                    }));
                    editor.on('Change', (/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.onchange.emit(obj);
                    }));
                }),
                plugins: ['image table textcolor'],
                toolbar: this.toolbar
            };
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.showEditor = true;
        }), 100);
    };
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
    CmacsEditorComponent.ctorParameters = function () { return []; };
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
    return CmacsEditorComponent;
}());
export { CmacsEditorComponent };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBd0JFO1FBZEEsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNULFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0RCxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQzs7UUFFZixrQkFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlKLFlBQU8sR0FBRyxvSEFBb0gsQ0FBQztJQUd4SCxDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtRQUFBLGlCQXVDQztRQXJDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsUUFBUTtvQkFDZixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsaUJBQWlCLEVBQUUsT0FBTztnQkFDMUIsaUJBQWlCLEVBQUUsR0FBRztnQkFDdEIsS0FBSzs7OztnQkFBRSxVQUFDLE1BQVc7b0JBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztvQkFBRSxVQUFDLEdBQUc7d0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7b0JBQUUsVUFBQyxHQUFHO3dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O29CQUFFLFVBQUMsR0FBRzt3QkFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztvQkFBRSxVQUFDLEdBQUc7d0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUE7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFDO1NBQ0g7UUFFRCxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixnSUFBNEM7b0JBRzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7O3lCQUlFLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07MkJBQ04sS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FFTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUE2Q1IsMkJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQTNEWSxvQkFBb0I7OztJQUUvQiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUNoRSxzQ0FBOEQ7O0lBQzlELHVDQUErRDs7SUFDL0Qsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFDM0Isc0NBQXdCOztJQUV4Qiw2Q0FBdUs7O0lBQ3ZLLHVDQUF3STs7SUFDeEksK0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZWRpdG9yJyxcclxuICBleHBvcnRBczogJ2NtYWNzRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxyXG5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25pbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25ibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWlnaHQgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIHN0YXR1c2JhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZSA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgQElucHV0KCkgdG9vbGJhcm1vYmlsZSA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXTtcclxuICBASW5wdXQoKSB0b29sYmFyID0gJ2JvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZvcmVjb2xvcic7XHJcbiAgQElucHV0KCkgdGlueU1jZVNldHRpbmdzITogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy50aW55TWNlU2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yJ10sXHJcbiAgICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJtb2JpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgICAgIHJlc2l6ZTogdGhpcy5yZXNpemUsXHJcbiAgICAgICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICBzdGF0dXNiYXI6IHRoaXMuc3RhdHVzYmFyLFxyXG4gICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnaW1hZ2UnLFxyXG4gICAgICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignYmx1cicsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ua2V5dXAuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yJ10sXHJcbiAgICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRvciA9IHRydWU7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19