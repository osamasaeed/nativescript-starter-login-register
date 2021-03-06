import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-telerik-ui/sidedrawer";
import { AppService } from "../services";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Page } from 'ui/page';
import * as colorModule from "tns-core-modules/color";
var Color = colorModule.Color;
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    
    constructor(
        private page : Page,
        private fonticon: TNSFontIconService,
        private appService:AppService
    ){
 
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.appService.android_setStyle();
        console.log("loading home.component.ts");
        
                //this.appService.android_setStatusBarColor("#0F336D");
                //this.appService.android_setNavigationBarColor(30, 71, 129, 254)
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
