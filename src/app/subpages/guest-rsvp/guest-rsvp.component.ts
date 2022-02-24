import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-rsvp',
  templateUrl: './guest-rsvp.component.html',
  styleUrls: ['./guest-rsvp.component.css']
})
export class GuestRsvpComponent implements OnInit {

  rsvpForm = new FormGroup({
    name: new FormControl(''),
    plusOneName: new FormControl(''),
    numberOfChildren: new FormControl(''),
    guestAccepts: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.rsvpForm);
  }

}
