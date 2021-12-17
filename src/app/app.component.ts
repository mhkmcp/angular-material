import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  notifications = 0;
  showSpinner = false;

  opened = false;
  selectedValue = '';

  options: string[] = ["Angular", "React", "Vue"];
  objectOptions = [
    {'name': "Angular"},
    {'name': "Angular Material"},
    {'name': "React"},
    {'name': "Vue"}
  ]

  myFormControl = new FormControl();
  // filteredOptions: Observable<string[]>;

  displayFn(option:any) {
    return option ? option.name : undefined;
  }

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

  ngOnInit(){
    // this.filteredOptions = this.myFormControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value=>this._filter(value))
    // )
  }

  // private _filter(value:string):string[]{
  //   const filterValue = value.toLocaleLowerCase();
  //   return this.options.filter(option=>option.toLocaleLowerCase().includes(filterValue))
  // }

}
