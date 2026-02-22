import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { About } from './about/about';
import { CreateTeam } from './create-team/create-team';
import { Pokemon } from './pokemon/pokemon';
import { Trainers } from './trainers/trainers';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'about-page', component: About},
    {path: 'create-team', component: CreateTeam},
    {path: 'pokemon', component: Pokemon},
    {path: 'trainers', component: Trainers}
];
