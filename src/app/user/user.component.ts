import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userinfo: any;
  @Output() newUserInfo = new EventEmitter<string>();
  @Output() deleteUserInfo = new EventEmitter<string>();

  addUser(value: string) {
    this.newUserInfo.emit(value)
  }
  constructor(private myConfigService: ConfigService) { }
  deleteUser(value: any) {
    this.deleteUserInfo.emit(value)


  }

  ngOnInit(): void {
    console.log(`We are inside header component`);
    this.myConfigService.sayHello();
  }
}
