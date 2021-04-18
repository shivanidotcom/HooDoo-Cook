
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asg';
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(pagename:string):void
  { 
    this.router.navigate([`${pagename}`,{relativeTo: Router}]);
  } 
  
 
}
