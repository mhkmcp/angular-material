import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  notifications = 0;
  showSpinner = false;

  opened = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false;
    }, 4000)
  }

  log(state: any) {
    console.log(state);
  }

  logChange(selectedIndex:any) {
    console.log(selectedIndex);
  }

}
