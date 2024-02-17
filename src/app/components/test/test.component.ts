import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Test2Component } from '../test2/test2.component';
import { CountriesService } from '../../core/api/countries/countries.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, Test2Component],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countriesService
      .getCountrys()
      .subscribe((result) => console.log(result));
  }
}
