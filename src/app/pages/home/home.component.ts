import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { RouterOutlet, RouterLink} from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Home {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>
  public config: SwiperOptions = {
    autoplay: {
      delay: 7000,
      disableOnInteraction: true
    }
  }
}
