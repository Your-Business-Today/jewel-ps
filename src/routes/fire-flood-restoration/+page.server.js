import { projectsForService } from '$lib/server/projects-store.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => ({ completedProjects: await projectsForService('fire-flood') });
