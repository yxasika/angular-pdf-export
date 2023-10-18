import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Some Tasks';
}
