import bale from '../Assets/bale.png'
import beach from '../Assets/beach.png'
import garjuno from '../Assets/garjuno.png'
import mounth from '../Assets/mounth.png'
import tumpaksewu from '../Assets/tumpaksewu.png'
import water from '../Assets/water.png'
import plengkung from '../Assets/plengkung.png'
import tenda from '../Assets/tenda.png'

export const CATEGORY_NAV = [
  { label: 'Pantai', path: '/Pantai' },
  { label: 'Gunung', path: '/Gunung' },
  { label: 'AirTerjun', path: '/Airterjun' },
  { label: 'Lainnya', path: '/Lainnya' },
]

export const DEFAULT_FACILITIES = [
  'Loket scan tiket masuk',
  'Tempat parkir kendaraan yang cukup luas',
  'Kamar mandi terpisah yang memadai (laki-laki dan perempuan)',
  'Warung atau tempat makan',
  'Musholla untuk beribadah',
  'Penyewaan alat-alat',
]

export const DEFAULT_RENTALS = Array.from({ length: 5 }, () => ({
  name: 'Tenda Kecil',
  capacity: '3-4 org',
  detail: 'Tenda ukuran kecil dapat berisi 3-4 orang',
  price: 'IDR 40.000',
  image: tenda,
}))

export const destinationsByCategory = {
  pantai: {
    title: 'Pantai',
    subtitle: 'Menampilkan hasil destinasi pantai',
    items: [
      {
        id: 'tiga-warna-1',
        name: 'Pantai Tiga Warna',
        image: bale,
        categoryLabel: 'Pantai',
        categoryIcon: beach,
        hours: '06.00-17.00 (Bisa Menginap)',
        location: 'Malang',
        price: 'IDR 30.000',
        detailPath: '/Descplengkung',
      },
      {
        id: 'tiga-warna-2',
        name: 'Pantai Tiga Warna',
        image: bale,
        categoryLabel: 'Pantai',
        categoryIcon: beach,
        hours: '06.00-17.00 (Bisa Menginap)',
        location: 'Malang',
        price: 'IDR 30.000',
      },
      {
        id: 'tiga-warna-3',
        name: 'Pantai Tiga Warna',
        image: bale,
        categoryLabel: 'Pantai',
        categoryIcon: beach,
        hours: '06.00-17.00 (Bisa Menginap)',
        location: 'Malang',
        price: 'IDR 30.000',
      },
    ],
  },
  gunung: {
    title: 'Gunung',
    subtitle: 'Menampilkan hasil destinasi gunung',
    items: [
      {
        id: 'arjuno-1',
        name: 'Gunung Arjuno',
        image: garjuno,
        categoryLabel: 'Gunung',
        categoryIcon: mounth,
        hours: '24 Jam',
        location: 'Pasuruan',
        price: 'IDR 15.000',
        detailPath: '/Descarjuno',
      },
      {
        id: 'arjuno-2',
        name: 'Gunung Arjuno',
        image: garjuno,
        categoryLabel: 'Gunung',
        categoryIcon: mounth,
        hours: '24 Jam',
        location: 'Pasuruan',
        price: 'IDR 15.000',
      },
      {
        id: 'arjuno-3',
        name: 'Gunung Arjuno',
        image: garjuno,
        categoryLabel: 'Gunung',
        categoryIcon: mounth,
        hours: '24 Jam',
        location: 'Pasuruan',
        price: 'IDR 15.000',
      },
    ],
  },
  airterjun: {
    title: 'Air Terjun',
    subtitle: 'Menampilkan hasil destinasi air terjun',
    items: [
      {
        id: 'tumpak-sewu',
        name: 'Air Terjun Tumpak Sewu',
        image: tumpaksewu,
        categoryLabel: 'Air Terjun',
        categoryIcon: water,
        hours: '07:00-17:00',
        location: 'Lumajang',
        price: 'IDR 10.000',
        detailPath: '/Desctumpaksewu',
      },
    ],
  },
  lainnya: {
    title: 'Lainnya',
    subtitle: 'Menampilkan hasil destinasi lainnya',
    items: [
      {
        id: 'lainnya-tumpak-sewu',
        name: 'Air Terjun Tumpak Sewu',
        image: tumpaksewu,
        categoryLabel: 'Air Terjun',
        categoryIcon: water,
        hours: '07:00-17:00',
        location: 'Lumajang',
        price: 'IDR 10.000',
        detailPath: '/Desctumpaksewu',
      },
    ],
  },
}

export const destinationDetails = {
  plengkung: {
    name: 'Pantai Plengkung',
    heroImage: plengkung,
    backPath: '/Pantai',
    address:
      'Pantai Plengkung, Purworejo, Kalipait, Kec. Tegaldlimo, Kabupaten Banyuwangi, Jawa Timur Indonesia',
    ticketPrice: 'IDR 10.000',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5946584457165!2d114.34858477456936!3d-8.729983589040996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3938d8110b8d7%3A0xa364f95e85564443!2sPantai%20Plengkung%2FG-Land!5e0!3m2!1sid!2sid!4v1717406096102!5m2!1sid!2sid',
    mapLink: 'https://maps.app.goo.gl/8yaLi8iMii1wprvn7',
    rentals: DEFAULT_RENTALS,
    facilities: DEFAULT_FACILITIES,
  },
  arjuno: {
    name: 'Gunung Arjuno',
    heroImage: garjuno,
    backPath: '/Gunung',
    address:
      'Gunung Arjuno, Pecalukan Barat, Pecalukan, Kec. Prigen, Kabupaten Pasuruan, Jawa Timur Indonesia',
    ticketPrice: 'IDR 10.000',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.4379833145!2d112.57914424065896!3d-7.724978463593666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7878f152cf4193%3A0xeb267981e389631a!2sGn.%20Arjuno!5e0!3m2!1sid!2sid!4v1718164996419!5m2!1sid!2sid',
    mapLink: 'https://maps.app.goo.gl/br256YJFuRWyEXo68',
    rentals: DEFAULT_RENTALS,
    facilities: DEFAULT_FACILITIES,
  },
  tumpaksewu: {
    name: 'Air Terjun Tumpak Sewu',
    heroImage: tumpaksewu,
    backPath: '/Airterjun',
    address:
      'Air Terjun Tumpak Sewu, Besucukit, Sidomulyo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur Indonesia',
    ticketPrice: 'IDR 10.000',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.726701312684!2d112.91496757456113!3d-8.230214232623535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd61581c8983803%3A0xf80a831c92d392cb!2sAir%20Terjun%20Tumpak%20Sewu!5e0!3m2!1sid!2sid!4v1718165714373!5m2!1sid!2sid',
    mapLink: 'https://maps.app.goo.gl/2hEVWtrAsoRxW43X7',
    rentals: DEFAULT_RENTALS,
    facilities: DEFAULT_FACILITIES,
  },
}
