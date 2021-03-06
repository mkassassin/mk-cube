// Default Modules
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { CommonModule} from '@angular/common';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule, Routes } from '@angular/router';

// App Modules And Components
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app.routing.module';
  import { MaterialModule } from './material.module';
  import { PrimengModule } from './primeng.module';


  import { AuthGuard } from './guard/auth.guard';
  import { NotAuthGuard } from './guard/not-auth.guard';

// Feature Module
  import { FlexLayoutModule } from '@angular/flex-layout';
  import { BsDatepickerModule, TypeaheadModule, ModalModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
  import { ScrollbarModule } from 'ngx-scrollbar';
  import { MomentModule } from 'angular2-moment';
  import { NgxCarouselModule } from 'ngx-carousel';
  import { VgCoreModule } from 'videogular2/core';
  import { VgControlsModule } from 'videogular2/controls';
  import { LightboxModule } from 'angular2-lightbox';
  import { YoutubePlayerModule } from 'ngx-youtube-player';
  import { ClipboardModule } from 'ngx-clipboard';
  import {ProgressSpinnerModule} from 'primeng/progressspinner';

// Service Module
  import { DataSharedVarServiceService } from './service/data-shared-var-service/data-shared-var-service.service';
  import { SigninSignupService } from './service/signin-signup/signin-signup.service';

import { LoginComponent } from './login/login.component';
import { ProfileCompletionComponent } from './profile-completion/profile-completion.component';
import { CategoriesComponent } from './categories/categories.component';
import { CubesListComponent } from './cubes-list/cubes-list.component';
import { CreateCubeComponent } from './Modal_Components/create-cube/create-cube.component';
import { FeedsMainComponent } from './feeds/feeds-main/feeds-main.component';
import { FeedsHeaderComponent } from './feeds/feeds-header/feeds-header.component';
import { FeedsLeftComponent } from './feeds/feeds-left/feeds-left.component';
import { FeedsRightComponent } from './feeds/feeds-right/feeds-right.component';
import { FeedsCenterComponent } from './feeds/feeds-center/feeds-center.component';
import { CreatePostComponent } from './Modal_Components/create-post/create-post.component';
import { CubeService } from './service/cube/cube.service';
import { PostService } from './service/post/post.service';
import { JoinConfirmationComponent } from './Modal_Components/join-confirmation/join-confirmation.component';
import { PostSubmitService } from './component-connecting/post-submit/post-submit.service';
import { EmoteAddComponent } from './Modal_Components/emote-add/emote-add.component';
import { EditPostComponent } from './Modal_Components/edit-post/edit-post.component';
import { DeleteConfirmationComponent } from './Modal_Components/delete-confirmation/delete-confirmation.component';
import { ReportPostComponent } from './Modal_Components/report-post/report-post.component';
import { ReportUserComponent } from './Modal_Components/report-user/report-user.component';
import { ReportCommentComponent } from './Modal_Components/report-comment/report-comment.component';
import { EditCommentComponent } from './Modal_Components/edit-comment/edit-comment.component';
import { CubesViewMainComponent } from './cubes/cubes-view-main/cubes-view-main.component';
import { CubesViewCenterTopicsComponent } from './cubes/cubes-view-center-topics/cubes-view-center-topics.component';
import { CubesViewCenterFeedsComponent } from './cubes/cubes-view-center-feeds/cubes-view-center-feeds.component';
import { CubesViewRightComponent } from './cubes/cubes-view-right/cubes-view-right.component';
import { CubesViewLeftComponent } from './cubes/cubes-view-left/cubes-view-left.component';
import { CubeViewRelatedService } from './component-connecting/cube-view-related/cube-view-related.service';
import { AddTopicComponent } from './Modal_Components/add-topic/add-topic.component';
import { ViewAllCubesComponent } from './Modal_Components/view-all-cubes/view-all-cubes.component';
import { DiscoverCubesComponent } from './Modal_Components/discover-cubes/discover-cubes.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { ProfileLeftComponent } from './profile/profile-left/profile-left.component';
import { ProfileRightComponent } from './profile/profile-right/profile-right.component';
import { ProfileCenterComponent } from './profile/profile-center/profile-center.component';
import { EditProfileComponent } from './Modal_Components/edit-profile/edit-profile.component';
import { PrivacySettingsComponent } from './Modal_Components/privacy-settings/privacy-settings.component';
import { ChangePasswordComponent } from './Modal_Components/change-password/change-password.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InviteCubeRedirectionComponent } from './invite-cube-redirection/invite-cube-redirection.component';
import { EditCubeComponent } from './Modal_Components/edit-cube/edit-cube.component';
import { EmailVerificationComponent } from './Modal_Components/email-verification/email-verification.component';
import { PasswordResetComponent } from './Modal_Components/password-reset/password-reset.component';
import { PasswordResetRedirectionComponent } from './password-reset-redirection/password-reset-redirection.component';
import { EmailCubeInviteComponent } from './Modal_Components/email-cube-invite/email-cube-invite.component';
import { AddEmailInviteComponent } from './Modal_Components/add-email-invite/add-email-invite.component';
import { FeedsViewComponent } from './feeds-view/feeds-view.component';
import { PostShareCubesListComponent } from './Modal_Components/post-share-cubes-list/post-share-cubes-list.component';
import { EditTopicComponent } from './Modal_Components/edit-topic/edit-topic.component';
import { AlertPrivacyUpdateComponent } from './Modal_Components/alert-privacy-update/alert-privacy-update.component';
import { FeedsCaptureComponent } from './feeds/feeds-capture/feeds-capture.component';
import { FeedsTrendsComponent } from './feeds/feeds-trends/feeds-trends.component';

import { CaptureService } from './service/capture/capture.service';
import { CaptureEmoteAddComponent } from './Capture_Modal_Components/capture-emote-add/capture-emote-add.component';
import { CaptureEditComponent } from './Capture_Modal_Components/capture-edit/capture-edit.component';
import { ReportCaptureComponent } from './Capture_Modal_Components/report-capture/report-capture.component';
import { EditCaptureCommentComponent } from './Capture_Modal_Components/edit-capture-comment/edit-capture-comment.component';
import { ReportCaptureCommentComponent } from './Capture_Modal_Components/report-capture-comment/report-capture-comment.component';
import { CaptureShareCubesListComponent } from './Capture_Modal_Components/capture-share-cubes-list/capture-share-cubes-list.component';
import { TrendsService } from './service/trends/trends.service';
import { TrendsEditComponent } from './trends-modal-components/trends-edit/trends-edit.component';
import { TrendsEmoteAddComponent } from './trends-modal-components/trends-emote-add/trends-emote-add.component';
import { TrendsShareCubesListComponent } from './trends-modal-components/trends-share-cubes-list/trends-share-cubes-list.component';
import { EditTrendsCommentComponent } from './trends-modal-components/edit-trends-comment/edit-trends-comment.component';
import { ReportTrendsComponent } from './trends-modal-components/report-trends/report-trends.component';
import { ReportTrendsCommentComponent } from './trends-modal-components/report-trends-comment/report-trends-comment.component';
import { CreateTrendsComponent } from './trends-modal-components/create-trends/create-trends.component';
import { EditTrendsComponent } from './trends-modal-components/edit-trends/edit-trends.component';
import { CaptureViewComponent } from './capture-view/capture-view.component';
import { TrendsViewComponent } from './trends-view/trends-view.component';
import { CubesViewCenterCapturesComponent } from './cubes/cubes-view-center-captures/cubes-view-center-captures.component';
import { CubesViewCenterTrendsComponent } from './cubes/cubes-view-center-trends/cubes-view-center-trends.component';
import { ProfileCapturesComponent } from './profile/profile-captures/profile-captures.component';
import { ProfileTrendsComponent } from './profile/profile-trends/profile-trends.component';
import { TrendsTagFilterListComponent } from './trends-tag-filter-list/trends-tag-filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileCompletionComponent,
    CategoriesComponent,
    CubesListComponent,
    CreateCubeComponent,
    FeedsMainComponent,
    FeedsHeaderComponent,
    FeedsLeftComponent,
    FeedsRightComponent,
    FeedsCenterComponent,
    CreatePostComponent,
    JoinConfirmationComponent,
    EmoteAddComponent,
    EditPostComponent,
    DeleteConfirmationComponent,
    ReportPostComponent,
    ReportUserComponent,
    ReportCommentComponent,
    EditCommentComponent,
    CubesViewMainComponent,
    CubesViewCenterTopicsComponent,
    CubesViewCenterFeedsComponent,
    CubesViewRightComponent,
    CubesViewLeftComponent,
    AddTopicComponent,
    ViewAllCubesComponent,
    DiscoverCubesComponent,
    ProfileMainComponent,
    ProfileLeftComponent,
    ProfileRightComponent,
    ProfileCenterComponent,
    EditProfileComponent,
    PrivacySettingsComponent,
    ChangePasswordComponent,
    PrivacyComponent,
    TermsComponent,
    AboutComponent,
    ContactComponent,
    InviteCubeRedirectionComponent,
    EditCubeComponent,
    EmailVerificationComponent,
    PasswordResetComponent,
    PasswordResetRedirectionComponent,
    EmailCubeInviteComponent,
    AddEmailInviteComponent,
    FeedsViewComponent,
    PostShareCubesListComponent,
    EditTopicComponent,
    AlertPrivacyUpdateComponent,
    FeedsCaptureComponent,
    FeedsTrendsComponent,
    CaptureEmoteAddComponent,
    CaptureEditComponent,
    ReportCaptureComponent,
    EditCaptureCommentComponent,
    ReportCaptureCommentComponent,
    CaptureShareCubesListComponent,
    TrendsEditComponent,
    TrendsEmoteAddComponent,
    TrendsShareCubesListComponent,
    EditTrendsCommentComponent,
    ReportTrendsComponent,
    ReportTrendsCommentComponent,
    CreateTrendsComponent,
    EditTrendsComponent,
    CaptureViewComponent,
    TrendsViewComponent,
    CubesViewCenterCapturesComponent,
    CubesViewCenterTrendsComponent,
    ProfileCapturesComponent,
    ProfileTrendsComponent,
    TrendsTagFilterListComponent
  ],
  imports: [
      // Default Modules
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
      // App Modules And Components
        AppRoutingModule,
        MaterialModule,
        PrimengModule,
      // Feature Module
        FlexLayoutModule,
        BsDatepickerModule.forRoot(),
        TypeaheadModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ScrollbarModule,
        MomentModule,
        NgxCarouselModule,
        VgCoreModule,
        VgControlsModule,
        LightboxModule,
        YoutubePlayerModule,
        ClipboardModule,
        ProgressSpinnerModule
  ],
  providers: [
              AuthGuard,
              NotAuthGuard,
              DataSharedVarServiceService,
              SigninSignupService,
              CubeService,
              PostService,
              PostSubmitService,
              CubeViewRelatedService,
              CaptureService,
              TrendsService
            ],
  bootstrap: [AppComponent],
  entryComponents: [
                    CreateCubeComponent,
                    CreatePostComponent,
                    JoinConfirmationComponent,
                    EmoteAddComponent,
                    EditPostComponent,
                    DeleteConfirmationComponent,
                    ReportPostComponent,
                    ReportUserComponent,
                    ReportCommentComponent,
                    EditCommentComponent,
                    AddTopicComponent,
                    ViewAllCubesComponent,
                    DiscoverCubesComponent,
                    EditProfileComponent,
                    PrivacySettingsComponent,
                    ChangePasswordComponent,
                    EmailVerificationComponent,
                    PasswordResetComponent,
                    EditCubeComponent,
                    AddEmailInviteComponent,
                    PostShareCubesListComponent,
                    EditTopicComponent,
                    AlertPrivacyUpdateComponent,
                    CaptureEmoteAddComponent,
                    CaptureEditComponent,
                    ReportCaptureComponent,
                    EditCaptureCommentComponent,
                    ReportCaptureCommentComponent,
                    CaptureShareCubesListComponent,
                    TrendsEditComponent,
                    TrendsEmoteAddComponent,
                    TrendsShareCubesListComponent,
                    EditTrendsCommentComponent,
                    ReportTrendsComponent,
                    ReportTrendsCommentComponent,
                    CreateTrendsComponent,
                    EditTrendsComponent
                  ]
})
export class AppModule { }
