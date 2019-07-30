import { Injectable } from '@angular/core';
import { Panel } from '../components/drag-panel/panels.model';
import { MyjsonService } from './myjson.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

export class DatastoreModel {
  panels: Panel[];
}

@Injectable()
export class Datastore {
  datastore: DatastoreModel;

  constructor(private myjsonService: MyjsonService) {}

  getPanels(): Observable<Panel[]> {
    return this.myjsonService.get().pipe(
      map((data: DatastoreModel) => {
        let needsInit = false;
        if (data.panels === undefined) {
          data.panels = [];
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

  putPanels(panels: Panel[]): Observable<void> {
    this.datastore.panels = panels;
    return this.myjsonService.put(this.datastore);
  }

  deletePanel(id: string): Observable<void> {
    this.datastore.panels = this.datastore.panels.filter((val) => val.id !== id);
    return this.myjsonService.put(this.datastore);
  }
}
