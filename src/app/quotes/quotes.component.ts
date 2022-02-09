import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  
  quotes : Quote[] =[
    new Quote(1,'Every market has a mad man','Wahenga','Elijah',new Date(2,2,2012),0,0 ),
    new Quote(2, 'sharpen your axe','me','kiragu',new Date (3,4,2022),0,0), 
    new Quote (3,'hahahahahah','eliki','eliki', new Date (2,3,2016),0,0),
    new Quote(4, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'kiki',new Date(2020,3,14),0,0),
    new Quote(5,'Buy Cookies','I have to buy cookies for the parrot','NNJ',new Date(2019,6,9),0,0),
    new Quote(6,'Get new Phone Case','Diana has her birthday coming up soon','HHG',new Date(2022,1,12),0,0),
    new Quote(7,'Get Dog Food','Pupper likes expensive snacks','DGFGF',new Date(2019,0,18),0,0),
    new Quote(8,'Solve math homework fggyyyyyyyyyy yyyyyyyyyyyyyyyyyyyy ccchhchch chchchcccccc cccccccccccccc cccccccccccdcdfge dddddddddfssssdddd ddddddddddd dddddddddddddd dddddddddd ddddddd dddddddddddddd','Damn Math','FHG',new Date(2019,2,14),0,0),
    new Quote(9,'Plot my world domination plan','Cause I am an evil overlord','GFGHJK',new Date(2030,3,14),0,0),

  ];
  toggleDetails(index: number){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }

formdetail:any = []
  newQuote = new Quote(0, '','','', new Date(),0,0)
  adding(data: any){
    const quote =data.quote
    const author= data.author
    const sender =data.sender
    this.addNewQuote(this.newQuote, quote, author, sender)
  }
  addNewQuote(newQuote: Quote, quote: any, author: any,sender: any ){
  
    let quoteLength = this.quotes.length;
    newQuote.quote= quote;
    newQuote.author= author;
    newQuote.sender = sender
    newQuote.id =quoteLength+1;
    newQuote.dateSent = new Date(newQuote.dateSent)
    this.quotes.push(newQuote)
        
  }
  
  upvote(i: any){
    this.quotes[i].likes +=1
  }
  downvote(i: any){
    this.quotes[i].dislikes ++
  }

  deleteQuote(isdelete:any, index:number){
    if(isdelete){
      let toDelete = confirm(`are you sure you want to delete ${this.quotes[index]}`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }
  
 

  constructor() { }

  ngOnInit(): void {
  }
}

  

