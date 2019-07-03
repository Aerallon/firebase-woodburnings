import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialDetails } from '../../../interfaces';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteMaterialComponent } from '../delete-material/delete-material.component';
import { UpdateMaterialComponent } from '../update-material/update-material.component';
import { MaterialService } from '../material.service';

@Component({
    templateUrl: './list-material.component.html',
    styleUrls: ['./list-material.component.scss'],
    selector: 'list-materials'
})

export class ListMaterialComponent implements OnInit {

  public allMaterial$: Observable<MaterialDetails[]>;
  deleteMaterialDialogRef: MatDialogRef<DeleteMaterialComponent>;
  updateMaterialDialogRef: MatDialogRef<UpdateMaterialComponent>;
  // previewMaterialDialogRef: MatDialogRef<PreviewMaterialComponent>;

  displayedColumns = ['type', 'height', 'width', 'shape', 'quantity', 'bought', 'purchasePrice',
    'purchaseLocation', 'imageUrl', 'menu'];

  constructor(private materialService: MaterialService,
              private dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.allMaterial$ = this.materialService.list();
  }

  // TODO: Add Preview Dialog as well here
  // openPreviewMaterialDialog(material: MaterialDetails): void {
  //   this.previewMaterialDialogRef = this.dialog.open(PreviewMaterialComponent, { width: '500px' });
  //   this.previewMaterialDialogRef.componentInstance.material = material;
  // }

  openUpdateMaterialDialog(material: MaterialDetails): void {
    this.updateMaterialDialogRef = this.dialog.open(UpdateMaterialComponent, { width: '500px' });
    this.updateMaterialDialogRef.componentInstance.material = material;
  }

  openDeleteDialog(material: MaterialDetails): void {
    this.deleteMaterialDialogRef = this.dialog.open(DeleteMaterialComponent, { width: '500px' });
    this.deleteMaterialDialogRef.componentInstance.material = material;
  }
}
