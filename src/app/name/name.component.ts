import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Output()
  profileemit=new EventEmitter<string>();

  recieveddata:any[]=[];
  empdata:any[]=[];
  sendprofiletoparent(value:any)
  {
    this.profileemit.emit(value);
  }

  constructor(private fb:FormBuilder,private empd:EmployeeService) {

    this.empdata=this.empd.getempdata();
    console.log(this.empdata);
   }

  ngOnInit(): void {

     this.empd.makehttprequest().subscribe((result)=>
     {
       console.log(result['data']);
       this.recieveddata=result['data'];
       console.log(this.recieveddata);
       for(let i of this.recieveddata)
       {
         for(let j in i)
         {
           console.log(j);
         }
       }
     })
  }


  name=new FormControl("");

 /* profileform=new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    address :new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
    })

  });*/

    profileform=this.fb.group(
      {
        firstname:['',Validators.required],
        lastname:[''],
        address:this.fb.group(
          {
            street:[''],
            city:[''],
          }
        )
      }
    )

  updatename()
  {
    this.name.setValue('vardhan');
  }

  onprofilesubmit()
  {
    console.log(this.profileform.value)
  }

  updateprofile()
  {
    this.profileform.patchValue(
      {
        firstname:'vardhan',
        lastname:'',
        address:
        {
          street:'kukatpally',
          city:''
        }
      }
    )
  }
}
