import { Component, OnInit } from '@angular/core';
import { StudentExamsService } from './student-exams.service';

@Component({
  selector: 'app-my-exams',
  templateUrl: './my-exams.component.html',
  styleUrls: ['./my-exams.component.scss']
})
export class MyExamsComponent implements OnInit {

  constructor(studentExamsService: StudentExamsService) {
    debugger
    studentExamsService.getCoursesInscripted();
   }

  ngOnInit(): void {
  }
  handleCourseSelected(evt) {

  }
}
