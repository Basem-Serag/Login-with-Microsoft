import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(private _MsalService: MsalService) {}

  login() {
    this._MsalService.loginPopup().subscribe((res: AuthenticationResult) => {
      this._MsalService.instance.setActiveAccount(res.account);
    });
  }

  isLoggedIn(): boolean {
    return this._MsalService.instance.getActiveAccount() !== null;
  }
}
