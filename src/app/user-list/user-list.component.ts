import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = ["ram", "ramesh", "mohan", "sohan", "amar"]

  adduserparent(newuser: string) {
    this.users.push(newuser)
    alert(`${newuser} is added`)
  }

  deleteUserfromparent(deleteuser: string) {
    for (var i = 0; i < this.users.length; i++) {

      if (this.users[i] === deleteuser) {
        this.users.splice(i, 1);
        alert(`${deleteuser} is deleted`)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
