import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  invalid: string = 'INVALID'
  iconMap = PrimeIcons.MAP_MARKER
  iconCalendar = PrimeIcons.CALENDAR
  showSuscribe: boolean = true
  optionsSelector: any[] = [
    { value: 1, name: 'Estudiante' },
    { value: 2, name: 'Profesional extranjero' }
  ]
  public costumerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    document: new FormControl('', Validators.required),
    rol: new FormControl('', [Validators.required])
  })

  showform():void {
    this.showSuscribe = !this.showSuscribe
  }
  onSubmit(): void {
    console.log(this.costumerForm)
  }


}
