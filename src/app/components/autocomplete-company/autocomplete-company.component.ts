import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Observable,
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
} from 'rxjs';
import { Company } from 'src/app/interfaces/company';
import { AutocompleteCompanyService } from 'src/app/services/autocomplete-company.service';

@Component({
  selector: 'app-autocomplete-company',
  templateUrl: './autocomplete-company.component.html',
  styleUrls: ['./autocomplete-company.component.scss'],
})
export class AutocompleteCompanyComponent implements OnInit {
  inputControl = new FormControl<string>('');
  companies!: Observable<Company[]>;

  constructor(private autocomplete: AutocompleteCompanyService) {}

  ngOnInit() {
    this.companies = this.inputControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      map((input) => {
        if (!input) return '';
        return typeof input === 'string' ? input : input['name'];
      }),
      map((input) => {
        input = input.replace('https://', '')
        input = input.replace('http://', '')
        input = input.replace('www.', '')
        return input
      }),
      filter((input) => !!input && input.trim().length > 1),
      distinctUntilChanged(),
      switchMap((input) => this.autocomplete.getCompanies(input ?? ''))
    );
  }

  displayFn(company: Company): string {
    return company && company.name ? company.name : '';
  }
}
