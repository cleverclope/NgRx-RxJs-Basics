import { Component, OnInit } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: true },
  ];

  // of
  users$ = of(this.users);

  // map no init
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  // filter
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  );


  constructor() { }

  ngOnInit(): void {

  this.users$.subscribe((users) => {
      console.log('user', users);
    });

  }

}
