import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink} from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-accessibility-statement',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './accessibility-statement.component.html',
  styleUrl: './accessibility-statement.component.scss'
})

export class AccessibilityStatement implements OnInit {
  private meta = inject(Meta)
  private titleService = inject(Title)

  ngOnInit(): void {
    this.titleService.setTitle('Chubby Designs | Website Design in San Antonio TX')
    this.meta.updateTag({ name: 'description', content: 'Helping smaller businesses obtain a website at a realistic cost that is more affordable and straight forward. We offer custom web design that makes the process seamless and hassle free. Contact us today!' })
    this.meta.updateTag({ property: 'og:image', content: 'https://www.chubbydesigns.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Chubby Designs | Website Design in San Antonio TX' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:description', content: 'Helping smaller businesses obtain a website at a realistic cost that is more affordable and straight forward. We offer custom web design that makes the process seamless and hassle free. Contact us today!' }, "property='og:description'")
    this.meta.updateTag({ property: 'og:url', content: 'https://www.chubbydesigns.com/home' }, "property='og:url'")
  }
}
