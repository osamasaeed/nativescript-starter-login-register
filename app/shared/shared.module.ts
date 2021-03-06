import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { MyDrawerComponent } from "./my-drawer/my-drawer.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa':'./fonts/font-awesome.min.css',
            'lnr':'./fonts/style.css',
            'fl':'./fonts/flaticon.css'
        }),
    ],
    declarations: [
        MyDrawerComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
