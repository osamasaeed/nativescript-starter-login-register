import { Component,OnInit } from "@angular/core";
import { AppService } from "./services";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(
        private appService:AppService
    ){}
    ngOnInit():void {
        //    //this.appService.android_setNavigationBarRGBAColor(50, 50, 50, 50);
        //    this.appService.android_setNavigationBarTransparant();
            
        //    // this.appService.android_setStatusBarColor("#0F336D");

        console.log("loading app.component.ts");
    }
}