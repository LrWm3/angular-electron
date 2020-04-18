import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallComponent } from './install.component';

describe('InstallComponent', () => {
  let component: InstallComponent;
  let fixture: ComponentFixture<InstallComponent>;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    htmlElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Install Component Integration Test', () => {
    it('should be able to ' +
      '\ndisplay selenium is not installed, ' +
      '\ndisplay firefox is not installed, ' +
      '\ndisplay chrome is not installed, ' +
      '\ndisplay ie is not installed & ' +
      '\ndisplay edge is not installed; ' +
      '\nthen when the user ' +
      '\nselects a version of selenium & ' +
      '\nclicks "install"; ' +
      '\nthen installation should begin & ' +
      '\ninstall progress should be updated until installed; ' +
      '\nthen when installation is complete ' +
      '\ndisplay a notification indicating installation is complete, ' +
      '\ndisplay the install path to selenium, ' +
      '\ndisplay the installed version of selenium, ' +
      '\ndisplay the installed version of the firefox driver, ' +
      '\ndisplay the installed version of the chrome driver, ' +
      '\ndisplay the installed version of the ie driver & ' +
      '\ndisplay the installed version of the edge driver', () => {
        // Display
        const seleniumInstallPath = htmlElement.querySelector('#selenium-install-path');
        const seleniumVersionInstalled = htmlElement.querySelector('#selenium-version-installed');
        const firefoxVersionInstalled = htmlElement.querySelector('#firefox-version-installed');
        const chromeVersionInstalled = htmlElement.querySelector('#chrome-version-installed');
        const edgeVersionInstalled = htmlElement.querySelector('#edge-version-installed');
        const ieVersionInstalled = htmlElement.querySelector('#ie-version-installed');

        // Interactable
        const seleniumVersionSelector = htmlElement.querySelector("#selenium-version-selector");
        const installSeleniumSubmit = htmlElement.querySelector('#install-selenum-submit');
        const installSeleniumProgress = htmlElement.querySelector('#install-selenium-progress');
        const installSeleniumCompleteNotification = htmlElement.querySelector('#install-selenium-complete-notification');
        const installSeleniumFailedNotification = htmlElement.querySelector('#install-selenium-failed-notification');

        // Display elements should be present.
        expect(seleniumVersionSelector).toBeTruthy();
        expect(installSeleniumSubmit).toBeTruthy();
        expect(seleniumInstallPath).toBeTruthy();
        expect(seleniumVersionInstalled).toBeTruthy();
        expect(chromeVersionInstalled).toBeTruthy();
        expect(firefoxVersionInstalled).toBeTruthy();
        expect(edgeVersionInstalled).toBeTruthy();
        expect(ieVersionInstalled).toBeTruthy();

        // Progress and Notification elements not yet present.
        expect(installSeleniumProgress).toBeNull();
        expect(installSeleniumCompleteNotification).toBeNull();
        expect(installSeleniumFailedNotification).toBeNull();

        // TODO - Verify 'not installed' state.
        // expect(seleniumInstallPath.textContent).toBe("None");
        // expect(seleniumVersionInstalled.textContent).toBe("Not installed.");
        // expect(chromeVersionInstalled.textContent).toBe("Not installed.");

      });
  });

  describe('Install Component Unit tests', () => {

  })

});
