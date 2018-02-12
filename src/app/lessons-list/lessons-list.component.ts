import { Component } from '@angular/core';
import { ILesson } from '../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {
  lessons: ILesson[] = [];

  constructor() {
    console.log('lesson list component registered as observer ...')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        });
      }
    })
  }

  notify(data: ILesson[]) {
    console.log('Lessons list component received data', data);
    this.lessons = data;
  }

  toggleLessonViewed(lesson: ILesson) {
    console.log('toggling lesson');
    lesson.completed = !lesson.completed;
  }

}
