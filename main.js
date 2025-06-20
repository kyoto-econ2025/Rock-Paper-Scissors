// --- プログラムで使う要素を、HTMLから取得する ---
const guBtn = document.getElementById('gu_btn');
const chokiBtn = document.getElementById('choki_btn');
const paBtn = document.getElementById('pa_btn');
const computerHandText = document.getElementById('computer_hand_text');
const resultText = document.getElementById('result_text');

// --- ボタンがクリックされたときの処理を登録する ---
guBtn.addEventListener('click', () => {
  playJanken(0); // プレイヤーの手が「グー」の場合
});

chokiBtn.addEventListener('click', () => {
  playJanken(1); // プレイヤーの手が「チョキ」の場合
});

paBtn.addEventListener('click', () => {
  playJanken(2); // プレイヤーの手が「パー」の場合
});


// --- じゃんけんのゲームロジック ---
function playJanken(playerHand) {
  // 0: グー, 1: チョキ, 2: パー

  // 1. コンピュータの手をランダムに決める
  const computerHand = Math.floor(Math.random() * 3);

  // 2. 手をテキストに変換する
  const hands = ['グー ✊', 'チョキ ✌️', 'パー ✋'];
  computerHandText.textContent = hands[computerHand];

  // 3. 勝敗を判定する
  if (playerHand === computerHand) {
    // あいこ
    resultText.textContent = 'あいこ';
    resultText.style.color = '#333';
  } else if (
    (playerHand === 0 && computerHand === 1) || // プレイヤー:グー, CPU:チョキ
    (playerHand === 1 && computerHand === 2) || // プレイヤー:チョキ, CPU:パー
    (playerHand === 2 && computerHand === 0)    // プレイヤー:パー, CPU:グー
  ) {
    // 勝ち
    resultText.textContent = 'あなたの勝ち！';
    resultText.style.color = '#e74c3c';
  } else {
    // 負け
    resultText.textContent = 'あなたの負け...';
    resultText.style.color = '#3498db';
  }
}