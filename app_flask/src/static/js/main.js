// main.js
// Effect Labページ：ギャラリーのクリックでメインプレビューを切り替える

// エフェクトを追加する場合はこのオブジェクトにキーを増やし、
// lab-galleryにdata-effectが一致するカードを追加すればよい
const EFFECTS = {
    a: {
        name: 'Ball Orbit Loader',
        method: 'CSS calc() + CSS Variables',
        usage: 'ローディング・ナビロゴ',
        desc: '6個のボールが円軌道上をバウンドしながら移動するローディング用エフェクト。JSを使わず、CSSのcalc()とカスタムプロパティだけでアニメーションのタイミングをずらしています。',
        render: () => `
            <div class="effect-a effect-a__orbit effect-a__orbit--lg">
                <div class="effect-a__ball"></div>
                <div class="effect-a__ball"></div>
                <div class="effect-a__ball"></div>
                <div class="effect-a__ball"></div>
                <div class="effect-a__ball"></div>
                <div class="effect-a__ball"></div>
                <div class="effect-a__center"></div>
            </div>
        `,
    },
};

function setActiveEffect(id) {
    const effect = EFFECTS[id];
    const stage = document.getElementById('lab-stage');
    if (!effect || !stage) return;

    stage.innerHTML = effect.render();
    document.getElementById('lab-effect-name').textContent = effect.name;
    document.getElementById('lab-effect-method').textContent = effect.method;
    document.getElementById('lab-effect-usage').textContent = effect.usage;
    document.getElementById('lab-effect-desc').textContent = effect.desc;

    document.querySelectorAll('.lab-card[data-effect]').forEach((card) => {
        card.classList.toggle('is-active', card.dataset.effect === id);
    });
}

const labStage = document.getElementById('lab-stage');
if (labStage) {
    document.querySelectorAll('.lab-card[data-effect]').forEach((card) => {
        card.addEventListener('click', () => setActiveEffect(card.dataset.effect));
    });

    setActiveEffect('a');
}
