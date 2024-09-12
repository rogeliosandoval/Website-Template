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

  public updateMetaTags(): void {
    this.titleService.setTitle('Chubby Designs | Website Design in San Antonio TX')

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Website design at a realistic cost that is more affordable and straight forward. No money down or contract whatsoever! Contact us today to get started.' })

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'Handyman Services Rhode Island | PVD Solutions' })
    this.meta.addTag({ property: 'og:image', content: 'https://pvd-solutions.com/assets/banner.png' })
    this.meta.addTag({ property: 'og:description', content: 'Handyman repairs, comprehensive remodeling and thorough cleaning services.' })
    this.meta.addTag({ property: 'og:url', content: 'https://pvd-solutions.com/' })
  }

  ngOnInit(): void {
    this.updateMetaTags()
  }

  public openNav(): void {
    if (this.sharedService.mobileNavOpen === false) {
      this.sharedService.mobileNavOpen = true
    } else {
      this.sharedService.mobileNavOpen = false
    }
  }
}