import { Component, HostListener } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    right_click = 0;
    double_right_click = 0;
    left_click = 0;
    double_left_click = 0;

    prevTime: any;

    @HostListener("contextmenu", ["$event"])
    onRightClick(event: any) {
        event.preventDefault();
        
        var clickTime = new Date().getTime() / 1000;
        var diff = clickTime - this.prevTime;
        console.log(`[LOG] prevTime: ${this.prevTime}; clickTime: ${clickTime}; diff: ${diff}`);

        if(diff <= 0.08) {
            this.double_right_click++;
            this.prevTime = new Date().getTime() / 1000;
        } else { this.right_click++; this.prevTime = new Date().getTime() / 1000; }
    }

    @HostListener("click", ["$event"])
    onClick() {
        var clickTime = new Date().getTime() / 1000;
        var diff = clickTime - this.prevTime;
        console.log(`[LOG] prevTime: ${this.prevTime}; clickTime: ${clickTime}; diff: ${diff}`);

        if (diff <= 0.08) {
            this.double_left_click++; this.prevTime = new Date().getTime() / 1000;
        } else { this.left_click++; this.prevTime = new Date().getTime() / 1000; }
    }
}
