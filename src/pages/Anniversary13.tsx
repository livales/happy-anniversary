
import AudioPlayer from "../components/anniversary/AudioPlayer";
import FloatingParticles from "../components/anniversary/FloatingParticles";
import ScrollTopButton from "../components/anniversary/ScrollTopButton";
import AnniversarySection, { SectionData } from "../components/anniversary/AnniversarySection";
import { useAnniversaryAnimations } from "../hooks/useAnniversaryAnimations";
import dandelionsAudio from "../assets/dandelions.mp3";

import image1 from "../assets/images/1-anniversary.jpg";
import image2 from "../assets/images/2-battlefield.jpg";
import image3 from "../assets/images/3-proud.jpg";
import image4 from "../assets/images/4-promise.jpg";
import image5 from "../assets/images/5-open.jpg";
import image6 from "../assets/images/6-future.jpg";
import image7 from "../assets/images/7-missing-you.jpg";
import image8 from "../assets/images/8-together.jpg";
import image9 from "../assets/images/9-dandelions-field.jpg";

const Anniversary13 = () => {
  // Section data with text and images
  const sections: SectionData[] = [
    {
      id: 1,
      title: "Happy 13th Month Anniversary! ❤️",
      text: "Happy Anniversary ke-13, Sayanggkuuu ❤️ Ga kerasa yaa sayang, kita udah ngelewatin satu tahun dan sekarang udah masuk ke bulan pertama di tahun kedua kita. Waktu cepet banget yaa jalannya, padahal rasanya baru kemarin aku nulis surat buat anniversary yang ke-12, sekarang udah ke-13 aja heheee.",
      image: image1,
      background: "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100",
      layout: "center",
    },
    {
      id: 2,
      title: "Our Battlefield Together 💪",
      text: "Sekarang kita lagi sama-sama di medan perang yaa sayangg, berjuang buat ningkatin ilmu, berjuang buat nyari kerja, semuanya demi masa depan kita berdua. Aku tau ini ga gampang, LDR sambil ngejar mimpi itu rasanya campur aduk. Ada hari di mana semangat banget, ada juga hari di mana rasanya cape dan pengen nyerah aja. Tapi tiap kali aku inget kamu, rasa cape itu langsung ilang gitu aja. Kamu itu beneran sumber semangat terbesarku, sayang.",
      image: image2,
      background: "bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100",
      layout: "left",
    },
    {
      id: 3,
      title: "I'm So Proud of You 🌟",
      text: "Aku liat perjuangan kamu dari jauh sini, gimana gigihnya kamu belajar hal baru, belum lagi sambil ngerjain project om kamu, dan gimana kamu tetap semangat buat terus berjuang ngirim-ngirim lamaran kerja. Sumpah, aku bangga banget sama kamu sayangg. Kamu itu cewe yang kuat dan hebat. Jangan pernah ngerasa sendirian yaa pas lagi susah. Kalau kamu ngerasa down atau sedih gegara dapet penolakan, lampiasin semua ke aku yaa. Aku siap jadi tempat sampah buat semua keluh kesah kamu, kapan pun itu. Aku pengennya kamu selalu inget, ada aku di sini yang selalu dukung kamu 100%.",
      image: image3,
      background: "bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100",
      layout: "right",
    },
    {
      id: 4,
      title: "My Promise to Be Better 🙏",
      text: "Di samping itu, aku juga sadar kalau aku masih banyak kurangnya. Aku tau kita kadang-kadang sering berantem gegara aku yang keras kepala pengen ini itu tanpa mikirin perasaan kamu. Maaf yaa sayang, kalau sifatku yang itu sering bikin kamu sedih atau cape. Aku janji, aku lagi belajar buat jadi lebih baik lagi, belajar buat lebih ngertiin kamu. Makasih yaa udah sabar banget ngadepin aku selama ini.",
      image: image4,
      background: "bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100",
      layout: "stack",
    },
    {
      id: 5,
      title: "Let's Always Be Open 💬",
      text: "Trus satu lagi yaa sayang, aku pengennya kalau kamu lagi sedih, moodnya tiba-tiba berubah, atau ada apapun yang ngeganjel di hati, langsung bilang ke aku yaa. Biar aku ga salah sangka dan ga mikir kamu tiba-tiba jutek sama aku, padahal kamunya lagi ada masalah. Aku justru lebih seneng kalau kamu terbuka, jadi aku bisa lebih ngertiin kamu. Jangan dipendem sendiri yaa, sayang.",
      image: image5,
      background: "bg-gradient-to-br from-cyan-100 via-teal-50 to-emerald-100",
      layout: "left",
    },
    {
      id: 6,
      title: "Our Future Dreams ✨",
      text: 'Kadang aku suka senyum-senyum sendiri ngebayangin nanti kalau kita udah sama-sama dapet kerjaan yang kita impiin. Mungkin LDR ini cuma "Training Arc" kita aja sayangg, buat ngebuktiin seberapa kuat kita. Aku yakin banget, setelah ini semua, bakalan ada "Happy Ending Arc" di mana kita bisa ketemu tiap hari tanpa harus dibatesin jarak lagi. Ga sabar banget nungguin momen itu, di mana kita bisa ngejar mimpi-mimpi kita yang lain bareng-bareng.',
      image: image6,
      background: "bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100",
      layout: "overlay",
    },
    {
      id: 7,
      title: "Missing You So Much 💕",
      text: "Aku kangen banget sama kamu, cantikku. Kangen jalan-jalan ga jelas sama kamu, kangen makan mie ayam bareng, kangen ketawa-ketawa sampe sakit perut, kangen semua hal-hal sederhana yang biasa kita lakuin bareng. Tapi gapapa, aku simpen dulu rasa kangen ini, buat jadi bahan bakar semangat aku di sini.",
      image: image7,
      background: "bg-gradient-to-br from-lime-100 via-yellow-50 to-orange-100",
      layout: "right",
    },
    {
      id: 8,
      title: "We Can Do This Together 💪💕",
      text: "Kita pasti bisa lewatin ini semua bareng-bareng, sayang. Jangan pernah ragu sama hubungan kita dan sama diri kamu sendiri yaa. Kamu itu hebat, dan kamu pantes dapetin semua yang terbaik. Semangat terus yaa cantiknya aku satu-satunyaa! I love you more and more every single day, sayanggkuuu.",
      image: image8,
      background: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100",
      layout: "center",
    },
    {
      id: 9,
      title: "Song For You🌼",
      text: "Btw, ini lagu yang ku dengerin sambil bikin web ini buat kamu.\n\n\"dandelions\" - Ruth B.\n\n'Cause I'm in a field of dandelions\nWishing on every one that you'd be mine, mine\nAnd I see forever in your eyes\nI feel okay when I see you smile, smile'\n\nAkuu sayang kamu selaluu, cintakuuu 💖",
      image: image9,
      background: "bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100",
      layout: "stack",
    },
  ];

  const sectionsRef = useAnniversaryAnimations(sections);

  return (
    <div className="relative overflow-hidden">
      <AudioPlayer audioSrc={dandelionsAudio} />
      <FloatingParticles />
      <ScrollTopButton />

      {/* Sections */}
      {sections.map((section, index) => (
        <AnniversarySection
          key={section.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          section={section}
          index={index}
          totalSections={sections.length}
        />
      ))}
    </div>
  );
};

export default Anniversary13;
