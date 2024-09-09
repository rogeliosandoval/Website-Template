import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedService } from './services/shared.service'
import { MatIconModule } from '@angular/material/icon'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  public sharedService = inject(SharedService)
  private meta = inject(Meta)
  private titleService = inject(Title)

  ngOnInit(): void {
    this.titleService.setTitle('PVD Solutions | Handyman Services Rhode Island')
    this.meta.updateTag({ property: 'og:image', content: 'https://pvd-solutions.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Handyman Services Rhode Island | PVD Solutions' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:url', content: 'https://pvd-solutions.com/' })
    this.meta.updateTag({ property: 'og:description', content: 'Handyman repairs, comprehensive remodeling and thorough cleaning services.' }, "property='og:description'")
  }

  public openNav(): void {
    if (this.sharedService.mobileNavOpen === false) {
      this.sharedService.mobileNavOpen = true
    } else {
      this.sharedService.mobileNavOpen = false
    }
  }
}