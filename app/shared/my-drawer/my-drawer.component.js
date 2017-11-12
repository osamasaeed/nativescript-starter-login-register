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
            }
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRy9EOzs7OERBRzhEO0FBTzlEO0lBVUksMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUNwQjtnQkFDSSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxRQUFRO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLFFBQVE7YUFDakI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVEOzs7O2tFQUk4RDtJQUM5RCwrQ0FBbUIsR0FBbkIsVUFBb0IsSUFBbUI7UUFDbkMsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQU0sbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUVwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNsRCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7a0VBSThEO0lBQzlELDBDQUFjLEdBQWQsVUFBZSxTQUFpQjtRQUM1QixNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQTNFUTtRQUFSLFlBQUssRUFBRTs7MkRBQXNCO0lBTnJCLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzt5Q0FXd0MseUJBQWdCO09BVjdDLGlCQUFpQixDQWtGN0I7SUFBRCx3QkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBpbiB5b3VyIGFwcCBkcmF3ZXIgaW4gdGhlIE15RHJhd2VyIGNvbXBvbmVudCBjbGFzcy5cclxuKiBBZGQgbmV3IGRhdGEgb2JqZWN0cyB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIGRyYXdlciBoZXJlIGluIHRoZSBmb3JtIG9mIHByb3BlcnRpZXMuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWRyYXdlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgXCJzZWxlY3RlZFBhZ2VcIiBpcyBhIGNvbXBvbmVudCBpbnB1dCBwcm9wZXJ0eS5cclxuICAgICogSXQgaXMgdXNlZCB0byBwYXNzIHRoZSBjdXJyZW50IHBhZ2UgdGl0bGUgZnJvbSB0aGUgY29udGFpbmluZyBwYWdlIGNvbXBvbmVudC5cclxuICAgICogWW91IGNhbiBjaGVjayBob3cgaXQgaXMgdXNlZCBpbiB0aGUgXCJpc1BhZ2VTZWxlY3RlZFwiIGZ1bmN0aW9uIGJlbG93LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgX25hdmlnYXRpb25JdGVtczogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBNeURyYXdlckNvbXBvbmVudCBcIm9uSW5pdFwiIGV2ZW50IGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSB0aGUgcHJvcGVydGllcyBkYXRhIHZhbHVlcy5cclxuICAgICogVGhlIG5hdmlnYXRpb25JdGVtcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBoZXJlIGFuZCBpcyBkYXRhIGJvdW5kIHRvIDxMaXN0Vmlldz4gaW4gdGhlIE15RHJhd2VyIHZpZXcgZmlsZS5cclxuICAgICogQWRkLCByZW1vdmUgb3IgZWRpdCBuYXZpZ2F0aW9uSXRlbXMgdG8gY2hhbmdlIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBhcHAgZHJhd2VyIGxpc3QuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImhvbWVcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIi9ob21lXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMTVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJCcm93c2VcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYnJvd3NlXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvYnJvd3NlXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYxZWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvc2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMDJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGZWF0dXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmZWF0dXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL2ZlYXR1cmVkXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMDVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZXR0aW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwiL3NldHRpbmdzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMTNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmF2aWdhdGlvbkl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8TGlzdFZpZXc+IGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgbGlzdCBpdGVtIHRhcHMuXHJcbiAgICAqIFRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSBhcHAgZHJhd2VyIDxMaXN0Vmlldz4gaXMgdXNlZCB0byBuYXZpZ2F0ZSB0aGUgYXBwXHJcbiAgICAqIGJhc2VkIG9uIHRoZSB0YXBwZWQgbmF2aWdhdGlvbkl0ZW0ncyByb3V0ZS5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbVZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW1Sb3V0ZSA9IG5hdmlnYXRpb25JdGVtVmlldy5iaW5kaW5nQ29udGV4dC5yb3V0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZpZ2F0aW9uSXRlbVJvdXRlXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gaXMgYm91bmQgdG8gZXZlcnkgbmF2aWdhdGlvbiBpdGVtIG9uIHRoZSA8TGlzdFZpZXc+LlxyXG4gICAgKiBJdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBpdGVtIHNob3VsZCBoYXZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MuXHJcbiAgICAqIFRoZSBcInNlbGVjdGVkXCIgY2xhc3MgY2hhbmdlcyB0aGUgc3R5bGVzIG9mIHRoZSBpdGVtLCBzbyB0aGF0IHlvdSBrbm93IHdoaWNoIHBhZ2UgeW91IGFyZSBvbi5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwYWdlVGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRQYWdlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==