import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: LayoutServerLoad = async () => {
    let { data: lessons, error } = await supabase
        .from('lessons')
        .select('*')
        .order('created_at', {ascending: false});
        
    if (error) {
        console.error('Error loading lessons:', error.message);
        return { lessons: [] };
    }
    
    return { 
        lessons: lessons ?? []
    };
}