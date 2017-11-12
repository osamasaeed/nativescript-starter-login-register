"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var shared_module_1 = require("../shared/shared.module");
var auth_routing_module_1 = require("./auth-routing.module");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                auth_routing_module_1.AuthRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css',
                    'lnr': './fonts/style.css',
                    'fl': './fonts/flaticon.css'
                }),
                shared_module_1.SharedModule
            ],
            declarations: [
                sign_in_component_1.SignInComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsdUVBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCw2REFBMEQ7QUFDMUQsaUVBQThEO0FBb0I5RDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix1Q0FBaUI7Z0JBQ2pCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsSUFBSSxFQUFDLDhCQUE4QjtvQkFDbkMsS0FBSyxFQUFDLG1CQUFtQjtvQkFDekIsSUFBSSxFQUFDLHNCQUFzQjtpQkFDOUIsQ0FBQztnQkFDRiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG1DQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb25cIlxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hdXRoLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEF1dGhSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnZmEnOicuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyxcclxuICAgICAgICAgICAgJ2xucic6Jy4vZm9udHMvc3R5bGUuY3NzJyxcclxuICAgICAgICAgICAgJ2ZsJzonLi9mb250cy9mbGF0aWNvbi5jc3MnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2lnbkluQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUgeyB9XHJcbiJdfQ==