import GithubContributionGraph from "./githubContribution";
import { Slide } from "../ui/slide";

export default function GithubCalendarComponent() {
  return (
    <section>
      <Slide delay={0.6}>
        <GithubContributionGraph />
      </Slide>
    </section>
  );
}