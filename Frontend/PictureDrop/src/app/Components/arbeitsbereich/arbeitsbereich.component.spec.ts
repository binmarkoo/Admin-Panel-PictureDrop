import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitsbereichComponent } from './arbeitsbereich.component';

describe('ArbeitsbereichComponent', () => {
  let component: ArbeitsbereichComponent;
  let fixture: ComponentFixture<ArbeitsbereichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbeitsbereichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbeitsbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
