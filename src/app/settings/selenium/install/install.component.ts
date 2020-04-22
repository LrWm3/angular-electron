import { Component, OnInit } from '@angular/core';
import { SeleniumInstallationService } from './selenium-installation.service'
@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {

  constructor(private seleniumInstallationService: SeleniumInstallationService) { }

  ngOnInit(): void {
  }

  public onInstallSeleniumButtonClick(): void {
    let installConfig = { seleniumVersion: "1.0.0" }
    this.seleniumInstallationService.installSelenium(installConfig);
  }
}
