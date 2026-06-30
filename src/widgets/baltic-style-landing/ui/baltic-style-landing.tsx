"use client";

import {
  type PointerEvent,
  type ReactElement,
  type ReactNode,
  type WheelEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { balticStyle, type ProjectIconName } from "@/entities/baltic-style";
import { ThemeToggleButton } from "@/features/theme-switcher";
import patchcords from "@/assets/patchcords.png";

const iconPaths: Record<ProjectIconName | "phone", ReactElement> = {
  phone: (
    <path d="M18.9 15.7c-1.1 0-2.2-.2-3.2-.6-.5-.2-1-.1-1.4.3l-1.5 1.9c-2.8-1.4-5.2-3.8-6.7-6.7L8 9.1c.4-.4.5-.9.3-1.4-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H3.7c-.8 0-1.7.4-1.7 1.5C2 13.7 9.3 21 18.5 21c1.1 0 1.5-.9 1.5-1.7v-2.1c0-.8-.3-1.5-1.1-1.5Z" />
  ),
  server: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v3A2.5 2.5 0 0 1 17.5 11h-11A2.5 2.5 0 0 1 4 8.5v-3Zm0 10A2.5 2.5 0 0 1 6.5 13h11a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01M10 7h7M10 17h7" />
  ),
  network: (
    <path d="M12 4v5m0 0H7m5 0h5M7 9v4m10-4v4M5 13h4v7H5v-7Zm10 0h4v7h-4v-7Zm-5-9h4v5h-4V4Z" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5" />
  ),
  cloud: (
    <path d="M7.5 18h9.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 5.6 11 3.5 3.5 0 0 0 7.5 18Z" />
  ),
  support: (
    <path d="M4 12a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-2v-6h5M4 15a3 3 0 0 0 3 3h2v-6H4v3Zm8 5h3" />
  ),
};

function Icon({ name }: { name: ProjectIconName | "phone" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {iconPaths[name]}
    </svg>
  );
}

type SliderDirection = "prev" | "next";

const PROJECT_SLIDER_SPEED = 0.045;
const PROJECT_SLIDER_RESUME_DELAY = 700;
const PROJECT_SLIDER_COPY_COUNT = 3;

type BalticStyleShellProps = {
  children: ReactNode;
};

export function BalticStyleShell({ children }: BalticStyleShellProps) {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  return (
    <>
      <TopBar aria-labelledby="company-title">
        <ContentRow>
          <CompanyBlock href="/" prefetch={false} aria-label={`${balticStyle.company.name}: на главную`}>
            <Logo aria-hidden="true">{balticStyle.company.logoText}</Logo>
            <CompanyText>
              <h1 id="company-title">{balticStyle.company.name}</h1>
              <p>{balticStyle.company.slogan}</p>
            </CompanyText>
          </CompanyBlock>
          <PhoneLink href={balticStyle.company.phoneHref} aria-label={balticStyle.company.phone}>
            <Icon name="phone" />
            <span>{balticStyle.company.phone}</span>
          </PhoneLink>
        </ContentRow>
      </TopBar>

      <NavSection aria-label="Основная навигация">
        <NavList>
          {balticStyle.navItems.map((item) => {
            const isActive = normalizedPathname === item.href;

            return (
              <NavLink
                key={item.href}
                href={item.href}
                prefetch={false}
                $active={isActive}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </NavLink>
            );
          })}
        </NavList>
      </NavSection>

      <MainContent id="main-content">{children}</MainContent>

      <Footer>
        <FooterInner>
          <FooterContent>
            <b>{balticStyle.company.name}</b>
            <p>{balticStyle.footer.copyright}</p>
            <p>{balticStyle.footer.address}</p>
            <p>{balticStyle.footer.phones}</p>
            <p>{balticStyle.footer.requisites}</p>
            <a href={`mailto:${balticStyle.company.email}`}>{balticStyle.footer.email}</a>
          </FooterContent>
          <ThemeSlot>
            <ThemeToggleButton />
          </ThemeSlot>
        </FooterInner>
      </Footer>
    </>
  );
}

