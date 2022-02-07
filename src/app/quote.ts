import { identifierName } from "@angular/compiler";

export class Quote {
    constructor (public id:number, public quote:string, public author:string, public nameOfSender:string, public dateSent:Date){
        this.id=id;
        this.quote =quote;
        this.author = author;
        this.nameOfSender = nameOfSender;

    }
}
