// --- DATA INDONESIA (data-in.js) ---

// 1. TEKS UI (Antarmuka)
const TEXTS = {
    title: "MAPTOPIA ID",
    enterBtn: "✨ MASUK PETA ✨",
    menu: {
        pnj: "NPC",
        animals: "HEWAN",
        bus: "BUS",
        shops: "TOKO",
        places: "LOKASI",
        fish: "IKAN",
        bugs: "SERANGGA",
        birds: "BURUNG",
        resources: "SUMBER DAYA"
    },
    chat: {
        success: "✅ Pesan berhasil dikirim!",
        error: "❌ Gagal mengirim pesan.",
        incomplete: "⚠️ Harap isi semua kolom.",
        wait: "Sedang mengirim..."
    },
    quiz: {
        success: "✅ BENAR!",
        error: "❌ SALAH!",
        finishTitle: "🏆 AHLI TERKONFIRMASI!",
        finishText: "Anda mengenal Heartopia luar dalam.",
        quitBtn: "KELUAR KUIS"
    },
    like: {
        thankyou: "TERIMA KASIH!",
        already: "Anda sudah memilih!"
    }
};

// 2. DAFTAR NPC
const PNJ_DATA = [
    [-471, 501, "Bob", "pnj/bob.png"],
    [-526, 499, "Atara", "pnj/atara.png"],
    [-478, 493, "Kolektor", "pnj/collectioneur.png"],
    [-469, 488, "Dorothée", "pnj/dorothée.png"],
    [-446, 493, "Massimo", "pnj/massimo.png"],
    [-412, 418, "Ka Ching", "pnj/ka ching.png"],
    [-399, 591, "Andrew", "pnj/andrew.png"],
    [-259, 522, "Eric", "pnj/eric.png"],
    [-456, 549, "Vanya", "pnj/vanya.png"],
    [-502, 582, "Naniwa", "pnj/naniwa.png"],
    [-502, 519, "Ibu Joan", "pnj/mme joan.png"],
    [-807, 419, "Will", "pnj/will.png"],
    [-355, 809, "Patti", "pnj/patti.png"],
    [-653, 225, "Vernie", "pnj/vernie.png"],
    [-498, 526, "Bailey J", "pnj/bayleyj.png"],
    [-528.3, 560.3, "Blanc", "pnj/blanc.png"],
    [-499.8, 499.0, "Annie", "pnj/annie.png"],
    [-532.4, 634.8, "Albert Jr.", "pnj/albert jr.png"],
    [-734.8, 445.8, "Bill", "pnj/bill.png"],
    [-509.4, 414, "Doris (Hujan)", "pnj/doris.png"]
];

// 3. HALTE BUS
const BUS_DATA = [
    ["Pinggiran Barat",[-533,340]], ["Desa Pinggiran",[-519,639]], ["Desa Nelayan",[-654,479]], 
    ["Ladang Bunga",[-532,218]], ["Gunung Air Panas",[-222,512]], ["Pinggiran Utara",[-373,480]], 
    ["Alun-alun Pusat",[-497,481]], ["Hutan",[-500,798]]
];

// 4. TOKO
const SHOP_DATA = [
    [-472,487,"Pakaian","vetement.png"],[-474,503,"Perabotan","Meuble.png"],
    [-496.4,520.6,"Hewan Peliharaan","chien.png"],[-440,467,"Toko Buku","Librairie.png"]
];

// 5. HEWAN
const ANIMAL_DATA = [
    {pos: [-691, 783], name: "Panda", img: "panda.png", radius: 60},
    {pos: [-184, 291], name: "Kapibara", img: "capybara.png", radius: 50},
    {pos: [-533, 340], name: "Kelinci", img: "lapin.png", radius: 40},
    {pos: [-649, 185], name: "Rubah", img: "renard.png", radius: 70},
    {pos: [-737, 512], name: "Berang-berang", img: "loutre.png", radius: 40},
    {pos: [-354.3, 277.3], name: "Mink", img: "vison.png", radius: 10},
    {pos: [-531, 805], name: "Rusa", img: "cerf.png", radius: 60},
    {pos: [-725, 208], name: "Llama", img: "lama.png", radius: 50}
];

// 6. LOKASI
const LIEUX_DATA = [
    {pos:[-538,492], name:"Alun-alun Pusat", type:"label-ville", startOn:true}, 
    {pos:[-692,506], name:"Desa Nelayan", type:"label-ville", startOn:true}, 
    {pos:[-438,513], name:"Jalan Penduduk", type:"label-ville", startOn:true}, 
    {pos:[-649,185], name:"Ladang Bunga", type:"label-ville", startOn:true}, 
    {pos:[-440,184], name:"Gunung Paus", type:"label-ville", startOn:true}, 
    {pos:[-184,291], name:"Reruntuhan", type:"label-ville", startOn:true}, 
    {pos:[-223,501], name:"Gunung Air Panas", type:"label-ville", startOn:true}, 
    {pos:[-228,627], name:"Tebing Berbatu", type:"label-ville", startOn:true}, 
    {pos:[-531,805], name:"Hutan Oak", type:"label-ville", startOn:true}, 
    {pos:[-494,429], name:"Jalan Seni", type:"label-ville", startOn:true}, 
    {pos:[-510,558], name:"Jalan Taman", type:"label-ville", startOn:true}, 
    {pos:[-736,602], name:"Dermaga Timur", type:"label-ville", startOn:true}, 
    {pos:[-690,402], name:"Dermaga", type:"label-ville", startOn:true}, 
    {pos:[-780,387], name:"Mercusuar", type:"label-ville", startOn:true}, 
    {pos:[-691,783], name:"Papan Loncat", type:"label-ville", startOn:true}, 
    {pos:[-338,933], name:"Pulau Hutan", type:"label-ville", startOn:true}, 
    {pos:[-587,406], name:"Pinggiran Kota", type:"label-ville", startOn:true}, 
    {pos:[-725,208], name:"Pantai Ungu", type:"label-ville", startOn:true}, 
    {pos:[-783,478], name:"Laut Tenang", type:"label-eau", startOn:true}, 
    {pos:[-534,92], name:"Laut Paus", type:"label-eau", startOn:true}, 
    {pos:[-68,497], name:"Laut Kuno", type:"label-eau", startOn:true}, 
    {pos:[-536,232], name:"Danau Padang Rumput", type:"label-eau", startOn:true}, 
    {pos:[-337,319], name:"Sungai Aurora", type:"label-eau", startOn:true}, 
    {pos:[-176,394], name:"Danau Vulkanik", type:"label-eau", startOn:true}, 
    {pos:[-265,537], name:"Danau Air Panas", type:"label-eau", startOn:true}, 
    {pos:[-344,652], name:"Sungai Dangkal", type:"label-eau", startOn:true}, 
    {pos:[-598,748], name:"Danau Hutan", type:"label-eau", startOn:true}, 
    {pos:[-431,774], name:"Danau Hutan Atas", type:"label-eau", startOn:true}, 
    {pos:[-608,481], name:"Danau Pinggiran", type:"label-eau", startOn:true}, 
    {pos:[-669,368], name:"Sungai Tenang", type:"label-eau", startOn:true}, 
    {pos:[-674,627], name:"Sungai Pohon Raksasa", type:"label-eau", startOn:true}, 
    {pos:[-600,600], name:"Ladang Bunga Kincir Angin", type:"label-ville", startOn:true}, 
    {pos:[-670,450], name:"Ponton Timur", type:"label-ville", startOn:true}
];

