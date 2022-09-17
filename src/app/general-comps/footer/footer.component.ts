import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  learnItems = [
    'learn-custom-navigator',
    'learn-torah',
    'learn-education-ministry',
  ];
  actionItems = ['action-adopt', 'action-lecturing', 'action-types'];

  constructor() {}

  ngOnInit() {}
}
