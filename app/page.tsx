import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 bg-gray-900">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start gap-1">
          <h1 className="lg:text-6xl font-bold text-white">ALEX JONNY</h1>
          <div className="h-1 bg-white w-full" />
          <h1 className="text-4xl text-white">FRONTEND DEVELOPER</h1>
          <div className="w-full relative">
            <Image
              src="/images/me_square.jpg"
              fill={true}
              // width={200}
              // height={200}
              style={{
                objectFit: "contain",
              }}
              alt="me"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:text-xl">
          <div className="flex flex-col items-start justify-center border-l-2 border-white pl-2 py-2">
            <p>
              <strong>Frontend developer @ Sessions</strong>
            </p>
            <p>sep 2022 - present</p>
          </div>

          {/* <div className="w-full h-1 border-b-2 ml-2 border-white" /> */}
          <div className="flex flex-col items-start justify-center border-l-2 border-white pl-2 py-2">
            <p>
              <strong>Frontend developer @ BOB</strong>
            </p>
            <p>sep 2021 - aug 2022</p>
          </div>
        </div>
      </div>
    </main>
  );
}
