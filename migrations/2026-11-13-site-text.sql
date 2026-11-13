-- The words the office has changed at /admin/text, one row per named place on
-- the site. A place with no row shows the text kept in code. RLS on with no
-- policies, and no grants to the public roles: only the site's server code reads it.

create table if not exists public.site_text (
	slot text primary key check (char_length(slot) between 1 and 80),
	text text not null check (char_length(text) between 1 and 1200),
	updated_at timestamptz not null default now()
);

alter table public.site_text enable row level security;

revoke all on public.site_text from anon, authenticated;
