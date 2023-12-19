import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from './samples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './samples/property-binding/property-binding.component';
import { Sample } from './types/sample';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventBindingComponent } from './samples/event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, HeaderComponent, NavbarComponent],
})
export class AppComponent {
  samples = [
    {
      title: 'Interpolation',
      group: 'Basic',
      component: InterpolationComponent,
    },
    {
      title: 'Property Binding',
      group: 'Basic',
      component: PropertyBindingComponent,
    },
    {
      title: 'Event Binding',
      group: 'Basic',
      component: EventBindingComponent,
    },
  ] satisfies Sample[];

  currentIndex = signal(0);

  get currentSample() {
    return this.samples[this.currentIndex()].component;
  }

  navigate(index: number) {
    this.currentIndex.set(index);
  }
}
