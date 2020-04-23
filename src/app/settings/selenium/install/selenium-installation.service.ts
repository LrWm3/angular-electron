import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleniumInstallationService {

  constructor() { }

  installSelenium(installConfig: SeleniumInstallationConfiguration): Observable<SeleniumInstallationProgress> {
    throw new Error("Method not implemented.");
  }
}

export type SeleniumInstallationConfiguration = {
  seleniumVersion: String;
};

export type SeleniumInstallationProgress = {
  complete: boolean;
  progress: Number;
};
