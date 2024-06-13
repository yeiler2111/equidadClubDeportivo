import { Component, OnInit } from '@angular/core';
interface MenuItem {
  label: string,
  icon: string
}
@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',

      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      }
    ];
  }
}
