import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from "./home";
import { IonicModule, NavController } from "ionic-angular/index";
import {} from 'jasmine';

 describe('HomePage', function () {
   let de: DebugElement;
   let comp: HomePage;
   let fixture: ComponentFixture<HomePage>;
   let el: HTMLElement;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ HomePage ],
       imports: [
         IonicModule.forRoot(HomePage)
       ],
       providers: [
         NavController
       ]
     });
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(HomePage);
     comp = fixture.componentInstance;
   });

   afterEach(() => {
       fixture.destroy();
       comp = null;
       de = null;
       el = null;
   });

   it('should create component', () => expect(comp).toBeDefined() );

   it('should have expected <h3> text', () => {
     fixture.detectChanges();
     de = fixture.debugElement.query(By.css('h3'));
     const h3 = de.nativeElement;
     expect(h3.innerText).toMatch(/ionic/i,
       '<h3> should say something about "Ionic"');
   });

   it('should be able to launch ItemsPage', () => {

       let navCtrl = fixture.debugElement.injector.get(NavController);
       spyOn(navCtrl, 'push');

       de = fixture.debugElement.query(By.css('#goItemsPage'));

       de.triggerEventHandler('click', null);

       expect(navCtrl.push).toHaveBeenCalledWith('items');

   });
 });