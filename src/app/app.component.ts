import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fosterate-practise';
  myname:string="vardhan";
  new_persons:string[]=[];
  mynum:number=10;
  collegenames:string[]=[];
  parentval:string="i came frm parent";
  pfirstname:string="";
  plastname:string="";
  myfun():string
  {
    return this.myname;
  };
  my_friends=['karthik','niharika','rohan','suresh'];
  addperson(input1:any)
  {
        let k=input1.value;
        this.new_persons.push(k);
        console.log(this.myname);
  };
  myfun2(a:any)
  {
       console.log(a.innerHTML);
      
  };
  parentfun(val:string)
  {
    this.collegenames.push(val);
    console.log(val);
  }

  getvalues(values:any)
  {
       this.pfirstname=values["firstname"];
       this.plastname=values["lastname"];
  }




}
