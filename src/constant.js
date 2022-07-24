const TAJWID = [
    {title: 'mim-mati', detail: [
        {
            jenis: 'Bertemu Mim Mati', 
            subjenis: 'Idghom Mimi/Mutmatsilain', 
            keterangan: `Idgham mimi atau idgham mutamasilain ini sangat mudah diingat yakni 
            ketika huruf mim mati bertemu dengan huruf mim dan cara melafalkan bacaannya 
            tersebut adalah membaca huruf mim rangkap secara mendengung.`,
            example: <p className='arabic'>الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُ<span style={{color: "white"}} >&#x200d;مْ مِ</span>نْ خَوْفٍ</p>,
            audio: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6197.mp3'
        },
        {
            jenis: 'Bertemu Huruf Ba', 
            subjenis: 'Ikhfa Syafawi', 
            keterangan: `Ikhfa syafawi dibaca dengan cara samar-samar pada bibir dan juga dengan didengungkan.`,
            example : <p className='arabic'>تَرْمِيهِ<span style={{color: "white"}} >&#x200d;مْ بِ</span>حِجَارَةٍ مِنْ سِجِّيلٍ</p>,
            audio: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6192.mp3'
        },
        {
            jenis: 'Bertemu Selain Mim dan Ba', 
            subjenis: 'Idzhar Syafawi', 
            keterangan: `Hukum bacaan ini berlaku apabila huruf mim mati bertemu salah satu 
            huruf hijaiyyah selain huruf mim dan huruf ba'. Izhar Syafawi harus dilafalkan 
            dengan jelas pada bibir sambil menutup mulut.`,
            example: <p className="arabic">وَلَ<span style={{color: "white"}} >&#x200d;مْ يَ</span>كُنْ لَهُ كُفُوًا أَحَدٌ</p>,
            audio: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6225.mp3"
        },
        ]
    },
    {
        title: 'nun-mati-atau-tanwin',
        detail: [
            {
                jenis: 'Bertemu Huruf Ba', 
                subjenis: 'Iqlab', 
                keterangan: `Hukum bacaan iqlab dalam ilmu tajwid berlaku jika nun mati maupun tanwin bertemu dengan huruf ba (ب). 
                Cara membacanya pun cukup unik. Kamu perlu membacanya menjadi bunyi mim sepanjang dua harakat.`,
                example: <p className='arabic'>كَلَّا لَيُ<span style={{color: "white"}} >&#x200d;نْبَ</span>ذَنَّ فِي الْحُطَمَةِ</p>,
                audio: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6183.mp3'
            },
            {
                jenis: 'Bertemu 2 Huruf Lam/Ra', 
                subjenis: 'Idghom Bilaghunnah', 
                keterangan: `Jika terdapat nun mati (نْ) atau tanwin (ــــــٌــ ــــــٍــ ــــــًــ) 
                bertemu dengan salah satu huruf idgham bilaghunnah di atas, huruf nun mati atau tanwin dimasukkan 
                pada huruf berikutnya. Nantinya menjadi satu huruf yang bertasydid tanpa mendengung.`,
                example: <p className='arabic'>وَلَمْ يَكُ<span style={{color: "white"}} >&#x200d;نْ لَ</span>هُ كُفُوًا أَحَدٌ</p>,
                audio: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6225.mp3'
            },
            {
                jenis: 'Bertemu 4 Huruf Ya/Nun/Mim/Wau', 
                subjenis: 'Idghom Bighunnah', 
                keterangan: `cara baca idgham bigunnah adalah dengan meleburkan nun mati (نْ) ataupun 
                tanwin ( ــًــ, ــٍــ, ــٌــ ) menjadi suara huruf yang ada di depan huruf 
                idgham bigunnah. Selain itu, saat membaca tajwid ini harus diiringi dengan menggunakan 
                suara yang berdengung sekitar 2 sampai 3 harakat.`,
                example: <p className='arabic'>تَبَّتْ يَدَا أَبِي لَهَ<span style={{color: "white"}} >&#x200d;بٍ وَ</span>تَبَّ</p>,
                audio: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6217.mp3'
            },
            {
                jenis: 'Bertemu 6 Huruf Hamzah/Ha/Kha/Ain/Goin', 
                subjenis: 'Idzhar Halqi', 
                keterangan: `Halqi sendiri berarti tenggorokan atau kerongkongan. Cara membacanya pun harus jelas, tidak boleh disamarkan maupun didengungkan. `,
                example : <p className='arabic'>وَمِنْ شَرِّ غَاسِ<span style={{color: "white"}} >&#x200d;قٍ إِ</span>ذَا وَقَبَ</p> ,
                audio: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6228.mp3"
            },
            {
                jenis: 'Bertemu 15 Huruf Selain Yang di Atas', 
                subjenis: 'Ikhfa Haqiqi', 
                keterangan: `jika nun mati dan tanwin bertemu dengan huruf seperti ta'(ت), tha' (ث), 
                jim (ج), dal (د), dzal (ذ), zai (ز), sin (س), syin (ش), sod (ص), dhod (ض), tho (ط), zho (ظ), 
                fa' (م), qof (م), dan kaf (ك). Cara membacanya pun harus dibaca samar-samar antara idzhar 
                dan idgham. `,
                example : <p className='arabic'>وَمِ<span style={{color: "white"}} >&#x200d;نْ شَ</span>رِّ غَاسِقٍ إِذَا وَقَبَ</p> ,
                audio: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6228.mp3"
            }
        ]
    }
]

// <p className='arabic'><span style={{color: "white"}} >&#x200d;</span></p>

const MENU_TAJWID = [
    {title: 'م', subtitle: 'Mim Mati', id: 'mim-mati'},
    {title:  `ن`, subtitle: 'Nun Mati / Tanwin', id: 'nun-mati-atau-tanwin'},
  ]


export {TAJWID, MENU_TAJWID}