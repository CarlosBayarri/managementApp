import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewEventPage } from './view-event.page';

describe('ViewEventPage', () => {
  let component: ViewEventPage;
  let fixture: ComponentFixture<ViewEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
