import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export const loginAnimations = [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('staggerIn', [
    transition(':enter', [
      query('.form-item', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        stagger('100ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ])
  ]),
  trigger('pulse', [
    state('void', style({ transform: 'scale(1)' })),
    state('*', style({ transform: 'scale(1)' })),
    transition('void => *', [
      style({ transform: 'scale(0.95)' }),
      animate('200ms ease-in-out')
    ])
  ])
];