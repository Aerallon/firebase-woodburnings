import { Component, Input } from '@angular/core';
import { MaterialDetails } from '../../../interfaces';
import { MatDialogRef } from '@angular/material';
import { MaterialService } from '../material.service';

@Component({
    templateUrl: './delete-material.component.html',
    styleUrls: ['./delete-material.component.scss'],
    selector: 'delete-material'
})

export class DeleteMaterialComponent {

  @Input() material: MaterialDetails;

  constructor(public dialogRef: MatDialogRef<DeleteMaterialComponent>,
              private materialService: MaterialService) {
  }

  deleteMaterial(): void {
    this.materialService.delete(this.material);
    // TODO: Listen to the delete call and show proper success or error message depending on the call
    const message = 'Successfully deleted ' + this.material.type + '.';
    this.materialService.openSnackBar(message, '');
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
