import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown {
    var newstring:string=value;
    if(args[0]=="singlequote")
    {
         newstring="'"+newstring+"'";
    }
    else
    {
      newstring='"'+newstring+'"';
    }
    return newstring;
  }

}
