import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quote : Quote[] =[
    new Quote(1,'Every market has a mad man','Wahenga','Elijah',new Date(2,2,2012) )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
