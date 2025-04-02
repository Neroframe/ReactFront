import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Если передан state.scrollToServices, не сбрасываем скролл наверх
    if (location.state?.scrollToServices) return;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Небольшая задержка для рендеринга

    return () => clearTimeout(timer); // Очистить таймер при размонтировании
  }, [location]);

  return null;
};

export default ScrollToTop;
