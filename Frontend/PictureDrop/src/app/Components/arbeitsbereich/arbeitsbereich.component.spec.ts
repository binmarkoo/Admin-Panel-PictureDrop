import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitsbereicheComponent } from './arbeitsbereich.component';

describe('ArbeitsbereichComponent', () => {
  let component: ArbeitsbereicheComponent;
  let fixture: ComponentFixture<ArbeitsbereicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbeitsbereicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbeitsbereicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
