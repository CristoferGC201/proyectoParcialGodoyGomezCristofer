import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroslistComponent } from './perroslist.component';

describe('PerroslistComponent', () => {
  let component: PerroslistComponent;
  let fixture: ComponentFixture<PerroslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerroslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerroslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
