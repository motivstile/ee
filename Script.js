// 1. Prompt orqali 3 xil turdagi qiymat so‘raladi
let str = prompt("Matn kiriting");
let num = prompt("Raqam kiriting ");
let bool = prompt("Boolean qiymat kiriting (true yoki false)");

// 2. confirm orqali foydalanuvchidan tasdiq olish
let isConfirmed = confirm("Natijalarni ko‘rishni xohlaysizmi?");

if (isConfirmed) {
  // 3. Typeni to'g'ri o'zgartirish
  num = Number(num); // string -> number
  bool = (bool.toLowerCase() === "true"); 


}
