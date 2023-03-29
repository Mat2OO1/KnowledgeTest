import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TestService} from "../shared/test.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  src: SafeResourceUrl
  presentationTitle = ["The 2010s in movies","Most impactful TV series of 21st century","The most popular games of 21st century"]
  constructor(private testService: TestService,
              private sanitizer: DomSanitizer,
              private router: Router) {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl("assets/p" + this.testService.currentPresentation);
  }
  showTitle(){
    return this.presentationTitle[this.testService.currentPresentation-1]
  }

  goToTest(){
    this.router.navigate(['test'])
  }
}