// 7. SUMBER DAYA
const resourcesData = {
    "Raspberry": { icon: "resource/framboise.png", positions: [[-680.8, 330.9], [-668.5, 352.1], [-667.9, 268.5], [-648.3, 288.6], [-613.5, 317.4], [-602.8, 274.5], [-617.6, 211.6], [-571.5, 254.4], [-538.9, 208.6], [-527.8, 251.6], [-535.8, 288.3], [-503.1, 242.9], [-495, 222.4], [-453.8, 222.4], [-438.6, 246], [-395, 247.4], [-387.1, 269.5]] },
    "Blueberry": { icon: "resource/myrtille.png", positions: [[-642.9, 371.9], [-631.9, 368.4], [-628.5, 365.5], [-606.8, 350.3], [-602.5, 342.3], [-590.1, 334.1], [-575.6, 332.1], [-562.1, 330], [-544.9, 324.5], [-518.4, 320.3], [-515.9, 320.5], [-500.8, 321.1], [-479.3, 328.6], [-468.3, 320], [-437.3, 313.9], [-411.4, 311.4], [-400.3, 311.4], [-379.5, 304.1], [-327.4, 352], [-313.6, 339], [-328.6, 371.5], [-324.4, 389.3], [-297.9, 410.8], [-271.6, 395.4], [-319.9, 413.5], [-330.4, 421.6], [-333.4, 450], [-338.6, 468.6], [-297.4, 484.4], [-349, 489.4], [-356.5, 499.3], [-360.4, 526.4], [-355.5, 545.1], [-352.9, 565.9], [-316, 558.1], [-363.6, 578.4], [-365.3, 609], [-360.9, 628.1], [-343, 634], [-388, 655.4], [-400.9, 654.3], [-421.9, 656.4], [-444.1, 670.6], [-462.5, 654], [-476.8, 654.6], [-491.6, 656.3], [-506.4, 672.4], [-525.4, 688], [-542.6, 650], [-559.3, 644.9], [-575.6, 651], [-597.8, 643.8], [-604.8, 633.8], [-627.9, 619.4]] },
    "Apel": { icon: "resource/pomme.png", positions: [[-356.3, 493], [-365.4, 560.1], [-362.4, 581], [-324.6, 570.1], [-296, 610.3], [-365.6, 619.5], [-362.8, 628.5], [-393.5, 654.8], [-420.6, 653.3], [-436.1, 665.4], [-444.4, 685.1], [-436.6, 697.5], [-458.4, 744.9], [-505, 677.3], [-494.5, 657], [-459.8, 653.6], [-530.1, 677.9], [-540.1, 648.6], [-592.8, 676.6], [-606.9, 634.1], [-629.3, 623]] },
    "Pohon Besar": { icon: "resource/grand arbre.png", positions: [[-612, 424.5], [-641.8, 369], [-351, 329.5], [-414.3, 337.1], [-396.3, 608.9], [-376.3, 624], [-616, 593.6], [-672.3, 642]] },
    "Batu": { icon: "resource/pierre.png", positions: [[-615.9, 316], [-641.5, 278.8], [-558.4, 257.4], [-535, 292], [-499.5, 241.1], [-466.8, 283.1], [-407.1, 244.1], [-284, 402.8], [-254.6, 367.9], [-309.4, 479.1], [-263, 466.6], [-289.1, 544.6], [-315.5, 567.9], [-298.6, 625.4], [-391.3, 726.9], [-443.6, 697], [-468.6, 733.8], [-519, 714.9], [-564.9, 732.8], [-605.1, 680.3], [-673.9, 684.1]] },
    "Jeruk": { icon: "resource/orange.png", positions: [[-650.1, 370.9], [-639.5, 372], [-607.3, 351.4], [-602.9, 343.5], [-588.6, 336.6], [-559.6, 329.5], [-542.1, 324.8], [-515, 319.5], [-470.5, 321], [-461.4, 271.5], [-410.8, 314], [-397.3, 310.1], [-310.9, 339.3], [-327.6, 373.9], [-324.9, 391.9], [-295.4, 411.1], [-330.4, 420.9], [-333.8, 452.9]] },
    "Jamur Porcini": { 
        icon: "resource/cépes de bordeaux.png", 
        positions: [
            [-615, 796.9], [-620, 778.1], [-610.6, 759.9], [-634.9, 745.5], 
            [-650, 773.5], [-639, 800.6], [-543.5, 776.3], [-523.6, 777], 
            [-524.3, 818.9], [-479.9, 780.8], [-464.3, 775.6], [-472.1, 801], 
            [-477.3, 825.8], [-438.4, 789.3], [-410.5, 776.8], [-404.1, 794.1], 
            [-415.8, 799.1]
        ] 
    },
    "Truffle Hitam": { 
        icon: "resource/truffes noires.png", 
        positions: [
            [-358.1, 911.1], [-357.4, 926.1], [-340.4, 913.6], [-325.8, 920], 
            [-342.1, 956.5], [-363.3, 961.8]
        ] 
    },
    "Jamur Shiitake": { 
        icon: "resource/Lentins du chene.png", 
        positions: [
            [-772.3, 411.8], [-763.5, 397], [-736.8, 426.1], [-717.3, 446.8], 
            [-705.8, 432.1], [-667.1, 462.5], [-666.6, 482.5], [-698.5, 491.8], 
            [-698.3, 520.5], [-690.3, 542.6], [-686.4, 553.1], [-719.8, 546.6], 
            [-724.8, 555.3], [-707.5, 575.9], [-714.9, 596.3]
        ] 
    },
    "Jamur Kancing": { 
        icon: "resource/mousseron.png", 
        positions: [
            [-676.3, 271.5], [-667.8, 264], [-686.3, 260.8], [-706.3, 253.5], 
            [-632.8, 247.3], [-601.3, 229.5], [-577.5, 242.8], [-553.5, 237.3], 
            [-491.8, 177.8], [-480.5, 192.5], [-459.8, 225.8], [-440.3, 230.3], 
            [-420.3, 202.8], [-408.3, 178.8]
        ] 
    },
    "Jamur Tiram": { 
        icon: "resource/pleurote.png", 
        positions: [
            [-220.5, 355.3], [-207.5, 352.6], [-145.3, 303], [-162.5, 296], 
            [-190.5, 294.3], [-210.3, 301.8], [-221.3, 310], [-214, 421.1], 
            [-196.1, 428.4], [-174.4, 399.8], [-212.6, 470.8], [-232.5, 522.3], 
            [-205.8, 512.4], [-194.9, 526.1], [-169, 510.6], [-167.9, 533.9], 
            [-186, 547.6], [-189.3, 583.9]
        ] 
    }
};

