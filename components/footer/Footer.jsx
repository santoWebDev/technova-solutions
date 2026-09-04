export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="lg:col-span-2">
            <div className="text-2xl font-black">
              TECHNOVA<span className="text-blue-600">.</span>
            </div>

            <p className="mt-4 max-w-md leading-7 text-gray-500">
              Building digital systems for ambitious teams.
            </p>
          </div>

          <div>
            <p className="font-semibold">Navigation</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#about">About</a>
              <a href="#services">Capabilities</a>
              <a href="#blog">Insights</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Social</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-sm text-gray-400">
          © 2026 TechNova Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}