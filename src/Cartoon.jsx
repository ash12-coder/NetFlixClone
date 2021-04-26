import React from 'react';



const Cartoon = [
  {
    id:1,
    name:"Secret Magic Control Agency",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU40HC89cpDkamv6B9G_aOWtJjAZAKByOutQh7R6WT0Wk-hgPGCYlY7E8kaEBPq5OQKJwiqJxZ78nPSrfQyTjJq-1iHskNmo9-0VuyjJGcipIJ26ZkuyEoi2eT6O.jpg?r=b5a",
    vedioid:"OESJJ2vZn9M",
  },
  {
    id:2,
    name:"Shrek",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5afB0w17pbNZHsKDF82C5u56hI8B8nlOHfvsqeLWZxvUPrkokAx9VS6hqWqRKzw_n0phnzXKn8MQOpExsukD8Y280.jpg?r=1b6",
    vedioid:"CwXOrWvPBPk",
  },
  {
    id:3,
    name:"Mowgli",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvWKHS3M-8R2xRM1bA3ZL1xxokje1JVQcwuMQvhY5MuoEJOoJAelVGjRdXNuvmNcJk-2SEFWorr7HbzHz_sMKT5bBBOD3OqJhGg_8JFACyCZQmOeNGgd8WLyqeI.jpg?r=aac",
    vedioid:"OVBjPpUlQrE",
  },
  {
    id:4,
    name:"Dr. Seuss The Grinch",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdWmH7TUcNpNnNRqTp95ux9aI9iOFU0WF7wAu4aiyMgVF0plvCP_jX5xhm86QNo2L_24qeKVt_0YC2e3f9X-CCQl_mo.jpg?r=332",
    vedioid:"vjnqABgxfO0",
  },
  {
    id:5,
    name:"Howl's Moving Castle",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcIrGU1WDPT4Uof90SNRIXVwpa-aCywJD4be-3xe6gKz4Rm_rmEOXiYUFHM8xOxw_M-HI6rkeTrH7fVVJbQsfK7XG1I.jpg?r=6b6",
    vedioid:"iwROgK94zcM",
  },
  {
    id:6,
    name:"Goosebumps",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfMbbvN0dPUyVU8qb-hOXznhnE3iUiTJ17qxWRHJ4rV8sdhF307H0cL0seCEvz9IjKQEALmThoh-x_dBNNBI2C_5X7c.jpg?r=529",
    vedioid:"7Cn716jv61s",
  },
  {
    id:7,
    name:"Kiki's Delivery Service",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTj2makwoBXv-ghrZly22xFWVZi-lQHTuxKJbl-JNZOPhux7krm8piC6wVKTvXgH6rTsvk-zbb5o-uR6m4dBAANLnGc.jpg?r=98b",
    vedioid:"CJRJveWPPRU",
  },
  {
    id:8,
    name:"The Boss Baby",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZXvYX2mzAnBYRVVXoTqEgEAqdeoOUoObYBR41XP5mdNRjp8VHc69uefJVddJhosT3tSFMXaPX9sRX2kY1uFFPzRXe3_RfBA6duc3PZ5zdaGWBdDzh-EUWcPaANQ2KzC4kYQQGWE-Z3MVllySCcVto99w9DdfHletX7AtB4-OCvU_SDglSISTCSHwvR4w09WkS-IlLMy1hyBj7PS5jiILLnG.jpg?r=c0e",
    vedioid:"k397HRbTtWI",
  },
  {
    id:9,
    name:"Rise of the Guardians",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ_zidS4Bce3EcHBIzGrIKRF7I3Qi9b4g9iecWE1LSzoAaLWY19nf1HwybxOy_zFdXCHSoJQM8pdR6LHHJDMWzvi3BQ.jpg?r=2c9",
    vedioid:"aPLiBxhoug0",
  },
  {
    id:10,
    name:"Latte and the magic waterstone",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUN4PBdmqYCKFIr5_rGunnndoqJwmvmUch6R6JMNzPdRPFywbxUaqY8rLg0R7F1dS9VC4vwZYTSY-eJbFkf01nGxTRKA8dsGD4fd8vtwKfhWW6C3oF5bjMShmfwO.jpg?r=da5",
    vedioid:"JhqFfNMA9U4",
  },
  {
    id:11,
    name:"Minions",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZNYLGeXRiisotBoxlI9vTZKWv-uCrt8t_uJBmP3NPunqr51BWl9Iq_tkCRiM7CoId7GjunahTbenxa9QffhnNbg6DU.jpg?r=253",
    vedioid:"eisKxhjBnZ0",
  },
  {
    id:12,
    name:"We Can be Heroes",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfbbZI0wSkTO9ds9ajyunL1Re2bzorEARdL5kBwvyFRVUk66rIbcQ6QZ2fIQcE9cWCLlJ6r7tcy4T9jqtcHN0WsHxtF-7usMbMFYtwfIoM3PXITYuNiOYtBsvtUN.jpg?r=d2a",
    vedioid:"njYqptz1mS4",
  },
  {
    id:13,
    name:"Beethoven",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZEyEHM5jbNLJLy8Yof6eehEpDbo0gyVB5vZWtzwEDNrBFDu1IOJn8jr2Ri1iSlL4rBCKH_AfVs5h1AQPjCgHvg3S30.jpg?r=05d",
    vedioid:"DOLsVl_UzUM",
  },
  {
    id:14,
    name:"Kung fu Panda",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdORtIGrzLY9FRirW_HPrmbSPmMT6lKYGzYUikmMI9yOn3_5VOU6JwsjiM31k8Gz-iu0n04RZFBH3KJ_cYQNbclQnjo.jpg?r=5ab",
    vedioid:"PXi3Mv6KMzY",
  },
  {
    id:15,
    name:"How to train your dragon",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU1-OEudNMu5FDujxIAvtXihnzzjLYCRsudlfK2IdkZsA60OR90gmcaloJDxYNsr5wlz-dyrkiS4s2gOPUesugVGCkE.jpg?r=fd7",
    vedioid:"oKiYuIsPxYk",
  },
  {
    id:16,
    name:"Peter Rabbit",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcfqYnjDUIthBtnk0zd2tINnXWYau_CdIbufMlkOILAJbH_st9sDQBVwqJOXI4i9gRTSU7wWZPubTNMV8bxabO38_kQ.jpg?r=cf5",
    vedioid:"7Pa_Weidt08",
  },
];

export default Cartoon;