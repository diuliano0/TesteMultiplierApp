import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocacoesPage } from './locacoes.page';

describe('LocacoesPage', () => {
  let component: LocacoesPage;
  let fixture: ComponentFixture<LocacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