export function BalticStyleLanding() {
  const [projectSliderRef, projectSliderApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
    skipSnaps: true,
    slidesToScroll: 1,
  });
  const sliderDirectionRef = useRef<SliderDirection>("next");
  const isProjectSliderPausedRef = useRef(false);
  const resumeProjectSliderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerXRef = useRef(0);
  const isPointerTrackingRef = useRef(false);

  const clearProjectSliderResume = useCallback(() => {
    if (resumeProjectSliderTimeoutRef.current) {
      clearTimeout(resumeProjectSliderTimeoutRef.current);
      resumeProjectSliderTimeoutRef.current = null;
    }
  }, []);

  const pauseProjectSlider = useCallback(() => {
    clearProjectSliderResume();
    isProjectSliderPausedRef.current = true;
  }, [clearProjectSliderResume]);

  const resumeProjectSlider = useCallback(
    (delay = PROJECT_SLIDER_RESUME_DELAY) => {
      clearProjectSliderResume();

      resumeProjectSliderTimeoutRef.current = setTimeout(() => {
        isProjectSliderPausedRef.current = false;
        resumeProjectSliderTimeoutRef.current = null;
      }, delay);
    },
    [clearProjectSliderResume],
  );

  useEffect(() => clearProjectSliderResume, [clearProjectSliderResume]);

  useEffect(() => {
    if (!projectSliderApi) {
      return;
    }

    let frameId = 0;
    let previousTime = 0;

    const animateProjectSlider = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 48) : 0;
      previousTime = time;

      if (isProjectSliderPausedRef.current) {
        frameId = window.requestAnimationFrame(animateProjectSlider);
        return;
      }

      const engine = projectSliderApi.internalEngine();
      const direction = sliderDirectionRef.current === "next" ? -1 : 1;
      const distance = direction * PROJECT_SLIDER_SPEED * elapsed;

      engine.location.add(distance);
      engine.target.set(engine.location);
      engine.previousLocation.set(engine.location);
      engine.offsetLocation.set(engine.location);
      engine.scrollLooper.loop(direction);
      engine.slideLooper.loop();
      engine.translate.to(engine.location.get());
      projectSliderApi.emit("scroll");

      frameId = window.requestAnimationFrame(animateProjectSlider);
    };

    frameId = window.requestAnimationFrame(animateProjectSlider);

    return () => window.cancelAnimationFrame(frameId);
  }, [projectSliderApi]);

  const handleProjectSliderPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pauseProjectSlider();
    isPointerTrackingRef.current = true;
    lastPointerXRef.current = event.clientX;
  };

  const handleProjectSliderPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerTrackingRef.current) {
      return;
    }

    const pointerDelta = event.clientX - lastPointerXRef.current;

    if (Math.abs(pointerDelta) > 0.5) {
      sliderDirectionRef.current = pointerDelta > 0 ? "prev" : "next";
      lastPointerXRef.current = event.clientX;
    }
  };

  const finishProjectSliderDrag = () => {
    isPointerTrackingRef.current = false;
    resumeProjectSlider();
  };

  const handleProjectSliderWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 1) {
      return;
    }

    sliderDirectionRef.current = event.deltaX > 0 ? "next" : "prev";
    pauseProjectSlider();
    resumeProjectSlider();
  };

  return (
    <>
      <PromoSection>
        <PromoInner>
          <PromoCopy>
            <h2>{balticStyle.hero.title}</h2>
            <p>{balticStyle.hero.subtitle}</p>
          </PromoCopy>
          <PhotoPlaceholder role="img" aria-label="Заглушка фотографии IT-инфраструктуры">
            <Image
              src={patchcords.src}
              alt="Патч-корды и сетевая инфраструктура"
            />
          </PhotoPlaceholder>
        </PromoInner>
      </PromoSection>

      <AboutSection id="baltic-about" aria-labelledby="baltic-about-title">
        <NarrowContent>
          <SectionTitle id="baltic-about-title">{balticStyle.about.title}</SectionTitle>
          <AboutText>
            {balticStyle.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AboutText>
        </NarrowContent>
      </AboutSection>

      <ProjectsSection id="baltic-projects" aria-labelledby="baltic-projects-title">
        <AnchorTarget id="baltic-partners" aria-hidden="true" />
        <AnchorTarget id="baltic-news" aria-hidden="true" />
        <ContentColumn>
          <SectionHeadRow>
            <SectionTitle id="baltic-projects-title">Реализованные проекты</SectionTitle>
          </SectionHeadRow>
          <ProjectSlider>
            <ProjectSliderViewport
              ref={projectSliderRef}
              tabIndex={0}
              aria-label="Слайдер реализованных проектов"
              onBlur={() => resumeProjectSlider()}
              onFocus={pauseProjectSlider}
              onPointerCancel={finishProjectSliderDrag}
              onPointerDown={handleProjectSliderPointerDown}
              onPointerMove={handleProjectSliderPointerMove}
              onPointerUp={finishProjectSliderDrag}
              onWheel={handleProjectSliderWheel}
            >
              <ProjectTrack>
                {Array.from({ length: PROJECT_SLIDER_COPY_COUNT }, (_, copyIndex) =>
                  balticStyle.projectSliderItems.map((item) => (
                    <ProjectSlide key={`${copyIndex}-${item.label}`}>
                      <IconBox>
                        <Icon name={item.icon} />
                      </IconBox>
                      <span>{item.label}</span>
                    </ProjectSlide>
                  )),
                )}
              </ProjectTrack>
            </ProjectSliderViewport>
          </ProjectSlider>
        </ContentColumn>
      </ProjectsSection>

      <AdvantagesSection aria-label="Преимущества Балтик Стайл">
        <AdvantagesGrid>
          {balticStyle.advantages.map((item) => (
            <Advantage key={item.label}>
              <IconBox>
                <Icon name={item.icon} />
              </IconBox>
              <b>{item.label}</b>
            </Advantage>
          ))}
        </AdvantagesGrid>
      </AdvantagesSection>

      <DirectionsSection id="baltic-directions" aria-labelledby="baltic-directions-title">
        <ContentColumn>
          <SectionTitle id="baltic-directions-title">Ключевые направления</SectionTitle>
          <DirectionsList>
            {balticStyle.directions.map((item) => (
              <DirectionItem key={item.title}>
                <SmallIconBox>
                  <Icon name={item.icon} />
                </SmallIconBox>
                <div>
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                </div>
              </DirectionItem>
            ))}
          </DirectionsList>
        </ContentColumn>
      </DirectionsSection>

      <ContactSection id="baltic-contact" aria-labelledby="baltic-contact-title">
        <ContactGrid>
          <ContactCopy>
            <SectionTitle id="baltic-contact-title">{balticStyle.contact.title}</SectionTitle>
            <p>{balticStyle.contact.intro}</p>
          </ContactCopy>
          <ContactForm onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>{balticStyle.contact.fields.name}</span>
              <input name="name" autoComplete="name" />
            </label>
            <label>
              <span>{balticStyle.contact.fields.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              <span>{balticStyle.contact.fields.email}</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="wide">
              <span>{balticStyle.contact.fields.message}</span>
              <textarea name="message" rows={4} />
            </label>
            <FormActions>
              <FileButton>
                {balticStyle.contact.fields.file}
                <input type="file" name="attachment" />
              </FileButton>
              <SubmitButton type="submit">{balticStyle.contact.fields.submit}</SubmitButton>
            </FormActions>
          </ContactForm>
        </ContactGrid>
      </ContactSection>
    </>
  );
}

const Shell = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
  }
