import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as AOS from "aos";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements  AfterViewInit{

  constructor(private router: Router) {}

  goToPresentations(){
    this.router.navigate(['/presentation'])

  }

  ngAfterViewInit() {
    AOS.init();
  }


}
