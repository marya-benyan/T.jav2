// person name 
const name = prompt("Please enter your name:");

// gender 
const gender = prompt("Please enter your gender (male or female):").toLowerCase();

if (gender === "male") {
    alert(`Welcome, Mr. ${name}!`);
} else if (gender === "female") {
    alert(`Welcome, Ms. ${name}!`);
} else {
    alert(`Welcome, ${name}!`);
}

// Order 
const orderType = prompt("Would you like shawarma, zenger, or burger?");
let orderName = ""; 

switch (orderType.toLowerCase()) { 
    case "shawarma":
        orderName = prompt("Please enter the name of the shawarma you want to order:");
        break;

    case "zenger":
        orderName = prompt("Please enter the name of the zenger you want to order:");
        break;

    case "burger":
        orderName = prompt("Please enter the name of the burger you want to order:");
        break;

    default:
        orderName = "not available";
        alert("The order you selected does not exist.");
        break;
}

// Alert 
alert(`Your ${orderName} is getting prepared.`);

// Console print
console.log(`${name} has ordered a ${orderName} (${orderType}).`);

   // user info 
   let user_info=[name,gender,orderType,orderName];

   for (let i = 0; i < user_info.length; i++) {
   console.log(user_info[i]);
}

// تحديد العنصر
const userInfoDiv = document.getElementById("user-info");

// إنشاء عناصر جديدة
const mainDiv = document.createElement("div");
const nameParagraph = document.createElement("p");
const ol = document.createElement("ol");
const genderLi = document.createElement("li");
const ageLi = document.createElement("li");
const orderLi = document.createElement("li");

// تعبئة البيانات
nameParagraph.textContent = "Marya";
genderLi.textContent = "Gender: Female";
ageLi.textContent = "Age: 19";
orderLi.textContent = "Order: zenger";

// إضافة العناصر إلى القائمة
ol.appendChild(genderLi);
ol.appendChild(ageLi);
ol.appendChild(orderLi);

// إضافة الفقرة والقائمة إلى العنصر الرئيسي
mainDiv.appendChild(nameParagraph);
mainDiv.appendChild(ol);

// إضافة العنصر الرئيسي إلى div
userInfoDiv.appendChild(mainDiv);
