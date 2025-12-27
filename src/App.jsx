import React, { useState } from 'react';
import { 
  MapPin, Calendar, Clock, X, Share2, Music, Coffee, Camera, Utensils, 
  ArrowRight, ChevronDown, ChevronUp, Users, Image as ImageIcon, Youtube, 
  DollarSign, Star, Map as MapIcon, Leaf, CloudFog, Mountain, Tent, 
  CheckSquare, Info, Sunset, Sunrise, AlertTriangle, ExternalLink, Activity
} from 'lucide-react';

// --- 資料區：未來行程 (下一站，去哪裡) ---
const futureTrips = [
  {
    id: 'f3',
    title: "🏔️ 四天三夜山岳挑戰行程",
    date: "2025.12 (日期未定)",
    location: "苗栗・泰安",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", // 壯闊山岳意象
    description: "大板根、虎山、加里山精華路線規劃。這是一場挑戰體能與意志的縱走之旅，串聯了泰安溫泉與神仙谷的自然之美。",
    tags: ["百岳挑戰", "中級山", "大板根", "虎山", "加里山"],
    budget: "預算：TWD 6,000 / 人 (含車宿油資)",
    itinerary: [
      {
        day: 1,
        title: "啟程與車宿 (Day 1)",
        note: "主題色：Sky Blue 🏠",
        activities: [
          { 
            time: "13:30", 
            icon: <MapPin size={16} className="text-sky-500"/>, 
            title: "家中出發 → 苗栗泰安", 
            description: "車程約 3 小時 (246 公里)，請注意行車安全。" 
          },
          { 
            time: "16:30", 
            icon: <Tent size={16} className="text-sky-500"/>, 
            title: "抵達都瑪斯民宿", 
            description: (
              <div className="space-y-2">
                <p>📍 抵達 <a href="https://www.google.com/maps/search/?api=1&query=都瑪斯民宿" target="_blank" className="text-sky-600 underline hover:text-sky-800 inline-flex items-center gap-1">都瑪斯民宿 <ExternalLink size={12}/></a></p>
                <p className="text-slate-500 text-sm">⛺️ 車宿地點 (有雨棚區，需提前預訂)，檢查裝備，準備明日長程行程。</p>
              </div>
            )
          }
        ]
      },
      {
        day: 2,
        title: "大板根挑戰 (Day 2)",
        note: "主題色：Deep Yellow 🌲 (長距離挑戰)",
        activities: [
          { 
            time: "06:00", 
            icon: <Coffee size={16} className="text-yellow-600"/>, 
            title: "起床、早餐", 
            description: "整理長程裝備，準備迎接 20K 的挑戰。" 
          },
          { 
            time: "07:50", 
            icon: <Mountain size={16} className="text-yellow-600"/>, 
            title: "雪見登山口起登 (23.7K)", 
            description: (
              <div className="space-y-3">
                <p>預計來回：8 小時，20 公里，挑戰體能極限。</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                  <p className="font-bold mb-2">🗺️ 路線詳情：</p>
                  <p>雪見遊客中心(23.7K) → 東洗水山登山口 → 北坑山登山口 → 集材場 → <span className="font-bold text-yellow-700">北坑山</span> → <span className="font-bold text-yellow-700">大板根</span> (折返)</p>
                </div>
                
                <div className="flex flex-col gap-2 text-sm">
                   <a href="https://hiking.biji.co/index.php?q=review&act=info&review_id=30654" target="_blank" className="text-yellow-700 hover:text-yellow-900 bg-yellow-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     📄 雪見大板根順登北坑山 (山友心得)
                   </a>
                   <a href="https://hiking.biji.co/index.php?q=trail&act=gpx_detail&id=5235591" target="_blank" className="text-green-700 hover:text-green-900 bg-green-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     🗺️ 雪見大板根 (GPX 路線檔)
                   </a>
                   <a href="https://www.youtube.com/results?search_query=%E9%9B%AA%E8%A6%8B+%E5%A4%A7%E6%9D%BF%E6%A0%B9+%E5%8C%97%E5%9D%91%E5%B1%B1" target="_blank" className="text-red-700 hover:text-red-900 bg-red-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     🎬 相關影片介紹
                   </a>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-md flex items-start gap-2 text-sm">
                  <Info size={16} className="shrink-0 mt-0.5"/>
                  <span><strong>重要提醒：</strong> 此為長距離徒步，務必攜帶足夠的行動糧和水，並注意體力分配。</span>
                </div>
              </div>
            )
          }
        ]
      },
      {
        day: 3,
        title: "虎山步道 (Day 3)",
        note: "主題色：Vibrant Red 🧗 (陡上危險)",
        activities: [
          { 
            time: "07:00", 
            icon: <MapIcon size={16} className="text-red-600"/>, 
            title: "前往泰安溫泉風景區", 
            description: "車程約 1 小時 13 分，前往下一車宿點附近。" 
          },
          { 
            time: "08:30", 
            icon: <Mountain size={16} className="text-red-600"/>, 
            title: "虎山步道起登", 
            description: (
              <div className="space-y-3">
                <p>來回：5 小時，9 公里。注意後半段有陡上。</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                  <p className="font-bold mb-2">🗺️ 路線詳情：</p>
                  <p>停車場 → 水雲吊橋 → 溪谷叉路 (開始陡上) → 加里山叉路 → <span className="font-bold text-red-700">虎山</span> (折返)</p>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                   <a href="https://hiking.biji.co/index.php?q=trail&act=detail&id=471" target="_blank" className="text-blue-700 hover:text-blue-900 bg-blue-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     📄 虎山步道詳細資訊
                   </a>
                   <a href="https://hiking.biji.co/index.php?q=trail&act=gpx_detail&id=5235258" target="_blank" className="text-green-700 hover:text-green-900 bg-green-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     🗺️ 水雲吊橋至虎山 (GPX)
                   </a>
                </div>

                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-md flex items-start gap-2 text-sm shadow-sm">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5"/>
                  <span><strong>🚨 極重要提醒：陡上危險！</strong><br/>虎山步道後半段有拉繩攀爬路段，山徑碎石易滑，<strong>務必穿戴止滑鞋、手套，並使用登山杖。</strong></span>
                </div>
              </div>
            )
          },
          { 
            time: "16:00", 
            icon: <Tent size={16} className="text-red-600"/>, 
            title: "前往知泉露營區", 
            description: <span>前往 <a href="https://www.google.com/maps/search/?api=1&query=知泉露營區" target="_blank" className="text-red-600 underline hover:text-red-800">知泉露營區</a>，最後一晚車宿點。</span>
          }
        ]
      },
      {
        day: 4,
        title: "加里山與賦歸 (Day 4)",
        note: "主題色：Teal Green ⛰️ (P型縱走)",
        activities: [
          { 
            time: "07:30", 
            icon: <Mountain size={16} className="text-teal-600"/>, 
            title: "加里山大坪登山口起登", 
            description: (
              <div className="space-y-3">
                <p>來回：7 小時，9.95 公里。台灣小百岳 No.36。</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                  <p>路線：大坪登山口 → 舊鐵道 → 避難山屋 → <span className="font-bold text-teal-700">加里山</span> → 杜鵑嶺 → 鹿場登山口接駁段。</p>
                </div>
                
                <div className="flex flex-col gap-2 text-sm">
                   <a href="https://hiking.biji.co/index.php?q=trail&act=detail&id=249" target="_blank" className="text-blue-700 hover:text-blue-900 bg-blue-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     📄 加里山大坪線 P 形縱走
                   </a>
                   <a href="https://hiking.biji.co/index.php?q=trail&act=gpx_detail&id=414478" target="_blank" className="text-green-700 hover:text-green-900 bg-green-50 px-2 py-1 rounded inline-flex items-center gap-2 w-fit">
                     🗺️ 加里山-大坪林道 GPX
                   </a>
                </div>

                <div className="bg-teal-50 border border-teal-200 text-teal-800 p-3 rounded-md flex items-start gap-2 text-sm">
                  <CheckSquare size={16} className="shrink-0 mt-0.5"/>
                  <span><strong>✅ 重要提醒：</strong> 登頂前有近垂直的攀升段，需使用拉繩，請務必戴手套並注意安全！</span>
                </div>
              </div>
            )
          },
          { 
            time: "15:00", 
            icon: <MapPin size={16} className="text-teal-600"/>, 
            title: "賦歸", 
            description: "🏆 恭喜完成四天三座山岳挑戰！車程約 3 小時 13 分，平安回家。" 
          }
        ]
      }
    ]
  },
  {
    id: 'f1',
    title: "🌸 京都慢活賞櫻五日遊",
    date: "2025.04.01 - 2025.04.05",
    location: "日本・京都",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    description: "避開人擠人的觀光客，走訪在地人的私房賞櫻景點，享受鴨川旁的野餐時光。",
    tags: ["賞櫻", "古蹟", "美食"],
    budget: "預算：TWD 45,000 / 人",
    itinerary: [
      {
        day: 1,
        title: "抵達與先斗町晚餐",
        activities: [
          { time: "14:00", icon: <MapPin size={16}/>, title: "抵達關西機場", description: "搭乘 Haruka 直奔京都，感受古都的第一口空氣。" },
          { time: "16:30", icon: <Coffee size={16}/>, title: "飯店 Check-in", description: "入住三條附近的設計旅店，放下行李輕鬆一下。" },
          { time: "18:30", icon: <Utensils size={16}/>, title: "晚餐：先斗町", description: "探訪巷弄裡的壽喜燒老店，享受道地關西風味。" }
        ]
      },
      {
        day: 2,
        title: "蹴上鐵道與哲學之道",
        activities: [
          { time: "09:00", icon: <Camera size={16}/>, title: "蹴上傾斜鐵道", description: "趁著人潮還沒湧現，捕捉鐵道與櫻花交織的絕美畫面。" },
          { time: "14:30", icon: <MapPin size={16}/>, title: "哲學之道散策", description: "沿著小徑散步至銀閣寺，沿途是滿開的櫻花隧道。" }
        ]
      }
    ]
  },
  {
    id: 'f2',
    title: "🏔️ 瑞士夢幻火車之旅",
    date: "2025.09.15 - 2025.09.25",
    location: "瑞士・策馬特",
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    description: "搭乘冰河列車，親眼見證馬特洪峰的日出金山，一生必去一次。",
    tags: ["登山", "風景", "火車"],
    budget: "預算：TWD 120,000 / 人",
    itinerary: [
      {
        day: 1,
        title: "飛往蘇黎世",
        activities: [
          { time: "23:00", icon: <MapPin size={16}/>, title: "搭機啟程", description: "帶著期待的心情，搭乘班機前往蘇黎世。" }
        ]
      }
    ]
  }
];

