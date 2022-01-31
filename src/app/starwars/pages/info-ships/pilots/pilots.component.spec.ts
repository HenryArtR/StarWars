import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { AppRoutingModule } from "src/app/app-routing.module";
import { Pilots } from "src/app/starwars/interfaces/listStarships.interface";
import { SwapiService } from "src/app/starwars/services/swapi.service";
import { PilotsComponent } from "./pilots.component"

describe('PilotsComponent', () => {
    let fixture: ComponentFixture<PilotsComponent>
    let app: PilotsComponent
    let spySwapi: jasmine.SpyObj<SwapiService>
    let spyRoute: jasmine.SpyObj<ActivatedRoute>
    beforeEach( async () => {
        spySwapi = jasmine.createSpyObj<SwapiService>('SwapiService', ['getPilots'])
        spyRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', ['snapshot', 'paramMap'])
        
        await TestBed.configureTestingModule({
            declarations: [ PilotsComponent],
            imports: [
                HttpClientTestingModule,
                AppRoutingModule
            ],
            providers: [
                { provider: SwapiService, useValue: spySwapi }
            ]
            
        }).compileComponents();
         fixture = TestBed.createComponent(PilotsComponent)
         app = fixture.componentInstance
         fixture.detectChanges()
    });

    // afterEach(()=> {
    //     expect(app.pilotos).not.toBeDefined()
    // })

    it('Debe iniciarse el componente', () => {
        expect(app).toBeTruthy();
        expect(app.pilotos).toBeUndefined()

    })

    it('El metodo ngOnInit ha de obtener un numero del url y mostrar la info del piloto', () => {
        const pilotos: Pilots = {
            name:       'valor',
            height:     'valor',
            mass:       'valor',
            hair_color: 'valor',
            skin_color: 'valor',
            eye_color:  'valor',
            birth_year: 'valor',
            gender:     'valor',
            homeworld:  'valor',
            films:      [''],
            species:    [],
            vehicles:   [],
            starships:  [''],
            created:    new Date,
            edited:     new Date,
            url:        'valor'
        }
        
        spySwapi.getPilots.and.returnValue(of(pilotos))
        app.pilotos = pilotos
        app.mostrar = true
        expect(app.pilotos).toEqual(pilotos)
        expect(app.mostrar).toBeTruthy()
        
    })

    
})