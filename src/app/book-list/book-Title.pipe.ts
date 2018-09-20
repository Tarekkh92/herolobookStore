import { PipeTransform, Pipe } from "@angular/core";
// import { Book } from "../models/Book.model";


@Pipe({
    name:'bookTitleReplace'
})

export class bookTitlePipe implements PipeTransform{
    str1 :string;
    transform(str:string):string{
        // line removes all the non-alphanumeric and non '+' symbols.
        //this.str1=str.replace(/[^a-zA-Z0-9+]/g, "");
        // this.str1=str.replace('+', ' ');
        //.replace(/[^a-zA-Z0-9+]/g, " ").replace(/[0-9]/g, '')
        return str.replace(/\+/g, ' ').replace(/[^a-zA-Z0-9+]/g, " ").replace(/[0-9]/g, '');
       
    
    
}
}