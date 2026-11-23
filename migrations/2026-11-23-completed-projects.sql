-- The completed projects shown on the refurbishment, maintenance and fire &
-- flood pages, kept by the office at /admin/projects rather than in code.
-- Each has up to four finished photos, the first the large one. RLS on with no
-- policies, and no grants to the public roles: only the site's server code reads it.
-- The first run copies in the projects the site carried in code on
-- 23 November 2026; a second run adds nothing, because the table is no longer empty.

create table if not exists public.completed_projects (
	id uuid primary key default gen_random_uuid(),
	name text not null check (char_length(name) between 1 and 120),
	location text not null default '' check (char_length(location) <= 120),
	service text not null check (service in ('refurbishment', 'maintenance', 'fire-flood')),
	summary text not null check (char_length(summary) between 1 and 600),
	photos jsonb not null default '[]'::jsonb check (jsonb_typeof(photos) = 'array' and jsonb_array_length(photos) between 1 and 4),
	position integer not null default 0,
	updated_at timestamptz not null default now()
);

create index if not exists completed_projects_service_position_idx
	on public.completed_projects (service, position);

alter table public.completed_projects enable row level security;

revoke all on public.completed_projects from anon, authenticated;

insert into public.completed_projects (name, location, service, summary, photos, position)
select seed.name, seed.location, seed.service, seed.summary, seed.photos::jsonb, seed.position
from (values
	('Cadogan Square', 'Chelsea, London', 'refurbishment', 'A period flat refurbished throughout: an open living and dining room around a three-sided fire, a handleless kitchen with mirrored splashbacks and a stone-lined bathroom.', '[{"src":"/images/photos/projects/cadogan-square-living-room.webp","alt":"Living room at Cadogan Square with a three-sided fire, oak floor and shuttered sash windows"},{"src":"/images/photos/projects/cadogan-square-kitchen.webp","alt":"Handleless dark-oak kitchen at Cadogan Square with mirrored splashbacks"},{"src":"/images/photos/projects/cadogan-square-bathroom.webp","alt":"Stone-lined bathroom at Cadogan Square with a wall-hung basin and mirrored storage"}]', 1),
	('Hampton Court Residence', 'Hampton Court', 'refurbishment', 'A family house finished to a contemporary standard: a long kitchen and dining room opening onto the garden through full-height glazing, and a freestanding bath beneath an arched sash window.', '[{"src":"/images/photos/projects/hampton-court-kitchen.webp","alt":"Kitchen and dining room at the Hampton Court residence with full-height glazing to the garden"},{"src":"/images/photos/projects/hampton-court-bathroom.webp","alt":"Freestanding bath beneath an arched sash window at the Hampton Court residence"}]', 2),
	('Wimbledon Residence', 'Wimbledon, London', 'refurbishment', 'A detached family house finished outside as well as in, with a resin driveway, a timber carport and a terraced rear garden opening from folding glass doors.', '[{"src":"/images/photos/projects/wimbledon-front.webp","alt":"Front of the Wimbledon residence with its resin driveway and double garage"},{"src":"/images/photos/projects/wimbledon-rear.webp","alt":"Rear of the Wimbledon residence with folding glass doors onto a terraced garden"},{"src":"/images/photos/projects/wimbledon-driveway.webp","alt":"Timber carport and garage beside the driveway at the Wimbledon residence"}]', 3)
) as seed (name, location, service, summary, photos, position)
where not exists (select 1 from public.completed_projects);
