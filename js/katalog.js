let catalogsContainer = $("#catalogs");

for (let i = 0; i < 50; i++) {
  catalogsContainer.append(`
        <div class="catalog">
            <p>Masterclass</p>
            <img src="assets//italesse/italesse${i + 1}.png" />
        </div>`);
}
