import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditNotePage } from './edit-note.page';

describe('EditNotePage', () => {
  let component: EditNotePage;
  let fixture: ComponentFixture<EditNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
