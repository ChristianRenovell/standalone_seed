import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-test2',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>test2 works!</p>`,
    styleUrl: './test2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test2Component { }
