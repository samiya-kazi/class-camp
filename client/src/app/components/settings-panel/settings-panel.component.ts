import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.css']
})
export class SettingsPanelComponent implements OnInit {

  sections = ['Institute Details', 'Institute Members', 'Danger Zone'];
  selectedSection = this.sections[0];

  constructor() { }

  ngOnInit(): void {
  }


  handleSectionSelect (section: string) {
    if (this.selectedSection !== section) {
      this.selectedSection = section;
    }
  }
}
