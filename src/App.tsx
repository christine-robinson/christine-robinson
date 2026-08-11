import { Component, type ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Work } from "@/components/work/Work";
import { Infrastructure } from "@/components/infrastructure/Infrastructure";
import { Toolchain } from "@/components/toolchain/Toolchain";
import { Learning } from "@/components/learning/Learning";
import { Notes } from "@/components/notes/Notes";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CursorGlow } from "@/components/common/CursorGlow";
import { Toaster } from "@/components/ui/sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    reportLovableError(error, { boundary: "app_error_boundary" });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              This page didn't load
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Something went wrong. Try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-dvh">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <main id="main" className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Work />
          <Infrastructure />
          <Toolchain />
          <Learning />
          <Notes />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </ErrorBoundary>
  );
}

export default App;
