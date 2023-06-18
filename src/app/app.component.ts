import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
cardsData = [
  {
    title: "Beautifully styled card",
    author: "@Nature",
    description: "The sprawling metropolis of Night City comes alive after dark, its neon-lit streets pulsating with a vibrant energy that draws in both dreamers and hustlers alike."
  },
  {
    title: "My city in the night",
    author: "@Dude",
    description: "As the moon casts its silvery glow upon the towering skyscrapers, Night City reveals its mysterious allure, where secrets and opportunities await at every turn."
  },
  {
    title: "Moon knight",
    author: "@Girl",
    description: "Walking through the night city is like stepping into a realm of enchantment, where the rhythmic footsteps echo amidst the glittering cityscape, unveiling hidden gems and unexpected encounters along the way."
  }
]
}
