import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
    { path: "" , children:[
        { path: "sign-in", component: SignInComponent},
        { path: "sign-up", component: SignUpComponent}
    ] 
}
    
]; 

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
