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
    new Quote(1," You're off to great places, today is your day. Your mountain is waiting, so get on your way",'Dr. Seuss','Elijah',new Date(2,2,2012),0,0 ),
    new Quote(2, 'You always see failure on your way to success','Mickey Rooney','kiragu',new Date (3,4,2022),0,0), 
    new Quote (3,'No one is perfect - thats why pencils have erasers','Wolfgang Riebe','eliki', new Date (2,3,2016),0,0),
    new Quote(4, 'Winning does not always mean first. Winning means you are doing better than you have been', 'Bonnie Blair', 'kiki',new Date(2020,3,14),0,0),
    new Quote(5,'You are braver than you believe, and stronger than you seem, and smarter than you think','A.A Mine','NNJ',new Date(2019,6,9),0,0),
    new Quote(6,'It always seem impossible until it is done','Nelson Mandela','HHG',new Date(2022,1,12),0,0),
    new Quote(7,'Keep your face to the sunshine and you cannot see a shadow','Helen Keller','DGFGF',new Date(2019,0,18),0,0),
    new Quote(8,'Once you replace negative thoughts with positive ones, you will start having positive results.','Willie Nelson','FHG',new Date(2019,2,14),0,0),
    new Quote(9,'Positive thinking will let you do everything better than negative thinking','Zig Ziglar','GFGHJK',new Date(2030,3,14),0,0)

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
      let toDelete = confirm(`are you sure you want to delete "${this.quotes[index].quote}" quote?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }
  
 

  constructor() { }

  ngOnInit(): void {
  }
}

  