`;

const BaseSection = styled.section`
  position: relative;
  display: grid;
  align-items: center;
`;

const RaisedAnchor = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;

  border: 2px solid transparent;
  background: var(--surface);

  box-shadow:
      8px 8px 18px var(--shadow-dark),
      -8px -8px 18px var(--shadow-light);

  transition:
      transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 250ms ease,
      color 250ms ease,
      background-color 250ms ease;

  &:hover {
    transform: translate3d(0, -4px, 0);
    border-color: #0b1c2d;

    box-shadow:
        12px 16px 26px var(--shadow-dark),
        -12px -12px 24px var(--shadow-light);
  }

  &:active {
    transform: translate3d(0, -1px, 0);

    box-shadow:
        inset 8px 8px 16px var(--shadow-pressed),
        inset -8px -8px 16px var(--shadow-light);

    transition-duration: 80ms;
  }
`;

const RaisedButton = styled.button`
  position: relative;
  border: 0;
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);

  &:active {
    transform: translateY(2px);
    box-shadow:
      inset 8px 8px 16px var(--shadow-pressed),
      inset -8px -8px 16px var(--shadow-light);
    transition-duration: 90ms;
  }
`;

const RaisedLabel = styled.label`
    position: relative;
    border: 0;
    background: var(--surface);
    box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
    transition: box-shadow 300ms ease,
    transform 1000ms ease,
    color 300ms ease,
    background 300ms ease,
    scale 300ms ease;


    &:hover {
        transform: translateY(1px);
        box-shadow: inset 3px 3px 7px var(--shadow-dark),
        inset -3px -3px 7px var(--shadow-light);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: inset 8px 8px 16px var(--shadow-pressed),
        inset -8px -8px 16px var(--shadow-light);
        transition-duration: 90ms;
    }
`;

