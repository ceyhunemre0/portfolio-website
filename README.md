# Ceyhun Emre Top portfolio

Tek sayfalık, kaydırmayla ilerleyen kişisel portfolyo. Next.js 16 ve React 19 kullanır. Yazı tipleri projede yerel olarak barındırılır.

## Geliştirme

```bash
pnpm install
pnpm dev
```

Site `http://localhost:3000` adresinde açılır. Yayın derlemesini doğrulamak için `pnpm build` çalıştırın.

## Yapı

- `src/components/ScrollStory.tsx`: sahneler, projeler ve kaydırma hareketi.
- `src/app/globals.css`: düzen, renkler, yazı tipleri ve animasyonlar.
- `public/`: sitede kullanılan proje görselleri ve logo.
- `src/app/api/contact/route.ts`: bağımsız iletişim uç noktası. Mevcut sayfa bu uç noktayı çağırmaz; kullanımı için `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USERNAME`, `EMAIL_PASSWORD` ve `TO_EMAIL` ortam değişkenleri gerekir.
