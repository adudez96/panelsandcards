import { Injectable } from "@angular/core";
import { Panel } from '../components/panels.model';
import { MyjsonService } from './myjson.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class DatastoreModel {
  panels: Panel[];
}

@Injectable()
export class Datastore {
  datastore: DatastoreModel;

  constructor (private myjsonService: MyjsonService) {}

  getPanels() : Observable<Panel[]> {
    return this.myjsonService.get().pipe(
      map((data:DatastoreModel) => {
        let needsInit = false;
        if (data.panels === undefined) {
          data.panels = []
          needsInit = true;
        }
        if (needsInit) {
          this.myjsonService.put(data).subscribe();
        }
        this.datastore = data;
        return this.datastore.panels;
      })
    );
  }

  putPanels(panels: Panel[]) : Observable<void> {
    console.log('putting panel...');
    this.datastore.panels = panels;
    return this.myjsonService.put(this.datastore).pipe(
      map(() => {
        console.log('put panel');
      })
    );
  }
}
