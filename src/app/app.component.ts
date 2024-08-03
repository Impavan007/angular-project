import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  users=[{name:"pavan",isSingle:true,salary:40000},{name:"rohit",isSingle:true,salary:40000},{name:"rahul",isSingle:true,salary:40000}]
  recievedData(e:User){
    console.log(e);
    const userIndex=this.users.findIndex(user=>"hi"+user.name==e.name);
    this.users[userIndex].salary=e.newSalary;
  }
}
