export interface BlogArticleMeta {
  slug: string
  title: string
  category: string
  description: string
  publishedAt: string
}

/**
 * ブログ全記事のメタ情報レジストリ。
 * 記事一覧・カテゴリーサイドバー・関連記事の共通データソース。
 */
const articles: BlogArticleMeta[] = [
  // --- テキーラ基礎知識 ---
  {
    slug: 'tequila-toha',
    title: 'テキーラとは？初心者が知っておきたい基礎知識完全ガイド',
    category: 'テキーラ基礎知識',
    description:
      'テキーラとは何か、原料のアガベから種類・選び方・正しい飲み方まで初心者向けに徹底解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-shurui',
    title: 'テキーラの種類を徹底解説｜ブランコ・レポサド・アネホの違いと選び方',
    category: 'テキーラ基礎知識',
    description:
      'テキーラの種類（ブランコ・レポサド・アネホ）の違いを熟成期間・味・価格で比較し、選び方を解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-mezcal',
    title: 'テキーラとメスカルの違いとは？原料・製法・味を徹底比較',
    category: 'テキーラ基礎知識',
    description:
      'テキーラとメスカルの違いを原料・産地・製法・味わいの観点から徹底比較。芋虫入りボトルの真相も解説。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'agave-toha',
    title: 'アガベとは？テキーラの原料となる植物の秘密と種類',
    category: 'テキーラ基礎知識',
    description:
      'テキーラの原料アガベ（リュウゼツラン）の生態・種類・収穫方法から、アガベシロップまで詳しく解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'history-of-tequila',
    title: 'テキーラの歴史を完全解説｜アステカのプルケから世界的ブームまで',
    category: 'テキーラ基礎知識',
    description:
      'テキーラの歴史をアステカ文明のプルケから蒸留技術の伝来、原産地呼称制度、現代のプレミアムブームまで年代を追って解説します。',
    publishedAt: '2026-06-01',
  },
  // --- テキーラの飲み方 ---
  {
    slug: 'tequila-shot-yarikata',
    title: 'テキーラショットのやり方｜塩・ライムの順番から飲み方マナーまで',
    category: 'テキーラの飲み方',
    description:
      'テキーラショットの正しいやり方を解説。塩とライムの順番、グラスの持ち方、飲み会でのマナーまで完全ガイド。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-salt-lime',
    title: 'テキーラに塩とライムをつける理由とは？本場メキシコの飲み方も解説',
    category: 'テキーラの飲み方',
    description:
      'テキーラに塩とライムを合わせる理由を歴史・味覚の両面から解説。本場メキシコの伝統的な飲み方も紹介します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-cocktail',
    title: 'テキーラで作る人気カクテル10選｜マルガリータからテキーラサンライズまで',
    category: 'テキーラの飲み方',
    description:
      'テキーラベースの人気カクテル10選をレシピ付きで紹介。マルガリータ、テキーラサンライズ、パロマなど。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'margarita',
    title: 'マルガリータの作り方｜本格レシピとアレンジ5選',
    category: 'テキーラの飲み方',
    description:
      'マルガリータの本格的な作り方を材料・分量・手順付きで解説。フローズンやフルーツアレンジ5選も紹介します。',
    publishedAt: '2026-07-02',
  },
  // --- コンカフェ ---
  {
    slug: 'concafe-toha',
    title: 'コンセプトカフェとは？種類・楽しみ方・メイドカフェとの違いを完全解説',
    category: 'コンカフェ',
    description:
      'コンセプトカフェ（コンカフェ）とは何か、種類や料金システム、メイドカフェとの違いまで初心者向けに解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concafe-hajimete',
    title: 'コンカフェ初めての方へ｜入り方・マナー・料金・楽しみ方を完全ガイド',
    category: 'コンカフェ',
    description:
      '初めてのコンカフェでも安心。入店の流れ、料金システム、マナー、楽しみ方のコツを完全ガイドします。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concafe-date',
    title: 'カップルでコンカフェデートを楽しむ方法｜初心者向け完全ガイド',
    category: 'コンカフェ',
    description:
      'カップルでコンカフェデートは楽しめる？お店選びのポイント、デート向きのコンセプト、注意点を解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concafe-birthday',
    title: 'コンカフェで誕生日を最高の思い出にする方法｜サプライズ演出アイデア集',
    category: 'コンカフェ',
    description:
      'コンカフェの誕生日イベント・バースデーサプライズの楽しみ方を解説。シャンパンタワーやキラキラテキーラ演出も。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concafe-tokyo',
    title: '東京のコンセプトカフェおすすめ完全ガイド｜エリア別・コンセプト別に紹介',
    category: 'コンカフェ',
    description:
      '東京のコンカフェをエリア別・コンセプト別に徹底ガイド。秋葉原・池袋・新宿・渋谷の特徴と選び方を解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concafe-akihabara',
    title: '秋葉原のコンカフェ完全ガイド｜人気店の選び方と楽しみ方',
    category: 'コンカフェ',
    description:
      'コンカフェの聖地・秋葉原の楽しみ方を完全ガイド。ジャンル別の特徴、お店選びのコツ、注意点まで解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'concept-cafe-tequila',
    title: 'コンセプトカフェで楽しむテキーラ完全ガイド｜人気の理由と注文の流れ',
    category: 'コンカフェ',
    description:
      'コンセプトカフェでテキーラショットが人気の理由と注文の流れ、お店とお客様の双方が楽しむためのポイントを解説します。',
    publishedAt: '2026-06-10',
  },
  // --- ガールズバー ---
  {
    slug: 'girlsbar-toha',
    title: 'ガールズバーとは？システム・雰囲気・楽しみ方を初心者向けに解説',
    category: 'ガールズバー',
    description:
      'ガールズバーとは？料金システム、キャバクラとの違い、楽しみ方まで初心者にもわかりやすく解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'girlsbar-hajimete',
    title: 'ガールズバー初めての方へ｜入り方・マナー・料金・楽しみ方ガイド',
    category: 'ガールズバー',
    description:
      '初めてのガールズバーでも安心。入店から会計までの流れ、料金相場、マナー、会話のコツを完全ガイド。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'girlsbar-tequila',
    title: 'ガールズバーでテキーラショットが定番な理由｜盛り上がる飲み方と演出',
    category: 'ガールズバー',
    description:
      'ガールズバーでテキーラショットが定番の理由と、盛り上がる飲み方・キラキラテキーラの光る演出を解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'girls-bar-tequila',
    title: 'ガールズバーで人気のテキーラショット｜スマートな頼み方とマナー',
    category: 'ガールズバー',
    description:
      'ガールズバーの乾杯シーンに欠かせないテキーラショット。人気の背景、スマートな頼み方、お店選びのコツを解説します。',
    publishedAt: '2026-06-20',
  },
  // --- エンタメ・演出 ---
  {
    slug: 'concafe-shot-moriagarikatta',
    title: 'コンカフェのショットで盛り上がる方法｜演出アイデアとおすすめお酒',
    category: 'エンタメ・演出',
    description:
      'コンカフェのショットで盛り上がる方法を解説。コール・演出アイデア、おすすめのお酒、キラキラテキーラ活用術。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'instagram-sake',
    title: 'インスタ映えするお酒｜SNSで話題のドリンク演出とキラキラボトル',
    category: 'エンタメ・演出',
    description:
      'インスタ映えするお酒とドリンク演出を紹介。光るボトル・カクテル・キラキラテキーラなどSNSで話題の演出まとめ。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-kanransha',
    title: 'テキーラ観覧車とは？人気エンタメドリンクの世界と楽しみ方',
    category: 'エンタメ・演出',
    description:
      'テキーラ観覧車とは何か、注文の流れや盛り上がる楽しみ方、シャンパンタワーとの違いまで詳しく解説します。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'tequila-entertainment',
    title: 'エンタメテキーラの世界｜テキーラ観覧車からキラキラテキーラまで',
    category: 'エンタメ・演出',
    description:
      'テキーラ観覧車、クライナーファイグリング、キラキラテキーラ。「飲む」を「遊ぶ」に変えるエンタメショットの最前線を紹介します。',
    publishedAt: '2026-07-01',
  },
]

export const useBlogArticles = () => {
  const all = articles

  const byCategory = (category: string) =>
    articles.filter((a) => a.category === category)

  const categories = [...new Set(articles.map((a) => a.category))].map((name) => ({
    name,
    count: articles.filter((a) => a.category === name).length,
  }))

  const find = (slug: string) => articles.find((a) => a.slug === slug)

  return { all, byCategory, categories, find }
}
