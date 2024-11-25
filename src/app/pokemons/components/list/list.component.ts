import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent, type PaginatorState } from '../../../components/paginator/paginator.component';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  template: `
    <paginator
      [currentPage]="1"
      [rowsPerPageOptions]="[10, 20, 40, 80]"
      [rows]="20"
      [totalRecords]="100"
      (onPageChange)="onPageChanged($event)"
    ></paginator>
    <input
      type="text"
      class="w-2/4 p-2 rounded border border-gray-600"
      placeholder="Filter by pokemon name..."
      [formControl]="query"
    />
    <data-table [isLoading]="false" [data]="[]"></data-table>
  `,
  imports:[PaginatorComponent,TableComponent,ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  query = new FormControl('');

  onPageChanged(paginatorState: PaginatorState) {
    console.log(paginatorState);
  }
}
