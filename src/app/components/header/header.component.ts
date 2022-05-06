import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainTitle?: string;
  title?: string;
  subtitle?: string;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {}
}
