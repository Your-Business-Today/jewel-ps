-- The accreditations shown on the site, edited by the office at
-- /admin/accreditations rather than in code. A scheme whose expiry date has
-- passed drops off the public site by itself. RLS on with no policies, and no
-- grants to the public roles: only the site's server code reads it.
-- The first run copies in the schemes the site carried in code on
-- 13 November 2026; a second run adds nothing, because the table is no longer empty.

create table if not exists public.accreditations (
	id uuid primary key default gen_random_uuid(),
	name text not null check (char_length(name) between 1 and 120),
	image text not null check (char_length(image) between 1 and 500),
	registration text not null default '' check (char_length(registration) <= 60),
	expires date,
	href text not null default '' check (char_length(href) <= 500),
	position integer not null default 0,
	updated_at timestamptz not null default now()
);

create index if not exists accreditations_position_idx
	on public.accreditations (position);

alter table public.accreditations enable row level security;

revoke all on public.accreditations from anon, authenticated;

insert into public.accreditations (name, image, registration, expires, href, position)
select seed.name, seed.image, seed.registration, seed.expires::date, seed.href, seed.position
from (values
	('NAPIT Competent Person Scheme', '/images/accreditations/napit.png', 'NAP/82807/26/1', '2027-05-31', '', 1),
	('CHAS Accredited Contractor', '/images/accreditations/chas.png', 'CHAS-29004226', '2026-12-05', '', 2),
	('SafeContractor', '/images/accreditations/safecontractor.png', 'EX4295', '2027-02-26', '', 3),
	('NICEIC Registered', '/images/photos/NIC-EIC-Logo.webp', 'D609661', null, '', 4),
	('Fire Aware Main Contractors Charter', '/images/accreditations/fire-aware.png', '760-4896-308', '2027-09-08', '', 5),
	('Vantify Verified Pre-Qual', '/images/accreditations/vantify-verified-pre-qual.png', 'P360-006428', '2027-07-22', '', 6),
	('Vantify SSIP Deem to Satisfy', '/images/accreditations/vantify-ssip-deem-to-satisfy.png', 'P360-006727', '2026-12-05', '', 7),
	('Ecologi', '/images/accreditations/ecologi.png', 'ecologi.com/jewelpsltd', null, 'https://ecologi.com/jewelpsltd', 8)
) as seed (name, image, registration, expires, href, position)
where not exists (select 1 from public.accreditations);
