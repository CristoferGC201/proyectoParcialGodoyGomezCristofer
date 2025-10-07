// Importa las herramientas esenciales para configurar y crear la prueba.
// 'ComponentFixture' permite interactuar con el componente y su plantilla (vista).
// 'TestBed' es el módulo de prueba de Angular, necesario para inicializar el entorno.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que queremos probar.
import { HomeComponentComponent } from './Inicio-component.component';

// Define un conjunto de pruebas (suite) para el componente 'HomeComponentComponent'.
// Esta función de Jasmine/Jest agrupa todas las pruebas relacionadas.
describe('InicioComponentComponent', () => {
 // Declara una variable para almacenar la instancia del componente que vamos a probar.
 let component: HomeComponentComponent;
 
 // Declara una variable para el "fixture" (entorno de prueba) del componente.
 // El 'fixture' es la envoltura que contiene el componente y su elemento del DOM.
 let fixture: ComponentFixture<HomeComponentComponent>;

 // La función 'beforeEach' se ejecuta *antes de cada* prueba ('it') en esta suite.
 // Se usa para establecer una configuración limpia para cada prueba.
 beforeEach(async () => {
  // Configura el módulo de prueba, diciéndole a Angular qué elementos necesita.
 await TestBed.configureTestingModule({
 // Si el componente es Standalone (Angular 15+), se lista aquí.
 // Esto le dice al TestBed que importe y prepare el componente de inicio.
 imports: [HomeComponentComponent]
 })
 // Compila los componentes y plantillas configurados.
 .compileComponents();
 
 // Crea una instancia del componente dentro del entorno de prueba (fixture).
 fixture = TestBed.createComponent(HomeComponentComponent);
 
 // Obtiene la instancia real del componente desde el fixture y la asigna a la variable 'component'.
 component = fixture.componentInstance;
 
 // Ejecuta el ciclo de detección de cambios de Angular.
 // Esto inicializa el componente (llama a ngOnInit) y actualiza la vista con el estado inicial.
 fixture.detectChanges();
 });

 // Define un caso de prueba específico (test).
 // Esta es la prueba más básica para asegurar que el componente se carga.
 it('should create', () => {
 // 'expect' es la afirmación de la prueba.
 // Verifica que la variable 'component' exista y no sea nula o indefinida,
 // lo que significa que el componente se creó exitosamente.
 expect(component).toBeTruthy();
 });
});