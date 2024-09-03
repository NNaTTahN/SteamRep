import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListSidePanelComponent } from './game-list-side-panel.component';

describe('GameListSidePanelComponent', () => {
  let component: GameListSidePanelComponent;
  let fixture: ComponentFixture<GameListSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListSidePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
