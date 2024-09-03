import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListHomeComponent } from './game-list-home.component';

describe('GameListHomeComponent', () => {
  let component: GameListHomeComponent;
  let fixture: ComponentFixture<GameListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
