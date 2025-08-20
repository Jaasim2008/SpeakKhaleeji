import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
 
injectAnalytics({ mode: dev ? 'development' : 'production' });
//this file is currently only made for vercel analytics