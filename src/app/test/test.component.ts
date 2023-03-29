import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {TestService} from "../shared/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  testForm: FormGroup;
  isContentLoaded = false;
  question: string;
  answers: string[]
  numOfQuestions =1
  constructor(private route: ActivatedRoute,
              private router: Router,
              private testService: TestService) {
   this.testForm = new FormGroup({
     question: new FormControl('', [Validators.required])
   })
    this.question = this.testService.getQuestion()
    this.answers = this.testService.questions[this.question].slice()
    this.answers.sort(() => Math.random() - 0.5)
  }

  onSubmit(){
    this.testService.userAnswers.push(this.testForm.value['question'])
    this.numOfQuestions +=1;
    console.log(this.testService.userAnswers)
    if((this.numOfQuestions-1)%3 !==0){
      this.question = this.testService.getQuestion()
      this.answers = this.testService.questions[this.question].slice()
      this.answers.sort(() => Math.random() - 0.5)
    }
    else{
      this.router.navigate(['summary'])
    }
  }

}
