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
    new Quote (3,'hahahahahah','eliki','eliki', new Date (2,3,2016)),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'kiki',new Date(2020,3,14)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot','NNJ',new Date(2019,6,9)),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','HHG',new Date(2022,1,12)),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks','DGFGF',new Date(2019,0,18)),
    new Quote(5,'Solve math homework','Damn Math','FHG',new Date(2019,2,14)),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord','GFGHJK',new Date(2030,3,14)),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
