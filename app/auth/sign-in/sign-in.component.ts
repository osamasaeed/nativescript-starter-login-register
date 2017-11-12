import { Component, OnInit,OnDestroy, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { Page } from 'ui/page';
import { AppService } from '../../services/app.service'
import * as application from "application";
import * as platform from "platform";
declare var android: any;

interface StatusBarColorInterface {
    transparant: boolean;
    color:string;
}


@Component({
    selector: "sign-in",
    moduleId: module.id,
    templateUrl: "./sign-in.component.html"
})
export class SignInComponent implements OnInit {

    constructor(
        page: Page,
        private fonticon: TNSFontIconService,         
        private appService:AppService
    ) {
        page.actionBarHidden = true;        
    }
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
        this.appService.android_setStatusBarTransparant();
        this.appService.android_setNavigationBarRGBAColor(30, 71, 129, 254);
        
        console.log("loading sign-in.component.ts");
        
        
        
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    submit(){
        console.log("submit");
    }
    ngOnDestroy(){
        console.log("on distory")
    }
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
