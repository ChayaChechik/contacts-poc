import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const contacts = [
      { id: 10,  name: 'John Smith' , phone: '0989865437' , email: 'j.smith@whitenet.com' },
      { id: 11, name: 'David Miller', phone: '6745334096' , email: 'david.miller@jtf.com' },
      { id: 12, name: 'Richard Jackson', phone: '3348976059' , email: 'rjack@gmail.com' },
      { id: 13, name: 'Charles Brown', phone: '0879321245' , email: 'cb2017@yahoo.net' },
      { id: 15, name: 'Lee Moore', phone: '05234548888' , email: 'Lee101@gmail.com' },
      { id: 16, name: 'Katie Hill', phone: '6657768324' , email: 'katie@onlinebanking.com' },
      { id: 17, name: 'Alexus Washington', phone: '2334334567' , email: 'alexuswa@walla.com' },
      { id: 18, name: 'Raven Walker', phone: '7723231111' , email: 'walker@walker.net' },
      { id: 19, name: 'Connor Martin', phone: '3456789090' , email: 'c.martin@house.com' },
      { id: 20, name: 'Darryl Young', phone: '3453453456' , email: 'dyoung@freshfruit.net' }
    ];
    return {contacts};
  }

}
