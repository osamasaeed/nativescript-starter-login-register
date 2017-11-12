"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("./services");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        //    //this.appService.android_setNavigationBarRGBAColor(50, 50, 50, 50);
        //    this.appService.android_setNavigationBarTransparant();
        //    // this.appService.android_setStatusBarColor("#0F336D");
        console.log("loading app.component.ts");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [services_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsdUNBQXdDO0FBS3hDO0lBQ0ksc0JBQ1ksVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUMvQixDQUFDO0lBQ0gsK0JBQVEsR0FBUjtRQUNJLDBFQUEwRTtRQUMxRSw0REFBNEQ7UUFFNUQsOERBQThEO1FBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBWFEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUd5QixxQkFBVTtPQUZ4QixZQUFZLENBWXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOkFwcFNlcnZpY2VcclxuICAgICl7fVxyXG4gICAgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgICAgICAvLyAgICAvL3RoaXMuYXBwU2VydmljZS5hbmRyb2lkX3NldE5hdmlnYXRpb25CYXJSR0JBQ29sb3IoNTAsIDUwLCA1MCwgNTApO1xyXG4gICAgICAgIC8vICAgIHRoaXMuYXBwU2VydmljZS5hbmRyb2lkX3NldE5hdmlnYXRpb25CYXJUcmFuc3BhcmFudCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAvLyB0aGlzLmFwcFNlcnZpY2UuYW5kcm9pZF9zZXRTdGF0dXNCYXJDb2xvcihcIiMwRjMzNkRcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBhcHAuY29tcG9uZW50LnRzXCIpO1xyXG4gICAgfVxyXG59Il19