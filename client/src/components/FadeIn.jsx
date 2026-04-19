import useFadeIn from "../hooks/useFadeIn";

export default function FadeIn({ children, style }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity .6s ease, transform .6s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
