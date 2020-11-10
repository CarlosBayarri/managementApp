import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'EventTypePipe'})
export class EventTypePipe implements PipeTransform {
  transform(value: string): string {
    let newStr = '';
    if (value === '1') newStr = 'Common';
    if (value === '2') newStr = 'Meeting';
    if (value === '3') newStr = 'Citation';
    if (value === '4') newStr = 'Visit';
    if (value === '5') newStr = 'Reminder';
    return newStr;
  }
}


