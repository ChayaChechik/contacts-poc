import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent }  from './root/contacts/contacts.component';
import { ContactDetailsComponent }  from './root/contacts/contact-details/contact-details.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contact', component: ContactDetailsComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contacts',     component: ContactsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {}