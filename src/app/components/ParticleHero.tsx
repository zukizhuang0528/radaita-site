import { useEffect, useRef } from "react";

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = Math.max(1, Math.floor(canvas.parentElement?.clientWidth || window.innerWidth));
    let height = canvas.height = Math.max(1, Math.floor(canvas.parentElement?.clientHeight || window.innerHeight));

    function getPhrases(screenSize: string) {
      if (screenSize === 'se' || screenSize === 'xs' || screenSize === 'sm') {
        return ["Radaita", "Transform\ncomplexity\ninto", "AI-ready\ndata"];
      } else if (screenSize === 'md') {
        return ["Radaita", "Transform\ncomplexity\ninto", "AI-ready\ndata"];
      } else if (screenSize === 'lg') {
        return ["Radaita", "Transform\ncomplexity\ninto", "AI-ready\ndata"];
      } else if (screenSize === 'xl') {
        return ["Radaita", "Transform\ncomplexity\ninto", "AI-ready\ndata"];
      } else {
        return ["Radaita", "Transform\ncomplexity into", "AI-ready data"];
      }
    }

    let PHRASES = getPhrases(getScreenSize());
    let currentPhraseIndex = 0;
    let phase = 'FORM';
    let phaseStartTime = performance.now();

    const TIMINGS = { FORM: 1500, HOLD: 800, DISSOLVE: 600 };

    function randomNormal(mean = 0, stdDev = 1) {
      const u = 1 - Math.random();
      const v = Math.random();
      const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return z * stdDev + mean;
    }

    function getScreenSize() {
      if (width < 390) return 'se';
      if (width < 480) return 'xs';
      if (width < 640) return 'sm';
      if (width < 768) return 'md';
      if (width < 1024) return 'lg';
      if (width < 1280) return 'xl';
      if (width < 1920) return '2xl';
      return '3xl';
    }

    function getParticleSizeConfig(screenSize: string) {
      const configs = {
        se:  { bgMean: 2.0, bgStd: 1.2, textMean: 1.2, textStd: 1.0, targetMean: 0.8, targetStd: 0.25 },
        xs:  { bgMean: 2.5, bgStd: 1.5, textMean: 1.4, textStd: 1.2, targetMean: 0.9, targetStd: 0.3 },
        sm:  { bgMean: 3.0, bgStd: 2.0, textMean: 1.6, textStd: 1.4, targetMean: 1.0, targetStd: 0.3 },
        md:  { bgMean: 3.5, bgStd: 2.5, textMean: 1.8, textStd: 1.6, targetMean: 1.1, targetStd: 0.35 },
        lg:  { bgMean: 4.0, bgStd: 3.0, textMean: 2.0, textStd: 1.8, targetMean: 1.2, targetStd: 0.4 },
        xl:  { bgMean: 4.0, bgStd: 3.0, textMean: 2.2, textStd: 2.0, targetMean: 1.3, targetStd: 0.4 },
        '2xl': { bgMean: 4.0, bgStd: 3.0, textMean: 2.4, textStd: 2.2, targetMean: 1.4, targetStd: 0.4 },
        '3xl': { bgMean: 4.5, bgStd: 3.0, textMean: 2.6, textStd: 2.4, targetMean: 1.5, targetStd: 0.45 },
      };
      return configs[screenSize as keyof typeof configs] || configs.lg;
    }

    let screenSize = getScreenSize();
    let sizeConfig = getParticleSizeConfig(screenSize);

    class Particle {
      x: number; y: number;
      targetX: number; targetY: number;
      isTargeting: boolean;
      isBackground: boolean;
      flyingColor: { r: number; g: number; b: number };
      targetColor: { r: number; g: number; b: number };
      currentColor: { r: number; g: number; b: number };
      baseSize: number;
      targetSize: number;
      currentSize: number;
      baseAlpha: number;
      targetAlpha: number;
      currentAlpha: number;
      vx: number; vy: number;
      baseX: number; baseY: number;

      constructor(w: number, h: number, isBg = false) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.targetX = this.x;
        this.targetY = this.y;
        this.isTargeting = false;
        this.isBackground = isBg;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.baseSize = isBg
          ? Math.max(1.0, Math.min(12.0, randomNormal(sizeConfig.bgMean, sizeConfig.bgStd)))
          : Math.max(0.8, Math.min(15.0, randomNormal(sizeConfig.textMean, sizeConfig.textStd)));
        this.targetSize = Math.max(0.8, Math.min(3.0, randomNormal(sizeConfig.targetMean, sizeConfig.targetStd)));
        this.currentSize = this.baseSize;
        const isHiddenFlyer = isBg ? false : Math.random() > 0.2;
        this.baseAlpha = isHiddenFlyer ? 0 : Math.max(0.1, Math.min(0.6, randomNormal(0.3, 0.2)));
        this.targetAlpha = Math.max(0.7, Math.min(1.0, randomNormal(0.9, 0.1)));
        this.currentAlpha = this.baseAlpha;
        const isLightPurple = Math.random() > 0.8;
        this.flyingColor = isLightPurple ? { r: 167, g: 139, b: 250 } : { r: 139, g: 92, b: 246 };
        const isWhite = Math.random() > 0.10;
        this.targetColor = isWhite ? { r: 255, g: 255, b: 255 } : { r: 167, g: 139, b: 250 };
        this.currentColor = { ...this.flyingColor };
      }

      update(time: number) {
        const targetS = this.isTargeting ? this.targetSize : this.baseSize;
        this.currentSize += (targetS - this.currentSize) * 0.1;
        const targetC = this.isTargeting ? this.targetColor : this.flyingColor;
        this.currentColor.r += (targetC.r - this.currentColor.r) * 0.1;
        this.currentColor.g += (targetC.g - this.currentColor.g) * 0.1;
        this.currentColor.b += (targetC.b - this.currentColor.b) * 0.1;
        const targetA = this.isTargeting ? this.targetAlpha : this.baseAlpha;
        this.currentAlpha += (targetA - this.currentAlpha) * 0.1;

        if (phase === 'FORM' || phase === 'HOLD') {
          if (this.isTargeting) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            this.x += dx * 0.08;
            this.y += dy * 0.08;
            const wobbleAmplitude = 0.15;
            const wobbleSpeed = 0.002;
            this.x += Math.sin(time * wobbleSpeed + this.baseX) * wobbleAmplitude;
            this.y += Math.cos(time * wobbleSpeed + this.baseY) * wobbleAmplitude;
          } else {
            this.x += this.vx;
            this.y += this.vy;
            this.wrap();
          }
        } else if (phase === 'DISSOLVE') {
          this.x += this.vx;
          this.y += this.vy;
          this.vx *= 0.95;
          this.vy *= 0.95;
          this.vx += (Math.random() - 0.5) * 0.1;
          this.vy += (Math.random() - 0.5) * 0.1;
          const speed = Math.hypot(this.vx, this.vy);
          if (speed > 2) { this.vx = (this.vx / speed) * 2; this.vy = (this.vy / speed) * 2; }
          this.wrap();
        }
      }

      wrap() {
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        const fadeDist = 15;
        const edgeDistX = Math.min(this.x, width - this.x);
        const edgeDistY = Math.min(this.y, height - this.y);
        const alphaX = Math.max(0, Math.min(1, edgeDistX / fadeDist));
        const alphaY = Math.max(0, Math.min(1, edgeDistY / fadeDist));
        const alpha = alphaX * alphaY * this.currentAlpha;
        if (alpha <= 0) return;
        context.fillStyle = `rgba(${Math.round(this.currentColor.r)}, ${Math.round(this.currentColor.g)}, ${Math.round(this.currentColor.b)}, ${alpha})`;
        context.beginPath();
        context.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        context.fill();
      }
    }

    function getParticleCount(screenSize: string) {
      const counts = {
        se:    { text: 1100, bg: 140 },
        xs:    { text: 1400, bg: 180 },
        sm:    { text: 1800, bg: 220 },
        md:    { text: 2200, bg: 280 },
        lg:    { text: 2800, bg: 380 },
        xl:    { text: 3600, bg: 450 },
        '2xl': { text: 4500, bg: 550 },
        '3xl': { text: 5500, bg: 650 },
      };
      return counts[screenSize as keyof typeof counts] || counts.lg;
    }

    let particles: Particle[] = [];
    let particleCount = getParticleCount(screenSize);

    for (let i = 0; i < particleCount.text; i++) particles.push(new Particle(width, height, false));
    for (let i = 0; i < particleCount.bg; i++) particles.push(new Particle(width, height, true));

    function getTextCoordinates(text: string) {
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const oCtx = offscreen.getContext('2d', { willReadFrequently: true });
      if (!oCtx) return [];

      let fontSize = 100;
      if (currentPhraseIndex === 0) {
        if (screenSize === 'se') fontSize = 76;
        else if (screenSize === 'xs') fontSize = 88;
        else if (screenSize === 'sm') fontSize = 112;
        else if (screenSize === 'md') fontSize = 130;
        else if (screenSize === 'lg') fontSize = 148;
        else if (screenSize === 'xl') fontSize = 190;
        else if (screenSize === '2xl') fontSize = Math.min(228, width * 0.19);
        else fontSize = Math.min(254, width * 0.19);
      } else if (currentPhraseIndex === 1) {
        if (screenSize === 'se') fontSize = 54;
        else if (screenSize === 'xs') fontSize = 64;
        else if (screenSize === 'sm') fontSize = 80;
        else if (screenSize === 'md') fontSize = 94;
        else if (screenSize === 'lg') fontSize = 108;
        else if (screenSize === 'xl') fontSize = 120;
        else if (screenSize === '2xl') fontSize = Math.min(136, width * 0.122);
        else fontSize = Math.min(153, width * 0.122);
      } else if (currentPhraseIndex === 2) {
        if (screenSize === 'se') fontSize = 60;
        else if (screenSize === 'xs') fontSize = 70;
        else if (screenSize === 'sm') fontSize = 88;
        else if (screenSize === 'md') fontSize = 104;
        else if (screenSize === 'lg') fontSize = 124;
        else if (screenSize === 'xl') fontSize = 144;
        else if (screenSize === '2xl') fontSize = Math.min(160, width * 0.144);
        else fontSize = Math.min(180, width * 0.144);
      }

      oCtx.font = `600 ${fontSize}px "Poppins", system-ui, -apple-system, sans-serif`;
      oCtx.fillStyle = 'white';
      oCtx.textAlign = 'center';
      oCtx.textBaseline = 'middle';
      const lines = text.split('\n');
      const lineHeight = fontSize * 1.2;
      const totalHeight = lines.length * lineHeight;
      lines.forEach((line, i) => {
        const y = height / 2 - totalHeight / 2 + lineHeight * i + lineHeight / 2;
        oCtx.fillText(line, width / 2, y);
      });

      const imageData = oCtx.getImageData(0, 0, width, height).data;
      const coords = [];
      let step = 6;
      if (screenSize === 'se') step = 2;
      else if (screenSize === 'xs') step = 2;
      else if (screenSize === 'sm') step = 2;
      else if (screenSize === 'md') step = 3;
      else if (screenSize === 'lg') step = 4;
      else if (screenSize === 'xl') step = 4;
      else if (screenSize === '2xl') step = 5;
      else step = 5;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (Math.floor(y) * width + Math.floor(x)) * 4;
          if (imageData[index + 3] > 128) coords.push({ x, y });
        }
      }
      return coords;
    }

    function setTargets() {
      const coords = getTextCoordinates(PHRASES[currentPhraseIndex]);
      for (let i = coords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coords[i], coords[j]] = [coords[j], coords[i]];
      }
      particles.forEach(p => {
        p.isTargeting = false;
        p.vx = (Math.random() - 0.5) * 0.6;
        p.vy = (Math.random() - 0.5) * 0.6;
      });
      const textParticles = particles.filter(p => !p.isBackground);
      const maxTargets = Math.min(coords.length, textParticles.length);
      for (let i = 0; i < maxTargets; i++) {
        textParticles[i].targetX = coords[i].x;
        textParticles[i].targetY = coords[i].y;
        textParticles[i].isTargeting = true;
        if (currentPhraseIndex === 0) {
          const isWhite = Math.random() > 0.03;
          textParticles[i].targetColor = isWhite
            ? { r: 255, g: 255, b: 255 }
            : { r: 200, g: 180, b: 255 };
          textParticles[i].targetAlpha = Math.max(0.82, Math.min(1.0, randomNormal(0.95, 0.05)));
        } else {
          const isWhite = Math.random() > 0.10;
          textParticles[i].targetColor = isWhite
            ? { r: 255, g: 255, b: 255 }
            : { r: 167, g: 139, b: 250 };
          textParticles[i].targetAlpha = Math.max(0.7, Math.min(1.0, randomNormal(0.9, 0.1)));
        }
      }
    }

    setTargets();

    function render(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const elapsed = time - phaseStartTime;

      if (phase === 'FORM' && elapsed > TIMINGS.FORM) {
        phase = 'HOLD'; phaseStartTime = time;
      } else if (phase === 'HOLD' && elapsed > TIMINGS.HOLD) {
        phase = 'DISSOLVE'; phaseStartTime = time;
        particles.forEach(p => {
          if (p.isTargeting) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 15 + 5;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.isTargeting = false;
          }
        });
      } else if (phase === 'DISSOLVE' && elapsed > TIMINGS.DISSOLVE) {
        phase = 'FORM'; phaseStartTime = time;
        currentPhraseIndex = (currentPhraseIndex + 1) % PHRASES.length;
        setTargets();
      }

      for (let i = 0; i < particles.length; i++) particles[i].update(time);
      for (let i = 0; i < particles.length; i++) { if (!particles[i].isTargeting) particles[i].draw(ctx); }
      for (let i = 0; i < particles.length; i++) { if (particles[i].isTargeting) particles[i].draw(ctx); }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = Math.max(1, canvas.parentElement.clientWidth);
      height = canvas.height = Math.max(1, canvas.parentElement.clientHeight);
      screenSize = getScreenSize();
      PHRASES = getPhrases(screenSize);
      sizeConfig = getParticleSizeConfig(screenSize);
      particleCount = getParticleCount(screenSize);
      const newTotal = particleCount.text + particleCount.bg;
      if (newTotal > particles.length) {
        for (let i = particles.length; i < newTotal; i++) particles.push(new Particle(width, height, false));
      } else if (newTotal < particles.length) {
        particles.splice(newTotal);
      }
      setTargets();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-b border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_50%_50%,#000_60%,transparent_100%)] z-0" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] max-[389px]:w-[220px] max-[389px]:h-[220px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#8B5CF6]/20 rounded-full blur-[60px] max-[389px]:blur-[60px] sm:blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] max-[389px]:w-[140px] max-[389px]:h-[140px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#A78BFA]/10 rounded-full blur-[40px] max-[389px]:blur-[40px] sm:blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen z-0" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-10" />

      {/* CTA Button */}
      <style>{`
        @keyframes auroraShift {
          0%   { background-position: 0% 50%; }
          25%  { background-position: 60% 20%; }
          50%  { background-position: 100% 80%; }
          75%  { background-position: 40% 100%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes auroraRotate {
          0%   { transform: rotate(0deg) scale(1.4); }
          100% { transform: rotate(360deg) scale(1.4); }
        }
        .btn-hero {
          position: relative;
          overflow: hidden;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .btn-hero::before {
          content: '';
          position: absolute;
          inset: -60%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(109, 40, 217, 0.55) 40deg,
            rgba(167, 139, 250, 0.70) 90deg,
            rgba(216, 180, 254, 0.45) 130deg,
            transparent 160deg,
            rgba(139, 92, 246, 0.60) 220deg,
            rgba(192, 132, 252, 0.50) 270deg,
            transparent 310deg,
            rgba(109, 40, 217, 0.40) 340deg,
            transparent 360deg
          );
          animation: auroraRotate 8s linear infinite;
          border-radius: 50%;
          filter: blur(14px);
          z-index: 0;
        }
        .btn-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 10, 0.55);
          border-radius: 9999px;
          z-index: 1;
        }
        .btn-hero > * {
          position: relative;
          z-index: 2;
        }
        .btn-hero:hover::before {
          animation: auroraRotate 3s linear infinite;
          filter: blur(8px);
        }
        .btn-hero:hover::after {
          background: rgba(109, 40, 217, 0.75);
        }
      `}</style>
      <div className="absolute top-[78%] sm:top-[76%] md:top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-4 w-full max-w-[90%] sm:max-w-none sm:w-auto">
        <button className="btn-hero group relative flex items-center gap-1.5 max-[389px]:gap-1.5 sm:gap-2.5 md:gap-3 pl-3 max-[389px]:pl-3 sm:pl-5 md:pl-6 pr-0 py-0 rounded-full border border-white/70 text-white font-medium text-[10px] max-[389px]:text-[10px] sm:text-sm md:text-base hover:scale-105 backdrop-blur-sm w-auto mx-auto">
          <span className="whitespace-nowrap">Accelerate your AI transformation</span>
          <span className="flex items-center justify-center w-8 h-8 max-[389px]:w-8 max-[389px]:h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-white/70 text-white shrink-0">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]">
              <path d="M3 10H17M17 10L11.5 4.5M17 10L11.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
