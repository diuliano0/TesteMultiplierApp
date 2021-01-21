import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorariosLocacaoPage } from './horarios-locacao.page';

describe('HorariosLocacaoPage', () => {
  let component: HorariosLocacaoPage;
  let fixture: ComponentFixture<HorariosLocacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosLocacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorariosLocacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
