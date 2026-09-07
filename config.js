/* =========================================================================
   Berenk — bulut ayarları
   Bu dosya index.html'den ÖNCE yüklenir. index.html'i güncellediğinde
   burası olduğu gibi kalır, anahtarlarını tekrar yazman gerekmez.

   Değerler boşken uygulama tamamen yerel çalışır: üyelik, yönetim paneli
   ve analitik görünmez, fotoğraflar yine cihazda kalır.
   ========================================================================= */
window.BERENK_CONFIG = {
  // Supabase → Project Settings → API → Project URL
  url: 'https://rtrqowhcdpvvmblxwnhp.supabase.co',

  // Aynı sayfadaki "anon public" anahtarı (gizli değildir, tarayıcıda görünür)
  anonKey: 'sb_publishable_y1TnYYBnoEEfM54DdIMnTA_ClA5hhNM',

  // İsteğe bağlı Google Analytics 4 ölçüm kimliği, örn: 'G-XXXXXXXXXX'
  gaOlcumId: ''
};
