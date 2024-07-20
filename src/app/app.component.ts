import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedService } from './services/shared.service'
import { MatIconModule } from '@angular/material/icon'

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

  ngOnInit(): void {

  }

  public openNav(): void {
    if (this.sharedService.mobileNavOpen === false) {
      this.sharedService.mobileNavOpen = true
    } else {
      this.sharedService.mobileNavOpen = false
    }
  }
}