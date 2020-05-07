/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var CmacsEditorComponent = /** @class */ (function () {
    function CmacsEditorComponent() {
        var _this = this;
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
            function (editor) {
                editor.on('init', (/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.oninit.emit(obj);
                }));
                editor.on('Change', (/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.onchange.emit(obj);
                }));
            }),
            plugins: ['image table'],
            toolbar: 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor'
        };
    }
    /**
     * @return {?}
     */
    CmacsEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        disabled: [{ type: Input }],
        height: [{ type: Input }],
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
    CmacsEditorComponent.prototype.disabled;
    /** @type {?} */
    CmacsEditorComponent.prototype.height;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBMkNFO1FBQUEsaUJBQWlCO1FBakNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RCxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUc7WUFDekIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXO2lCQUM1STthQUNGO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGlCQUFpQixFQUFFLE9BQU87WUFDMUIsaUJBQWlCLEVBQUUsR0FBRztZQUN0QixLQUFLOzs7O1lBQUUsVUFBQyxNQUFXO2dCQUNqQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7Z0JBQUUsVUFBQyxHQUFHO29CQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O2dCQUFFLFVBQUMsR0FBRztvQkFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxvSEFBb0g7U0FDOUgsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixnSUFBNEM7b0JBRzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7O3lCQUlFLE1BQU07MkJBQ04sTUFBTTsyQkFFTixLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFtQ1IsMkJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTNDWSxvQkFBb0I7OztJQUUvQiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUVoRSx3Q0FBNEI7O0lBQzVCLHNDQUFrQzs7SUFDbEMsK0NBeUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZWRpdG9yJyxcclxuICBleHBvcnRBczogJ2NtYWNzRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxyXG5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIHRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgIG1vYmlsZToge1xyXG4gICAgICB0aGVtZTogJ21vYmlsZScsXHJcbiAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUnXSxcclxuICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvcidcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICByZXNpemU6IHRydWUsXHJcbiAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSddLFxyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZvcmVjb2xvcidcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFZGl0b3IgPSB0cnVlO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==