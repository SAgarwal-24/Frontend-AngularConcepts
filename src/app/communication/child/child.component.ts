import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // constructor() { }
  // @Input() hobbies: [];
  // ngOnInit() {
  //   console.log('hobbies: ' + this.hobbies.length);
  // }

  constructor() { }

  selectedAddressType: string;

  @Output() selectedAddress = new EventEmitter();

  onAddressTypeChange() {

    console.warn('CHILD - this.selectedAddressType', this.selectedAddressType);
    console.warn('CHILD - selectedAddress', this.selectedAddress);
    // console.warn('this.selectedAddress.emit(this.selectedAddressType); ', this.selectedAddress.emit(this.selectedAddressType))
    this.selectedAddress.emit(this.selectedAddressType);
  }

  ngOnInit() {
    console.log('child component init: ' );
  }

}

