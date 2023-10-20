import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
import { SkillComponent } from '../skill/skill.component';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

  developer: Developer = new Developer(
    'Doe',
    'John',
    30,
    'Male',
    'Lorem ipsum dolor sit amet...',
    [
      new Skill('Angular', 'angular.png', 'https://angular.io/'),
      new Skill('TypeScript', 'typescript.png', 'https://www.typescriptlang.org/'),
      // Ajoutez d'autres compétences
    ]
  );

}
