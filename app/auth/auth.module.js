"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var shared_module_1 = require("../shared/shared.module");
var auth_routing_module_1 = require("./auth-routing.module");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
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
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsdUVBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCw2REFBMEQ7QUFDMUQsaUVBQThEO0FBQzlELGlFQUE4RDtBQXFCOUQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQW5CdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsdUNBQWlCO2dCQUNqQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBQyw4QkFBOEI7b0JBQ25DLEtBQUssRUFBQyxtQkFBbUI7b0JBQ3pCLElBQUksRUFBQyxzQkFBc0I7aUJBQzlCLENBQUM7Z0JBQ0YsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixtQ0FBZTtnQkFDZixtQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uXCJcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTaWduSW5Db21wb25lbnQgfSBmcm9tIFwiLi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gXCIuL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEF1dGhSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnZmEnOicuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyxcclxuICAgICAgICAgICAgJ2xucic6Jy4vZm9udHMvc3R5bGUuY3NzJyxcclxuICAgICAgICAgICAgJ2ZsJzonLi9mb250cy9mbGF0aWNvbi5jc3MnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2lnbkluQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHsgfVxyXG4iXX0=