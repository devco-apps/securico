export interface Location {
  name: string;
  address: string;
  email: string;
  phone: string[];
  googleMapsLink: string;
  lat: number;
  lng: number;
  city: string;
}

export const locations: Location[] = [
  {
    name: "Head Office",
    address: "Ebenezer House 10 Milwood Road Harare",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//Securico+Security+Services,+10+Millwood+Rd,+Harare/@-17.8524269,31.0002811,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1931a4163ae24cb9:0x4e70c9b7c03d51ab!2m2!1d31.002856!2d-17.852432?entry=ttu",
    lat: -17.852432,
    lng: 31.002856,
    city: "Harare",
  },
  {
    name: "Bulawayo Office",
    address: "224 Clark Road Suburbs Bulawayo",
    email: "info@securico.co.zw",
    phone: ["+263 292 230 803/4", "+263 867 700 6217", "+263 242 621 956/7"],
    googleMapsLink:
      "https://www.google.com/maps/dir//Securico,+224+A6,+Bulawayo/@-20.1581557,26.2949977,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1eb5546ab3e71dcb:0xd12962022d4ad91b!2m2!1d28.6021266!2d-20.1581557?entry=ttu",
    lat: -20.1581557,
    lng: 28.6021266,
    city: "Bulawayo",
  },
  {
    name: "Gweru",
    address: "369 G.T.L, 32 Seventh Street Gweru",
    email: "info@securico.co.zw",
    phone: ["+263 542227791", "+263 8677006218", "+263 242 621 956/7"],
    googleMapsLink:
      "https://www.google.com/maps/dir//Securico,+32+Seventh+St,+Gweru/@-19.4576018,29.8158821,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x19349490b0c4b17b:0x7d7cb0393f325e9b!2m2!1d29.818457!2d-19.4576069?entry=ttu",
    lat: -19.4576069,
    lng: 29.818457,
    city: "Gweru",
  },
  {
    name: "Masvingo",
    address: "Room 7 & 8, 1st Floor Old Mutual, 37 Mugabe Way",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//37+A4,+Masvingo/@-20.0723266,30.8315983,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ecce11c391c2a99:0x88a58c4dce9bf811!2m2!1d30.8341732!2d-20.0723317?entry=ttu",
    lat: -20.0723317,
    lng: 30.8341732,
    city: "Masvingo",
  },
  {
    name: "Mutare",
    address: "32A Simon Mazorodze Road, Yeovil Mutare",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//32+Simon+Mazorodze+Rd,+Mutare/@-18.9762173,32.6524408,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x192cea6a3dec7647:0x3abcf09064b51c51!2m2!1d32.6550157!2d-18.9762224?entry=ttu",
    lat: -18.9762224,
    lng: 32.6550157,
    city: "Mutare",
  },
  {
    name: "Bindura",
    address: "284 Luton Road Industrial Area, Bindura",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//securico+security+services,+Industrial+Area,+284+Luton+Road,+Bindura/@-17.3040945,31.3248638,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x19303fca331852c3:0x71cb3e6213ecfc3d!2m2!1d31.3274387!2d-17.3040996?entry=ttu",
    lat: -17.3040996,
    lng: 31.3274387,
    city: "Bindura",
  },
  {
    name: "Chegutu",
    address: "Zimpost Premises 157 Queen Street, CHEGUTU",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//-18.1337782,30.1460793/@-18.1336966,30.0966408,13z?entry=ttu",
    lat: -18.1337782,
    lng: 30.1460793,
    city: "Chegutu",
  },
  {
    name: "Chinhoyi",
    address: "260 Commercial St, Chinhoyi",
    email: "info@securico.co.zw",
    phone: ["+263 242 621 956/7", "+263 772 140 773/4", "+263 8677 004 912"],
    googleMapsLink:
      "https://www.google.com/maps/dir//-17.3583992,30.1971787/@-17.370769,30.1412171,13z?entry=ttu",
    lat: -17.3583992,
    lng: 30.1971787,
    city: "Chinhoyi",
  },
  {
    name: "Kwekwe",
    address: "Old Mutual Building 2525 RG Mugabe Way Kwekwe",
    email: "securicokwekwe@securico.co.zw",
    phone: [
      "+263 55 225 80",
      "+263 242 621 956/7",
      "+263 772 140 773/4",
      "+263 8677 004 9129",
    ],
    googleMapsLink:
      "https://www.google.com/maps/dir//Kwekwe/@-18.923373,29.6741276,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x19346a1b7e39316b:0x6fd37492a0eeb8fb!2m2!1d29.8237692!2d-18.9254047?entry=ttu",
    lat: -18.9254047,
    lng: 29.8237692,
    city: "Kwekwe",
  },
];
