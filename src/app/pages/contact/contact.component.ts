import { Component, OnInit, ViewChild, inject } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'
import { Meta, Title } from '@angular/platform-browser'
import { RouterOutlet, RouterLink} from '@angular/router'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class Contact implements OnInit {
  @ViewChild('formRef') formRef: any
  public contactForm = new FormGroup({
    access_key: new FormControl('12ee3a8d-fb2b-466e-a975-4f6b29a0887d'),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  private url = 'https://api.web3forms.com/submit'
  private http = inject(HttpClient)
  private matSnack = inject(MatSnackBar)
  public sending: boolean = false
  public messageSent: boolean = false
  private meta = inject(Meta)
  private titleService = inject(Title)

  ngOnInit(): void {
    this.titleService.setTitle('PVD Solutions | Handyman Services Rhode Island')
    this.meta.updateTag({ property: 'og:image', content: 'https://pvd-solutions.com/assets/banner.png' }, "property='og:image'")
    this.meta.updateTag({ property: 'og:title', content: 'Handyman Services Rhode Island | PVD Solutions' }, "property='og:title'")
    this.meta.updateTag({ property: 'og:url', content: 'https://pvd-solutions.com/' })
    this.meta.updateTag({ property: 'og:description', content: 'Handyman repairs, comprehensive remodeling and thorough cleaning services.' }, "property='og:description'")
  }

  public sendMessage(): void {
    this.sending = true
    setTimeout(() => {
      this.messageSent = true
      this.contactForm.reset()
      this.formRef.resetForm()
      this.sending = false;
      this.matSnack.open('Message sent. Thank you!', '👍', {
        duration: 10000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })

      // this.http.post(this.url, this.contactForm.value).subscribe({
      //   next: response => {
      //     this.messageSent = true
      //     this.contactForm.reset()
      //     this.formRef.resetForm()
      //     this.sending = false
      //     this.matSnack.open('Message sent. Thank you!', '👍', {
      //       duration: 10000,
      //       verticalPosition: 'bottom',
      //       horizontalPosition: 'center'
      //     })
      //   },
      //   error: err => {
      //     this.sending = false
      //     this.matSnack.open('There was an error. Please try again.', '👍', {
      //       duration: 10000,
      //       verticalPosition: 'bottom',
      //       horizontalPosition: 'center'
      //     })
      //     console.log(err)
      //     throw err
      //   }
      // })
    }, 2000)
  }
}
