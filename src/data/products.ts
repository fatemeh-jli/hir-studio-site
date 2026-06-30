export type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  tag: string;
};

import medad from "../../assets/1medad.png";
import darchin from "../../assets/6darchin.png";
import ring from "../../assets/11ring.png";
import nahang from "../../assets/16nahang.png";
import gerdoo from "../../assets/21gerdoo.png";
import dayere from "../../assets/26dayere.png";
import senjed from "../../assets/31senjed.png";

export const products: Product[] = [
  { id: 1, name: "مداد چوبی", price: "۸۵۰٬۰۰۰", img: medad, tag: "قلم" },
  { id: 2, name: "دارچین", price: "۱٬۲۰۰٬۰۰۰", img: darchin, tag: "آشپزخانه" },
  { id: 3, name: "گزّه", price: "۲٬۸۰۰٬۰۰۰", img: ring, tag: "حلقه" },
  { id: 4, name: "نهنگ", price: "۳٬۴۰۰٬۰۰۰", img: nahang, tag: "آشپزخانه" },
  { id: 5, name: "گردو", price: "۴٬۲۰۰٬۰۰۰", img: gerdoo, tag: "کاسه" },
  { id: 6, name: "دایره", price: "۲٬۱۰۰٬۰۰۰", img: dayere, tag: "تزئینی" },
  { id: 7, name: "سنجد", price: "۳٬۶۰۰٬۰۰۰", img: senjed, tag: "کاسه" },
];