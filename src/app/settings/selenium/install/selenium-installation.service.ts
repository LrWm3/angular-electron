import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeleniumInstallationService {

  constructor() { }

  installSelenium(installConfig: SeleniumInstallationConfiguration) {
    throw new Error("Method not implemented.");
  }
}

export type SeleniumInstallationConfiguration = {
  seleniumVersion: String;
};
