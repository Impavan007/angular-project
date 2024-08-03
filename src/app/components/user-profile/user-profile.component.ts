import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
name = "ramesh"
status='single'
salary=40000
isDisabled=false
inputVal2=""
inputVal=""
users=[{name:"pavan",status:true,doj:1/8/2024},{name:"rohit",status:true,doj:1/8/2024},{name:"rahul",status:true,doj:1/8/2024}]
onChange(e:Event){
  const value= (e.target as HTMLInputElement).value;
  this.inputVal=value;
  console.log(value);
  this.inputVal2=value;
}

}
