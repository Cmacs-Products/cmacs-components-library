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
        this.height = '250px';
        this.statusbar = false;
        this.resize = false;
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
        statusbar: [{ type: Input }],
        resize: [{ type: Input }],
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
    CmacsEditorComponent.prototype.statusbar;
    /** @type {?} */
    CmacsEditorComponent.prototype.resize;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBb0JFO1FBVkEsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNULFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHdkQsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHUixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtRQUFBLGlCQW1DQztRQWpDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsUUFBUTtvQkFDZixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCw0Q0FBNEM7d0JBQzVDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXO3FCQUM1STtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixpQkFBaUIsRUFBRSxPQUFPO2dCQUMxQixpQkFBaUIsRUFBRSxHQUFHO2dCQUN0QixLQUFLOzs7O2dCQUFFLFVBQUMsTUFBVztvQkFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O29CQUFFLFVBQUMsR0FBRzt3QkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztvQkFBRSxVQUFDLEdBQUc7d0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUE7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsb0hBQW9IO2FBQzlILENBQUM7U0FDSDtRQUVELFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGdJQUE0QztvQkFHNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7eUJBSUUsTUFBTTsyQkFDTixNQUFNOzJCQUVOLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUF5Q1IsMkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQW5EWSxvQkFBb0I7OztJQUUvQiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUVoRSx3Q0FBNEI7O0lBQzVCLHNDQUEwQjs7SUFDMUIseUNBQTJCOztJQUMzQixzQ0FBd0I7O0lBQ3hCLCtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWVkaXRvcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0VkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWlnaHQgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIHN0YXR1c2JhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRpbnlNY2VTZXR0aW5ncyE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMudGlueU1jZVNldHRpbmdzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgICB0aGVtZTogJ21vYmlsZScsXHJcbiAgICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlJ10sXHJcbiAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvcidcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnaW1hZ2UnLFxyXG4gICAgICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSddLFxyXG4gICAgICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3QgfCBmb3JlY29sb3InXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRvciA9IHRydWU7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19