import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onInstallSeleniumButtonClick(): void {
    throw new Error("Not implemeneted");
  }
}
