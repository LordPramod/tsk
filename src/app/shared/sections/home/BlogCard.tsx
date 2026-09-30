import { ArrowLink, Eyebrow } from "../../components";
import type { BlogPost, ChipTone } from "../../types";
import { chipBackground, cn } from "../../utils";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

type BlogCardProps = {
  post: BlogPost;
  tone: ChipTone;
};

export const BlogCard = ({ post, tone }: BlogCardProps) => {
  const Icon = post.icon;

  return (
    <article className="card flex h-full flex-col">
      <div
        aria-hidden="true"
        className={cn("grid aspect-[16/9] place-items-center rounded-chip", chipBackground[tone])}
      >
        <Icon size={40} strokeWidth={1.5} className="text-teal/70" />
      </div>
      <Eyebrow className="mt-5 self-start">{post.category}</Eyebrow>
      <p className="mt-3 text-caption font-medium text-muted">
        <time dateTime={post.publishedAt}>{dateFormatter.format(new Date(post.publishedAt))}</time>
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, </span>
        {post.readTime}
      </p>
      <h3 className="mt-2">{post.title}</h3>
      <p className="mt-2 flex-1 text-body-sm text-muted">{post.excerpt}</p>
      <ArrowLink href="#" className="mt-5 self-start">
        Read more<span className="sr-only">: {post.title}</span>
      </ArrowLink>
    </article>
  );
};
