import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TextShareService } from '../../../../providers/textshare.service';
import * as marked from 'marked';

/**
 * Generated class for the TextModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-text-modal',
  templateUrl: 'text-modal.html',
	providers: [TextShareService]
})
export class TextModalPage {

	private toggleTest:Boolean = false;
	private idx:number;
	private title:String;
	private content:String;

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public textShareService: TextShareService
		) {
			this.idx = navParams.get('idx');
			marked.setOptions({
				renderer: new marked.Renderer(),
				gfm: true,
				tables: true,
				breaks: true,
				pedantic: true,
				sanitize: true,
				smartLists: true,
				smartypants: true
			});
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TextModalPage');
		this.textShareService.tsRead(this.idx).subscribe(
			data => {
				this.title = data.title;
				this.content = marked(decodeURI(data.content));
			},
			error => console.log(error)
		)
  }

	dismiss() {
    this.viewCtrl.dismiss();
  }

}
