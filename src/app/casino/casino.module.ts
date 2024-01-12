import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoManagerComponent } from './casino-manager/casino-manager.component';
import { OpenGameComponent } from './open-game/open-game.component';
import { CasinoListComponent } from './casino-list/casino-list.component';
import { CasinoGamesService } from '../shared/services/casino-games.service';
import { OpenGameService } from '../shared/services/open-game.service';
import { CasinoRoutingModule } from './casino-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CasinoManagerComponent,
    OpenGameComponent,
    CasinoListComponent,
    CommonModule,
    CasinoRoutingModule
  ],
  providers: [CasinoGamesService, OpenGameService]
})
export class CasinoModule { }