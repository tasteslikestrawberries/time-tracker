import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme = new BehaviorSubject(this.IsDarkThemeInStorage());
  isDarkTheme$ = this.darkTheme.asObservable();

  constructor() {}

   IsDarkThemeInStorage() {
    const storageValue = localStorage.getItem("storage_theme") ?? 'light_theme';
    if (storageValue === 'dark_theme') {
      return true;
    } 
    return false;
   }

  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme.next(isDarkTheme);
    const storageValue = isDarkTheme ? 'dark_theme' : 'light_theme';
    localStorage.setItem('storage_theme', storageValue);
  }
}