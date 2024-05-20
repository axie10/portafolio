import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


xdescribe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let myService: AuthService;
  let myService2: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: Router, useValue: {} }

      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    myService = TestBed.inject(AuthService);
    myService2 = TestBed.inject(Router);
  });

  it('should ...', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.logout() and reload the window', () => {
    // Arrange
    spyOn(myService, 'logout');
    spyOn(window.location, 'reload');
    // Act
    component.onLogout();
    // Assert
    expect(myService.logout).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });

})