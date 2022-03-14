export const fewAds = [
  {
    id: 100795229,

    from: 'Kalkulator OC/AC - Onet mailingi@onet.pl',

    sent_date: '2021-12-13 09:00:03',

    is_unread: false,

    subject: 'Zaoszczędź! OC już od 230 zł',

    snippet: '',
  },
  {
    id: 100795227,

    from: 'Walutomat - Onet mailingi@onet.pl',

    sent_date: '2021-12-13 09:00:02',

    is_unread: false,

    subject: 'Wymień walutę szybko i tanio',

    snippet: 'Odbierz 50% rabatu na wymianę online',
  },
];

// @ts-ignore
export const manyAds = [...Array(10000).keys()].map((i) => {
  return {
    id: 100795229 + i,

    from: `Kalkulator OC/AC - Onet mailingi@onet.pl ${i}`,

    sent_date: `2021-12-13 09:00:03 ${i}`,

    is_unread: false,

    subject: `Zaoszczędź! OC już od 230 zł ${i}`,

    snippet: `snippet ${i}`,
  };
});
