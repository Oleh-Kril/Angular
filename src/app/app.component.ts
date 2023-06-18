import { Component } from '@angular/core'
import * as _ from 'lodash'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password = ''
  isLetters = true
  isDigits = false
  isCharacters = false
  passwordLength = 10
  onButtonClick(){
    const allowedChars: string[] = []

    if (this.isDigits) {
      const digitChars: string[] = _.range(10).map(String)
      allowedChars.push(...digitChars)
    }

    if (this.isLetters) {
      const letterChars: string[] = _.range(65, 91).map((charCode) => String.fromCharCode(charCode))
      allowedChars.push(...letterChars)
    }

    if (this.isCharacters) {
      const specialChars: string[] = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
      allowedChars.push(...specialChars)
    }
    console.log(_.sampleSize(allowedChars, this.passwordLength).join(''))
    this.password = _.sampleSize(allowedChars, this.passwordLength).join('')
  }
  onDigitsRadioToggle(){
    this.isDigits = !this.isDigits
    console.log(this.isDigits)
  }
  onCharactersRadioToggle(){
    this.isCharacters = !this.isCharacters
  }
  onLettersRadioToggle(){
    this.isLetters = !this.isLetters
  }

  onLengthInput(target : any){
    const parsedValue = parseInt(target?.value)

    if(!isNaN(parsedValue)){
      this.passwordLength = parsedValue
    }
  }

}
