-- The photos the office has chosen at /admin/photos, one per named place on
-- the site. A place with no row shows the photo kept in code. RLS on with no
-- policies, and no grants to the public roles: only the site's server code reads it.

create table if not exists public.site_photos (
	slot text primary key check (char_length(slot) between 1 and 80),
	image text not null check (char_length(image) between 1 and 500),
	updated_at timestamptz not null default now()
);

alter table public.site_photos enable row level security;

revoke all on public.site_photos from anon, authenticated;
