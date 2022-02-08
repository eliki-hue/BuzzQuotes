import { Quote } from './../quote';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote! :Quote
  @Output() isdelete = new EventEmitter<boolean>();

  deleteQuote(confirmDelete:boolean){
    this.isdelete.emit(confirmDelete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
