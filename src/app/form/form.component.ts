import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentnamelen:number=0;
  studentform:FormGroup;
  validationmessages=
  {
    'studentname':
    {
      'required':'name is  required',
      'minlength':'atleast 2 characters',
      'maxlength':'atmost 10 characters',
    },
    'studentemail':
    {
      'required':'email is required',
      'emaildomain':'domain should be yahoo.com'    },
    'studentphnno':
    {
      'required':'phone number is required',
    }
  }

  formerrors=
  {
    'studentname':'',
    'studentemail':'',
    'studentphnno':''
  }
  constructor(private fv:FormBuilder) { }

  ngOnInit(): void {
    
    this.studentform=this.fv.group(
      {
        studentname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
        contacttype:['email'],
        studentemail:['',[Validators.required,emaildomain]],
        studentphnno:[''],
        address:this.fv.group(
          {
            city:[''],
            state:[''],
            country:['']
          }
        )
    
      }
    )



    function emaildomain(control:AbstractControl):{[key:string]:any}|null
    {
        const email:string=control.value;
        const domain:string =email.substring(email.lastIndexOf('@')+1);
        if(domain=='yahoo.com' || email=="")
        {
          return null;
        }
        else{
          return {'emaildomain':true};
        }
    }
     this.studentform.valueChanges.subscribe((value)=>
     {
       this.logerrors();
     })

     this.studentform.get('contacttype').valueChanges.subscribe((value:string)=>
     {
      this.changeoption(value);
     })
    // this.studentform.get('studentname').valueChanges.subscribe( (value:string) =>{
    //   this.studentnamelen=value.length;
    // });


    // this.studentform.get('address').valueChanges.subscribe((value:any)=>
    // {
    //   console.log(JSON.stringify(value));
    // })
    
  }


  // logkeyvaluepairs(group:FormGroup):void
  // {
  //   Object.keys(group.controls).forEach((key:any)=>
  //   {
  //         const abstractkey=group.get(key);
  //         if(abstractkey instanceof FormGroup)
  //         {
  //            this.logkeyvaluepairs(abstractkey);
  //         }
  //         else{
  //           // console.log(key,abstractkey.value)
  //           abstractkey.disable();
            
  //         }
  //   });
  // }
  changeoption(changedval:string)
  {
    const val=this.studentform.get('studentphnno');
    if(changedval=='studentphnno')
    {
      val.setValidators(Validators.required)
    }
    else
    {
      val.clearValidators();
    }
    val.updateValueAndValidity();
  }






  logerrors(group:FormGroup=this.studentform):void
  {

        
       Object.keys(group.controls).forEach( (key:string)=>
       {
         const abstractcontrol=group.get(key);
         if(abstractcontrol instanceof FormGroup)
         {
           this.logerrors(abstractcontrol);
         }
         else
         {

          this.formerrors[key]="";

          if(abstractcontrol && !abstractcontrol.valid && (abstractcontrol.dirty || abstractcontrol.touched))
          {
          //  console.log(this.validationmessages[key]);
          const messages=this.validationmessages[key]
           for(const errorkey in abstractcontrol.errors)
           {
             
             if(errorkey)
             {
               this.formerrors[key]+=messages[errorkey]+" ";
               
             }
           }
           
         }}
       }
       )

      //  console.log(this.formerrors)

  }


  showdata()
    {
      // console.log(this.studentform.get('studentname')?.errors);
      // console.log(this.formerrors);
      
    }
    
    showvar:boolean=false;
    showonscreen()
    {
      this.showvar=!this.showvar;
      console.log(this.showvar);
    }



//   profileform=this.fb.group(
//     {
//       firstname:['',Validators.required],
//       lastname:[''],
//       address:this.fb.group(
//         {
//           street:[''],
//           city:[''],
//         }
//       )
//     }
//   )

// updatename()
// {
//   this.name.setValue('vardhan');
// }

// onprofilesubmit()
// {
//   console.log(this.profileform.value)
// }

// updateprofile()
// {
//   this.profileform.patchValue(
//     {
//       firstname:'vardhan',
//       lastname:'',
//       address:
//       {
//         street:'kukatpally',
//         city:''
//       }
//     }
//   )
// }
// }





}
