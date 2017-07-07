import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { UserpagePage } from '../pages/userpage/userpage';
import { UserStdAdminPage } from '../pages/userpage/user-std-admin/user-std-admin';
import { MypagePage } from '../pages/userpage/mypage/mypage';
import { StdListPage } from '../pages/userpage/std-list/std-list';
import { StdSearchPage } from '../pages/userpage/std-search/std-search';
import { TextsharePage } from '../pages/userpage/textshare/textshare';
import { TextModalPage } from '../pages/userpage/textshare/text-modal/text-modal';

import { StudyPage } from '../pages/study/study'

import { UserService } from '../providers/user.service';
import { AccountService } from '../providers/account.service';
import { CommentService } from '../providers/comment.service';
import { DataService } from '../providers/data.service';
import { FlowService } from '../providers/flow.service';
import { FolderService } from '../providers/folder.service';
import { FreetalkService } from '../providers/freetalk.service';
import { MemberService } from '../providers/member.service';
import { NoticeService } from '../providers/notice.service';
import { PlaceService } from '../providers/place.service';
import { ScheduleService } from '../providers/schedule.service';
import { StudyService } from '../providers/study.service';
import { TextShareService } from '../providers/textshare.service';
import { UserInfo } from '../providers/userinfo.service';

import 'rxjs/add/operator/mergeMap';

@NgModule({
  declarations: [
    MyApp,
		LoginPage,
		UserpagePage,
		UserStdAdminPage,
		MypagePage,
		StdListPage,
		StdSearchPage,
		TextsharePage,
		TextModalPage,
		StudyPage
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
		LoginPage,
		UserpagePage,
		UserStdAdminPage,
		MypagePage,
		StdListPage,
		StdSearchPage,
		TextsharePage,
		TextModalPage,
		StudyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		UserService,
		AccountService,
		CommentService,
		DataService,
		FlowService,
		FolderService,
		FreetalkService,
		MemberService,
		NoticeService,
		PlaceService,
		ScheduleService,
		StudyService,
		TextShareService,
		UserInfo
  ]
})
export class AppModule {}
