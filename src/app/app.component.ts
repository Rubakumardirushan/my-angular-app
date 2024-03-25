import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
