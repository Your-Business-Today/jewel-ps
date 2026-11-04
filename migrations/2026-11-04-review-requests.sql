-- Every Google review request the office emails from /admin/reviews, so a
-- client is not asked twice by accident. RLS on with no policies, and no
-- grants to the public roles: only the site's server code reads it.

create table if not exists public.review_requests (
	id uuid primary key default gen_random_uuid(),
	name text not null,
	email text not null,
	work text not null default '',
	sent_at timestamptz not null default now()
);

create index if not exists review_requests_email_idx
	on public.review_requests (lower(email));

create index if not exists review_requests_sent_at_idx
	on public.review_requests (sent_at desc);

alter table public.review_requests enable row level security;

revoke all on public.review_requests from anon, authenticated;
