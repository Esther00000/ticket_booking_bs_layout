// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import styles bundle
import "swiper/css/bundle";

// Import all of Bootstrap's JS
import "./style/style.scss";
import * as bootstrap from "bootstrap";

let catagoryData = [
  "演出",
  "音樂",
  "舞蹈",
  "戲劇",
  "音樂會",
  "課程講座",
  "社群活動",
  "展覽",
  "研討會",
  "電影",
  "電音派對",
  "遊戲競賽",
  "親子",
  "藝文活動",
  "運動",
  "交通旅遊",
  "美食",
  "資訊科技",
  "聯誼",
  "戶外",
  "線上活動",
];
let activitiesData = [
  {
    title: "邪典電影派對——房間",
    date: "19 MAY 2023",
    catagory: "電影",
    imageUrl: "src/images/event/01.jpg",
    content:
      "你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...",
  },
  {
    title: "怪舞俱樂部",
    date: "23 MAY 2023",
    catagory: "演出",
    imageUrl: "src/images/event/02.jpg",
    content:
      "覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...",
  },
  {
    title: "哈利波特馬拉松",
    date: "30 MAY 2023",
    catagory: "研討會",
    imageUrl: "src/images/event/03.jpg",
    content:
      "每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...",
  },
  {
    title: "皮卡丘排球大賽",
    date: "12 June 2023",
    catagory: "演出",
    imageUrl: "src/images/event/04.jpg",
    content:
      "還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...",
  },
  {
    title: "酒精路跑",
    date: "25 June 2023",
    catagory: "社群活動",
    imageUrl: "src/images/event/05.jpg",
    content:
      "身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。",
  },
  {
    title: "展覽——我的房間",
    date: "9 July 2023",
    catagory: "展覽",
    imageUrl: "src/images/event/06.jpg",
    content:
      "每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。",
  },
  {
    title: "野營音樂祭",
    date: "19 MAY 2023",
    catagory: "演出",
    imageUrl: "src/images/event/07.jpg",
    content:
      "喜歡山水、喜歡音樂嗎？一起在溪邊來場浪漫的沉浸式森林活動吧！結合四大戶外探索類別、超過 15 項體驗與工作坊、新興音樂人的草地演唱。",
  },
  {
    title: "疊疊樂大賽",
    date: "19 MAY 2023",
    catagory: "遊戲競賽",
    imageUrl: "src/images/event/08.jpg",
    content:
      "來到七星潭會想到什麼呢？絕對是數也數不清的扁扁石頭吧！有這項技能卻沒有機會大展身手的你，展露頭角的機會來囉！",
  },
  {
    title: "返老還童-制服聯誼",
    date: "18 MAY 2023",
    catagory: "聯誼",
    imageUrl: "src/images/event/09.jpg",
    content:
      "由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！",
  },
  {
    title: "野外求生17天",
    date: "19 MAY 2023",
    catagory: "戶外",
    imageUrl: "src/images/event/10.jpg",
    content:
      "野外求生體驗，我們將在沒有水、沒有電的自然環境裡，學習各項生存技能，課程內容包含生火、水源取得及淨化、射箭、木食器製作、無具野炊、野地編繩和狩獵技能...",
  },
  {
    title: "耳熟能詳音樂祭",
    date: "19 MAY 2023",
    catagory: "演出",
    imageUrl: "src/images/event/11.jpg",
    content:
      "對你來說聽都沒聽過的團，但是音樂一下保證跟著唱，重磅邀請各界隱藏天籟歌手、天團，不想曬太陽也可以在樹下當 KTV 跟著唱，唱不出來服務台報到立馬退費！",
  },
  {
    title: "野營發呆大賽",
    date: "19 MAY 2023",
    catagory: "遊戲競賽",
    imageUrl: "src/images/event/12.jpg",
    content:
      "你也是那種動不動就容易放空、神遊的人嗎？這輩子靠這技能出頭的機會來了，在恆春山林一起神遊、盡情地發呆吧！冠軍可以得到價值十萬的綿豆腐床墊一張！",
  },
];

