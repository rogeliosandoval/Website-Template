import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { RouterOutlet, RouterLink} from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'

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

export class Home implements OnInit {
  private meta = inject(Meta)
  private titleService = inject(Title)
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>
  public config: SwiperOptions = {
    autoplay: {
      delay: 7000,
      disableOnInteraction: true
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle('PVD Solutions | Handyman Services Rhode Island')
    this.meta.updateTag({ property: 'og:image', content: 'https://pvd-solutions.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Handyman Services Rhode Island | PVD Solutions' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:url', content: 'https://pvd-solutions.com/' })
    this.meta.updateTag({ property: 'og:description', content: 'Handyman repairs, comprehensive remodeling and thorough cleaning services.' }, "property='og:description'")
  }
}
