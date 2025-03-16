"use client";

import { useState } from "react";

export default function SecondPage() {
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // 画像アップロード時の処理
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);

            // 画像を FastAPI に送信
            await uploadImageToServer(file);
        }
    };

    // FastAPI に画像を送信する関数
    const uploadImageToServer = async (file: File) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:8000/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("画像のアップロードに失敗しました");
            }

            alert("画像が保存されました！");
        } catch (error) {
            console.error(error);
            alert("エラーが発生しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-orange-50 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-900">素材を <span className="text-orange-500">選択</span></h1>
            <p className="text-gray-600 text-sm">簡単3ステップ</p>

            <div className="flex space-x-4 my-4">
                {["画像アップロード", "素材選択", "イメージ生成"].map((text, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                            {index + 1}
                        </div>
                        <p className="text-gray-600 text-sm mt-2">{text}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">部屋の画像</h2>
                <label className="border-2 border-dashed border-orange-400 rounded-lg p-6 w-full cursor-pointer flex flex-col items-center text-gray-500">
                    {image ? (
                        <img src={image} alt="Uploaded" className="w-full rounded-lg" />
                    ) : (
                        <>
                            <span className="text-orange-500 text-lg">⬆</span>
                            <p className="mt-2">ここに画像をアップロード</p>
                            <p className="text-xs text-gray-400">または写真を撮影</p>
                        </>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>

                {loading && <p className="text-orange-500 mt-2">画像をアップロード中...</p>}
            </div>
        </div>
    );
}
