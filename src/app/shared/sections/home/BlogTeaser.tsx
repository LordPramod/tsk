import { Reveal, Section, SectionHeading } from "../../components";
import { blogPosts } from "../../constant";
import { chipToneAt } from "../../utils";
import { BlogCard } from "./BlogCard";

export const BlogTeaser = () => (
  <Section>
    <SectionHeading
      eyebrow="Insights"
      title="Latest from our blog"
      description="Practical ideas on marketing, content and health-tech from the team building them every day."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 dc:grid-cols-3">
      {blogPosts.map((post, index) => (
        <Reveal key={post.title} index={index} className="h-full">
          <BlogCard post={post} tone={chipToneAt(index * 2)} />
        </Reveal>
      ))}
    </div>
  </Section>
);
