import { Injectable, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})

export class SharedService implements OnInit {
  private router = inject(Router)
  public mobileNavOpen: boolean = false

  ngOnInit(): void {
  }

  public grabRoute() {
    return this.router.url
  }
}