 import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { Items } from "./items";
 import { DeadlinePipe } from "../../pipes/deadline-pipe";
 import { SortDescPipe } from "../../pipes/sortdesc-pipe";
 import { DateFormatPipe } from "../../pipes/dateformat-pipe";
 import { TodosService } from '../../providers/todos-service/todos-service';

 import { IonicModule, NavController } from "ionic-angular";
 import { HttpModule } from '@angular/http';
 import {} from 'jasmine';

 describe('ItemsPage', function () {
   let comp: Items;
   let fixture: ComponentFixture<Items>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [
         Items,
         DeadlinePipe,
         SortDescPipe,
         DateFormatPipe
        ],
       imports: [
         IonicModule.forRoot(Items),
         HttpModule
       ],
       providers: [
         NavController,
         TodosService
       ]
     });
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(Items);
     comp = fixture.componentInstance;
   });

   it('should create component', () => expect(comp).toBeDefined() );

 });