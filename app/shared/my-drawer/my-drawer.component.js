"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = (function () {
    function MyDrawerComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    /* ***********************************************************
    * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
    * The navigationItems property is initialized here and is data bound to <ListView> in the MyDrawer view file.
    * Add, remove or edit navigationItems to change what is displayed in the app drawer list.
    *************************************************************/
    MyDrawerComponent.prototype.ngOnInit = function () {
        this._navigationItems = [
            {
                title: "Home",
                name: "home",
                route: "/home",
                icon: "\uf015"
            },
            {
                title: "Browse",
                name: "browse",
                route: "/browse",
                icon: "\uf1ea"
            },
            {
                title: "Search",
                name: "search",
                route: "/search",
                icon: "\uf002"
            },
            {
                title: "Featured",
                name: "featured",
                route: "/featured",
                icon: "\uf005"
            },
            {
                title: "Settings",
                name: "settings",
                route: "/settings",
                icon: "\uf013"
            },
            {
                title: "Sign In",
                name: "sign-in",
                route: "/auth/sign-in",
                icon: "\uf090"
            }
        ];
        console.log("loading drawer.component.ts");
    };
    Object.defineProperty(MyDrawerComponent.prototype, "navigationItems", {
        get: function () {
            return this._navigationItems;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * Use the "itemTap" event handler of the <ListView> component for handling list item taps.
    * The "itemTap" event handler of the app drawer <ListView> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    MyDrawerComponent.prototype.onNavigationItemTap = function (args) {
        var navigationItemView = args.view;
        var navigationItemRoute = navigationItemView.bindingContext.route;
        this.routerExtensions.navigate([navigationItemRoute], {
            transition: {
                name: "slide"
            }
        });
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <ListView>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRy9EOzs7OERBRzhEO0FBTzlEO0lBVUksMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUNwQjtnQkFDSSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxRQUFRO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLFFBQVE7YUFDakI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxRQUFRO2FBQ2pCO1NBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0JBQUksOENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQ7Ozs7a0VBSThEO0lBQzlELCtDQUFtQixHQUFuQixVQUFvQixJQUFtQjtRQUNuQyxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBRXBFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ2xELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTzthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsMENBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBbEZRO1FBQVIsWUFBSyxFQUFFOzsyREFBc0I7SUFOckIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQVd3Qyx5QkFBZ0I7T0FWN0MsaUJBQWlCLENBeUY3QjtJQUFELHdCQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6RlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogS2VlcCBkYXRhIHRoYXQgaXMgZGlzcGxheWVkIGluIHlvdXIgYXBwIGRyYXdlciBpbiB0aGUgTXlEcmF3ZXIgY29tcG9uZW50IGNsYXNzLlxyXG4qIEFkZCBuZXcgZGF0YSBvYmplY3RzIHRoYXQgeW91IHdhbnQgdG8gZGlzcGxheSBpbiB0aGUgZHJhd2VyIGhlcmUgaW4gdGhlIGZvcm0gb2YgcHJvcGVydGllcy5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJNeURyYXdlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZHJhd2VyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbXktZHJhd2VyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15RHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFRoZSBcInNlbGVjdGVkUGFnZVwiIGlzIGEgY29tcG9uZW50IGlucHV0IHByb3BlcnR5LlxyXG4gICAgKiBJdCBpcyB1c2VkIHRvIHBhc3MgdGhlIGN1cnJlbnQgcGFnZSB0aXRsZSBmcm9tIHRoZSBjb250YWluaW5nIHBhZ2UgY29tcG9uZW50LlxyXG4gICAgKiBZb3UgY2FuIGNoZWNrIGhvdyBpdCBpcyB1c2VkIGluIHRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gYmVsb3cuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvbkl0ZW1zOiBBcnJheTxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIE15RHJhd2VyQ29tcG9uZW50IFwib25Jbml0XCIgZXZlbnQgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwcm9wZXJ0aWVzIGRhdGEgdmFsdWVzLlxyXG4gICAgKiBUaGUgbmF2aWdhdGlvbkl0ZW1zIHByb3BlcnR5IGlzIGluaXRpYWxpemVkIGhlcmUgYW5kIGlzIGRhdGEgYm91bmQgdG8gPExpc3RWaWV3PiBpbiB0aGUgTXlEcmF3ZXIgdmlldyBmaWxlLlxyXG4gICAgKiBBZGQsIHJlbW92ZSBvciBlZGl0IG5hdmlnYXRpb25JdGVtcyB0byBjaGFuZ2Ugd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGFwcCBkcmF3ZXIgbGlzdC5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uSXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL2hvbWVcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyb3dzZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJicm93c2VcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIi9icm93c2VcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjFlYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAwMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZlYXR1cmVkXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZlYXR1cmVkXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvZmVhdHVyZWRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAwNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvc2V0dGluZ3NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNpZ24gSW5cIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2lnbi1pblwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL2F1dGgvc2lnbi1pblwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMDkwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGRyYXdlci5jb21wb25lbnQudHNcIik7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmF2aWdhdGlvbkl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8TGlzdFZpZXc+IGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgbGlzdCBpdGVtIHRhcHMuXHJcbiAgICAqIFRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSBhcHAgZHJhd2VyIDxMaXN0Vmlldz4gaXMgdXNlZCB0byBuYXZpZ2F0ZSB0aGUgYXBwXHJcbiAgICAqIGJhc2VkIG9uIHRoZSB0YXBwZWQgbmF2aWdhdGlvbkl0ZW0ncyByb3V0ZS5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbVZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW1Sb3V0ZSA9IG5hdmlnYXRpb25JdGVtVmlldy5iaW5kaW5nQ29udGV4dC5yb3V0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZpZ2F0aW9uSXRlbVJvdXRlXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gaXMgYm91bmQgdG8gZXZlcnkgbmF2aWdhdGlvbiBpdGVtIG9uIHRoZSA8TGlzdFZpZXc+LlxyXG4gICAgKiBJdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBpdGVtIHNob3VsZCBoYXZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MuXHJcbiAgICAqIFRoZSBcInNlbGVjdGVkXCIgY2xhc3MgY2hhbmdlcyB0aGUgc3R5bGVzIG9mIHRoZSBpdGVtLCBzbyB0aGF0IHlvdSBrbm93IHdoaWNoIHBhZ2UgeW91IGFyZSBvbi5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwYWdlVGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRQYWdlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==