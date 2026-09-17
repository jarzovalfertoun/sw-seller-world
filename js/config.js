// Database & App Configuration
const APP_CONFIG = {
  appName: 'RPW: Seller World',
  version: '1.0.0',
  // You can connect free Supabase credentials here when ready
  supabaseUrl: 'https://cgssnhubtfkieqsuixzu.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc3NuaHVidGZraWVxc3VpeHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NDAzMTcsImV4cCI6MjEwNTIxNjMxN30.S-ZQQE7hDvgiiZVzabzVlbIKEIOcZTJaSN-_nLx4Ye8'
};

// Initial State Storage
const AppState = {
  currentUser: {
    id: 'usr_01',
    username: 'nimow',
    name: 'Nian',
    verified: true,
    role: 'buyer_seller'
  },
  currentRoute: 'home',
  activeChat: null,
  activeTransaction: null
};
