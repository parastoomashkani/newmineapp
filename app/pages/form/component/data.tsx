const employee = {
  ایمیل : '',
  Password: '',
  نام: 'Peter',
  تاریخ: null,
  VacationDates: [null, null],
  Country: '',
  شهر : null,
  ادرس : '',
  تلفن : '',
  Accepted: false,
  };
  
const positions = [
    'HR Manager',
    'IT Manager',
    'CEO',
    'Controller',
    'Sales Manager',
    'Support Manager',
    'Shipping Manager',
  ];
  const countries = [
    "آذربایجان شرقی",
 "آذربایجان غربی",
"اردبیل",
 "اصفهان",
 "البرز",
	"ایلام",
	"بوشهر",
 "تهران",
	"چهارمحال و بختیاری",
	"خراسان جنوبی",
	"خراسان رضوی",
	"خراسان شمالی",
	"خوزستان",
	"زنجان",
	"سمنان",
 "سیستان و بلوچستان",
 "فارس",
	 "قزوین",
	"قم",
	 "کردستان",
	 "کرمان",
	 "کرمانشاه",
	 "کهگیلویه وبویراحمد",
	 "گلستان",
	"گیلان",
	 "لرستان",
	"مازندران",
 "مرکزی",
	"هرمزگان",
	"همدان",
	"یزد"
  ]
  export const priorities = [ 'شرکت/سازمان', 'شخصی '];
  export default {
    getEmployee() {
      return employee;
    },
    getPositions() {
        return positions;
      },
      getCountries() {
        return countries;
      },
  };
  