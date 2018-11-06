import { Component, OnInit } from '@angular/core';
//import { ImagePicker } from '@ionic-native/image-picker';
import { NavController } from '@ionic/angular';
import { PostPage } from '../post/post.page';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  constructor( public _navCtrl:NavController ) { }

  ngOnInit() {
  }
 /* openGallery(){
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }
  
   // this.imagePicker.getPictures(options).then(
      //file_uris => this._navCtrl.goForward(PostPage, {images: file_uris}),
      //err => console.log('uh oh')
  //  );
  }*/
}
