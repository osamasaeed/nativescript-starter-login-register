import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppService } from "./services";
import { AppComponent } from "./app.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        TNSFontIconModule.forRoot({
            'fa':'./fonts/font-awesome.min.css',
            'lnr':'./fonts/style.css',
            'fl':'./fonts/flaticon.css'
        }),
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        AppService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
