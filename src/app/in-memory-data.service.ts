import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const channels = [
      { id: 0,  name: 'Outbound tcp ip portal', received: 5, sent: 4, errors:1 },
      { id: 11, name: 'OMG sftp grab', received: 100, sent: 40, errors:10 },
      { id: 12, name: 'ftps poll medi health', received: 15, sent: 14, errors:12 },
      { id: 13, name: 'Inbound transactions', received: 30, sent: 24, errors:12 },
      { id: 14, name: 'SIU out feed', received: 1500, sent: 400, errors:900 },
      { id: 15, name: 'fhir demographics', received: 500, sent: 40, errors:100 },
      { id: 16, name: 'fhir allergies and meds', received: 15, sent: 25, errors:100 },
      { id: 17, name: 'ADT outbound', received: 15, sent: 10, errors:1 },
      { id: 18, name: 'CCDA in', received: 334, sent: 400, errors:16 },
      { id: 19, name: 'ORU-lir to the portal', received: 5, sent: 44, errors:12 },
      { id: 20, name: 'VDT sftp grab', received: 5, sent: 44, errors:1 }
    ];
    return {channels};
  }
}
