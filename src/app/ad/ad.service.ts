import { Injectable } from '@angular/core';

import { QuestionComponent } from '../question/question.component';
import { AnswerComponent } from '../questionRoom/answer.component';
import { RepeatButtonComponent } from '../questionRoom/repeatButton.component';
import { AdItem } from './adItem';

@Injectable()
export class AdService {
  getQuestions() {
    return [
      new AdItem(QuestionComponent, { value: 'Отгадай загадку!', index: 0 }),
      new AdItem(QuestionComponent, {
        value: 'Дом открыт со всех сторон.',
        index: 1,
      }),
      new AdItem(QuestionComponent, {
        value: 'В доме — тысячи колонн.',
        index: 1,
      }),
      new AdItem(QuestionComponent, {
        value: 'Над колоннами — шатры.',
        index: 1,
      }),
      new AdItem(QuestionComponent, {
        value: 'Под колоннами — ковры.',
        index: 1,
      }),
      new AdItem(QuestionComponent, { value: 'Там живут —', index: 2 }),
      new AdItem(QuestionComponent, { value: 'И в коврах,', index: 2 }),
      new AdItem(QuestionComponent, { value: 'И в колоннах,', index: 2 }),
      new AdItem(QuestionComponent, { value: 'И в шатрах.', index: 2 }),
      new AdItem(QuestionComponent, { value: 'Что я?', index: 3 }),
      new AdItem(AnswerComponent, { index: 3 }),
      new AdItem(RepeatButtonComponent, { index: 3 }),
    ];
  }

  getAnswer() {
    return 'лес';
  }

  getImageData() {
    return [
      {
        src: 'https://sun9-33.userapi.com/impg/AJRx8tPl56eMjFO5F_DhxZQoET7c3fTtiKvSrg/FqOh19i6PHg.jpg?size=842x842&quality=96&sign=852908dce6337552102579d9db6c2661&type=album',
        backgroundColor: '#bedae6',
      },
      {
        src: 'https://sun9-9.userapi.com/impg/mLpy3e9dw6HFLqJpVeKLFCG3oSBKpktoxLbRgw/nxK3nQI_msA.jpg?size=559x559&quality=96&sign=865016c5291452f6f0532e2185bbfae5&type=album',
        backgroundColor: '#dfdad4',
      },
      {
        src: 'https://sun9-43.userapi.com/impg/ITP2artj1vNF3C57crZxyowNgtsdWdCOb1iNrQ/kQPfaxQOaLY.jpg?size=811x726&quality=96&sign=98196a79f80383fc3b8c19d07fc4e7e7&type=album',
        backgroundColor: '#fbfffe',
      },
      {
        src: 'https://sun9-16.userapi.com/impg/HhjJ8rwGA9eAgYzj7seOcxB-A98mEOVEFF9YgQ/NzdSxLpjv_Y.jpg?size=630x588&quality=96&sign=bdd8583d2ce44b6b24cceab9c268f111&type=album',
        backgroundColor: '#d9bba1',
      },
      {
        src: 'https://sun9-20.userapi.com/impg/c854124/v854124467/1c8012/c89bx2chTGw.jpg?size=631x596&quality=96&sign=fbb02d2e64f90fb163e85e22fd4a3fc0&type=album',
        backgroundColor: '#f8e4cf',
      },
      {
        src: 'https://sun9-47.userapi.com/impg/EmYoy6WRHSBhzAeCc0RPwSzE9fltB7Hzrubz2w/j6nVlGgpn44.jpg?size=857x857&quality=96&sign=05a163c1c70a5b18cf826949a47db4bd&type=album',
        backgroundColor: '#fffffd',
      },
    ];
  }
}
