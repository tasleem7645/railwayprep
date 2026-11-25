import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://xzzupkexiztaustarwff.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ZfuiNOVgwfPbafSTWO5yhg_mxuKZAdU';

export const ADMIN_EMAIL = 'mdtasleem7645@gmail.com';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const isUserAdmin = (user) => {
  return user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
};
