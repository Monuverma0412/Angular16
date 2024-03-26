import { Component } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
rows = Array.from({ length: 3 }, (_, i) => ({ id: i + 1, name: `Row ${i + 1}` }));

  addRow() {
    this.rows.push({ id: this.rows.length + 1, name: `Row ${this.rows.length + 1}` });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }
}
