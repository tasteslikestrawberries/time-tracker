import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeader } from '../models/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private header = new BehaviorSubject<IHeader>({
    mainTitle: '',
    title: '',
    subtitle: '',
  });

  header$ = this.header.asObservable();

  constructor() {}

  setHeader = (header: IHeader) => {
    this.header.next(header);
  };
}