const ContentRow = styled(Shell)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ContentColumn = styled(Shell)`
  display: grid;
  gap: 24px;
`;

const NarrowContent = styled(Shell)`
  display: grid;
  gap: 22px;
`;

const MainContent = styled.main`
  min-height: 100vh;
  color: var(--foreground);
  background:
    linear-gradient(115deg, var(--ambient-accent) 0%, transparent 38%),
    linear-gradient(180deg, var(--surface-strong) 0%, var(--background) 42%, var(--background-end) 100%);
`;

const TopBar = styled.header`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 228px;
  padding: 28px 0;
`;

const CompanyBlock = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
  border-radius: 28px;
  color: inherit;
  text-decoration: none;
`;

const Logo = styled.div`
  display: grid;
  width: 86px;
  height: 86px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 24px;
  color: #f6fbff;
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow: 14px 14px 28px var(--shadow-dark), -14px -14px 28px var(--shadow-light);
  font-size: 28px;
  font-weight: 800;
`;

const CompanyText = styled.div`
  min-width: 0;

  h1 {
    color: #14212c;
    font-size: 40px;
    line-height: 1;
  }

  p {
    max-width: 520px;
    margin-top: 10px;
    color: var(--muted);
    line-height: 1.45;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 32px;
    }
  }
`;

const PhoneLink = styled(RaisedAnchor)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  padding: 0 18px;
  border-radius: 18px;
  color: #173f4b;
  font-weight: 800;
  white-space: nowrap;

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
`;

const NavSection = styled.nav`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 76px;
  background: rgba(255, 255, 255, 0.2);
`;

const NavList = styled(Shell)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;
  min-height: 44px;
  min-width: 0;
  padding: 0 16px;
  border: 2px solid ${({ $active }) => ($active ? "var(--accent-strong)" : "transparent")};
  border-radius: 999px;
  color: #30485b;
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-align: center;
  transition:
    transform 300ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease,
    color 300ms ease,
    background-color 300ms ease;

  &::after {
    position: absolute;
    right: 18px;
    bottom: -10px;
    left: 18px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent-strong);
    content: "";
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: center;
    transition: transform 240ms ease;
  }

  &:hover {
    transform: translate3d(0, -2px, 0);
    border-color: #0b1c2d;
    box-shadow: 10px 12px 22px var(--shadow-dark), -10px -10px 22px var(--shadow-light);
  }

  &:active {
    transform: translate3d(0, 0, 0);
    box-shadow:
      inset 6px 6px 14px var(--shadow-pressed),
      inset -6px -6px 14px var(--shadow-light);
    transition-duration: 90ms;
  }
`;

const PromoSection = styled(BaseSection)`
  min-height: 324px;
  background: var(--dark-section);
`;

const PromoInner = styled(Shell)`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 32px;
  align-items: stretch;
  padding: 28px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const PromoCopy = styled.div`
  display: grid;
  align-content: center;
  gap: 18px;

  h2 {
    max-width: 680px;
    color: #f6fbff;
    font-size: 56px;
    line-height: 1;
  }

  p {
    color: rgba(246, 251, 255, 0.78);
    font-size: 24px;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 38px;
    }

    p {
      font-size: 19px;
    }
  }
`;

const PhotoPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 268px;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  background:
    linear-gradient(135deg, var(--ambient-accent-strong), transparent 55%),
    linear-gradient(145deg, var(--dark-section-elevated), var(--dark-section-deep));
  box-shadow: inset 12px 12px 28px rgba(0, 0, 0, 0.22), inset -10px -10px 24px rgba(255, 255, 255, 0.05);
