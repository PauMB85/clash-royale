import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatPaginator, MatPaginatorModule, MatRadioModule,
  MatSidenavModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class MaterialModule {}
