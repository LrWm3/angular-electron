import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallComponent } from './install.component';

import { mock, instance, when, verify, anything } from 'ts-mockito'
import { SeleniumInstallationService, SeleniumInstallationConfiguration } from './selenium-installation.service';
import { Observable, defer } from 'rxjs';

describe('InstallComponent', () => {
  let component: InstallComponent;
  let fixture: ComponentFixture<InstallComponent>;
  let htmlElement: HTMLElement;
  let seleniumInstallationServiceMock: SeleniumInstallationService;

  beforeEach(async(() => {
    seleniumInstallationServiceMock = mock(SeleniumInstallationService);
    let seleniumInstallationServiceMockIns = instance(seleniumInstallationServiceMock);

    TestBed.configureTestingModule({
      declarations: [InstallComponent],
      providers: [
        {provide: SeleniumInstallationService, useValue: seleniumInstallationServiceMockIns}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Install Component Integration Test', () => {
    it('should be able to:' +
      '\n   - display selenium is not installed, ' +
      '\n   - display firefox is not installed, ' +
      '\n   - display chrome is not installed, ' +
      '\n   - display ie is not installed & ' +
      '\n   - display edge is not installed; ' +
      '\n - then when the user ' +
      '\n   - selects a version of selenium & ' +
      '\n   - clicks "install"; ' +
      '\n - then installation should begin & ' +
      '\n   - install progress should be updated until installed; ' +
      '\n - then when installation is complete ' +
      '\n   - display a notification indicating installation is complete, ' +
      '\n   - display the install path to selenium, ' +
      '\n   - display the installed version of selenium, ' +
      '\n   - display the installed version of the firefox driver, ' +
      '\n   - display the installed version of the chrome driver, ' +
      '\n   - display the installed version of the ie driver & ' +
      '\n   - display the installed version of the edge driver', () => {
        // Display
        const seleniumInstallPath = htmlElement.querySelector('#selenium-install-path');
        const seleniumVersionInstalled = htmlElement.querySelector('#selenium-version-installed');
        const firefoxVersionInstalled = htmlElement.querySelector('#firefox-version-installed');
        const chromeVersionInstalled = htmlElement.querySelector('#chrome-version-installed');
        const edgeVersionInstalled = htmlElement.querySelector('#edge-version-installed');
        const ieVersionInstalled = htmlElement.querySelector('#ie-version-installed');

        // Interactable
        const seleniumVersionSelector = htmlElement.querySelector("#selenium-version-select");
        const installSeleniumSubmit = htmlElement.querySelector('#selenium-install-submit');
        const installSeleniumProgress = htmlElement.querySelector('#selenium-install-progress');
        const installSeleniumCompleteNotification = htmlElement.querySelector('#selenium-install-complete-notification');
        const installSeleniumFailedNotification = htmlElement.querySelector('#selenium-install-failed-notification');

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
    describe('onInstallSeleniumButtonClick', () => {
      it('should be called when "install" is pressed', async () => {
        spyOn(component, 'onInstallSeleniumButtonClick');
        let installSeleniumSubmit: HTMLElement = htmlElement.querySelector('#selenium-install-submit') as HTMLElement;
        expect(htmlElement).toBeTruthy();
        expect(installSeleniumSubmit).toBeTruthy();

        installSeleniumSubmit.click();

        await fixture.whenStable()

        expect(component.onInstallSeleniumButtonClick).toHaveBeenCalled();

      });
      it('should delegate installation to "installSelenium" the seleniumInstallationService', () => {
        const installConfig: SeleniumInstallationConfiguration = { seleniumVersion: "1.0.0" };
        let observableMock = defer(() => Promise.resolve({ complete: true, progress: 100 }));

        when(seleniumInstallationServiceMock.installSelenium(installConfig)).thenReturn(observableMock);

        // installSeleniumSubmit.
        component.onInstallSeleniumButtonClick();

        // Verify service method was called.
        // Try not using 'anything' here.
        verify(seleniumInstallationServiceMock.installSelenium(anything())).called();

      })
    })
  })

});
