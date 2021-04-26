import React from 'react';

const Drama = [
  {
    id:1,
    name:"Ram Prasad Ki Tehrvi",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZnJyONA6zfFZQz2Zj-5M1KakqcnnZVZq7XncHFR6LPF-Rz01EJejLNCLyytr2CHk9QBsrMGuB9HigKWaUobKMfiq3k.jpg?r=c18",
    vedioid:"FuogqMTSp5M",
  },
  {
    id:2,
    name:"Mandela",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXcnKZeyL-DWaq-GcM69P6oLOl0DLzOCpzAClGcXEzCLBXyfgBEp5Wy_MnBFh69DqPGRc_UTjSXr6UdBzHn7Q88JpEQ.jpg?r=42a",
    vedioid:"ES1Oz7cW11M",
  },
  {
    id:3,
    name:"Is Love Enough? Sir",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZCN-iSpFCpC7zwXbjortC0izwlaSkqUkhdxHCh0959dh8DpXJfpULkYVjeNLbcyMchovSziiznkgfan-lBeaownQ6g.jpg?r=0e4",
    vedioid:"7vD70_5Xadc",
  },
  {
    id:4,
    name:"Gunjan Sexana:The Kargil Girl",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXWqltBnDcnH2fyWLe0vikqgxvt0SYhWImqgHBcQLqu23wZW01G-HS6SXgng3oDW_4C8hGaOcU5EU_9ForI_37bo-mVna0CXoXjGyL2FhyThSfhzMfuF9PoZQmgO.jpg?r=cbd",
    vedioid:"rtGIq9Xjnrw",
  },
  {
    id:5,
    name:"Uppena",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU5K_iPdSWU0DIjYsaxqZheewfdEYiyGNXgxu6F9lf4WGtSy42ucQujNNbqr1tPOOimSy_Qy1hiqSAKaSP9uy2CA8ZE.jpg?r=d83",
    vedioid:"fB3RcpbLvco",
  },
  {
    id:6,
    name:"Artcle 15",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa0-lUGgazKs6XfnwgIz-ipepbPQ4PpaPbi-DvRPfkxOssEFnq1-ynqx8kUzV1YCaoOQsk_6aIR3WD2JdOt8hg--YMw.jpg?r=d2c",
    vedioid:"HKOJY0cU63E",
  },
  {
    id:7,
    name:"The White Tiger",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfZtrc4MWcZ4_I81rYPNEnldGHmGpZzRnEd_GQJ97yOS9CpHr8Ce8Au4nQlslvhqgJwQZrY9OYMn7Z11LZda0uC8AqhHnZsdpQ_PpDXoQzfabPTxT2ihglBZOWqr.jpg?r=66b",
    vedioid:"35jJNyFuYKQ",
  },
  {
    id:8,
    name:"red",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcCTse9IC-HP2UeELwQqhEjk8juDTvbBaNiVwX-Ol_2KL_CnBMoHJgf4oJhlqBZWFvZL0vJIBDF0aob_mToMZQff8OQ.jpg?r=e30",
    vedioid:"M6hLhA6hsnw",
  },
  {
    id:9,
    name:"Ya Jawanni Ha Dewanni",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZb7e9uUWJT27JbQVQRr7RpINvChY-y7eBb_-Lj1cLsY0amHxM4AIAslIMcMi9XHtjV6bD3ZEO6pE6DEaEjXjL3Q8eQ.jpg?r=902",
    vedioid:"Rbp2XUSeUNE",
  },
  {
    id:10,
    name:"Tuesdays and Fridays",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQx-L5QIoGrqCTpQ0Xy-J4lGzb-iCCXAQmuwDyB-VRPV6QmUxJwHCsP4KTKEF5eOOfiy8fT1lKp7LusyqTpSSkq0RQ.jpg?r=3a0",
    vedioid:"oHsF5mlUyW0",
  },
  {
    id:11,
    name:"Dangal",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeko0x6dmPbgsa21sF42InUeuTH1W7LIG8hAipIOFf1xM6piyv4i0P1fx4-8g1NQ6VVuueYX6pWZ5J1Lb9W6BViwoc4.jpg?r=8b8",
    vedioid:"x_7YlGv9u1g",
  },
  {
    id:12,
    name:"Kabir Singh",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe5yDDbwhMqp4pLBDbSfx3CX7NvxWcCU88vIn1D4j4TY1tRs9sEBxUISvTv3Gy94-G6H4zA7lx91iiGcJJ6pmGE9wY0.jpg?r=734",
    vedioid:"RiANSSgCuJk",
  },
  {
    id:13,
    name:"Enola Holmas",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfAAGF5JxTXSOCa_7s0Ki6iHkGbb4MIdnEBHwW058sSv7IOSQZDg4QPHAqCr5sYoWmJluO74kVoFQ8TtmsAZEsEa2fI9mtlXXLXJTGYysho-cz0fmE8c4oi-PNpg.jpg?r=70d",
    vedioid:"1d0Zf9sXlHk",
  },
  {
    id:14,
    name:"Miss India",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRs-TWR8j2W7I5u3kyYJAt0Ms8I1aFrGtXJK7hFz9izwQwualfwZt6YjWYX2AfV3hXBBmMnht0c76H60aoxh7ZB9Lbo.jpg?r=ce3",
    vedioid:"r5K0bwe5NBc",
  },
  {
    id:15,
    name:"Raat Akeli Hai",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR7_7aojHQG-ZyouewoJF-407RZmNjPS8U4lzFYiF-_qP_yGw3T20kpWvSvkA2kwMgDmXT0-2_8uhcMQizWY7hEuuMj7P5HBf4tPrNpdMIMR5SCWNNIZ9ESItSqY.jpg?r=abe",
    vedioid:"uc78PxSxXMg",
  },
  {
    id:16,
    name:"Thackeray",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSs5SULJbb1G-M0hRSKkJnHRanxlOx_SfRVCpzbFiuQ942EBP9Yv7dZSl8gdb4B5iC7gZAzjboqPH-BIORkyqJOpU4s.jpg?r=589",
    vedioid:"Qqpl_sAcQF8",
  },
];

export default Drama;