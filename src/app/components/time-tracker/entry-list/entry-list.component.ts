import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { EntryModel } from 'src/app/shared/models/entry-model';
import { TimetrackerService } from 'src/app/shared/services/timetracker.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  serviceName = '';
  entries?: EntryModel[];
  constructor(private timeTrackerService: TimetrackerService) { }

  ngOnInit(): void {
    this.fetchEntries();
    this.fetchService();
  }

  fetchEntries() {
    this.timeTrackerService.getEntries().pipe(
      //tap((v) => console.log(v)),
      // extracts data array from apiData object
      map((apiData: any) => apiData.data),
      // maps data array to EntryModel[]
      map((apiEntryArray: any) => apiEntryArray.map((entry: any) => new EntryModel(entry)
      )),
      //tap((v) => console.log(v))
    ).subscribe(entryModelArr => this.entries = entryModelArr)
  }

  fetchService() {
    this.timeTrackerService.getServices().pipe(
      //tap((data: any) => console.log(data.data[3].attributes.worked_time)),
      map((services: any) => services.data[3].attributes.name)
    ).subscribe(serviceName => this.serviceName = serviceName)
  }

}