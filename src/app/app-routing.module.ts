import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateIdComponent } from './pages/create-id/create-id.component';
import { DashHomeComponent } from './pages/d/dash-home/dash-home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { DepositAccountComponent } from './pages/deposit-account/deposit-account.component';
import { WithdrawAccountComponent } from './pages/withdraw-account/withdraw-account.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { PaymentHistoryComponent } from './pages/payment-history/payment-history.component';
import { AddBankComponent } from './pages/add-bank/add-bank.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WithdrawIdComponent } from './pages/withdraw-id/withdraw-id.component';

const routes: Routes = [
  { path: "" , component : PageNotFoundComponent},
  { path: "login" , component : LoginComponent },
  { path: "sign-up" , component : SignUpComponent },
  
  { path: "dashboard" , component : DashboardComponent  , canActivate:[AuthGuard] , children: [
    { path: "home" , component : DashHomeComponent ,canActivate:[AuthGuard]  },
    { path: "create-id" , component : CreateIdComponent ,canActivate:[AuthGuard]  },
    { path: "deposit" , component : DepositComponent ,canActivate:[AuthGuard]  },
    { path: "withdraw" , component : WithdrawComponent ,canActivate:[AuthGuard]  },
    { path: "deposit-account" , component : DepositAccountComponent ,canActivate:[AuthGuard]  },
    { path: "payment-method" , component : PaymentMethodComponent ,canActivate:[AuthGuard]  },
    { path: "withdraw-account" , component : WithdrawAccountComponent ,canActivate:[AuthGuard]  },
    { path: "passbook" , component : PaymentHistoryComponent ,canActivate:[AuthGuard]  },
    { path: "add-bank" , component : AddBankComponent ,canActivate:[AuthGuard]  },
    { path: "create-account/:id" , component : CreateAccountComponent , canActivate:[AuthGuard]  },
    { path: "withdraw/:id" , component : WithdrawIdComponent , canActivate:[AuthGuard]  }

  ] },
  { path: "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
