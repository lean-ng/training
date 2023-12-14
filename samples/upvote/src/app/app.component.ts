import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { submissions as submissionsSeed } from '../seed';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  submissions = submissionsSeed;

  vote(submission: (typeof submissionsSeed)[number]) {
    ++submission.votes;
  }
}
