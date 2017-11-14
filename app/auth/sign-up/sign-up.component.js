"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var app_service_1 = require("../../services/app.service");
var SignUpComponent = (function () {
    function SignUpComponent(page, routerExtensions, fonticon, appService) {
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        this.appService = appService;
        page.actionBarHidden = true;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    SignUpComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.appService.android_setStatusBarTransparant();
        this.appService.android_setNavigationBarRGBAColor(30, 71, 129, 254);
        console.log("loading sign-up.component.ts");
    };
    Object.defineProperty(SignUpComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.submit = function () {
        console.log("submit");
        this.routerExtensions.navigate(['/home'], {
            transition: {
                name: "slide"
            }
        });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        console.log("on distory");
    };
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    SignUpComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SignUpComponent.prototype.onSignUpTap = function () {
        this.routerExtensions.navigate(['auth/sign-in'], {
            transition: {
                name: "slideRight"
            }
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SignUpComponent.prototype, "drawerComponent", void 0);
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-auth/sign-up',
            templateUrl: './sign-up.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            app_service_1.AppService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxpRUFBa0c7QUFDbEcsc0VBQW9GO0FBQ3BGLHNEQUErRDtBQUMvRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLDBEQUF1RDtBQVF2RDtJQUVFLHlCQUNFLElBQVUsRUFDRixnQkFBa0MsRUFDbEMsUUFBNEIsRUFDNUIsVUFBcUI7UUFGckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBRTdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFTRDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUloRCxDQUFDO0lBRUQsc0JBQUksaURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELGdDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNEOzs7a0VBRzhEO0lBQzlELDJDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzdDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsWUFBWTthQUNyQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5Q29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7NERBQUM7SUFkaEQsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUlRLFdBQUk7WUFDZ0IseUJBQWdCO1lBQ3hCLDhDQUFrQjtZQUNqQix3QkFBVTtPQU5wQixlQUFlLENBNkQzQjtJQUFELHNCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBwLnNlcnZpY2UnXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWF1dGgvc2lnbi11cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduLXVwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCAgICBcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsICAgICAgICAgXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOkFwcFNlcnZpY2Vcbikge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgICAgICAgIFxufVxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4qIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbnByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIFxuICAgIHRoaXMuYXBwU2VydmljZS5hbmRyb2lkX3NldFN0YXR1c0JhclRyYW5zcGFyYW50KCk7XG4gICAgdGhpcy5hcHBTZXJ2aWNlLmFuZHJvaWRfc2V0TmF2aWdhdGlvbkJhclJHQkFDb2xvcigzMCwgNzEsIDEyOSwgMjU0KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgc2lnbi11cC5jb21wb25lbnQudHNcIik7XG4gICAgXG4gICAgXG4gICAgXG59XG5cbmdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xufVxuc3VibWl0KCl7XG4gIGNvbnNvbGUubG9nKFwic3VibWl0XCIpO1xuICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiXG4gICAgICB9XG4gIH0pO1xufVxubmdPbkRlc3Ryb3koKXtcbiAgICBjb25zb2xlLmxvZyhcIm9uIGRpc3RvcnlcIilcbn1cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4qIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbm9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xufVxub25TaWduVXBUYXAoKTogdm9pZCB7XG4gIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2F1dGgvc2lnbi1pbiddLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZVJpZ2h0XCJcbiAgICAgIH1cbiAgfSk7XG59XG59XG4iXX0=