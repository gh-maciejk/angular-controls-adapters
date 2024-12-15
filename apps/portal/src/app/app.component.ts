import { DOCUMENT, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: "flex flex-col w-full h-full place-content-start items-center gap-2"}
})
export class AppComponent {

  #_platformId = inject(PLATFORM_ID);
  #_isServer: boolean = isPlatformServer(this.#_platformId);
  #_document = inject(DOCUMENT);

  redirect(path: string) {
    if (this.#_isServer) { return; }
    this.#_document.location.href = `${path}`;
  }
}
