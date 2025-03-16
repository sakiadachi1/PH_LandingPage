"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";  // 追加

function ReformSelection() {
  return (
    <div className="flex gap-1 mt-2 justify-center">
      {["リ", "フ", "ォ", "ー", "ム", "会", "社", "選", "び"].map((char, index) => (
        <span key={index} className="border border-gray-800 px-2 py-1 text-lg font-bold">
          {char}
        </span>
      ))}
      <span className="text-xs font-bold">なら</span>
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();  // 追加

  return (
    <div className="bg-orange-50 min-h-screen w-full">
      <div className="flex flex-col items-center p-4 w-full">
        <div className="bg-orange-50 p-6 rounded-lg text-center mt-6 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
            本当に <span className="text-red-500">安心できる</span>
          </h1>
          <ReformSelection />
          <p className="text-center text-sm text-gray-700 mt-3">
            <span className="text-red-500 font-bold underline decoration-yellow-300">国土交通省登録団体</span> に所属の
            <br />
            信頼できる会社のみを集めた
          </p>
          <div className="flex w-full mt-4">
            <div className="bg-blue-600 text-white text-sm font-bold px-3 py-2 flex items-center rounded-l-md">
              TOPPAN<br />が運営する
            </div>
            <button className="bg-orange-400 text-white font-bold text-sm flex-1 py-2 px-4 rounded-r-md">
              リフォーム会社紹介サイト
            </button>
          </div>
          <div className="text-gray-800 text-lg font-bold mt-4">リフォトル</div>
        </div>
        
        {/* 黄色の背景セクション */}
        <div className="bg-[#FFD986] w-full flex justify-center mt-6">
          <div className="p-6 text-center w-full max-w-2xl">
            <p className="text-gray-800 text-sm">
              ご要望に合わせて厳選した <span className="text-red-500 font-bold">最大4社をご紹介</span> しますので、
            </p>
            <p className="text-gray-900 text-lg font-bold mt-1">
              『<span className="underline decoration-black">比較検討</span>』 してください
            </p>
            <div className="mt-3 inline-block bg-white border border-gray-800 px-3 py-1 text-xs font-bold rounded-full">
              1分で簡単入力！相談だけでもOK
            </div>
            <button className="mt-4 w-full bg-orange-400 text-white font-bold py-4 px-8 rounded-full shadow-md border-2 border-black text-lg flex items-center justify-center">
              <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-md mr-2">無料</span>
              優良リフォーム会社の紹介はこちら
            </button>
          </div>
        </div>
        
        {/* 白の背景セクション */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center mt-6 w-full max-w-2xl">
          <p className="text-gray-800 text-lg">まずはどんなお部屋にしたいのか</p>
          <p className="text-gray-800 text-lg mb-4">理想のイメージを持ちたい方はこちら</p>
          <button 
            onClick={() => router.push("/second")}  // `/second` に遷移
            className="bg-orange-400 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-500 transition shadow-lg">
            理想のイメージ画像を作る
          </button>
        </div>
        
        {/* 青の背景セクション */}
        <div className="bg-blue-200 w-full flex justify-center mt-6">
          <div className="p-6 text-center w-full max-w-2xl">
            <div className="flex justify-center">
              <Image src="/trust-mark.png" alt="住宅リフォーム事業者団体マーク" width={96} height={96} />
            </div>
            <p className="text-blue-800 font-bold text-lg mt-2">このマークは<br />安心リフォームの証</p>
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              国土交通省の制度に登録された優良な団体とその団体の構成員であるリフォーム事業者だけが使用できる
              <span className="text-red-500 font-bold"> 安心リフォームのマーク</span>
              です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}