import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent();
  });

  it('addbox should increment count when box is added', () => {
    component.addBox();
    expect(component.count).toBe(1);
  });
  it('addbox should increment font size when box is added', () => {
    component.addBox();
    expect(component.fontSize).toBeGreaterThan(20);
  });
  it('addbox should change the boolean isAddBoxButtonClicked to true', () => {
    component.addBox();
    expect(component.isAddBoxButtonClicked).toBeTruthy;
  });

  it('removebox should decrement count when box is removed', () => {
    component.removeBox();
    expect(component.count).toBe(0);
  });
  it('removebox should decrement font size when box is removed', () => {
    component.removeBox();
    expect(component.fontSize).toBeLessThan(20);
  });
  it('removebox should change the boolean isAddBoxButtonClicked to false', () => {
    component.addBox();
    expect(component.isAddBoxButtonClicked).toBeFalsy;
  });

  it('boxColor should be blue if the box number is even and is not a multiple of 5', () => {
    let boxColor = component.getBoxColor(2);
    expect(boxColor).toBe('blueColorBox');
  });
  it('boxColor should be black if the box number is odd and is not a multiple of 5', () => {
    let boxColor = component.getBoxColor(3);
    expect(boxColor).toBe('blackColorBox');
  });
  it('boxColor should be blue with orangeborder if the box number is even and a multiple of 5', () => {
    let boxColor = component.getBoxColor(10);
    expect(boxColor).toBe('blueOrangeBorderBox');
  });
  it('boxColor should be black with orangeborder if the box number is odd and a multiple of 5', () => {
    let boxColor = component.getBoxColor(5);
    expect(boxColor).toBe('blackOrangeBorderBox');
  });

  it('fontsize should increase when boxes are added', () => {
    let font = component.fontSize;
    component.addBox();
    expect(component.getFontSize()).toBeGreaterThan(font);
  });
  it('fontsize should decrease when boxes are removed', () => {
    let font = component.fontSize;
    component.removeBox();
    expect(component.getFontSize()).toBeLessThan(font);
  });
});
