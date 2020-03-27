import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {

    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [CounterComponent]
        }).compileComponents();

    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        debugElement = fixture.debugElement.query(By.css('p'));
        htmlElement = debugElement.nativeElement;
    });

    it('It should display the current number of the counter', () => {

        expect(htmlElement.textContent).toEqual('Number: 1');

    });

    it('It should increment the counter value by 1', () => {

        // Arrange
        const initialValue = component.count;

        // Act
        component.IncrementCount();
        const newValue = component.count;

        // Assert
        expect(newValue).toEqual(initialValue + 1);

    });

});
