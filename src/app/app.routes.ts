import { Routes } from '@angular/router'
import { Home } from './pages/home/home.component'
import { About } from './pages/about/about.component'
import { Contact } from './pages/contact/contact.component'
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy.component'
import { AccessibilityStatement } from './pages/accessibility-statement/accessibility-statement.component'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'accessibility-statement', component: AccessibilityStatement },
  { path: '**', component: Home }
]