import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink} from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicy implements OnInit {
  private meta = inject(Meta)
  private titleService = inject(Title)

  ngOnInit(): void {
    this.titleService.setTitle('PVD Solutions | Handyman Services Rhode Island')
    this.meta.updateTag({ property: 'og:image', content: 'https://pvd-solutions.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Handyman Services Rhode Island | PVD Solutions' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:url', content: 'https://pvd-solutions.com/' })
    this.meta.updateTag({ property: 'og:description', content: 'Handyman repairs, comprehensive remodeling and thorough cleaning services.' }, "property='og:description'")
  }
}
