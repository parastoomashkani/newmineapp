import Aticle from "./component/Aticle"
const articleData = [
    {
        title: "معدن طلا ",
        name: " فرهاد ملایی ",
        doc: "فایل انگلیسی این مقاله با شناسه 2007371 رایگان است. ترجمه چکیده این مقاله زمین شناسی در همین صفحه قابل مشاهده است. شما می توانید پس از بررسی این دو مورد نسبت به خرید و دانلود مقاله ترجمه شده اقدام نمایید برای دریافت لینک دانلود مقاله آدرس ایمیل خود را درج نمایید"
    },
    {
        title: "معدن طلا ",
        name: " فرهاد ملایی ",
        doc:
         "فایل انگلیسی این مقاله با شناسه 2007371 رایگان است. ترجمه چکیده این مقاله زمین شناسی در همین صفحه قابل مشاهده است. شما می توانید پس از بررسی این دو مورد نسبت به خرید و دانلود مقاله ترجمه شده اقدام نمایید برای دریافت لینک دانلود مقاله آدرس ایمیل خود را درج نمایید "
    }
]

const page = ({ }) => {
    return (
        <div className="container mx-auto bg-gray-50 min-h-screen p-8 antialiased">
        <div>
           <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
          
           {articleData.length === 0 && <p> صفحه ایی پیدا نشود </p>}
          {articleData.map((item, index) => (
            <Aticle

            key={index}
            title={item.title}
            name={item.name}
            doc={item.doc}
    
               />
            ))}
        </div>
        </div>
        </div>
    )
}

export default page