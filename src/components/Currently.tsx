const focus = [
  { label: "Ürün", title: "İki dikey SaaS ürünü geliştiriyorum.", text: "Qarson'da restoran operasyonlarını, Danışan Takvimi'nde uzmanların randevu akışını sadeleştiriyorum." },
  { label: "Mühendislik", title: "AI'ı özellik değil, sistem parçası olarak ele alıyorum.", text: "RAG, ajanlar ve otomasyonları ürünün geri kalanıyla güvenilir biçimde çalışan yapılara dönüştürüyorum." },
  { label: "Merak", title: "Karmaşık akışları sakin arayüzlere indirgemek.", text: "İyi bir ürünün teknik derinliğini kullanıcıya yük olmadan taşıması gerektiğine inanıyorum." },
];

export default function Currently() {
  return (
    <section className="now-section section-spacing" id="now">
      <div className="page-shell now-layout">
        <div><p className="eyebrow">Şu sıralar</p><h2>Ne üzerinde<br /><em>çalışıyorum?</em></h2></div>
        <div className="focus-list">
          {focus.map((item, index) => (
            <article key={item.label}>
              <span className="focus-list__number">0{index + 1}</span>
              <div><p className="focus-list__label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
