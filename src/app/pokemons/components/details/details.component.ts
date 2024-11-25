import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { PokemonCardComponent } from '../../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokemon-details',
  standalone: true,
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonCardComponent],
  styles: [
    `
      :host {
        height: calc(100% - 5rem);
      }
    `
  ]
})
export class DetailsComponent {
  @HostBinding('class') hostClass =
    'flex flex-col gap-4 items-center justify-center';

  nextId() {
    // go to next id
  }

  prevId() {
    // go to prev id
  }

  like() {
    // like
  }

  dislike() {
    // dislike
  }
}
