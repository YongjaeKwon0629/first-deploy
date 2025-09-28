import Image from "next/image";

type General = { 
  name: string; 
  title: string;
  github: string; 
  bio: string; 
  email: string;
  location: string;
  skills: string[];
};
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
    title: String(data.title ?? ""),
    github: String(data.github ?? ""),
    bio: String(data.bio ?? ""),
    email: String(data.email ?? ""),
    location: String(data.location ?? ""),
    skills: Array.isArray(data.skills) ? data.skills : []
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Image
              src="/diginori_logo.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{general.name}</h1>
          <h2 className="text-xl text-blue-100 mb-4">{general.title}</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">{general.bio}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a 
              href={general.github} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${general.email}`}
              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {general.skills.map((skill, idx) => (
              <span 
                key={idx}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
          <div className="space-y-6">
            {portfolio.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.summary}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 mb-6">
            새로운 기회나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href={general.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href={`mailto:${general.email}`}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 {general.name}. Built with Next.js and TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}