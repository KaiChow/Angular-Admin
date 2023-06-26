import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../auth/auth.service'

interface LoginForm {
  username: FormControl<string>
  password?: FormControl<string>
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    if (this.authService.Token) {
      this.router.navigate(['/pages'])
    }
  }
  loginControl = new FormGroup<LoginForm>({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true })
  })
  handleSubmit() {
    const { username, password } = this.loginControl.value
    console.log(username, password)
    if (username && password) {
      this.authService.login().subscribe({
        next: (response: any) => {
          const { ErrorCode, Msg, Body } = response
          if (ErrorCode === 0) {
            this._snackBar.open(Msg, '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            })
            // 保存token
            localStorage.setItem('Token', Body.Token)
            //获取用户信息
            // 跳转控制台
            this.router.navigate(['/dashboard'])
          } else {
            this._snackBar.open('登陆成功!', '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            })
            this.router.navigate(['/pages'])
          }
        },
        error: (error: any) => {
          console.error(error.message)
        }
      })
    }
  }
}
