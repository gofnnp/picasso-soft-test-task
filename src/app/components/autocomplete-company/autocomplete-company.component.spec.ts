import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCompanyComponent } from './autocomplete-company.component';

describe('AutocompleteCompanyComponent', () => {
  let component: AutocompleteCompanyComponent;
  let fixture: ComponentFixture<AutocompleteCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
