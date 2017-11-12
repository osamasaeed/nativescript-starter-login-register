import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
    { path: "", component: SignInComponent, children:[
        { path: "sign-in", component: SignInComponent}
    ] 
}
    
]; 

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
