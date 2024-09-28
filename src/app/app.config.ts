import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: "top"
  }), withViewTransitions()), provideClientHydration(withI18nSupport()), provideAnimationsAsync()]
}
