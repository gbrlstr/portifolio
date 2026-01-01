// Função de easing suave (ease-out-cubic) - mais rápido no início
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

// Função de scroll suave customizada - mais rápida e responsiva
const smoothScrollTo = (targetPosition: number, duration: number = 500) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // Se a distância for muito pequena, fazer scroll instantâneo
  if (Math.abs(distance) < 50) {
    window.scrollTo(0, targetPosition);
    return;
  }
  
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Garantir que chegou na posição final
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animation);
};

const vScroll = {
  mounted: (el: any, binding: any) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", (e: Event) => {
      e.preventDefault();
      
      const href = el.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      // Offset padrão de 100px (altura do header + espaçamento) ou o valor passado no binding
      const offset = binding.value || 100;
      
      // Calcular a posição do elemento de destino
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      // Usar scroll suave mais rápido (500ms ao invés de 800ms)
      smoothScrollTo(offsetPosition, 500);
    });
  }
};

export default vScroll;
