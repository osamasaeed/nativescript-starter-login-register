import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon"
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AuthRoutingModule,
        TNSFontIconModule.forRoot({
            'fa':'./fonts/font-awesome.min.css',
            'lnr':'./fonts/style.css',
            'fl':'./fonts/flaticon.css'
        }),
        SharedModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
