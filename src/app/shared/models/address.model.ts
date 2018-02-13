export class Address {
  id: string;
  first_name: string;
  last_name: string;
  street_address: string;
  extra_address: string;
  postcode: string;
  city: string;
  state: string;
  telephone: string;
  isDefaultShippingAddress: boolean;
  isDefaultBillingAddress: boolean;


  toString(): string {
    return `${this.first_name} ${this.last_name}, ${this.street_address} ${this.extra_address}, ${this.city}, ${this.state}, ${this.postcode}`;
  }

  static cast(o): Address {
    let address = new Address();
    address.id = o.id;
    address.first_name = o.first_name;
    address.last_name = o.last_name;
    address.street_address = o.street_address;
    address.extra_address = o.extra_address;
    address.postcode = o.postcode;
    address.city = o.city;
    address.state = o.state;
    address.telephone = o.telephone;

    address.isDefaultShippingAddress = !!o.isDefaultShippingAddress;
    address.isDefaultBillingAddress = !!o.isDefaultBillingAddress;

    return address;
  }

  usa_states = [
    'Alabama',
    'Alaska',
    // 'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    // 'District of Columbia',
    'Florida',
    'Georgia',
    // 'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    // 'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    // 'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
}
