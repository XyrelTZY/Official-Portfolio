import { ref, onMounted } from "vue";

export default function useTypewriter() {
  const typewriterRef = ref<HTMLElement | null>(null);

  const startTypewriter = (texts: string[], options = {}) => {
    if (typewriterRef.value) {
      const typewriter = new (window as any).Typewriter(typewriterRef.value, {
        loop: true,
        delay: 75,
        ...options,
      });

      texts.forEach((text, index) => {
        typewriter.typeString(text).pauseFor(500).deleteAll().start();
      });
    }
  };

  return {
    typewriterRef,
    startTypewriter,
  };
}
