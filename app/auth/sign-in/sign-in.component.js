"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var app_service_1 = require("../../services/app.service");
var SignInComponent = (function () {
    function SignInComponent(page, routerExtensions, fonticon, appService) {
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        this.appService = appService;
        page.actionBarHidden = true;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    SignInComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.appService.android_setStatusBarTransparant();
        this.appService.android_setNavigationBarRGBAColor(30, 71, 129, 254);
        console.log("loading sign-in.component.ts");
    };
    Object.defineProperty(SignInComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.submit = function () {
        console.log("submit");
        this.routerExtensions.navigate(['/home'], {
            transition: {
                name: "slide"
            }
        });
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        console.log("on distory");
    };
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    SignInComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SignInComponent.prototype.onSignUpTap = function () {
        this.routerExtensions.navigate(['/auth/sign-up'], {
            transition: {
                name: "slide"
            }
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SignInComponent.prototype, "drawerComponent", void 0);
    SignInComponent = __decorate([
        core_1.Component({
            selector: "sign-in",
            moduleId: module.id,
            templateUrl: "./sign-in.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            app_service_1.AppService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxpRUFBa0c7QUFDbEcsc0VBQW9GO0FBQ3BGLHVFQUErRDtBQUMvRCxzREFBK0Q7QUFFL0QsZ0NBQStCO0FBQy9CLDBEQUF1RDtBQVF2RDtJQUVJLHlCQUNJLElBQVUsRUFDRixnQkFBa0MsRUFDbEMsUUFBNEIsRUFDNUIsVUFBcUI7UUFGckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBRTdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFTRDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUloRCxDQUFDO0lBRUQsc0JBQUksaURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELGdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNEOzs7a0VBRzhEO0lBQzlELDJDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzlDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTzthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUE5Q29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7NERBQUM7SUFkcEQsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FJWSxXQUFJO1lBQ2dCLHlCQUFnQjtZQUN4Qiw4Q0FBa0I7WUFDakIsd0JBQVU7T0FOeEIsZUFBZSxDQTZEM0I7SUFBRCxzQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC5zZXJ2aWNlJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2lnbi1pblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbi1pbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGFwcFNlcnZpY2U6QXBwU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5hbmRyb2lkX3NldFN0YXR1c0JhclRyYW5zcGFyYW50KCk7XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLmFuZHJvaWRfc2V0TmF2aWdhdGlvbkJhclJHQkFDb2xvcigzMCwgNzEsIDEyOSwgMjU0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgc2lnbi1pbi5jb21wb25lbnQudHNcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICBzdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gZGlzdG9yeVwiKVxyXG4gICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbiAgICBvblNpZ25VcFRhcCgpOiB2b2lkIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hdXRoL3NpZ24tdXAnXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==