const swiperHero = new Swiper(".mySwiper", {
  loop: true,
  speed: 500,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//初始化Swiper物件，第一個參數對照你swiper的class
const swiper = new Swiper(".marquee", {
  slidesPerView: "auto", //一個view的投影片數量，預設為1。如果沒寫這個，若投影片文字過長就會換行
  allowTouchMove: true, //不讓使用者觸碰移動slide
  autoplay: {
    delay: 0, //自動播放不延遲
    disableOnInteraction: false, //不因使用者觸碰而停止自動播放
  },
  loop: true, //反覆循環
  speed: 10000, //投影片之間的過渡持續時間（以毫秒為單位），數字愈大跑愈慢
});
function init() {
  renderCatagoryTags();
  renderActivities();
  homeAni();
}

function renderCatagoryTags() {
  let catagoryTemplateString = "";
  const tagsHTML = document.querySelector(".js-tags");
  catagoryData.forEach((tag) => {
    catagoryTemplateString += `<li><a href="#" class="tag">${tag}</a></li>`;
  });
  tagsHTML.innerHTML = catagoryTemplateString;
}
function renderActivities() {
  const activitiesCards = document.querySelector(".js-activity-cards");
  let activitiesTemplateString = "";
  activitiesData.forEach((activity) => {
    let { title, date, imageUrl, content, catagory } = activity;
    activitiesTemplateString += `
    <div class="col">
      <div class="card">
        <div class="card-title">${date}</div>
        <div class="card-body">
          <a
            class="card-img"
            href="detail.html"
            style="background-image: url(../${imageUrl})"
          ></a>
          <div class="card-text">
            <h5>${title}</h5>
            <p>
              ${content}
            </p>
          </div>
        </div>
        <div class="card-btns">
          <a href="#" class="btn-left">
            <img
              src="../src/images/sparkler.png"
              alt="small logo"
              class="img-fluid"
              width="24"
              height="24"
            />
            <span>${catagory}</span>
          </a>
          <a
            href="#"
            class="btn-right"
            data-bs-toggle="modal"
            data-bs-target="#joinModal"
            >開賣中<i class="icofont-rounded-double-right"></i
          ></a>
        </div>
      </div>
    </div>
    `;
  });
  activitiesCards.innerHTML = activitiesTemplateString;
}
function preloader() {
  let tl = gsap.timeline();
  tl.to(".loader-wrapper", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
  });
  tl.to(".bar", {
    yPercent: -100,
    opacity: 0,
    stagger: {
      amount: 1.5,
      from: "edges",
    },
    ease: "power4.inOut",
  });
  tl.to(".preloader", {
    display: "none",
  });
  tl.from("header", {
    opacity: 0,
    y: 100,
  });
  tl.from(".mySwiper", {
    scale: 0,
  });
  tl.from("section", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
  });
  tl.from("footer", {
    opacity: 0,
    y: 100,
  });
  return tl;
}

// cate-card
gsap.from(".cate-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".gsap-cate",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none resume reset",
  },
});
// recent
gsap.from(".gsap-recent .title-box", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".gsap-recent",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none resume reset",
  },
});

gsap.from(".gsap-recent .card", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".gsap-recent .row",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none resume reset",
  },
});
// online
let online = gsap.timeline({
  scrollTrigger: {
    trigger: ".gsap-online",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none resume reset",
  },
});
online.from(".gsap-online .title-box", {
  y: 100,
  opacity: 0,
});
online.from(".gsap-online .online-img", {
  x: -300,
  opacity: 0,
});
online.from(".gsap-online .online-text", {
  x: 300,
  opacity: 0,
});
// activity
let activity = gsap.timeline({
  scrollTrigger: {
    trigger: ".gsap-activity",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none resume reset",
  },
});
activity.from(".gsap-activity .col", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});
activity.from(".marquee", {
  scale: 0,
  stagger: 0.5,
});
// footer
let bottom = gsap.timeline({
  scrollTrigger: {
    trigger: ".gsap-home-bottom",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reset",
  },
});
bottom.from(".gsap-home-bottom", {
  y: 100,
  opacity: 0,
});
bottom.from(".gsap-home-bottom-2", {
  y: 100,
  opacity: 0,
});

window.addEventListener("load", () => {
  preloader();
});

init();
