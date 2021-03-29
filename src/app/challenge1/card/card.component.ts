import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopContainComponent } from '../pop-contain/pop-contain.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardDetails: any;


  constructor(public dialog: MatDialog,) { }

  openDialog() {
    const dialogRef = this.dialog.open(PopContainComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
export interface CardDetails {
  userName: string;
  usePicUrl: string;
  uploadTime: string;
  postImage: string;
  title: string;
  subTitle: string;
  description: string;
}
