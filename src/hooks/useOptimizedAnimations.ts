import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useOptimizedAnimations = () => {
  const animationsRef = useRef<ScrollTrigger[]>([]);

  const createScrollAnimation = (
    element: Element,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars,
    triggerOptions: ScrollTrigger.Vars
  ) => {
    const animation = gsap.fromTo(element, fromVars, toVars);
    const trigger = ScrollTrigger.create({
      ...triggerOptions,
      animation,
    });
    animationsRef.current.push(trigger);
    return trigger;
  };

  const createStaggerAnimation = (
    elements: NodeListOf<Element> | Element[],
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars,
    triggerOptions: ScrollTrigger.Vars
  ) => {
    const animation = gsap.fromTo(elements, fromVars, {
      ...toVars,
      stagger: toVars.stagger || 0.2,
    });
    const trigger = ScrollTrigger.create({
      ...triggerOptions,
      animation,
    });
    animationsRef.current.push(trigger);
    return trigger;
  };

  const cleanup = () => {
    animationsRef.current.forEach(trigger => trigger.kill());
    animationsRef.current = [];
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return {
    createScrollAnimation,
    createStaggerAnimation,
    cleanup,
  };
};