`;

const AboutSection = styled(BaseSection)`
  min-height: 324px;
  padding: 42px 0;
`;

const SectionTitle = styled.h2`
  color: #14212c;
  font-size: 40px;
  line-height: 1.08;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

const AboutText = styled.div`
  display: grid;
  gap: 14px;
  max-width: 940px;

  p {
    color: #435566;
    font-size: 18px;
    line-height: 1.62;
  }
`;

const ProjectsSection = styled(BaseSection)`
  min-height: 324px;
  padding: 34px 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.16);
`;

const AnchorTarget = styled.span`
  position: absolute;
  top: 0;
`;

const SectionHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ProjectSlider = styled.div`
  position: relative;
  left: 50%;
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: visible;
`;

const ProjectSliderViewport = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  margin: -18px 0 -28px;
  padding: 26px clamp(16px, 3vw, 40px) 32px;
  cursor: grab;
  outline: none;
  touch-action: pan-y pinch-zoom;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const ProjectTrack = styled.div`
  display: flex;
  gap: 18px;
`;

const ProjectSlide = styled.article`
  display: grid;
  flex: 0 0 clamp(180px, 22vw, 232px);
  min-width: 0;
  min-height: 176px;
  place-items: center;
  gap: 16px;
  padding: 22px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);
  text-align: center;

  span {
    color: #2f4355;
    font-weight: 800;
    line-height: 1.35;
  }
`;

const IconBox = styled.span`
  display: grid;
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 18px;
  color: var(--accent-strong);
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);

  svg {
    width: 28px;
    height: 28px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
  }
`;

const SmallIconBox = styled(IconBox)`
  width: 44px;
  height: 44px;
  border-radius: 14px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const AdvantagesSection = styled(BaseSection)`
  min-height: 162px;
  padding: 26px 0;
`;

const AdvantagesGrid = styled(Shell)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Advantage = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 86px;
  padding: 18px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);

  b {
    color: #173f4b;
    line-height: 1.3;
  }
`;

const DirectionsSection = styled(BaseSection)`
  min-height: 162px;
  padding: 28px 0;
  background: rgba(255, 255, 255, 0.14);
`;

const DirectionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const DirectionItem = styled.article`
  display: flex;
  gap: 12px;
  min-width: 0;
  padding: 16px;
  border-radius: 20px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(222, 232, 241, 0.72)),
    var(--surface);
  box-shadow: 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light);

  b {
    display: block;
    color: #14212c;
    font-size: 14px;
    line-height: 1.25;
  }

  p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.35;
  }
`;

const ContactSection = styled(BaseSection)`
  min-height: 486px;
  padding: 44px 0;
`;

const ContactGrid = styled(Shell)`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCopy = styled.div`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent-strong);
    font-size: 20px;
    font-weight: 800;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 16px 16px 32px var(--shadow-dark), -16px -16px 32px var(--shadow-light);

  label {
    display: grid;
    gap: 8px;
    color: #30485b;
    font-size: 13px;
    font-weight: 800;
  }

  label.wide {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    width: 100%;
    min-width: 0;
    border: 0;
    border-radius: 16px;
    color: #14212c;
    background: var(--surface);
    box-shadow: inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light);
    font: inherit;
  }

  input {
    min-height: 48px;
    padding: 0 14px;
  }

  textarea {
    resize: vertical;
    min-height: 104px;
    padding: 14px;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const FormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;

  @media (max-width: 520px) {
    > * {
      width: 100%;
    }
  }
`;

const FileButton = styled(RaisedLabel)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  border-radius: 18px;
  color: #173f4b;
  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;

const SubmitButton = styled(RaisedButton)`
  min-height: 50px;
  padding: 0 24px;
  border-radius: 18px;
  color: #f7fbff;
  background: linear-gradient(145deg, var(--accent), var(--accent-dark) 70%);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: 34px 0;
  color: rgba(246, 251, 255, 0.82);
  background: var(--dark-section);
`;

const FooterInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: start;

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const FooterContent = styled.div`
  display: grid;
  gap: 10px;

  b {
    color: #f6fbff;
    font-size: 20px;
  }

  p,
  a {
    max-width: 980px;
    line-height: 1.5;
  }

  a {
    width: fit-content;
    color: var(--footer-link);
  }
`;

const ThemeSlot = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
