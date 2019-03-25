import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rize';

  // Hardcoded because of nature of project being an isolated test. To be production ready, 
  // would want to call an api service to source the categories dynamically and create this object
  navToggles: object = {
    'defineActive' : false,
    'gatherActive' : false,
    'seeActive' : false,
    'actActive' : false,
    'adminActive' : false,
  };

  submenuToggle(navCategory) {
    navCategory += "Active";
    this.navToggles[navCategory] = !this.navToggles[navCategory];
  }
}
