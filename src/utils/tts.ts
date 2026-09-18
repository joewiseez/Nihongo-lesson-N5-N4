export function playJapaneseAudio(text: string, slowRate: boolean = false) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis tidak didukung pada browser ini.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = slowRate ? 0.75 : 1.0;
  
  // Mencari voice Jepang jika tersedia
  const voices = window.speechSynthesis.getVoices();
  const jaVoice = voices.find(v => v.lang.startsWith('ja'));
  if (jaVoice) {
    utterance.voice = jaVoice;
  }
  window.speechSynthesis.speak(utterance);
}
