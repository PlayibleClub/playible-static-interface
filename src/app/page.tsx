import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-b from-darkblue to-lightblue justify-center">
      <div className="w-3/4 flex flex-col h-screen justify-center items-center gap-4 pb-48">
        <div className="flex flex-row gap-4 content-between font-monument text-4xl">
          <Image width={53} height={63} src="/logo.png" alt="playible logo" />
          <div className="pt-3">PLAYIBLE</div>
        </div>
        <div className="md:text-4xl sm:text-2xl font-monument mt-12">
          Select a platform.
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <button>
              <a
                href="https://app.playible.io/"
                className="underline font-bold"
              >
                <Image
                  width={200}
                  height={400}
                  src="/near_logo.png"
                  alt="near logo"
                />
              </a>
            </button>
          </div>
          <div className="pt-2">
            <button>
              <a
                href="https://dev.polygon.playible.io/"
                className="underline font-bold"
              >
                <Image
                  width={200}
                  height={400}
                  src="/Primary_Logo.png"
                  alt="near logo"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="md:text-xl sm:text-lg">
          Learn more about Playible Fantasy Sports&nbsp;
          <a href="https://playible.club/" className="underline font-bold">
            here.
          </a>
        </div>
      </div>
    </div>
  );
}
