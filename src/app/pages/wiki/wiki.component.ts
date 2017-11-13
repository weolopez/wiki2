import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Page {
  title: string;
}
@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WikiComponent implements OnInit {
  public pageObservable: Observable<any>;
  public pageTitle: string;
  public editTitle = true;
  public pageRef: AngularFireList<Page>;
  public page: Array<Page>;
  public textArea: string;
  public command: string;

  @ViewChild('commandInput') commandInput: ElementRef;
  @HostListener('window:keyup', ['$event'])
  onKeyup(event: any) {
    if (event.code === 'ControlLeft') {
      this.commandInput.nativeElement.value = ' ';
      this.commandInput.nativeElement.focus();
    }
  }
  constructor(private db: AngularFireDatabase, private router: Router) {
    this.router.events.subscribe( val =>
      this.pageTitle = window.location.href.split('/').pop()
    );
  }

  ngOnInit() {
    this.pageRef = this.db.list('/' + this.pageTitle);
    this.pageObservable = this.pageRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  executeCommand() {
    // tslint:disable-next-line:no-eval
    const command = this.commandInput.nativeElement.value;
    const res = command.split(' ');

    if (res[0] === 'edit') {
      eval('this.' + res[1] + '= true;');
    } else {
      eval(command);
    }

    this.commandInput.nativeElement.value = '';
  }
  update(key, page) {
    page.isEdit = false;

    this.pageRef.update(key, page);
  }
}
