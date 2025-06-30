
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Anniversary13 = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/surat"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Surat
        </Link>

        {/* Letter Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h1 className="font-dancing text-5xl lg:text-6xl text-pink-600 mb-4">
              Anniversary ke-13
            </h1>
            <p className="text-gray-600">13 Bulan Perjalanan Cinta Kita</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-script text-xl text-pink-600 mb-8">
                Sayangku yang terkasih,
              </p>

              <p>
                Hari ini menandai 13 bulan perjalanan cinta kita yang begitu indah dan penuh makna. 
                Rasanya baru kemarin kita memulai cerita ini, namun begitu banyak kenangan indah 
                yang telah kita ukir bersama.
              </p>

              <p>
                Dalam setiap momen yang kita lalui, aku semakin yakin bahwa kamu adalah 
                orang yang tepat untukku. Terima kasih telah menjadi sumber kebahagiaan, 
                inspirasi, dan cinta yang tak terbatas dalam hidupku.
              </p>

              <p>
                Setiap hari bersamamu adalah hari yang spesial. Setiap tawa yang kita bagi, 
                setiap pelukan hangat, dan setiap kata "aku cinta kamu" yang kita ucapkan 
                adalah harta yang tak ternilai bagiku.
              </p>

              <p>
                Mari kita terus melangkah bersama, mengukir lebih banyak kenangan indah, 
                dan menjalani setiap hari dengan penuh cinta dan kebahagiaan.
              </p>

              <div className="text-center mt-12 space-y-4">
                <p className="font-script text-xl text-pink-600">
                  Dengan seluruh cinta dan kasih sayang,
                </p>
                <div className="text-4xl">💕</div>
                <p className="text-gray-500 text-sm">
                  13 Bulan Bersama • {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anniversary13;
