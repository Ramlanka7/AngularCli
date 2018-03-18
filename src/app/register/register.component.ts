import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  options = ['AL', 'GA', 'TN'];
  optionSelected: any;

  constructor() { }

  ngOnInit() {
  }

  onOptionsSelected(event){
    alert('hello');
  }
}
