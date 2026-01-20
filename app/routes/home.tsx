import type { Route } from "./+types/home";
import WelcomeToThe from '@/components/Intro/EggscelentIntro'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
      <WelcomeToThe words={["Welcome to JUNG", "Welcome to the NEW DAY", "Welcome to AWESOME LIFE"]} delay={1500} />
    </h1>
  );
}
