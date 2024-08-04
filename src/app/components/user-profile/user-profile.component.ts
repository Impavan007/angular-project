import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function FormatName(value:string){
  return "hi" + value
};
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountrycodePipe,HighlightDirective],
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
  @ViewChild("heading")heading?:ElementRef

  constructor(){
    console.log("constructor called")
  }
  ngOnInit(){
    console.log("ngOnInt called")
  }

  ngOnDestroy(){
    console.log("onDestroy called");
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log("ngOnChange called",changes);
  }
  ngAfterViewInit():void{
   console.log("ngAfterViewInit",this.heading?.nativeElement.textContent)
  }
  
/*Name = "ramesh"
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
}*/

}
