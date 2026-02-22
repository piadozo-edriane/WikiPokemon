import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from "./landing-page/landing-page";
import { NavigationBar } from './shared/navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
