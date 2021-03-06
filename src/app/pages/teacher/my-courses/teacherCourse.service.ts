import { AuthService } from '../../../auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user.model';
import { Course } from '../../../models/course.model';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TeacherCourseService {

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public authService: AuthService
  ) { }

  getCourses(): Observable<Course[]> {
      // tslint:disable-next-line: max-line-length
    return this.afs.collection('courses', ref => ref.where('teacher.uid', '==', this.authService.user.uid)).valueChanges() as Observable<Course[]>;
  }
}
