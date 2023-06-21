import { Component } from '@angular/core'
import {TitleCasePipe} from "@angular/common"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  amount = 0

  onAmountChange(inputElement: any){
    this.amount = inputElement.value
  }

  protected readonly TitleCasePipe = TitleCasePipe
  protected readonly Number = Number
}
