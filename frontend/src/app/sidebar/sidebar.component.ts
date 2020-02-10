import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isHeaderSearchVisible: boolean;

  constructor() {
    this.isHeaderSearchVisible = window.location.pathname === '/';
  }

  ngOnInit() {}
}
