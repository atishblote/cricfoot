import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashHomeComponent } from './pages/d/dash-home/dash-home.component';
import { LogoutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';
import { DialogAnimationsExampleDialogComponent } from './dialogs/dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CreateIdComponent } from './pages/create-id/create-id.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { DepositAccountComponent } from './pages/deposit-account/deposit-account.component';
import { WithdrawAccountComponent } from './pages/withdraw-account/withdraw-account.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { PaymentHistoryComponent } from './pages/payment-history/payment-history.component';
import { AddBankComponent } from './pages/add-bank/add-bank.component';
import { SnackBarComponent } from './dialogs/snack-bar/snack-bar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WithdrawIdComponent } from './pages/withdraw-id/withdraw-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DashHomeComponent,
    LogoutDialogComponent,
    DialogAnimationsExampleDialogComponent,
    FooterComponent,
    CreateIdComponent,
    CreateAccountComponent,
    DepositComponent,
    WithdrawComponent,
    DepositAccountComponent,
    WithdrawAccountComponent,
    PaymentMethodComponent,
    PaymentHistoryComponent,
    AddBankComponent,
    SnackBarComponent,
    SignUpComponent,
    WithdrawIdComponent
  ],
  entryComponents:[ DialogAnimationsExampleDialogComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    MatStepperModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
