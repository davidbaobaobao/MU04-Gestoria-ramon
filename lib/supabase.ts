import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  if (!_client) _client = createClient(url, key)
  return _client
}

// Convenience alias used in server components
export const supabase = {
  from: (table: string) => {
    const client = getSupabase()
    if (!client) {
      // Return a chainable no-op that resolves to empty data
      const noop: Record<string, unknown> = {}
      const chain = new Proxy(noop, {
        get: () => () => chain,
      })
      ;(chain as { then: unknown }).then = (resolve: (v: { data: null }) => void) =>
        Promise.resolve(resolve({ data: null }))
      return chain as unknown as ReturnType<SupabaseClient['from']>
    }
    return client.from(table)
  },
}
