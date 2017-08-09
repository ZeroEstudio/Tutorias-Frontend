import {
  Component,
  OnInit,
  trigger, state, style, transition, animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'TopNavbar',
  providers: [NavbarComponent],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  styles: [`
  `],
  templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent implements OnInit {
  menuState:string = 'out';
  showNavbar:boolean = false;

  constructor() {
  	
  }

  public ngOnInit() {
    
  }

  public openCloseSideBar() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.showNavbar = !this.showNavbar;
  }

}
