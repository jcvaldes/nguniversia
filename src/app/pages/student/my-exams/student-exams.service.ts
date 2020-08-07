import { AuthService } from '../../../auth/auth.service';
import { Injectable, IterableDiffers } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user.model';
import { Course } from '../../../models/course.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class StudentExamsService {
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private authService: AuthService
  ) { }

  getCoursesInscripted() {
    let myCourses = [];

    // return docData.map(item => {
    //   return {
    //     id: item.payload.doc.id,
    //     ...item.payload.doc.data()
    //   } as User;
    // });
  }

}
