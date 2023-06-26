import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'
import { tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Token = localStorage.getItem('Token') || ''

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.Token = 'aSDjdjJN7mjkas8'
        localStorage.setItem('Token', this.Token)
      })
    )
  }

  logout(): void {
    this.Token = ''
  }
}
