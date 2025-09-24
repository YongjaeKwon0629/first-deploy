import Image from "next/image";

type General = { name: string; github: string; bio: string };
type Project = { title: string; summary: string; url: string; tech?: string[] };

// 공개 레포 RAW URL (refs/heads, token X)
const GENERAL_URL = "https://raw.githubusercontent.com/YongjaeKwon0629/first-deploy/main/service/resume_general_info_service.json";
const PORTFOLIO_URL = "https://raw.githubusercontent.com/YongjaeKwon0629/first-deploy/main/service/resume_portfolio_service.json";

// 서버 컴포넌트에서 직접 API 호출 (S1)
async function getResumeInfo(): Promise<General> {
  const res = await fetch(GENERAL_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data (general)");
  const data = (await res.json()) as Record<string, unknown>;
  return {
    name: String(data.name ?? ""),
    github: String(data.github ?? ""),
    bio: String(data.bio ?? "")
  };
}

// 서버 컴포넌트에서 직접 API 호출 (S2)
async function getPortfolio(): Promise<Project[]> {
  const res = await fetch(PORTFOLIO_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data (portfolio)");
  const list = (await res.json()) as Project[];
  return list.map(p => ({
    title: p.title,
    summary: p.summary,
    url: p.url,
    tech: p.tech ?? []
  }));
}

export default async function Home() {
  const [general, portfolio] = await Promise.all([getResumeInfo(), getPortfolio()]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/diginori_logo.jpg"
          alt="logo"
          width={360}
          height={240}
          className="rounded-md object-cover"
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요 {general.name} 입니다.
          </li>
          <li className="tracking-[-.01em]">
            테스트 할 수 없는 건 만들 수 없다
          </li>
        </ol>

        {/* 필요하면 아래 포트폴리오 리스트는 지워도 됩니다. JSON만 불러오는 게 목적이라면 */}
        <div className="w-full max-w-screen-md mt-6">
          <div className="mb-4">
            <a className="text-blue-600 underline" href={general.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <p className="text-gray-700 mt-1">{general.bio}</p>
          </div>

          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-3">
            {portfolio.map((p, idx) => (
              <li key={idx} className="border p-4 rounded">
                <div className="font-medium">{p.title}</div>
                <div className="text-gray-700">{p.summary}</div>
                <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">
                  Visit
                </a>
                {p.tech?.length ? <div className="text-sm text-gray-500 mt-1">Tech: {p.tech.join(", ")}</div> : null}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}