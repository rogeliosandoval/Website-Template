import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedService } from './services/shared.service'
import { MatIconModule } from '@angular/material/icon'
import { Meta } from '@angular/platform-browser'

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

  public updateMetaTags(): void {
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