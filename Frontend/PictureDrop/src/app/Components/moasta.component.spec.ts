import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoastaComponent } from './moasta.component';

describe('MoastaComponent', () => {
  let component: MoastaComponent;
  let fixture: ComponentFixture<MoastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
