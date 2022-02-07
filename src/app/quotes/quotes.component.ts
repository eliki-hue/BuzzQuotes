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
    new Quote(1,'Every market has a mad man','Wahenga','Elijah',new Date(2,2,2012) ),
    new Quote(2, 'sharpen your axe','me','kiragu',new Date (3,4,2022)), 
    new Quote (3,'hahahahahah','eliki','eliki', new Date (2,3,2016))
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
