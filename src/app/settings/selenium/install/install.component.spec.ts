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
      'display selenium is not installed, ' +
      'display chrome is not installed, ' +
      'when the user, ' +
      'selects a version of selenium, ' +
      'a version of the chrome driver, ' +
      '& clicks "install selenium", ' +
      'and then, ' +
      'install progress should be updated until installed, ' +
      'and then once installation is complete, ' +
      'display a notification indicating installation is complete, ' +
      'display the install path to selenium, ' +
      'display the installed version of selenium, ' +
      '& display the installed version of the chrome driver', () => {
        // Display
        const seleniumInstallPath = htmlElement.querySelector('#selenium-install-path');
        const seleniumVersionInstalled = htmlElement.querySelector('#selenium-version-installed');
        const chromeVersionInstalled = htmlElement.querySelector('#chrome-version-installed');

        // Interactable
        const seleniumVersionSelector = htmlElement.querySelector("#selenium-version-selector");
        const chromeVersionSelector = htmlElement.querySelector("#chrome-version-selector");
        const installSeleniumSubmit = htmlElement.querySelector('#install-selenum-submit');
        const installSeleniumProgress = htmlElement.querySelector('#install-selenium-progress');
        const installSeleniumCompleteNotification = htmlElement.querySelector('#install-selenium-complete-notification');
        const installSeleniumFailedNotification = htmlElement.querySelector('#install-selenium-failed-notification');

        // Display elements should be present.
        expect(seleniumVersionSelector).toBeDefined();
        expect(chromeVersionSelector).toBeDefined();
        expect(installSeleniumSubmit).toBeDefined();
        expect(seleniumInstallPath).toBeDefined();
        expect(seleniumVersionInstalled).toBeDefined();
        expect(chromeVersionInstalled).toBeDefined();

        // Progress and Notification elements not yet present.
        expect(installSeleniumProgress).toBeUndefined();
        expect(installSeleniumCompleteNotification).toBeUndefined();
        expect(installSeleniumFailedNotification).toBeUndefined();

        // TODO - Verify 'not installed' state.
        // expect(seleniumInstallPath.textContent).toBe("None");
        // expect(seleniumVersionInstalled.textContent).toBe("Not installed.");
        // expect(chromeVersionInstalled.textContent).toBe("Not installed.");

      });
  });

  describe('Install Component Unit tests', () => {

  })

});
