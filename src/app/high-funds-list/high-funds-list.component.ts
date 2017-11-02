import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { HighFundsPipe } from '../high-funds.pipe';


@Component({
  selector: 'app-high-funds-list',
  templateUrl: './high-funds-list.component.html',
  styleUrls: ['./high-funds-list.component.css'],
  providers: [ProjectService]
})
export class HighFundsListComponent implements OnInit {
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
