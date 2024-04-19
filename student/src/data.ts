export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      
      {
        id: 1,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Fee Details",
        url: "/feedetails",
        icon: "product.svg",
      }
    ]
  }
];


export const userRows = [
  {
    id: 1,
    name: "Name",
    value: "Eula",
  },
  {
    id: 2,
    name: "Father's Name",
    value: "Eula",
  },
  {
    id: 3,
    name: "CNIC NUMBER",
    value: "2345342",
  },
  {
    id: 4,
    name: "Class",
    value: "4th",
  },
  {
    id: 5,
    name: "REgistration number",
    value: "2345342",
  },{
    id: 6,
    name: "Institution",
    value: "PUBLIC SCHOOL",
  },
  {
    id: 7,
    name: "Gender",
    value: "Male",
  },
  {
    id: 9,
    name: "Email",
    value: "ali@gmail.com",
  },
  {
    id: 10,
    name: "contact number",
    value: "031235234",
  },
  {
    id: 11,
    name: "Address",
    value: "islamabad",
  },
  {
    id: 12,
    name: "Email",
    value: "ali@gmail.com",
  },
  {
    id: 13,
    name: "contact number",
    value: "031235234",
  },
  {
    id: 14,
    name: "Address",
    value: "islamabad",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    Institution: "NUST",
    Date: "03-4-2024",
    Fee: "$250.99",
    DonorName: "Abdullah",
    Lastdate: "01.05.2025",
    status: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    Institution: "punjab college",
    Date: "21-12-2022",
    DonorName: "ali",
    Fee: "$499.99",
    Lastdate: "01.02.2023",
    statuss: true,
  }
]


export const singleUser = {
  id: 1,
  title: "Muhammad Ishaq",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "ishaq1099",
    fullname: "Muhammad Ishaq",
    email: "ishaq@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  activities: [

      {
        text: "Fee has been summtted ",
        time: "3 day ago",
      },
      {
        text:"Your educatoin record is not as good as it should be",
        time: "1 week ago",
      } 
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  activities: [
    {
      text: "Fee has been summtted ",
      time: "3 day ago",
    },
    {
      text:"Your educatoin record is not as good as it should be",
      time: "1 week ago",
    }  ],
};