// 8. IKAN
const fishList = [
    {name:"Ikan Ukal", bg:"condition/ablette_lieu.png", cond:"condition/ablette_meteo.png", heure:"condition/ablette_heure.png"},
    {name:"Mud Sunfish", bg:"condition/acantharchus_pomotis_lieu.png", cond:"condition/acantharchus_pomotis_meteo.png", heure:"condition/acantharchus_pomotis_heure.png"},
    {name:"Belut Eropa", bg:"condition/anguille_europeenne_lieu.png", cond:"condition/anguille_europeenne_meteo.png", heure:"condition/anguille_europeenne_heure.png"},
    {name:"Aphyosemion Striatum", bg:"condition/aphyosemion_striatum_lieu.png", cond:"condition/aphyosemion_striatum_meteo.png", heure:"condition/aphyosemion_striatum_heure.png"},
    {name:"Ikan Barbel", bg:"condition/barbeau_lieu.png", cond:"condition/barbeau_meteo.png", heure:"condition/barbeau_heure.png"},
    {name:"Barbel Kecil", bg:"condition/barbillon_lieu.png", cond:"condition/barbillon_meteo.png", heure:"condition/barbillon_heure.png"},
    {name:"Ikan Angler", bg:"condition/baudroie_lieu.png", cond:"condition/baudroie_meteo.png", heure:"condition/baudroie_heure.png"},
    {name:"Kelomang", bg:"condition/bernard_lhermite_lieu.png", cond:"condition/bernard_lhermite_meteo.png", heure:"condition/bernard_lhermite_heure.png"},
    {name:"Blenny Sungai", bg:"condition/blennie_de_riviere_lieu.png", cond:"condition/blennie_de_riviere_meteo.png", heure:"condition/blennie_de_riviere_heure.png"},
    {name:"Bonito", bg:"condition/bonite_lieu.png", cond:"condition/bonite_meteo.png", heure:"condition/bonite_heure.png"},
    {name:"Ikan Pike Tutul", bg:"condition/brochet_tachete_lieu.png", cond:"condition/brochet_tachete_meteo.png", heure:"condition/brochet_tachete_heure.png"},
    {name:"Ikan Mas Perak", bg:"condition/carpe_argente_lieu.png", cond:"condition/carpe_argente_meteo.png", heure:"condition/carpe_argente_heure.png"},
    {name:"Ikan Mas Eropa", bg:"condition/carpe_europeenne_lieu.png", cond:"condition/carpe_europeenne_meteo.png", heure:"condition/carpe_europeenne_heure.png"},
    {name:"Koi Kupu-kupu", bg:"condition/carpe_papillon_lieu.png", cond:"condition/carpe_papillon_meteo.png", heure:"condition/carpe_papillon_heure.png"},
    {name:"Ikan Mas Hitam", bg:"condition/carpe_noire_lieu.png", cond:"condition/carpe_noire_meteo.png", heure:"condition/carpe_noire_heure.png"},
    {name:"Ikan Sculpin", bg:"condition/chabot_lieu.png", cond:"condition/chabot_meteo.png", heure:"condition/chabot_heure.png"},
    {name:"Chimaera Perak", bg:"condition/chimere_argentee_lieu.png", cond:"condition/chimere_argentee_meteo.png", heure:"condition/chimere_argentee_heure.png"},
    {name:"Komet Goldfish", bg:"condition/comete_coussut_lieu.png", cond:"condition/comete_coussut_meteo.png", heure:"condition/comete_coussut_heure.png"},
    {name:"Kepiting Sungai", bg:"condition/crabe_de_ruisseau_lieu.png", cond:"condition/crabe_de_ruisseau_meteo.png", heure:"condition/crabe_de_ruisseau_heure.png"},
    {name:"Udang Laut", bg:"condition/crevette_de_la_mer_lieu.png", cond:"condition/crevette_de_la_mer_meteo.png", heure:"condition/crevette_de_la_mer_heure.png"},
    {name:"Udang Hijau", bg:"condition/crevette_verte_lieu.png", cond:"condition/crevette_verte_meteo.png", heure:"condition/crevette_verte_heure.png"},
    {name:"Lobster Mulia", bg:"condition/ecrevisse_noble_lieu.png", cond:"condition/ecrevisse_noble_meteo.png", heure:"condition/ecrevisse_noble_heure.png"},
    {name:"Lobster Mulia Biru", bg:"condition/ecrevisse_noble_bleue_lieu.png", cond:"condition/ecrevisse_noble_bleue_meteo.png", heure:"condition/ecrevisse_noble_bleue_heure.png"},
    {name:"Ikan Haddock", bg:"condition/eglefin_lieu.png", cond:"condition/eglefin_meteo.png", heure:"condition/eglefin_heure.png"},
    {name:"Ikan Smelt", bg:"condition/eperlan_lieu.png", cond:"condition/eperlan_meteo.png", heure:"condition/eperlan_heure.png"},
    {name:"Ikan Whitefish", bg:"condition/fera_lieu.png", cond:"condition/fera_meteo.png", heure:"condition/fera_heure.png"},
    {name:"Bass Besar", bg:"condition/grand_blackbasse_lieu.png", cond:"condition/grand_blackbasse_meteo.png", heure:"condition/grand_blackbasse_heure.png"},
    {name:"Katak Eropa", bg:"condition/grenouille_europeenne_lieu.png", cond:"condition/grenouille_europeenne_meteo.png", heure:"condition/grenouille_europeenne_heure.png"},
    {name:"Ikan Goby", bg:"condition/gobie_lieu.png", cond:"condition/gobie_meteo.png", heure:"condition/gobie_heure.png"},
    {name:"Ikan Gurnard", bg:"condition/grondin_perlon_lieu.png", cond:"condition/grondin_perlon_meteo.png", heure:"condition/grondin_perlon_heure.png"},
    {name:"Kuda Laut", bg:"condition/hippocampe_lieu.png", cond:"condition/hippocampe_meteo.png", heure:"condition/hippocampe_heure.png"},
    {name:"Salmon Danube", bg:"condition/huchon_lieu.png", cond:"condition/huchon_meteo.png", heure:"condition/huchon_heure.png"},
    {name:"Lobster Eropa", bg:"condition/langouste_europeenne_lieu.png", cond:"condition/langouste_europeenne_meteo.png", heure:"condition/langouste_europeenne_heure.png"},
    {name:"Loach Badut", bg:"condition/loche_des_fleurs_lieu.png", cond:"condition/loche_des_fleurs_meteo.png", heure:"condition/loche_des_fleurs_heure.png"},
    {name:"Loach Batu", bg:"condition/loche_des_rochers_lieu.png", cond:"condition/loche_des_rochers_meteo.png", heure:"condition/loche_des_rochers_heure.png"},
    {name:"Burbot", bg:"condition/lotte_lieu.png", cond:"condition/lotte_meteo.png", heure:"condition/lotte_heure.png"},
    {name:"Ikan Kembung Atlantik", bg:"condition/maquereau_atlantique_lieu.png", cond:"condition/maquereau_atlantique_meteo.png", heure:"condition/maquereau_atlantique_heure.png"},
    {name:"Kerang", bg:"condition/moule_lieu.png", cond:"condition/moule_meteo.png", heure:"condition/moule_heure.png"},
    {name:"Arctic Char", bg:"condition/omble_chevalier_lieu.png", cond:"condition/omble_chevalier_meteo.png", heure:"condition/omble_chevalier_heure.png"},
    {name:"Shi Drum", bg:"condition/ombrine_lieu.png", cond:"condition/ombrine_meteo.png", heure:"condition/ombrine_heure.png"},
    {name:"Seabream Bintik Hitam", bg:"condition/pagellus_bogaraveo_lieu.png", cond:"condition/pagellus_bogaraveo_meteo.png", heure:"condition/pagellus_bogaraveo_heure.png"},
    {name:"Kakap Laut", bg:"condition/perche_de_mer_lieu.png", cond:"condition/perche_de_mer_meteo.png", heure:"condition/perche_de_mer_heure.png"},
    {name:"Ikan Ruffe", bg:"condition/perche_de_prunier_lieu.png", cond:"condition/perche_de_prunier_meteo.png", heure:"condition/perche_de_prunier_heure.png"},
    {name:"Ikan Perch", bg:"condition/perche_de_riviere_lieu.png", cond:"condition/perche_de_riviere_meteo.png", heure:"condition/perche_de_riviere_heure.png"},
    {name:"Gurita", bg:"condition/pieuvre_lieu.png", cond:"condition/pieuvre_meteo.png", heure:"condition/pieuvre_heure.png"},
    {name:"Gurita Kerdil", bg:"condition/pieuvre_naine_atlantique_lieu.png", cond:"condition/pieuvre_naine_atlantique_meteo.png", heure:"condition/pieuvre_naine_atlantique_heure.png"},
    {name:"Ikan Macan", bg:"condition/poissontigre_a_ventre_rouge_lieu.png", cond:"condition/poissontigre_a_ventre_rouge_meteo.png", heure:"condition/poissontigre_a_ventre_rouge_heure.png"},
    {name:"Plaice Eropa", bg:"condition/plie_europeenne_lieu.png", cond:"condition/plie_europeenne_meteo.png", heure:"condition/plie_europeenne_heure.png"},
    {name:"Ikan Badut", bg:"condition/poissonclown_lieu.png", cond:"condition/poissonclown_meteo.png", heure:"condition/poissonclown_heure.png"},
    {name:"Stickleback", bg:"condition/poisson_epineux_lieu.png", cond:"condition/poisson_epineux_meteo.png", heure:"condition/poisson_epineux_heure.png"},
    {name:"Ikan Buntal Sungai", bg:"condition/poissonglobe_de_riviere_lieu.png", cond:"condition/poissonglobe_de_riviere_meteo.png", heure:"condition/poissonglobe_de_riviere_heure.png"},
    {name:"Ikan Mas Koki", bg:"condition/poisson_rouge_lieu.png", cond:"condition/poisson_rouge_meteo.png", heure:"condition/poisson_rouge_heure.png"},
    {name:"Ikan Pita", bg:"condition/poisson_ruban_lieu.png", cond:"condition/poisson_ruban_meteo.png", heure:"condition/poisson_ruban_heure.png"},
    {name:"Ikan Roach", bg:"condition/poisson_a_yeux_rouges_lieu.png", cond:"condition/poisson_a_yeux_rouges_meteo.png", heure:"condition/poisson_a_yeux_rouges_heure.png"},
    {name:"Ikan Oarfish", bg:"condition/regalec_lieu.png", cond:"condition/regalec_meteo.png", heure:"condition/regalec_heure.png"},
    {name:"Ikan Mullet Merah", bg:"condition/rouget_barbet_lieu.png", cond:"condition/rouget_barbet_meteo.png", heure:"condition/rouget_barbet_heure.png"},
    {name:"Dogfish", bg:"condition/roussette_lieu.png", cond:"condition/roussette_meteo.png", heure:"condition/roussette_heure.png"},
    {name:"Zander", bg:"condition/sandre_blanc_lieu.png", cond:"condition/sandre_blanc_meteo.png", heure:"condition/sandre_blanc_heure.png"},
    {name:"Salmon Atlantik", bg:"condition/saumon_atlantique_lieu.png", cond:"condition/saumon_atlantique_meteo.png", heure:"condition/saumon_atlantique_heure.png"},
    {name:"Salmon Chum", bg:"condition/saumon_keta_lieu.png", cond:"condition/saumon_keta_meteo.png", heure:"condition/saumon_keta_heure.png"},
    {name:"Kembung Kuda", bg:"condition/saurel_lieu.png", cond:"condition/saurel_meteo.png", heure:"condition/saurel_heure.png"},
    {name:"Sarden", bg:"condition/sardine_lieu.png", cond:"condition/sardine_meteo.png", heure:"condition/sardine_heure.png"},
    {name:"Sotong", bg:"condition/seiche_europeenne_lieu.png", cond:"condition/seiche_europeenne_meteo.png", heure:"condition/seiche_europeenne_heure.png"},
    {name:"Lele Wels", bg:"condition/silure_europeen_lieu.png", cond:"condition/silure_europeen_meteo.png", heure:"condition/silure_europeen_heure.png"},
    {name:"Tench Emas", bg:"condition/tanche_doree_lieu.png", cond:"condition/tanche_doree_meteo.png", heure:"condition/tanche_doree_heure.png"},
    {name:"Berudu", bg:"condition/tetard_lieu.png", cond:"condition/tetard_meteo.png", heure:"condition/tetard_heure.png"},
    {name:"Nila", bg:"condition/tilapia_lieu.png", cond:"condition/tilapia_meteo.png", heure:"condition/tilapia_heure.png"},
    {name:"Turbot", bg:"condition/turbot_lieu.png", cond:"condition/turbot_meteo.png", heure:"condition/turbot_heure.png"},
    {name:"Ikan Minnow", bg:"condition/vairon_lieu.png", cond:"condition/vairon_meteo.png", heure:"condition/vairon_heure.png"},
    {name:"Ikan Zingel", bg:"condition/zingel_streber_lieu.png", cond:"condition/zingel_streber_meteo.png", heure:"condition/zingel_streber_heure.png"}
];

