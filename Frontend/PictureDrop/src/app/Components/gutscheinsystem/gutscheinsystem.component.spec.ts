import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GutscheinsystemComponent } from './gutscheinsystem.component';

describe('GutscheinsystemComponent', () => {
  let component: GutscheinsystemComponent;
  let fixture: ComponentFixture<GutscheinsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GutscheinsystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GutscheinsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
