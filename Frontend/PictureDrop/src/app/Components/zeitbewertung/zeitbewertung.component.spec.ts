import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeitbewertungComponent } from './zeitbewertung.component';

describe('ZeitbewertungComponent', () => {
  let component: ZeitbewertungComponent;
  let fixture: ComponentFixture<ZeitbewertungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeitbewertungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeitbewertungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
