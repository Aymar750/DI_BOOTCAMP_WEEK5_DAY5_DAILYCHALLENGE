import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  myImage : string = "";
  position: Position = {
    timestamp: 0,
    coords: {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      altitudeAccuracy: undefined,
      altitude: null,
      speed: null,
      heading: null
    }
  };

  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

   this.myImage = image.webPath!;
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.position = coordinates;
  }


  async share() {
    if (!this.position) {
        console.log("position is not available");
        return;
    }
    await Share.share({
      title: 'Viens me retrouver',
      text: `Voici ma position actuelle : 
        ${this.position.coords.latitude}, 
        ${this.position.coords.longitude}`,
      url: 'http://ionicacademy.com/'
    });
  }


}