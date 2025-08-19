import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { data: lesson, error: err } = await supabase
        .from('lessons')
        .select('*')
        .eq('urltitle', params.slug)
        .single();
        
    if (err || !lesson) {
        throw error(404, 'Lesson not found');
    }
    
    return { lesson };
};