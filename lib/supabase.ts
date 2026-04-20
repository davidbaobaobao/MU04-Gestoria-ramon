import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  if (!_client) _client = createClient(url, key)
  return _client
}

// No-op chain: resolves to { data: null, error: null } when awaited.
// The proxy must handle `then` explicitly — otherwise `get: () => () => chain`
// would intercept it and make await hang forever.
function makeNoop(): unknown {
  const chain = new Proxy({} as Record<string | symbol, unknown>, {
    get(_t, prop) {
      if (prop === 'then') {
        return (
          resolve: (v: { data: null; error: null }) => void,
          _reject: unknown,
        ) => Promise.resolve({ data: null, error: null }).then(resolve)
      }
      // Every other method call (select, eq, order, …) returns the same chain
      return () => chain
    },
  })
  return chain
}

export const supabase = {
  from: (table: string): ReturnType<SupabaseClient['from']> => {
    const client = getSupabase()
    if (!client) return makeNoop() as unknown as ReturnType<SupabaseClient['from']>
    return client.from(table)
  },
}
