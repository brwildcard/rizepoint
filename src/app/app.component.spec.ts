import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rize'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rize');
  });

  it(`should have an array of nav toggle flags`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.navToggles).toBeDefined;
  });

  it('should have [ngClass] resolve to "correct-class" when first loaded for define-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const native = fixture.debugElement.nativeElement;
    const parent = native.querySelector('#define-menu .nav-parent');

    expect(parent.classList).not.toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#define-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).not.toContain('nav-active');
    });
  });

  it('should have [ngClass] resolve to "correct-class" when first loaded for gather-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const native = fixture.debugElement.nativeElement;
    const parent = native.querySelector('#gather-menu .nav-parent');

    expect(parent.classList).not.toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#gather-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).not.toContain('nav-active');
    });
  });

  it('should have [ngClass] resolve to "correct-class" when first loaded for see-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const native = fixture.debugElement.nativeElement;
    const parent = native.querySelector('#see-menu .nav-parent');

    expect(parent.classList).not.toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#see-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).not.toContain('nav-active');
    });
  });

  it('should have [ngClass] resolve to "correct-class" when first loaded for act-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const native = fixture.debugElement.nativeElement;
    const parent = native.querySelector('#act-menu .nav-parent');

    expect(parent.classList).not.toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#act-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).not.toContain('nav-active');
    });
  });

  it('should have [ngClass] resolve to "correct-class" when first loaded for admin-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const native = fixture.debugElement.nativeElement;
    const parent = native.querySelector('#admin-menu .nav-parent');

    expect(parent.classList).not.toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#admin-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).not.toContain('nav-active');
    });
  });

  it('should have [ngClass] resolve to "correct-class" when clicked for define-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const native = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'submenuToggle').and.callThrough();

    const parent = native.querySelector('#define-menu .nav-parent');
    parent.click();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(parent.classList).toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#define-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).toContain('nav-active');
    });

  });

  it('should have [ngClass] resolve to "correct-class" when clicked for gather-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const native = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'submenuToggle').and.callThrough();

    const parent = native.querySelector('#gather-menu .nav-parent');
    parent.click();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(parent.classList).toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#gather-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).toContain('nav-active');
    });

  });

  it('should have [ngClass] resolve to "correct-class" when clicked for see-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const native = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'submenuToggle').and.callThrough();

    const parent = native.querySelector('#see-menu .nav-parent');
    parent.click();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(parent.classList).toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#see-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).toContain('nav-active');
    });

  });

  it('should have [ngClass] resolve to "correct-class" when clicked for act-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const native = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'submenuToggle').and.callThrough();

    const parent = native.querySelector('#act-menu .nav-parent');
    parent.click();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(parent.classList).toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#act-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).toContain('nav-active');
    });

  });

  it('should have [ngClass] resolve to "correct-class" when clicked for admin-menu and children categories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const native = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'submenuToggle').and.callThrough();

    const parent = native.querySelector('#admin-menu .nav-parent');
    parent.click();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(parent.classList).toContain('nav-active');

    // check that children resolved correctly as well
    native.querySelectorAll('#admin-menu .nav-child').forEach(navChild => {
      expect(navChild.classList).toContain('nav-active');
    });

  });

});
