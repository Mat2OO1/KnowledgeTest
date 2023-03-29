import { Component } from '@angular/core';
import {TestService} from "../shared/test.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  questions: string[]
  answers: {[key: string]: string[]}
  userAnswers: string[]
  numOfCorrectAnswers: number = 0
  triedBefore: boolean
  numOfQuestions: number
  constructor(private testService: TestService,
              private router: Router) {
    this.questions = this.testService.getPreviousQuestions()
    this.answers = this.testService.questions
    this.userAnswers = this.testService.userAnswers
    this.triedBefore = this.testService.triedBefore
    this.numOfQuestions = this.testService.currentTest
    let i =0
    for(let elem of this.questions){
      if(this.answers[elem][0] == this.userAnswers[i]){
        this.numOfCorrectAnswers +=1
      }
      i+=1
    }
  }


  nextLecture(passed: boolean){
    if(passed){
      this.testService.currentPresentation+=1
      this.testService.triedBefore = false
    }
    else{
      this.testService.currentTest -=3
      this.testService.triedBefore = true
    }
    this.testService.userAnswers = []
    this.router.navigate(['presentation'])
  }

}


