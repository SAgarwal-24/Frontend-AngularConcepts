import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // ngOnInit(): void {
  //     this.addHobbies()
  // }
  //
  // title = 'Component-Interaction';
  //
  // hobby: string = '';
  // hobbies:  Array<{hobby: string}>;
  // addHobbies(){
  //   this.hobbies.push({hobby: 'Cricket'});
  //   this.hobbies.push({hobby: 'Chess'});
  //   this.hobbies.push({hobby: 'Football'});
  // }

  title = 'child-parent-interaction';
  addresType: string;
  addressChangeEventHandler($event: any) {
    console.warn('Parent - event', $event);
    this.addresType = $event;
  }

  ngOnInit(): void {
    console.log('parent component init: ' );
  }

}
