import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTaskPage } from './view-task.page';

describe('ViewTaskPage', () => {
  let component: ViewTaskPage;
  let fixture: ComponentFixture<ViewTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
