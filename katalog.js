"use strict";

let modalWrapper1 = document.querySelector(".katalog_panel"),
  open1 = document.querySelector("#katalog"),
  close1 = document.querySelector("#close");

open1.addEventListener("click", () => {
  modalWrapper1.style.display = "flex";
  document.body.style.overflow = "hidden";
});

close1  .addEventListener("click", () => {
  modalWrapper1.style.display = "none";
  document.body.style.overflow = "visible";
});



let katalog = document.querySelector("#katalog_panel");
let katalog_btn = document.querySelector("#katalog");
let idmain = document.querySelector("#colse");

katalog_btn.addEventListener("click", () => {
  katalog.innerHTML = `
    <div id="panel_katalog" class="absolute w-[1200px] h-[800px] bg-white top-[40px] left-[-360px] flex p-5 justify-between pr-[200px]">
    <ul class="bg-[#ECF4FF] w-[300px] p-5">
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Kompuyuter va noutboklar</li>
       <li class="font-[500]  mb-3">Telefolar</li>
       <li class="font-[500]  mb-3">Maishiy tehnika</li>
       <li class="font-[500]  mb-3">Ekaklar uchun kiyim</li>
       <li class="font-[500]  mb-3">Ayollar uchun kiyimlar</li>
       <li class="font-[500]  mb-3">Bolalar  uchun</li>
       <li class="font-[500]  mb-3">Avtomobil mahsulotlari</li>
       <li class="font-[500]  mb-3">Gozlaik ba soglik</li>
       <li class="font-[500]  mb-3">Sport va oyin kulgu</li>
       <li class="font-[500]  mb-3">Uy hayvonlari uchun</li>
       <li class="font-[500]  mb-3">Xobbi va ijodkorlik</li>
       <li class="font-[500]  mb-3">Buyumlar</li>
       <li class="font-[500]  mb-3">Maihs kimyo</li>
       <li class="font-[500]  mb-3">Sport va oyin kulgu</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500] ">Aksesuarlar</li>
    </ul>
    <ul>
       <li class="font-[500]  mb-3">Brendlar</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Vivo</li>
       <li class="font-[500]  mb-3">Tecno</li>
       <li class="font-[500]  mb-3">Realme</li>
       <li class="font-[500]  mb-3">Xiaomi</li>
       <li class="font-[500]  mb-3">Apple</li>
       <li class="font-[500]  mb-3">Artel</li>
       <li class="font-[500]  mb-3">Nokia</li>
       <li class="font-[500]  mb-3">Infinix</li>
       <li class="font-[500]  mb-3">Onepuls</li>
       <li class="font-[500]  mb-3">ZTE</li>
       <li class="font-[500]  mb-3">Blackviu</li>
       <li class="font-[500]  mb-3">Oppo</li>
       <li class="font-[500]  mb-3">Ergo</li>
       <li class="font-[500]  mb-3">Alcatel</li>
       <li class="font-[500] ">Ego</li>
    </ul>
    <div>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>Redmi Xiomi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Huawei mobile</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
    <div>
       <ul class="mb-[60px]">
           <li>Eng ommabop</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>SEgo brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Oppo brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
    <div>
       <ul class="mb-[60px]">
           <li>Aplle brendni</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>Onepuls</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Alcatel</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
</div>
    `;
  katalog.style.display = "block";
});
idmain.addEventListener("click", () => {
  katalog.style.display = "none";
});
