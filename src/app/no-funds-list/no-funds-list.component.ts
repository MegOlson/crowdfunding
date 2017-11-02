import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
// import { NoFundsPipe } from '../no-funds.pipe';


@Component({
  selector: 'app-no-funds-list',
  templateUrl: './no-funds-list.component.html',
  styleUrls: ['./no-funds-list.component.css'],
  providers: [ProjectService]

})
export class NoFundsListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {}


  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToProjectPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
