const employee = {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    CompanyName: 'Super Mart of the West',
    Position: 'CEO',
    OfficeNo: '901',
   تاریخ: new Date(),
    Address: '351 S Hill St.',
    City: 'Los Angeles',
    State: 'CA',
    Zipcode: '90013',
    Phone: '+1(213) 555-9392',
    Email: 'jheart@dx-email.com',
    Skype: '@fkfdf34fd',
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
  