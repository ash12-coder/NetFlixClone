import React,{useState} from 'react';

 const Horror = [
  {
    id:1,
    name:"#Alive",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWwjB0gPhss9coE4tlz6za8g9KuYfE3DDUBBTwxVyw00EBroYZsrBb9dkBsrYvjkcXyHbWrRZPKFCmxwSaYr_mISnvYQtxmD0UUF_HswsD5vNLyCY8CZ2MviecHv.jpg?r=400",
    vedioid:"jQ8CCg1tOqc",
  },
  {
    id:2,
    name:"Run",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTsFJoXThR4eWlbfO4afAUXSSLSFo7HDXc48WzhCZaxyoMDcligryLk692Zi580YEpq9ouAk_CUVX8T95noqZY6MKuiSTkzj3s5f5FlYSwdKXYHSjzVwMgK8CrJ9.jpg?r=901",
    vedioid:"0Dhh7q9Us5c",
  },
  {
    id:3,
    name:"The Nun",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABesqVkEJdbsAZtGBEe12z4BbsJwjitXE2rtlJE0i5n-LRzbY1ZxKPCKff42ZqZXpPX_gJOJTvdvuWnZBRGqBwm199iY.jpg?r=3ee",
    vedioid:"EQRFgGwGeok",
  },
  {
    id:4,
    name:"Stree",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWL32AB7QTP6LEYXB0nmg_JchLRwuSgVIoPllRU-e1UqDR9AHwMvRQCsMpl8ooscr2g_7_rtFgmCnRdwkoEWtnhaLbM.jpg?r=895",
    vedioid:"gzeaGcLLl_A",
  },
  {
    id:5,
    name:"Bulbbul",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZLgVRfpzTWPp2zZzbemlfS7huzO74pB-_9YcESvm8xJZJCc6ej0gO_Cti1PdrKDfbNZEp2RWmo5g57x2FFylbV9l5TYHlK-uZ2v26R7Tu47koFmC5T0wMg8tlKK.jpg?r=152",
    vedioid:"WoytihkwgXM",
  },
  {
    id:6,
    name:"Annabelle Comes Home",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR3kbDWSag0ZK3lo63nAhylZIAXVC7f2z-NR_b_Fas8cukeOIg3xnSqYSrQAicHjvQLLuj9SX3BZ-qaxkwjj292FH9c.jpg?r=bcd",
    vedioid:"bCxm7cTpBAs",
  },
  {
    id:7,
    name:"It Chapter 2",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXeREvRYSnoikLeNlVEjEyTDkkC9CnkQUp-S_r3FU2m4mqMs2TC7zNvpr2j-596jr0yoEdIfQbNl__9WcZEa1lllZDA.jpg?r=a85",
    vedioid:"xhJ5P7Up3jA",
  },
  {
    id:8,
    name:"World War Z",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1uzeINNgSxsOM45jQkgK7p9ednogqlbYlu6lVX6mUgHGushF1p5fjjgAq0ial1ZN9ingu4u9v97U1GpwOWXAV56yU.jpg?r=3d1",
    vedioid:"Md6Dvxdr0AQ",
  },
  {
    id:9,
    name:"The Silence",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjvJkrgfi3tdqBNSZhY_zWRrSyMBQmK_Xa-w9ygX9Z4NLBc23SRJ1rWO-aLEu2XCC0zt2EJhZa4wLogO6I6xZsZYgf_8MktxMD0H5EMVylfdxmpu2JMM3Bh7Z2t.jpg?r=42a",
    vedioid:"IeHVlr6bO5M",
  },
  {
    id:10,
    name:"Mama",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZSjjBfrDDjhIT92YRd6ss6F8jFKRUfXsdedrt5XuROcZlhO_Z9HCytGTflXQnVpisvHhXHSDNes1U5-DLNoVB3fsMs.jpg?r=f51",
    vedioid:"7Am7i7uM9r0",
  },
  {
    id:11,
    name:"The Ruins",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf_IcjAu9sMs4c0W2iPp-XkhX4uFhKCoBnqNGJGPe_gzNZhQOYpn_cCNU6xC-e0wErwXlGEmz49ctBVu5g4CNYQBEx0.jpg?r=be8",
    vedioid:"x3JKmTK70Mc",
  },
  {
    id:12,
    name:"Don't Breathe",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTdtGbeQHwwKrigDlh6N_mvgz7-D8-11XU-7yncjzlQBdixWxJOSDdypLvZIJi5p3X0d-YHrCIRFlTiD1MY9eaXeT5Q.jpg?r=2dd",
    vedioid:"76yBTNDB6vU",
  },
  {
    id:13,
    name:"Split",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZztqhpCaz6wsnk8Rr1rPZI8jxbWb0OjDOghJ4EKC0eQ0ihYBkV5pIlNZW1gtnUM39ISs9kgUkpTFsRQyWgQVPdCvjs.jpg?r=baa",
    vedioid:"84TouqfIsiI",
  },
  {
    id:14,
    name:"The House Next door",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSlqkhfsfaTIW8_XOz2GYMPGt3BnfhyG6TUEUlgm52AEvmTpRKsRmzJH2dO55_PZ2k0EfHN5C-nI-sVrqGgGygh9jI.jpg?r=a05",
    vedioid:"cb0SLQRt83k",
  },
  {
    id:15,
    name:"The Ring",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABez4V5FUrVhpNj3udh1vyfU6Q_eOd6SS6_BAE1Z2cd_PSrOCs3Us21Y5QbaQLtHSGhCkKQW5A3SlawxOXlpSPp6P5PY.jpg?r=8a7",
    vedioid:"uukQ_6szDm8",
  },
];

export default Horror;