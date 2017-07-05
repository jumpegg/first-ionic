import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TextModalPage } from './text-modal/text-modal';
import { HeightToggle } from '../../../animation/heightToggle';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FolderService } from '../../../providers/folder.service';

/**
 * Generated class for the TextsharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-textshare',
  templateUrl: 'textshare.html',
	animations: [HeightToggle],
	providers: [FolderService]
})
export class TextsharePage {

	private toggleTest:String = "close";
	private folders = [];

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public modalCtrl: ModalController,
		public viewCtrl: ViewController,
		public folderService: FolderService
		) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextsharePage');
		this.makeTree();
  }

  openModal() {
    let modal = this.modalCtrl.create(TextModalPage);
    modal.present();
  }
	toggler(){
		this.toggleTest = (this.toggleTest == "close") ? "open" : "close";
	}
	makeTree(){
		this.folderService
		.folderList()
		.flatMap(
			data=>{
				this.folders = data;
				this.folders.map(folder=>{
					folder.items = [];
					folder.state = 'close';
				})
				return this.folderService.folderTreeList();
			}
		).subscribe(
			data =>{
				this.folders.map(folder=>{
					data.map(item=>{
						if(folder.idx == item.folder_idx){
							folder.items.push({
								itemName : item.title,
								itemIdx : item.idx,
								itemState : 'deactive'
							})
						}
					})
				})
				console.log(this.folders);
			}
		)
	}

}