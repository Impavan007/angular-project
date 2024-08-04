import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})

export class JokesComponent {
  joke="loading.."
constructor(private jokeService:JokeService){}
ngOnInit(){
  this.getanotherjoke()
}
getanotherjoke(){
  this.jokeService.getJoke().subscribe({
    next: (data:any) => this.joke= data.value,
    error: (error: any) => console.error(error)
  })
}
}
