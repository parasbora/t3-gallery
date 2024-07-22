import Link from "next/link";
const mockUrls = [
  "https://utfs.io/f/7ed41423-92be-4183-a727-f515e6d6d2aa-p0yjse.gif",
  "https://utfs.io/f/032589f1-bd18-4f2b-8e0c-aa9e12af7b57-hlsqe9.jpg",
  "https://utfs.io/f/a66b1a10-519b-4337-8622-d2bb9193fb3a-1jx1ov.png",
  "https://utfs.io/f/045eeeb4-b605-4537-8c01-7744dc753dd8-nbqygq.png",
  "https://utfs.io/f/e8934e33-a7e5-434f-b730-41e7d5fe6722-l1wqvu.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
