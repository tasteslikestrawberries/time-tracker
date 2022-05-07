import { Component, OnInit } from '@angular/core';
import { TimetrackerService } from 'src/app/shared/services/timetracker.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  constructor(private timeTrackerService: TimetrackerService) { }

  ngOnInit(): void {
    this.timeTrackerService.getOrganizationMembership().subscribe(data => console.log(data));
  }

}
