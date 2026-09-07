/* =========================================================================
   Berenk — bulut ayarları
   Bu dosya index.html'den ÖNCE yüklenir. index.html'i güncellediğinde
   burası olduğu gibi kalır, anahtarlarını tekrar yazman gerekmez.

   Değerler boşken uygulama tamamen yerel çalışır: üyelik, yönetim paneli
   ve analitik görünmez, fotoğraflar yine cihazda kalır.
   ========================================================================= */
window.BERENK_CONFIG = {
  // Supabase → Project Settings → API → Project URL
  url: '',

  // Aynı sayfadaki "anon public" anahtarı (gizli değildir, tarayıcıda görünür)
  anonKey: '',

  // İsteğe bağlı Google Analytics 4 ölçüm kimliği, örn: 'G-XXXXXXXXXX'
  gaOlcumId: ''
};
