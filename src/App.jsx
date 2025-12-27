import React, { useState } from 'react';
import { 
  MapPin, Calendar, Clock, X, Share2, Music, Coffee, Camera, Utensils, 
  ArrowRight, ChevronDown, ChevronUp, Users, Image as ImageIcon, Youtube, 
  DollarSign, Star, Map as MapIcon
} from 'lucide-react';

// --- 資料區：未來行程 (下一站，去哪裡) ---
const futureTrips = [
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
          { time: "14:00", icon: <MapPin size={16}/>, text: "抵達關西機場，搭乘 Haruka 直奔京都" },
          { time: "16:30", icon: <Coffee size={16}/>, text: "飯店 Check-in (三條附近)" },
          { time: "18:30", icon: <Utensils size={16}/>, text: "晚餐：先斗町 壽喜燒老店" }
        ]
      },
      {
        day: 2,
        title: "蹴上鐵道與哲學之道",
        activities: [
          { time: "09:00", icon: <Camera size={16}/>, text: "蹴上傾斜鐵道拍晨間櫻花" },
          { time: "14:30", icon: <MapPin size={16}/>, text: "散步哲學之道，參觀銀閣寺" }
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
          { time: "23:00", icon: <MapPin size={16}/>, text: "搭乘班機前往蘇黎世" }
        ]
      }
    ]
  }
];

// --- 資料區：過去行程 (曾走過的地方) ---
const pastTrips = [
  {
    id: 'p1',
    title: "🌊 2023 墾丁放空之旅",
    date: "2023.06.10 - 2023.06.12",
    location: "台灣・屏東",
    coverImage: "https://images.unsplash.com/photo-1596324952382-3d7729226e6d?q=80&w=800&auto=format&fit=crop",
    description: "那一年夏天，我們在海邊發呆、喝咖啡，晚上逛大街吃海鮮的回憶。",
    tags: ["回憶", "海邊", "自駕"],
    companions: "小明、小華、大雄", // (1) 同行人員
    albumUrl: "https://photos.google.com/", // (2) Google 相簿連結 (模擬)
    videoUrl: "https://www.youtube.com/",   // (3) YouTube 影片連結 (模擬)
    rating: 5, // 評分 (滿分5)
    budget: "花費：TWD 8,500 / 人",
    itinerary: [ // (4) 行程內容
      {
        day: 1,
        title: "南下與海邊夕陽",
        activities: [
          { time: "11:00", icon: <MapPin size={16}/>, text: "高雄出發，一路向南" },
          { time: "15:00", icon: <Coffee size={16}/>, text: "海景咖啡廳看海發呆" },
          { time: "18:00", icon: <Utensils size={16}/>, text: "墾丁大街覓食" }
        ]
      },
      {
        day: 2,
        title: "水上活動",
        activities: [
          { time: "10:00", icon: <Camera size={16}/>, text: "後壁湖浮潛體驗" },
          { time: "16:00", icon: <MapPin size={16}/>, text: "龍磐公園看壯闊海岸" }
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
    videoUrl: "", // 沒有影片可留空
    rating: 4,
    budget: "花費：TWD 32,000 / 人",
    itinerary: [
      {
        day: 1,
        title: "抵達東京",
        activities: [
          { time: "18:00", icon: <Utensils size={16}/>, text: "敘敘苑燒肉" }
        ]
      }
    ]
  }
];

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isPastTripsOpen, setIsPastTripsOpen] = useState(true); // 控制「曾走過的地方」收摺狀態

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

                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors bg-slate-100 px-3 py-2 rounded-lg"
                  >
                    <Share2 size={16} /> 分享連結
                  </button>
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
                      {selectedTrip.videoUrl && (
                        <a href={selectedTrip.videoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors font-medium text-sm">
                          <Youtube size={18} /> 影片紀錄
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* 行程內容 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 border-l-4 border-teal-500 pl-3 mb-6">
                    {selectedTrip.isPast ? "當時的足跡" : "預定行程"}
                  </h3>
                  <div className="space-y-8">
                    {selectedTrip.itinerary?.map((day) => (
                      <div key={day.day} className="relative pl-8 border-l-2 border-slate-200 last:border-0 pb-2">
                        <div className={`absolute -left-[9px] top-0 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center ring-4 ring-white ${selectedTrip.isPast ? 'bg-slate-400' : 'bg-teal-500'}`}>
                          {day.day}
                        </div>
                        <h4 className="font-bold text-slate-800 mb-4">Day {day.day} - {day.title}</h4>
                        <div className="space-y-4">
                          {day.activities.map((activity, idx) => (
                            <div key={idx} className="flex gap-4 bg-slate-50 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                              <div className="text-slate-400 mt-1">{activity.icon}</div>
                              <div>
                                <span className={`text-xs font-bold block mb-0.5 ${selectedTrip.isPast ? 'text-slate-500' : 'text-teal-600'}`}>{activity.time}</span>
                                <span className="text-slate-700 text-sm">{activity.text}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

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
