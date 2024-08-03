import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';

function FormatName(value:string){
  return "hi" + value
};
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountrycodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias:"username",transform:FormatName}) name="";
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number;
  @Output() myEvent = new EventEmitter<User>();
  sendData(){
    this.myEvent.emit({name:this.name,newSalary:25000});
  }
Name = "ramesh"
status='single'
Salary=40000
isDisabled=false
inputVal2=""
inputVal=""
contactNumber=1234556609
users=[{name:"pavan",status:true,doj:1/8/2024},{name:"rohit",status:false,doj:1/8/2024},{name:"rahul",status:true,doj:1/8/2024}]
onChange(e:Event){
  const value= (e.target as HTMLInputElement).value;
  this.inputVal=value;
  console.log(value);
  this.inputVal2=value;
}

}
