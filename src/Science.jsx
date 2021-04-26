import React from 'react';

const Science = [
  {
    id:1,
    name:"Interstaller",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVj8OwhVRnrcI6kyjRrmBBZiQLgljIlTzAh04ZUaaXImWToEwX_vbKZMvlKNEk5i4JDQw4ftL4cGdTeKD3-6sfL8ny0.jpg?r=a41",
    vedioid:"zSWdZVtXT7E",
  },
  {
    id:2,
    name:"Godzilla",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ3zNNfnKrKSwjlTOWsRp4FOUkcCpOhQ_I1V6UwpaKbY76dTJ633LfFf-A8AUi0bdL-w8b_-r2MVPyFWKQIqjLqRCQQ.jpg?r=052",
    vedioid:"odM92ap8_c0",
  },
  {
    id:3,
    name:"Spider Man",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRkoafH0jI9O_cEKqV-8YxKXqiaiahpufwxJrZFtW1QFmTRFq1DfO2v3uprZaiCzH-zJUli23mI9glQMGTSTQwsvafs.jpg?r=98a",
    vedioid:"N6wMMMt5DY4",
  },
  {
    id:4,
    name:"Jumanji",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT5Ay2G3v1GiylypKwoKnx9FSWdmaWZiWr8CpnfQeMnJQ0P3RVZEOp6KhuZz0l9kbWBNyFJBW3zE0m7eo0g6AVkoHzU.jpg?r=516",
    vedioid:"2QKg5SZ_35I",
  },
  {
    id:5,
    name:"Man of Steel",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSW9edTGFu205ll_htQhuHEi5GEeUoIGBz7ctqBC3XWq_s0-2-ML9p65N68iKBE-eBzTs-wL2u9ANAaanPp656aylro.jpg?r=a60",
    vedioid:"T6DJcgm3wNY",
  },
  {
    id:6,
    name:"PK",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaA44ZcsbfSyoFxKwRl-mBvJPGp0rV0Ws1S39S1aythtaFHL9eZ0UtUaauMt2BhOfSEjIv7dXBCKJxgZHZNS4etkYLA.jpg?r=8ab",
    vedioid:"SOXWc32k4zASOXWc32k4zA",
  },
  {
    id:7,
    name:"Outside the wire",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoFMON1Dc4JAAhHB1pZcrkNlrHmaicfwCp52sBHArXPy_cxmrNICv_nS5K3dYTShdkcwXt636Q5W7HYtQFQ1WkwMjtFd6Ju-yBimpwJmB0JG2YQGuDeE1He3ayX.jpg?r=d8a",
    vedioid:"u8ZsUivELbs",
  },
  {
    id:8,
    name:"Dracula Untold",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW98qwwbnD6wRxZ_63muFJ_-xgegyhT2g95lBBUX8R8Bc6Wvm-NXlSuFz1PvkTCdIdOzBdzZLJ0NO9VmARWLtLe_BAs.jpg?r=d71",
    vedioid:"_2aWqecTTuE",
  },
  {
    id:9,
    name:"Bird Box",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWIsFfh1ZP6hj3vWXSEvduxmZwncOurPmMeouF1yclUAocQH6AODdkH8HAEkYjAH1UKxiQd3qJ9J2BLUi6cBluPgXd9vMXDLo24LFdmvdFigbQq6_gaVyvySZS-7.jpg?r=1a4",
    vedioid:"o2AsIXSh2xo",
  },
  {
    id:10,
    name:"Lucy",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTm46V-Ejp87dweD6QMuTN71cEbU57omed2hpkacVD8ZDx1KsHkzx7vg6BdyTyPv_4GsS5n9Ixck2FDfT0M0f8JyhEY.jpg?r=014",
    vedioid:"MVt32qoyhi0",
  },
  {
    id:11,
    name:"Inception",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYtd5HHe6vbQXCxWahjvZ2N9AfYkzFmivG5hzyKEkGtjar27UPUzimHnd-LUi10HAi30zU02OLewSCUb0eQb0Erd0i8.jpg?r=c15",
    vedioid:"YoHD9XEInc0",
  },
  {
    id:12,
    name:"Mowgli",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvWKHS3M-8R2xRM1bA3ZL1xxokje1JVQcwuMQvhY5MuoEJOoJAelVGjRdXNuvmNcJk-2SEFWorr7HbzHz_sMKT5bBBOD3OqJhGg_8JFACyCZQmOeNGgd8WLyqeI.jpg?r=aac",
    vedioid:"OVBjPpUlQrE",
  },
  {
    id:13,
    name:"World War Z",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1uzeINNgSxsOM45jQkgK7p9ednogqlbYlu6lVX6mUgHGushF1p5fjjgAq0ial1ZN9ingu4u9v97U1GpwOWXAV56yU.jpg?r=3d1",
    vedioid:"Md6Dvxdr0AQ",
  },
  {
    id:14,
    name:"New Gods",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWrB-TpWT14PdGOtIcTb_-Z3r0aLuqw5MP5yuSGJobCW2KvsXjGgjJef3pE_vjzM4pv6oApPQvn_5tNOzmGOCgkmBn1j_q9l43rVOm3RWi0otxpXTd1D-iHcBU1z.jpg?r=f17",
    vedioid:"4_FvK9FUG2I",
  },
  {
    id:15,
    name:"The Matrix",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSof4o_SiVBC6yxgJpJc0bF7k4ynzleLB3dT66KogcjzaagAm_8cuEE2fHIMDsxfwWie42gmKlkzV-Ac59rIjL-37V0.jpg?r=ce8",
    vedioid:"vKQi3bBA1y8",
  },
  {
    id:16,
    name:"Bumblebee",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEKmZ714Zjh0wox2ksHYM2QR_lAB5nPE55kC2z9FwCr92V360QRHscU8rVasHA-b-PaxdaZYXAuKantuCejoUaL9u8.jpg?r=0ad",
    vedioid:"lcwmDAYt22k",
  },
];

export default Science;