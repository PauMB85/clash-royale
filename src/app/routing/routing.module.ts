import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from '../components/welcome/welcome.component';
import {InfoTeamsComponent} from '../components/info-teams/info-teams.component';
import {InfoRivalComponent} from '../components/info-rival/info-rival.component';
import {InfoMeComponent} from '../components/info-me/info-me.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'myteam', component: InfoTeamsComponent},
  { path: 'myrival', component: InfoRivalComponent},
  { path: 'me', component: InfoMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
