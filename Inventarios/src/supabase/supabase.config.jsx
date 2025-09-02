import {createCliente} from "@supabase/supabase-js"
export const supabase = createCliente(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)