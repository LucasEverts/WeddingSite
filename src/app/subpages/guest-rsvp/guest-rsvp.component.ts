import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-rsvp',
  templateUrl: './guest-rsvp.component.html',
  styleUrls: ['./guest-rsvp.component.css']
})
export class GuestRsvpComponent implements OnInit {

  isSubmitted: boolean = false;
  submitData: any;

  constructor() { 
  }

  ngOnInit(): void {
    this.SetSubmitListener();
  }

  SetSubmitListener() {
      var form = document.getElementById('rsvpForm')! as HTMLFormElement;
      this.submitData = function(e: any) {
        this.isSubmitted = true;
        e.preventDefault();
        const data = new FormData(form);
        const action = form.action;
        fetch(action, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          form.reset();
          this.isSubmitted = false;
          alert("Thank You for your RSVP!");
        });
        return false;
      };
      document.getElementById('rsvpForm')!.addEventListener("submit", this.submitData.bind(this), true);
    
  }
}