// --- 資料區：過去行程 (曾走過的地方) ---
const pastTrips = [
  {
    id: 'p3', 
    title: "🏔️ 嘉義梅山太平 · 車宿＋登山三日遊",
    date: "2025.12.17 - 2025.12.19",
    location: "嘉義・梅山太平",
    coverImage: "https://lh3.googleusercontent.com/pw/AP1GczNurQzdqNgImUwfVmvnT07s2fPqglBGPPPsr_p-RruUAvPp_SUSobh9xYksA02VOd7lKTWvhaPzkkextxn6YIcO8nzI5Rc_39yrAZrfQ5LRsGxUkvnDl2l8jZIxjFHQPHvvsVSlekrSeC0E_X6XAg1lUQ=w3209-h1805-s-no-gm?authuser=1", 
    description: "三天兩夜輕量車宿行程，以太平老街為基地，串起杉林溪谷、茶園吊橋、太平五連峰縱走與大巃頂、奉天岩晨走，一路用泡麵、茶具與夜景填滿旅行細節。",
    tags: ["車宿", "登山", "五連峰", "茶園"],
    companions: "邱家、凌家、曾家、羅家共8人",
    albumUrl: "https://photos.app.goo.gl/r6VEVFTvFZPT3TzY7", 
    videos: [
      { title: "Day 1 車宿炊煮", url: "https://youtu.be/h5jfewlvLK8" },
      { title: "Day 2 五連峰", url: "https://youtu.be/XHXWnKXdmmA" }
    ],
    // 新增 Relive 軌跡影片資料
    relives: [
      { title: "雲嘉五連峰縱走", url: "https://www.relive.com/zh-TW/view/v1Owk1yM7EO" },
      { title: "孝子路步道O型", url: "https://www.relive.com/zh-TW/view/vAOZm2Ykpov" }
    ],
    videoUrl: "", 
    rating: 5,
    budget: "據點：57 秘密基地",
    checklists: [
      {
        category: "邱家準備",
        items: ["電鍋 1 台", "炒鍋 1 個", "煎鍋 1 個"]
      },
      {
        category: "羅家準備",
        items: ["泡茶用具（壺、杯、濾網等）", "RO 水（煮泡麵＋泡茶共用）", "瓦斯爐／高山爐具與燃料"]
      },
      {
        category: "各家自備",
        items: ["個人餐具、茶杯", "少量茶點與水果", "個人保暖、雨具與頭燈", "個人藥品與登山小物"]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "暖身與車宿開張",
        note: "Day 1 以熟悉環境與車宿動線為主，體力保留給隔天五連峰。",
        activities: [
          { 
            time: "08:00", 
            icon: <MapPin size={16}/>, 
            title: "高雄出發 → 往梅山", 
            description: "預估車程約 2 小時 10 分，高速公路途中可視情況休息一次。" 
          },
          { 
            time: "10:30", 
            icon: <Tent size={16}/>, 
            // 修改：加入 57 秘密基地超連結
            title: <span>抵達 <a href="https://www.relive.com/zh-TW/view/vAOZm2Ykpov" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline hover:text-teal-800 font-bold">57 秘密基地</a></span>, 
            description: "停好車、調整車內睡眠空間，確認電源、照明與煮食動線，順手整理登山裝備。" 
          },
          { 
            time: "11:00", 
            icon: <Leaf size={16}/>, 
            title: "仙人堀杉林步道", 
            description: "約 1 km、30–40 分鐘，杉林＋溪谷路線，當作旅程第一段輕鬆拉筋。",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop" 
          },
          { 
            time: "12:00", 
            icon: <Utensils size={16}/>, 
            title: "太平老街簡單午餐", 
            description: "隨意選擇小吃、便當或超商補給，順便感受老街氣氛。" 
          },
          { 
            time: "14:00", 
            icon: <CloudFog size={16}/>, 
            title: "雲之南道步道＋太平雲梯", 
            description: "約 2 km，預留 1–2 小時，茶園景觀＋吊橋視野，輕鬆散步、攝影取景皆可。",
            image: "https://pic.pimg.tw/vickytung12/1677136726-2056372517-g.jpg" 
          },
          { 
            time: "晚餐", 
            icon: <Utensils size={16}/>, 
            title: "車宿首夜 · 自煮晚餐", 
            description: "菜單：地瓜白飯、菇菇補湯、炒高麗菜、煎素魚、豆瓣豆腐、烤玉米、荷包蛋。" 
          },
          { 
            time: "夜晚", 
            icon: <Sunset size={16}/>, 
            title: "泡茶 · 聊天 · 太平夜景", 
            description: "在基地周邊散步，找一個安全安靜的點看夜景，熟悉車宿睡眠節奏。" 
          }
        ]
      },
      {
        day: 2,
        title: "太平五連峰 O 型縱走",
        note: "此天為行程主攻日，務必留意補水與步調，遇到濕滑路段放慢速度。",
        activities: [
          { 
            time: "06:30", 
            icon: <Coffee size={16}/>, 
            title: "基地早餐 · 整理裝備", 
            description: "檢查：登山杖、雨衣、水、乾糧、泡麵。羅家帶高山爐＋輕量鍋具煮熱水。" 
          },
          { 
            time: "07:50", 
            icon: <Mountain size={16}/>, 
            title: "起登：五連峰 O 型", 
            description: "路線：三元宮 → 太平山 → 梨子腳山 → 馬鞍山 → 二尖山 → 大尖山 → 三元宮。全程約 10.5 km。",
            image: "https://lh3.googleusercontent.com/pw/AP1GczO6hnRqG_nJxzoBeJIsHNTJeLvbN4JGxa8dciLdJX3cwBEqUu4Cn3ay6rZiT_E_vWdNQQS2khc81txPFJEoFuMwCvFMp3HL7wxFvNSzXnOh7W1Si-KWkKBLdKxFM1rmoy28p0_30tEVhJF2rOehlUsS0w=w3209-h1805-s-no-gm?authuser=1"
          },
          { 
            time: "午餐", 
            icon: <Utensils size={16}/>, 
            title: "山上煮泡麵 · 熱飲", 
            description: "視地形挑選視野好且安全的平台或涼亭，大家一起分工煮麵、泡茶。" 
          },
          { 
            time: "16:30", 
            icon: <Leaf size={16}/>, 
            title: "晚餐：空氣圖書館", 
            description: "營造下山後的儀式感晚餐，享受太平山城的黃昏氣氛 (已預訂)。",
            image: "https://lh3.googleusercontent.com/pw/AP1GczOocFCtiST1JNh2HxyaZJgHInEz1ob9zq6hMqZcYs-lboYKIsQgljIkeuevCpNmM5gLdkDZwbzxCfsHwudBt5oiK9rtctzpStUxk1YcSiloDU2wewrVjUy6bamcxyMqO6IL2J1xsLYga4K7w5AijzGxgg=w3209-h1805-s-no-gm?authuser=1" 
          },
          { 
            time: "夜晚", 
            icon: <Star size={16}/>, 
            title: "回基地 · 夜景收心", 
            description: "行程第二夜，大家可以交換五連峰心得，預備隔天較輕鬆的行程。" 
          }
        ]
      },
      {
        day: 3,
        title: "晨走奉天岩與賦歸",
        note: "Day 3 屬收心行程，腳感還在但節奏放慢，適合邊走邊聊。",
        activities: [
          { 
            time: "08:00", 
            icon: <MapIcon size={16}/>, 
            title: "晨走：孝子路步道 → 奉天岩", 
            description: "路線：孝子路步道口 → 孝思亭 → 大巃頂 → 奉天岩 → 原路返回。約 5.5 km。" 
          },
          { 
            time: "途中", 
            icon: <Coffee size={16}/>, 
            title: "奉天岩喝茶 · 小憩", 
            description: "在奉天岩找一處合適位置泡茶，當作這次太平行程的收尾儀式。",
            image: "https://lh3.googleusercontent.com/pw/AP1GczPshpteBljGbSbeafsPCqrN5idIkJK3SEDWsK50Huz5HpgMsaLPBNs6t6uFQLVDabsJO_GOZMhNqlhvSe1dBNOUA9l_rOyPr4H7UhVX6plzCghP2YE8x78E6Y48kP5sWT7hbG-9lPpyxDzt7gLrIrEVcA=w3209-h1805-s-no-gm?authuser=1" 
          },
          { 
            time: "12:00", 
            icon: <Utensils size={16}/>, 
            title: "太平老街午餐", 
            description: "找一間順眼的小店，輕鬆吃完午餐、最後逛逛老街，再開車返回高雄。" 
          },
          { 
            time: "14:00", 
            icon: <MapPin size={16}/>, 
            title: "收拾裝備，賦歸", 
            description: "視大家狀態與交通情況，彈性安排中途休息站，結束這趟太平車宿小旅行。" 
          }
        ]
      }
    ]
  },
  {
    id: 'p1',
    title: "🌊 2023 墾丁放空之旅",
    date: "2023.06.10 - 2023.06.12",
    location: "台灣・屏東",
    coverImage: "https://images.unsplash.com/photo-1596324952382-3d7729226e6d?q=80&w=800&auto=format&fit=crop",
    description: "那一年夏天，我們在海邊發呆、喝咖啡，晚上逛大街吃海鮮的回憶。",
    tags: ["回憶", "海邊", "自駕"],
    companions: "小明、小華、大雄", 
    albumUrl: "https://photos.google.com/", 
    videoUrl: "https://www.youtube.com/",   
    rating: 5, 
    budget: "花費：TWD 8,500 / 人",
    itinerary: [ 
      {
        day: 1,
        title: "南下與海邊夕陽",
        activities: [
          { time: "11:00", icon: <MapPin size={16}/>, title: "高雄出發", description: "一路向南，心情跟著天氣變好。" },
          { time: "15:00", icon: <Coffee size={16}/>, title: "海景咖啡廳", description: "隨意找間店，看海發呆整個下午。" },
          { time: "18:00", icon: <Utensils size={16}/>, title: "墾丁大街", description: "覓食時間，必吃海鮮與路邊攤。" }
        ]
      },
      {
        day: 2,
        title: "水上活動",
        activities: [
          { time: "10:00", icon: <Camera size={16}/>, title: "後壁湖浮潛", description: "海水正藍，看見好多熱帶魚。" },
          { time: "16:00", icon: <MapPin size={16}/>, title: "龍磐公園", description: "感受落山風與壯闊的太平洋海岸。" }
        ]
      }
    ]
  },
  {
    id: 'p2',
    title: "🗼 東京聖誕快閃",
    date: "2022.12.20 - 2022.12.24",
    location: "日本・東京",
    coverImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    description: "第一次在國外過聖誕節，六本木的燈飾美得令人難忘。",
    tags: ["聖誕節", "購物", "城市"],
    companions: "家人們",
    albumUrl: "https://photos.google.com/",
    videoUrl: "", 
    rating: 4,
    budget: "花費：TWD 32,000 / 人",
    itinerary: [
      {
        day: 1,
        title: "抵達東京",
        activities: [
          { time: "18:00", icon: <Utensils size={16}/>, title: "敘敘苑燒肉", description: "用高空夜景與燒肉開啟這趟旅程。" }
        ]
      }
    ]
  }
];

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isPastTripsOpen, setIsPastTripsOpen] = useState(true); 

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // 渲染卡片的共用元件
  const TripCard = ({ trip, isPast }) => (
    <div 
      className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-slate-100 ${isPast ? 'opacity-90 grayscale-[0.2] hover:grayscale-0' : ''}`}
      onClick={() => setSelectedTrip({ ...trip, isPast })}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={trip.coverImage} 
          alt={trip.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // 自動 fallback 機制：如果 Google 相簿連結失效，自動替換成備用圖片
            e.target.onerror = null; 
            e.target.src = "https://images.unsplash.com/photo-1518182170546-0766ce6fec93?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1">
          <Calendar size={12} />
          {trip.date.split('-')[0].trim()}
        </div>
        {isPast && (
          <div className="absolute top-3 left-3 bg-slate-800/80 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            已完成
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {trip.tags.map(tag => (
            <span key={tag} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded-md font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">{trip.title}</h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">{trip.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="flex items-center gap-1 text-slate-400 text-sm">
            <MapPin size={14} />
            {trip.location}
          </span>
          <span className="text-teal-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            查看詳情 <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* --- 導覽列 --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-teal-600" />
            <span className="text-xl font-bold tracking-tight text-slate-800">浮雲遊子的旅遊日誌</span>
          </div>
          
          <a 
            href="https://music.youtube.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors text-sm font-medium"
          >
            <Music size={16} className="text-red-500"/>
            <span>旅遊歌單</span>
          </a>
        </div>
      </nav>

      {/* --- Header 區域 --- */}
      <header className="relative bg-teal-900 text-white py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/60 to-slate-50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg tracking-wide">旅程，是為了遇見更好的自己</h1>
          <p className="text-teal-50 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md leading-relaxed font-light">
            收藏每一段走過的路，期待每一次未知的出發。
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10 space-y-16">
        
        {/* --- 區塊一：下一站，去哪裡 (未來行程) --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-600 text-white p-2 rounded-lg">
              <MapPin size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">下一站，去哪裡？</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} isPast={false} />
            ))}
          </div>
        </section>

        {/* --- 區塊二：曾走過的地方 (過去行程 - 可收摺) --- */}
        <section className="bg-slate-100 rounded-3xl p-6 md:p-8">
          <button 
            onClick={() => setIsPastTripsOpen(!isPastTripsOpen)}
            className="w-full flex items-center justify-between mb-2 group focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="bg-slate-400 text-white p-2 rounded-lg group-hover:bg-slate-500 transition-colors">
                <Camera size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-700 group-hover:text-slate-900">曾走過的地方</h2>
            </div>
            <div className="text-slate-400 group-hover:text-teal-600 transition-colors">
              {isPastTripsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
          </button>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${isPastTripsOpen ? 'opacity-100 mt-8 max-h-[2000px]' : 'opacity-0 max-h-0'}`}>
            {pastTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} isPast={true} />
            ))}
          </div>
          
          {!isPastTripsOpen && (
            <p className="text-center text-slate-400 text-sm mt-2 cursor-pointer" onClick={() => setIsPastTripsOpen(true)}>
              點擊展開 {pastTrips.length} 個精彩回憶...
            </p>
          )}
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-800 text-slate-400 py-8 text-center text-sm mt-12">
        <p>© 2025 My Travel Journal. Keep exploring.</p>
      </footer>

      {/* --- 詳細行程 Modal --- */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedTrip(null)}
          ></div>

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col">
            
            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Header Image */}
              <div className="relative h-56 md:h-72">
                <img 
                  src={selectedTrip.coverImage} 
                  alt={selectedTrip.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 自動 fallback 機制：如果 Google 相簿連結失效，自動替換成備用圖片
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1518182170546-0766ce6fec93?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedTrip.title}</h2>
                      <p className="text-slate-200 flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {selectedTrip.date}</span>
                        <span>|</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {selectedTrip.location}</span>
                        {/* 評分顯示 (僅限過去行程) */}
                        {selectedTrip.isPast && selectedTrip.rating && (
                           <>
                           <span>|</span>
                           <span className="flex items-center gap-1 text-yellow-400">
                             {[...Array(selectedTrip.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                           </span>
                           </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTrip(null)}
                  className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                
                {/* 資訊總覽列 */}
                <div className="flex flex-wrap gap-3">
                  {/* Google 地圖連結 */}
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedTrip.location}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <MapIcon size={16} /> 開啟地圖
                  </a>

                   {/* 預算/花費 */}
                   {selectedTrip.budget && (
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg text-sm text-slate-600">
                      <DollarSign size={16} /> {selectedTrip.budget}
                    </div>
                  )}
                  
                  {/* 分享按鈕已刪除 */}
                </div>

                {/* 過去行程專屬區塊：同行人員 & 相簿連結 */}
                {selectedTrip.isPast && (
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 space-y-4">
                    <h3 className="font-bold text-amber-800 flex items-center gap-2">
                      <Camera size={18} /> 旅程回憶錄
                    </h3>
                    
                    {selectedTrip.companions && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <Users size={18} className="text-amber-600" />
                        <span className="font-medium">同行夥伴：</span>
                        <span>{selectedTrip.companions}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      {selectedTrip.albumUrl && (
                        <a href={selectedTrip.albumUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 py-2 rounded-lg transition-colors font-medium text-sm">
                          <ImageIcon size={18} /> Google 相簿
                        </a>
                      )}
                      
                      {/* 支援單一影片 (舊資料) */}
                      {selectedTrip.videoUrl && !selectedTrip.videos && (
                        <a href={selectedTrip.videoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors font-medium text-sm">
                          <Youtube size={18} /> 影片紀錄
                        </a>
                      )}

                      {/* 支援多部影片 */}
                      {selectedTrip.videos && selectedTrip.videos.map((video, idx) => (
                        <a key={idx} href={video.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors font-medium text-sm min-w-[140px]">
                          <Youtube size={18} /> {video.title}
                        </a>
                      ))}

                      {/* Relive Buttons */}
                      {selectedTrip.relives && selectedTrip.relives.map((relive, idx) => (
                        <a key={`relive-${idx}`} href={relive.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white border border-amber-400 text-amber-600 hover:bg-amber-50 py-2 rounded-lg transition-colors font-medium text-sm min-w-[140px]">
                          <Activity size={18} /> {relive.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* 行程內容 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 border-l-4 border-teal-500 pl-3 mb-6">
                    {selectedTrip.isPast ? "當時的足跡" : "預定行程"}
                  </h3>
                  <div className="space-y-12">
                    {selectedTrip.itinerary?.map((day) => (
                      <div key={day.day} className="relative pl-8 border-l-2 border-slate-200 last:border-0 pb-2">
                        <div className={`absolute -left-[9px] top-0 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center ring-4 ring-white ${selectedTrip.isPast ? 'bg-slate-400' : 'bg-teal-500'}`}>
                          {day.day}
                        </div>
                        <div className="mb-6">
                           <h4 className="font-bold text-xl text-slate-800">Day {day.day} - {day.title}</h4>
                           {day.note && <p className="text-sm text-amber-600 mt-1 flex items-center gap-1"><Info size={14}/> {day.note}</p>}
                        </div>
                        
                        <div className="space-y-6">
                          {day.activities.map((activity, idx) => (
                            <div key={idx} className="group">
                              <div className="flex gap-4">
                                <div className="text-slate-400 mt-1 shrink-0">{activity.icon}</div>
                                <div className="grow">
                                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                    <span className={`text-xs font-bold ${selectedTrip.isPast ? 'text-slate-500' : 'text-teal-600'}`}>{activity.time}</span>
                                    <h5 className="font-bold text-slate-700">{activity.title || activity.text}</h5>
                                  </div>
                                  
                                  {/* 描述區塊 - 支援 JSX 內容 */}
                                  <div className="text-slate-600 text-sm leading-relaxed">
                                    {activity.description || activity.text}
                                  </div>
                                  
                                  {/* 圖片插入區域 */}
                                  {activity.image && (
                                    <div className="mt-3 rounded-lg overflow-hidden h-48 shadow-sm">
                                      <img src={activity.image} alt={activity.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 檢查清單 (Checklist) 區域 - 僅當有 checklists 資料時顯示 */}
                {selectedTrip.checklists && (
                  <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckSquare size={20} className="text-teal-600"/> 共備與檢查清單
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedTrip.checklists.map((list, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-100 pb-2">{list.category}</h4>
                          <ul className="space-y-2">
                            {list.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-teal-500 mt-0.5">▪</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 text-center shrink-0">
              <a 
                href="https://music.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors font-medium"
              >
                <Music size={16} /> 開啟 YouTube Music 播放背景音樂
              </a>
            </div>

          </div>
        </div>
      )}

      {/* 分享成功提示 */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 z-50">
          <Share2 size={14} />
          連結已複製！
        </div>
      )}
    </div>
  );
}