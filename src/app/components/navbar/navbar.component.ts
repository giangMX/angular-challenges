import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  version = VERSION.full;
  user!: User;
  isLoggedIn = false;

  logIn() {
    // TODO: Please replace with a service call
    this.isLoggedIn = true;
  }

  logOut() {
    // TODO: Please replace with a service call
    this.isLoggedIn = false;
  }
}