// 9. SERANGGA
const bugList = [
    {name:"Lebah Ekor Putih", bg:"condition/abeille_a_queue_blanche_lieu.png", cond:"condition/abeille_a_queue_blanche_meteo.png", heure:"condition/abeille_a_queue_blanche_heure.png"},
    {name:"Lebah Kayu Biru", bg:"condition/Abeille_charpentière_bleue_lieu.png", cond:"condition/Abeille_charpentière_bleue_meteo.png", heure:"condition/Abeille_charpentière_bleue_heure.png"},
    {name:"Lebah Kayu Ungu", bg:"condition/abeille_charpentiere_violette_lieu.png", cond:"condition/abeille_charpentiere_violette_meteo.png", heure:"condition/abeille_charpentiere_violette_heure.png"},
    {name:"Actias Neidhoederi", bg:"condition/actias_neidhoederi_lieu.png", cond:"condition/actias_neidhoederi_meteo.png", heure:"condition/actias_neidhoederi_heure.png"},
    {name:"Kupu-kupu Holly Blue", bg:"condition/azure_de_porcelaine_lieu.png", cond:"condition/azure_de_porcelaine_meteo.png", heure:"condition/azure_de_porcelaine_heure.png"},
    {name:"Kumbang Bumblebee", bg:"condition/bourdon_lieu.png", cond:"condition/bourdon_meteo.png", heure:"condition/bourdon_heure.png"},
    {name:"Kumbang Macan", bg:"condition/capricorne_tigre_lieu.jpg", cond:"condition/capricorne_tigre_meteo.png", heure:"condition/capricorne_tigre_heure.png"},
    {name:"Kumbang Bunga Biru", bg:"condition/cetoine_etoilee_bleue_lieu.png", cond:"condition/cetoine_etoilee_bleue_meteo.png", heure:"condition/cetoine_etoilee_bleue_heure.png"},
    {name:"Kumbang Macan Hijau", bg:"condition/cicindele_verte_lieu.png", cond:"condition/cicindele_verte_meteo.png", heure:"condition/cicindele_verte_heure.png"},
    {name:"Tonggeret", bg:"condition/cigale_lieu.png", cond:"condition/cigale_meteo.png", heure:"condition/cigale_heure.png"},
    {name:"Kupu-kupu Brimstone", bg:"condition/citron_aspasia_lieu.png", cond:"condition/citron_aspasia_meteo.png", heure:"condition/citron_aspasia_heure.png"},
    {name:"Kepik 7 Titik", bg:"condition/coccinelle_a_sept_points_lieu.png", cond:"condition/coccinelle_a_sept_points_meteo.png", heure:"condition/coccinelle_a_sept_points_heure.png"},
    {name:"Kepik Asia", bg:"condition/coccinelle_asiatique_lieu.png", cond:"condition/coccinelle_asiatique_meteo.png", heure:"condition/coccinelle_asiatique_heure.png"},
    {name:"Kumbang Asparagus", bg:"condition/criocere_de_lasperge_lieu.png", cond:"condition/criocere_de_lasperge_meteo.png", heure:"condition/criocere_de_lasperge_heure.png"},
    {name:"Belalang Sayap Jala", bg:"condition/criquet_a_ailes_reticulees_lieu.png", cond:"condition/criquet_a_ailes_reticulees_meteo.png", heure:"condition/criquet_a_ailes_reticulees_heure.png"},
    {name:"Belalang Kaki Besar", bg:"condition/criquet_aux_pattes_massives_lieu.png", cond:"condition/criquet_aux_pattes_massives_meteo.png", heure:"condition/criquet_aux_pattes_massives_heure.png"},
    {name:"Semut", bg:"condition/fourmi_lieu.png", cond:"condition/fourmi_meteo.png", heure:"condition/fourmi_heure.png"},
    {name:"Capung Jarum Besar", bg:"condition/grand_agrion_lieu.png", cond:"condition/grand_agrion_meteo.png", heure:"condition/grand_agrion_heure.png"},
    {name:"Jangkrik", bg:"condition/grillon_lieu.jpg", cond:"condition/grillon_meteo.png", heure:"condition/grillon_heure.png"},
    {name:"Capung Ekor Putih", bg:"condition/libellule_a_queue_blanche_lieu.png", cond:"condition/libellule_a_queue_blanche_meteo.png", heure:"condition/libellule_a_queue_blanche_heure.png"},
    {name:"Capung Tutul", bg:"condition/libellule_tachetee_lieu.png", cond:"condition/libellule_tachetee_meteo.png", heure:"condition/libellule_tachetee_heure.png"},
    {name:"Belalang Sembah Pelangi", bg:"condition/mante_arcenciel_lieu.png", cond:"condition/mante_arcenciel_meteo.png", heure:"condition/mante_arcenciel_heure.png"},
    {name:"Belalang Sembah Papua", bg:"condition/mante_papoue_lieu.png", cond:"condition/mante_papoue_meteo.png", heure:"condition/mante_papoue_heure.png"},
    {name:"Kupu-kupu Macan Tutul", bg:"condition/melitee_leopard_lieu.png", cond:"condition/melitee_leopard_meteo.png", heure:"condition/melitee_leopard_heure.png"},
    {name:"Kupu-kupu Merak", bg:"condition/paondujour_lieu.png", cond:"condition/paondujour_meteo.png", heure:"condition/paondujour_heure.png"},
    {name:"Kupu-kupu Cincin Merah", bg:"condition/papillon_a_anneaux_rouges_lieu.png", cond:"condition/papillon_a_anneaux_rouges_meteo.png", heure:"condition/papillon_a_anneaux_rouges_heure.png"},
    {name:"Kupu-kupu Leher Merah", bg:"condition/papillon_a_col_rouge_lieu.png", cond:"condition/papillon_a_col_rouge_meteo.png", heure:"condition/papillon_a_col_rouge_heure.png"},
    {name:"Kupu-kupu Putih", bg:"condition/papillon_blanc_lieu.png", cond:"condition/papillon_blanc_meteo.png", heure:"condition/papillon_blanc_heure.png"},
    {name:"Kupu-kupu Emas", bg:"condition/papillon_dore_lieu.png", cond:"condition/papillon_dore_meteo.png", heure:"condition/papillon_dore_heure.png"},
    {name:"Ngengat Penyihir Putih", bg:"condition/Papillon_sorcière_blanche_lieu.png", cond:"condition/Papillon_sorcière_blanche_meteo.png", heure:"condition/Papillon_sorcière_blanche_heure.png"},
    {name:"Parnassius", bg:"condition/parnassien_lieu.png", cond:"condition/parnassien_meteo.png", heure:"condition/parnassien_heure.png"},
    {name:"Kupu-kupu Selada Air", bg:"condition/pieride_du_cresson_lieu.png", cond:"condition/pieride_du_cresson_meteo.png", heure:"condition/pieride_du_cresson_heure.png"},
    {name:"Kepik Picasso", bg:"condition/punaise_picasso_lieu.png", cond:"condition/punaise_picasso_meteo.png", heure:"condition/punaise_picasso_heure.png"},
    {name:"Kumbang Kardinal", bg:"condition/pyrochroa_lieu.png", cond:"condition/pyrochroa_meteo.png", heure:"condition/pyrochroa_heure.png"},
    {name:"Kepik Api", bg:"condition/pyrrhocoris_apterus_lieu.png", cond:"condition/pyrrhocoris_apterus_meteo.png", heure:"condition/pyrrhocoris_apterus_heure.png"},
    {name:"Belalang Oasis", bg:"condition/sauterelle_de_loasis_lieu.png", cond:"condition/sauterelle_de_loasis_meteo.png", heure:"condition/sauterelle_de_loasis_heure.png"},
    {name:"Belalang Merah Muda", bg:"condition/sauterelle_rose_lieu.jpg", cond:"condition/sauterelle_rose_meteo.png", heure:"condition/sauterelle_rose_heure.png"},
    {name:"Kumbang Unicorn", bg:"condition/scarabee_unicorne_lieu.png", cond:"condition/scarabee_unicorne_meteo.png", heure:"condition/scarabee_unicorne_heure.png"},
    {name:"Laksamana Violet", bg:"condition/Vanesse_violette_lieu.png", cond:"condition/Vanesse_violette_meteo.png", heure:"condition/Vanesse_violette_heure.png"}
];

