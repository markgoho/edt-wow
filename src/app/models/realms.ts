export class Realms {
  realms: Realm[];
}

export class Realm {
  type: string;
  population: string;
  queue: boolean;
  status: boolean;
  name: string;
  slug: string;
  battlegroup: string;
  locale: string;
  timezone: string;
  connected_realms: string[];
}
