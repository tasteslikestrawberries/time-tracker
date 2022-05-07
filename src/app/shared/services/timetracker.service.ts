import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

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
  'Content-Type': 'application/vnd.api+json; charset=utf-8',
  'Accept': 'text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5',
  'X-Auth-Token': environment.apiKey,
}

  constructor(private http: HttpClient) {}

  getOrganizationMembership() {
    return this.http
    .get(`${this.apiConfig.baseUrl}/organization_memberships/`, {headers: this.headers}) 
    
  }

  getEntries() {

  }
  getEntry() {

  }
  addEntry() {

  }
  deleteEntry() {

  }


}
