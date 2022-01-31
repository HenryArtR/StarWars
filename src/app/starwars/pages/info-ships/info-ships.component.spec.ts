import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { Result } from "../../interfaces/listStarships.interface";
import { SwapiService } from "../../services/swapi.service";
import { InfoShipsComponent } from "./info-ships.component"

describe('InfoShipsComponent', () => {
    let fixture: ComponentFixture<InfoShipsComponent>
    let app: InfoShipsComponent
    let spySwapi: jasmine.SpyObj<SwapiService>
    let routeSpy: jasmine.SpyObj<ActivatedRoute>
    let routerSpy: jasmine.SpyObj<Router> 
    beforeEach(waitForAsync(() => {
        spySwapi = jasmine.createSpyObj<SwapiService>('SwapiService', ['getInfo', 'getImgShip', 'saveId', 'getPilots'])
        routeSpy = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', ['snapshot', 'paramMap'])
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate'])
        TestBed.configureTestingModule({
            declarations: [
                InfoShipsComponent
            ],
            providers:[ 
            { provide: SwapiService, useValue: spySwapi},
            { provide: ActivatedRoute, useValue: routeSpy},
            { provide: Router, useValue: routerSpy}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(InfoShipsComponent);
        app = fixture.componentInstance;
        fixture.detectChanges()
        
    }));

    
    it('Debe crear la aplicacion y correr el ngOnInit', () => {
        expect(app).toBeTruthy()
        expect(app.load()).toBeDefined()
    });


    it('El metodo load() ha de modificar los valores de las variables del componente y guardar un "id"', ()=>{
        const imgShip = 'https://starwars-visualguide.com/assets/img/starships'
        const resultado: Result = {
            name:                   'valor',
            model:                  'valor',
            manufacturer:           'valor',
            cost_in_credits:        'valor',
            length:                 'valor',
            max_atmosphering_speed: 'valor',
            crew:                   'valor',
            passengers:             'valor',
            cargo_capacity:         'valor',
            consumables:            'valor',
            hyperdrive_rating:      'valor',
            MGLT:                   'valor',
            starship_class:         'valor',
            pilots:                 ['valor'],
            films:                  ['valor'],
            created:                new Date,
            edited:                 new Date,
            url:                    'valor'
        }
        app.load()
        app.id = routeSpy.snapshot.paramMap.get('id')!
        spySwapi.saveId(app.id)
        const infoShip = spySwapi.getInfo.and.returnValue(of(resultado))
        
        expect(spySwapi.getInfo()).toHaveBeenCalled()
        expect(app.id).toEqual('id')
        expect(app.imgShip).toEqual(imgShip)
        expect(app.infoShip).toEqual(infoShip)
        expect(app.infoPilots).toEqual(infoShip)
        
    });

    it('El metodo getPiloto ha de obtener un numero y viajar a un nuevo componente', () => {
        const id = '1'
        app.getPiloto(id)
        expect(routerSpy.navigate).toHaveBeenCalledWith(['pilots', id])
        
    })
    


})