export interface IEntry {
  id: string,
  attributes: {
    note: string,
    time: string,
    date: string
  },
  relationships: {
    person: {
      data: {
        id: string
      }
    },
    service: {
      data: {
        id: string
      }
    }
  }
}

export class EntryModel implements IEntry {
  id = '';
  attributes = {
    note: '',
    time: '',
    date: ''
  };

  relationships = {
    person: {
      data: {
        id: ''
      }
    },
    service: {
      data: {
        id: ''
      }
    }
  };

  // object with key type string and value of any type intersecting with IEntry
  constructor(entry: Record<string, any> & IEntry) {
    this.id = entry.id;
    this.attributes.note = entry.attributes.note;
    this.attributes.time = entry.attributes.time;
    this.attributes.date = entry.attributes.date;
    this.relationships.person.data.id = entry.relationships.person.data.id;
    this.relationships.service.data.id = entry.relationships.service.data.id;
  }
}
