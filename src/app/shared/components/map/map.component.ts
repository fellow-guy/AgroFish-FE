import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: -12.093872020673635, lng: -77.00384276328941 };
  zoom: number = 16;
  markers: any[] = [
    { lat: -12.093872020673635, lng: -77.00384276328941 }
  ];
}
