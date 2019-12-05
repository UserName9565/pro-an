import { HeroService } from './../hero.service';
// import { HEROES } from './../mock-heroes';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void{
 
    this.heroService.getUsers().subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

}
