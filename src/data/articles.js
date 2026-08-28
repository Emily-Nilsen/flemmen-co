// Presseomtale. `highlight: true` løfter artikkelen opp i "oppstart"-bolken
// rett under introteksten (ønske fra Ane, e-post 27.08.2026); resten vises i
// Media-seksjonen nederst på forsiden.
export function getArticles(t) {
  return [
    {
      id: 8,
      title: t('article_title_08'),
      articleUrl:
        'https://www.dn.no/jus/kryptovaluta/svindel/kriminalitet/blir-kalt-norges-storste-bedragerisak-tre-av-fem-tiltalte-motte-ikke-opp-i-rettssalen/2-1-1872504',
      imageUrl: '/media/article_07.webp',
      content: t('article_text_08'),
      date: t('article_date_08'),
      dateTime: '2025-09-16',
    },
    {
      id: 1,
      title: t('article_title_01'),
      articleUrl:
        'https://www.advokatbladet.no/elden-oppstart-av-advokatkontor-partner/partner-forlater-elden-etter-16-ar-starter-for-seg-selv/199683',
      imageUrl: '/media/article_3.webp',
      content: t('article_text_01'),
      date: t('article_date_01'),
      dateTime: '2023-09-01',
    },
    {
      id: 2,
      title: t('article_title_02'),
      articleUrl: 'https://advokatwatch.no/nyheter/karriere/article16395400.ece',
      imageUrl: null,
      content: t('article_text_02'),
      date: t('article_date_02'),
      dateTime: '2023-08-31',
    },
    {
      id: 3,
      title: t('article_title_03'),
      articleUrl:
        'https://www.finansavisen.no/jus/2023/08/31/8032852/flemmen-forlater-elden-med-alle-egne-klienter?zephr_sso_ott=hTqGBr',
      imageUrl: '/media/article_2.webp',
      content: t('article_text_03'),
      date: t('article_date_03'),
      dateTime: '2023-08-31',
    },
    {
      id: 4,
      title: t('article_title_04'),
      articleUrl:
        'https://www.dn.no/jus/christian-flemmen-johansen/advokatfirmaet-elden/elden/toppadvokat-forlater-elden/2-1-1508933',
      imageUrl: '/media/article_1.webp',
      content: t('article_text_04'),
      date: t('article_date_04'),
      dateTime: '2023-08-30',
    },
    {
      id: 7,
      title: t('article_title_05'),
      articleUrl:
        'https://www.finansavisen.no/jus/2023/10/05/8039062/flemmen-gar-sin-egen-vei?zephr_sso_ott=PqfDLl',
      imageUrl: '/media/article_kapital.webp',
      content: t('article_text_05'),
      date: t('article_date_05'),
      dateTime: '2023-10-05',
      aspect: 'portrait',
      highlight: true,
    },
    {
      id: 9,
      title: t('article_title_09'),
      articleUrl: 'https://advokatwatch.no/nyheter/advokater/article19264566.ece',
      imageUrl: '/media/article_nsk_partner.webp',
      content: t('article_text_09'),
      date: t('article_date_09'),
      dateTime: '2026-05-05',
      aspect: 'portrait',
      highlight: true,
    },
    {
      id: 6,
      title: t('article_title_06'),
      articleUrl:
        'https://www.finansavisen.no/jus/2024/06/22/8145720/konsulent-frifunnet-for-bedragerier?zephr_sso_ott=XwRgN1',
      imageUrl: '/media/article_6.webp',
      content: t('article_text_06'),
      date: t('article_date_06'),
      dateTime: '2024-06-22',
    },
    {
      id: 5,
      title: t('article_title_07'),
      articleUrl: 'https://forsvarsadvokat.no/',
      imageUrl: '/media/article_0.webp',
      content: t('article_text_07'),
      date: '',
      dateTime: '2007-09-01',
    },
  ]
}

export function getHighlightArticles(t) {
  return getArticles(t).filter((a) => a.highlight)
}

export function getMediaArticles(t) {
  return getArticles(t).filter((a) => !a.highlight)
}
