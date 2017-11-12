import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        SharedModule,
        TNSFontIconModule.forRoot({
            'fa':'./fonts/font-awesome.min.css',
            'lnr':'./fonts/style.css',
            'fl':'./fonts/flaticon.css'
        })
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
