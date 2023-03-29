import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestComponent} from "./test/test.component";
import {SummaryComponent} from "./summary/summary.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'test', component: TestComponent},
  {path: 'summary', component: SummaryComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
exports: [ RouterModule ]
})
export class AppRoutingModule { }

