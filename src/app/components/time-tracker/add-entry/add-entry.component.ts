import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { TimetrackerService } from 'src/app/shared/services/timetracker.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  entry!: any;

  addEntryForm = this.fb.group({
    note: ['', Validators.required],
    service: ['App Development'],
    time: ['', Validators.required],
  });

  // for validators to access form values
  get f() { return this.addEntryForm.controls; } 

  constructor(private fb: FormBuilder, private timeTrackerService: TimetrackerService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.entry = this.addEntryForm.value;
    this.timeTrackerService.addEntry(this.entry);
    this.formGroupDirective.resetForm() 
  }
}