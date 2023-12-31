import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from '../interface/ticket.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newTickets: Ticket[] = [];

  // constructor(private dialog: MatDialog, private apiservice: ApiService) {
  //   this.apiservice.getAllCards().subscribe((res) => {
  //     console.log(res);
  //     this.newTickets.push(res.records);
  //   });
  // }

  constructor(private dialog: MatDialog, private apiservice: ApiService) {
    this.newTickets = []; // Initialize newTickets array if not already initialized
  
    // this.apiservice.getAllCards().subscribe((res) => {
    //   console.log(res);
      
    //   // Assuming res is an object with a 'records' property containing the array
    //   const recordsArray = res.records;
  
    //   // Push the records into the newTickets array
    //   this.newTickets.push(...recordsArray);
  
    //   // Now you can access the data in this.newTickets
    //   console.log(this.newTickets);
  
    //   // If you want to access individual records, you can do something like this:
    //   for (const record of this.newTickets) {
    //     console.log('ID:', record.id);
    //     console.log('Title:', record.title);
    //     console.log('Description:', record.description);
    //     console.log('Status:', record.status);
    //   }
    // });
  }
  

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '900px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Add the new ticket to the "New" column
        this.newTickets.push(result);
      }
    });
  }
}
