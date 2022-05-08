import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { IEntry } from '../models/entry-model';

type ApiConfig = {
  organizationId: string,
  baseUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class TimetrackerService {

  private apiConfig: ApiConfig = {
    organizationId: "20273",
    baseUrl: "https://api.productive.io/api/v2"
  }

  private headers = {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5',
    'X-Auth-Token': environment.apiKey,
    'X-Organization-Id': this.apiConfig.organizationId
  }

  currentDate = new Date();
  dayBefore = new Date().setDate(this.currentDate.getDate() - 1)
  dayAfter = new Date().setDate(this.currentDate.getDate() + 1)

  formattedCurrent = this.datePipe.transform(this.currentDate, "yyyy-MM-dd");
  formattedAfter = this.datePipe.transform(this.dayAfter, "yyyy-MM-dd");
  formattedBefore = this.datePipe.transform(this.dayBefore, "yyyy-MM-dd");

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getEntries() {
    return this.http
      .get(`${this.apiConfig.baseUrl}/organization_memberships/`, { headers: this.headers })
      .pipe(switchMap((stream: any) => this.filterEntries(stream.data[0].relationships.person.data.id)));
  }

  filterEntries(id: string) {
    return this.http
      .get(`https://api.productive.io/api/v2/time_entries?person_id=${id}&filter[after]=${this.formattedBefore}&filter[before]=${this.formattedAfter}`,
        { headers: this.headers });
  }

  getServices() {
    return this.http.get('https://api.productive.io/api/v2/services', { headers: this.headers });
  }

  addEntry(entry: IEntry) {
    this.http.post(`${this.apiConfig.baseUrl}/time_entries/${this.formattedCurrent}`, {body: entry }, { headers: this.headers})
    .subscribe();
  }

  deleteEntry(id: string) {
    this.http.delete(`https://api.productive.io/api/v2/time_entries/${id}`, { headers: this.headers });
  }


}
