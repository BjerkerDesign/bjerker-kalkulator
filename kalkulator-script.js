document.addEventListener('DOMContentLoaded', function() {
    const kalkulator = {
        totalPris: 0,
        
        init: function() {
            this.renderKalkulator();
            this.setupEventListeners();
        },

        renderKalkulator: function() {
            const container = document.getElementById('bjerker-kalkulator');
            container.innerHTML = `
                <div class="bjerker-kalkulator">
                    <div class="pris-container">
                        <h3>Totalpris: <span id="totalPris">0</span> NOK</h3>
                        <div class="mva-info">Alle priser er eks. mva.</div>
                    </div>

                    <h2>Velg nettside pakke</h2>
                    
                    <button class="pakke-knapp" data-pris="7000" data-tid="3">
                        Basic pakke
                        <div class="produksjonstid">Produksjonstid: 3 dager</div>
                    </button>
                    
                    <button class="pakke-knapp" data-pris="20000" data-tid="7">
                        Standard pakke
                        <div class="produksjonstid">Produksjonstid: 7 dager</div>
                    </button>
                    
                    <button class="pakke-knapp" data-pris="30000" data-tid="14">
                        Premium pakke
                        <div class="produksjonstid">Produksjonstid: 14 dager</div>
                    </button>

                    <div class="navigasjon">
                        <button class="nav-knapp tilbake">Tilbake</button>
                        <button class="nav-knapp neste">Neste</button>
                    </div>
                </div>
            `;
        },

        setupEventListeners: function() {
            document.querySelectorAll('.pakke-knapp').forEach(knapp => {
                knapp.addEventListener('click', (e) => {
                    const pris = parseInt(e.target.dataset.pris);
                    document.querySelectorAll('.pakke-knapp').forEach(k => k.classList.remove('valgt'));
                    e.target.classList.add('valgt');
                    this.totalPris = pris;
                    this.oppdaterPris();
                });
            });
        },

        oppdaterPris: function() {
            document.getElementById('totalPris').textContent = 
                this.totalPris.toLocaleString('no-NO');
        }
    };

    kalkulator.init();
});

