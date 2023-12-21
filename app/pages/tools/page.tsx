import Image from "next/image";
import Drill from "../../../public/images/Annotation 2023-12-03 211122.png";
import Tunne from "../../../public/images/Annotation 2023-12-03 211851.png";
import F797 from "../../../public/images/Annotation 2023-12-03 213938.png";
import EEE from "../../../public/images/Annotation 2023-12-03 214500.png";
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
      <div className="container mx-auto  p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border p-4">
            <Image src={Drill} height={300} width={200} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">واگن دریل(Wagon drill) </div>
              <p className="text-gray-700 text-base">
                لوازم حفاری در معدن روباز: معادن روباز به معدن‌هایی گویند که مواد معدنی روی سطح خاک
                و یا کمی پایین تر از سطح خاک قرار دارند و بنابراین برای استخراج مواد معدنی
                از آن‌ها نیازی به تونل زدن عمیق توسط دستگاه‌های حفاری نیست.
              </p>
            </div>
            <div className="px-1 py-4">
              <Link href="/pages/drill" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <Image src={Tunne} height={300} width={200} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">تونلینگ(Tunneling) و دریل ها(Drill) </div>
              <p className="text-gray-700 text-base">
                لوازم حفاری در معادن زیر زمینی: در معادن زیرزمینی، دو مشکل بزرگ بودن سنگ‌ها و نیاز به تونل زدن، باعث دشوارتر کردن فرایند
                حفاری می‌شوند.برای حفاری این نوع معادن، می‌توان از دستگاه های حفاری خارج چال و یا از دستگاه های حفاری داخل چال استفاده کرد.
              </p>
            </div>
            <div className="px-1 py-4">
              <Link href="/" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <Image src={F797} height={300} width={200} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2"> كاترپيلار 797 اف</div>
              <p className="text-gray-700 text-base">

              زماني كه كاترپيلار 797 بي را در سال 2002 معرفي كرد، آن‌را در كلاس يكي از بزرگترين دامپتراك‌هاي جهان قرار داد. شش سال بعد كاترپيلار با مدل 797 اف يك گام 
              ديگر جلوتر گذاشت و مدل قبلي خود را از نظر ظرفيت حمل بار و اسب بخار كنار زد.
               دامپتراك 797 اف يك موتور تك 20 سيلندري با توان چهار هزار اسب بخار است که 51 متر ارتفاع و 9 متر پهنا و 687.5 تن وزن دارد.
              </p>
            </div>
            <div className="px-1 py-4">
              <Link href="/pages/f767" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <Image src={EEE} height={300} width={200} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2"> لو تورنو 2350</div>
              <p className="text-gray-700 text-base">
              بزرگترين لودر پيش‌كاو جهان با چرخهاي لاستيكي زمين را با شاول 53 يارد مكعب كاوش كرده و جابجا مي‌كند. يك موتور
               ديزل 65 ليتري با توان 2300 اسب بخار اين ماشين غول آسا كه 67 فوت پهنا و 21 فوت ارتفاع دارد و بيش از 72 تن مواد را تقريبا
               44 فوت در هوا بلند مي‌كند را حركت مي‌دهد. وزن این لودر 289 تن است و از ظرفيت حمل 72 تن برخوردار است.
              </p>
            </div>
            <div className="px-1 py-4">
              <Link href="/pages/EEE" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page