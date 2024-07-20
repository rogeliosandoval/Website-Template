import { Routes } from '@angular/router'
import { Home } from './pages/home/home.component'
import { About } from './pages/about/about.component'
import { Contact } from './pages/contact/contact.component'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
]