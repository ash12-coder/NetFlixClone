import React from 'react';

const Action = [
  {
    id:1,
    name:"Godzilla: king of Monsters",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-LOYQMPFjqruaTsAeS82isB4JDNCAKARqjcaWkVuED5G30aC6IjFQyGI8gh-qHjX1Z7DkCQpKO_dFCE-9zQnawOVk.jpg?r=b5a",
    vedioid:"QFxN2oDKk0E",
  },
  {
    id:2,
    name:"Extraction",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7",
    vedioid:"L6P3nI6VnlY",
  },
  {
    id:3,
    name:"Jurassic World",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa85v-mk_WBILFHjeSVgOUBr2ExNKLvAX47QdJ-P2NdrxYjTN52co7OEYaJcmzjYOS-I1-TL3kU_rt3i9enYXDDtMjI.jpg?r=5a8",
    vedioid:"RFinNxS5KN4",
  },
  {
    id:4,
    name:"John Wick",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdIgevNNAL-UcewatQHC7cPfvwm8CuHAXHTBGXxn_-gbJ2D-8mMtoa40SvaosRDVzPHOYh6exb775b2GGv8kcaTUROU.jpg?r=2c1",
    vedioid:"2AUmvWm5ZDQ",
  },
  {
    id:5,
    name:"The Old Guard",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjNneWs0FW15zkfazr9Vl_rQtlEOSur1f897sgv6sGFZn7iFqamEAqNMX4yUmQB8m0CNWUL9HAwGN_T07Qb1W3zR_0uPbOBHWN0b5IwOZjkgMRDztlm3GYu7IGN.jpg?r=c52",
    vedioid:"ZMcFM3fWKTw",
  },
  {
    id:6,
    name:"Fast Five",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABebnvIAr8qme2M9b1ErzRdoLSm_zQ_fIwsklYULM96jjXSRdN_uvi9CmRmuQRJU6c-YhG436BpGFRB6JM9r958CHo1E.jpg?r=2e2",
    vedioid:"mw2AqdB5EVA",
  },
  {
    id:7,
    name:"Gods of Egypt",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ2804JZk6MwzGeahCVPkJwsARNUqBl65Xg7iCiXAu1H4qwCiRaBgclqPnGwT6C2wlZGSzHUd4dXRdMpQfueFTCPEw4.jpg?r=903",
    vedioid:"IJBnK2wNQSo",
  },
  {
    id:8,
    name:"Fast & Furious 6",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTTsvv62K3RyC3Joql8TvDyAOnOWVuxCD9qo-4_rt5FOx13fvBROGFfqhA1mUyoxGAtwjWo2FHNq-pnYEImWIArMKyg.jpg?r=d07",
    vedioid:"dKi5XoeTN0k",
  },
  {
    id:9,
    name:"Furious 7",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUEYpMP2MOKlgxgaJ5-0F0uA96jsHoAD3iUCe6NoyGLV9VbuUAwQmSUFWfO7hmq3DXbFS5RdzqSUA_5UwkrOkGORylk.jpg?r=603",
    vedioid:"Skpu5HaVkOc",
  },
  {
    id:10,
    name:"Gangs of Wassaypur",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV_Luib23WeO2Qd8o1hho-YfA-EmZMpMrxWvgopNIjWobAttq9TbF8-gyO6fUf1vAlHCIU4HIBQf_QkebO7Tns5ipFk.jpg?r=30f",
    vedioid:"AkWDkXcMY",
  },
  {
    id:11,
    name:"Naam Shabana",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABehfcXX4zztRoVHBoV-w6THseqka_dp_nNQ5Z2Q6ZD09vC2XdY6x71rc3pfz2Q-Jn6qe4B2ZVy817uAsYlNG-OLYPOM.jpg?r=14d",
    vedioid:"upyeAQv4pUs",
  },
  {
    id:12,
    name:"Escape Plan",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ6d53Tbtl00U2p7lLZ65TVdTSMEiNqU3xy4IU5vUEXE1ezwEXSaSZL6W-VAM1cBSv4UGILYCxBV7-f7Ow2MRLHxKj0.jpg?r=4ec",
    vedioid:"CI4EjV_x_PQ",
  },
  {
    id:13,
    name:"Now You See Me 2",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxhNovT76uqBFuptb1L1FyStCqxcTAbofq5NoNAb70aq42C0p2GOApmU-qckeH4LnrdR9NBnCkYXSvm-uaRPDWGvlk.jpg?r=02e",
    vedioid:"4I8rVcSQbic",
  },
  {
    id:14,
    name:"Malang",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUGCfnDUHyUwpdIX0W7-UK0SmRGIX1LuKyl5WfibF5mZeyG_bD4FHWKClPCX1Lrij_xKXvL3sfxGBxzXkzkLBNnfPY.jpg?r=9bb",
    vedioid:"sft5baUuzQs",
  },
  {
    id:15,
    name:"6 Underground",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXtMvXBTUWWf-gj5gsHji3LFHXRGHT1AayQqleH5Pq39lNNlbhYdFHf6BVLCKU7c-oFLTkTMqtt9xCheKGuUuuJK07G-2AGdgWyU5XKau2nhD0r5h8QAXmMh47sN.jpg?r=07a",
    vedioid:"YLE85olJjp8",
  },
  {
    id:16,
    name:"Wild Dog",
    source:"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbAHkTj8aGxpzWlA1MffKRFIaBFZJNlyJhE-0Tvu9XKuogNHG_t40DhRgSUR9pBmR-VRgMwVIMTZXlwqJUVMBednl8w.jpg?r=a76",
    vedioid:"2bKdG12aKyY",
  },
];

export default Action;