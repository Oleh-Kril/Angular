import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imgUrl: string = "https://source.unsplash.com/random/?city,night"

  @Input() title!: string
  @Input() author!: string
  @Input() description!: string
}