// 10. BURUNG
const birdList = [
    {name:"Macaw Biru-Kuning", bg:"condition/ara_bleu_et_jaune_lieu.png", cond:"condition/ara_bleu_et_jaune_meteo.png", heure:"condition/ara_bleu_et_jaune_heure.png"},
    {name:"Macaw Merah-Hijau", bg:"condition/ara_rouge_et_vert_lieu.png", cond:"condition/ara_rouge_et_vert_meteo.png", heure:"condition/ara_rouge_et_vert_heure.png"},
    {name:"Macaw Indigo", bg:"condition/ara_indigo_lieu.png", cond:"condition/ara_indigo_meteo.png", heure:"condition/ara_indigo_heure.png"},
    {name:"Wagtail Putih", bg:"condition/bergeronnette_grise_lieu.png", cond:"condition/bergeronnette_grise_meteo.png", heure:"condition/bergeronnette_grise_heure.png"},
    {name:"Bullfinch", bg:"condition/bouvreuil_lieu.png", cond:"condition/bouvreuil_meteo.png", heure:"condition/bouvreuil_heure.png"},
    {name:"Bullfinch Perut Merah", bg:"condition/bouvreuil_a_ventre_rouge_lieu.png", cond:"condition/bouvreuil_a_ventre_rouge_meteo.png", heure:"condition/bouvreuil_a_ventre_rouge_heure.png"},
    {name:"Tanager Tujuh Warna", bg:"condition/calliste_septicolore_lieu.png", cond:"condition/calliste_septicolore_meteo.png", heure:"condition/calliste_septicolore_heure.png"},
    {name:"Bebek Kepala Putih", bg:"condition/canard_a_tete_blanche_lieu.png", cond:"condition/canard_a_tete_blanche_meteo.png", heure:"condition/canard_a_tete_blanche_heure.png"},
    {name:"Bebek Mallard", bg:"condition/canard_colvert_lieu.png", cond:"condition/canard_colvert_meteo.png", heure:"condition/canard_colvert_heure.png"},
    {name:"Bebek Wigeon", bg:"condition/canard_siffleur_lieu.png", cond:"condition/canard_siffleur_meteo.png", heure:"condition/canard_siffleur_heure.png"},
    {name:"Kardinal Jambul Merah", bg:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_lieu.png", cond:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_meteo.png", heure:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_heure.png"},
    {name:"Merpati Buah Jambu", bg:"condition/colombe_jambu_lieu.png", cond:"condition/colombe_jambu_meteo.png", heure:"condition/colombe_jambu_heure.png"},
    {name:"Pipit Zebra", bg:"condition/diamant_mandarin_lieu.png", cond:"condition/diamant_mandarin_meteo.png", heure:"condition/diamant_mandarin_heure.png"},
    {name:"Raja Eider", bg:"condition/eider_royal_lieu.png", cond:"condition/eider_royal_meteo.png", heure:"condition/eider_royal_heure.png"},
    {name:"Ayam Pegar Lady Amherst", bg:"condition/faisan_a_ventre_blanc_lieu.png", cond:"condition/faisan_a_ventre_blanc_meteo.png", heure:"condition/faisan_a_ventre_blanc_heure.png"},
    {name:"Alap-alap Kaki Merah", bg:"condition/faucon_a_pattes_rouges_lieu.png", cond:"condition/faucon_a_pattes_rouges_meteo.png", heure:"condition/faucon_a_pattes_rouges_heure.png"},
    {name:"Elang Peregrine", bg:"condition/faucon_pelerin_lieu.png", cond:"condition/faucon_pelerin_meteo.png", heure:"condition/faucon_pelerin_heure.png"},
    {name:"Alap-alap Merah", bg:"condition/faucon_rouge_lieu.png", cond:"condition/faucon_rouge_meteo.png", heure:"condition/faucon_rouge_heure.png"},
    {name:"Flamingo Amerika", bg:"condition/flamant_rose_americain_lieu.png", cond:"condition/flamant_rose_americain_meteo.png", heure:"condition/flamant_rose_americain_heure.png"},
    {name:"Chaffinch", bg:"condition/fringilla_coelebs_lieu.png", cond:"condition/fringilla_coelebs_meteo.png", heure:"condition/fringilla_coelebs_heure.png"},
    {name:"Sikatan Verditer", bg:"condition/gobemouche_vertdegris_lieu.png", cond:"condition/gobemouche_vertdegris_meteo.png", heure:"condition/gobemouche_vertdegris_heure.png"},
    {name:"Burung Camar", bg:"condition/goeland_lieu.png", cond:"condition/goeland_meteo.png", heure:"condition/goeland_heure.png"},
    {name:"Kepodang Emas", bg:"condition/golden_oriole_lieu.png", cond:"condition/golden_oriole_meteo.png", heure:"condition/golden_oriole_heure.png"},
    {name:"Burung Hantu Elang", bg:"condition/grand_duc_deurope_lieu.png", cond:"condition/grand_duc_deurope_meteo.png", heure:"condition/grand_duc_deurope_heure.png"},
    {name:"Flamingo Besar", bg:"condition/grand_flamant_lieu.png", cond:"condition/grand_flamant_meteo.png", heure:"condition/grand_flamant_heure.png"},
    {name:"Pelatuk Hitam", bg:"condition/grand_pic_lieu.png", cond:"condition/grand_pic_meteo.png", heure:"condition/grand_pic_heure.png"},
    {name:"Hawfinch", bg:"condition/grosbec_lieu.png", cond:"condition/grosbec_meteo.png", heure:"condition/grosbec_heure.png"},
    {name:"Kirik-kirik Eropa", bg:"condition/guepier_deurope_lieu.png", cond:"condition/guepier_deurope_meteo.png", heure:"condition/guepier_deurope_heure.png"},
    {name:"Smew", bg:"condition/harle_piette_lieu.png", cond:"condition/harle_piette_meteo.png", heure:"condition/harle_piette_heure.png"},
    {name:"Burung Hantu Telinga Panjang", bg:"condition/hibou_moyen_duc_lieu.png", cond:"condition/hibou_moyen_duc_meteo.png", heure:"condition/hibou_moyen_duc_heure.png"},
    {name:"Bowerbird Emas", bg:"condition/jardinier_a_tete_jaune_lieu.png", cond:"condition/jardinier_a_tete_jaune_meteo.png", heure:"condition/jardinier_a_tete_jaune_heure.png"},
    {name:"Seedeater Tungging Putih", bg:"condition/linotte_a_dos_blanc_lieu.png", cond:"condition/linotte_a_dos_blanc_meteo.png", heure:"condition/linotte_a_dos_blanc_heure.png"},
    {name:"Bluebird Timur", bg:"condition/merle_bleu_de_lest_lieu.png", cond:"condition/merle_bleu_de_lest_meteo.png", heure:"condition/merle_bleu_de_lest_heure.png"},
    {name:"Gelatik Leher Perak", bg:"condition/mesange_a_menton_argent_lieu.png", cond:"condition/mesange_a_menton_argent_meteo.png", heure:"condition/mesange_a_menton_argent_heure.png"},
    {name:"Gelatik Biru", bg:"condition/mesange_bleue_lieu.png", cond:"condition/mesange_bleue_meteo.png", heure:"condition/mesange_bleue_heure.png"},
    {name:"Sikatan Perut Kuning", bg:"condition/moucherolle_a_ventre_jaune_lieu.png", cond:"condition/moucherolle_a_ventre_jaune_meteo.png", heure:"condition/moucherolle_a_ventre_jaune_heure.png"},
    {name:"Camar Kepala Hitam", bg:"condition/mouette_lieu.png", cond:"condition/mouette_meteo.png", heure:"condition/mouette_heure.png"},
    {name:"Bearded Reedling", bg:"condition/panure_a_moustache_lieu.png", cond:"condition/panure_a_moustache_meteo.png", heure:"condition/panure_a_moustache_heure.png"},
    {name:"Merak Putih", bg:"condition/paon_blanc_lieu.png", cond:"condition/paon_blanc_meteo.png", heure:"condition/paon_blanc_heure.png"},
    {name:"Merak Biru", bg:"condition/paon_bleu_lieu.png", cond:"condition/paon_bleu_meteo.png", heure:"condition/paon_bleu_heure.png"},
    {name:"Merak Hitam", bg:"condition/paon_noir_lieu.png", cond:"condition/paon_noir_meteo.png", heure:"condition/paon_noir_heure.png"},
    {name:"Merak Hijau", bg:"condition/paon_vert_lieu.png", cond:"condition/paon_vert_meteo.png", heure:"condition/paon_vert_heure.png"},
    {name:"Flamingo Kecil", bg:"condition/petit_flamant_lieu.png", cond:"condition/petit_flamant_meteo.png", heure:"condition/petit_flamant_heure.png"},
    {name:"Shrike Kepala Merah", bg:"condition/piegrieche_a_tete_rousse_lieu.png", cond:"condition/piegrieche_a_tete_rousse_meteo.png", heure:"condition/piegrieche_a_tete_rousse_heure.png"},
    {name:"Merpati Buah Emas", bg:"condition/pigeon_aux_fruits_dor_lieu.png", cond:"condition/pigeon_aux_fruits_dor_meteo.png", heure:"condition/pigeon_aux_fruits_dor_heure.png"},
    {name:"Merpati Mata Kuning", bg:"condition/pigeon_aux_yeux_jaunes_lieu.png", cond:"condition/pigeon_aux_yeux_jaunes_meteo.png", heure:"condition/pigeon_aux_yeux_jaunes_heure.png"},
    {name:"Merpati Hutan", bg:"condition/pigeon_colombin_lieu.png", cond:"condition/pigeon_colombin_meteo.png", heure:"condition/pigeon_colombin_heure.png"},
    {name:"Merpati Wonga", bg:"condition/pigeon_de_wonga_lieu.png", cond:"condition/pigeon_de_wonga_meteo.png", heure:"condition/pigeon_de_wonga_heure.png"},
    {name:"Merpati Merah Muda", bg:"condition/pigeon_rose_lieu.png", cond:"condition/pigeon_rose_meteo.png", heure:"condition/pigeon_rose_heure.png"},
    {name:"Finch", bg:"condition/pinson_lieu.png", cond:"condition/pinson_meteo.png", heure:"condition/pinson_heure.png"},
    {name:"Robin", bg:"condition/rougegorge_lieu.png", cond:"condition/rougegorge_meteo.png", heure:"condition/rougegorge_heure.png"},
    {name:"Nuthatch", bg:"condition/sittelle_lieu.png", cond:"condition/sittelle_meteo.png", heure:"condition/sittelle_heure.png"},
    {name:"Burung Dara Laut", bg:"condition/sterne_lieu.png", cond:"condition/sterne_meteo.png", heure:"condition/sterne_heure.png"},
    {name:"Dara Laut Putih", bg:"condition/sterne_blanche_lieu.png", cond:"condition/sterne_blanche_meteo.png", heure:"condition/sterne_blanche_heure.png"},
    {name:"Shelduck", bg:"condition/tadorne_casarca_lieu.png", cond:"condition/tadorne_casarca_meteo.png", heure:"condition/tadorne_casarca_heure.png"},
    {name:"Tekukur Kepala Abu", bg:"condition/tourterelle_a_tete_grise_lieu.png", cond:"condition/tourterelle_a_tete_grise_meteo.png", heure:"condition/tourterelle_a_tete_grise_heure.png"},
    {name:"Tekukur Berkalung", bg:"condition/tourterelle_grise_lieu.png", cond:"condition/tourterelle_grise_meteo.png", heure:"condition/tourterelle_grise_heure.png"},
    {name:"Tekukur Tutul", bg:"condition/tourterelle_tigrine_lieu.png", cond:"condition/tourterelle_tigrine_meteo.png", heure:"condition/tourterelle_tigrine_heure.png"},
    {name:"Wren", bg:"condition/troglodyte_lieu.png", cond:"condition/troglodyte_meteo.png", heure:"condition/troglodyte_heure.png"}
];

// 11. KUIS
const QUIZ_DATA = [
    { q: "Siapa pembeli di desa?", o: ["Albert Jr.", "ka ching", "Eric"], a: 0 },
    { q: "Di mana Mud Sunfish ditemukan?", o: ["Laut Tenang", "Danau Hutan", "Sungai Aurora"], a: 0 },
    { q: "NPC mana yang mengelola koleksi?", o: ["Kolektor", "Bob", "Massimo"], a: 0 },
    { q: "Cuaca apa yang membuat pelangi?", o: ["Badai", "Kabut", "Matahari setelah hujan"], a: 2 },
    { q: "Di mana lokasi Desa Nelayan?", o: ["Timur Laut", "Barat Daya", "Timur"], a: 1 },
    { q: "Actias neidhoederi aktif saat:", o: ["Pagi", "Siang", "Malam"], a: 2 },
    { q: "Di mana Kapibara tinggal?", o: ["Reruntuhan", "Papan Loncat", "Pantai"], a: 0 },
    { q: "Siapa yang menjual hewan (anjing)?", o: ["Vernie", "Ibu Joan", "Andrew"], a: 1 },
    { q: "Di mana memancing Oarfish?", o: ["Sungai", "Danau", "Laut"], a: 2 },
    { q: "Di mana area Air Panas?", o: ["Utara", "Selatan", "Barat"], a: 0 },
    { q: "Kumbang Unicorn hidup di:", o: ["Dermaga Timur", "Ladang", "Hutan"], a: 0 },
    { q: "Macaw Indigo adalah:", o: ["Ikan", "Serangga", "Burung"], a: 2 },
    { q: "Koi Kupu-kupu hidup di:", o: ["Air Tawar", "Air Asin", "Danau Padang Rumput"], a: 2 },
    { q: "Di mana NPC Will berada?", o: ["Dekat laut", "Di gunung", "Di hutan"], a: 0 },
    { q: "Warna tombol IKAN?", o: ["Hijau", "Biru", "Oranye"], a: 1 },
    { q: "Kumbang Bumblebee tinggal di:", o: ["Danau", "Ladang Bunga", "Gua"], a: 1 },
    { q: "Berang-berang ditemukan di:", o: ["Mercusuar", "Desa Nelayan", "Reruntuhan"], a: 1 },
    { q: "Panda tinggal di dekat:", o: ["Papan Loncat", "Desa", "Dermaga"], a: 0 },
    { q: "Ikan Smelt hidup di:", o: ["Danau Padang Rumput", "Danau Atas", "Laut"], a: 0 },
    { q: "Annie berada di:", o: ["Alun-alun Pusat", "Pantai", "Hutan"], a: 0 },
    { q: "Llama tinggal di:", o: ["Pantai Ungu", "Gunung", "Sungai"], a: 0 },
    { q: "Nilai untuk peta ini (dari 20)?", o: ["5", "0", "20"], a: 2 },
    { q: "Lobster Biru hidup di:", o: ["Danau Hutan", "Laut", "Laut Tenang"], a: 0 },
    { q: "Gunung Paus ada di:", o: ["Selatan", "Utara", "Barat"], a: 2 },
    { q: "Untuk apa Maptopia?", o: ["Jual item", "Cari sumber daya", "Ganti game"], a: 1 },
    { q: "Wagtail Putih adalah:", o: ["Burung", "Ikan", "Penduduk"], a: 1 },
    { q: "Rusa tinggal di:", o: ["Pantai", "Hutan Oak", "Kota"], a: 1 },
    { q: "Kupu-kupu Brimstone adalah:", o: ["Buah", "Serangga", "Ikan"], a: 1 },
    { q: "Dermaga Timur ada di:", o: ["Utara", "Timur", "Selatan"], a: 1 },
    { q: "Bob adalah:", o: ["Hewan", "NPC", "Tempat"], a: 1 }
];
