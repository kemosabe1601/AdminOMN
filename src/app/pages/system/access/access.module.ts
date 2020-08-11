import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UIModule } from './../../../shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
	declarations: [AccessComponent, MenuListComponent],
	imports: [
		CommonModule,
		AccessRoutingModule,
		UIModule,
		UiSwitchModule,
		MatInputModule,
		MatFormFieldModule,
		NgxDatatableModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
	],
	entryComponents: [MenuListComponent],
})
export class AccessModule {}
