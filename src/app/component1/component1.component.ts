import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  childval:string="";
  @Input()
  childval2:number=0;

  comp1:any="<p>hii</p><p>how are you</p>";

  setcolor:any="red";

  text1="avengers";
  cityname:string="";

  setstyle:any={color:"white",backgroundColor:"black",display:"inline-block",width:"1000px"};

  @Output()
   newevent1=new EventEmitter<string>();
   
   senddtopranet(val:string)
   {
     this.newevent1.emit(val);
     console.log(val);

   }
   activeclass=
   {
     "class1":true,
     "class2":true,
     "class3":false,
   }


   activestyle=
   {
     'color':'red',
     'font-size':'100px',
     'border':'2px solid black',
   }

   products:any[]=['vardhan','niharika','karthik'];

}
