export interface IEntry {
  id: string,
  data: {
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
}

export class EntryModel implements IEntry {
  id = '';
  data = { 
  attributes : {
    note: '',
    time: '',
    date: ''
  },

  relationships : {
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
  }
  };

  // object with key type string and value of any type intersecting with IEntry
  constructor(entry: Record<string, any> & IEntry) {
    this.id = entry.id;
    this.data.attributes.note = entry.attributes.note;
    this.data.attributes.time = entry.attributes.time;
    this.data.attributes.date = entry.attributes.date;
    this.data.relationships.person.data.id = entry.relationships.person.data.id;
    this.data.relationships.service.data.id = entry.relationships.service.data.id;
  }
}
