import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://nizyxubmscteqijeuflg.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5penl4dWJtc2N0ZXFpamV1ZmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIzMDAsImV4cCI6MTk4Mzc0ODMwMH0.0wglxkk8EGfzrzWRhtBzK1hcHvjMV64FUGszj2pOBSU'


export const supabase = createClient(PROJECT_URL, PUBLIC_KEY)