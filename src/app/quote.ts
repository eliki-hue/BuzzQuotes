import { identifierName } from "@angular/compiler";

export class Quote {
    showDescription:boolean;
   
    constructor (public id:number, public quote:string, public author:string, public sender:string, public dateSent:Date , public likes:number, public dislikes:number){
        this.id=id;
        this.quote = quote;
        this.author = author;
        this.sender = sender;
        this.dateSent= dateSent
        this.showDescription =false
        this.likes = likes
        this.dislikes =dislikes

    }
}
