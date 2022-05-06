import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { TimetrackerService } from 'src/app/shared/services/timetracker.service';
import { IEntry } from 'src/app/shared/models/entry.model';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  entry!: IEntry;

  addEntryForm = this.fb.group({
    name: ['', Validators.required],
    project: [''],
    time: ['', Validators.required],
  });

  get f() { return this.addEntryForm.controls; } //for validators to access form values

  constructor(private fb: FormBuilder, private timeTrackerService: TimetrackerService) {}

  ngOnInit(): void {
    console.log(this.addEntryForm);
  }

  onSubmit() {
    this.entry = this.addEntryForm.value;
    this.formGroupDirective.resetForm() 
  }
}